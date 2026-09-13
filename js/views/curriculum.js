// Curriculum browsing: topic list, topic detail, and lesson reader.

import { CURRICULUM, getTopic, getModule, getLesson, questionsForTopic, questionsForModule } from '../content/index.js';
import { statsFor, markLesson, lessonDone } from '../store.js';
import { esc, bar, DIFFICULTY, DIFF_ORDER, navigate } from '../util.js';
import { renderBlocks } from '../render.js';
import { startSession } from '../quiz.js';

/* ---------------- topic list ---------------- */

export function renderTopics(root) {
  root.innerHTML = `
    <div class="page-head">
      <div class="eyebrow">Curriculum</div>
      <h1>The ten topic areas</h1>
      <p class="lede">Exam weights shown are the published ranges for the current Level I curriculum. Each topic is organised into modules, with lessons, formulas, flashcards and practice questions at four difficulty levels.</p>
    </div>
    ${CURRICULUM.map((t) => {
      const s = statsFor(questionsForTopic(t.id));
      const lessons = t.modules.reduce((n, m) => n + (m.lessons?.length || 0), 0);
      return `
        <a class="topic-row" href="#/topic/${t.id}">
          <div class="topic-main">
            <div class="topic-name">${esc(t.name)}</div>
            <div class="topic-meta">${esc(t.weight)} of exam · ${t.modules.length} modules · ${lessons} lessons · ${s.total} questions</div>
          </div>
          <div class="topic-side">
            <div class="topic-pct">${s.mastery}%</div>
            ${bar(s.mastery)}
          </div>
        </a>`;
    }).join('')}
  `;
}

/* ---------------- topic detail ---------------- */

export function renderTopic(root, topicId) {
  const topic = getTopic(topicId);
  if (!topic) return notFound(root);

  const s = statsFor(questionsForTopic(topicId));

  root.innerHTML = `
    <div class="breadcrumb"><a href="#/topics">Curriculum</a><span>/</span>${esc(topic.name)}</div>

    <div class="page-head">
      <div class="eyebrow">${esc(topic.weight)} of the exam</div>
      <h1>${esc(topic.name)}</h1>
      <p class="lede">${esc(topic.summary)}</p>
    </div>

    <div class="grid grid-3">
      <div class="stat"><div class="stat-label">Mastery</div><div class="stat-value">${s.mastery}%</div><div class="stat-sub">${s.mastered} of ${s.total} questions</div></div>
      <div class="stat"><div class="stat-label">Accuracy</div><div class="stat-value">${s.accuracy === null ? '—' : s.accuracy + '%'}</div><div class="stat-sub">${s.attempts} attempts</div></div>
      <div class="stat"><div class="stat-label">Coverage</div><div class="stat-value">${s.coverage}%</div><div class="stat-sub">${s.seen} questions seen</div></div>
    </div>

    <div class="btn-row" style="margin-top:20px">
      <button class="btn btn-primary" data-practice="${topic.id}">Practise this topic</button>
      <a class="btn" href="#/cards?topic=${topic.id}">Flashcards</a>
      <a class="btn" href="#/formulas?topic=${topic.id}">Formulas</a>
    </div>

    ${topic.modules.map((m) => renderModule(topic, m)).join('')}
  `;

  root.querySelector('[data-practice]')?.addEventListener('click', () => {
    const qs = questionsForTopic(topic.id);
    if (!qs.length) return;
    startSession({ questions: shuffled(qs), title: topic.name, returnTo: `#/topic/${topic.id}` });
    navigate('#/session');
  });

  root.querySelectorAll('[data-module-practice]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qs = questionsForModule(btn.dataset.modulePractice);
      if (!qs.length) return;
      startSession({ questions: shuffled(qs), title: btn.dataset.moduleName, returnTo: `#/topic/${topic.id}` });
      navigate('#/session');
    });
  });
}

function renderModule(topic, m) {
  const qs = questionsForModule(m.id);
  const s = statsFor(qs);
  const counts = DIFF_ORDER
    .map((d) => ({ d, n: qs.filter((q) => q.difficulty === d).length }))
    .filter((x) => x.n);

  return `
    <div class="section">
      <div class="section-head">
        <h2>${esc(m.name)}</h2>
        <span class="small muted">${s.accuracy === null ? `${qs.length} questions` : `${s.accuracy}% accuracy`}</span>
      </div>
      <div class="card">
        <div class="field-label">Learning outcomes</div>
        <ul style="margin:0 0 18px;padding-left:20px;font-size:14px;color:var(--ink-soft)">
          ${m.los.map((l) => `<li style="margin-bottom:5px">${esc(l)}</li>`).join('')}
        </ul>

        ${m.lessons?.length ? `
          <div class="field-label">Lessons</div>
          <ul class="list-plain" style="margin-bottom:18px">
            ${m.lessons.map((l) => `
              <li><a class="item-link" href="#/lesson/${topic.id}/${m.id}/${l.id}">
                <span class="item-dot ${lessonDone(l.id) ? 'done' : ''}"></span>
                <span class="item-text">${esc(l.title)}</span>
                <span class="item-side">${l.minutes} min</span>
              </a></li>`).join('')}
          </ul>` : ''}

        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            ${counts.map((c) => `<span class="pill ${DIFFICULTY[c.d].cls}">${DIFFICULTY[c.d].label} · ${c.n}</span>`).join('')}
          </div>
          <button class="btn btn-sm" data-module-practice="${m.id}" data-module-name="${esc(m.name)}" ${qs.length ? '' : 'disabled'}>
            Practise ${qs.length} question${qs.length === 1 ? '' : 's'}
          </button>
        </div>
      </div>
    </div>`;
}

/* ---------------- lesson ---------------- */

export function renderLesson(root, topicId, moduleId, lessonId) {
  const topic = getTopic(topicId);
  const mod = getModule(topicId, moduleId);
  const lesson = getLesson(topicId, moduleId, lessonId);
  if (!topic || !mod || !lesson) return notFound(root);

  markLesson(lesson.id);

  const idx = mod.lessons.findIndex((l) => l.id === lessonId);
  const next = mod.lessons[idx + 1];
  const qs = questionsForModule(mod.id);

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="#/topics">Curriculum</a><span>/</span>
      <a href="#/topic/${topic.id}">${esc(topic.short || topic.name)}</a><span>/</span>${esc(mod.name)}
    </div>

    <div class="page-head">
      <div class="eyebrow">${lesson.minutes} minute read</div>
      <h1>${esc(lesson.title)}</h1>
    </div>

    <article class="prose">${renderBlocks(lesson.blocks)}</article>

    <hr class="hr" />

    <div class="btn-row">
      ${next ? `<a class="btn" href="#/lesson/${topic.id}/${mod.id}/${next.id}">Next lesson →</a>` : ''}
      <button class="btn btn-primary" id="test" ${qs.length ? '' : 'disabled'}>Test yourself on ${esc(mod.name)}</button>
      <a class="btn btn-ghost" href="#/topic/${topic.id}">Back to topic</a>
    </div>
  `;

  root.querySelector('#test')?.addEventListener('click', () => {
    startSession({
      questions: shuffled(qs),
      title: mod.name,
      returnTo: `#/lesson/${topic.id}/${mod.id}/${lesson.id}`,
    });
    navigate('#/session');
  });

  window.scrollTo(0, 0);
}

/* ---------------- helpers ---------------- */

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function notFound(root) {
  root.innerHTML = `<div class="empty"><h3>Not found</h3><p>That page does not exist. <a href="#/topics">Back to the curriculum</a>.</p></div>`;
}
