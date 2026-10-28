import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'b1-u6-speaking',
  level: 'B1',
  unit: 6,
  title: 'Planning a neighbourhood clean-up',
  situation: 'The small park next to your building is full of rubbish. Frau Hartmann, who chairs the neighbourhood association, has invited you to plan a clean-up day together. You need to agree on a date, what people should bring, how to involve the neighbours and what happens with the collected rubbish.',
  partner: {
    name: 'Frau Hartmann',
    role: 'chair of the neighbourhood association',
    persona: 'Energetic and well organised, but a little pessimistic: last time only five people came. Prefers Saturday morning and wants a reason if you suggest something else. Asks who will inform the neighbours and what to do with the rubbish. Insists on one point: the children must not work near the road. Offers two options for the end of the day: coffee and cake, or a small barbecue.',
  },
  register: 'Sie',
  goals: [
    'agree on a date and a meeting point, and say why your suggestion is better than hers',
    'say what everyone should bring and what will happen to the collected rubbish, using at least two adjectives with the correct ending (feste Handschuhe, die gesammelten Säcke)',
    'suggest how to involve the neighbours and the young people (den Nachbarn, die Jugendlichen), and who will do what',
    'respond to her worry that too few people will come with a concrete idea',
  ],
  opener: 'Guten Tag, schön, dass Sie mithelfen wollen! Der Park sieht wirklich schlimm aus. Ich dachte an den Samstag in zwei Wochen. Was meinen Sie, passt das?',
  usefulPhrases: [
    { de: 'Ich würde eher den Sonntag vorschlagen, weil …', en: 'I would rather suggest Sunday, because …' },
    { de: 'Wir sollten jeden Nachbarn persönlich ansprechen.', en: 'We should speak to every neighbour personally.' },
    { de: 'Die Jugendlichen könnten die Flyer verteilen.', en: 'The young people could hand out the flyers.' },
    { de: 'Jeder bringt feste Handschuhe und große Müllsäcke mit.', en: 'Everyone brings sturdy gloves and big rubbish bags.' },
    { de: 'Die gesammelten Säcke werden am Eingang abgestellt.', en: 'The collected bags are left at the entrance.' },
    { de: 'Das Wichtigste ist, dass viele Freiwillige kommen.', en: 'The most important thing is that many volunteers come.' },
    { de: 'Wir könnten danach etwas Kleines zu essen anbieten.', en: 'We could offer something small to eat afterwards.' },
    { de: 'Das wäre eine gute Maßnahme für den Umweltschutz.', en: 'That would be a good measure for environmental protection.' },
    { de: 'Wie bitte? Was meinen Sie mit …?', en: 'Pardon? What do you mean by …?' },
  ],
  grammarFocus: ['b1-13-n-declension', 'b1-14-adjectives-as-nouns', 'b1-15-participles-as-adjectives', 'b1-16-adjective-declension-review'],
  vocabFocus: ['der Umweltschutz', 'der Abfall', 'die Mülltrennung', 'das Plastik', 'die Verpackung', 'das Recycling', 'die Maßnahme', 'das Bewusstsein', 'wegwerfen', 'recyceln', 'umweltfreundlich', 'schützen'],
  minTurns: 7,
};

export default scenario;
