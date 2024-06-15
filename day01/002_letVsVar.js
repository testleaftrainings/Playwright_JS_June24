
// var username="DemoSalesManager"

// username="DemoSales" //re assignment -->replacing the existing value

// var username=1234; //re declaration -->should not right 

// //let is the keyword used to declare a variable
// //allow you to reassign the value
// //will no allow you to redeclare it

// //difference between var and let 

// let firstName="vidya"
// //let firstName="R"  not allowed to redeclare

// firstName=123;  //reassigning 

// //let username="Uname"; runtime exception due to scope of the variable


// if else-->to provide conditional based execution

//if --> if(condition){block of code}

var x=1
function varScoping() {
 //   var x=1;   //global scope
     if(x==1){
        var x=2;
        console.log(x)  // 2
     }
  console.log(x)//  2
}

varScoping()



function letScoping() {
    let x=1;   //function levelscope
     if(x==1){
        let x=2; //block level scope
        console.log(x)  // 2
     }
  console.log(x)//  1
}

console.log("letScoping ")

letScoping()