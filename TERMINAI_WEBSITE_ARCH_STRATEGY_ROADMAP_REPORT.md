# TerminaI Website Professionalization & Strategic Roadmap (12 Months)
Document type: Research commission (Architectural, Strategic & Specification Report)  
Repository: `/home/profharita/Code/terminai-website`  
Date: 2025-12-26  

## Table of Contents
1. Executive Summary
2. Current State Snapshot (What Exists Today)
3. Per-Area Deep Dive (7.1–7.7)
4. User Journey Redesign (4 Personas)
5. Information Architecture Proposal (Revised Sitemap + Navigation)
6. Technical Recommendations (Performance, SEO, Testing, CI/CD, Security)
7. Content Strategy (Gaps, Copy, New Pages, Media Plan)
8. Design System Evolution (Components, Motion, Accessibility)
9. Sequencing & Roadmap (Phase 0–3, Dependencies, T‑Shirt Sizing)
10. Risk Assessment
11. Open Questions
12. Appendix A: Evidence & Observations (Repo Findings)

---

## 1. Executive Summary

### Key Findings
1. **Positioning is strong, but the information architecture is fragmented.** There are multiple overlapping routes that tell similar stories (`/use-cases` vs `/capabilities`, `/install` vs `/download`, `/product` vs dedicated product pages). This dilutes SEO, confuses visitors, and complicates maintenance.
2. **Core “trust story” is present but not operationalized as a conversion asset.** Safety is explained (approval ladder, audit), but there is no “trust funnel” that turns safety into enterprise confidence (proof, architecture diagrams, policies, audits, deployment patterns).
3. **Docs are close to being a moat, but the experience is inconsistent.** There is a large docs corpus (Gemini CLI + TerminaI-specific), yet the site has a split visual language (forced dark + light docs), duplicated MDX rendering code, and unclear “Start Here” orientation.
4. **Build and quality gates are not yet “professional-grade.”** Lint currently fails on multiple pages (internal links, JSX entities, JSX comment text nodes), and production builds are at risk of hanging or being non-reproducible in restricted-network environments due to `next/font/google`.
5. **Enterprise story conflicts with “Free Forever” unless reframed.** The enterprise page presents SaaS-like pricing tiers; this may contradict “Always Free / Apache 2.0” unless clarified as “paid support / hosted relay / enterprise services” rather than licensing the core product.

### Top 5 Priorities (Recommended)
1. **Unify IA + remove/redirect duplicates** (home → persona paths; docs → single integrated system; one install flow).  
2. **Fix correctness and credibility gaps** (repo links, install commands, sitemap accuracy, broken placeholders, 404).  
3. **Professionalize docs experience** (single docs theme, “Start Here”, local search, cross-linking, versioning strategy).  
4. **Performance + reliability baseline** (reduce unnecessary client components, remove build-time network dependencies, Core Web Vitals).  
5. **Conversion assets** (demos, social proof, enterprise trust center, lead capture) consistent with sovereignty-first principles.

### Impact vs Effort (High-Level)
| Initiative | Impact | Effort | Notes |
|---|---:|---:|---|
| IA consolidation + redirects | Very High | Medium | Unlocks clarity + SEO + maint. |
| Fix install, links, sitemap, 404 | High | Small | Immediate credibility lift. |
| Docs redesign + “Start Here” + search | Very High | Large | Primary moat; highest leverage. |
| Build reliability (fonts, scripts, CI gates) | High | Medium | Prevents regressions + speeds iteration. |
| Demo/video + trust center + lead capture | High | Medium | Drives conversion across personas. |

---

## 2. Current State Snapshot (What Exists Today)

### Product + Brand Narrative
The site’s “vibe” (monospace, black/white + red cursor, terminal demo) strongly communicates “terminal-native operator”. The Home hero already expresses the central value prop: “controls your entire computer—terminal, apps, screens” with copy and terminal animation.

### Observed Structural Issues
- **Duplicated or competing routes** (SEO dilution + user confusion):
  - `src/app/use-cases/page.tsx` vs `src/app/capabilities/page.tsx`
  - `src/app/install/page.tsx` vs `src/app/download/page.tsx` (and the homepage CTA implies an NPM package that doesn’t match install instructions)
  - `src/app/product/page.tsx` (anchor-based) vs separate `/free`, `/intelligence`, `/extensibility`, `/safety`
