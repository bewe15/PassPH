import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, ".auth/user.json");

setup("authenticate", async ({ page }) => {
  await page.goto("/login");

  // Wait for the form to render past Suspense
  await page.waitForSelector('input[type="email"]', { timeout: 15_000 });

  await page.locator('input[type="email"]').fill("test@scoravo.com");
  await page.locator('input[type="password"]').fill("Test123@");
  await page.getByRole("button", { name: "Log in" }).click();

  await page.waitForURL(/dashboard/, { timeout: 15_000 });
  await expect(page).toHaveURL(/dashboard/);

  await page.context().storageState({ path: authFile });
});
