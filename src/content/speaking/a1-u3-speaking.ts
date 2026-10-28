import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a1-u3-speaking',
  level: 'A1',
  unit: 3,
  title: 'Coffee break with a new colleague',
  situation: 'You work in a small company in Cologne. In the kitchen during the morning break you meet Jonas, who started on Monday. He wants to know what your days look like and what you do after work.',
  partner: {
    name: 'Jonas',
    role: 'new colleague at your company',
    persona: 'Open and curious, a little nervous because everything is new. Speaks slowly in short sentences and asks one follow-up at a time: when do you get up, when does work start, what do you do in the evening. Likes football and says so, and is happy to be invited along to something.',
  },
  register: 'du',
  goals: ['say what your job is and when your working day starts and ends', 'describe your morning with two separable verbs (for example aufstehen, anfangen)', 'say what you like doing in your free time and what you prefer, using gern and lieber', 'invite Jonas to do something at the weekend, using a modal verb or an imperative'],
  opener: 'Hallo! Ich bin Jonas, der neue Kollege. Endlich Pause! Und was machst du hier in der Firma?',
  usefulPhrases: [
    { de: 'Ich arbeite im Büro. Die Arbeit fängt um neun an.', en: 'I work in the office. Work starts at nine.' },
    { de: 'Ich stehe um sieben Uhr auf und dusche.', en: 'I get up at seven and have a shower.' },
    { de: 'Um fünf habe ich Feierabend.', en: 'I finish work at five.' },
    { de: 'In meiner Freizeit spiele ich gern Fußball.', en: 'In my free time I like playing football.' },
    { de: 'Ich höre lieber Musik. Am liebsten sehe ich fern.', en: 'I prefer listening to music. Most of all I like watching TV.' },
    { de: 'Ich kann nicht gut kochen.', en: 'I cannot cook well.' },
    { de: 'Hast du am Samstag Zeit? Komm doch mit!', en: 'Do you have time on Saturday? Come along!' },
    { de: 'Willst du mit uns Tennis spielen?', en: 'Do you want to play tennis with us?' },
    { de: 'Wie bitte? Sprich bitte langsam.', en: 'Pardon? Please speak slowly.' },
  ],
  grammarFocus: ['a1-15-irregular-present', 'a1-16-separable-verbs', 'a1-17-modal-verbs', 'a1-18-imperative', 'a1-19-gern-lieber'],
  vocabFocus: ['aufstehen', 'anfangen', 'der Feierabend', 'die Pause', 'das Büro', 'der Kollege', 'die Freizeit', 'das Hobby', 'fernsehen', 'Sport'],
  minTurns: 5,
};

export default scenario;
