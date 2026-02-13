import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { USERS } from '../data/users';

test.describe('Login', () => {

  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(USERS.valid);

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(USERS.invalid);

    await expect(loginPage.errorMessage)
      .toContainText('Epic sadface: Username and password do not match any user in this service');
  });

    test('should show error when locked out user tries to login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(USERS.lockedOut);

    await expect(loginPage.errorMessage)
      .toContainText('Epic sadface: Sorry, this user has been locked out.');
    
    await expect(page).not.toHaveURL(/inventory/);
  });

});
