"use client";

import { motion } from "framer-motion";
import { Server, FileText, Users } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const features = [
    {
        icon: Server,
        title: "Bring Your Own Model (Vertex)",
        description:
            "Connect terminaI to your internal Vertex AI endpoints. Keep data within your VPC.",
    },
    {
        icon: FileText,
        title: "Audit Logs",
        description:
            "Every command, every suggestion, every confirmation—logged to your SIEM.",
    },
    {
        icon: Users,
        title: "Role Based Access",
        description:
            "Restrict which tools (File System, Web, Process Control) are available to which agents.",
    },
];

export default function EnterprisePage() {
    return (
        <>
            <SiteHeader />
            <main className="pt-16">
                <section className="section min-h-screen flex items-center">
                    <div className="container">
                        <motion.div
                            className="max-w-3xl mx-auto text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="mb-6">
                                Scale Intelligence,
                                <br />
                                <span style={{ color: "var(--color-brand-red)" }}>Not Risk.</span>
                            </h1>
                            <p className="text-xl opacity-70">
                                Deploy terminaI with Vertex AI governance, centralized audit logs,
                                and private trust boundaries.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid-features max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="card text-center">
                                        <div
                                            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                                            style={{
                                                background: "rgba(226, 35, 26, 0.1)",
                                                color: "var(--color-brand-red)",
                                            }}
                                        >
                                            <Icon size={28} />
                                        </div>
                                        <h3 className="mb-3 text-xl">{feature.title}</h3>
                                        <p className="opacity-70">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </motion.div>

                        <motion.div
                            className="text-center mt-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <a
                                href="mailto:partners@terminai.org"
                                className="btn btn-primary text-lg px-8 py-4"
                            >
                                Contact for Pilot
                            </a>
                            <p className="text-sm opacity-50 mt-4">partners@terminai.org</p>
                        </motion.div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
