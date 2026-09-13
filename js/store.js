// Progress persistence (localStorage) + derived statistics.

import { today, daysFromNow, isoLocal } from './util.js';
import { schedule, INITIAL } from './srs.js';

const KEY = 'cfa-l1-progress-v1';

const blank = () => ({
  version: 1,
  theme: null,
  questions: {},   // qid -> { seen, right, wrong, lastCorrect, reps, interval, due, lastSeen }
  cards: {},       // cardId -> { reps, interval, due }
  lessons: {},     // lessonId -> iso timestamp
  mocks: [],       // { at, score, total, seconds, byTopic }
  days: {},        // 'YYYY-MM-DD' -> { answered, right }
});

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return blank();
    const parsed = JSON.parse(raw);
    return { ...blank(), ...parsed };
  } catch {
    return blank();
  }
}

let saveTimer = null;
export function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* quota / private mode */ }
  }, 120);
}

export const getState = () => state;

export function resetAll() {
  state = blank();
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
}

export function exportJSON() {
  return JSON.stringify(state, null, 2);
}

export function importJSON(text) {
  const parsed = JSON.parse(text);
  if (typeof parsed !== 'object' || !parsed) throw new Error('Not a progress file');
  state = { ...blank(), ...parsed };
  save();
}

/* ---------------- theme ---------------- */

export function getTheme() {
  if (state.theme) return state.theme;
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function setTheme(t) {
  state.theme = t;
  save();
}

/* ---------------- questions ---------------- */

export function qStat(qid) {
  return state.questions[qid] || null;
}

export function recordAnswer(qid, correct, { srs = true } = {}) {
  const prev = state.questions[qid] || { seen: 0, right: 0, wrong: 0, ...INITIAL };
  const next = {
    ...prev,
    seen: prev.seen + 1,
    right: prev.right + (correct ? 1 : 0),
    wrong: prev.wrong + (correct ? 0 : 1),
    lastCorrect: correct,
    lastSeen: new Date().toISOString(),
  };
  if (srs) Object.assign(next, schedule(prev, correct));
  state.questions[qid] = next;

  const d = today();
  const day = state.days[d] || { answered: 0, right: 0 };
  day.answered += 1;
  day.right += correct ? 1 : 0;
  state.days[d] = day;

  save();
  return next;
}

export function isDue(qid) {
  const s = state.questions[qid];
  if (!s || !s.due) return false;
  return s.due <= today();
}

/** Questions scheduled for review today (hardest / most overdue first). */
export function dueQuestions(allQuestions) {
  const t = today();
  return allQuestions
    .filter((q) => {
      const s = state.questions[q.id];
      return s && s.due && s.due <= t;
    })
    .sort((a, b) => {
      const sa = state.questions[a.id], sb = state.questions[b.id];
      if (sa.due !== sb.due) return sa.due < sb.due ? -1 : 1;
      return (sa.reps || 0) - (sb.reps || 0);
    });
}

/** Questions never attempted. */
export function unseenQuestions(allQuestions) {
  return allQuestions.filter((q) => !state.questions[q.id]);
}

/* ---------------- cards ---------------- */

export function cardStat(id) {
  return state.cards[id] || null;
}

export function recordCard(id, remembered) {
  const prev = state.cards[id] || { ...INITIAL };
  state.cards[id] = { ...prev, ...schedule(prev, remembered), lastSeen: new Date().toISOString() };
  save();
  return state.cards[id];
}

export function dueCards(allCards) {
  const t = today();
  return allCards.filter((c) => {
    const s = state.cards[c.id];
    return !s || !s.due || s.due <= t;
  });
}

/* ---------------- lessons ---------------- */

export function markLesson(id) {
  if (!state.lessons[id]) {
    state.lessons[id] = new Date().toISOString();
    save();
  }
}

export const lessonDone = (id) => Boolean(state.lessons[id]);

/* ---------------- mocks ---------------- */

export function recordMock(result) {
  state.mocks.unshift({ at: new Date().toISOString(), ...result });
  state.mocks = state.mocks.slice(0, 25);
  save();
}

export const getMocks = () => state.mocks;

/* ---------------- derived stats ---------------- */

/** Accuracy + coverage for an arbitrary list of questions. */
export function statsFor(questions) {
  let seen = 0, right = 0, attempts = 0, mastered = 0;
  for (const q of questions) {
    const s = state.questions[q.id];
    if (!s) continue;
    seen += 1;
    attempts += s.seen;
    right += s.right;
    // "Mastered" = answered right at least twice and the last attempt was correct.
    if (s.right >= 2 && s.lastCorrect) mastered += 1;
  }
  return {
    total: questions.length,
    seen,
    attempts,
    right,
    accuracy: attempts ? Math.round((right / attempts) * 100) : null,
    coverage: questions.length ? Math.round((seen / questions.length) * 100) : 0,
    mastered,
    mastery: questions.length ? Math.round((mastered / questions.length) * 100) : 0,
  };
}

/** Consecutive days (ending today or yesterday) with at least one answer. */
export function streak() {
  let n = 0;
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  // Allow the streak to still count if today hasn't been studied yet.
  if (!state.days[today()]) d.setDate(d.getDate() - 1);
  for (;;) {
    const iso = isoLocal(d);
    if (state.days[iso]?.answered) { n += 1; d.setDate(d.getDate() - 1); }
    else break;
  }
  return n;
}

export function answeredToday() {
  return state.days[today()]?.answered || 0;
}

/** Last N days of activity, oldest first. */
export function recentDays(n = 14) {
  const out = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - (n - 1));
  for (let i = 0; i < n; i++) {
    const iso = isoLocal(d);
    out.push({ date: iso, ...(state.days[iso] || { answered: 0, right: 0 }) });
    d.setDate(d.getDate() + 1);
  }
  return out;
}

export function dueCountSoon(allQuestions) {
  const t = daysFromNow(0);
  let due = 0, soon = 0;
  for (const q of allQuestions) {
    const s = state.questions[q.id];
    if (!s?.due) continue;
    if (s.due <= t) due += 1;
    else if (s.due <= daysFromNow(3)) soon += 1;
  }
  return { due, soon };
}