- **Navigation mismatch**: Header uses a “Product” dropdown that points to `/product#...`, while the footer points to `/free`, `/intelligence`, etc. This is inconsistent and makes the site feel unfinished.
- **Sitemap mismatch**: `src/app/sitemap.ts` enumerates routes not present in `src/app/` (e.g., `/comparison`, `/case-studies`, `/why-gemini`).
- **Missing 404 page**: No `src/app/not-found.tsx` exists, hurting UX and SEO signals.

### Docs System (Current)
- Docs render from `src/content/docs` via `src/lib/docs.ts` using `gray-matter` and `next-mdx-remote/rsc`.
- Sidebar is client-fetched from `public/docs/sidebar.json`.
- A large docs set exists under `docs/` (Gemini CLI upstream docs) and `docs-terminai/` (TerminaI docs). Scripts exist to migrate docs into `src/content/docs`:
  - `scripts/migrate_local_docs.mjs` maps `docs-terminai` into `src/content/docs`.
  - `scripts/migrate_docs.mjs` scrapes `geminicli.com` (network-dependent; not sovereignty-friendly).

### Quality Gates (Observed)
- `npm run lint` currently fails with multiple `next/link` violations, JSX entity rules, and unused imports; production build was not observed to complete in a restricted-network environment.

---

## 3. Per-Area Deep Dive (7.1–7.7)

### 7.1 User Experience & Information Architecture
**Current state assessment**
- Strong hero and product tone.
- IA fragmentation (duplicated pages, mixed nav approaches, inconsistent CTAs).
- Docs pages have a different visual system than the rest of the site (light docs vs forced dark global).

**Gap analysis**
- No clear persona entry points (“Everyday user”, “Power user/sysadmin”, “Developer”, “Enterprise buyer”).
- No guided onboarding funnel (Learn → Install → First task → Docs).
- Navigation doesn’t communicate the category (“system operator”) as a coherent product concept.

**Recommendations**
- Introduce a **persona switch** and restructure top-level IA around:
  - Product (what it is)
  - Use cases (what you can do)
  - Docs (how to do it)
  - Enterprise (how to deploy safely)
  - Community (how to contribute)
- Collapse duplicates: pick **one canonical** for each concept (Use cases, Install, Product).
- Add a **“Start Here”** funnel:
  - `/start` (or `/docs/start`) with a 5–10 minute “first success” walkthrough for each persona.

**Example implementation / mockup description**
- Home page hero keeps terminal demo, but below it:  
  “Choose your path” cards (4 personas) → each card links to a tailored landing page with a single primary CTA.

---

### 7.2 Content Strategy
**Current state assessment**
- Many pages describe features, but fewer describe *problems solved*.
- Several pages include placeholder links and inconsistent naming (TerminaI vs termAI).
- Enterprise page includes pricing tiers that may conflict with “Always Free” branding.

**Gap analysis**
- Missing “category education”: most people don’t know what a “system operator AI” is.
- Missing proof: demos, screenshots, user stories, adoption metrics, security posture, architecture diagrams.
- Missing “everyday user” framing (e.g., “laptop slow”, “wifi broken”, “disk full”), even though the brand claims it.

**Recommendations**
- Build a **message hierarchy** that starts with outcomes, then differentiators, then architecture:
  1) Problems & outcomes (time saved, fewer incidents, less risk)
  2) What it is (system operator, governed autonomy)
  3) How it works (approval ladder, PTY, remote view)
  4) Why it’s safe (policy, audit, provenance)
  5) Why it’s sovereign (local-first, BYO model keys)
- Add **Proof Assets**:
  - 2–3 short videos (30–60s) showing “ask → watch → approve”.
  - 6–10 “mini case studies” (1 page each) with screenshots and logs.
  - A “Trust Center” page (security posture, logging, approvals, encryption model for relay).
- Reframe enterprise monetization as:
  - “Support, deployment assistance, hosted relay, fleet policy tooling” rather than licensing restrictions on the open source core.

---

### 7.3 Visual Design & Branding
**Current state assessment**
- Brand is distinctive: monospace + red cursor + terminal aesthetic.
- Some pages use bespoke colors and styling (docs light mode, use-cases alternating brown backgrounds), resulting in an uneven system.

