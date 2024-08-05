import {test,chromium, devices} from '@playwright/test'


test(`DeviceEmulation`,async()=>{
   const browser=await chromium.launch()
    const context=await browser.newContext({
     ...devices['iPad (gen 6) landscape'],
    geolocation:{
        latitude:48.87,
        longitude:2.35,
    },
    permissions:['geolocation']
    })    
    const page=await context.newPage();
        await page.goto("http://www.testleaf.com")

})