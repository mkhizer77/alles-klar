import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'b1-u8-speaking',
  level: 'B1',
  unit: 8,
  title: 'Complaint at the bank',
  situation: 'Your bank statement shows the monthly account fee twice, and your rent standing order was not executed, so your landlord has sent you a reminder. You have made an appointment with your bank adviser to have the fee refunded and the problem fixed.',
  partner: {
    name: 'Herr Wagner',
    role: 'bank adviser',
    persona: 'Correct and polite but defends the bank at first: the fees are in the contract, and the standing order may have failed because the account was not covered. Asks to see the statement and asks precise questions. Pushes back once, then offers two options: a one-time refund as a goodwill gesture, or a switch to a different account model with a higher monthly fee but no transfer charges.',
  },
  register: 'Sie',
  goals: [
    'explain the problem and say what you want to have done (die Gebühr zurückbuchen lassen, das Konto überprüfen lassen)',
    'say what you suppose happened, using Futur II or wohl / wahrscheinlich (das wird wohl ein Fehler gewesen sein)',
    'insist politely when he says it is not possible, and say what you will do next (werden + infinitive)',
    'use at least one noun-verb combination (eine Entscheidung treffen, einen Antrag stellen, eine Frage stellen)',
  ],
  opener: 'Guten Tag, Wagner mein Name. Nehmen Sie doch Platz. Sie haben am Telefon gesagt, es gibt ein Problem mit Ihrem Konto. Worum geht es genau?',
  usefulPhrases: [
    { de: 'Auf meinem Kontoauszug wurde die Gebühr zweimal abgebucht.', en: 'On my statement the fee was debited twice.' },
    { de: 'Ich möchte die Gebühr zurückbuchen lassen.', en: 'I would like to have the fee reversed.' },
    { de: 'Das wird wohl ein technischer Fehler gewesen sein.', en: 'That was probably a technical error.' },
    { de: 'Der Dauerauftrag scheint nicht ausgeführt worden zu sein.', en: 'The standing order seems not to have been executed.' },
    { de: 'Das brauchen Sie nicht zu prüfen, ich habe den Auszug dabei.', en: 'You do not need to check that, I have the statement with me.' },
    { de: 'Lassen Sie mich bitte kurz ausreden.', en: 'Please let me finish.' },
    { de: 'Dann werde ich mich bei der Zentrale beschweren.', en: 'Then I will complain to head office.' },
    { de: 'Ich muss heute noch eine Entscheidung treffen.', en: 'I have to make a decision today.' },
    { de: 'Könnten Sie mir das bitte schriftlich bestätigen?', en: 'Could you please confirm that in writing?' },
    { de: 'Wie bitte? Was bedeutet „Lastschrift“?', en: 'Pardon? What does "Lastschrift" mean?' },
  ],
  grammarFocus: ['b1-21-lassen', 'b1-22-brauchen-zu-scheinen', 'b1-23-werden', 'b1-24-futur-2-probability', 'b1-25-noun-verb-combinations'],
  vocabFocus: ['das Konto', 'die Gebühr', 'der Kontoauszug', 'die Überweisung', 'der Dauerauftrag', 'die Lastschrift', 'die Mahnung', 'abheben', 'überweisen', 'zurückzahlen', 'reklamieren', 'bargeldlos'],
  minTurns: 7,
};

export default scenario;
