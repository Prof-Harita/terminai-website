import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Link from "next/link";
import { Database } from "lucide-react";

export default function MCPPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl text-center">
           <div className="mb-8 flex justify-center text-blue-400">
             <Database size={64} />
           </div>
           <h1 className="text-5xl font-bold mb-6">Model Context Protocol</h1>
           <p className="text-xl opacity-70 mb-12">
             TerminaI provides first-class support for MCP. Connect any MCP server to give your terminal new powers.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
             <div className="card">
               <h3 className="font-bold mb-2">Use Cases</h3>
               <ul className="list-disc list-inside opacity-70 text-sm space-y-2">
                 <li>Connect to GitHub for PRs</li>
                 <li>Connect to Postgres for SQL</li>
                 <li>Connect to Linear for tickets</li>
               </ul>
             </div>
             <div className="card">
               <h3 className="font-bold mb-2">Getting Started</h3>
               <p className="opacity-70 text-sm mb-4">
                 Just add the server config to `~/.terminai/config.json`.
               </p>
             </div>
           </div>

           <Link href="/docs/mcp" className="btn btn-primary">
             Read MCP Guide
           </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
