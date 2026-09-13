// Small DOM + formatting helpers. No dependencies.

export const $  = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export function esc(s = '') {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Inline markdown-lite: **bold**, *italic*, `code`. Escapes first.
export function md(s = '') {
  return esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
}

export function pct(n, d) {
  if (!d) return 0;
  return Math.round((n / d) * 100);
}

export function fmtTime(ms) {
  const total = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (x) => String(x).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

// Dates are keyed in the user's local timezone. toISOString() would shift the
// key by a day for anyone west of UTC and silently break streaks and due dates.
export function isoLocal(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

export function today() {
  return isoLocal();
}

export function daysFromNow(n) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + n);
  return isoLocal(d);
}

export function relDate(iso) {
  if (!iso) return '';
  const a = new Date(iso + 'T00:00:00');
  const b = new Date(today() + 'T00:00:00');
  const diff = Math.round((a - b) / 86400000);
  if (diff <= 0) return 'due now';
  if (diff === 1) return 'tomorrow';
  if (diff < 7) return `in ${diff} days`;
  if (diff < 30) return `in ${Math.round(diff / 7)} wk`;
  return `in ${Math.round(diff / 30)} mo`;
}

export function shuffle(arr, rng = Math.random) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}

export const DIFFICULTY = {
  easy:   { label: 'Easy',      cls: 'd-easy' },
  medium: { label: 'Medium',    cls: 'd-medium' },
  hard:   { label: 'Hard',      cls: 'd-hard' },
  expert: { label: 'Very Hard', cls: 'd-expert' },
};

export const DIFF_ORDER = ['easy', 'medium', 'hard', 'expert'];

export function bar(value) {
  return `<div class="bar"><i style="width:${Math.max(0, Math.min(100, value))}%"></i></div>`;
}

export function navigate(hash) {
  location.hash = hash;
}
