import fs from "fs";
import path from "path";
import matter from "gray-matter";

const UPDATES_DIR = path.join(process.cwd(), "src/content/updates");
const requiredFields = ["title", "date", "summary"];

if (!fs.existsSync(UPDATES_DIR)) {
  console.error("Missing updates directory.");
  process.exit(1);
}

const files = fs
  .readdirSync(UPDATES_DIR)
  .filter((file) => (file.endsWith(".mdx") || file.endsWith(".md")) && !file.startsWith("_"));

const errors = [];

files.forEach((file) => {
  const source = fs.readFileSync(path.join(UPDATES_DIR, file), "utf8");
  const { data } = matter(source);

  requiredFields.forEach((field) => {
    if (!(field in data)) {
      errors.push(`${file} missing frontmatter: ${field}`);
    }
  });

  if (data.title && typeof data.title !== "string") {
    errors.push(`${file} title must be a string.`);
  }

  if (data.summary && typeof data.summary !== "string") {
    errors.push(`${file} summary must be a string.`);
  }

  if (data.date) {
    const dateValue = new Date(data.date);
    if (Number.isNaN(dateValue.getTime())) {
      errors.push(`${file} date must be ISO-8601 compatible.`);
    }
  }

  if (data.tags && !Array.isArray(data.tags)) {
    errors.push(`${file} tags must be an array.`);
  }
});

if (errors.length) {
  console.error("Update validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Update validation passed.");
