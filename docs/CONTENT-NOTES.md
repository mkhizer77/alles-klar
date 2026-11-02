# Content notes and open questions

Points the content writers flagged for a native-speaker check. None blocks use; they are places where textbooks differ or where a second accepted form could be added.

## General
- Translate exercises list the natural variants the writer could think of; a learner may type another valid order. If an answer you believe is right is marked wrong, add it to that exercise's `answer` list.
- Around 140 headwords appeared in two levels (e.g. *Bewerbung* in A2 and B1). The app keeps each headword only at its lowest level at load time (`src/content/index.ts`), so the files still contain the duplicates and can be cleaned up by hand later.
- Plural-only nouns are written as `'die Eltern (nur Plural)'` or `'nur Plural'`.
- Theme strings in a few B1/A2 vocabulary files differ slightly in punctuation from `vocabTheme` in `curriculum.ts`; nothing reads them together today.

## A1
- *recht haben* vs *Recht haben*: both accepted since 2017; files use both spellings in places.
- a1-12: "Ich bin ein Lehrer" described as "sounds translated" rather than wrong.
- a1-15 includes *du hältst*, correct but awkward.
- a1-18: imperative -e described as formal/poetic except after -t/-d/consonant clusters.
- a1-32: *schwimmen* with both *haben* and *sein* mentioned.
- a1-34: comma before *und* optional, required before *aber / denn / sondern*.
- a1-36: no comma after the closing (DIN layout); the translate exercise accepts the comma variant.

## A2
- a2-03: both "Das wusste ich nicht" and "Das habe ich nicht gewusst" accepted.
- a2-10: *größer wie* marked non-standard.
- a2-15: *wegen dem* described as spoken, non-standard; article-less plural after *wegen / trotz* takes Dative.
- a2-16: *auf der Bank / Post* kept as textbook forms.
- a2-21: comma before a short zu-infinitive described as optional but recommended.
- a2-24 ex09 uses n-declension (*jeden Nachbarn*) before it is taught in B1.
- a2-25: *jemand / jemanden* both allowed in prose; ex12 asks for *jemanden*.
- a2-32: *siebte* standard, *siebente* older.

## B1
- b1-03: standard order *… dass er hat arbeiten müssen*.
- b1-07 ex11: *Das Problem hat gelöst werden müssen* (rare, standard).
- b1-12: *sei(e)st / seiet* given as textbook forms; ex02 accepts *hat* and *habe*.
- b1-13: *des Nachbarn* used consistently (Duden also allows *des Nachbars*).
- b1-16 ex12: *vieler junger Leute* (parallel -er) as the recommended form.
- b1-18 ex02 accepts *deshalb / deswegen / daher / darum / also*.
- b1-20: *falls / wenn* and *sofern / wenn* both accepted.
- b1-26: *laut* with Genitive or Dative; *mit Hilfe* accepted next to *mithilfe*.
- b1-29: *gemissbraucht* mentioned as heard, *missbraucht* recommended.

## Level review, 2026-10-28

The learner found some concepts "alien", so every A2 and B1 topic was re-read against the Goethe/telc syllabus for its level. Rule applied: a topic explains what its level is expected to produce; forms the level only needs to recognise are reduced to one "You may also see …" line; anything beyond the level is cut. Every German grammar term is glossed in English the first time it appears, and each explanation opens with what the structure is for and one example before any rule. Exercises that tested removed material were replaced; every topic keeps at least 9.

Kept although at the upper edge of the level (and why):

