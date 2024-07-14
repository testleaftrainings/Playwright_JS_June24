
import {chromium} from '@playwright/test'

async function getAccessToken(){
      
       const browser=await chromium.launch();
       const browserContext=await browser.newContext()
       const apiRequestContext=browserContext.request;

       let grantType="password"
       

       const response=await apiRequestContext.post(`https://login.salesforce.com/services/oauth2/token`,
            {
                "headers":{
                    "Content-Type":"application/x-www-form-urlencoded",
                   "Connection":"keep-alive"
                },
                form:{
                    "grant_type":grantType,
                    "client_id":"3MVG9pRzvMkjMb6lZlt3YjDQwe0hk0f5ZPyWD38tfPYQ75KXUzZBGzM_c7I0o3yc6ua1IUk6lEQIy4U2sByrg",
                    "client_secret":"79FFF874D54193B377A60354C71CBBE83120AD28A5D6BC536D2F68C94645DE98",
                    "username":"vidyar@testleaf.com",
                    "password":"Sales@123"
                }      
        })

      const generateToken=  await response.json();
      console.log(generateToken)
      return {
          oauthToken:generateToken.access_token,
          instUrl:generateToken.instance_url
      }

}
export {getAccessToken};