import { DocsLayout } from "@/components/DocsLayout";
import { getDocBySlug } from "@/lib/docs";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Shared MDX components for light-mode docs pages
// Font sizes: body=18px, h4=18px, h3=18px, h2=20px, h1=22px, code=18px
const components = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1 {...props} className="text-[22px] font-bold mb-6 text-neutral-900" />
  ),
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 {...props} className="text-[20px] font-bold mt-10 mb-4 text-neutral-900 border-b border-neutral-200 pb-2" />
  ),
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3 {...props} className="text-[18px] font-medium mt-8 mb-3 text-neutral-800" />
  ),
  h4: (props: React.ComponentPropsWithoutRef<'h4'>) => (
    <h4 {...props} className="text-[18px] font-medium mt-6 mb-2 text-neutral-800" />
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => {
    // Filter out "Section titled" anchor paragraphs
    const children = props.children;
    if (typeof children === 'object' && children !== null && 'props' in children) {
      const linkProps = children.props as { children?: string };
      if (typeof linkProps.children === 'string' && linkProps.children.startsWith('Section titled')) {
        return null;
      }
    }
    return <p {...props} className="mb-4 leading-8 text-[18px] text-neutral-700" />;
  },
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul {...props} className="list-disc list-outside ml-6 mb-4 space-y-2 text-[18px] text-neutral-700" />
  ),
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => (
    <ol {...props} className="list-decimal list-outside ml-6 mb-4 space-y-2 text-[18px] text-neutral-700" />
  ),
  li: (props: React.ComponentPropsWithoutRef<'li'>) => (
    <li {...props} className="text-[18px] text-neutral-700 leading-8" />
  ),
  a: (props: React.ComponentPropsWithoutRef<'a'>) => {
    // Hide "Section titled" links
    const children = props.children;
    if (typeof children === 'string' && children.startsWith('Section titled')) {
      return null;
    }
    return <a {...props} className="text-red-600 hover:text-red-700 hover:underline font-medium" />;
  },
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote {...props} className="border-l-4 border-red-500 pl-4 py-2 my-4 bg-neutral-50 text-neutral-700 italic" />
  ),
  code: (props: React.ComponentPropsWithoutRef<'code'>) => (
    <code {...props} className="bg-neutral-100 text-red-600 rounded px-1.5 py-0.5 text-[18px] font-mono" />
  ),
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => (
    <pre {...props} className="bg-neutral-100 text-neutral-800 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6 text-[18px] font-mono">
      {props.children}
    </pre>
  ),
  img: (props: React.ComponentPropsWithoutRef<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} className="rounded-lg border border-neutral-200 my-6 max-w-full" alt={props.alt || ''} />
  ),
  table: (props: React.ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto mb-6">
      <table {...props} className="w-full text-left border-collapse border border-neutral-200" />
    </div>
  ),
  th: (props: React.ComponentPropsWithoutRef<'th'>) => (
    <th {...props} className="border-b border-neutral-200 p-3 bg-neutral-50 font-semibold text-neutral-800" />
  ),
  td: (props: React.ComponentPropsWithoutRef<'td'>) => (
    <td {...props} className="border-b border-neutral-200 p-3 text-neutral-700" />
  ),
  hr: () => <hr className="my-8 border-neutral-200" />,
  strong: (props: React.ComponentPropsWithoutRef<'strong'>) => (
    <strong {...props} className="font-semibold text-neutral-900" />
  ),
};

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

  if (!doc) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: doc.content,
    options: {
      parseFrontmatter: true,
    },
    components: components,
  });

  return (
    <DocsLayout activeSlug={slug.join('/')}>
      <h1 className="text-4xl font-bold mb-2 text-neutral-900">{frontmatter.title}</h1>
      <div className="mt-8">
        {content}
      </div>
    </DocsLayout>
  );
}
