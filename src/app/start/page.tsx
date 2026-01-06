import Link from "next/link";
import { CheckCircle, TerminalSquare } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const quickstarts = [
  {
    id: "everyday",
    title: "Everyday Users",
    description: "Solve daily tech issues with voice-first guidance.",
    tasks: [
      "Ask for a disk cleanup plan and approve it.",
      "Fix a Wi-Fi issue with a guided checklist.",
      "Save the workflow as a reusable recipe.",
    ],
    links: [
      { label: "Everyday guide", href: "/for/everyday" },
      { label: "Safety ladder", href: "/safety" },
      { label: "Use cases", href: "/use-cases" },
    ],
  },
  {
    id: "operators",
    title: "Operators & Sysadmins",
    description: "Run safe automation with policy-backed approvals.",
    tasks: [
      "Connect to a staging host and run a health check.",
      "Approve a log rotation or cleanup command.",
      "Capture the runbook for reuse by the team.",
    ],
    links: [
      { label: "Operator guide", href: "/for/operators" },
      { label: "Docs home", href: "/docs" },
    ],
  },
  {
    id: "developers",
    title: "Developers",
    description: "Delegate terminal workflows without losing control.",
    tasks: [
      "Ask for a summary of a PR or diff.",
      "Generate a repeatable test command.",
      "Automate local setup for a repo.",
    ],
    links: [
      { label: "Developer guide", href: "/for/developers" },
      { label: "Prompt recipes", href: "/recipes" },
      { label: "Extensibility", href: "/extensibility" },
    ],
  },
];

export default function StartPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Start Here</p>
              <h1 className="mb-4">Your first success in 10 minutes.</h1>
              <p className="text-lg opacity-70 mb-8">
                Pick a path, run a safe command, and prove the system operator model for your work.
              </p>
              <div className="rounded-2xl border border-white/10 bg-black/80 p-6 mb-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-2">
                  <TerminalSquare size={14} />
                  Install
                </div>
                <div className="code-block text-sm">
                  <div className="text-gray-500 mb-1"># Build from source</div>
                  $ git clone https://github.com/Prof-Harita/terminaI.git
                </div>
                <p className="text-xs text-white/50 mt-3">
                  Independent open-source fork; not affiliated with Google.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/install" className="btn btn-primary text-sm px-6 py-3">
                  Installation Guide
                </Link>
                <Link href="/docs" className="btn btn-outline text-sm px-6 py-3">
                  Docs Hub
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {quickstarts.map((quickstart) => (
                <div key={quickstart.id} id={quickstart.id} className="card">
                  <h2 className="text-2xl font-bold mb-2">{quickstart.title}</h2>
                  <p className="text-sm opacity-70 mb-6">{quickstart.description}</p>
                  <div className="space-y-3 mb-6">
                    {quickstart.tasks.map((task) => (
                      <div key={task} className="flex items-start gap-3 text-sm text-white/70">
                        <CheckCircle size={18} className="text-emerald-400 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {quickstart.links.map((link) => (
                      <Link key={link.href} href={link.href} className="text-[var(--color-brand-red)] hover:underline">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="mb-4">Stay in the loop</h2>
              <p className="text-sm opacity-70 mb-6">
                No trackers. No third-party analytics. If you want updates, follow the open-source releases
                or reach out directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Prof-Harita/terminaI/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-sm px-6 py-3"
                >
                  Watch GitHub Releases
                </a>
                <a
                  href="mailto:contact@terminai.org"
                  className="btn btn-outline text-sm px-6 py-3"
                >
                  Contact the Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
