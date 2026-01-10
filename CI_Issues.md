# CI Issues Analysis

Analysis of the 5 most recent failed CI runs for `terminai-website`.

## 1. Run ID: 20761024924 (Deploy to Cloud Run)

- **Branch**: Merged `fix-ci-failures-2707432112283008303` into `main` (Corresponds to marked branch #2)
- **Date**: ~2026-01-06
- **Status**: Failed
- **Job**: Playwright smoke tests
- **Technical Root Cause**: **Visual Regression Failure**
  - **File**: `tests/e2e/visual.spec.ts`
  - **Test**: `visual snapshots › visual home`
  - **Error**: `expect(page).toHaveScreenshot(expected) failed`
  - **Details**: Expected an image 1280px by 6994px, received 1280px by 7206px. 3,212,104 pixels (ratio 0.35) are different. The page length changed significantly, causing massive visual drift.

## 2. Run ID: 20747514478 (Deploy to Cloud Run)

- **Branch**: Merged `terminai-rebrand-and-cleanup-15825452507045080563` into `main` (Corresponds to marked branch #3)
- **Date**: ~2026-01-06
- **Status**: Failed
- **Job**: Playwright smoke tests
- **Technical Root Cause**: **Visual Regression Failure**
  - **File**: `tests/e2e/visual.spec.ts`
  - **Test**: `visual snapshots › visual home`
  - **Error**: `expect(page).toHaveScreenshot(expected) failed`
  - **Details**: Similar to the above, massive layout shift. Received image 1280px by 7206px vs expected 6994px. Ratio 0.39 mismatch.

## 3. Run ID: 20532689328 (Deploy to Cloud Run)

- **Date**: ~2025-12-27
- **Status**: Failed
- **Job**: Lighthouse CI
- **Technical Root Cause**: **Lighthouse Configuration Error**
  - **Tool**: `@lhci/cli`
  - **Error**: `Error: Cannot use both budgets AND assertions`
  - **Details**: The configuration (likely in `lighthouserc.cjs` or command args) attempts to enforce both performance budgets and assertions simultaneously, which is not supported by the version of Lighthouse CI in use.

## 4. Run ID: 20532327537 (Deploy to Cloud Run)

- **Date**: ~2025-12-27
- **Status**: Failed
- **Job**: Typecheck
- **Technical Root Cause**: **TypeScript Compilation Error**
  - **File**: `src/app/comparison/page.tsx`
  - **Error**: `error TS2305: Module '"lucide-react"' has no exported member 'Compare'.`
  - **Details**: The code attempted to import a `Compare` icon from `lucide-react`, but it does not exist (likely renamed or removed in the library version).

## 5. Run ID: 20532154094 (Deploy to Cloud Run)

- **Date**: ~2025-12-27
- **Status**: Failed
- **Job**: Playwright smoke tests
- **Technical Root Cause**: **Functional UI Test Failure**
  - **File**: `tests/e2e/smoke.spec.ts`
  - **Test**: `docs sidebar opens a doc`
  - **Error**: `expect(locator).toBeVisible() failed` (Timeout 15000ms)
  - **Details**: The test expected to see text matching `/welcome to terminai/i` after clicking "Quickstart", but the element was not found. This suggests a content change (h1 changed) or navigation failure.
