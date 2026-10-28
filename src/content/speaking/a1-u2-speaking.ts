import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a1-u2-speaking',
  level: 'A1',
  unit: 2,
  title: 'At the flea market stall',
  situation: 'It is Sunday and you are at a flea market in Berlin. You need a few things for your new flat and stop at a stall full of lamps, chairs, cups and glasses. The seller is keen to talk.',
  partner: {
    name: 'Herr Kaiser',
    role: 'seller at a flea market stall',
    persona: 'Chatty and good-natured. Speaks slowly in short sentences and names each object with its article when asked. Holds things up and asks what you need, offers the same object in two colours, and suggests one extra thing you did not ask for so you have to say no.',
  },
  register: 'Sie',
  goals: ['ask what two objects on the stall are and listen for their articles', 'say which object you need and in which colour', 'say politely what you do not need, using kein or nicht', 'ask what one thing costs and say that you take it'],
  opener: 'Guten Morgen! Schauen Sie ruhig. Hier gibt es Lampen, Stühle, Tassen und Gläser. Was brauchen Sie für die Wohnung?',
  usefulPhrases: [
    { de: 'Entschuldigung, was ist das?', en: 'Excuse me, what is this?' },
    { de: 'Ist das eine Lampe oder eine Uhr?', en: 'Is this a lamp or a clock?' },
    { de: 'Gibt es hier auch Teller?', en: 'Are there plates here too?' },
    { de: 'Ich brauche eine Lampe. Haben Sie die auch in Blau?', en: 'I need a lamp. Do you have it in blue as well?' },
    { de: 'Nein, danke, ich brauche keinen Stuhl.', en: 'No thank you, I do not need a chair.' },
    { de: 'Das ist nicht schön. Das nehme ich nicht.', en: 'That is not nice. I will not take that.' },
    { de: 'Was kostet die Tasse?', en: 'What does the cup cost?' },
    { de: 'Gut, ich nehme das Glas.', en: 'Good, I will take the glass.' },
    { de: 'Wie bitte? Was bedeutet das?', en: 'Pardon? What does that mean?' },
  ],
  grammarFocus: ['a1-09-gender-articles', 'a1-12-indefinite-articles', 'a1-13-negation', 'a1-14-es-gibt-demonstratives', 'a1-08-numbers-time'],
  vocabFocus: ['die Lampe', 'der Stuhl', 'die Tasse', 'das Glas', 'der Teller', 'die Uhr', 'die Farbe', 'blau', 'rot', 'brauchen'],
  minTurns: 5,
};

export default scenario;
