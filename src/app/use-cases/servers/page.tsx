"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Server, Activity, Lock } from "lucide-react";

export default function ServerOpsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center p-4 rounded-full bg-green-500/10 text-green-500 mb-6">
               <Server size={48} />
             </div>
             <h1 className="text-5xl font-bold mb-6">Server Operations</h1>
             <p className="text-xl opacity-70">
               Interactive runbooks that actually run. Incident response with a safety net.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             <div className="card">
                <Activity className="text-brand-red mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Incident Response</h3>
                <p className="opacity-70 mb-4">
                  &quot;Analyze the last 5 minutes of Nginx logs for 500 errors and correlate with CPU spikes.&quot;
                </p>
             </div>
             <div className="card">
                <Lock className="text-amber-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Safe Access</h3>
                <p className="opacity-70 mb-4">
                  Grant temporal, scoped access to the agent. No more sharing raw SSH keys for one-off tasks.
                </p>
             </div>
           </div>

           <div className="card bg-white/5 border-white/10">
             <h2 className="text-2xl font-bold mb-4">The A2A Advantage</h2>
             <p className="opacity-70">
               Install TerminaI on your bastion host. Connect from your laptop using the A2A Protocol.
               You get a local UI for a remote, governed shell.
             </p>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
