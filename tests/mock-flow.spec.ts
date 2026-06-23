import { test, expect } from "@playwright/test";

// Helper: answer MCQ pill questions and submit the test
async function answerAndSubmit(page: any) {
  await page.waitForSelector("button", { timeout: 15_000 });

  // Click first available pill answer for each visible question
  for (let i = 0; i < 8; i++) {
    const pills = page.locator("button").filter({ hasText: /^[A-Z]$/ });
    const count = await pills.count();
    if (count > 0) await pills.first().click();
    await page.waitForTimeout(200);
  }

  // Click Submit button → confirm modal
  await page.getByRole("button", { name: /^Submit/ }).first().click();
  await page.getByRole("button", { name: "Submit now" }).click();
}

// Helper: get session details from the test-helper endpoint
async function getSession(page: any, sessionId: string) {
  const res = await page.request.get(`/api/mock-session/${sessionId}`);
  return res.json();
}

// Helper: extract sessionId from URL
function getSessionId(url: string) {
  return url.split("/").pop()!;
}

test.describe("IELTS Mock - reading section through mock flow", () => {
  test("complete reading via mock → section shows Done on session page", async ({ page }) => {
    // 1. Generate IELTS mock session
    await page.goto("/mock");
    await page.getByRole("button", { name: /Generate Mock Exam/i }).click();
    await page.waitForURL(/\/mock\/.+/, { timeout: 20_000 });
    const sessionId = getSessionId(page.url());

    // 2. Get assigned test IDs
    const session = await getSession(page, sessionId);
    expect(session.assigned_reading).toBeTruthy();

    // 3. Navigate directly to reading with mock param (bypassing locked UI)
    await page.goto(`/test/${session.assigned_reading}?mock=${sessionId}`);
    await answerAndSubmit(page);

    // 4. Should redirect back to mock session page
    await page.waitForURL(`**/mock/${sessionId}`, { timeout: 20_000 });

    // 5. Reading section should now show as Done
    const cards = page.locator("text=✓ Done");
    await expect(cards.first()).toBeVisible();
  });
});

test.describe("PTE Mock - writing and reading sections through mock flow", () => {
  test("complete writing + reading via mock → sections show Done on session page", async ({ page }) => {
    test.setTimeout(90_000);
    // 1. Generate PTE mock session
    await page.goto("/pte-mock");
    await page.getByRole("button", { name: /Generate PTE Mock Exam/i }).click();
    await page.waitForURL(/\/pte-mock\/.+/, { timeout: 20_000 });
    const sessionId = getSessionId(page.url());

    // 2. Get assigned test IDs
    const session = await getSession(page, sessionId);
    expect(session.assigned_writing).toBeTruthy();
    expect(session.assigned_reading).toBeTruthy();

    // 3. Complete writing section — tasks shown one at a time, navigate between them
    await page.goto(`/write/${session.assigned_writing}?mock=${sessionId}`);
    await page.waitForSelector("textarea", { timeout: 15_000 });

    const shortText = Array(15).fill("This is a test sentence for automated Playwright testing.").join(" ");
    const essayText = Array(60).fill("This is a test sentence for automated Playwright testing.").join(" ");

    // Fill Task 1 (Summarise Written Text)
    await page.locator("textarea").fill(shortText);

    // Go to Task 2 if "Next task" button exists
    const nextBtn = page.getByRole("button", { name: /Next task/i });
    if (await nextBtn.isVisible()) {
      await nextBtn.click();
      await page.waitForTimeout(500);
      await page.locator("textarea").fill(essayText);
    }

    // Open confirm modal (header Submit or bottom Finish & review)
    await page.getByRole("button", { name: /Submit|Finish/i }).first().click();

    // Confirm in modal
    const confirmBtn = page.getByRole("button", { name: "Submit & review" });
    if (await confirmBtn.isVisible({ timeout: 5_000 })) {
      await confirmBtn.click();
    }

    // Wait for AI scoring and redirect back to mock (can take up to 60s)
    await page.waitForURL(`**/pte-mock/${sessionId}`, { timeout: 60_000 });

    // 4. Complete reading section
    await page.goto(`/test/${session.assigned_reading}?mock=${sessionId}`);
    await answerAndSubmit(page);
    await page.waitForURL(`**/pte-mock/${sessionId}`, { timeout: 20_000 });

    // 5. At least 2 sections should now show as Done
    const doneBadges = page.getByText("✓ Done");
    await expect(doneBadges.first()).toBeVisible();
    expect(await doneBadges.count()).toBeGreaterThanOrEqual(2);
  });
});
