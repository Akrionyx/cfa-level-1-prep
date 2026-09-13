// Financial Statement Analysis — starter depth. Original wording throughout.

export default {
  id: 'fsa',
  name: 'Financial Statement Analysis',
  short: 'FSA',
  weight: '11–14%',
  weightMid: 12.5,
  depth: 'starter',
  summary:
    'How the three statements fit together, where accounting choices change reported results, and how to read a company through ratios. Heavily weighted, and the IFRS/US GAAP differences are reliably examined.',
  modules: [
    {
      id: 'fsa-framework',
      name: 'The Statements and the Reporting Framework',
      los: [
        'Describe the roles of the financial statements, notes and MD&A in financial analysis',
        'Describe the objective of financial statements and the qualitative characteristics of useful information',
        'Explain the accounting equation and the accrual basis of accounting',
        'Compare key differences between IFRS and US GAAP',
      ],
      lessons: [
        {
          id: 'fsa-framework-l1',
          title: 'How the statements interlock',
          minutes: 8,
          blocks: [
            {
              t: 'formula', name: 'The accounting equation',
              x: 'Assets = Liabilities + Equity\n\nExpanded:\nAssets = Liabilities + Contributed capital\n         + Beginning retained earnings + Revenue − Expenses − Dividends',
            },
            { t: 'p', x: 'The statements are not four independent documents. Net income from the income statement flows into retained earnings on the balance sheet and is the starting line of the indirect cash flow statement. The cash line on the balance sheet is the ending balance of the cash flow statement. If a question changes one number, trace it through all three.' },
            {
              t: 'table',
              head: ['Statement', 'Question it answers'],
              rows: [
                ['Income statement', 'Was the business profitable over the period?'],
                ['Balance sheet', 'What does it own and owe at a point in time?'],
                ['Cash flow statement', 'Where did cash actually come from and go?'],
                ['Statement of changes in equity', 'How did owners\' claims change?'],
              ],
            },
            {
              t: 'callout', label: 'Why accruals matter',
              x: 'Accrual accounting records revenue when earned and expenses when incurred, not when cash moves. That produces a better measure of performance — and it is also where nearly all earnings manipulation lives, because accruals require judgement in a way that cash does not.',
            },
            { t: 'h', x: 'Qualitative characteristics' },
            { t: 'p', x: '**Fundamental**: relevance and faithful representation. **Enhancing**: comparability, verifiability, timeliness, understandability. An enhancing characteristic can never rescue information that lacks the fundamental two.' },
            { t: 'h', x: 'IFRS vs US GAAP — the differences worth memorising' },
            {
              t: 'table',
              head: ['Area', 'IFRS', 'US GAAP'],
              rows: [
                ['LIFO inventory', 'Prohibited', 'Permitted'],
                ['Inventory write-up reversal', 'Permitted (to original cost)', 'Prohibited'],
                ['Revaluation of PP&E', 'Permitted (revaluation model)', 'Generally prohibited'],
                ['Development costs', 'Capitalised once criteria are met', 'Generally expensed'],
                ['Interest paid (cash flow)', 'Operating or financing', 'Operating'],
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-1', name: 'Accounting equation', expr: 'Assets = Liabilities + Equity', note: 'Every transaction preserves it.' },
        { id: 'f-f-2', name: 'Ending retained earnings', expr: 'Beginning RE + Net income − Dividends', note: 'The bridge from the income statement to the balance sheet.' },
      ],
      cards: [
        { id: 'c-f-1', front: 'Two fundamental qualitative characteristics', back: 'Relevance and faithful representation. (Enhancing: comparability, verifiability, timeliness, understandability.)' },
        { id: 'c-f-2', front: 'Is LIFO permitted under IFRS?', back: 'No — prohibited under IFRS, permitted under US GAAP.' },
        { id: 'c-f-3', front: 'Can inventory write-downs be reversed?', back: 'IFRS: yes, up to original cost. US GAAP: no reversal permitted.' },
      ],
      questions: [
        {
          id: 'q-fs-001', difficulty: 'easy',
          stem: 'A company reports net income of $500,000 and pays dividends of $120,000. Beginning retained earnings were $2,000,000. Ending retained earnings are closest to:',
          choices: ['$2,380,000', '$2,500,000', '$2,620,000'],
          answer: 0,
          explain: 'Ending RE = 2,000,000 + 500,000 − 120,000 = $2,380,000.',
          why: [
            'B ignores the dividend payment.',
            'C adds the dividends rather than subtracting them.',
          ],
        },
        {
          id: 'q-fs-002', difficulty: 'medium',
          stem: 'Which accounting treatment is permitted under IFRS but generally prohibited under US GAAP?',
          choices: ['Use of the LIFO inventory method', 'Upward revaluation of property, plant and equipment', 'Expensing of research costs as incurred'],
          answer: 1,
          explain: 'IFRS permits the revaluation model for PP&E, carrying assets at fair value. US GAAP generally requires historical cost less accumulated depreciation.',
          why: [
            'A is the reverse — LIFO is a US GAAP option and is prohibited under IFRS.',
            'C is required under both frameworks; research costs are expensed either way. It is *development* costs that diverge.',
          ],
        },
        {
          id: 'q-fs-003', difficulty: 'hard',
          stem: 'A company capitalises a cost that should have been expensed. In the year of the transaction, the most likely effect is:',
          choices: [
            'higher net income and higher total assets',
            'lower net income and lower cash flow from operations',
            'no effect on net income but higher investing cash outflow',
          ],
          answer: 0,
          explain: 'Capitalising moves the cost from the income statement onto the balance sheet, so current-year expense falls and net income rises, while assets increase. Total cash is unchanged, but the classification shifts from operating outflow to investing outflow — which also inflates reported operating cash flow.',
          why: [
            'B reverses the income effect; capitalising *raises* current net income.',
            'C is wrong because there is a net income effect — only the depreciation portion hits the income statement this year, not the full cost.',
          ],
        },
      ],
    },

    {
      id: 'fsa-inventory',
      name: 'Inventories and Long-Lived Assets',
      los: [
        'Compare cost formulas (FIFO, LIFO, weighted average) and their effects on the statements',
        'Calculate and explain the effects of inventory method choice in periods of rising prices',
        'Compare depreciation methods and their effects on reported results',
        'Explain the impairment of long-lived assets',
      ],
      lessons: [
        {
          id: 'fsa-inventory-l1',
          title: 'When prices rise, the method decides the answer',
          minutes: 8,
          blocks: [
            { t: 'p', x: 'Assume **rising prices and stable or rising inventory quantities** — the standard exam setting. Under LIFO, the most recently purchased (most expensive) units are charged to cost of goods sold. Under FIFO, the oldest (cheapest) units are.' },
            {
              t: 'table',
              head: ['Rising prices', 'LIFO', 'FIFO'],
              rows: [
                ['Cost of goods sold', 'Higher', 'Lower'],
                ['Net income', 'Lower', 'Higher'],
                ['Ending inventory', 'Lower (old costs)', 'Higher (recent costs)'],
                ['Taxes paid', 'Lower', 'Higher'],
                ['Cash flow', 'Higher (tax saving)', 'Lower'],
                ['Working capital', 'Lower', 'Higher'],
              ],
            },
            {
              t: 'callout', label: 'The one-line summary',
              x: 'LIFO gives a better **income statement** (current costs matched to current revenue) and a worse **balance sheet** (stale inventory values). FIFO does the opposite. Cash is higher under LIFO only because the tax bill is lower.',
            },
            {
              t: 'formula', name: 'Converting LIFO to FIFO',
              x: 'FIFO inventory = LIFO inventory + LIFO reserve\nFIFO COGS    = LIFO COGS − Δ LIFO reserve\nFIFO net income ≈ LIFO NI + Δ LIFO reserve × (1 − tax rate)',
            },
            { t: 'h', x: 'Depreciation' },
            {
              t: 'ul',
              x: [
                '**Straight line** — equal expense each year; the simplest and the one that flatters early-year income.',
                '**Accelerated (e.g. double declining balance)** — higher expense early, lower later. Lower early net income, higher later.',
                '**Units of production** — expense tracks usage.',
              ],
            },
            { t: 'p', x: 'Over the asset\'s whole life, total depreciation is identical under every method. Only the *timing* differs — so a company choosing a longer useful life or higher salvage value reports higher income now and lower income later.' },
            { t: 'h', x: 'Impairment' },
            { t: 'p', x: 'Under IFRS an asset is impaired when carrying amount exceeds its recoverable amount (the higher of fair value less costs to sell, and value in use); reversals are permitted. Under US GAAP the test is first a recoverability test against undiscounted future cash flows, then measurement at fair value — and **reversals are prohibited**.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-10', name: 'LIFO reserve conversion', expr: 'FIFO inventory = LIFO inventory + LIFO reserve', note: 'Used to compare a LIFO firm with FIFO peers.' },
        { id: 'f-f-11', name: 'COGS identity', expr: 'COGS = Beginning inventory + Purchases − Ending inventory', note: 'Anything that raises ending inventory lowers COGS.' },
        { id: 'f-f-12', name: 'Double declining balance', expr: 'Depreciation = (2 / useful life) × beginning book value', note: 'Salvage value is ignored until book value reaches it.' },
      ],
      cards: [
        { id: 'c-f-10', front: 'Rising prices: which method gives higher net income?', back: 'FIFO — cheaper old costs flow to COGS. LIFO gives higher COGS and lower income, but lower taxes.' },
        { id: 'c-f-11', front: 'Converting LIFO inventory to FIFO', back: 'FIFO inventory = LIFO inventory + LIFO reserve.' },
        { id: 'c-f-12', front: 'Impairment reversals', back: 'IFRS permits reversal; US GAAP prohibits it for assets held for use.' },
        { id: 'c-f-13', front: 'Effect of a longer estimated useful life', back: 'Lower annual depreciation → higher reported net income now, lower later. Total depreciation over the asset\'s life is unchanged.' },
      ],
      questions: [
        {
          id: 'q-fs-010', difficulty: 'easy',
          stem: 'During a period of rising prices and stable inventory quantities, a company using LIFO rather than FIFO will most likely report:',
          choices: ['higher net income', 'higher cost of goods sold', 'higher ending inventory'],
          answer: 1,
          explain: 'LIFO charges the most recently purchased — and therefore most expensive — units to cost of goods sold, raising COGS and lowering both net income and ending inventory.',
          why: [
            'A is the FIFO outcome.',
            'C is also FIFO: its ending inventory carries recent, higher costs.',
          ],
        },
        {
          id: 'q-fs-011', difficulty: 'medium',
          stem: 'A company reports LIFO inventory of $800,000 and a LIFO reserve of $150,000. Its inventory on a FIFO basis is closest to:',
          choices: ['$650,000', '$800,000', '$950,000'],
          answer: 2,
          explain: 'FIFO inventory = LIFO inventory + LIFO reserve = 800,000 + 150,000 = $950,000. The reserve measures exactly how much LIFO understates inventory value.',
          why: [
            'A subtracts the reserve, which would be the conversion in the wrong direction.',
            'B ignores the reserve entirely.',
          ],
        },
        {
          id: 'q-fs-012', difficulty: 'hard',
          stem: 'Compared with straight-line depreciation, an accelerated method in the first year of an asset\'s life results in:',
          choices: [
            'lower net income, lower total assets, and a higher debt-to-equity ratio',
            'lower net income, higher total assets, and a lower debt-to-equity ratio',
            'higher net income and higher return on assets',
          ],
          answer: 0,
          explain: 'Accelerated depreciation front-loads expense: net income falls, accumulated depreciation rises so net assets fall, and retained earnings — and therefore equity — fall, raising debt-to-equity.',
          why: [
            'B has the asset effect backwards; more depreciation reduces net book value.',
            'C describes straight-line relative to accelerated, not the reverse.',
          ],
        },
        {
          id: 'q-fs-013', difficulty: 'expert',
          vignette: 'A company using LIFO reports net income of $4.0 million. Its LIFO reserve increased from $2.0 million to $2.6 million during the year. The tax rate is 25%.',
          stem: 'Net income restated on a FIFO basis is closest to:',
          choices: ['$4.45 million', '$4.60 million', '$3.55 million'],
          answer: 0,
          explain: 'The increase in the LIFO reserve, $0.6 million, is the additional pre-tax income FIFO would have reported. After tax: 0.6 × (1 − 0.25) = $0.45 million. FIFO net income ≈ 4.0 + 0.45 = $4.45 million.',
          why: [
            'B adds the full pre-tax change without applying the tax rate.',
            'C subtracts the adjustment. Under rising prices FIFO income is *higher* than LIFO income.',
          ],
        },
      ],
    },

    {
      id: 'fsa-cashflow',
      name: 'Analysing the Statement of Cash Flows',
      los: [
        'Compare the direct and indirect methods of presenting cash from operations',
        'Classify cash flows as operating, investing or financing under IFRS and US GAAP',
        'Calculate cash flow from operations using the indirect method',
        'Calculate and interpret free cash flow to the firm and to equity',
      ],
      lessons: [
        {
          id: 'fsa-cashflow-l1',
          title: 'Rebuilding operating cash flow',
          minutes: 8,
          blocks: [
            {
              t: 'formula', name: 'Indirect method',
              x: 'CFO = Net income\n    + Non-cash charges (depreciation, amortisation)\n    − Gains on asset sales  + Losses on asset sales\n    − Increases in operating assets  + Decreases\n    + Increases in operating liabilities  − Decreases',
            },
            {
              t: 'callout', label: 'The intuition that removes the memorisation',
              x: 'An increase in an **asset** (inventory, receivables) means cash left the business — subtract it. An increase in a **liability** (payables) means cash was retained — add it. Gains on asset sales are removed because the whole proceeds belong in investing, not operating.',
            },
            { t: 'h', x: 'Classification differences' },
            {
              t: 'table',
              head: ['Item', 'IFRS', 'US GAAP'],
              rows: [
                ['Interest paid', 'Operating or financing', 'Operating'],
                ['Interest received', 'Operating or investing', 'Operating'],
                ['Dividends paid', 'Operating or financing', 'Financing'],
                ['Dividends received', 'Operating or investing', 'Operating'],
              ],
            },
            { t: 'p', x: 'IFRS flexibility matters for analysis: a company can classify interest paid as financing, boosting reported operating cash flow relative to a US GAAP peer doing identical business.' },
            {
              t: 'formula', name: 'Free cash flow',
              x: 'FCFF = CFO + Interest × (1 − tax rate) − Capital expenditure\nFCFE = CFO − Capital expenditure + Net borrowing',
            },
            { t: 'p', x: 'FCFF is the cash available to *all* providers of capital, so interest is added back net of its tax shield. FCFE is what is left for shareholders after lenders have been served.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-20', name: 'FCFF from CFO', expr: 'FCFF = CFO + Int(1 − t) − CapEx', note: 'Cash to all capital providers.' },
        { id: 'f-f-21', name: 'FCFE from CFO', expr: 'FCFE = CFO − CapEx + Net borrowing', note: 'Cash to equity holders after debt service.' },
        { id: 'f-f-22', name: 'FCFE from FCFF', expr: 'FCFE = FCFF − Int(1 − t) + Net borrowing', note: 'Bridge between the two measures.' },
      ],
      cards: [
        { id: 'c-f-20', front: 'Indirect method: increase in accounts receivable', back: 'Subtract it — revenue was recorded but cash has not been collected.' },
        { id: 'c-f-21', front: 'Indirect method: increase in accounts payable', back: 'Add it — the expense was recorded but cash has not yet left.' },
        { id: 'c-f-22', front: 'Where is interest paid classified?', back: 'US GAAP: operating. IFRS: operating or financing (a real comparability issue).' },
        { id: 'c-f-23', front: 'FCFF formula from CFO', back: 'FCFF = CFO + Interest × (1 − tax rate) − CapEx.' },
      ],
      questions: [
        {
          id: 'q-fs-020', difficulty: 'easy',
          stem: 'Using the indirect method, an increase in inventory during the period is:',
          choices: ['added to net income', 'subtracted from net income', 'classified as an investing outflow'],
          answer: 1,
          explain: 'Building inventory consumes cash that net income does not reflect, so the increase is subtracted in reconciling net income to cash from operations.',
          why: [
            'A would be correct for a *decrease* in inventory, which releases cash.',
            'C is wrong because inventory is an operating working-capital item, not a capital investment.',
          ],
        },
        {
          id: 'q-fs-021', difficulty: 'medium',
          vignette: 'Net income $900,000; depreciation $200,000; accounts receivable increased $150,000; accounts payable increased $80,000; gain on sale of equipment $50,000.',
          stem: 'Cash flow from operations is closest to:',
          choices: ['$980,000', '$1,080,000', '$1,180,000'],
          answer: 0,
          explain: 'CFO = 900,000 + 200,000 − 50,000 − 150,000 + 80,000 = $980,000. Depreciation is added back, the gain is removed (its proceeds belong in investing), the receivable increase is subtracted and the payable increase added.',
          why: [
            'B fails to remove the $50,000 gain and misstates one working-capital adjustment.',
            'C adds the gain instead of subtracting it and mishandles the receivables movement.',
          ],
        },
        {
          id: 'q-fs-022', difficulty: 'hard',
          stem: 'A company reports CFO of $5.0 million, interest paid of $800,000, capital expenditure of $2.0 million, and net new borrowing of $500,000. Its tax rate is 25%. FCFF is closest to:',
          choices: ['$3.0 million', '$3.6 million', '$3.5 million'],
          answer: 1,
          explain: 'FCFF = CFO + Int(1 − t) − CapEx = 5.0 + 0.8(0.75) − 2.0 = 5.0 + 0.6 − 2.0 = $3.6 million. Net borrowing does not enter FCFF; it belongs in FCFE.',
          why: [
            'A omits the after-tax interest add-back.',
            'C incorrectly includes the net borrowing or adds interest without the tax adjustment.',
          ],
        },
      ],
    },

    {
      id: 'fsa-ratios',
      name: 'Ratio Analysis and Reporting Quality',
      los: [
        'Calculate and interpret activity, liquidity, solvency and profitability ratios',
        'Demonstrate DuPont decomposition of return on equity',
        'Describe the spectrum from high-quality reporting to fraudulent reporting',
        'Describe warning signs of low-quality financial reporting',
      ],
      lessons: [
        {
          id: 'fsa-ratios-l1',
          title: 'DuPont, and what ratios cannot tell you',
          minutes: 8,
          blocks: [
            {
              t: 'formula', name: 'DuPont decomposition',
              x: 'Three-part:\nROE = Net profit margin × Asset turnover × Financial leverage\n    = (NI/Revenue) × (Revenue/Assets) × (Assets/Equity)\n\nFive-part:\nROE = Tax burden × Interest burden × EBIT margin\n      × Asset turnover × Leverage\n    = (NI/EBT) × (EBT/EBIT) × (EBIT/Rev) × (Rev/Assets) × (Assets/Eq)',
            },
            { t: 'p', x: 'The value of DuPont is diagnostic. Two firms with identical 15% ROE can be entirely different businesses — one earning it through margin, the other through leverage. The five-part version separates operating performance (EBIT margin, turnover) from financing and tax effects.' },
            {
              t: 'table',
              head: ['Category', 'Representative ratios'],
              rows: [
                ['Liquidity', 'Current = CA/CL; Quick = (Cash + ST inv. + Receivables)/CL; Cash ratio'],
                ['Activity', 'Inventory turnover = COGS/avg inventory; Receivables turnover = Revenue/avg AR'],
                ['Solvency', 'Debt-to-equity; Debt-to-assets; Interest coverage = EBIT/Interest'],
                ['Profitability', 'Gross, operating and net margin; ROA; ROE'],
              ],
            },
            {
              t: 'formula', name: 'Cash conversion cycle',
              x: 'CCC = DSO + DOH − DPO\n\nDSO = days sales outstanding, DOH = days of inventory on hand,\nDPO = days payables outstanding',
            },
            { t: 'h', x: 'Reporting quality' },
            { t: 'p', x: 'Reporting quality and earnings quality are different things. Reporting quality concerns whether the numbers faithfully represent reality; earnings quality concerns whether the underlying earnings are sustainable. High-quality reporting of poor earnings is entirely possible — and far better than the reverse.' },
            {
              t: 'callout', label: 'Warning signs', kind: 'warn',
              x: 'Watch for revenue growing much faster than receivables collection; net income consistently exceeding cash flow from operations; frequent "non-recurring" charges; capitalising costs peers expense; and changes in estimates (useful lives, allowances) that happen to rescue a quarter.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-30', name: 'ROE (3-part DuPont)', expr: 'ROE = Net margin × Asset turnover × Leverage', note: 'Separates profitability, efficiency and financing.' },
        { id: 'f-f-31', name: 'Cash conversion cycle', expr: 'CCC = DSO + DOH − DPO', note: 'Days between paying suppliers and collecting from customers. Lower is better.' },
        { id: 'f-f-32', name: 'Interest coverage', expr: 'EBIT / Interest expense', note: 'How many times operating profit covers interest.' },
        { id: 'f-f-33', name: 'Quick ratio', expr: '(Cash + Short-term investments + Receivables) / Current liabilities', note: 'Excludes inventory — the least liquid current asset.' },
      ],
      cards: [
        { id: 'c-f-30', front: 'Three components of DuPont ROE', back: 'Net profit margin × asset turnover × financial leverage.' },
        { id: 'c-f-31', front: 'Cash conversion cycle', back: 'DSO + DOH − DPO. Shorter means less cash tied up in working capital.' },
        { id: 'c-f-32', front: 'Difference between reporting quality and earnings quality', back: 'Reporting quality = do the numbers faithfully represent reality. Earnings quality = are the earnings sustainable and adequate.' },
        { id: 'c-f-33', front: 'Classic red flag in earnings quality', back: 'Net income persistently exceeding cash flow from operations — accruals are carrying the earnings.' },
      ],
      questions: [
        {
          id: 'q-fs-030', difficulty: 'easy',
          stem: 'A company has a net profit margin of 5%, asset turnover of 1.5, and financial leverage of 2.0. Its ROE is closest to:',
          choices: ['7.5%', '15.0%', '10.0%'],
          answer: 1,
          explain: 'ROE = 0.05 × 1.5 × 2.0 = 0.15, or 15.0%.',
          why: [
            'A (7.5%) multiplies margin by turnover only, omitting leverage — that is ROA.',
            'C (10.0%) multiplies margin by leverage only, omitting asset turnover.',
          ],
        },
        {
          id: 'q-fs-031', difficulty: 'medium',
          stem: 'A firm has days of inventory on hand of 60, days sales outstanding of 45 and days payables outstanding of 30. Its cash conversion cycle is:',
          choices: ['75 days', '135 days', '45 days'],
          answer: 0,
          explain: 'CCC = DSO + DOH − DPO = 45 + 60 − 30 = 75 days. The firm funds 75 days of operations before collecting from customers.',
          why: [
            'B adds all three instead of subtracting payables, which represent supplier financing.',
            'C subtracts inventory days rather than payables days.',
          ],
        },
        {
          id: 'q-fs-032', difficulty: 'hard',
          stem: 'Over three years a company\'s revenue grows 12% annually while its days sales outstanding rises from 40 to 75, and cash flow from operations falls below net income for the first time. This pattern most likely suggests:',
          choices: [
            'improving working capital efficiency',
            'aggressive revenue recognition, with sales recorded before cash is realistically collectible',
            'a shift toward a more conservative credit policy',
          ],
          answer: 1,
          explain: 'Receivables growing much faster than revenue, combined with net income outrunning operating cash flow, is the signature pattern of revenue recognised too early or extended to customers unlikely to pay. Earnings are being carried by accruals.',
          why: [
            'A is the opposite — rising DSO means collection is *slowing*.',
            'C is wrong because tightening credit would shorten DSO, not lengthen it.',
          ],
        },
      ],
    },
  ],
};
