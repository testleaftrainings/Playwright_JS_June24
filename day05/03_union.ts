//union and intersection

//union type -->assign multiple datatype to the variable

type userId= string|number

let user:userId="emp1233"
let pwd:userId=1234

// function fnName():retunType{
//     retun value
// }


function add(a:number,b:number):void{
    console.log(a+b)
}

function sub(a:number,b:number):number{
    return a-b;
}

type suportedBrowser="chrome"|"Firefox"

function launchBrowser(browserName:suportedBrowser){ 
    if(browserName==="chrome"){
        console.log("Launch chrome browser")
    }
    else {
        console.log("Launch firefox browser")
    }
}
launchBrowser("Firefox")



//intersction type

type Employee={empid:number,empName:string}

type Department={deptName:string}

type EmployeeDetails=Employee & Department

let emp:EmployeeDetails={empid:123,empName:"Vidya",deptName:"QA"}

type stringArray=string[]

function getData():stringArray{
    return ["UerName","Password"]
}

//type arr=(string & number)[]

type arr1=(string | number)[]
function fetchData():arr1{
 return [123,567,"hello"]     
}