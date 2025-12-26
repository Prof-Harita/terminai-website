"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section border-t border-white/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl opacity-60 mb-10 leading-relaxed">
            Open source. Voice-powered. Always under your command.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/install"
              className="btn btn-primary text-lg px-10 py-4 flex items-center gap-2"
            >
              Install terminaI
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://github.com/Prof-Harita/terminaI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-lg px-10 py-4 flex items-center gap-2"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm opacity-40">
            <Link href="/manifesto" className="hover:opacity-100 transition-opacity">
              Read the Manifesto
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <Link href="/docs" className="hover:opacity-100 transition-opacity">
              Documentation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
