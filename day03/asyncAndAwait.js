
function printValues(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const result =Math.random()*2 < 0.5
                if(result){
                    console.log(result)
                    resolve("The  function is resolved")
                }
            },2000)
    })
}
function hello(){
    console.log("Say Hello")
}

function handleError(){
    console.log("error")
}

async function execute(){
  try{
      await printValue();
      hello();
  }
  catch(error){
    handleError();
  }
 

}

execute();