# The course vs the official B1 exams

What the official B1 papers actually contain, measured against the course's 100 grammar topics, 28 unit themes, 1,733 vocabulary headwords and its task types. Generated on 30 October 2026 with `scripts/exam-analysis.mjs`; the raw tables are in [exam-analysis/raw-analysis.md](exam-analysis/raw-analysis.md), the per-part catalogue of every paper in [exam-analysis/catalog/](exam-analysis/catalog/).

## 1. What was analysed, and why there are no "past papers"

Goethe-Institut, ÖSD, telc and the BAMF (for the DTZ) never publish real past papers. Live papers are confidential and reused, so there is no archive of "the 2019 B1 exam". Each provider publishes a small set of official model papers (Modellsatz / Übungssatz / Übungstest / Modelltest) that match the real exam in task types, item counts and timing; they are refreshed every few years and are what every exam course is built on. The Goethe-Zertifikat B1 and ÖSD Zertifikat B1 are one co-developed exam, so their model sets overlap.

Nine distinct test sets were analysed (48,000 words of exam German after removing instructions and boilerplate):

| Set | Provider | Published | Notes |
|---|---|---|---|
| Modellsatz Erwachsene | Goethe / ÖSD | 2013, 2nd ed. 2015 | identical in both providers' booklets |
| Übungssatz Erwachsene | Goethe / ÖSD | 2016 (Goethe), 2026 ed. (ÖSD Band 1) | identical in both |
| Übungssatz Jugendliche | Goethe / ÖSD | same | identical in both |
| Modellsatz Jugendliche | ÖSD | 2026 ed. (ÖSD Band 1) | |
| Übungstest 1 (Zertifikat Deutsch) | telc | rev. 2019, 13th ed. 2020 | |
| Übungstest 1 | telc Hungary | 2021 | different content from telc's own; slight format variants |
| Übungstest 1, B1 Schule | telc | 2021 | youth version, same format |
| Übungstest A2·B1 | telc | coursebook extract | partial: no key, no transcripts |
| Modelltest DTZ A2–B1 | Klett with telc | 2013 | the format is unchanged |

Sources: goethe.de practice-material pages, osd.at (ZB1 Übungsmaterialien Band 1), shop.telc.net and telc.net download area, telc.hu, klett-sprachen.de. The PDFs are copyrighted and are not kept in the repository; mock papers in the app are original texts in the same format.

## 2. Format: what the exams ask for and what the course trained before the mock exams

| Exam task | Goethe/ÖSD | telc | DTZ | In the course before | Now |
|---|---|---|---|---|---|
| Richtig/Falsch on a blog or personal email | Lesen 1 (6) | – | Lesen 3/4 (partly) | yes (unit reading questions) | mock exams |
| 3-way MC on press texts, first item = main idea | Lesen 2 (6) | Lesen 2 (5) | Lesen 3 (3) | partly (MC exists, "main idea" items rare) | mock exams |
| Match adverts to situations, one with no match | Lesen 3 (7) | Lesen 3 (10) | Lesen 2 (5) | no | mock exams |
| Ja/Nein: is the writer for or against? (7 comments) | Lesen 4 (7) | – | – | no | mock exams |
| MC on house rules / regulations / instructions | Lesen 5 (4) | – | Lesen 4 (3) | partly | mock exams |
| Match headlines to short press notices | – | Lesen 1 (5) | – | no | mock exams |
| Signpost / directory: which room | – | – | Lesen 1 (5) | no | mock exams |
| Cloze with 3 options (grammar in a letter) | – | Sprachbausteine 1 (10) | Lesen 5 (6) | partly (fill-in exercises, never a connected text) | mock exams |
| Cloze with a 15-word bank (lexis, phrases) | – | Sprachbausteine 2 (10) | – | no | mock exams |
| Listening: voicemails, announcements, radio (R/F + MC) | Hören 1 (10) | Hören 3 (5) | Hören 1–2 (9) | no (listening = dictation only) | mock exams (device voice) |
| Listening: monologue / talk, MC | Hören 2 (5) | – | – | no | mock exams |
| Listening: everyday conversation, R/F | Hören 3 (7) | – | Hören 3 (8) | no | mock exams |
| Listening: interview, R/F ×10, played twice | – | Hören 2 (10) | – | no | mock exams |
| Listening: who says what / match opinions | Hören 4 (8) | (HU variant) | Hören 4 (3) | no | mock exams |
| Listening: 5 people on one topic, R/F | – | Hören 1 (5) | – | no | mock exams |
| Informal email, ~80 words, 3 points | Schreiben 1 | – | Schreiben A | yes (unit writing tasks) | both |
| Opinion post (Diskussionsbeitrag), ~80 words | Schreiben 2 | – | – | partly (one opinion task) | both |
| Formal email, ~40 words (apology / request) | Schreiben 3 | – | – | partly | both |
| Reply email with 4 points, ~150 words | – | Schreiben | – | yes | both |
| Formal letter to landlord / office, 4 points | – | – | Schreiben B | yes (B1 unit 10) | both |
| Speaking: plan something together | Sprechen 1 | Sprechen 3 | Sprechen 3 | yes (several role-plays) | both, with AI partner |
| Speaking: 5-slide presentation + feedback + question | Sprechen 2–3 | – | – | no | mock exams, with AI partner |
| Speaking: getting to know each other / about yourself | – | Sprechen 1 | Sprechen 1 | yes (A1) | both |
| Speaking: discuss a topic from two opinion cards | – | Sprechen 2 | – | partly (B1 debate role-plays) | both |
| Speaking: describe a photo, then the topic | – | – | Sprechen 2 | no | mock exams |

