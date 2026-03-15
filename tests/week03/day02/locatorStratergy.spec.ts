import { test, chromium, firefox, webkit, expect } from "@playwright/test"

test("Learn Playwright Locators", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in")

    await expect(page.getByLabel(`Username`,{exact: true})).toBeVisible(); // label tag

    await page.getByRole(`textbox`,{name: `Username`}).fill("dilipkumar.rajendran@testleaf.com");
    //    await page.getByRole(`textbox`,{name: `Username`}).nth(1).fill("dilipkumar.rajendran@testleaf.com");
    // If the same name has multiple occurances in the page
    await page.getByRole(`textbox`,{name: `Password`}).fill("TestLeaf@2025");
    await page.getByRole(`button`,{name: `Log In`}).click();

    await page.getByTitle("App Launcher", {exact:true}).click(); //title attribute
    await page.waitForLoadState('domcontentloaded');
    await page.getByText(`View All`,{exact: true}).nth(2).click();
    await page.getByPlaceholder(`Search apps or items...`,{exact: true}).fill("Leads");
    await page.waitForTimeout(2000);
    await expect(page.getByRole(`link`,{name: "Leads", exact:true})).toBeVisible();        
    await page.getByRole(`link`,{name: "Leads"}).click();
    await expect(page.getByRole(`heading`,{name: "Leads", exact:true})).toBeVisible();



})