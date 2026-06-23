import { test, expect } from "@playwright/test";

test.describe("IELTS Reading - scoring and history", () => {
  test("completes a reading test, saves score, and shows in history", async ({ page }) => {
    await page.goto("/test/ielts-reading-1");

    // Wait for the test to load
    await page.waitForSelector("button", { timeout: 15_000 });

    // Answer questions — click the first pill/option button in each section
    // Repeat several times to catch multiple questions across sections
    for (let i = 0; i < 5; i++) {
      const pills = page.locator("button").filter({ hasText: /^[A-Z]$/ });
      const count = await pills.count();
      if (count > 0) await pills.first().click();
      await page.waitForTimeout(300);
    }

    // Also click any MCQ radio-style options that may have full text labels
    const optionButtons = page.locator("button[class*='rounded-full'], button[class*='PillOption']");
    const optCount = await optionButtons.count();
    for (let i = 0; i < Math.min(optCount, 10); i++) {
      try { await optionButtons.nth(i).click({ timeout: 500 }); } catch { /* skip */ }
    }

    // Click the Submit button (opens modal)
    await page.getByRole("button", { name: "Submit" }).first().click();

    // Confirm in the modal
    await page.getByRole("button", { name: "Submit now" }).click();

    // Should redirect to results page
    await page.waitForURL(/\/results\//, { timeout: 20_000 });
    await expect(page.locator("body")).not.toContainText("Something went wrong");

    // Navigate to history and verify the attempt appears
    await page.goto("/history");
    await expect(page.locator("body")).not.toContainText("Something went wrong");

    // Should show a reading attempt
    await expect(page.getByText("Reading").first()).toBeVisible();
  });
});

test.describe("PTE Reading - scoring and history", () => {
  test("completes a PTE reading test, saves score, and shows in history", async ({ page }) => {
    await page.goto("/test/pte-reading-1");

    await page.waitForSelector("button", { timeout: 15_000 });

    // Click available pill answers
    for (let i = 0; i < 5; i++) {
      const pills = page.locator("button").filter({ hasText: /^[A-Z]$/ });
      const count = await pills.count();
      if (count > 0) await pills.first().click();
      await page.waitForTimeout(300);
    }

    // Submit
    await page.getByRole("button", { name: /Submit/i }).first().click();
    await page.getByRole("button", { name: "Submit now" }).click();

    await page.waitForURL(/\/results\//, { timeout: 20_000 });
    await expect(page.locator("body")).not.toContainText("Something went wrong");

    // Check history
    await page.goto("/history");
    await expect(page.getByText("Reading").first()).toBeVisible();
  });
});
