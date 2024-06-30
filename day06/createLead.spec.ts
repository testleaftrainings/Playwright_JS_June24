import {test,expect} from '@playwright/test'

test("Create Lead",async({page})=>{

    await page.goto("http://www.leaftaps.com/opentaps")
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    await page.locator("text=CRM/SFA").click();
    await page.getByRole('link',{name:'Leads'}).click()
    await page.getByRole('link',{name:"Create Lead"}).click()
    await page.fill("#createLeadForm_companyName", "Testleaf")
    await page.fill("#createLeadForm_firstName", "Vidya")
    await page.fill("#createLeadForm_lastName", "R")
    await page.click(".smallSubmit")
    const leadName=await page.locator("#viewLead_firstName_sp").innerText();
    expect(leadName).toContain("Vidya");






})