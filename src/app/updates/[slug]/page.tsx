import { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { docsMdxComponents } from "@/components/DocsMdxComponents";
import { getAllUpdates, getUpdateBySlug } from "@/lib/updates";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllUpdates().map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    return {
      title: "Update Not Found | TerminaI",
    };
  }

  return {
    title: `${update.meta.title} | TerminaI Updates`,
    description: update.meta.summary,
  };
}

function formatDate(value: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

export default async function UpdatePage({ params }: PageProps) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    notFound();
  }

  const { content } = await compileMDX({
    source: update.content,
    options: { parseFrontmatter: false },
    components: docsMdxComponents,
  });

  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Updates</p>
            <h1 className="mb-3">{update.meta.title}</h1>
            <p className="text-sm uppercase tracking-widest text-white/40 mb-6">
              {formatDate(update.meta.date)}
            </p>
            <div className="mt-8">{content}</div>
            <div className="mt-12 border-t border-white/10 pt-6">
              <Link href="/updates" className="text-sm text-[var(--color-brand-red)]">
                Back to updates
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
