import {test} from '@playwright/test'


test("LearnFixtures",async({page})=>{
// const browser=await chromium.launch({headless:false}) 
//  const browserContext=await browser.newContext();
//  const page=await browserContext.newPage();
 //window and open the tab
 await page.goto("http://www.leaftaps.com/opentaps")
})

//Fixtures -->predefined set of code to enhance your script