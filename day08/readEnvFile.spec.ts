import {test} from '@playwright/test'
import dotenv from 'dotenv'

//const environment=process.env.NODE_ENV || "prod"
dotenv.config({path:`./data/.env`});

test(`Read data using env file`,async({page})=>{     
    
    //to read the data 
    const url= process.env.BASE_URL as string;
    const uname=process.env.APP_Username as string;
    const pwd=process.env.APP_Password as string;


    await page.goto(url)
    await page.locator("#username").fill(uname);
     page.fill("#password",pwd);
    await page.locator(".decorativeSubmit").click();        
    await page.waitForTimeout(3000);
})