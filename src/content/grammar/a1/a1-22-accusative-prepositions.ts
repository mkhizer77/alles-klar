import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-22-accusative-prepositions',
  level: 'A1',
  unit: 4,
  order: 26,
  title: 'Accusative prepositions: durch, für, gegen, ohne, um',
  germanTerm: 'Präpositionen mit Akkusativ',
  tags: ['prepositions', 'accusative', 'cases'],
  summary: 'Five short prepositions – durch, für, gegen, ohne, um – are always followed by the Accusative, whatever the sentence is about.',
  steps: [
    {
      title: 'Five prepositions that always take the Accusative',
      text: `
A **preposition** (*Präposition*) is a small word like *for*, *through* or *without*. In German every preposition demands a case for the noun after it. These five **always** demand the **Accusative**:

| preposition | meaning |
|---|---|
| **durch** | through |
| **für** | for |
| **gegen** | against |
| **ohne** | without |
| **um** | around |

Many learners remember them as **DOGFU** (durch, ohne, gegen, für, um). The list is short and never changes.
`,
      examples: [
        { de: 'Das ist ein Geschenk für dich.', en: 'This is a present for you.' },
        { de: 'Wir fahren durch die Stadt.', en: 'We drive through the city.' },
        { de: 'Ich trinke Kaffee ohne Zucker.', en: 'I drink coffee without sugar.' },
      ],
    },
    {
      title: 'Only the masculine shows it',
      text: `
After these five words the article changes exactly as it does for a direct object. Only the masculine is visible: **den**, **einen**, **meinen**. Feminine, neuter and plural look the same as in the Nominative.

| | masculine | feminine | neuter |
|---|---|---|---|
| für + the | für **den** Mann | für die Frau | für das Kind |
| für + a | für **einen** Mann | für eine Frau | für ein Kind |
| für + my | für **meinen** Mann | für meine Frau | für mein Kind |
`,
      examples: [
        { de: 'Das Auto fährt gegen den Baum.', en: 'The car drives into the tree. (der → den)' },
        { de: 'Er kommt ohne seinen Bruder.', en: 'He is coming without his brother. (sein → seinen)' },
        { de: 'Wir gehen durch einen Tunnel.', en: 'We walk through a tunnel. (ein → einen)' },
        { de: 'Die Blumen sind für die Kinder.', en: 'The flowers are for the children. (plural: no change)' },
      ],
    },
    {
      title: 'um and gegen with clock times',
      text: `
**um** has two jobs: a place (*um die Ecke* – around the corner) and a clock time (*um 8 Uhr* – at 8 o'clock). With a time there is no article.

**gegen** also means "approximately" with a time: *gegen 8 Uhr* – around eight.
`,
      examples: [
        { de: 'Sie laufen um den See.', en: 'They run around the lake. (um + place)' },
        { de: 'Der Film beginnt um 20 Uhr.', en: 'The film starts at 8 pm. (um + clock time, no article)' },
        { de: 'Ich bin gegen acht Uhr zu Hause.', en: 'I am home around eight. (gegen = approximately)' },
      ],
    },
    {
      title: 'The short forms durchs, fürs, ums',
      text: `
In everyday German **das** merges with three of these prepositions: durch + das → **durchs**, für + das → **fürs**, um + das → **ums**. These are normal in speech and informal writing. The full form is never wrong. *Die* and *den* never merge.
`,
      examples: [
        { de: 'Der Ball fliegt durchs Fenster.', en: 'The ball flies through the window. (durch das)' },
        { de: 'Das Spielzeug ist fürs Kind.', en: 'The toy is for the child. (für das)' },
        { de: 'Wir gehen ums Haus.', en: 'We walk around the house. (um das)' },
      ],
    },
    {
      title: 'ohne often has no article',
      text: `
**ohne** is very often used with no article at all: *ohne Zucker*, *ohne Auto*, *ohne Hilfe*. When you do add an article, it is Accusative like always: *ohne **den** Schlüssel*.

Pronouns after these prepositions are also Accusative: *für mich*, *ohne dich*. You will meet those forms in the next topic.
`,
      examples: [
        { de: 'Ich trinke Tee ohne Milch.', en: 'I drink tea without milk. (no article)' },
        { de: 'Er kommt heute ohne Auto.', en: 'He is coming without a car today. (no article)' },
        { de: 'Ich gehe nicht ohne den Schlüssel.', en: 'I am not going without the key. (with article: den)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-20-accusative', note: 'The article after these prepositions changes exactly like a direct object: der → den.' },
    { topicId: 'a1-23-accusative-pronouns', note: 'Pronouns after durch, für, gegen, ohne, um are Accusative: für mich, ohne dich.' },
    { topicId: 'a1-25-dative-prepositions', note: 'The contrasting group aus, bei, mit, nach, seit, von, zu always takes the Dative.' },
    { topicId: 'a1-28-time-prepositions', note: 'um with clock times (um 8 Uhr) is explained with the other time prepositions.' },
  ],
  edgeCases: [
    'These five prepositions are **always** Accusative. There is no "Dative when it is a place" rule for them; that rule belongs to the two-way prepositions (an, auf, in …).',
    '**um** with a time has no article: *um 8 Uhr*, never *um die 8 Uhr*. With a place it does: *um **den** Tisch*.',
    'Do not translate *for* as *für* in every case. "I have been here for two years" is *Ich bin **seit** zwei Jahren hier*, with seit, not für.',
    '**ohne** usually takes no article: *ohne Zucker*, *ohne Jacke*. When you do add one, it is Accusative: *ohne **den** Schlüssel*.',
    'The contractions *durchs, fürs, ums* only work with **das**. *für die* and *für den* never contract.',
    '**bis** (until, as far as) also takes the Accusative, but usually with no article: *bis morgen*, *bis Berlin*. So the case rarely shows.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-22-accusative-prepositions-ex01',
      prompt: 'Which of these is NOT an Accusative preposition?',
      options: ['für', 'ohne', 'mit', 'durch'],
      answer: 2,
      explanation: 'mit always takes the Dative. durch, für, gegen, ohne and um are the Accusative five.',
    },
    {
      type: 'fill',
      id: 'a1-22-accusative-prepositions-ex02',
      prompt: 'Das Geschenk ist für ___ Vater. (my)',
      answer: ['meinen'],
      explanation: 'für takes the Accusative. Vater is masculine, so mein becomes meinen.',
    },
    {
      type: 'fill',
      id: 'a1-22-accusative-prepositions-ex03',
      prompt: 'Wir gehen durch ___ Wald. (the)',
      answer: ['den'],
      explanation: 'durch takes the Accusative. Wald is masculine: der → den.',
    },
    {
      type: 'match',
      id: 'a1-22-accusative-prepositions-ex04',
      prompt: 'Match each preposition with its main meaning.',
      pairs: [
        ['durch', 'through'],
        ['für', 'for'],
        ['gegen', 'against'],
        ['ohne', 'without'],
        ['um', 'around'],
      ],
      explanation: 'These five meanings cover most uses. um and gegen are also used with clock times.',
    },
    {
      type: 'mc',
      id: 'a1-22-accusative-prepositions-ex05',
      prompt: 'Complete: "Ich trinke den Tee ___ Milch."',
      options: ['ohne', 'um', 'gegen'],
      answer: 0,
      explanation: 'ohne = without. Milch is used here with no article, which is normal after ohne.',
    },
    {
      type: 'fill',
      id: 'a1-22-accusative-prepositions-ex06',
      prompt: 'Der Zug fährt ___ 7 Uhr. (at)',
      answer: ['um'],
      explanation: 'Clock times take um: um 7 Uhr. No article is used.',
    },
    {
      type: 'order',
      id: 'a1-22-accusative-prepositions-ex07',
      prompt: 'Build the sentence: "He is coming without his sister."',
      words: ['kommt', 'Schwester.', 'ohne', 'Er', 'seine'],
      answer: ['Er kommt ohne seine Schwester.'],
      explanation: 'ohne + Accusative. Schwester is feminine, so seine shows no change.',
    },
    {
      type: 'mc',
      id: 'a1-22-accusative-prepositions-ex08',
      prompt: 'Which contraction is correct?',
      options: ['für + die = fürs', 'für + das = fürs', 'für + den = fürs'],
      answer: 1,
      explanation: 'Only das contracts: fürs = für das. die and den never merge with für.',
    },
    {
      type: 'fill',
      id: 'a1-22-accusative-prepositions-ex09',
      prompt: 'Die Kinder laufen um ___ Tisch. (the)',
      answer: ['den'],
      explanation: 'um with a place takes the Accusative. Tisch is masculine: den Tisch.',
    },
    {
      type: 'fill',
      id: 'a1-22-accusative-prepositions-ex10',
      prompt: 'Bist du für oder ___ den Plan? (against)',
      answer: ['gegen'],
      explanation: 'gegen = against. Both für and gegen take the Accusative den Plan.',
    },
    {
      type: 'translate',
      id: 'a1-22-accusative-prepositions-ex11',
      prompt: 'Translate: "The flowers are for the teacher." (teacher = male)',
      answer: ['Die Blumen sind für den Lehrer.'],
      hint: 'die Blumen = flowers, der Lehrer = teacher',
      explanation: 'für + Accusative. Lehrer is masculine, so der becomes den.',
    },
  ],
};

export default topic;
