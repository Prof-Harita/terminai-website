import Link from "next/link";
import { ArrowRight, Code2, Home, Server } from "lucide-react";

const personas = [
  {
    title: "Everyday Users",
    description: "Fix slow laptops, clean storage, and set up tools without learning shell commands.",
    bullets: ["Clean up disk space", "Repair Wi-Fi and Bluetooth", "Install apps and updates"],
    href: "/for/everyday",
    icon: Home,
  },
  {
    title: "Operators & Sysadmins",
    description: "Run maintenance, triage incidents, and ship safe automation with approvals baked in.",
    bullets: ["Rotate logs and patch hosts", "Triage incidents faster", "Standardize runbooks"],
    href: "/for/operators",
    icon: Server,
  },
  {
    title: "Developers",
    description: "Delegate terminal workflows, debug faster, and keep builds moving without context loss.",
    bullets: ["Review PRs and logs", "Automate local setup", "Run tests and deploys"],
    href: "/for/developers",
    icon: Code2,
  },
];

export function PersonaPathways() {
  return (
    <section id="personas" className="section border-t border-white/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Choose Your Path</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Start with a focused guide for your role. Each path ends with a first success in 10 minutes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <div key={persona.title} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-[var(--color-brand-red)]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold">{persona.title}</h3>
                </div>
                <p className="opacity-70 mb-4 text-sm">{persona.description}</p>
                <ul className="text-sm opacity-70 space-y-2 mb-6">
                  {persona.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="text-[var(--color-brand-red)]">-</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={persona.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-red)] hover:underline"
                >
                  Start this path
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
