
// //declaration -literal  ->less memory consumption
// let username="lakshmi"   //101
// let user="lakshmi"  //101  //string pool memory
// //102 

// console.log(username);

// //using new keyword - object
// let uName=new String("lakshmi") //space in the heap memory 103
// let userId=new String("lakshmi") //takes the new address 104

// console.log(username===user);


// let productPrice="The price of the l\"\oreal is 1200";
// let price=`The price of the l'oreal is 1200`; 
// //length of the string
// console.log(price.length)

// let firstname="sivakumar"; //--> first index is 0 -->s-0 ,i-1 ....
// console.log(firstname.charAt(3));

// //last indexed value
// let lengthOFstr=firstname.length;  //9  -->0-8
// //charAt(8-1)

// console.log(firstname.charAt(lengthOFstr-1)) //chartAt(8)
// //get the index of the specific character
// console.log(firstname.indexOf('a')) //first appearing position

// console.log(firstname.indexOf('L'));  //output will be -1

// //presence of substring
// console.log(firstname.includes('john')) //similar to contains

// //Lead is created sucessfully
// //Lead.includes('created')


// let fname=firstname.toUpperCase();
// console.log(fname)

// console.log(fname.toLowerCase());


// //reverse a string , pallindrome 

// let message="Leads created sucessfully"
// console.log(message.split("e"));


// let subString= message.slice(3);
// console.log(subString);

// let subValue= message.slice(3,10);
// console.log(subValue);

//reverse a string -saritha
//ahtiras

function reversedString(username){
  let chars=username.split("")
  let reversedChar=""
  for(let index=chars.length-1;index>=0;index--){
      console.log( chars[index]);
//a+=10 -->a=a+10
     reversedChar +=chars[index]
        }
return reversedChar;
}

let result=reversedString("saritha")
console.log(result)


//let string=firstname+" learning js"

let firstname="sivakumar";
firstname.concat("")
let Sentence=" The pdt price "
firstname.trim(Sentence)

firstname.replace("a","s");

let prdtpr="1200Rs"
console.log(prdtpr+12);
//1212
let price=parseInt(prdtpr); //converting string to number
console.log(price+12 +"rs")