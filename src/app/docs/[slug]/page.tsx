
import { getAllDocs, getDocBySlug } from "@/lib/docs";
import { DocsLayout } from "@/components/DocsLayout";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { DocSection } from "@/types";

// This would typically come from a config file or be generated
const sections: DocSection[] = [
  {
    title: "Introduction",
    items: [
      { title: "Governance", slug: "governance" },
      { title: "Security Posture", slug: "security-posture" },
    ]
  },
  {
    title: "Protocols",
    items: [
      { title: "A2A Spec", slug: "a2a" },
      { title: "MCP Guide", slug: "mcp" },
    ]
  },
  {
    title: "Guides",
    items: [
      { title: "Tutorials", slug: "tutorials" },
      { title: "Troubleshooting", slug: "troubleshooting" },
      { title: "API Reference", slug: "api" },
      { title: "Themes", slug: "themes" },
    ]
  }
];

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
    <DocsLayout sections={sections} activeSlug={doc.slug}>
      <h1>{doc.title}</h1>
      <MDXRemote source={doc.content} />
    </DocsLayout>
  );
}
