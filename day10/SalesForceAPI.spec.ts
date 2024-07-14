
import {test} from '@playwright/test'


let token:any
let instanceUrl:any
let LeadId:any

test(`Generate Oauth Token`,async({request})=>{

      const response=  await request.post(`https://login.salesforce.com/services/oauth2/token`,
            {
                "headers":{
                    "Content-Type":"application/x-www-form-urlencoded",
                   "Connection":"keep-alive"
                },
                form:{
                    "grant_type":"password",
                    "client_id":"3MVG9pRzvMkjMb6lZlt3YjDQwe0hk0f5ZPyWD38tfPYQ75KXUzZBGzM_c7I0o3yc6ua1IUk6lEQIy4U2sByrg",
                    "client_secret":"79FFF874D54193B377A60354C71CBBE83120AD28A5D6BC536D2F68C94645DE98",
                    "username":"vidyar@testleaf.com",
                    "password":"Sales@123"
                }      
        })

         const resBody=await response.json();
         token=resBody.access_token
         instanceUrl=resBody.instance_url;

        //  console.log(token)
        //  console.log(instanceUrl)

})

test(`Create Lead in Salesforce`,async({request})=>{

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


