// Searchable formula sheet across the whole curriculum.

import { CURRICULUM, ALL_FORMULAS } from '../content/index.js';
import { esc } from '../util.js';

let query = '';
let topicFilter = '';

export function renderFormulas(root, params) {
  if (params.has('topic')) topicFilter = params.get('topic');

  const matches = ALL_FORMULAS.filter((f) => {
    if (topicFilter && f.topicId !== topicFilter) return false;
    if (!query) return true;
    const hay = `${f.name} ${f.expr} ${f.note || ''} ${f.topicName} ${f.moduleName}`.toLowerCase();
    return hay.includes(query.toLowerCase());
  });

  const grouped = {};
  for (const f of matches) (grouped[f.topicName] ||= []).push(f);

  root.innerHTML = `
    <div class="page-head">
      <div class="eyebrow">Reference</div>
      <h1>Formula sheet</h1>
      <p class="lede">Every formula from the lessons in one place. Search by name, symbol or topic.</p>
    </div>

    <div class="btn-row" style="margin-bottom:26px">
      <input class="btn btn-sm" id="q" type="search" placeholder="Search formulas…"
             value="${esc(query)}" style="flex:1;min-width:200px;text-align:left;font-weight:400" />
      <select class="btn btn-sm" id="topic">
        <option value="">All topics</option>
        ${CURRICULUM.map((t) => `<option value="${t.id}" ${topicFilter === t.id ? 'selected' : ''}>${esc(t.name)}</option>`).join('')}
      </select>
    </div>

    ${matches.length ? Object.entries(grouped).map(([topic, list]) => `
      <div class="section" style="margin-top:26px">
        <div class="section-head"><h2>${esc(topic)}</h2><span class="small muted">${list.length}</span></div>
        ${list.map((f) => `
          <div class="card" style="margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;gap:12px;align-items:baseline;margin-bottom:10px">
              <strong style="font-size:15px">${esc(f.name)}</strong>
              <span class="small muted">${esc(f.moduleName)}</span>
            </div>
            <div class="formula" style="margin-bottom:${f.note ? '12px' : '0'}">${esc(f.expr)}</div>
            ${f.note ? `<div class="small muted">${esc(f.note)}</div>` : ''}
          </div>`).join('')}
      </div>`).join('')
    : `<div class="empty"><h3>No matches</h3><p>Try a different search term.</p></div>`}
  `;

  const input = root.querySelector('#q');
  input.addEventListener('input', (e) => {
    query = e.target.value;
    const pos = e.target.selectionStart;
    renderFormulas(root, new URLSearchParams());
    const next = root.querySelector('#q');
    next.focus();
    next.setSelectionRange(pos, pos);
  });

  root.querySelector('#topic').addEventListener('change', (e) => {
    topicFilter = e.target.value;
    renderFormulas(root, new URLSearchParams());
  });
}
