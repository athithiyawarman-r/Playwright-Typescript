import { test, chromium, firefox, webkit, expect } from "@playwright/test"
test.use({permissions:['geolocation']})

test("Learn to handle frames - Service Now", async ({ page }) => {

await page.goto(`https://developer.servicenow.com/dev.do`);
const allFrames =  page.frames()
const count = allFrames.length;
console.log(count)

for(let i=0;i<allFrames.length; i++){
const frameTitle = await allFrames[i].title();

console.log(`${i} Frame title is: ${frameTitle}`)}
})



// test("Learn to handle frames - OneIndia", async ({ page }) => {

// await page.goto(`https://oneindia.com/`);
// const allFrames =  await page.frames()
// const count = allFrames.length;
// console.log(count)



// })