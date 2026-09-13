// The question engine: powers practice sessions, review sessions and mock exams.

import { md, esc, fmtTime, pct, DIFFICULTY, navigate } from './util.js';
import { recordAnswer, recordMock } from './store.js';

let session = null;
let tick = null;

export const getSession = () => session;

export function startSession({ questions, mode = 'practice', title = 'Practice', timeLimitMs = null, srs = true, returnTo = '#/' }) {
  session = {
    questions,
    mode,                 // 'practice' | 'exam'
    title,
    srs,
    returnTo,
    idx: 0,
    answers: new Map(),   // qid -> chosen index
    revealed: new Set(),  // qid
    flagged: new Set(),   // qid
    startedAt: Date.now(),
    timeLimitMs,
    finished: false,
    result: null,
  };
  return session;
}

export function endSession() {
  session = null;
  stopTimer();
}

export function stopTimer() {
  if (tick) { clearInterval(tick); tick = null; }
}

/* ---------------- rendering ---------------- */

export function renderSession(root) {
  if (!session) {
    root.innerHTML = `<div class="empty"><h3>No active session</h3><p>Start one from Practice, Review or Mock Exam.</p></div>`;
    return;
  }
  if (session.finished) return renderResults(root);

  const q = session.questions[session.idx];
  const chosen = session.answers.get(q.id);
  const revealed = session.revealed.has(q.id);
  const total = session.questions.length;
  const answeredCount = session.answers.size;

  root.innerHTML = `
    <div class="quiz-head">
      <div>
        <div class="eyebrow" style="margin-bottom:4px">${esc(session.title)}</div>
        <div class="quiz-count">Question ${session.idx + 1} of ${total}${session.mode === 'exam' ? ` · ${answeredCount} answered` : ''}</div>
      </div>
      <div style="display:flex;align-items:center;gap:14px">
        ${session.timeLimitMs ? `<span class="timer" id="timer">--:--</span>` : ''}
        <button class="btn btn-ghost btn-sm" id="quit">Exit</button>
      </div>
    </div>

    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">
      <span class="pill">${esc(q.topicName)}</span>
      <span class="pill">${esc(q.moduleName)}</span>
      <span class="pill ${DIFFICULTY[q.difficulty].cls}">${DIFFICULTY[q.difficulty].label}</span>
    </div>

    <div class="stem">
      ${q.vignette ? `<div class="vignette">${md(q.vignette)}</div>` : ''}
      ${md(q.stem)}
    </div>

    <div class="choices" id="choices">
      ${q.choices.map((c, i) => choiceHTML(q, c, i, chosen, revealed)).join('')}
    </div>

    ${revealed ? explainHTML(q, chosen) : ''}

    <div class="quiz-foot">
      <div style="display:flex;gap:8px">
        <button class="btn btn-sm" id="prev" ${session.idx === 0 ? 'disabled' : ''}>Previous</button>
        <button class="btn btn-sm" id="flag">${session.flagged.has(q.id) ? 'Unflag' : 'Flag'}</button>
      </div>
      <div style="display:flex;gap:8px">
        ${session.mode === 'exam'
          ? `<button class="btn btn-sm" id="next" ${session.idx === total - 1 ? 'disabled' : ''}>Next</button>
             <button class="btn btn-primary btn-sm" id="submit">Submit exam</button>`
          : `<button class="btn btn-primary btn-sm" id="next" ${chosen === undefined ? 'disabled' : ''}>
               ${session.idx === total - 1 ? 'Finish' : 'Next question'}
             </button>`}
      </div>
    </div>
  `;

  bind(root);
  if (session.timeLimitMs) startTimer(root);
}

function choiceHTML(q, text, i, chosen, revealed) {
  let cls = 'choice';
  let flag = '';
  if (revealed) {
    if (i === q.answer) { cls += ' correct'; flag = '<span class="choice-flag" style="color:var(--accent)">Correct</span>'; }
    else if (i === chosen) { cls += ' incorrect'; flag = '<span class="choice-flag" style="color:var(--wrong)">Your answer</span>'; }
  } else if (i === chosen) {
    cls += ' selected';
  }
  return `
    <button class="${cls}" data-choice="${i}" ${revealed ? 'disabled' : ''}>
      <span class="choice-key">${'ABC'[i] || i + 1}</span>
      <span>${md(text)}</span>
      ${flag}
    </button>`;
}

function explainHTML(q, chosen) {
  const correct = chosen === q.answer;
  return `
    <div class="explain">
      <div class="explain-verdict" style="color:${correct ? 'var(--accent)' : 'var(--wrong)'}">
        ${correct ? 'Correct' : 'Not quite'}
      </div>
      <div class="explain-body"><p>${md(q.explain)}</p></div>
      ${q.why?.length ? `
        <div class="explain-why">
          <div class="wlabel">Why the other answers fail</div>
          <ul>${q.why.map((w) => `<li>${md(w)}</li>`).join('')}</ul>
        </div>` : ''}
    </div>`;
}

/* ---------------- interaction ---------------- */

