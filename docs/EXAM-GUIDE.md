# Mock exam authoring guide

Mock exams live in `src/content/exams/<exam-id>.ts`, one file per paper, default-exporting a `MockExam` (types in `src/content/types.ts`, section "Mock exams"). They follow the official B1 papers **exactly** in structure, item counts, task types, timings and point scheme, so a learner who passes a mock here knows what the real sitting feels like. The validator enforces the structure: `pnpm validate`.

## Ground rules

- **Original content only.** The official model papers (Goethe/ÖSD Modellsatz, telc Übungstest, DTZ Modelltest) are copyrighted. Study them for format, length, register and difficulty, then write **new** texts, adverts, dialogues, items and tasks. Never copy or lightly paraphrase a text, an item or a task from a paper. Different towns, names, topics, numbers.
- **B1 level throughout**: texts in clear standard German, realistic text types (blog, newspaper report, brochure, adverts, reader comments, house rules, voicemail, announcements, guided tour, conversation, radio discussion, emails). Grammar up to B1 (Konjunktiv II, passive, relative clauses, subordinate clauses, Plusquamperfekt, genitive) appears naturally; vocabulary stays within the Goethe B1 word list plus transparent compounds.
- **Items are answerable from the text alone**, in text order, one unambiguous key, plausible distractors that are mentioned in the text but do not answer the question. Mix the keys (not all "Richtig", not all "b"). Every item has an `explanation` in English that quotes the decisive words from the text.
- **Listening scripts** are spoken by the device's German voice. Write them as spoken language (fillers, contractions, short sentences), with turns on separate lines as `Name: text` for dialogues. Announcements, weather, traffic and voicemails are monologues. Lengths: short texts 60–110 words, monologue 350–450, dialogue 450–600, discussion 600–800 (Goethe), interview 500–700 (telc).
- **Writing tasks** get a `model` answer of the required length (circa N words, ±20 %), in correct standard German, that covers every point in a natural order with greeting and closing where the text type needs them, plus `modelNotes` (what makes it work) and `criteria` (self-check items derived from the official assessment grid: all points covered, appropriate register and text type, greeting/closing, connectors, structure, word count, accuracy).
- **Speaking tasks** get a `model` that is a worked outline with example sentences the learner can say, `criteria` from the official grid, and a `scenarioId` pointing to a `SpeakingScenario` in `exam.scenarios` so the AI partner can run the task (partner = fellow candidate or examiner). Scenario ids: `exam-<exam-id>-sprechen-<n>`; `level` as the exam, `unit: 0`.
- **topicIds** on every part: the course topics (ids from `src/content/curriculum.ts`) that the part draws on most. For receptive parts pick the 2–5 grammar topics that the text or the items lean on (e.g. a house-rules text: `a1-17-modal-verbs`, `b1-06-passive-present-past`, `b1-22-brauchen-zu-scheinen`); for writing/speaking tasks the structures a good answer needs (connectors, Konjunktiv II for polite requests, `b1-31-register-formal-informal`, `b1-32-opinions-speaking`). The report sends the learner there after a weak part.
- Ids: exam `b1-<goethe|telc|dtz>-<n>`; part `<skill>-<n>` (e.g. `lesen-3`); item `<exam-id>-<part-id>-<NN>` (e.g. `b1-goethe-1-lesen-3-04`); task `<exam-id>-<part-id>-<n>`; audio `<exam-id>-<part-id>-a<n>`.
- Items are `mc` or `fill` only. Richtig/Falsch: `options: ['Richtig', 'Falsch']`. Ja/Nein: `['Ja', 'Nein']`. Three-way: three full options (a/b/c are added by the app). Matching to lettered texts: `options` are the letters of the texts (`['A', …, 'J', '0']`), and the texts carry `label`. "Who says what": options are the speaker names. Word-bank cloze: `fill` with the bank listed in the part's `instructions` and `hint: 'aus dem Wortkasten'`; `answer` lists the exact word (plus accepted spellings).
- Markdown is allowed in `body`, `instructions`, `situation`, `model` (bold, italics, line breaks); keep it light. No backticks or `${` inside template literals.
- Keep each file self-contained and under ~1,500 lines. Write umlauts and ß directly.

## Format: Goethe-Zertifikat B1 / ÖSD Zertifikat B1 (`provider: 'goethe-oesd'`)

Identical exam (co-developed). Four modules, 100 points each, pass at 60 points per module. Modules can be taken separately.

