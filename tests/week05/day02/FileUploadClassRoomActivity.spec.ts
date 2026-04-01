import { test, chromium, firefox, webkit, expect } from "@playwright/test"
import path from 'path'

test(`Learn to handle file download`, async ({page, context}) => {

await page.goto('https://leafground.com/file.xhtml;jsessionid=node0qmdifo8brour1457q9ij2a2it14242458.node0');


await page.locator('(//input[@type="file"])[2]').setInputFiles([
'Data/snap.png',
'Data/Feb28.png'
]);

await page.locator( `//span[text()='Upload']`).click();

await page.waitForTimeout(3000)

})