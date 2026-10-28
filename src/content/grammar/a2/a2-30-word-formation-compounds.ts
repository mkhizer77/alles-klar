import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-30-word-formation-compounds',
  level: 'A2',
  unit: 10,
  order: 30,
  title: 'Word formation 1: compound nouns and -ung / -er / -in',
  germanTerm: 'Wortbildung',
  tags: ['nouns', 'word formation', 'compounds', 'suffixes', 'gender', 'vocabulary'],
  summary: 'German builds new nouns by gluing words together (Haus + Tür = Haustür) and by adding endings to verbs and nouns (-ung, -er, -in); the last part decides the gender.',
  explanation: `
### What it is

German is famous for long words like *Krankenversicherungskarte* (health insurance card). They are not really new words; they are **compounds** (*Komposita*) built from smaller words you already know. German also makes nouns from verbs with endings like **-ung** and **-er**. Learning these patterns (*Wortbildung*) lets you understand and build hundreds of words you have never seen.

### Compound nouns

Two (or more) nouns are written as **one word**. The **last word** is the main thing; the words before it describe it.

| parts | compound | meaning |
|---|---|---|
| das Haus + die Tür | **die** Haustür | front door (a kind of door) |
| die Tür + der Schlüssel | **der** Türschlüssel | door key (a kind of key) |
| der Kaffee + die Tasse | **die** Kaffeetasse | coffee cup |
| die Stadt + der Plan | **der** Stadtplan | city map |
| das Wort + das Buch | **das** Wörterbuch | dictionary |

Two rules follow from this:

1. The **gender** of the compound is the gender of the **last** word: *die* Haustür because *die* Tür.
2. The **plural** is the plural of the last word: *die Haustüren* (Tür → Türen).

The first part can also be a verb stem (*schlafen* → das **Schlaf**zimmer), an adjective (*groß* → die **Groß**stadt) or a preposition (*vor* → der **Vor**name).

### Linking letters

Sometimes a small sound is inserted between the parts so the word is easier to say: der Geburt**s**tag, die Arbeit**s**zeit (**-s-**); die Straße**n**bahn, der Familie**n**name (**-n-**); das Kind**er**zimmer, das Wört**er**buch (**-er-**). There is no simple rule for which letter appears, so when you learn a compound, learn the joining letter with it. Many compounds have none: *die Haustür, der Stadtplan*.

### Nouns from verbs: -ung

Add **-ung** to a verb stem and you get a noun for the action or its result. These nouns are **always feminine** and their plural is **-en**.

| verb | noun |
|---|---|
| wohnen | **die** Wohnung (flat) |
| üben | **die** Übung (exercise) |
| erklären | **die** Erklärung (explanation) |
| bestellen | **die** Bestellung (order) |
| einladen | **die** Einladung (invitation) |

### People and tools: -er and -in

Add **-er** to a verb stem for the person (or machine) that does it. These are **always masculine** and have **no plural ending**. Add **-in** for the female person (plural **-innen**).

| verb | male person / thing | female person |
|---|---|---|
| lehren | **der** Lehrer | **die** Lehrerin |
| arbeiten | **der** Arbeiter | **die** Arbeiterin |
| fahren | **der** Fahrer | **die** Fahrerin |
| kochen | **der** Koch (irregular) | **die** Köchin |
| drucken | **der** Drucker (printer, a tool) | – |

Some stems take an umlaut: *backen* → der B**ä**cker, *kaufen* → der Verk**ä**ufer. The **-in** form often adds an umlaut too: der Arzt → die **Ä**rztin, der Koch → die K**ö**chin.

### Why it matters

With these patterns you can **guess the gender** of thousands of words without looking them up: anything ending in *-ung* is *die*, any person ending in *-er* is *der*, in *-in* is *die*, and any compound takes its gender from the last word. Reading becomes faster, because you can split a long word into parts: *Arbeit-s-zeit-verkürz-ung*.
`,
  examples: [
    { de: 'Die Haustür ist offen.', en: 'The front door is open. (Haus + Tür → die, because die Tür)' },
    { de: 'Wo ist der Stadtplan?', en: 'Where is the city map? (Stadt + Plan → der, because der Plan)' },
    { de: 'Mein Geburtstag ist im Mai.', en: 'My birthday is in May. (Geburt + s + Tag: joining -s-)' },
    { de: 'Das Kinderzimmer ist klein.', en: 'The children\'s room is small. (Kind + er + Zimmer)' },
    { de: 'Die Wohnung hat drei Zimmer.', en: 'The flat has three rooms. (wohnen → die Wohnung)' },
    { de: 'Vielen Dank für die Einladung!', en: 'Thank you for the invitation! (einladen → die Einladung)' },
    { de: 'Der Fahrer wartet vor dem Haus.', en: 'The driver is waiting in front of the house. (fahren → der Fahrer)' },
    { de: 'Meine Ärztin ist sehr nett.', en: 'My (female) doctor is very nice. (der Arzt → die Ärztin, with umlaut)' },
  ],
  connections: [
    { topicId: 'a1-09-gender-articles', note: 'The last part of a compound decides the gender; -ung is always die, -er for people always der.' },
    { topicId: 'a1-10-plural', note: 'A compound takes the plural of its last word; -ung nouns take -en; -in nouns take -nen.' },
    { topicId: 'b1-29-prefixes', note: 'At B1 you learn how prefixes (un-, ver-, be-) change the meaning of verbs and adjectives.' },
    { topicId: 'b1-30-suffixes', note: 'More noun and adjective endings (-heit, -keit, -schaft, -lich, -bar) follow the same idea as -ung and -er.' },
  ],
  edgeCases: [
    'The **last** word decides everything. *Der Apfelbaum* (der Baum) but *das Apfelmus* (das Mus). Learners often take the gender of the first word by mistake.',
    'Joining letters are not predictable. *Arbeit**s**zeit* has -s-, but *Arbeitgeber* (employer) has none. Learn them with the word.',
    '*-er* makes a **person or tool**, not an action: *der Drucker* is a printer (machine), *das Drucken* is the printing. The action noun is usually *-ung* or the capitalised infinitive.',
    'Some professions are not formed with -er: *der Arzt / die Ärztin*, *der Koch / die Köchin*. The **-in** ending still works for the female form.',
    'The umlaut in *-in* words follows the male form if it already has one, and some add it: *Bäcker → Bäckerin* (no change), *Arzt → Ärztin* (added).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-30-word-formation-compounds-ex01',
      prompt: 'What is the gender of "Haustür" (das Haus + die Tür)?',
      options: ['der', 'die', 'das'],
      answer: 1,
      explanation: 'The last word decides the gender. die Tür → die Haustür.',
    },
    {
      type: 'fill',
      id: 'a2-30-word-formation-compounds-ex02',
      prompt: 'wohnen → die ___ (noun with -ung)',
      answer: ['Wohnung'],
      explanation: 'Verb stem wohn- + -ung = die Wohnung. All -ung nouns are feminine.',
    },
    {
      type: 'fill',
      id: 'a2-30-word-formation-compounds-ex03',
      prompt: 'fahren → der ___ (the person who drives)',
      answer: ['Fahrer'],
      explanation: 'Verb stem fahr- + -er = der Fahrer. People formed with -er are masculine.',
    },
    {
      type: 'mc',
      id: 'a2-30-word-formation-compounds-ex04',
      prompt: 'Which compound means "coffee cup"?',
      options: ['die Tassekaffee', 'die Kaffeetasse', 'der Kaffeetasse'],
      answer: 1,
      explanation: 'The main thing (the cup) comes last: Kaffee + Tasse. Gender from die Tasse → die Kaffeetasse.',
    },
    {
      type: 'match',
      id: 'a2-30-word-formation-compounds-ex05',
      prompt: 'Match the parts with the compound noun.',
      pairs: [
        ['Stadt + Plan', 'der Stadtplan'],
        ['Kind + Zimmer', 'das Kinderzimmer'],
        ['Geburt + Tag', 'der Geburtstag'],
        ['Straße + Bahn', 'die Straßenbahn'],
        ['Wort + Buch', 'das Wörterbuch'],
      ],
      explanation: 'Some compounds need a joining element: -er- (Kinderzimmer), -s- (Geburtstag), -n- (Straßenbahn), -er- with umlaut (Wörterbuch).',
    },
    {
      type: 'fill',
      id: 'a2-30-word-formation-compounds-ex06',
      prompt: 'der Arzt → die ___ (female doctor)',
      answer: ['Ärztin'],
      explanation: 'Add -in for the female form. Arzt takes an umlaut: Ärztin.',
    },
    {
      type: 'mc',
      id: 'a2-30-word-formation-compounds-ex07',
      prompt: 'What is the plural of "die Erklärung"?',
      options: ['die Erklärunge', 'die Erklärungen', 'die Erklärungs'],
      answer: 1,
      explanation: 'All -ung nouns form the plural with -en: die Erklärungen.',
    },
    {
      type: 'fill',
      id: 'a2-30-word-formation-compounds-ex08',
      prompt: 'die Arbeit + die Zeit = die ___ (working hours; needs a joining -s-)',
      answer: ['Arbeitszeit'],
      explanation: 'Arbeit takes the joining element -s- in compounds: Arbeitszeit, Arbeitsplatz, Arbeitstag.',
    },
    {
      type: 'mc',
      id: 'a2-30-word-formation-compounds-ex09',
      prompt: 'Which word is a tool or machine, not a person?',
      options: ['der Lehrer', 'der Drucker', 'der Bäcker'],
      answer: 1,
      explanation: 'der Drucker is the printer (machine) from drucken. Lehrer and Bäcker are people.',
    },
    {
      type: 'mc',
      id: 'a2-30-word-formation-compounds-ex10',
      prompt: 'Split "Krankenversicherungskarte" correctly. What is the main thing?',
      options: ['die Karte', 'die Versicherung', 'der Kranke'],
      answer: 0,
      explanation: 'Krank-en-versicherung-s-karte: the last part is Karte, so it is a kind of card, and the gender is die.',
    },
    {
      type: 'fill',
      id: 'a2-30-word-formation-compounds-ex11',
      prompt: 'einladen → die ___ (invitation)',
      answer: ['Einladung'],
      explanation: 'The separable prefix stays: einlad- + -ung = die Einladung.',
    },
    {
      type: 'translate',
      id: 'a2-30-word-formation-compounds-ex12',
      prompt: 'Translate: "The teacher (female) is explaining the exercise."',
      answer: ['Die Lehrerin erklärt die Übung.', 'Die Lehrerin erklärt die Aufgabe.'],
      hint: 'lehren → der Lehrer → die Lehrerin; üben → die Übung',
      explanation: 'Lehrer + -in = die Lehrerin. üben + -ung = die Übung (feminine, Accusative die).',
    },
  ],
};

export default topic;
