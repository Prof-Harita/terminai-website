import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Link from "next/link";
import { Unlock, Gift, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Always Free | terminaI",
  description:
    "Free as in freedom. Free as in beer. Open source, Gemini's generous free tier, and community-driven development.",
};

const themes = [
  {
    icon: Unlock,
    title: "Free & Open Source",
    subtitle: "Apache 2.0 Licensed",
    description:
      "Every line of code is visible, auditable, and modifiable. Fork it. Improve it. Ship it. No strings attached.",
    details: [
      "Sovereign fork of Google's Gemini CLI",
      "Full source code on GitHub",
      "Modify and redistribute freely",
      "No vendor lock-in ever",
    ],
    gradient: "from-amber-500 to-orange-500",
    link: "https://github.com/Prof-Harita/terminaI",
  },
  {
    icon: Gift,
    title: "Intelligence for All",
    subtitle: "Universal Access",
    description:
      "We believe access to intelligence is a fundamental right. TerminaI is architected to work by default with free tiers and local models. Leverage Google's generous free tier, OpenRouter's ecosystem, or your own hardware. Need more power? Plug in any paid provider instantly.",
    details: [
      "Google Gemini Free Tier (Default)",
      "OpenRouter & Community Models",
      "Local LLMs (Ollama, LM Studio)",
      "Universal OpenAI Compatibility",
      "Seamless Provider Switching",
    ],
    gradient: "from-blue-500 to-cyan-500",
    link: "https://aistudio.google.com/apikey",
  },
  {
    icon: Users,
    title: "Community-Driven",
    subtitle: "Built by the People, For the People",
    description:
      "No VCs. No corporate overlords. No hidden agendas. TerminaI is 100% community-owned and operated. We answer only to our users and contributors.",
    details: [
      "Roadmap driven by community needs",
      "Open governance process",
      "No corporate interference",
      "Purely community funded & built",
    ],
    gradient: "from-green-500 to-emerald-500",
    link: "https://github.com/Prof-Harita/terminaI/blob/main/CONTRIBUTING.md",
  },
];

export default function FreePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-0">
          <div className="container text-center">
            <h1 className="mb-0">
              Always Free.{" "}
              <span className="text-[var(--color-brand-red)]">Always Open.</span>
            </h1>
          </div>
        </section>


        {/* Three Themes */}
        <section className="section pt-0">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {themes.map((theme, index) => {
                const Icon = theme.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-3xl bg-white/[0.02] border border-white/10 p-8 hover:border-white/20 transition-all"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${theme.gradient} text-white`}
                    >
                      <Icon size={32} />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{theme.title}</h2>
                    <p className="text-sm uppercase tracking-wider text-[var(--color-brand-red)] mb-4">
                      {theme.subtitle}
                    </p>
                    <p className="opacity-70 mb-6 leading-relaxed">
                      {theme.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {theme.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm opacity-60"
                        >
                          <span className="text-[var(--color-brand-red)] mt-1">
                            ✓
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={theme.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--color-brand-red)] hover:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="mb-6">Ready to experience true freedom?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/install" className="btn btn-primary">
                Install terminaI
              </Link>
              <a
                href="https://github.com/Prof-Harita/terminaI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View Source
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
