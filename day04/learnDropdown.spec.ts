import {chromium, test} from "@playwright/test"

test("Link and Dropown Locators",async()=>{
        const browser= await chromium.launch({headless:false})  ;
        const browserContext=await browser.newContext();
        const page= await browserContext.newPage();
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("DemosalesManager");
        await page.fill("#password","crmsfa");
        await page.locator(".decorativeSubmit").click();
        await page.locator("text=CRM/SFA").click();  
        // await page.locator(`a[text="Leads"]`).click()
        // await page.click(`a[text="Create Lead"]`);     

        await page.getByRole('link',{name:'Leads'}).click()
        await page.getByRole('link',{name:"Create Lead"}).click()
        await page.fill("#createLeadForm_companyName","Testleaf")
        await page.fill("#createLeadForm_firstName","Vidya")
        await page.fill("#createLeadForm_lastName","R")

        //dropdown
        await page.selectOption("#createLeadForm_dataSourceId",{value:"LEAD_EMPLOYEE"})
        await page.waitForTimeout(3000);
        await page.selectOption("#createLeadForm_dataSourceId",{label:"Existing Customer"})
        await page.waitForTimeout(3000);
        await page.selectOption("#createLeadForm_dataSourceId",{index:3})   //index 0 -->number
        await page.waitForTimeout(3000);



})

test("Playwright Locators",async()=>{
        const browser= await chromium.launch({headless:false})  ;
        const browserContext=await browser.newContext();
        const page= await browserContext.newPage();
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.getByLabel("Username").fill("DemoSalesManager")
        await page.getByLabel("Password").fill("crmsfa")    
        await page.locator(".decorativeSubmit").click();
        await page.locator("text=CRM/SFA").click();  
        // await page.locator(`a[text="Leads"]`).click()
        // await page.click(`a[text="Create Lead"]`);     
        await page.getByRole('link',{name:'Leads'}).click()
        await page.getByRole('link',{name:"Create Lead"}).click()
       


})