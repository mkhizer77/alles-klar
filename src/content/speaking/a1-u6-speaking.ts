import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a1-u6-speaking',
  level: 'A1',
  unit: 6,
  title: 'Booking a holiday at the travel agency',
  situation: 'You want a week of holiday in summer and have walked into a small travel agency in Stuttgart. Frau Lang will help you choose a place and a date and tells you about the trains.',
  partner: {
    name: 'Frau Lang',
    role: 'travel agent',
    persona: 'Professional and friendly, speaks slowly in short sentences. Offers two options to choose from: a hotel by the sea on the Baltic coast and a hotel in the mountains in Austria. Asks for exact dates, describes the weather at that time of year, and at the end repeats the date and departure time and asks you to confirm.',
  },
  register: 'Sie',
  goals: ['say where you want to go and when, using im, am or von … bis', 'ask what the weather is like there at that time of year', 'choose one of her two options and give one short reason', 'ask what time the train leaves and when you arrive'],
  opener: 'Guten Tag und willkommen! Sie möchten eine Reise buchen? Wohin möchten Sie fahren, und wann?',
  usefulPhrases: [
    { de: 'Ich möchte im Juli ans Meer fahren.', en: 'I would like to go to the sea in July.' },
    { de: 'Ich habe vom 10. bis zum 17. August Urlaub.', en: 'I am on holiday from the 10th to the 17th of August.' },
    { de: 'Wie ist das Wetter dort im Sommer?', en: 'What is the weather like there in summer?' },
    { de: 'Ich fahre lieber in die Berge. Ich wandere gern.', en: 'I would rather go to the mountains. I like hiking.' },
    { de: 'Liegt das Hotel am Strand?', en: 'Is the hotel on the beach?' },
    { de: 'Wann fährt der Zug ab?', en: 'When does the train leave?' },
    { de: 'Um wie viel Uhr kommen wir an?', en: 'What time do we arrive?' },
    { de: 'Was kostet die Reise?', en: 'How much does the trip cost?' },
    { de: 'Entschuldigung, das verstehe ich nicht. Können Sie das wiederholen?', en: 'Sorry, I do not understand that. Can you repeat it?' },
  ],
  grammarFocus: ['a1-28-time-prepositions', 'a1-29-two-way-prepositions', 'a1-30-word-order-midfield', 'a1-08-numbers-time'],
  vocabFocus: ['die Reise', 'buchen', 'der Urlaub', 'das Hotel', 'das Meer', 'der Strand', 'der Berg', 'das Wetter', 'warm', 'der Juli', 'die Woche'],
  minTurns: 5,
};

export default scenario;
