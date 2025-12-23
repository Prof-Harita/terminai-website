"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Building, ShieldCheck } from "lucide-react";

export default function EndpointsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center p-4 rounded-full bg-amber-500/10 text-amber-500 mb-6">
               <Building size={48} />
             </div>
             <h1 className="text-5xl font-bold mb-6">Fleet Management</h1>
             <p className="text-xl opacity-70">
               Standardize the chaotic reality of developer machines and innovative endpoints.
             </p>
           </div>

           <div className="space-y-8">
             <div className="flex gap-6 items-start">
               <ShieldCheck className="text-green-400 shrink-0 mt-1" size={32} />
               <div>
                 <h2 className="text-2xl font-bold mb-2">Policy Enforcement</h2>
                 <p className="opacity-70 text-lg">
                   Don&apos;t just ask developers to follow security guidelines. Encode them in the Policy Engine.
                   Blocking `npm install` from untrusted registries? Easy.
                 </p>
               </div>
             </div>

             <div className="flex gap-6 items-start">
               <ShieldCheck className="text-green-400 shrink-0 mt-1" size={32} />
               <div>
                 <h2 className="text-2xl font-bold mb-2">Audit Trails</h2>
                 <p className="opacity-70 text-lg">
                   Every AI action is logged. See exactly what the agent did, why it did it, and who approved it.
                   Centralized logs for compliance.
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
