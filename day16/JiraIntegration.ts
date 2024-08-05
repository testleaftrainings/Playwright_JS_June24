

//endpoint url"https://vidya-bharathi.atlassian.net/rest/api/2/issue/"
//username
//password -apikey
//project key

import axios from "axios"

const url="https://vidya-bharathi.atlassian.net/rest/api/2/issue/"
const username="vidyar1926@gmail.com"
const apiKey ="ATATT3xFfGF0NCgL0rKueUS-0RN5Cc8QH2wLvKaRw6LeyFB_LqiToufA3GIMj5Btx8FlnU8f38dLCvmFbEuLWcQUQVJW4x4yvZ061YuWnb2Ep9_lDfVKHHpr8snjUCSO3fmE2iPo2PIABdstdVlMNF59uPlbaUeaAfK5WCW-s4Y6xlUWEUmpALc=AE654DB4"
const projectKey="PWJIRA"

 async function createIssue(summary:string,desc:string){
    const issueBody={        
            "fields":{
                "project":{
                    "key":projectKey
                },
                "summary":summary,
                "description": desc,
                "issuetype":{
                    "name":"Bug"
                            }           
            }
     }
const response=await axios.post(url,issueBody,{
    auth:{
        username:username,
        password:apiKey
    },
    headers:{
        "Content-Type":"application/json"
    }
})

  console.log("Creating issue type as Bug in jira")

}

//createIssue("Issue created through Pw ","Bug reported for the execution")
export {createIssue}