- A2: adjective endings without an article incl. the Dative row (*bei schönem Wetter*, recognition only); *während* and *statt* next to *wegen* (in the topic title, kept short); *ohne … zu / anstatt … zu* (same pattern as *um … zu*); pronoun order in the midfield reduced to three rules; the full Konjunktiv II paradigm with *müsste/dürfte* (compact); a recognition table of common strong-verb Präteritum forms, marked "recognise, do not produce".
- B1 units 1–5: the Perfekt passive *ist … worden* (in the curriculum, common in B1 reading; *wurde …* given as the safe choice); Konjunktiv II past with *hätte … sollen/können* only (regrets and advice are a B1 speaking task); past Konjunktiv II after *als ob* (one example, reuses the form); *…, was mich freut* and *wo(r)-* forms after *etwas/nichts*; modal verbs in the Perfekt framed as "recognise, use the Präteritum yourself"; Konjunktiv I er-forms (*sei, habe, werde, könne, müsse, wisse*) for reading the news, recognition only.
- The als/wenn topic was rebuilt as a three-way contrast (als / wenn / immer wenn, jedes Mal, wenn) with *wann* set apart, because that is how it is taught in class.
- B1 units 6–10: Futur II and the guessing modals *muss / dürfte* (b1-24) are recognition only; the topic now teaches B1 ways to guess (*wahrscheinlich, wohl, vielleicht, könnte*, Perfekt + *wahrscheinlich*). *sich lassen* + infinitive and *sein / haben … zu* = must stay as one line each because the passive-alternatives topic links to them. Extended participle groups, verb-first conditions, Genitive without an article and *anlässlich / infolge / anhand / bezüglich* are single "You may also see" lines for reading. *sofern* and *es sei denn* stay because they are in the curriculum title. *leiden an* and *kindlich / kindisch* are borderline but in B1 word lists.

## Step lessons, 2026-11-02

Every topic was rewritten from one long markdown explanation into a lesson of 3–7 short steps, each with its own example sentences (`steps` in `Topic`; rules in CONTENT-GUIDE.md, enforced by the validator: 20–90 words per step, 2–4 examples, under 450 words per lesson). The "Why it matters" sections were dropped everywhere; the summary carries that job. Lesson text went from ~53,000 words over 100 topics to ~32,000 over 123.

Twenty-three topics that bundled two ideas were split. The existing id keeps the first idea (retitled); the second got a new id with a letter suffix so no learner progress is lost: a1-08b telling the time, a1-14b demonstratives, a1-16b inseparable verbs, a1-17b modal verbs 2 (möchten, dürfen, sollen), a2-05b indirect questions, a2-18b nach/zu/in, a2-20b wishes and suggestions, a2-28b time subjunctions, a2-30b nouns from verbs, a2-31b semi-formal email, a2-32b years and fractions, b1-02b während/seit/bis/sobald/solange, b1-05b relative clauses with wo/was/wer, b1-08b passive alternatives, b1-09b irreal wishes and advice (also took the polite-suggestion material out of b1-11 als ob), b1-12b Konjunktiv I, b1-15b Partizip II as adjective, b1-16b adjective endings in the Genitive, b1-18b concession, b1-19b manner (indem), b1-22b haben/sein … zu, b1-30b adjective suffixes, b1-32b structuring a talk. Exercises were divided by what they test and topped up to 9–12 per topic; the ids of moved exercises changed to the new topic's prefix.

Judgement calls worth a native-speaker look:
- Tables were trimmed to at most 7 rows: the A1 gender-clue table (kept -heit/-keit in the text), the A2 strong-verb Präteritum table (12 verbs), the two-way preposition meaning table (split into an/auf/in and the rest), the B1 collocation table (now four steps by verb).
- Recognition-only material from the 2026-10-28 review is now one edge case or one short final step: *es gäbe / er käme*, subject-less and Dative-verb passives, *ist … worden*, *hat gelöst werden müssen*, *sein/haben … zu* = must, Futur II and *muss/dürfte* guesses, extended participle groups, verb-first conditions, *anlässlich / infolge / anhand / bezüglich*, *jener*, *schon / halt / eben*, *sehen / hören / lassen* + infinitive.
- b1-12 (indirect speech with dass) gained one short step on time and place shifts (*morgen → am nächsten Tag, hier → dort*) that the old file did not have.
- a2-31 (reading strategies) gained minimal material on headings, connectors and true/false strategy; a2-30 gained the linking letter -e-.
- a2-06 had 15 exercises; three near-duplicates were dropped to meet the 12 cap.
- a1-26 still uses *mir / dir / Ihnen* in fixed phrases one topic before Dative pronouns are taught, as before.
- Writing, speaking and exam references were widened to the new siblings (e.g. the semi-formal email tasks now point at a2-31b); glossary entries for *untrennbares Verb* and *Demonstrativartikel* were added.
