"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { motion } from "framer-motion";
import { Layers, Box, Cpu } from "lucide-react";

export default function ArchitecturePage() {
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
             <h1 className="text-4xl font-bold mb-6">System Architecture</h1>
             <p className="text-xl opacity-70">
               A high-level view of how TerminaI works.
             </p>
           </motion.div>

           <div className="space-y-12 relative border-l border-white/10 ml-6 md:ml-12 pl-8 md:pl-12 py-4">
             {/* Node 1 */}
             <div className="relative">
               <div className="absolute -left-[41px] md:-left-[59px] top-0 w-6 h-6 rounded-full bg-brand-red border-4 border-black" />
               <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Layers className="text-brand-red" /> The Monorepo</h3>
               <p className="opacity-70 mb-4">
                 We use Turborepo. Core packages are in `packages/`.
               </p>
               <ul className="list-disc list-inside opacity-60 space-y-1 font-mono text-sm">
                 <li>packages/cli (The main entrypoint)</li>
                 <li>packages/a2a (Protocol definitions)</li>
                 <li>packages/ui (Ink/React components)</li>
               </ul>
             </div>

             {/* Node 2 */}
             <div className="relative">
               <div className="absolute -left-[41px] md:-left-[59px] top-0 w-6 h-6 rounded-full bg-white/20 border-4 border-black" />
               <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Cpu className="text-blue-400" /> The Runtime</h3>
               <p className="opacity-70 mb-4">
                 TerminaI runs on Node.js but spawns a true PTY (node-pty) to interface with your shell (zsh/bash/fish).
                 It injects itself as a man-in-the-middle to intercept commands when necessary (Policy Engine), but mostly stays out of the way.
               </p>
             </div>

             {/* Node 3 */}
             <div className="relative">
               <div className="absolute -left-[41px] md:-left-[59px] top-0 w-6 h-6 rounded-full bg-white/20 border-4 border-black" />
               <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Box className="text-yellow-400" /> MCP Host</h3>
               <p className="opacity-70">
                 The `MCPClient` class handles connections to external MCP servers. It creates a unified tools registry that the LLM can query.
               </p>
             </div>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
