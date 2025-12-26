import { Hero } from "@/components/Hero";
import { BentoFeatures } from "@/components/BentoFeatures";
import { HowItWorks } from "@/components/HowItWorks";
import { ManifestoHome } from "@/components/ManifestoHome";
import { FinalCTA } from "@/components/FinalCTA";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <BentoFeatures />
        <HowItWorks />
        <ManifestoHome />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
