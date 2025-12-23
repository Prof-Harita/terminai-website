"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Network, GitPullRequest, MessageCircle } from "lucide-react";

export default function AutomationHubPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center p-4 rounded-full bg-blue-500/10 text-blue-500 mb-6">
               <Network size={48} />
             </div>
             <h1 className="text-5xl font-bold mb-6">The Automation Hub</h1>
             <p className="text-xl opacity-70">
               Connect your tools. Orchestrate your workflow. Powered by MCP.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card">
                <div className="flex items-center gap-3 mb-4 text-purple-400">
                  <GitPullRequest size={32} />
                  <h3 className="font-bold text-xl text-white">GitHub Integration</h3>
                </div>
                <p className="opacity-70 mb-4">
                  &quot;Summarize the PRs assigned to me and verify their CI status locally.&quot;
                </p>
                <div className="text-xs font-mono bg-black/50 p-3 rounded text-green-400">
                  Tool: github_get_issues<br/>
                  Tool: github_check_runs
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4 text-green-400">
                  <MessageCircle size={32} />
                  <h3 className="font-bold text-xl text-white">Slack & Commms</h3>
                </div>
                <p className="opacity-70 mb-4">
                  &quot;Post a deployment summary to #eng-deploys when the build finishes.&quot;
                </p>
                <div className="text-xs font-mono bg-black/50 p-3 rounded text-green-400">
                  Tool: slack_post_message
                </div>
              </div>
           </div>

           <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10">
             <h2 className="text-2xl font-bold mb-4">How it works</h2>
             <p className="opacity-70 max-w-2xl mx-auto">
               TerminaI uses the <strong>Model Context Protocol (MCP)</strong> to discover tools from local or remote servers. 
               You just add the server config, and the capabilities appear in your terminal.
             </p>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
