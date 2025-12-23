"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const comparisons = [
    {
        feature: "Governed Autonomy (Policy)",
        terminai: true,
        warp: false,
        cursor: false,
    },
    {
        feature: "Model Context Protocol (MCP)",
        terminai: true,
        warp: false,
        cursor: "Partial",
    },
    {
        feature: "Agent-to-Agent (A2A)",
        terminai: true,
        warp: false,
        cursor: false,
    },
    {
        feature: "True PTY (Stateful Shell)",
        terminai: true,
        warp: "Partial",
        cursor: false,
    },
    {
        feature: "Local-First / Sovereign",
        terminai: true,
        warp: false,
        cursor: false,
    },
];

function FeatureStatus({ value }: { value: boolean | string }) {
    if (value === true) {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400">
                <Check size={14} />
            </span>
        );
    }
    if (value === false) {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-white/20">
                <Minus size={14} />
            </span>
        );
    }
    return <span className="text-yellow-400 text-xs font-mono uppercase">{value}</span>;
}

export function ComparisonTable() {
    return (
        <section className="py-24 border-t border-white/5 bg-black/30">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-3xl font-bold">Systems vs. Chatbots</h2>
                    <p className="opacity-70 max-w-2xl mx-auto text-lg">
                        TerminaI isn&apos;t just a chat window. It&apos;s a governed operator for your OS.
                    </p>
                </motion.div>

                <motion.div
                    className="overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <table className="w-full max-w-4xl mx-auto border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-6 px-6 font-semibold w-1/3">Capability</th>
                                <th className="text-center py-6 px-6 font-bold text-xl" style={{ color: "var(--color-brand-red)" }}>
                                    terminaI
                                </th>
                                <th className="text-center py-6 px-6 font-semibold opacity-60">Warp</th>
                                <th className="text-center py-6 px-6 font-semibold opacity-60">Cursor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((row, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                >
                                    <td className="py-6 px-6 font-medium opacity-90">{row.feature}</td>
                                    <td className="py-6 px-6 text-center bg-brand-red/5">
                                        <FeatureStatus value={row.terminai} />
                                    </td>
                                    <td className="py-6 px-6 text-center opacity-60">
                                        <FeatureStatus value={row.warp} />
                                    </td>
                                    <td className="py-6 px-6 text-center opacity-60">
                                        <FeatureStatus value={row.cursor} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
}
