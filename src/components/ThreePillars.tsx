"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Unlock, Brain, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Unlock,
    title: "Always Free",
    subtitle: "Apache 2.0 Licensed",
    description: "Free and open source. Fork it. Modify it. Your system, your rules. No SaaS lock-in.",
    link: "/free",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "Full Control",
    subtitle: "Terminal, Apps, Screens",
    description: "Not just a chatbot. Real terminal execution, GUI automation, and multi-step planning.",
    link: "/intelligence",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    subtitle: "Approval Ladder",
    description: "Three-tier permissions. PIN verification for destructive actions. You stay in command.",
    link: "/safety",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function ThreePillars() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  href={pillar.link}
                  className="block h-full group rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all p-8"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${pillar.gradient} text-white mb-6 shadow-lg`}
                  >
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-1">{pillar.title}</h3>
                  <p className="text-sm text-[var(--color-brand-red)] uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="opacity-60 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  <div className="mt-6 text-sm text-[var(--color-brand-red)] font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Learn more
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
