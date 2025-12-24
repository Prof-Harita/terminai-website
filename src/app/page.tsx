import { Hero } from "@/components/Hero";
import { IceCreamBar } from "@/components/IceCreamBar";
import { AudienceCards } from "@/components/AudienceCards";
import { Primitives } from "@/components/Primitives";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ContributeCTA } from "@/components/ContributeCTA";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <IceCreamBar />
        <AudienceCards />
        <Primitives />
        <ComparisonTable />
        <ContributeCTA />
      </main>
      <SiteFooter />
    </>
  );
}
