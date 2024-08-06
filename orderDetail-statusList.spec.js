import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.gotsurge.co/login');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('chintya.qlip@gmail.com');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('gotsurgeq@');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.waitForTimeout(5000);

  await page.goto('https://staging.gotsurge.co/orders/db662eca-cb89-4bc0-aac4-497489e1d4b7');

  await page.waitForTimeout(5000);

  //Status List
  const validStatus = [
    'Delivery Arriving',
    'Pending Delivery',
    'Pickup Arriving',
    'Pending Pickup',
    'Accepted',
    'Broadcasting',
    'Pending Broadcast'
];

for (const status of validStatus) {
  const statusLocator = page.locator(`//div[.='${status}']`);
    await page.getByText(status).scrollIntoViewIfNeeded();
    expect(statusLocator).toContainText(status);
    console.log(status)
}
  

});

