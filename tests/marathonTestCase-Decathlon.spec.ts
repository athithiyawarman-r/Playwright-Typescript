// Test Steps
// 1. Launch the browser and navigate to https://www.decathlon.in/
// 2. Verify the Decathlon homepage is displayed
// 3. Click on the Search box
// 4. Enter the product name “Shoes”
// 5. Press Enter or select a suggestion from the dropdown
// 6. Verify the product listing page is displayed
// 7. Click on the Sport filter dropdown
// 8. Select Running from the Sport dropdown
// 9. Click on the Gender filter dropdown
// 10. Select Men
// 11. Click on the Size filter dropdown
// 12. Select size UK 10
// 13. Click on the Sort By dropdown and choose 'Highest Discount'
// 14. Select a price range (■1000 – ■3000)
// 15. From the filtered results, click on the first available product
// 16. On the product details page, select Size – UK 10
// 17. Click on the Add to Cart button
// 18. Verify that the product is successfully added to the car


import { test, expect } from '@playwright/test';

test('Decathlon - Ordering a Shoe', async ({ page }) => {
 

    await page.goto('https://www.decathlon.in/');
  

    
    await expect(page.locator(`//span[@class='!mr-1']/..`).nth(0)).toBeEnabled();
    await page.locator(`//span[@class='!mr-1']/..`).nth(0).click();
    await page.locator(`//span[@class='!mr-1']/..`).nth(0).type("Shoes");
    await expect(page.locator(`//span[text()='Explore all products matching']/..`)).toBeVisible();
    await page.locator(`//span[text()='Explore all products matching']/..`).click();
    await expect(page.locator(`//b[text()='Filters']`)).toBeVisible();

    //Dropdown Function
    async function checkbox(option: string){

        try{
        await expect(page.locator(`//span[@class='aisRefinementListLabelText' and contains(text(),'${option}')]`)).toBeEnabled();
        await page.locator(`//span[@class='aisRefinementListLabelText' and contains(text(),'${option}')]`).click();
        }
        catch{
          await expect(page.locator(`//span[@class='aisRefinementListLabelText' and contains(text(),'${option}')]`).nth(0)).toBeEnabled();
        await page.locator(`//span[@class='aisRefinementListLabelText' and contains(text(),'${option}')]`).nth(0).click();
        }
        }

    await checkbox('Sport shoes')
    await checkbox('Men')
     await checkbox('9.5')
     await checkbox('10% and below')

      await expect(page.getByRole(`button`,{name: `addToCart`}).nth(0)).toBeEnabled();
      await page.getByRole(`button`,{name: `addToCart`}).nth(0).click();
      await expect(page.locator(`//div[contains(@class,'lg:overflow-y-aut')]`)).toBeVisible(); 
      let productBrand = await page.locator(`//div[contains(@class,'lg:overflow-y-aut')]//div[contains(@class,'font-semibold')]`).innerText();
      await page.locator(`//div[text()='9.5']`).click();
      await page.getByRole(`button`,{name: `ADD TO CART`}).click();
      await page.getByRole(`link`,{name: `cart`}).click();

      await expect(page.locator(`//span[@data-test-id='text:cart-product-brand' and text()='${productBrand}']`)).toBeVisible();
      
})