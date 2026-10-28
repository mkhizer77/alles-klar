import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'b1-u5-speaking',
  level: 'B1',
  unit: 5,
  title: 'Reporting what the teacher said',
  situation: 'You and your older colleague Herr Brandt attend an evening course on business German at the adult education centre. He missed yesterday\'s lesson, in which the teacher, Frau Neumann, explained the date and content of the final exam, the deadline for the written assignment and who gives a presentation. He meets you in the office kitchen and asks what she said.',
  partner: {
    name: 'Herr Brandt',
    role: 'colleague from the accounting department who missed the lesson',
    persona: 'Polite, a little nervous about the exam, takes notes. Asks precise follow-up questions ("Hat sie wirklich gesagt, dass …?") and doubts one piece of information, so you have to say exactly what she said. Worries he cannot finish the assignment in time and asks whether you could prepare together.',
  },
  register: 'Sie',
  goals: [
    'report at least three things the teacher said, using Konjunktiv I or dass (sie hat gesagt, die Prüfung sei …; sie hat gesagt, dass …)',
    'report a question or an instruction she gave (sie hat gefragt, ob …; sie meinte, wir sollten …)',
    'when he doubts something, confirm or correct it and say exactly what she said',
    'agree on how and when you will prepare for the exam together',
  ],
  opener: 'Guten Morgen! Ich konnte gestern Abend leider nicht zum Kurs kommen. Was hat Frau Neumann denn alles gesagt? Gibt es wichtige Informationen für die Prüfung?',
  usefulPhrases: [
    { de: 'Sie hat gesagt, die Prüfung sei am 15. Juni.', en: 'She said the exam is on 15 June.' },
    { de: 'Sie hat gesagt, dass wir die Hausarbeit bis Freitag abgeben müssen.', en: 'She said that we have to hand in the written assignment by Friday.' },
    { de: 'Sie meinte, wir sollten uns gut vorbereiten.', en: 'She said we should prepare well.' },
    { de: 'Sie hat gefragt, ob jemand das Referat übernehmen könne.', en: 'She asked whether someone could take on the presentation.' },
    { de: 'Sie hat betont, dass der mündliche Teil wichtiger sei als der schriftliche.', en: 'She stressed that the oral part is more important than the written one.' },
    { de: 'Ich bin mir nicht ganz sicher, aber ich glaube, sie hat gesagt, …', en: 'I am not quite sure, but I think she said …' },
    { de: 'Doch, das hat sie wirklich so gesagt.', en: 'Yes, she really did say it like that.' },
    { de: 'Wir könnten uns am Wochenende zusammen vorbereiten.', en: 'We could prepare together at the weekend.' },
    { de: 'Wie bitte? Könnten Sie das bitte wiederholen?', en: 'Pardon? Could you please repeat that?' },
  ],
  grammarFocus: ['b1-12-indirect-speech', 'b1-09-konjunktiv-2-irreal'],
  vocabFocus: ['die Klausur', 'die Hausarbeit', 'das Referat', 'die Weiterbildung', 'die Kenntnis', 'bestehen', 'durchfallen', 'sich vorbereiten auf', 'schriftlich', 'mündlich'],
  minTurns: 7,
};

export default scenario;
