// Cheap, deterministic checks on a learner's text. They catch the mechanical
// things (length, greeting, required structures); the self-check list covers the rest.
import type { WritingTask } from '../content/types';

export interface CheckResult {
  label: string;
  ok: boolean;
  detail?: string;
}

export const wordCount = (text: string) => (text.trim() ? text.trim().split(/\s+/).length : 0);

const LETTER = '[\\wäöüÄÖÜß]';

/**
 * JavaScript's \b and \w are ASCII-only, so "\bließ\b" never matches. Authors
 * write plain patterns; this rewrites \b and \w to German-aware equivalents.
 */
export function germanRegex(pattern: string, flags = 'gi'): RegExp {
  return new RegExp(germanizePattern(pattern), flags);
}

export function germanizePattern(pattern: string): string {
  const boundary = `(?:(?<!${LETTER})(?=${LETTER})|(?<=${LETTER})(?!${LETTER}))`;
  let out = '';
  let inClass = false;
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
  return out;
}

const norm = (s: string) => s.toLowerCase().replace(/[.,!?…]/g, '').replace(/\s+/g, ' ').trim();

export function runChecks(task: WritingTask, text: string): CheckResult[] {
  const out: CheckResult[] = [];
  const n = wordCount(text);
  out.push({
    label: `Length ${task.minWords}–${task.maxWords} words`,
    ok: n >= task.minWords && n <= task.maxWords,
    detail: `${n} words`,
  });
  if (['email', 'letter', 'message'].includes(task.textType)) {
    const t = norm(text);
    const greetings = task.usefulPhrases.filter((p) => p.role === 'greeting').map((p) => norm(p.de.replace(/…/g, '')));
    const closings = task.usefulPhrases.filter((p) => p.role === 'closing').map((p) => norm(p.de.replace(/…/g, '')));
    const firstLine = norm(text.split('\n')[0] ?? '');
    out.push({ label: 'Starts with a greeting', ok: greetings.some((g) => g && firstLine.startsWith(g.split(' ')[0])) });
    out.push({ label: 'Ends with a closing', ok: closings.some((c) => c && t.includes(c)) });
  }
  for (const r of task.mustUse) {
    const matches = text.match(germanRegex(r.pattern)) ?? [];
    out.push({ label: `Uses ${r.label}`, ok: matches.length >= r.min, detail: matches.length ? `found: ${[...new Set(matches)].slice(0, 3).join(', ')}` : 'not found' });
  }
  return out;
}