The level test in the app (grammar items sampled by topic, vocabulary MC, five reading questions, five dictations) measures the course, not the exam. The four mock papers added with this analysis (`src/content/exams/`) cover every row above in the official format, item counts, timing and point scheme.

## 3. Grammar: how much of each topic the papers contain

Method: every reading text, transcript, task and model answer of the nine sets was scanned with one pattern family per course topic (umlaut-aware regular expressions; the detectors and their limits are in `scripts/exam-analysis.mjs`). Three measures:

- **Presence** – in how many of the 9 sets the structure occurs at least once (always = 9/9, usually = 7–8, sometimes = 4–6, rare = 1–3, never = 0).
- **Density** – occurrences per 1,000 words of exam German.
- **Tested** – how many of the 76 grammar-cloze items (telc Sprachbausteine Teil 1 and 2 across three papers, telc A2·B1 Sprachbausteine, DTZ Lesen Teil 5) test the topic directly. These are the only places where a B1 exam tests grammar as such; the Goethe/ÖSD exam has no grammar section and scores grammar only inside writing and speaking ("Strukturen: Spektrum, Beherrschung").

### 3.1 Which topics are always there

Every detectable A1 topic and almost every A2 topic occurs in every set; they are the fabric of every text. Densities per 1,000 words give the weight: articles 47, personal pronouns 40, two-way prepositions 34, dative prepositions 34, adjective + noun 33, compounds and word formation 27, modal verbs 16, possessives 15, accusative 15, indefinite pronouns and quantifiers (man, viele, einige…) 14, modal particles 11, negation 9, da-/wo-compounds 6.5, connectors 6, genitive 6, reflexive verbs 5, Konjunktiv II polite 1 but tested 4 times.

B1 topics present in all nine sets, with density per 1,000 words:

