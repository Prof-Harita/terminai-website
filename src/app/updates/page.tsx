import { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllUpdates } from "@/lib/updates";

export const metadata: Metadata = {
  title: "Updates | TerminaI",
  description: "Product updates, release notes, and roadmap highlights from the TerminaI team.",
};

function formatDate(value: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

export default function UpdatesPage() {
  const updates = getAllUpdates();

  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Updates</p>
              <h1 className="mb-4">Product updates and release notes.</h1>
              <p className="text-lg opacity-70 mb-8">
                Follow the evolution of TerminaI with monthly summaries, release highlights, and roadmap context.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/install" className="btn btn-primary text-sm px-6 py-3">
                  Install TerminaI
                </Link>
                <Link href="/updates/contribute" className="btn btn-outline text-sm px-6 py-3">
                  Contribute an Update
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {updates.map((update) => (
                <article key={update.slug} className="card">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                    {formatDate(update.meta.date)}
                  </p>
                  <h2 className="text-xl font-bold mb-2">{update.meta.title}</h2>
                  <p className="text-sm opacity-70 mb-4">{update.meta.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {update.meta.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest px-2 py-1 border border-white/10 rounded-full text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/updates/${update.slug}`}
                    className="text-sm text-[var(--color-brand-red)]"
                  >
                    Read the update
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
