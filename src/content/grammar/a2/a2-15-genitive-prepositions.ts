import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-15-genitive-prepositions',
  level: 'A2',
  unit: 5,
  order: 16,
  title: 'Genitive prepositions: wegen, trotz, während, statt',
  germanTerm: 'Präpositionen mit Genitiv',
  tags: ['prepositions', 'Genitive', 'cases', 'wegen', 'trotz', 'während', 'statt'],
  summary: 'The prepositions wegen (because of), trotz (despite), während (during) and statt (instead of) are followed by the Genitive in standard German: wegen des Regens, trotz des Wetters.',
  steps: [
    {
      title: 'wegen: a reason in two words',
      text: `
You know prepositions that take the Accusative (*für, ohne*) and the Dative (*mit, nach*). A small group takes the **Genitive** (the "of" case from the last topic).

The most important one is **wegen** (because of). It gives a reason in two or three words instead of a whole clause: *wegen des Regens* = *weil es regnet*.
`,
      examples: [
        { de: 'Wegen des Regens bleiben wir zu Hause.', en: 'Because of the rain we are staying at home. (des Regens)' },
        { de: 'Wegen der Baustelle ist die Straße gesperrt.', en: 'Because of the roadworks the street is closed.' },
        { de: 'Wegen seiner Krankheit konnte er nicht kommen.', en: "Because of his illness he couldn't come." },
      ],
    },
    {
      title: 'Three more: trotz, während, statt',
      text: `
Three more Genitive prepositions are useful at A2. They add a **contrast**, a **time** or an **alternative** to a sentence, again in just a few words.

| preposition | meaning |
|---|---|
| **trotz** | despite, in spite of |
| **während** | during |
| **statt** (or *anstatt*) | instead of |
`,
      examples: [
        { de: 'Trotz des Wetters gehen wir spazieren.', en: 'Despite the weather we go for a walk. (contrast)' },
        { de: 'Während der Ferien arbeite ich im Café.', en: 'During the holidays I work in the café. (time)' },
        { de: 'Statt einer Pizza nehme ich einen Salat.', en: 'Instead of a pizza I will have a salad. (alternative)' },
      ],
    },
    {
      title: 'The Genitive endings after them',
      text: `
After these prepositions the article and noun take the Genitive forms you know: **des** + noun with **-s / -es** for masculine and neuter, **der** and no change for feminine and plural.

| | example |
|---|---|
| masculine | wegen **des** Sturm**s** |
| feminine | wegen **der** Krankheit |
| neuter | trotz **des** Wetter**s** |
| plural | während **der** Ferien |

*ein, mein, sein …* take the same endings: *statt **eines** Briefes*, *trotz **meines** Fehlers*.
`,
      examples: [
        { de: 'Während des Essens spricht er nicht.', en: "During the meal he doesn't talk. (neuter: des Essens)" },
        { de: 'Trotz seiner Erkältung geht er arbeiten.', en: 'Despite his cold he goes to work. (seiner: feminine)' },
        { de: 'Statt eines Briefes schreibe ich eine E-Mail.', en: 'Instead of a letter I write an email. (eines Briefes)' },
      ],
    },
    {
      title: 'The phrase can start the sentence',
      text: `
A preposition phrase can stand in **position 1** or in the middle of the sentence. If it starts the sentence, the verb comes **right after it** (verb second) and the subject follows the verb. The meaning stays the same.
`,
      examples: [
        { de: 'Trotz des Regens spielen die Kinder draußen.', en: 'Despite the rain the children play outside. (verb second)' },
        { de: 'Die Kinder spielen trotz des Regens draußen.', en: 'The children play outside despite the rain. (same meaning)' },
        { de: 'Während der Arbeit telefoniere ich nicht.', en: 'During work I do not make phone calls.' },
      ],
    },
    {
      title: 'What you hear and see every day',
      text: `
In everyday speech many Germans say *wegen **dem** Regen* (Dative). You will hear it a lot, but in writing and exams the Genitive is correct, so use *wegen des Regens*.

On signs and in short notes the noun often has **no article**: *wegen Umbau geschlossen*. Then there is no Genitive ending to add.
`,
      examples: [
        { de: 'Das Geschäft ist wegen Umbau geschlossen.', en: 'The shop is closed because of renovation. (no article: no ending)' },
        { de: 'Er fehlt heute wegen Krankheit.', en: 'He is absent today because of illness.' },
        { de: 'Wegen des Wetters fällt das Spiel aus.', en: 'Because of the weather the match is cancelled. (standard written form)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-14-genitive', note: 'The Genitive articles and noun endings that these prepositions require.' },
    { topicId: 'a1-22-accusative-prepositions', note: 'Compare: für, ohne, durch always take the Accusative.' },
    { topicId: 'a1-25-dative-prepositions', note: 'Compare: mit, nach, von, zu always take the Dative.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'trotzdem and deshalb say the same as trotz and wegen, but with a whole clause.' },
    { topicId: 'b1-26-genitive-prepositions-depth', note: 'More Genitive prepositions at B1 (innerhalb, außerhalb, aufgrund) and während as a conjunction (while).' },
  ],
  edgeCases: [
    'In writing use the **Genitive**: *wegen des Regens*. *wegen dem Regen* (Dative) is common in speech but not standard.',
    '**trotz** + noun (*trotz des Regens*) vs **trotzdem** + clause (*Es regnet, trotzdem gehen wir*). Do not write *trotzdem des Regens*.',
    'Masculine and neuter nouns need their **-s / -es**: *während des Tag**es***, *wegen des Sturm**s***. Forgetting the noun ending is the most common slip.',
    'A noun with **no article** has no Genitive ending: *wegen Umbau geschlossen*, *wegen Krankheit*. This is very common on signs and in short notes.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-15-genitive-prepositions-ex01',
      prompt: 'Complete: "Wegen ___ Regens bleiben wir zu Hause."',
      options: ['des', 'dem', 'der'],
      answer: 0,
      explanation: 'wegen takes the Genitive. Regen is masculine, so des Regens.',
    },
    {
      type: 'fill',
      id: 'a2-15-genitive-prepositions-ex02',
      prompt: 'Trotz ___ Wetters gehen wir spazieren. (the, neuter)',
      answer: ['des'],
      explanation: 'trotz + Genitive. Wetter is neuter → des Wetters.',
    },
    {
      type: 'fill',
      id: 'a2-15-genitive-prepositions-ex03',
      prompt: 'Während ___ Ferien arbeite ich. (the, plural)',
      answer: ['der'],
      explanation: 'während + Genitive. Plural Genitive is der, and the noun does not change: der Ferien.',
    },
    {
      type: 'match',
      id: 'a2-15-genitive-prepositions-ex04',
      prompt: 'Match each preposition with its meaning.',
      pairs: [
        ['wegen', 'because of'],
        ['trotz', 'despite'],
        ['während', 'during'],
        ['statt', 'instead of'],
      ],
      explanation: 'All four take the Genitive: wegen (reason), trotz (contrast), während (time), statt (alternative).',
    },
    {
      type: 'mc',
      id: 'a2-15-genitive-prepositions-ex05',
      prompt: 'Complete: "Statt ___ Autos kaufe ich ein Fahrrad."',
      options: ['eines', 'einem', 'ein'],
      answer: 0,
      explanation: 'statt + Genitive. Auto is neuter, so the indefinite article is eines and the noun adds -s: eines Autos.',
    },
    {
      type: 'fill',
      id: 'a2-15-genitive-prepositions-ex06',
      prompt: 'Wegen ___ Krankheit konnte er nicht kommen. (his)',
      answer: ['seiner'],
      explanation: 'Krankheit is feminine. Genitive feminine of sein = seiner. The noun stays unchanged.',
    },
    {
      type: 'order',
      id: 'a2-15-genitive-prepositions-ex07',
      prompt: 'Build the sentence: "Despite the rain the children are playing outside."',
      words: ['Regens', 'Kinder', 'Trotz', 'draußen.', 'spielen', 'des', 'die'],
      answer: ['Trotz des Regens spielen die Kinder draußen.'],
      explanation: 'The preposition phrase (Trotz des Regens) is position 1, so the verb spielen comes next, then the subject.',
    },
    {
      type: 'mc',
      id: 'a2-15-genitive-prepositions-ex08',
      prompt: 'Complete: "Während ___ Essens spricht er nicht."',
      options: ['des', 'dem', 'den'],
      answer: 0,
      explanation: 'während + Genitive. das Essen is neuter → des Essens.',
    },
    {
      type: 'fill',
      id: 'a2-15-genitive-prepositions-ex09',
      prompt: 'Wegen des ___ fahren heute keine Züge. (Sturm)',
      answer: ['Sturms', 'Sturmes'],
      explanation: 'Sturm is masculine and needs a Genitive ending. Both Sturms and Sturmes are correct; Sturms is more common.',
    },
    {
      type: 'translate',
      id: 'a2-15-genitive-prepositions-ex10',
      prompt: 'Translate: "despite the rain"',
      answer: ['trotz des Regens'],
      hint: 'der Regen = rain',
      explanation: 'trotz + Genitive masculine: des Regens. Do not forget the -s on the noun.',
    },
    {
      type: 'mc',
      id: 'a2-15-genitive-prepositions-ex11',
      prompt: 'Which form is correct in standard written German?',
      options: ['wegen dem Wetter', 'wegen des Wetters', 'wegen das Wetter'],
      answer: 1,
      explanation: 'In writing wegen takes the Genitive: wegen des Wetters. wegen dem Wetter is heard in speech but is not standard.',
    },
    {
      type: 'fill',
      id: 'a2-15-genitive-prepositions-ex12',
      prompt: 'Statt ___ Pizza essen wir heute Salat. (a, feminine)',
      answer: ['einer'],
      explanation: 'statt + Genitive. Pizza is feminine → einer Pizza, no change to the noun.',
    },
  ],
};

export default topic;
