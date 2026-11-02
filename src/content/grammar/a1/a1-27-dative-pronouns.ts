import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-27-dative-pronouns',
  level: 'A1',
  unit: 5,
  order: 31,
  title: 'Personal pronouns in the Dative (mir, dir …)',
  germanTerm: 'Dativpronomen',
  tags: ['pronouns', 'dative', 'objects'],
  summary: 'mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen are the pronouns you use for the receiver: "to me", "to you", "to him".',
  steps: [
    {
      title: 'The pronouns for the receiver',
      text: `
You know the Accusative pronouns (*mich, dich, ihn …*) for the direct object. The **Dative pronouns** (*Dativpronomen*) are the forms for the **receiver**: the person something is given, shown or done **to**. English says *to me* or just *me*: *Give me the book* = *Gib **mir** das Buch.*
`,
      examples: [
        { de: 'Gib mir das Buch.', en: 'Give me the book. (mir = to me)' },
        { de: 'Ich gebe dir meine Nummer.', en: 'I will give you my number. (dir = receiver)' },
        { de: 'Kannst du mir helfen?', en: 'Can you help me? (helfen + Dative: mir)' },
      ],
    },
    {
      title: 'The forms: mir, dir, ihm, ihr, ihnen',
      text: `
| subject | Accusative | **Dative** |
|---|---|---|
| ich | mich | **mir** |
| du | dich | **dir** |
| er, es | ihn, es | **ihm** |
| sie (she) | sie | **ihr** |
| sie (they), Sie | sie, Sie | **ihnen**, **Ihnen** |

**uns** and **euch** are the same in both cases. Patterns that help: **mir / dir** end in -r like *der*, **ihm** ends in -m like *dem*, **ihnen** ends in -en like *den*.
`,
      examples: [
        { de: 'Das Auto gehört ihm.', en: 'The car belongs to him. (er → ihm)' },
        { de: 'Die Jacke gefällt ihr.', en: 'She likes the jacket. (sie → ihr)' },
        { de: 'Ich danke Ihnen, Frau Schmidt.', en: 'Thank you, Ms Schmidt. (formal Ihnen, capital I)' },
        { de: 'Wie geht es euch?', en: 'How are you all? (euch: same as Accusative)' },
      ],
    },
    {
      title: 'Three places you need them',
      text: `
You use the Dative pronoun in the same three places as the Dative article: as the **receiver** with giving verbs (*geben, zeigen, schicken*), after **Dative verbs** (*helfen, danken, gefallen, gehören*), and after **Dative prepositions** (*mit, von, zu, bei …*).
`,
      examples: [
        { de: 'Sie zeigt uns die Stadt.', en: 'She shows us the city. (receiver)' },
        { de: 'Das gefällt ihm.', en: 'He likes that. (Dative verb)' },
        { de: 'Kommst du mit mir?', en: 'Are you coming with me? (Dative preposition)' },
        { de: 'Das Geschenk ist von ihr.', en: 'The present is from her. (Dative preposition)' },
      ],
    },
    {
      title: 'Pronoun before noun',
      text: `
When a sentence has a Dative object and an Accusative object, a **pronoun comes before a noun**, whatever its case: *Ich gebe **ihm** das Buch.* *Ich gebe **es** dem Kind.* With two nouns, the Dative comes first: *Ich gebe dem Kind das Buch.*
`,
      examples: [
        { de: 'Ich gebe ihm das Buch.', en: 'I give him the book. (pronoun ihm first)' },
        { de: 'Ich gebe es dem Kind.', en: 'I give it to the child. (pronoun es first)' },
        { de: 'Ich gebe dem Kind das Buch.', en: 'I give the child the book. (two nouns: Dative first)' },
      ],
    },
    {
      title: 'Two pronouns: Accusative first',
      text: `
With **two pronouns** the order flips: the Accusative (*es, ihn, sie*) goes **before** the Dative (*mir, dir, ihm*): *Ich gebe **es dir***, not *Ich gebe dir es*. This surprises many learners, so say a few examples out loud.
`,
      examples: [
        { de: 'Ich gebe es dir.', en: 'I give it to you. (es before dir)' },
        { de: 'Zeig sie mir!', en: 'Show it to me! (sie = die Jacke, before mir)' },
        { de: 'Ich zeige es dir morgen.', en: 'I will show it to you tomorrow. (es before dir, then the time word)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-23-accusative-pronouns', note: 'mich, dich, ihn are the direct-object forms; mir, dir, ihm are the receiver forms.' },
    { topicId: 'a1-24-dative', note: 'The pronoun endings -r, -m, -en copy the Dative articles der, dem, den.' },
    { topicId: 'a1-26-dative-verbs', note: 'helfen, danken, gefallen and the other Dative verbs take mir, dir, ihm.' },
    { topicId: 'a1-25-dative-prepositions', note: 'After mit, von, zu, bei the pronoun is Dative: mit mir, von ihr.' },
  ],
  edgeCases: [
    '**mich vs mir**: *Er sieht mich* (he sees me, direct object) but *Er hilft mir* (he helps me, Dative verb). The verb decides, not the English.',
    '**ihr** is overloaded: it is the pronoun *you (plural)*, the Dative of *sie (she)*, and the possessive *her*. *Ich gebe ihr das Buch* = I give her the book.',
    'With **two pronouns** the Accusative comes first: *Ich gebe **es dir***, not *Ich gebe dir es*.',
    '**ihm** (to him) and **ihn** (him) differ by one letter. *Ich sehe ihn* vs *Ich helfe ihm*.',
    'Formal **Ihnen** is always capitalised, like *Sie* and *Ihr*. Lowercase *ihnen* means *to them*.',
  ],
  exercises: [
    {
      type: 'match',
      id: 'a1-27-dative-pronouns-ex01',
      prompt: 'Match each subject pronoun with its Dative form.',
      pairs: [
        ['ich', 'mir'],
        ['du', 'dir'],
        ['er', 'ihm'],
        ['sie (she)', 'ihr'],
        ['sie (they)', 'ihnen'],
      ],
      explanation: 'mir and dir end in -r, ihm in -m, ihnen in -en, matching the Dative articles der, dem, den.',
    },
    {
      type: 'fill',
      id: 'a1-27-dative-pronouns-ex02',
      prompt: 'Kannst du ___ helfen? (me)',
      answer: ['mir'],
      explanation: 'helfen is a Dative verb, so ich becomes mir, not mich.',
    },
    {
      type: 'fill',
      id: 'a1-27-dative-pronouns-ex03',
      prompt: 'Ich gebe ___ das Buch. (you, informal singular)',
      answer: ['dir'],
      explanation: 'You are the receiver of the book, so the Dative dir is needed.',
    },
    {
      type: 'mc',
      id: 'a1-27-dative-pronouns-ex04',
      prompt: 'Complete: "Das ist Peter. Das Auto gehört ___."',
      options: ['ihn', 'ihm', 'er'],
      answer: 1,
      explanation: 'gehören takes the Dative. The Dative of er is ihm. ihn is Accusative.',
    },
    {
      type: 'mc',
      id: 'a1-27-dative-pronouns-ex05',
      prompt: 'Which sentence is correct?',
      options: ['Ich sehe dir.', 'Ich helfe dich.', 'Ich helfe dir.'],
      answer: 2,
      explanation: 'helfen takes the Dative → dir. sehen would take the Accusative → dich. The verb decides the case.',
    },
    {
      type: 'fill',
      id: 'a1-27-dative-pronouns-ex06',
      prompt: 'Das ist Anna. Die Blumen gefallen ___ sehr. (her)',
      answer: ['ihr'],
      explanation: 'gefallen takes the Dative. The Dative of sie (she) is ihr.',
    },
    {
      type: 'fill',
      id: 'a1-27-dative-pronouns-ex07',
      prompt: 'Vielen Dank! Ich danke ___. (you, formal)',
      answer: ['Ihnen'],
      explanation: 'danken takes the Dative. Formal you in the Dative is Ihnen with a capital I.',
    },
    {
      type: 'order',
      id: 'a1-27-dative-pronouns-ex08',
      prompt: 'Build the sentence: "I will show you the city." (informal)',
      words: ['dir', 'Stadt.', 'zeige', 'Ich', 'die'],
      answer: ['Ich zeige dir die Stadt.'],
      explanation: 'The pronoun object dir comes before the noun object die Stadt.',
    },
    {
      type: 'mc',
      id: 'a1-27-dative-pronouns-ex09',
      prompt: 'Replace both nouns in "Ich gebe dem Mann den Schlüssel." with pronouns.',
      options: ['Ich gebe ihm ihn.', 'Ich gebe ihn ihm.', 'Ich gebe ihm er.'],
      answer: 1,
      explanation: 'With two pronouns the Accusative (ihn = den Schlüssel) comes before the Dative (ihm = dem Mann).',
    },
    {
      type: 'fill',
      id: 'a1-27-dative-pronouns-ex10',
      prompt: 'Kommst du mit ___ ins Kino? (us)',
      answer: ['uns'],
      explanation: 'mit takes the Dative. uns is the same in Accusative and Dative.',
    },
    {
      type: 'translate',
      id: 'a1-27-dative-pronouns-ex11',
      prompt: 'Translate: "How are you?" (informal, one person)',
      answer: ['Wie geht es dir?', 'Wie geht\'s dir?'],
      hint: 'Wie geht es ...? takes the Dative',
      explanation: 'The fixed phrase is Wie geht es + Dative. Informal singular is dir.',
    },
    {
      type: 'translate',
      id: 'a1-27-dative-pronouns-ex12',
      prompt: 'Translate: "I will give it to you tomorrow." (informal, "it" = das Buch)',
      answer: ['Ich gebe es dir morgen.'],
      hint: 'geben = to give, morgen = tomorrow',
      explanation: 'Two pronouns: the Accusative es comes first, then the Dative dir, then the time word.',
    },
  ],
};

export default topic;
