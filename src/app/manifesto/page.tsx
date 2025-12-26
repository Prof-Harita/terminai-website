"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Shield, Unlock, Cpu, Globe } from "lucide-react";
import Link from "next/link";

const principles = [
    {
        icon: Shield,
        title: "Sovereignty First",
        description: "Your computer should belong to you. We build local-first systems that don't depend on cloud permission to function. Your data, your keys, your machine."
    },
    {
        icon: Unlock,
        title: "Radical Openness",
        description: "Apache 2.0 licensed. No black boxes. We believe the tools that control our systems must be audit-able, fork-able, and free forever."
    },
    {
        icon: Cpu,
        title: "Governed Autonomy",
        description: "AI shouldn't be a black box or a loose cannon. Our 'Approval Ladder' ensures that the user is always the final authority, especially for destructive actions."
    },
    {
        icon: Globe,
        title: "Agency for All",
        description: "We aren't building a better chatbot; we're building a new layer of the OS. One that understands intent and acts on your behalf across all applications."
    }
];

export default function ManifestoPage() {
    return (
        <>
            <SiteHeader />
            <main className="pt-32 pb-20 overflow-hidden">
                <div className="container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20 text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                            The Termina<span className="text-brand-red">I</span> Manifesto
                        </h1>
                        <p className="text-xl md:text-2xl opacity-60 leading-relaxed font-medium">
                            Reclaiming the interface between human and machine.
                        </p>
                    </motion.div>

                    <div className="prose prose-invert prose-lg max-w-none mb-24">
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold mb-6">Why TerminaI Exists</h2>
                            <p className="opacity-70 leading-relaxed">
                                For decades, the personal computer has been drifting away from its namesake. 
                                Modern OSs are becoming increasingly locked down, surveillance-heavy, and 
                                cloud-dependent. The command line—the last bastion of pure human-to-machine 
                                communication—is still stuck in the syntax of the 1970s.
                            </p>
                            <p className="opacity-70 leading-relaxed">
                                We believe that AI shouldn&apos;t be just another SaaS subscription that watches 
                                you type. It should be an extension of your own agency—a powerful operator 
                                that understands your intent and has the permission to act on it, locally.
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {principles.map((p, i) => (
                                <motion.div
                                    key={p.title}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-2xl bg-white/[0.02] border border-white/10"
                                >
                                    <p.icon size={32} className="text-brand-red mb-4" />
                                    <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                                    <p className="text-sm opacity-60 leading-relaxed">{p.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <section className="mb-16">
                            <h2 className="text-3xl font-bold mb-6">Not Another Copilot</h2>
                            <p className="opacity-70 leading-relaxed">
                                TerminaI is not a coding assistant. While it can write code, its purpose is 
                                broader: it is a **System Operator**. It is built for the SRE troubleshooting 
                                a production outage, the researcher organizing terabytes of data, and the 
                                everyday user who just wants their machine to work for them.
                            </p>
                            <p className="opacity-70 leading-relaxed">
                                By forking the original Google Gemini CLI and enhancing it with our 
                                Agent-to-Agent (A2A) protocol and Desktop Automation, we are creating 
                                the foundation for truly sovereign AI.
                            </p>
                        </section>
                    </div>

                    <div className="text-center p-12 rounded-3xl bg-brand-red/5 border border-brand-red/20">
                        <h2 className="text-2xl font-bold mb-4">Join the Resistance</h2>
                        <p className="opacity-60 mb-8">
                            TerminaI is and will always be community-driven.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="https://github.com/Prof-Harita/terminaI" className="btn btn-primary px-8">View the Code</a>
                            <Link href="/install" className="btn btn-outline px-8">Get Started</Link>
                        </div>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
