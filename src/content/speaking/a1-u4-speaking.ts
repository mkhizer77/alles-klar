import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a1-u4-speaking',
  level: 'A1',
  unit: 4,
  title: 'Buying a jacket in a shop',
  situation: 'You are in a clothes shop in Hamburg. You want a jacket for yourself and a present for your brother, whose birthday is next week. A shop assistant comes over to help.',
  partner: {
    name: 'Frau Schmidt',
    role: 'shop assistant in a clothes shop',
    persona: 'Friendly and a little pushy. Speaks slowly in short sentences, asks for whom the clothes are and which size you need, and always offers two options to choose from (a blue jacket and a black one, size M or L). Names prices clearly and asks how you want to pay.',
  },
  register: 'Sie',
  goals: ['say what you are looking for and for whom (for example für meinen Bruder)', 'ask whether you can try the jacket on and say your size', 'say what you do not like and ask for it in another colour or size, using ihn, sie or es', 'ask what it costs and say how you want to pay'],
  opener: 'Guten Tag! Brauchen Sie Hilfe? Was suchen Sie denn?',
  usefulPhrases: [
    { de: 'Ich suche eine Jacke für meinen Bruder.', en: 'I am looking for a jacket for my brother.' },
    { de: 'Ich brauche einen Pullover in Größe M.', en: 'I need a jumper in size M.' },
    { de: 'Kann ich die Hose anprobieren?', en: 'Can I try the trousers on?' },
    { de: 'Die Hose passt nicht. Haben Sie sie auch in Größe 40?', en: 'The trousers do not fit. Do you have them in size 40 as well?' },
    { de: 'Ich finde den Pullover schön. Ich nehme ihn.', en: 'I think the jumper is nice. I will take it.' },
    { de: 'Was kostet die Jacke?', en: 'What does the jacket cost?' },
    { de: 'Das ist zu teuer für mich.', en: 'That is too expensive for me.' },
    { de: 'Kann ich mit Karte bezahlen?', en: 'Can I pay by card?' },
    { de: 'Wie bitte? Können Sie das bitte wiederholen?', en: 'Pardon? Could you please repeat that?' },
  ],
  grammarFocus: ['a1-20-accusative', 'a1-21-possessive-articles', 'a1-22-accusative-prepositions', 'a1-23-accusative-pronouns', 'a1-13-negation'],
  vocabFocus: ['die Jacke', 'der Pullover', 'die Hose', 'die Größe', 'anprobieren', 'passen', 'kosten', 'bezahlen', 'teuer', 'Was kostet das?'],
  minTurns: 5,
};

export default scenario;
