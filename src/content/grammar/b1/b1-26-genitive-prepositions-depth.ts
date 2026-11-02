import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-26-genitive-prepositions-depth',
  level: 'B1',
  unit: 9,
  order: 36,
  title: 'Genitive prepositions in depth: innerhalb, außerhalb, aufgrund, mithilfe',
  germanTerm: 'Präpositionen mit Genitiv',
  tags: ['prepositions', 'genitive', 'cases', 'formal style'],
  summary: 'wegen, trotz, während and statt take the Genitive; B1 adds the formal innerhalb (within), außerhalb (outside), aufgrund (because of) and mithilfe (with the help of). No article? Use von + Dative.',
  steps: [
    {
      title: 'A short phrase instead of a clause',
      text: `
These prepositions pack a reason, a time limit or a place into a short phrase: **wegen des Regens** instead of *weil es regnet*. You meet them in official letters, deadlines and news.

In A2 you learned **wegen, trotz, während, statt**. B1 adds a few more that belong to **written, formal German**. All of them take the **Genitive** (*Genitiv*, the "of" case).
`,
      examples: [
        { de: 'Wegen des Regens bleiben wir zu Hause.', en: 'Because of the rain we stay at home.' },
        { de: 'Bitte antworten Sie innerhalb einer Woche.', en: 'Please reply within one week.' },
        { de: 'Das Restaurant liegt außerhalb der Stadt.', en: 'The restaurant is outside the city.' },
      ],
    },
    {
      title: 'The Genitive forms, quick reminder',
      text: `
| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| definite | **des** Mann**es** | **der** Frau | **des** Kind**es** | **der** Kinder |
| indefinite | **eines** Mann**es** | **einer** Frau | **eines** Kind**es** | – |
| possessive | **seines** Vater**s** | **seiner** Mutter | **seines** Kind**es** | **seiner** Eltern |

Masculine and neuter nouns add **-s** or **-es** (*-es* after one syllable or after *s, ß, z, tz*). Feminine and plural nouns do not change; only the article shows the case.
`,
      examples: [
        { de: 'Trotz des Regens haben wir das Spiel gewonnen.', en: 'Despite the rain we won the game. (masculine: des + -s)' },
        { de: 'Innerhalb der nächsten Woche bekommen Sie eine Antwort.', en: 'Within the next week you will get an answer. (feminine: der)' },
        { de: 'Trotz seines Alters läuft er jeden Tag.', en: 'Despite his age he runs every day. (possessive: seines + -s)' },
      ],
    },
    {
      title: 'The four new B1 prepositions',
      text: `
| Preposition | Meaning | Example |
|---|---|---|
| **innerhalb** | within, inside (time or place) | innerhalb einer Woche, innerhalb der Stadt |
| **außerhalb** | outside (of) | außerhalb der Öffnungszeiten |
| **aufgrund** | because of (formal) | aufgrund des schlechten Wetters |
| **mithilfe** | with the help of | mithilfe eines Wörterbuchs |

**aufgrund** is the formal twin of *wegen*. **innerhalb** is the word for deadlines. An adjective after them takes the Genitive ending **-en**: *aufgrund des schlecht**en** Wetters*.
`,
      examples: [
        { de: 'Aufgrund des schlechten Wetters wurde das Spiel abgesagt.', en: 'Because of the bad weather the game was cancelled.' },
        { de: 'Mithilfe eines Wörterbuchs habe ich den Text verstanden.', en: 'With the help of a dictionary I understood the text.' },
        { de: 'Innerhalb eines Monats müssen Sie die Rechnung bezahlen.', en: 'Within one month you must pay the invoice.' },
        { de: 'Außerhalb der Öffnungszeiten ist das Büro geschlossen.', en: 'Outside opening hours the office is closed.' },
      ],
    },
    {
      title: 'No article? Use von',
      text: `
If the noun has **no article**, the Genitive cannot be seen, especially in the plural. German then switches to **von + Dative**: *innerhalb **von** drei Tagen*, not *innerhalb drei Tage*.

With an article, keep the Genitive: *innerhalb **der** drei Tage*.
`,
      examples: [
        { de: 'Bitte antworten Sie innerhalb von zwei Wochen.', en: 'Please reply within two weeks. (no article: von + Dative)' },
        { de: 'Mithilfe von Freunden habe ich die Wohnung renoviert.', en: 'With the help of friends I renovated the flat.' },
        { de: 'Aufgrund von Krankheit bleibt die Praxis heute geschlossen.', en: 'Because of illness the practice is closed today.' },
      ],
    },
    {
      title: 'laut, and what people say',
      text: `
**laut** (according to) is a bit different: it usually takes the **Dative** (*laut dem Bericht*), and with a bare noun it takes no ending at all (*laut Zeitung*).

In everyday speech many people use the Dative after *wegen* and *trotz* (*wegen dem Regen*). You will hear it, but in writing and in the exam use the **Genitive**: *wegen des Regens*.
`,
      examples: [
        { de: 'Laut Zeitung kommt der Minister morgen.', en: 'According to the newspaper the minister is coming tomorrow.' },
        { de: 'Laut dem Bericht steigen die Preise weiter.', en: 'According to the report prices keep rising. (laut + Dative)' },
        { de: 'Wegen des Streiks fahren die Züge nicht.', en: 'Because of the strike the trains are not running. (written: Genitive)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-15-genitive-prepositions', note: 'wegen, trotz, während and statt were the first Genitive prepositions; this list extends them.' },
    { topicId: 'a2-14-genitive', note: 'The Genitive article and noun endings are the base for everything here.' },
    { topicId: 'b1-16-adjective-declension-review', note: 'Adjectives after these prepositions take the Genitive ending -en: aufgrund des schlechten Wetters.' },
    { topicId: 'b1-18-cause-consequence-concession', note: 'wegen and aufgrund are the noun-phrase versions of weil; trotz is the noun-phrase version of obwohl.' },
    { topicId: 'b1-31-register-formal-informal', note: 'These prepositions are a hallmark of the formal register.' },
  ],
  edgeCases: [
    'Masculine and neuter nouns need the **-s / -es** ending: *aufgrund des Wetter**s***, *innerhalb des Monat**s***. Forgetting it is the most common error.',
    'No article → **von**: *innerhalb von drei Tagen*. With an article → Genitive: *innerhalb der drei Tage*.',
    '**laut** usually takes the Dative (*laut dem Bericht*); the Genitive (*laut des Berichts*) is also correct. With a bare noun use no ending: *laut Zeitung*.',
    'Spoken **wegen dem Regen** (Dative) is common, but write *wegen des Regens*.',
    '**mithilfe** is one word as a preposition. *mit Hilfe* (two words) is an older spelling that is still accepted.',
    'Office letters and news also use **anlässlich** (on the occasion of), **infolge** (as a result of), **anhand** (using), **bezüglich** (regarding). You only need to understand them.',
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
        ['trotz', 'despite'],
        ['während', 'during'],
      ],
      explanation: 'All six take the Genitive. innerhalb / außerhalb are about place or time, aufgrund about the cause, mithilfe about the means, trotz and während are the A2 ones you already know.',
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
      prompt: 'Trotz ___ Alters läuft er jeden Tag zehn Kilometer. (his)',
      answer: ['seines'],
      explanation: 'Alter is neuter. The possessive in the neuter Genitive is seines, and the noun takes -s: trotz seines Alters.',
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
      explanation: 'laut usually takes the Dative, sometimes the Genitive. Zeitung is feminine, and in both cases the article is der.',
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
