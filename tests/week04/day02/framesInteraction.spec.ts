import { test, chromium, firefox, webkit, expect } from "@playwright/test"

test("Learn how to interact with frames elements using url - LeafGround Frames", async ({ page }) => {

await page.goto(`https://leafground.com/frame.xhtml`);
const allFrames =  page.frames()
const count = allFrames.length;
console.log(count)

for(let i=0;i<allFrames.length; i++){
const frameTitle = await allFrames[i].title();

console.log(`${i} Frame title is: ${frameTitle}`)}

const frameUrl = await page.frame({url:`https://leafground.com/default.xhtml`})
await frameUrl?.locator(`#Click`).click();

/* ? => optional chaining will make sure that the frameurl value is not undefined or null */

/* ?=>optional chaining
if(frame){
await frame.locator("#Click").click()
}else{
console.log("Frame detached")
} */

})

test("Learn how to interact with frames elements using name - LeafGround Frames", async ({ page }) => {

await page.goto(`https://leafground.com/frame.xhtml`);

const frameUrl = await page.frame({name:`frame2`})
await frameUrl?.locator(`#Click`).click();

})

test("Learn how to interact with frames elements using locator - LeafGround Frames", async ({ page }) => {

await page.goto(`https://leafground.com/frame.xhtml`);
const frameRef = page.frameLocator(`[src="default.xhtml"]`);
await frameRef.locator(`#Click`).click();  
})

test("Learn how to interact with frames - Nested Frame - LeafGround Frames", async ({ page }) => {

await page.goto(`https://leafground.com/frame.xhtml`);
const outerframe = page.frameLocator(`[src="page.xhtml"]`);
const innerframe =  outerframe.frameLocator(`[src="framebutton.xhtml"]`)
await innerframe.locator(`#Click`).click();
})

