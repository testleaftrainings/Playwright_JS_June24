import {test} from '@playwright/test'


test.only(`Learn to use Keyboard`,async({context,page})=>{
    await page.goto("https://www.leafground.com/input.xhtml")
    await context.tracing.start({name:"Tracing KeyboardAction",screenshots:true,snapshots:true});
    const eleInput= page.getByPlaceholder("Babu Manickam");
    await eleInput.fill("Vidya");
    await eleInput.press("Tab");
    await eleInput.press("Enter")
    await context.tracing.stop({path:"traceresult.zip"})
    await eleInput.press("ControlOrMeta+A")
    await page.waitForTimeout(3000)
    
    // await eleInput.isChecked() //boolean true/ false

    // await eleInput.check() //--> confirms the button is checkbox a radio -->click through mouse
})

test.skip(`Mouse actions`,async({page})=>{

   await page.goto("https://snapdeal.com/")
   const EleCategory= page.locator(`//span[text()="Men's Fashion"]`)
   await EleCategory.hover();
   await page.mouse.wheel(0,500);    
   await page.waitForTimeout(3000);
   
   
   //  await EleCategory.click();


})

test.skip(`Mouse actions drag`,async({page})=>{
    await page.goto("https://www.leafground.com/drag.xhtml")
    const srcele= page.locator(`//p[text()='Drag to target']`)
    const trgEle=page.locator(`//p[text()='Drop here']`)
     await srcele.click({button:"right"})
     await srcele.dblclick()
     const rect=await srcele.boundingBox();
     const x=rect?.x;
    // console.log(rect)
    await srcele.dragTo(trgEle);
  //  await srcele.focus()
 
 })