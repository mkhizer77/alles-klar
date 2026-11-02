import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-08-adjective-endings-indefinite',
  level: 'A2',
  unit: 3,
  order: 9,
  title: 'Adjective endings after ein / kein / mein',
  germanTerm: 'Adjektivdeklination (unbestimmt)',
  tags: ['adjectives', 'adjective endings', 'declension', 'cases', 'indefinite article', 'possessives'],
  summary: 'After ein, kein and the possessives the adjective shows the gender where the article cannot: ein alter Mann, ein altes Haus. Everywhere else it is -e or -en, as after der.',
  steps: [
    {
      title: 'ein cannot show the gender',
      text: `
After *der, die, das* the adjective only needs **-e** or **-en**, because the article already shows the gender. **ein** cannot do that: *ein Mann* and *ein Kind* look the same. So after *ein* the **adjective** shows the gender itself: *ein alt**er** Mann, ein alt**es** Kind*.

The words that behave like *ein* are the **ein-words**: **ein, kein** and the possessives **mein, dein, sein, ihr, unser, euer, Ihr**.
`,
      examples: [
        { de: 'Das ist ein netter Mann.', en: 'That is a nice man. (-er shows masculine)' },
        { de: 'Das ist ein kleines Kind.', en: 'That is a small child. (-es shows neuter)' },
        { de: 'Das ist mein bester Freund.', en: 'That is my best friend. (mein works like ein)' },
      ],
    },
    {
      title: 'Nominative: -er, -e, -es',
      text: `
In the **Nominative** (the subject case) the adjective takes the ending the definite article would have had: *d**er*** → **-er**, *d**as*** → **-es**. The feminine *eine* already has an ending, so the adjective takes the plain **-e**, as after *die*.
`,
      examples: [
        { de: 'Ein guter Film läuft heute.', en: 'A good film is on today. (masculine: -er)' },
        { de: 'Eine kleine Katze sitzt dort.', en: 'A small cat is sitting there. (feminine: -e)' },
        { de: 'Ein neues Auto steht draußen.', en: 'A new car is outside. (neuter: -es)' },
      ],
    },
    {
      title: 'Accusative: einen -en, eine -e, ein -es',
      text: `
In the **Accusative** (the case of the direct object) the masculine article becomes *einen*. It now has an ending, so the adjective takes **-en**, just as after *den*. Feminine *eine* keeps **-e**. Neuter *ein* does not change, so the adjective still shows the gender with **-es**.
`,
      examples: [
        { de: 'Ich kaufe einen großen Tisch.', en: 'I am buying a big table. (einen → -en)' },
        { de: 'Sie hat eine kleine Katze.', en: 'She has a small cat. (eine → -e)' },
        { de: 'Ich habe ein neues Auto.', en: 'I have a new car. (ein → -es)' },
      ],
    },
    {
      title: 'Dative: always -en',
      text: `
In the **Dative** every ein-word has an ending: *einem, einer, einem*. So the adjective is always **-en**. The whole table, ein-word plus ending:

| | masculine | feminine | neuter |
|---|---|---|---|
| Nominative | ein -er | eine -e | ein -es |
| Accusative | einen -en | eine -e | ein -es |
| Dative | einem -en | einer -en | einem -en |

Only **three cells** differ from the *der*-table: the three where *ein* has no ending.
`,
      examples: [
        { de: 'Er wohnt in einem alten Haus.', en: 'He lives in an old house. (Dative neuter: -en)' },
        { de: 'Ich spreche mit meiner alten Schwester.', en: 'I am talking to my older sister. (Dative feminine: -en)' },
        { de: 'Sie hilft einem kleinen Kind.', en: 'She helps a small child. (Dative: -en)' },
      ],
    },
    {
      title: 'Plural: always -en',
      text: `
*ein* has no plural, but **kein** and the possessives do. There the rule is easy: in the plural the adjective is always **-en**, in every case, also in the Nominative.
`,
      examples: [
        { de: 'Ich habe keine guten Ideen.', en: 'I have no good ideas. (plural: -en)' },
        { de: 'Meine alten Freunde kommen heute.', en: 'My old friends are coming today. (Nominative plural: -en)' },
        { de: 'Wir wohnen bei unseren neuen Nachbarn.', en: 'We are staying with our new neighbours. (Dative plural: -en)' },
      ],
    },
    {
      title: 'The rule in one line',
      text: `
Ask one question: **does the ein-word have an ending?** Yes (*eine, einen, einem, einer, keine, meine* …) → the adjective takes **-e** (feminine Nominative and Accusative) or **-en** (everything else). No (*ein, kein, mein, unser* …) → the adjective shows the gender: **-er** for masculine, **-es** for neuter.
`,
      examples: [
        { de: 'Das ist ein guter Film.', en: 'That is a good film. (ein has no ending → -er)' },
        { de: 'Das ist unser kleines Haus.', en: 'That is our small house. (unser has no ending → -es)' },
        { de: 'Das ist eine gute Idee.', en: 'That is a good idea. (eine has an ending → -e)' },
        { de: 'Ich kenne einen guten Arzt.', en: 'I know a good doctor. (einen has an ending → -en)' },
      ],
    },
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
    'You may see the Genitive (*eines alten Mannes*): the adjective takes **-en** there too, so nothing new to learn.',
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
