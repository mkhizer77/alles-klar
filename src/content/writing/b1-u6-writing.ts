import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'b1-u6-writing',
  level: 'B1',
  unit: 6,
  title: 'Describing an environmental problem',
  textType: 'description',
  register: 'neutral',
  task: 'Your course is making an information sheet about local environmental problems. Write a short informational text about plastic waste in rivers for readers who know little about the topic.',
  points: ['what the problem is and how the waste gets into the water', 'what the consequences are for animals and people', 'who is responsible', 'what is being done about it locally and how readers can join in'],
  minWords: 100,
  maxWords: 180,
  usefulPhrases: [
    { de: 'Ein wachsendes Problem ist …', en: 'A growing problem is …', role: 'phrase' },
    { de: 'Weggeworfene Flaschen und gebrauchte Verpackungen landen …', en: 'Thrown-away bottles and used packaging end up …', role: 'phrase' },
    { de: 'Die Folgen sind ernst.', en: 'The consequences are serious.', role: 'phrase' },
    { de: 'Biologen haben festgestellt, dass …', en: 'Biologists have found that …', role: 'phrase' },
    { de: 'Laut einem Experten …', en: 'According to an expert …', role: 'phrase' },
    { de: 'im Körper des Menschen', en: 'in the human body', role: 'phrase' },
    { de: 'Verantwortlich dafür ist nicht nur …, sondern …', en: 'Responsible for this is not only …, but …', role: 'phrase' },
    { de: 'jeder Einzelne / jeder Interessierte', en: 'every individual / anyone interested', role: 'phrase' },
    { de: 'deshalb / dabei', en: 'therefore / in doing so', role: 'connector' },
    { de: 'Gegen … hilft nur gemeinsames Handeln.', en: 'Only joint action helps against …', role: 'phrase' },
  ],
  grammarFocus: ['b1-15-participles-as-adjectives', 'b1-13-n-declension', 'b1-14-adjectives-as-nouns', 'b1-16-adjective-declension-review'],
  mustUse: [
    { label: 'a present participle used as an adjective (wachsend-, schwimmend-, steigend-)', pattern: '\\b\\w+end(e|en|er|es|em)\\b', min: 2 },
    { label: 'a past participle used as an adjective (weggeworfene, gebrauchte, verschluckten)', pattern: '\\b(ge\\w+|zer\\w+|ver\\w+|weg\\w+|ab\\w+|be\\w+|ent\\w+)(te|ten|ter|tes|tem|ene|enen|ener|enes|enem)\\b', min: 2 },
    { label: 'an n-declension noun in the accusative, dative or genitive (des Menschen, einem Experten, den Studenten)', pattern: '\\b(des|dem|den|einem|einen|eines|keinem|keinen|jedem|jeden|diesem|diesen) (menschen|nachbarn|experten|studenten|kollegen|kunden|biologen|touristen|jungen|planeten|präsidenten|journalisten|herrn|namen|bauern)\\b', min: 1 },
    { label: 'an adjective or participle used as a noun (jeder Einzelne, die Teilnehmenden, jeder Interessierte)', pattern: '\\b(jeder|jede|jeden|viele|alle|die|der|den|einige|wenige) (einzelne|interessierte|erwachsene|verantwortliche|deutsche|jugendliche|teilnehmende|betroffene|angestellte|bekannte)[nrs]?\\b', min: 1 },
  ],
  checklist: [
    'All four points are covered: the problem and how waste gets into the water, consequences, who is responsible, local action and how to join.',
    'The text has a title and three or four short paragraphs, and it informs rather than argues.',
    'Present participles are built from the infinitive + d and take normal adjective endings (ein wachsendes Problem, die schwimmenden Teile).',
    'Past participles used as adjectives also take adjective endings (weggeworfene Flaschen, an den verschluckten Teilen).',
    'N-declension nouns add -n/-en in every case except the nominative singular (des Menschen, einem Experten, den Studenten).',
    'Adjectives used as nouns are capitalised and keep their adjective ending (jeder Einzelne, die Teilnehmenden).',
    'Adjective endings after der/ein/no article are correct (ein ernstes Problem, gemeinsames Handeln, die steigende Verschmutzung).',
    'The text has between 100 and 180 words.',
  ],
  model: [
    'Plastikmüll in unseren Flüssen',
    'Ein wachsendes Problem in vielen Städten ist der Plastikmüll in Flüssen und Seen. Weggeworfene Flaschen, zerrissene Tüten und gebrauchte Verpackungen landen über Regenkanäle im Wasser. Von dort treibt der Müll bis ins Meer.',
    'Die Folgen sind ernst. Biologen haben festgestellt, dass Fische und Vögel die schwimmenden Plastikteile für Nahrung halten. Viele Tiere sterben an den verschluckten Teilen. Laut einem Experten der Universität Hamburg gelangen winzige Plastikpartikel inzwischen sogar ins Trinkwasser und in den Körper des Menschen.',
    'Verantwortlich dafür ist nicht nur die Industrie, sondern jeder Einzelne. Wer am Ufer eine leere Flasche liegen lässt, trägt zum Problem bei. Deshalb organisieren Studenten und Nachbarn in unserem Stadtteil jeden Monat eine Aufräumaktion am Fluss. Die Teilnehmenden sammeln dabei bis zu zweihundert Kilo Müll. Jeder Interessierte ist willkommen, denn gegen die steigende Verschmutzung hilft nur gemeinsames Handeln.',
  ],
  modelNotes: [
    'Present participles work like adjectives: **ein wachsendes Problem**, **die schwimmenden Plastikteile**, **die steigende Verschmutzung**.',
    'Past participles do the same and pack a whole relative clause into one word: **weggeworfene Flaschen** (= Flaschen, die weggeworfen wurden), **an den verschluckten Teilen**.',
    'N-declension nouns show their extra ending outside the nominative: **einem Experten**, **des Menschen**; in the nominative it would be *ein Experte*, *der Mensch*.',
    '**jeder Einzelne**, **Die Teilnehmenden** and **Jeder Interessierte** are adjectives and participles used as nouns: capitalised, but with adjective endings.',
    'The register is neutral and factual: no *ich finde*, but sources (**Biologen haben festgestellt**, **Laut einem Experten**) and concrete numbers (**zweihundert Kilo**).',
  ],
};

export default task;
