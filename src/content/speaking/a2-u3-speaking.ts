import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a2-u3-speaking',
  level: 'A2',
  unit: 3,
  title: 'Describing a lost bag',
  situation: 'You left your bag on the tram in Dresden yesterday. Now you are at the lost-property office. The clerk has several similar bags behind the counter and needs an exact description before he can hand one over.',
  partner: {
    name: 'Herr Baumann',
    role: 'clerk at the lost-property office',
    persona: 'Calm and precise. Asks for colour, size, material and what was inside. Has two similar bags behind the counter and describes one of them, so that you have to say whether it is yours and how yours is different. Asks you to compare the bags before he believes you.',
  },
  register: 'Sie',
  goals: [
    'describe the bag with at least three adjectives with endings (colour, size, material)',
    'name two or three things that were inside, each with an adjective (mein altes Handy, ein blauer Schirm …)',
    'compare your bag with the one he shows you using a comparative (größer, dunkler, leichter …)',
    'ask what you have to do now to get the bag back',
  ],
  opener: 'Guten Tag, Sie haben etwas verloren? Beschreiben Sie bitte die Tasche: Welche Farbe hat sie und wie groß ist sie?',
  usefulPhrases: [
    { de: 'Ich habe gestern meine Tasche in der Straßenbahn vergessen.', en: 'I left my bag on the tram yesterday.' },
    { de: 'Es ist eine kleine schwarze Tasche aus Leder.', en: 'It is a small black leather bag.' },
    { de: 'Drin waren mein altes Handy, ein blauer Schirm und ein dünnes Buch.', en: 'Inside were my old phone, a blue umbrella and a thin book.' },
    { de: 'Meine Tasche ist etwas größer und dunkler als diese hier.', en: 'My bag is a bit bigger and darker than this one.' },
    { de: 'Die Tasche ist aus weichem Stoff, nicht aus Plastik.', en: 'The bag is made of soft fabric, not plastic.' },
    { de: 'Die beiden sehen ähnlich aus, aber der Unterschied ist die Größe.', en: 'The two look similar, but the difference is the size.' },
    { de: 'Was muss ich jetzt machen? Brauchen Sie meinen Ausweis?', en: 'What do I have to do now? Do you need my ID?' },
    { de: 'Wie bitte? Können Sie das bitte langsamer sagen?', en: 'Pardon? Could you say that more slowly, please?' },
  ],
  grammarFocus: ['a2-07-adjective-endings-definite', 'a2-08-adjective-endings-indefinite', 'a2-10-comparative-superlative', 'a1-35-comparative-basics'],
  vocabFocus: ['das Material', 'das Leder', 'der Stoff', 'das Plastik', 'die Größe', 'der Unterschied', 'beschreiben', 'vergleichen', 'aussehen', 'ähnlich', 'weich'],
  minTurns: 6,
};

export default scenario;
