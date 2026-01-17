"use client";

import { motion } from "framer-motion";
import { Unlock, Zap, Cuboid, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Unlock,
    title: "Always FOSS",
    description: "Free and open source. Forever.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Unbridled Intelligence",
    description: "Full-strength capability, safety-gated execution.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Cuboid,
    title: "Full Extensibility",
    description: "Plug and play with the whole ecosystem.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Committed to Safety",
    description: "Do no evil. Cause no regrets.",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function IceCreamBar() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors p-6 flex flex-col items-center text-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${pillar.gradient} opacity-80 group-hover:opacity-100 transition-opacity text-white shadow-lg`}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{pillar.title}</h3>
                  <p className="text-xs opacity-60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
