import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a1-u3-writing',
  level: 'A1',
  unit: 3,
  title: 'Post about your day and your hobbies',
  textType: 'post',
  register: 'informal',
  task: 'Your course forum has a thread called "Mein Tag". Write a post about a normal weekday and what you like doing in your free time.',
  points: ['when you get up and how your morning starts', 'what you have to do during the day (work or study)', 'what you like doing in the evening or at the weekend', 'a question to the other learners'],
  minWords: 40,
  maxWords: 80,
  usefulPhrases: [
    { de: 'Hallo zusammen!', en: 'Hi everyone!', role: 'greeting' },
    { de: 'Ich stehe um … Uhr auf.', en: 'I get up at … o’clock.', role: 'phrase' },
    { de: 'Dann frühstücke ich und …', en: 'Then I have breakfast and …', role: 'phrase' },
    { de: 'Ich muss um … Uhr anfangen.', en: 'I have to start at … o’clock.', role: 'phrase' },
    { de: 'Nach der Arbeit kaufe ich ein.', en: 'After work I do the shopping.', role: 'phrase' },
    { de: 'Abends sehe ich fern / lese ich.', en: 'In the evening I watch TV / I read.', role: 'phrase' },
    { de: 'Ich … gern, aber ich … lieber.', en: 'I like …, but I prefer …', role: 'phrase' },
    { de: 'Am Wochenende kann ich …', en: 'At the weekend I can …', role: 'phrase' },
    { de: 'dann', en: 'then', role: 'connector' },
    { de: 'oder', en: 'or', role: 'connector' },
    { de: 'Und ihr? Was macht ihr …?', en: 'And you? What do you do …?', role: 'closing' },
  ],
  grammarFocus: ['a1-15-irregular-present', 'a1-16-separable-verbs', 'a1-17-modal-verbs', 'a1-19-gern-lieber'],
  mustUse: [
    { label: 'a separable verb with its prefix at the end of the clause (ich stehe … auf, ich kaufe … ein)', pattern: '\\b(auf|an|ein|aus|mit|zurück|fern|ab|los)\\s*[.,!?]', min: 2 },
    { label: 'a modal verb (muss, kann, will, möchte, darf, soll)', pattern: '\\b(muss|musst|müssen|kann|kannst|können|will|willst|wollen|möchte|möchtest|darf|soll)\\b', min: 2 },
    { label: '"gern", "lieber" or "am liebsten" for likes and preferences', pattern: '\\b(gern|gerne|lieber|am liebsten)\\b', min: 1 },
  ],
  checklist: [
    'All four points are covered: getting up and the morning, what you have to do during the day, free time in the evening or at the weekend, a question to the others.',
    'Separable verbs are split: the prefix goes to the end of the clause (Ich stehe um sechs Uhr auf.).',
    'After a modal verb the second verb is an infinitive at the end (Ich muss um acht Uhr anfangen.).',
    'Stem-changing verbs have the right form for ich / er: ich sehe fern, ich lese, er fährt.',
    'Time expressions like "dann" or "abends" at the start push the subject behind the verb (Dann frühstücke ich …).',
    '"gern" or "lieber" comes after the verb (Ich koche gern.), not before it.',
    'All nouns start with a capital letter (Arbeit, Supermarkt, Wochenende).',
    'The text has between 40 and 80 words.',
  ],
  model: [
    'Hallo zusammen!',
    'Ich stehe um sechs Uhr auf. Dann frühstücke ich und fahre mit dem Bus zur Arbeit. Ich muss um acht Uhr anfangen. Mittags esse ich mit den Kollegen. Um fünf Uhr höre ich auf und kaufe im Supermarkt ein.',
    'Abends koche ich gern. Ich sehe nicht gern fern, ich lese lieber. Am Wochenende kann ich lange schlafen. Dann will ich Fußball spielen oder Freunde treffen. Und ihr? Was macht ihr am Wochenende?',
    'Nina',
  ],
  modelNotes: [
    'Separable verbs are split around the rest of the sentence: **Ich stehe … auf**, **ich höre … auf**, **kaufe … ein**, **sehe … fern**.',
    'With a modal verb the main verb goes to the end as an infinitive: **Ich muss … anfangen**, **kann ich … schlafen**, **will ich … spielen**.',
    'The post moves through the day with time words in first position (**Dann**, **Mittags**, **Um fünf Uhr**, **Abends**, **Am Wochenende**), and each time the verb stays second.',
    '**nicht gern … lieber** is the simplest way to contrast two hobbies: *Ich sehe nicht gern fern, ich lese lieber.*',
    'A question at the end (**Und ihr? Was macht ihr …?**) is what makes it a forum post rather than a diary entry.',
  ],
};

export default task;
