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
