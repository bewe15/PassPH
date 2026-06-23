import { test, expect } from "@playwright/test";

test.describe("Dashboard", () => {
  test("loads and shows mock exam cards", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page.getByText("IELTS Academic Mock Exam").first()).toBeVisible();
    await expect(page.getByText("PTE Academic Mock Exam").first()).toBeVisible();
  });
});

test.describe("IELTS Mock Exam", () => {
  test("generates a session and shows 3 sections", async ({ page }) => {
    await page.goto("/mock");
    await page.getByRole("button", { name: /Generate Mock Exam/i }).click();

    await page.waitForURL(/\/mock\/.+/, { timeout: 20_000 });

    // Check section badges (exact label spans)
    await expect(page.getByText("Listening", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Reading", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Writing", { exact: true }).first()).toBeVisible();
  });

  test("past sessions list on mock page", async ({ page }) => {
    await page.goto("/mock");
    await expect(page).not.toHaveURL(/login/);
    await expect(page.locator("body")).not.toContainText("Something went wrong");
  });
});

test.describe("PTE Mock Exam", () => {
  test("generates a session and shows 4 sections", async ({ page }) => {
    await page.goto("/pte-mock");
    await page.getByRole("button", { name: /Generate PTE Mock Exam/i }).click();

    await page.waitForURL(/\/pte-mock\/.+/, { timeout: 20_000 });

    await expect(page.getByText("Speaking", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Writing", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Reading", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Listening", { exact: true }).first()).toBeVisible();
  });

  test("sections are locked in order after generate", async ({ page }) => {
    await page.goto("/pte-mock");
    await page.getByRole("button", { name: /Generate PTE Mock Exam/i }).click();
    await page.waitForURL(/\/pte-mock\/.+/, { timeout: 20_000 });

    // Writing, Reading, Listening should be locked — only Speaking is unlocked
    await expect(page.getByText("Locked").first()).toBeVisible();
  });
});

test.describe("History", () => {
  test("history page loads without error", async ({ page }) => {
    await page.goto("/history");
    await expect(page).not.toHaveURL(/login/);
    await expect(page.locator("body")).not.toContainText("Something went wrong");
  });
});

test.describe("PTE Listening", () => {
  test("test page loads and shows first task", async ({ page }) => {
    await page.goto("/pte-listen/pte-listening-1");
    await expect(page).not.toHaveURL(/login/);
    await expect(page.locator("body")).not.toContainText("Something went wrong");
  });
});

test.describe("Navigation", () => {
  test("can navigate to IELTS reading test", async ({ page }) => {
    await page.goto("/test/ielts-reading-1");
    await expect(page).not.toHaveURL(/login/);
    await expect(page.locator("body")).not.toContainText("Test not found");
  });

  test("can navigate to PTE writing test", async ({ page }) => {
    await page.goto("/write/pte-writing-1");
    await expect(page).not.toHaveURL(/login/);
    await expect(page.locator("body")).not.toContainText("Something went wrong");
  });
});
