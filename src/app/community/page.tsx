"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MessageSquare, Hash, Lock, Zap, Cuboid, ShieldCheck } from "lucide-react";

export default function CommunityPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <div className="text-center mb-16">
             <h1 className="text-5xl font-bold mb-6">Community</h1>
             <p className="text-xl opacity-70">
               Builders and operators building the sovereign shell.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
             <div className="card opacity-70 cursor-not-allowed">
                <div className="flex items-center gap-3 mb-4 text-[#5865F2]">
                   <MessageSquare size={32} />
                   <h3 className="text-xl font-bold text-white">Discord</h3>
                </div>
                <p className="opacity-70 mb-4">
                  The active hub. Daily standups in #core-eng, support in #help.
                </p>
                <div className="text-sm font-bold text-[#5865F2]">Invite coming soon</div>
             </div>

             <div className="card opacity-70 cursor-not-allowed">
                <div className="flex items-center gap-3 mb-4 text-white">
                   <Hash size={32} />
                   <h3 className="text-xl font-bold">Matrix</h3>
                </div>
                <p className="opacity-70 mb-4">
                  Bridged to Discord. For those who prefer open protocols.
                </p>
                <div className="text-sm font-bold">Invite coming soon</div>
             </div>
           </div>

           <div className="text-center">
             <h2 className="text-2xl font-bold mb-8">Our Covenant</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
               <div className="p-5 border border-white/10 rounded-xl text-center">
                 <Lock className="mx-auto mb-3 text-amber-400" size={24} />
                 <h3 className="font-bold text-sm mb-1">Always FOSS</h3>
                 <p className="text-xs opacity-50">Free and open source. Forever.</p>
               </div>
               <div className="p-5 border border-white/10 rounded-xl text-center">
                 <Zap className="mx-auto mb-3 text-brand-red" size={24} />
                 <h3 className="font-bold text-sm mb-1">Unbridled Intelligence</h3>
                 <p className="text-xs opacity-50">Unfiltered AI to the users.</p>
               </div>
               <div className="p-5 border border-white/10 rounded-xl text-center">
                 <Cuboid className="mx-auto mb-3 text-blue-400" size={24} />
                 <h3 className="font-bold text-sm mb-1">Full Extensibility</h3>
                 <p className="text-xs opacity-50">Plug and play with the ecosystem.</p>
               </div>
               <div className="p-5 border border-white/10 rounded-xl text-center">
                 <ShieldCheck className="mx-auto mb-3 text-emerald-400" size={24} />
                 <h3 className="font-bold text-sm mb-1">Committed to Safety</h3>
                 <p className="text-xs opacity-50">Do no evil. Cause no regrets.</p>
               </div>
             </div>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
