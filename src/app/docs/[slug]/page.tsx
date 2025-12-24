
import { getAllDocs, getDocBySlug } from "@/lib/docs";
import { DocsLayout } from "@/components/DocsLayout";
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const docs = getAllDocs(['slug']);
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug, ['title', 'date', 'slug', 'content']);

  return (
    <DocsLayout activeSlug={slug}>
      <h1>{doc.title}</h1>
      <MDXRemote source={doc.content} />
    </DocsLayout>
  );
}
