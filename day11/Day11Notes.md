Today's agenda:

9.00AM to 9.30AM  -Session storage
9.30AM to 10.00AM -persistant Context
10.00AM to 10.30AM -Playwright Test annotations
10.30AM to 10.45AM -Break
10.45AM to 12.15PM -Hooks & Serial, Sequential and Parallel Execution
12.15PM to 12.30PM -classroom
12.30PM to 1.00PM -Keyboard & Mouse actions


Session Storage -->store the cookies other details of session created

             use case   -->skip login

Basic auth  -->normal 
persistentContext  -->using existing browser session id

Test annotation
test.only
test.skip 
test.use  --> 
test.describe -->to group the testcases -->inject the dependencies
test.slow 
test.fixme


execution -->npx playwright test -->filename
           -->npx playwright test smoke

parallel 
sequential
serial 

test.describe("group1",async()=>{
test.describe.configure({mode:"parallel"});

test(`test1`,async({page})=>{
//launch the slaes with valid credentials
})
test(`test2`,async({page})=>{
//launch the slaes with invalid credentials
})

})

test.describe("group2",async()=>{


test(`test1`,async({page})=>{
//launch the leaftaps with valid credentials
})
test(`test2`,async({page})=>{
//launch the leaftaps with invalid credentials
})

})

2 test (sales force)-->2 browser

sequentially -->leaftaps ((valid and invalid )individual also in seq)


test.describe.configure({mode:"parallel"});

test.describe("group1",async()=>{
test(`test1`,async({page})=>{
//launch the slaes with valid credentials
})
test(`test2`,async({page})=>{
//launch the slaes with invalid credentials
})

})

test.describe("group2",async()=>{
test(`test1`,async({page})=>{
//launch the leaftaps with valid credentials
})
test(`test2`,async({page})=>{
//launch the leaftaps with invalid credentials
})

})



sequential -->test executes one after the other  -->it does not depends on the first to complete first
irrespective of first test completeion the second starts its excution


serial -->second test is dependent on the completion of first test

4 testdata  -->4 testcases

parallel -->for -->parallel -->vidya  Gomathi  nalini cristie
common firstname -->vidya
serial -->create edit dele-->serially

common firstname -->Gomathi
serial -->create edit dele-->serially
