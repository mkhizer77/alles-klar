import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-28-adjective-noun-prepositions',
  level: 'B1',
  unit: 9,
  order: 28,
  title: 'Prepositions with adjectives and nouns (stolz auf, Angst vor)',
  germanTerm: 'Adjektive / Nomen mit Präpositionen',
  tags: ['adjectives', 'nouns', 'prepositions', 'cases', 'vocabulary'],
  summary: 'Like verbs, many adjectives and nouns come with a fixed preposition and case (stolz auf + Akkusativ, Angst vor + Dativ), and often the noun takes a different preposition from its verb.',
  explanation: `
### Not only verbs

You know that verbs can carry a fixed preposition (*warten auf*). **Adjectives** and **nouns** do the same: *stolz **auf*** (proud of), *Angst **vor*** (fear of). The preposition is fixed, the case is fixed, and you learn the whole unit. Adjectives with prepositions mostly appear after **sein**; nouns with prepositions often sit inside **noun–verb combinations** (*Angst haben vor*).

### Adjectives with prepositions

| Preposition + case | Adjectives |
|---|---|
| **auf** + Akk | stolz auf, neugierig auf, gespannt auf, böse auf, eifersüchtig auf, wütend auf |
| **über** + Akk | froh über, glücklich über, traurig über, erstaunt über, enttäuscht über, verärgert über |
| **für** + Akk | verantwortlich für, bekannt für, dankbar für, typisch für, wichtig für, geeignet für |
| **in** + Akk | verliebt in |
| **an** + Dat | interessiert an, reich an, arm an, schuld an |
| **mit** + Dat | zufrieden mit, einverstanden mit, fertig mit, beschäftigt mit, verheiratet mit |
| **von** + Dat | abhängig von, begeistert von, überzeugt von, müde von, enttäuscht von |
| **zu** + Dat | freundlich zu, nett zu, fähig zu, bereit zu |
| **bei** + Dat | beliebt bei |
| **nach** + Dat | verrückt nach, süchtig nach |

Notice the big groups: **über** for feelings about something that happened (*froh, traurig, erstaunt*), **auf** for feelings directed at a person or a future thing (*stolz, neugierig, gespannt*), **mit** for satisfaction and agreement (*zufrieden, einverstanden*).

### Nouns with prepositions

| Preposition + case | Nouns |
|---|---|
| **auf** + Akk | die Lust auf, die Hoffnung auf, die Antwort auf, der Einfluss auf, der Stolz auf, die Freude auf |
| **über** + Akk | die Freude über, der Ärger über, die Diskussion über, die Information über |
| **für** + Akk | der Grund für, die Verantwortung für, das Verständnis für, der Dank für |
| **um** + Akk | die Bitte um, die Sorge um, die Bewerbung um |
| **in** + Akk | das Vertrauen in |
| **an** + Dat | das Interesse an, der Zweifel an, die Kritik an, die Teilnahme an, der Mangel an |
| **vor** + Dat | die Angst vor, der Schutz vor, die Warnung vor |
| **nach** + Dat | die Frage nach, die Suche nach, die Sehnsucht nach |
| **mit** + Dat | der Kontakt mit, die Zufriedenheit mit |
| **zu** + Dat | die Liebe zu, die Beziehung zu, die Einladung zu |

### Same family, same preposition – usually

Often the verb, the adjective and the noun share the preposition, which makes learning easier:

| Verb | Adjective | Noun |
|---|---|---|
| sich freuen **auf** | gespannt **auf** | die Freude **auf** |
| hoffen **auf** | – | die Hoffnung **auf** |
| Angst haben **vor** | ängstlich **vor** | die Angst **vor** |
| sich ärgern **über** | verärgert **über** | der Ärger **über** |

But there are **traps** where the family changes preposition:

- sich interessieren **für** → interessiert **an** / das Interesse **an**
- sich bewerben **um** → die Bewerbung **um** (same) but bekannt **für**, nicht *bekannt um*

### Why it matters

Adjectives and nouns with prepositions appear constantly in B1 speaking and writing: *Ich bin zufrieden mit …*, *Ich habe keine Lust auf …*, *Der Grund für … ist …*. Getting the preposition right makes you sound fluent. Learning verb, adjective and noun together as a family is the fastest way to cover all three.
`,
  examples: [
    { de: 'Sie ist stolz auf ihre Tochter.', en: 'She is proud of her daughter. (auf + Akk)' },
    { de: 'Ich habe Angst vor Spinnen.', en: 'I am afraid of spiders. (vor + Dat)' },
    { de: 'Bist du zufrieden mit deinem neuen Job?', en: 'Are you happy with your new job? (mit + Dat)' },
    { de: 'Er ist verliebt in seine Nachbarin.', en: 'He is in love with his neighbour. (in + Akk)' },
    { de: 'Hast du Lust auf ein Eis?', en: 'Do you feel like an ice cream? (Lust auf + Akk)' },
    { de: 'Die Antwort auf deine Frage ist Nein.', en: 'The answer to your question is no. (Antwort auf + Akk)' },
    { de: 'Ich bin sehr interessiert an dieser Stelle.', en: 'I am very interested in this position. (an + Dat, although the verb takes für)' },
    { de: 'Wir sind froh über das gute Ergebnis.', en: 'We are glad about the good result. (über + Akk)' },
  ],
  connections: [
    { topicId: 'b1-27-verb-preposition-b1', note: 'The verb list is the base; adjectives and nouns of the same family often share the preposition.' },
    { topicId: 'a2-12-verbs-with-prepositions', note: 'The idea of a fixed preposition with a fixed case starts here.' },
    { topicId: 'b1-25-noun-verb-combinations', note: 'Angst haben vor, Lust haben auf and Interesse haben an are noun–verb combinations with a preposition.' },
    { topicId: 'a2-13-da-wo-compounds', note: 'With a clause, use a da-compound: Ich bin stolz darauf, dass …' },
    { topicId: 'a1-29-two-way-prepositions', note: 'an, auf, über and in are two-way prepositions; here the adjective or noun fixes the case.' },
  ],
  edgeCases: [
    '*sich interessieren **für***, but *interessiert **an*** and *Interesse **an***. The family changes preposition.',
    '*über* with adjectives of feeling is always **Accusative**: *traurig über **den** Verlust*.',
    '*enttäuscht* takes both *von* (a person: *enttäuscht von dir*) and *über* (a thing: *enttäuscht über das Ergebnis*).',
    '*Vertrauen **in** + Akk* (trust in) and *Vertrauen **zu** + Dat* both exist; *in* is more common for institutions, *zu* for people.',
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
      prompt: 'Sie hat großes Vertrauen ___ ihren Arzt. (in)',
      answer: ['in'],
      explanation: 'Vertrauen in + Akkusativ. The Accusative ihren Arzt shows that the preposition is in.',
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
