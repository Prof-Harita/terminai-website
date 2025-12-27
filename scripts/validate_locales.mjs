import fs from "fs";
import path from "path";

const LOCALES_DIR = path.join(process.cwd(), "src/content/i18n");
const baseLocale = "en";

function flattenKeys(value, prefix = "") {
  const keys = new Set();

  if (Array.isArray(value)) {
    if (value.length === 0) {
      keys.add(`${prefix}[]`);
      return keys;
    }
    value.forEach((item) => {
      flattenKeys(item, `${prefix}[]`).forEach((key) => keys.add(key));
    });
    return keys;
  }

  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, nested]) => {
      const nextPrefix = prefix ? `${prefix}.${key}` : key;
      if (nested && typeof nested === "object") {
        flattenKeys(nested, nextPrefix).forEach((nestedKey) => keys.add(nestedKey));
      } else {
        keys.add(nextPrefix);
      }
    });
    return keys;
  }

  if (prefix) {
    keys.add(prefix);
  }

  return keys;
}

if (!fs.existsSync(LOCALES_DIR)) {
  console.error("Missing locales directory.");
  process.exit(1);
}

const files = fs
  .readdirSync(LOCALES_DIR)
  .filter((file) => file.endsWith(".json"));

const basePath = path.join(LOCALES_DIR, `${baseLocale}.json`);
if (!fs.existsSync(basePath)) {
  console.error(`Missing base locale: ${baseLocale}.json`);
  process.exit(1);
}

const baseRaw = fs.readFileSync(basePath, "utf8");
const baseData = JSON.parse(baseRaw);
const baseKeys = flattenKeys(baseData);

const errors = [];

files.forEach((file) => {
  const locale = path.basename(file, ".json");
  const raw = fs.readFileSync(path.join(LOCALES_DIR, file), "utf8");
  const data = JSON.parse(raw);
  const keys = flattenKeys(data);

  baseKeys.forEach((key) => {
    if (!keys.has(key)) {
      errors.push(`${locale} missing key: ${key}`);
    }
  });

  keys.forEach((key) => {
    if (!baseKeys.has(key)) {
      errors.push(`${locale} has extra key: ${key}`);
    }
  });
});

if (errors.length) {
  console.error("Locale validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Locale validation passed.");
