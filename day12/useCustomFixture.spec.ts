import {test} from './customFixture.spec'

test(`Create Lead with Fixture configuration`,async({loginFixture})=>{
    await loginFixture.getByRole("link", {name:"Create Lead"}).click()
    await loginFixture.fill("#createLeadForm_companyName","Qeagle")
    await loginFixture.fill("#createLeadForm_firstName","Vidya")
    await loginFixture.fill("#createLeadForm_lastName","R")
    await loginFixture.click(".smallSubmit");
})