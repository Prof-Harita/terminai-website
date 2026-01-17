#!/usr/bin/env node
/**
 * Transform extensions_raw.json to extensions.json with:
 * - Replace "gemini" with "TerminaI" in descriptions
 * - Add spotlight flags
 * - Map to simplified structure
 */

import { readFileSync, writeFileSync } from 'fs';

const rawData = JSON.parse(readFileSync('./src/content/extensions_raw.json', 'utf-8'));

const spotlightNames = ['skillz', 'firebase-rules', 'code-review'];

const extensions = rawData.map(item => {
  // Get description, prefer extensionDescription, fallback to repoDescription
  let description = item.extensionDescription || item.repoDescription || '';
  
  // Replace Gemini CLI / Gemini references with TerminaI
  description = description.replace(/Gemini CLI/gi, 'TerminaI');
  description = description.replace(/Gemini/gi, 'TerminaI');
  
  // Build tags array
  const tags = [];
  if (item.hasMCP) tags.push('MCP');
  if (item.hasContext) tags.push('Context');
  
  return {
    name: item.extensionName || item.id,
    packageName: `@${item.fullName}`,
    description,
    tags,
    githubUrl: item.url,
    stars: item.stars,
    avatarUrl: item.avatarUrl,
    isSpotlight: spotlightNames.includes(item.extensionName)
  };
});

writeFileSync('./src/content/extensions.json', JSON.stringify(extensions, null, 2));
console.log(`Transformed ${extensions.length} extensions`);
