// Curriculum registry. Each topic file default-exports one topic object.
//
// All lesson text, questions and explanations here are written originally for
// this app to teach the same concepts the Level I Learning Outcome Statements
// cover. Nothing is reproduced from CFA Institute's copyrighted materials.

import ethics from './ethics.js';
import quant from './quant.js';
import economics from './economics.js';
import fsa from './fsa.js';
import corporate from './corporate.js';
import equity from './equity.js';
import fixedincome from './fixedincome.js';
import derivatives from './derivatives.js';
import alternatives from './alternatives.js';
import portfolio from './portfolio.js';

export const CURRICULUM = [
  ethics, quant, economics, fsa, corporate,
  equity, fixedincome, derivatives, alternatives, portfolio,
];

/* ---------------- answer-position balancing ---------------- */

// Authored questions put the correct answer in B far more often than C, which
// rewards guessing. Each question gets a stable pseudo-random choice order
// seeded by its id, and the leading letters in its "why" notes are remapped.
function seededOrder(id, n) {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) { h ^= id.charCodeAt(i); h = Math.imul(h, 16777619); }
  const rand = () => {
    h = (h + 0x6d2b79f5) | 0;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const order = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

const LETTERS = 'ABC';

function arrange(q) {
  const order = seededOrder(q.id, q.choices.length);   // order[newPos] = oldPos
  const newPosOf = (oldPos) => order.indexOf(oldPos);
  const remap = (letter) => LETTERS[newPosOf(LETTERS.indexOf(letter))];

  const why = (q.why || [])
    .map((w) => w.replace(/^([ABC])(?: and ([ABC]))?\b/, (_, a, b) =>
      b ? [remap(a), remap(b)].sort().join(' and ') : remap(a)))
    .sort((x, y) => x.localeCompare(y));

  return {
    ...q,
    choices: order.map((oldPos) => q.choices[oldPos]),
    answer: newPosOf(q.answer),
    why,
  };
}

/* ---------------- flattening helpers ---------------- */

const withContext = (topic) =>
  topic.modules.flatMap((m) =>
    (m.questions || []).map((q) => ({ ...arrange(q), topicId: topic.id, topicName: topic.name, moduleId: m.id, moduleName: m.name }))
  );

export const ALL_QUESTIONS = CURRICULUM.flatMap(withContext);

export const ALL_CARDS = CURRICULUM.flatMap((t) =>
  t.modules.flatMap((m) => (m.cards || []).map((c) => ({ ...c, topicId: t.id, topicName: t.name, moduleId: m.id })))
);

export const ALL_FORMULAS = CURRICULUM.flatMap((t) =>
  t.modules.flatMap((m) => (m.formulas || []).map((f) => ({ ...f, topicId: t.id, topicName: t.name, moduleName: m.name })))
);

export const ALL_LESSONS = CURRICULUM.flatMap((t) =>
  t.modules.flatMap((m) => (m.lessons || []).map((l) => ({ ...l, topicId: t.id, topicName: t.name, moduleId: m.id, moduleName: m.name })))
);

/* ---------------- lookups ---------------- */

export const getTopic = (id) => CURRICULUM.find((t) => t.id === id);

export function getModule(topicId, moduleId) {
  return getTopic(topicId)?.modules.find((m) => m.id === moduleId);
}

export function getLesson(topicId, moduleId, lessonId) {
  return getModule(topicId, moduleId)?.lessons?.find((l) => l.id === lessonId);
}

/** Every lesson in a topic, in reading order, with its module attached. */
export function lessonPath(topicId) {
  const topic = getTopic(topicId);
  if (!topic) return [];
  return topic.modules.flatMap((m, mi) =>
    (m.lessons || []).map((l, li) => ({ topic, module: m, lesson: l, moduleIndex: mi, lessonIndex: li })));
}

export const questionsForTopic = (id) => ALL_QUESTIONS.filter((q) => q.topicId === id);
export const questionsForModule = (id) => ALL_QUESTIONS.filter((q) => q.moduleId === id);

export function filterQuestions({ topics = [], difficulties = [], moduleIds = [] } = {}) {
  return ALL_QUESTIONS.filter((q) => {
    if (topics.length && !topics.includes(q.topicId)) return false;
    if (moduleIds.length && !moduleIds.includes(q.moduleId)) return false;
    if (difficulties.length && !difficulties.includes(q.difficulty)) return false;
    return true;
  });
}

/** Exam weight midpoint, used to size the mock exam per topic. */
export const weightMid = (t) => t.weightMid;

export function contentDepth(topic) {
  const lessons = topic.modules.reduce((n, m) => n + (m.lessons?.length || 0), 0);
  const questions = topic.modules.reduce((n, m) => n + (m.questions?.length || 0), 0);
  return { lessons, questions, modules: topic.modules.length };
}
