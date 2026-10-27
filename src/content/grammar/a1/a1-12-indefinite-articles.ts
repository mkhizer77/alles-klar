import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-12-indefinite-articles',
  level: 'A1',
  unit: 2,
  order: 12,
  title: 'Indefinite articles ein / eine and no article',
  germanTerm: 'unbestimmter Artikel',
  tags: ['articles', 'ein', 'eine', 'nouns', 'zero article'],
  summary: 'ein (masculine and neuter) and eine (feminine) mean "a / an"; the plural has no indefinite article, and jobs, nationalities and uncountable things often take no article at all.',
  explanation: `
### Definite or indefinite?

English has two kinds of article: **the** (definite: a specific thing both people know) and **a / an** (indefinite: one of many, or something new in the conversation). German has the same two kinds. The **indefinite article** (*unbestimmter Artikel*) is **ein** or **eine**, depending on the gender of the noun.

- *Das ist **ein** Tisch.* – That is **a** table. (any table)
- *Das ist **der** Tisch.* – That is **the** table. (the one we talked about)

### The forms in the Nominative

| gender | definite | indefinite |
|---|---|---|
| masculine | der Mann | **ein** Mann |
| feminine | die Frau | **eine** Frau |
| neuter | das Kind | **ein** Kind |
| plural | die Kinder | **–** Kinder |

Two things to remember:

1. **Masculine and neuter both take *ein*.** Only the feminine adds **-e**.
2. **There is no plural of *ein*.** English has none either (*a children* is impossible), so this feels natural: *Das sind Kinder.* – Those are children.

### The negative form: kein

*kein* works exactly like *ein* and means *not a / no*: **kein** Mann, **keine** Frau, **kein** Kind. Unlike *ein*, it **does** have a plural: **keine** Kinder. The negation topic goes into detail.

### When German uses no article

German drops the article in several places where English keeps *a*. These are worth learning as a group, because English speakers tend to put *ein* everywhere.

| situation | German | English |
|---|---|---|
| **jobs** after sein / werden | Ich bin Lehrer. Sie wird Ärztin. | I am **a** teacher. She is becoming **a** doctor. |
| **nationality** | Er ist Italiener. | He is **an** Italian. |
| **religion, role** | Sie ist Studentin. Er ist Vegetarier. | She is **a** student. He is **a** vegetarian. |
| **uncountable things** | Ich trinke Wasser. Hast du Zeit? | I drink water. Do you have time? |
| **plural, general** | Ich habe Kinder. Wir brauchen Stühle. | I have children. We need chairs. |
| **after Hunger / Durst** | Ich habe Hunger. | I am hungry. |

So **Ich bin ein Lehrer** is not wrong, but it sounds like a translation. Germans say **Ich bin Lehrer**. If there is an adjective, the article comes back: *Ich bin **ein guter** Lehrer.*

### ein as the number one

*ein* also means *one*. *Ich habe **ein** Kind* can mean *I have a child* or *I have one child*. In speech you stress it when you mean the number: *Ich habe EIN Kind, nicht zwei.*

### Why it matters

*ein / eine* is the form you use when you introduce something new: *Ich habe ein Problem. Da ist eine Bäckerei.* Together with *der / die / das* it carries the gender through the sentence, and its endings reappear in *kein* and in all the possessive words (*mein, dein, sein …*), which follow exactly the same pattern. Learn *ein / eine / ein* now and you have already learned *mein / meine / mein*.
`,
  examples: [
    { de: 'Das ist ein Tisch.', en: 'That is a table. (masculine → ein)' },
    { de: 'Das ist eine Lampe.', en: 'That is a lamp. (feminine → eine)' },
    { de: 'Das ist ein Buch.', en: 'That is a book. (neuter → ein)' },
    { de: 'Das sind Bücher.', en: 'Those are books. (plural: no article)' },
    { de: 'Ich bin Ingenieurin.', en: 'I am an engineer. (job: no article in German)' },
    { de: 'Er ist Franzose.', en: 'He is French / a Frenchman. (nationality: no article)' },
    { de: 'Ich trinke gern Tee.', en: 'I like drinking tea. (uncountable: no article)' },
    { de: 'Ich habe ein Problem.', en: 'I have a problem. (introducing something new)' },
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
