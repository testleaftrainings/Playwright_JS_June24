import {test} from '@playwright/test'


test.beforeAll(`Before All the test`,async()=>{
    console.log("Connection to DB")
})

test.beforeEach(`Before Each test `, async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","DemoCsr")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")     
    await page.getByText("CRM/SFA",{exact:true}).click()
    await page.getByText("Leads", {exact:true}).click()
})

test(`Create Lead`,async({page})=>{
       test.info().annotations.push({type:"Author",description:"Vidya"},    
        {type:"Testcase",description:"Create Lead Funtionality"},
        {type:"issue",description: "http://leaftaps.com/crmsfa/control/leadsMain"}
       )
       test.slow();
        await page.getByRole("link", {name:"Create Lead"}).click()
        await page.fill("#createLeadForm_companyName","Qeagle")
        await page.fill("#createLeadForm_firstName","Vidya")
        await page.fill("#createLeadForm_lastName","R")
        await page.click(".smallSubmit");
})

test(`Edit Lead`,async({page})=>{
    test.step(`Clicked the Link findLeads`,async()=>{
    test.info().annotations.push({type:"Author",description:"Mounika"},    
        {type:"Testcase",description:"Edit Lead Funtionality"},
        {type:"issue",description: "Find Leads had an issue"}
       )
    await page.getByRole("link", {name:"Find Leads"}).click()
})
})

// test.afterEach(`After Each test`,async({page})=>{
//         console.log(await page.title())
// })

// test.afterAll(`After all test`,async()=>{
//     console.log("Closing the DB connection")
// })
