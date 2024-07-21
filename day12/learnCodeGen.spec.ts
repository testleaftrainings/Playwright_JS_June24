import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByPlaceholder('Search Amazon.in').fill('Phones');
  await page.getByLabel('phones under 1000+').click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.s-product-image-container').first().click();
  const page1 = await page1Promise;
  await page1.getByLabel('Mobiles & Accessories, You').click();
  await page1.goto('https://www.amazon.in/s/ref=mega_elec_s23_2_2_1_2?rh=i%3Acomputers%2Cn%3A4363894031&ie=UTF8');
});