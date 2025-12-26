"use client";

import { motion } from "framer-motion";
import { Cpu, Mic, Globe, ShieldCheck } from "lucide-react";
import { BrandText } from "./BrandText";

const features = [
    {
        icon: Cpu,
        title: "See What Your OS Sees",
        description: (
            <>
                Standard agents are text-in, text-out. <BrandText /> reads CPU, RAM, disk usage, and process
                tables in real-time. It doesn&apos;t just guess; it investigates.
            </>
        ),
        colSpan: "md:col-span-2",
    },
    {
        icon: Mic,
        title: "Push-to-Talk",
        description:
            "Hit `Space` to talk. Command your machine while walking around the room. Local Speech-to-Text ensures your voice never leaves your device.",
        colSpan: "md:col-span-1",
    },
    {
        icon: Globe,
        title: "Control from Anywhere",
        description:
            "Securely tunnel into your terminal from your phone or iPad. Check long-running builds from the dinner table without SSH headaches.",
        colSpan: "md:col-span-1",
    },
    {
        icon: ShieldCheck,
        title: "Preview Before Execute",
        description: (
            <>
                Never YOLO. <BrandText /> categorizes commands by risk level and requires explicit
                confirmation for destructive actions. You stay in control.
            </>
        ),
        colSpan: "md:col-span-2",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export function FeatureGrid() {
    return (
        <section className="section" style={{ background: "var(--background)" }}>
            <div className="container">
                <motion.div
                    className="text-center mb-32"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-6 text-5xl tracking-tight">Why <BrandText />?</h2>
                    <p className="opacity-70 max-w-2xl mx-auto text-xl font-light">
                        More than a coding assistant. A complete system operator.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-10 hover:bg-white/[0.04] transition-colors ${feature.colSpan}`}
                                variants={itemVariants}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10 bg-black/20"
                                    style={{
                                        color: "var(--color-brand-red)",
                                    }}
                                >
                                    <Icon size={32} />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold tracking-tight">{feature.title}</h3>
                                <p className="opacity-60 text-lg leading-relaxed font-light">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
