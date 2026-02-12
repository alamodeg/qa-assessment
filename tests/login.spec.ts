import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('should login successfully with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Assertions más significativas
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
  await expect(page.locator('.inventory_item').first()).toBeVisible();
  await expect(page.locator('.header_secondary_container')).toHaveText(/Products/);
});
