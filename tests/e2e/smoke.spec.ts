import { test, expect, devices } from "@playwright/test";

test("home routes to install", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Installation Guide" }).click();
  await expect(page).toHaveURL(/\/install/);
  await expect(page.getByRole("heading", { name: /install terminai/i })).toBeVisible();
});

test("docs sidebar opens a doc", async ({ page }) => {
  await page.goto("/docs");
  await page.getByRole("link", { name: "Quickstart" }).click();
  await expect(page).toHaveURL(/\/docs\/get-started/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("404 page renders", async ({ page }) => {
  await page.goto("/this-page-does-not-exist");
  await expect(page.getByRole("heading", { name: "Page Not Found" })).toBeVisible();
});

test.describe("mobile navigation", () => {
  test.use({ ...devices["iPhone 12"] });

  test("opens and navigates", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Toggle menu" }).click();
    const docsLink = page.getByRole("link", { name: "Docs" });
    await expect(docsLink).toBeVisible();
    await docsLink.click();
    await expect(page).toHaveURL(/\/docs/);
  });
});
