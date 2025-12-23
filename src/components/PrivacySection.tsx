"use client";

import { ShieldCheck, Lock, EyeOff, Server } from "lucide-react";
import { BrandText } from "./BrandText";

const privacyFeatures = [
    {
        icon: EyeOff,
        title: "Zero Retention",
        description: "We don't train on your command history. Conversations stay on your device.",
    },
    {
        icon: Lock,
        title: "Local Execution",
        description: "Commands run locally. No remote shell execution unless explicitly tunneled.",
    },
    {
        icon: ShieldCheck,
        title: "Human in the Loop",
        description: "Destructive commands (rm -rf, etc.) require explicit 'Y' confirmation.",
    },
    {
        icon: Server,
        title: "Enterprise Ready",
        description: "Deploy with Vertex AI to keep all data within your VPC.",
    },
];

export function PrivacySection() {
    return (
        <section className="section bg-black border-y border-white/10">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl mb-6 tracking-tight uppercase">
                            Safe by <span className="text-[var(--color-brand-red)]">Design</span>.
                        </h2>
                        <p className="text-xl opacity-70 leading-relaxed mb-8 font-mono">
                            <BrandText /> is built for environments where data leaks are not an option.
                            Your terminal history is yours. We don't want it.
                        </p>
                        <div className="p-6 border border-white/10 bg-white/5 font-mono text-sm leading-relaxed">
                            <span className="text-green-500">✔</span> No code storage<br />
                            <span className="text-green-500">✔</span> No model training<br />
                            <span className="text-green-500">✔</span> SOC2 Compliance (via Vertex AI)<br />
                            <span className="text-green-500">✔</span> Open Source Auditability
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {privacyFeatures.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div key={idx} className="p-8 border border-white/10 hover:border-white/30 transition-colors bg-white/[0.02]">
                                    <Icon className="w-8 h-8 mb-4 text-[var(--color-brand-red)]" />
                                    <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{feature.title}</h3>
                                    <p className="text-sm opacity-60 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