| Topic | Density | Tested | Where it shows up |
|---|---|---|---|
| b1-23 werden (future, passive, change) | 5.0 | – | press texts, rules, announcements |
| b1-31 formal vs informal register | 4.3 | 2 | every writing task, every letter in the cloze parts |
| b1-09 Konjunktiv II irreal (wäre, hätte, würde, könnte…) | 2.7 | 1 | reader comments, discussions, polite requests in letters |
| b1-32 opinions, agreeing, disagreeing | 2.6 | – | Lesen Teil 4 comments, radio discussions, Sprechen |
| b1-05 relative clauses with prepositions, wo/was/wer | 2.4 | – | press texts, adverts |
| b1-19 purpose and manner (damit, um…zu, indem) | 2.2 | 2 | letters, discussions |
| b1-20 conditions (wenn, falls, sofern) | 1.9 | 1 | rules, adverts, comments |
| b1-15 participles as adjectives (die geplante Reise) | 1.3 | 1 | press texts |
| b1-02 temporal clauses (bevor, nachdem, während, bis, seit) | 1.2 | – | blogs, dialogues |
| b1-24 probability (wahrscheinlich, wohl, sicher…) | 1.1 | – | dialogues, discussions |
| b1-14 adjectives as nouns (Jugendliche, Erwachsene, Bekannte) | 0.8 | – | everywhere |
| b1-28 adjective/noun + preposition (zufrieden mit, Angst vor) | 0.6 | 2 | letters, comments |
| b1-26 genitive prepositions (innerhalb, aufgrund, laut, dank) | 0.5 | – | rules, press |
| b1-29 / b1-30 prefixes and suffixes | 23 / 19 | – | counted broadly (every ver-/be-/er- verb, every -ung/-keit noun) |

### 3.2 Usually there (7–8 of 9 sets), low density

| Topic | Sets | Density | Tested |
|---|---|---|---|
| b1-18 cause / consequence / concession (da, sodass, obwohl, trotzdem) | 8 | 2.1 | 2 |
| a2-17 verbs of position | 8 | 1.8 | – |
| a2-12 / b1-27 verb + preposition | 8 | 0.7 | 2 |
| b1-17 two-part conjunctions (sowohl…als auch, je…desto, nicht nur…sondern auch) | 8 | 0.6 | – |
| b1-12 indirect speech (laut…, sagte…, Konjunktiv I forms) | 8 | 0.5 | – |
| b1-21 lassen | 8 | 0.5 | – |
| b1-25 noun–verb combinations (eine Entscheidung treffen) | 8 | 0.5 | – |
| b1-06 Vorgangspassiv present / Präteritum | 8 | 0.4 | – |
| b1-07 passive with modals, Perfekt passive (worden) | 8 | 0.4 | – |
| b1-08 Zustandspassiv, lässt sich, -bar | 7 | 0.4 | – |
| a2-22 um…zu, ohne…zu | 7 | 0.4 | 2 |
| a1-32 Perfekt with sein | 7 | 0.2 | 1 |

The passive is the most over-weighted topic of the course relative to the papers: three full topics (b1-06, 07, 08) for structures that together occur about once per 800 words, almost only in press texts and house rules, and that no cloze item ever tested. It is still worth teaching for reading Lesen Teil 2 and 5, but one topic's worth, not three.

### 3.3 Sometimes, rarely, never

| Topic | Sets | Occurrences in 48k words | Tested |
|---|---|---|---|
| b1-01 Plusquamperfekt | 5 | 7 | – |
| b1-22 brauchen…zu, scheinen…zu, sein/haben…zu | 4 | 5 | – |
| b1-04 relative clauses dative / genitive (denen, deren, dessen) | 3 | 5 | **2** |
| b1-10 Konjunktiv II past (hätte gemacht, wäre gegangen) | 2 | 2 | **1** |
| b1-11 als ob | 2 | 2 | – |
| b1-13 n-declension | 2 | 2 | – |
| b1-03 modal verbs in the Perfekt (double infinitive) | 1 | 1 | – |

Nothing in the course is absent from every paper. The seven topics above are the rare ones: together they appear 24 times in 48,000 words. Two of them are nevertheless cloze favourites: the relative pronoun *denen* after a preposition appears in two of the three telc Sprachbausteine sets, and *hätte … lernen können* once. The rest (Plusquamperfekt, als ob, n-declension, modals in the Perfekt) are recognition-level for the exam: a learner needs to understand them in a text, not produce them.

Nine topics have no countable structure (pronunciation, regular present tense, verb-second, plural, nominative, midfield word order, pronoun order, the two text-type topics). The first six are in every sentence of every paper; the text-type topics are covered by the writing tasks in section 2.

### 3.4 What the grammar-cloze items test (76 items, telc and DTZ)

