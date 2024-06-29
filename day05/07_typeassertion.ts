let statuscode:any=404
let assertValue=(<number>statuscode)
console.log(typeof assertValue)

let res ;
let responseStaus:any= res//data fetched and assigned  to response status inferred into number
//let result=(responseStaus as number)//expectation to be string
console.log(typeof responseStaus)

