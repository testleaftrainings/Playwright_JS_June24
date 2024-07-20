
import {test} from '@playwright/test'


test.use({
    browserName:"firefox",
    viewport:{ width: 100, height: 100 },
    headless:false,
    storageState:"cred/sf.json"})
test(`Execute test from HomePage`,async({context,page})=>{
   
   // await context.clearCookies();
    await page.goto("home")
    console.log(await page.title())
    await page.waitForTimeout(3000);

})
