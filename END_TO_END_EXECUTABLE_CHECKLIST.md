# End-to-End Executable Checklist (12-Month Professionalization Plan)
Applies to: `/home/profharita/Code/terminai-website`  
Source of truth: `TERMINAI_WEBSITE_ARCH_STRATEGY_ROADMAP_REPORT.md` + `WEBSITE_TASKS.md`  

This checklist is designed to be “executable”: every item has a concrete output, a verification step, and an acceptance criteria. Copy sections into GitHub Issues/Projects if desired.

---

## 0) How to Run Checks Locally (Baseline)

Because default `npm` logging may fail writing to `~/.npm/_logs` in some environments, run commands with a local cache:

- Lint: `NPM_CONFIG_CACHE="$PWD/.npm-cache" NPM_CONFIG_UPDATE_NOTIFIER=false npm run lint`
- Dev: `NPM_CONFIG_CACHE="$PWD/.npm-cache" NPM_CONFIG_UPDATE_NOTIFIER=false npm run dev`
- Build: `NPM_CONFIG_CACHE="$PWD/.npm-cache" NPM_CONFIG_UPDATE_NOTIFIER=false npm run build`
- Typecheck (after you add a script): `NPM_CONFIG_CACHE="$PWD/.npm-cache" NPM_CONFIG_UPDATE_NOTIFIER=false npm run typecheck`

Recommended: set `NEXT_TELEMETRY_DISABLED=1` in CI.

---

## 1) Phase 0 (Weeks 1–4): Critical Fixes (Credibility + Cohesion)

### 1.1 Decisions (Blockers to Resolve First)
- [ ] **Define canonical install story** (CLI vs Desktop vs both) and the single canonical command shown in the hero.
  - Output: a single canonical install snippet used across Home + `/install` + docs.
  - Acceptance: no conflicting install commands anywhere on the site.
- [ ] **Define enterprise monetization framing** (support/services vs licensing) to match “Always Free / Apache 2.0”.
  - Output: a short statement used on `/enterprise` and `/free` clarifying what is paid (if anything).
  - Acceptance: enterprise page does not contradict “free forever” messaging.
- [ ] **Define official community links** (Discord invite, Matrix space) or remove placeholders until real.
  - Evidence: placeholder `href="#"` exists in `src/app/community/page.tsx:21` and `src/app/contact/page.tsx:30`.

### 1.2 Information Architecture (IA) Consolidation (Canonical Pages + Redirects)
- [ ] **Pick canonical routes and remove/redirect duplicates**
  - Decide:
    - [ ] Canonical: `/install` (redirect `/download` → `/install`)
    - [ ] Canonical: `/use-cases` (redirect `/capabilities` → `/use-cases`) OR the inverse
    - [ ] Canonical: product story: either `/product` OR the set of `/free`, `/intelligence`, `/extensibility`, `/safety`
  - Implementation tasks:
    - [ ] Add redirects in `next.config.ts` OR add route-level redirects using `redirect()` in route files.
    - [ ] Update header/footer nav to point only to canonical pages.
  - Verify:
    - [ ] Visiting deprecated routes lands on canonical routes.
    - [ ] No internal link points to deprecated routes.

### 1.3 Navigation Consistency + Accessibility
- [ ] **Unify `SiteHeader` nav with canonical IA** (avoid mixed `/product#...` vs `/free` patterns).
  - Reference: current dropdown uses `/product#...` in `src/components/SiteHeader.tsx:9`.
  - Verify: click-through on desktop and mobile to all primary pages.
- [ ] **Unify `SiteFooter` links with canonical IA**
  - Reference: footer “Contribute” currently points to `/roadmap` in `src/components/SiteFooter.tsx:38`.
  - Verify: all footer links route correctly.
- [ ] **Header dropdown accessibility**
  - Tasks:
    - [ ] Add keyboard navigation (Tab/Shift+Tab, Escape to close, Enter/Space to open).
    - [ ] Add ARIA (`aria-expanded`, `aria-controls`) and focus management.
  - Verify:
    - [ ] Works with keyboard only.
    - [ ] Passes basic screen reader sanity (no missing labels).

### 1.4 Fix “Correctness/Credibility” Bugs
- [ ] **Normalize repo URL usage** (`terminaI` vs `termAI`)
  - Evidence: `termAI` appears in `src/app/download/page.tsx:48` and `src/app/contribute/page.tsx:36` and `src/components/ContributeCTA.tsx:24`.
  - Acceptance: all links point to the correct repo and are consistent.
