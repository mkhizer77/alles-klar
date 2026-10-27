import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-23-accusative-pronouns',
  level: 'A1',
  unit: 4,
  order: 23,
  title: 'Personal pronouns in the Accusative (mich, dich …)',
  germanTerm: 'Akkusativpronomen',
  tags: ['pronouns', 'accusative', 'objects'],
  summary: 'When a person or thing is the object of the sentence, the pronoun changes: ich → mich, du → dich, er → ihn, just like I → me in English.',
  explanation: `
### What it is

English pronouns change when they are the object: *I* becomes *me*, *he* becomes *him*, *we* becomes *us*. German does the same, and the object form is the **Accusative pronoun** (*Akkusativpronomen*).

- Ich sehe **dich**. – *I see you.*
- Kennst du **ihn**? – *Do you know him?*
- Sie liebt **mich**. – *She loves me.*

### The forms

| Nominative (subject) | Accusative (object) | English |
|---|---|---|
| ich | **mich** | me |
| du | **dich** | you |
| er | **ihn** | him / it (masculine) |
| sie | **sie** | her / it (feminine) |
| es | **es** | it (neuter) |
| wir | **uns** | us |
| ihr | **euch** | you (plural) |
| sie | **sie** | them |
| Sie | **Sie** | you (formal) |

Good news: **sie, es, sie, Sie** do not change at all. Only five forms are new: **mich, dich, ihn, uns, euch**. And the one that matters most is **er → ihn**, because it mirrors *der → den* in the article system.

### Pronouns stand for things too

In German, a pronoun must match the **gender of the noun**, not whether it is a person or a thing. A table (*der Tisch*) is "he", a lamp (*die Lampe*) is "she", a book (*das Buch*) is "it":

- Wo ist der Schlüssel? Ich finde **ihn** nicht. – *Where is the key? I can't find it.*
- Magst du die Suppe? Ja, ich mag **sie**. – *Do you like the soup? Yes, I like it.*
- Hast du das Buch? Ja, ich habe **es**. – *Do you have the book? Yes, I have it.*

English uses *it* for all three. German picks *ihn / sie / es* according to the article.

### Where the pronoun goes

An object pronoun likes to stand **early** in the sentence, right after the verb (or after the subject if the subject comes after the verb):

- Ich rufe **dich** morgen an. – *I'll call you tomorrow.*
- Morgen rufe ich **dich** an.
- Kannst du **mich** hören? – *Can you hear me?*

A pronoun object comes **before** a noun object or a time expression, never at the very end if something else can go there.

### After Accusative prepositions

The five Accusative prepositions (*durch, für, gegen, ohne, um*) take the same forms:

- Das ist **für dich**. – *That's for you.*
- Ich gehe nicht **ohne euch**. – *I'm not going without you (all).*
- Alle sind **gegen ihn**. – *Everyone is against him.*

### Why it matters

Without object pronouns you have to repeat nouns all the time: *I see the man. I know the man. I like the man.* With them, conversation becomes natural: *Ich sehe ihn, ich kenne ihn, ich mag ihn.* They also appear in many everyday phrases: *Ich liebe dich*, *Wie findest du es?*, *Besuch uns mal!*, *Freut mich* (nice to meet you). And the pattern *er → ihn* is the same -n you already know from *den* and *einen*.
`,
  examples: [
    { de: 'Ich liebe dich.', en: 'I love you. (du → dich)' },
    { de: 'Kennst du ihn?', en: 'Do you know him? (er → ihn)' },
    { de: 'Der Lehrer fragt uns.', en: 'The teacher asks us. (wir → uns)' },
    { de: 'Ich sehe euch morgen.', en: 'I will see you (all) tomorrow. (ihr → euch)' },
    { de: 'Wo ist mein Stift? Ich brauche ihn.', en: 'Where is my pen? I need it. (der Stift → ihn)' },
    { de: 'Die Pizza ist gut. Ich esse sie gern.', en: 'The pizza is good. I like eating it. (die Pizza → sie)' },
    { de: 'Das Geschenk ist für Sie, Frau Weber.', en: 'The present is for you, Ms Weber. (formal Sie)' },
  ],
  connections: [
    { topicId: 'a1-03-personal-pronouns', note: 'The Nominative pronouns ich, du, er are the base forms; mich, dich, ihn are their object versions.' },
    { topicId: 'a1-20-accusative', note: 'er → ihn mirrors der → den: both show the masculine Accusative.' },
    { topicId: 'a1-22-accusative-prepositions', note: 'After für, ohne, gegen and the others, pronouns take these Accusative forms.' },
    { topicId: 'a1-27-dative-pronouns', note: 'The Dative pronouns mir, dir, ihm are the next set; keep mich (Acc.) and mir (Dat.) apart.' },
  ],
  edgeCases: [
    'Things are not always **es**. Use **ihn** for a masculine noun (*der Tisch → ihn*) and **sie** for a feminine one (*die Lampe → sie*).',
    '**sie** can mean her, them or it (feminine). *Ich sehe sie* needs context. Capital **Sie** is formal you.',
    'Do not mix the Accusative with the Dative: *Ich sehe **dich*** (Accusative, direct object) but *Ich helfe **dir*** (Dative, because helfen takes the Dative).',
    '*ihn* and *ihm* are one letter apart. **ihn** = him as a direct object (Accusative); **ihm** = to him (Dative).',
    'A pronoun object goes early: *Ich rufe **dich** morgen an*, not *Ich rufe morgen dich an*.',
  ],
  exercises: [
    {
      type: 'match',
      id: 'a1-23-accusative-pronouns-ex01',
      prompt: 'Match each subject pronoun with its Accusative form.',
      pairs: [
        ['ich', 'mich'],
        ['du', 'dich'],
        ['er', 'ihn'],
        ['wir', 'uns'],
        ['ihr', 'euch'],
      ],
      explanation: 'These are the five pronouns that change. sie, es and Sie keep the same form.',
    },
    {
      type: 'fill',
      id: 'a1-23-accusative-pronouns-ex02',
      prompt: 'Ich verstehe ___ nicht. (you, informal singular)',
      answer: ['dich'],
      explanation: 'du is the subject form; as the object of verstehen it becomes dich.',
    },
    {
      type: 'fill',
      id: 'a1-23-accusative-pronouns-ex03',
      prompt: 'Das ist Herr Meier. Kennst du ___? (him)',
      answer: ['ihn'],
      explanation: 'Herr Meier is masculine (er). As the object he becomes ihn.',
    },
    {
      type: 'mc',
      id: 'a1-23-accusative-pronouns-ex04',
      prompt: 'Wo ist der Schlüssel? Ich suche ___.',
      options: ['es', 'ihn', 'sie'],
      answer: 1,
      explanation: 'der Schlüssel is masculine, so the pronoun is er, and as an object ihn. es is only for neuter nouns.',
    },
    {
      type: 'mc',
      id: 'a1-23-accusative-pronouns-ex05',
      prompt: 'Die Suppe ist lecker. Magst du ___?',
      options: ['ihn', 'es', 'sie'],
      answer: 2,
      explanation: 'die Suppe is feminine → sie. The feminine pronoun does not change in the Accusative.',
    },
    {
      type: 'fill',
      id: 'a1-23-accusative-pronouns-ex06',
      prompt: 'Könnt ihr ___ hören? (us)',
      answer: ['uns'],
      explanation: 'wir becomes uns as an object.',
    },
    {
      type: 'order',
      id: 'a1-23-accusative-pronouns-ex07',
      prompt: 'Build the sentence: "I will call you tomorrow." (informal)',
      words: ['morgen', 'Ich', 'an.', 'dich', 'rufe'],
      answer: ['Ich rufe dich morgen an.'],
      explanation: 'The pronoun object dich comes right after the verb, before the time word morgen. The separable prefix an goes last.',
    },
    {
      type: 'fill',
      id: 'a1-23-accusative-pronouns-ex08',
      prompt: 'Das Geschenk ist für ___. (you, plural informal)',
      answer: ['euch'],
      explanation: 'für takes the Accusative; the plural informal you becomes euch.',
    },
    {
      type: 'mc',
      id: 'a1-23-accusative-pronouns-ex09',
      prompt: 'Which sentence is correct?',
      options: ['Sie liebt ich.', 'Sie liebt mich.', 'Sie liebt mir.'],
      answer: 1,
      explanation: 'lieben takes a direct object, so ich becomes mich. mir is the Dative form and is wrong here.',
    },
    {
      type: 'translate',
      id: 'a1-23-accusative-pronouns-ex10',
      prompt: 'Translate: "Do you know her?" (informal)',
      answer: ['Kennst du sie?'],
      hint: 'kennen = to know (a person)',
      explanation: 'sie (she) stays sie as an object. The verb comes first in a yes/no question.',
    },
    {
      type: 'translate',
      id: 'a1-23-accusative-pronouns-ex11',
      prompt: 'Translate: "The book is good. I am reading it."',
      answer: ['Das Buch ist gut. Ich lese es.'],
      hint: 'lesen = to read',
      explanation: 'das Buch is neuter, so the pronoun is es, which has the same form in the Accusative.',
    },
  ],
};

export default topic;
