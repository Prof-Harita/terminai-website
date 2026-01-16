# Agent B Execution Prompt: TerminaI Website Update

## Context

You are Agent B, a coding agent executing a pre-approved task list for the TerminaI website (`terminai.org`). The goal is L-1 Safe, Maximum Growth positioning.

**Workspace:** `/home/profharita/Code/terminai-website`
**Task List:** `/home/profharita/Code/terminai-website/tasks_website.md`
**Deep Research:** `/home/profharita/Code/terminai-website/work.md`

---

## Phase 1: Preparation

1.  **Read the task list:**

    ```bash
    cat /home/profharita/Code/terminai-website/tasks_website.md
    ```

2.  **Ensure clean working tree:**

    ```bash
    cd /home/profharita/Code/terminai-website
    git status
    git pull origin main
    ```

3.  **Install dependencies and verify build:**
    ```bash
    npm install
    npm run build
    ```
    _If build fails, stop and report._

---

## Phase 2: Execute Tasks (P0 -> P1)

Execute each task from `tasks_website.md` in order. For each task:

1.  **Read the file** to understand current state.
2.  **Make the change** as specified.
3.  **Verify with grep** (for removal tasks) or visual inspection.
4.  **Commit atomically:**
    ```bash
    git add <file>
    git commit -m "feat(T<N>): <description>"
    ```

### Task Execution Order:

| ID  | File                                             | Action                                                                                               |
| :-- | :----------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| T1  | `src/components/SiteFooter.tsx`                  | Replace "controls your entire computer" -> "helps operate your entire computer – with you in charge" |
| T2  | `src/app/contribute/page.tsx`                    | Replace "unfiltered, unbridled AI" -> "powerful open AI"                                             |
| T3  | `src/components/SiteHeader.tsx`                  | Simplify nav to 6 items                                                                              |
| T4  | `src/app/install/page.tsx`                       | Add NPM install section above source build                                                           |
| T5  | `src/app/safety/page.tsx`                        | Add redirect to `/trust`                                                                             |
| T6  | `src/app/intelligence/page.tsx`                  | Keep "Unbridled Intelligence", fix subhead/SOTA claims                                               |
| T7  | `src/app/free/page.tsx`, `intelligence/page.tsx` | Add multi-provider notes                                                                             |
| T8  | `src/app/install/page.tsx`                       | Add "No Services" disclaimer                                                                         |
| T9  | Header                                           | Verify nav links                                                                                     |
| T10 | `src/components/Hero.tsx`                        | Update hero copy                                                                                     |
| T11 | `src/app/trust/page.tsx`                         | Add media placeholders                                                                               |
| T12 | Global                                           | Grep for forbidden terms                                                                             |

---

## Phase 3: Final Verification

1.  **Run build:**

    ```bash
    npm run build
    ```

    _Must pass with 0 errors._

2.  **Run lint:**

    ```bash
    npm run lint
    ```

3.  **Grep verification:**
    ```bash
    grep -r "controls your entire computer" src/
    grep -rE "unbridled|unfiltered" src/app/contribute/
    grep -r "contact sales" src/
    ```
    _All should return 0 matches._

---

## Phase 4: Commit, Push, Monitor

1.  **Push to origin:**

    ```bash
    git push origin main
    ```

2.  **Monitor CI:**

    - Open GitHub Actions: `https://github.com/Prof-Harita/terminai-website/actions`
    - Wait for green status on all checks.
    - If any check fails, read logs and fix.

3.  **Verify deployment:**
    - Open `https://terminai.org` in browser.
    - Verify:
      - [ ] Footer text updated.
      - [ ] Nav has 6 items.
      - [ ] `/safety` redirects to `/trust`.
      - [ ] Hero copy updated.
      - [ ] No "SOTA" claims.

---

## Safety Rules (Non-Negotiable)

1.  **Never add:** "Contact Sales", "Pricing", "Enterprise Support", "Schedule Demo", "Subscribe".
2.  **"Unbridled Intelligence" is OK** because it's paired with "governed agentic harness".
3.  **"Controls your computer" is NOT OK** because it implies no user control.
4.  **One commit per task.** No squashing.
5.  **If unsure, ask.** Don't guess.

---

## Completion Report

After all tasks are done and deployed, provide a summary:

```
## Website Update Complete

**Commits:** <list of commit hashes>
**CI Status:** ✅ Green
**Live URL:** https://terminai.org
**Verification:**
- [x] Footer updated
- [x] Nav simplified
- [x] Hero updated
- [x] No L-1 violations
```

---

**BEGIN EXECUTION.**