**Gap analysis**
- Theme system is partially implemented (CSS variables support `prefers-color-scheme`) but forced dark mode negates it.
- Accessibility risks: contrast, focus states, keyboard nav for dropdown.

**Recommendations**
- Decide and enforce:
  - Either **dark-first with optional light**, or true **theme toggle** with consistent tokens.
  - Docs should match the brand system (not a separate site).
- Establish a small **component “marketing design system”**:
  - Hero, SectionHeader, Bento grid, Persona cards, Trust ladder diagram, Video embed, Quote/testimonial, Case study card, Comparison table, Pricing/plan block (if used).
- Create a “Brand Assets” area (`public/brand/`) with:
  - Wordmark SVGs, favicon set, OG images, diagram primitives.

---

### 7.4 Technical Architecture
**Current state assessment**
- Next.js App Router, TypeScript, Tailwind, Framer Motion; Cloud Run Docker deployment in place.
- MDX rendering exists and content is present.

**Gap analysis**
- Build reproducibility risk: `next/font/google` requires network at build time; in restricted environments builds may stall.
- Lint failures indicate missing baseline quality gates and inconsistent internal linking patterns.
- Many routes are marked `"use client"` unnecessarily, increasing JS payload and harming CWV.
- Sitemap is manually maintained and out of sync.

**Recommendations**
- **Make builds network-independent**:
  - Move to local fonts (`next/font/local`) or vendor JetBrains Mono.
  - Ensure build uses only repo files (no remote scraping in CI).
- **Reduce client components**:
  - Use server components for static marketing pages; isolate Framer Motion to small sections.
- **Automate sitemap**:
  - Generate from `src/app` routes + docs slugs from `src/content/docs`.
- Add a “quality baseline”:
  - `npm run typecheck` script (tsc `--noEmit`) and run in CI.
  - Lint and build required on PRs.

---

### 7.5 Documentation System
**Current state assessment**
- `public/docs/sidebar.json` already contains a comprehensive table of contents spanning CLI, tools, extensions, hooks, etc.
- Content exists under `src/content/docs` and is rendered via App Router.

**Gap analysis**
- Docs UX doesn’t include: “Start Here”, search quality, version strategy, clear separation of “Gemini CLI upstream” vs “TerminaI enhancements”, or a unified visual identity.
- Docs layout duplicates MDX component mapping code across routes (maintenance overhead).

**Recommendations**
- “Docs productization”:
  - Home for docs: “Start Here” (persona tabs) + “What’s different vs upstream” + “Most used tasks”.
  - Split docs into clear namespaces:
    - **TerminaI** (voice, web remote, relay, multi-LLM, safety)
    - **CLI (Upstream)** (commands, tools, extensions, hooks)
  - Add local full-text search via build-time indexing (FlexSearch / MiniSearch).
  - Decide versioning policy:
    - At minimum: “Current” + “Changelog”
    - Later: versioned docs folders and dropdown.

---

### 7.6 Conversion Optimization
**Current state assessment**
- Strong CTAs exist (“Install”, “Star on GitHub”), but funnel is inconsistent across pages.
- No lead capture or enterprise intake form beyond mailto.

**Gap analysis**
- No “first success” path.
- No proof assets (videos, user stories).
- No events/measurement loop.

**Recommendations**
- Add a staged funnel:
  1) Try (install, desktop download, or demo video)
  2) First success checklist (3 tasks)
  3) Join community (Discord/Matrix)
  4) Subscribe (sovereignty-friendly newsletter)
  5) Enterprise inquiry (short form)
- Analytics (privacy-respecting):
  - Self-hosted Umami/Plausible, or minimal server logs; track: install CTA clicks, docs search usage, enterprise CTA clicks.

---

### 7.7 Community & Engagement
**Current state assessment**
- Community pages exist but include placeholder links.
- Contribution messaging exists but points to inconsistent repo URLs.

**Gap analysis**
- No “release narrative”: blog, changelog highlights, “what’s shipping now”, governance transparency.
- No social proof widgets (GitHub stars, contributors, recent releases) or adoption stories.

