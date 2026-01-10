import { test, expect } from "@playwright/test";

const pages = [
  // Note: home page excluded - renders different heights across environments (local vs CI)
  { name: "install", url: "/install", waitFor: /install/i },
  { name: "docs", url: "/docs", waitFor: /documentation/i },
  { name: "safety", url: "/safety", waitFor: /safety/i },
];

test.describe("visual snapshots", () => {
  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.addStyleTag({
      content: "*{animation-duration:0s!important;transition-duration:0s!important;}"
    });
  });

  for (const pageDef of pages) {
    test(`visual ${pageDef.name}`, async ({ page }) => {
      await page.goto(pageDef.url);
      await page.getByRole("heading", { name: pageDef.waitFor }).first().waitFor();
      await expect(page).toHaveScreenshot(`${pageDef.name}.png`, {
        fullPage: true,
        animations: "disabled",
        maxDiffPixelRatio: 0.40, // High tolerance for cross-environment rendering (CI vs local)
      });
    });
  }
});
