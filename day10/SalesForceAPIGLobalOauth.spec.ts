
import {test} from '@playwright/test'
import { getAccessToken } from './apiHelper'





let token:any
let instanceUrl:any
let LeadId:any
 
test(`Get the token from reusable function`,async()=>{
       const oauthData=await getAccessToken();
       token=oauthData.oauthToken;
       instanceUrl=oauthData.instUrl
})

test(`Create Lead in Salesforce`,async({request})=>{

    // const oauthData=await getAccessToken();
    //    token=oauthData.oauthToken;
    //    instanceUrl=oauthData.instUrl

    const response=await request.post(`${instanceUrl}/services/data/v61.0/sobjects/Lead`,{

        "headers":{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`,
        },
      
        data:{
            "Lastname":"Purushothaman",
            "Company":"HCL"
        }

    })

    console.log(response.status())
    console.log(response.statusText())
    const resBody=await response.json();
    LeadId=resBody.id;
    console.log(LeadId)

}

)

test(`Get the specific Lead record`,async({request})=>{

        const response=await request.get(`${instanceUrl}/services/data/v61.0/sobjects/Lead/${LeadId}`,{          
        "headers":{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`,
        },      
        })

        const resBody=await response.json();
        console.log(resBody)

})


