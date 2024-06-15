let x=10;
console.log(x+10);
x=x+10
x+=10

console.log(x)

let y=10; //assignment operator
let z=5;
console.log(10%5)  //mod operator
//remainder of the division -->0
console.log(10/5)//-->2

console.log("sum of the value" +x + "")
console.log(`Sum of the value is ${x} for the given question`)
let a=5
console.log(a**2)

console.log(a++);  //a++ -->a=a+1 //postincrement25 will be used for the logic and then the increment happens
console.log(a)
console.log(++x)  //preincrement Operator   25 +1 ==>26 and used for the logic
console.log(a--) // reduce 1 from the value a=a-1  post decrement
console.log(a)
console.log(--x) //pre decrement 
//comparision
// > ,< ,<= ,>=   -->boolean output

console.log(a>x);

// == --> a==x  true
//=== -->strict equality

console.log(3 =='4');  //string will ne converted into number  value comparision
console.log(3 ==='3') //compares the value as well as the datatype

//Logical operator
let b=10
console.log((b<5)&&(x>0))  //(And) && should be satisfied with both conditions
console.log((b<5)||(x>0)) //0r  any one condition satifies then treturn true
console.log(!(b==10));  //not