import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a1-u1-writing',
  level: 'A1',
  unit: 1,
  title: 'Introduce yourself to your course group',
  textType: 'message',
  register: 'informal',
  task: 'Your German course has a group chat. Write a short message to introduce yourself to the other learners.',
  points: ['your name, age and where you come from', 'where you live now and what you do', 'which languages you speak', 'one hobby'],
  minWords: 30,
  maxWords: 60,
  usefulPhrases: [
    { de: 'Hallo zusammen!', en: 'Hi everyone!', role: 'greeting' },
    { de: 'Ich heiße …', en: 'My name is …', role: 'phrase' },
    { de: 'Ich bin … Jahre alt.', en: 'I am … years old.', role: 'phrase' },
    { de: 'Ich komme aus …', en: 'I come from …', role: 'phrase' },
    { de: 'Ich wohne in …', en: 'I live in …', role: 'phrase' },
    { de: 'Ich bin … von Beruf.', en: 'I am a … by profession.', role: 'phrase' },
    { de: 'Ich spreche … und ein bisschen …', en: 'I speak … and a little …', role: 'phrase' },
    { de: 'Mein Hobby ist …', en: 'My hobby is …', role: 'phrase' },
    { de: 'und', en: 'and', role: 'connector' },
    { de: 'Bis bald!', en: 'See you soon!', role: 'closing' },
    { de: 'Viele Grüße', en: 'Best wishes', role: 'closing' },
  ],
  grammarFocus: ['a1-02-greetings', 'a1-03-personal-pronouns', 'a1-04-sein-haben', 'a1-05-present-tense-regular'],
  mustUse: [
    { label: 'the verb "heißen" or "sein" to say who you are (ich heiße / ich bin)', pattern: '\\bich (heiße|bin)\\b', min: 1 },
    { label: '"kommen aus" or "wohnen in"', pattern: '\\b(komme aus|wohne in)\\b', min: 1 },
    { label: '"sprechen" for languages (ich spreche)', pattern: '\\bspreche\\b', min: 1 },
  ],
  checklist: [
    'All four points are covered: name/age/origin, where you live and what you do, languages, a hobby.',
    'There is a greeting at the start and a closing at the end.',
    'Every sentence has a verb in second position (Ich wohne in …, not Ich in … wohne).',
    'The verb endings match ich: heiße, bin, komme, wohne, spreche, arbeite.',
    'All nouns start with a capital letter (Jahre, Hobby, Beruf, Fußball).',
    'Countries and languages are spelled with a capital (Deutschland, Englisch).',
    'The text has between 30 and 60 words.',
  ],
  model: [
    'Hallo zusammen!',
    'Ich heiße Sara Khan und bin 31 Jahre alt. Ich komme aus Pakistan, aus Lahore. Jetzt wohne ich in Hamburg und arbeite als Designerin. Ich spreche Urdu, Englisch und ein bisschen Deutsch. Mein Hobby ist Fotografie.',
    'Bis bald!',
    'Sara',
  ],
  modelNotes: [
    'Greeting (**Hallo zusammen!**), body, closing (**Bis bald!**) and name on its own line: the standard shape of a chat message.',
    'Two facts are joined with **und** in one sentence (*Ich heiße … und bin …*), so the text does not read as a list.',
    '**Jetzt wohne ich** shows the verb-second rule: when *jetzt* comes first, the verb still stays second and *ich* moves after it.',
    'Jobs have no article: **als Designerin**, not *als eine Designerin*.',
    'Languages and countries are capitalised: **Urdu, Englisch, Deutsch, Pakistan**.',
  ],
};

export default task;
