import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'b1-u10-speaking',
  level: 'B1',
  unit: 10,
  title: 'Discussion: the four-day week',
  situation: 'You are taking part in a discussion evening at the adult education centre. The topic is whether the four-day working week should be introduced. The moderator, Frau Dr. Lang, gives you the floor: you have to take a position, defend it with arguments and sum up at the end.',
  partner: {
    name: 'Frau Dr. Lang',
    role: 'moderator of the discussion evening',
    persona: 'Formal, structured and neutral, but plays devil\'s advocate: whatever position you take, she presents the strongest counterargument (costs for employers and shifts in hospitals if you are for it; burnout and productivity if you are against it). Asks for a concrete example and for a reason behind each claim. Asks you to weigh the advantages against the disadvantages and, at the end, to sum up in two sentences.',
  },
  register: 'Sie',
  goals: [
    'open with a short structured statement: your position and two arguments with reasons (erstens … zweitens, einerseits … andererseits)',
    'name one disadvantage of your own position and explain why the advantages still outweigh it',
    'disagree politely with her counterargument and justify your view (da muss ich widersprechen, weil …)',
    'end with a summary of two sentences (zusammenfassend …, mein Fazit ist …)',
  ],
  opener: 'Herzlich willkommen zu unserem Diskussionsabend. Unser Thema heute: die Vier-Tage-Woche. Sie haben das Wort: Sind Sie dafür oder dagegen, und warum?',
  usefulPhrases: [
    { de: 'Meiner Meinung nach sollte die Vier-Tage-Woche eingeführt werden.', en: 'In my opinion the four-day week should be introduced.' },
    { de: 'Ich bin der Überzeugung, dass …', en: 'I am convinced that …' },
    { de: 'Erstens …, zweitens …', en: 'Firstly …, secondly …' },
    { de: 'Einerseits …, andererseits …', en: 'On the one hand …, on the other hand …' },
    { de: 'Ein wichtiger Vorteil ist, dass …', en: 'One important advantage is that …' },
    { de: 'Ich gebe zu, dass das ein Nachteil ist. Allerdings …', en: 'I admit that this is a disadvantage. However, …' },
    { de: 'Da muss ich Ihnen widersprechen, denn …', en: 'I have to disagree with you there, because …' },
    { de: 'Wenn man alles abwägt, überwiegen die Vorteile.', en: 'Weighing everything up, the advantages prevail.' },
    { de: 'Zusammenfassend kann man sagen, dass …', en: 'In summary one can say that …' },
    { de: 'Entschuldigung, könnten Sie die Frage bitte wiederholen?', en: 'Sorry, could you please repeat the question?' },
  ],
  grammarFocus: ['b1-32-opinions-speaking', 'b1-30-suffixes', 'b1-17-two-part-conjunctions', 'b1-18-cause-consequence-concession'],
  vocabFocus: ['der Vorteil', 'der Nachteil', 'das Argument', 'die Begründung', 'der Standpunkt', 'das Fazit', 'die Überzeugung', 'zustimmen', 'widersprechen', 'abwägen', 'begründen', 'einerseits … andererseits', 'allerdings'],
  minTurns: 8,
};

export default scenario;