- [ ] **Replace placeholder/coming soon links** with real URLs or remove UI
  - Evidence: `src/app/community/page.tsx:21` and `src/app/contact/page.tsx:30`.
  - Acceptance: no `href="#"` in production UI.
- [ ] **Remove unprovable performance claims** (“Reduce incidents by 70%”) from marketing components unless substantiated
  - Evidence: `src/components/AudienceCards.tsx:17` includes metric-like benefits.
  - Acceptance: every metric has a source (case study) or is reworded as qualitative.

### 1.5 SEO Hygiene (Sitemap, Robots, 404, Metadata)
- [ ] **Add a 404 page**
  - Output: `src/app/not-found.tsx` with helpful links (Home, Docs, Install, Search).
  - Verify: unknown route returns 404, not a blank screen.
- [ ] **Fix sitemap accuracy**
  - Evidence: `src/app/sitemap.ts:7` lists non-existent routes (`/comparison`, `/case-studies`, `/why-gemini` etc.).
  - Tasks:
    - [ ] Update the static list to only existing routes, OR
    - [ ] Generate dynamically from `src/app` routes + docs slugs in `src/content/docs`.
  - Verify: generated `sitemap.xml` contains only valid URLs.
- [ ] **OG/Twitter images and metadata**
  - Evidence: `src/app/layout.tsx:16` uses `/banner.svg`.
  - Tasks:
    - [ ] Ensure `/banner.svg` exists and renders well at 1200×630 crop.
    - [ ] Add canonical URLs as needed.
  - Verify: share preview looks correct.
- [ ] **Add structured data (JSON-LD)**
  - Output: `SoftwareApplication` + `Organization` schema on `/` (and optionally `/enterprise`).
  - Verify: Google Rich Results Test shows valid schema; no runtime console errors.

### 1.6 Build Reproducibility & Environment Independence
- [ ] **Remove build-time network dependencies**
  - Evidence: `src/app/layout.tsx:3` imports `JetBrains_Mono` from `next/font/google` (Google fetch at build).
  - Tasks:
    - [ ] Replace with `next/font/local` and vendor font files into `public/fonts/` (or similar).
  - Verify:
    - [ ] `npm run build` completes with network disabled.
- [ ] **Make `typecheck` a first-class script**
  - Output: `package.json` has `"typecheck": "tsc -p tsconfig.json --noEmit"`.
  - Verify: `npm run typecheck` passes (and does not rely on stale `.next/types` artifacts).

### 1.7 Quality Gate: Make Lint Pass (P0)
- [ ] **Fix internal links to use `next/link`**
  - Evidence: ESLint errors in multiple pages (e.g., `src/app/extensibility/page.tsx`, `src/app/enterprise/page.tsx`, `src/app/install/page.tsx`).
  - Acceptance: `npm run lint` exits 0.
- [ ] **Fix JSX unescaped entities + JSX comment text nodes**
  - Evidence: multiple `react/no-unescaped-entities` and `react/jsx-no-comment-textnodes`.
  - Acceptance: `npm run lint` exits 0.
- [ ] **Remove/justify unused imports**
  - Evidence: warnings in multiple pages; avoid dead code.

### 1.8 Docs “Stabilize” (Minimum Professional Baseline)
- [ ] **Docs should have one coherent theme**
  - Evidence: docs layout hardcodes light background: `src/components/DocsLayout.tsx:72`.
  - Tasks:
    - [ ] Either make docs match site theme, or implement theme toggle and support both.
  - Verify: no “two different websites” feeling.
- [ ] **Docs sidebar should never fail silently**
  - Evidence: `console.error` in `src/components/DocsLayout.tsx:34`.
  - Tasks:
    - [ ] Add visible fallback UI when sidebar load fails.
  - Verify: simulated failure still gives navigation options.

---

## 2) Phase 1 (Months 2–3): Foundation Improvements (Conversion + Docs Moat)

### 2.1 Persona Routing + “Start Here” Funnel
- [ ] **Add persona entry section to Home**
  - Output: “Choose your path” cards linking to 4 persona landing pages.
  - Suggested route set:
    - [ ] `/for/everyday`
    - [ ] `/for/operators`
    - [ ] `/for/developers`
    - [ ] `/for/enterprise`
  - Verify: each page has one primary CTA and 2–3 secondary links.
