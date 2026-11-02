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
const files = (args.length ? args : [join(root, 'src/content/grammar'), join(root, 'src/content/vocab'), join(root, 'src/content/reading'), join(root, 'src/content/writing'), join(root, 'src/content/speaking'), join(root, 'src/content/exams')]).flatMap((p) => walk(resolve(p)));

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
let topics = 0, words = 0, readings = 0, writings = 0, speakings = 0, exams = 0;

function checkExercises(f, ownerId, exercises, min, idInfix) {
  if (exercises.length < min) err(f, `only ${exercises.length} exercises (need ${min}+)`);
  for (const ex of exercises) {
    if (!ex.id?.startsWith(ownerId + idInfix)) err(f, `exercise id ${ex.id} should start with ${ownerId}${idInfix}`);
    if (seenExIds.has(ex.id)) err(f, `duplicate exercise id ${ex.id}`); seenExIds.add(ex.id);
    if (!ex.explanation) err(f, `${ex.id}: missing explanation`);
    if (ex.type !== 'listen' && !ex.prompt) err(f, `${ex.id}: missing prompt`);
    switch (ex.type) {
      case 'mc':
        if (!Array.isArray(ex.options) || ex.options.length < 2 || ex.options.length > (ex.options.every((o) => o.length <= 2) ? 14 : 5)) err(f, `${ex.id}: mc needs 2–5 options (up to 14 when the options are letters)`);
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

// Official formats the mock exams must follow exactly (docs/EXAM-GUIDE.md).
// items: scored items per part; tasks: productive tasks per part; plays: how often a listening text is played.
const EXAM_FORMATS = {
  'goethe-oesd': {
    modules: [
      { skill: 'lesen', items: [6, 6, 7, 7, 4], maxPoints: 100 },
      { skill: 'hoeren', items: [10, 5, 7, 8], audio: [5, 1, 1, 1], plays: [2, 1, 1, 2], maxPoints: 100 },
      { skill: 'schreiben', tasks: [1, 1, 1], maxPoints: 100 },
      { skill: 'sprechen', tasks: [1, 2, 1], maxPoints: 100 },
    ],
  },
  telc: {
    modules: [
      { skill: 'lesen', items: [5, 5, 10], pointsPerItem: 5, maxPoints: 75 },
      { skill: 'sprachbausteine', items: [10, 10], pointsPerItem: 1.5, maxPoints: 30 },
      { skill: 'hoeren', items: [5, 10, 5], audio: [5, 1, 5], plays: [1, 2, 2], pointsPerItem: 5, maxPoints: 75 },
      { skill: 'schreiben', tasks: [1], maxPoints: 45 },
      { skill: 'sprechen', tasks: [1, 1, 1], maxPoints: 75 },
    ],
  },
  dtz: {
    modules: [
      { skill: 'hoeren', items: [4, 5, 8, 3], audio: [4, 5, 4, 3], plays: [2, 1, 1, 2], maxPoints: 20 },
      { skill: 'lesen', items: [5, 5, 6, 3, 6], maxPoints: 25 },
      { skill: 'schreiben', tasks: [2], maxPoints: 20 },
      { skill: 'sprechen', tasks: [1, 1, 1], maxPoints: 100 },
    ],
  },
};

function checkExam(f, d) {
  exams++;
  const m = /^(a1|a2|b1)-(goethe|telc|dtz)-(\d+)$/.exec(d.id || '');
  if (!m) { err(f, `exam id ${d.id} must look like b1-goethe-1`); return; }
  if (!f.endsWith(`/${d.id}.ts`)) err(f, `file name should be ${d.id}.ts`);
  if (d.level !== m[1].toUpperCase()) err(f, `level ${d.level} does not match id`);
  const fmt = EXAM_FORMATS[d.provider];
  if (!fmt) { err(f, `unknown provider ${d.provider}`); return; }
  if ((d.provider === 'goethe-oesd' ? 'goethe' : d.provider) !== m[2]) err(f, `provider ${d.provider} does not match id`);
  for (const k of ['title', 'subtitle', 'intro', 'modelledOn', 'passRule']) if (!d[k]) err(f, `missing ${k}`);
  const scenarioIds = new Set();
  for (const sc of d.scenarios || []) {
    if (!sc.id?.startsWith(`exam-${d.id}-`)) err(f, `scenario id ${sc.id} should start with exam-${d.id}-`);
    if (scenarioIds.has(sc.id)) err(f, `duplicate scenario id ${sc.id}`); scenarioIds.add(sc.id);
    if (sc.level !== d.level || sc.unit !== 0) err(f, `scenario ${sc.id}: level must be ${d.level} and unit 0`);
    if (!sc.title || !sc.situation || !sc.opener || !sc.partner?.name || !sc.partner?.role || !sc.partner?.persona) err(f, `scenario ${sc.id}: missing title/situation/opener/partner`);
    if (!['du', 'Sie'].includes(sc.register)) err(f, `scenario ${sc.id}: register must be du or Sie`);
    if (!Array.isArray(sc.goals) || sc.goals.length < 3 || sc.goals.length > 4) err(f, `scenario ${sc.id}: need 3–4 goals`);
    if (!Array.isArray(sc.usefulPhrases) || sc.usefulPhrases.length < 5) err(f, `scenario ${sc.id}: need 5+ usefulPhrases`);
    for (const g of sc.grammarFocus || []) if (!allIds.has(g)) err(f, `scenario ${sc.id}: unknown topic ${g}`);
    if (!Array.isArray(sc.vocabFocus) || sc.vocabFocus.length < 4) err(f, `scenario ${sc.id}: need 4+ vocabFocus`);
    if (!(Number.isInteger(sc.minTurns) && sc.minTurns >= 4 && sc.minTurns <= 10)) err(f, `scenario ${sc.id}: minTurns must be 4–10`);
  }
  if (!Array.isArray(d.modules)) { err(f, 'modules must be an array'); return; }
  const skills = d.modules.map((x) => x.skill).join(',');
  const want = fmt.modules.map((x) => x.skill).join(',');
  if (skills !== want) { err(f, `modules must be ${want} in that order (got ${skills})`); return; }
  const partIds = new Set();
  const usedScenarios = new Set();
  d.modules.forEach((mod, mi) => {
    const spec = fmt.modules[mi];
    if (!mod.title || !(mod.minutes > 0)) err(f, `${mod.skill}: needs title and minutes`);
    if (mod.maxPoints !== spec.maxPoints) err(f, `${mod.skill}: maxPoints should be ${spec.maxPoints}`);
    if (!(mod.passPercent > 0 && mod.passPercent <= 100)) err(f, `${mod.skill}: bad passPercent`);
    const nParts = (spec.items || spec.tasks).length;
    if (!Array.isArray(mod.parts) || mod.parts.length !== nParts) { err(f, `${mod.skill}: needs ${nParts} parts`); return; }
    mod.parts.forEach((p, pi) => {
      const tag = `${mod.skill} ${p.title || pi + 1}`;
      if (!p.id || partIds.has(p.id)) err(f, `${tag}: missing or duplicate part id ${p.id}`); partIds.add(p.id);
      if (p.skill !== mod.skill) err(f, `${tag}: part skill ${p.skill} should be ${mod.skill}`);
      if (!p.title || !p.goal || !p.instructions) err(f, `${tag}: needs title, goal and instructions`);
      if (!Array.isArray(p.topicIds) || !p.topicIds.length) err(f, `${tag}: needs topicIds`);
      for (const t of p.topicIds || []) if (!allIds.has(t)) err(f, `${tag}: unknown topic ${t}`);
      const items = Array.isArray(p.items) ? p.items : [];
      if (spec.items) {
        if (items.length !== spec.items[pi]) err(f, `${tag}: needs ${spec.items[pi]} items, has ${items.length}`);
        if ((p.pointsPerItem ?? 1) !== (spec.pointsPerItem ?? 1)) err(f, `${tag}: pointsPerItem should be ${spec.pointsPerItem ?? 1}`);
        for (const ex of items) if (!['mc', 'fill'].includes(ex.type)) err(f, `${tag}: item ${ex.id} must be mc or fill`);
        checkExercises(f, `${d.id}-${p.id}`, items, 0, '-');
        const labels = new Set((p.texts || []).map((t) => t.label).filter(Boolean));
        if (labels.size) for (const ex of items) if (ex.type === 'mc' && ex.options.every((o) => o.length <= 2)) for (const o of ex.options) if (!labels.has(o) && !['0', 'x', 'X'].includes(o)) err(f, `${tag}: item ${ex.id} option ${o} is not a text label`);
        if (mod.skill !== 'hoeren') {
          const wc = (p.texts || []).flatMap((t) => t.body).join(' ').split(/\s+/).length;
          if (!(p.texts || []).length) err(f, `${tag}: reading part needs texts`);
          else if (wc < 60) err(f, `${tag}: texts have only ${wc} words`);
        }
        if (spec.audio) {
          const audio = Array.isArray(p.audio) ? p.audio : [];
          if (audio.length !== spec.audio[pi]) err(f, `${tag}: needs ${spec.audio[pi]} listening texts, has ${audio.length}`);
          for (const a of audio) {
            if (!a.id || !a.label || !a.text) err(f, `${tag}: audio needs id, label, text`);
            if (a.plays !== spec.plays[pi]) err(f, `${tag}: audio ${a.id} plays should be ${spec.plays[pi]}`);
            const wc = a.text.split(/\s+/).length;
            if (wc < 40) err(f, `${tag}: audio ${a.id} is only ${wc} words`);
          }
        }
        if (p.tasks?.length) err(f, `${tag}: receptive part should not have tasks`);
      } else {
        const tasks = Array.isArray(p.tasks) ? p.tasks : [];
        if (tasks.length !== spec.tasks[pi]) err(f, `${tag}: needs ${spec.tasks[pi]} task(s), has ${tasks.length}`);
        if (items.length) err(f, `${tag}: productive part should not have items`);
        for (const t of tasks) {
          if (!t.id || !t.title || !t.instructions) err(f, `${tag}: task needs id, title, instructions`);
          if (!Array.isArray(t.points) || t.points.length < 2) err(f, `${tag}: task ${t.id} needs 2+ points`);
          if (!Array.isArray(t.model) || !t.model.length) err(f, `${tag}: task ${t.id} needs a model`);
          if (!Array.isArray(t.modelNotes) || t.modelNotes.length < 2) err(f, `${tag}: task ${t.id} needs 2+ modelNotes`);
          if (!Array.isArray(t.criteria) || t.criteria.length < 4 || t.criteria.length > 10) err(f, `${tag}: task ${t.id} needs 4–10 criteria`);
          if (mod.skill === 'schreiben' && t.words) {
            const wc = t.model.join(' ').split(/\s+/).length;
            if (wc < t.words * 0.8 || wc > t.words * 1.6) err(f, `${tag}: task ${t.id} model has ${wc} words for a circa-${t.words}-word task`);
          }
          if (t.scenarioId) { if (!scenarioIds.has(t.scenarioId)) err(f, `${tag}: task ${t.id} references unknown scenario ${t.scenarioId}`); usedScenarios.add(t.scenarioId); }
          if (mod.skill === 'sprechen' && !t.scenarioId) err(f, `${tag}: speaking task ${t.id} needs a scenarioId`);
        }
      }
    });
  });
  for (const id of scenarioIds) if (!usedScenarios.has(id)) err(f, `scenario ${id} is not referenced by any task`);
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
    if (!/^(a1|a2|b1)-\d\d[a-z]?-[a-z0-9-]+$/.test(d.id)) err(f, `topic id ${d.id} must look like a1-14-es-gibt or a1-14b-demonstratives`);
    if (!d.summary || !d.germanTerm || !d.title) err(f, 'missing summary/germanTerm/title');
    const wordsOf = (t) => (t || '').replace(/[|]|^-{3,}$|^\s*-{3,}\s*$/gm, ' ').trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
    if (wordsOf(d.summary) > 40) err(f, `summary has ${wordsOf(d.summary)} words; keep it under 40`);
    if (d.explanation || d.examples) err(f, 'old format: explanation/examples must become steps');
    const steps = Array.isArray(d.steps) ? d.steps : [];
    if (steps.length < 3 || steps.length > 7) err(f, `need 3–7 steps, has ${steps.length}`);
    let total = 0, nEx = 0;
    steps.forEach((st, i) => {
      const tag = `step ${i + 1}`;
      const tw = wordsOf(st.title);
      if (!st.title || tw > 8) err(f, `${tag}: title must be 1–8 words`);
      const w = wordsOf(st.text); total += w;
      if (w < 15) err(f, `${tag}: text too short (${w} words)`);
      if (w > 100) err(f, `${tag}: text too long (${w} words; keep each step under 90)`);
      if (/`|\$\{/.test(st.text || '')) err(f, `${tag}: text contains backtick or \${'{'}`);
      if ((st.text || '').split('\n').filter((l) => l.startsWith('|')).length > 8) err(f, `${tag}: table too big (max 7 rows)`);
      if (/^#{1,6} /m.test(st.text || '')) err(f, `${tag}: no headings inside a step (the title is the heading)`);
      const exs = Array.isArray(st.examples) ? st.examples : [];
      if (exs.length < 2 || exs.length > 4) err(f, `${tag}: need 2–4 examples, has ${exs.length}`);
      for (const ex of exs) {
        nEx++;
        if (!ex.de || !ex.en) err(f, `${tag}: example needs de and en`);
        if (wordsOf(ex.de) > 16) err(f, `${tag}: example "${ex.de}" is ${wordsOf(ex.de)} words; keep examples short`);
      }
    });
    if (total > 450) err(f, `lesson text has ${total} words across steps; keep the whole lesson under 450`);
    if (nEx < 6) err(f, `need at least 6 examples across steps, has ${nEx}`);
    if (!Array.isArray(d.edgeCases) || d.edgeCases.length < 2 || d.edgeCases.length > 6) err(f, 'need 2–6 edge cases');
    for (const e of d.edgeCases || []) if (wordsOf(e) > 45) err(f, `edge case too long (${wordsOf(e)} words): "${e.slice(0, 40)}…"`);
    if (!Array.isArray(d.connections) || d.connections.length < 1 || d.connections.length > 6) err(f, 'need 1–6 connections');
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
  } else if (Array.isArray(d.modules)) {
    checkExam(f, d);
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
    err(f, 'default export is neither a Topic, a VocabSet, a ReadingText, a WritingTask, a SpeakingScenario nor a MockExam');
  }
}

console.log(`${topics} topics, ${words} words, ${readings} reading texts, ${writings} writing tasks, ${speakings} speaking scenarios, ${exams} mock exams checked in ${files.length} files`);
if (errors.length) { console.error(errors.join('\n')); console.error(`\n${errors.length} problem(s)`); process.exit(1); }
console.log('OK');
