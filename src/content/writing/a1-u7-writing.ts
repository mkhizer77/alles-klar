import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a1-u7-writing',
  level: 'A1',
  unit: 7,
  title: 'Tell a friend about your weekend',
  textType: 'message',
  register: 'informal',
  task: 'Your friend Lukas asks what you did at the weekend. Write him a message about your Saturday and Sunday.',
  points: ['where you went on Saturday and with whom', 'what you did there', 'what the weather was like or how it was', 'what you did on Sunday and a question for Lukas'],
  minWords: 40,
  maxWords: 80,
  usefulPhrases: [
    { de: 'Hallo Lukas,', en: 'Hi Lukas,', role: 'greeting' },
    { de: 'Mein Wochenende war super / schön / ruhig.', en: 'My weekend was great / nice / quiet.', role: 'phrase' },
    { de: 'Am Samstag bin ich nach … gefahren.', en: 'On Saturday I went to …', role: 'phrase' },
    { de: 'Wir haben … besucht / gegessen / gemacht.', en: 'We visited / ate / did …', role: 'phrase' },
    { de: 'Das Wetter war …', en: 'The weather was …', role: 'phrase' },
    { de: 'Wir hatten viel / wenig Zeit.', en: 'We had a lot of / little time.', role: 'phrase' },
    { de: 'Am Sonntag habe ich lange geschlafen.', en: 'On Sunday I slept in.', role: 'phrase' },
    { de: 'Und du? Was hast du gemacht?', en: 'And you? What did you do?', role: 'phrase' },
    { de: 'dann / danach', en: 'then / after that', role: 'connector' },
    { de: 'aber', en: 'but', role: 'connector' },
    { de: 'Liebe Grüße', en: 'Best wishes', role: 'closing' },
    { de: 'Bis bald!', en: 'See you soon!', role: 'closing' },
  ],
  grammarFocus: ['a1-31-perfekt-haben', 'a1-32-perfekt-sein', 'a1-33-war-hatte'],
  mustUse: [
    { label: 'the Perfekt with haben (ich habe … gemacht, wir haben … gegessen)', pattern: '\\b(habe|hast|hat|haben|habt)\\b[^.!?]*\\b(ge\\w+(t|en)|\\w+iert)\\b', min: 2 },
    { label: 'the Perfekt with sein for movement (ich bin … gefahren / gegangen)', pattern: '\\b(bin|bist|ist|sind|seid)\\b[^.!?]*\\bge\\w+en\\b', min: 1 },
    { label: '"war" or "hatte" for how something was', pattern: '\\b(war|warst|waren|hatte|hattest|hatten)\\b', min: 2 },
  ],
  checklist: [
    'All four points are covered: where you went and with whom, what you did there, the weather or how it was, Sunday and a question for Lukas.',
    'There is a greeting at the start and a closing at the end.',
    'Verbs of movement form the Perfekt with sein: ich bin gefahren, wir sind gegangen (not ich habe gefahren).',
    'Other verbs form the Perfekt with haben: wir haben gegessen, ich habe geschlafen.',
    'The participle stands at the end of the sentence: Am Samstag bin ich nach Dresden gefahren.',
    'Separable verbs put ge- in the middle: angerufen, eingekauft.',
    '"sein" and "haben" themselves are in the Präteritum: Das Wetter war schön, wir hatten wenig Zeit (not ist gewesen).',
    'The text has between 40 and 80 words.',
  ],
  model: [
    'Hallo Lukas,',
    'wie geht es dir? Mein Wochenende war super. Am Samstag bin ich mit Anna nach Dresden gefahren. Wir haben die Altstadt besichtigt und ein Museum besucht. Das Wetter war schön, aber wir hatten nur wenig Zeit. Abends haben wir in einem Restaurant gegessen. Am Sonntag habe ich lange geschlafen und dann meine Eltern angerufen. Nachmittags bin ich mit dem Rad an den See gefahren. Und du? Was hast du gemacht?',
    'Liebe Grüße',
    'Tom',
  ],
  modelNotes: [
    'Movement takes **sein**: **bin … gefahren** (twice). Everything else takes **haben**: **haben … besichtigt, besucht, gegessen**, **habe … geschlafen, angerufen**, **hast … gemacht**.',
    'The participle always closes the sentence bracket: *Abends haben wir in einem Restaurant* **gegessen**.',
    'Verbs starting with be- have no ge- (**besichtigt, besucht**), while separable verbs put it in the middle (**angerufen**).',
    'For *sein* and *haben* the simple past is used instead of the Perfekt: **war super**, **war schön**, **hatten nur wenig Zeit**.',
    'The weekend is told in order with time words first (**Am Samstag**, **Abends**, **Am Sonntag**, **Nachmittags**), and the question at the end hands the conversation back to Lukas.',
  ],
};

export default task;
