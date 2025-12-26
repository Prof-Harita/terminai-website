import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Brain, Cpu, Zap, Network, Terminal } from "lucide-react";
import Link from "next/link";

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
                  It doesn&apos;t just generate text—it operates your system.
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
              <h2 className="mb-4">Built on Tomorrow&apos;s Stack</h2>
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
                <Link href="/extensibility#a2a" className="text-sm text-[var(--color-brand-red)]">
                  Learn more →
                </Link>
              </div>
              <div className="card">
                <h3 className="mb-3">MCP Integration</h3>
                <p className="text-sm opacity-60 mb-4">
                  Model Context Protocol for infinite extensibility. Connect to
                  GitHub, Slack, databases, and custom tools.
                </p>
                <Link href="/extensibility#mcp" className="text-sm text-[var(--color-brand-red)]">
                  Learn more →
                </Link>
              </div>
              <div className="card">
                <h3 className="mb-3">Offline Voice</h3>
                <p className="text-sm opacity-60 mb-4">
                  Whisper for STT, Piper for TTS. Download once, runs forever
                  offline. Your voice never leaves your device.
                </p>
                <Link href="/docs/voice" className="text-sm text-[var(--color-brand-red)]">
                  Learn more →
                </Link>
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
                <h2 className="mb-6">Powered by Google&apos;s Most Advanced AI</h2>
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
              <Link href="/install" className="btn btn-primary">
                Install terminaI
              </Link>
              <Link href="/safety" className="btn btn-outline">
                See how it&apos;s governed →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
