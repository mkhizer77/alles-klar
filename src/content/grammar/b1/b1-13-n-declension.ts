import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-13-n-declension',
  level: 'B1',
  unit: 6,
  order: 13,
  title: 'N-declension: der Junge, den Jungen, der Kollege',
  germanTerm: 'n-Deklination',
  tags: ['nouns', 'cases', 'declension', 'masculine'],
  summary: 'A group of masculine nouns (der Junge, der Kollege, der Student, der Herr) adds -n or -en in every case except the Nominative singular: den Jungen, dem Kollegen, des Studenten.',
  explanation: `
### What it is

Most German nouns do not change in the Accusative or Dative singular: *der Tisch, den Tisch, dem Tisch*. One group of **masculine** nouns is different. They add **-n** or **-en** in **every form except the Nominative singular**. This is the **n-declension** (*n-Deklination*, also called *schwache Deklination*, weak declension).

- Ich kenne **den Jungen** nicht. – *I do not know the boy.* (not *den Junge*)
- Das ist das Auto **des Kollegen**. – *That is the colleague's car.*

### How it works

| | der Junge | der Student | der Herr |
|---|---|---|---|
| Nominative | der Junge | der Student | der Herr |
| Accusative | den Junge**n** | den Student**en** | den Herr**n** |
| Dative | dem Junge**n** | dem Student**en** | dem Herr**n** |
| Genitive | des Junge**n** | des Student**en** | des Herr**n** |
| Plural (all cases) | die Junge**n** | die Student**en** | die Herr**en** |

Two things make life easier:

1. The ending is **-n** after *-e* (Junge → Jungen) and **-en** after a consonant (Student → Studenten).
2. The **Genitive has no -s**: *des Studenten*, not *des Studentens*.

The plural of these nouns is also -n / -en, so apart from the Nominative singular **every form looks the same**.

### Which nouns belong to the group?

All of them are **masculine**, and almost all of them are **people or animals**.

| group | examples |
|---|---|
| masculine nouns ending in **-e** | der Junge, der Kollege, der Kunde, der Neffe, der Zeuge, der Löwe, der Hase, der Franzose, der Russe, der Chinese |
| some short nouns for people / animals | der Herr (-n), der Mensch, der Nachbar, der Bauer, der Held, der Prinz, der Bär |
| foreign words with **-ent, -ant, -ist, -at, -oge, -it** | der Student, der Präsident, der Praktikant, der Elefant, der Polizist, der Journalist, der Tourist, der Soldat, der Biologe, der Psychologe |

A quick check: *masculine + ends in -e + a person or animal* → almost certainly n-declension. Masculine nouns like *der Lehrer*, *der Vater* or *der Tisch* are **not** in the group.

### Two special nouns

**der Name**, **der Gedanke**, **der Buchstabe** and a few others take -n everywhere **and** an extra -s in the Genitive: *des Name**ns***, *des Gedanke**ns***.

**das Herz** (neuter, the only one) is irregular: *das Herz* (Nominative **and** Accusative), *dem Herzen*, *des Herzens*, plural *die Herzen*.

### Why it matters

These are very common words: *Herr, Mensch, Kollege, Kunde, Student, Nachbar*. Every form of address uses one: *Sehr geehrter **Herr** Müller* (Nominative) but *Ich schreibe **Herrn** Müller* (Dative) and *Kennen Sie **Herrn** Müller?* (Accusative). Getting *Herrn* right in a letter is a small detail that examiners notice. The next topic, adjectives used as nouns (*der Deutsche, den Deutschen*), looks similar but follows a different rule, so keep the two groups apart.
`,
  examples: [
    { de: 'Ich kenne den Jungen nicht.', en: 'I do not know the boy. (Accusative → -n)' },
    { de: 'Das ist das Auto des Kollegen.', en: 'That is the colleague\'s car. (Genitive → -n, no -s)' },
    { de: 'Wir sprechen mit dem Studenten.', en: 'We are talking to the student. (Dative → -en)' },
    { de: 'Kennst du Herrn Müller?', en: 'Do you know Mr Müller? (Herr → Herrn)' },
    { de: 'Der Arzt hilft dem Patienten.', en: 'The doctor helps the patient. (helfen + Dative → -en)' },
    { de: 'Ich habe den Namen des Präsidenten vergessen.', en: 'I have forgotten the name of the president.' },
    { de: 'Sie hat ein gutes Herz.', en: 'She has a good heart. (Herz: no ending in the Accusative)' },
  ],
  connections: [
    { topicId: 'a1-09-gender-articles', note: 'Only masculine nouns belong to the n-declension, so you must know the gender.' },
    { topicId: 'a1-20-accusative', note: 'The first place you meet the extra -n: den Jungen, den Kollegen.' },
    { topicId: 'a1-24-dative', note: 'dem Studenten, dem Herrn: the Dative also takes the ending.' },
    { topicId: 'a2-14-genitive', note: 'The Genitive of these nouns ends in -n / -en, not -s: des Studenten.' },
    { topicId: 'b1-14-adjectives-as-nouns', note: 'der Deutsche / den Deutschen looks similar but follows adjective endings, not the n-declension.' },
  ],
  edgeCases: [
    'The Genitive has **no -s**: *des Kollegen*, *des Studenten*. Only *der Name*, *der Gedanke*, *der Buchstabe* and *das Herz* add -s: *des Namens, des Herzens*.',
    '**Herr** takes **-n** in the singular (*Herrn Müller*) but **-en** in the plural (*meine Herren*).',
    'Not every masculine noun ending in -e is in the group: *der Käse* (cheese) is *den Käse*. The rule works for people and animals.',
    'Nouns like *der Lehrer*, *der Arzt*, *der Vater* are masculine but **not** n-declension: *den Lehrer, dem Arzt*.',
    '*das Herz* keeps its form in the Accusative: *Sie hat ein gutes **Herz*** (not *Herzen*), but *mit dem **Herzen***.',
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
    {
      type: 'fill',
      id: 'b1-13-n-declension-ex12',
      prompt: 'Sie hat ein gutes ___. (Herz)',
      answer: ['Herz'],
      explanation: 'das Herz is the exception: no ending in the Accusative (ein gutes Herz), but dem Herzen in the Dative and des Herzens in the Genitive.',
    },
  ],
};

export default topic;
