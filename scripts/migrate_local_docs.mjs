import fs from 'fs';
import path from 'path';

const SOURCE_DIR = path.join(process.cwd(), 'docs-terminai');
const TARGET_DIR = path.join(process.cwd(), 'src/content/docs');

const MAPPING = {
  // Get Started
  'quickstart.md': 'docs/get-started/quickstart-terminai.mdx',
  'configuration.md': 'docs/get-started/configuration-reference.mdx',
  'desktop.md': 'docs/get-started/desktop-app.mdx',

  // Features
  'voice.md': 'docs/features/voice.mdx',
  'web-remote.md': 'docs/features/web-remote.mdx',
  'cloud-relay-setup.md': 'docs/features/cloud-relay.mdx',
  'multi-llm-support.md': 'docs/features/multi-llm.mdx',
  'safety.md': 'docs/features/safety-trust.mdx',

  // Architecture
  'OIarchitecture.md': 'docs/architecture/operator-interface.mdx',
  'safety-architecture.md': 'docs/architecture/safety-layer.mdx',
  'terminai_design.md': 'docs/architecture/design-philosophy.mdx',
  'a2a.md': 'docs/architecture/a2a-protocol.mdx',

  // Guides
  'recipes.md': 'docs/guides/recipes.mdx',
  'use_cases.md': 'docs/guides/use-cases.mdx',
  'case-studies.md': 'docs/guides/case-studies.mdx',

  // Reference & Meta
  'api-reference.md': 'docs/reference/developer-api.mdx',
  'governance.md': 'docs/governance.mdx',
  'why-gemini.md': 'docs/concepts/why-terminai.mdx',
  'changelog.md': 'docs/changelogs/terminai-history.mdx',
  'troubleshooting.md': 'docs/troubleshooting/terminai-specifics.mdx',
  
  // Index - special case, maybe append to existing or new overview?
  // 'index.md': 'docs/terminai-overview.mdx' 
};

function ensureDir(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDir(dirname);
  fs.mkdirSync(dirname);
}

function processFile(sourceFile, targetRelPath) {
    const sourcePath = path.join(SOURCE_DIR, sourceFile);
    if (!fs.existsSync(sourcePath)) {
        console.warn(`Source file not found: ${sourceFile}`);
        return;
    }

    let content = fs.readFileSync(sourcePath, 'utf8');
    
    // Extract title (assume first line h1)
    const lines = content.split('\n');
    let title = 'Documentation';
    if (lines[0].startsWith('# ')) {
        title = lines[0].replace(/^#\s+/, '').trim();
    }
    
    // Basic frontmatter
    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "TerminaI documentation for ${title.replace(/"/g, '\\"')}"
---

`;
    
    // Write to target
    const targetPath = path.join(TARGET_DIR, targetRelPath);
    ensureDir(targetPath);
    fs.writeFileSync(targetPath, frontmatter + content);
    console.log(`Migrated ${sourceFile} -> ${targetRelPath}`);
}

// Execute mapping
Object.entries(MAPPING).forEach(([source, target]) => {
    processFile(source, target);
});