**Recommendations**
- Add:
  - `/blog` or `/updates` with release posts (monthly).
  - `/community` with real Discord/Matrix links + code of conduct + governance + “good first issues”.
  - “Public Roadmap” with issue links and voting.
  - “Recipes” as a community surface (tagged library + contribution guide).

---

## 4. User Journey Redesign (4 Personas)

### Persona A: Everyday Users (Non-technical)
**Goal:** Fix common computer problems fast, safely.  
**Primary CTA:** “Install” or “Download Desktop App”.  
**Key pages:** Home → “Everyday” landing → Install → First success checklist.  
**Wireframe description:**
- Hero: “Ask it to fix your computer. Watch it do it.” + 30s demo video.
- “Safety you can see”: approval ladder visual with examples (“clean cache”, “restart wifi”, “delete files”).
- “You’re in control”: big “Approve” UI mock.

### Persona B: Power Users / Sysadmins
**Goal:** Reduce toil; safer automation; auditability.  
**Primary CTA:** “See Safety Architecture” + “Install CLI”.  
**Key pages:** Home → “Operators” landing → Safety → Docs/tools → Recipes.  
**Wireframe description:**
- “Operator capabilities” (PTY, process control, TUI support).
- “Policy & audit” (structured logs, provenance, policy files).
- “Remote view / relay” with threat model diagram.

### Persona C: Developers
**Goal:** Extend and integrate; MCP servers; automation workflows; multi-LLM.  
**Primary CTA:** “Read Docs” + “Build an MCP server” tutorial.  
**Key pages:** Home → “Developers” landing → Extensibility → Docs → Contribution guide.  
**Wireframe description:**
- “Build with MCP” quickstart snippet + screenshot.
- “A2A” + “recipes” as integration surfaces.
- “Minimal fork” section explaining upstream compatibility strategy.

### Persona D: Enterprise / Organizational Buyers
**Goal:** Governed autonomy with clear deployment patterns, compliance posture, and support options.  
**Primary CTA:** “Request Pilot” (form) + “Trust Center”.  
**Key pages:** Home → Enterprise → Trust Center → Deployment guide → Contact.  
**Wireframe description:**
- “Risk-first narrative”: “Scale intelligence, not risk.”
- Architecture diagram (local execution, BYO model, audit log pipeline).
- Clear boundaries: what runs locally vs what can be centralized.

---

## 5. Information Architecture Proposal (Revised Sitemap + Navigation)

### Canonical Sitemap (Proposed)
**Top-level**
- `/` Home (category education + persona routing)
- `/product` What TerminaI is (system operator, differentiators)
- `/use-cases` Use Case Library (tagged, filterable)
- `/docs` Documentation (Start Here + full docs)
- `/safety` Safety & Trust (approval ladder, audit, policy, threat model)
- `/enterprise` Enterprise (deployment patterns + intake)
- `/community` Community (Discord/Matrix, governance, contribute)
- `/roadmap` Roadmap (now / next / later, links to issues)
- `/install` Install (single canonical; includes CLI + Desktop)
- `/blog` (Phase 2)
- `/contact`, `/privacy`, `/terms`

### Navigation Recommendations
- Desktop nav: `Product · Use Cases · Docs · Safety · Enterprise · Community` + primary CTA `Install`
- Replace dropdown-anchor navigation unless `/product` is the canonical product narrative page.
- Footer should mirror the canonical sitemap and contain only working links.

### Redirect/Deprecation Plan
- Pick one canonical page for each theme and 301 redirect the rest:
  - `/download` → `/install`
  - `/capabilities` → `/use-cases` (or vice versa)
  - If `/free`, `/intelligence`, `/extensibility`, `/safety` remain: decide if `/product` is redundant.

---

## 6. Technical Recommendations

### Performance Optimization Checklist
- Reduce `"use client"` usage to only components that truly need it (animations, menus); keep pages server-rendered.
- Replace `next/font/google` with local fonts to remove build-time network dependency.
- Use `next/image` for raster assets, and set image sizes explicitly.
- Audit Framer Motion usage: confine to hero/section headers; prefer CSS animations for simple effects.
- Add `prefers-reduced-motion` handling for motion-heavy sections.

### SEO Implementation Checklist
- Ensure each route has:
  - unique title/description, canonical URL, OG/Twitter image
  - structured data: `SoftwareApplication` + `Organization`
