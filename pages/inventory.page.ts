import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryList: Locator;
  readonly firstItem: Locator;
  readonly header: Locator;
  readonly firstItemPrice: Locator;
  readonly firstItemImg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
    this.firstItem = page.locator('.inventory_item').first();
    this.header = page.locator('.header_secondary_container');
    this.firstItemPrice = page.locator('.inventory_item_price').first();
    this.firstItemImg = page.locator('.inventory_item_img').first();
  }

  async goto() {
    await this.page.waitForURL(/inventory/);
  }
}
