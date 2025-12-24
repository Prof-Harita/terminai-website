"use client";

import { motion } from "framer-motion";
import { Home, Zap, Wrench, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "For End Users",
    tagline: '"Fix my computer"—for real.',
    examples: [
      "Why is my laptop slow? Fix it.",
      "What's eating my disk space?",
      "Back up my files before I update.",
    ],
    note: "No command-line knowledge needed.",
  },
  {
    icon: Zap,
    title: "For Power Users",
    tagline: "Your terminal, supercharged.",
    examples: [
      "Voice control (hold Space to talk)",
      "Process orchestration (/sessions)",
      "MCP extensions (GitHub, Slack, custom)",
    ],
    note: "More power, more control.",
  },
  {
    icon: Wrench,
    title: "For Developers",
    tagline: "The primitives you want to build on.",
    examples: [
      "A2A Protocol: Agent control plane",
      "MCP Ecosystem: Infinite extensibility",
      "Policy Engine: Programmable trust",
    ],
    note: "Build trustworthy agentic automation.",
  },
  {
    icon: TrendingUp,
    title: "For Organizations",
    tagline: "Agentic automation you can audit.",
    examples: [
      "Non-repudiable action logs",
      "Approval workflows for sensitive ops",
      "Fleet-ready, data stays local",
    ],
    note: "Enterprise-grade governance.",
  },
];

export function AudienceCards() {
  return (
    <section className="section border-t border-white/5">
      <div className="container">
        <h2 className="text-center mb-4">Built for Everyone</h2>
        <p className="text-center text-lg opacity-60 mb-12 max-w-2xl mx-auto">
          From first-time terminal users to enterprise SRE teams.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-white/20 transition-colors"
              >
                <Icon
                  size={28}
                  className="text-[var(--color-brand-red)] mb-4"
                />
                <h3 className="font-bold text-lg mb-1">{audience.title}</h3>
                <p className="text-sm text-[var(--color-brand-red)] mb-3">
                  {audience.tagline}
                </p>
                <ul className="space-y-1 mb-4">
                  {audience.examples.map((example, i) => (
                    <li
                      key={i}
                      className="text-xs opacity-60 flex items-start gap-2"
                    >
                      <span className="opacity-40">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
                <p className="text-xs opacity-40">{audience.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}