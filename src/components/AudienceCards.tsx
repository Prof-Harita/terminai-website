"use client";

import { motion } from "framer-motion";
import { Home, Zap, Wrench, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "For Everyday Users",
    tagline: "Stop struggling with tech problems.",
    examples: [
      "Fix my wifi that's dropping constantly",
      "Clean up my slow computer automatically",
      "Set up my development environment",
    ],
    note: "Talk naturally, get results instantly.",
    benefit: "Spend less time on tech issues"
  },
  {
    icon: Zap,
    title: "For Developers",
    tagline: "Code faster, deploy smarter.",
    examples: [
      "Debug complex issues with AI help",
      "Automate repetitive deployment tasks",
      "Analyze logs and find problems instantly",
    ],
    note: "Your AI coding companion.",
    benefit: "Ship faster with fewer manual steps"
  },
  {
    icon: Wrench,
    title: "For DevOps Engineers",
    tagline: "Automate infrastructure like never before.",
    examples: [
      "Monitor systems proactively",
      "Handle incident response automatically",
      "Scale deployments with confidence",
    ],
    note: "Intelligent infrastructure management.",
    benefit: "Reduce toil with governed automation"
  },
  {
    icon: TrendingUp,
    title: "For Teams",
    tagline: "Scale your productivity together.",
    examples: [
      "Standardize workflows across your team",
      "Share automation recipes",
      "Maintain security while scaling",
    ],
    note: "Enterprise-ready for growing teams.",
    benefit: "Scale workflows without chaos"
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
                <p className="text-xs opacity-40 mb-3">{audience.note}</p>
                {audience.benefit && (
                  <div className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">
                    {audience.benefit}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
