// Economics — taught as eight modules that follow the current Level I
// curriculum structure. Each module lives in its own file under ./economics/.
// All lesson text, examples and questions are original to this app.

import firm from './economics/firm.js';
import cycles from './economics/cycles.js';
import fiscal from './economics/fiscal.js';
import monetary from './economics/monetary.js';
import geopolitics from './economics/geopolitics.js';
import trade from './economics/trade.js';
import flows from './economics/flows.js';
import fx from './economics/fx.js';

export default {
  id: 'economics',
  name: 'Economics',
  short: 'Econ',
  weight: '6–9%',
  weightMid: 7.5,
  depth: 'deep',
  summary:
    'Market structure, the business cycle, fiscal and monetary policy, geopolitics, trade, and currencies. The exam rewards clean cause-and-effect reasoning far more than memorised definitions — and exchange-rate arithmetic is free marks once the quote convention is automatic.',
  modules: [firm, cycles, fiscal, monetary, geopolitics, trade, flows, fx],
};
