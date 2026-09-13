// Learning: topic list, topic detail (the learning path), and the lesson reader.

import { CURRICULUM, getTopic, getModule, getLesson, lessonPath, questionsForTopic, questionsForModule } from '../content/index.js';
import { statsFor, markLesson, lessonDone, setLastLesson, getLastLesson } from '../store.js';
import { esc, bar, DIFFICULTY, DIFF_ORDER, navigate, pct } from '../util.js';
import { renderBlocks, wireBlocks } from '../render.js';
import { startSession } from '../quiz.js';

const lessonHref = (s) => `#/lesson/${s.topic.id}/${s.module.id}/${s.lesson.id}`;

/** The lesson a learner should open next within a topic. */
export function nextLessonIn(topicId) {
  const path = lessonPath(topicId);
  if (!path.length) return null;
  const last = getLastLesson();
  if (last?.topicId === topicId) {
    const i = path.findIndex((s) => s.lesson.id === last.lessonId);
    if (i >= 0 && !lessonDone(path[i].lesson.id)) return path[i];
    const after = path.slice(i + 1).find((s) => !lessonDone(s.lesson.id));
    if (after) return after;
  }
  return path.find((s) => !lessonDone(s.lesson.id)) || null;
}

/** The lesson to resume anywhere in the curriculum. */
export function nextLessonOverall() {
  const last = getLastLesson();
  if (last) {
    const inTopic = nextLessonIn(last.topicId);
    if (inTopic) return inTopic;
  }
  // Nothing started yet: begin with the most fully taught topic.
  const byDepth = [...CURRICULUM].sort((a, b) => lessonPath(b.id).length - lessonPath(a.id).length);
  for (const t of byDepth) {
    const s = nextLessonIn(t.id);
    if (s) return s;
  }
  return null;
}

/* ---------------- topic list ---------------- */

export function renderTopics(root) {
  const resume = nextLessonOverall();
  root.innerHTML = `
    <div class="page-head">
      <div class="eyebrow">Learn</div>
      <h1>The ten topic areas</h1>
      <p class="lede">Each topic is taught as a path of short lessons — diagrams, worked examples you reveal one step at a time, and quick checks as you read. Exam weights are the published ranges for Level I.</p>
    </div>

    ${resume ? `
      <a class="topic-row resume" href="${lessonHref(resume)}">
        <div class="topic-main">
          <div class="eyebrow" style="margin-bottom:2px">Continue learning</div>
          <div class="topic-name">${esc(resume.lesson.title)}</div>
          <div class="topic-meta">${esc(resume.topic.name)} · ${esc(resume.module.name)} · ${resume.lesson.minutes} min</div>
        </div>
        <div class="topic-side"><span class="btn btn-primary btn-sm">Open →</span></div>
      </a>` : ''}

    <div class="section">
      ${CURRICULUM.map((t) => {
        const s = statsFor(questionsForTopic(t.id));
        const path = lessonPath(t.id);
        const read = path.filter((x) => lessonDone(x.lesson.id)).length;
        return `
          <a class="topic-row" href="#/topic/${t.id}">
            <div class="topic-main">
              <div class="topic-name">${esc(t.name)}</div>
              <div class="topic-meta">${esc(t.weight)} of exam · ${t.modules.length} modules · ${read}/${path.length} lessons read · ${s.accuracy === null ? `${s.total} questions` : `${s.accuracy}% accuracy`}</div>
            </div>
            <div class="topic-side">
              <div class="topic-pct">${pct(read, path.length)}% read</div>
              ${bar(pct(read, path.length))}
            </div>
          </a>`;
      }).join('')}
    </div>
  `;
}

/* ---------------- topic detail ---------------- */

