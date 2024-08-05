import {test,chromium} from '@playwright/test'


//tes.use
//context


test.use({
    geolocation:{
       latitude:48.86,
       longitude:2.35
},
permissions:['geolocation']

})
test(`Geolocation `,async({page})=>{

  await page.goto("https://www.google.com/maps/")
  await page.waitForLoadState('domcontentloaded')
  await page.click("#sVuEFc") //locate me on  map -->lat & log
  await page.waitForTimeout(6000)
})





test(`Geolocation  use context`,async()=>{

const browser=await chromium.launch()
const context=await browser.newContext({
geolocation:{
    latitude:48.87,
    longitude:2.35,
},
permissions:['geolocation']
})

const page=await context.newPage();
  await page.goto("https://www.google.com/maps/")
  await page.waitForLoadState('domcontentloaded')
  await page.click("#sVuEFc") //locate me on  map -->lat & log
  await page.waitForTimeout(6000)
})