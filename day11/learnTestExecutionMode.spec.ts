
import {test} from '@playwright/test'

//Group1  

test.describe.serial(`Login Functionality for Salesforce`,async()=>{  
   //test.describe.configure({mode:"serial"});  
test(`Login with Valid user`,async({page})=>{  //test 1
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")   
});
test(`Login with invalid user`,async({page})=>{  //test 2
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@122")
    await page.click("#Login")   

});
   
})


//Group 2 
test.describe(`Login Functionality for leaftaps`,async()=>{
    test.describe.configure({mode:"parallel"});  
    test(`Login with Valid user`,async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("DemosalesManager");
         page.fill("#passwor","crmsfa");
        await page.locator(".decorativeSubmit").click();
    })
    test(`Login with invalid user`,async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("DemosalesManager");
         page.fill("#password","crmsf");
        await page.locator(".decorativeSubmit").click();
    })
    
    })