| Level of the topic | Items | Share |
|---|---|---|
| A1 topics | 25 | 33 % |
| A2 topics | 37 | 49 % |
| B1 topics | 14 | 18 % |

The most-tested single topics: adverbial connectors (deshalb, trotzdem, schließlich: 5 items), prepositions of time (am, im, seit, in dieser Zeit: 5), Perfekt participle or auxiliary (5), Konjunktiv II for polite requests and wishes (4), quantifiers and man/beide/viele (4), modal particles (schon, überhaupt, besonders: 3), da-/wo-compounds (3), indirect questions with ob/was (3). Across all 76 items the pattern is the same: **the telc and DTZ grammar sections test A2 structures in B1 texts**: case after prepositions, conjunction choice, auxiliary choice, connectors, pronouns, polite Konjunktiv II. Only 14 items reach into B1 topics, and those are the connectors (da, damit, auch wenn), *denen*, adjective + preposition, participle as adjective and register formulas (Sehr geehrte …, Ihre).

Practical reading: for the written exam, A2 accuracy earns more points than B1 range. The course's A2 units 2, 4, 7, 9 and 10 (clauses, verbs with prepositions and da-compounds, Konjunktiv II polite, indefinite pronouns, connectors and particles) are the ones to drill to automaticity before the exam.

### 3.5 Share of all structure occurrences

Of the 29,000 structure occurrences detected, A1 topics account for roughly 70 %, A2 topics for about 17 % and B1 topics for about 13 %, of which 7 points are word formation (prefixes and suffixes, counted broadly). Excluding word formation, the B1 structures a candidate must recognise make up about 6 % of what is on the page; the rest is A1 and A2 grammar used fluently.

## 4. Themes: exam domains vs course units

Domains of the 79 receptive text parts (Lesen, Hören, Sprachbausteine) across the nine sets, from the catalogue:

| Domain | Parts | Share | Sets with it | Course units that cover it |
|---|---|---|---|---|
| culture & leisure (sport, music, festivals, hobbies, holidays) | 15 | 19 % | 7 | A1 U3, A2 U9, B1 U9 |
| everyday life (neighbours, appointments, shopping, phone messages) | 14 | 18 % | 9 | A1 U2–U5, A2 U3, A2 U6 |
| education & learning (German courses, school, studying) | 14 | 18 % | 7 | A1 U8, A2 U5, B1 U5 |
| work & career | 8 | 10 % | 4 | A1 U3, A2 U5, B1 U2 |
| technology & media | 5 | 6 % | 4 | A2 U7, B1 U7 |
| health & food | 5 | 6 % | 3 | A1 U4, A2 U4, B1 U4 |
| travel & transport | 5 | 6 % | 5 | A1 U5–U6, A2 U10 |
| family & relationships | 3 | 4 % | 3 | A1 U5, A2 U1, B1 U1 |
| housing | 3 | 4 % | 2 | A1 U2, A2 U2 |
| bureaucracy & authorities | 3 | 4 % | 1 (DTZ only) | A2 U6 |
| society & politics | 2 | 3 % | 2 | B1 U3 |
| environment & energy | 1 | 1 % | 1 | A2 U8, B1 U6 |
| consumption & money | 1 | 1 % | 1 | A1 U4, B1 U8 |

Findings:

- **Every exam domain is covered by at least one unit.** No theme in the papers is missing from the course.
- **Weighting differs.** Three B1 units (U3 news, politics and society; U6 environment and climate; U8 consumption and money) are built around domains that supply 5 % of exam texts. Leisure, everyday life and learning supply 55 %. The opinion topics of Lesen Teil 4 and Hören Teil 4 are societal but domestic (banning violent games, a motorway speed limit, driving at 16, phones at school, toddlers in daycare, foreign languages for young children), not news or politics.
- **The DTZ is its own world**: Bürgeramt, Vermieter, Versicherung, Kita, Jobcenter. Only A2 unit 6 touches it. The DTZ mock paper is written entirely in that register.
- **Writing and speaking tasks** are personal across all providers: a party, a trip, a course, a friend's visit, an apology to a teacher, an invitation, a broken heating; presentation and discussion topics are everyday choices (shopping online, living without a car, wedding big or small, group travel, moving out, pets in the city). The course's writing tasks (28) match this register; the B1 unit 3 and 6 tasks (forum post on a council decision, climate) are more abstract than anything in the papers.

