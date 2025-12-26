"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { 
  Unlock, Gift, Users, 
  Brain, Cpu, Zap, Network, Mic,
  Plug, FileCode, 
  Shield, FileCheck,
  ArrowRight
} from "lucide-react";

export default function ProductPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* ============== SECTION 1: ALWAYS FREE ============== */}
        <section id="free" className="section scroll-mt-32 border-b border-white/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
                  <Gift size={24} />
                </div>
                <span className="text-sm uppercase tracking-wider text-amber-400 font-bold">Open Source</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Always Free. <span className="text-[var(--color-brand-red)]">Truly Free.</span>
              </h2>
              
              <p className="text-xl opacity-70 mb-12 leading-relaxed max-w-3xl">
                TerminaI is built on three pillars of freedom: open source code,
                Gemini's generous free tier, and community-driven development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <Unlock size={28} className="text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Open Source</h3>
                  <p className="text-sm opacity-60 mb-4">
                    Apache 2.0 licensed. Every line of code is visible, auditable, and modifiable. Fork it, improve it, ship it.
                  </p>
                  <ul className="text-xs space-y-1 opacity-50">
                    <li>✓ Full source code on GitHub</li>
                    <li>✓ No vendor lock-in</li>
                    <li>✓ Modify and redistribute freely</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <Gift size={28} className="text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Generous Free Tier</h3>
                  <p className="text-sm opacity-60 mb-4">
                    Built on Google's Gemini API with substantial free usage. Most users will never need to pay.
                  </p>
                  <ul className="text-xs space-y-1 opacity-50">
                    <li>✓ No credit card required</li>
                    <li>✓ Gemini 2.5 Pro & Flash access</li>
                    <li>✓ Bring your own API key (free)</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <Users size={28} className="text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Community Driven</h3>
                  <p className="text-sm opacity-60 mb-4">
                    Direction set by contributors, not corporate priorities. The community decides where terminaI goes.
                  </p>
                  <ul className="text-xs space-y-1 opacity-50">
                    <li>✓ Open governance process</li>
                    <li>✓ Roadmap by community needs</li>
                    <li>✓ Fork if you disagree</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============== SECTION 2: INTELLIGENCE ============== */}
        <section id="intelligence" className="section scroll-mt-32 border-b border-white/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white">
                  <Brain size={24} />
                </div>
                <span className="text-sm uppercase tracking-wider text-pink-400 font-bold">Cognition</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                State-of-the-Art <span className="text-[var(--color-brand-red)]">Intelligence</span>
              </h2>
              
              <p className="text-xl opacity-70 mb-12 leading-relaxed max-w-3xl">
                The most capable agentic harness, powered by the most capable models. 
                TerminaI doesn&apos;t just generate text—it operates your system.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Cpu size={24} className="text-[var(--color-brand-red)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Full Agentic Harness</h3>
                      <p className="text-sm opacity-60">Real terminal execution, multi-step planning, and graceful error recovery.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap size={24} className="text-[var(--color-brand-red)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Tool Orchestration</h3>
                      <p className="text-sm opacity-60">Shell, files, processes, web search, and MCP tools—all coordinated.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mic size={24} className="text-[var(--color-brand-red)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Offline Voice</h3>
                      <p className="text-sm opacity-60">Whisper for STT, Piper for TTS. Your voice never leaves your device.</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6">
                  <div className="text-xs uppercase tracking-wider opacity-50 mb-4">Gemini 2.5 Pro Capabilities</div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Context Window</span>
                        <span className="text-[var(--color-brand-red)]">2M tokens</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[var(--color-brand-red)] to-orange-500 w-[95%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Reasoning</span>
                        <span className="text-[var(--color-brand-red)]">SOTA</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[var(--color-brand-red)] to-orange-500 w-[92%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Code Generation</span>
                        <span className="text-[var(--color-brand-red)]">SOTA</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[var(--color-brand-red)] to-orange-500 w-[94%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============== SECTION 3: EXTENSIBILITY ============== */}
        <section id="extensibility" className="section scroll-mt-32 border-b border-white/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                  <Plug size={24} />
                </div>
                <span className="text-sm uppercase tracking-wider text-cyan-400 font-bold">Integrations</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Infinitely <span className="text-[var(--color-brand-red)]">Extensible</span>
              </h2>
              
              <p className="text-xl opacity-70 mb-12 leading-relaxed max-w-3xl">
                Connect terminaI to anything via MCP, configure with TOML, 
                and integrate with other agents through our A2A protocol.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <Plug size={28} className="text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">MCP Protocol</h3>
                  <p className="text-sm opacity-60 mb-4">
                    The open standard for AI tool integration. Connect to GitHub, Slack, databases, and custom APIs.
                  </p>
                  <Link href="/extensibility#mcp" className="text-sm text-[var(--color-brand-red)] flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <FileCode size={28} className="text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">TOML Configuration</h3>
                  <p className="text-sm opacity-60 mb-4">
                    Global and project-level configuration via simple, human-readable settings files.
                  </p>
                  <Link href="/docs/configuration" className="text-sm text-[var(--color-brand-red)] flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <Network size={28} className="text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">A2A Protocol</h3>
                  <p className="text-sm opacity-60 mb-4">
                    Agent-to-Agent communication for IDE integrations, desktop apps, and multi-agent workflows.
                  </p>
                  <Link href="/extensibility#a2a" className="text-sm text-[var(--color-brand-red)] flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============== SECTION 4: SAFETY ============== */}
        <section id="safety" className="section scroll-mt-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                  <Shield size={24} />
                </div>
                <span className="text-sm uppercase tracking-wider text-emerald-400 font-bold">Governance</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Safety <span className="text-[var(--color-brand-red)]">by Design</span>
              </h2>
              
              <p className="text-xl opacity-70 mb-12 leading-relaxed max-w-3xl">
                AI that operates your system must be governed. 
                We built the infrastructure to make that possible—human-in-the-loop, always.
              </p>

              {/* Approval Ladder */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-green-400">A</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-green-400">Level A</h3>
                      <p className="text-xs opacity-60">No approval needed</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-60">Read-only operations and explicitly low-impact reversible actions.</p>
                </div>
                
                <div className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-yellow-400">B</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-yellow-400">Level B</h3>
                      <p className="text-xs opacity-60">Click to approve</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-60">Medium-risk operations with clear explanation of consequences.</p>
                </div>
                
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-red-400">C</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-red-400">Level C</h3>
                      <p className="text-xs opacity-60">Click + PIN</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-60">High-risk, destructive, or irreversible actions require PIN verification.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <FileCheck size={28} className="text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Complete Audit Trail</h3>
                  <p className="text-sm opacity-60">
                    Every command, every approval, every outcome—logged with tamper-evident integrity. 
                    Prove what happened and when with structured action profiles and provenance tracking.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="mb-6">Ready to experience the difference?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/install" className="btn btn-primary">
                Install terminaI
              </Link>
              <Link href="https://github.com/Prof-Harita/terminaI" target="_blank" className="btn btn-outline">
                View Source →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