export function renderTopic(root, topicId) {
  const topic = getTopic(topicId);
  if (!topic) return notFound(root);

  const s = statsFor(questionsForTopic(topicId));
  const path = lessonPath(topicId);
  const read = path.filter((x) => lessonDone(x.lesson.id)).length;
  const next = nextLessonIn(topicId);
  const minutesLeft = path.filter((x) => !lessonDone(x.lesson.id)).reduce((n, x) => n + (x.lesson.minutes || 0), 0);

  root.innerHTML = `
    <div class="breadcrumb"><a href="#/topics">Learn</a><span>/</span>${esc(topic.name)}</div>

    <div class="page-head">
      <div class="eyebrow">${esc(topic.weight)} of the exam</div>
      <h1>${esc(topic.name)}</h1>
      <p class="lede">${esc(topic.summary)}</p>
    </div>

    <div class="card path-card">
      <div class="path-head">
        <div>
          <div class="field-label" style="margin-bottom:4px">Your learning path</div>
          <div class="path-count">${read} of ${path.length} lessons read${minutesLeft ? ` · about ${Math.round(minutesLeft / 5) * 5 || minutesLeft} min to go` : ''}</div>
        </div>
        ${next
          ? `<a class="btn btn-primary" href="${lessonHref(next)}">${read ? 'Continue' : 'Start learning'} →</a>`
          : path.length ? `<span class="pill pill-accent">All lessons read</span>` : ''}
      </div>
      ${bar(pct(read, path.length))}
      ${next ? `<div class="small muted" style="margin-top:10px">Next: ${esc(next.lesson.title)} <span style="opacity:.6">— ${esc(next.module.name)}</span></div>` : ''}
    </div>

    <div class="grid grid-3" style="margin-top:12px">
      <div class="stat"><div class="stat-label">Mastery</div><div class="stat-value">${s.mastery}%</div><div class="stat-sub">${s.mastered} of ${s.total} questions</div></div>
      <div class="stat"><div class="stat-label">Accuracy</div><div class="stat-value">${s.accuracy === null ? '—' : s.accuracy + '%'}</div><div class="stat-sub">${s.attempts} attempts</div></div>
      <div class="stat"><div class="stat-label">Coverage</div><div class="stat-value">${s.coverage}%</div><div class="stat-sub">${s.seen} questions seen</div></div>
    </div>

    <div class="btn-row" style="margin-top:20px">
      <button class="btn" data-practice="${topic.id}">Practise this topic</button>
      <a class="btn" href="#/cards?topic=${topic.id}">Flashcards</a>
      <a class="btn" href="#/formulas?topic=${topic.id}">Formulas</a>
    </div>

    ${topic.modules.map((m, i) => renderModule(topic, m, i)).join('')}
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

function renderModule(topic, m, index) {
  const qs = questionsForModule(m.id);
  const s = statsFor(qs);
  const lessons = m.lessons || [];
  const read = lessons.filter((l) => lessonDone(l.id)).length;
  const counts = DIFF_ORDER
    .map((d) => ({ d, n: qs.filter((q) => q.difficulty === d).length }))
    .filter((x) => x.n);

  return `
    <div class="section">
      <div class="section-head">
        <h2>Module ${index + 1} · ${esc(m.name)}</h2>
        <span class="small muted">${read}/${lessons.length} read${s.accuracy === null ? '' : ` · ${s.accuracy}% accuracy`}</span>
      </div>
      <div class="card">
        ${lessons.length ? `
          <ul class="list-plain" style="margin-bottom:14px">
            ${lessons.map((l, i) => `
              <li><a class="item-link" href="#/lesson/${topic.id}/${m.id}/${l.id}">
                <span class="item-dot ${lessonDone(l.id) ? 'done' : ''}"></span>
                <span class="item-text"><span class="muted small" style="margin-right:6px">${index + 1}.${i + 1}</span>${esc(l.title)}</span>
                <span class="item-side">${l.minutes} min</span>
              </a></li>`).join('')}
          </ul>` : ''}

        <details class="los">
          <summary>Learning outcomes</summary>
          <ul>${m.los.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>
        </details>

        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:14px">
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

  setLastLesson(topicId, moduleId, lessonId);

  const path = lessonPath(topicId);
  const pos = path.findIndex((s) => s.lesson.id === lessonId);
  const here = path[pos];
  const prev = path[pos - 1];
  const next = path[pos + 1];
  const lastInModule = !next || next.module.id !== mod.id;
  const qs = questionsForModule(mod.id);
  const checks = (lesson.blocks || []).filter((b) => b.t === 'check').length;

  root.innerHTML = `
    <div class="read-progress" aria-hidden="true"><i></i></div>

    <div class="breadcrumb">
      <a href="#/topics">Learn</a><span>/</span>
      <a href="#/topic/${topic.id}">${esc(topic.short || topic.name)}</a><span>/</span>${esc(mod.name)}
    </div>

    <div class="page-head">
      <div class="eyebrow">Module ${here.moduleIndex + 1} · Lesson ${here.lessonIndex + 1} of ${mod.lessons.length} · ${lesson.minutes} min</div>
      <h1>${esc(lesson.title)}</h1>
      ${lesson.intro ? `<p class="lede">${esc(lesson.intro)}</p>` : ''}
      <div class="lesson-dots">
        ${mod.lessons.map((l) => `<a href="#/lesson/${topic.id}/${mod.id}/${l.id}" title="${esc(l.title)}" class="${l.id === lessonId ? 'here' : ''} ${lessonDone(l.id) ? 'done' : ''}"></a>`).join('')}
      </div>
    </div>

    <article class="prose" id="lesson-body">${renderBlocks(lesson.blocks)}</article>

    <div id="lesson-end"></div>
    <hr class="hr" />

    <div class="lesson-foot">
      <div class="small muted" id="lesson-status">
        ${checks ? `<span id="check-score">0 of ${checks} checks answered</span> · ` : ''}<span id="read-state">${lessonDone(lesson.id) ? 'Lesson read' : 'Scroll to the end to mark as read'}</span>
      </div>
      <div class="btn-row">
        ${prev ? `<a class="btn btn-ghost" href="${lessonHref(prev)}">← Previous</a>` : ''}
        ${lastInModule && qs.length ? `<button class="btn ${next ? '' : 'btn-primary'}" id="test">Test yourself on this module</button>` : ''}
        ${next
          ? `<a class="btn btn-primary" href="${lessonHref(next)}" data-next>${next.module.id === mod.id ? 'Next lesson' : `Next module: ${esc(next.module.name)}`} →</a>`
          : `<a class="btn" href="#/topic/${topic.id}">Back to ${esc(topic.short || topic.name)}</a>`}
      </div>
    </div>
  `;

  let answered = 0, right = 0;
  wireBlocks(root.querySelector('#lesson-body'), {
    onCheck(ok) {
      answered++; if (ok) right++;
      const el = root.querySelector('#check-score');
      if (el) el.textContent = `${answered} of ${checks} checks answered · ${right} right`;
    },
  });

  const markRead = () => {
    if (lessonDone(lesson.id)) return;
    markLesson(lesson.id);
    const el = root.querySelector('#read-state');
    if (el) el.textContent = 'Lesson read';
    root.querySelector('.lesson-dots a.here')?.classList.add('done');
  };
  root.querySelector('[data-next]')?.addEventListener('click', markRead);

  const end = root.querySelector('#lesson-end');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { markRead(); io.disconnect(); }
    });
    io.observe(end);
  } else {
    markRead();
  }

  // Thin reading-progress bar at the top of the page.
  const barEl = root.querySelector('.read-progress i');
  const onScroll = () => {
    if (!document.body.contains(barEl)) { window.removeEventListener('scroll', onScroll); return; }
    const body = root.querySelector('#lesson-body');
    const rect = body.getBoundingClientRect();
    const total = rect.height - window.innerHeight * 0.6;
    const done = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
    barEl.style.width = `${done * 100}%`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  root.querySelector('#test')?.addEventListener('click', () => {
    markRead();
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
  root.innerHTML = `<div class="empty"><h3>Not found</h3><p>That page does not exist. <a href="#/topics">Back to Learn</a>.</p></div>`;
}