- [ ] **Create a single “Start Here” page**
  - Output: `/start` or `/docs/start` with 10-minute quickstarts per persona.
  - Acceptance: each persona has a “first success” checklist (3 tasks).

### 2.2 Proof Assets (Demos, Screenshots, Trust as a Feature)
- [ ] **Homepage demo video (30–60s)**
  - Output: embedded video showing “ask → approve → execute”.
  - Acceptance: loads fast, has captions, has poster image.
- [ ] **Interactive demo components (no real execution)**
  - Output: script player that replays a recorded session (safe, deterministic).
  - Acceptance: works on mobile; respects `prefers-reduced-motion`.

### 2.3 Docs Productization
- [ ] **Local full-text search for docs**
  - Output: build-time search index + Cmd+K palette.
  - Verify: query returns results in <100ms for common terms.
- [ ] **Unify MDX rendering + components**
  - Output: one shared MDX components map used by `src/app/docs/page.tsx` and `src/app/docs/[...slug]/page.tsx`.
  - Acceptance: no duplicated MDX component code.
- [ ] **Add prev/next navigation**
  - Output: bottom nav on each doc page based on `public/docs/sidebar.json`.
  - Verify: consistent across entire docs tree.

### 2.4 Performance & Accessibility Baseline
- [ ] **Reduce client bundles**
  - Tasks:
    - [ ] Remove `"use client"` from pages that don’t need it; isolate motion into components.
  - Verify: Lighthouse improvements (CWV proxy) and smaller JS payload.
- [ ] **Add `prefers-reduced-motion`**
  - Acceptance: animations reduce/disable when preference is set.
- [ ] **Focus states + skip link**
  - Output: skip-to-content link at top of layout; visible focus outlines.

### 2.5 Privacy-Respecting Analytics (Optional but Recommended)
- [ ] **Decide analytics stance** (none vs self-hosted)
- [ ] If enabled: implement minimal event tracking (install CTA, docs search, enterprise CTA)
  - Acceptance: no third-party trackers by default; document data collected on `/privacy`.
- [ ] **Lead capture (sovereignty-friendly)**
  - Decide:
    - [ ] newsletter/waitlist provider (self-hosted list, email alias, or none)
    - [ ] enterprise intake (form vs mailto)
  - Output: “Get updates” capture surface and/or “Request pilot” intake with explicit privacy disclosure.
  - Acceptance: can be disabled entirely; no third-party trackers by default.

### 2.6 E2E Testing (Lightweight)
- [ ] Add Playwright with 4 smoke flows:
  - [ ] Home → Install
  - [ ] Docs → open doc from sidebar
  - [ ] 404 page renders
  - [ ] Mobile menu opens/closes and links work
- [ ] CI runs `lint` + `typecheck` + `build` + Playwright smoke

---

## 3) Phase 2 (Months 4–6): Feature Expansion (Ecosystem + Proof)

### 3.1 Trust Center (Enterprise-Grade Story)
- [ ] Create `/trust` (or `/security`) page:
  - Threat model for remote viewing / relay
  - Audit log schema examples
  - Policy ladder with examples
  - What is local vs remote (sovereignty boundaries)
- [ ] Add structured “security posture” section:
  - BYO keys
  - Logging defaults
  - Data retention / user control

### 3.2 Comparison + Category Education
- [ ] Create `/comparison` page:
  - “System operator vs chatbots”
  - Competitive matrix (Warp, Open Interpreter, Copilot CLI, Cursor, etc.)
  - Clear differentiators: voice, remote view, safety ladder, multi-LLM, MCP ecosystem
- [ ] Add “What is a system operator?” explainer module (reused in Home, Product, Docs start)

### 3.3 Case Studies & Social Proof
- [ ] Create `/case-studies` and publish 6–10 mini case studies
  - Each: problem, environment, approvals shown, artifacts (screenshots/log excerpt), outcome.
- [ ] Optional: GitHub stats component (stars, contributors) fetched at build time or cached (avoid runtime dependency).

### 3.4 Recipes Library (Make Community Contribution Real)
- [ ] Define recipes taxonomy (tags, personas, risk level)
- [ ] Create `/recipes` real library (not placeholder)
- [ ] Add contribution pipeline for recipes (lint rules, schema validation)

### 3.5 Docs Versioning Strategy (Minimum)
- [ ] Decide: single-current vs versioned docs
- [ ] If versioned: implement URL/version dropdown and content pipeline

