import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a2-u3-writing',
  level: 'A2',
  unit: 3,
  title: 'Product review: the new one compared with the old one',
  textType: 'description',
  register: 'neutral',
  task: 'You have bought a new product (a bag, a phone, a bike, a jacket …) and want to write a short review for an online shop. Describe it with adjectives and compare it with the old one you had.',
  points: [
    'what you bought, when and why',
    'what it looks like and what it is made of (at least four adjectives)',
    'how it compares with your old one (bigger, lighter, more practical …)',
    'one disadvantage and your overall verdict',
  ],
  minWords: 60,
  maxWords: 120,
  usefulPhrases: [
    { de: 'Vor … Wochen habe ich mir … gekauft.', en: 'I bought myself … … weeks ago.', role: 'phrase' },
    { de: 'Der / Die / Das neue … ist …', en: 'The new … is …', role: 'phrase' },
    { de: 'Es hat ein großes … und zwei kleine …', en: 'It has a big … and two small …', role: 'phrase' },
    { de: 'Das Material ist …', en: 'The material is …', role: 'phrase' },
    { de: 'Im Vergleich zu meinem alten …', en: 'Compared with my old …', role: 'connector' },
    { de: '… ist leichter / größer / praktischer als …', en: '… is lighter / bigger / more practical than …', role: 'phrase' },
    { de: 'Der einzige Nachteil: …', en: 'The only disadvantage: …', role: 'phrase' },
    { de: 'trotzdem', en: 'nevertheless', role: 'connector' },
    { de: 'Mein Fazit: …', en: 'My verdict: …', role: 'phrase' },
    { de: 'Ich kann ihn / sie / es empfehlen.', en: 'I can recommend it.', role: 'phrase' },
  ],
  grammarFocus: ['a2-07-adjective-endings-definite', 'a2-08-adjective-endings-indefinite', 'a2-09-adjective-endings-no-article', 'a2-10-comparative-superlative'],
  mustUse: [
    { label: 'an adjective with an ending after der / die / das / den (der neue Rucksack, die breiten Träger)', pattern: '\\b(der|die|das|den|dem) [a-zäöüß]+(e|en|em|er|es) [a-zäöüß]+', min: 2 },
    { label: 'an adjective with an ending after ein / kein / mein (einen neuen …, ein großes …)', pattern: '\\b(ein|eine|einen|einem|einer|kein|keine|keinen|keinem|mein|meine|meinen|meinem|meiner) [a-zäöüß]+(e|en|em|er|es) [a-zäöüß]+', min: 2 },
    { label: 'a comparison with als (größer als, leichter als)', pattern: '\\b[a-zäöüß]+er als\\b', min: 1 },
    { label: 'a superlative (am besten, der beste …)', pattern: '\\b(am [a-zäöüß]+sten|(der|die|das|den) [a-zäöüß]+ste(n|r|s)?)\\b', min: 1 },
  ],
  checklist: [
    'All four points are covered: what, when and why; look and material; comparison with the old one; a disadvantage and your verdict.',
    'After der / die / das the adjective ends in -e (Nominative singular) or -en (plural, Dative, masculine Accusative): der neue Rucksack, die breiten Träger.',
    'After ein / mein the adjective shows the gender: ein großes Hauptfach, einen neuen Rucksack, meinem alten Rucksack.',
    'Adjectives after the verb sein have no ending: Das Material ist stabil.',
    'Comparatives are formed with -er (plus umlaut where needed) and als: größer als, höher als; never "mehr groß".',
    'A superlative appears at least once: am besten or der beste …',
    'The text has a title line, a description, a comparison and a short verdict.',
    'The text has between 60 and 120 words.',
  ],
  model: [
    'Mein neuer Rucksack: ein kurzer Test',
    'Vor zwei Wochen habe ich mir einen neuen Rucksack gekauft, weil mein alter Rucksack kaputt war. Der neue Rucksack ist dunkelblau und hat ein großes Hauptfach und zwei kleine Seitentaschen. Das Material ist stabil und wasserdicht, und die breiten Träger sind sehr bequem.',
    'Im Vergleich zu meinem alten Rucksack ist der neue leichter und viel praktischer. Er ist auch größer als der alte, aber er sieht trotzdem elegant aus. Nur der Preis ist höher als bei anderen Modellen. Trotzdem finde ich, dass das der beste Rucksack für mich ist. Für lange Reisen ist er am besten geeignet.',
    'Mein Fazit: Ein teurer, aber sehr guter Kauf. Ich kann ihn empfehlen.',
  ],
  modelNotes: [
    'Definite article + adjective: **der neue Rucksack** (-e, Nominative), **die breiten Träger** (-en, plural), **der beste Rucksack**.',
    'Indefinite article + adjective: **einen neuen Rucksack** (-en, masculine Accusative), **ein großes Hauptfach** (-es, neuter), **meinem alten Rucksack** (-en, Dative); with no article the adjective carries the ending itself: **zwei kleine Seitentaschen**, **lange Reisen**, **sehr guter Kauf**.',
    'After **ist / sind** the adjective has no ending: **ist dunkelblau**, **sind sehr bequem**.',
    'Comparatives take **-er** and the umlaut: **größer als, höher als, leichter, praktischer** (never *mehr groß*). The superlative appears as **der beste** and **am besten**.',
    '**Mein neuer Rucksack** and **ein kurzer Test** in the title show the masculine -er ending after *mein / ein*: the adjective carries the gender because the article does not.',
  ],
};

export default task;
