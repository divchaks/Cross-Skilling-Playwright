import { test, expect } from '@playwright/test';

test('Login and verify logo visibility', async ({ page }) => {
  //Navigate to the login page
  await page.goto("https://www.saucedemo.com/v1/");

  //Fill in the login credentials
  await page.locator('input[placeholder="Username"]').fill("standard_user");
  await page.locator('input[placeholder="Password"]').fill('secret_sauce');

  //Submit the login form
  await page.locator('input[type="submit"]').click();

  //wait for the logo to be visible 
  await page.locator('.app_logo').waitFor(); 
  
 //Verify that the logo is visible 
  const titleVisible = await page.locator('.app_logo').isVisible(); 
  console.log(titleVisible);
  expect(titleVisible).toBeTruthy();
});