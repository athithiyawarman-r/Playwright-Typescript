import { test, chromium, firefox, webkit, expect } from "@playwright/test"
import { listeners } from "node:cluster";

//method 1
test(`Learn window handling Multiple Pages Method 1`, async ({page, context}) => {

await page.goto(`https://leafground.com/window.xhtml`);

//desctructuring of Array (speed and concurrent approach) Recommended to use when switching windows
//Promise.all
await Promise.all ([context.waitForEvent("page"), page.locator(`//span[text()='Open Multiple']`).click()])

const [parentPage, childPage, childPage2] = context.pages();

await childPage.waitForLoadState(`domcontentloaded`)
await childPage2.waitForLoadState(`domcontentloaded`)

console.log( "\parentPage: " + await parentPage.title())
console.log( "\nChildPage: " + await childPage.title())
console.log( "\childPage2: " + await childPage2.title())


await page.waitForTimeout(3000)

})



//Method 2

test(`Learn window handling Multiple Pages Method 2`, async ({page, context}) => {

await page.goto(`https://leafground.com/window.xhtml`);

//desctructuring of Array (speed and concurrent approach) Recommended to use when switching windows
//Promise.all
await Promise.all ([context.waitForEvent("page"), page.locator(`//span[text()='Open Multiple']`).click()])

const AllPage = context.pages();

await AllPage[1].waitForLoadState(`domcontentloaded`)
await AllPage[2].waitForLoadState(`domcontentloaded`)

console.log( "\parentPage: " + await AllPage[0].title())
console.log( "\nChildPage: " + await AllPage[1].title())
console.log( "\childPage2: " + await AllPage[2].title())


await page.waitForTimeout(3000)

})