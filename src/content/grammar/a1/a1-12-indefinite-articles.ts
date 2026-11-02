import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-12-indefinite-articles',
  level: 'A1',
  unit: 2,
  order: 13,
  title: 'Indefinite articles ein / eine and no article',
  germanTerm: 'unbestimmter Artikel',
  tags: ['articles', 'ein', 'eine', 'nouns', 'zero article'],
  summary: 'ein (masculine and neuter) and eine (feminine) mean "a / an"; the plural has no indefinite article, and jobs, nationalities and uncountable things often take no article at all.',
  steps: [
    {
      title: 'ein and eine mean "a"',
      text: `
English has two kinds of article: **the** (a specific thing both people know) and **a / an** (one of many, or something new in the conversation). German has the same two kinds.

The word for *a* is the **indefinite article** (*unbestimmter Artikel*): **ein** or **eine**, depending on the gender of the noun.
`,
      examples: [
        { de: 'Das ist ein Tisch.', en: 'That is a table. (any table)' },
        { de: 'Das ist der Tisch.', en: 'That is the table. (the one we talked about)' },
        { de: 'Ich habe ein Problem.', en: 'I have a problem. (something new)' },
      ],
    },
    {
      title: 'Only the feminine adds -e',
      text: `
| gender | the | a |
|---|---|---|
| masculine | der Mann | **ein** Mann |
| feminine | die Frau | **eine** Frau |
| neuter | das Kind | **ein** Kind |

Masculine and neuter both take **ein**. Only the feminine adds **-e**: **eine**.
`,
      examples: [
        { de: 'Das ist ein Tisch.', en: 'That is a table. (masculine → ein)' },
        { de: 'Das ist eine Lampe.', en: 'That is a lamp. (feminine → eine)' },
        { de: 'Das ist ein Buch.', en: 'That is a book. (neuter → ein)' },
      ],
    },
    {
      title: 'There is no plural of ein',
      text: `
**ein** has no plural form. English has none either (*a children* is impossible), so this feels natural. In the plural the noun stands alone: *Das sind Kinder.*
`,
      examples: [
        { de: 'Das sind Bücher.', en: 'Those are books. (plural: no article)' },
        { de: 'Ich habe Kinder.', en: 'I have children.' },
        { de: 'Wir brauchen Stühle.', en: 'We need chairs.' },
      ],
    },
    {
      title: 'kein: the negative twin',
      text: `
**kein** means *not a / no*. It works exactly like *ein* and takes the same endings: **kein** Mann, **keine** Frau, **kein** Kind. Unlike *ein*, it **does** have a plural: **keine** Kinder. The negation topic goes into detail.
`,
      examples: [
        { de: 'Ich habe kein Auto.', en: 'I do not have a car. (ein → kein)' },
        { de: 'Sie hat keine Schwester.', en: 'She has no sister. (eine → keine)' },
        { de: 'Wir haben keine Kinder.', en: 'We have no children. (plural: keine)' },
      ],
    },
    {
      title: 'No article for jobs and nationalities',
      text: `
After **sein** and **werden**, German drops the article for **jobs**, **nationalities** and **roles** where English keeps *a*. *Ich bin ein Lehrer* is understood, but it sounds like a translation. Germans say **Ich bin Lehrer**.

With an adjective the article comes back: *Ich bin **ein guter** Lehrer.*
`,
      examples: [
        { de: 'Ich bin Ingenieurin.', en: 'I am an engineer. (job: no article)' },
        { de: 'Er ist Franzose.', en: 'He is French. (nationality: no article)' },
        { de: 'Sie ist Studentin.', en: 'She is a student. (role: no article)' },
        { de: 'Er ist ein guter Lehrer.', en: 'He is a good teacher. (with an adjective: article back)' },
      ],
    },
    {
      title: 'No article for uncountable things',
      text: `
Things you cannot count (*Wasser, Zeit, Geld, Brot*) take no article, just like in English. The same goes for the fixed phrases **Hunger haben** and **Durst haben** (to be hungry / thirsty).
`,
      examples: [
        { de: 'Ich trinke gern Tee.', en: 'I like drinking tea. (uncountable: no article)' },
        { de: 'Hast du Zeit?', en: 'Do you have time?' },
        { de: 'Ich habe Hunger.', en: 'I am hungry. (fixed phrase: no article)' },
      ],
    },
    {
      title: 'ein also means one',
      text: `
**ein** is also the number *one*. *Ich habe ein Kind* can mean *I have a child* or *I have one child*. When you mean the number, you stress *ein* in speech, or add *nur* (only).
`,
      examples: [
        { de: 'Ich habe nur ein Kind.', en: 'I have only one child. (ein = one)' },
        { de: 'Einen Kaffee, bitte.', en: 'One coffee, please. (ein = one, Accusative after ordering)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-09-gender-articles', note: 'ein / eine / ein follow the same three genders as der / die / das.' },
    { topicId: 'a1-11-nominative', note: 'These are the Nominative forms; after sein you keep ein, not einen.' },
    { topicId: 'a1-13-negation', note: 'kein is the negative twin of ein and has the same endings, plus a plural.' },
    { topicId: 'a1-21-possessive-articles', note: 'mein, dein, sein … take exactly the ein endings.' },
    { topicId: 'a1-20-accusative', note: 'In the Accusative the masculine ein becomes einen.' },
  ],
  edgeCases: [
    '**No plural of ein.** *Das sind eine Kinder* is wrong. Say *Das sind Kinder*. The negative *keine Kinder* does exist.',
    'Jobs and nationalities take **no article**: *Ich bin Arzt*, *Sie ist Deutsche*. Add an article only with an adjective: *Sie ist eine gute Ärztin.*',
    '**ein** can mean *a* or *one*. Context and stress decide: *ein Kind* (a child) vs *EIN Kind* (one child).',
    'Masculine and neuter look the same (*ein*) only in the Nominative. Later the masculine changes (*einen*) and the neuter does not.',
    'Uncountable nouns have no article: *Ich brauche Geld* (I need money), *Wir kaufen Brot* (we buy bread), not *ein Geld*, *ein Brot* (unless you mean one loaf).',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a1-12-indefinite-articles-ex01',
      prompt: 'Das ist ___ Stuhl. (a – der Stuhl)',
      answer: ['ein'],
      explanation: 'Stuhl is masculine. Masculine and neuter take ein.',
    },
    {
      type: 'fill',
      id: 'a1-12-indefinite-articles-ex02',
      prompt: 'Das ist ___ Tasche. (a – die Tasche)',
      answer: ['eine'],
      explanation: 'Tasche is feminine. Only the feminine adds -e: eine.',
    },
    {
      type: 'fill',
      id: 'a1-12-indefinite-articles-ex03',
      prompt: 'Das ist ___ Fenster. (a – das Fenster)',
      answer: ['ein'],
      explanation: 'Fenster is neuter: ein Fenster, the same as the masculine form.',
    },
    {
      type: 'mc',
      id: 'a1-12-indefinite-articles-ex04',
      prompt: 'Which is correct for "Those are children"?',
      options: ['Das sind eine Kinder.', 'Das sind ein Kinder.', 'Das sind Kinder.'],
      answer: 2,
      explanation: 'There is no plural indefinite article. The plural stands alone: Das sind Kinder.',
    },
    {
      type: 'mc',
      id: 'a1-12-indefinite-articles-ex05',
      prompt: 'How does a German speaker usually say "I am a teacher"?',
      options: ['Ich bin ein Lehrer.', 'Ich bin Lehrer.', 'Ich bin der Lehrer.'],
      answer: 1,
      explanation: 'Jobs after sein take no article: Ich bin Lehrer. "Ein Lehrer" is understood but sounds translated.',
    },
    {
      type: 'match',
      id: 'a1-12-indefinite-articles-ex06',
      prompt: 'Match the definite article with the matching indefinite article.',
      pairs: [
        ['der', 'ein'],
        ['die (singular)', 'eine'],
        ['das', 'ein (neuter)'],
        ['die (plural)', 'no article'],
      ],
      explanation: 'der → ein, die → eine, das → ein, plural → nothing.',
    },
    {
      type: 'mc',
      id: 'a1-12-indefinite-articles-ex07',
      prompt: 'Which sentence is natural German?',
      options: ['Ich trinke ein Wasser jeden Tag.', 'Ich trinke Wasser jeden Tag.', 'Ich trinke eine Wasser jeden Tag.'],
      answer: 1,
      explanation: 'Uncountable things like water take no article: Ich trinke Wasser. "Ein Wasser" only means one glass or bottle you order.',
    },
    {
      type: 'mc',
      id: 'a1-12-indefinite-articles-ex08',
      prompt: 'Complete "She is a doctor": "Sie ist ___ Ärztin."',
      options: ['eine', 'ein', 'nothing (no article)'],
      answer: 2,
      explanation: 'No article with a job after sein: Sie ist Ärztin.',
    },
    {
      type: 'order',
      id: 'a1-12-indefinite-articles-ex09',
      prompt: 'Build the sentence: "I have a problem."',
      words: ['Problem.', 'Ich', 'ein', 'habe'],
      answer: ['Ich habe ein Problem.'],
      explanation: 'das Problem is neuter, so ein. The thing is new in the conversation, so indefinite.',
    },
    {
      type: 'translate',
      id: 'a1-12-indefinite-articles-ex10',
      prompt: 'Translate: "That is a lamp."',
      answer: ['Das ist eine Lampe.'],
      hint: 'die Lampe = lamp',
      explanation: 'Lampe is feminine, so the indefinite article is eine. After ist the noun stays in the Nominative.',
    },
    {
      type: 'mc',
      id: 'a1-12-indefinite-articles-ex11',
      prompt: 'In which sentence is an article needed?',
      options: ['Er ist Student.', 'Er ist Spanier.', 'Er ist ___ guter Student.'],
      answer: 2,
      explanation: 'With an adjective the article returns: Er ist ein guter Student. Without the adjective, jobs and nationalities have no article.',
    },
    {
      type: 'translate',
      id: 'a1-12-indefinite-articles-ex12',
      prompt: 'Translate: "I am an engineer." (female speaker)',
      answer: ['Ich bin Ingenieurin.'],
      hint: 'die Ingenieurin = (female) engineer',
      explanation: 'A job after sein takes no article in German. The female form ends in -in.',
    },
  ],
};

export default topic;
