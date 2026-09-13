// Renders lesson content blocks to HTML, and wires the interactive ones.

import { md, esc } from './util.js';

let figureSeq = 0;

export function renderBlocks(blocks = []) {
  return blocks.map(renderBlock).join('');
}

function renderBlock(b) {
  switch (b.t) {
    case 'h':
      return `<h2>${md(b.x)}</h2>`;

    case 'h3':
      return `<h3>${md(b.x)}</h3>`;

    case 'p':
      return `<p>${md(b.x)}</p>`;

    case 'ul':
      return `<ul>${b.x.map((i) => `<li>${md(i)}</li>`).join('')}</ul>`;

    case 'ol':
      return `<ol>${b.x.map((i) => `<li>${md(i)}</li>`).join('')}</ol>`;

    case 'formula':
      return `<div class="formula">${b.name ? `<span class="f-name">${esc(b.name)}</span>` : ''}${esc(b.x)}</div>`;

    case 'callout':
      return `
        <div class="callout${b.kind === 'warn' ? ' callout-warn' : ''}">
          ${b.label ? `<div class="callout-label">${esc(b.label)}</div>` : ''}
          <div>${md(b.x)}</div>
        </div>`;

    case 'example':
      return `
        <div class="callout">
          <div class="callout-label">${esc(b.title || 'Example')}</div>
          <div style="white-space:pre-wrap">${md(b.x)}</div>
        </div>`;

    case 'table':
      return `
        <div class="table-wrap"><table class="t">
          <thead><tr>${b.head.map((h) => `<th>${md(h)}</th>`).join('')}</tr></thead>
          <tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;

    case 'terms':
      return `
        <dl class="terms">
          ${b.x.map(([term, def]) => `<div><dt>${md(term)}</dt><dd>${md(def)}</dd></div>`).join('')}
        </dl>`;

    case 'flow':
      return `
        <div class="flow">
          ${b.x.map((step, i) => `${i ? '<div class="flow-arrow" aria-hidden="true">↓</div>' : ''}<div class="flow-step">${md(step)}</div>`).join('')}
        </div>`;

    case 'quad':
      return renderQuad(b);

    case 'plot':
      return renderPlot(b);

    case 'steps':
      return `
        <div class="steps" data-steps>
          <div class="callout-label">${esc(b.title || 'Worked example')}</div>
          ${b.given ? `<div class="steps-given">${md(b.given)}</div>` : ''}
          ${b.ask ? `<div class="steps-ask">${md(b.ask)}</div>` : ''}
          <ol class="steps-list">
            ${b.x.map((s) => `<li hidden>${md(s)}</li>`).join('')}
          </ol>
          ${b.result ? `<div class="steps-result" hidden>${md(b.result)}</div>` : ''}
          <div class="steps-actions">
            <button class="btn btn-sm" data-step-next>Show first step</button>
            <button class="btn btn-sm btn-ghost" data-step-all>Show full solution</button>
          </div>
        </div>`;

    case 'check':
      return `
        <div class="check-q" data-check data-answer="${b.answer}">
          <div class="callout-label">Check yourself</div>
          <div class="check-stem">${md(b.q)}</div>
          <div class="choices">
            ${b.choices.map((c, i) => `
              <button class="choice" data-check-choice="${i}">
                <span class="choice-key">${'ABCD'[i]}</span><span>${md(c)}</span>
              </button>`).join('')}
          </div>
          <div class="check-explain" hidden>${md(b.explain)}</div>
        </div>`;

    case 'takeaways':
      return `
        <div class="takeaways">
          <div class="callout-label">Key takeaways</div>
          <ul>${b.x.map((i) => `<li>${md(i)}</li>`).join('')}</ul>
        </div>`;

    default:
      return '';
  }
}

/* ---------------- 2×2 framework ---------------- */

function renderQuad(b) {
  const [[tl, tr], [bl, br]] = b.cells;
  const cell = (c) => `<div class="quad-cell"><div class="quad-title">${md(c[0])}</div><div class="quad-body">${md(c[1])}</div></div>`;
  return `
    <figure class="quad">
      <div class="quad-y">
        <span>${esc(b.y[1])}</span>
        <span>${esc(b.y[0])}</span>
      </div>
      <div class="quad-grid">
        ${cell(tl)}${cell(tr)}${cell(bl)}${cell(br)}
      </div>
      <div class="quad-x">
        <span>${esc(b.x[0])}</span>
        <span>${esc(b.x[1])}</span>
      </div>
      ${b.caption ? `<figcaption>${md(b.caption)}</figcaption>` : ''}
    </figure>`;
}

/* ---------------- plots ---------------- */

// A tiny, dependency-free chart for teaching diagrams: curves given as
// functions, polylines, shaded polygons, guide lines, points and labels.
function renderPlot(b) {
  const W = 560, H = 320;
  const pad = { l: 46, r: 18, t: 28, b: 38 };
  const [x0, x1] = b.x || [0, 10];
  const [y0, y1] = b.y || [0, 10];
  const sx = (x) => pad.l + ((x - x0) / (x1 - x0)) * (W - pad.l - pad.r);
  const sy = (y) => H - pad.b - ((y - y0) / (y1 - y0)) * (H - pad.t - pad.b);
  const id = `clip${++figureSeq}`;
  const f = (n) => n.toFixed(1);

  const path = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${f(sx(x))},${f(sy(y))}`).join('');

  const polys = (b.polys || []).map((p) => `
    <path class="fill ${p.cls || 'c-accent'}" d="${path(p.pts)}Z" />`).join('');

  const curves = (b.curves || []).map((c) => {
    const [a, z] = c.domain || [x0, x1];
    const n = 120;
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const x = a + ((z - a) * i) / n;
      const y = c.fn(x);
      if (Number.isFinite(y)) pts.push([x, y]);
    }
    return `<path class="line ${c.cls || 'c-ink'}${c.dash ? ' dash' : ''}" d="${path(pts)}" />`;
  }).join('');

  const lines = (b.lines || []).map((l) =>
    `<path class="line ${l.cls || 'c-ink'}${l.dash ? ' dash' : ''}" d="${path(l.pts)}" />`).join('');

  const guides = [
    ...(b.hlines || []).map((g) => `<path class="guide" d="M${f(sx(x0))},${f(sy(g.y))}H${f(sx(g.to ?? x1))}" />`),
    ...(b.vlines || []).map((g) => `<path class="guide" d="M${f(sx(g.x))},${f(sy(y0))}V${f(sy(g.to ?? y1))}" />`),
  ].join('');

  // Tick labels sit outside the clipped plot area.
  const ticks = [
    ...(b.hlines || []).filter((g) => g.label).map((g) =>
      `<text class="tick" x="${pad.l - 6}" y="${f(sy(g.y) + 4)}" text-anchor="end">${esc(g.label)}</text>`),
    ...(b.vlines || []).filter((g) => g.label).map((g) =>
      `<text class="tick" x="${f(sx(g.x))}" y="${H - pad.b + 16}" text-anchor="middle">${esc(g.label)}</text>`),
  ].join('');

  const points = (b.points || []).map((p) =>
    `<circle class="dot ${p.cls || 'c-accent'}" cx="${f(sx(p.x))}" cy="${f(sy(p.y))}" r="4" />`).join('');

  const labels = (b.labels || []).map((t) =>
    `<text class="lbl ${t.cls || ''}" x="${f(sx(t.x))}" y="${f(sy(t.y))}" text-anchor="${t.anchor || 'start'}">${esc(t.text)}</text>`).join('');

  return `
    <figure class="plot">
      <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(b.alt || b.caption || 'Diagram')}">
        <defs><clipPath id="${id}"><rect x="${pad.l}" y="${pad.t}" width="${W - pad.l - pad.r}" height="${H - pad.t - pad.b}" /></clipPath></defs>
        <g clip-path="url(#${id})">${polys}${guides}${curves}${lines}</g>
        <path class="axis" d="M${pad.l},${pad.t}V${H - pad.b}H${W - pad.r}" />
        <text class="axis-lbl" x="${W - pad.r}" y="${H - 8}" text-anchor="end">${esc(b.xlabel || '')}</text>
        <text class="axis-lbl" x="${pad.l - 4}" y="${pad.t - 12}">${esc(b.ylabel || '')}</text>
        ${ticks}${points}${labels}
      </svg>
      ${b.caption ? `<figcaption>${md(b.caption)}</figcaption>` : ''}
    </figure>`;
}

