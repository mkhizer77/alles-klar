import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-28-adjective-noun-prepositions',
  level: 'B1',
  unit: 9,
  order: 38,
  title: 'Prepositions with adjectives and nouns (stolz auf, Angst vor)',
  germanTerm: 'Adjektive / Nomen mit Präpositionen',
  tags: ['adjectives', 'nouns', 'prepositions', 'cases', 'vocabulary'],
  summary: 'Like verbs, many adjectives and nouns come with a fixed preposition and case: stolz auf + Akkusativ, Angst vor + Dativ. Learn verb, adjective and noun of one family together.',
  steps: [
    {
      title: 'Not only verbs',
      text: `
You know that verbs can carry a fixed preposition (*warten auf*). **Adjectives** and **nouns** do the same: **stolz auf** (proud of), **Angst vor** (fear of). The preposition is fixed, the case is fixed, and you learn the whole unit.

Adjectives with prepositions mostly stand after **sein**. Nouns with prepositions often sit inside a noun–verb combination: *Angst haben vor*.
`,
      examples: [
        { de: 'Ich bin stolz auf dich.', en: 'I am proud of you. (adjective after sein)' },
        { de: 'Ich habe Angst vor Spinnen.', en: 'I am afraid of spiders. (noun inside Angst haben vor)' },
        { de: 'Bist du zufrieden mit deinem neuen Job?', en: 'Are you happy with your new job?' },
      ],
    },
    {
      title: 'Adjectives with the Accusative: auf, über, für, in',
      text: `
| Preposition + case | Adjectives |
|---|---|
| **auf** + Akk | stolz auf, neugierig auf, gespannt auf, böse auf, wütend auf |
| **über** + Akk | froh über, glücklich über, traurig über, enttäuscht über |
| **für** + Akk | verantwortlich für, bekannt für, dankbar für, typisch für, wichtig für |
| **in** + Akk | verliebt in |

Notice the two feeling groups: **über** for feelings about something that **happened** (*froh, traurig*), **auf** for feelings directed at a **person or a future thing** (*stolz, gespannt*).
`,
      examples: [
        { de: 'Sie ist stolz auf ihre Tochter.', en: 'She is proud of her daughter. (auf + Akk)' },
        { de: 'Wir sind froh über das gute Ergebnis.', en: 'We are glad about the good result. (über + Akk)' },
        { de: 'Er ist verantwortlich für das Projekt.', en: 'He is responsible for the project. (für + Akk)' },
        { de: 'Er ist verliebt in seine Nachbarin.', en: 'He is in love with his neighbour. (in + Akk)' },
      ],
    },
    {
      title: 'Adjectives with the Dative: mit, von, zu',
      text: `
| Preposition + case | Adjectives |
|---|---|
| **an** + Dat | interessiert an |
| **mit** + Dat | zufrieden mit, einverstanden mit, fertig mit, verheiratet mit |
| **von** + Dat | abhängig von, begeistert von, überzeugt von, müde von |
| **zu** + Dat | freundlich zu, nett zu |
| **bei** + Dat | beliebt bei |

**mit** is the block for satisfaction and agreement: *zufrieden mit, einverstanden mit*.
`,
      examples: [
        { de: 'Ich bin sehr interessiert an dieser Stelle.', en: 'I am very interested in this position. (an + Dat)' },
        { de: 'Ich bin mit dem Plan einverstanden.', en: 'I agree with the plan. (mit + Dat)' },
        { de: 'Sie ist von dem Film begeistert.', en: 'She is thrilled by the film. (von + Dat)' },
        { de: 'Sei nett zu deinem Bruder.', en: 'Be nice to your brother. (zu + Dat)' },
      ],
    },
    {
      title: 'Nouns with prepositions',
      text: `
| Preposition + case | Nouns |
|---|---|
| **auf** + Akk | Lust auf, Hoffnung auf, Antwort auf |
| **über** + Akk | Freude über, Ärger über, Diskussion über |
| **für** + Akk | Grund für, Verantwortung für, Dank für |
| **um** + Akk | Bitte um, Sorge um, Bewerbung um |
| **an** + Dat | Interesse an, Teilnahme an |
| **vor, nach** + Dat | Angst vor; Frage nach, Suche nach |

All are **die** except *der Grund, der Ärger, der Dank, das Interesse*.
`,
      examples: [
        { de: 'Hast du Lust auf ein Eis?', en: 'Do you feel like an ice cream? (Lust auf + Akk)' },
        { de: 'Die Antwort auf deine Frage ist Nein.', en: 'The answer to your question is no. (Antwort auf + Akk)' },
        { de: 'Der Grund für meine Absage ist eine Krankheit.', en: 'The reason for my cancellation is an illness. (Grund für + Akk)' },
        { de: 'Die Suche nach einer Wohnung dauert lange.', en: 'The search for a flat takes a long time. (Suche nach + Dat)' },
      ],
    },
    {
      title: 'Same family, same preposition, usually',
      text: `
Often the verb, the adjective and the noun of one family share the preposition, so learn them together: *hoffen **auf*** / *die Hoffnung **auf***; *Angst haben **vor*** / *die Angst **vor***; *sich ärgern **über*** / *der Ärger **über***.

One **trap**: *sich interessieren **für***, but *interessiert **an*** and *das Interesse **an***. The family changes preposition.
`,
      examples: [
        { de: 'Ich hoffe auf gutes Wetter.', en: 'I hope for good weather. (verb: hoffen auf)' },
        { de: 'Die Hoffnung auf gutes Wetter ist groß.', en: 'The hope for good weather is great. (noun: Hoffnung auf)' },
        { de: 'Sie interessiert sich für Kunst.', en: 'She is interested in art. (verb: für)' },
        { de: 'Sie hat großes Interesse an Kunst.', en: 'She has a great interest in art. (noun: an)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-27-verb-preposition-b1', note: 'The verb list is the base; adjectives and nouns of the same family often share the preposition.' },
    { topicId: 'a2-12-verbs-with-prepositions', note: 'The idea of a fixed preposition with a fixed case starts here.' },
    { topicId: 'b1-25-noun-verb-combinations', note: 'Angst haben vor, Lust haben auf and Interesse haben an are noun–verb combinations with a preposition.' },
    { topicId: 'a2-13-da-wo-compounds', note: 'With a clause, use a da-compound: Ich bin stolz darauf, dass …' },
    { topicId: 'a1-29-two-way-prepositions', note: 'an, auf, über and in are two-way prepositions; here the adjective or noun fixes the case.' },
  ],
  edgeCases: [
    '**sich interessieren für**, but **interessiert an** and **Interesse an**. The family changes preposition.',
    '**über** with adjectives of feeling is always Accusative: *traurig über **den** Verlust*.',
    '**enttäuscht** takes both *von* (a person: *enttäuscht von dir*) and *über* (a thing: *enttäuscht über das Ergebnis*).',
    '**nett zu** and **freundlich zu** take the Dative: *Sei nett **zu** deinem Bruder* (be nice to your brother).',
    'With a clause instead of a noun, use the da-compound: *Ich bin stolz **darauf**, dass du die Prüfung bestanden hast.*',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'b1-28-adjective-noun-prepositions-ex01',
      prompt: 'Sie ist stolz ___ ihre Tochter. (of)',
      answer: ['auf'],
      explanation: 'stolz auf + Akkusativ. English "of" is no help here; the fixed preposition is auf.',
    },
    {
      type: 'fill',
      id: 'b1-28-adjective-noun-prepositions-ex02',
      prompt: 'Ich habe Angst ___ Spinnen. (of)',
      answer: ['vor'],
      explanation: 'Angst vor + Dativ. Spinnen is Dative plural (no article).',
    },
    {
      type: 'mc',
      id: 'b1-28-adjective-noun-prepositions-ex03',
      prompt: 'Complete: "Bist du zufrieden ___ deinem neuen Job?"',
      options: ['mit', 'von', 'über'],
      answer: 0,
      explanation: 'zufrieden mit + Dativ. The Dative deinem neuen Job confirms it.',
    },
    {
      type: 'mc',
      id: 'b1-28-adjective-noun-prepositions-ex04',
      prompt: 'Complete: "Er ist verliebt ___ Nachbarin."',
      options: ['in seine', 'in seiner', 'in seinen'],
      answer: 0,
      explanation: 'verliebt in takes the Accusative. Nachbarin is feminine, so the Accusative is seine.',
    },
    {
      type: 'match',
      id: 'b1-28-adjective-noun-prepositions-ex05',
      prompt: 'Match each adjective with its preposition.',
      pairs: [
        ['interessiert', 'an'],
        ['dankbar', 'für'],
        ['begeistert', 'von'],
        ['neugierig', 'auf'],
        ['traurig', 'über'],
        ['einverstanden', 'mit'],
      ],
      explanation: 'interessiert an (Dat), dankbar für (Akk), begeistert von (Dat), neugierig auf (Akk), traurig über (Akk), einverstanden mit (Dat).',
    },
    {
      type: 'fill',
      id: 'b1-28-adjective-noun-prepositions-ex06',
      prompt: 'Hast du Lust ___ ein Eis? (feel like)',
      answer: ['auf'],
      explanation: 'Lust haben auf + Akkusativ = to feel like having something.',
    },
    {
      type: 'mc',
      id: 'b1-28-adjective-noun-prepositions-ex07',
      prompt: 'Complete: "Die Antwort ___ deine Frage ist Nein."',
      options: ['auf', 'an', 'für'],
      answer: 0,
      explanation: 'die Antwort auf + Akkusativ. The verb antworten also takes auf: auf eine Frage antworten.',
    },
    {
      type: 'order',
      id: 'b1-28-adjective-noun-prepositions-ex08',
      prompt: 'Build the sentence: "The teacher is very satisfied with the results."',
      words: ['ist', 'Lehrer', 'Der', 'den', 'mit', 'sehr', 'Ergebnissen', 'zufrieden.'],
      answer: ['Der Lehrer ist mit den Ergebnissen sehr zufrieden.'],
      explanation: 'zufrieden mit + Dativ (den Ergebnissen, Dative plural with -n). The adjective zufrieden goes to the end, after the prepositional phrase and sehr.',
    },
    {
      type: 'translate',
      id: 'b1-28-adjective-noun-prepositions-ex09',
      prompt: 'Translate: "I am proud of you." (use du)',
      answer: ['Ich bin stolz auf dich.'],
      hint: 'stolz auf + Akkusativ',
      explanation: 'stolz auf takes the Accusative, so the pronoun is dich.',
    },
    {
      type: 'mc',
      id: 'b1-28-adjective-noun-prepositions-ex10',
      prompt: 'The verb is "sich interessieren für". Complete the noun: "Ich habe großes Interesse ___ dieser Stelle."',
      options: ['an', 'für', 'auf'],
      answer: 0,
      explanation: 'A classic trap: the verb takes für, but the noun Interesse and the adjective interessiert take an + Dativ.',
    },
    {
      type: 'fill',
      id: 'b1-28-adjective-noun-prepositions-ex11',
      prompt: 'Der Grund ___ meine Absage ist eine Krankheit. (for)',
      answer: ['für'],
      explanation: 'der Grund für + Akkusativ = the reason for. The Accusative meine Absage confirms it.',
    },
    {
      type: 'mc',
      id: 'b1-28-adjective-noun-prepositions-ex12',
      prompt: 'Which sentence is correct?',
      options: [
        'Er ist verantwortlich für das Projekt.',
        'Er ist verantwortlich über das Projekt.',
        'Er ist verantwortlich mit dem Projekt.',
      ],
      answer: 0,
      explanation: 'verantwortlich für + Akkusativ. The noun die Verantwortung also takes für.',
    },
  ],
};

export default topic;
