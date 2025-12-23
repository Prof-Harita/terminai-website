"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Shield, Lock, Eye } from "lucide-react";
import Link from "next/link";

export default function SafetyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <div className="text-center mb-16">
             <h1 className="text-5xl font-bold mb-6">Committed to Safety</h1>
             <p className="text-xl opacity-70">
               Safety is our absolute core. Do no evil. Cause no regrets.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             <div className="card text-center">
               <Shield className="mx-auto mb-4 text-emerald-400" size={32} />
               <h3 className="font-bold mb-2">Policy Engine</h3>
               <p className="opacity-70 text-sm">
                 Granular controls over what the agent can do. Read-only by default? Yes. Sudo requiring PIN? Yes.
               </p>
             </div>
             <div className="card text-center">
               <Lock className="mx-auto mb-4 text-amber-400" size={32} />
               <h3 className="font-bold mb-2">Local Sovereign</h3>
               <p className="opacity-70 text-sm">
                 Your tokens. Your network. No hidden SaaS layer relaying your commands.
               </p>
             </div>
             <div className="card text-center">
               <Eye className="mx-auto mb-4 text-blue-400" size={32} />
               <h3 className="font-bold mb-2">Audit Logs</h3>
               <p className="opacity-70 text-sm">
                 Immutable JSONL logs of every tool call, thought, and action.
               </p>
             </div>
           </div>

           <div className="text-center">
             <Link href="/docs/governance" className="btn btn-primary">
               Read the Governance Spec
             </Link>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
