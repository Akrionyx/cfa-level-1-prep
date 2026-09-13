// Hash router, theme handling, and view dispatch.

import { $, $$ } from './util.js';
import { getTheme, setTheme } from './store.js';
import { renderDashboard } from './views/dashboard.js';
import { renderTopics, renderTopic, renderLesson } from './views/curriculum.js';
import { renderPractice } from './views/practice.js';
import { renderReview } from './views/review.js';
import { renderMock } from './views/mock.js';
import { renderCards, cardsKeyHandler, resetCards } from './views/cards.js';
import { renderFormulas } from './views/formulas.js';
import { renderSession, getSession, stopTimer } from './quiz.js';

const main = $('#main');
let currentRoute = '';

/* ---------------- theme ---------------- */

function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  $('#theme-toggle').textContent = t === 'dark' ? '☀' : '☾';
}

applyTheme(getTheme());

$('#theme-toggle').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  applyTheme(next);
});

/* ---------------- mobile menu ---------------- */

const nav = $('#nav');
$('#menu-btn').addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  $('#menu-btn').setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') nav.classList.remove('open');
});

/* ---------------- routing ---------------- */

function parse() {
  const raw = location.hash.replace(/^#\/?/, '');
  const [path, queryString] = raw.split('?');
  return {
    parts: path.split('/').filter(Boolean),
    params: new URLSearchParams(queryString || ''),
  };
}

function route() {
  const { parts, params } = parse();
  const [head, ...rest] = parts;

  // Leaving an active session tears down its timer.
  if (head !== 'session') stopTimer();
  if (head !== 'cards') resetCards();

  main.classList.remove('wide');
  currentRoute = head || 'dashboard';

  switch (head) {
    case undefined:
    case '':
      renderDashboard(main); break;

    case 'topics':
      renderTopics(main); break;

    case 'topic':
      renderTopic(main, rest[0]); break;

    case 'lesson':
      renderLesson(main, rest[0], rest[1], rest[2]); break;

    case 'practice':
      renderPractice(main); break;

    case 'review':
      renderReview(main); break;

    case 'mock':
      renderMock(main); break;

    case 'cards':
      renderCards(main, params); break;

    case 'formulas':
      renderFormulas(main, params); break;

    case 'session':
      if (!getSession()) { location.hash = '#/practice'; return; }
      renderSession(main); break;

    default:
      main.innerHTML = `<div class="empty"><h3>Page not found</h3><p><a href="#/">Back to the dashboard</a></p></div>`;
  }

  markActiveNav(head);
  if (head !== 'lesson') window.scrollTo(0, 0);
}

function markActiveNav(head) {
  const key = !head ? 'dashboard'
    : ['topic', 'lesson', 'topics'].includes(head) ? 'topics'
    : ['session'].includes(head) ? 'practice'
    : head;
  $$('.nav a').forEach((a) => a.classList.toggle('active', a.dataset.route === key));
}

/* ---------------- keyboard ---------------- */

document.addEventListener('keydown', (e) => {
  if (currentRoute === 'cards') cardsKeyHandler(e, main);

  // 1/2/3 answer the visible question; Enter advances.
  if (currentRoute === 'session') {
    if (['1', '2', '3'].includes(e.key)) {
      const btn = main.querySelector(`[data-choice="${Number(e.key) - 1}"]`);
      if (btn && !btn.disabled) btn.click();
    }
    if (e.key === 'Enter') {
      const next = main.querySelector('#next');
      if (next && !next.disabled) next.click();
    }
  }
});

window.addEventListener('hashchange', route);
route();
