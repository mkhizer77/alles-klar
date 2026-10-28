import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-09-adjective-endings-no-article',
  level: 'A2',
  unit: 3,
  order: 9,
  title: 'Adjective endings with no article',
  germanTerm: 'Adjektivdeklination (Nullartikel)',
  tags: ['adjectives', 'adjective endings', 'declension', 'cases', 'no article'],
  summary: 'When there is no article at all (guter Wein, frische Milch, liebe Grüße), the adjective takes the ending the definite article would have had, so it shows gender and case by itself.',
  explanation: `
### What it is

Sometimes a noun has **no article** in front of it (*Nullartikel*): uncountable things (*Milch, Wein, Brot*), plurals in general (*Kinder, Freunde*), and set phrases (*Guten Tag!*). If an adjective comes before such a noun, there is nothing else to show the case and gender, so the **adjective does the whole job**. It takes the ending that *der / die / das* would have had.

- gut**er** Wein (like d**er**) – *good wine*
- frisch**e** Milch (like d**ie**) – *fresh milk*
- kalt**es** Wasser (like d**as**) – *cold water*
- klein**e** Kinder (like d**ie**) – *small children*

### How it works: the table

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | gut**er** Wein | gut**e** Milch | gut**es** Brot | gut**e** Freunde |
| Accusative | gut**en** Wein | gut**e** Milch | gut**es** Brot | gut**e** Freunde |
| Dative | gut**em** Wein | gut**er** Milch | gut**em** Brot | gut**en** Freunden |

Compare the endings with the definite articles (*der, die, das, die / den, die, das, die / dem, der, dem, den*) and you will see they match.

At A2 you mostly need the **Nominative and Accusative** rows: greetings, food and drink, plurals. The Dative row is for recognising phrases like *mit guten Freunden* or *bei schönem Wetter*; the endings **-em** and **-er** are simply the article ending (*dem, der*) moved onto the adjective. (You may also see a Genitive like *trotz starken Regens*; that is B1 material.)

### When you need this table

1. **Uncountable nouns** (food, drink, materials): *Ich trinke gern schwarz**en** Kaffee. Hier gibt es frisch**es** Brot.*
2. **Plurals without an article**: *Viel**e** jung**e** Leute lernen Deutsch. Wir haben zwei klein**e** Kinder.* After numbers and after *viele, einige, wenige, andere, mehrere* the adjective also takes these plural endings (*viele gute Freunde*).
3. **Greetings and wishes**, which are mostly in the Accusative because a verb like *Ich wünsche dir …* is hidden:

| phrase | gender / case |
|---|---|
| Gut**en** Morgen! / Gut**en** Tag! / Gut**en** Abend! | masculine Accusative |
| Gut**e** Nacht! / Gut**e** Reise! / Gut**e** Besserung! | feminine Accusative |
| Froh**es** Fest! / Froh**es** neu**es** Jahr! | neuter Accusative |
| Lieb**e** Grüße! / Schön**e** Ferien! / Herzlich**e** Glückwünsche! | plural Accusative |

4. **Letters and emails**: *Lieb**e** Anna, / Lieb**er** Herr Müller, / Lieb**e** Freunde,* (Nominative, no article).

### Why it matters

You use this table every day without noticing: *Guten Tag*, *Liebe Grüße*, *Gute Nacht*. Understanding why it is *Guten Tag* but *Gute Nacht* (masculine vs feminine Accusative) turns a list of fixed phrases into a system. And with uncountable nouns (*kaltes Wasser, frisches Obst, warme Milch*) there is simply no other way to say it.
`,
  examples: [
    { de: 'Ich trinke gern schwarzen Kaffee.', en: 'I like drinking black coffee. (Accusative masculine: -en)' },
    { de: 'Frische Milch ist gesund.', en: 'Fresh milk is healthy. (Nominative feminine: -e)' },
    { de: 'Hier gibt es frisches Brot.', en: 'There is fresh bread here. (Accusative neuter: -es)' },
    { de: 'Viele junge Leute lernen Deutsch.', en: 'Many young people learn German. (plural Nominative: -e)' },
    { de: 'Mit guten Freunden ist alles leichter.', en: 'With good friends everything is easier. (Dative plural: -en, noun also -n)' },
    { de: 'Guten Tag! Gute Nacht! Frohes Fest!', en: 'Good day! Good night! Happy holiday! (masculine / feminine / neuter Accusative)' },
    { de: 'Liebe Grüße aus Berlin!', en: 'Best wishes from Berlin! (plural)' },
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
