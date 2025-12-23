"use client";

import Link from "next/link";
import { Github, Code2, PenTool } from "lucide-react";

export function ContributeCTA() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-br from-brand-red/20 to-black border border-brand-red/20 p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(226,35,26,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Build the Sovereign Shell</h2>
            <p className="text-xl opacity-80 mb-10 text-balance">
              We are looking for builders who care about local-first AI, open protocols, and beautiful CLI experiences.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
               <Link href="/contribute" className="btn btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
                  <Code2 size={20} />
                  Start Coding
               </Link>
               <a href="https://github.com/Prof-Harita/termAI" target="_blank" rel="noopener noreferrer" className="btn btn-outline bg-black/50 text-lg px-8 py-4 flex items-center justify-center gap-2">
                  <Github size={20} />
                  Star on GitHub
               </a>
            </div>
            
             <div className="mt-12 flex items-center justify-center gap-8 opacity-60 text-sm">
                <div className="flex items-center gap-2">
                    <Code2 size={16} />
                    <span>Typescript / React / Rust</span>
                </div>
                 <div className="flex items-center gap-2">
                    <PenTool size={16} />
                    <span>Designers Welcome</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
