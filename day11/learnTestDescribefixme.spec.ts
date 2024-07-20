
import {test} from '@playwright/test'

//Group1

test.describe(`The test has bug to be fixed`,async()=>{
    //fixme -->skip the execution and gives the information that the test has issue to be fixed

test(`Login with Valid user`,async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")   

})
test.fixme(`Login with invalid user`,async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@122")
    await page.click("#Login")   

})

})

test.describe(`Login Functionality for leaftaps`,async()=>{

    test(`Login with Valid user`,async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("DemosalesManager");
         page.fill("#password","crmsfa");
        await page.locator(".decorativeSubmit").click();
    })
    test(`Login with invalid user`,async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("DemosalesManager");
         page.fill("#password","crmsf");
        await page.locator(".decorativeSubmit").click();
    })
    
    })