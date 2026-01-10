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

| CI Run ID   | Failing Step           | Root Cause                                                                                                             | Why #3 Didn't Catch It                                                                                                                                                                  |
| ----------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20884716647 | Playwright smoke tests | **Visual snapshot mismatch**: Local snapshot 7026px tall, CI rendered 7206px (180px difference, 0.39 pixel ratio diff) | **Cross-environment rendering inconsistency**: Local machine uses different fonts/rendering engine than GitHub Actions runner. Snapshots generated locally do not match CI environment. |

---

## Part 5: Outstanding Work

> **Instructions**: After CI analysis, list any remaining work here.

- [x] **Phase A-F completed locally** - all 8 tests passed
- [ ] **Fix CI visual snapshot mismatch** - Options:
  1. **Generate snapshots IN CI** using `--update-snapshots` flag in workflow on a dedicated branch, then merge
  2. **Increase `maxDiffPixelRatio`** from 0.01 to 0.05 to tolerate minor cross-env differences
  3. **Use Docker** locally with same base image as CI to generate consistent snapshots
- [ ] Re-push and verify CI passes

---

## Appendix: Issue Resolution Summary

| Original Issue                | Status    | Fix Applied                        |
| ----------------------------- | --------- | ---------------------------------- |
| Visual regression (home)      | ❌ FAILED | Local snapshots don't match CI env |
| Lighthouse budgets+assertions | ✅ FIXED  | Config already corrected           |
| TS2305 Compare icon           | ✅ FIXED  | Import removed                     |
| Smoke test visibility         | ✅ PASSED | Content matches regex              |
| Stale .next cache             | ✅ FIXED  | Deleted .next                      |
| Orphaned enterprise snapshot  | ✅ FIXED  | Deleted file                       |

---

## Part 6: Why the Plan Failed Despite Being "Well Thought Through"

### The Blind Spot: Environment Parity

The original plan (Phase C) assumed that running Playwright locally with `--update-snapshots` would produce baselines that match CI. This assumption was **wrong** because:

1. **Font rendering differs**: Local Linux (Fedora/Ubuntu desktop) uses different font hinting/anti-aliasing than GitHub Actions' Ubuntu runner
2. **Viewport/DPI differences**: Despite setting viewport to 1280px, actual rendering can differ based on system DPI settings
3. **Browser version skew**: Local Chromium version may differ slightly from CI's Playwright-installed Chromium
4. **Dynamic content height**: The 180px height difference (7026 vs 7206) suggests content like images or fonts loaded differently

### The Fix

The correct approach is one of:

- **Option A**: Generate snapshots directly in CI (run with `--update-snapshots` on a feature branch, download artifacts, commit)
- **Option B**: Use Docker with the exact CI base image to generate snapshots locally
- **Option C**: Relax the `maxDiffPixelRatio` threshold (less strict, but pragmatic)