/* ---------------- interactivity ---------------- */

// Attach handlers for check questions and step-by-step examples inside root.
// onCheck(correct) is called the first time each check question is answered.
export function wireBlocks(root, { onCheck } = {}) {
  root.addEventListener('click', (e) => {
    const choice = e.target.closest('[data-check-choice]');
    if (choice) {
      const box = choice.closest('[data-check]');
      if (box.dataset.done) return;
      box.dataset.done = '1';
      const picked = Number(choice.dataset.checkChoice);
      const answer = Number(box.dataset.answer);
      box.querySelectorAll('[data-check-choice]').forEach((btn) => {
        const i = Number(btn.dataset.checkChoice);
        btn.disabled = true;
        if (i === answer) btn.classList.add('correct');
        else if (i === picked) btn.classList.add('incorrect');
      });
      const exp = box.querySelector('.check-explain');
      exp.hidden = false;
      exp.insertAdjacentHTML('afterbegin',
        `<div class="explain-verdict" style="color:var(${picked === answer ? '--accent' : '--wrong'})">${picked === answer ? 'Correct' : `Not quite — the answer is ${'ABCD'[answer]}`}</div>`);
      onCheck?.(picked === answer);
      return;
    }

    const next = e.target.closest('[data-step-next]');
    const all = e.target.closest('[data-step-all]');
    if (next || all) {
      const box = e.target.closest('[data-steps]');
      const items = [...box.querySelectorAll('.steps-list li')];
      const result = box.querySelector('.steps-result');
      if (all) items.forEach((li) => { li.hidden = false; });
      else {
        const hidden = items.find((li) => li.hidden);
        if (hidden) hidden.hidden = false;
      }
      const remaining = items.filter((li) => li.hidden).length;
      const btnNext = box.querySelector('[data-step-next]');
      if (remaining === 0) {
        if (result) result.hidden = false;
        box.querySelector('.steps-actions').hidden = true;
      } else {
        btnNext.textContent = `Show next step (${items.length - remaining}/${items.length})`;
      }
    }
  });
}