function bind(root) {
  const q = session.questions[session.idx];

  root.querySelectorAll('[data-choice]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.choice);
      session.answers.set(q.id, i);
      if (session.mode === 'practice') {
        session.revealed.add(q.id);
        recordAnswer(q.id, i === q.answer, { srs: session.srs });
      }
      renderSession(root);
    });
  });

  root.querySelector('#prev')?.addEventListener('click', () => {
    if (session.idx > 0) { session.idx -= 1; renderSession(root); }
  });

  root.querySelector('#next')?.addEventListener('click', () => {
    if (session.idx < session.questions.length - 1) { session.idx += 1; renderSession(root); }
    else if (session.mode === 'practice') finish(root);
  });

  root.querySelector('#flag')?.addEventListener('click', () => {
    if (session.flagged.has(q.id)) session.flagged.delete(q.id);
    else session.flagged.add(q.id);
    renderSession(root);
  });

  root.querySelector('#submit')?.addEventListener('click', () => {
    const unanswered = session.questions.length - session.answers.size;
    const msg = unanswered
      ? `${unanswered} question${unanswered === 1 ? '' : 's'} unanswered. Submit anyway?`
      : 'Submit your exam?';
    if (confirm(msg)) finish(root);
  });

  root.querySelector('#quit')?.addEventListener('click', () => {
    if (confirm('Exit this session? Answers already recorded are kept.')) {
      const back = session.returnTo;
      endSession();
      navigate(back);
    }
  });
}

function startTimer(root) {
  stopTimer();
  const el = root.querySelector('#timer');
  if (!el) return;
  const update = () => {
    const left = session.timeLimitMs - (Date.now() - session.startedAt);
    if (left <= 0) { stopTimer(); finish(root); return; }
    el.textContent = fmtTime(left);
    el.classList.toggle('low', left < 5 * 60 * 1000);
  };
  update();
  tick = setInterval(update, 1000);
}

/* ---------------- results ---------------- */

function finish(root) {
  stopTimer();

  // Exam mode defers grading until submission.
  if (session.mode === 'exam') {
    for (const q of session.questions) {
      const chosen = session.answers.get(q.id);
      if (chosen !== undefined) recordAnswer(q.id, chosen === q.answer, { srs: session.srs });
    }
  }

  const right = session.questions.filter((q) => session.answers.get(q.id) === q.answer).length;
  const byTopic = {};
  for (const q of session.questions) {
    const t = (byTopic[q.topicId] ||= { name: q.topicName, right: 0, total: 0 });
    t.total += 1;
    if (session.answers.get(q.id) === q.answer) t.right += 1;
  }

  session.result = {
    right,
    total: session.questions.length,
    seconds: Math.round((Date.now() - session.startedAt) / 1000),
    byTopic,
  };
  session.finished = true;

  if (session.mode === 'exam') {
    recordMock({ score: right, total: session.questions.length, seconds: session.result.seconds, byTopic });
  }

  renderSession(root);
}

function renderResults(root) {
  const { right, total, seconds, byTopic } = session.result;
  const score = pct(right, total);
  const verdict =
    score >= 70 ? 'Comfortably above the range most candidates target.'
    : score >= 60 ? 'Around the threshold. Tighten the weak topics below.'
    : 'Below where you want to be. The weakest topics are the fastest wins.';

  const rows = Object.entries(byTopic)
    .map(([id, t]) => ({ id, ...t, p: pct(t.right, t.total) }))
    .sort((a, b) => a.p - b.p);

  const missed = session.questions.filter((q) => session.answers.get(q.id) !== q.answer);

  root.innerHTML = `
    <div class="result-hero">
      <div class="result-score">${score}%</div>
      <div class="result-label">${right} of ${total} correct · ${fmtTime(seconds * 1000)}</div>
      <p class="muted small" style="max-width:44ch;margin:14px auto 0">${esc(verdict)}</p>
    </div>

    <div class="section">
      <div class="section-head"><h2>By topic</h2></div>
      ${rows.map((t) => `
        <div class="topic-row" style="cursor:default">
          <div class="topic-main">
            <div class="topic-name">${esc(t.name)}</div>
            <div class="topic-meta">${t.right} of ${t.total} correct</div>
          </div>
          <div class="topic-side">
            <div class="topic-pct">${t.p}%</div>
            <div class="bar"><i style="width:${t.p}%"></i></div>
          </div>
        </div>`).join('')}
    </div>

    ${missed.length ? `
      <div class="section">
        <div class="section-head"><h2>Review what you missed (${missed.length})</h2></div>
        ${missed.map((q) => reviewItem(q)).join('')}
      </div>` : `
      <div class="section"><div class="card center"><strong>Every question correct.</strong></div></div>`}

    <div class="btn-row" style="margin-top:32px">
      <button class="btn btn-primary" id="again">Practise the missed questions</button>
      <button class="btn" id="done">Back</button>
    </div>
  `;

  root.querySelector('#done').addEventListener('click', () => {
    const back = session.returnTo;
    endSession();
    navigate(back);
  });

  const againBtn = root.querySelector('#again');
  if (!missed.length) againBtn.disabled = true;
  againBtn.addEventListener('click', () => {
    startSession({
      questions: missed,
      mode: 'practice',
      title: 'Missed questions',
      returnTo: session?.returnTo || '#/',
    });
    renderSession(root);
  });
}

function reviewItem(q) {
  const chosen = session.answers.get(q.id);
  return `
    <details class="review-q">
      <summary>
        <span class="pill ${DIFFICULTY[q.difficulty].cls}" style="flex:none">${DIFFICULTY[q.difficulty].label}</span>
        <span>${md(q.stem)}</span>
      </summary>
      <div class="small muted" style="margin-bottom:10px">
        ${chosen === undefined ? 'Not answered' : `You chose <strong>${'ABC'[chosen]}</strong>`} ·
        Correct answer <strong>${'ABC'[q.answer]}</strong> — ${md(q.choices[q.answer])}
      </div>
      <div class="explain-body"><p>${md(q.explain)}</p></div>
      ${q.why?.length ? `<div class="explain-why"><div class="wlabel">Why the others fail</div>
        <ul>${q.why.map((w) => `<li>${md(w)}</li>`).join('')}</ul></div>` : ''}
    </details>`;
}
