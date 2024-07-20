import {test} from '@playwright/test'

test(`Learn to skip Login`,async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")   
    await page.context().storageState({path:"cred/sf.json"})
    
})