| Module | Time | Parts (items) | Text / audio | Task type |
|---|---|---|---|---|
| Lesen | 65 min | Teil 1 (6) · Teil 2 (6) · Teil 3 (7) · Teil 4 (7) · Teil 5 (4) | 1: blog or personal email 280–400 words · 2: two press texts (newspaper, brochure) 180–230 words each, 3 items each · 3: 10 adverts A–J, 7 situations, one situation has no advert (`0`); each advert used once · 4: 7 reader comments (60–90 words each) on a controversial topic · 5: house rules / instructions / regulations 230–300 words | 1 Richtig/Falsch · 2 mc3 (first item of each text asks for the main idea: "In diesem Text geht es um …") · 3 letters · 4 Ja/Nein ("Ist die Person für …?") · 5 mc3 |
| Hören | 40 min | Teil 1 (10) · Teil 2 (5) · Teil 3 (7) · Teil 4 (8) | 1: 5 short texts (voicemail, announcement, radio traffic/weather/tips), each 2 items: one Richtig/Falsch, one mc3; played twice · 2: one monologue (guided tour, welcome talk, briefing) 350–450 words, played once · 3: one everyday conversation between two people 450–600 words, played once · 4: radio discussion, moderator + two guests, 600–800 words, played twice | 1 R/F + mc3 · 2 mc3 · 3 R/F · 4 "Wer sagt das?" options = `[moderator name, guest 1, guest 2]` |
| Schreiben | 60 min | Aufgabe 1 (20 min) · Aufgabe 2 (25 min) · Aufgabe 3 (15 min) | 1: informal email circa 80 words, 3 points (beschreiben, begründen, Vorschlag machen) · 2: Diskussionsbeitrag circa 80 words reacting to an opinion from an online guestbook/forum (quote it in `situation`) · 3: formal email circa 40 words (apologise / ask for something) | free writing |
| Sprechen | 15 min for two candidates (15 min preparation) | Teil 1 (1 task) · Teil 2 (2 tasks: Thema 1 and Thema 2, the candidate picks one) · Teil 3 (1 task) | 1: plan something together, 4 Leitpunkte · 2: presentation on 5 slides: Thema vorstellen; eigene Situation/Erlebnis; Situation im Heimatland; Vor- und Nachteile + Meinung; Abschluss und Dank · 3: feedback on the partner's presentation + one question | interaction / monologue |

Instructions on the paper (use these wordings, adapted to item numbers): Lesen 1 "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?"; Lesen 2 "Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c."; Lesen 3 "Lesen Sie die Situationen 13 bis 19 und die Anzeigen A bis J … Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0."; Lesen 4 "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für …? Ja/Nein"; Lesen 5 "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu."; Hören 1 "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben."; Hören 2 "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben."; Hören 3 "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch?"; Hören 4 "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was?"; Schreiben 1 "Schreiben Sie eine E-Mail (circa 80 Wörter). Schreiben Sie etwas zu allen drei Punkten. Achten Sie auf den Textaufbau (Anrede, Einleitung, Reihenfolge der Inhaltspunkte, Schluss)."; Schreiben 2 "Schreiben Sie nun Ihre Meinung zum Thema (circa 80 Wörter)."; Schreiben 3 "Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss."

Assessment (for `criteria`): Schreiben: Erfüllung (all points, length, text type), Kohärenz (Aufbau, Verknüpfung), Wortschatz (Spektrum, Beherrschung), Strukturen (Spektrum, Beherrschung). Sprechen: Erfüllung, Interaktion (begin, keep going, react, register), Kohärenz, Wortschatz, Strukturen, Aussprache.

## Format: telc Deutsch B1 / Zertifikat Deutsch (`provider: 'telc'`)

Written exam 225 points (Leseverstehen 75, Sprachbausteine 30, Hörverstehen 75, Schriftlicher Ausdruck 45) and oral exam 75 points; pass needs 60 % in each of the two (135 and 45 points). Each Lesen/Hören item is worth 5 points, each Sprachbausteine item 1.5.

| Module | Time | Parts (items) | Text / audio | Task type |
|---|---|---|---|---|
| Leseverstehen | 90 min together with Sprachbausteine (use 65) | Teil 1 (5) · Teil 2 (5) · Teil 3 (10) | 1: 5 short press notices (60–110 words) and 10 headlines a–j (Globalverstehen) · 2: one newspaper article 380–480 words (Detailverstehen) · 3: 12 adverts a–l and 10 situations, two situations have no advert (`x`) (Selektives Verstehen) | 1 letters a–j · 2 mc3 · 3 letters a–l + `x` |
| Sprachbausteine | (25) | Teil 1 (10) · Teil 2 (10) | 1: one personal letter/email 130–180 words with 10 gaps, each with 3 options testing **grammar** (conjunctions, case endings, auxiliaries, adjective endings, prepositions, relative pronouns, pronouns, verb forms) · 2: one semi-formal letter 130–180 words with 10 gaps and a bank of 15 words a–o testing **lexis and fixed phrases** (verb+preposition, connectors, modal particles, Konjunktiv II forms, adverbs) | 1 mc3 (prompt = the sentence with `___`, options the three forms) · 2 `fill` with the bank in `instructions` |
| Hörverstehen | 30 min | Teil 1 (5) · Teil 2 (10) · Teil 3 (5) | 1: 5 short statements by different people on one everyday topic (60–90 words each), played once (Globalverstehen) · 2: one interview or long conversation 500–700 words, played twice (Detailverstehen) · 3: 5 short announcements/messages (recorded message, radio, station, shop), played twice (Selektives Verstehen) | all Richtig/Falsch |
| Schriftlicher Ausdruck | 30 min | one task | reply to an informal or semi-formal email (quote it in `situation`), 4 Leitpunkte, no word count given (model ≈ 150 words); the candidate must find a suitable order, Betreff, Anrede, Einleitung, Schluss | free writing |
| Mündlicher Ausdruck | 15 min, 20 min preparation | Teil 1 · Teil 2 · Teil 3 | 1: getting to know each other (name, origin, home, family, languages, work/study, hobbies) · 2: talk about a topic: each candidate has read a short opinion (40–60 words, quoted in `situation`) on the topic; report it, exchange views, own experiences · 3: plan something together from a list of points (Wann? Wo? Essen? Wer bezahlt?…), reach agreement | interaction |