## 5. Vocabulary

Coverage was measured by word form: a token in the papers counts as covered if it is a course headword, one of its listed forms (plural, verb forms) or a regular inflection generated from them; function words and exam meta-language are excluded. This under-counts (irregular inflections, compounds whose parts are known) and the papers include names and places, so treat the numbers as a floor.

| Set | Content tokens | Covered |
|---|---|---|
| Goethe/ÖSD Modellsatz Erwachsene | 2,288 | 44 % |
| Goethe/ÖSD Übungssatz Erwachsene | 2,448 | 49 % |
| Goethe/ÖSD Übungssatz Jugendliche | 2,496 | 50 % |
| ÖSD Modellsatz Jugendliche | 2,434 | 44 % |
| telc Übungstest 1 | 1,764 | 41 % |
| telc Hungary | 1,613 | 43 % |
| telc B1 Schule | 2,366 | 42 % |
| telc A2·B1 (partial) | 1,007 | 57 % |
| DTZ Modelltest | 1,648 | 53 % |
| all | 17,064 | 46 % |

The gap was not in B1 topic vocabulary but in high-frequency basics that the lists never made headwords. None of these are in the course lists, although several appear in example sentences: *Problem, Mensch, Leben, Information, Situation, Gruppe, Hilfe, Ende, Anfang, Zeitung, Person, Ding, Vorschlag, Verein, Mitglied, Erlebnis, Diskussion, Vorbereitung, Reihenfolge, Heimatland, Radio, Job, Bild, Art, Service; gemeinsam, allein, sogar, genug, deutlich, direkt, nämlich, frei, klar, unbedingt, überall, bisschen; bieten, planen, erhalten, halten, benutzen, nutzen, mitbringen, abholen, vorstellen, lösen, unterhalten, reagieren, präsentieren*. **Done on the same day:** three "core words" sets were added (`a1-u8-core-words` 144 words, `a2-u10-core-words` 140, `b1-u10-core-words` 88; 372 new headwords, 2,105 in all). Re-running the analysis lifts form-based coverage from 46 % to 60 % of content tokens (Goethe/ÖSD sets 59–65 %, telc 53–55 %, DTZ 65 %). The remaining uncovered types are mostly names, places, compounds whose parts are known, and irregular inflections the matcher does not generate; the current frequency list is at the end of [exam-analysis/raw-analysis.md](exam-analysis/raw-analysis.md).

## 6. What to change in the course, in order of payoff

1. **Exam practice in exam format** – done with this analysis: four mock papers (Goethe/ÖSD ×2, telc, DTZ) under Tests → Exam practice, with the official parts, item counts, timings, point schemes and self-assessment criteria; listening via the device voice; speaking parts rehearsed with the AI partner.
2. **A core-vocabulary set** of the high-frequency words above: done, three sets at the end of A1, A2 and B1 (see section 5).
3. **Drill A2 accuracy** before the exam: connectors, prepositions of time, Perfekt auxiliaries, polite Konjunktiv II, indefinite pronouns, da-compounds, ob/indirect questions. A "Sprachbausteine" practice mode (connected letter, three options per gap) would mirror what telc and the DTZ actually test.
4. **Rebalance B1 grammar**: merge the three passive topics into one with a reading focus; keep Plusquamperfekt, als ob, n-declension and modals in the Perfekt short and recognition-oriented; give relative pronouns after prepositions (*denen*) and Konjunktiv II past a few cloze-style exercises because telc tests them.
5. **Add the missing text types to unit reading**: adverts to match, reader comments for/against, house rules; and add listening comprehension (not dictation) to units, starting with voicemails and announcements, which are in every paper.
6. **Themes**: keep the ten B1 units, but add one leisure/everyday text and one "German course / learning" text to the B1 reading set, and tone the unit 3 and 6 writing tasks toward personal opinion pieces.
