import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { USERS } from '../data/users';

test.describe('Checkout Flow', () => {

  test('single product checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(USERS.valid);

    await inventoryPage.goto();
    await inventoryPage.addBackpackToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await cartPage.goto();
    await expect(cartPage.cartItems).toHaveCount(1);
    await cartPage.clickCheckout();

    await checkoutPage.fillInfo({
      firstName: 'Alvaro',
      lastName: 'Tester',
      zipCode: '4000'
    });
    await checkoutPage.continue();
    await checkoutPage.finish();

    await expect(checkoutPage.confirmationMessage).toHaveText(/Thank you for your order!/);
  });

  test('multi-product checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(USERS.valid);

    await inventoryPage.goto();

    await inventoryPage.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await inventoryPage.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await inventoryPage.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

    await expect(inventoryPage.cartBadge).toHaveText('3');

    await cartPage.goto();
    await expect(cartPage.cartItems).toHaveCount(3);

    await cartPage.clickCheckout();

    await checkoutPage.fillInfo({
      firstName: 'Alvaro',
      lastName: 'Tester',
      zipCode: '4000'
    });
    await checkoutPage.continue();

    await checkoutPage.finish();

    await expect(checkoutPage.confirmationMessage).toHaveText(/Thank you for your order!/);
  });

});