import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-30-word-formation-compounds',
  level: 'A2',
  unit: 10,
  order: 34,
  title: 'Compound nouns: der Kühlschrank',
  germanTerm: 'Komposita',
  tags: ['nouns', 'word formation', 'compounds', 'gender', 'vocabulary'],
  summary: 'German glues words together into one noun (Haus + Tür = Haustür). The last part is the main thing and decides the gender and the plural.',
  steps: [
    {
      title: 'Two words become one',
      text: `
German is famous for long words like *Krankenversicherungskarte*. They are not new words. They are **compounds** (*Komposita*): two or more words you already know, written as **one word**.

The **last** word is the main thing. The words before it say what kind: *die Haustür* is a kind of door, *der Kühlschrank* is a kind of cupboard (one that cools).
`,
      examples: [
        { de: 'Die Haustür ist offen.', en: 'The front door is open. (Haus + Tür: a kind of door)' },
        { de: 'Der Kühlschrank ist leer.', en: 'The fridge is empty. (kühl + Schrank: a cupboard that cools)' },
        { de: 'Ich trinke aus der Kaffeetasse.', en: 'I drink from the coffee cup. (Kaffee + Tasse)' },
      ],
    },
    {
      title: 'The last part gives gender and plural',
      text: `
The last word is the main thing, so it decides the **gender** (der / die / das) and the **plural**: *die Tür, die Türen* → **die** Haustür, die Haus**türen**. The first word, *das Haus*, does not matter.

| parts | compound | plural |
|---|---|---|
| das Haus + die Tür | **die** Haustür | die Haustüren |
| die Stadt + der Plan | **der** Stadtplan | die Stadtpläne |
| das Wort + das Buch | **das** Wörterbuch | die Wörterbücher |
`,
      examples: [
        { de: 'Wo ist der Stadtplan?', en: 'Where is the city map? (der, because der Plan)' },
        { de: 'Das Wörterbuch ist alt.', en: 'The dictionary is old. (das, because das Buch)' },
        { de: 'Die Haustüren sind neu.', en: 'The front doors are new. (plural of die Tür)' },
      ],
    },
    {
      title: 'Read long words from the right',
      text: `
When you meet a long word, start at the **end** and work backwards. The last part tells you what it is; each part to the left adds a detail.

*Krankenversicherungskarte*: **Karte** (a card) ← *Versicherung* (insurance) ← *kranken* (sick). So: a card for health insurance, and it is **die** Karte.
`,
      examples: [
        { de: 'Hier ist meine Krankenversicherungskarte.', en: 'Here is my health insurance card. (Karte = a card)' },
        { de: 'Der Fahrkartenautomat ist kaputt.', en: 'The ticket machine is broken. (Automat = a machine for Fahrkarten)' },
        { de: 'Die Bushaltestelle ist gleich hier.', en: 'The bus stop is right here. (Stelle = a place, for the Bus to halten)' },
      ],
    },
    {
      title: 'The first part: verb, adjective, preposition',
      text: `
The first part is often a noun, but it can also be a **verb stem** (*schlafen* → das **Schlaf**zimmer), an **adjective** (*groß* → die **Groß**stadt) or a **preposition** (*vor* → der **Vor**name). The rule stays the same: the last part is the main thing and gives the gender.
`,
      examples: [
        { de: 'Das Schlafzimmer ist klein.', en: 'The bedroom is small. (schlafen + Zimmer)' },
        { de: 'Berlin ist eine Großstadt.', en: 'Berlin is a big city. (groß + Stadt)' },
        { de: 'Mein Vorname ist Anna.', en: 'My first name is Anna. (vor + Name)' },
      ],
    },
    {
      title: 'Linking letters: -s-, -n-, -e-, -er-',
      text: `
Sometimes a small sound sits between the parts so the word is easier to say: a **linking letter** (*Fugenelement*).

| letter | example |
|---|---|
| **-s-** | der Geburt**s**tag, die Arbeit**s**zeit |
| **-n-** | die Straße**n**bahn, der Familie**n**name |
| **-e-** | das Tag**e**buch, die Hund**e**hütte |
| **-er-** | das Kind**er**zimmer, das Wört**er**buch |

There is no simple rule for which letter appears, so learn it with the word. Many compounds have none: *die Haustür*.
`,
      examples: [
        { de: 'Mein Geburtstag ist im Mai.', en: 'My birthday is in May. (Geburt + s + Tag)' },
        { de: 'Die Straßenbahn kommt gleich.', en: 'The tram is coming soon. (Straße + n + Bahn)' },
        { de: 'Das Kinderzimmer ist bunt.', en: "The children's room is colourful. (Kind + er + Zimmer)" },
        { de: 'Ich schreibe ein Tagebuch.', en: 'I keep a diary. (Tag + e + Buch)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-09-gender-articles', note: 'The last part of a compound decides the gender: die Tür, so die Haustür.' },
    { topicId: 'a1-10-plural', note: 'A compound takes the plural of its last word: die Türen, so die Haustüren.' },
    { topicId: 'a2-30b-nouns-from-verbs', note: 'The sibling topic: nouns built from verbs with -ung, -er and -in.' },
    { topicId: 'a2-31-reading-writing-email', note: 'Splitting compounds from the right is the main trick for guessing unknown words while reading.' },
    { topicId: 'b1-30-suffixes', note: 'At B1 more noun endings (-heit, -keit, -schaft) follow the same idea: the ending decides the gender.' },
  ],
  edgeCases: [
    'The **last** word decides everything. *Der Apfelbaum* (der Baum) but *das Apfelmus* (das Mus). Learners often take the gender of the first word by mistake.',
    'Linking letters are not predictable. *Arbeit**s**zeit* has -s-, but *Arbeitgeber* (employer) has none. Learn them with the word.',
    'The plural changes only the **last** part: *der Stadtplan → die Stadtpläne*, *der Kühlschrank → die Kühlschränke*. The first part never changes.',
    'Some linking letters bring an umlaut: *das Wort → das Wörterbuch*, *das Buch → der Bücherschrank*. Say the word out loud and it sounds natural.',
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
      type: 'mc',
      id: 'a2-30-word-formation-compounds-ex02',
      prompt: 'Which compound means "coffee cup"?',
      options: ['die Tassekaffee', 'die Kaffeetasse', 'der Kaffeetasse'],
      answer: 1,
      explanation: 'The main thing (the cup) comes last: Kaffee + Tasse. Gender from die Tasse → die Kaffeetasse.',
    },
    {
      type: 'mc',
      id: 'a2-30-word-formation-compounds-ex03',
      prompt: 'der Apfel + der Baum. Which is correct?',
      options: ['der Apfelbaum', 'die Apfelbaum', 'das Apfelbaum'],
      answer: 0,
      explanation: 'Baum is the last word and is masculine, so der Apfelbaum. Compare das Apfelmus, because das Mus.',
    },
    {
      type: 'mc',
      id: 'a2-30-word-formation-compounds-ex04',
      prompt: 'What is the first part of "das Schlafzimmer"?',
      options: ['a noun (der Schlaf)', 'a verb stem (schlafen)', 'an adjective'],
      answer: 1,
      explanation: 'Schlaf- comes from the verb schlafen: a room for sleeping. The last part, Zimmer, gives the gender: das.',
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
      explanation: 'Some compounds need a linking letter: -er- (Kinderzimmer), -s- (Geburtstag), -n- (Straßenbahn), -er- with umlaut (Wörterbuch). Stadtplan has none.',
    },
    {
      type: 'fill',
      id: 'a2-30-word-formation-compounds-ex06',
      prompt: 'die Arbeit + die Zeit = die ___ (working hours; needs a linking -s-)',
      answer: ['Arbeitszeit'],
      explanation: 'Arbeit takes the linking letter -s- in compounds: Arbeitszeit, Arbeitsplatz, Arbeitstag.',
    },
    {
      type: 'fill',
      id: 'a2-30-word-formation-compounds-ex07',
      prompt: 'die Familie + der Name = der ___ (surname; needs a linking -n-)',
      answer: ['Familienname'],
      explanation: 'Familie takes -n- in compounds: Familienname, Familienfoto. The gender comes from der Name.',
    },
    {
      type: 'mc',
      id: 'a2-30-word-formation-compounds-ex08',
      prompt: 'What is the plural of "das Wörterbuch"?',
      options: ['die Wörterbuchs', 'die Wörterbücher', 'die Wörterbuche'],
      answer: 1,
      explanation: 'The plural is the plural of the last word: das Buch → die Bücher, so die Wörterbücher.',
    },
    {
      type: 'fill',
      id: 'a2-30-word-formation-compounds-ex09',
      prompt: 'Ein Kühlschrank, zwei ___. (plural; der Schrank → die Schränke)',
      answer: ['Kühlschränke'],
      explanation: 'Only the last part changes in the plural: Schrank → Schränke, so Kühlschrank → Kühlschränke.',
    },
    {
      type: 'mc',
      id: 'a2-30-word-formation-compounds-ex10',
      prompt: 'Split "Krankenversicherungskarte" from the right. What is the main thing?',
      options: ['die Karte', 'die Versicherung', 'der Kranke'],
      answer: 0,
      explanation: 'Krank-en-versicherung-s-karte: the last part is Karte, so it is a kind of card, and the gender is die.',
    },
    {
      type: 'order',
      id: 'a2-30-word-formation-compounds-ex11',
      prompt: 'Build the question: "Where is the city map?"',
      words: ['Stadtplan?', 'der', 'Wo', 'ist'],
      answer: ['Wo ist der Stadtplan?'],
      explanation: 'Stadt + Plan is one word, and it is der because der Plan is masculine.',
    },
    {
      type: 'translate',
      id: 'a2-30-word-formation-compounds-ex12',
      prompt: 'Translate: "The front door is open."',
      answer: ['Die Haustür ist offen.', 'Die Haustür ist auf.', 'Die Haustür ist geöffnet.'],
      hint: 'das Haus + die Tür; offen = open',
      explanation: 'Haus + Tür is written as one word. The gender comes from die Tür: die Haustür.',
    },
  ],
};

export default topic;
