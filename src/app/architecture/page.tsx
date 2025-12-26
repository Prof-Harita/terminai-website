"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Cpu, Shield, Globe, Terminal, Box } from "lucide-react";

const layers = [
    {
        icon: Terminal,
        title: "The Host (PTY)",
        desc: "TerminaI doesn't wrap subprocesses; it spawns a true pseudo-terminal. This allows for native colors, TTY signals, and full terminal interactive capability.",
        tech: "node-pty, xterm.js"
    },
    {
        icon: Cpu,
        title: "The Thinking Core",
        desc: "An agentic harness built on Gemini 2.5 Pro. It handles multi-step planning, state management, and error correction during execution.",
        tech: "Gemini 2.5 Pro, 2M Context"
    },
    {
        icon: Shield,
        title: "The Valve (Safety)",
        desc: "Every command passes through our three-tier Approval Ladder. Policies are locally enforced and cannot be overridden by the model.",
        tech: "Local Policy Engine, PIN Auth"
    },
    {
        icon: Box,
        title: "MCP Host",
        desc: "A standardized interface for connecting models to local and remote data. Connect to GitHub, Slack, databases, and more via a unified API.",
        tech: "Model Context Protocol v1"
    },
    {
        icon: Globe,
        title: "A2A Protocol",
        desc: "The Agent-to-Agent protocol allows TerminaI to delegate tasks to other agents or be remotely controlled via our secure cloud relay.",
        tech: "JSON-RPC over HTTP/WSS"
    }
];

export default function ArchitecturePage() {
    return (
        <>
            <SiteHeader />
            <main className="pt-32 pb-20 overflow-hidden">
                <div className="container max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20 text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                            The OI Architecture
                        </h1>
                        <p className="text-xl md:text-2xl opacity-60 leading-relaxed font-medium max-w-3xl mx-auto">
                            Building a sovereign interface for agent-orchestrated operations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12 mb-24">
                        <section>
                            <h2 className="text-3xl font-bold mb-8">System Overview</h2>
                            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02] mb-12">
                                <p className="opacity-70 leading-relaxed mb-6 text-lg">
                                    TerminaI is designed as a modular **Operator Interface (OI)**. Unlike coding copilots which are integrated into IDEs, TerminaI is the first AI that sits directly at the system level—controlling the shell, the GUI, and remote agents.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold mb-2">Monorepo Structure</h4>
                                        <ul className="text-sm opacity-50 space-y-2 font-mono">
                                            <li>@google/gemini-cli (Original Fork)</li>
                                            <li>@terminal/core (Agentic Harness)</li>
                                            <li>@terminal/a2a (Communication Protocol)</li>
                                            <li>@terminal/voice (Local STT/TTS)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">The Stack</h4>
                                        <ul className="text-sm opacity-50 space-y-2">
                                            <li>• Node.js & TypeScript for Infrastructure</li>
                                            <li>• Tree-sitter for Syntax Understanding</li>
                                            <li>• Fastify for High-Performance RPC</li>
                                            <li>• Framer Motion for UI Experience</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-8">The Execution Stack</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {layers.map((layer, idx) => (
                                    <motion.div
                                        key={layer.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-8 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-red">
                                            <layer.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{layer.title}</h3>
                                        <p className="text-sm opacity-60 leading-relaxed mb-6">{layer.desc}</p>
                                        <div className="pt-4 border-t border-white/5 text-[10px] uppercase font-bold tracking-widest text-brand-red opacity-50">
                                            {layer.tech}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="text-center p-16 rounded-3xl bg-white/[0.02] border border-white/10">
                        <h2 className="text-3xl font-bold mb-6">Built for Sovereignty</h2>
                        <p className="opacity-60 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                            Every design choice in TerminaI—from local PTY execution to our offline voice stack—is focused on ensuring you remain the sovereign of your own system.
                        </p>
                        <a href="https://github.com/Prof-Harita/terminaI" className="btn btn-outline px-10 py-4">Explore the GitHub</a>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