- Generate sitemap from real routes + docs slugs (avoid manual lists).
- Add a 404 page and ensure it returns proper status.

### Analytics & Tracking (Sovereignty-Friendly)
- Prefer self-hosted analytics (Umami/Plausible) or minimal log-based metrics.
- Track events: install CTA, docs search, enterprise CTA, outbound GitHub star.

### Search Functionality
- Build-time search index for docs (FlexSearch/MiniSearch) stored in `public/search-index.json`.
- Cmd+K palette can search across docs, use cases, and site pages.

### Documentation Architecture Improvements
- Consolidate MDX rendering components into a single module.
- Add “Start Here” docs page that links to persona quickstarts.
- Add a versioning strategy (Phase 2+).

### Testing Strategy
- Unit tests (Phase 1): component rendering + key utilities (docs slug resolver).
- E2E tests (Phase 1): Playwright flows:
  - Home → Install
  - Docs search
  - 404 behavior
  - Mobile nav open/close + keyboard nav
- Visual regression (Phase 3): screenshot diffs for key pages.

### Build/Deploy Improvements
- CI: require `lint` + `typecheck` + `build` on PRs.
- Add build caching in GitHub Actions (Node cache + Docker layer caching if feasible).
- Consider preview deployments for PRs (Cloud Run revision per PR or separate staging service).

---

## 7. Content Strategy (Gaps, Copy, New Pages, Media Plan)

### Content Gaps (Highest Priority)
- “What is a system operator AI?” category education
- “Trust Center” (security posture, threat model, audit logs, policy controls)
- Quickstart and “first success” tasks per persona
- Demos (video + interactive)
- Competitive comparison (Warp, Open Interpreter, Copilot CLI, Cursor, etc.)
- Social proof (metrics, quotes, case studies)

### New Page Proposals (Specs)
1. **`/start`** (or `/docs/start`): persona tabs + 10-minute first success paths.
2. **`/trust`**: security & governance center (enterprise-friendly).
3. **`/comparison`**: feature matrix + “why system operator” story.
4. **`/case-studies`**: 6–10 cards, each with: problem, steps, approvals, outcome, artifacts.
5. **`/blog` / `/updates`**: releases and tutorials (Phase 2).

### Interactive/Video Roadmap
- Phase 0: 1 short demo video on homepage (hosted on a privacy-respecting platform or self-hosted).
- Phase 1: Interactive terminal “script player” (pre-recorded outputs; no real command execution).
- Phase 2: Safety ladder simulator (“Choose a task → see risk → see approval flow”).

---

## 8. Design System Evolution

### Component Library Recommendations
- Foundational primitives:
  - `SectionHeader`, `Card`, `Callout`, `CodeBlock`, `Tabs`, `Badge`, `Metric`, `Quote`
- Product/marketing components:
  - `PersonaSelector`, `TrustLadder`, `ArchitectureDiagram`, `DemoPlayer`, `CaseStudyCard`
- Docs components:
  - `DocsBreadcrumb`, `DocsTOC`, `DocsSearch`, `Callout` (note/warn/info), `Steps`

### Motion Guidelines
- Default to subtle entrance transitions; reserve heavy motion for hero/demo.
- Respect `prefers-reduced-motion` across the site.

### Accessibility Audit Targets
- Keyboard navigation for header dropdown (focus trapping, `aria-expanded`, ESC to close).
- Color contrast for muted text on dark backgrounds.
- Proper heading structure (one `h1` per page; consistent section headings).
- Skip link at top; visible focus outlines.

---

## 9. Sequencing & Roadmap (12 Months)

### T‑Shirt Sizing
- **S**: 1–2 days
- **M**: 3–5 days
- **L**: 1–2 weeks
- **XL**: 3–6+ weeks

### Phase 0 (Weeks 1–4): Critical Fixes (Credibility + Cohesion)
**Objectives:** eliminate confusion, prevent broken builds, and establish quality gates.
- IA cleanup: pick canonical pages, add redirects (L)
- Fix install commands + repo links everywhere (S)
- Fix sitemap accuracy + automate where possible (M)
- Add `src/app/not-found.tsx` and ensure proper UX (S)
- Make builds network-independent (fonts) (M)
- Make `lint` pass; add `typecheck` script; CI gating (M)
- Docs: add “Start Here” landing, ensure sidebar items exist, fix broken internal links (L)

