import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a1-u8-writing',
  level: 'A1',
  unit: 8,
  title: 'Reply to a friend about your new course',
  textType: 'email',
  register: 'informal',
  task: 'Your friend Sophie has written to ask how your new German course is going. Reply with an email: tell her about the course, compare it with your old one and say how you feel.',
  points: ['thanks for her email and how you are', 'what the new course is like and why it is good (or not)', 'a comparison with your old course or group', 'how you feel about it and a question or invitation for Sophie'],
  minWords: 40,
  maxWords: 80,
  usefulPhrases: [
    { de: 'Liebe Sophie,', en: 'Dear Sophie,', role: 'greeting' },
    { de: 'Danke für deine E-Mail!', en: 'Thanks for your email!', role: 'phrase' },
    { de: 'Mir geht es gut.', en: 'I am fine.', role: 'phrase' },
    { de: 'Seit … habe ich einen Deutschkurs.', en: 'Since … I have been doing a German course.', role: 'phrase' },
    { de: 'Der Kurs ist besser / größer als …', en: 'The course is better / bigger than …', role: 'phrase' },
    { de: 'Am Anfang war ich nervös, jetzt bin ich froh.', en: 'At the start I was nervous, now I am happy.', role: 'phrase' },
    { de: 'Hast du im … Zeit?', en: 'Do you have time in …?', role: 'phrase' },
    { de: 'Ich möchte dich gern besuchen.', en: 'I would like to visit you.', role: 'phrase' },
    { de: 'denn', en: 'because', role: 'connector' },
    { de: 'aber', en: 'but', role: 'connector' },
    { de: 'oder', en: 'or', role: 'connector' },
    { de: 'Liebe Grüße', en: 'Love / best wishes', role: 'closing' },
  ],
  grammarFocus: ['a1-34-coordinating-conjunctions', 'a1-35-comparative-basics', 'a1-36-writing-short-messages'],
  mustUse: [
    { label: '"aber" or "denn" to join two ideas', pattern: '\\b(aber|denn)\\b', min: 2 },
    { label: '"und" or "oder" to join two ideas', pattern: '\\b(und|oder)\\b', min: 2 },
    { label: 'a comparison with "… als" or "so … wie" (besser als, größer als, so groß wie)', pattern: '\\b(\\w+er als|(genau)?so \\w+ wie)\\b', min: 1 },
  ],
  checklist: [
    'All four points are covered: thanks and how you are, what the course is like, a comparison with the old one, how you feel and a question for Sophie.',
    'There is a greeting at the start and a closing at the end, and the first line after the greeting starts in lower case.',
    'After und, aber, denn and oder the word order does not change: the verb stays second (…, denn die Lehrerin erklärt alles).',
    '"denn" gives a reason, "aber" a contrast: they are not mixed up.',
    'The comparative has -er and is followed by als: besser als, größer als (not mehr gut, als besser).',
    'Irregular comparatives are correct: gut becomes besser, groß becomes größer.',
    'The email ends with a question or an invitation so that Sophie can answer.',
    'The text has between 40 and 80 words.',
  ],
  model: [
    'Liebe Sophie,',
    'danke für deine E-Mail! Mir geht es gut. Seit September habe ich einen Deutschkurs. Der Kurs ist besser als mein Kurs in Bonn, denn die Lehrerin erklärt alles langsam und wir sprechen viel. Die Gruppe ist größer als vorher, aber alle sind nett. Am Anfang war ich nervös, jetzt bin ich froh. Nur die Grammatik ist noch schwer. Hast du im Oktober Zeit oder bist du im Urlaub? Ich möchte dich gern besuchen.',
    'Liebe Grüße',
    'Amir',
  ],
  modelNotes: [
    'All four conjunctions appear and none of them changes the word order: **denn** die Lehrerin erklärt …, **und** wir sprechen viel, **aber** alle sind nett, **oder** bist du im Urlaub?',
    '**denn** gives the reason (why the course is better), **aber** adds a contrast (big group, but nice people).',
    'The comparisons use the comparative plus **als**: **besser als** (irregular, from *gut*) and **größer als** (with umlaut, from *groß*).',
    'Feelings are expressed with **war** and **bin** plus an adjective: *Am Anfang* **war ich nervös**, *jetzt* **bin ich froh**.',
    'The email has the full shape of a reply: thanks for the last email, news, a question (**Hast du im Oktober Zeit …?**) and a closing.',
  ],
};

export default task;
