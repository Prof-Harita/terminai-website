import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.join(process.cwd(), 'src/content/docs');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      if (file.endsWith('.mdx')) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(DOCS_DIR);
let cleanCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Remove the specific pollution line
  // It starts with "Copy as Markdown Copied!" and contains "class i{"
  const lines = content.split('\n');
  const cleanLines = lines.filter(line => !line.includes('Copy as Markdown Copied! class i{'));
  
  if (lines.length !== cleanLines.length) {
    fs.writeFileSync(file, cleanLines.join('\n'));
    console.log(`Cleaned ${file}`);
    cleanCount++;
  }
});

console.log(`Cleanup complete. Modified ${cleanCount} files.`);
