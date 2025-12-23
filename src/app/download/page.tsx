"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Terminal, Shield, Cpu } from "lucide-react";

export default function DownloadPage() {
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
                            <h1 className="mb-4">Install terminaI</h1>
                            <p className="text-xl opacity-70 max-w-2xl mx-auto">
                                Run from source (recommended for builders) or grab the latest pre-release.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                            {/* Primary Method: From Source */}
                            <motion.div
                                className="card bg-white/5 border-brand-red/20"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded bg-brand-red/10 text-brand-red">
                                        <Terminal size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">From Source</h3>
                                        <p className="text-sm opacity-60">Recommended for contributors</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="code-block relative group">
                                        <pre className="text-sm overflow-x-auto">
                                            <code>git clone https://github.com/Prof-Harita/termAI.git</code>
                                            <br />
                                            <code>cd termAI</code>
                                            <br />
                                            <code>npm ci && npm run build</code>
                                            <br />
                                            <code>npm link --workspace packages/termai</code>
                                        </pre>
                                    </div>
                                    <div className="p-4 rounded bg-yellow-500/10 border border-yellow-500/20 text-sm opacity-80">
                                        <strong>Prerequisites:</strong> Node.js 20+, npm 10+
                                    </div>
                                </div>
                            </motion.div>

                            {/* Secondary: Platform Specifics */}
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="card">
                                    <h3 className="font-bold mb-4 flex items-center gap-2">
                                        <Cpu size={20} /> Platform Notes
                                    </h3>
                                    <div className="space-y-4 text-sm opacity-80">
                                        <div>
                                            <strong className="text-white">Linux:</strong> First-class support. Ensure `build-essential` is installed for native modules.
                                        </div>
                                        <div>
                                            <strong className="text-white">macOS:</strong> Supported (Intel & Silicon). Requires Xcode Command Line Tools.
                                        </div>
                                        <div>
                                            <strong className="text-white">Windows (WSL2):</strong> Recommended. Native Windows is experimental (PTY limitations).
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-blue-500/20 bg-blue-500/5">
                                    <h3 className="font-bold mb-4 flex items-center gap-2 text-blue-400">
                                        <Shield size={20} /> First Run & Auth
                                    </h3>
                                    <p className="text-sm opacity-80 mb-3">
                                        TerminaI requires a Gemini API key (free tier available) to function as the intelligence layer.
                                    </p>
                                    <div className="code-block">
                                        <code>terminai auth login</code>
                                    </div>
                                    <p className="text-xs opacity-50 mt-2">
                                        This stores a token in `~/.terminai/config.json`.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
