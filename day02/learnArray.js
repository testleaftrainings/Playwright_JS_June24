//Array -->storing multiple vlaues under a single variable
let username=["vidya","Lakshmi","Saritha"]

let browserName=[];
//array is dynamic in nature
//increase and decrease the size of the array
//hetrogeneous array

let employee= ["Mounika",30,150,902343023,"Wipro"] //array index also starts with zero
console.log(employee.length)
console.log(employee[2]) 
console.log(employee[5]) //undefined
employee[10]="dateOfjoining"
console.log(employee)
//Array to string
console.log(employee.join("-"))

//add the element at the last index
employee.push("address")
console.log(employee)
employee.pop(); //remove the last indexed
console.log(employee)

//add or remove a the first position 
employee.unshift("Employee Details")
console.log(employee)
employee.shift()
console.log(employee)

let num=[2,4,1,5,3,6]
num.sort();
console.log(num)

console.log(num.reverse())

//spread syntax
let arr1=[1,2,3,4]
let arr2=[...arr1,5,6,7,8]

console.log(arr2)

let testTypes=["Regression","Smoke",["Black box","Whitebox"],"Sanity"]
console.log(testTypes[2])

let nestedArray=testTypes[2];
console.log(nestedArray.length)
console.log(nestedArray[1])

console.log(testTypes[2][0])

employee.splice(1,3); //remove element from the intermediate position

console.log(employee)
