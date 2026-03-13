import {test, chromium, expect, firefox, webkit} from "playwright/test"

test("Login Test check", async()=>{
const browser = await chromium.launch({headless:false, channel:"chrome"});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://practice.automationtesting.in/my-account/");
console.log(page.url());
console.log(page.title());

await page.locator(`#reg_email`).fill('athi@gg.com');
await page.locator(`#reg_password`).fill('Test@1818&A');
await page.locator(`input[type='submit']`).nth(1).click();

await page.waitForTimeout(6000);
})