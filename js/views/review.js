// Review: the spaced-repetition queue for questions and flashcards.

import { ALL_QUESTIONS, ALL_CARDS } from '../content/index.js';
import { dueQuestions, dueCards, getState, cardStat } from '../store.js';
import { esc, relDate, navigate, shuffle, today } from '../util.js';
import { startSession } from '../quiz.js';

export function renderReview(root) {
  const qs = dueQuestions(ALL_QUESTIONS);
  const cards = dueCards(ALL_CARDS).filter((c) => cardStat(c.id));
  const upcoming = upcomingSchedule();

  root.innerHTML = `
    <div class="page-head">
      <div class="eyebrow">Spaced repetition</div>
      <h1>Review queue</h1>
      <p class="lede">Questions return on a widening schedule — one day, three, a week, and outward — and drop back down whenever you get one wrong. Clearing this queue is the cheapest retention you will buy.</p>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <div class="stat-label">Questions due</div>
        <div class="stat-value">${qs.length}</div>
        <div class="stat-sub" style="margin-bottom:16px">${qs.length ? 'Scheduled from your previous answers' : 'Nothing scheduled right now'}</div>
        <button class="btn btn-primary btn-block" id="start-q" ${qs.length ? '' : 'disabled'}>
          ${qs.length ? `Review ${qs.length} question${qs.length === 1 ? '' : 's'}` : 'Queue empty'}
        </button>
      </div>
      <div class="card">
        <div class="stat-label">Flashcards due</div>
        <div class="stat-value">${cards.length}</div>
        <div class="stat-sub" style="margin-bottom:16px">${cards.length ? 'Previously studied cards' : 'Study some cards to start a schedule'}</div>
        <a class="btn btn-block ${cards.length ? '' : 'btn-ghost'}" href="#/cards?due=1" ${cards.length ? '' : 'style="pointer-events:none;opacity:.5"'}>
          ${cards.length ? `Review ${cards.length} card${cards.length === 1 ? '' : 's'}` : 'Queue empty'}
        </a>
      </div>
    </div>

    ${qs.length ? `
      <div class="section">
        <div class="section-head"><h2>Due now</h2><span class="small muted">Most overdue first</span></div>
        ${qs.slice(0, 12).map((q) => {
          const s = getState().questions[q.id];
          return `
            <div class="topic-row" style="cursor:default">
              <div class="topic-main">
                <div class="topic-name" style="font-size:14.5px;font-weight:450">${esc(q.stem.slice(0, 96))}${q.stem.length > 96 ? '…' : ''}</div>
                <div class="topic-meta">${esc(q.topicName)} · seen ${s.seen}× · ${s.right}/${s.seen} correct</div>
              </div>
              <div class="topic-side"><span class="small muted">${esc(relDate(s.due))}</span></div>
            </div>`;
        }).join('')}
        ${qs.length > 12 ? `<p class="small muted" style="margin-top:12px">…and ${qs.length - 12} more.</p>` : ''}
      </div>` : `
      <div class="section">
        <div class="empty">
          <h3>Queue clear</h3>
          <p>Nothing is due. Answer new questions in <a href="#/practice">Practice</a> to keep the schedule filling.</p>
        </div>
      </div>`}

    ${upcoming.length ? `
      <div class="section">
        <div class="section-head"><h2>Coming up</h2></div>
        <div class="card">
          ${upcoming.map((u) => `
            <div style="display:flex;justify-content:space-between;padding:7px 0;font-size:14px">
              <span class="muted">${esc(relDate(u.date))}</span>
              <span>${u.n} question${u.n === 1 ? '' : 's'}</span>
            </div>`).join('')}
        </div>
      </div>` : ''}
  `;

  root.querySelector('#start-q')?.addEventListener('click', () => {
    startSession({
      questions: shuffle(qs),
      title: 'Scheduled review',
      returnTo: '#/review',
    });
    navigate('#/session');
  });
}

function upcomingSchedule() {
  const state = getState();
  const t = today();
  const buckets = {};
  for (const s of Object.values(state.questions)) {
    if (!s.due || s.due <= t) continue;
    buckets[s.due] = (buckets[s.due] || 0) + 1;
  }
  return Object.entries(buckets)
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .slice(0, 6)
    .map(([date, n]) => ({ date, n }));
}
