import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ShieldCheck, Terminal, Users, Search, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "TerminaI Alternatives & Comparisons | FAQ",
  description: "How TerminaI compares to computer assistants, coding agents, and AI IDEs. Independent OSS comparison.",
};

const comparisons = [
  {
    feature: "Execution Model",
    chat: "Suggestion → Manual Copy",
    terminai: "Direct PTY Execution",
    impact: "Speed + Accuracy"
  },
  {
    feature: "Approval System",
    chat: "None / Post-hoc",
    terminai: "3-Tier Safety Ladder",
    impact: "Governed Autonomy"
  },
  {
    feature: "Audit logs",
    chat: "Ephemeral / Cloud",
    terminai: "Local, Exportable",
    impact: "Full Accountability"
  },
  {
    feature: "Model Lock-in",
    chat: "Single Provider",
    terminai: "Model-Agnostic",
    impact: "Sovereignty"
  },
  {
    feature: "Remote Link",
    chat: "Cloud-hosted",
    terminai: "Self-Hosted Relay",
    impact: "Privacy"
  }
];

export default function AlternativesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Alternatives & Comparison</h1>
            <p className="text-xl opacity-70">
              How TerminaI differs from chat-first assistants and general-purpose agents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-300 flex items-center justify-center">
                    <Terminal size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Alternative to Chat Assistants</h2>
                </div>
                <p className="opacity-70 leading-relaxed mb-4">
                  Most AI assistants are designed for text-in, text-out. When they need to operate your system, 
                  they often require you to manually copy-paste commands or rely on broad, unverified permissions.
                </p>
                <p className="opacity-70 leading-relaxed">
                  TerminaI is a <strong>governed operator runtime</strong>. It runs a real pseudo-terminal (PTY) 
                  and handles the execution loop with planning, recovery, and explicit approval checkpoints.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-300 flex items-center justify-center">
                    <Brain size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Compared with Goose (Block)</h2>
                </div>
                <p className="opacity-70 leading-relaxed mb-4">
                  Goose is an excellent open-source tool from the Block team. While both projects share an OSS spirit, 
                  TerminaI focuses heavily on the <strong>Safety Ladder</strong> and <strong>Persona-driven recipes</strong>.
                </p>
                <ul className="space-y-2 opacity-60 text-sm list-disc pl-5">
                  <li>TerminaI uses a granular A/B/C approval system for all tool calls.</li>
                  <li>TerminaI audit logs are structured for review and export.</li>
                  <li>TerminaI supports a broader range of model providers including local gateways out of the box.</li>
                </ul>
              </section>
            </div>

            <div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <h3 className="text-xl font-bold mb-6">Why Approvals Matter</h3>
                <p className="opacity-70 mb-6 italic">
                  &quot;Autonomy without governance is just a ticking clock.&quot;
                </p>
                <p className="opacity-70 mb-6">
                  Agentic AI has the power to delete files, wipe databases, or expose sensitive secrets if mislead. 
                  TerminaI ensures that every high-risk action is gated by you, with clear previews of what will happen.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/5">
                    <div className="font-bold flex items-center gap-2 mb-1">
                      <ShieldCheck size={16} className="text-emerald-400" />
                      Level A: Safe
                    </div>
                    <div className="text-xs opacity-50">Read-only, info gathering (No approval needed)</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/5">
                    <div className="font-bold flex items-center gap-2 mb-1">
                      <Users size={16} className="text-amber-400" />
                      Level B: Validated
                    </div>
                    <div className="text-xs opacity-50">State changes, git ops (Requires one-click approval)</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/5">
                    <div className="font-bold flex items-center gap-2 mb-1">
                      <ShieldCheck size={16} className="text-red-400" />
                      Level C: Destructive
                    </div>
                    <div className="text-xs opacity-50">rm -rf, db truncate, sudo (Requires PIN/MFA gate)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Comparison Summary</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 font-bold">Feature</th>
                  <th className="py-4 font-bold opacity-50">Standard Assistants</th>
                  <th className="py-4 font-bold text-[var(--color-brand-red)]">TerminaI</th>
                </tr>
              </thead>
              <tbody className="opacity-80">
                {comparisons.map((c, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-6 font-bold">{c.feature}</td>
                    <td className="py-6">{c.chat}</td>
                    <td className="py-6 text-white font-medium">{c.terminai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center p-8 rounded-2xl bg-amber-500/5 border border-amber-500/10 max-w-3xl mx-auto">
            <p className="text-sm opacity-50 italic">
              Disclaimer: TerminaI is an independent open-source project. Mention of other products is for 
              comparative purposes only and does not imply affiliation, sponsorship, or endorsement. 
              Information is based on public data as of Jan 2025 and may have changed.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
