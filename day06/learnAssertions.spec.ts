import {test,expect} from '@playwright/test'

test("Learning assertion",async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123");
    await page.click("#Login");
    await page.waitForLoadState('domcontentloaded')
    const title=await page.title();
    console.log(title);
   // expect(title).toContain("Home | Salesforce");  //non retrying assertion
   await expect.soft(page).toHaveTitle("Home | Salesforce")
 //5s  --polling fr -->0.5 sec
//clicking 



})


