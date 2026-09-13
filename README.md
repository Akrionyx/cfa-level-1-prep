# CFA Level I — Study App

An interactive, adaptive study app covering all ten topic areas of the CFA Level I
curriculum. Minimalist, dependency-free, and runs entirely in the browser.

**Live:** <https://akrionyx.github.io/cfa-level-1-prep/>

Pushing to `main` redeploys the site automatically via GitHub Pages.

## Running it

No build step and no dependencies. Serve the folder over HTTP:

```bash
python3 -m http.server 8123
```

Then open <http://localhost:8123>. (ES modules need HTTP — opening `index.html`
directly from the filesystem will not work.)

## Deploying

Because it is a static site, GitHub Pages serves it as-is: push to GitHub, then
enable Pages on the `main` branch, root folder. No configuration needed.

## What's in it

- **Lessons** — original teaching material organised by topic → module → lesson,
  with worked examples, formula callouts and comparison tables.
- **Practice** — build a question set by topic and difficulty (Easy / Medium /
  Hard / Very Hard). Adaptive ordering puts previously missed and unseen
  questions from your weakest topics first.
- **Explanations** — every question explains why the right answer is right *and*
  why each distractor fails.
- **Spaced repetition** — questions you answer return on a widening schedule
  (1, 3, 7, 16, 35, 70, 120 days) and drop back down whenever you get one wrong.
- **Mock exams** — timed, graded at the end, with questions drawn in proportion
  to the published exam weights. 30, 90 or 180 questions.
- **Flashcards** — flip cards with their own review schedule.
- **Formula sheet** — searchable reference across the whole curriculum.
- **Progress tracking** — mastery and accuracy per topic, weak-area detection,
  streaks, and 14-day activity.

Progress is stored in your browser's `localStorage`. It is private to the device
and browser you use, and never leaves your machine.

## Content

| Topic | Exam weight | Modules | Lessons | Questions | Cards | Formulas |
|---|---|---|---|---|---|---|
| Ethical and Professional Standards | 15–20% | 6 | 8 | 21 | 31 | — |
| Quantitative Methods | 6–9% | 6 | 7 | 28 | 27 | 26 |
| Economics | 6–9% | 8 | 9 | 34 | 39 | 20 |
| Financial Statement Analysis | 11–14% | 10 | 13 | 46 | 47 | 34 |
| Corporate Issuers | 6–9% | 7 | 8 | 32 | 32 | 15 |
| Equity Investments | 11–14% | 7 | 9 | 29 | 31 | 16 |
| Fixed Income | 11–14% | 10 | 11 | 48 | 46 | 32 |
| Derivatives | 5–8% | 7 | 9 | 29 | 28 | 16 |
| Alternative Investments | 7–10% | 7 | 8 | 30 | 31 | 9 |
| Portfolio Management | 8–12% | 6 | 6 | 29 | 28 | 12 |
| **Total** | | **74** | **88** | **326** | **340** | **180** |

Modules follow the structure of the current Level I curriculum, with closely
related curriculum readings combined where that reads better. Every question
has a difficulty level and explains why each wrong answer fails.

Answer positions are balanced at load time: each question gets a stable
choice order seeded by its id (`arrange()` in `js/content/index.js`), so authors
can write the correct answer in any position without creating a guessable bias.

## Project structure

```
index.html          Shell: top bar, main container, footer
styles.css          All styling. Light/dark via CSS custom properties
js/
  app.js            Hash router, theme, keyboard shortcuts
  store.js          localStorage persistence and derived statistics
  srs.js            Spaced-repetition scheduling
  quiz.js           Question engine (practice + exam modes, results)
  render.js         Lesson block renderer
  util.js           DOM, date and formatting helpers
  content/
    index.js        Curriculum registry and lookup helpers
    <topic>.js      One file per topic area
  views/            One module per screen
```

## Adding content

Each topic file exports a single object. To add questions, append to a module's
`questions` array:

```js
{
  id: 'q-xx-001',              // must be unique across the whole app
  difficulty: 'medium',        // easy | medium | hard | expert
  vignette: 'Optional setup.', // omitted for short questions
  stem: 'The question itself:',
  choices: ['A', 'B', 'C'],    // Level I uses three
  answer: 1,                   // zero-based index
  explain: 'Why the answer is right.',
  why: ['Why A fails.', 'Why C fails.'],
}
```

Lessons use typed content blocks (`p`, `h`, `ul`, `ol`, `formula`, `callout`,
`example`, `table`) rendered by `js/render.js`.

## Keyboard shortcuts

- `1` / `2` / `3` — answer the visible question
- `Enter` — next question
- `Space` — flip / advance a flashcard

## A note on sources

All lesson text, questions, and explanations in this repository were written
originally for this app to teach the concepts the Level I Learning Outcome
Statements cover. Nothing is reproduced from CFA Institute's copyrighted
curriculum or question bank.

CFA Institute does not endorse, promote, or warrant the accuracy or quality of
this app. CFA® and Chartered Financial Analyst® are registered trademarks owned
by CFA Institute.
