import fs from 'fs';
import path from 'path';
// import fetch from 'node-fetch'; // Using native fetch in Node 20+
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

// Configuration
const BASE_URL = 'https://geminicli.com';
const SIDEBAR_PATH = path.join(process.cwd(), 'public/docs/sidebar.json');
const OUTPUT_DIR = path.join(process.cwd(), 'src/content/docs');

// Initialize Turndown
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

// Helper to create directory if not exists
function ensureDir(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDir(dirname);
  fs.mkdirSync(dirname);
}

// Function to replace content
function applyReplacements(text) {
  return text
    // Specific brand replacements
    .replace(/Gemini CLI/g, 'TerminaI')
    .replace(/gemini-cli/g, 'terminai')
    .replace(/google-gemini\/gemini-cli/g, 'Prof-Harita/terminaI')
    .replace(/geminicli\.com/g, 'terminai.org')
    
    // Context aware replacements (Use caution)
    // "Gemini 1.5 Pro" -> Keep "Gemini" (It's the model name)
    // "Gemini API" -> Keep "Gemini"
    // "Google Gemini" -> Keep "Google Gemini"
    
     // We replace "Gemini" only when it refers to the tool, which is tricky.
     // The sidebar links and titles often just say "Gemini" to refer to the CLI in context of "Gemini vs X".
     // For now, sticking to "Gemini CLI" -> "TerminaI" is the safest huge win.
     
    // Fix URLs in links
    .replace(/https:\/\/geminicli\.com\/docs\//g, '/docs/')
    .replace(/\/docs\/get-started\//g, '/docs/get-started/') // relative links adjustment if needed
    ;
}

async function scrapePage(urlPath) {
  const url = `${BASE_URL}/${urlPath.replace(/^\//, '')}`;
  console.log(`Fetching ${url}...`);
  
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    const html = await res.text();
    
    const $ = cheerio.load(html);
    
    // Select main content - Starlight usually uses 'main' or '.content-panel'
    // Looking at the source in browser (from previous turns), it's standard semantic HTML usually.
    // Let's try 'main' first, or fallback to 'article'.
    let contentEl = $('main');
    if (contentEl.length === 0) contentEl = $('article');
    if (contentEl.length === 0) contentEl = $('body'); // Fallback (messy)
    
    // Remove Sidebar, Header, Footer if they are inside main (unlikely but safe to check)
    contentEl.find('nav, footer, header, .sidebar, .right-sidebar').remove();
    
    // Extract Title
    let title = $('h1').first().text().trim();
    if (!title) title = $('title').text().split('|')[0].trim();
    
    // Extract Description
    const description = $('meta[name="description"]').attr('content') || '';
    
    // Remove the h1 from content because we add it via frontmatter/layout usually, 
    // BUT the MDX renderer might expect it. Let's keep it in MDX content if we want "verbatim".
    // Actually, usually frontmatter title is used for metadata/sidebar, and h1 is part of content.
    // Let's KEEP h1 in the content for "verbatim" feel, but maybe ensure it's there.
    // Turndown will convert h1 to # Title.
    
    let markdown = turndownService.turndown(contentEl.html());
    
    // Post-process Markdown
    markdown = applyReplacements(markdown);
    title = applyReplacements(title);
    const descriptionReplaced = applyReplacements(description);
    
    // Frontmatter
    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${descriptionReplaced.replace(/"/g, '\\"')}"
---

`;
    
    return frontmatter + markdown;
    
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return null;
  }
}

async function main() {
  const sidebarData = JSON.parse(fs.readFileSync(SIDEBAR_PATH, 'utf8'));
  
  // Flatten items
  const items = [];
  for (const section of sidebarData) {
    if (section.items) {
      items.push(...section.items);
    }
  }
  
  console.log(`Found ${items.length} pages to migrate.`);
  
  for (const item of items) {
    const slug = item.slug; // e.g., "docs/get-started"
    // The source URL for "docs/get-started" is "https://geminicli.com/docs/get-started/"
    // Note: sidebar slugs in my updated json didn't have leading slash, but we should handle it.
    
    // Handle the root "docs" case
    let urlPath = slug;
    if (slug === 'docs') urlPath = 'docs/';
    else urlPath = slug + '/';
    
    const content = await scrapePage(urlPath);
    
    if (content) {
      const outputPath = path.join(OUTPUT_DIR, `${slug}.mdx`);
      ensureDir(outputPath);
      fs.writeFileSync(outputPath, content);
      console.log(`Saved ${outputPath}`);
    }
    
    // Be nice to the server
    await new Promise(r => setTimeout(r, 200));
  }
}

main().catch(console.error);
