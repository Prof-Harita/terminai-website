# Deep Research Prompt: TerminaI Website Refactor Blueprint

## Objective

Generate a comprehensive **60-100 page report** that serves as the complete implementation blueprint for refactoring the TerminaI website. This report must contain **ready-to-use copy**, **component specifications**, **visual references**, and **structured content** that can be directly translated into React/Next.js components without additional research.

---

## Part 1: Competitive Analysis Deep Dive (Pages 1-25)

### Target Websites to Analyze

For each of the following 10 websites, provide a detailed breakdown:

1. **Cline** (cline.bot) - VS Code AI Coding Assistant
2. **Aider** (aider.chat) - Terminal-based AI Pair Programmer
3. **Roo Code** (roocode.com) - Community Fork of Cline
4. **OpenHands** (all-hands.dev) - Open-Source AI Software Engineer
5. **Plandex** (plandex.ai) - Terminal AI Coding Engine
6. **Coolify** (coolify.io) - Self-Hosted PaaS
7. **AnythingLLM** (anythingllm.com) - Local LLM Desktop App
8. **Jan.ai** (jan.ai) - Offline AI Assistant
9. **Dify** (dify.ai) - LLM Application Builder
10. **Fabric** (github.com/danielmiessler/fabric) - AI Prompt Framework

### For Each Website, Extract:

#### A. Landing Page Structure

- Full section-by-section breakdown (Hero, Features, Social Proof, CTA, Footer)
- Exact headline and subheadline copy
- Button text and placement
- Visual elements (terminal demos, screenshots, diagrams)

#### B. Navigation Architecture

- Top navigation items and dropdowns
- Footer link structure
- Mobile navigation pattern

#### C. Feature Presentation

- How they describe their core features
- Icon usage and visual hierarchy
- Comparison tables or grids used
- "How it Works" section format

#### D. Trust & Security Messaging

- Privacy/security claims verbatim
- Open-source positioning language
- Badges, certifications, or trust signals used

#### E. Call-to-Action Patterns

- Primary CTA text and styling
- Secondary CTA positioning
- Installation command presentation (npm/curl/etc.)

---

## Part 2: Content Synthesis for TerminaI (Pages 26-50)

### Context: What is TerminaI?

TerminaI is a sovereign fork of Google's Gemini CLI. It is:

- An AI-powered terminal operator for laptops and servers
- Voice-enabled (offline STT/TTS with barge-in)
- Remotely controllable via A2A (Agent-to-Agent) protocol
- Privacy-first with a tiered "Approval Ladder" for command execution
- Multi-LLM compatible (Gemini, OpenAI, Anthropic, Local models)

### Generate Ready-to-Use Copy for These Sections:

#### A. Hero Section

- **3 headline variations** (action-oriented, benefit-focused, curiosity-driven)
- **3 subheadline variations** for each headline
- **Primary CTA button text** (2-3 options)
- **Secondary CTA text** (2-3 options)
- **Trust bar copy** (the small line under buttons, e.g., "Open Source • 10k+ Stars • Apache 2.0")

#### B. "Pain vs. Power" Comparison Section

- **Left column (The Problem)**: 5-7 pain points of traditional AI chatbot workflows
- **Right column (The Solution)**: Corresponding TerminaI solutions
- Include suggested icons for each point (from Lucide React library)

#### C. Feature Bento Grid

Generate content for 6 feature cards:

1. **Voice Commands**

   - Headline (5 words max)
   - Description (2 sentences)
   - Suggested visual element

2. **Web Remote (A2A)**

   - Headline, Description, Visual

3. **Approval Ladder (Safety)**

   - Headline, Description, Visual

4. **Multi-LLM Support**

   - Headline, Description, Visual

5. **MCP Ecosystem**

   - Headline, Description, Visual

6. **Context Indexing (Tree-sitter)**
   - Headline, Description, Visual

#### D. "How It Works" Section

- 4-step process explanation
- Headline for each step
- 1-sentence description for each
- Suggested icon for each

#### E. Technical Architecture Section

