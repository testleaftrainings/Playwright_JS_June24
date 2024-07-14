import {test,expect} from "@playwright/test";


let sysid:any;


test(`Create new Incident in ServiceNow`,async({request})=>{


    const response=await request.post(`https://dev198624.service-now.com/api/now/table/incident`,
        
        {   //username and password -->encoded to pass under authorization header
            "headers":{
                "Content-Type":"application/json",
                "Authorization":"Basic YWRtaW46QjZMSW94RHE9ciE5",
                //admin:B6LIoxDq=r!9
            },
            data:{  //payload /body sent along with request
                "short_description":"Creating incident through Playwright API"
            }

        })

    console.log(response.status())
    console.log(response.statusText())  
    const resBody=await response.json();
    console.log(resBody.result.number)
    sysid=resBody.result.sys_id
    
    })


    test(`Get specific Incident  in ServiceNow`,async({request})=>{

        const response=await request.get(`https://dev198624.service-now.com/api/now/table/incident/${sysid}`,
        
        {   //username and password -->encoded to pass under authorization header
            "headers":{
                "Content-Type":"application/json",
                "Authorization":"Basic YWRtaW46QjZMSW94RHE9ciE5",
                //admin:B6LIoxDq=r!9
            },
        })

        console.log(await response.json())
        const resBody=await response.json();
       })


 test(`Update the record for specific Incident  in ServiceNow`,async({request})=>{

        const response=await request.patch(`https://dev198624.service-now.com/api/now/table/incident/${sysid}`,
        
        {   //username and password -->encoded to pass under authorization header
            "headers":{
                "Content-Type":"application/json",
                "Authorization":"Basic YWRtaW46QjZMSW94RHE9ciE5",
                //admin:B6LIoxDq=r!9
            },
            data:{
                "company":"Testleaf",
                "description":"Service Query"
            }
        })
        console.log(await response.json())
        const resBody=await response.json();
        console.log(resBody.result.company)
     

    })

    
 test(`Delete the record for specific Incident  in ServiceNow`,async({request})=>{

    const response=await request.delete(`https://dev198624.service-now.com/api/now/table/incident/${sysid}`,
    
    {   //username and password -->encoded to pass under authorization header
        "headers":{
            "Content-Type":"application/json",
            "Authorization":"Basic YWRtaW46QjZMSW94RHE9ciE5",
            //admin:B6LIoxDq=r!9
        },
       
    })

    console.log(response.statusText())
    expect(response.statusText()).toBe("No Content")
  

})




    
