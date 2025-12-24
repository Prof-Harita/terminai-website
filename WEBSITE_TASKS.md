# TerminaI Website - Hyper-Detailed Implementation Plan

> **For Coding Agents**: This document contains exact file paths, code snippets, copy, CSS values, and acceptance criteria. Execute tasks in order within each phase.

---

## Project Context

**Repo**: `/home/profharita/Code/terminai-website`  
**Framework**: Next.js 14+ (App Router)  
**Styling**: Tailwind CSS + CSS custom properties  
**Animation**: Framer Motion  
**Icons**: Lucide React

**Current globals.css design tokens** (already defined):

- `--bg-light: #FDFCF8` (Desert Tan)
- `--bg-dark: #050505` (Void Black)
- `--color-brand-red: #E2231A` (IBM ThinkPad Red)
- `--font-sans: Arial, system fonts`
- `--font-mono: ui-monospace, SFMono-Regular`

---

## Site Structure (NEW)

```
/ (Home)                    - Complete sales pitch
/free                       - Always Free page (FOSS + Gemini + Community)
/intelligence               - Intelligence page (Agentic harness + Tech + Gemini)
/extensibility              - Extensibility page (MCP + TOML + A2A)
/safety                     - Safety page (Trust model + Approval ladder)
/install                    - Installation (REPLACES /download)
/docs                       - Documentation hub (MAJOR REDESIGN)
/contribute                 - Contributing guide
/contact                    - Contact/community links
/enterprise                 - Enterprise features (existing, improve)
/roadmap                    - Future plans (NEW)
/privacy                    - Privacy policy (existing)
/terms                      - Terms of service (NEW)
```

---

## PHASE 1: NAVIGATION & HEADER RESTRUCTURE

### Task 1.1: Update SiteHeader Navigation

**File**: `src/components/SiteHeader.tsx`

**REPLACE** the desktop nav (lines 19-41) with:

```tsx
{
  /* Desktop Nav */
}
<nav className="hidden md:flex items-center gap-6 text-sm">
  <Link
    href="/free"
    className="opacity-80 hover:opacity-100 transition-opacity"
  >
    Always Free
  </Link>
  <Link
    href="/intelligence"
    className="opacity-80 hover:opacity-100 transition-opacity"
  >
    Intelligence
  </Link>
  <Link
    href="/extensibility"
    className="opacity-80 hover:opacity-100 transition-opacity"
  >
    Extensibility
  </Link>
  <Link
    href="/safety"
    className="opacity-80 hover:opacity-100 transition-opacity"
  >
    Safety
  </Link>
  <Link
    href="/install"
    className="opacity-80 hover:opacity-100 transition-opacity"
  >
    Install
  </Link>
  <Link
    href="/docs"
    className="opacity-80 hover:opacity-100 transition-opacity"
  >
    Docs
  </Link>
</nav>;
```

**REPLACE** the mobile menu nav (lines 79-110) with:

```tsx
<nav className="container py-6 flex flex-col gap-4">
  <Link
    href="/free"
    className="text-lg py-2 opacity-80"
    onClick={() => setMobileMenuOpen(false)}
  >
    Always Free
  </Link>
  <Link
    href="/intelligence"
    className="text-lg py-2 opacity-80"
    onClick={() => setMobileMenuOpen(false)}
  >
    Intelligence
  </Link>
  <Link
    href="/extensibility"
    className="text-lg py-2 opacity-80"
    onClick={() => setMobileMenuOpen(false)}
  >
    Extensibility
  </Link>
  <Link
    href="/safety"
    className="text-lg py-2 opacity-80"
    onClick={() => setMobileMenuOpen(false)}
  >
    Safety
  </Link>
  <Link
    href="/install"
    className="text-lg py-2 opacity-80"
    onClick={() => setMobileMenuOpen(false)}
  >
    Install
  </Link>
  <Link
    href="/docs"
    className="text-lg py-2 opacity-80"
    onClick={() => setMobileMenuOpen(false)}
  >
    Docs
  </Link>
  <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
    <Link
      href="/contribute"
      className="text-lg py-2 opacity-60"
      onClick={() => setMobileMenuOpen(false)}
    >
      Contribute
    </Link>
    <Link
      href="/contact"
      className="text-lg py-2 opacity-60"
      onClick={() => setMobileMenuOpen(false)}
    >
      Contact
    </Link>
  </div>
  <div className="pt-4 border-t border-white/10">
    <a
      href="https://github.com/Prof-Harita/terminaI/stargazers"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline w-full justify-center"
    >
      ★ Star on GitHub
    </a>
  </div>
</nav>
```

**REPLACE** the Install button href (line 61):

- FROM: `href="/download"`
- TO: `href="/install"`

**Acceptance**: Navigation shows: Always Free | Intelligence | Extensibility | Safety | Install | Docs

---

## PHASE 2: NEW PAGES CREATION

### Task 2.1: Create /free Route

**Create file**: `src/app/free/page.tsx`

