
//Function declaration -->declare the function with some logic into it
test();

function test(){
    console.log("From Function declaration")
   // return "Function"
}

// let sol=test();
// console.log(sol)

//Function Expression
// exp();  Hoisting will not happen

let exp= function fnExp(username){
    var pwd="123";
    console.log("Function Expression" +username)
}

exp("vidya");


//Hoisting -->bring dec to  the top 

//Anonymous Funtion

 const result=function (firstname){
    console.log("From Anaoymous function")
 }
 result();

//IIF -->Immediately invoked function  --> react developers

 (function (firstname,lastname){
    console.log("From IIF function" +firstname)
 })
 ("Arun","Kumar");
//Arrow function

const arrow= username=>{
    console.log("Using Arrow function")
    console.log(username)}
arrow("Nalini")

const credentials= (firstname,lastname) =>console.log(`${firstname} and ${lastname}`)
credentials("Jayapriya","Shanmugam");

(()=>console.log("From Arrow with IIF Function"))
 ();

()=>console.log("Vidya");




