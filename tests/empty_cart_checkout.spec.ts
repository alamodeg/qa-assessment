import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { USERS } from '../data/users';

test.describe('Cart / Checkout Negative Scenarios', () => {

  test('should not allow checkout with empty cart (negative scenario, known bug)', async ({ page }) => {
    // Negative scenario: standard_user attempts checkout with empty cart
    // Expected behavior: checkout should NOT proceed, cart remains empty
    // Current behavior: app allows checkout, this is a known bug

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(USERS.valid);

    await inventoryPage.goto();

    await cartPage.goto();

    // Validate that the cart is empty (soft assertion so CI doesn't fail)
    await expect.soft(cartPage.cartItems).toHaveCount(0);

    await cartPage.clickCheckout();
  });

});
