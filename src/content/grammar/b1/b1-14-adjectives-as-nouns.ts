import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-14-adjectives-as-nouns',
  level: 'B1',
  unit: 6,
  order: 19,
  title: 'Adjectives used as nouns (der Deutsche, etwas Neues)',
  germanTerm: 'substantivierte Adjektive',
  tags: ['adjectives', 'nouns', 'declension', 'cases'],
  summary: 'An adjective can become a noun (der Deutsche, die Angestellte, etwas Neues); it is written with a capital letter but keeps its adjective endings.',
  steps: [
    {
      title: 'An adjective can become a noun',
      text: `
German can turn almost any adjective into a noun: *deutsch* → **der Deutsche** (the German man), *neu* → **etwas Neues** (something new). These are **adjectives used as nouns** (*substantivierte Adjektive*). You need them to name people by a quality (a German, an adult, an employee) and to say "something new".

Two rules cover everything: write them with a **capital letter**, and keep the **adjective ending**, as if the noun (*Mann, Frau, Leute*) were still there.
`,
      examples: [
        { de: 'Er ist Deutscher.', en: 'He is German. (like ein deutscher Mann, without Mann)' },
        { de: 'Ich habe etwas Neues gekauft.', en: 'I bought something new.' },
        { de: 'Die Erwachsenen sitzen am Tisch.', en: 'The adults are sitting at the table. (like die erwachsenen Leute)' },
      ],
    },
    {
      title: 'People: the ending follows the article',
      text: `
*Der Deutsche* is really *der deutsche (Mann)*, so the ending changes with the article and the case, as at A2.

| | masculine | feminine | plural |
|---|---|---|---|
| Nominative | der Deutsch**e**, ein Deutsch**er** | die Deutsch**e** | die Deutsch**en**, Deutsch**e** |
| Accusative | den Deutsch**en**, einen Deutsch**en** | die Deutsch**e** | die Deutsch**en**, Deutsch**e** |
| Dative | dem Deutsch**en**, einem Deutsch**en** | der Deutsch**en** | den Deutsch**en**, Deutsch**en** |

Two forms trip people up: *Er ist **Deutscher*** (no article → -er) but *Sie ist **Deutsche*** (feminine → -e).
`,
      examples: [
        { de: 'Sie ist Deutsche.', en: 'She is German. (feminine: -e)' },
        { de: 'Ich kenne den Deutschen nicht.', en: 'I do not know the German. (den → -en)' },
        { de: 'Viele Deutsche fahren im Sommer nach Italien.', en: 'Many Germans go to Italy in summer. (plural, no article: -e)' },
      ],
    },
    {
      title: 'Common people words of this type',
      text: `
These everyday nouns are all built the same way, from an adjective or a participle. Each one has a masculine form (*der*), a feminine form (*die*) and the usual endings.

| adjective | as a noun |
|---|---|
| bekannt | der / die Bekannte (acquaintance) |
| verwandt | der / die Verwandte (relative) |
| erwachsen | der / die Erwachsene (adult) |
| jugendlich | der / die Jugendliche (young person) |
| angestellt | der / die Angestellte (employee) |
| krank | der / die Kranke (sick person) |
`,
      examples: [
        { de: 'Ich habe einen alten Bekannten getroffen.', en: 'I met an old acquaintance. (einen … -en, like einen alten Mann)' },
        { de: 'Die Jugendlichen treffen sich im Park.', en: 'The young people meet in the park. (plural after die: -en)' },
        { de: 'Wir helfen einem Verwandten.', en: 'We are helping a relative. (Dative after einem: -en)' },
      ],
    },
    {
      title: 'Things: etwas Neues, alles Gute',
      text: `
After **etwas, nichts, viel, wenig** and **alles**, an adjective becomes a **neuter** noun for a thing or an idea.

| after | ending | examples |
|---|---|---|
| etwas, nichts, viel, wenig | **-es** | etwas Neu**es**, nichts Besonder**es**, viel Gut**es** |
| alles | **-e** | alles Gut**e**, alles Möglich**e** |
`,
      examples: [
        { de: 'Es gibt nichts Besonderes zu berichten.', en: 'There is nothing special to report. (nichts + -es)' },
        { de: 'Ich wünsche dir alles Gute!', en: 'All the best! (alles + -e)' },
        { de: 'Wir haben viel Interessantes gesehen.', en: 'We saw a lot of interesting things. (viel + -es)' },
      ],
    },
    {
      title: 'das Beste, was …',
      text: `
With **das** the neuter form names an idea or a superlative: **das Gute**, **das Beste**, **das Schönste**, **das Wichtigste**. It never refers to a person.

When a relative clause follows, the pronoun is **was**, not *das*: *das Beste, **was** ich je gegessen habe*.
`,
      examples: [
        { de: 'Das Wichtigste ist die Gesundheit.', en: 'The most important thing is health. (das + -e)' },
        { de: 'Das ist das Beste, was ich je gegessen habe.', en: 'That is the best thing I have ever eaten. (relative pronoun was)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-07-adjective-endings-definite', note: 'der Deutsche / den Deutschen use the endings after der / die / das.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'ein Deutscher / einen Deutschen use the endings after ein / kein / mein.' },
    { topicId: 'a2-09-adjective-endings-no-article', note: 'Deutsche (plural) and Er ist Deutscher follow the no-article pattern.' },
    { topicId: 'b1-13-n-declension', note: 'der Kollege / den Kollegen looks similar but is a real noun with the n-declension, not an adjective.' },
    { topicId: 'b1-05-relative-clauses-prepositions', note: 'das Beste, was … : neuter adjective-nouns take was as relative pronoun.' },
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
      prompt: 'Wir helfen einem ___. (verwandt-, a relative, man)',
      answer: ['Verwandten'],
      explanation: 'helfen + Dative, einem + masculine → -en: einem Verwandten (like einem verwandten Mann).',
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
