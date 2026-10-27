import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a1-u2-writing',
  level: 'A1',
  unit: 2,
  title: 'Describe your new flat to a friend',
  textType: 'message',
  register: 'informal',
  task: 'You have just moved into a new flat. Your friend Lena asks what it is like. Write her a short message describing the flat and your room.',
  points: ['how many rooms the flat has and what they are', 'what is in your room', 'something the flat does not have (use kein)', 'your favourite place in the flat and why you like it'],
  minWords: 30,
  maxWords: 60,
  usefulPhrases: [
    { de: 'Hallo Lena!', en: 'Hi Lena!', role: 'greeting' },
    { de: 'Ich habe jetzt eine neue Wohnung.', en: 'I have a new flat now.', role: 'phrase' },
    { de: 'Die Wohnung hat … Zimmer.', en: 'The flat has … rooms.', role: 'phrase' },
    { de: 'Es gibt …', en: 'There is / there are …', role: 'phrase' },
    { de: 'Es gibt keinen / keine / kein …', en: 'There is no …', role: 'phrase' },
    { de: 'Das Zimmer ist groß / klein / hell.', en: 'The room is big / small / bright.', role: 'phrase' },
    { de: 'Mein Lieblingsplatz ist …', en: 'My favourite spot is …', role: 'phrase' },
    { de: 'und', en: 'and', role: 'connector' },
    { de: 'aber', en: 'but', role: 'connector' },
    { de: 'Bis bald!', en: 'See you soon!', role: 'closing' },
    { de: 'Liebe Grüße', en: 'Love / best wishes', role: 'closing' },
  ],
  grammarFocus: ['a1-09-gender-articles', 'a1-12-indefinite-articles', 'a1-13-negation', 'a1-14-es-gibt-demonstratives'],
  mustUse: [
    { label: '"es gibt" to say what there is', pattern: '\\b(es gibt|gibt es)\\b', min: 2 },
    { label: '"kein / keine / keinen" to say what there is not', pattern: '\\bkein(e|en)?\\b', min: 1 },
    { label: 'an indefinite article (ein / eine / einen)', pattern: '\\bein(e|en)?\\b', min: 2 },
  ],
  checklist: [
    'All four points are covered: the rooms, what is in your room, something the flat does not have, your favourite place.',
    'There is a greeting at the start and a closing at the end.',
    '"Es gibt" is used at least twice, and the noun after it is in the Accusative (es gibt einen Balkon, not ein Balkon).',
    'A noun is negated with kein, not with nicht (Es gibt keinen Balkon, not nicht ein Balkon).',
    'The articles match the gender of the nouns: die Küche, das Bad, der Schrank.',
    'Every sentence has the verb in second position (Mein Zimmer hat …, Es gibt …).',
    'All nouns start with a capital letter (Wohnung, Zimmer, Bett, Sofa).',
    'The text has between 30 and 60 words.',
  ],
  model: [
    'Hallo Lena!',
    'Ich habe jetzt eine neue Wohnung. Sie ist klein, aber sehr hell. Es gibt zwei Zimmer, eine Küche und ein Bad. Mein Zimmer hat ein Bett, einen Schreibtisch und einen Schrank. Es gibt keinen Balkon und leider auch keine Waschmaschine. Mein Lieblingsplatz ist das Sofa im Wohnzimmer. Es ist blau und sehr bequem.',
    'Bis bald!',
    'Timo',
  ],
  modelNotes: [
    'The message has the standard shape: greeting (**Hallo Lena!**), body, closing (**Bis bald!**) and name.',
    '**Es gibt** is followed by the Accusative, so masculine nouns take **einen / keinen** (*es gibt keinen Balkon*), while feminine and neuter nouns look like the Nominative (*eine Küche, ein Bad*).',
    'Nouns are negated with **kein**, never with *nicht ein*: **keinen Balkon**, **keine Waschmaschine**.',
    'The second sentence picks up *die Wohnung* with the pronoun **Sie** (feminine), and *das Sofa* with **Es** (neuter), so the text does not repeat the nouns.',
    '**Aber** adds a contrast inside one sentence (*klein, aber sehr hell*), and **leider auch** softens the negative point.',
  ],
};

export default task;