```tsx
import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Unlock, Gift, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Always Free | terminaI",
  description:
    "Free as in freedom. Free as in beer. Open source, Gemini's generous free tier, and community-driven development.",
};

const themes = [
  {
    icon: Unlock,
    title: "Free & Open Source",
    subtitle: "Apache 2.0 Licensed",
    description:
      "Every line of code is visible, auditable, and modifiable. Fork it. Improve it. Ship it. No strings attached.",
    details: [
      "Sovereign fork of Google's Gemini CLI",
      "Full source code on GitHub",
      "Modify and redistribute freely",
      "No vendor lock-in ever",
    ],
    gradient: "from-amber-500 to-orange-500",
    link: "https://github.com/Prof-Harita/terminaI",
  },
  {
    icon: Gift,
    title: "Gemini's Generous Free Tier",
    subtitle: "No Credit Card Required",
    description:
      "Built on Google's Gemini API which offers substantial free usage. Most users will never need to pay.",
    details: [
      "Generous daily request limits",
      "Access to Gemini 2.5 Pro & Flash models",
      "Bring your own API key (free to obtain)",
      "Optional upgrade for heavy usage",
    ],
    gradient: "from-blue-500 to-cyan-500",
    link: "https://aistudio.google.com/apikey",
  },
  {
    icon: Users,
    title: "Community-Driven",
    subtitle: "Free from Enterprise Constraints",
    description:
      "Direction set by contributors, not corporate priorities. The community decides where terminaI goes.",
    details: [
      "Roadmap driven by community needs",
      "Open governance process",
      "Fork it if you disagree",
      "No corporate interference",
    ],
    gradient: "from-green-500 to-emerald-500",
    link: "https://github.com/Prof-Harita/terminaI/blob/main/CONTRIBUTING.md",
  },
];

export default function FreePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-16">
          <div className="container text-center">
            <h1 className="mb-6">
              Always Free.{" "}
              <span className="text-[var(--color-brand-red)]">Truly Free.</span>
            </h1>
            <p className="text-2xl opacity-70 max-w-3xl mx-auto mb-4">
              Free as in freedom. Free as in beer.
            </p>
            <p className="text-lg opacity-50 max-w-2xl mx-auto">
              terminaI is built on three pillars of freedom: open source code,
              Gemini's generous free tier, and community-driven development.
            </p>
          </div>
        </section>

        {/* Three Themes */}
        <section className="section pt-0">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {themes.map((theme, index) => {
                const Icon = theme.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-3xl bg-white/[0.02] border border-white/10 p-8 hover:border-white/20 transition-all"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${theme.gradient} text-white`}
                    >
                      <Icon size={32} />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{theme.title}</h2>
                    <p className="text-sm uppercase tracking-wider text-[var(--color-brand-red)] mb-4">
                      {theme.subtitle}
                    </p>
                    <p className="opacity-70 mb-6 leading-relaxed">
                      {theme.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {theme.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm opacity-60"
                        >
                          <span className="text-[var(--color-brand-red)] mt-1">
                            ✓
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={theme.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--color-brand-red)] hover:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="mb-6">Ready to experience true freedom?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/install" className="btn btn-primary">
                Install terminaI
              </a>
              <a
                href="https://github.com/Prof-Harita/terminaI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View Source
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
```

**Acceptance**: `/free` page renders with 3 themed cards explaining FOSS, Gemini free tier, and community freedom.

---

### Task 2.2: Create /intelligence Route

**Create file**: `src/app/intelligence/page.tsx`

```tsx
import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Brain, Cpu, Zap, Network, Mic, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Intelligence | terminaI",
  description:
    "The most capable agentic harness, cutting-edge technology, and Gemini's state-of-the-art models.",
};

