# Localization workflow

TerminaI website localization is route-based with shared JSON copy files. The English
version remains canonical. New locales start with a dedicated landing page and
incrementally expand to other routes as needed.

## How to add a locale
1. Copy `src/content/i18n/en.json` to `src/content/i18n/<locale>.json` and translate strings.
2. Create a localized route (for example `src/app/es/page.tsx`) and load the copy with
   `getLocaleCopy("<locale>")`.
3. Add the locale to `SUPPORTED_LOCALES` in `src/lib/i18n.ts`.
4. Run `npm run i18n:validate` before committing.

## Guidelines
- Keep copy concise and product focused.
- Use ASCII when possible to keep tooling predictable.
- Link back to English documentation until full translations exist.
