import fs from "fs";
import path from "path";

export const SUPPORTED_LOCALES = ["en", "es"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export interface LocaleCopy {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    languageToggleLabel: string;
    languageToggleHref: string;
  };
  highlights: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  pillars: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  notice: {
    title: string;
    body: string;
    linkLabel: string;
    linkHref: string;
  };
}

const I18N_DIR = path.join(process.cwd(), "src/content/i18n");

export function getLocaleCopy(locale: Locale): LocaleCopy {
  const filePath = path.join(I18N_DIR, `${locale}.json`);
  const fallbackPath = path.join(I18N_DIR, "en.json");
  const resolvedPath = fs.existsSync(filePath) ? filePath : fallbackPath;

  const raw = fs.readFileSync(resolvedPath, "utf8");
  return JSON.parse(raw) as LocaleCopy;
}
