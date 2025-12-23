"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandText } from "./BrandText";

const faqs = [
    {
        question: "Is this free?",
        answer: "Yes. The core agent is open source and free to use. You supply your own API keys (Gemini, Claude, GPT) or use local models (Ollama).",
    },
    {
        question: "Do you store my data?",
        answer: "No. Conversations happen on your device. Logs are stored locally. If you use Enterprise features, data is handled according to your Vertex AI agreement.",
    },
    {
        question: "Does it work on Windows?",
        answer: "Yes, via WSL2. It runs natively on Linux and macOS.",
    },
    {
        question: "How is this different from Copilot?",
        answer: "Copilot lives in your editor. terminaI lives in your shell. It can restart services, grep logs, manage git branches, and orchestrate complex system tasks.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="section bg-[var(--background)]">
            <div className="container max-w-4xl opacity-90">
                <h2 className="text-4xl md:text-5xl mb-16 tracking-tight uppercase text-center">
                    Operations Manual
                </h2>

                <div className="border-t border-white/10">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-white/10">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full py-8 flex items-center justify-between text-left group"
                            >
                                <span className="text-xl font-mono group-hover:text-[var(--color-brand-red)] transition-colors">
                                    {`0${idx + 1} // ${faq.question}`}
                                </span>
                                <span className="text-[var(--color-brand-red)]">
                                    {openIndex === idx ? <Minus /> : <Plus />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-lg opacity-60 font-light leading-relaxed pl-12 border-l border-dashed border-white/10 ml-2">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
