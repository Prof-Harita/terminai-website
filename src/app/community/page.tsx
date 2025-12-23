"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MessageSquare, Heart, Hash } from "lucide-react";

export default function CommunityPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <div className="text-center mb-16">
             <h1 className="text-5xl font-bold mb-6">Community</h1>
             <p className="text-xl opacity-70">
               Builders, operators, and safety researchers building the sovereign shell.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
             <a href="#" className="card hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-[#5865F2]">
                   <MessageSquare size={32} />
                   <h3 className="text-xl font-bold text-white">Discord</h3>
                </div>
                <p className="opacity-70 mb-4">
                  The active hub. Daily standups in #core-eng, support in #help.
                </p>
                <div className="text-sm font-bold text-[#5865F2]">Join Server &rarr;</div>
             </a>

             <a href="#" className="card hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-white">
                   <Hash size={32} />
                   <h3 className="text-xl font-bold">Matrix</h3>
                </div>
                <p className="opacity-70 mb-4">
                  Bridged to Discord. For those who prefer open protocols.
                </p>
                <div className="text-sm font-bold">Join Space &rarr;</div>
             </a>
           </div>

           <div className="text-center">
             <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
               <Heart className="text-brand-red" />
               Principles
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <div className="p-6 border border-white/10 rounded-xl">
                 <h3 className="font-bold mb-2">Be Helpful</h3>
                 <p className="text-sm opacity-60">
                   We are building complex tools. Help others debug their PTY issues.
                 </p>
               </div>
               <div className="p-6 border border-white/10 rounded-xl">
                 <h3 className="font-bold mb-2">Safety First</h3>
                 <p className="text-sm opacity-60">
                   Never encourage disabling the Policy Engine in production.
                 </p>
               </div>
               <div className="p-6 border border-white/10 rounded-xl">
                 <h3 className="font-bold mb-2">Ship It</h3>
                 <p className="text-sm opacity-60">
                   Perfect is the enemy of merged.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
