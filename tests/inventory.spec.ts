import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { USERS } from '../data/users';

test.describe('Inventory', () => {

  test('should display inventory products correctly', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(USERS.valid);

    await inventoryPage.goto();

    await expect(inventoryPage.inventoryList).toBeVisible();
    await expect(inventoryPage.firstItem).toBeVisible();
    await expect(inventoryPage.header).toHaveText(/Products/);
    await expect(inventoryPage.firstItemPrice).toBeVisible();
    await expect(inventoryPage.firstItemImg).toBeVisible();
  });

    test('should allow adding a product to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(USERS.valid);

    await inventoryPage.goto();
    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

});
