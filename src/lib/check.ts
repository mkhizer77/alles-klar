// Lenient answer comparison for typed answers.
export function normalizeAnswer(s: string): string {
  return s
    .trim()
    .replace(/[‘’‚]/g, "'")
    .replace(/[“”„]/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?;:])/g, '$1')
    .replace(/[.!?]+$/, '')
    .toLowerCase();
}

/** For dictation: ignore all punctuation and case, compare words only. */
export function normalizeLoose(s: string): string {
  return s
    .toLowerCase()
    .replace(/[„“”"‚‘’'.,!?;:()\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function isCorrectLoose(given: string, expected: string): boolean {
  const g = normalizeLoose(given);
  return g.length > 0 && g === normalizeLoose(expected);
}

export function isCorrect(given: string, accepted: string[]): boolean {
  const g = normalizeAnswer(given);
  if (!g) return false;
  return accepted.some((a) => normalizeAnswer(a) === g);
}

/** Shuffle a copy of the array using an optional seeded random. */
export function shuffle<T>(arr: T[], rnd: () => number = Math.random): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function seededRandom(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
