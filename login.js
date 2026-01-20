import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.linkedin.com/login');

  // 👇 YOU login manually here
  await page.pause();

  // 👇 Save session AFTER successful login
  await context.storageState({ path: 'auth.json' });

  await browser.close();
})();
