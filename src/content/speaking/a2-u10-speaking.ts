import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a2-u10-speaking',
  level: 'A2',
  unit: 10,
  title: 'The train to Vienna is cancelled',
  situation: 'You and your friend Anna are at Munich main station. Your train to Vienna has just been cancelled and your hotel is booked from tonight. Together you have to work out what the cancellation means for the rest of the trip and decide what to do.',
  partner: {
    name: 'Anna',
    role: 'friend travelling with you',
    persona: 'Anxious and a bit impatient, wants a quick decision. Asks what the cancellation means for the connection, the hotel and the city tour tomorrow. Complication: the next direct train leaves in three hours, but there is an earlier one with a change in Salzburg that is almost fully booked; she asks what happens if you miss the connection. Challenges your choice and asks for a reason.',
  },
  register: 'du',
  goals: [
    'explain the consequences of the cancellation with at least two connectors (deshalb, sonst, dann, also)',
    'say that you still want to travel today although it will be late (obwohl or trotzdem)',
    'propose a plan for the waiting time and the arrival using bis, bevor or nachdem',
    'tell her to call the hotel and explain why with damit',
  ],
  opener: 'Oh nein, der Zug fällt aus! Was machen wir jetzt? Das heißt, wir kommen heute nicht mehr nach Wien, oder?',
  usefulPhrases: [
    { de: 'Der Zug fällt aus, deshalb müssen wir umsteigen oder drei Stunden warten.', en: 'The train is cancelled, so we have to change or wait three hours.' },
    { de: 'Wir sollten den früheren Zug nehmen, sonst kommen wir erst nachts an.', en: 'We should take the earlier train, otherwise we will only arrive at night.' },
    { de: 'Obwohl der Zug fast ausgebucht ist, versuchen wir es.', en: 'Although the train is almost fully booked, we will give it a try.' },
    { de: 'Ich bin müde, trotzdem will ich heute noch nach Wien fahren.', en: 'I am tired, but I still want to get to Vienna today.' },
    { de: 'Bis der Zug abfährt, holen wir uns etwas zu essen.', en: 'Until the train leaves, we will get ourselves something to eat.' },
    { de: 'Nachdem wir angekommen sind, gehen wir direkt ins Hotel.', en: 'After we have arrived, we go straight to the hotel.' },
    { de: 'Ruf bitte das Hotel an, damit sie das Zimmer nicht weggeben.', en: 'Please call the hotel so that they do not give the room away.' },
    { de: 'Wenn wir den Anschluss verpassen, nehmen wir den nächsten Zug.', en: 'If we miss the connection, we take the next train.' },
    { de: 'Warte mal, das habe ich nicht verstanden. Was meinst du?', en: 'Wait a moment, I did not understand that. What do you mean?' },
  ],
  grammarFocus: ['a2-27-adverbial-connectors', 'a2-28-subjunctions-obwohl-damit', 'a2-29-modal-particles', 'a2-05-wenn-ob-indirect-questions'],
  vocabFocus: ['die Verspätung', 'der Anschluss', 'das Gleis', 'die Fahrkarte', 'die Reservierung', 'die Abfahrt', 'die Ankunft', 'umsteigen', 'verpassen', 'ausfallen', 'ausgebucht'],
  minTurns: 6,
};

export default scenario;
