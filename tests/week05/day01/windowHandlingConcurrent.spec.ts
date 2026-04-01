import { test, chromium, firefox, webkit, expect } from "@playwright/test"
import { listeners } from "node:cluster";


test(`Learn window handling concurrent mode`, async ({page, context}) => {

await page.goto(`https://www.flipkart.com/`);

const searchBox = page.getByRole(`textbox`,{name: `Search for Products, Brands and More`}).first();
searchBox.fill("Phone");
searchBox.press(`Enter`);

//desctructuring of Array (speed and concurrent approach) Recommended to use when switching windows
//Promise.all
const [childPage] = await Promise.all ([context.waitForEvent("page"), page.locator(`//a//div[contains(@class,'col')]/div[text()]`).first().click()])
await childPage.waitForLoadState("domcontentloaded");


console.log( "\nMainPage: " + await page.title())
console.log( "\nChildPage: " + await childPage.title())

page.bringToFront();

const prod2Name = await page.locator(`//a//div[contains(@class,'col')]/div[text()]`).nth(2).innerText();

await page.locator(`//a//div[contains(@class,'col')]/div[text()]`).nth(2).click();

console.log( "\n2nd Product Name: " + prod2Name)

await page.waitForTimeout(3000)

})