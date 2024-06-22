import {test,  chromium } from "@playwright/test";



test("Launch the browser",async()=>{

    //creating instance for the chromium browser to be launched
     //by default playwright executes in headless mode //ui will not be visible

    const browser=  await chromium.launch({headless:false,channel:"chrome"});   //creates an instance -->id 
    const browserContext=await browser.newContext();//using id-->open window 
    const page=await browserContext.newPage()// in window -->creates a tab
    await page.goto("https://www.google.com")
    await page.waitForTimeout(6000);



    const browserContext2=await browser.newContext();//using id-->open window 
    const page2=await browserContext2.newPage()// in window -->creates a tab
    await page2.goto("https://www.leafground.com/dashboard.xhtml")
    await page2.waitForTimeout(4000);
    await page2.close();
    await browserContext2.close();




    
})