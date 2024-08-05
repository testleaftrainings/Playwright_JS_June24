import {test,TestInfo} from '@playwright/test'

import { createIssue } from './JiraIntegration'
import { logDefectinJira } from './testStatuswitJira.spec'


test(`Learning Custom Reports`,async({page},testInfo)=>{
  
    await page.goto("https:login.salesforce.com")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#passwor","Sales@123")
    await page.click("#Login")    
    await logDefectinJira(testInfo)//
   // createIssue("Creating Issue by Vidya","Bug reported through PW axios")
    
})