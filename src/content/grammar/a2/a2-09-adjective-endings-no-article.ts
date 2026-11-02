import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-09-adjective-endings-no-article',
  level: 'A2',
  unit: 3,
  order: 10,
  title: 'Adjective endings with no article',
  germanTerm: 'Adjektivdeklination (Nullartikel)',
  tags: ['adjectives', 'adjective endings', 'declension', 'cases', 'no article'],
  summary: 'When there is no article at all (guter Wein, frische Milch, liebe Grüße), the adjective takes the ending der / die / das would have had, so it shows gender and case by itself.',
  steps: [
    {
      title: 'No article: the adjective shows the case',
      text: `
Sometimes a noun has **no article** (*Nullartikel*): things you cannot count (*Milch, Wein, Brot*), plurals in general (*Kinder, Freunde*) and set phrases (*Guten Tag!*).

If an adjective stands before such a noun, nothing else shows gender and case. So the **adjective takes the ending that der / die / das would have had**: *gut**er** Wein* (like *d**er***), *kalt**es** Wasser* (like *d**as***).
`,
      examples: [
        { de: 'Guter Wein ist teuer.', en: 'Good wine is expensive. (like der: -er)' },
        { de: 'Frische Milch ist gesund.', en: 'Fresh milk is healthy. (like die: -e)' },
        { de: 'Kaltes Wasser tut gut.', en: 'Cold water does you good. (like das: -es)' },
      ],
    },
    {
      title: 'Nominative: -er, -e, -es, plural -e',
      text: `
In the **Nominative** (the subject case) copy the article endings: masculine **-er**, feminine **-e**, neuter **-es**. The plural copies *die*, so it is **-e**: *klein**e** Kinder*.

Letters start this way too, with no article: *Lieb**e** Anna, / Lieb**er** Paul, / Lieb**e** Eltern,*.
`,
      examples: [
        { de: 'Frisches Brot schmeckt gut.', en: 'Fresh bread tastes good. (neuter: -es)' },
        { de: 'Kleine Kinder spielen gern.', en: 'Small children like to play. (plural: -e)' },
        { de: 'Lieber Paul, wie geht es dir?', en: 'Dear Paul, how are you? (letter: masculine -er)' },
      ],
    },
    {
      title: 'Accusative: Guten Tag, Gute Nacht',
      text: `
In the **Accusative** (the case of the direct object) only the masculine changes, as always: **-en** (like *d**en***). Feminine **-e**, neuter **-es** and plural **-e** stay the same.

Greetings and wishes are Accusative, because a verb like *Ich wünsche dir …* is hidden: *Gut**en** Tag* (masculine), *Gut**e** Nacht* (feminine), *Froh**es** Fest* (neuter), *Lieb**e** Grüße* (plural).
`,
      examples: [
        { de: 'Ich trinke gern schwarzen Kaffee.', en: 'I like drinking black coffee. (masculine: -en)' },
        { de: 'Hier gibt es frisches Brot.', en: 'There is fresh bread here. (neuter: -es)' },
        { de: 'Guten Morgen! Gute Reise!', en: 'Good morning! Have a good trip! (masculine -en, feminine -e)' },
        { de: 'Liebe Grüße aus Berlin!', en: 'Best wishes from Berlin! (plural: -e)' },
      ],
    },
    {
      title: 'Dative: -em, -er, -em, -en',
      text: `
In the **Dative** the adjective copies *dem, der, dem, den*: **-em, -er, -em, -en**. You mostly need to **recognise** these, in phrases like *mit gut**en** Freunden* or *bei schön**em** Wetter*. The whole table, endings only:

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | -er | -e | -es | -e |
| Accusative | -en | -e | -es | -e |
| Dative | -em | -er | -em | -en |
`,
      examples: [
        { de: 'Mit guten Freunden ist alles leichter.', en: 'With good friends everything is easier. (Dative plural: -en, noun also -n)' },
        { de: 'Bei schönem Wetter gehen wir spazieren.', en: 'In nice weather we go for a walk. (Dative neuter: -em)' },
        { de: 'Er trinkt Tee mit heißer Milch.', en: 'He drinks tea with hot milk. (Dative feminine: -er)' },
      ],
    },
    {
      title: 'Where you meet these endings',
      text: `
Three places. **Food and drink** without an article: *frisch**es** Obst, warm**e** Milch*. **Plurals after numbers and after viele, einige, wenige, andere, mehrere**: *zwei klein**e** Kinder, viel**e** nett**e** Leute*. **Set phrases and letters**: *Herzlich**e** Glückwünsche!*, *Lieb**e** Grüße*, *Lieb**e** Anna,* *Lieb**er** Herr Müller,*.
`,
      examples: [
        { de: 'Wir haben zwei kleine Kinder.', en: 'We have two small children. (after a number: -e)' },
        { de: 'Viele junge Leute lernen Deutsch.', en: 'Many young people learn German. (after viele: -e)' },
        { de: 'Liebe Anna, wie geht es dir?', en: 'Dear Anna, how are you? (letter opening: feminine -e)' },
        { de: 'Herzliche Glückwünsche zum Geburtstag!', en: 'Happy birthday! (plural: -e)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-07-adjective-endings-definite', note: 'The adjective copies the ending of der / die / das from that table.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'The -er and -es endings after ein are the same idea: the adjective shows what the article cannot.' },
    { topicId: 'a1-12-indefinite-articles', note: 'When German uses no article at all.' },
    { topicId: 'a1-10-plural', note: 'Plural nouns without an article are the most common place for these endings.' },
    { topicId: 'b1-16-adjective-declension-review', note: 'A full review of all three tables, including the Genitive, which is left out here.' },
  ],
  edgeCases: [
    'The Dative masculine / neuter ending is **-em**: *bei schönem Wetter* (in nice weather), *mit großem Interesse* (with great interest). You mostly need to recognise these.',
    'After **viele, einige, wenige, andere, mehrere** and after **numbers** use the plural endings of this table: *viele nette Leute, zwei kleine Kinder*. (After *alle* use -en: *alle netten Leute*.)',
    'Greetings are Accusative: **Guten** Tag (masculine) but **Gute** Nacht (feminine) and **Frohes** Fest (neuter).',
    'In letters: *Liebe Anna* (feminine), *Lieber Paul* (masculine), *Liebe Eltern* (plural).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-09-adjective-endings-no-article-ex01',
      prompt: 'Complete: "Ich trinke gern ___ Kaffee." (schwarz)',
      options: ['schwarzen', 'schwarzer', 'schwarze'],
      answer: 0,
      explanation: 'Kaffee is masculine and the object (Accusative). No article, so the adjective takes the den-ending: schwarzen.',
    },
    {
      type: 'fill',
      id: 'a2-09-adjective-endings-no-article-ex02',
      prompt: '___ Tag! (gut)',
      answer: ['Guten'],
      explanation: 'Tag is masculine and the greeting is Accusative (ich wünsche einen guten Tag): Guten Tag.',
    },
    {
      type: 'fill',
      id: 'a2-09-adjective-endings-no-article-ex03',
      prompt: '___ Grüße aus Berlin! (lieb)',
      answer: ['Liebe'],
      explanation: 'Grüße is plural; plural Accusative without article takes -e: Liebe Grüße.',
    },
    {
      type: 'fill',
      id: 'a2-09-adjective-endings-no-article-ex04',
      prompt: 'Hier gibt es ___ Wein. (gut)',
      answer: ['guten'],
      explanation: 'es gibt takes the Accusative. Wein is masculine → -en: guten Wein.',
    },
    {
      type: 'match',
      id: 'a2-09-adjective-endings-no-article-ex05',
      prompt: 'Match each greeting with the gender and case of its noun.',
      pairs: [
        ['Guten Morgen!', 'masculine Accusative'],
        ['Gute Nacht!', 'feminine Accusative'],
        ['Frohes Fest!', 'neuter Accusative'],
        ['Schöne Ferien!', 'plural Accusative'],
      ],
      explanation: 'All wishes are Accusative. Morgen is masculine (-en), Nacht feminine (-e), Fest neuter (-es), Ferien plural (-e).',
    },
    {
      type: 'mc',
      id: 'a2-09-adjective-endings-no-article-ex06',
      prompt: 'Complete: "Mit ___ Freunden ist alles leichter." (gut)',
      options: ['gute', 'guten', 'guter'],
      answer: 1,
      explanation: 'mit takes the Dative; Freunden is Dative plural. The ending is -en (like den), and the noun also gets -n.',
    },
    {
      type: 'fill',
      id: 'a2-09-adjective-endings-no-article-ex07',
      prompt: '___ Milch ist gesund. (frisch)',
      answer: ['Frische'],
      explanation: 'Milch is feminine and the subject (Nominative). The die-ending is -e: Frische Milch.',
    },
    {
      type: 'fill',
      id: 'a2-09-adjective-endings-no-article-ex08',
      prompt: 'Wir haben zwei ___ Kinder. (klein)',
      answer: ['kleine'],
      explanation: 'After a number there is no article. Plural Accusative → -e: zwei kleine Kinder.',
    },
    {
      type: 'order',
      id: 'a2-09-adjective-endings-no-article-ex09',
      prompt: 'Build the sentence: "Many young people learn German."',
      words: ['Leute', 'junge', 'Deutsch.', 'Viele', 'lernen'],
      answer: ['Viele junge Leute lernen Deutsch.'],
      explanation: 'viele counts as "no article": junge takes the plural Nominative ending -e, the same as viele itself.',
    },
    {
      type: 'mc',
      id: 'a2-09-adjective-endings-no-article-ex10',
      prompt: 'Complete: "Das ist ___ Brot." (frisch)',
      options: ['frisches', 'frische', 'frischen'],
      answer: 0,
      explanation: 'Brot is neuter, Nominative after ist. The das-ending is -es: frisches Brot.',
    },
    {
      type: 'fill',
      id: 'a2-09-adjective-endings-no-article-ex11',
      prompt: 'Bei ___ Wetter gehen wir spazieren. (schön)',
      answer: ['schönem'],
      explanation: 'bei takes the Dative; Wetter is neuter. The dem-ending moves onto the adjective: schönem Wetter.',
    },
    {
      type: 'translate',
      id: 'a2-09-adjective-endings-no-article-ex12',
      prompt: 'Translate: "I like cold water."',
      answer: ['Ich mag kaltes Wasser.', 'Ich trinke gern kaltes Wasser.'],
      hint: 'kalt = cold, das Wasser = water, mögen = to like',
      explanation: 'Wasser is neuter and uncountable, so no article. Accusative neuter → -es: kaltes Wasser.',
    },
  ],
};

export default topic;
