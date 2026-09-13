// Flashcards with flip animation and its own spaced-repetition schedule.

import { CURRICULUM, ALL_CARDS } from '../content/index.js';
import { recordCard, cardStat, dueCards } from '../store.js';
import { esc, md, shuffle, relDate } from '../util.js';

let deck = [];
let pos = 0;
let flipped = false;
let filter = { topic: '', dueOnly: false };

export function renderCards(root, params) {
  if (params.has('topic')) filter.topic = params.get('topic');
  if (params.has('due')) filter.dueOnly = params.get('due') === '1';

  if (!deck.length) buildDeck();

  if (!deck.length) {
    root.innerHTML = `
      ${header()}
      <div class="empty"><h3>No cards match</h3><p>Try clearing the filter.</p></div>`;
    bindHeader(root);
    return;
  }

  if (pos >= deck.length) return renderDone(root);

  const card = deck[pos];
  const stat = cardStat(card.id);

  root.innerHTML = `
    ${header()}

    <div class="quiz-count center" style="margin-bottom:18px">
      Card ${pos + 1} of ${deck.length}
      ${stat?.due ? ` · next ${esc(relDate(stat.due))}` : ''}
    </div>

    <div class="flip ${flipped ? 'flipped' : ''}" id="flip">
      <div class="flip-inner">
        <div class="flip-face front"><div class="ftext">${md(card.front)}</div></div>
        <div class="flip-face back"><div class="ftext">${md(card.back)}</div></div>
      </div>
    </div>

    <p class="flip-hint">${flipped ? 'How well did you know it?' : 'Click the card, or press Space, to reveal'}</p>

    <div class="btn-row center" style="justify-content:center;margin-top:18px">
      ${flipped ? `
        <button class="btn" id="again" style="border-color:var(--wrong);color:var(--wrong)">Didn't know it</button>
        <button class="btn btn-primary" id="knew">Knew it</button>
      ` : `
        <button class="btn" id="reveal">Reveal</button>
        <button class="btn btn-ghost" id="skip">Skip</button>
      `}
    </div>

    <p class="small muted center" style="margin-top:24px">${esc(card.topicName)}</p>
  `;

  bindHeader(root);

  const flip = () => { flipped = true; renderCards(root, params); };
  root.querySelector('#flip').addEventListener('click', () => {
    if (!flipped) flip(); else advance(root, params, true);
  });
  root.querySelector('#reveal')?.addEventListener('click', flip);
  root.querySelector('#skip')?.addEventListener('click', () => advanceRaw(root, params));
  root.querySelector('#knew')?.addEventListener('click', () => advance(root, params, true));
  root.querySelector('#again')?.addEventListener('click', () => advance(root, params, false));
}

function header() {
  return `
    <div class="page-head">
      <div class="eyebrow">Flashcards</div>
      <h1>Rapid recall</h1>
      <p class="lede">Short prompts for the definitions, rules and formulas that need to be automatic. Cards you miss come back sooner.</p>
      <div class="btn-row" style="margin-top:18px">
        <select class="btn btn-sm" id="topic-filter" style="padding-right:8px">
          <option value="">All topics</option>
          ${CURRICULUM.map((t) => `<option value="${t.id}" ${filter.topic === t.id ? 'selected' : ''}>${esc(t.name)}</option>`).join('')}
        </select>
        <button class="btn btn-sm ${filter.dueOnly ? 'btn-primary' : ''}" id="due-filter">
          ${filter.dueOnly ? 'Due only' : 'All cards'}
        </button>
        <button class="btn btn-sm btn-ghost" id="reshuffle">Reshuffle</button>
      </div>
    </div>`;
}

function bindHeader(root) {
  root.querySelector('#topic-filter')?.addEventListener('change', (e) => {
    filter.topic = e.target.value;
    reset();
    renderCards(root, new URLSearchParams());
  });
  root.querySelector('#due-filter')?.addEventListener('click', () => {
    filter.dueOnly = !filter.dueOnly;
    reset();
    renderCards(root, new URLSearchParams());
  });
  root.querySelector('#reshuffle')?.addEventListener('click', () => {
    reset();
    renderCards(root, new URLSearchParams());
  });
}

function buildDeck() {
  let pool = ALL_CARDS;
  if (filter.topic) pool = pool.filter((c) => c.topicId === filter.topic);
  if (filter.dueOnly) pool = dueCards(pool).filter((c) => cardStat(c.id));
  deck = shuffle(pool);
  pos = 0;
  flipped = false;
}

function reset() { deck = []; pos = 0; flipped = false; }

function advance(root, params, knew) {
  recordCard(deck[pos].id, knew);
  advanceRaw(root, params);
}

function advanceRaw(root, params) {
  pos += 1;
  flipped = false;
  renderCards(root, params);
}

function renderDone(root) {
  root.innerHTML = `
    ${header()}
    <div class="empty">
      <h3>Deck finished</h3>
      <p>${deck.length} card${deck.length === 1 ? '' : 's'} reviewed. Cards you struggled with will resurface sooner.</p>
      <div class="btn-row center" style="justify-content:center;margin-top:20px">
        <button class="btn btn-primary" id="restart">Go again</button>
        <a class="btn" href="#/">Dashboard</a>
      </div>
    </div>`;
  bindHeader(root);
  root.querySelector('#restart').addEventListener('click', () => {
    reset();
    renderCards(root, new URLSearchParams());
  });
}

/** Space bar flips / advances while the cards view is open. */
export function cardsKeyHandler(e, root) {
  if (e.code !== 'Space' || !deck.length || pos >= deck.length) return;
  const tag = e.target.tagName;
  if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
  e.preventDefault();
  if (!flipped) { flipped = true; renderCards(root, new URLSearchParams()); }
  else advance(root, new URLSearchParams(), true);
}

export function resetCards() { reset(); }
