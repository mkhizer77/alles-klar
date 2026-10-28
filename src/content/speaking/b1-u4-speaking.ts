import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'b1-u4-speaking',
  level: 'B1',
  unit: 4,
  title: 'Helping a friend get fitter',
  situation: 'Your friend Tim is out of breath after two flights of stairs and admits he needs to do something for his fitness. He has an office job, eats a lot of takeaway and gave up a diet after two weeks last year. He asks you what you would do in his place.',
  partner: {
    name: 'Tim',
    role: 'friend with an office job',
    persona: 'Honest about his problem but full of excuses: no time, the gym is too expensive, healthy food is boring. Asks hypothetical questions ("Und was wäre, wenn ich nur am Wochenende Sport mache?"). Pushes back once against your advice, then accepts one concrete first step if you suggest doing it together.',
  },
  register: 'du',
  goals: [
    'give Tim two concrete pieces of advice using Konjunktiv II (an deiner Stelle würde ich …, du könntest …, du solltest …)',
    'say what you would do if you were him or if you had his problem (wenn ich du wäre, …)',
    'say what he could have done differently last year, using Konjunktiv II in the past (du hättest … sollen, wenn du … hättest, wärst du …)',
    'react to one of his excuses and push back politely',
  ],
  opener: 'Mann, ich bin schon nach zwei Treppen völlig erschöpft. Ich müsste echt mal was für meine Fitness tun. Was würdest du an meiner Stelle machen?',
  usefulPhrases: [
    { de: 'An deiner Stelle würde ich …', en: 'In your place I would …' },
    { de: 'Du könntest zum Beispiel …', en: 'You could, for example, …' },
    { de: 'Wenn ich du wäre, würde ich mit kleinen Schritten anfangen.', en: 'If I were you, I would start with small steps.' },
    { de: 'Wenn du mehr Bewegung hättest, würdest du dich besser fühlen.', en: 'If you got more exercise, you would feel better.' },
    { de: 'Du hättest nicht so schnell aufgeben sollen.', en: 'You should not have given up so quickly.' },
    { de: 'Wenn du letztes Jahr weitergemacht hättest, wärst du jetzt fitter.', en: 'If you had kept going last year, you would be fitter now.' },
    { de: 'Du tust so, als ob du gar keine Zeit hättest.', en: 'You act as if you had no time at all.' },
    { de: 'Wie wäre es, wenn wir zusammen laufen gehen?', en: 'How about we go running together?' },
    { de: 'Das ist doch nur eine Ausrede!', en: 'That is just an excuse!' },
    { de: 'Was meinst du mit …?', en: 'What do you mean by …?' },
  ],
  grammarFocus: ['b1-09-konjunktiv-2-irreal', 'b1-10-konjunktiv-2-past', 'b1-11-als-ob'],
  vocabFocus: ['die Bewegung', 'die Ernährung', 'das Training', 'die Ausdauer', 'der Stress', 'die Entspannung', 'abnehmen', 'sich bewegen', 'verzichten auf', 'ausgewogen', 'erschöpft', 'fit'],
  minTurns: 7,
};

export default scenario;
