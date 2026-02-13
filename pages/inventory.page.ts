import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryList: Locator;
  readonly firstItem: Locator;
  readonly header: Locator;
  readonly firstItemPrice: Locator;
  readonly firstItemImg: Locator;
  readonly cartBadge: Locator;
  readonly addToCartButton: Locator;
  readonly addToCartBikeLight: Locator;
  readonly addToCartBoltTShirt: Locator;
  readonly addToCartOnesie: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
    this.firstItem = page.locator('.inventory_item').first();
    this.header = page.locator('.header_secondary_container');
    this.firstItemPrice = page.locator('.inventory_item_price').first();
    this.firstItemImg = page.locator('.inventory_item_img').first();
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.addToCartBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.addToCartBoltTShirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    this.addToCartOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')
  }

  async goto() {
    await this.page.waitForURL(/inventory/);
  }

  async addBackpackToCart() {
    await this.addToCartButton.click();
  }
    async addBikeLightToCart() {
    await this.addToCartBikeLight.click();
  }

  async addBoltTShirtToCart() {
    await this.addToCartBoltTShirt.click();
  }

  async addOnesieToCart() {
    await this.addToCartOnesie.click();
  }
}
