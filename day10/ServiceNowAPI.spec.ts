import {test,expect} from "@playwright/test";



test(`Create new Incident in ServiceNow`,async({request})=>{

//const apiRequest= context.request;
// await page.request

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
   // console.log(await response.json())
    const resBody=await response.json();
    console.log(resBody.result.number)
    console.log(resBody.result.sys_id)
    })


    // test(`Get all the Incidents in ServiceNow`,async({request})=>{

    //     const response=await request.get(`https://dev198624.service-now.com/api/now/table/incident`,
        
    //     {   //username and password -->encoded to pass under authorization header
    //         "headers":{
    //             "Content-Type":"application/json",
    //             "Authorization":"Basic YWRtaW46QjZMSW94RHE9ciE5",
    //             //admin:B6LIoxDq=r!9
    //         },
    //     })

    //     console.log(await response.json())
    //     const resBody=await response.json();


    //   //  console.log(resBody.result.number)

    // })
    test(`Get specific Incident  in ServiceNow`,async({request})=>{

        const response=await request.get(`https://dev198624.service-now.com/api/now/table/incident/ed92e8d173d023002728660c4cf6a7bc`,
        
        {   //username and password -->encoded to pass under authorization header
            "headers":{
                "Content-Type":"application/json",
                "Authorization":"Basic YWRtaW46QjZMSW94RHE9ciE5",
                //admin:B6LIoxDq=r!9
            },
        })

        console.log(await response.json())
        const resBody=await response.json();
      //  console.log(resBody.result.number) fc68afea939742103c7a32edfaba10a7

    })


 test(`Update the record for specific Incident  in ServiceNow`,async({request})=>{

        const response=await request.patch(`https://dev198624.service-now.com/api/now/table/incident/ed92e8d173d023002728660c4cf6a7bc`,
        
        {   //username and password -->encoded to pass under authorization header
            "headers":{
                "Content-Type":"application/json",
                "Authorization":"Basic YWRtaW46QjZMSW94RHE9ciE5",
                //admin:B6LIoxDq=r!9
            },
            data:{
                "company":"Qeagle",
                "description":"Service Query"
            }

        })

        console.log(await response.json())
        const resBody=await response.json();
      //  console.log(resBody.result.number) fc68afea939742103c7a32edfaba10a7

    })

    
 test(`Delete the record for specific Incident  in ServiceNow`,async({request})=>{

    const response=await request.delete(`https://dev198624.service-now.com/api/now/table/incident/ed92e8d173d023002728660c4cf6a7bc`,
    
    {   //username and password -->encoded to pass under authorization header
        "headers":{
            "Content-Type":"application/json",
            "Authorization":"Basic YWRtaW46QjZMSW94RHE9ciE5",
            //admin:B6LIoxDq=r!9
        },
       

    })

   // console.log(await response.json())
    const resBody=await response.json();
    expect(response.statusText()).toBe("No Content")
  //  console.log(resBody.result.number) fc68afea939742103c7a32edfaba10a7

})




    
