import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-10-comparative-superlative',
  level: 'A2',
  unit: 3,
  order: 11,
  title: 'Comparative and superlative in full',
  germanTerm: 'Komparativ, Superlativ',
  tags: ['adjectives', 'comparison', 'comparative', 'superlative', 'als', 'wie'],
  summary: 'The comparative adds -er (often with an umlaut: älter), the superlative adds -(e)st- (am ältesten / der älteste), and both take normal adjective endings when they stand before a noun.',
  steps: [
    {
      title: 'Three forms of an adjective',
      text: `
To compare you need three forms: the **basic form** (*Positiv*), the **comparative** (*Komparativ*: faster) and the **superlative** (*Superlativ*: fastest).

German builds both with **endings**, even for long adjectives. There is no *more / most*: *interessant**er*** (more interesting), *am interessant**esten*** (most interesting), never *mehr interessant*.
`,
      examples: [
        { de: 'Das Auto ist schnell.', en: 'The car is fast. (basic form)' },
        { de: 'Der Zug ist schneller.', en: 'The train is faster. (comparative: -er)' },
        { de: 'Das Flugzeug ist am schnellsten.', en: 'The plane is the fastest. (superlative: am -sten)' },
      ],
    },
    {
      title: 'The comparative: -er, often with umlaut',
      text: `
Add **-er**. Short adjectives with **a, o, u** often take an umlaut. Adjectives in *-el* or *-er* drop the *e*: *teuer → teur**er***, *dunkel → dunkl**er***.

| basic | comparative | basic | comparative |
|---|---|---|---|
| alt | **älter** | klein | kleiner |
| groß | **größer** | schnell | schneller |
| jung | **jünger** | billig | billiger |
| lang | **länger** | schön | schöner |
| kurz | **kürzer** | teuer | **teurer** |
| warm | **wärmer** | dunkel | **dunkler** |
`,
      examples: [
        { de: 'Mein Bruder ist älter.', en: 'My brother is older. (alt → älter, with umlaut)' },
        { de: 'Dieses Hotel ist billiger.', en: 'This hotel is cheaper. (no umlaut)' },
        { de: 'Das Kleid ist teurer.', en: 'The dress is more expensive. (teuer → teurer)' },
      ],
    },
    {
      title: 'als and so … wie',
      text: `
To compare two things use the comparative + **als** (than): *größer **als***. To say two things are equal use **so … wie** (as … as) with the basic form: ***so** groß **wie***.

After *als* and *wie* the pronoun stays in the Nominative: *älter als **ich***.
`,
      examples: [
        { de: 'Berlin ist größer als Bonn.', en: 'Berlin is bigger than Bonn. (comparative + als)' },
        { de: 'Er ist so groß wie sein Vater.', en: 'He is as tall as his father. (so … wie)' },
        { de: 'Mein Bruder ist älter als ich.', en: 'My brother is older than me. (als + ich)' },
      ],
    },
    {
      title: 'The superlative after the verb: am -sten',
      text: `
After the verb, or to say how someone does something, the superlative is **am + adjective + -sten**: *Dieses Auto ist **am teuersten**.* The umlaut stays: *am ältesten*.

After **-t, -d, -s, -z, -ß, -sch** add **-est** so you can say it: *am ält**est**en, am heiß**est**en*. Exception: *groß → am größten*.
`,
      examples: [
        { de: 'Dieses Auto ist am teuersten.', en: 'This car is the most expensive. (am -sten)' },
        { de: 'Sie läuft am schnellsten.', en: 'She runs the fastest. (how she runs)' },
        { de: 'Im Juli ist es am heißesten.', en: 'In July it is hottest. (-est after ß)' },
        { de: 'Mein Opa ist am ältesten.', en: 'My grandpa is the oldest. (-est after t, umlaut)' },
      ],
    },
    {
      title: 'Before a noun: normal adjective endings',
      text: `
In front of a noun the superlative is **der / die / das + -ste**, and the comparative keeps its **-er**. Both then take the **normal adjective endings** on top: *der schnell**ste** Zug*, *in der größt**en** Stadt*, *ein größer**es** Haus*, *mein älter**er** Bruder*.

*am -sten* is never used before a noun.
`,
      examples: [
        { de: 'Das ist der schnellste Zug.', en: 'That is the fastest train. (der + -ste + -e)' },
        { de: 'Er wohnt in der größten Stadt.', en: 'He lives in the biggest city. (Dative: -en)' },
        { de: 'Wir haben ein größeres Haus gekauft.', en: 'We bought a bigger house. (comparative + ein-word ending -es)' },
        { de: 'Das ist mein älterer Bruder.', en: 'That is my older brother. (mein + masculine: -er)' },
      ],
    },
    {
      title: 'Five irregular ones',
      text: `
Five common adjectives change their form. Learn them as a set:

| basic | comparative | superlative |
|---|---|---|
| gut | besser | am besten |
| viel | mehr | am meisten |
| gern | lieber | am liebsten |
| hoch | höher | am höchsten |
| nah | näher | am nächsten |

*hoch* loses its *c* in *höher* and gets it back in *am höchsten*.
`,
      examples: [
        { de: 'Dieser Film ist besser als der andere.', en: 'This film is better than the other one. (gut → besser)' },
        { de: 'Ich trinke lieber Tee, am liebsten grünen Tee.', en: 'I prefer tea, and like green tea best of all. (gern → lieber → am liebsten)' },
        { de: 'Die Zugspitze ist am höchsten.', en: 'The Zugspitze is the highest. (hoch → am höchsten)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-35-comparative-basics', note: 'The A1 introduction to comparatives and als / wie; this topic completes the picture.' },
    { topicId: 'a1-19-gern-lieber', note: 'gern – lieber – am liebsten is the irregular comparison you already know.' },
    { topicId: 'a2-07-adjective-endings-definite', note: 'Superlatives before a noun take the adjective endings from this table.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'Comparatives after ein / mein take the ein-word endings.' },
  ],
  edgeCases: [
    'Never use **mehr** to build a comparative: *mehr interessant* ✗ → *interessanter* ✓. mehr is only the comparative of viel.',
    '**als** after a comparative, **wie** for equality: *größer als*, *so groß wie*. *größer wie* is heard in some regions but is not standard.',
    'Not every adjective takes an umlaut: *froh → froher, klar → klarer, bunt → bunter, langsam → langsamer*. Learn the common umlaut ones (alt, groß, jung, lang, kurz, warm, kalt, stark, hoch, nah).',
    '**am -sten** is only used after the verb or as an adverb. Before a noun you need the article: *der größte Mann*, not *am größten Mann*.',
    '**hoch** → **höher** (loses the c) → **am höchsten** (gets it back).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-10-comparative-superlative-ex01',
      prompt: 'What is the comparative of "alt"?',
      options: ['älter', 'alter', 'mehr alt'],
      answer: 0,
      explanation: 'Add -er and an umlaut: älter. German never uses mehr + adjective for the comparative.',
    },
    {
      type: 'fill',
      id: 'a2-10-comparative-superlative-ex02',
      prompt: 'Mein Bruder ist ___ als ich. (jung)',
      answer: ['jünger'],
      explanation: 'jung takes an umlaut in the comparative: jünger. Comparison with als.',
    },
    {
      type: 'fill',
      id: 'a2-10-comparative-superlative-ex03',
      prompt: 'Dieses Auto ist am ___. (teuer)',
      answer: ['teuersten'],
      explanation: 'Superlative after the verb: am + adjective + -sten. teuer keeps its e here: am teuersten.',
    },
    {
      type: 'match',
      id: 'a2-10-comparative-superlative-ex04',
      prompt: 'Match each adjective with its irregular superlative.',
      pairs: [
        ['gut', 'am besten'],
        ['viel', 'am meisten'],
        ['gern', 'am liebsten'],
        ['hoch', 'am höchsten'],
        ['nah', 'am nächsten'],
      ],
      explanation: 'These five are irregular and must be learned: gut – besser – am besten, viel – mehr – am meisten, gern – lieber – am liebsten, hoch – höher – am höchsten, nah – näher – am nächsten.',
    },
    {
      type: 'mc',
      id: 'a2-10-comparative-superlative-ex05',
      prompt: 'Complete: "Berlin ist ___ als Bonn."',
      options: ['größer', 'großer', 'am größten'],
      answer: 0,
      explanation: 'als needs a comparative: größer (with umlaut). am größten is the superlative and does not go with als.',
    },
    {
      type: 'fill',
      id: 'a2-10-comparative-superlative-ex06',
      prompt: 'Er ist so groß ___ sein Vater. (as)',
      answer: ['wie'],
      explanation: 'Equality uses so … wie. als is only for the comparative (größer als).',
    },
    {
      type: 'fill',
      id: 'a2-10-comparative-superlative-ex07',
      prompt: 'Der Winter ist die ___ Jahreszeit. (kalt)',
      answer: ['kälteste'],
      explanation: 'Superlative before a noun: kalt → kält-est- (extra -e- after -t) + adjective ending -e after die.',
    },
    {
      type: 'mc',
      id: 'a2-10-comparative-superlative-ex08',
      prompt: 'Complete: "Ich habe ein ___ Haus gekauft." (groß, comparative)',
      options: ['größeres', 'größer', 'größere'],
      answer: 0,
      explanation: 'Before a noun the comparative takes an adjective ending: ein + neuter Accusative → -es: ein größeres Haus.',
    },
    {
      type: 'order',
      id: 'a2-10-comparative-superlative-ex09',
      prompt: 'Build the sentence: "My brother is older than me."',
      words: ['älter', 'Bruder', 'ich.', 'Mein', 'als', 'ist'],
      answer: ['Mein Bruder ist älter als ich.'],
      explanation: 'Subject, verb, comparative, then als + the thing compared. After als the pronoun stays Nominative (ich).',
    },
    {
      type: 'fill',
      id: 'a2-10-comparative-superlative-ex10',
      prompt: 'Das ist der ___ Tag des Jahres. (heiß)',
      answer: ['heißeste'],
      explanation: 'heiß ends in -ß, so the superlative adds -est: heißest- + -e after der: der heißeste Tag.',
    },
    {
      type: 'translate',
      id: 'a2-10-comparative-superlative-ex11',
      prompt: 'Translate: "She runs the fastest."',
      answer: ['Sie läuft am schnellsten.'],
      hint: 'laufen = to run, schnell = fast',
      explanation: 'The superlative as an adverb (describing how she runs) uses am + -sten: am schnellsten.',
    },
    {
      type: 'mc',
      id: 'a2-10-comparative-superlative-ex12',
      prompt: 'Which sentence is NOT standard German?',
      options: ['Er ist größer wie ich.', 'Er ist größer als ich.', 'Er ist so groß wie ich.'],
      answer: 0,
      explanation: 'After a comparative you need als. größer wie is common in some dialects but is not standard German.',
    },
  ],
};

export default topic;
