import { test, chromium, firefox, webkit, expect } from "@playwright/test"
import path from 'path'

test(`Learn to handle file upload`, async ({page, context}) => {
await page.goto('https://the-internet.herokuapp.com/upload');
const upload = await page.locator(`//input[@type='file']`).nth(0);

await upload.setInputFiles(`Data/snap.png`)

const filePromise = await page.waitForEvent(`filechooser`)

await page.locator( `[id='drag-drop-upload']`).click();

const fupload  = await filePromise

await fupload.setFiles(`Data/snap.png`)

await page.waitForTimeout(3000)
})

test.only(`Learn to handle file upload - Non input tag`, async ({page, context}) => {
await page.goto('https://the-internet.herokuapp.com/upload');


const filePromise = page.waitForEvent(`filechooser`)

await page.locator( `[id='drag-drop-upload']`).click();

const fupload  = await filePromise

await fupload.setFiles(`Data/snap.png`)

await page.waitForTimeout(3000)
})