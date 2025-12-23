"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Lock, Zap, Cuboid, ShieldCheck } from "lucide-react";

export default function ManifestoPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <div className="text-center mb-24">
             <h1 className="text-6xl font-black mb-8 tracking-tight">Our Covenant</h1>
             <p className="text-2xl opacity-70 serif italic">
               &quot;Do no evil. Cause no regrets.&quot;
             </p>
           </div>

           <div className="space-y-24">
             {/* 1. Always FOSS */}
             <section className="flex gap-8 items-start">
               <div className="p-4 bg-white/5 rounded-2xl shrink-0">
                 <Lock className="text-white" size={48} />
               </div>
               <div>
                 <h2 className="text-4xl font-bold mb-4">Always FOSS</h2>
                 <p className="text-xl opacity-80 leading-relaxed mb-4">
                   We will always be free and open source for non-commercial use.
                 </p>
               </div>
             </section>

             {/* 2. Unbridled agentic intelligence */}
             <section className="flex gap-8 items-start">
               <div className="p-4 bg-white/5 rounded-2xl shrink-0">
                 <Zap className="text-brand-red" size={48} />
               </div>
               <div>
                 <h2 className="text-4xl font-bold mb-4">Unbridled agentic intelligence</h2>
                 <p className="text-xl opacity-80 leading-relaxed mb-4">
                   We embrace the best of innovation to give unfiltered, unbridled AI to the users.
                 </p>
               </div>
             </section>

             {/* 3. Unbound potential with full extensibility */}
             <section className="flex gap-8 items-start">
               <div className="p-4 bg-white/5 rounded-2xl shrink-0">
                 <Cuboid className="text-blue-400" size={48} />
               </div>
               <div>
                 <h2 className="text-4xl font-bold mb-4">Unbound potential with full extensibility</h2>
                 <p className="text-xl opacity-80 leading-relaxed mb-4">
                   We should plug and play extend with the whole ecosystem.
                 </p>
               </div>
             </section>

             {/* 4. Committed to safety */}
             <section className="flex gap-8 items-start">
               <div className="p-4 bg-white/5 rounded-2xl shrink-0">
                 <ShieldCheck className="text-emerald-400" size={48} />
               </div>
               <div>
                 <h2 className="text-4xl font-bold mb-4">Committed to safety</h2>
                 <p className="text-xl opacity-80 leading-relaxed mb-4">
                   Safety is our absolute core. Do no evil. Cause no regrets.
                 </p>
               </div>
             </section>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
