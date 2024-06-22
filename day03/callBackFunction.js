//sync 
function printValue(greet){
    setTimeout(function (){
        console.log("say Hello")
        greet();
    },2000) 
}

//greet=printHai()

function printHai(){
    console.log("Say Hai")
}

// function saygoodBye(){
//     console.log("Say GoodBye")
// }

//printValue(printHai);

//callback hell

function printData(){
    setTimeout(()=>{
        console.log("Click LoginButton")
        setTimeout(()=>{
            console.log("Enter Password")
            setTimeout(()=>{
                console.log("Enter Username")
            },500)
        },2000)
    },3000)
}

printData();