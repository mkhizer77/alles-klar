import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-07-adjective-endings-definite',
  level: 'A2',
  unit: 3,
  order: 8,
  title: 'Adjective endings after der / die / das',
  germanTerm: 'Adjektivdeklination (bestimmt)',
  tags: ['adjectives', 'adjective endings', 'declension', 'cases', 'definite article'],
  summary: 'An adjective between der, die, das and its noun takes an ending: -e while the article keeps its basic form, -en as soon as the article changes or the noun is plural.',
  steps: [
    {
      title: 'The adjective gets an ending',
      text: `
In English an adjective never changes: *the old man, the old men*. In German an adjective that stands **directly in front of a noun** gets an **ending** (*Adjektivendung*): *der alt**e** Mann*.

After the definite article (*der, die, das*) there are only **two endings** to learn: **-e** and **-en**. An adjective after the verb (*sein, werden, bleiben*) gets no ending at all.
`,
      examples: [
        { de: 'Der alte Mann wohnt hier.', en: 'The old man lives here. (alt + e in front of the noun)' },
        { de: 'Der Mann ist alt.', en: 'The man is old. (after the verb: no ending)' },
        { de: 'Die Kinder sind müde.', en: 'The children are tired. (after the verb: no ending)' },
      ],
    },
    {
      title: 'Nominative: -e in the singular',
      text: `
In the **Nominative** (the subject case) the article has its basic form: *der, die, das*. The adjective takes **-e** in all three genders: *der alt**e** Mann, die alt**e** Frau, das alt**e** Haus*.

The plural is different. After *die* in the plural the ending is **-en**: *die alt**en** Leute*.
`,
      examples: [
        { de: 'Der kleine Hund schläft.', en: 'The small dog is sleeping. (masculine: -e)' },
        { de: 'Die nette Frau wohnt nebenan.', en: 'The nice woman lives next door. (feminine: -e)' },
        { de: 'Das neue Auto ist teuer.', en: 'The new car is expensive. (neuter: -e; teuer after the verb has no ending)' },
        { de: 'Die alten Häuser sind schön.', en: 'The old houses are beautiful. (plural: -en)' },
      ],
    },
    {
      title: 'Accusative: only the masculine changes',
      text: `
In the **Accusative** (the case of the direct object) only the masculine article changes: *der → den*. The adjective follows: as soon as the article changes, the ending becomes **-en**: *den alt**en** Mann*.

Feminine and neuter keep *die* and *das*, so the adjective keeps **-e**. The plural stays **-en**.
`,
      examples: [
        { de: 'Ich sehe den kleinen Hund.', en: 'I see the small dog. (den → -en)' },
        { de: 'Ich mag die alte Stadt.', en: 'I like the old city. (feminine: die stays, so -e stays)' },
        { de: 'Er kauft das neue Auto.', en: 'He is buying the new car. (neuter: -e)' },
        { de: 'Kennst du die neuen Nachbarn?', en: 'Do you know the new neighbours? (plural: -en)' },
      ],
    },
    {
      title: 'Dative: always -en',
      text: `
In the **Dative** the article changes in every gender: *dem, der, dem, den*. So the adjective is always **-en**: *mit dem alt**en** Mann*. Here is the whole table, article plus ending:

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | der -e | die -e | das -e | die -en |
| Accusative | den -en | die -e | das -e | die -en |
| Dative | dem -en | der -en | dem -en | den -en |
`,
      examples: [
        { de: 'Wir fahren mit dem neuen Auto.', en: 'We are going in the new car. (Dative neuter: -en)' },
        { de: 'Ich helfe der alten Frau.', en: 'I help the old woman. (Dative feminine: -en)' },
        { de: 'Er spielt mit den kleinen Kindern.', en: 'He plays with the small children. (Dative plural: -en, noun also -n)' },
      ],
    },
    {
      title: 'Same endings after dieser, jeder, welcher',
      text: `
**dieser** (this), **jeder** (every), **welcher** (which) and **alle** (all) have the same endings as *der, die, das*. So the adjective after them follows the same table: **-e** or **-en**.
`,
      examples: [
        { de: 'Dieser kleine Hund ist süß.', en: 'This small dog is cute. (like der: -e)' },
        { de: 'Jede neue Idee ist willkommen.', en: 'Every new idea is welcome. (like die: -e)' },
        { de: 'Wir fahren mit diesem alten Auto.', en: 'We are going in this old car. (Dative: -en)' },
        { de: 'Alle neuen Schüler sind hier.', en: 'All the new pupils are here. (plural: -en)' },
      ],
    },
    {
      title: 'Spelling changes and the rule in one line',
      text: `
Two small spelling changes: **hoch** loses its *c* before an ending (*das hoh**e** Haus*), and adjectives in **-el** or **-er** drop the *e* (*dunkel → das dunkl**e** Zimmer*, *teuer → die teur**e** Jacke*).

The rule in one line: the article already shows the case, so the adjective can be lazy. **-e** while the article keeps its basic form (*der, die, das*), **-en** as soon as it changes (*den, dem, der*) or the noun is plural.
`,
      examples: [
        { de: 'Das hohe Gebäude ist neu.', en: 'The tall building is new. (hoch → hoh-)' },
        { de: 'Wir sitzen im dunklen Zimmer.', en: 'We are sitting in the dark room. (dunkel → dunkl-, Dative -en)' },
        { de: 'Die teure Jacke gefällt mir.', en: 'I like the expensive jacket. (teuer → teur-)' },
      ],
    },
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
    'You may see the Genitive (*des alten Mannes, der alten Frau*): the adjective takes **-en** there too. The case itself comes in Unit 5.',
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
