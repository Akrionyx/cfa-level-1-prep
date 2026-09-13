// Renders lesson content blocks to HTML.

import { md, esc } from './util.js';

export function renderBlocks(blocks = []) {
  return blocks.map(renderBlock).join('');
}

function renderBlock(b) {
  switch (b.t) {
    case 'h':
      return `<h2>${md(b.x)}</h2>`;

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

    default:
      return '';
  }
}
