import { promises as fs } from 'fs';
import path from 'path';

const INPUT_URL = 'https://ui.nuxt.com/llms-full.txt';
const OUTPUT_DIR = 'components';

// List of section names to skip (not components)
const NON_COMPONENTS = new Set([
  'Introduction',
  'Installation',
  'Migration',
  'License',
  'Theme',
  'Icons',
  'Fonts',
  'Color Mode',
  'Internationalization (i18n)',
  'Content',
  'Typography',
  'Contribution Guide',
  'Create a basic component',
  'Create a pro component',
  'Create a pro prose component',
  'Create a pro content component',
  'Generate only documentation template',
]);

async function main() {
  // Fetch the file content from the remote URL
  const res = await fetch(INPUT_URL);
  if (!res.ok) throw new Error(`Failed to fetch file: ${res.status} ${res.statusText}`);
  const raw = await res.text();
  const lines = raw.split(/\r?\n/);

  // Find all top-level headings
  const headings: { name: string; line: number }[] = [];
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^# (.+)$/);
    if (match) {
      headings.push({ name: match[1].trim(), line: i });
    }
  }

  // Find the index of the first component heading ("App")
  const firstComponentIdx = headings.findIndex(h => h.name === 'App');
  if (firstComponentIdx === -1) {
    throw new Error('Could not find the first component heading (# App)');
  }

  // For each heading after the first component, write its section to a file (unless in NON_COMPONENTS)
  for (let i = firstComponentIdx; i < headings.length; i++) {
    const { name, line } = headings[i];
    if (NON_COMPONENTS.has(name)) continue;
    const nextLine = i + 1 < headings.length ? headings[i + 1].line : lines.length;
    const section = lines.slice(line, nextLine).join('\n');
    const fileName = name.replace(/[^a-zA-Z0-9_-]/g, '') + '.md';
    const outPath = path.join(OUTPUT_DIR, fileName);
    await fs.writeFile(outPath, section, 'utf8');
    console.log(`Wrote ${outPath}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
}); 