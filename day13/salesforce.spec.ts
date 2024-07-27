import {test} from '@playwright/test'
import { SalesLogin } from './salesloginfuntionality';

test(`Login with class reference`,async({page})=>{
        const loginPage=new SalesLogin(page);      
        await loginPage.enterCredentials();
        await loginPage.verifyLogin()
        

})