Assessment: Schriftlicher Ausdruck: Aufgabenbewältigung, Kommunikative Gestaltung, Formale Richtigkeit (A/B/C/D). Mündlich: Ausdrucksfähigkeit, Aufgabenbewältigung, Formale Richtigkeit, Aussprache/Intonation.

## Format: Deutsch-Test für Zuwanderer A2–B1 (`provider: 'dtz'`)

Scaled exam: Hören and Lesen together give a level (B1 from 33 of 45 items, A2 from 20); Schreiben and Sprechen are rated A2 or B1. Everyday and bureaucratic life in Germany (Ämter, Vermieter, Arbeit, Schule der Kinder, Versicherung, Arzt).

| Module | Time | Parts (items) | Text / audio | Task type |
|---|---|---|---|---|
| Hören | 25 min | Teil 1 (4) · Teil 2 (5) · Teil 3 (8) · Teil 4 (3) | 1: 4 voicemails (workshop, school, utility, travel agent …), one item each "Was soll … tun?", played twice · 2: 5 radio announcements (competition, horoscope, weather, event, traffic), played once · 3: 4 conversations (colleague, neighbour, friend, acquaintance) 90–140 words, two items each (one R/F about the situation, one mc3), played once · 4: 3 people give their opinion on one topic (70–100 words each); match to statements a–f, played twice | 1 mc3 · 2 mc3 · 3 R/F + mc3 · 4 letters a–f |
| Lesen | 45 min | Teil 1 (5) · Teil 2 (5) · Teil 3 (6) · Teil 4 (3) · Teil 5 (6) | 1: a signpost/directory (Rathaus rooms, hospital departments, shop floors) with 5 "where do I go" situations · 2: 8 adverts a–h, 5 situations, one has no advert (`x`) · 3: three short formal texts (notice, letter from school/insurance/landlord, newspaper note) 90–150 words, two items each (R/F + mc3) · 4: one informational text (instructions, terms, leaflet) 200–280 words, 3 R/F · 5: a formal letter/email with 6 gaps, 3 options each (grammar and formulaic language: Anrede, seit/vor, Modalverben, Negation, Konnektoren, Pronomen) | 1 mc3 (`Zimmer 12 / Zimmer 14 / anderes Zimmer`) · 2 letters a–h + `x` · 3 R/F + mc3 · 4 R/F · 5 mc3 |
| Schreiben | 30 min | one part with 2 tasks (A and B; the candidate chooses one) | A: semi-formal/informal letter or email (reply to an invitation, inform a neighbour, cancel/arrange), 4 points · B: formal letter (to landlord, school, insurance, employer, Amt: complaint, request, apology), 4 points; "Schreiben Sie möglichst viel", model ≈ 110–140 words | free writing |
| Sprechen | 16 min | Teil 1 · Teil 2 · Teil 3 | 1: introduce yourself (name, origin, home, work, family, languages) · 2: describe a photo (describe it in `situation` in words: "Auf dem Foto sehen Sie …") and talk about the topic with the examiner's questions (list them in `points`) · 3: plan something together from notes (Wo? Geschenk? Essen? Wen einladen?) | interaction |

Assessment Schreiben: Aufgabenbewältigung (points, reader cooperation needed?), Kommunikative Gestaltung, Korrektheit, Wortschatz. Sprechen: Aufgabenbewältigung, Interaktion, Aussprache, Flüssigkeit, Korrektheit, Wortschatz.

## Minimal example of one part

```ts
{
  id: 'lesen-1',
  skill: 'lesen',
  title: 'Teil 1',
  goal: 'Reading correspondence: a blog post, 6 true/false items',
  instructions: 'Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen **Richtig** oder **Falsch**?',
  minutes: 10,
  texts: [{ title: 'Mein erster Tag im neuen Job', body: ['Montag, 4. März', 'Heute war …'] }],
  items: [
    { type: 'mc', id: 'b1-goethe-1-lesen-1-01', prompt: 'Lena hat den Weg zur Firma schon vorher getestet.', options: ['Richtig', 'Falsch'], answer: 1, explanation: 'She writes "… hatte ich die Strecke noch nie gefahren" – she had never driven it before.' },
  ],
  topicIds: ['b1-01-plusquamperfekt', 'a2-03-perfekt-vs-prateritum', 'a2-04-subordinate-clauses-weil-dass'],
}
```
