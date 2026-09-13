// Dashboard: progress at a glance, weak areas, and the next best action.

import { CURRICULUM, ALL_QUESTIONS, questionsForTopic, ALL_CARDS } from '../content/index.js';
import { statsFor, streak, answeredToday, recentDays, dueCountSoon, dueCards, cardStat, getState } from '../store.js';
import { esc, pct, bar } from '../util.js';
import { nextLessonOverall } from './curriculum.js';

export function renderDashboard(root) {
  const overall = statsFor(ALL_QUESTIONS);
  const { due, soon } = dueCountSoon(ALL_QUESTIONS);
  // Only cards already studied count as "due" — an unseen card is new, not overdue.
  const cardsDue = dueCards(ALL_CARDS).filter((c) => cardStat(c.id)).length;
  const days = recentDays(14);
  const maxDay = Math.max(1, ...days.map((d) => d.answered));
  const lessonsDone = Object.keys(getState().lessons).length;
  const resume = nextLessonOverall();

  const topicRows = CURRICULUM.map((t) => {
    const qs = questionsForTopic(t.id);
    const s = statsFor(qs);
    return { t, s, qs };
  });

  // Weak areas: enough attempts to be meaningful, ranked by accuracy.
  const weak = topicRows
    .filter((r) => r.s.attempts >= 3 && r.s.accuracy !== null && r.s.accuracy < 70)
    .sort((a, b) => a.s.accuracy - b.s.accuracy)
    .slice(0, 3);

  const untouched = topicRows.filter((r) => r.s.seen === 0);

  root.innerHTML = `
    <div class="page-head">
      <div class="eyebrow">CFA Level I</div>
      <h1>${greeting()}</h1>
      <p class="lede">${esc(nextAction(overall, due, cardsDue))}</p>
    </div>

    <div class="grid grid-4">
      ${stat('Mastery', `${overall.mastery}%`, `${overall.mastered} of ${overall.total} questions mastered`)}
      ${stat('Accuracy', overall.accuracy === null ? '—' : `${overall.accuracy}%`, `${overall.attempts} answers recorded`)}
      ${stat('Due today', String(due), soon ? `${soon} more within 3 days` : 'Spaced repetition queue')}
      ${stat('Streak', `${streak()}`, answeredToday() ? `${answeredToday()} answered today` : 'No answers yet today')}
    </div>

    <div class="section">
      <div class="section-head"><h2>Start here</h2></div>
      ${resume ? `
        <a class="topic-row resume" href="#/lesson/${resume.topic.id}/${resume.module.id}/${resume.lesson.id}" style="margin-bottom:12px">
          <div class="topic-main">
            <div class="eyebrow" style="margin-bottom:2px">${lessonsDone ? 'Continue learning' : 'Start learning'}</div>
            <div class="topic-name">${esc(resume.lesson.title)}</div>
            <div class="topic-meta">${esc(resume.topic.name)} · ${esc(resume.module.name)} · ${resume.lesson.minutes} min read</div>
          </div>
          <div class="topic-side"><span class="btn btn-primary btn-sm">Open →</span></div>
        </a>` : ''}
      <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(330px,1fr))">
        ${actionCard('#/review', 'Review due items', due || cardsDue
          ? `${due} question${due === 1 ? '' : 's'} and ${cardsDue} card${cardsDue === 1 ? '' : 's'} are scheduled.`
          : 'Nothing scheduled — answer some questions to build the queue.', due + cardsDue > 0)}
        ${actionCard('#/practice', 'Practice questions', 'Choose topics and difficulty, from Easy to Very Hard.', true)}
        ${actionCard('#/mock', 'Timed mock exam', 'Exam-weighted question mix against the clock.', true)}
        ${actionCard('#/topics', 'Browse all lessons', `${lessonsDone} lesson${lessonsDone === 1 ? '' : 's'} read so far.`, true)}
      </div>
    </div>

    ${weak.length ? `
      <div class="section">
        <div class="section-head">
          <h2>Where you are lagging</h2>
          <span class="small muted">Below 70% accuracy</span>
        </div>
        ${weak.map((r) => `
          <a class="topic-row" href="#/topic/${r.t.id}">
            <div class="topic-main">
              <div class="topic-name">${esc(r.t.name)} <span class="pill pill-wrong">${r.s.accuracy}%</span></div>
              <div class="topic-meta">${r.s.right} correct of ${r.s.attempts} attempts · worth ${esc(r.t.weight)} of the exam</div>
            </div>
            <div class="topic-side"><span class="small muted">Study →</span></div>
          </a>`).join('')}
      </div>` : ''}

    <div class="section">
      <div class="section-head">
        <h2>Curriculum progress</h2>
        <a class="small muted" href="#/topics" style="text-decoration:none">All topics →</a>
      </div>
      ${topicRows.map(({ t, s }) => `
        <a class="topic-row" href="#/topic/${t.id}">
          <div class="topic-main">
            <div class="topic-name">${esc(t.name)}</div>
            <div class="topic-meta">${esc(t.weight)} of exam · ${s.seen}/${s.total} questions seen${s.accuracy !== null ? ` · ${s.accuracy}% accuracy` : ''}</div>
          </div>
          <div class="topic-side">
            <div class="topic-pct">${s.mastery}%</div>
            ${bar(s.mastery)}
          </div>
        </a>`).join('')}
    </div>

    <div class="section">
      <div class="section-head"><h2>Last 14 days</h2></div>
      <div class="card">
        <div style="display:flex;align-items:flex-end;gap:5px;height:64px">
          ${days.map((d) => {
            const h = d.answered ? Math.max(8, Math.round((d.answered / maxDay) * 100)) : 3;
            return `<div title="${d.date}: ${d.answered} answered" style="flex:1;height:${h}%;border-radius:3px;background:${d.answered ? 'var(--accent)' : 'var(--line)'}"></div>`;
          }).join('')}
        </div>
        <div class="small muted" style="margin-top:12px">
          ${days.reduce((n, d) => n + d.answered, 0)} questions answered in the last fortnight
          ${untouched.length ? ` · ${untouched.length} topic${untouched.length === 1 ? '' : 's'} not yet started` : ''}
        </div>
      </div>
    </div>
  `;
}

function stat(label, value, sub) {
  return `<div class="stat">
    <div class="stat-label">${esc(label)}</div>
    <div class="stat-value">${esc(value)}</div>
    <div class="stat-sub">${esc(sub)}</div>
  </div>`;
}

function actionCard(href, title, body, enabled) {
  return `
    <a class="topic-row" href="${href}" style="${enabled ? '' : 'opacity:.55'}">
      <div class="topic-main">
        <div class="topic-name">${esc(title)}</div>
        <div class="topic-meta">${esc(body)}</div>
      </div>
      <div class="topic-side"><span class="small muted">→</span></div>
    </a>`;
}

function greeting() {
  const h = new Date().getHours();
  if (h < 5) return 'Still going';
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

function nextAction(overall, due, cardsDue) {
  if (overall.attempts === 0) return 'Nothing recorded yet. Start with a short practice set to find out where you stand — the app builds your review schedule from what you get wrong.';
  if (due > 0) return `${due} question${due === 1 ? '' : 's'} ${due === 1 ? 'is' : 'are'} due for review${cardsDue ? `, plus ${cardsDue} flashcard${cardsDue === 1 ? '' : 's'}` : ''}. Clearing the queue first is usually the highest-value 20 minutes of the day.`;
  if (overall.coverage < 25) return 'Good start. Widen coverage across topics before going deep on any one of them.';
  return 'Queue is clear. Add new questions, or sit a timed mock to test recall under pressure.';
}
