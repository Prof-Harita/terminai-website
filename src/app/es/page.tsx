import { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getLocaleCopy } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const copy = getLocaleCopy("es");
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: "https://terminai.org/es",
      siteName: "terminaI",
    },
  };
}

export default function EspanolPage() {
  const copy = getLocaleCopy("es");

  return (
    <>
      <SiteHeader />
      <main className="pt-24" lang="es">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">{copy.hero.eyebrow}</p>
              <h1 className="mb-4">{copy.hero.title}</h1>
              <p className="text-lg opacity-70 mb-8">{copy.hero.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/install" className="btn btn-primary text-sm px-6 py-3">
                  {copy.hero.primaryCta}
                </Link>
                <Link href="/docs" className="btn btn-outline text-sm px-6 py-3">
                  {copy.hero.secondaryCta}
                </Link>
              </div>
              <div className="mt-4 text-sm opacity-60">
                <Link href={copy.hero.languageToggleHref} className="underline">
                  {copy.hero.languageToggleLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <h2 className="mb-6">{copy.highlights.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {copy.highlights.items.map((item) => (
                <div key={item.title} className="card">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <h2 className="mb-6">{copy.pillars.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {copy.pillars.items.map((item) => (
                <div key={item.title} className="card">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <div className="card">
              <h2 className="text-xl font-bold mb-3">{copy.notice.title}</h2>
              <p className="text-sm opacity-70 mb-4">{copy.notice.body}</p>
              <Link href={copy.notice.linkHref} className="text-sm text-[var(--color-brand-red)]">
                {copy.notice.linkLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
