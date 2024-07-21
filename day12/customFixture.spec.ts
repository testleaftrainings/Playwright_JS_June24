import {test as customTest} from '@playwright/test'
//variable test assign new functionality -->to create custom fixture
//test.extend(newFixture)

const test=customTest.extend({loginFixture:async({page},use)=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","DemoCsr")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")     
    await page.getByText("CRM/SFA",{exact:true}).click()
    await page.getByText("Leads", {exact:true}).click()   
    await use(page);
}
});

export {test}