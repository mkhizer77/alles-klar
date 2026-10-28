# UX review (2026-10-28)

A pass over every screen at phone width (375 px) and on a laptop, after the speaking phase landed. Findings are ordered by how much they get in the way; each one says what was done.

## Fixed in this pass

| # | Screen | Finding | Change |
|---|--------|---------|--------|
| 1 | Home, Learn (phone) | The page was wider than the screen: cards and rows were cut off on the right and the page scrolled sideways. Cause: a truncated title inside a flex row inside a grid; grid and flex children default to `min-width: auto`, so the row forced its column to the title's full width. | Global rule: grid and flex children get `min-width: 0`. Verified `scrollWidth` equals the viewport on every screen. |
| 2 | Speaking (chat) | The composer floated over the transcript, so the newest reply, its correction and the hint were hidden behind it; the page scrolled as a document. | The chat is now a fixed column between the top bar and the tab bar: compact header (title, partner, goals done), the transcript scrolls in its own area and always shows the newest turn, the composer sits at the bottom. On a laptop it is a bordered panel of the same shape. |
| 3 | Speaking (chat) | Each turn needed three taps: mic, stop, send. On a commute that is too many. | After you stop speaking, the line is sent on its own (a short delay, cancelled if you tap the box to edit). Off by default when typing; toggle in the intro and in Settings. |
| 4 | Speaking (chat) | "End" was a faint ghost button and there was no signal that the conversation could be wrapped up. | A banner appears once the minimum turns are done, or when the partner says goodbye: "Finish and get feedback". Finishing early stays possible from the header. |
| 5 | Speaking (intro) | The start button sat below the phrase list, under the fold on a phone. | The "How it works / Start" card comes right after the situation; the phrases follow (they are also one tap away inside the chat). |
| 6 | Topic (phone) | The floating "Practice →" button covered the Practice card and the previous/next links at the end of the page. | The button hides while the Practice card is on screen. |
| 7 | Topic (phone) | Tables used `white-space: nowrap`, so longer example sentences were cut off and needed sideways scrolling inside the table. | Cells wrap; the table still scrolls only if a row is genuinely too wide. |
| 8 | Learn (phone) | The level chips wrapped onto two or three lines ("B1 · Independent user") and looked uneven. | Chips show the level only on phones; the name appears from tablet width up. |
| 9 | Learn | Every untouched row carried a "New" badge, which made the list noisy and hid the rows that actually had a status. | No badge for untouched rows; "Read", scores and "Coming soon" stay. |

## Checked and left as is

- **Practice / Listening / Test runner**: the Check button sits at the bottom within thumb reach, the progress bar and close control are clear, Return advances. No change.
- **Vocab session**: the card fades in on each new word; the first screenshot caught it mid-fade, which is fine in use.
- **Reading, Writing, Tests, Settings, Concepts**: layout and copy read well on both widths. Concepts finds the als/wenn topic for "wenn als"; the topic's tags now include "immer wenn" and "jedes Mal" so those searches land there too.
- **Desktop**: the sidebar plus a 48 rem reading column works for every screen, including the speaking panel.

## Still open (not UX bugs, larger pieces)

- A native-speaker review of the generated German (`docs/CONTENT-NOTES.md`).
- Writing tasks could reuse the conversation partner for feedback on the learner's text.
