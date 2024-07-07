import test, { expect } from '@playwright/test'
import path from 'path'

test("File to Upload",async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")

    //upload element with attribute in dom asa type= file
    
  //const  filePath="./dataToUpload";

   // await page.setInputFiles("input[type='file']",["./dataToupload/Cheatsheet.txt"]);   
   
   await page.locator(".card").filter({hasText:"Basic Upload"})
   .locator("input[type='file']").setInputFiles(path.join(__dirname,"Cheatsheet.txt"))
   
   await expect(page.locator("[class='ui-fileupload-filename']")).toContainText("Cheatsheet.txt")
    await page.waitForTimeout(3000);

})



test("File to Upload using listener",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")

//if the type=file not present 

  const filePromise= page.waitForEvent('filechooser')
  await page.click("#drag-drop-upload");
   const filechooser=await filePromise;

  await filechooser.setFiles("./dataToupload/Cheatsheet.txt");

})


test.only("File to download using listener",async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")

  const filePromise= page.waitForEvent('download')
   await page.getByText("Download",{exact:true}).click()
  // await page.locator("//span[text()='Download']").click()
  //Basic Download
  //get the text exact match with text having Download
   const fileDownload=await filePromise;
  await fileDownload.saveAs("Downlaod/"+fileDownload.suggestedFilename()) 

})