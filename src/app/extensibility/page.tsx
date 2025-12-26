import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Link from "next/link";
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
                  {"// ~/.gemini/settings.json"}
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
                  through terminaI&apos;s A2A protocol.
                </p>
                <Link href="/docs/a2a" className="text-sm text-[var(--color-brand-red)]">
                  Read the spec →
                </Link>
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
              <Link href="/install" className="btn btn-primary">
                Install terminaI
              </Link>
              <Link href="/docs" className="btn btn-outline">
                Read the docs →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
