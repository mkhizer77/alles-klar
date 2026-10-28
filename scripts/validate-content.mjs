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
const files = (args.length ? args : [join(root, 'src/content/grammar'), join(root, 'src/content/vocab'), join(root, 'src/content/reading'), join(root, 'src/content/writing'), join(root, 'src/content/speaking')]).flatMap((p) => walk(resolve(p)));

const LETTER = '[\\wäöüÄÖÜß]';
// Mirrors germanizePattern in src/lib/writing.ts: \b and \w become umlaut-aware.
const germanRegex = (pattern, flags = 'gi') => {
  const boundary = `(?:(?<!${LETTER})(?=${LETTER})|(?<=${LETTER})(?!${LETTER}))`;
  let out = '', inClass = false;
  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    if (ch === '\\' && i + 1 < pattern.length) {
      const next = pattern[i + 1];
      if (next === 'w') out += inClass ? '\\wäöüÄÖÜß' : LETTER;
      else if (next === 'b' && !inClass) out += boundary;
      else out += ch + next;
      i++;
      continue;
    }
    if (ch === '[' && !inClass) inClass = true;
    else if (ch === ']' && inClass) inClass = false;
    out += ch;
  }
  return new RegExp(out, flags);
};

const errors = [];
const err = (f, m) => errors.push(`${f.replace(root + '/', '')}: ${m}`);
const seenExIds = new Set();
const seenWordIds = new Set();
let topics = 0, words = 0, readings = 0, writings = 0, speakings = 0;

