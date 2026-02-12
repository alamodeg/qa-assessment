import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(user: { username: string; password: string }) {
    await this.page.locator('[data-test="username"]').fill(user.username);
    await this.page.locator('[data-test="password"]').fill(user.password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  get errorMessage() {
    return this.page.locator('[data-test="error"]');
  }
}
