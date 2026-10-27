// Validates content files against the schema rules in docs/CONTENT-GUIDE.md.
// Usage: node scripts/validate-content.mjs [path-or-dir ...]   (default: all content)
import { readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const { curriculum } = await import(pathToFileURL(join(root, 'src/content/curriculum.ts')).href);
const byId = new Map();
for (const l of curriculum) for (const u of l.units) for (const t of u.topics) byId.set(t.id, { ...t, level: l.level, unit: u.unit });
const allIds = new Set(byId.keys());
let order = 0, lastLevel = '';
for (const l of curriculum) for (const u of l.units) for (const t of u.topics) { if (l.level !== lastLevel) { order = 0; lastLevel = l.level; } byId.get(t.id).order = ++order; }

const walk = (p) => statSync(p).isDirectory() ? readdirSync(p).flatMap((f) => walk(join(p, f))) : p.endsWith('.ts') ? [p] : [];
const args = process.argv.slice(2);
const files = (args.length ? args : [join(root, 'src/content/grammar'), join(root, 'src/content/vocab')]).flatMap((p) => walk(resolve(p)));

const errors = [];
const err = (f, m) => errors.push(`${f.replace(root + '/', '')}: ${m}`);
const seenExIds = new Set();
const seenWordIds = new Set();
let topics = 0, words = 0;

for (const f of files) {
  let mod;
  try { mod = await import(pathToFileURL(f).href); } catch (e) { err(f, `cannot import: ${e.message.split('\n')[0]}`); continue; }
  const d = mod.default;
  if (!d) { err(f, 'no default export'); continue; }
  if (Array.isArray(d.exercises)) {
    topics++;
    const c = byId.get(d.id);
    if (!c) { err(f, `unknown topic id ${d.id}`); continue; }
    if (!f.endsWith(`/${d.id}.ts`)) err(f, `file name should be ${d.id}.ts`);
    if (d.level !== c.level) err(f, `level ${d.level} should be ${c.level}`);
    if (d.unit !== c.unit) err(f, `unit ${d.unit} should be ${c.unit}`);
    if (d.order !== c.order) err(f, `order ${d.order} should be ${c.order}`);
    if (!d.summary || !d.germanTerm || !d.title) err(f, 'missing summary/germanTerm/title');
    const wc = (d.explanation || '').split(/\s+/).length;
    if (wc < 200) err(f, `explanation too short (${wc} words)`);
    if (/`|\$\{/.test(d.explanation || '')) err(f, 'explanation contains backtick or ${');
    if (!Array.isArray(d.examples) || d.examples.length < 4) err(f, 'need at least 4 examples');
    if (!Array.isArray(d.edgeCases) || d.edgeCases.length < 2) err(f, 'need at least 2 edge cases');
    if (!Array.isArray(d.connections) || d.connections.length < 1) err(f, 'need at least 1 connection');
    for (const cn of d.connections || []) { if (!allIds.has(cn.topicId)) err(f, `connection to unknown topic ${cn.topicId}`); if (cn.topicId === d.id) err(f, 'connection to itself'); }
    if (d.exercises.length < 8) err(f, `only ${d.exercises.length} exercises (need 8+)`);
    for (const ex of d.exercises) {
      if (!ex.id?.startsWith(d.id + '-ex')) err(f, `exercise id ${ex.id} should start with ${d.id}-ex`);
      if (seenExIds.has(ex.id)) err(f, `duplicate exercise id ${ex.id}`); seenExIds.add(ex.id);
      if (!ex.explanation) err(f, `${ex.id}: missing explanation`);
      if (!ex.prompt) err(f, `${ex.id}: missing prompt`);
      switch (ex.type) {
        case 'mc':
          if (!Array.isArray(ex.options) || ex.options.length < 2 || ex.options.length > 5) err(f, `${ex.id}: mc needs 2–5 options`);
          if (new Set(ex.options).size !== ex.options?.length) err(f, `${ex.id}: duplicate options`);
          if (!Number.isInteger(ex.answer) || ex.answer < 0 || ex.answer >= (ex.options?.length ?? 0)) err(f, `${ex.id}: answer index out of range`);
          break;
        case 'fill':
          if ((ex.prompt.match(/___/g) || []).length !== 1) err(f, `${ex.id}: fill prompt needs exactly one ___`);
          if (!Array.isArray(ex.answer) || !ex.answer.length || ex.answer.some((a) => typeof a !== 'string' || !a.trim())) err(f, `${ex.id}: answer must be non-empty string[]`);
          break;
        case 'order': {
          if (!Array.isArray(ex.words) || ex.words.length < 3) err(f, `${ex.id}: order needs 3+ words`);
          if (!Array.isArray(ex.answer) || !ex.answer.length) err(f, `${ex.id}: answer must be string[]`);
          const key = (ws) => ws.map((w) => w.toLowerCase()).sort().join('\u0001');
          for (const a of ex.answer || []) if (key(a.split(' ')) !== key(ex.words || [])) err(f, `${ex.id}: answer "${a}" does not use exactly the given words`);
          if (ex.answer?.[0] && ex.words?.join(' ') === ex.answer[0]) err(f, `${ex.id}: words are not scrambled`);
          break;
        }
        case 'match':
          if (!Array.isArray(ex.pairs) || ex.pairs.length < 3 || ex.pairs.length > 6) err(f, `${ex.id}: match needs 3–6 pairs`);
          if (new Set((ex.pairs || []).map((p) => p[0])).size !== ex.pairs?.length) err(f, `${ex.id}: duplicate left items`);
          if (new Set((ex.pairs || []).map((p) => p[1])).size !== ex.pairs?.length) err(f, `${ex.id}: duplicate right items`);
          break;
        case 'translate':
          if (!Array.isArray(ex.answer) || !ex.answer.length) err(f, `${ex.id}: answer must be string[]`);
          break;
        default:
          err(f, `${ex.id}: unknown type ${ex.type}`);
      }
    }
  } else if (Array.isArray(d.words)) {
    if (!f.endsWith(`/${d.id}.ts`)) err(f, `file name should be ${d.id}.ts`);
    if (!d.theme || !d.level || !d.unit) err(f, 'set missing theme/level/unit');
    for (const w of d.words) {
      words++;
      if (!w.id || seenWordIds.has(w.id)) err(f, `duplicate or missing word id ${w.id}`); seenWordIds.add(w.id);
      if (/[^a-z0-9-]/.test(w.id || '')) err(f, `word id ${w.id} must be lowercase ascii`);
      if (w.theme !== d.theme) err(f, `${w.id}: theme mismatch`);
      if (w.level !== d.level) err(f, `${w.id}: level mismatch`);
      if (!w.de || !w.en || !w.pos || !w.example?.de || !w.example?.en) err(f, `${w.id}: missing de/en/pos/example`);
      if (w.pos === 'noun' && (!w.article || !w.plural)) err(f, `${w.id}: noun needs article and plural`);
      if (w.pos === 'noun' && w.de && w.de[0] !== w.de[0].toUpperCase()) err(f, `${w.id}: noun should be capitalised`);
      if (w.pos === 'verb' && !(w.forms?.er && w.forms?.prat && w.forms?.perfekt)) err(f, `${w.id}: verb needs forms {er, prat, perfekt}`);
    }
  } else {
    err(f, 'default export is neither a Topic nor a VocabSet');
  }
}

console.log(`${topics} topics, ${words} words checked in ${files.length} files`);
if (errors.length) { console.error(errors.join('\n')); console.error(`\n${errors.length} problem(s)`); process.exit(1); }
console.log('OK');
