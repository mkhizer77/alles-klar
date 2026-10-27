import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a1-u4-writing',
  level: 'A1',
  unit: 4,
  title: 'Plan a party with your flatmate',
  textType: 'message',
  register: 'informal',
  task: 'Your friend Lara has her birthday on Saturday and you are organising a small party. Write a message to your flatmate Jonas about the shopping and the plan.',
  points: ['whose birthday it is and when the party is', 'what you are buying (at least three things)', 'what Jonas should buy or bring', 'the present you have for Lara and whether Jonas is coming'],
  minWords: 40,
  maxWords: 80,
  usefulPhrases: [
    { de: 'Hallo Jonas,', en: 'Hi Jonas,', role: 'greeting' },
    { de: 'Am Samstag hat … Geburtstag.', en: 'On Saturday it is …’s birthday.', role: 'phrase' },
    { de: 'Ich mache eine Party für sie / ihn.', en: 'I am having a party for her / him.', role: 'phrase' },
    { de: 'Ich kaufe einen / eine / ein …', en: 'I am buying a …', role: 'phrase' },
    { de: 'Ich brauche deine Hilfe.', en: 'I need your help.', role: 'phrase' },
    { de: 'Kannst du … kaufen / mitbringen?', en: 'Can you buy / bring …?', role: 'phrase' },
    { de: 'Ich habe schon ein Geschenk für …', en: 'I already have a present for …', role: 'phrase' },
    { de: 'Kommst du auch?', en: 'Are you coming too?', role: 'phrase' },
    { de: 'Ich hole dich um … Uhr ab.', en: 'I will pick you up at … o’clock.', role: 'phrase' },
    { de: 'und', en: 'and', role: 'connector' },
    { de: 'Liebe Grüße', en: 'Best wishes', role: 'closing' },
    { de: 'Bis Samstag!', en: 'See you Saturday!', role: 'closing' },
  ],
  grammarFocus: ['a1-20-accusative', 'a1-21-possessive-articles', 'a1-22-accusative-prepositions', 'a1-23-accusative-pronouns'],
  mustUse: [
    { label: 'a masculine noun in the Accusative (einen / den / keinen / meinen / deinen …)', pattern: '\\b(einen|den|keinen|meinen|deinen|seinen|ihren|unseren|euren)\\b', min: 2 },
    { label: 'the preposition "für" (für sie, für die Party)', pattern: '\\bfür\\b', min: 1 },
    { label: 'a personal pronoun in the Accusative (mich, dich, ihn, uns, euch)', pattern: '\\b(mich|dich|ihn|uns|euch)\\b', min: 1 },
  ],
  checklist: [
    'All four points are covered: whose birthday and when, what you are buying, what Jonas should buy or bring, the present and whether he is coming.',
    'There is a greeting at the start and a closing at the end.',
    'Masculine direct objects take the Accusative: einen Kuchen, den Saft (not ein Kuchen, der Saft).',
    'Feminine and neuter direct objects look like the Nominative: eine Torte, ein Geschenk, das Wasser.',
    '"für" is always followed by the Accusative: für sie, für Lara, für den Abend.',
    'Possessive articles get Accusative endings too: deine Hilfe, meinen Bruder.',
    'The Accusative pronoun is used for people as objects: Ich hole dich ab (not du).',
    'The text has between 40 and 80 words.',
  ],
  model: [
    'Hallo Jonas,',
    'am Samstag hat Lara Geburtstag und ich mache eine Party für sie. Ich gehe heute Nachmittag einkaufen. Ich kaufe einen Kuchen, einen Salat, Brot und Käse. Für die Getränke brauche ich deine Hilfe: Kannst du den Saft und das Wasser kaufen? Ich habe schon ein Geschenk für Lara. Es ist ein Buch über Italien. Hast du Zeit und kommst du auch? Ich hole dich um sechs Uhr ab.',
    'Liebe Grüße',
    'Mia',
  ],
  modelNotes: [
    'After the greeting **Hallo Jonas,** the first line continues in lower case (**am Samstag …**), the normal rule after a comma.',
    'Direct objects are in the Accusative: masculine nouns change their article (**einen Kuchen, einen Salat, den Saft**), feminine and neuter ones do not (**eine Party, ein Geschenk, das Wasser**).',
    '**für** always takes the Accusative: **für sie**, **für die Getränke**, **für Lara**.',
    'The possessive article gets an Accusative ending too: **deine Hilfe** (feminine, so it looks like the Nominative).',
    '**Ich hole dich … ab** combines an Accusative pronoun (**dich**) with the separable verb *abholen* from unit 3.',
  ],
};

export default task;
