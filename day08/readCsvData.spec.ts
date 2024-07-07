
import {chromium, test} from "@playwright/test"
import { parse } from "csv-parse/sync";
import fs from 'fs';
import path from 'path';


const loginCrdentials=parse(fs.readFileSync("./data/userCredentials.csv"),{
    "columns":true,
    "skip_empty_lines":true,
    "skip_records_with_empty_values":true
})

//each data is considered as a single test

for(let data of loginCrdentials)
test(`Read data using csv file ${data.TestId} `,async({page})=>{        
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill(data.Username);
         page.fill("#password",data.Password);
        await page.locator(".decorativeSubmit").click();        
        await page.waitForTimeout(3000);
})
