import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-10-plural',
  level: 'A1',
  unit: 2,
  order: 10,
  title: 'Plural forms',
  germanTerm: 'Plural',
  tags: ['nouns', 'plural', 'endings', 'umlaut'],
  summary: 'German has five main plural endings (-e, -en, -er, -s and no ending), often with an umlaut; the article in the plural is always die.',
  explanation: `
### Not one plural, but five

English adds *-s* and is done. German has **five** plural patterns, and some add an **umlaut** (ä, ö, ü) to the vowel. The plural is not fully predictable, so you learn it with the noun, like the gender: **der Tisch, die Tische**.

The good news: in the plural the article is always **die**, and the ending you choose often follows the gender and the ending of the singular.

### The five patterns

| pattern | typical for | examples |
|---|---|---|
| **-e** (often with umlaut) | most masculine nouns, many one-syllable nouns | der Tisch → die Tisch**e**, der Stuhl → die St**ü**hl**e**, der Tag → die Tag**e** |
| **-(e)n** | almost all feminine nouns, nouns in -e | die Lampe → die Lampe**n**, die Frau → die Frau**en**, die Zeitung → die Zeitung**en** |
| **-er** (often with umlaut) | many short neuter nouns, a few masculine | das Kind → die Kind**er**, das Buch → die B**ü**ch**er**, der Mann → die M**ä**nn**er** |
| **-s** | foreign words, words ending in a vowel, abbreviations | das Auto → die Auto**s**, das Handy → die Handy**s**, der Park → die Park**s** |
| **no ending** (sometimes umlaut) | masculine and neuter nouns in -er, -el, -en, and -chen / -lein | der Lehrer → die Lehrer, das Mädchen → die Mädchen, der Apfel → die **Ä**pfel |

### Rules that are nearly always true

1. **Feminine nouns take -(e)n.** *die Blume → die Blumen, die Schwester → die Schwestern.* Exceptions are rare (*die Mutter → die Mütter, die Tochter → die Töchter*).
2. **Female job titles in -in double the n:** *die Lehrerin → die Lehrer**innen**, die Freundin → die Freund**innen**.*
3. **-chen and -lein never change:** *das Brötchen → die Brötchen.*
4. **Masculine and neuter nouns in -er, -el, -en add nothing:** *der Computer → die Computer, der Schlüssel → die Schlüssel.*
5. **Words that end in -a, -o, -i, -y or come from English take -s:** *das Sofa → die Sofas, das Café → die Cafés.*

### The umlaut

Only **a, o, u** (and *au*) can take an umlaut: *a → ä, o → ö, u → ü, au → äu*. It appears mostly with the **-e** and **-er** patterns and with the no-ending pattern: *der Apfel → die Äpfel, das Haus → die Häuser, der Vater → die Väter*. Feminine nouns with *-en* never add an umlaut (*die Frau → die Frauen*).

### Nouns with no plural, or no singular

Some nouns are used only in the singular: *das Wasser, die Milch, das Geld, die Zeit, das Obst*. Some exist only in the plural: *die Eltern* (parents), *die Leute* (people), *die Ferien* (holidays). **Euro** and **Cent** keep the singular after a number: *zehn Euro*.

### How to read a dictionary entry

Dictionaries and word lists write the plural as a short code after the noun:

| entry | means |
|---|---|
| der Tisch, -e | die Tische |
| der Stuhl, ¨-e | die Stühle (umlaut + -e) |
| das Kind, -er | die Kinder |
| die Lampe, -n | die Lampen |
| das Auto, -s | die Autos |
| der Lehrer, - | die Lehrer (no change) |

In this app the plural is written out in full (*die Tische*).

### Why it matters

You will use plurals constantly: *zwei Kinder, drei Tage, viele Freunde*. Getting the plural right also matters later because the plural article changes in the Dative (*den Kindern*). Learn each noun as a triple: **gender, singular, plural**.
`,
  examples: [
    { de: 'Ich habe zwei Brüder.', en: 'I have two brothers. (der Bruder → die Brüder: umlaut, no ending)' },
    { de: 'Die Tische sind aus Holz.', en: 'The tables are made of wood. (-e)' },
    { de: 'Die Lampen sind an.', en: 'The lamps are on. (feminine → -n)' },
    { de: 'Die Kinder spielen im Garten.', en: 'The children play in the garden. (-er)' },
    { de: 'Wir haben drei Autos.', en: 'We have three cars. (-s for foreign words)' },
    { de: 'Die Lehrerinnen sind nett.', en: 'The (female) teachers are nice. (-in → -innen)' },
    { de: 'Meine Eltern wohnen in Bonn.', en: 'My parents live in Bonn. (Eltern has no singular)' },
    { de: 'Das kostet zwanzig Euro.', en: 'That costs twenty euros. (Euro has no plural ending)' },
  ],
  connections: [
    { topicId: 'a1-09-gender-articles', note: 'Gender predicts the plural pattern: feminine → -(e)n, neuter often -er.' },
    { topicId: 'a1-11-nominative', note: 'The plural article die in the Nominative; there is no plural ein.' },
    { topicId: 'a1-08-numbers-time', note: 'Numbers go with plural nouns: zwei Kinder, drei Tage; but zehn Euro.' },
    { topicId: 'a1-24-dative', note: 'In the Dative the plural gets an extra -n: mit den Kindern.' },
  ],
  edgeCases: [
    'The plural is **not** always predictable. Learn it with the word: *der Mann → die Männer* but *der Tag → die Tage*.',
    'Feminine nouns with **-en never take an umlaut**: *die Frauen*, not *die Fräuen*.',
    'Nouns in **-in** double the n: *die Studentinnen*. One n (*Studentinen*) is a common error.',
    '**No -s on most German nouns.** *Die Tischs* and *die Kinds* are wrong; -s is mainly for foreign and short vowel-final words.',
    '**Euro, Cent, Kilo, Gramm, Liter** stay singular after a number: *fünf Euro, zwei Kilo*. But *die Euros* exists when you mean coins.',
    'Compound nouns take the plural of their **last** part: *das Kinderzimmer → die Kinderzimmer, die Haustür → die Haustüren*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-10-plural-ex01',
      prompt: 'What is the plural of "die Lampe"?',
      options: ['die Lampes', 'die Lampen', 'die Lämpe'],
      answer: 1,
      explanation: 'Feminine nouns, especially those in -e, take -n: die Lampen. No umlaut, no -s.',
    },
    {
      type: 'fill',
      id: 'a1-10-plural-ex02',
      prompt: 'ein Kind, zwei ___',
      answer: ['Kinder'],
      explanation: 'das Kind takes the -er pattern: die Kinder.',
    },
    {
      type: 'fill',
      id: 'a1-10-plural-ex03',
      prompt: 'ein Auto, drei ___',
      answer: ['Autos'],
      explanation: 'Words ending in -o (and most foreign words) take -s: die Autos.',
    },
    {
      type: 'match',
      id: 'a1-10-plural-ex04',
      prompt: 'Match the singular with its plural.',
      pairs: [
        ['der Tisch', 'die Tische'],
        ['das Buch', 'die Bücher'],
        ['die Frau', 'die Frauen'],
        ['der Lehrer', 'die Lehrer'],
        ['das Handy', 'die Handys'],
      ],
      explanation: 'Five nouns, five patterns: -e, umlaut + -er, -en, no change, -s.',
    },
    {
      type: 'mc',
      id: 'a1-10-plural-ex05',
      prompt: 'What is the plural of "der Apfel"?',
      options: ['die Apfel', 'die Äpfel', 'die Apfeln'],
      answer: 1,
      explanation: 'Masculine nouns in -el add no ending, but Apfel takes an umlaut: die Äpfel.',
    },
    {
      type: 'fill',
      id: 'a1-10-plural-ex06',
      prompt: 'eine Lehrerin, viele ___',
      answer: ['Lehrerinnen'],
      explanation: 'Nouns in -in double the n and add -en: Lehrerinnen.',
    },
    {
      type: 'mc',
      id: 'a1-10-plural-ex07',
      prompt: 'Which plural is correct?',
      options: ['die Fraüen', 'die Frauen', 'die Fräuen'],
      answer: 1,
      explanation: 'Feminine nouns with -en never add an umlaut: die Frauen.',
    },
    {
      type: 'mc',
      id: 'a1-10-plural-ex08',
      prompt: 'Which of these nouns has no singular form?',
      options: ['die Kinder', 'die Eltern', 'die Brüder'],
      answer: 1,
      explanation: 'Eltern (parents) exists only in the plural. Kinder and Brüder have singulars (Kind, Bruder).',
    },
    {
      type: 'fill',
      id: 'a1-10-plural-ex09',
      prompt: 'Das kostet zwanzig ___. (euro)',
      answer: ['Euro'],
      explanation: 'Euro stays singular after a number. Euros is used only for the coins themselves.',
    },
    {
      type: 'mc',
      id: 'a1-10-plural-ex10',
      prompt: 'The dictionary says "der Stuhl, ¨-e". What is the plural?',
      options: ['die Stuhle', 'die Stühle', 'die Stühler'],
      answer: 1,
      explanation: 'The ¨ means umlaut on the stem vowel, -e is the ending: die Stühle.',
    },
    {
      type: 'translate',
      id: 'a1-10-plural-ex11',
      prompt: 'Translate: "The books are new."',
      answer: ['Die Bücher sind neu.'],
      hint: 'das Buch = book, neu = new',
      explanation: 'das Buch → die Bücher (umlaut + -er). The plural subject takes sind.',
    },
    {
      type: 'mc',
      id: 'a1-10-plural-ex12',
      prompt: 'What is the plural of "das Kinderzimmer" (children\'s room)?',
      options: ['die Kinderzimmern', 'die Kinderzimmer', 'die Kinderzimmers'],
      answer: 1,
      explanation: 'A compound takes the plural of its last part. Zimmer (neuter, -er) does not change: die Kinderzimmer.',
    },
  ],
};

export default topic;
