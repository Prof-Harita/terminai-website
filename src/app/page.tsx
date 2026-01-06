import { Hero } from "@/components/Hero";
import { BentoFeatures } from "@/components/BentoFeatures";
import { HowItWorks } from "@/components/HowItWorks";
import { ManifestoHome } from "@/components/ManifestoHome";
import { FinalCTA } from "@/components/FinalCTA";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DemoShowcase } from "@/components/DemoShowcase";
import { PersonaPathways } from "@/components/PersonaPathways";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="w-full bg-black/50 border-b border-white/5 py-2 text-center text-xs uppercase tracking-widest text-white/40">
           TerminaI = governed system operator (terminal + desktop automation) — open-source fork of Gemini CLI
        </div>
        <Hero />
        <DemoShowcase />
        <BentoFeatures />
        <HowItWorks />
        <PersonaPathways />
        <ManifestoHome />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
