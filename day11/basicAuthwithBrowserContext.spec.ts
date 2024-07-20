import {test,chromium} from '@playwright/test'

test.skip(`Basic Authentication`,async({browser})=>{
    const context=await browser.newContext({
        httpCredentials:{
            username:"admin",
            password:"testleaf",
            //origin:
        }
    })
    const page=await context.newPage();
    await page.goto("https://www.leafground.com/auth.xhtml")
    await page.getByText("Basic Auth",{exact:true}).click();
    await page.waitForTimeout(3000);
})


test(`Basic Auth using persistent Context` ,async()=>{


    const context=await chromium.launchPersistentContext("./userDataDir",{ httpCredentials:{
        username:"admin",
        password:"testleaf",
        //origin:
      }
    })

    const page=await context.newPage();
    await page.goto("https://www.leafground.com/auth.xhtml")
    await page.getByText("Basic Auth",{exact:true}).click();
    await page.waitForTimeout(6000);




})


test(`Basic Auth using persistent Context-2` ,async()=>{
    const context=await chromium.launchPersistentContext("./userDataDir",{ httpCredentials:{
        username:"admin",
        password:"testleaf",
        //origin:
      }
    })
    const page=await context.newPage();
    await page.goto("https://www.leafground.com/auth.xhtml")
    await page.getByText("Basic Auth",{exact:true}).click();
    await page.waitForTimeout(6000);




})