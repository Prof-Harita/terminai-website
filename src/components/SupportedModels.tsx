"use client";

import { motion } from "framer-motion";
import { WireframeGemini, WireframeChatGPT, WireframeAPI, WireframeLocal } from "./icons/WireframeIcons";

const models = [
  {
    icon: WireframeGemini,
    title: "Google",
    description: "Google Auth, Gemini API, Vertex API.",
  },
  {
    icon: WireframeChatGPT,
    title: "ChatGPT",
    description: "Auth with your ChatGPT Plus login.",
  },
  {
    icon: WireframeAPI,
    title: "OpenAI Compatible",
    description: "Any model provider and link. Just bring your own API.",
  },
  {
    icon: WireframeLocal,
    title: "Local LLM",
    description: "Setup your local LLMs via Ollama or LM Studio.",
  },
];

export function SupportedModels() {
  return (
    <section className="section border-t border-white/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Choose Your Intelligence</h2>
          <p className="text-xl opacity-60 max-w-2xl mx-auto">
            Flexible support for the world&apos;s best models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:border-[var(--color-brand-red)]">
                      <Icon size={40} className="text-[var(--color-brand-red)]" strokeWidth={1} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed max-w-[200px]">
                    {item.description}
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
