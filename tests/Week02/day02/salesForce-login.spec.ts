import {test, chromium, firefox, webkit} from "@playwright/test"

test("Test to launch a chrome browser", async() => {

const browser = await chromium.launch({channel:"msedge",headless:false}) //channels - chrome, msedge, (you cant do firefox)
const context = await browser.newContext()
const page = await context.newPage()

await page.goto("https://login.salesforce.com/?locale=in")
console.log(await page.url());

  console.log('Page Title:', await page.title());


await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com");
await page.locator(`#password`).fill("TestLeaf@2025");
await page.locator (`input[type='submit']`).click();

await page.waitForTimeout(3000)
})
