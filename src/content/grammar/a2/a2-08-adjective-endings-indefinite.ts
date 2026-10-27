import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-08-adjective-endings-indefinite',
  level: 'A2',
  unit: 3,
  order: 8,
  title: 'Adjective endings after ein / kein / mein',
  germanTerm: 'Adjektivdeklination (unbestimmt)',
  tags: ['adjectives', 'adjective endings', 'declension', 'cases', 'indefinite article', 'possessives'],
  summary: 'After ein, kein and the possessives (mein, dein …) the adjective shows the gender where the article cannot: -er for masculine, -es for neuter, -e for feminine in the Nominative; otherwise -en, like after der.',
  explanation: `
### What it is

After the definite article the adjective only needs **-e** or **-en**, because *der / die / das* already tell you the gender. The **indefinite article** *ein* is less helpful: *ein Mann* and *ein Kind* look the same. So in exactly those places the **adjective** steps in and shows the gender itself.

This group of words is called the **ein-words** (*ein-Wörter*): **ein**, **kein**, and all the possessive articles **mein, dein, sein, ihr, unser, euer, Ihr**.

### How it works: the full table

| | masculine | feminine | neuter | plural (kein / mein) |
|---|---|---|---|---|
| Nominative | ein alt**er** Mann | eine alt**e** Frau | ein alt**es** Haus | keine alt**en** Leute |
| Accusative | einen alt**en** Mann | eine alt**e** Frau | ein alt**es** Haus | keine alt**en** Leute |
| Dative | einem alt**en** Mann | einer alt**en** Frau | einem alt**en** Haus | keinen alt**en** Leuten |
| Genitive | eines alt**en** Mannes | einer alt**en** Frau | eines alt**en** Hauses | keiner alt**en** Leute |

Compare this with the *der*-table and you will see that only **three cells** are different:

| | after der / die / das | after ein / kein / mein |
|---|---|---|
| Nominative masculine | der alt**e** Mann | ein alt**er** Mann |
| Nominative neuter | das alt**e** Haus | ein alt**es** Haus |
| Accusative neuter | das alt**e** Haus | ein alt**es** Haus |

Why these three? Because here *ein* has **no ending** (*ein*, not *einer* or *eines*). The adjective takes the ending the definite article would have had: *d**er*** → alt**er**, *d**as*** → alt**es**. Everywhere else *ein* does have an ending (*eine, einen, einem, einer*), so the adjective behaves exactly as after *der*: **-e** for feminine Nominative / Accusative, **-en** for everything else.

### Plural: only with kein and the possessives

*ein* has no plural. But *kein* and the possessives do, and there the rule is easy: **always -en**.

- kein**e** gut**en** Ideen – *no good ideas*
- mein**e** alt**en** Freunde – *my old friends*
- mit unser**en** neu**en** Nachbarn – *with our new neighbours*

### The rule in one line

Does the ein-word have an ending? **Yes** → adjective gets **-e** (feminine Nom / Acc) or **-en** (all the rest). **No** (*ein, kein, mein* without ending) → adjective shows the gender: **-er** (masculine) or **-es** (neuter).

### Why it matters

*Ein* and the possessives are the articles you use most when you describe things for the first time: *Ich habe ein neues Auto*, *Das ist mein bester Freund*, *Sie hat eine kleine Wohnung*. The three special cells (*-er, -es, -es*) are the ones learners get wrong most often, so practise them until *ein neues Auto* and *ein guter Film* come automatically.
`,
  examples: [
    { de: 'Das ist ein netter Mann.', en: 'That is a nice man. (Nominative masculine: -er, because ein has no ending)' },
    { de: 'Ich habe ein neues Auto.', en: 'I have a new car. (Accusative neuter: -es)' },
    { de: 'Sie hat eine kleine Katze.', en: 'She has a small cat. (feminine: -e)' },
    { de: 'Ich kaufe einen großen Tisch.', en: 'I am buying a big table. (Accusative masculine: -en)' },
    { de: 'Er wohnt in einem alten Haus.', en: 'He lives in an old house. (Dative: -en)' },
    { de: 'Das ist mein bester Freund.', en: 'That is my best friend. (mein works like ein: -er)' },
    { de: 'Ich habe keine guten Ideen.', en: 'I have no good ideas. (plural: -en)' },
  ],
  connections: [
    { topicId: 'a2-07-adjective-endings-definite', note: 'The base table; this topic changes only three cells of it.' },
    { topicId: 'a1-12-indefinite-articles', note: 'The forms of ein / eine / ein and when there is no article.' },
    { topicId: 'a1-21-possessive-articles', note: 'mein, dein, sein … are ein-words and take exactly these adjective endings.' },
    { topicId: 'a1-13-negation', note: 'kein is an ein-word too, and it is the one with a plural.' },
    { topicId: 'a2-09-adjective-endings-no-article', note: 'With no article at all the adjective carries the full ending.' },
  ],
  edgeCases: [
    'The three special forms are **ein alter Mann**, **ein altes Haus** (Nominative) and **ein altes Haus** (Accusative). All other cells match the *der*-table.',
    '**eine** always has an ending, so the feminine is never special: *eine alte Frau* in both Nominative and Accusative.',
    'Possessives follow *ein*, not *der*: *mein neuer Chef* (not *mein neue Chef*), *unser kleines Haus*.',
    '**unser** and **euer** are ein-words even though they end in -er: *unser alter Hund* (Nominative), *euer neues Auto*.',
    'The plural of the ein-words is always **-en**: *keine neuen Schuhe, meine alten Bücher*, also in the Nominative.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-08-adjective-endings-indefinite-ex01',
      prompt: 'Complete: "Das ist ein ___ Mann." (nett)',
      options: ['netter', 'nette', 'netten'],
      answer: 0,
      explanation: 'Nominative masculine after ein: ein has no ending, so the adjective shows the masculine with -er.',
    },
    {
      type: 'fill',
      id: 'a2-08-adjective-endings-indefinite-ex02',
      prompt: 'Ich habe ein ___ Auto. (neu)',
      answer: ['neues'],
      explanation: 'Auto is neuter; Accusative neuter after ein takes -es: ein neues Auto.',
    },
    {
      type: 'fill',
      id: 'a2-08-adjective-endings-indefinite-ex03',
      prompt: 'Sie hat eine ___ Katze. (klein)',
      answer: ['kleine'],
      explanation: 'eine already has an ending, so the adjective takes the plain -e: eine kleine Katze.',
    },
    {
      type: 'fill',
      id: 'a2-08-adjective-endings-indefinite-ex04',
      prompt: 'Ich kaufe einen ___ Tisch. (groß)',
      answer: ['großen'],
      explanation: 'Accusative masculine: einen shows the case, so the adjective takes -en, just as after den.',
    },
    {
      type: 'mc',
      id: 'a2-08-adjective-endings-indefinite-ex05',
      prompt: 'Complete: "Er wohnt in einem ___ Haus." (alt)',
      options: ['altes', 'alten', 'alter'],
      answer: 1,
      explanation: 'in + location is Dative (einem). Every Dative adjective ends in -en.',
    },
    {
      type: 'match',
      id: 'a2-08-adjective-endings-indefinite-ex06',
      prompt: 'Match each phrase with the ending the adjective needs.',
      pairs: [
        ['ein ___ Mann (Nominative)', '-er'],
        ['ein ___ Kind (Nominative)', '-es'],
        ['eine ___ Frau (Nominative)', '-e'],
        ['einen ___ Mann (Accusative)', '-en'],
      ],
      explanation: 'Where ein has no ending (masculine and neuter Nominative) the adjective shows the gender: -er / -es. Otherwise -e or -en.',
    },
    {
      type: 'fill',
      id: 'a2-08-adjective-endings-indefinite-ex07',
      prompt: 'Das ist mein ___ Bruder. (klein)',
      answer: ['kleiner'],
      explanation: 'mein is an ein-word. Nominative masculine with no ending on mein → adjective takes -er.',
    },
    {
      type: 'fill',
      id: 'a2-08-adjective-endings-indefinite-ex08',
      prompt: 'Ich habe keine ___ Freunde hier. (gut)',
      answer: ['guten'],
      explanation: 'Freunde is plural. After keine (plural) the adjective is always -en.',
    },
    {
      type: 'order',
      id: 'a2-08-adjective-endings-indefinite-ex09',
      prompt: 'Build the sentence: "She has a new bicycle."',
      words: ['neues', 'hat', 'Sie', 'Fahrrad.', 'ein'],
      answer: ['Sie hat ein neues Fahrrad.'],
      explanation: 'Fahrrad is neuter and the object: ein neues Fahrrad (Accusative neuter → -es).',
    },
    {
      type: 'mc',
      id: 'a2-08-adjective-endings-indefinite-ex10',
      prompt: 'Complete: "Ich spreche mit meiner ___ Schwester." (alt)',
      options: ['alten', 'alte', 'alter'],
      answer: 0,
      explanation: 'mit takes the Dative: meiner. All Dative adjectives end in -en: meiner alten Schwester.',
    },
    {
      type: 'fill',
      id: 'a2-08-adjective-endings-indefinite-ex11',
      prompt: 'Das ist ein ___ Film. (gut)',
      answer: ['guter'],
      explanation: 'Film is masculine, Nominative after ist. ein has no ending, so the adjective takes -er: ein guter Film.',
    },
    {
      type: 'translate',
      id: 'a2-08-adjective-endings-indefinite-ex12',
      prompt: 'Translate: "He has a small dog."',
      answer: ['Er hat einen kleinen Hund.'],
      hint: 'der Hund = dog, klein = small',
      explanation: 'Hund is masculine and the direct object: einen kleinen Hund (Accusative masculine → -en).',
    },
  ],
};

export default topic;
