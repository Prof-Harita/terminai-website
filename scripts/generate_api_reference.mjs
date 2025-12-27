import fs from "fs";
import path from "path";
import ts from "typescript";

const TYPES_DIR = path.join(process.cwd(), "src/types");
const OUTPUT_PATH = path.join(
  process.cwd(),
  "src/content/docs/docs/reference/website-api.mdx"
);

const findTypeFiles = (dirPath, files = []) => {
  if (!fs.existsSync(dirPath)) return files;
  const entries = fs.readdirSync(dirPath);
  entries.forEach((entry) => {
    const fullPath = path.join(dirPath, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      findTypeFiles(fullPath, files);
    } else if (entry.endsWith(".ts")) {
      files.push(fullPath);
    }
  });
  return files;
};

const typeFiles = findTypeFiles(TYPES_DIR);
const program = ts.createProgram(typeFiles, {
  allowJs: false,
  strict: true,
  target: ts.ScriptTarget.ES2020,
  module: ts.ModuleKind.ESNext,
});
const checker = program.getTypeChecker();

const isExported = (node) =>
  (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0;

const getDocComment = (node) => {
  const tags = ts.getJSDocTags(node);
  if (!tags.length) return "";
  return tags
    .map((tag) => `${tag.tagName.getText()}${tag.comment ? `: ${tag.comment}` : ""}`)
    .join("\n");
};

const sections = [];

for (const sourceFile of program.getSourceFiles()) {
  if (sourceFile.isDeclarationFile) continue;
  if (!sourceFile.fileName.startsWith(TYPES_DIR)) continue;

  sourceFile.forEachChild((node) => {
    if (!isExported(node)) return;

    if (ts.isInterfaceDeclaration(node)) {
      const name = node.name.text;
      const props = node.members
        .filter(ts.isPropertySignature)
        .map((prop) => {
          const propName = prop.name.getText();
          const propType = checker.typeToString(checker.getTypeAtLocation(prop));
          const optional = prop.questionToken ? "?" : "";
          return `- ${propName}${optional}: ${propType}`;
        });
      sections.push({
        name,
        kind: "Interface",
        doc: getDocComment(node),
        lines: props,
      });
    } else if (ts.isTypeAliasDeclaration(node)) {
      const name = node.name.text;
      const typeText = checker.typeToString(checker.getTypeAtLocation(node));
      sections.push({
        name,
        kind: "Type Alias",
        doc: getDocComment(node),
        lines: [`- ${typeText}`],
      });
    }
  });
}

const header = [
  "---",
  'title: "Website Type Reference"',
  'description: "Auto-generated reference from src/types."',
  "---",
  "",
  "# Website Type Reference",
  "",
  "This page is auto-generated from `src/types` to document the website data contracts.",
  "",
].join("\n");

const body = sections
  .map((section) => {
    const docBlock = section.doc ? `\n${section.doc}\n` : "";
    return [
      `## ${section.name}`,
      "",
      `**Kind:** ${section.kind}`,
      docBlock,
      ...section.lines,
      "",
    ].join("\n");
  })
  .join("\n");

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(`${OUTPUT_PATH}`, `${header}\n${body}`);
console.log(`Generated API reference at ${OUTPUT_PATH}`);
