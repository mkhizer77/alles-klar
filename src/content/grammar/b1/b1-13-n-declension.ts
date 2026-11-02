import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-13-n-declension',
  level: 'B1',
  unit: 6,
  order: 18,
  title: 'N-declension: der Junge, den Jungen, der Kollege',
  germanTerm: 'n-Deklination',
  tags: ['nouns', 'cases', 'declension', 'masculine'],
  summary: 'A group of masculine nouns (der Junge, der Kollege, der Student, der Herr) adds -n or -en in every case except the Nominative singular: den Jungen, dem Kollegen, des Studenten.',
  steps: [
    {
      title: 'What the n-declension is for',
      text: `
Most German nouns do not change in the Accusative or Dative: *der Tisch, den Tisch, dem Tisch*. One small group of **masculine** nouns is different. They add **-n** or **-en** as soon as they are not the subject: *der Junge*, but *den Jungen*.

This is the **n-declension** (*n-Deklination*). You need it every time you write to *Herrn Müller* or talk about a *Kollegen*.
`,
      examples: [
        { de: 'Der Junge spielt im Garten.', en: 'The boy is playing in the garden. (subject: no ending)' },
        { de: 'Ich kenne den Jungen nicht.', en: 'I do not know the boy. (object: den Jungen)' },
        { de: 'Ich schreibe Herrn Müller.', en: 'I am writing to Mr Müller. (Herr → Herrn)' },
      ],
    },
    {
      title: 'The endings: -n or -en',
      text: `
The ending is **-n** after *-e* (*Junge → Jungen*) and **-en** after a consonant (*Student → Studenten*). *Herr* takes only **-n** in the singular.

| | der Junge | der Student | der Herr |
|---|---|---|---|
| Nominative | der Junge | der Student | der Herr |
| Accusative | den Junge**n** | den Student**en** | den Herr**n** |
| Dative | dem Junge**n** | dem Student**en** | dem Herr**n** |
| Genitive | des Junge**n** | des Student**en** | des Herr**n** |
`,
      examples: [
        { de: 'Wir sprechen mit dem Studenten.', en: 'We are talking to the student. (Dative: -en)' },
        { de: 'Der Arzt hilft dem Patienten.', en: 'The doctor helps the patient. (helfen + Dative)' },
        { de: 'Kennst du Herrn Müller?', en: 'Do you know Mr Müller? (Accusative: Herrn)' },
      ],
    },
    {
      title: 'No -s in the Genitive',
      text: `
The **Genitive** (the "of" case) has **no -s** with these nouns: *des Studenten*, not *des Studentens*. The **plural** is also *-n / -en*: *die Studenten, die Kollegen, die Herren*.

So apart from the Nominative singular, **every form looks the same**. One ending covers everything.
`,
      examples: [
        { de: 'Das ist das Auto des Kollegen.', en: "That is the colleague's car. (Genitive: -n, no -s)" },
        { de: 'Die Studenten lernen in der Bibliothek.', en: 'The students study in the library. (plural: -en)' },
        { de: 'Guten Abend, meine Damen und Herren!', en: 'Good evening, ladies and gentlemen! (plural: Herren)' },
      ],
    },
    {
      title: 'Which nouns belong to the group',
      text: `
All of them are **masculine**, and almost all are **people**. At B1 you need the frequent ones:

| group | examples |
|---|---|
| people nouns ending in **-e** | der Junge, der Kollege, der Kunde, der Franzose |
| a few short nouns for people | der Herr, der Mensch, der Nachbar |
| foreign words in **-ent, -ant, -ist** | der Student, der Präsident, der Polizist, der Tourist |

Quick check: *masculine + ends in -e + a person* → almost certainly n-declension. *Der Lehrer, der Vater* are **not** in the group.
`,
      examples: [
        { de: 'Ich warte auf den Kunden.', en: 'I am waiting for the customer. (der Kunde → den Kunden)' },
        { de: 'Sie fragt den Polizisten nach dem Weg.', en: 'She asks the policeman the way. (-ist → -isten)' },
        { de: 'Er grüßt den Nachbarn.', en: 'He greets the neighbour. (der Nachbar → den Nachbarn)' },
        { de: 'Ich sehe den Lehrer.', en: 'I see the teacher. (der Lehrer: no ending)' },
      ],
    },
    {
      title: 'One special one: der Name',
      text: `
**der Name** takes *-n* everywhere **and** an extra *-s* in the Genitive: *den Namen, dem Namen, des Name**ns***. You meet it in forms and in questions like *Wie ist der Name des Kunden?*

You may also see *der Gedanke* (thought) and *das Herz* (heart, *des Herzens*) built the same way. You only need to recognise them.
`,
      examples: [
        { de: 'Ich habe den Namen des Präsidenten vergessen.', en: 'I have forgotten the name of the president. (den Namen, des Präsidenten)' },
        { de: 'Wie ist der Name des Kunden?', en: 'What is the name of the customer? (der Name: Nominative, no ending)' },
        { de: 'Am Anfang des Namens steht ein K.', en: 'At the beginning of the name there is a K. (Genitive: des Namens)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-09-gender-articles', note: 'Only masculine nouns belong to the n-declension, so you must know the gender.' },
    { topicId: 'a1-20-accusative', note: 'The first place you meet the extra -n: den Jungen, den Kollegen.' },
    { topicId: 'a1-24-dative', note: 'dem Studenten, dem Herrn: the Dative also takes the ending.' },
    { topicId: 'a2-14-genitive', note: 'The Genitive of these nouns ends in -n / -en, not -s: des Studenten.' },
    { topicId: 'b1-14-adjectives-as-nouns', note: 'der Deutsche / den Deutschen looks similar but follows adjective endings, not the n-declension.' },
  ],
  edgeCases: [
    'The Genitive has **no -s**: *des Kollegen*, *des Studenten*. The one common exception is *der Name*: *des Namens*.',
    '**Herr** takes **-n** in the singular (*Herrn Müller*) but **-en** in the plural (*meine Herren*).',
    'Not every masculine noun ending in -e is in the group: *der Käse* (cheese) is *den Käse*. The rule works for people.',
    'Nouns like *der Lehrer*, *der Arzt*, *der Vater* are masculine but **not** n-declension: *den Lehrer, dem Arzt*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-13-n-declension-ex01',
      prompt: 'Complete: "Ich kenne ___ nicht."',
      options: ['den Jungen', 'den Junge', 'dem Jungen'],
      answer: 0,
      explanation: 'kennen takes the Accusative (den), and der Junge adds -n: den Jungen.',
    },
    {
      type: 'fill',
      id: 'b1-13-n-declension-ex02',
      prompt: 'Das ist das Auto des ___. (Kollege)',
      answer: ['Kollegen'],
      explanation: 'Genitive of an n-declension noun: -n, and no -s. des Kollegen.',
    },
    {
      type: 'fill',
      id: 'b1-13-n-declension-ex03',
      prompt: 'Wir sprechen mit dem ___. (Student)',
      answer: ['Studenten'],
      explanation: 'mit + Dative. Student ends in a consonant, so it adds -en: dem Studenten.',
    },
    {
      type: 'match',
      id: 'b1-13-n-declension-ex04',
      prompt: 'Match each Nominative with its Accusative.',
      pairs: [
        ['der Herr', 'den Herrn'],
        ['der Kunde', 'den Kunden'],
        ['der Polizist', 'den Polizisten'],
        ['der Nachbar', 'den Nachbarn'],
        ['der Name', 'den Namen'],
      ],
      explanation: '-n after -e and after Herr / Nachbar; -en after a consonant like Polizist.',
    },
    {
      type: 'mc',
      id: 'b1-13-n-declension-ex05',
      prompt: 'Which noun is NOT in the n-declension?',
      options: ['der Lehrer', 'der Kollege', 'der Mensch'],
      answer: 0,
      explanation: 'der Lehrer is masculine but does not change: den Lehrer, dem Lehrer. Kollege and Mensch add -n / -en.',
    },
    {
      type: 'order',
      id: 'b1-13-n-declension-ex06',
      prompt: 'Build the sentence: "The doctor helps the patient."',
      words: ['Patienten.', 'hilft', 'Arzt', 'Der', 'dem'],
      answer: ['Der Arzt hilft dem Patienten.'],
      explanation: 'helfen takes the Dative: dem Patienten, with the n-declension ending -en.',
    },
    {
      type: 'fill',
      id: 'b1-13-n-declension-ex07',
      prompt: 'Kennst du ___ Müller? (Herr)',
      answer: ['Herrn'],
      explanation: 'kennen + Accusative. der Herr adds -n: Herrn Müller.',
    },
    {
      type: 'fill',
      id: 'b1-13-n-declension-ex08',
      prompt: 'Ich habe den Namen des ___ vergessen. (Präsident)',
      answer: ['Präsidenten'],
      explanation: 'Genitive after des: Präsident + -en, and no extra -s.',
    },
    {
      type: 'mc',
      id: 'b1-13-n-declension-ex09',
      prompt: 'What is the Genitive of "der Name"?',
      options: ['des Namens', 'des Namen', 'des Names'],
      answer: 0,
      explanation: 'der Name is special: it takes -n everywhere plus an extra -s in the Genitive: des Namens.',
    },
    {
      type: 'translate',
      id: 'b1-13-n-declension-ex10',
      prompt: 'Translate: "I am waiting for the customer."',
      answer: ['Ich warte auf den Kunden.'],
      hint: 'warten auf + Accusative, der Kunde = customer',
      explanation: 'warten auf takes the Accusative: den Kunden (n-declension, -n after -e).',
    },
    {
      type: 'mc',
      id: 'b1-13-n-declension-ex11',
      prompt: 'What is the plural of "der Student"?',
      options: ['die Studenten', 'die Students', 'die Studente'],
      answer: 0,
      explanation: 'n-declension nouns form their plural with -n / -en: die Studenten.',
    },
  ],
};

export default topic;
