// Regenerates the unit tables and the pace table in docs/CURRICULUM.md from src/content/curriculum.ts.
// Usage: node scripts/curriculum-doc.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const { curriculum } = await import(pathToFileURL(join(root, 'src/content/curriculum.ts')).href);
const docPath = join(root, 'docs/CURRICULUM.md');
let doc = readFileSync(docPath, 'utf8');

const esc = (s) => s.replace(/\|/g, '\\|');
for (const l of curriculum) {
  let n = 0;
  for (const u of l.units) {
    const rows = u.topics.map((t) => `| ${++n} | ${esc(t.title)} | ${esc(t.germanTerm)} |`).join('\n');
    const table = `| # | Topic | German term |\n|---|-------|-------------|\n${rows}`;
    const head = new RegExp(`(### Unit ${u.unit} · [^\\n]*\\n)\\| # \\| Topic \\| German term \\|\\n\\|---\\|-------\\|-------------\\|\\n(?:\\|[^\\n]*\\n)+`);
    const section = doc.indexOf(`## ${l.level} —`);
    const before = doc.slice(0, section), after = doc.slice(section);
    if (!head.test(after)) throw new Error(`no table for ${l.level} unit ${u.unit}`);
    doc = before + after.replace(head, `$1${table}\n`);
  }
}
const counts = Object.fromEntries(curriculum.map((l) => [l.level, l.units.reduce((n, u) => n + u.topics.length, 0)]));
doc = doc.replace(/\| A1 +\| \d+ +\|/, `| A1    | ${counts.A1}     |`).replace(/\| A2 +\| \d+ +\|/, `| A2    | ${counts.A2}     |`).replace(/\| B1 +\| \d+ +\|/, `| B1    | ${counts.B1}     |`);
writeFileSync(docPath, doc);
console.log('docs/CURRICULUM.md updated:', counts);
