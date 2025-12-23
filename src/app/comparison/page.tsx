"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Check, Minus } from "lucide-react";

export default function ComparisonPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <h1 className="text-4xl font-bold mb-8 text-center">Built Different</h1>
           <p className="text-xl opacity-70 mb-16 text-center max-w-2xl mx-auto">
             TerminaI is not an editor. It is not just a chat window. It is a sovereign operator for your shell.
           </p>

           <div className="overflow-x-auto">
             <table className="w-full border-collapse text-left">
               <thead>
                 <tr className="border-b border-white/10">
                   <th className="p-4">Feature</th>
                   <th className="p-4 text-brand-red font-bold">TerminaI</th>
                   <th className="p-4 opacity-70">Warp</th>
                   <th className="p-4 opacity-70">Cursor</th>
                   <th className="p-4 opacity-70">Aider</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-white/5">
                   <td className="p-4 font-medium">Model Context Protocol (MCP)</td>
                   <td className="p-4 text-green-400"><Check size={20} /></td>
                   <td className="p-4"><Minus size={20} className="opacity-20" /></td>
                   <td className="p-4 text-yellow-400">Partial</td>
                   <td className="p-4"><Minus size={20} className="opacity-20" /></td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="p-4 font-medium">Policy Engine (Governance)</td>
                   <td className="p-4 text-green-400"><Check size={20} /></td>
                   <td className="p-4"><Minus size={20} className="opacity-20" /></td>
                   <td className="p-4"><Minus size={20} className="opacity-20" /></td>
                   <td className="p-4"><Minus size={20} className="opacity-20" /></td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="p-4 font-medium">True PTY (Stateful)</td>
                   <td className="p-4 text-green-400"><Check size={20} /></td>
                   <td className="p-4 text-yellow-400">Partial</td>
                   <td className="p-4"><Minus size={20} className="opacity-20" /></td>
                   <td className="p-4"><Minus size={20} className="opacity-20" /></td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="p-4 font-medium">Agent-to-Agent (A2A) Protocol</td>
                   <td className="p-4 text-green-400"><Check size={20} /></td>
                   <td className="p-4"><Minus size={20} className="opacity-20" /></td>
                   <td className="p-4"><Minus size={20} className="opacity-20" /></td>
                   <td className="p-4"><Minus size={20} className="opacity-20" /></td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
