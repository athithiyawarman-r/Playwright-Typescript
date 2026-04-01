import { test, expect } from '@playwright/test';

test('Service Now - Iphone 13 Pro Book', async ({ page }) => {

    await page.goto('https://dev367757.service-now.com/login');
  
    await page.locator(`#user_name`).fill(`admin`);
    await page.locator(`#user_password`).fill(`Ikh!hUn7*XJ2`);
    await page.locator(`#sysverb_login`).click();
    // await expect(page.getByRole('menuitem',{name: `All`})).toBeVisible();
    await page.getByRole('menuitem',{name: `All`}).click();

    await page.getByText(`Service Catalog`).click();

    const mainFrame = page.frameLocator(`[name="gsft_main"]`);

    await mainFrame?.getByRole('heading', { name: 'Mobiles' }).nth(1).click();

    await mainFrame?.getByRole('heading', { name: 'Apple iPhone 13 pro' }).click();

    await expect(mainFrame?.getByRole('heading', { name: `Request for Apple iPhone 13 pro`})).toBeVisible();

    await mainFrame?.locator(`//label[@class='radio-label' and text()='Yes']`).click();

    await mainFrame?.getByRole(`textbox`,{name: `    What was the original phone number?`}).fill(`8838171459`);

    await mainFrame?.locator(`//div[contains(@class,'form-group')]//select`).selectOption(`500MB [add $1.00]`);

    await mainFrame?.getByRole(`button`,{name: `Order Now`}).click();

    await expect(mainFrame?.locator(`//span[text()='Thank you, your request has been submitted']`)).toBeVisible();

    await page.screenshot({path:'Data/snap.png',fullPage:true})



    await page.waitForTimeout(3000)


})