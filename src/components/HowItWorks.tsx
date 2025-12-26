"use client";

import { motion } from "framer-motion";
import { Mic, Brain, ShieldCheck, Terminal } from "lucide-react";

const steps = [
  {
    icon: Mic,
    number: "01",
    title: "Speak or Type",
    description: "Ask naturally: \"Fix my wifi\" or \"Clean up old docker images\"",
  },
  {
    icon: Brain,
    number: "02",
    title: "Agent Plans",
    description: "terminaI generates a multi-step plan, adapting to errors along the way.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "You Approve",
    description: "Review each command. Approve with a click, or PIN for risky actions.",
  },
  {
    icon: Terminal,
    number: "04",
    title: "It Executes",
    description: "Watch it work in real-time—your terminal, apps, and screens.",
  },
];

export function HowItWorks() {
  return (
    <section className="section border-t border-white/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl opacity-60 max-w-2xl mx-auto">
            From question to action in four steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
                
                <div className="flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon size={32} className="text-[var(--color-brand-red)]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-brand-red)] flex items-center justify-center text-xs font-bold text-white">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed max-w-[200px]">
                    {step.description}
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
