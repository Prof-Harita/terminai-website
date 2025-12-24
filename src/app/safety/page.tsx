import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Shield,
  Lock,
  FileCheck,
  AlertTriangle,
  CheckCircle,
  Key,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Safety | terminaI",
  description:
    "Safety by design. Approval ladder, risk classification, PIN verification, and audit trails.",
};

export default function SafetyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-16">
          <div className="container text-center">
            <h1 className="mb-6">
              Safety{" "}
              <span className="text-[var(--color-brand-red)]">by Design</span>
            </h1>
            <p className="text-2xl opacity-70 max-w-3xl mx-auto mb-4">
              AI that operates your system must be governed.
            </p>
            <p className="text-lg opacity-50 max-w-2xl mx-auto">
              We built the infrastructure to make that possible.
            </p>
          </div>
        </section>

        {/* Theme 1: Trust Model */}
        <section className="section pt-0">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                <Shield size={20} />
              </div>
              <span className="text-sm uppercase tracking-wider opacity-50">
                Theme 1
              </span>
            </div>
            <h2 className="mb-6">Human-in-the-Loop, Always</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg opacity-70 mb-6 leading-relaxed">
                  terminaI's safety model is built around one core principle:
                  <strong className="text-white">
                    {" "}
                    The model cannot lower safety minimums.
                  </strong>
                  It can increase caution, never reduce it.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />
                    <span>
                      <strong>Everything is possible</strong> with explicit user
                      confirmation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />
                    <span>
                      <strong>Fail closed</strong> — if uncertain, require
                      higher review
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />
                    <span>
                      <strong>Plain-English consent</strong> before risky
                      actions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />
                    <span>
                      <strong>Provenance-aware</strong> — untrusted sources
                      can't silently authorize
                    </span>
                  </li>
                </ul>
              </div>
              <div className="code-block text-sm font-mono">
                <div className="text-gray-500 mb-4">
                  // Trust Pipeline (end-to-end)
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded bg-white/5 border-l-2 border-gray-500">
                    1. Provenance Tagging
                  </div>
                  <div className="text-center text-gray-600">↓</div>
                  <div className="p-2 rounded bg-white/5 border-l-2 border-blue-500">
                    2. Structured Parsing → ActionProfile
                  </div>
                  <div className="text-center text-gray-600">↓</div>
                  <div className="p-2 rounded bg-white/5 border-l-2 border-yellow-500">
                    3. Minimum Review Computation (A/B/C)
                  </div>
                  <div className="text-center text-gray-600">↓</div>
                  <div className="p-2 rounded bg-white/5 border-l-2 border-orange-500">
                    4. Enforcement (approval UX)
                  </div>
                  <div className="text-center text-gray-600">↓</div>
                  <div className="p-2 rounded bg-white/5 border-l-2 border-green-500">
                    5. Execution + Audit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Theme 2: Approval Ladder */}
        <section className="section border-t border-white/5">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
                <Lock size={20} />
              </div>
              <span className="text-sm uppercase tracking-wider opacity-50">
                Theme 2
              </span>
            </div>
            <h2 className="mb-6">Three Levels of Trust</h2>
            <p className="text-lg opacity-70 mb-8 max-w-3xl">
              Every action is classified into one of three approval levels based
              on its risk profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Level A */}
              <div className="rounded-2xl bg-green-500/5 border border-green-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-400">A</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-400">Level A</h3>
                    <p className="text-xs opacity-60">No approval needed</p>
                  </div>
                </div>
                <p className="text-sm opacity-70 mb-4">
                  Read-only operations and explicitly low-impact reversible
                  actions.
                </p>
                <ul className="text-xs space-y-1 opacity-50">
                  <li>
                    • <code>git status</code>
                  </li>
                  <li>• Reading files</li>
                  <li>• Listing processes</li>
                  <li>• Checking disk usage</li>
                </ul>
              </div>

              {/* Level B */}
              <div className="rounded-2xl bg-yellow-500/5 border border-yellow-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-400">
                      B
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-400">Level B</h3>
                    <p className="text-xs opacity-60">Click to approve</p>
                  </div>
                </div>
                <p className="text-sm opacity-70 mb-4">
                  Medium-risk operations with clear explanation of consequences.
                </p>
                <ul className="text-xs space-y-1 opacity-50">
                  <li>• File modifications</li>
                  <li>• Package installations</li>
                  <li>• Git commits/pushes</li>
                  <li>• Starting services</li>
                </ul>
              </div>

              {/* Level C */}
              <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-400">C</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-400">Level C</h3>
                    <p className="text-xs opacity-60">Click + PIN</p>
                  </div>
                </div>
                <p className="text-sm opacity-70 mb-4">
                  High-risk, destructive, or irreversible actions require PIN
                  verification.
                </p>
                <ul className="text-xs space-y-1 opacity-50">
                  <li>
                    • <code>rm -rf</code>
                  </li>
                  <li>• System configuration changes</li>
                  <li>• Database modifications</li>
                  <li>• Kernel module operations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Theme 3: Audit */}
        <section className="section border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                    <FileCheck size={20} />
                  </div>
                  <span className="text-sm uppercase tracking-wider opacity-50">
                    Theme 3
                  </span>
                </div>
                <h2 className="mb-6">Every Action, Accountable</h2>
                <p className="text-lg opacity-70 mb-6 leading-relaxed">
                  Every command, every approval, every outcome—logged with
                  tamper-evident integrity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Key
                      size={18}
                      className="text-[var(--color-brand-red)] mt-1"
                    />
                    <div>
                      <span className="font-medium">Non-repudiable logs</span>
                      <p className="text-sm opacity-60">
                        Prove what happened and when
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck
                      size={18}
                      className="text-[var(--color-brand-red)] mt-1"
                    />
                    <div>
                      <span className="font-medium">Action profiles</span>
                      <p className="text-sm opacity-60">
                        Structured record of every tool call
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield
                      size={18}
                      className="text-[var(--color-brand-red)] mt-1"
                    />
                    <div>
                      <span className="font-medium">Provenance tracking</span>
                      <p className="text-sm opacity-60">
                        Know the source of every request
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="code-block text-xs">
                <div className="text-gray-500 mb-2">// Audit log entry</div>
                <pre className="text-green-400">{`{
  "timestamp": "2024-12-24T02:00:00Z",
  "logId": "#9F2A",
  "action": {
    "tool": "shell",
    "command": "systemctl restart NetworkManager",
    "reviewLevel": "C",
    "pinVerified": true
  },
  "provenance": "local_user",
  "outcome": "success",
  "duration_ms": 1523
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="mb-6">Governed autonomy. That's the promise.</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/install" className="btn btn-primary">
                Install terminaI
              </a>
              <a href="/docs/safety" className="btn btn-outline">
                Read Safety Docs →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
