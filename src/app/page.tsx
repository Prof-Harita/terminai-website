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
