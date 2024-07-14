

# types of postman Variables:
    -Global Variable  - Common to workspace
    -Collection Variable -Specific to Collection
    -Environment Variable -Specific to Env 

 const browser = await chromium.launch({ headless: false, channel: "chrome" });   //creates an instance -->id 
    const browserContext = await browser.newContext();//using id-->open window 
     const page=await  browserContext.newPage()


APIRequestContext-->hold all the libraries of request 


{
    "id": "00QJ2000001kHfqMAE",
    "success": true,
    "errors": []
}

Response.id


{
    "result": {
      "parent": "",
      "made_sla": "true",
      "caused_by": "",
      "watch_list": "",
      "upon_reject": "cancel",
      "sys_updated_on": "2024-07-14 05:31:51",
      "child_incidents": "0",
      "hold_reason": "",
      "origin_table": "",
      "task_effective_number": "INC0010031",
      "approval_history": "",
      "number": "INC0010031",
      "resolved_by": "",
      "sys_updated_by": "admin",
      "opened_by": {
        "link": "https://dev198624.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441",
        "value": "6816f79cc0a8016401c5a33be04be441"
      },
      "user_input": "",
      "sys_created_on": "2024-07-14 05:31:51",
      "sys_domain": {
        "link": "https://dev198624.service-now.com/api/now/table/sys_user_group/global",
        "value": "global"
      },
      "state": "1",
      "route_reason": "",
      "sys_created_by": "admin",
      "knowledge": "false",
      "order": "",
      "calendar_stc": "",
      "closed_at": "",
      "cmdb_ci": "",
      "delivery_plan": "",
      "contract": "",
      "impact": "3",
      "active": "true",
      "work_notes_list": "",
      "business_service": "",
      "business_impact": "",
      "priority": "5",
      "sys_domain_path": "/",
      "rfc": "",
      "time_worked": "",
      "expected_start": "",
      "opened_at": "2024-07-14 05:31:51",
      "business_duration": "",
      "group_list": "",
      "work_end": "",
      "caller_id": "",
      "reopened_time": "",
      "resolved_at": "",
      "approval_set": "",
      "subcategory": "",
      "work_notes": "",
      "universal_request": "",
      "short_description": "",
      "close_code": "",
      "correlation_display": "",
      "delivery_task": "",
      "work_start": "",
      "assignment_group": "",
      "additional_assignee_list": "",
      "business_stc": "",
      "cause": "",
      "description": "",
      "origin_id": "",
      "calendar_duration": "",
      "close_notes": "",
      "notify": "1",
      "service_offering": "",
      "sys_class_name": "incident",
      "closed_by": "",
      "follow_up": "",
      "parent_incident": "",
      "sys_id": "0b86bc8f93df82103c7a32edfaba1014",
      "contact_type": "",
      "reopened_by": "",
      "incident_state": "1",
      "urgency": "3",
      "problem_id": "",
      "company": "",
      "reassignment_count": "0",
      "activity_due": "",
      "assigned_to": "",
      "severity": "3",
      "comments": "",
      "approval": "not requested",
      "sla_due": "",
      "comments_and_work_notes": "",
      "due_date": "",
      "sys_mod_count": "0",
      "reopen_count": "0",
      "sys_tags": "",
      "escalation": "0",
      "upon_approval": "proceed",
      "correlation_id": "",
      "location": "",
      "category": "inquiry"
    }
  }


  response.result.number
    response.result.sys_id


    Servicenow
      Request -->endPoint -->headers with basic authentication-->payload -->post and patch
       Request -->endPoint -->headers with basic authentication-->get and delete

    Salesforce
       request -->post-->generate token
       Request -->endPoint -->headers with bearer token-->payload -->post and patch
       Request -->endPoint -->headers with Bearer token-->get and delete