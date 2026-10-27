import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-14-adjectives-as-nouns',
  level: 'B1',
  unit: 6,
  order: 14,
  title: 'Adjectives used as nouns (der Deutsche, etwas Neues)',
  germanTerm: 'substantivierte Adjektive',
  tags: ['adjectives', 'nouns', 'declension', 'cases'],
  summary: 'An adjective can become a noun (der Deutsche, die Angestellte, etwas Neues); it is written with a capital letter but keeps its adjective endings.',
  explanation: `
### What it is

German can turn almost any adjective into a noun: *deutsch* → **der Deutsche** (the German man), *alt* → **die Alte** (the old woman), *neu* → **etwas Neues** (something new). These are **nominalised adjectives** (*substantivierte Adjektive*).

Two rules cover everything:

1. Write them with a **capital letter**, like every noun.
2. They keep their **adjective endings**, as if the real noun (*Mann, Frau, Leute*) were still there.

So *der Deutsche* is really *der deutsche (Mann)*, and *ein Deutscher* is *ein deutscher (Mann)*. The ending changes with the article and the case, exactly as you learned at A2.

### People: masculine, feminine, plural

| | masculine | feminine | plural |
|---|---|---|---|
| Nominative, definite | der Deutsch**e** | die Deutsch**e** | die Deutsch**en** |
| Nominative, indefinite / none | ein Deutsch**er** | eine Deutsch**e** | Deutsch**e** |
| Accusative, definite | den Deutsch**en** | die Deutsch**e** | die Deutsch**en** |
| Accusative, indefinite / none | einen Deutsch**en** | eine Deutsch**e** | Deutsch**e** |
| Dative, definite | dem Deutsch**en** | der Deutsch**en** | den Deutsch**en** |
| Dative, indefinite / none | einem Deutsch**en** | einer Deutsch**en** | Deutsch**en** |

Common nouns of this type, all built the same way:

| adjective / participle | as a noun |
|---|---|
| bekannt | der / die Bekannte (acquaintance) |
| verwandt | der / die Verwandte (relative) |
| erwachsen | der / die Erwachsene (adult) |
| jugendlich | der / die Jugendliche (young person) |
| angestellt | der / die Angestellte (employee) |
| krank | der / die Kranke (sick person) |
| fremd | der / die Fremde (stranger) |
| arbeitslos | der / die Arbeitslose (unemployed person) |
| reisend | der / die Reisende (traveller) |

Watch the two forms that trip people up: *Er ist **Deutscher*** (no article → -er) but *Sie ist **Deutsche*** (feminine → -e).

### Things and ideas: the neuter

After **etwas, nichts, viel, wenig** and **alles**, an adjective becomes a **neuter** noun:

| after | ending | examples |
|---|---|---|
| etwas, nichts, viel, wenig | **-es** | etwas Neu**es**, nichts Besonder**es**, viel Gut**es** |
| alles | **-e** | alles Gut**e**, alles Möglich**e** |

- Ich habe **etwas Neues** gekauft. – *I bought something new.*
- Es gibt **nichts Besonderes** zu berichten. – *There is nothing special to report.*
- Ich wünsche dir **alles Gute**! – *All the best!*

With *das* the neuter is used for abstract ideas and superlatives: **das Gute**, **das Beste**, **das Schönste**, **das Wichtigste**. These take *was* in a relative clause: *das Beste, **was** ich je gegessen habe*.

### Why it matters

You cannot avoid these words: *Deutsche, Erwachsene, Jugendliche, Angestellte, Bekannte, Verwandte* appear in every text about people, and *etwas Neues / nichts Besonderes / alles Gute* in every conversation. The only skill you need is the adjective ending, so this topic is a good moment to check that you have it, before the full review two topics from now.
`,
  examples: [
    { de: 'Er ist Deutscher.', en: 'He is German. (no article, masculine → -er)' },
    { de: 'Sie ist Deutsche.', en: 'She is German. (feminine → -e)' },
    { de: 'Ich habe einen alten Bekannten getroffen.', en: 'I met an old acquaintance. (einen … -en, like einen alten Mann)' },
    { de: 'Die Jugendlichen treffen sich im Park.', en: 'The young people meet in the park. (plural after die → -en)' },
    { de: 'Ich habe etwas Neues gekauft.', en: 'I bought something new. (etwas + -es)' },
    { de: 'Es gibt nichts Besonderes zu berichten.', en: 'There is nothing special to report.' },
    { de: 'Ich wünsche dir alles Gute!', en: 'All the best! (alles + -e)' },
  ],
  connections: [
    { topicId: 'a2-07-adjective-endings-definite', note: 'der Deutsche / den Deutschen use the endings after der / die / das.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'ein Deutscher / einen Deutschen use the endings after ein / kein / mein.' },
    { topicId: 'a2-09-adjective-endings-no-article', note: 'Deutsche (plural) and Er ist Deutscher follow the no-article pattern.' },
    { topicId: 'b1-13-n-declension', note: 'der Kollege / den Kollegen looks similar but is a real noun with the n-declension, not an adjective.' },
    { topicId: 'b1-05-relative-clauses-prepositions', note: 'das Beste, was … : neuter nominalised adjectives take was as relative pronoun.' },
  ],
  edgeCases: [
    'Masculine without article ends in **-er**: *Er ist Deutsch**er***. Feminine ends in **-e**: *Sie ist Deutsch**e***. Do not say *Er ist Deutsche*.',
    'After **etwas / nichts / viel / wenig** the ending is **-es** (*etwas Schönes*), but after **alles** it is **-e** (*alles Gute*).',
    'The ending follows the **article**, not the noun: *ein Bekannt**er*** but *der Bekannt**e***, *mit einem Bekannt**en***.',
    'Nationality: only *der Deutsche* is an adjective-noun. *Der Franzose, der Russe, der Chinese* are n-declension nouns; *der Italiener, der Engländer* are normal nouns.',
    'A neuter adjective-noun refers to an idea, never to a person: *das Gute* (the good thing), *das Neue* (what is new).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-14-adjectives-as-nouns-ex01',
      prompt: 'Complete: "Er ist ___." (He is German.)',
      options: ['Deutscher', 'Deutsche', 'Deutschen'],
      answer: 0,
      explanation: 'Masculine with no article takes the strong ending -er, like ein deutscher Mann without the Mann.',
    },
    {
      type: 'fill',
      id: 'b1-14-adjectives-as-nouns-ex02',
      prompt: 'Sie ist ___. (German, a woman)',
      answer: ['Deutsche'],
      explanation: 'Feminine takes -e: Deutsche (think: eine deutsche Frau).',
    },
    {
      type: 'fill',
      id: 'b1-14-adjectives-as-nouns-ex03',
      prompt: 'Ich habe etwas ___ gekauft. (neu)',
      answer: ['Neues'],
      explanation: 'After etwas the adjective becomes a capitalised neuter noun with -es: etwas Neues.',
    },
    {
      type: 'mc',
      id: 'b1-14-adjectives-as-nouns-ex04',
      prompt: 'Complete: "Ich wünsche dir alles ___!"',
      options: ['Gute', 'Gutes', 'Guten'],
      answer: 0,
      explanation: 'After alles the ending is -e: alles Gute. (After etwas it would be Gutes.)',
    },
    {
      type: 'match',
      id: 'b1-14-adjectives-as-nouns-ex05',
      prompt: 'Match each phrase with the correct form of the adjective-noun.',
      pairs: [
        ['ein ___ (deutsch, man)', 'Deutscher'],
        ['die ___ (angestellt, woman)', 'Angestellte'],
        ['den ___ (krank, man, Accusative)', 'Kranken'],
        ['viele ___ (jugendlich, plural)', 'Jugendliche'],
        ['etwas ___ (schön)', 'Schönes'],
      ],
      explanation: 'ein + masculine → -er; die + feminine → -e; den + masculine → -en; plural without article → -e; etwas → -es.',
    },
    {
      type: 'order',
      id: 'b1-14-adjectives-as-nouns-ex06',
      prompt: 'Build the sentence: "The young people meet in the park."',
      words: ['im', 'Die', 'treffen', 'Park.', 'sich', 'Jugendlichen'],
      answer: ['Die Jugendlichen treffen sich im Park.'],
      explanation: 'Plural after die → Jugendlichen (-en). The reflexive sich comes right after the verb.',
    },
    {
      type: 'fill',
      id: 'b1-14-adjectives-as-nouns-ex07',
      prompt: 'Es gibt nichts ___ zu berichten. (besonder-)',
      answer: ['Besonderes'],
      explanation: 'After nichts: capital letter and -es. nichts Besonderes = nothing special.',
    },
    {
      type: 'mc',
      id: 'b1-14-adjectives-as-nouns-ex08',
      prompt: 'Why does "Die Angestellten bekommen mehr Geld." end in -en?',
      options: ['Plural after die takes -en, like die alten Leute', 'It is the n-declension', 'Angestellte is always written with -en'],
      answer: 0,
      explanation: 'Adjective-nouns follow adjective endings: after die in the plural the ending is -en.',
    },
    {
      type: 'fill',
      id: 'b1-14-adjectives-as-nouns-ex09',
      prompt: 'Wir helfen einem ___. (fremd-, a stranger, man)',
      answer: ['Fremden'],
      explanation: 'helfen + Dative, einem + masculine → -en: einem Fremden (like einem fremden Mann).',
    },
    {
      type: 'translate',
      id: 'b1-14-adjectives-as-nouns-ex10',
      prompt: 'Translate: "I met an old acquaintance." (a man)',
      answer: ['Ich habe einen alten Bekannten getroffen.', 'Ich traf einen alten Bekannten.'],
      hint: 'der Bekannte = acquaintance, treffen (getroffen) = to meet',
      explanation: 'Accusative masculine after einen: both the adjective and the adjective-noun take -en: einen alten Bekannten.',
    },
    {
      type: 'mc',
      id: 'b1-14-adjectives-as-nouns-ex11',
      prompt: 'Which sentence is correct?',
      options: ['Das ist das Beste, was ich je gegessen habe.', 'Das ist das Bestes, was ich je gegessen habe.', 'Das ist das Besten, das ich je gegessen habe.'],
      answer: 0,
      explanation: 'After das the neuter superlative takes -e (das Beste), and it is followed by the relative pronoun was.',
    },
    {
      type: 'fill',
      id: 'b1-14-adjectives-as-nouns-ex12',
      prompt: 'Viele ___ fahren im Sommer nach Italien. (deutsch-, plural, no article)',
      answer: ['Deutsche'],
      explanation: 'Plural without a definite article (after viele) takes -e: viele Deutsche.',
    },
  ],
};

export default topic;
