"use client";

import { motion } from "framer-motion";
import { Heart, Cpu, Unlock, Shield, Hammer } from "lucide-react";

const flavors = [
  {
    icon: Heart,
    title: "Impact",
    description: "Android Assistant for the Desktop.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Cpu,
    title: "Tech",
    description: "A2A + MCP + Policy Engine.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Unlock,
    title: "Freedom",
    description: "Sovereign. Local. Yours.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Governed Autonomy.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Hammer,
    title: "Builders",
    description: "Made for those who code.",
    gradient: "from-purple-500 to-violet-500",
  },
];

export function IceCreamBar() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {flavors.map((flavor, index) => {
            const Icon = flavor.icon;
            return (
              <motion.div
                key={flavor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors p-6 flex flex-col items-center text-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${flavor.gradient} opacity-80 group-hover:opacity-100 transition-opacity text-white shadow-lg`}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{flavor.title}</h3>
                  <p className="text-xs opacity-60 leading-relaxed">
                    {flavor.description}
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
