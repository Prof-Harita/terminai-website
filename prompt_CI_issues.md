# CI Issues Fix Prompt

> **Purpose**: Execute all tasks below in sequence before pushing to ensure CI passes.

---

## Part 1: What Else Could Be Wrong (Risk Analysis)

Based on CI_Issues.md and codebase review, additional latent issues identified:

| #   | Risk Area                                | Description                                                                                                                         | Likelihood              |
| --- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 1   | **Stale Next.js build cache**            | `.next/types/validator.ts` references deleted pages (`enterprise/page.js`, `for/enterprise/page.js`). Typecheck fails.              | **HIGH**                |
| 2   | **Orphaned visual snapshot**             | `enterprise-chromium-linux.png` exists in snapshots but no test covers it (page deleted).                                           | MEDIUM                  |
| 3   | **Visual regression (expected)**         | Home page layout changed legitimately; snapshots need regeneration.                                                                 | **HIGH**                |
| 4   | **Smoke test fragility**                 | Test expects `/welcome to terminai/i` but content is `Welcome to TerminaI!` (case-sensitive 'I'). Regex may fail on subtle changes. | LOW (currently matches) |
| 5   | **Lighthouse config (previously fixed)** | `lighthouserc.cjs` no longer has budgets; assertions only. Issue resolved.                                                          | NONE                    |
| 6   | **TypeScript import (previously fixed)** | `Compare` icon removed from `comparison/page.tsx`. Issue resolved.                                                                  | NONE                    |

---

## Part 2: Sequenced Task List

Execute these tasks **in order**:

### Phase A: Clean Build Environment

- [ ] **A1.** Delete `.next` directory to clear stale build cache.
- [ ] **A2.** Delete orphaned snapshot `tests/e2e/visual.spec.ts-snapshots/enterprise-chromium-linux.png`.

### Phase B: Verify Static Checks Pass

- [ ] **B1.** Run `npm run lint` → expect clean output.
- [ ] **B2.** Run `npm run typecheck` → expect clean output.
- [ ] **B3.** Run `npm run build` → expect successful build.

### Phase C: Update Visual Regression Baselines

- [ ] **C1.** Start local dev server: `npm run dev`.
- [ ] **C2.** Run Playwright with update flag: `npx playwright test tests/e2e/visual.spec.ts --update-snapshots`.
- [ ] **C3.** Verify new snapshots created in `tests/e2e/visual.spec.ts-snapshots/`.

### Phase D: Verify All E2E Tests Pass

- [ ] **D1.** Run full Playwright suite: `npx playwright test`.
- [ ] **D2.** Confirm all tests pass (smoke + visual).

### Phase E: Final Verification

- [ ] **E1.** Run `npm run build` again to confirm production build.
- [ ] **E2.** Run Lighthouse locally (optional): `npx lhci autorun` to verify no regressions.

### Phase F: Commit and Push

- [ ] **F1.** Stage all changes: `git add .`.
- [ ] **F2.** Commit: `git commit -m "fix: clean build cache, update visual snapshots, remove orphaned enterprise snapshot"`.
- [ ] **F3.** Push: `git push origin main`.

### Phase G: Monitor CI

- [ ] **G1.** Watch CI run: `gh run watch`.
- [ ] **G2.** If CI fails, capture logs and update this document (Part 4).

---

## Part 3: Execution Commands (Copy-Paste Ready)

```bash
# Phase A: Clean
rm -rf .next
rm -f tests/e2e/visual.spec.ts-snapshots/enterprise-chromium-linux.png

# Phase B: Verify static checks
npm run lint
npm run typecheck
npm run build

# Phase C: Update snapshots (run dev server first in another terminal)
npm run dev &
sleep 5
npx playwright test tests/e2e/visual.spec.ts --update-snapshots
pkill -f "next dev"

# Phase D: Full E2E
npx playwright test

# Phase E: Final build
npm run build

# Phase F: Commit and push
git add .
git commit -m "fix: clean build cache, update visual snapshots, remove orphaned enterprise snapshot"
git push origin main

# Phase G: Monitor
gh run watch
```

---

## Part 4: Post-Push CI Failure Analysis

> **Instructions**: After push, if CI fails again, document root causes here.

| CI Run ID | Failing Step | Root Cause | Why #3 Didn't Catch It |
| --------- | ------------ | ---------- | ---------------------- |
| _pending_ | _pending_    | _pending_  | _pending_              |

---

## Part 5: Outstanding Work

> **Instructions**: After CI analysis, list any remaining work here.

- [ ] _None yet_

---

## Appendix: Issue Resolution Summary

| Original Issue                | Status      | Fix Applied                |
| ----------------------------- | ----------- | -------------------------- |
| Visual regression (home)      | **PENDING** | Update snapshots (Phase C) |
| Lighthouse budgets+assertions | ✅ FIXED    | Config already corrected   |
| TS2305 Compare icon           | ✅ FIXED    | Import removed             |
| Smoke test visibility         | **VERIFY**  | Content matches regex      |
| Stale .next cache             | **PENDING** | Delete .next (Phase A)     |
| Orphaned enterprise snapshot  | **PENDING** | Delete file (Phase A)      |
