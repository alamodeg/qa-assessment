import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipCodeInput: Locator;
  readonly continueButton: Locator;

  readonly finishButton: Locator;
  readonly totalLabel: Locator;

  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');

    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.zipCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');

    this.finishButton = page.locator('[data-test="finish"]');
    this.totalLabel = page.locator('.summary_total_label');

    this.confirmationMessage = page.locator('.complete-header');
  }

  async goto() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async fillInfo({ firstName, lastName, zipCode }: { firstName: string; lastName: string; zipCode: string }) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zipCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }
}
