Agenda(7th Jul 24)
-------------------
9.00AM  to 9.30AM   -WindowHandle
9.30AM to 10.15AM   -FileUpload & Download
10.15AM to 10.35AM  -classroom
10.35AM to 10.50AM  -Break
10.50AM to 12.00PM  -Read Test Data
12.00PM to 12.15PM  -Classroom
12.15PM to 12.40PM  -SessionStorage
12.40PM to 1.00PM   -Screenshot



windows 1 ,window 2 ,window 3

if(!window 3.locate ele){click()}


Direct upload
using event listener

type=file




async uploadFile(filename:string){
  page.locator().setInputFiles(path.join(__dirname),filename)
}

uploadFile("Cheatsheet.txt")




Read data from csv , json, env

filename.csv
csv -->comma separated value
TC001,demoSalesmanager,crmsfa
TC002,DemoCSR,crmsfa

install the csv-parse library
npm install csv-parse

.json

.env 
 -->environment specific files
  -->npm install dotenv
  -->dotenv.config({path:"file"}) //read data from env












https://forms.office.com/r/PfJVdaMQ8d 



