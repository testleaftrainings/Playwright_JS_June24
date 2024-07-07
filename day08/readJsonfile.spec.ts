import {test} from '@playwright/test'
import loginData from '../../data/loginData.json'
import fs from 'fs'

for(const data of loginData)
test(`Read data using json  file ${data.TestId}`,async({page})=>{        
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill(data.username);
     page.fill("#password",data.password);
    await page.locator(".decorativeSubmit").click();    
    await page.waitForTimeout(3000);
})

//set the file path

 const userData=   JSON.parse(fs.readFileSync("./data/loginData.json" ,'utf-8'))
for(const loginInfo of userData)
    test(`Read data using json parse ${loginInfo.TestId}`,async({page})=>{        
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill(loginInfo.username);
         page.fill("#password",loginInfo.password);
        await page.locator(".decorativeSubmit").click();    
        await page.waitForTimeout(3000);
    })