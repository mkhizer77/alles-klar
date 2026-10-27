import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-22-accusative-prepositions',
  level: 'A1',
  unit: 4,
  order: 22,
  title: 'Accusative prepositions: durch, für, gegen, ohne, um',
  germanTerm: 'Präpositionen mit Akkusativ',
  tags: ['prepositions', 'accusative', 'cases'],
  summary: 'Five short prepositions – durch, für, gegen, ohne, um – are always followed by the Accusative, whatever the sentence is about.',
  explanation: `
### What it is

A **preposition** (*Präposition*) is a small word like *for*, *through* or *without* that connects a noun to the rest of the sentence. In German every preposition "demands" a case: the noun after it must stand in that case. Some demand the Accusative, some the Dative, and a few can take either.

This topic covers the five prepositions that **always** take the **Accusative**:

| preposition | meaning | example |
|---|---|---|
| **durch** | through | Wir gehen **durch den** Park. |
| **für** | for | Das Geschenk ist **für meinen** Bruder. |
| **gegen** | against, around (time) | Er spielt **gegen einen** Freund. / **gegen** acht Uhr |
| **ohne** | without | Ich trinke Kaffee **ohne** Zucker. |
| **um** | around, at (clock time) | Wir sitzen **um den** Tisch. / **um** neun Uhr |

Many learners remember them with the made-up word **DOGFU** (durch, ohne, gegen, für, um). The order does not matter; the point is that the list is short and fixed.

### How it works

After one of these five words, the article changes exactly as it does for a direct object. Only the masculine shows it:

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| für + the | für **den** Mann | für die Frau | für das Kind | für die Kinder |
| für + a | für **einen** Mann | für eine Frau | für ein Kind | für – Kinder |
| für + my | für **meinen** Mann | für meine Frau | für mein Kind | für meine Kinder |

So the only thing you really have to watch is **masculine**: *für den Chef*, *ohne meinen Bruder*, *durch einen Tunnel*, *gegen den Wind*.

Pronouns after these prepositions are also Accusative: *für mich*, *ohne dich*, *gegen ihn* (see the next topic).

### Contractions

In everyday German, **das** merges with some of these prepositions:

- durch + das → **durchs** (durchs Fenster)
- für + das → **fürs** (fürs Kind)
- um + das → **ums** (ums Haus)

These are normal in speech and informal writing. The full form is never wrong.

### Meanings worth knowing

- **um** has two jobs: place (*um die Ecke* – around the corner) and clock time (*um 8 Uhr* – at 8 o'clock). With the time, there is no article.
- **gegen** also means "approximately" with times: *gegen 8 Uhr* – around 8.
- **für** covers the English "for" in most senses: *für dich* (for you), *für zwei Wochen* (for two weeks), *Danke für die Hilfe*.
- **ohne** is often used with no article at all: *ohne Zucker*, *ohne Auto*, *ohne Hilfe*.
- **bis** (until, as far as) also takes the Accusative, but usually without an article (*bis morgen*, *bis Berlin*), so it rarely shows.

### Why it matters

Prepositions are everywhere. Knowing which case each one takes is the main reason German articles change in the middle of a sentence. The five Accusative prepositions are the easiest group: no exceptions, no choice to make. Learn them as a block now, and the Dative group (*aus, bei, mit, nach, seit, von, zu*) in the next unit becomes a clean contrast.
`,
  examples: [
    { de: 'Das ist ein Geschenk für dich.', en: 'This is a present for you. (für + Accusative pronoun)' },
    { de: 'Wir fahren durch die Stadt.', en: 'We drive through the city. (feminine, no visible change)' },
    { de: 'Er kommt ohne seinen Bruder.', en: 'He is coming without his brother. (masculine: seinen)' },
    { de: 'Das Auto fährt gegen den Baum.', en: 'The car drives into the tree. (der → den)' },
    { de: 'Der Film beginnt um 20 Uhr.', en: 'The film starts at 8 pm. (um + clock time)' },
    { de: 'Sie laufen um den See.', en: 'They run around the lake. (um + place)' },
    { de: 'Ich bin gegen acht Uhr zu Hause.', en: 'I am home around eight. (gegen = approximately)' },
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
