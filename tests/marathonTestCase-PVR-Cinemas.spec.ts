import { test, expect } from '@playwright/test';
test.use({permissions:['geolocation']})

test('PVR Cinemas - Ticket Booking', async ({ page }) => {

    await page.goto('https://www.pvrcinemas.com/');
  

    await page.getByRole('heading', { name: 'Chennai' }).click();
    await expect(page.locator(`//div[@class='now-movies']//div[@class='p-card-header']`).nth(0)).toBeEnabled();
    await page.locator(`//div[@class='now-movies']//div[@class='p-card-header']`).nth(0).click();
    await page.getByRole('button', { name: 'Book Now' }).click();
    await page.locator(`//div[@class='time-select ' and not (contains(@class,'seat-color-disable'))]`).nth(1).click();
    await page.getByRole('button', { name: 'Accept' }).click();
    await expect(page.getByRole(`heading`,{name:'Terms & Conditions'})).toBeVisible();
    await page.getByRole('button', { name: 'Accept' }).click();
    await page.locator(`//span[not (@class='seat-disable') and @class='seat-current-pvr']`).nth(0).click();
    await page.locator(`//span[not (@class='seat-disable') and @class='seat-current-pvr']`).nth(1).click();
    await page.getByRole('button', { name: 'Proceed' }).click();

    let grandTotal = await page.locator(`//h6[text()='Grand Total']/following-sibling::h6//span`).innerText();
    console.log(`Grand Total Amount to be Paid: ${grandTotal}`);




})