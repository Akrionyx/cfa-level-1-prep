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

/* ---------------- flattening helpers ---------------- */

const withContext = (topic) =>
  topic.modules.flatMap((m) =>
    (m.questions || []).map((q) => ({ ...q, topicId: topic.id, topicName: topic.name, moduleId: m.id, moduleName: m.name }))
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
