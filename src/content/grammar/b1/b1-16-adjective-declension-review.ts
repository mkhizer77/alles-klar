import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-16-adjective-declension-review',
  level: 'B1',
  unit: 6,
  order: 16,
  title: 'Adjective declension: full review and the genitive',
  germanTerm: 'Adjektivdeklination (Review)',
  tags: ['adjectives', 'declension', 'cases', 'Genitive', 'review'],
  summary: 'All adjective endings in one place: after der-words, after ein-words and with no article, in all four cases, including the Genitive that was missing at A2.',
  explanation: `
### What it is for

Every time you put an adjective in front of a noun, it needs an ending, and the ending depends on the article, the gender and the case:

- **der alte** Mann, **ein alter** Mann, **mit einem alten** Mann – *the old man, an old man, with an old man*

At A2 you learned adjective endings (*Adjektivdeklination*) in three parts: after *der / die / das*, after *ein / kein / mein*, and with no article. This topic puts the whole system on one page and fills the last gap: the **Genitive** (the "of" case: *das Haus des alten Mannes* – the old man's house).

The single idea behind everything: **the case, gender and number must be shown once**, by a clear ending. If the article shows it, the adjective takes a weak ending (**-e** or **-en**). If there is no article, or the article is *ein* and shows nothing, the adjective takes the strong ending (the der / die / das ending).

### Table 1: after der-words (der, die, das, dieser, jeder, welcher, alle)

Only two endings exist here: **-e** and **-en**.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | der alt**e** Mann | die alt**e** Frau | das klein**e** Kind | die alt**en** Leute |
| Accusative | den alt**en** Mann | die alt**e** Frau | das klein**e** Kind | die alt**en** Leute |
| Dative | dem alt**en** Mann | der alt**en** Frau | dem klein**en** Kind | den alt**en** Leuten |
| Genitive | des alt**en** Mannes | der alt**en** Frau | des klein**en** Kindes | der alt**en** Leute |

-e in the five "easy" spots (Nom. m / f / n, Acc. f / n); -en everywhere else.

### Table 2: after ein-words (ein, kein, mein, dein, sein, ihr, unser, euer, Ihr)

Same as Table 1, except in the three places where *ein* has **no ending** and cannot show the gender: Nom. masculine, Nom. neuter and Acc. neuter. There the adjective shows it: **-er, -es, -es**.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | ein alt**er** Mann | eine alt**e** Frau | ein klein**es** Kind | keine alt**en** Leute |
| Accusative | einen alt**en** Mann | eine alt**e** Frau | ein klein**es** Kind | keine alt**en** Leute |
| Dative | einem alt**en** Mann | einer alt**en** Frau | einem klein**en** Kind | keinen alt**en** Leuten |
| Genitive | eines alt**en** Mannes | einer alt**en** Frau | eines klein**en** Kindes | keiner alt**en** Leute |

### Table 3: no article

The adjective takes over the job of the article, so it gets the **der / die / das ending**. At B1 you need this in the Nominative, Accusative and Dative:

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | gut**er** Wein | frisch**e** Milch | kalt**es** Wasser | gut**e** Freunde |
| Accusative | gut**en** Wein | frisch**e** Milch | kalt**es** Wasser | gut**e** Freunde |
| Dative | gut**em** Wein | frisch**er** Milch | kalt**em** Wasser | gut**en** Freunden |

You may also see the Genitive without an article in written German (*trotz **starken** Regens*, *die Meinung **vieler junger** Leute*). You only need to recognise it. When you write, use an article: *trotz **des starken** Regens*.

### The Genitive in practice

- After a Genitive **article** (*des, der, eines, einer, meines, meiner*) the adjective always ends in **-en**: *das Haus **des reichen** Mannes*, *die Meinung **meiner besten** Freundin*.
- After the Genitive prepositions **wegen, trotz, während, statt**: *wegen **des schlechten** Wetters*, *trotz **des starken** Regens*.
- Masculine and neuter nouns add **-s / -es** in the Genitive singular: *Mannes, Kindes, Wetters*.

### A quick method

1. Is there a **der-word**? → -e or -en (Table 1).
2. Is there an **ein-word**? → same, but -er / -es / -es in the three "no ending" spots (Table 2).
3. **No article**? → the adjective takes the der / die / das ending (Table 3).
4. Dative and Genitive singular, and every plural with an article → almost always **-en**.

### Why it matters

Adjective endings are the most visible grammar in written German. In the B1 writing exam every noun phrase is a chance to get them right or wrong, and the Genitive (*wegen des starken Verkehrs*) marks the step from A2 to B1. Participles, adjective-nouns (*der Deutsche*) and ordinal numbers (*am dritten Mai*) all use these same tables, so this one page covers a lot of ground.
`,
  examples: [
    { de: 'Der alte Mann liest die neue Zeitung.', en: 'The old man reads the new newspaper. (after der / die: -e)' },
    { de: 'Ich sehe den alten Mann.', en: 'I see the old man. (Accusative masculine: -en)' },
    { de: 'Das ist ein guter Film.', en: 'That is a good film. (ein shows nothing → -er)' },
    { de: 'Wir fahren mit einem neuen Auto.', en: 'We are driving in a new car. (Dative: -en)' },
    { de: 'Das Haus des reichen Mannes ist groß.', en: 'The rich man\'s house is big. (Genitive after des: -en, noun + -es)' },
    { de: 'Trotz des starken Regens gingen wir spazieren.', en: 'Despite the heavy rain we went for a walk. (Genitive after des: -en)' },
    { de: 'Ich trinke gern schwarzen Kaffee.', en: 'I like drinking black coffee. (no article, Accusative masculine: -en)' },
    { de: 'Das ist die Meinung meiner besten Freundin.', en: 'That is my best friend\'s opinion. (Genitive after meiner: -en)' },
  ],
  connections: [
    { topicId: 'a2-07-adjective-endings-definite', note: 'Table 1 (after der / die / das) was introduced there.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'Table 2 (after ein / kein / mein) was introduced there.' },
    { topicId: 'a2-09-adjective-endings-no-article', note: 'Table 3 (no article) was introduced there.' },
    { topicId: 'a2-14-genitive', note: 'The Genitive articles des / der and the noun ending -s that the adjective endings go with.' },
    { topicId: 'b1-15-participles-as-adjectives', note: 'Participles in front of a noun use exactly these tables.' },
  ],
  edgeCases: [
    'After *des / der / eines / einer* in the **Genitive** the adjective always ends in **-en**, and masculine / neuter nouns add -s or -es: *des alten Mannes*.',
    'The Genitive **without** an article (*trotz starken Regens*, *vieler junger Leute*) is something to recognise in texts, not to produce. With an article the ending is simply **-en**.',
    '*ein* shows nothing in Nom. m, Nom. n and Acc. n, so the adjective must: *ein gut**er** Film, ein klein**es** Kind*.',
    'Adjectives ending in **-el** and **-er** drop the e: *dunkel → ein dunkl**es** Zimmer*, *teuer → ein teur**es** Auto*.',
    '*hoch* loses its c before an ending: *ein hoh**er** Berg*. *Lila, rosa, orange* and city names in *-er* (*Berliner*) never take an ending.',
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
      type: 'fill',
      id: 'b1-16-adjective-declension-review-ex03',
      prompt: 'Wir fahren mit einem ___ Auto. (neu)',
      answer: ['neuen'],
      explanation: 'mit + Dative. After einem the adjective takes -en.',
    },
    {
      type: 'fill',
      id: 'b1-16-adjective-declension-review-ex04',
      prompt: 'Das ist ein ___ Film. (gut)',
      answer: ['guter'],
      explanation: 'ein has no ending in the Nominative masculine, so the adjective shows the gender: -er.',
    },
    {
      type: 'match',
      id: 'b1-16-adjective-declension-review-ex05',
      prompt: 'Match each phrase with the correct adjective form.',
      pairs: [
        ['das Haus des ___ Mannes (reich)', 'reichen'],
        ['ein ___ Kind (klein)', 'kleines'],
        ['___ Wein (gut, masculine, no article, Nominative)', 'guter'],
        ['die Farbe der ___ Blume (rot)', 'roten'],
        ['mit ___ Freunden (gut, no article)', 'guten'],
      ],
      explanation: 'Genitive after des / der → -en; ein + neuter Nominative → -es; no article masculine Nominative → -er; Dative plural no article → -en.',
    },
    {
      type: 'mc',
      id: 'b1-16-adjective-declension-review-ex06',
      prompt: 'Complete: "Wegen des ___ Wetters bleiben wir zu Hause." (schlecht)',
      options: ['schlechten', 'schlechtes', 'schlechter'],
      answer: 0,
      explanation: 'wegen + Genitive. After des the adjective always takes -en; the noun adds -s (Wetters).',
    },
    {
      type: 'fill',
      id: 'b1-16-adjective-declension-review-ex07',
      prompt: 'Ich trinke gern ___ Kaffee. (schwarz, no article)',
      answer: ['schwarzen'],
      explanation: 'No article, Accusative masculine: the adjective takes the den ending, -en.',
    },
    {
      type: 'order',
      id: 'b1-16-adjective-declension-review-ex08',
      prompt: 'Build the sentence: "My old neighbour\'s car is broken."',
      words: ['meines', 'ist', 'Nachbarn', 'Das', 'kaputt.', 'alten', 'Auto'],
      answer: ['Das Auto meines alten Nachbarn ist kaputt.'],
      explanation: 'Genitive after meines → alten. Nachbar is an n-declension noun, so it takes -n in the Genitive (no -s).',
    },
    {
      type: 'fill',
      id: 'b1-16-adjective-declension-review-ex09',
      prompt: 'Trotz des ___ Regens gingen wir spazieren. (stark)',
      answer: ['starken'],
      explanation: 'trotz + Genitive. After des the adjective takes -en, and the masculine noun adds -s: des starken Regens.',
    },
    {
      type: 'mc',
      id: 'b1-16-adjective-declension-review-ex10',
      prompt: 'Complete: "Ich wohne mit ___ Freunden zusammen." (gut, no article)',
      options: ['guten', 'gute', 'guter'],
      answer: 0,
      explanation: 'Dative plural with no article: the adjective takes the den ending, -en (and the noun adds -n: Freunden).',
    },
    {
      type: 'translate',
      id: 'b1-16-adjective-declension-review-ex11',
      prompt: 'Translate: "My sister\'s new car is red."',
      answer: ['Das neue Auto meiner Schwester ist rot.'],
      hint: 'das Auto, die Schwester, use the Genitive (meiner Schwester)',
      explanation: 'Das neue Auto: -e after das in the Nominative. meiner Schwester is the Genitive of a feminine noun.',
    },
    {
      type: 'mc',
      id: 'b1-16-adjective-declension-review-ex12',
      prompt: 'Which phrase is correct for "the opinion of the young people"?',
      options: ['die Meinung der jungen Leute', 'die Meinung der junge Leute', 'die Meinung die jungen Leute'],
      answer: 0,
      explanation: 'Genitive plural with the article der: the adjective takes -en, as in every plural after a der-word.',
    },
  ],
};

export default topic;
