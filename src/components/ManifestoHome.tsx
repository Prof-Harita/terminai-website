"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Unlock, Cpu, Globe, ArrowRight } from "lucide-react";

const principles = [
    {
        icon: Shield,
        title: "Sovereignty First",
        description: "Your computer should belong to you. We build local-first systems that don't depend on cloud permission. Your data, your keys, your machine.",
        gradient: "from-red-500/20 to-orange-500/20",
        iconColor: "text-red-400",
        borderColor: "border-red-500/20"
    },
    {
        icon: Unlock,
        title: "Radical Openness",
        description: "Apache 2.0 licensed. No black boxes. The tools that control our systems must be audit-able, fork-able, and free forever.",
        gradient: "from-orange-500/20 to-amber-500/20",
        iconColor: "text-orange-400",
        borderColor: "border-orange-500/20"
    },
    {
        icon: Cpu,
        title: "Governed Autonomy",
        description: "AI shouldn't be a loose cannon. Our 'Approval Ladder' ensures you are always the final authority, especially for destructive actions.",
        gradient: "from-amber-500/20 to-yellow-500/20",
        iconColor: "text-amber-400",
        borderColor: "border-amber-500/20"
    },
    {
        icon: Globe,
        title: "Agency for All",
        description: "We aren't building a chatbot; we're building a new layer of the OS. One that understands intent and acts on your behalf.",
        gradient: "from-yellow-500/20 to-lime-500/20",
        iconColor: "text-yellow-400",
        borderColor: "border-yellow-500/20"
    }
];

export function ManifestoHome() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Subtle gradient background - red to sand tones */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black/50 to-amber-950/20 pointer-events-none" />
            
            <div className="container relative z-10">
                {/* Header with accent line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500" />
                        <span className="text-xs uppercase tracking-[0.3em] text-red-400 font-bold">The Manifesto</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Reclaiming the Interface Between{" "}
                        <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                            Human and Machine
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl opacity-60 leading-relaxed">
                        The personal computer has been drifting away from its namesake. 
                        We believe AI should be an extension of your agency—not another surveillance subscription.
                    </p>
                </motion.div>

                {/* Principles Grid with Color Gradient Flow */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {principles.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group relative p-8 rounded-2xl border ${p.borderColor} bg-black/40 backdrop-blur-sm overflow-hidden hover:bg-black/60 transition-all duration-300`}
                        >
                            {/* Gradient accent on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-5 text-white">
                                    <p.icon size={24} />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-3 text-white">{p.title}</h3>
                                <p className="text-sm text-white/80 leading-relaxed">{p.description}</p>
                            </div>
                            
                            {/* Decorative number */}
                            <div className="absolute top-4 right-4 text-6xl font-black opacity-[0.03] select-none">
                                0{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Statement Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-orange-500/30 to-amber-500/30 p-[1px] rounded-3xl">
                        <div className="absolute inset-[1px] bg-black/90 rounded-3xl" />
                    </div>
                    
                    <div className="relative z-10 p-10 md:p-16 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Not Another Copilot</h3>
                        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
                            TerminaI is a <span className="text-orange-400 font-semibold">System Operator</span>—built for the SRE troubleshooting a production outage, the researcher organizing terabytes of data, and anyone who wants their machine to work for them.
                        </p>
                        
                        <Link 
                            href="/manifesto" 
                            className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300 transition-colors group"
                        >
                            Read the Full Manifesto
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
