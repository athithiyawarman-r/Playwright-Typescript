import {test, chromium, firefox, webkit,expect} from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from "fs" //File system


let records1:any[] = parse(fs.readFileSync("Data/Login.csv"),{columns:true,skip_empty_lines:true})


for( let csvReader of records1){
test(`CSV Handling ${csvReader.TCaseID}`, async({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');


    await page.locator(`//input[@id="username"]`).fill(csvReader.Username);


    await page.locator(`//input[@id="password"]`).fill(csvReader.Password);

    await page.locator(`//input[@class="decorativeSubmit"]`).click();


    await page.locator(`//a[contains(text(),"CRM")]`).click();

})
}
