import test from "@playwright/test";
import { request } from "http";



test(`Network interception`,async({page})=>{
    
    await page.route("**/*.{png,jpg,jpeg}",route=>route.abort())
    await page.goto("https://www.testleaf.com/")
    await page.waitForTimeout(4000)
})


test.only(`Network incerpetion for headers`,async({page})=>{
    await page.route("/aura?preloadActions",async(route,request)=>{
        if(request.method()=="POST"){
            console.log(`Request Url:  ${request.url()}`)
           // delete Headers['Date']
           route.continue({
            // headers:{
            //     Date:""
            // }
           })
        }      
    })


    await page.goto("https:login.salesforce.com")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")   
    await page.click('.slds-icon-waffle') 
})


