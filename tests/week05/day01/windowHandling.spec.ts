import { test, chromium, firefox, webkit, expect } from "@playwright/test"
import { listeners } from "node:cluster";


test(`Learn window handling`, async ({page, context}) => {

await page.goto(`https://www.flipkart.com/`);
// expect(page.getByRole(`button`,{name: `Request OTP`})).toBeVisible();
// expect(page.getByRole(`button`,{name: `✕`})).toBeVisible();
// page.getByRole(`button`,{name: `✕`}).click();


const searchBox = page.getByRole(`textbox`,{name: `Search for Products, Brands and More`}).first();
searchBox.fill("Phone");
searchBox.press(`Enter`);

const newPage = context.waitForEvent("page")
//listerner to capture the page that poped up while I made a click action
await page.locator(`//a//div[contains(@class,'col')]/div[text()]`).first().click();
//action
const childPage = await newPage

await childPage.waitForLoadState("domcontentloaded");

console.log( "\nMainPage: " + await page.title())
console.log( "\nChildPage: " + await childPage.title())

page.bringToFront();

const prod2Name = await page.locator(`//a//div[contains(@class,'col')]/div[text()]`).nth(2).innerText();

await page.locator(`//a//div[contains(@class,'col')]/div[text()]`).nth(2).click();

console.log( "\n2nd Product Name: " + prod2Name)

await page.waitForTimeout(3000)

})