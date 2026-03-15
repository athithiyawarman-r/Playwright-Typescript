import {test, chromium, firefox, webkit,expect} from "@playwright/test"

test("Test to launch a chrome browser", async() => {

const browser = await chromium.launch({channel:"msedge",headless:false}) //channels - chrome, msedge, (you cant do firefox)
const context = await browser.newContext()
const page = await context.newPage()

await page.goto("https://login.salesforce.com/?locale=in")

await page.locator(`//input[@id='username']`).fill("dilipkumar.rajendran@testleaf.com");
await page.locator(`//input[@name='pw']`).fill("TestLeaf@2025");
await page.locator (`input[type='submit']`).click();
await expect(page.locator(`//span[text()='Home']`)).toBeVisible();

await page.waitForTimeout(3000)
})
