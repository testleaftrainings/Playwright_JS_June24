function userdetails(uname:string,pwd:string,emailId?:string):string{
   if(emailId){
    return `${uname} : ${pwd}  : ${emailId}`
}else{
    return `${uname} :${pwd}`
}
}

//uname and pwd-->deafult values 
//emailId ->optional Value

let user1=userdetails("Shan","123$")


let user2=userdetails("Nitin","123$","Nitin@gmail.com")

// console.log(user1)
console.log(user2)

// function worker(){
//     console.log(user1)
// }



