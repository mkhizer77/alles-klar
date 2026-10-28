import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a1-u7-speaking',
  level: 'A1',
  unit: 7,
  title: 'Telling a friend about your weekend',
  situation: 'It is Monday morning before class at the language school. Your friend Anna from the course sits down next to you with a coffee. She wants to hear everything about your weekend and tell you about hers.',
  partner: {
    name: 'Anna',
    role: 'friend from your German course',
    persona: 'Cheerful and curious, speaks slowly in short sentences. Asks one follow-up at a time: with whom, where, how was it. Keeps you in the past by asking what happened next. If you ask, she tells you about a concert she went to on Saturday and says it was great.',
  },
  register: 'du',
  goals: ['say two things you did on Saturday, using the Perfekt with haben', 'say where you went, using the Perfekt with sein', 'say how it was, using war or hatte', 'ask Anna about her weekend and react to her answer'],
  opener: 'Hallo! Na, wie war dein Wochenende? Was hast du gemacht?',
  usefulPhrases: [
    { de: 'Am Samstag habe ich lange geschlafen.', en: 'On Saturday I slept in.' },
    { de: 'Zuerst habe ich gefrühstückt, dann habe ich Freunde getroffen.', en: 'First I had breakfast, then I met friends.' },
    { de: 'Wir haben im Park gegrillt.', en: 'We had a barbecue in the park.' },
    { de: 'Am Sonntag bin ich nach Potsdam gefahren.', en: 'On Sunday I went to Potsdam.' },
    { de: 'Abends sind wir ins Kino gegangen.', en: 'In the evening we went to the cinema.' },
    { de: 'Es war toll! Das hat Spaß gemacht.', en: 'It was great! That was fun.' },
    { de: 'Ich hatte leider keine Zeit.', en: 'Unfortunately I did not have time.' },
    { de: 'Und du? Wie war dein Wochenende?', en: 'And you? How was your weekend?' },
    { de: 'Wie bitte? Sag das bitte noch einmal.', en: 'Pardon? Please say that again.' },
  ],
  grammarFocus: ['a1-31-perfekt-haben', 'a1-32-perfekt-sein', 'a1-33-war-hatte', 'a1-07-questions'],
  vocabFocus: ['das Wochenende', 'am Wochenende', 'gestern', 'zuerst', 'dann', 'danach', 'das Kino', 'der Ausflug', 'grillen', 'der Spaß', 'Wie war …?'],
  minTurns: 5,
};

export default scenario;
