import {test, chromium, firefox, webkit,expect} from "@playwright/test"
import dotenv from "dotenv"

let envName = process.env.envFileName
//Configure envName in Terminal = $env:envFilename="prod"

dotenv.config({path:`Data/${envName}.env`})


test(`Env file Handling`, async({page}) => {

    await page.goto(process.env.BaseUrl!);


    await page.locator(`//input[@id="username"]`).fill(process.env.LF_Username!);


    await page.locator(`//input[@id="password"]`).fill(process.env.LF_Password!);

    await page.locator(`//input[@class="decorativeSubmit"]`).click();


    await page.locator(`//a[contains(text(),"CRM")]`).click();

})