### 3.6 API Reference & Dev Documentation
- [ ] **Auto-generate an API reference from TypeScript**
  - Output: generated reference under `/docs/reference/` (e.g., TypeDoc).
  - Acceptance: deterministic generation; runs in CI; does not require network.

---

## 4) Phase 3 (Months 7–12): Polish & Scale

### 4.1 Internationalization / Localization (If Desired)
- [ ] Choose i18n approach (`next-intl`, built-in routing)
- [ ] Start with 1 additional language and a translation workflow

### 4.2 Visual Regression & Design Maturity
- [ ] Add screenshot-based regression on key pages (Home, Install, Docs, Safety, Enterprise)
- [ ] Build a diagrams/illustrations library for architecture + trust pages

### 4.3 Performance Budgets & Monitoring
- [ ] Define budgets (JS size per route, LCP targets)
- [ ] Add monitoring in CI (Lighthouse CI or equivalent)

### 4.4 Editorial Cadence (Blog/Updates)
- [ ] Launch `/updates` and publish monthly posts
- [ ] Create a release post template and a contribution process
- [ ] **A/B testing (only if analytics enabled)**
  - Output: minimal experiment framework (feature flags) to test CTA copy/layout.
  - Acceptance: privacy-respecting; documented; can be disabled entirely.

---

## 5) Cross-Cutting Backlog (Do Anytime, but Don’t Skip)

### 5.1 Documentation Content Pipeline
- [ ] Stop relying on network scraping (`scripts/migrate_docs.mjs`) for core docs content.
- [ ] Prefer local docs ingestion:
  - `docs/` (upstream Gemini CLI docs)
  - `docs-terminai/` (TerminaI specific)
  - Migration scripts should be deterministic and repo-local.
- [ ] **Decide content authoring workflow (“CMS integration”)**
  - Option A: Git-based MDX only (recommended: sovereignty + simplicity)
  - Option B: Headless CMS (only if self-hostable and not a hard runtime dependency)
  - Output: documented workflow (where content lives, review steps, deployment path).

### 5.2 Content/Code Consistency Checks (Automation)
- [ ] Add a script to detect:
  - [ ] `href="#"` occurrences
  - [ ] `termAI` vs `terminaI` string drift
  - [ ] internal `<a href="/...">` usage
- [ ] Run these checks in CI.

### 5.3 Security & Privacy Hygiene
- [ ] Keep `/privacy` aligned with actual data flows and any analytics decision.
- [ ] Ensure any embedded media respects sovereignty-first principles (self-host preferred).
- [ ] **Rollback/preview strategy**
  - Output: documented rollback steps for Cloud Run + (optional) preview deployments per PR.
  - Acceptance: quick rollback is practiced and repeatable; staging environment exists if chosen.

---

## 6) Verification Gates (Per Milestone)

### Gate A (End of Phase 0)
- [ ] `npm run lint` passes
- [ ] `npm run build` completes without network
- [ ] All nav links are canonical and correct
- [ ] `sitemap.xml` contains only valid routes
- [ ] 404 page exists and works
- [ ] No placeholder links (`href="#"`)

### Gate B (End of Phase 1)
- [ ] Persona pages + Start Here funnel complete
- [ ] Docs search works (Cmd+K)
- [ ] Playwright smoke tests pass in CI

### Gate C (End of Phase 2)
- [ ] Trust Center live
- [ ] Comparison + Case studies live
- [ ] Recipes library is real and contributable

### Gate D (End of Phase 3)
- [ ] Visual regression tests exist
- [ ] Performance budgets tracked
- [ ] Editorial cadence established

---

## 7) Mapping to Existing Implementation Plan (`WEBSITE_TASKS.md`)

The following items already have detailed specs in `WEBSITE_TASKS.md` and should be executed/checked off as part of Phase 0/1:
- [ ] Update `SiteHeader` navigation (`WEBSITE_TASKS.md:47`)
- [ ] `/free`, `/intelligence`, `/extensibility`, `/safety`, `/install`, `/contact` routes (Phase 2 tasks in `WEBSITE_TASKS.md`)
- [ ] Home page improvements (Hero copy, AudienceCards) (`WEBSITE_TASKS.md:1745`)
- [ ] Footer updates (`WEBSITE_TASKS.md:1928`)

---

## 8) Owner/Timeline Template (Copy per Epic)

Use this block per epic:

```
Epic:
Owner:
Start:
Target:
Dependencies:
Definition of Done:
Verification commands:
Artifacts/links:
```
