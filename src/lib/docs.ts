import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const DOCS_DIRECTORY = path.join(process.cwd(), 'src/content/docs');

export interface Doc {
  slug: string;
  meta: {
    title: string;
    description?: string;
    [key: string]: unknown;
  };
  content: string;
}

export interface DocsSidebarSection {
  label: string;
  items: Array<{
    label: string;
    slug: string;
  }>;
}

export function getAllDocs(): Doc[] {
  const filePaths = getAllFilePaths(DOCS_DIRECTORY);
  
  return filePaths.map((filePath) => {
    const relativePath = path.relative(DOCS_DIRECTORY, filePath);
    const slug = relativePath.replace(/\.mdx?$/, '');
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);

    return {
      slug,
      meta: {
        title: data.title || slug,
        ...data,
      },
      content,
    };
  });
}

export function getDocBySlug(slugPath: string[]): Doc | null {
  // Try .mdx then .md
  const slugJoined = slugPath.join('/');
  
  // Potential file paths
  const extensions = ['.mdx', '.md'];
  
  // Try direct path first, then nested under docs/ subdirectory
  const pathsToTry = [
    slugJoined,
    `docs/${slugJoined}`, // Files are nested under docs/ subdirectory
  ];
  
  for (const basePath of pathsToTry) {
    for (const ext of extensions) {
      const fullPath = path.join(DOCS_DIRECTORY, `${basePath}${ext}`);
      if (fs.existsSync(fullPath)) {
          const source = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(source);
          return {
              slug: slugJoined,
              meta: {
                  title: data.title || slugJoined,
                  ...data
              },
              content
          };
      }
      
      // Check if it's a directory with index
      const indexPath = path.join(DOCS_DIRECTORY, basePath, `index${ext}`);
      if (fs.existsSync(indexPath)) {
          const source = fs.readFileSync(indexPath, 'utf8');
          const { data, content } = matter(source);
          return {
              slug: slugJoined,
              meta: {
                  title: data.title || slugJoined,
                  ...data
              },
              content
          };
      }
    }
  }

  return null;
}

export function getDocsSidebar(): DocsSidebarSection[] {
  const sidebarPath = path.join(process.cwd(), "public/docs/sidebar.json");
  if (!fs.existsSync(sidebarPath)) return [];
  return JSON.parse(fs.readFileSync(sidebarPath, "utf8")) as DocsSidebarSection[];
}

export function getDocsNav(slug: string) {
  const sidebar = getDocsSidebar();
  const flatItems = sidebar.flatMap((section) =>
    section.items.map((item) => ({ ...item, section: section.label }))
  );
  const currentIndex = flatItems.findIndex((item) => item.slug === slug);
  if (currentIndex === -1) return null;
  return {
    prev: flatItems[currentIndex - 1] ?? null,
    next: flatItems[currentIndex + 1] ?? null,
  };
}

function getAllFilePaths(dirPath: string, arrayOfFiles: string[] = []) {
  if (!fs.existsSync(dirPath)) return [];
  
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFilePaths(path.join(dirPath, file), arrayOfFiles);
    } else {
      if (file.endsWith('.mdx') || file.endsWith('.md')) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });

  return arrayOfFiles;
}
