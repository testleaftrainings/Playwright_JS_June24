
//let browser="chrome"
// function getBrowserversion(browser){  //reusable logic
// if (browser=="chrome"){
//     console.log("Launch chrome browser") //print stmt
//     return "120.45.7896"//return the valure to the function and can stored and use for other functionaliuty
// }
// else if(browser=="safari"){
//     console.log("Launch Safari browser")
//     return "119.34.3456"
// }
// else{
//     return "checkInputs"
// }
// }
// let browserVersion=getBrowserversion(123);
// console.log(getBrowserversion(123))

// let browserVersion1=getBrowserversion("chrome");
// console.log(browserVersion1)



// function getBrowserName(browserValue){
//     switch(browserValue){
//         case "chrome": 
//         return "Chromebrowser is launched"


//         case "safari":
//         return "Launching the safari browser"

//         case "edge":
//         return "Launching the edge browser"

//         default:
//             return "unsupported browser"

//     }
// }

// let browserName=getBrowserName("chrome")
// console.log(browserName)



function getBrowserName(browserValue) {
    switch (browserValue) {
        case "chrome":
            console.log("chrome browser is launched")
            break;

        case "safari":
            console.log("Launching the safari browser")
            break;

        case "edge":
            console.log("Launching the edge browser")
            break;

        case "firefox":
            console.log("Edge is launched")
            break;

        default:
            console.log("unsupported browser")
            break;
    }
}

 getBrowserName("chromium")
