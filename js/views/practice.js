// Practice setup: pick topics, difficulty and length, then run a session.

import { CURRICULUM, filterQuestions, questionsForTopic } from '../content/index.js';
import { statsFor, qStat } from '../store.js';
import { esc, shuffle, DIFFICULTY, DIFF_ORDER, navigate } from '../util.js';
import { startSession } from '../quiz.js';

const prefs = {
  topics: new Set(),               // empty = all
  difficulties: new Set(DIFF_ORDER),
  count: 20,
  adaptive: true,
};

export function renderPractice(root) {
  const matching = pool();

  root.innerHTML = `
    <div class="page-head">
      <div class="eyebrow">Practice</div>
      <h1>Build a question set</h1>
      <p class="lede">Difficulty runs from Easy to Very Hard. Leaving adaptive ordering on puts previously missed and unseen questions from your weakest topics first.</p>
    </div>

    <div class="field">
      <div class="field-label">Difficulty</div>
      <div class="seg" id="diffs">
        ${DIFF_ORDER.map((d) => `
          <button data-diff="${d}" class="${prefs.difficulties.has(d) ? 'on' : ''}">${DIFFICULTY[d].label}</button>
        `).join('')}
      </div>
    </div>

    <div class="field">
      <div class="field-label">Length</div>
      <div class="seg" id="counts">
        ${[10, 20, 40, 0].map((n) => `
          <button data-count="${n}" class="${prefs.count === n ? 'on' : ''}">${n === 0 ? 'Everything' : n}</button>
        `).join('')}
      </div>
    </div>

    <div class="field">
      <div class="field-label">Ordering</div>
      <div class="seg" id="adaptive">
        <button data-adaptive="1" class="${prefs.adaptive ? 'on' : ''}">Adaptive — weakest first</button>
        <button data-adaptive="0" class="${prefs.adaptive ? '' : 'on'}">Random</button>
      </div>
    </div>

    <div class="field">
      <div class="field-label">
        Topics <span class="muted" style="text-transform:none;letter-spacing:0;font-weight:400">— none selected means all</span>
      </div>
      <div class="btn-row" style="margin-bottom:10px">
        <button class="btn btn-sm" id="all">Select all</button>
        <button class="btn btn-sm" id="none">Clear</button>
        <button class="btn btn-sm" id="weak">Weakest three</button>
      </div>
      <div class="check-list">
        ${CURRICULUM.map((t) => {
          const s = statsFor(questionsForTopic(t.id));
          return `
            <label class="check">
              <input type="checkbox" data-topic="${t.id}" ${prefs.topics.has(t.id) ? 'checked' : ''} />
              <span>${esc(t.name)}</span>
              <span class="ck-side">${s.accuracy === null ? `${s.total} questions` : `${s.accuracy}% · ${s.total} questions`}</span>
            </label>`;
        }).join('')}
      </div>
    </div>

    <div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
      <div>
        <strong>${matching.length}</strong> question${matching.length === 1 ? '' : 's'} match your filters.
        <div class="small muted">The session will use ${sessionSize(matching)} of them.</div>
      </div>
      <button class="btn btn-primary" id="start" ${matching.length ? '' : 'disabled'}>Start practice</button>
    </div>
  `;

  bind(root);
}

function bind(root) {
  root.querySelectorAll('[data-diff]').forEach((b) => b.addEventListener('click', () => {
    const d = b.dataset.diff;
    if (prefs.difficulties.has(d)) {
      if (prefs.difficulties.size > 1) prefs.difficulties.delete(d);
    } else prefs.difficulties.add(d);
    renderPractice(root);
  }));

  root.querySelectorAll('[data-count]').forEach((b) => b.addEventListener('click', () => {
    prefs.count = Number(b.dataset.count);
    renderPractice(root);
  }));

  root.querySelectorAll('[data-adaptive]').forEach((b) => b.addEventListener('click', () => {
    prefs.adaptive = b.dataset.adaptive === '1';
    renderPractice(root);
  }));

  root.querySelectorAll('[data-topic]').forEach((cb) => cb.addEventListener('change', () => {
    const id = cb.dataset.topic;
    if (cb.checked) prefs.topics.add(id); else prefs.topics.delete(id);
    renderPractice(root);
  }));

  root.querySelector('#all').addEventListener('click', () => {
    CURRICULUM.forEach((t) => prefs.topics.add(t.id));
    renderPractice(root);
  });

  root.querySelector('#none').addEventListener('click', () => {
    prefs.topics.clear();
    renderPractice(root);
  });

  root.querySelector('#weak').addEventListener('click', () => {
    const ranked = CURRICULUM
      .map((t) => ({ id: t.id, s: statsFor(questionsForTopic(t.id)) }))
      .filter((r) => r.s.accuracy !== null)
      .sort((a, b) => a.s.accuracy - b.s.accuracy)
      .slice(0, 3);
    prefs.topics.clear();
    if (ranked.length) ranked.forEach((r) => prefs.topics.add(r.id));
    renderPractice(root);
  });

  root.querySelector('#start').addEventListener('click', () => {
    const questions = buildSet();
    if (!questions.length) return;
    startSession({ questions, title: sessionTitle(), returnTo: '#/practice' });
    navigate('#/session');
  });
}

/* ---------------- selection logic ---------------- */

function pool() {
  return filterQuestions({
    topics: [...prefs.topics],
    difficulties: [...prefs.difficulties],
  });
}

function sessionSize(matching) {
  return prefs.count === 0 ? matching.length : Math.min(prefs.count, matching.length);
}

function buildSet() {
  const matching = pool();
  const n = sessionSize(matching);
  if (!prefs.adaptive) return shuffle(matching).slice(0, n);

  // Topic accuracy feeds the priority score, so weak topics surface first.
  const topicAccuracy = {};
  for (const t of CURRICULUM) topicAccuracy[t.id] = statsFor(questionsForTopic(t.id)).accuracy;

  const scored = matching.map((q) => {
    const s = qStat(q.id);
    let score = Math.random() * 0.5;               // jitter keeps sets from repeating
    if (!s) score += 2;                            // never attempted
    else {
      if (s.lastCorrect === false) score += 3;     // missed most recently
      if (s.right < 2) score += 1;                 // not yet mastered
    }
    const acc = topicAccuracy[q.topicId];
    if (acc !== null && acc < 70) score += 2;
    return { q, score };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, n).map((x) => x.q);
}

function sessionTitle() {
  if (prefs.topics.size === 1) {
    const t = CURRICULUM.find((x) => x.id === [...prefs.topics][0]);
    return t ? t.name : 'Practice';
  }
  if (prefs.topics.size > 1) return `${prefs.topics.size} topics`;
  return 'All topics';
}
