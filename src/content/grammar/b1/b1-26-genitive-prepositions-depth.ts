import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-26-genitive-prepositions-depth',
  level: 'B1',
  unit: 9,
  order: 26,
  title: 'Genitive prepositions in depth: innerhalb, außerhalb, aufgrund, mithilfe',
  germanTerm: 'Präpositionen mit Genitiv',
  tags: ['prepositions', 'genitive', 'cases', 'formal style'],
  summary: 'A second, more formal group of prepositions takes the Genitive: innerhalb (within), außerhalb (outside), aufgrund (because of), mithilfe (with the help of) and several others used in written and official German.',
  explanation: `
### Building on A2

In A2 you learned the four everyday Genitive prepositions **wegen, trotz, während, (an)statt**. B1 adds a larger group that is typical of **written, formal German**: news, letters from authorities, contracts and instructions. They all follow the same rule: the noun after them is in the **Genitive** (*Genitiv*).

### Genitive forms – quick reminder

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| definite | **des** Mann**es** | **der** Frau | **des** Kind**es** | **der** Kinder |
| indefinite | **eines** Mann**es** | **einer** Frau | **eines** Kind**es** | – Kinder |
| possessive | **seines** Vater**s** | **seiner** Mutter | **seines** Kind**es** | **seiner** Eltern |

Masculine and neuter nouns add **-s** or **-es** (*-es* after one syllable or after *s, ß, z, tz*). Feminine and plural nouns do not change; only the article shows the case.

### The B1 prepositions

| Preposition | Meaning | Example |
|---|---|---|
| **innerhalb** | within, inside (time or place) | **innerhalb** einer Woche, **innerhalb** der Stadt |
| **außerhalb** | outside (of) | **außerhalb** der Öffnungszeiten |
| **aufgrund** | because of, on the basis of | **aufgrund** des schlechten Wetters |
| **mithilfe** | with the help of | **mithilfe** eines Wörterbuchs |
| **anlässlich** | on the occasion of | **anlässlich** seines Geburtstags |
| **infolge** | as a result of | **infolge** des Unfalls |
| **anhand** | by means of, using | **anhand** eines Beispiels |
| **oberhalb / unterhalb** | above / below | **oberhalb** des Dorfes |
| **diesseits / jenseits** | on this / the other side of | **jenseits** der Grenze |
| **laut** | according to | **laut** des Berichts (also laut + Dativ) |
| **bezüglich / hinsichtlich** | regarding, with respect to | **bezüglich** Ihrer Anfrage |
| **mangels** | for lack of | **mangels** Beweisen |
| **zugunsten** | in favour of | **zugunsten** der Kinder |

*aufgrund* is the formal twin of *wegen*; *infolge* stresses the result. *innerhalb* is useful for deadlines: *innerhalb von zwei Wochen* (within two weeks).

### When there is no article: use von

If the noun has no article and no adjective, the Genitive is often invisible, especially in the plural. German then switches to **von + Dative**:

- innerhalb **von** drei Tagen (not *innerhalb drei Tage*)
- mithilfe **von** Freunden
- aufgrund **von** Krankheit

With an adjective the Genitive is visible again and *von* is not needed: *innerhalb weniger Tage*, *aufgrund schlechter Erfahrungen*.

### Spoken German: the Dative creeps in

In everyday speech, many people use the **Dative** after *wegen*, *trotz* and *laut* (*wegen dem Regen*). This is common and accepted in conversation, but in writing and in the exam, use the Genitive. The newer formal prepositions (*aufgrund, innerhalb, mithilfe*) are almost always used with the Genitive.

### Why it matters

These prepositions let you **compress** a whole clause into a short phrase: *aufgrund des Streiks* instead of *weil es einen Streik gibt*. That is exactly the style of B1 reading texts and of the formal letters you write in the exam. They are also where the Genitive shows up most, so they are the best way to keep your Genitive forms alive.
`,
  examples: [
    { de: 'Innerhalb der nächsten Woche bekommen Sie eine Antwort.', en: 'Within the next week you will receive an answer. (feminine: der)' },
    { de: 'Das Restaurant liegt außerhalb der Stadt.', en: 'The restaurant is outside the city.' },
    { de: 'Aufgrund des schlechten Wetters wurde das Spiel abgesagt.', en: 'Because of the bad weather the game was cancelled. (neuter: des Wetters)' },
    { de: 'Mithilfe eines Wörterbuchs habe ich den Text verstanden.', en: 'With the help of a dictionary I understood the text.' },
    { de: 'Anlässlich seines 50. Geburtstags gab er eine Party.', en: 'On the occasion of his 50th birthday he gave a party.' },
    { de: 'Infolge des Unfalls war die Autobahn gesperrt.', en: 'As a result of the accident the motorway was closed.' },
    { de: 'Bitte antworten Sie innerhalb von zwei Wochen.', en: 'Please reply within two weeks. (no article: von + Dative)' },
  ],
  connections: [
    { topicId: 'a2-15-genitive-prepositions', note: 'wegen, trotz, während and statt were the first Genitive prepositions; this list extends them.' },
    { topicId: 'a2-14-genitive', note: 'The Genitive article and noun endings are the base for everything here.' },
    { topicId: 'b1-16-adjective-declension-review', note: 'Adjectives after these prepositions take Genitive endings: aufgrund schlechter Erfahrungen.' },
    { topicId: 'b1-18-cause-consequence-concession', note: 'aufgrund and infolge are the noun-phrase versions of weil and sodass.' },
    { topicId: 'b1-31-register-formal-informal', note: 'These prepositions are a hallmark of the formal register.' },
  ],
  edgeCases: [
    'Masculine and neuter nouns need the **-s / -es** ending: *aufgrund des Wetter**s***, *innerhalb des Monat**s***. Forgetting it is the most common error.',
    'No article → **von**: *innerhalb von drei Tagen*. With an article → Genitive: *innerhalb der drei Tage*.',
    '*laut* takes the Genitive or the Dative; both are correct: *laut des Berichts* / *laut dem Bericht*. With a bare noun use no ending: *laut Bericht*.',
    'Spoken *wegen dem Regen* (Dative) is common, but write *wegen des Regens*.',
    '*mithilfe* is written as one word as a preposition. *mit Hilfe* (two words) is an older spelling that is still accepted.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'b1-26-genitive-prepositions-depth-ex01',
      prompt: 'Innerhalb ___ nächsten Woche bekommen Sie eine Antwort. (the)',
      answer: ['der'],
      explanation: 'Woche is feminine. The feminine Genitive article is der, and the noun does not change.',
    },
    {
      type: 'fill',
      id: 'b1-26-genitive-prepositions-depth-ex02',
      prompt: 'Aufgrund ___ schlechten Wetters wurde das Spiel abgesagt. (the)',
      answer: ['des'],
      explanation: 'Wetter is neuter. Neuter Genitive: des + noun with -s (Wetters). The adjective takes -en.',
    },
    {
      type: 'mc',
      id: 'b1-26-genitive-prepositions-depth-ex03',
      prompt: 'Complete: "Mithilfe ___ Wörterbuchs habe ich den Text verstanden."',
      options: ['eines', 'einem', 'einen'],
      answer: 0,
      explanation: 'mithilfe takes the Genitive. Wörterbuch is neuter, so the indefinite Genitive article is eines, and the noun takes -s.',
    },
    {
      type: 'match',
      id: 'b1-26-genitive-prepositions-depth-ex04',
      prompt: 'Match each preposition with its meaning.',
      pairs: [
        ['innerhalb', 'within'],
        ['außerhalb', 'outside of'],
        ['aufgrund', 'because of'],
        ['mithilfe', 'with the help of'],
        ['anlässlich', 'on the occasion of'],
        ['infolge', 'as a result of'],
      ],
      explanation: 'All six take the Genitive. innerhalb / außerhalb are about place or time, aufgrund / infolge about cause and result, mithilfe about means, anlässlich about occasions.',
    },
    {
      type: 'mc',
      id: 'b1-26-genitive-prepositions-depth-ex05',
      prompt: 'Complete: "Bitte antworten Sie innerhalb ___ drei Tagen."',
      options: ['von', 'der', 'des'],
      answer: 0,
      explanation: 'drei Tage has no article, so the Genitive cannot be shown. German uses von + Dative instead: innerhalb von drei Tagen.',
    },
    {
      type: 'order',
      id: 'b1-26-genitive-prepositions-depth-ex06',
      prompt: 'Build the sentence: "Despite the rain we won the game."',
      words: ['des', 'Trotz', 'haben', 'Regens', 'das', 'wir', 'gewonnen.', 'Spiel'],
      answer: ['Trotz des Regens haben wir das Spiel gewonnen.'],
      explanation: 'The prepositional phrase Trotz des Regens fills position 1, so the verb haben comes next and the subject wir after it. Regen is masculine: des Regens.',
    },
    {
      type: 'fill',
      id: 'b1-26-genitive-prepositions-depth-ex07',
      prompt: 'Anlässlich ___ 50. Geburtstags gab er eine Party. (his)',
      answer: ['seines'],
      explanation: 'Geburtstag is masculine. The possessive in the masculine Genitive is seines, and the noun takes -s.',
    },
    {
      type: 'mc',
      id: 'b1-26-genitive-prepositions-depth-ex08',
      prompt: 'Which phrase is correct?',
      options: ['außerhalb der Stadt', 'außerhalb die Stadt', 'außerhalb dem Stadt'],
      answer: 0,
      explanation: 'außerhalb takes the Genitive. Stadt is feminine, so the Genitive article is der.',
    },
    {
      type: 'translate',
      id: 'b1-26-genitive-prepositions-depth-ex09',
      prompt: 'Translate: "Because of the strike the trains are not running."',
      answer: [
        'Wegen des Streiks fahren die Züge nicht.',
        'Aufgrund des Streiks fahren die Züge nicht.',
        'Infolge des Streiks fahren die Züge nicht.',
      ],
      hint: 'der Streik (strike); fahren = to run (of trains); wegen / aufgrund + Genitiv',
      explanation: 'Streik is masculine, so the Genitive is des Streiks. The prepositional phrase in position 1 is followed by the verb fahren.',
    },
    {
      type: 'fill',
      id: 'b1-26-genitive-prepositions-depth-ex10',
      prompt: 'Während ___ Vorlesung darf man nicht telefonieren. (the)',
      answer: ['der'],
      explanation: 'während takes the Genitive. Vorlesung is feminine (all -ung nouns are), so the article is der.',
    },
    {
      type: 'mc',
      id: 'b1-26-genitive-prepositions-depth-ex11',
      prompt: 'Complete: "Laut ___ Zeitung kommt der Minister morgen."',
      options: ['der', 'die', 'den'],
      answer: 0,
      explanation: 'laut takes the Genitive or Dative. Zeitung is feminine, and in both cases the article is der.',
    },
    {
      type: 'order',
      id: 'b1-26-genitive-prepositions-depth-ex12',
      prompt: 'Build the sentence: "Within one month you must pay the invoice."',
      words: ['Monats', 'eines', 'Innerhalb', 'Sie', 'müssen', 'Rechnung', 'die', 'bezahlen.'],
      answer: ['Innerhalb eines Monats müssen Sie die Rechnung bezahlen.'],
      explanation: 'Monat is masculine: eines Monats. The phrase takes position 1, so müssen comes next, Sie after it, and the infinitive bezahlen at the end.',
    },
  ],
};

export default topic;
