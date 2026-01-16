"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const roadmapItems = [
  {
    stage: "Now",
    status: "shipped",
    items: [
      { title: "CLI-First Operator Loop", desc: "Real PTY execution with planning and recovery." },
      { title: "Approvals Ladder", desc: "Three-tier safety governance (A/B/C levels)." },
      { title: "Audit Logs", desc: "Local, exportable action logs." },
      { title: "Provider Selection", desc: "OpenAI-compatible, Gemini, local gateways." },
      { title: "Recipes Library Baseline", desc: "Community-contributed prompt patterns." },
    ]
  },
  {
    stage: "Next (Priority Focus)",
    status: "current",
    items: [
      { title: "Desktop Polish", desc: "Stability, UX, and performance improvements." },
      { title: "Recipe Submission Tooling", desc: "Automated validation for community recipes." },
      { title: "macOS Support Hardening", desc: "Improved packaging and system integration." },
      { title: "Self-Hosted Relay v2", desc: "Enhanced security for remote viewing." },
    ]
  },
  {
    stage: "Exploring",
    status: "future",
    items: [
      { title: "Additional Auth Ecosystems", desc: "Integration with corporate SSO and cloud keys." },
      { title: "A2A Multi-Agent Orchestration", desc: "Coordinating tasks across multiple systems." },
      { title: "Mobile Review Clients", desc: "Native iOS/Android apps for tracking sessions." },
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
                        className="mb-12 text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                            The Roadmap
                        </h1>
                        <p className="text-xl md:text-2xl opacity-60 leading-relaxed max-w-3xl mx-auto mb-8">
                            Our mission is to build the universal system operator. 
                            Here is how we get there.
                        </p>
                        
                        <div className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm mb-12">
                            Best-effort OSS: Priorities reflect current focus, not guarantees.
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                          {['desktop', 'recipes', 'macos', 'auth', 'a2a'].map(label => (
                            <a 
                              key={label}
                              href={`https://github.com/Prof-Harita/terminaI/labels/area%3A${label}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs opacity-60 hover:opacity-100 transition-opacity hover:border-white/20"
                            >
                              area:{label}
                            </a>
                          ))}
                        </div>
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
