
import fs from 'fs';
import path from 'path';

const extensionsPath = path.join(process.cwd(), 'src/content/extensions.json');
const extensions = JSON.parse(fs.readFileSync(extensionsPath, 'utf8'));

const spotlightPackages = [
    '@gemini-cli-extensions/nanobanana',
    '@exa-labs/exa-mcp-server',
    '@browserbase/mcp-server-browserbase',
    '@elevenlabs/elevenlabs-mcp',
    '@stripe/ai',
    '@gemini-cli-extensions/workspace'
];

const updatedExtensions = extensions.map(ext => ({
    ...ext,
    isSpotlight: spotlightPackages.includes(ext.packageName)
}));

fs.writeFileSync(extensionsPath, JSON.stringify(updatedExtensions, null, 2));

console.log('Updated spotlight extensions:');
updatedExtensions.filter(e => e.isSpotlight).forEach(e => {
    console.log(`- ${e.name} (${e.stars} stars)`);
});
