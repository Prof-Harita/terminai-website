# Deep Research Prompt: AI Developer Tool Website Materials Collection

## Objective

Scrape and collect **verbatim materials** from 10 AI developer tool websites. Do NOT synthesize, do NOT create new content, do NOT apply these to any specific product. Simply **extract and catalog** everything that could be reused as a template.

The output should be 60-100 pages of **raw materials organized by category**.

---

## Target Websites

1. **Cline** - https://cline.bot
2. **Aider** - https://aider.chat
3. **Roo Code** - https://roocode.com
4. **OpenHands** - https://all-hands.dev
5. **Plandex** - https://plandex.ai
6. **Coolify** - https://coolify.io
7. **Jan.ai** - https://jan.ai
8. **AnythingLLM** - https://anythingllm.com
9. **Dify** - https://dify.ai
10. **Fabric** - https://github.com/danielmiessler/fabric

---

## Part 1: Verbatim Copy Extraction (Pages 1-30)

For EACH website, extract the following **word-for-word**:

### A. Hero Section

- Exact headline text
- Exact subheadline text
- Primary CTA button text
- Secondary CTA button text
- Trust bar text (the small line under buttons)
- Any badges or social proof elements

### B. Feature Headlines & Descriptions

For every feature mentioned on the landing page:

- Feature headline (verbatim)
- Feature description (verbatim)
- Note: Which icon library appears to be used (Lucide, Heroicons, custom SVG)

### C. "How It Works" Steps

- Step number
- Step title
- Step description
- (If present) Step visual description

### D. Security/Privacy Claims

- Every sentence about privacy, security, or data handling (verbatim)
- Every mention of "local", "offline", "self-hosted", "sovereign"
- Every mention of open-source licensing

### E. Comparison Tables

If the site has a comparison table:

- Full table content (rows and columns)
- What competitors are named

### F. Social Proof

- Testimonial quotes (verbatim)
- Company logos shown
- GitHub star counts
- Any statistics mentioned ("100k+ users", etc.)

### G. Footer Content

- All link categories
- All link labels
- Any slogans or taglines

---

## Part 2: Navigation & Sitemap (Pages 31-40)

For EACH website:

### A. Top Navigation

- List every link label in the navbar
- Note which links have dropdowns
- For dropdowns, list all sub-items

### B. Page Routes

- List every unique page URL discovered
- Note the apparent information architecture

### C. Mobile Navigation

- How does it collapse?
- Any differences from desktop?

---

## Part 3: Visual Patterns & Components (Pages 41-55)

For EACH website, describe:

### A. Color Palette

- Primary brand color (hex if visible)
- Background color (light/dark)
- Accent colors used

### B. Typography

- Heading font (if identifiable)
- Body font (if identifiable)
- Code font (if used)

### C. Component Patterns

For each pattern used, describe structure:

- **Bento Grid**: How many columns? Card styling?
- **Hero Terminal**: Is there an ASCII demo? How styled?
- **Feature Cards**: Icon placement? Hover effects?
- **Code Blocks**: Copy button? Syntax highlighting?
- **Comparison Grid**: Column styling? Icons used?

### D. Animations

- Hero animations (typing effect, etc.)
- Hover effects
- Scroll animations
- Loading states

---

## Part 4: Installation & CTA Patterns (Pages 56-65)

For EACH website:

### A. Installation Commands

Extract every installation command shown verbatim:

- npm/yarn commands
- curl/bash commands
- brew commands
- Docker commands

### B. CTA Button Inventory

- Primary CTA text
- Secondary CTA text
- CTA placement (hero, sticky nav, mid-page, footer)
- Button styling notes (filled, outline, pill shape, etc.)

### C. Lead Capture

- Is there a waitlist?
- Newsletter signup?
- Contact form?
- Demo booking?

---

## Part 5: Trust & Enterprise Signals (Pages 66-75)

For EACH website:

### A. Open Source Messaging

- Exact phrases used about open source
- License mentioned
- GitHub repository prominently displayed?

### B. Enterprise Features

- Enterprise page present?
- Enterprise-specific claims extracted verbatim
- Compliance mentions (SOC2, GDPR, etc.)
- Self-hosting/on-prem mentions

### C. Data Privacy Claims

- Every sentence about where data is stored
- Every sentence about data not leaving the device
- BYOK (Bring Your Own Key) mentions

---

## Part 6: Unique Differentiating Elements (Pages 76-90)

For EACH website, note what makes it structurally unique:

### A. Coolify

- How do they present "self-hosted alternative to X"?
- One-click service grid structure

### B. Jan.ai

- Hardware requirements presentation
- Offline-first messaging style

### C. Aider

- ASCII demo implementation
- Benchmark/leaderboard presentation

### D. Roo Code

- "Modes" presentation
- Community fork messaging

### E. OpenHands

- Enterprise funding announcement bar
- Sandbox/security messaging

### F. Fabric

- README-as-landing-page structure
- Pattern library presentation

### G. Dify

- Workflow visualization
- Backend-as-a-Service positioning

### H. Plandex

- Context window emphasis
- Terminal-native focus

### I. AnythingLLM

- Desktop app download flow
- Model provider flexibility messaging

### J. Cline

- IDE integration pitch
- Plan & Act mode explanation

---

## Part 7: Reusable Templates (Pages 91-100)

Create **blank templates** extracted from patterns observed:

### A. Hero Section Template

```
[HEADLINE]: ___________
[SUBHEADLINE]: ___________
[PRIMARY CTA]: ___________
[SECONDARY CTA]: ___________
[TRUST BAR]: Open Source • _____ • _____
```

### B. Feature Card Template

```
[ICON]: (Lucide icon name)
[TITLE]: _____ (5 words max)
[DESCRIPTION]: _____ (2 sentences)
```

### C. "How It Works" Template

```
Step 1: [VERB] - [Description]
Step 2: [VERB] - [Description]
Step 3: [VERB] - [Description]
Step 4: [VERB] - [Description]
```

### D. Comparison Grid Template

```
| Pain Point | Solution |
| __________ | __________ |
| __________ | __________ |
```

### E. Testimonial Template

```
"[Quote about specific benefit]"
— [Name], [Title] at [Company]
```

### F. Trust Badge Bar Template

```
[Badge 1] • [Badge 2] • [Badge 3] • [Badge 4]
```

### G. Navigation Template

```
[Category 1 (Dropdown)]
  - [Subitem]
  - [Subitem]
[Category 2]
[Category 3]
[CTA Button]
```

---

## Output Format Requirements

1. **DO NOT** invent content - only extract what exists
2. **DO NOT** synthesize or apply to any product
3. **USE** exact quotes with quotation marks
4. **CITE** which website each item came from
5. **ORGANIZE** by category, not by website
6. **INCLUDE** screenshots URLs where relevant
7. **NOTE** when something is missing from a site

---

## Why This Approach?

By collecting raw materials without a target product in mind, we avoid:

- Forcing irrelevant patterns onto our use case
- Missing patterns that don't match preconceptions
- Biasing the output toward one interpretation

The collected materials become a "design system library" we can adapt as needed.
