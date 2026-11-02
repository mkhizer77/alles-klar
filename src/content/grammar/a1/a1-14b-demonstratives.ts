import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-14b-demonstratives',
  level: 'A1',
  unit: 2,
  order: 16,
  title: 'Pointing at things: dieser, diese, dieses',
  germanTerm: 'Demonstrativa',
  tags: ['demonstratives', 'dieser', 'pointing', 'articles'],
  summary: 'dieser / diese / dieses mean "this" and take the same endings as der / die / das; for "that one" German simply uses der, die, das on its own.',
  steps: [
    {
      title: 'dieser means "this"',
      text: `
To say *this* with a noun, German uses **dieser**. It is a **demonstrative** (*Demonstrativum*, a pointing word) and takes the **same endings as der / die / das**.

| gender | the | this |
|---|---|---|
| masculine | der Tisch | **dieser** Tisch |
| feminine | die Jacke | **diese** Jacke |
| neuter | das Buch | **dieses** Buch |
| plural | die Schuhe | **diese** Schuhe |
`,
      examples: [
        { de: 'Dieser Tisch ist frei.', en: 'This table is free. (der → dieser)' },
        { de: 'Diese Jacke ist teuer.', en: 'This jacket is expensive. (die → diese)' },
        { de: 'Dieses Buch ist gut.', en: 'This book is good. (das → dieses)' },
        { de: 'Diese Schuhe sind neu.', en: 'These shoes are new. (plural → diese)' },
      ],
    },
    {
      title: 'As an object: only diesen changes',
      text: `
When the noun is the **object** (the thing you take, buy or know), it stands in the **Accusative** (*Akkusativ*, the object case). Like *der → den*, only the masculine changes: **dieser → diesen**. Feminine, neuter and plural stay the same.
`,
      examples: [
        { de: 'Ich nehme diesen Tisch.', en: 'I will take this table. (masculine object: diesen)' },
        { de: 'Ich kaufe diese Jacke.', en: 'I am buying this jacket. (feminine: no change)' },
        { de: 'Kennst du dieses Buch?', en: 'Do you know this book? (neuter: no change)' },
      ],
    },
    {
      title: 'Saying "that": der, die, das plus da',
      text: `
For *that* (further away) German usually just uses **der / die / das** with stress, or adds **da** (there) after the noun: *Der Tisch **da** ist frei.* The word *jener* (that) exists but is rare in speech.
`,
      examples: [
        { de: 'Der Tisch da ist frei.', en: 'That table over there is free.' },
        { de: 'Die Jacke da ist zu teuer.', en: 'That jacket there is too expensive.' },
      ],
    },
    {
      title: 'der, die, das alone: "that one"',
      text: `
In spoken German the article is often used **alone** as a pointer, like *that one*. It takes the gender of the noun it stands for, and the case of its job in the sentence: *Welcher Stuhl? **Der** ist kaputt.* As an object, masculine becomes **den**: *Kennst du Herrn Weber? Ja, **den** kenne ich.*
`,
      examples: [
        { de: 'Welches Buch? Das ist gut.', en: 'Which book? That one is good.' },
        { de: 'Welcher Stuhl? Der ist kaputt.', en: 'Which chair? That one is broken. (masculine: der)' },
        { de: 'Kennst du Herrn Weber? Ja, den kenne ich.', en: 'Do you know Mr Weber? Yes, I know him. (that one; object → den)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-14-es-gibt-demonstratives', note: 'The sibling topic: das ist / das sind introduce a person or thing without a noun after "this".' },
    { topicId: 'a1-09-gender-articles', note: 'dieser / diese / dieses copy the endings of der / die / das.' },
    { topicId: 'a1-11-nominative', note: 'dieser, diese, dieses are the Nominative forms, used for the subject.' },
    { topicId: 'a1-20-accusative', note: 'diesen is the masculine Accusative, exactly like der → den.' },
  ],
  edgeCases: [
    '**dieser** follows *der / die / das*, so **diese** is both feminine singular and plural: *diese Jacke* (this jacket), *diese Schuhe* (these shoes).',
    'As an object only the masculine changes: *Ich nehme **diesen** Tisch*, but *Ich nehme **diese** Jacke*, *Ich nehme **dieses** Buch*.',
    '**dieses** (neuter) is often shortened to *dies* in speech when it stands alone: *Dies ist mein Haus*. With a noun, use the full form: *dieses Haus*.',
    'To introduce a person, say **Das ist** mein Bruder, not *Dieser ist mein Bruder*. *dieser* is for pointing at one of several: *Dieser Tisch ist frei.*',
  ],
  exercises: [
    {
      type: 'match',
      id: 'a1-14b-demonstratives-ex01',
      prompt: 'Match the noun with the correct form of "this".',
      pairs: [
        ['Tisch', 'dieser'],
        ['Lampe', 'diese'],
        ['Buch', 'dieses'],
        ['Bücher', 'diese (plural)'],
      ],
      explanation: 'dieser follows der / die / das: der → dieser, die → diese, das → dieses, plural → diese.',
    },
    {
      type: 'fill',
      id: 'a1-14b-demonstratives-ex02',
      prompt: '___ Tisch ist frei. (this – der Tisch)',
      answer: ['Dieser'],
      explanation: 'Tisch is masculine: der → dieser.',
    },
    {
      type: 'fill',
      id: 'a1-14b-demonstratives-ex03',
      prompt: '___ Buch ist gut. (this – das Buch)',
      answer: ['Dieses'],
      explanation: 'Buch is neuter: das → dieses.',
    },
    {
      type: 'mc',
      id: 'a1-14b-demonstratives-ex04',
      prompt: 'Complete: "___ Schuhe sind neu." (die Schuhe, plural)',
      options: ['Dieser', 'Diese', 'Dieses'],
      answer: 1,
      explanation: 'The plural article is die, so the plural form of "this" is diese: Diese Schuhe sind neu.',
    },
    {
      type: 'order',
      id: 'a1-14b-demonstratives-ex05',
      prompt: 'Build the sentence: "This jacket is too expensive."',
      words: ['teuer.', 'Diese', 'zu', 'ist', 'Jacke'],
      answer: ['Diese Jacke ist zu teuer.'],
      explanation: 'Jacke is feminine, so Diese. The verb ist is second, then zu teuer.',
    },
    {
      type: 'translate',
      id: 'a1-14b-demonstratives-ex06',
      prompt: 'Translate: "This jacket is expensive."',
      answer: ['Diese Jacke ist teuer.'],
      hint: 'die Jacke = jacket, teuer = expensive',
      explanation: 'Jacke is feminine, so this = diese. The verb ist is second.',
    },
    {
      type: 'mc',
      id: 'a1-14b-demonstratives-ex07',
      prompt: 'Complete: "Welcher Stuhl ist kaputt?" – "___ da."',
      options: ['Der', 'Die', 'Das'],
      answer: 0,
      explanation: 'The article used alone as "that one" takes the gender of the noun. Stuhl is masculine: Der da.',
    },
    {
      type: 'mc',
      id: 'a1-14b-demonstratives-ex08',
      prompt: 'Which sentence is correct?',
      options: ['Dies Buch ist gut.', 'Dieses Buch ist gut.', 'Diese Buch ist gut.'],
      answer: 1,
      explanation: 'With a noun you need the full form. Buch is neuter, so dieses Buch. The short form dies is only used alone: Dies ist gut.',
    },
    {
      type: 'fill',
      id: 'a1-14b-demonstratives-ex09',
      prompt: 'Ich nehme ___ Tisch. (this – der Tisch)',
      answer: ['diesen'],
      explanation: 'Tisch is masculine and the object of nehmen, so dieser becomes diesen, just like der becomes den.',
    },
    {
      type: 'fill',
      id: 'a1-14b-demonstratives-ex10',
      prompt: 'Ich kaufe ___ Lampe. (this – die Lampe)',
      answer: ['diese'],
      explanation: 'Lampe is feminine. The feminine does not change as an object: diese Lampe.',
    },
    {
      type: 'mc',
      id: 'a1-14b-demonstratives-ex11',
      prompt: 'Complete: "Kennst du Herrn Weber?" – "Ja, ___ kenne ich."',
      options: ['der', 'den', 'dieser'],
      answer: 1,
      explanation: 'The pointer word stands for Herr Weber, the object of kennen. Masculine object: den. "Den kenne ich" = I know him, that one.',
    },
    {
      type: 'translate',
      id: 'a1-14b-demonstratives-ex12',
      prompt: 'Translate: "This book is good."',
      answer: ['Dieses Buch ist gut.'],
      hint: 'das Buch = book, gut = good',
      explanation: 'Buch is neuter: das → dieses. Verb second: ist.',
    },
  ],
};

export default topic;
