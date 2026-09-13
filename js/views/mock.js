// Mock exam: exam-weighted, timed, graded at the end.

import { CURRICULUM, ALL_QUESTIONS, questionsForTopic } from '../content/index.js';
import { getMocks } from '../store.js';
import { esc, pct, fmtTime, shuffle, navigate } from '../util.js';
import { startSession } from '../quiz.js';

// The real Level I exam is 180 questions across two 2h15m sessions.
const PRESETS = [
  { id: 'short', label: '30 questions', n: 30, minutes: 45 },
  { id: 'half', label: '90 questions', n: 90, minutes: 135 },
  { id: 'full', label: '180 questions', n: 180, minutes: 270 },
];

let chosen = 'short';

export function renderMock(root) {
  const preset = PRESETS.find((p) => p.id === chosen);
  const available = ALL_QUESTIONS.length;
  const plan = buildExam(preset.n);
  const history = getMocks();

  root.innerHTML = `
    <div class="page-head">
      <div class="eyebrow">Mock exam</div>
      <h1>Sit a timed paper</h1>
      <p class="lede">Questions are drawn in proportion to the published exam weights, so the mix reflects the real paper. Answers are hidden until you submit — exactly as on exam day.</p>
    </div>

    <div class="field">
      <div class="field-label">Length</div>
      <div class="seg" id="presets">
        ${PRESETS.map((p) => `<button data-preset="${p.id}" class="${chosen === p.id ? 'on' : ''}">${p.label}</button>`).join('')}
      </div>
    </div>

    <div class="card" style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:18px">
        <div>
          <strong>${plan.length} questions · ${preset.minutes} minutes</strong>
          <div class="small muted">
            ${plan.length < preset.n
              ? `The bank currently holds ${available} questions, so this paper repeats none but falls short of ${preset.n}.`
              : 'Roughly 90 seconds per question, matching exam pacing.'}
          </div>
        </div>
        <button class="btn btn-primary" id="start">Begin exam</button>
      </div>

      <div class="field-label">Composition</div>
      ${composition(plan).map((c) => `
        <div style="display:flex;align-items:center;gap:12px;padding:5px 0">
          <span style="flex:1;font-size:14px">${esc(c.name)}</span>
          <span class="small muted" style="width:64px;text-align:right">${esc(c.weight)}</span>
          <span class="small" style="width:34px;text-align:right;font-variant-numeric:tabular-nums">${c.n}</span>
        </div>`).join('')}
    </div>

    ${history.length ? `
      <div class="section">
        <div class="section-head"><h2>Previous attempts</h2></div>
        ${history.slice(0, 8).map((m) => {
          const p = pct(m.score, m.total);
          return `
            <div class="topic-row" style="cursor:default">
              <div class="topic-main">
                <div class="topic-name">${p}% <span class="pill">${m.score}/${m.total}</span></div>
                <div class="topic-meta">${new Date(m.at).toLocaleDateString()} · ${fmtTime(m.seconds * 1000)}</div>
              </div>
              <div class="topic-side"><div class="bar"><i style="width:${p}%"></i></div></div>
            </div>`;
        }).join('')}
      </div>` : ''}
  `;

  root.querySelectorAll('[data-preset]').forEach((b) => b.addEventListener('click', () => {
    chosen = b.dataset.preset;
    renderMock(root);
  }));

  root.querySelector('#start').addEventListener('click', () => {
    const questions = buildExam(preset.n);
    if (!questions.length) return;
    startSession({
      questions,
      mode: 'exam',
      title: `Mock exam · ${questions.length} questions`,
      timeLimitMs: preset.minutes * 60 * 1000,
      returnTo: '#/mock',
    });
    navigate('#/session');
  });
}

/** Draw questions per topic in proportion to exam weight, without repeats. */
function buildExam(target) {
  const totalWeight = CURRICULUM.reduce((s, t) => s + t.weightMid, 0);
  const out = [];

  for (const t of CURRICULUM) {
    const want = Math.round((t.weightMid / totalWeight) * target);
    const pool = shuffle(questionsForTopic(t.id));
    out.push(...pool.slice(0, Math.min(want, pool.length)));
  }

  // Top up from whatever remains if rounding or a thin topic left us short.
  if (out.length < target) {
    const used = new Set(out.map((q) => q.id));
    const rest = shuffle(ALL_QUESTIONS.filter((q) => !used.has(q.id)));
    out.push(...rest.slice(0, target - out.length));
  }

  return shuffle(out).slice(0, target);
}

function composition(plan) {
  return CURRICULUM.map((t) => ({
    name: t.name,
    weight: t.weight,
    n: plan.filter((q) => q.topicId === t.id).length,
  }));
}
