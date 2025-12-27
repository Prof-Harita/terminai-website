import fs from "fs";
import path from "path";
import matter from "gray-matter";

const UPDATES_DIRECTORY = path.join(process.cwd(), "src/content/updates");

export interface UpdateMeta {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
}

export interface UpdatePost {
  slug: string;
  meta: UpdateMeta;
  content: string;
}

export function getAllUpdates(): UpdatePost[] {
  if (!fs.existsSync(UPDATES_DIRECTORY)) return [];

  const files = fs
    .readdirSync(UPDATES_DIRECTORY)
    .filter(
      (file) =>
        (file.endsWith(".mdx") || file.endsWith(".md")) && !file.startsWith("_")
    );

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const source = fs.readFileSync(path.join(UPDATES_DIRECTORY, file), "utf8");
    const { data, content } = matter(source);

    return {
      slug,
      meta: {
        title: data.title || slug,
        date: data.date || "",
        summary: data.summary || "",
        tags: data.tags || [],
      },
      content,
    } satisfies UpdatePost;
  });

  return posts.sort((a, b) => {
    const aDate = new Date(a.meta.date).getTime();
    const bDate = new Date(b.meta.date).getTime();
    return bDate - aDate;
  });
}

export function getUpdateBySlug(slug: string): UpdatePost | null {
  if (!fs.existsSync(UPDATES_DIRECTORY)) return null;

  const candidates = [
    path.join(UPDATES_DIRECTORY, `${slug}.mdx`),
    path.join(UPDATES_DIRECTORY, `${slug}.md`),
  ];

  const filePath = candidates.find((candidate) => fs.existsSync(candidate));
  if (!filePath) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    meta: {
      title: data.title || slug,
      date: data.date || "",
      summary: data.summary || "",
      tags: data.tags || [],
    },
    content,
  };
}
