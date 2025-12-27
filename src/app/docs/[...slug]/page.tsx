import { DocsLayout } from "@/components/DocsLayout";
import { docsMdxComponents } from "@/components/DocsMdxComponents";
import { getDocBySlug, getDocsNav } from "@/lib/docs";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { DocsPager } from "@/components/DocsPager";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Page Not Found | TerminaI Docs',
    };
  }

  return {
    title: `${doc.meta.title} | TerminaI Docs`,
    description: doc.meta.description || 'TerminaI Documentation',
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  const fullSlug = `docs/${slug.join("/")}`;
  const nav = getDocsNav(fullSlug);

  if (!doc) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: doc.content,
    options: {
      parseFrontmatter: true,
    },
    components: docsMdxComponents,
  });

  return (
    <DocsLayout activeSlug={slug.join('/')}>
      <h1 className="text-4xl font-bold mb-2 text-white">{frontmatter.title}</h1>
      <div className="mt-8">
        {content}
      </div>
      <DocsPager prev={nav?.prev} next={nav?.next} />
    </DocsLayout>
  );
}
