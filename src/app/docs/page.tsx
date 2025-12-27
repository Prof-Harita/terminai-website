import { DocsLayout } from "@/components/DocsLayout";
import { docsMdxComponents } from "@/components/DocsMdxComponents";
import { getDocBySlug, getDocsNav } from "@/lib/docs";
import { compileMDX } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import { DocsPager } from "@/components/DocsPager";

export const metadata: Metadata = {
  title: "Documentation | TerminaI",
  description: "Official documentation for TerminaI, the sovereign agentic shell.",
};

export default async function DocsPage() {
  const doc = getDocBySlug(['docs']);
  const nav = getDocsNav("docs");

  if (!doc) {
    return (
      <DocsLayout activeSlug="docs">
        <h1 className="text-4xl font-bold mb-2 text-white">Documentation</h1>
        <p className="text-white/70">Welcome to TerminaI documentation. Content is being migrated.</p>
        <DocsPager prev={nav?.prev} next={nav?.next} />
      </DocsLayout>
    );
  }

  const { content } = await compileMDX({
    source: doc.content,
    options: {
      parseFrontmatter: false,
    },
    components: docsMdxComponents,
  });

  const hasH1 = /^#\s+/m.test(doc.content);

  return (
    <DocsLayout activeSlug="docs">
      {!hasH1 && (
        <h1 className="text-4xl font-bold mb-2 text-white">{doc.meta.title}</h1>
      )}
      <div className="mt-8">
        {content}
      </div>
      <DocsPager prev={nav?.prev} next={nav?.next} />
    </DocsLayout>
  );
}
