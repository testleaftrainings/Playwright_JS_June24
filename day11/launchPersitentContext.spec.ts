import {test,chromium} from '@playwright/test'

test(`UsingPersistent Context`,async()=>{

    const context=await chromium.launchPersistentContext("./UserDatadir",{
        permissions:["notification"]
    })  //werewr2032432
    const page=await context.newPage();
    await page.goto("http://www.google.com")    
    await page.goto("http://www.leaftaps.com/opentaps")
})