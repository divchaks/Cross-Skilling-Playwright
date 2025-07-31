import { test, expect } from '@playwright/test';

test('firsttest', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/v1/");
  await page.locator('input[placeholder="Username"]').fill("standard_user");
  await page.locator('input[placeholder="Password"]').fill('secret_sauce');
  await page.locator('input[type="submit"]').click();
  //expect (page).toHaveTitle('Swag Labs'); // Check if the title contains "Swag Labs"
  await page.locator('.app_logo').waitFor(); // Ensure the title is visible before checking
  

  const titleVisible = await page.locator('.app_logo').isVisible(); // Corrected method
  console.log(titleVisible);
  expect(titleVisible).toBeTruthy();
});