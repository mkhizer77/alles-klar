import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-07-adjective-endings-definite',
  level: 'A2',
  unit: 3,
  order: 7,
  title: 'Adjective endings after der / die / das',
  germanTerm: 'Adjektivdeklination (bestimmt)',
  tags: ['adjectives', 'adjective endings', 'declension', 'cases', 'definite article'],
  summary: 'An adjective between a definite article (der, die, das) and its noun takes an ending: -e in the Nominative singular and feminine / neuter Accusative, and -en everywhere else.',
  explanation: `
### What it is

In English an adjective never changes: *the old man, the old woman, with the old men*. In German an adjective that stands **in front of a noun** gets an **ending** (*Adjektivendung*) that depends on the gender, number and case of the noun. This is called adjective declension (*Adjektivdeklination*).

- der alt**e** Mann – *the old man*
- die alt**e** Frau – *the old woman*
- mit den alt**en** Männern – *with the old men*

This topic covers the easiest group: adjectives after the **definite article** (*der, die, das*). There are only **two endings** to learn: **-e** and **-en**.

### How it works: the full table

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | der alt**e** Mann | die alt**e** Frau | das alt**e** Haus | die alt**en** Leute |
| Accusative | den alt**en** Mann | die alt**e** Frau | das alt**e** Haus | die alt**en** Leute |
| Dative | dem alt**en** Mann | der alt**en** Frau | dem alt**en** Haus | den alt**en** Leuten |
| Genitive | des alt**en** Mannes | der alt**en** Frau | des alt**en** Hauses | der alt**en** Leute |

The pattern is simple once you see it:

- **-e** in five places: all three Nominative singular forms, plus feminine and neuter Accusative (where the article does not change either: *die → die*, *das → das*).
- **-en** everywhere else: masculine Accusative, every Dative, every Genitive, and the whole plural.

A useful way to remember it: the **article already shows the case**, so the adjective can be lazy. It only needs *-e* where the article is in its basic form, and *-en* as soon as the article changes (*den, dem, der* in the Dative, *des*) or the noun is plural.

### The same endings after dieser, jeder, welcher

Words like **dieser** (this), **jeder** (every), **welcher** (which) and **alle** (all) behave like *der / die / das*. Use the same table:

- dies**er** klein**e** Hund – *this small dog*
- jed**e** neu**e** Idee – *every new idea*
- mit dies**em** alt**en** Auto – *with this old car*

### No ending after the noun

An adjective **after** the verb (*sein, werden, bleiben*) describes the noun from a distance and takes **no ending** at all:

- Der Mann ist **alt**. / Das Haus ist **groß**. / Die Kinder sind **müde**.

Endings only appear when the adjective stands **directly in front of** the noun.

### Small spelling changes

- **hoch** loses its *c*: das hoh**e** Haus.
- Adjectives ending in **-el** or **-er** drop the *e* before an ending: *dunkel* → das dunkl**e** Zimmer, *teuer* → die teur**e** Jacke.

### Why it matters

Adjective endings are everywhere: in every description, every menu, every advertisement. The definite-article pattern is the foundation; the next two topics (after *ein* and with no article) only add a few changes to this table. Learn the five *-e* positions here and you have done most of the work.
`,
  examples: [
    { de: 'Der kleine Hund schläft.', en: 'The small dog is sleeping. (Nominative masculine: -e)' },
    { de: 'Ich sehe den kleinen Hund.', en: 'I see the small dog. (Accusative masculine: -en)' },
    { de: 'Die nette Frau wohnt nebenan.', en: 'The nice woman lives next door. (Nominative feminine: -e)' },
    { de: 'Das neue Auto ist teuer.', en: 'The new car is expensive. (Nominative neuter: -e; teuer after the verb has no ending)' },
    { de: 'Wir fahren mit dem neuen Auto.', en: 'We are going in the new car. (Dative: -en)' },
    { de: 'Die alten Häuser sind schön.', en: 'The old houses are beautiful. (plural: -en)' },
    { de: 'Ich helfe der alten Frau.', en: 'I help the old woman. (Dative feminine: -en)' },
  ],
  connections: [
    { topicId: 'a1-09-gender-articles', note: 'You need the gender of the noun (der / die / das) to choose the ending.' },
    { topicId: 'a1-20-accusative', note: 'Only the masculine changes in the Accusative (den) and that is exactly where -e becomes -en.' },
    { topicId: 'a1-24-dative', note: 'In the Dative the article changes in every gender, so the adjective always takes -en.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'After ein / kein / mein the adjective must show the gender in three places.' },
    { topicId: 'a2-24-dieser-jeder-welcher', note: 'dieser, jeder and welcher take the same adjective endings as der / die / das.' },
  ],
  edgeCases: [
    'Adjectives **after the verb** take no ending: *Das Haus ist groß*, never *Das Haus ist große*.',
    'Plural is always **-en** after *die*: *die kleinen Kinder*, even in the Nominative where the singular would be *-e*.',
    '**hoch** becomes **hoh-** before an ending: *das hohe Gebäude*. **dunkel / teuer** drop the e: *das dunkle Zimmer, die teure Uhr*.',
    'Two adjectives in a row take the **same** ending: *der große, alte Baum*; *mit dem kleinen, roten Auto*.',
    'In the Dative plural the **noun** also gets an -n if it does not already end in one: *mit den alten Männer**n***.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-07-adjective-endings-definite-ex01',
      prompt: 'Complete: "der ___ Mann" (alt, Nominative)',
      options: ['alte', 'alten', 'altes'],
      answer: 0,
      explanation: 'Nominative masculine after der takes -e: der alte Mann.',
    },
    {
      type: 'fill',
      id: 'a2-07-adjective-endings-definite-ex02',
      prompt: 'Ich sehe den ___ Hund. (klein)',
      answer: ['kleinen'],
      explanation: 'den shows the Accusative masculine; the adjective takes -en: den kleinen Hund.',
    },
    {
      type: 'fill',
      id: 'a2-07-adjective-endings-definite-ex03',
      prompt: 'Die ___ Frau wohnt hier. (nett)',
      answer: ['nette'],
      explanation: 'Nominative feminine after die: -e. die nette Frau.',
    },
    {
      type: 'fill',
      id: 'a2-07-adjective-endings-definite-ex04',
      prompt: 'Ich helfe dem ___ Kind. (klein)',
      answer: ['kleinen'],
      explanation: 'helfen takes the Dative (dem Kind). Every Dative adjective ends in -en: dem kleinen Kind.',
    },
    {
      type: 'match',
      id: 'a2-07-adjective-endings-definite-ex05',
      prompt: 'Match each case with the correct form of "the old man / the old men".',
      pairs: [
        ['Nominative masculine', 'der alte Mann'],
        ['Accusative masculine', 'den alten Mann'],
        ['Dative masculine', 'dem alten Mann'],
        ['Nominative plural', 'die alten Männer'],
      ],
      explanation: 'Only the Nominative masculine takes -e. As soon as the article changes (den, dem) or the noun is plural, the ending is -en.',
    },
    {
      type: 'mc',
      id: 'a2-07-adjective-endings-definite-ex06',
      prompt: 'Complete: "Die ___ Kinder spielen im Park." (klein)',
      options: ['kleine', 'kleinen', 'kleines'],
      answer: 1,
      explanation: 'Kinder is plural. After die in the plural the adjective always takes -en, even in the Nominative.',
    },
    {
      type: 'fill',
      id: 'a2-07-adjective-endings-definite-ex07',
      prompt: 'Wir fahren mit dem ___ Auto. (neu)',
      answer: ['neuen'],
      explanation: 'mit takes the Dative (dem Auto), so the adjective ends in -en: dem neuen Auto.',
    },
    {
      type: 'fill',
      id: 'a2-07-adjective-endings-definite-ex08',
      prompt: 'Das ___ Haus ist teuer. (groß)',
      answer: ['große'],
      explanation: 'Nominative neuter after das: -e. teuer at the end has no ending because it stands after the verb.',
    },
    {
      type: 'order',
      id: 'a2-07-adjective-endings-definite-ex09',
      prompt: 'Build the sentence: "The small dog is sleeping."',
      words: ['Hund', 'kleine', 'schläft.', 'Der'],
      answer: ['Der kleine Hund schläft.'],
      explanation: 'Article, then adjective with -e (Nominative masculine), then noun, then the verb in position 2.',
    },
    {
      type: 'mc',
      id: 'a2-07-adjective-endings-definite-ex10',
      prompt: 'Complete: "Das Haus ist ___." (groß)',
      options: ['groß', 'große', 'großes'],
      answer: 0,
      explanation: 'The adjective comes after the verb ist, not in front of the noun, so it has no ending.',
    },
    {
      type: 'fill',
      id: 'a2-07-adjective-endings-definite-ex11',
      prompt: 'Siehst du das ___ Gebäude dort? (hoch)',
      answer: ['hohe'],
      explanation: 'Accusative neuter after das: -e. hoch drops its c before an ending: hohe.',
    },
    {
      type: 'translate',
      id: 'a2-07-adjective-endings-definite-ex12',
      prompt: 'Translate: "I like the old city."',
      answer: ['Ich mag die alte Stadt.', 'Die alte Stadt gefällt mir.'],
      hint: 'die Stadt = city, mögen = to like',
      explanation: 'Stadt is feminine. Feminine Accusative keeps die, so the adjective takes -e: die alte Stadt.',
    },
  ],
};

export default topic;
