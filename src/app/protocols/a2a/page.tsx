import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Link from "next/link";
import { Network } from "lucide-react";

export default function A2APage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl text-center">
           <div className="mb-8 flex justify-center text-brand-red">
             <Network size={64} />
           </div>
           <h1 className="text-5xl font-bold mb-6">Agent-to-Agent Protocol</h1>
           <p className="text-xl opacity-70 mb-12">
             A standardized JSON-RPC over SSE protocol for agents to collaborate, delegate tasks, and hand off tools.
           </p>
           
           <div className="p-6 bg-black/50 border border-white/10 rounded-xl text-left font-mono text-sm mb-12 overflow-x-auto">
<pre>{`// Task Delegation Example
{
  "jsonrpc": "2.0",
  "method": "delegate_task",
  "params": {
    "goal": "Check server health",
    "context": { "server_ip": "10.0.0.1" }
  }
}`}</pre>
           </div>

           <Link href="/docs/a2a" className="btn btn-primary">
             View Protocol Spec
           </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
