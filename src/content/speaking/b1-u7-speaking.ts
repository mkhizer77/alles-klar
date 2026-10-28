import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'b1-u7-speaking',
  level: 'B1',
  unit: 7,
  title: 'Debate: is home office good?',
  situation: 'Your friend Nadia tells you that her boss wants everyone back in the office full-time, and she actually agrees with him. You think working from home has real advantages. Over a drink you argue it out: she wants reasons, you want her to see a compromise.',
  partner: {
    name: 'Nadia',
    role: 'friend who works in marketing',
    persona: 'Extrovert and convinced that home office harms the team and that people work less at home. Argues with concrete examples (a colleague who never answers, a bad internet connection in a video call). Pushes back hard once, asks you for reasons and conditions, and accepts a compromise only if you give her two good arguments and say how the problems could be solved.',
  },
  register: 'du',
  goals: [
    'state your position and give two reasons using connectors (da, deshalb, obwohl, je … desto)',
    'concede one of her points and then counter it (das stimmt zwar, aber …; trotzdem …)',
    'say under which condition you would agree with her (falls, sofern, es sei denn)',
    'explain how one of the problems could be solved (indem …, damit …)',
  ],
  opener: 'Du, mein Chef will, dass wir alle wieder ins Büro kommen. Ehrlich gesagt finde ich das sogar richtig. Homeoffice ist doch schlecht fürs Team, oder?',
  usefulPhrases: [
    { de: 'Da ich zu Hause ruhiger arbeiten kann, bin ich dort produktiver.', en: 'As I can work more calmly at home, I am more productive there.' },
    { de: 'Je weniger ich pendeln muss, desto mehr Zeit habe ich für die Arbeit.', en: 'The less I have to commute, the more time I have for work.' },
    { de: 'Obwohl das Team wichtig ist, muss man nicht jeden Tag im Büro sein.', en: 'Although the team matters, you do not have to be in the office every day.' },
    { de: 'Das stimmt zwar, aber trotzdem …', en: 'That is true, but still …' },
    { de: 'Sowohl das Büro als auch das Homeoffice haben Vorteile.', en: 'Both the office and working from home have advantages.' },
    { de: 'Man kann das lösen, indem man feste Bürotage einführt.', en: 'You can solve that by introducing fixed office days.' },
    { de: 'Ich wäre einverstanden, sofern zwei Tage Homeoffice bleiben.', en: 'I would agree, provided two days of home office remain.' },
    { de: 'Es sei denn, die Verbindung ist zu schlecht.', en: 'Unless the connection is too bad.' },
    { de: 'Entweder wir finden einen Kompromiss, oder …', en: 'Either we find a compromise, or …' },
    { de: 'Wie bitte? Kannst du das noch mal sagen?', en: 'Pardon? Can you say that again?' },
  ],
  grammarFocus: ['b1-17-two-part-conjunctions', 'b1-18-cause-consequence-concession', 'b1-19-purpose-manner', 'b1-20-conditions'],
  vocabFocus: ['die Verbindung', 'die Störung', 'die Digitalisierung', 'der Datenschutz', 'das Gerät', 'die Software', 'die Sicherheit', 'sich einloggen', 'abstürzen', 'digital'],
  minTurns: 8,
};

export default scenario;
