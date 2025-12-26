"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const roadmapItems = [
    {
        stage: "Currently Shipping",
        status: "shipped",
        items: [
            { title: "Gemini 2.5 Pro 2M Context", desc: "Native support for massive context reasoning." },
            { title: "A2A Protocol v1", desc: "Agent-to-agent delegation and remote viewing." },
            { title: "MCP Tooling Hub", desc: "Plug-and-play with the Model Context Protocol." },
            { title: "Approval Ladder", desc: "Three-tier safety governance architecture." }
        ]
    },
    {
        stage: "Q1 2025: GUI Revolution",
        status: "current",
        items: [
            { title: "Desktop Automation Protocol", desc: "Native GUI control for Linux & Windows." },
            { title: "Remote A2A Relay", desc: "Secure remote viewing without port forwarding." },
            { title: "Local Voice (Whisper/Piper)", desc: "100% offline speech-to-system control." },
            { title: "Pattern Library (Recipes)", desc: "Community-driven automation templates." }
        ]
    },
    {
        stage: "Q2 2025: Mobility & Mesh",
        status: "future",
        items: [
            { title: "iOS / Android Operators", desc: "Control your machines via voice from your phone." },
            { title: "Multi-Agent Mesh", desc: "Orchestrate complex tasks across a fleet of machines." },
            { title: "Hardware Optimization", desc: "Native support for NPU-accelerated local models." }
        ]
    }
];

export default function RoadmapPage() {
    return (
        <>
            <SiteHeader />
            <main className="pt-32 pb-20">
                <div className="container max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20 text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                            The Roadmap
                        </h1>
                        <p className="text-xl md:text-2xl opacity-60 leading-relaxed max-w-3xl mx-auto">
                            Our mission is to build the universal system operator. 
                            Here is how we get there.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12 relative">
                        {/* Center vertical line for desktop */}
                        <div className="absolute left-1/2 top-10 bottom-10 w-px bg-white/10 hidden md:block" />

                        {roadmapItems.map((period, idx) => (
                            <section key={period.stage} className="relative">
                                <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                                    
                                    {/* Timeline Marker */}
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex items-center justify-center">
                                        <div className={`w-4 h-4 rounded-full border-2 ${period.status === 'shipped' ? 'bg-green-500 border-green-500' : period.status === 'current' ? 'bg-brand-red border-brand-red animate-pulse' : 'bg-transparent border-white/20'}`} />
                                    </div>

                                    <div className="flex-1 w-full">
                                        <motion.div 
                                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className={`p-8 rounded-3xl border border-white/10 bg-white/[0.02] ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                                        >
                                            <h2 className="text-2xl font-bold mb-6 text-white">{period.stage}</h2>
                                            <div className="grid grid-cols-1 gap-6">
                                                {period.items.map((item) => (
                                                    <div key={item.title} className="group">
                                                        <h3 className={`text-lg font-bold mb-1 group-hover:text-brand-red transition-colors`}>{item.title}</h3>
                                                        <p className="text-sm opacity-50 leading-relaxed">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Spacer for timeline symmetry */}
                                    <div className="hidden md:block flex-1" />
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="mt-32 p-12 rounded-3xl border border-white/10 bg-white/[0.01] text-center">
                        <h2 className="text-3xl font-bold mb-4">Influence the Future</h2>
                        <p className="opacity-60 mb-8 max-w-2xl mx-auto">
                            We build based on what people actually use. Have a feature request or want to contribute to a core protocol?
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="https://github.com/Prof-Harita/terminaI/issues" className="btn btn-outline px-8">Submit Issue</a>
                            <a href="https://github.com/Prof-Harita/terminaI/discussions" className="btn btn-primary px-8">Join Discussion</a>
                        </div>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}