### Phase 1 (Months 2–3): Foundation Improvements (Conversion + Docs Moat)
**Objectives:** persona routing, docs productization, baseline analytics.
- Persona landings + user flows (L)
- Add demo video + script player (M/L)
- Local docs search index + Cmd+K palette (L)
- Unify theme and docs styling (L)
- Add privacy-friendly analytics + event schema (M)
- Add Playwright E2E for funnel + docs + mobile nav (M)

### Phase 2 (Months 4–6): Feature Expansion (Ecosystem + Proof)
**Objectives:** become the category reference site for “system operator AI”.
- Trust Center (`/trust`) + threat model diagrams (L)
- Comparison + case studies pages (L)
- Recipes library (structured content + contribution workflow) (L/XL)
- Version strategy for docs + changelog integration (L)
- Enterprise deployment content (fleet policies, audit export patterns) (L)

### Phase 3 (Months 7–12): Polish & Scale (Reliability + Reach)
**Objectives:** scale content, improve quality, expand reach.
- Localization / i18n plan and implementation (XL)
- Visual regression testing (M/L)
- Performance budgets + monitoring (M)
- Blog cadence + community growth loops (ongoing) (M)
- Refine brand system + illustration/diagram library (L)

### Dependency Map (Simplified)
- IA consolidation → SEO + conversion clarity → content expansion.
- Build reliability + lint/typecheck → confident iteration → docs/search investment.
- Docs structure → search index → versioning.
- Trust center + proof assets → enterprise funnel.

---

## 10. Risk Assessment

### Technical Risks
- Build-time network dependencies (fonts, scraping) reduce reproducibility and can fail in restricted environments.
- Excessive client components + heavy motion can harm CWV and mobile UX.
- Docs scale + search without a clear content pipeline can become unmaintainable.

### Content Risks
- Overclaiming metrics without proof (e.g., “70% incident reduction”) undermines credibility.
- Enterprise pricing narrative may conflict with “free forever” unless clarified.

### Resource Risks
- Docs + search + trust center are high leverage but require sustained effort; avoid “big bang” rewrites.

### Competitive Risks
- Competitors win on polish and proof; without demos and trust assets, TerminaI will be miscategorized as “another chat tool”.

---

## 11. Open Questions
1. **Canonical product story:** Is `/product` the primary product page, or should `/free`, `/intelligence`, `/extensibility`, `/safety` be the primary product surfaces?
2. **Distribution model:** Is there a real NPM package name today, and what is the canonical install command?
3. **Desktop app status:** Is the Tauri app downloadable today, and for which OSes?
4. **Enterprise offering:** What is paid—support, hosted relay, fleet tooling, SLAs? How to align with “free forever”?
5. **Telemetry stance:** Do we want zero tracking, or privacy-respecting analytics? What is acceptable?
6. **Docs versioning:** How often will the CLI change? Do we need versioned docs now?
7. **Proof assets:** Do we have real user stories and screenshots we can publish today?

---

## 12. Appendix A: Evidence & Observations (Repo Findings)

### A.1 Information Architecture Fragmentation
- Header “Product” dropdown points to `/product#...`: `src/components/SiteHeader.tsx`
- Footer points to `/free`, `/intelligence`, `/extensibility`, `/safety`: `src/components/SiteFooter.tsx`
- Duplicated concepts:
  - `/capabilities` vs `/use-cases`: `src/app/capabilities/page.tsx`, `src/app/use-cases/page.tsx`
  - `/download` vs `/install`: `src/app/download/page.tsx`, `src/app/install/page.tsx`

### A.2 Theme and Docs Style Inconsistency
- Forced dark root: `src/app/layout.tsx`
- Docs layout hardcodes a light background: `src/components/DocsLayout.tsx`

### A.3 SEO/Indexing Issues
- Static sitemap includes routes not implemented: `src/app/sitemap.ts`
- Missing 404 route file: no `src/app/not-found.tsx`

### A.4 Quality Gate Findings
- `npm run lint` currently reports internal `<a>` links, JSX entity issues, and unused imports across multiple pages and components.

### A.5 Build Reproducibility
- `next/font/google` usage indicates build-time font fetching: `src/app/layout.tsx`