function checkExercises(f, ownerId, exercises, min, idInfix) {
  if (exercises.length < min) err(f, `only ${exercises.length} exercises (need ${min}+)`);
  for (const ex of exercises) {
    if (!ex.id?.startsWith(ownerId + idInfix)) err(f, `exercise id ${ex.id} should start with ${ownerId}${idInfix}`);
    if (seenExIds.has(ex.id)) err(f, `duplicate exercise id ${ex.id}`); seenExIds.add(ex.id);
    if (!ex.explanation) err(f, `${ex.id}: missing explanation`);
    if (ex.type !== 'listen' && !ex.prompt) err(f, `${ex.id}: missing prompt`);
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
      case 'listen':
        if (!ex.text || !ex.translation) err(f, `${ex.id}: listen needs text and translation`);
        break;
      default:
        err(f, `${ex.id}: unknown type ${ex.type}`);
    }
  }
}

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
    checkExercises(f, d.id, d.exercises, 8, '-ex');
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
  } else if (Array.isArray(d.paragraphs)) {
    readings++;
    const m = /^(a1|a2|b1)-u(\d+)-reading$/.exec(d.id || '');
    if (!m) { err(f, `reading id ${d.id} must look like a1-u3-reading`); continue; }
    if (!f.endsWith(`/${d.id}.ts`)) err(f, `file name should be ${d.id}.ts`);
    const lvl = curriculum.find((l) => l.level === d.level);
    const unit = lvl?.units.find((u) => u.unit === d.unit);
    if (!lvl || !unit) err(f, `no unit ${d.unit} in level ${d.level}`);
    if (d.level !== m[1].toUpperCase() || d.unit !== Number(m[2])) err(f, 'id does not match level/unit');
    if (!d.title || !d.intro || !d.tip) err(f, 'missing title/intro/tip');
    const wc = d.paragraphs.join(' ').split(/\s+/).length;
    const [lo, hi] = d.level === 'A1' ? [70, 170] : d.level === 'A2' ? [130, 260] : [200, 360];
    if (wc < lo || wc > hi) err(f, `text has ${wc} words; ${d.level} texts should have ${lo}–${hi}`);
    if (d.paragraphs.length < 2) err(f, 'need at least 2 paragraphs');
    if (!Array.isArray(d.glossary) || d.glossary.length < 4) err(f, 'need at least 4 glossary entries');
    checkExercises(f, d.id, d.questions || [], 6, '-q');
  } else if (Array.isArray(d.checklist)) {
    writings++;
    const m = /^(a1|a2|b1)-u(\d+)-writing$/.exec(d.id || '');
    if (!m) { err(f, `writing id ${d.id} must look like a1-u3-writing`); continue; }
    if (!f.endsWith(`/${d.id}.ts`)) err(f, `file name should be ${d.id}.ts`);
    const lvl = curriculum.find((l) => l.level === d.level);
    const unit = lvl?.units.find((u) => u.unit === d.unit);
    if (!lvl || !unit) err(f, `no unit ${d.unit} in level ${d.level}`);
    if (d.level !== m[1].toUpperCase() || d.unit !== Number(m[2])) err(f, 'id does not match level/unit');
    if (!d.title || !d.task || !d.textType || !d.register) err(f, 'missing title/task/textType/register');
    if (!['email', 'message', 'note', 'post', 'letter', 'story', 'description', 'opinion'].includes(d.textType)) err(f, `bad textType ${d.textType}`);
    if (!['informal', 'formal', 'neutral'].includes(d.register)) err(f, `bad register ${d.register}`);
    if (!Array.isArray(d.points) || d.points.length < 3 || d.points.length > 4) err(f, 'need 3–4 points');
    if (!(d.minWords > 0 && d.maxWords > d.minWords)) err(f, 'bad minWords/maxWords');
    if (!Array.isArray(d.usefulPhrases) || d.usefulPhrases.length < 5) err(f, 'need 5+ usefulPhrases');
    for (const ph of d.usefulPhrases || []) if (!ph.de || !ph.en || !['greeting', 'closing', 'connector', 'phrase'].includes(ph.role)) err(f, `bad phrase ${JSON.stringify(ph)}`);
    if (['email', 'letter', 'message'].includes(d.textType)) {
      if (!(d.usefulPhrases || []).some((p) => p.role === 'greeting')) err(f, 'email/letter/message needs a greeting phrase');
      if (!(d.usefulPhrases || []).some((p) => p.role === 'closing')) err(f, 'email/letter/message needs a closing phrase');
    }
    for (const g of d.grammarFocus || []) if (!allIds.has(g)) err(f, `grammarFocus unknown topic ${g}`);
    if (!Array.isArray(d.grammarFocus) || !d.grammarFocus.length) err(f, 'need grammarFocus');
    for (const r of d.mustUse || []) {
      if (!r.label || !r.pattern || !(r.min >= 1)) err(f, `bad mustUse ${JSON.stringify(r)}`);
      try { germanRegex(r.pattern, 'i'); } catch (e) { err(f, `mustUse pattern invalid: ${r.pattern}`); }
    }
    if (!Array.isArray(d.mustUse) || d.mustUse.length < 1) err(f, 'need at least 1 mustUse pattern');
    if (!Array.isArray(d.checklist) || d.checklist.length < 5 || d.checklist.length > 10) err(f, 'checklist needs 5–10 items');
    if (!Array.isArray(d.model) || d.model.length < 1) err(f, 'need model paragraphs');
    const wc = (d.model || []).join(' ').split(/\s+/).length;
    if (wc < d.minWords || wc > d.maxWords + 20) err(f, `model has ${wc} words; task asks for ${d.minWords}–${d.maxWords}`);
    const modelText = (d.model || []).join('\n');
    for (const r of d.mustUse || []) {
      const n = (modelText.match(germanRegex(r.pattern)) || []).length;
      if (n < r.min) err(f, `model answer does not satisfy mustUse "${r.label}" (${n} < ${r.min})`);
    }
    if (!Array.isArray(d.modelNotes) || d.modelNotes.length < 3) err(f, 'need 3+ modelNotes');
  } else if (Array.isArray(d.goals)) {
    speakings++;
    const m = /^(a1|a2|b1)-u(\d+)-speaking$/.exec(d.id || '');
    if (!m) { err(f, `speaking id ${d.id} must look like a1-u3-speaking`); continue; }
    if (!f.endsWith(`/${d.id}.ts`)) err(f, `file name should be ${d.id}.ts`);
    const lvl = curriculum.find((l) => l.level === d.level);
    const unit = lvl?.units.find((u) => u.unit === d.unit);
    if (!lvl || !unit) err(f, `no unit ${d.unit} in level ${d.level}`);
    if (d.level !== m[1].toUpperCase() || d.unit !== Number(m[2])) err(f, 'id does not match level/unit');
    if (!d.title || !d.situation || !d.opener) err(f, 'missing title/situation/opener');
    if (!d.partner?.name || !d.partner?.role || !d.partner?.persona) err(f, 'partner needs name, role and persona');
    if (!['du', 'Sie'].includes(d.register)) err(f, `register must be du or Sie, got ${d.register}`);
    if (d.goals.length < 3 || d.goals.length > 4) err(f, 'need 3–4 goals');
    const openerWords = d.opener.split(/\s+/).length;
    if (openerWords > 30) err(f, `opener has ${openerWords} words; keep it under 30`);
    if (!Array.isArray(d.usefulPhrases) || d.usefulPhrases.length < 5) err(f, 'need 5+ usefulPhrases');
    for (const ph of d.usefulPhrases || []) if (!ph.de || !ph.en) err(f, `bad phrase ${JSON.stringify(ph)}`);
    if (!Array.isArray(d.grammarFocus) || !d.grammarFocus.length) err(f, 'need grammarFocus');
    for (const g of d.grammarFocus || []) if (!allIds.has(g)) err(f, `grammarFocus unknown topic ${g}`);
    if (!Array.isArray(d.vocabFocus) || d.vocabFocus.length < 4) err(f, 'need 4+ vocabFocus items');
    if (!(Number.isInteger(d.minTurns) && d.minTurns >= 4 && d.minTurns <= 10)) err(f, 'minTurns must be 4–10');
  } else {
    err(f, 'default export is neither a Topic, a VocabSet, a ReadingText, a WritingTask nor a SpeakingScenario');
  }
}

console.log(`${topics} topics, ${words} words, ${readings} reading texts, ${writings} writing tasks, ${speakings} speaking scenarios checked in ${files.length} files`);
if (errors.length) { console.error(errors.join('\n')); console.error(`\n${errors.length} problem(s)`); process.exit(1); }
console.log('OK');