- Diagram description (Mermaid syntax preferred)
- 3-4 bullet points explaining the stack
- "For Power Users" expanded explanation

#### F. Social Proof / Trust Section

- Suggested testimonial templates (3)
- GitHub stats presentation format
- "Built on Gemini CLI" positioning copy

#### G. Final CTA Section

- Headline (compelling close)
- Subheadline
- Button text
- "Need Help?" support link text

---

## Part 3: Page-by-Page Content Specifications (Pages 51-75)

### Generate Complete Content for Each Page:

#### `/` - Landing Page

Already covered above.

#### `/docs` - Documentation Hub

- Welcome message (2 paragraphs)
- "Getting Started" card descriptions
- "Key Features" card descriptions
- Sidebar category structure

#### `/voice` - Voice Commands Deep Dive

- Page headline and intro paragraph
- "How Offline Voice Works" section (3-4 paragraphs)
- Hardware requirements callout box
- Comparison: Cloud vs. Offline STT
- Setup instructions (numbered steps)

#### `/remote` - A2A Protocol & Remote Management

- Page headline and intro
- "What is A2A?" explainer (3 paragraphs)
- Security model explanation
- Desktop app features list
- Setup guide outline

#### `/safety` - The Approval Ladder

- Page headline
- Introduction to the philosophy (2 paragraphs)
- The 3-tier explanation (A, B, C levels)
- Configuration examples (TOML snippets)
- FAQ section (5 questions)

#### `/recipes` - Prompt Pattern Library

- Page intro
- Category structure (DevOps, Coding, Analysis, etc.)
- 10 sample recipe cards with:
  - Title
  - Description
  - Tags
  - Example prompt snippet

#### `/architecture` - Technical Deep Dive

- Full OI Architecture comparison table content
- Component diagram description
- Package structure explanation

#### `/mcp` - MCP Ecosystem

- What is MCP? (2 paragraphs)
- List of supported servers (10+)
- How to connect custom MCP servers

---

## Part 4: Component & Visual Specifications (Pages 76-90)

### UI Component Inventory

For each component, specify:

- Tailwind CSS class suggestions
- Animation/interaction notes
- Dark mode considerations

#### Components Needed:

1. **Hero Terminal Demo** - ASCII animation container
2. **Bento Grid Card** - Feature card with icon, title, description
3. **Comparison Grid** - Two-column pain/solution layout
4. **Code Block (Copyable)** - Installation command with copy button
5. **Trust Badge Bar** - Horizontal list of trust signals
6. **Step Card** - "How it Works" numbered step
7. **Testimonial Card** - Quote with avatar and attribution
8. **Recipe Card** - Pattern library item
9. **Page Header** - Consistent page title + breadcrumb
10. **Mermaid Diagram Wrapper** - Architecture visualization

### Color & Typography Notes

- Primary accent color: Brand Red (#E2231A)
- Background: Near-black (#050505) or cream (#FDFCF8)
- Font stack suggestions for headings vs. body vs. code

---

## Part 5: Implementation Priorities & Quick Wins (Pages 91-100)

### Prioritized Implementation Order

Rank sections by:

1. Impact on conversion
2. Ease of implementation
3. Content readiness

### Quick Wins

- 5 low-effort, high-impact changes
- Copy-paste ready snippets

### Content Gaps Identified

- What needs screenshots/demos?
- What requires user testimonials?
- What depends on missing documentation?

### SEO & Meta Recommendations

- Page titles for each route
- Meta descriptions
- Open Graph image suggestions

---

## Output Format Requirements

1. **Use Markdown formatting** throughout
2. **Include code blocks** for any copy that should be used verbatim
3. **Use tables** for comparisons and structured data
4. **Provide alternatives** where subjective (e.g., 3 headline options)
5. **Reference specific competitor examples** when borrowing patterns
6. **Include Lucide React icon names** for suggested icons
7. **Use Mermaid syntax** for diagrams

---

## Final Note

This research output will be used to implement the website refactor in a single session. The goal is **zero ambiguity** - every section should be implementable without additional research or creative decisions. When in doubt, provide more detail rather than less.
