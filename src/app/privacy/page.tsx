"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl">
           <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
           <p className="opacity-70 mb-4">
             TerminaI is a local-first application. 
           </p>
           <h2 className="text-2xl font-bold mt-8 mb-4">Data Collection</h2>
           <p className="opacity-70 mb-4">
             We do not collect usage data, telemetry, or command history by default. 
             All history is stored locally in `~/.terminai/history`.
           </p>
           <h2 className="text-2xl font-bold mt-8 mb-4">AI Processing</h2>
           <p className="opacity-70 mb-4">
             When you use the AI features, your prompt and relevant context is sent to the configured LLM provider (e.g., Google Gemini, OpenAI, or local Ollama). 
             Please refer to their respective privacy policies.
           </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
