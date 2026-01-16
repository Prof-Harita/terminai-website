# Website V3 Strategy: Unbridled Intelligence, Governed Action

**Date:** 2026-01-16
**Status:** READY FOR EXECUTION
**Core Thesis:** Aspirational Capability + Visible Guardrails = Trust + Growth.

---

## The Copywriting Rule (L-1 Compliant Hype)

The deep research report (`work.md`) provides the formula:

> **"OK to be aspirational ('unbridled capability') ONLY if paired with guardrails."**

This means:

- ✅ **KEEP:** "Unbridled Intelligence" (on `/intelligence` page).
- ✅ **PAIR IT WITH:** "...powered by a governed agentic harness."
- ❌ **REMOVE:** "unfiltered, unbridled AI" (implies _no_ filters).
- ❌ **REMOVE:** "controls your entire computer" (implies _no_ user control).

The distinction:
| Concept | "Bad" (No Guardrails) | "Good" (With Guardrails) |
| :--- | :--- | :--- |
| Power | "Controls your computer" | "Operates your OS – with you in charge" |
| Freedom | "Unfiltered, unbridled AI" | "Unbridled _intelligence_, governed _action_" |
| Capability | "SOTA" (unverified) | "State-of-the-art models (Gemini 2.5 Pro)" |

---

## Atomic Task List (from `work.md` Section F)

This is the **complete, implementation-ready list** from the deep research report. Execute in P0 -> P1 -> P2 order.

### P0 — Must-Do Before Growth Push

| ID     | Scope                                    | Change                                                                                                                                                                                                                                                                                                           | Acceptance                                       |
| :----- | :--------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| **T1** | `SiteFooter.tsx`                         | Replace "controls your entire computer" with "helps operate your entire computer – **with you in charge**."                                                                                                                                                                                                      | Footer text updated.                             |
| **T2** | `contribute/page.tsx`                    | Remove "unfiltered, unbridled AI". Replace with "powerful open AI for users."                                                                                                                                                                                                                                    | No "unbridled" or "unfiltered" in file.          |
| **T3** | `SiteHeader.tsx`                         | Update nav to: **Overview**, **Quickstart**, **Recipes**, **Trust & Safety**, **Docs**, **Contribute**. Remove: "Always Free", "Intelligence", "Extensibility", "Use Cases", "Updates".                                                                                                                          | Header has 6 items.                              |
| **T4** | `install/page.tsx`                       | Add "NPM (Recommended)" section with `npm install -g @terminai/cli`. Link to GitHub Releases for desktop apps.                                                                                                                                                                                                   | NPM is the first install option.                 |
| **T5** | `safety/page.tsx`, `trust/page.tsx`      | Consolidate. Redirect `/safety` to `/trust`. Ensure "Approval Ladder" (Level A/B/C) content is on `/trust`.                                                                                                                                                                                                      | `/safety` redirects.                             |
| **T6** | `intelligence/page.tsx`                  | **Keep "Unbridled Intelligence"** as H1. **Change subhead** to "An advanced agentic harness, powered by state-of-the-art AI models." Remove "SOTA" claims for 2M context; use "massive context window (~2M tokens)". Change "Enterprise option via Vertex AI" to "Available via Vertex AI for enterprise users." | Hype is present but paired with grounded claims. |
| **T7** | `free/page.tsx`, `intelligence/page.tsx` | Add "Provider Agnostic" notes. E.g., "Works with Gemini, OpenAI, or Local Models."                                                                                                                                                                                                                               | Clear multi-provider messaging.                  |

### P1 — Should Do Within a Week

| ID      | Scope              | Change                                                                                                                                           | Acceptance             |
| :------ | :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| **T8**  | `install/page.tsx` | Add "No Services" disclaimer: "TerminaI is self-hosted. We don't operate cloud servers or telemetry."                                            | Disclaimer visible.    |
| **T9**  | Header Nav Targets | Verify all nav links work. Add `id` anchors to sections if needed (e.g., `#approval-ladder` on Trust page).                                      | No 404s.               |
| **T10** | `Hero.tsx`         | Update hero to `work.md` D1 copy: **"Ask Anything – Execute with Confidence."** Subhead: **"An AI Operator for Your Entire OS, on Your Terms."** | Hero matches new copy. |
| **T11** | `trust/page.tsx`   | Add placeholders for media: `<!-- TODO: Approval Screenshot -->`, `<!-- TODO: Audit Log Screenshot -->`.                                         | Placeholders in code.  |
| **T12** | Global             | Content sweep. Grep for "sales", "enterprise" (outside Vertex context), "sponsor", "donation". Remove any L-1 violations.                        | Zero forbidden terms.  |

### P2 — Nice-to-Have

| ID      | Scope   | Change                                                                  | Acceptance          |
| :------ | :------ | :---------------------------------------------------------------------- | :------------------ |
| **T13** | Various | Implement anchor deep-links (e.g., `/trust#audit`).                     | Section links work. |
| **T14** | DevOps  | Confirm deployment pipeline (Vercel?). Run `npm run build` to validate. | Build passes.       |
| **T15** | Media   | Optimize any new images (<200KB).                                       | Fast page loads.    |
| **T16** | Footer  | Verify "OI Architecture" link. If dead, remove.                         | No dead links.      |

---

## Manual Tasks (for User)

1.  **Screenshot 1:** "Approval Prompt" (`~/.terminai` terminal with `[Y/n]`). Save to `public/media/terminai-approval-prompt.png`.
2.  **Screenshot 2:** "Audit Log" (JSON from `~/.terminai/logs/audit/`). Save to `public/media/terminai-audit-log.png`.
3.  **Demo Video (30s):** "End-to-End Flow" (Ask -> Plan -> Approve -> Execute). Save to `public/media/terminai-demo.mp4`.
4.  **Final Review:** Walk through site. Confirm "Unbridled" is paired with "Governed". Confirm zero "Sales" vibes.

---

## Handoff Contract

- **Execution Order:** P0 -> P1 -> P2.
- **Commits:** One per Task ID (e.g., `feat(T1): update footer tagline`).
- **L-1 Rule:** "Unbridled" power is OK. _"Unfiltered"_ or _"controls your computer"_ is NOT.
- **Verification:** `npm run build` must pass. Run grep checks for removed terms.

**Agent A Sign-off:** V3 Plan Locked. Balance achieved.
