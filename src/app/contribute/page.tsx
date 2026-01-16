"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { motion } from "framer-motion";
import { Github, Code2, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContributePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center mb-16"
           >
             <h1 className="text-5xl font-bold mb-6">Unbound Potential. Always FOSS.</h1>
             <p className="text-xl opacity-70">
               We embrace the best of innovation to give powerful open AI for users.
               Join us in building the ecosystem.
             </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
             <div className="card hover:bg-white/5 transition-colors">
               <div className="flex items-center gap-3 mb-4 text-brand-red">
                 <Code2 size={24} />
                 <h3 className="text-xl font-bold text-white">Core Eng</h3>
               </div>
               <p className="opacity-70 mb-6">
                 Work on `packages/cli` (Node/TS), the PTY bridge, or the Policy Engine.
               </p>
               <a href="https://github.com/Prof-Harita/terminaI" target="_blank" className="btn btn-outline w-full justify-center">
                 View Issues
               </a>
             </div>

             <div className="card hover:bg-white/5 transition-colors">
               <div className="flex items-center gap-3 mb-4 text-brand-red">
                 <MessageSquare size={24} />
                 <h3 className="text-xl font-bold text-white">Protocols</h3>
               </div>
               <p className="opacity-70 mb-6">
                 Help spec out A2A (Agent-to-Agent) or build new MCP integrations.
               </p>
               <Link href="/protocols/mcp" className="btn btn-outline w-full justify-center">
                 View Protocol Specs
               </Link>
             </div>
           </div>

           <div className="text-center">
             <a href="https://github.com/Prof-Harita/terminaI" target="_blank" className="btn btn-primary px-8 py-3 text-lg inline-flex items-center gap-2">
               <Github size={20} />
               Star the Repo
             </a>
             <p className="mt-4 text-sm opacity-50">Join us on Discord/Community soon.</p>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
