import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a1-u1-speaking',
  level: 'A1',
  unit: 1,
  title: 'First day at the language school',
  situation: 'It is your first day at a language school in Munich. You are at the reception desk to register for your course. The receptionist needs a few details from you.',
  partner: {
    name: 'Frau Berger',
    role: 'receptionist at a language school',
    persona: 'Friendly and patient. Speaks slowly in short sentences, asks one thing at a time, and asks you to spell your name. Confirms what she has understood by repeating it.',
  },
  register: 'Sie',
  goals: ['greet her and say your name, then spell your surname', 'say where you come from and where you live now', 'say which languages you speak', 'ask what time the course starts'],
  opener: 'Guten Tag! Willkommen in der Sprachschule. Wie heißen Sie?',
  usefulPhrases: [
    { de: 'Guten Tag, ich heiße …', en: 'Hello, my name is …' },
    { de: 'Mein Nachname ist … Ich buchstabiere: …', en: 'My surname is … I spell it: …' },
    { de: 'Ich komme aus …', en: 'I come from …' },
    { de: 'Ich wohne jetzt in …', en: 'I live in … now.' },
    { de: 'Ich spreche … und ein bisschen Deutsch.', en: 'I speak … and a little German.' },
    { de: 'Wann beginnt der Kurs?', en: 'When does the course start?' },
    { de: 'Wie bitte? Können Sie das wiederholen?', en: 'Pardon? Can you repeat that?' },
    { de: 'Vielen Dank, auf Wiedersehen!', en: 'Thank you very much, goodbye!' },
  ],
  grammarFocus: ['a1-01-pronunciation', 'a1-02-greetings', 'a1-04-sein-haben', 'a1-07-questions', 'a1-08-numbers-time'],
  vocabFocus: ['heißen', 'buchstabieren', 'kommen aus', 'wohnen in', 'sprechen', 'der Kurs', 'die Uhr', 'Entschuldigung'],
  minTurns: 5,
};

export default scenario;
