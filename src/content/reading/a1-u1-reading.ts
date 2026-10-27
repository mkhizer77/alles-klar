import type { ReadingText } from '../types';

const text: ReadingText = {
  id: 'a1-u1-reading',
  level: 'A1',
  unit: 1,
  title: 'Hallo, ich bin Leon',
  intro: 'A short profile text from a language-course notice board: a new student introduces himself.',
  tip: 'Before you read word by word, scan for names, numbers and places. They tell you who, how old and where, and that is most of a profile.',
  paragraphs: [
    'Hallo! Ich heiße Leon Berger. Ich bin 29 Jahre alt und komme aus Graz, das ist in Österreich. Jetzt wohne ich in Berlin, in Kreuzberg.',
    'Ich bin Programmierer. Ich arbeite bei einer kleinen Firma. Meine Muttersprache ist Deutsch, aber ich spreche auch Englisch und ein bisschen Spanisch.',
    'Meine Hobbys sind Fußball und Kochen. Am Wochenende koche ich gern für Freunde. Meine Telefonnummer ist 0176 55 48 22 10. Schreib mir!',
  ],
  glossary: [
    { de: 'die Muttersprache', en: 'mother tongue, first language' },
    { de: 'ein bisschen', en: 'a little' },
    { de: 'die Firma', en: 'company' },
    { de: 'am Wochenende', en: 'at the weekend' },
    { de: 'gern', en: 'gladly, like to' },
    { de: 'Schreib mir!', en: 'Write to me!' },
  ],
  questions: [
    {
      type: 'mc',
      id: 'a1-u1-reading-q01',
      prompt: 'Where does Leon come from?',
      options: ['Berlin', 'Graz', 'Spain'],
      answer: 1,
      explanation: '"Ich komme aus Graz" – kommen aus = to come from. Berlin is where he lives now (wohnen).',
    },
    {
      type: 'mc',
      id: 'a1-u1-reading-q02',
      prompt: 'Richtig oder falsch? Leon ist 39 Jahre alt.',
      options: ['Richtig', 'Falsch'],
      answer: 1,
      explanation: 'The text says "Ich bin 29 Jahre alt". 29 = neunundzwanzig, 39 = neununddreißig.',
    },
    {
      type: 'fill',
      id: 'a1-u1-reading-q03',
      prompt: 'Leon ist ___ von Beruf. (job, as written in the text)',
      answer: ['Programmierer'],
      explanation: '"Ich bin Programmierer." Jobs in German come without an article: Ich bin Programmierer, not ein Programmierer.',
    },
    {
      type: 'mc',
      id: 'a1-u1-reading-q04',
      prompt: 'Which languages does Leon speak?',
      options: ['German and English only', 'German, English and a little Spanish', 'German and Spanish only'],
      answer: 1,
      explanation: '"ich spreche auch Englisch und ein bisschen Spanisch" – auch = also, ein bisschen = a little.',
    },
    {
      type: 'mc',
      id: 'a1-u1-reading-q05',
      prompt: 'What does Leon like doing at the weekend?',
      options: ['Playing football', 'Cooking for friends', 'Working at the company'],
      answer: 1,
      explanation: '"Am Wochenende koche ich gern für Freunde." koche … gern = like to cook.',
    },
    {
      type: 'match',
      id: 'a1-u1-reading-q06',
      prompt: 'Match the words from the text.',
      pairs: [
        ['heißen', 'to be called'],
        ['wohnen', 'to live'],
        ['arbeiten', 'to work'],
        ['sprechen', 'to speak'],
      ],
      explanation: 'Four verbs you need for any introduction: heißen, wohnen, arbeiten, sprechen.',
    },
    {
      type: 'translate',
      id: 'a1-u1-reading-q07',
      prompt: 'Translate, like Leon would say it: "I live in Berlin."',
      answer: ['Ich wohne in Berlin.'],
      hint: 'wohnen = to live',
      explanation: 'wohnen takes -e with ich: ich wohne. in + city.',
    },
  ],
};

export default text;
