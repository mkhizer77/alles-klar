import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a1-u6-writing',
  level: 'A1',
  unit: 6,
  title: 'Plan a weekend trip by email',
  textType: 'email',
  register: 'informal',
  task: 'You and your friend Paul are going to Munich for the weekend. Write him an email with the plan: when and how you travel, where you stay and what you will do.',
  points: ['when and how you travel there (day, time, transport)', 'where you stay', 'what you do on which day', 'when you come back and a question for Paul'],
  minWords: 40,
  maxWords: 80,
  usefulPhrases: [
    { de: 'Lieber Paul,', en: 'Dear Paul,', role: 'greeting' },
    { de: 'Hallo Paul,', en: 'Hi Paul,', role: 'greeting' },
    { de: 'Ich plane unsere Reise nach …', en: 'I am planning our trip to …', role: 'phrase' },
    { de: 'Wir fahren am … um … Uhr mit dem Zug.', en: 'We travel on … at … o’clock by train.', role: 'phrase' },
    { de: 'Die Fahrt dauert … Stunden.', en: 'The journey takes … hours.', role: 'phrase' },
    { de: 'Wir schlafen in einem Hotel / bei …', en: 'We sleep in a hotel / at …’s place.', role: 'phrase' },
    { de: 'Am Samstag gehen wir ins Museum / in den Park.', en: 'On Saturday we go to the museum / the park.', role: 'phrase' },
    { de: 'Von … bis … Uhr haben wir Zeit.', en: 'From … to … o’clock we have time.', role: 'phrase' },
    { de: 'Um … Uhr fahren wir zurück.', en: 'At … o’clock we go back.', role: 'phrase' },
    { de: 'danach', en: 'after that', role: 'connector' },
    { de: 'Viele Grüße', en: 'Best wishes', role: 'closing' },
    { de: 'Bis Freitag!', en: 'See you Friday!', role: 'closing' },
  ],
  grammarFocus: ['a1-28-time-prepositions', 'a1-29-two-way-prepositions', 'a1-30-word-order-midfield', 'a1-08-numbers-time'],
  mustUse: [
    { label: 'time prepositions am / um / im (am Freitag, um 8 Uhr, im Juli)', pattern: '\\b(am|um|im)\\b', min: 3 },
    { label: 'a place with in / an / auf (ins Museum, in den Park, im Hotel, am Bahnhof)', pattern: '\\b((in|an|auf|vor|neben)\\s+(dem|der|den|das|die|einem|einer|ein|eine|einen)|ins|im|ans|aufs|am)\\b', min: 2 },
    { label: '"von … bis" for a time span', pattern: '\\bvon\\b[^.!?]*\\bbis\\b', min: 1 },
  ],
  checklist: [
    'All four points are covered: when and how you travel, where you stay, what you do on which day, when you come back and a question.',
    'There is a greeting at the start and a closing at the end.',
    'Days take "am", clock times "um", months "im": am Freitag, um 8 Uhr, im Juli.',
    'Direction (wohin?) takes the Accusative: ins Museum, in den Park; location (wo?) takes the Dative: im Hotel, am Bahnhof.',
    'When time comes first, the subject moves behind the verb: Am Samstag gehen wir …',
    'Time comes before place in the middle of the sentence: Wir fahren am Freitag um 8 Uhr nach München.',
    'Times and numbers are written consistently (um 8 Uhr, sechs Stunden).',
    'The text has between 40 and 80 words.',
  ],
  model: [
    'Lieber Paul,',
    'ich plane unsere Reise nach München. Wir fahren am Freitag um 8 Uhr mit dem Zug von Hamburg nach München. Die Fahrt dauert sechs Stunden. Wir schlafen in einem Hotel am Hauptbahnhof. Am Samstag gehen wir ins Deutsche Museum und danach in den Englischen Garten. Am Sonntag haben wir von 10 bis 14 Uhr Zeit für die Stadt. Um 15 Uhr fahren wir zurück. Hast du schon ein Ticket?',
    'Viele Grüße',
    'Jana',
  ],
  modelNotes: [
    'Each time expression has the right preposition: **am Freitag**, **am Samstag** (days), **um 8 Uhr**, **um 15 Uhr** (clock times), **von 10 bis 14 Uhr** (a span).',
    'Two-way prepositions change case with the question: *wohin?* gives the Accusative (**ins Deutsche Museum**, **in den Englischen Garten**), *wo?* gives the Dative (**in einem Hotel**, **am Hauptbahnhof**).',
    'In the middle of the sentence time comes before place: **am Freitag um 8 Uhr mit dem Zug von Hamburg nach München**.',
    'Sentences that start with a time expression keep the verb second: **Am Samstag gehen wir …**, **Um 15 Uhr fahren wir zurück.**',
    'The separable verb **zurückfahren** splits like in unit 3: *fahren wir zurück*.',
  ],
};

export default task;