export default function IntelligencePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-16">
          <div className="container text-center">
            <h1 className="mb-6">
              Unbridled{" "}
              <span className="text-[var(--color-brand-red)]">
                Intelligence
              </span>
            </h1>
            <p className="text-2xl opacity-70 max-w-3xl mx-auto">
              The most capable agentic harness, powered by the most capable
              models.
            </p>
          </div>
        </section>

        {/* Theme 1: Best Agentic Harness */}
        <section className="section pt-0">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white">
                    <Brain size={20} />
                  </div>
                  <span className="text-sm uppercase tracking-wider opacity-50">
                    Theme 1
                  </span>
                </div>
                <h2 className="mb-6">Not Just an LLM Wrapper</h2>
                <p className="text-lg opacity-70 mb-6 leading-relaxed">
                  terminaI is a full agentic harness with real terminal
                  execution, multi-step planning, and graceful error recovery.
                  It doesn't just generate text—it operates your system.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Terminal
                      size={20}
                      className="text-[var(--color-brand-red)] mt-1 flex-shrink-0"
                    />
                    <div>
                      <span className="font-bold">PTY Execution</span>
                      <p className="text-sm opacity-60">
                        Real terminal, not simulations. Full TUI support,
                        process control, signal handling.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu
                      size={20}
                      className="text-[var(--color-brand-red)] mt-1 flex-shrink-0"
                    />
                    <div>
                      <span className="font-bold">Planning Loops</span>
                      <p className="text-sm opacity-60">
                        Multi-step reasoning, error recovery, adaptive
                        replanning when things go wrong.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap
                      size={20}
                      className="text-[var(--color-brand-red)] mt-1 flex-shrink-0"
                    />
                    <div>
                      <span className="font-bold">Tool Orchestration</span>
                      <p className="text-sm opacity-60">
                        Shell, files, processes, web search, and custom MCP
                        tools—all coordinated.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="code-block text-sm">
                <div className="text-gray-500 mb-2">
                  # Multi-step system repair
                </div>
                <div>
                  <span className="text-gray-500">$</span> fix my wifi, it keeps
                  dropping
                </div>
                <div className="text-yellow-400 mt-2">
                  [Plan] 3 steps identified
                </div>
                <div className="text-gray-400">
                  1. Diagnose kernel driver status
                </div>
                <div className="text-gray-400">2. Reload iwlwifi module</div>
                <div className="text-gray-400">3. Restart NetworkManager</div>
                <div className="text-green-400 mt-2">✓ Executing step 1...</div>
              </div>
            </div>
          </div>
        </section>

        {/* Theme 2: Cutting-Edge Technology */}
        <section className="section border-t border-white/5">
          <div className="container">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                  <Network size={20} />
                </div>
                <span className="text-sm uppercase tracking-wider opacity-50">
                  Theme 2
                </span>
              </div>
              <h2 className="mb-4">Built on Tomorrow's Stack</h2>
              <p className="text-lg opacity-70 max-w-2xl mx-auto">
                A2A for agent coordination, MCP for extensibility, offline voice
                for accessibility.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="mb-3">A2A Protocol</h3>
                <p className="text-sm opacity-60 mb-4">
                  Agent-to-Agent communication. Control terminaI from IDEs,
                  desktop apps, mobile, or other agents.
                </p>
                <a
                  href="/extensibility#a2a"
                  className="text-sm text-[var(--color-brand-red)]"
                >
                  Learn more →
                </a>
              </div>
              <div className="card">
                <h3 className="mb-3">MCP Integration</h3>
                <p className="text-sm opacity-60 mb-4">
                  Model Context Protocol for infinite extensibility. Connect to
                  GitHub, Slack, databases, and custom tools.
                </p>
                <a
                  href="/extensibility#mcp"
                  className="text-sm text-[var(--color-brand-red)]"
                >
                  Learn more →
                </a>
              </div>
              <div className="card">
                <h3 className="mb-3">Offline Voice</h3>
                <p className="text-sm opacity-60 mb-4">
                  Whisper for STT, Piper for TTS. Download once, runs forever
                  offline. Your voice never leaves your device.
                </p>
                <a
                  href="/docs/voice"
                  className="text-sm text-[var(--color-brand-red)]"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Theme 3: Gemini Foundation */}
        <section className="section border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8">
                  <div className="text-sm uppercase tracking-wider opacity-50 mb-4">
                    Model Capabilities
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Context Window</span>
                        <span className="text-sm text-[var(--color-brand-red)]">
                          2M tokens
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[var(--color-brand-red)] to-orange-500 w-[95%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Reasoning</span>
                        <span className="text-sm text-[var(--color-brand-red)]">
                          SOTA
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[var(--color-brand-red)] to-orange-500 w-[92%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Code Generation</span>
                        <span className="text-sm text-[var(--color-brand-red)]">
                          SOTA
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[var(--color-brand-red)] to-orange-500 w-[94%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                    <Zap size={20} />
                  </div>
                  <span className="text-sm uppercase tracking-wider opacity-50">
                    Theme 3
                  </span>
                </div>
                <h2 className="mb-6">Powered by Google's Most Advanced AI</h2>
                <p className="text-lg opacity-70 mb-6 leading-relaxed">
                  Gemini 2.5 Pro delivers SOTA performance with a massive 2M
                  token context window. Reason over entire repositories, not
                  just snippets.
                </p>
                <ul className="space-y-2 text-sm opacity-60">
                  <li>✓ Fork of official Google Gemini CLI</li>
                  <li>✓ Uses official Gemini API</li>
                  <li>✓ Enterprise option via Vertex AI</li>
                  <li>✓ Continuous model improvements from Google</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="mb-6">Experience unbridled intelligence</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/install" className="btn btn-primary">
                Install terminaI
              </a>
              <a href="/safety" className="btn btn-outline">
                See how it's governed →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
```

**Acceptance**: `/intelligence` page shows 3 themes with rich visual content explaining the agentic harness, technology stack, and Gemini foundation.

---

### Task 2.3: Create /extensibility Route

**Create file**: `src/app/extensibility/page.tsx`

```tsx
import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Plug,
  FileCode,
  Network,
  Folder,
  GitBranch,
  MessageSquare,
  Database,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Extensibility | terminaI",
  description:
    "Connect terminaI to anything via MCP, configure with TOML, and integrate with A2A protocol.",
};

const mcpServers = [
  {
    icon: GitBranch,
    name: "@github",
    description: "PR management, issue creation, repo operations",
  },
  {
    icon: MessageSquare,
    name: "@slack",
    description: "Team notifications, channel management",
  },
  {
    icon: Database,
    name: "@filesystem",
    description: "Safe file operations with approval",
  },
  {
    icon: Globe,
    name: "Custom",
    description: "Build your own MCP server for internal APIs",
  },
];

const useCases = [
  {
    category: "System Operations",
    examples: [
      "Semantic file search",
      "Intelligent cleanup",
      "Natural language shell",
    ],
  },
  {
    category: "DevOps & SRE",
    examples: ["Incident triage", "Self-healing pipelines", "K8s management"],
  },
  {
    category: "Personal Productivity",
    examples: ["Travel planning", "Meal planning", "Task management"],
  },
  {
    category: "Security",
    examples: ["Automated audits", "Pre-commit guards", "Dependency scanning"],
  },
  {
    category: "Workflow Integration",
    examples: ["Slack automation", "Google Drive", "Custom APIs"],
  },
  {
    category: "Education",
    examples: [
      "Interactive tutorials",
      "Quiz generation",
      "Concept simplification",
    ],
  },
];

export default function ExtensibilityPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-16">
          <div className="container text-center">
            <h1 className="mb-6">
              Infinitely{" "}
              <span className="text-[var(--color-brand-red)]">Extensible</span>
            </h1>
            <p className="text-2xl opacity-70 max-w-3xl mx-auto">
              Connect terminaI to anything. Build anything on terminaI.
            </p>
          </div>
        </section>

        {/* MCP Section */}
        <section id="mcp" className="section pt-0 scroll-mt-32">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                <Plug size={20} />
              </div>
              <span className="text-sm uppercase tracking-wider opacity-50">
                Extension Point 1
              </span>
            </div>
            <h2 className="mb-4">MCP: The Universal Tool Protocol</h2>
            <p className="text-lg opacity-70 mb-8 max-w-3xl">
              Model Context Protocol is the open standard for AI tool
              integration. terminaI supports the full MCP ecosystem out of the
              box.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {mcpServers.map((server, index) => {
                const Icon = server.icon;
                return (
                  <div key={index} className="card p-6">
                    <Icon
                      size={24}
                      className="text-[var(--color-brand-red)] mb-3"
                    />
                    <h3 className="text-lg font-bold mb-1">{server.name}</h3>
                    <p className="text-sm opacity-60">{server.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="code-block">
              <div className="text-gray-500 mb-2"># Using MCP servers</div>
              <div>
                <span className="text-gray-500">$</span> @github create a PR
                with these changes
              </div>
              <div>
                <span className="text-gray-500">$</span> @slack notify #dev-team
                about the deployment
              </div>
            </div>
          </div>
        </section>

        {/* Configuration Section */}
        <section
          id="config"
          className="section border-t border-white/5 scroll-mt-32"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
                    <FileCode size={20} />
                  </div>
                  <span className="text-sm uppercase tracking-wider opacity-50">
                    Extension Point 2
                  </span>
                </div>
                <h2 className="mb-4">Configuration</h2>
                <p className="text-lg opacity-70 mb-6">
                  Configure terminaI with settings files at the global or
                  project level.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Folder
                      size={16}
                      className="text-[var(--color-brand-red)]"
                    />
                    <code className="bg-white/5 px-2 py-1 rounded">
                      ~/.gemini/settings.json
                    </code>
                    <span className="opacity-60">Global settings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Folder
                      size={16}
                      className="text-[var(--color-brand-red)]"
                    />
                    <code className="bg-white/5 px-2 py-1 rounded">
                      .gemini/settings.json
                    </code>
                    <span className="opacity-60">Project settings</span>
                  </li>
                </ul>
              </div>
              <div className="code-block text-sm">
                <div className="text-gray-500 mb-2">
                  // ~/.gemini/settings.json
                </div>
                <pre className="text-green-400">{`{
  "model": "gemini-2.5-pro",
  "voice": {
    "enabled": true,
    "pushToTalk": { "key": "space" }
  },
  "mcpServers": {
    "github": { "enabled": true },
    "custom-api": {
      "command": "node",
      "args": ["./my-mcp-server.js"]
    }
  }
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* A2A Section */}
        <section
          id="a2a"
          className="section border-t border-white/5 scroll-mt-32"
        >
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                <Network size={20} />
              </div>
              <span className="text-sm uppercase tracking-wider opacity-50">
                Extension Point 3
              </span>
            </div>
            <h2 className="mb-4">A2A: Agent-to-Agent Control</h2>
            <p className="text-lg opacity-70 mb-8 max-w-3xl">
              Let other programs control terminaI. Build IDE integrations,
              desktop companions, multi-agent workflows, or remote operation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="mb-3">Remote Control</h3>
                <p className="text-sm opacity-60 mb-4">
                  Control your terminal from your phone or iPad. Check
                  long-running builds from anywhere without SSH headaches.
                </p>
                <code className="text-xs bg-white/5 px-2 py-1 rounded">
                  terminai --web-remote
                </code>
              </div>
              <div className="card">
                <h3 className="mb-3">Multi-Agent Orchestration</h3>
                <p className="text-sm opacity-60 mb-4">
                  Build complex workflows with multiple agents coordinating
                  through terminaI's A2A protocol.
                </p>
                <a
                  href="/docs/a2a"
                  className="text-sm text-[var(--color-brand-red)]"
                >
                  Read the spec →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="section border-t border-white/5">
          <div className="container">
            <h2 className="text-center mb-12">What You Can Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/[0.02] border border-white/10 p-6"
                >
                  <h3 className="text-lg font-bold mb-3">{useCase.category}</h3>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, i) => (
                      <li
                        key={i}
                        className="text-sm opacity-60 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-[var(--color-brand-red)] rounded-full"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="mb-6">Start extending terminaI</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/install" className="btn btn-primary">
                Install terminaI
              </a>
              <a href="/docs" className="btn btn-outline">
                Read the docs →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
```

**Acceptance**: `/extensibility` page shows MCP, Configuration, A2A sections with use cases grid.

---

## [CONTINUED IN PART 2]

This document continues in `implementation_plan_part2.md` with:

- Task 2.4: `/safety` page
- Task 2.5: `/install` page (major redesign)
- Phase 3: Home page improvements
- Phase 4: Documentation hub redesign
- Phase 5: Secondary pages
- Phase 6: Final polish
# TerminaI Website - Implementation Plan Part 2

> **Continuation of implementation_plan.md**

---

## PHASE 2 (continued): MORE NEW PAGES

### Task 2.4: Create /safety Route

**Create file**: `src/app/safety/page.tsx`

```tsx
import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Shield,
  Lock,
  FileCheck,
  AlertTriangle,
  CheckCircle,
  Key,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Safety | terminaI",
  description:
    "Safety by design. Approval ladder, risk classification, PIN verification, and audit trails.",
};

export default function SafetyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-16">
          <div className="container text-center">
            <h1 className="mb-6">
              Safety{" "}
              <span className="text-[var(--color-brand-red)]">by Design</span>
            </h1>
            <p className="text-2xl opacity-70 max-w-3xl mx-auto mb-4">
              AI that operates your system must be governed.
            </p>
            <p className="text-lg opacity-50 max-w-2xl mx-auto">
              We built the infrastructure to make that possible.
            </p>
          </div>
        </section>

        {/* Theme 1: Trust Model */}
        <section className="section pt-0">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                <Shield size={20} />
              </div>
              <span className="text-sm uppercase tracking-wider opacity-50">
                Theme 1
              </span>
            </div>
            <h2 className="mb-6">Human-in-the-Loop, Always</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg opacity-70 mb-6 leading-relaxed">
                  terminaI's safety model is built around one core principle:
                  <strong className="text-white">
                    {" "}
                    The model cannot lower safety minimums.
                  </strong>
                  It can increase caution, never reduce it.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />
                    <span>
                      <strong>Everything is possible</strong> with explicit user
                      confirmation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />
                    <span>
                      <strong>Fail closed</strong> — if uncertain, require
                      higher review
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />
                    <span>
                      <strong>Plain-English consent</strong> before risky
                      actions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />
                    <span>
                      <strong>Provenance-aware</strong> — untrusted sources
                      can't silently authorize
                    </span>
                  </li>
                </ul>
              </div>
              <div className="code-block text-sm font-mono">
                <div className="text-gray-500 mb-4">
                  // Trust Pipeline (end-to-end)
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded bg-white/5 border-l-2 border-gray-500">
                    1. Provenance Tagging
                  </div>
                  <div className="text-center text-gray-600">↓</div>
                  <div className="p-2 rounded bg-white/5 border-l-2 border-blue-500">
                    2. Structured Parsing → ActionProfile
                  </div>
                  <div className="text-center text-gray-600">↓</div>
                  <div className="p-2 rounded bg-white/5 border-l-2 border-yellow-500">
                    3. Minimum Review Computation (A/B/C)
                  </div>
                  <div className="text-center text-gray-600">↓</div>
                  <div className="p-2 rounded bg-white/5 border-l-2 border-orange-500">
                    4. Enforcement (approval UX)
                  </div>
                  <div className="text-center text-gray-600">↓</div>
                  <div className="p-2 rounded bg-white/5 border-l-2 border-green-500">
                    5. Execution + Audit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Theme 2: Approval Ladder */}
        <section className="section border-t border-white/5">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
                <Lock size={20} />
              </div>
              <span className="text-sm uppercase tracking-wider opacity-50">
                Theme 2
              </span>
            </div>
            <h2 className="mb-6">Three Levels of Trust</h2>
            <p className="text-lg opacity-70 mb-8 max-w-3xl">
              Every action is classified into one of three approval levels based
              on its risk profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Level A */}
              <div className="rounded-2xl bg-green-500/5 border border-green-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-400">A</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-400">Level A</h3>
                    <p className="text-xs opacity-60">No approval needed</p>
                  </div>
                </div>
                <p className="text-sm opacity-70 mb-4">
                  Read-only operations and explicitly low-impact reversible
                  actions.
                </p>
                <ul className="text-xs space-y-1 opacity-50">
                  <li>
                    • <code>git status</code>
                  </li>
                  <li>• Reading files</li>
                  <li>• Listing processes</li>
                  <li>• Checking disk usage</li>
                </ul>
              </div>

              {/* Level B */}
              <div className="rounded-2xl bg-yellow-500/5 border border-yellow-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-400">
                      B
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-400">Level B</h3>
                    <p className="text-xs opacity-60">Click to approve</p>
                  </div>
                </div>
                <p className="text-sm opacity-70 mb-4">
                  Medium-risk operations with clear explanation of consequences.
                </p>
                <ul className="text-xs space-y-1 opacity-50">
                  <li>• File modifications</li>
                  <li>• Package installations</li>
                  <li>• Git commits/pushes</li>
                  <li>• Starting services</li>
                </ul>
              </div>

              {/* Level C */}
              <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-400">C</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-400">Level C</h3>
                    <p className="text-xs opacity-60">Click + PIN</p>
                  </div>
                </div>
                <p className="text-sm opacity-70 mb-4">
                  High-risk, destructive, or irreversible actions require PIN
                  verification.
                </p>
                <ul className="text-xs space-y-1 opacity-50">
                  <li>
                    • <code>rm -rf</code>
                  </li>
                  <li>• System configuration changes</li>
                  <li>• Database modifications</li>
                  <li>• Kernel module operations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Theme 3: Audit */}
        <section className="section border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                    <FileCheck size={20} />
                  </div>
                  <span className="text-sm uppercase tracking-wider opacity-50">
                    Theme 3
                  </span>
                </div>
                <h2 className="mb-6">Every Action, Accountable</h2>
                <p className="text-lg opacity-70 mb-6 leading-relaxed">
                  Every command, every approval, every outcome—logged with
                  tamper-evident integrity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Key
                      size={18}
                      className="text-[var(--color-brand-red)] mt-1"
                    />
                    <div>
                      <span className="font-medium">Non-repudiable logs</span>
                      <p className="text-sm opacity-60">
                        Prove what happened and when
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck
                      size={18}
                      className="text-[var(--color-brand-red)] mt-1"
                    />
                    <div>
                      <span className="font-medium">Action profiles</span>
                      <p className="text-sm opacity-60">
                        Structured record of every tool call
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield
                      size={18}
                      className="text-[var(--color-brand-red)] mt-1"
                    />
                    <div>
                      <span className="font-medium">Provenance tracking</span>
                      <p className="text-sm opacity-60">
                        Know the source of every request
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="code-block text-xs">
                <div className="text-gray-500 mb-2">// Audit log entry</div>
                <pre className="text-green-400">{`{
  "timestamp": "2024-12-24T02:00:00Z",
  "logId": "#9F2A",
  "action": {
    "tool": "shell",
    "command": "systemctl restart NetworkManager",
    "reviewLevel": "C",
    "pinVerified": true
  },
  "provenance": "local_user",
  "outcome": "success",
  "duration_ms": 1523
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="mb-6">Governed autonomy. That's the promise.</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/install" className="btn btn-primary">
                Install terminaI
              </a>
              <a href="/docs/safety" className="btn btn-outline">
                Read Safety Docs →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
```

**Acceptance**: `/safety` page shows 3 themes (Trust Model, Approval Ladder A/B/C, Audit) with visual diagrams and code examples.

---

### Task 2.5: Redesign /install Route

**Create file**: `src/app/install/page.tsx` (or modify existing `/download`)

```tsx
import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Terminal,
  Package,
  GitBranch,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Install | terminaI",
  description:
    "Install terminaI in under 2 minutes. NPM, source, or quick script.",
};

export default function InstallPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-8">
          <div className="container text-center">
            <h1 className="mb-6">
              Install{" "}
              <span className="text-[var(--color-brand-red)]">terminaI</span>
            </h1>
            <p className="text-2xl opacity-70 max-w-2xl mx-auto">
              Get started in under 2 minutes.
            </p>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="pb-8">
          <div className="container max-w-4xl">
            <div className="rounded-xl bg-yellow-500/5 border border-yellow-500/20 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle
                  size={20}
                  className="text-yellow-400 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-yellow-400 mb-2">
                    Prerequisites
                  </h3>
                  <ul className="text-sm opacity-70 space-y-1">
                    <li>
                      • <strong>Node.js 18+</strong> (check:{" "}
                      <code className="bg-white/5 px-1 rounded">
                        node --version
                      </code>
                      )
                    </li>
                    <li>
                      • <strong>Git</strong> (for source install only)
                    </li>
                    <li>
                      • <strong>Supported platforms:</strong> Linux, macOS,
                      Windows (via WSL)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Methods */}
        <section className="section pt-8">
          <div className="container max-w-4xl">
            <div className="space-y-8">
              {/* Method 1: NPM */}
              <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                    <Package size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      Method 1: NPM (Recommended)
                    </h2>
                    <p className="text-sm opacity-60">
                      Fastest way to get started
                    </p>
                  </div>
                </div>
                <div className="code-block mb-4">
                  <div className="flex items-center justify-between">
                    <code>npm i -g @google/gemini-cli</code>
                    <button className="text-xs opacity-50 hover:opacity-100 transition-opacity">
                      Copy
                    </button>
                  </div>
                </div>
                <p className="text-sm opacity-60 mb-4">
                  Then verify installation:
                </p>
                <div className="code-block">
                  <code>terminai --version</code>
                </div>
              </div>

              {/* Method 2: From Source */}
              <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                    <GitBranch size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      Method 2: Build from Source
                    </h2>
                    <p className="text-sm opacity-60">
                      For developers and contributors
                    </p>
                  </div>
                </div>
                <div className="code-block text-sm">
                  <div className="text-gray-500 mb-2">
                    # Clone the repository
                  </div>
                  <div>
                    git clone https://github.com/Prof-Harita/terminaI.git
                  </div>
                  <div className="mt-3 text-gray-500"># Build</div>
                  <div>cd terminaI && npm ci && npm run build</div>
                  <div className="mt-3 text-gray-500"># Link globally</div>
                  <div>npm link --workspace packages/termai</div>
                  <div className="mt-3 text-gray-500"># Run</div>
                  <div>terminai</div>
                </div>
              </div>

              {/* Method 3: Quick Script */}
              <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      Method 3: Quick Install Script
                    </h2>
                    <p className="text-sm opacity-60">
                      One-liner for power users
                    </p>
                  </div>
                </div>
                <div className="code-block">
                  <code>curl -fsSL https://terminaI.org/install.sh | bash</code>
                </div>
                <p className="text-xs opacity-40 mt-2">
                  (Coming soon - currently build from source for latest
                  features)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* First Run */}
        <section className="section border-t border-white/5">
          <div className="container max-w-4xl">
            <h2 className="mb-8 text-center">First Run</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-brand-red)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Start terminaI</h3>
                  <div className="code-block text-sm">
                    <code>terminai</code>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-brand-red)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Authenticate</h3>
                  <p className="text-sm opacity-70 mb-2">Choose one:</p>
                  <ul className="text-sm opacity-60 space-y-1">
                    <li>
                      • <strong>OAuth:</strong> Follow the browser prompt
                      (recommended for personal use)
                    </li>
                    <li>
                      • <strong>API Key:</strong>{" "}
                      <code className="bg-white/5 px-1 rounded">
                        export GEMINI_API_KEY=your_key
                      </code>
                    </li>
                    <li>
                      • <strong>Vertex AI:</strong> Configure Google Cloud
                      project (enterprise)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-brand-red)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Ask anything</h3>
                  <div className="code-block text-sm">
                    <div>
                      <span className="text-gray-500">$</span> terminai
                    </div>
                    <div className="mt-2">
                      <span className="text-[var(--color-brand-red)]">
                        &gt;
                      </span>{" "}
                      What's using my disk space?
                    </div>
                    <div className="text-green-400 mt-2">
                      Scanning file system...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Setup (Optional) */}
        <section className="section border-t border-white/5">
          <div className="container max-w-4xl">
            <h2 className="mb-4">Optional: Voice Mode</h2>
            <p className="text-lg opacity-70 mb-6">
              Install offline voice (downloads ~200MB, runs forever offline).
            </p>
            <div className="code-block">
              <code>terminai voice install</code>
            </div>
            <p className="text-sm opacity-50 mt-3">
              Then use{" "}
              <code className="bg-white/5 px-1 rounded">terminai --voice</code>{" "}
              or hold{" "}
              <kbd className="bg-white/10 px-2 py-0.5 rounded text-xs">
                Space
              </kbd>{" "}
              to talk in Desktop app.
            </p>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="section border-t border-white/5">
          <div className="container max-w-4xl">
            <h2 className="mb-6">Troubleshooting</h2>
            <div className="space-y-4">
              <details className="group rounded-xl bg-white/[0.02] border border-white/10">
                <summary className="cursor-pointer p-4 font-medium">
                  API error: 429 - Resource exhausted
                </summary>
                <div className="px-4 pb-4 text-sm opacity-70">
                  You've exceeded rate limits. Check usage in Google AI Studio,
                  optimize prompts, or upgrade to Google AI Pro/Ultra.
                </div>
              </details>
              <details className="group rounded-xl bg-white/[0.02] border border-white/10">
                <summary className="cursor-pointer p-4 font-medium">
                  ERR_REQUIRE_ESM error
                </summary>
                <div className="px-4 pb-4 text-sm opacity-70">
                  Ensure package.json has "type": "module". Delete node_modules
                  and package-lock.json, then npm install again.
                </div>
              </details>
              <details className="group rounded-xl bg-white/[0.02] border border-white/10">
                <summary className="cursor-pointer p-4 font-medium">
                  Windows: chmod command not found
                </summary>
                <div className="px-4 pb-4 text-sm opacity-70">
                  Use Windows Subsystem for Linux (WSL) or Git Bash for full
                  compatibility.
                </div>
              </details>
            </div>
            <p className="text-sm opacity-50 mt-6">
              More help:{" "}
              <a
                href="/docs/troubleshooting"
                className="text-[var(--color-brand-red)]"
              >
                Full Troubleshooting Guide
              </a>{" "}
              •
              <a
                href="https://github.com/Prof-Harita/terminaI/issues"
                className="text-[var(--color-brand-red)] ml-2"
              >
                GitHub Issues
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-2 text-green-400 mb-4">
              <CheckCircle size={24} />
              <span className="text-lg">You're ready to go!</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/docs" className="btn btn-primary">
                Read the Docs
              </a>
              <a href="/free" className="btn btn-outline">
                Learn about Free Tier →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
```

**Acceptance**: `/install` page shows correct repo URL (terminaI not termAI), multiple install methods, first-run guidance, voice setup, and troubleshooting.

---

### Task 2.6: Create /contact Route

**Create file**: `src/app/contact/page.tsx`

```tsx
import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Github, MessageCircle, Mail, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | terminaI",
  description: "Get in touch with the terminaI community.",
};

const channels = [
  {
    icon: Github,
    name: "GitHub",
    description: "Report issues, contribute code, star the repo",
    link: "https://github.com/Prof-Harita/terminaI",
    buttonText: "View Repository",
  },
  {
    icon: MessageCircle,
    name: "GitHub Discussions",
    description: "Ask questions, share ideas, get help",
    link: "https://github.com/Prof-Harita/terminaI/discussions",
    buttonText: "Join Discussion",
  },
  {
    icon: Users,
    name: "Discord",
    description: "Real-time chat with the community",
    link: "#", // Add actual Discord invite when available
    buttonText: "Join Discord",
    comingSoon: true,
  },
  {
    icon: Mail,
    name: "Email",
    description: "For press, partnerships, enterprise inquiries",
    link: "mailto:contact@terminai.org",
    buttonText: "Send Email",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        <section className="section">
          <div className="container max-w-4xl text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl opacity-70 mb-12">
              Join the community, report issues, or reach out for partnerships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div key={index} className="card text-left">
                    <Icon
                      size={32}
                      className="text-[var(--color-brand-red)] mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{channel.name}</h3>
                    <p className="text-sm opacity-60 mb-4">
                      {channel.description}
                    </p>
                    {channel.comingSoon ? (
                      <span className="text-sm opacity-40">Coming soon</span>
                    ) : (
                      <a
                        href={channel.link}
                        target={
                          channel.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          channel.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm font-medium text-[var(--color-brand-red)] hover:underline"
                      >
                        {channel.buttonText} →
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
```

**Acceptance**: `/contact` page shows GitHub, Discussions, Discord, Email contact options.

---

## PHASE 3: HOME PAGE IMPROVEMENTS

### Task 3.1: Update Hero Copy

**File**: `src/components/Hero.tsx`

**REPLACE** lines 104-115 (the heading and paragraph) with:

```tsx
<h1 className="mb-8 leading-tight tracking-tighter text-[clamp(3.5rem,8vw,6rem)]">
    The Sovereign Shell
</h1>
<p className="text-lg md:text-xl mb-4 opacity-90 max-w-3xl mx-auto leading-relaxed">
    <span className="font-semibold text-white">What if your computer could just do things for you—safely?</span>
</p>
<p className="text-lg opacity-60 max-w-2xl mx-auto leading-relaxed mb-10">
    Not suggest commands. Not generate scripts. Actually operate your system:
    diagnose issues, fix problems, orchestrate workflows—with guardrails that
    make it trustworthy.
</p>
```

**REPLACE** lines 117-125 (the CTA buttons) with:

```tsx
<div className="flex flex-wrap justify-center gap-4">
  <Link
    href="/install"
    className="btn btn-primary text-lg px-8 py-4 flex items-center gap-2"
  >
    Install terminaI
    <ArrowRight size={20} />
  </Link>
  <a
    href="https://github.com/Prof-Harita/terminaI/stargazers"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline text-lg px-8 py-4 flex items-center gap-2"
  >
    <Github size={20} />
    Star on GitHub
  </a>
</div>
```

**Acceptance**: Hero says "The Sovereign Shell" with new copy and Install + Star CTAs.

---

### Task 3.2: Add Audience Cards Section

**Create file**: `src/components/AudienceCards.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import { Home, Zap, Wrench, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "For End Users",
    tagline: '"Fix my computer"—for real.',
    examples: [
      "Why is my laptop slow? Fix it.",
      "What's eating my disk space?",
      "Back up my files before I update.",
    ],
    note: "No command-line knowledge needed.",
  },
  {
    icon: Zap,
    title: "For Power Users",
    tagline: "Your terminal, supercharged.",
    examples: [
      "Voice control (hold Space to talk)",
      "Process orchestration (/sessions)",
      "MCP extensions (GitHub, Slack, custom)",
    ],
    note: "More power, more control.",
  },
  {
    icon: Wrench,
    title: "For Developers",
    tagline: "The primitives you want to build on.",
    examples: [
      "A2A Protocol: Agent control plane",
      "MCP Ecosystem: Infinite extensibility",
      "Policy Engine: Programmable trust",
    ],
    note: "Build trustworthy agentic automation.",
  },
  {
    icon: TrendingUp,
    title: "For Organizations",
    tagline: "Agentic automation you can audit.",
    examples: [
      "Non-repudiable action logs",
      "Approval workflows for sensitive ops",
      "Fleet-ready, data stays local",
    ],
    note: "Enterprise-grade governance.",
  },
];

export function AudienceCards() {
  return (
    <section className="section border-t border-white/5">
      <div className="container">
        <h2 className="text-center mb-4">Built for Everyone</h2>
        <p className="text-center text-lg opacity-60 mb-12 max-w-2xl mx-auto">
          From first-time terminal users to enterprise SRE teams.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-white/20 transition-colors"
              >
                <Icon
                  size={28}
                  className="text-[var(--color-brand-red)] mb-4"
                />
                <h3 className="font-bold text-lg mb-1">{audience.title}</h3>
                <p className="text-sm text-[var(--color-brand-red)] mb-3">
                  {audience.tagline}
                </p>
                <ul className="space-y-1 mb-4">
                  {audience.examples.map((example, i) => (
                    <li
                      key={i}
                      className="text-xs opacity-60 flex items-start gap-2"
                    >
                      <span className="opacity-40">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
                <p className="text-xs opacity-40">{audience.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

**Add to home page**: `src/app/page.tsx`

```tsx
import { AudienceCards } from "@/components/AudienceCards";
// Add after IceCreamBar in the JSX:
<AudienceCards />;
```

**Acceptance**: Home page shows 4 audience cards explaining value for end users, power users, developers, and organizations.

---

## PHASE 4: DOCUMENTATION HUB (Summary)

Due to complexity, documentation hub restructure will be detailed separately. Key tasks:

1. **Redesign `/docs` layout** with three-column layout (sidebar, content, ToC)
2. **Add search** (Cmd+K trigger, full-text search)
3. **Fix sidebar navigation** from `/docs/sidebar.json`
4. **Migrate all docs content** from `docs/` and `docs-terminai/` directories
5. **Add code blocks** with copy buttons and syntax highlighting
6. **Add prev/next navigation** at bottom of each doc page

---

## PHASE 5: FOOTER & SECONDARY UPDATES

### Task 5.1: Update SiteFooter

Add these link sections to `src/components/SiteFooter.tsx`:

**Product Links**: Install, Docs, Safety, Enterprise  
**Community Links**: GitHub, Contribute, Contact, Discord (coming soon)  
**Resources Links**: Changelog, Roadmap, Blog (coming soon)  
**Legal Links**: Privacy, Terms, License (Apache 2.0)

---

## VERIFICATION CHECKLIST

After implementing all tasks, verify:

- [ ] All navigation links work (desktop + mobile)
- [ ] All new pages render without errors: `/free`, `/intelligence`, `/extensibility`, `/safety`, `/install`, `/contact`
- [ ] Hero says "The Sovereign Shell" with new CTAs
- [ ] Install page has correct GitHub URL (terminaI not termAI)
- [ ] Clone command is: `git clone https://github.com/Prof-Harita/terminaI.git`
- [ ] All external links open in new tab
- [ ] Mobile menu has updated navigation
- [ ] Footer has updated links
- [ ] Site builds without errors: `npm run build`

---

## PRIORITY ORDER

Execute tasks in this priority order:

**P0 (Do First)**:

1. Task 1.1: Update SiteHeader navigation
2. Task 2.5: Create /install page (fixes critical bug)
3. Task 3.1: Update Hero copy

**P1 (Core Pages)**: 4. Task 2.4: Create /safety page 5. Task 2.1: Create /free page 6. Task 2.2: Create /intelligence page 7. Task 2.3: Create /extensibility page

**P2 (Polish)**: 8. Task 2.6: Create /contact page 9. Task 3.2: Add AudienceCards component 10. Footer updates
