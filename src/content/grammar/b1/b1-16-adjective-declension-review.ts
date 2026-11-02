import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-16-adjective-declension-review',
  level: 'B1',
  unit: 6,
  order: 22,
  title: 'Adjective declension: the review',
  germanTerm: 'Adjektivdeklination (Review)',
  tags: ['adjectives', 'declension', 'cases', 'review'],
  summary: 'All adjective endings in one place: if the article already shows the case, the adjective takes -e or -en; if not, the adjective takes the der / die / das ending itself.',
  steps: [
    {
      title: 'One idea behind every ending',
      text: `
Every adjective in front of a noun needs an **ending**. It depends on the **article**, the **gender** and the **case**: *der alte Mann, ein alter Mann, mit einem alten Mann*.

The one idea behind the whole system: case and gender must be shown **once**. If the article shows them, the adjective takes a small ending (**-e** or **-en**). If nothing shows them, the adjective takes the **der / die / das** ending.
`,
      examples: [
        { de: 'Der alte Mann liest die neue Zeitung.', en: 'The old man reads the new newspaper. (der and die show the case: -e)' },
        { de: 'Das ist ein guter Film.', en: 'That is a good film. (ein shows nothing: -er)' },
        { de: 'Ich trinke gern schwarzen Kaffee.', en: 'I like drinking black coffee. (no article: -en, the den ending)' },
      ],
    },
    {
      title: 'Table 1: after der-words',
      text: `
After **der, die, das, dieser, jeder, welcher** only **-e** and **-en** exist: **-e** in the five easy spots (Nominative m / f / n, Accusative f / n), **-en** everywhere else.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | der alt**e** Mann | die alt**e** Frau | das klein**e** Kind | die alt**en** Leute |
| Accusative | den alt**en** Mann | die alt**e** Frau | das klein**e** Kind | die alt**en** Leute |
| Dative | dem alt**en** Mann | der alt**en** Frau | dem klein**en** Kind | den alt**en** Leuten |
`,
      examples: [
        { de: 'Der alte Mann wartet.', en: 'The old man is waiting. (Nominative masculine: -e)' },
        { de: 'Ich sehe den alten Mann.', en: 'I see the old man. (Accusative masculine: -en)' },
        { de: 'Das kleine Kind schläft.', en: 'The small child is sleeping. (Nominative neuter: -e)' },
        { de: 'Wir helfen der alten Frau.', en: 'We help the old woman. (Dative: -en)' },
      ],
    },
    {
      title: 'Table 2: after ein-words',
      text: `
After **ein, kein, mein, dein, sein, ihr, unser**: same as Table 1, except where *ein* has **no ending** (Nominative masculine, Nominative and Accusative neuter). There the adjective takes **-er, -es, -es**.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | ein alt**er** Mann | eine alt**e** Frau | ein klein**es** Kind | keine alt**en** Leute |
| Accusative | einen alt**en** Mann | eine alt**e** Frau | ein klein**es** Kind | keine alt**en** Leute |
| Dative | einem alt**en** Mann | einer alt**en** Frau | einem klein**en** Kind | keinen alt**en** Leuten |
`,
      examples: [
        { de: 'Das ist ein alter Mann.', en: 'That is an old man. (ein shows nothing: -er)' },
        { de: 'Ich kaufe eine warme Jacke.', en: 'I am buying a warm jacket. (eine shows feminine: -e)' },
        { de: 'Wir fahren mit einem neuen Auto.', en: 'We are driving in a new car. (Dative: -en)' },
      ],
    },
    {
      title: 'Table 3: no article',
      text: `
With **no article** the adjective does the article's job, so it gets the **der / die / das** ending itself: *gut**er** Wein* (like *der*), *kalt**es** Wasser* (like *das*).

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | gut**er** Wein | frisch**e** Milch | kalt**es** Wasser | gut**e** Freunde |
| Accusative | gut**en** Wein | frisch**e** Milch | kalt**es** Wasser | gut**e** Freunde |
| Dative | gut**em** Wein | frisch**er** Milch | kalt**em** Wasser | gut**en** Freunden |
`,
      examples: [
        { de: 'Ich trinke gern kaltes Wasser.', en: 'I like drinking cold water. (neuter: -es, like das)' },
        { de: 'Ich wohne mit guten Freunden zusammen.', en: 'I live together with good friends. (Dative plural: -en, like den)' },
        { de: 'Frische Milch schmeckt besser.', en: 'Fresh milk tastes better. (feminine: -e, like die)' },
      ],
    },
    {
      title: 'The quick method',
      text: `
Ask one question: **does the article already show the case?**

1. **der-word** → yes: **-e** or **-en** (Table 1).
2. **ein-word** → yes, except *ein* with no ending: there **-er / -es / -es** (Table 2).
3. **No article** → no: the adjective takes the **der / die / das** ending (Table 3).

Shortcut: Dative singular and every plural with an article → **-en**. The Genitive (the "of" case) is the next topic.
`,
      examples: [
        { de: 'Dieser neue Computer ist schnell.', en: 'This new computer is fast. (dieser shows the case: -e)' },
        { de: 'Ich wohne in einer kleinen Wohnung.', en: 'I live in a small flat. (Dative singular: -en)' },
        { de: 'Wir besuchen unsere alten Freunde.', en: 'We visit our old friends. (plural with an article: -en)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-07-adjective-endings-definite', note: 'Table 1 (after der / die / das) was introduced there.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'Table 2 (after ein / kein / mein) was introduced there.' },
    { topicId: 'a2-09-adjective-endings-no-article', note: 'Table 3 (no article) was introduced there.' },
    { topicId: 'b1-16b-adjectives-genitive', note: 'The sibling topic adds the Genitive endings: das Haus des alten Mannes.' },
    { topicId: 'b1-15-participles-as-adjectives', note: 'Participles in front of a noun use exactly these tables.' },
    { topicId: 'b1-14-adjectives-as-nouns', note: 'der Deutsche, ein Deutscher: adjective-nouns use these endings too.' },
  ],
  edgeCases: [
    '*ein* shows nothing in Nominative masculine, Nominative neuter and Accusative neuter, so the adjective must: *ein gut**er** Film, ein klein**es** Kind*.',
    'Adjectives ending in **-el** and **-er** drop the e: *dunkel → ein dunkl**es** Zimmer*, *teuer → ein teur**es** Auto*.',
    '*hoch* loses its c before an ending: *ein hoh**er** Berg*. *Lila, rosa, orange* and city names in *-er* (*Berliner*) never take an ending.',
    'After **alle** the plural adjective takes **-en**, like after *die*: *alle alt**en** Leute*. After **viele** and **einige** it takes **-e**: *viele alt**e** Leute*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-16-adjective-declension-review-ex01',
      prompt: 'Complete: "Der ___ Mann wartet." (alt)',
      options: ['alte', 'alter', 'alten'],
      answer: 0,
      explanation: 'After der in the Nominative masculine the adjective takes -e.',
    },
    {
      type: 'fill',
      id: 'b1-16-adjective-declension-review-ex02',
      prompt: 'Ich sehe den ___ Mann. (alt)',
      answer: ['alten'],
      explanation: 'Accusative masculine after den: -en.',
    },
    {
      type: 'mc',
      id: 'b1-16-adjective-declension-review-ex03',
      prompt: 'Complete: "Das ___ Kind schläft." (klein)',
      options: ['kleine', 'kleines', 'kleinen'],
      answer: 0,
      explanation: 'das already shows the neuter Nominative, so the adjective takes the small ending -e.',
    },
    {
      type: 'fill',
      id: 'b1-16-adjective-declension-review-ex04',
      prompt: 'Ich kaufe eine ___ Jacke. (warm)',
      answer: ['warme'],
      explanation: 'eine shows the feminine Accusative, so the adjective takes -e: eine warme Jacke.',
    },
    {
      type: 'fill',
      id: 'b1-16-adjective-declension-review-ex05',
      prompt: 'Das ist ein ___ Film. (gut)',
      answer: ['guter'],
      explanation: 'ein has no ending in the Nominative masculine, so the adjective shows the gender: -er.',
    },
    {
      type: 'fill',
      id: 'b1-16-adjective-declension-review-ex06',
      prompt: 'Wir fahren mit einem ___ Auto. (neu)',
      answer: ['neuen'],
      explanation: 'mit + Dative. After einem the adjective takes -en.',
    },
    {
      type: 'match',
      id: 'b1-16-adjective-declension-review-ex07',
      prompt: 'Match each phrase with the correct adjective form.',
      pairs: [
        ['dem ___ Mann (reich, Dative)', 'reichen'],
        ['ein ___ Kind (klein)', 'kleines'],
        ['___ Wein (gut, masculine, no article, Nominative)', 'guter'],
        ['die ___ Blume (rot, Nominative)', 'rote'],
        ['mit ___ Freunden (gut, no article)', 'guten'],
      ],
      explanation: 'Dative after dem → -en; ein + neuter Nominative → -es; no article masculine Nominative → -er; die + feminine → -e; Dative plural no article → -en.',
    },
    {
      type: 'fill',
      id: 'b1-16-adjective-declension-review-ex08',
      prompt: 'Ich trinke gern ___ Kaffee. (schwarz, no article)',
      answer: ['schwarzen'],
      explanation: 'No article, Accusative masculine: the adjective takes the den ending, -en.',
    },
    {
      type: 'mc',
      id: 'b1-16-adjective-declension-review-ex09',
      prompt: 'Complete: "Ich wohne mit ___ Freunden zusammen." (gut, no article)',
      options: ['guten', 'gute', 'guter'],
      answer: 0,
      explanation: 'Dative plural with no article: the adjective takes the den ending, -en (and the noun adds -n: Freunden).',
    },
    {
      type: 'mc',
      id: 'b1-16-adjective-declension-review-ex10',
      prompt: 'Why is it "ein kleines Kind" but "das kleine Kind"?',
      options: ['ein shows nothing in the neuter, so the adjective shows it with -es', 'Neuter nouns always take -es', 'The Nominative always takes -es'],
      answer: 0,
      explanation: 'The case and gender must be shown once. das shows them, so the adjective takes -e; ein does not, so the adjective takes the das ending -es.',
    },
    {
      type: 'translate',
      id: 'b1-16-adjective-declension-review-ex11',
      prompt: 'Translate: "I live in a small flat."',
      answer: ['Ich wohne in einer kleinen Wohnung.'],
      hint: 'wohnen = to live, die Wohnung = flat, in + Dative for the place',
      explanation: 'in + Dative (place). einer shows the feminine Dative, so the adjective takes -en: einer kleinen Wohnung.',
    },
  ],
};

export default topic;
