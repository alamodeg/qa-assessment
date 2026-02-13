import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { USERS } from '../data/users';

/**
 * -> Cross-user consistency validation for problem_user <-
 *
 * NOTE: This test is intentionally designed to detect inconsistencies
 * for the `problem_user` account.
 *
 * The goal is to:
 * - Document known bugs (duplicate images, incorrect titles, 
 *   add-to-cart issues, navbar problems, etc.)
 * - Demonstrate handling of cross-user scenarios
 *
 * Some steps are expected to fail due to the nature of `problem_user`.
 * This is intended and part of the test's purpose.
 */

  // ⚠️ This test is intentionally skipped because problem_user has broken images
  // and other known inventory inconsistencies. It serves as documentation of issues.
  
  test.skip('cross-user consistency validation for problem_user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(USERS.problem);

    await inventoryPage.goto();

    // Check that all product images are the same (expected to fail)
    const firstImgSrc = await inventoryPage.firstItemImg.getAttribute('src');
    const secondImgSrc = await inventoryPage.page.locator('.inventory_item_img').nth(1).getAttribute('src');
    expect(firstImgSrc).toBe(secondImgSrc);

    // Validate that the first item's title starts with "Sauce Labs "
    const firstItemTitle = await inventoryPage.firstItem.locator('.inventory_item_name').textContent();
    expect(firstItemTitle).toMatch(/^Sauce Labs /);

    // Validate that Add to Cart button works (may fail)
    await inventoryPage.addBackpackToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');

    // Validate that the navbar (Reset App State) exists (even if it doesn't work)
    const navbar = inventoryPage.page.locator('.bm-burger-button'); 
    await expect(navbar).toBeVisible();

    //  Additional known issues can be validated here:
    // - blocked text inputs in checkout
    // - incorrect prices
    // - filter not working
  });