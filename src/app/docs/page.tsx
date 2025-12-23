"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Book, Shield, Workflow, Terminal, Globe } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BrandText } from "@/components/BrandText";

const docSections = [
    {
        icon: Book,
        title: "Introduction",
        description: (
            <>
                Learn what <BrandText /> is and the &quot;Sovereign Shell&quot; philosophy.
            </>
        ),
        href: "/docs/introduction",
    },
    {
        icon: Shield,
        title: "Security & Governance",
        description: "Policy ladders, approvals, and audit logs.",
        href: "/docs/governance",
    },
    {
        icon: Workflow,
        title: "Protocols (A2A/MCP)",
        description: "Agent-to-Agent and Model Context Protocol integration.",
        href: "/docs/a2a",
    },
    {
        icon: Globe,
        title: "Web Remote",
        description: "Control your terminal from anywhere.",
        href: "/docs/web-remote",
    },
    {
        icon: Terminal,
        title: "Troubleshooting",
        description: "Common PTY, Node, and auth issues.",
        href: "/docs/troubleshooting",
    },
];

export default function DocsPage() {
    return (
        <>
            <SiteHeader />
            <main className="pt-16">
                <section className="section min-h-screen">
                    <div className="container">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="mb-4">Documentation</h1>
                            <p className="text-xl opacity-70 max-w-2xl mx-auto">
                                The Operator&apos;s Manual for <BrandText />.
                                <br />
                                Governed autonomy, open protocols, and deep system integration.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {docSections.map((section, index) => {
                                const Icon = section.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={section.href}
                                        className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors"
                                            style={{
                                                background: "rgba(226, 35, 26, 0.1)",
                                                color: "var(--color-brand-red)",
                                            }}
                                        >
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold group-hover:text-brand-red transition-colors">
                                            {section.title}
                                        </h3>
                                        <div className="opacity-70 text-sm">{section.description}</div>
                                    </Link>
                                );
                            })}
                        </motion.div>

                        <motion.div
                            className="text-center mt-16 p-8 rounded-lg border border-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <p className="opacity-70 mb-4">
                                Looking for the full API reference or want to contribute?
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link
                                    href="/contribute"
                                    className="btn btn-primary"
                                >
                                    Start Contributing
                                </Link>
                                <a
                                    href="https://github.com/Prof-Harita/termAI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
