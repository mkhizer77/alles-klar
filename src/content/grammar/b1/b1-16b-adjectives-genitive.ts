import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-16b-adjectives-genitive',
  level: 'B1',
  unit: 6,
  order: 23,
  title: 'Adjective endings in the Genitive',
  germanTerm: 'Adjektivdeklination: Genitiv',
  tags: ['adjectives', 'declension', 'cases', 'Genitive'],
  summary: 'In the Genitive the adjective after des, der, eines, einer or meiner always ends in -en (das Haus des alten Mannes); without an article it is -en for masculine and neuter, -er for feminine and plural.',
  steps: [
    {
      title: 'What the Genitive ending is for',
      text: `
The **Genitive** (*Genitiv*, the "of" case) says who something belongs to: *das Haus **des alten Mannes*** (the old man's house). It was the one case missing at A2.

The good news: after a Genitive **article** (*des, der, eines, einer, meines, meiner*) the adjective always ends in **-en**. Masculine and neuter nouns also add **-s** or **-es**: *Mannes, Kindes, Wetters*.
`,
      examples: [
        { de: 'Das Haus des alten Mannes ist groß.', en: "The old man's house is big. (des + -en, noun + -es)" },
        { de: 'Das ist die Meinung meiner besten Freundin.', en: "That is my best friend's opinion. (meiner + -en)" },
        { de: 'Die Farbe der roten Blume gefällt mir.', en: 'I like the colour of the red flower. (der + -en)' },
      ],
    },
    {
      title: 'After der-words and ein-words: always -en',
      text: `
One ending for every gender, singular and plural. The article changes, the adjective does not.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| der-word | des alt**en** Mannes | der alt**en** Frau | des klein**en** Kindes | der alt**en** Leute |
| ein-word | eines alt**en** Mannes | einer alt**en** Frau | eines klein**en** Kindes | meiner alt**en** Freunde |

Remember: feminine and plural nouns take **no -s** in the Genitive: *der alten Frau*, *der alten Leute*.
`,
      examples: [
        { de: 'Das Auto meines alten Nachbarn ist kaputt.', en: "My old neighbour's car is broken. (meines + -en; Nachbar: n-declension)" },
        { de: 'Das ist die Meinung der jungen Leute.', en: 'That is the opinion of the young people. (plural: der + -en)' },
        { de: 'Der Name des kleinen Kindes ist Lena.', en: "The small child's name is Lena. (des + -en, Kindes)" },
      ],
    },
    {
      title: 'After wegen, trotz, während, statt',
      text: `
The Genitive prepositions **wegen** (because of), **trotz** (despite), **während** (during) and **statt** (instead of) are where you need this most. The pattern is always *preposition + des / der + adjective-en + noun*.

Typical phrases: *wegen **des schlechten** Wetters*, *trotz **des starken** Regens*, *während **der langen** Pause*.
`,
      examples: [
        { de: 'Wegen des schlechten Wetters bleiben wir zu Hause.', en: 'Because of the bad weather we are staying at home. (des + -en, Wetters)' },
        { de: 'Trotz des starken Regens gingen wir spazieren.', en: 'Despite the heavy rain we went for a walk.' },
        { de: 'Während der langen Pause haben wir gegessen.', en: 'During the long break we ate. (feminine: der + -en, no -s)' },
      ],
    },
    {
      title: 'Without an article: -en or -er',
      text: `
In written German you may also see the Genitive **without** an article. Then the adjective shows the case itself: **-en** for masculine and neuter (*trotz stark**en** Regens*), **-er** for feminine and plural (*die Meinung viel**er** jung**er** Leute*).

You only need to **recognise** this. When you write, use an article: *trotz **des starken** Regens*.
`,
      examples: [
        { de: 'Trotz starken Regens spielten sie Fußball.', en: 'Despite heavy rain they played football. (masculine, no article: -en)' },
        { de: 'Das ist die Meinung vieler junger Leute.', en: 'That is the opinion of many young people. (plural, no article: -er)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-14-genitive', note: 'The Genitive articles des / der and the noun ending -s that these adjective endings go with.' },
    { topicId: 'b1-16-adjective-declension-review', note: 'The sibling topic: the endings in the Nominative, Accusative and Dative.' },
    { topicId: 'b1-13-n-declension', note: 'N-declension nouns take -n instead of -s in the Genitive: meines alten Nachbarn.' },
    { topicId: 'b1-26-genitive-prepositions-depth', note: 'More prepositions that take the Genitive, all with the same -en ending.' },
  ],
  edgeCases: [
    'After *des / der / eines / einer* in the Genitive the adjective always ends in **-en**, and masculine / neuter nouns add -s or -es: *des alt**en** Mann**es***.',
    'Feminine and plural nouns take **no -s** in the Genitive: *der alten Frau*, *der jungen Leute*. Only the article and the adjective show the case.',
    'The Genitive **without** an article (*trotz starken Regens*, *vieler junger Leute*) is something to recognise in texts, not to produce. With an article the ending is simply **-en**.',
    'N-declension nouns take **-n**, not -s: *das Auto meines alten **Nachbarn***, *der Name des neuen **Kollegen***.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'b1-16b-adjectives-genitive-ex01',
      prompt: 'Das Haus des ___ Mannes ist groß. (reich)',
      answer: ['reichen'],
      explanation: 'Genitive after des: the adjective always takes -en, and the masculine noun adds -es: des reichen Mannes.',
    },
    {
      type: 'mc',
      id: 'b1-16b-adjectives-genitive-ex02',
      prompt: 'Complete: "Wegen des ___ Wetters bleiben wir zu Hause." (schlecht)',
      options: ['schlechten', 'schlechtes', 'schlechter'],
      answer: 0,
      explanation: 'wegen + Genitive. After des the adjective always takes -en; the noun adds -s (Wetters).',
    },
    {
      type: 'fill',
      id: 'b1-16b-adjectives-genitive-ex03',
      prompt: 'Trotz des ___ Regens gingen wir spazieren. (stark)',
      answer: ['starken'],
      explanation: 'trotz + Genitive. After des the adjective takes -en, and the masculine noun adds -s: des starken Regens.',
    },
    {
      type: 'fill',
      id: 'b1-16b-adjectives-genitive-ex04',
      prompt: 'Die Farbe der ___ Blume gefällt mir. (rot)',
      answer: ['roten'],
      explanation: 'Genitive feminine: der + -en. The feminine noun takes no -s: der roten Blume.',
    },
    {
      type: 'fill',
      id: 'b1-16b-adjectives-genitive-ex05',
      prompt: 'Während der ___ Pause haben wir gegessen. (lang)',
      answer: ['langen'],
      explanation: 'während + Genitive. die Pause is feminine, so the Genitive article is der and the adjective takes -en.',
    },
    {
      type: 'match',
      id: 'b1-16b-adjectives-genitive-ex06',
      prompt: 'Match each Genitive phrase with the correct adjective form.',
      pairs: [
        ['des ___ Kindes (klein)', 'kleinen'],
        ['meiner ___ Schwester (jung)', 'jungen'],
        ['der ___ Leute (alt, plural)', 'alten'],
        ['trotz ___ Regens (stark, no article)', 'starken'],
        ['die Meinung ___ Leute (viel, plural, no article)', 'vieler'],
      ],
      explanation: 'With an article the Genitive ending is always -en. Without an article: -en for masculine (starken Regens), -er for plural (vieler Leute).',
    },
    {
      type: 'mc',
      id: 'b1-16b-adjectives-genitive-ex07',
      prompt: 'Which phrase is correct for "the opinion of the young people"?',
      options: ['die Meinung der jungen Leute', 'die Meinung der junge Leute', 'die Meinung die jungen Leute'],
      answer: 0,
      explanation: 'Genitive plural with the article der: the adjective takes -en, as in every Genitive with an article.',
    },
    {
      type: 'order',
      id: 'b1-16b-adjectives-genitive-ex08',
      prompt: 'Build the sentence: "My old neighbour\'s car is broken."',
      words: ['meines', 'ist', 'Nachbarn', 'Das', 'kaputt.', 'alten', 'Auto'],
      answer: ['Das Auto meines alten Nachbarn ist kaputt.'],
      explanation: 'Genitive after meines → alten. Nachbar is an n-declension noun, so it takes -n in the Genitive (no -s).',
    },
    {
      type: 'translate',
      id: 'b1-16b-adjectives-genitive-ex09',
      prompt: 'Translate: "My best friend\'s new car is red." (the friend is a woman)',
      answer: ['Das neue Auto meiner besten Freundin ist rot.'],
      hint: 'das Auto, die Freundin, use the Genitive (meiner … Freundin)',
      explanation: 'Das neue Auto: -e after das in the Nominative. meiner besten Freundin: Genitive feminine, the adjective takes -en.',
    },
    {
      type: 'mc',
      id: 'b1-16b-adjectives-genitive-ex10',
      prompt: 'Which sentence is correct standard German?',
      options: ['Das ist die Meinung vieler junger Leute.', 'Das ist die Meinung vieler jungen Leute.', 'Das ist die Meinung viele junge Leute.'],
      answer: 0,
      explanation: 'Genitive plural without an article: both viel and jung take -er, because there is no article to show the case.',
    },
  ],
};

export default topic;
