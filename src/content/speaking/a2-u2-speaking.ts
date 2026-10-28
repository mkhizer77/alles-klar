import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a2-u2-speaking',
  level: 'A2',
  unit: 2,
  title: 'Viewing a flat with the landlord',
  situation: 'You are viewing a two-room flat in Nuremberg. The landlord shows you around and wants to know why you are interested and whether you would be a reliable tenant. Several other people want the flat too.',
  partner: {
    name: 'Herr Krüger',
    role: 'landlord of a two-room flat',
    persona: 'Polite, a little sceptical and short on time. Asks why you want to move, what you do for a living and whether you have pets. Adds a complication: the heating is old and the flat is only free from the first of next month. Asks a follow-up question whenever your answer is vague.',
  },
  register: 'Sie',
  goals: [
    'explain why you want this flat with at least two weil-clauses (location, price, size, balcony …)',
    'ask whether heating is included in the Nebenkosten and whether pets are allowed, using ob or an indirect question',
    'say what you will do if the flat is only free from next month (wenn-clause)',
    'say that you want to take the flat and ask when he will decide',
  ],
  opener: 'Guten Tag, kommen Sie herein. Das ist die Wohnung: 55 Quadratmeter, zweiter Stock, mit Balkon. Warum suchen Sie eine neue Wohnung?',
  usefulPhrases: [
    { de: 'Ich suche eine neue Wohnung, weil meine jetzige Wohnung zu klein ist.', en: 'I am looking for a new flat because my current flat is too small.' },
    { de: 'Die Wohnung gefällt mir, weil sie zentral liegt und der Balkon groß ist.', en: 'I like the flat because it is central and the balcony is big.' },
    { de: 'Ich finde es wichtig, dass die Nachbarschaft ruhig ist.', en: 'I think it is important that the neighbourhood is quiet.' },
    { de: 'Können Sie mir sagen, ob die Heizung in den Nebenkosten enthalten ist?', en: 'Can you tell me whether heating is included in the service charges?' },
    { de: 'Ich habe kein Haustier und arbeite in Vollzeit.', en: 'I have no pet and I work full-time.' },
    { de: 'Wenn die Wohnung erst nächsten Monat frei ist, bleibe ich so lange bei Freunden.', en: 'If the flat is only free next month, I will stay with friends until then.' },
    { de: 'Wie hoch sind die Miete und die Kaution?', en: 'How much are the rent and the deposit?' },
    { de: 'Entschuldigung, was bedeutet „Nebenkosten“?', en: 'Sorry, what does "Nebenkosten" mean?' },
    { de: 'Ich möchte die Wohnung gern nehmen. Wann wissen Sie, ob ich sie bekomme?', en: 'I would like to take the flat. When will you know whether I get it?' },
  ],
  grammarFocus: ['a2-04-subordinate-clauses-weil-dass', 'a2-05-wenn-ob-indirect-questions', 'a1-34-coordinating-conjunctions', 'a1-17-modal-verbs'],
  vocabFocus: ['die Miete', 'die Nebenkosten', 'die Kaution', 'der Vermieter', 'die Heizung', 'der Balkon', 'die Besichtigung', 'das Haustier', 'einziehen', 'zentral', 'günstig'],
  minTurns: 6,
};

export default scenario;
