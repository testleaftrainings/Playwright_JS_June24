//synchronous -->step by step

function test(){
    console.log("Print 2")
}
console.log("Print 1")
console.log("print 3")

//apply wait in -asynchronous way

setTimeout(test,5000)  //call back function
setTimeout(function (){
    console.log("say Hello")
},2000) //print say Hello after 2 seconds 

//apply delay to sync fn -->async fn