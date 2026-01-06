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
           <h2 className="text-2xl font-bold mt-8 mb-4">Remote Relay & Auditing</h2>
           <p className="opacity-70 mb-4">
             If you choose to use the optional self-hosted remote relay, session data is transmitted to your own relay server.
             Audit logs are stored locally by default. You are responsible for securing your relay and audit logs.
           </p>
           <h2 className="text-2xl font-bold mt-8 mb-4">AI Processing</h2>
           <p className="opacity-70 mb-4">
             When you use the AI features, your prompt and relevant context is sent to the configured LLM provider (e.g., Google Gemini, OpenAI, or local Ollama). 
             Please refer to their respective privacy policies.
           </p>
           <h2 className="text-2xl font-bold mt-8 mb-4">Website Analytics</h2>
           <p className="opacity-70 mb-4">
             This website does not use third-party analytics or tracking scripts by default.
             Server logs may capture basic request metadata for uptime and security monitoring.
           </p>
           <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
           <p className="opacity-70 mb-4">
             If you email us, we only use your message to respond and do not sell or share your data.
           </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
