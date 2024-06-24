import test, { chromium } from "@playwright/test";

test("Get the Count of Options", async () => {
    const browser = await chromium.launch({ headless: false });
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("DemosalesManager");
    await page.fill("#password", "crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("text=CRM/SFA").click();
    // await page.locator(`a[text="Leads"]`).click()
    // await page.click(`a[text="Create Lead"]`);     

    await page.getByRole('link', { name: 'Leads' }).click()
    await page.getByRole('link', { name: "Create Lead" }).click()
    await page.fill("#createLeadForm_companyName", "Testleaf")
    await page.fill("#createLeadForm_firstName", "Vidya")
    await page.fill("#createLeadForm_lastName", "R")

    //dropdown
    await page.selectOption("#createLeadForm_dataSourceId", { value: "LEAD_EMPLOYEE" })

    //located the element
    const ddSourceId = page.locator("#createLeadForm_dataSourceId > option");
    const ddCount = await ddSourceId.count();
    console.log(ddCount)
    console.log(await ddSourceId.nth(4).innerText());
    //innerText is to retreive the text from the dom -->validation
    await ddSourceId.first().click() //select the first option
    await ddSourceId.last().click() //last value of the multipl matches
    for (let index = 0; index < ddCount; index++) {
        //to retereive all the options under the 
        //if(index%2==0){
        console.log(await ddSourceId.nth(index).innerText())
        //  await ddSourceId.nth(index).click()
        //}
    }
    await page.waitForTimeout(3000);









})
