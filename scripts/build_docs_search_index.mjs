import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DOCS_DIR = path.join(process.cwd(), "src/content/docs");
const OUTPUT_PATH = path.join(process.cwd(), "public/docs/search-index.json");
const SIDEBAR_PATH = path.join(process.cwd(), "public/docs/sidebar.json");

const readSidebar = () => {
  if (!fs.existsSync(SIDEBAR_PATH)) return [];
  return JSON.parse(fs.readFileSync(SIDEBAR_PATH, "utf8"));
};

const stripMarkdown = (content) => {
  return content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/#+\s+/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[*_>~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const getAllDocFiles = (dirPath, files = []) => {
  if (!fs.existsSync(dirPath)) return files;
  const entries = fs.readdirSync(dirPath);
  entries.forEach((entry) => {
    const fullPath = path.join(dirPath, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllDocFiles(fullPath, files);
    } else if (entry.endsWith(".md") || entry.endsWith(".mdx")) {
      files.push(fullPath);
    }
  });
  return files;
};

const getExcerpt = (text, maxLength = 200) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
};

const sidebar = readSidebar();
const sidebarLookup = new Map();
const sidebarOrder = [];

sidebar.forEach((section) => {
  section.items.forEach((item) => {
    sidebarLookup.set(item.slug, { label: item.label, section: section.label });
    sidebarOrder.push(item.slug);
  });
});

const files = getAllDocFiles(DOCS_DIR);
const entries = files.map((filePath) => {
  const relativePath = path.relative(DOCS_DIR, filePath).replace(/\\/g, "/");
  const slug = relativePath.replace(/\.mdx?$/, "");
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const text = stripMarkdown(content);
  const sidebarMeta = sidebarLookup.get(slug);

  return {
    slug,
    title: data.title || sidebarMeta?.label || slug.split("/").pop() || slug,
    section: sidebarMeta?.section || "Docs",
    description: data.description || data.summary || getExcerpt(text, 180),
    content: getExcerpt(text, 1000),
  };
});

const entryMap = new Map(entries.map((entry) => [entry.slug, entry]));
const orderedEntries = [];
const included = new Set();

sidebarOrder.forEach((slug) => {
  const entry = entryMap.get(slug);
  if (entry) {
    orderedEntries.push(entry);
    included.add(slug);
  }
});

entries
  .filter((entry) => !included.has(entry.slug))
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .forEach((entry) => orderedEntries.push(entry));

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(orderedEntries, null, 2));
console.log(`Docs search index written to ${OUTPUT_PATH}`);
