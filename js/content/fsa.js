// Financial Statement Analysis — deep content. Original wording throughout.

export default {
  id: 'fsa',
  name: 'Financial Statement Analysis',
  short: 'FSA',
  weight: '11–14%',
  weightMid: 12.5,
  depth: 'deep',
  summary:
    'How the statements fit together, where accounting choices change reported results, and how to read a company through ratios. Heavily weighted, and IFRS/US GAAP differences are reliably examined — so learn each topic as "what it does to the numbers", not as a rule list.',
  modules: [
    /* ---------------------------------------------------------- */
    {
      id: 'fsa-framework',
      name: 'Introduction to Financial Statement Analysis',
      los: [
        'Describe the roles of financial statement analysis and of the principal statements',
        'Describe the importance of notes, supplementary information and management commentary',
        'Describe the objective of the audit and the types of audit opinion',
        'Describe the qualitative characteristics of financial information and key IFRS/US GAAP differences',
      ],
      lessons: [
        {
          id: 'fsa-framework-l1',
          title: 'How the statements interlock',
          minutes: 9,
          blocks: [
            {
              t: 'formula', name: 'The accounting equation',
              x: 'Assets = Liabilities + Equity\n\nExpanded:\nAssets = Liabilities + Contributed capital\n         + Beginning retained earnings + Revenue − Expenses − Dividends',
            },
            { t: 'p', x: 'The statements are not independent documents. Net income flows into retained earnings on the balance sheet and is the first line of an indirect cash flow statement. The cash balance on the balance sheet is the closing figure of the cash flow statement. If a question changes one number, trace it through all three.' },
            {
              t: 'table',
              head: ['Statement', 'Question it answers'],
              rows: [
                ['Income statement', 'Was the business profitable over the period?'],
                ['Balance sheet', 'What does it own and owe at a point in time?'],
                ['Cash flow statement', 'Where did cash actually come from and go?'],
                ['Statement of changes in equity', 'How did owners\' claims change, and why?'],
              ],
            },
            {
              t: 'callout', label: 'Why accruals matter',
              x: 'Accrual accounting records revenue when earned and expenses when incurred, not when cash moves. That produces a better measure of performance — and it is also where nearly all earnings manipulation lives, because accruals require judgement in a way that cash does not.',
            },
            { t: 'h', x: 'Beyond the statements' },
            { t: 'p', x: 'The **notes** disclose accounting policies, estimates, and the detail behind summary numbers — segment results, debt maturities, lease commitments, contingencies. **Management commentary** (MD&A) discusses trends, risks and known uncertainties. Many of the most important analytical adjustments come from the notes, not the face of the statements.' },
            { t: 'h', x: 'The audit' },
            { t: 'p', x: 'An independent audit provides **reasonable** — not absolute — assurance that the statements are free of material misstatement. Auditors also highlight key (IFRS) or critical (US) audit matters: areas of significant judgement worth an analyst\'s attention.' },
            {
              t: 'table',
              head: ['Opinion', 'Meaning'],
              rows: [
                ['Unqualified (unmodified)', 'Statements present fairly in all material respects — a "clean" opinion'],
                ['Qualified', 'Fairly presented except for a specific, identified matter'],
                ['Adverse', 'Statements are materially misstated and do not present fairly'],
                ['Disclaimer', 'The auditor could not obtain enough evidence to form an opinion'],
              ],
            },
            { t: 'h', x: 'Qualitative characteristics' },
            { t: 'p', x: '**Fundamental**: relevance and faithful representation. **Enhancing**: comparability, verifiability, timeliness, understandability. An enhancing characteristic can never rescue information that lacks the fundamental two.' },
            { t: 'h', x: 'IFRS vs US GAAP — differences worth memorising' },
            {
              t: 'table',
              head: ['Area', 'IFRS', 'US GAAP'],
              rows: [
                ['LIFO inventory', 'Prohibited', 'Permitted'],
                ['Inventory write-down reversal', 'Permitted (up to original cost)', 'Prohibited'],
                ['Revaluation of PP&E', 'Permitted (revaluation model)', 'Prohibited'],
                ['Development costs', 'Capitalised once criteria are met', 'Generally expensed'],
                ['Impairment reversal (assets held for use)', 'Permitted', 'Prohibited'],
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
        { id: 'c-f-3', front: 'Can inventory write-downs be reversed?', back: 'IFRS: yes, up to original cost. US GAAP: no.' },
        { id: 'c-f-4', front: 'Four types of audit opinion', back: 'Unqualified (clean), qualified (except for a matter), adverse (not fairly presented), disclaimer (no opinion possible).' },
        { id: 'c-f-5', front: 'What level of assurance does an audit provide?', back: 'Reasonable assurance — not absolute — that the statements are free of material misstatement.' },
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
          stem: 'Which accounting treatment is permitted under IFRS but prohibited under US GAAP?',
          choices: ['Use of the LIFO inventory method', 'Upward revaluation of property, plant and equipment', 'Expensing of research costs as incurred'],
          answer: 1,
          explain: 'IFRS permits the revaluation model for PP&E, carrying assets at fair value. US GAAP requires historical cost less accumulated depreciation.',
          why: [
            'A is the reverse — LIFO is a US GAAP option, prohibited under IFRS.',
            'C is required under both frameworks. It is *development* costs that diverge.',
          ],
        },
        {
          id: 'q-fs-004', difficulty: 'hard',
          stem: 'An auditor concludes that a company\'s financial statements present fairly in all material respects, except that inventory is measured using a method inconsistent with the applicable standards. The auditor will most likely issue:',
          choices: ['an unqualified opinion', 'a qualified opinion', 'an adverse opinion'],
          answer: 1,
          explain: 'A qualified opinion states that the statements are fairly presented *except for* a specific matter. The departure is identified and contained rather than pervasive.',
          why: [
            'A requires no material exceptions at all.',
            'C is reserved for misstatements so pervasive that the statements as a whole do not present fairly.',
          ],
        },
        {
          id: 'q-fs-003', difficulty: 'expert',
          stem: 'A company capitalises a cost that should have been expensed. In the year of the transaction, the most likely effect is:',
          choices: [
            'higher net income, higher total assets, and higher cash flow from operations',
            'lower net income and lower cash flow from operations',
            'no effect on net income, but higher investing cash outflow',
          ],
          answer: 0,
          explain: 'Capitalising moves the cost onto the balance sheet: current-year expense falls, net income rises, and assets increase. Total cash is unchanged, but the outflow is classified as investing instead of operating — which inflates reported operating cash flow as well.',
          why: [
            'B reverses both effects.',
            'C is wrong because net income changes — only this year\'s depreciation reaches the income statement, not the full cost.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fsa-income',
      name: 'Analyzing Income Statements',
      los: [
        'Describe the general principles of revenue recognition and the five-step model',
        'Describe the general principles of expense recognition',
        'Describe the presentation of non-recurring items and changes in accounting policy',
        'Calculate and interpret basic and diluted earnings per share',
        'Describe comprehensive income and evaluate common-size income statements',
      ],
      lessons: [
        {
          id: 'fsa-income-l1',
          title: 'Recognising revenue and expenses',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'IFRS and US GAAP share a single, converged revenue standard built on one principle: recognise revenue when control of goods or services passes to the customer, in the amount the entity expects to be entitled to.' },
            {
              t: 'ol',
              x: [
                '**Identify the contract** with a customer.',
                '**Identify the performance obligations** — each distinct good or service promised.',
                '**Determine the transaction price**, including estimates of variable consideration.',
                '**Allocate the price** to the performance obligations based on relative standalone selling prices.',
                '**Recognise revenue** when (or as) each obligation is satisfied.',
              ],
            },
            {
              t: 'callout', label: 'Principal or agent?',
              x: 'If a company controls the good before transfer, it is the **principal** and reports gross revenue. If it merely arranges for another party to provide it, it is an **agent** and reports only its commission. The choice changes revenue dramatically but leaves profit unchanged — which is why growth-focused companies are scrutinised on it.',
            },
            { t: 'h', x: 'Expense recognition' },
            { t: 'p', x: 'Expenses follow the **matching principle**: costs are recognised in the period in which the related revenue is recognised. Where no direct link exists, costs are recognised as incurred or allocated systematically. Many expenses depend on estimates — bad debt allowances, warranty provisions, useful lives — and each estimate is a lever on reported earnings.' },
            { t: 'h', x: 'Non-recurring items and accounting changes' },
            {
              t: 'table',
              head: ['Item', 'Presentation'],
              rows: [
                ['Discontinued operations', 'Shown separately, net of tax, below income from continuing operations'],
                ['Unusual or infrequent items', 'Within continuing operations, pre-tax — still part of operating results'],
                ['Change in accounting policy', 'Applied **retrospectively**: prior periods restated for comparability'],
                ['Change in accounting estimate', 'Applied **prospectively**: current and future periods only'],
                ['Correction of a prior-period error', 'Prior periods restated, with disclosure'],
              ],
            },
          ],
        },
        {
          id: 'fsa-income-l2',
          title: 'Earnings per share and comprehensive income',
          minutes: 9,
          blocks: [
            {
              t: 'formula', name: 'Basic EPS',
              x: 'Basic EPS = (Net income − Preferred dividends) / Weighted average common shares',
            },
            { t: 'p', x: 'Shares are weighted by the fraction of the year they were outstanding. **Stock splits and stock dividends** are applied retroactively to the start of the year — they change the number of shares without bringing in new capital.' },
            { t: 'h', x: 'Diluted EPS' },
            { t: 'p', x: 'Diluted EPS shows what EPS would be if all dilutive securities were converted. Each security is tested separately, and **antidilutive** securities — those that would increase EPS — are excluded.' },
            {
              t: 'formula', name: 'Diluted EPS',
              x: 'Diluted EPS = (NI − Pref div + Convertible pref div + Convertible debt interest × (1 − t))\n              / (Weighted avg shares + Shares from conversion + Net option shares)',
            },
            {
              t: 'ul',
              x: [
                '**Convertible preferred** (if-converted method) — add back the preferred dividends, add the shares that would be issued.',
                '**Convertible bonds** (if-converted method) — add back after-tax interest, add the conversion shares.',
                '**Options and warrants** (treasury stock method) — assume exercise, and that the proceeds repurchase shares at the average market price. Only the net new shares enter the denominator. Options are dilutive only when the exercise price is below the average price.',
              ],
            },
            {
              t: 'example', title: 'Treasury stock method',
              x: '100,000 options, exercise price $20, average market price $25.\n\nProceeds = 100,000 × $20 = $2,000,000\nShares repurchased = $2,000,000 / $25 = 80,000\nNet new shares = 100,000 − 80,000 = 20,000',
            },
            { t: 'h', x: 'Comprehensive income' },
            { t: 'p', x: 'Comprehensive income = net income + **other comprehensive income** (OCI). OCI captures gains and losses that bypass the income statement: foreign currency translation adjustments, effective cash flow hedge gains and losses, unrealised gains on debt securities at fair value through OCI, and certain pension remeasurements. Analysts comparing firms should look at OCI, because two companies with the same net income can have very different total changes in shareholder wealth.' },
            { t: 'p', x: 'A **common-size income statement** expresses each line as a percentage of revenue, making margins comparable across companies of different sizes and across time.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-40', name: 'Basic EPS', expr: '(Net income − Preferred dividends) / Weighted average shares', note: 'Splits and stock dividends are applied retroactively.' },
        { id: 'f-f-41', name: 'Treasury stock method — net new shares', expr: 'n − (n × exercise price / average market price)', note: 'Only dilutive when exercise price < average price.' },
        { id: 'f-f-42', name: 'If-converted numerator (convertible debt)', expr: 'NI − Pref div + Interest × (1 − t)', note: 'Denominator adds the shares issued on conversion.' },
        { id: 'f-f-43', name: 'Comprehensive income', expr: 'Net income + Other comprehensive income', note: 'OCI: FX translation, cash flow hedges, FVOCI debt, pension remeasurements.' },
      ],
      cards: [
        { id: 'c-f-40', front: 'The five steps of revenue recognition', back: 'Identify contract → identify performance obligations → determine transaction price → allocate price → recognise when obligations are satisfied.' },
        { id: 'c-f-41', front: 'Change in accounting policy vs change in estimate', back: 'Policy change: retrospective (restate prior periods). Estimate change: prospective (current and future only).' },
        { id: 'c-f-42', front: 'Where are discontinued operations reported?', back: 'Separately, net of tax, below income from continuing operations.' },
        { id: 'c-f-43', front: 'Antidilutive security', back: 'One whose assumed conversion would increase EPS — excluded from diluted EPS.' },
        { id: 'c-f-44', front: 'Principal vs agent revenue', back: 'Principal controls the good and reports gross revenue; agent arranges it and reports only the net commission.' },
      ],
      questions: [
        {
          id: 'q-fs-040', difficulty: 'easy',
          stem: 'A company revises the estimated useful life of its machinery from 8 years to 10 years. This change should be accounted for:',
          choices: ['retrospectively, restating prior periods', 'prospectively, affecting current and future periods only', 'as a correction of a prior-period error'],
          answer: 1,
          explain: 'A useful life is an accounting estimate. Changes in estimates are applied prospectively: the remaining book value is depreciated over the revised remaining life, with no restatement.',
          why: [
            'A applies to changes in accounting *policy*, not estimates.',
            'C would require that the original estimate was a mistake, not a reasonable judgement later revised.',
          ],
        },
        {
          id: 'q-fs-041', difficulty: 'medium',
          vignette: 'A company earns net income of $10 million and pays $1 million of preferred dividends. It had 4 million common shares outstanding on 1 January and issued 2 million more on 1 July.',
          stem: 'Basic EPS for the year is closest to:',
          choices: ['$1.80', '$1.50', '$2.00'],
          answer: 0,
          explain: 'Weighted average shares = 4 million + 2 million × 6/12 = 5 million. Basic EPS = (10 − 1) / 5 = $1.80.',
          why: [
            'B divides by the 6 million year-end share count instead of the weighted average.',
            'C fails to deduct the preferred dividends from the numerator.',
          ],
        },
        {
          id: 'q-fs-042', difficulty: 'hard',
          vignette: 'Net income is $10 million. The company has 4 million weighted average common shares and convertible preferred stock paying $1 million of dividends, convertible into 1 million common shares.',
          stem: 'Diluted EPS is closest to:',
          choices: ['$2.25', '$2.00', '$1.80'],
          answer: 1,
          explain: 'Basic EPS = (10 − 1)/4 = $2.25. If converted, no preferred dividends are paid and 1 million shares are added: diluted EPS = 10/(4 + 1) = $2.00. Because $2.00 < $2.25, the preferred is dilutive and is included.',
          why: [
            'A is basic EPS.',
            'C adds the conversion shares but still deducts the preferred dividends — which would not be paid if conversion occurred.',
          ],
        },
        {
          id: 'q-fs-043', difficulty: 'expert',
          vignette: 'A company reports net income of $1,000,000 with 500,000 weighted average shares and no preferred stock. It has 100,000 employee options outstanding with an exercise price of $20. The average share price during the year was $25.',
          stem: 'Diluted EPS is closest to:',
          choices: ['$1.92', '$1.67', '$2.00'],
          answer: 0,
          explain: 'Treasury stock method: proceeds of $2,000,000 repurchase 80,000 shares at $25, so net new shares = 20,000. Diluted EPS = 1,000,000 / 520,000 = $1.92.',
          why: [
            'B adds all 100,000 option shares without assuming the proceeds are used to repurchase shares.',
            'C is basic EPS, which ignores the dilutive options entirely.',
          ],
        },
        {
          id: 'q-fs-044', difficulty: 'medium',
          stem: 'An online marketplace arranges for third-party sellers to ship goods directly to customers and never takes control of the inventory. It should most likely recognise:',
          choices: ['the full sale price as revenue, as the principal', 'only its fee or commission as revenue, as an agent', 'no revenue until the third-party seller is paid'],
          answer: 1,
          explain: 'An entity that does not control the goods before transfer is acting as an agent and recognises only the net amount it earns for arranging the sale.',
          why: [
            'A would require the marketplace to control the goods — holding inventory risk and setting terms.',
            'C confuses the timing of cash settlement with the satisfaction of the performance obligation.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fsa-balance',
      name: 'Analyzing Balance Sheets',
      los: [
        'Describe the elements of the balance sheet and its classification of current and non-current items',
        'Describe different measurement bases for assets and liabilities',
        'Describe the accounting for intangible assets, including goodwill',
        'Describe the classification and measurement of financial instruments',
        'Describe the components of equity and calculate common-size balance sheet ratios',
      ],
      lessons: [
        {
          id: 'fsa-balance-l1',
          title: 'What the balance sheet measures, and how',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'A balance sheet is presented as current vs non-current (assets expected to be realised, or liabilities settled, within one year or one operating cycle) or, where that is more informative — as for banks — in order of liquidity. Current items tell you about near-term solvency; non-current items about productive capacity and long-term obligations.' },
            { t: 'h', x: 'Measurement bases' },
            {
              t: 'table',
              head: ['Basis', 'Typical items'],
              rows: [
                ['Historical cost', 'Most PP&E under US GAAP; land; inventory (subject to write-downs)'],
                ['Amortised cost', 'Loans and bonds held to collect contractual cash flows'],
                ['Fair value', 'Trading securities, derivatives, investment property (IFRS option)'],
              ],
            },
            {
              t: 'callout', label: 'Mixed measurement',
              x: 'A balance sheet adds together numbers measured on different bases. Equity is therefore not an estimate of what the company is worth — it is the residual of a patchwork, which is exactly why price-to-book comparisons need care.',
            },
            { t: 'h', x: 'Intangible assets and goodwill' },
            {
              t: 'ul',
              x: [
                '**Identifiable intangibles** — patents, licences, customer lists. Acquired intangibles are recognised at cost; finite-lived ones are amortised, indefinite-lived ones tested for impairment.',
                '**Internally generated intangibles** — brands and research are generally expensed, not capitalised. (IFRS capitalises development costs once feasibility criteria are met.)',
                '**Goodwill** — arises only in an acquisition, as the excess of purchase price over the fair value of identifiable net assets acquired. It is not amortised, but tested at least annually for impairment.',
              ],
            },
            {
              t: 'formula', name: 'Goodwill',
              x: 'Goodwill = Purchase price − Fair value of identifiable net assets acquired',
            },
            {
              t: 'callout', label: 'Comparability trap', kind: 'warn',
              x: 'A company that builds a famous brand internally shows little of its value on the balance sheet. A company that buys a similar brand shows it at cost. Two economically similar businesses can report very different assets and returns on assets.',
            },
            { t: 'h', x: 'Financial instruments (IFRS 9)' },
            {
              t: 'table',
              head: ['Category', 'Measurement', 'Unrealised gains and losses'],
              rows: [
                ['Amortised cost', 'Amortised cost', 'Not recognised'],
                ['Fair value through OCI', 'Fair value', 'Other comprehensive income'],
                ['Fair value through profit or loss', 'Fair value', 'Net income'],
              ],
            },
            { t: 'h', x: 'Equity' },
            { t: 'p', x: 'Equity comprises contributed capital, retained earnings, accumulated other comprehensive income, **treasury shares** (repurchased shares, shown as a deduction), and **non-controlling interest** — the share of subsidiaries\' equity owned by outside shareholders.' },
            { t: 'p', x: 'A **common-size balance sheet** expresses every item as a percentage of total assets, revealing capital structure and asset mix independently of company size.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-50', name: 'Goodwill', expr: 'Purchase price − FV of identifiable net assets', note: 'Not amortised; tested annually for impairment.' },
        { id: 'f-f-51', name: 'Common-size balance sheet', expr: 'Each item / Total assets', note: 'Removes size effects for comparison.' },
      ],
      cards: [
        { id: 'c-f-50', front: 'How is goodwill measured and treated afterwards?', back: 'Purchase price minus fair value of identifiable net assets. Not amortised; tested for impairment at least annually.' },
        { id: 'c-f-51', front: 'Where do unrealised gains on FVOCI securities go?', back: 'Other comprehensive income — not net income.' },
        { id: 'c-f-52', front: 'Are internally generated brands capitalised?', back: 'No — generally expensed. Only acquired intangibles are recognised at cost.' },
        { id: 'c-f-53', front: 'Treasury shares on the balance sheet', back: 'A deduction from equity. Repurchases reduce equity and have no effect on net income.' },
      ],
      questions: [
        {
          id: 'q-fs-050', difficulty: 'easy',
          stem: 'A company pays $500 million to acquire a business whose identifiable net assets have a book value of $300 million and a fair value of $380 million. The goodwill recognised is closest to:',
          choices: ['$120 million', '$200 million', '$0'],
          answer: 0,
          explain: 'Goodwill = purchase price − fair value of identifiable net assets = 500 − 380 = $120 million.',
          why: [
            'B uses book value instead of fair value.',
            'C would be correct only if the price equalled the fair value of the net assets.',
          ],
        },
        {
          id: 'q-fs-051', difficulty: 'medium',
          stem: 'Under IFRS 9, an unrealised gain on a debt security classified at fair value through other comprehensive income is recognised:',
          choices: ['in net income', 'in other comprehensive income', 'nowhere, until the security is sold'],
          answer: 1,
          explain: 'FVOCI securities are carried at fair value, with unrealised gains and losses recorded in OCI and accumulated in equity rather than passing through net income.',
          why: [
            'A describes fair value through profit or loss.',
            'C describes amortised cost, where fair value changes are not recognised.',
          ],
        },
        {
          id: 'q-fs-052', difficulty: 'hard',
          stem: 'A company uses cash to repurchase its own shares. The most likely effect is:',
          choices: [
            'lower net income and lower total assets',
            'lower total equity, no effect on net income, and a higher debt-to-equity ratio',
            'higher equity, because treasury shares are recorded as an asset',
          ],
          answer: 1,
          explain: 'Treasury shares are a deduction from equity. Cash falls and equity falls by the same amount, net income is unaffected, and with debt unchanged the debt-to-equity ratio rises.',
          why: [
            'A is wrong on net income — share repurchases are capital transactions, not expenses.',
            'C misclassifies treasury shares; they are never shown as an asset.',
          ],
        },
        {
          id: 'q-fs-053', difficulty: 'expert',
          stem: 'Company A built its well-known consumer brand internally over decades. Company B acquired a brand of similar value last year. Compared with Company B, Company A will most likely report:',
          choices: [
            'higher total assets and a lower return on assets',
            'lower total assets and a higher return on assets',
            'the same assets, since both brands have the same economic value',
          ],
          answer: 1,
          explain: 'Internally generated brands are expensed as the costs are incurred, so Company A\'s brand is largely absent from its balance sheet. Company B recognises its acquired brand at cost. A therefore shows a smaller asset base, which mechanically inflates its return on assets relative to B.',
          why: [
            'A reverses the effect of the two accounting treatments.',
            'C ignores that the balance sheet records acquired intangibles but not internally generated ones.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fsa-cashflow',
      name: 'Analyzing Statements of Cash Flows',
      los: [
        'Compare the direct and indirect methods of presenting operating cash flow',
        'Classify cash flows as operating, investing or financing under IFRS and US GAAP',
        'Describe the disclosure of non-cash investing and financing activities',
        'Calculate and interpret free cash flow to the firm, free cash flow to equity, and cash flow ratios',
      ],
      lessons: [
        {
          id: 'fsa-cashflow-l1',
          title: 'Rebuilding operating cash flow',
          minutes: 9,
          blocks: [
            {
              t: 'formula', name: 'Indirect method',
              x: 'CFO = Net income\n    + Non-cash charges (depreciation, amortisation, impairments)\n    − Gains on asset sales  + Losses on asset sales\n    − Increases in operating assets  + Decreases\n    + Increases in operating liabilities  − Decreases',
            },
            {
              t: 'callout', label: 'The intuition that removes the memorisation',
              x: 'An increase in an **asset** (inventory, receivables) means cash left the business — subtract it. An increase in a **liability** (payables) means cash was retained — add it. Gains on asset sales are removed because the whole proceeds belong in investing.',
            },
            { t: 'h', x: 'The direct method' },
            { t: 'p', x: 'The direct method reports actual cash receipts and payments. Both standards encourage it; few companies use it. You reconstruct it line by line by adjusting income statement items for balance sheet changes:' },
            {
              t: 'formula', name: 'Direct method building blocks',
              x: 'Cash from customers   = Revenue − Increase in receivables\n\nPurchases             = COGS + Increase in inventory\nCash paid to suppliers = Purchases − Increase in accounts payable\n\nCash paid to employees = Wage expense − Increase in wages payable',
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
                ['Taxes paid', 'Operating, unless tied to investing/financing', 'Operating'],
              ],
            },
            { t: 'p', x: '**Non-cash transactions** — converting debt to equity, acquiring an asset in exchange for shares, or exchanging one asset for another — do not appear on the statement itself but must be disclosed, because they change the company\'s capital structure or asset base without any cash moving.' },
          ],
        },
        {
          id: 'fsa-cashflow-l2',
          title: 'Free cash flow and cash flow ratios',
          minutes: 7,
          blocks: [
            {
              t: 'formula', name: 'Free cash flow',
              x: 'FCFF = CFO + Interest × (1 − tax rate) − Capital expenditure\nFCFE = CFO − Capital expenditure + Net borrowing',
            },
            { t: 'p', x: 'FCFF is cash available to *all* providers of capital, so interest is added back net of its tax shield. FCFE is what remains for shareholders after lenders have been paid and new borrowing received.' },
            {
              t: 'table',
              head: ['Ratio', 'Formula', 'What it tells you'],
              rows: [
                ['Cash flow to revenue', 'CFO / Net revenue', 'Operating cash generated per unit of sales'],
                ['Cash return on assets', 'CFO / Average total assets', 'Cash-generating ability of the asset base'],
                ['Cash to income', 'CFO / Operating income', 'Earnings quality — how much profit becomes cash'],
                ['Debt coverage', 'CFO / Total debt', 'Ability to repay debt from operations'],
                ['Interest coverage', '(CFO + Interest paid + Taxes paid) / Interest paid', 'Ability to service interest'],
                ['Reinvestment', 'CFO / Cash paid for long-term assets', 'Ability to fund capex internally'],
              ],
            },
            {
              t: 'callout', label: 'The pattern that matters', kind: 'warn',
              x: 'A mature, healthy company generates most of its cash from operations and uses it for investing and financing. A company persistently funding operations from borrowing or asset sales — however profitable it looks — is on borrowed time.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-20', name: 'FCFF from CFO', expr: 'FCFF = CFO + Int(1 − t) − CapEx', note: 'Cash to all capital providers.' },
        { id: 'f-f-21', name: 'FCFE from CFO', expr: 'FCFE = CFO − CapEx + Net borrowing', note: 'Cash to equity holders after debt service.' },
        { id: 'f-f-22', name: 'FCFE from FCFF', expr: 'FCFE = FCFF − Int(1 − t) + Net borrowing', note: 'Bridge between the two measures.' },
        { id: 'f-f-23', name: 'Cash collected from customers', expr: 'Revenue − Increase in accounts receivable', note: 'Direct method.' },
        { id: 'f-f-24', name: 'Cash paid to suppliers', expr: 'COGS + Increase in inventory − Increase in accounts payable', note: 'Direct method.' },
      ],
      cards: [
        { id: 'c-f-20', front: 'Indirect method: increase in accounts receivable', back: 'Subtract it — revenue was recorded but cash not yet collected.' },
        { id: 'c-f-21', front: 'Indirect method: increase in accounts payable', back: 'Add it — the expense was recorded but cash has not yet left.' },
        { id: 'c-f-22', front: 'Where is interest paid classified?', back: 'US GAAP: operating. IFRS: operating or financing.' },
        { id: 'c-f-23', front: 'FCFF formula from CFO', back: 'FCFF = CFO + Interest × (1 − tax rate) − CapEx.' },
        { id: 'c-f-24', front: 'How are non-cash investing and financing transactions reported?', back: 'Excluded from the cash flow statement but disclosed in a note or supplementary schedule.' },
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
            'C is wrong because inventory is an operating working-capital item.',
          ],
        },
        {
          id: 'q-fs-021', difficulty: 'medium',
          vignette: 'Net income $900,000; depreciation $200,000; accounts receivable increased $150,000; accounts payable increased $80,000; gain on sale of equipment $50,000.',
          stem: 'Cash flow from operations is closest to:',
          choices: ['$980,000', '$1,080,000', '$1,180,000'],
          answer: 0,
          explain: 'CFO = 900,000 + 200,000 − 50,000 − 150,000 + 80,000 = $980,000.',
          why: [
            'B fails to remove the $50,000 gain.',
            'C adds the gain instead of subtracting it and mishandles the receivables movement.',
          ],
        },
        {
          id: 'q-fs-023', difficulty: 'medium',
          stem: 'A company converts $10 million of its bonds into common shares. On the statement of cash flows this transaction is most likely:',
          choices: ['a $10 million financing outflow and a $10 million financing inflow', 'excluded from the statement and disclosed separately as a non-cash transaction', 'reported as an operating cash flow'],
          answer: 1,
          explain: 'No cash changes hands in a debt-for-equity conversion. It is excluded from the statement itself and disclosed as a non-cash financing activity.',
          why: [
            'A invents cash flows that did not occur.',
            'C misclassifies a capital structure transaction as operating.',
          ],
        },
        {
          id: 'q-fs-022', difficulty: 'hard',
          stem: 'A company reports CFO of $5.0 million, interest paid of $800,000, capital expenditure of $2.0 million, and net new borrowing of $500,000. Its tax rate is 25%. FCFF is closest to:',
          choices: ['$3.0 million', '$3.6 million', '$3.5 million'],
          answer: 1,
          explain: 'FCFF = CFO + Int(1 − t) − CapEx = 5.0 + 0.6 − 2.0 = $3.6 million. Net borrowing belongs in FCFE, not FCFF.',
          why: [
            'A omits the after-tax interest add-back.',
            'C includes net borrowing or mishandles the tax adjustment on interest.',
          ],
        },
        {
          id: 'q-fs-024', difficulty: 'expert',
          vignette: 'Cost of goods sold was $500,000. During the year inventory decreased by $20,000 and accounts payable increased by $30,000.',
          stem: 'Using the direct method, cash paid to suppliers is closest to:',
          choices: ['$450,000', '$510,000', '$490,000'],
          answer: 0,
          explain: 'Purchases = COGS + change in inventory = 500,000 − 20,000 = $480,000. Cash paid = purchases − increase in payables = 480,000 − 30,000 = $450,000. Drawing down inventory and deferring payment both reduce the cash actually paid.',
          why: [
            'B adds both adjustments, reversing the direction of each.',
            'C adjusts for the payables increase but adds the inventory decrease instead of subtracting it.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fsa-inventory',
      name: 'Analysis of Inventories',
      los: [
        'Calculate and compare cost of sales, gross profit and ending inventory under FIFO, LIFO and weighted average cost',
        'Describe the effects of inventory method choice on financial statements and ratios',
        'Convert a LIFO company\'s statements to FIFO and describe LIFO liquidation',
        'Describe the measurement of inventory at the lower of cost and net realisable value',
      ],
      lessons: [
        {
          id: 'fsa-inventory-l1',
          title: 'When prices rise, the method decides the answer',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'Assume **rising prices and stable or rising inventory quantities** — the standard exam setting. Under LIFO, the most recently purchased (most expensive) units are charged to cost of goods sold. Under FIFO, the oldest (cheapest) units are. Weighted average cost falls in between.' },
            {
              t: 'table',
              head: ['Rising prices', 'LIFO', 'FIFO'],
              rows: [
                ['Cost of goods sold', 'Higher', 'Lower'],
                ['Gross profit and net income', 'Lower', 'Higher'],
                ['Ending inventory', 'Lower (old costs)', 'Higher (recent costs)'],
                ['Income taxes paid', 'Lower', 'Higher'],
                ['Operating cash flow', 'Higher (tax saving)', 'Lower'],
                ['Inventory turnover', 'Higher', 'Lower'],
                ['Current ratio', 'Lower', 'Higher'],
              ],
            },
            {
              t: 'callout', label: 'The one-line summary',
              x: 'LIFO gives a better **income statement** (current costs matched against current revenue) and a worse **balance sheet** (stale inventory values). FIFO does the opposite. Cash is higher under LIFO only because the tax bill is lower.',
            },
            {
              t: 'formula', name: 'Converting LIFO to FIFO',
              x: 'FIFO inventory  = LIFO inventory + LIFO reserve\nFIFO COGS       = LIFO COGS − Increase in LIFO reserve\nFIFO net income = LIFO NI + Increase in LIFO reserve × (1 − tax rate)',
            },
            { t: 'h', x: 'LIFO liquidation' },
            { t: 'p', x: 'If a LIFO company sells more than it buys, it dips into old, low-cost inventory layers. Those stale costs flow into COGS, producing an artificially high gross margin that cannot recur. The tell-tale sign is a **falling LIFO reserve** during a period of rising prices. Analysts should strip the effect out of sustainable earnings — and be wary of management deliberately delaying purchases to manufacture it.' },
            { t: 'h', x: 'Lower of cost and net realisable value' },
            {
              t: 'formula', name: 'Net realisable value',
              x: 'NRV = Estimated selling price − Estimated costs to complete and sell\n\nWrite-down = Carrying cost − NRV (if NRV is below cost)',
            },
            {
              t: 'table',
              head: ['', 'IFRS', 'US GAAP'],
              rows: [
                ['Measurement', 'Lower of cost and NRV', 'Lower of cost and NRV (FIFO, average); lower of cost or market (LIFO, retail)'],
                ['Reversal of write-down', 'Permitted, up to original cost', 'Prohibited'],
              ],
            },
            { t: 'p', x: 'Periodic and perpetual inventory systems give the same results under FIFO and specific identification, but can give different results under LIFO and weighted average, because the timing of the cost calculation changes which purchases are "last" or included in the average.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-10', name: 'LIFO reserve conversion', expr: 'FIFO inventory = LIFO inventory + LIFO reserve', note: 'Used to compare a LIFO firm with FIFO peers.' },
        { id: 'f-f-11', name: 'COGS identity', expr: 'COGS = Beginning inventory + Purchases − Ending inventory', note: 'Anything that raises ending inventory lowers COGS.' },
        { id: 'f-f-13', name: 'FIFO COGS from LIFO', expr: 'FIFO COGS = LIFO COGS − Increase in LIFO reserve', note: 'Rising prices: FIFO COGS is lower.' },
        { id: 'f-f-14', name: 'Net realisable value', expr: 'NRV = Selling price − Costs to complete and sell', note: 'Inventory is written down when NRV falls below cost.' },
      ],
      cards: [
        { id: 'c-f-10', front: 'Rising prices: which method gives higher net income?', back: 'FIFO — cheaper old costs flow to COGS. LIFO gives higher COGS and lower income, but lower taxes.' },
        { id: 'c-f-11', front: 'Converting LIFO inventory to FIFO', back: 'FIFO inventory = LIFO inventory + LIFO reserve.' },
        { id: 'c-f-14', front: 'LIFO liquidation — what happens and how do you spot it?', back: 'Old low-cost layers flow into COGS, inflating margins unsustainably. Signal: the LIFO reserve falls while prices are rising.' },
        { id: 'c-f-15', front: 'Rising prices: which method gives higher inventory turnover?', back: 'LIFO — higher COGS in the numerator and lower inventory in the denominator.' },
      ],
      questions: [
        {
          id: 'q-fs-010', difficulty: 'easy',
          stem: 'During a period of rising prices and stable inventory quantities, a company using LIFO rather than FIFO will most likely report:',
          choices: ['higher net income', 'higher cost of goods sold', 'higher ending inventory'],
          answer: 1,
          explain: 'LIFO charges the most recent — and most expensive — units to cost of goods sold, raising COGS and lowering both net income and ending inventory.',
          why: [
            'A is the FIFO outcome.',
            'C is also FIFO: its ending inventory carries the recent, higher costs.',
          ],
        },
        {
          id: 'q-fs-011', difficulty: 'medium',
          stem: 'A company reports LIFO inventory of $800,000 and a LIFO reserve of $150,000. Its inventory on a FIFO basis is closest to:',
          choices: ['$650,000', '$800,000', '$950,000'],
          answer: 2,
          explain: 'FIFO inventory = LIFO inventory + LIFO reserve = $950,000.',
          why: [
            'A subtracts the reserve — the conversion in the wrong direction.',
            'B ignores the reserve entirely.',
          ],
        },
        {
          id: 'q-fs-014', difficulty: 'medium',
          stem: 'A company reporting under IFRS holds inventory with a cost of $100. The estimated selling price is $110 and the estimated costs to complete and sell are $15. The required write-down is closest to:',
          choices: ['$5', '$10', '$0'],
          answer: 0,
          explain: 'NRV = 110 − 15 = $95. Because NRV is below cost, inventory is written down by 100 − 95 = $5.',
          why: [
            'B compares cost with the gross selling price instead of NRV, and gets the direction wrong.',
            'C ignores the costs to complete and sell, which bring NRV below cost.',
          ],
        },
        {
          id: 'q-fs-015', difficulty: 'hard',
          stem: 'In a period of rising prices, a LIFO company\'s gross margin rises sharply while its LIFO reserve declines. The most likely explanation is:',
          choices: [
            'a genuine improvement in pricing power',
            'a LIFO liquidation, as old low-cost inventory layers flowed into cost of goods sold',
            'a switch from LIFO to FIFO during the year',
          ],
          answer: 1,
          explain: 'A falling LIFO reserve during rising prices means old, cheap inventory layers were sold. Their low historical costs inflate gross margin temporarily — a non-recurring boost analysts should exclude from sustainable earnings.',
          why: [
            'A would not cause the LIFO reserve to shrink.',
            'C is not indicated; a method change would be disclosed and would eliminate, not merely reduce, the reserve.',
          ],
        },
        {
          id: 'q-fs-013', difficulty: 'expert',
          vignette: 'A company using LIFO reports net income of $4.0 million. Its LIFO reserve increased from $2.0 million to $2.6 million during the year. The tax rate is 25%.',
          stem: 'Net income restated on a FIFO basis is closest to:',
          choices: ['$4.45 million', '$4.60 million', '$3.55 million'],
          answer: 0,
          explain: 'The $0.6 million increase in the reserve is the additional pre-tax income FIFO would have reported. After tax: 0.6 × 0.75 = $0.45 million. FIFO net income ≈ 4.0 + 0.45 = $4.45 million.',
          why: [
            'B adds the full pre-tax change without applying tax.',
            'C subtracts the adjustment; with rising prices, FIFO income is higher.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fsa-lta',
      name: 'Analysis of Long-Term Assets',
      los: [
        'Compare the financial statement effects of capitalising versus expensing costs, including capitalised interest',
        'Describe the accounting for intangible assets, including research and development',
        'Compare depreciation and amortisation methods and the effect of estimates',
        'Describe impairment, revaluation and derecognition of long-lived assets',
        'Calculate and interpret average age, remaining useful life and total useful life',
      ],
      lessons: [
        {
          id: 'fsa-lta-l1',
          title: 'Capitalise or expense — and what follows',
          minutes: 9,
          blocks: [
            {
              t: 'table',
              head: ['Year of the expenditure', 'Capitalise', 'Expense'],
              rows: [
                ['Net income', 'Higher (only depreciation hits)', 'Lower'],
                ['Total assets and equity', 'Higher', 'Lower'],
                ['Cash flow from operations', 'Higher (outflow is investing)', 'Lower'],
                ['Cash flow from investing', 'Lower', 'Unaffected'],
                ['Income variability', 'Smoother', 'More volatile'],
              ],
            },
            { t: 'p', x: 'In later years the pattern reverses: the capitalising company carries depreciation the expensing company does not. Total cash is identical either way — only classification and timing differ.' },
            { t: 'h', x: 'Capitalised interest' },
            { t: 'p', x: 'Interest incurred while constructing an asset for the company\'s own use is capitalised into the asset\'s cost, then depreciated. The effects are subtle: current interest expense is lower, so **interest coverage looks better**, and because the interest becomes part of an investing outflow, **CFO is overstated**. Analysts typically reverse capitalised interest when assessing solvency.' },
            { t: 'h', x: 'Research and development' },
            { t: 'p', x: 'Under IFRS, research costs are expensed and development costs are capitalised once technical feasibility and other criteria are met. Under US GAAP, R&D is generally expensed — except software developed for sale, which is capitalised after technological feasibility is established.' },
            { t: 'h', x: 'Depreciation' },
            {
              t: 'formula', name: 'Depreciation methods',
              x: 'Straight line:      (Cost − Salvage) / Useful life\nDouble declining:   (2 / Useful life) × Beginning book value\n                    (salvage ignored until book value reaches it)\nUnits of production: (Cost − Salvage) × Units this period / Total units',
            },
            { t: 'p', x: 'Over an asset\'s life, total depreciation is the same under every method; only the timing differs. A longer useful life or higher salvage value lowers annual depreciation and raises reported income now.' },
            { t: 'h', x: 'Impairment, revaluation and derecognition' },
            {
              t: 'table',
              head: ['', 'IFRS', 'US GAAP'],
              rows: [
                ['Impairment test', 'Carrying amount > recoverable amount (higher of fair value less costs to sell and value in use)', 'Step 1: carrying amount > undiscounted future cash flows. Step 2: write down to fair value'],
                ['Reversal', 'Permitted', 'Prohibited for assets held for use'],
                ['Revaluation model', 'Permitted', 'Prohibited'],
              ],
            },
            { t: 'p', x: 'Under the IFRS revaluation model, an **increase** goes to OCI as a revaluation surplus — unless it reverses a previous loss recognised in profit. A **decrease** goes to profit — unless it reverses a previous surplus. On sale or disposal, the gain or loss equals proceeds minus carrying amount.' },
            { t: 'h', x: 'Reading age from disclosures' },
            {
              t: 'formula', name: 'Asset age estimates (straight-line)',
              x: 'Average age          = Accumulated depreciation / Annual depreciation\nRemaining useful life = Net PP&E / Annual depreciation\nTotal useful life     = Gross PP&E / Annual depreciation',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-12', name: 'Double declining balance', expr: 'Depreciation = (2 / useful life) × beginning book value', note: 'Salvage value is ignored until book value reaches it.' },
        { id: 'f-f-60', name: 'Gain or loss on disposal', expr: 'Proceeds − Carrying amount', note: 'Carrying amount = cost − accumulated depreciation − impairments.' },
        { id: 'f-f-61', name: 'Average age of PP&E', expr: 'Accumulated depreciation / Annual depreciation', note: 'Older assets may signal upcoming capex.' },
        { id: 'f-f-62', name: 'Remaining useful life', expr: 'Net PP&E / Annual depreciation', note: 'Assumes straight-line depreciation.' },
        { id: 'f-f-63', name: 'IFRS recoverable amount', expr: 'max(Fair value less costs to sell, Value in use)', note: 'Impairment if carrying amount exceeds it.' },
      ],
      cards: [
        { id: 'c-f-13', front: 'Effect of a longer estimated useful life', back: 'Lower annual depreciation → higher reported income now, lower later. Total depreciation is unchanged.' },
        { id: 'c-f-12', front: 'Impairment reversals', back: 'IFRS permits reversal; US GAAP prohibits it for assets held for use.' },
        { id: 'c-f-60', front: 'Effect of capitalised interest on analysis', back: 'Interest coverage looks higher and CFO is overstated (interest becomes an investing outflow).' },
        { id: 'c-f-61', front: 'US GAAP impairment test', back: 'Recoverability: carrying amount vs undiscounted future cash flows. If it fails, write down to fair value.' },
        { id: 'c-f-62', front: 'IFRS revaluation increase', back: 'To OCI as revaluation surplus — unless it reverses a previous impairment recognised in profit.' },
      ],
      questions: [
        {
          id: 'q-fs-060', difficulty: 'easy',
          stem: 'A machine that cost $50,000 has accumulated depreciation of $35,000. It is sold for $18,000. The gain or loss on sale is closest to:',
          choices: ['gain of $3,000', 'gain of $18,000', 'loss of $32,000'],
          answer: 0,
          explain: 'Carrying amount = 50,000 − 35,000 = $15,000. Gain = 18,000 − 15,000 = $3,000.',
          why: [
            'B treats the entire proceeds as a gain, ignoring the carrying amount.',
            'C compares proceeds with original cost rather than carrying amount.',
          ],
        },
        {
          id: 'q-fs-061', difficulty: 'medium',
          stem: 'An asset costs $100,000, has a 5-year useful life and a $10,000 salvage value. Using double declining balance, depreciation in year 2 is closest to:',
          choices: ['$24,000', '$40,000', '$18,000'],
          answer: 0,
          explain: 'Rate = 2/5 = 40%. Year 1: 40% × 100,000 = 40,000, leaving 60,000. Year 2: 40% × 60,000 = $24,000. Salvage value is ignored until book value approaches it.',
          why: [
            'B is year 1 depreciation.',
            'C is straight-line depreciation, (100,000 − 10,000)/5.',
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
          explain: 'Front-loaded expense lowers net income, reduces net book value of assets, and lowers retained earnings and equity — raising debt-to-equity.',
          why: [
            'B gets the asset effect backwards.',
            'C describes straight-line relative to accelerated.',
          ],
        },
        {
          id: 'q-fs-062', difficulty: 'hard',
          stem: 'A company capitalises interest on a new headquarters it is constructing for its own use. Compared with expensing that interest, in the current year the company will most likely report:',
          choices: [
            'a higher interest coverage ratio and higher cash flow from operations',
            'a lower interest coverage ratio and lower cash flow from operations',
            'no change in either measure, since total interest paid is the same',
          ],
          answer: 0,
          explain: 'Capitalising removes the interest from current expense, raising coverage. And because the interest paid is classified as part of the investing outflow for the asset, cash flow from operations rises too — which is why analysts often reverse it.',
          why: [
            'B reverses both effects.',
            'C ignores that classification, not total cash, drives both ratios.',
          ],
        },
        {
          id: 'q-fs-063', difficulty: 'expert',
          vignette: 'Under US GAAP, an asset has a carrying amount of $800. Its expected undiscounted future cash flows are $850, and its fair value is $700.',
          stem: 'The impairment loss recognised is closest to:',
          choices: ['$0', '$100', '$150'],
          answer: 0,
          explain: 'US GAAP first applies a recoverability test: an impairment exists only if the carrying amount exceeds undiscounted future cash flows. Here $800 < $850, so the asset is recoverable and no loss is recognised — even though fair value is lower.',
          why: [
            'B measures carrying amount against fair value without first passing the recoverability test.',
            'C compares undiscounted cash flows with fair value, which is not a defined measurement.',
          ],
        },
        {
          id: 'q-fs-064', difficulty: 'expert',
          stem: 'A company reports gross PP&E of $900 million, accumulated depreciation of $360 million and annual straight-line depreciation of $60 million. The estimated remaining useful life of its assets is closest to:',
          choices: ['9 years', '6 years', '15 years'],
          answer: 0,
          explain: 'Remaining useful life = net PP&E / annual depreciation = (900 − 360)/60 = 9 years.',
          why: [
            'B is the average age: accumulated depreciation / annual depreciation.',
            'C is the total useful life: gross PP&E / annual depreciation.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fsa-liabilities',
      name: 'Topics in Long-Term Liabilities and Equity',
      los: [
        'Calculate the effects of debt issuance and amortisation using the effective interest method',
        'Describe the derecognition of debt and disclosures relating to debt',
        'Calculate and interpret lease accounting for lessees and lessors',
        'Compare defined contribution and defined benefit pension plans',
        'Describe the financial statement presentation of share-based compensation',
      ],
      lessons: [
        {
          id: 'fsa-liabilities-l1',
          title: 'Bonds, leases, pensions and share-based pay',
          minutes: 11,
          blocks: [
            { t: 'h', x: 'Bonds at amortised cost' },
            { t: 'p', x: 'A bond is recorded at the proceeds received. Under the **effective interest method**, interest expense each period equals the market rate at issuance multiplied by the carrying amount. The difference between that expense and the coupon paid amortises any premium or discount.' },
            {
              t: 'formula', name: 'Effective interest method',
              x: 'Interest expense = Market rate at issuance × Beginning carrying amount\nCoupon paid      = Coupon rate × Face value\n\nDiscount bond: expense > coupon, carrying amount rises toward par\nPremium bond:  expense < coupon, carrying amount falls toward par',
            },
            { t: 'p', x: 'If debt is repaid early, a gain or loss equals the carrying amount minus the amount paid, reported in continuing operations. Disclosures of maturities, rates and **covenants** matter enormously: a covenant breach can accelerate repayment of the entire debt.' },
            { t: 'h', x: 'Leases — lessee' },
            {
              t: 'table',
              head: ['', 'IFRS 16 (single model)', 'US GAAP finance lease', 'US GAAP operating lease'],
              rows: [
                ['Balance sheet', 'Right-of-use asset and lease liability', 'Right-of-use asset and lease liability', 'Right-of-use asset and lease liability'],
                ['Income statement', 'Depreciation + interest (front-loaded)', 'Depreciation + interest (front-loaded)', 'Single straight-line lease expense'],
                ['Cash flow — principal', 'Financing', 'Financing', 'Operating (entire payment)'],
                ['Cash flow — interest', 'Operating or financing', 'Operating', 'Operating'],
              ],
            },
            {
              t: 'callout', label: 'Why classification still matters',
              x: 'Both frameworks now put nearly all leases on the balance sheet. But a US GAAP operating lease reports the whole payment in operating cash flow, while a finance lease sends the principal portion to financing — so the finance lease shows **higher CFO** for identical economics.',
            },
            { t: 'p', x: 'For **lessors**, a finance (or sales-type) lease derecognises the asset and records a lease receivable, recognising interest income over time. An operating lease keeps the asset on the lessor\'s books, which depreciates it and records rental income.' },
            { t: 'h', x: 'Pensions' },
            {
              t: 'ul',
              x: [
                '**Defined contribution** — the employer promises a contribution, not a benefit. Pension expense equals the contribution; no further liability exists. The employee bears the investment risk.',
                '**Defined benefit** — the employer promises a future benefit. It bears the investment and longevity risk, and reports the **funded status**: present value of the obligation minus fair value of plan assets.',
              ],
            },
            {
              t: 'formula', name: 'Defined benefit funded status',
              x: 'Net pension liability (asset) = PV of defined benefit obligation − Fair value of plan assets',
            },
            { t: 'p', x: 'Under IFRS, service cost and net interest are recognised in profit, while remeasurements (actuarial gains and losses, return on assets beyond the discount rate) go to OCI and are never recycled. US GAAP recognises service cost, interest cost and the *expected* return on assets in profit, with actuarial gains and losses initially in OCI and amortised into profit over time.' },
            { t: 'h', x: 'Share-based compensation' },
            { t: 'p', x: 'Stock grants and options are measured at **fair value on the grant date** and expensed over the vesting period. The expense is non-cash, which is why companies like to exclude it from "adjusted" earnings — and why analysts generally should not, since it represents a real transfer of value to employees.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-70', name: 'Bond interest expense', expr: 'Market rate at issuance × Beginning carrying amount', note: 'Discount bond: expense exceeds coupon and carrying value rises.' },
        { id: 'f-f-71', name: 'Net pension liability', expr: 'PV of obligation − Fair value of plan assets', note: 'Positive = underfunded.' },
        { id: 'f-f-72', name: 'Gain on debt extinguishment', expr: 'Carrying amount − Amount paid to redeem', note: 'Reported within continuing operations.' },
      ],
      cards: [
        { id: 'c-f-70', front: 'Interest expense on a bond issued at a discount', back: 'Greater than the coupon paid; the difference amortises the discount and raises the carrying amount toward par.' },
        { id: 'c-f-71', front: 'US GAAP operating lease — cash flow classification', back: 'The entire lease payment is an operating outflow.' },
        { id: 'c-f-72', front: 'Defined contribution plan expense', back: 'Equals the employer\'s contribution for the period. No further obligation.' },
        { id: 'c-f-73', front: 'IFRS pension remeasurements', back: 'Recognised in OCI and never recycled to profit.' },
        { id: 'c-f-74', front: 'How is share-based compensation measured?', back: 'Fair value at grant date, expensed over the vesting period.' },
      ],
      questions: [
        {
          id: 'q-fs-070', difficulty: 'easy',
          stem: 'A company contributes 5% of each employee\'s salary to a defined contribution plan, totalling $2 million this year. Its pension expense for the year is:',
          choices: ['$2 million', 'the change in the present value of future benefits', 'zero, since the plan assets belong to employees'],
          answer: 0,
          explain: 'For a defined contribution plan, the employer\'s obligation is limited to its contribution, so pension expense equals the $2 million contributed.',
          why: [
            'B describes the complexity of a defined *benefit* plan.',
            'C is wrong — the contribution is compensation cost and is expensed.',
          ],
        },
        {
          id: 'q-fs-071', difficulty: 'medium',
          stem: 'A company issues a bond with a face value of $1,000,000 and a 5% annual coupon for proceeds of $950,000, when market rates are 6%. Interest expense in the first year is closest to:',
          choices: ['$57,000', '$50,000', '$60,000'],
          answer: 0,
          explain: 'Effective interest method: 6% × $950,000 = $57,000. The $7,000 excess over the $50,000 coupon amortises the discount, raising the carrying amount to $957,000.',
          why: [
            'B is the cash coupon, which understates the true cost of borrowing at a discount.',
            'C applies the market rate to face value rather than to the carrying amount.',
          ],
        },
        {
          id: 'q-fs-072', difficulty: 'hard',
          stem: 'A defined benefit plan has a present value of obligations of $500 million and plan assets with a fair value of $420 million. The company reports:',
          choices: ['a net pension liability of $80 million', 'a net pension asset of $80 million', 'a liability of $500 million and a separate asset of $420 million'],
          answer: 0,
          explain: 'The funded status nets the two: 500 − 420 = $80 million underfunded, reported as a net pension liability.',
          why: [
            'B would require plan assets to exceed obligations.',
            'C is wrong because the obligation and plan assets are presented net, not gross.',
          ],
        },
        {
          id: 'q-fs-073', difficulty: 'expert',
          stem: 'Two US GAAP companies enter identical leases. Company F classifies its lease as a finance lease and Company O as an operating lease. In the first year, compared with Company O, Company F most likely reports:',
          choices: [
            'higher cash flow from operations and higher total expense',
            'lower cash flow from operations and lower total expense',
            'identical cash flow from operations, since both recognise the lease on the balance sheet',
          ],
          answer: 0,
          explain: 'The finance lessee classifies the principal portion of each payment as financing, so CFO is higher. Its expense — depreciation plus interest on a larger early balance — is front-loaded, exceeding the operating lessee\'s straight-line expense in early years.',
          why: [
            'B reverses both effects.',
            'C confuses balance sheet recognition, which is similar, with cash flow classification, which differs.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fsa-taxes',
      name: 'Analysis of Income Taxes',
      los: [
        'Describe the differences between accounting profit and taxable income',
        'Calculate the tax base of assets and liabilities and determine deferred tax assets and liabilities',
        'Distinguish temporary and permanent differences',
        'Describe the effect of tax rate changes and valuation allowances',
        'Analyse disclosures relating to deferred taxes and the effective tax rate',
      ],
      lessons: [
        {
          id: 'fsa-taxes-l1',
          title: 'Why tax expense differs from tax paid',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'Companies keep two sets of rules: financial reporting standards for investors, and tax law for the government. The same transaction can hit accounting profit and taxable income in different periods. Deferred taxes reconcile the two.' },
            {
              t: 'formula', name: 'Income tax expense',
              x: 'Income tax expense = Taxes payable + Increase in DTL − Increase in DTA',
            },
            { t: 'h', x: 'Carrying amount vs tax base' },
            {
              t: 'table',
              head: ['Situation', 'Result'],
              rows: [
                ['Asset carrying amount > tax base', 'Deferred tax **liability**'],
                ['Asset carrying amount < tax base', 'Deferred tax **asset**'],
                ['Liability carrying amount > tax base', 'Deferred tax **asset**'],
                ['Liability carrying amount < tax base', 'Deferred tax **liability**'],
              ],
            },
            {
              t: 'formula', name: 'Measuring deferred taxes',
              x: 'DTL or DTA = (Carrying amount − Tax base) × Tax rate expected to apply',
            },
            {
              t: 'example', title: 'Accelerated tax depreciation',
              x: 'Equipment: carrying amount $70,000 (straight line for reporting), tax base $50,000 (accelerated for tax). Tax rate 25%.\n\nDTL = (70,000 − 50,000) × 25% = $5,000\n\nThe company has paid less tax so far than its reported profit implies, and will pay more later as the difference reverses.',
            },
            { t: 'p', x: 'Warranty expenses are a common source of **deferred tax assets**: accrued for reporting when the sale occurs, but deductible for tax only when repairs are actually paid. Tax loss carryforwards also create DTAs.' },
            { t: 'h', x: 'Temporary vs permanent differences' },
            { t: 'p', x: '**Temporary** differences reverse over time and create deferred taxes. **Permanent** differences never reverse — tax-exempt interest income, non-deductible fines — so they create no deferred tax, but they cause the **effective tax rate** to differ from the statutory rate.' },
            {
              t: 'formula', name: 'Effective tax rate',
              x: 'Effective tax rate = Income tax expense / Pretax income',
            },
            { t: 'h', x: 'Valuation allowances and rate changes' },
            { t: 'p', x: 'Under US GAAP, a **valuation allowance** reduces a DTA when it is more likely than not that some of it will not be realised — for instance, if the company is unlikely to earn enough future taxable profit. Under IFRS, a DTA is recognised only to the extent realisation is probable. Changes in the allowance directly change reported earnings and deserve scrutiny.' },
            { t: 'p', x: 'When tax rates change, existing DTAs and DTLs are remeasured at the new rate, and the adjustment runs through tax expense. A **rate increase** raises a net DTL (increasing tax expense) or raises a net DTA (reducing tax expense).' },
            {
              t: 'callout', label: 'Analyst adjustment',
              x: 'A DTL that is not expected to reverse — for example, from a company that keeps growing its capital spending — behaves more like equity than debt. Analysts may reclassify it accordingly when computing leverage.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-80', name: 'Income tax expense', expr: 'Taxes payable + ΔDTL − ΔDTA', note: 'Links tax paid to tax reported.' },
        { id: 'f-f-81', name: 'Deferred tax measurement', expr: '(Carrying amount − Tax base) × Tax rate', note: 'Asset carrying amount above tax base creates a DTL.' },
        { id: 'f-f-82', name: 'Effective tax rate', expr: 'Income tax expense / Pretax income', note: 'Differs from the statutory rate because of permanent differences.' },
      ],
      cards: [
        { id: 'c-f-80', front: 'Asset carrying amount exceeds its tax base', back: 'Creates a deferred tax liability.' },
        { id: 'c-f-81', front: 'Common source of a deferred tax asset', back: 'Warranty provisions (expensed for reporting before they are deductible for tax); tax loss carryforwards.' },
        { id: 'c-f-82', front: 'Permanent differences', back: 'Never reverse, create no deferred tax, but make the effective tax rate differ from the statutory rate.' },
        { id: 'c-f-83', front: 'Valuation allowance (US GAAP)', back: 'Reduces a DTA when it is more likely than not that part will not be realised.' },
        { id: 'c-f-84', front: 'Effect of a tax rate increase on a company with a net DTL', back: 'The DTL is remeasured upward, increasing income tax expense.' },
      ],
      questions: [
        {
          id: 'q-fs-080', difficulty: 'easy',
          stem: 'A company uses straight-line depreciation for financial reporting and accelerated depreciation for tax. In the early years of an asset\'s life this most likely creates:',
          choices: ['a deferred tax asset', 'a deferred tax liability', 'a permanent difference'],
          answer: 1,
          explain: 'Accelerated tax depreciation lowers the asset\'s tax base faster than its carrying amount. With carrying amount above tax base, less tax is paid now and more later — a deferred tax liability.',
          why: [
            'A would arise if the asset\'s tax base exceeded its carrying amount.',
            'C is wrong because the difference reverses over the asset\'s life, making it temporary.',
          ],
        },
        {
          id: 'q-fs-081', difficulty: 'medium',
          stem: 'A company has taxes payable of $400,000. During the year its deferred tax liability increased by $30,000 and its deferred tax asset increased by $10,000. Income tax expense is closest to:',
          choices: ['$420,000', '$440,000', '$400,000'],
          answer: 0,
          explain: 'Tax expense = taxes payable + ΔDTL − ΔDTA = 400,000 + 30,000 − 10,000 = $420,000.',
          why: [
            'B adds the increase in the DTA instead of subtracting it.',
            'C ignores the deferred tax movements entirely.',
          ],
        },
        {
          id: 'q-fs-082', difficulty: 'hard',
          stem: 'Equipment has a carrying amount of $70,000 for financial reporting and a tax base of $50,000. The tax rate is 25%. The resulting deferred tax item is:',
          choices: ['a deferred tax liability of $5,000', 'a deferred tax asset of $5,000', 'a deferred tax liability of $17,500'],
          answer: 0,
          explain: 'Carrying amount exceeds tax base by $20,000. DTL = 20,000 × 25% = $5,000.',
          why: [
            'B has the direction reversed.',
            'C applies the tax rate to the full carrying amount rather than to the difference.',
          ],
        },
        {
          id: 'q-fs-083', difficulty: 'hard',
          stem: 'A company earns $1 million of tax-exempt municipal bond interest. This will most likely:',
          choices: [
            'create a deferred tax liability',
            'cause the effective tax rate to be lower than the statutory rate, with no deferred tax effect',
            'create a deferred tax asset that reverses when the bonds mature',
          ],
          answer: 1,
          explain: 'Tax-exempt income is a permanent difference: it is never taxed, so no deferred tax arises. It does, however, reduce tax expense relative to pretax income, lowering the effective rate.',
          why: [
            'A and C both treat a permanent difference as if it would reverse.',
          ],
        },
        {
          id: 'q-fs-084', difficulty: 'expert',
          stem: 'A company with a large net deferred tax liability learns that its statutory tax rate will rise from 21% to 25%. In the period the change is enacted, the company will most likely report:',
          choices: [
            'higher income tax expense and lower net income',
            'lower income tax expense and higher net income',
            'no effect until the deferred tax liability reverses',
          ],
          answer: 0,
          explain: 'Deferred tax balances are remeasured at the rate expected to apply when they reverse. A higher rate increases the net DTL, and the increase is recognised through income tax expense immediately.',
          why: [
            'B would apply to a company with a net deferred tax *asset*.',
            'C is wrong because remeasurement happens when the rate change is enacted, not when differences reverse.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fsa-quality',
      name: 'Financial Reporting Quality',
      los: [
        'Distinguish between financial reporting quality and earnings quality',
        'Describe a spectrum for assessing financial reporting quality',
        'Describe motivations and conditions conducive to low-quality reporting',
        'Describe accounting choices and estimates that can be used to manage earnings and cash flow',
        'Describe warning signs of potential problems in financial reporting',
      ],
      lessons: [
        {
          id: 'fsa-quality-l1',
          title: 'From decision-useful to fictitious',
          minutes: 10,
          blocks: [
            { t: 'p', x: '**Reporting quality** asks whether the numbers faithfully represent what happened. **Earnings quality** asks whether the underlying earnings are sustainable and adequate. High-quality reporting of poor earnings is entirely possible — and far more useful to an investor than the reverse.' },
            {
              t: 'table',
              head: ['Spectrum (highest to lowest)', 'Description'],
              rows: [
                ['GAAP, decision-useful, sustainable and adequate returns', 'High reporting quality and high earnings quality'],
                ['GAAP, decision-useful, but low earnings quality', 'Honest reporting of earnings that are not sustainable'],
                ['Within GAAP, but biased choices', 'Aggressive or conservative choices that distort the picture'],
                ['Within GAAP, earnings management', 'Choices and estimates made deliberately to hit targets'],
                ['Departure from GAAP', 'Non-compliant accounting'],
                ['Fictitious transactions', 'Fraud — recording activity that did not occur'],
              ],
            },
            {
              t: 'callout', label: 'Conservative is not the same as good',
              x: 'Conservative accounting understates results now — for example, by over-reserving. Those reserves can be released later to prop up weak periods. Both aggressive and conservative choices are **biased**, and both reduce the usefulness of the numbers.',
            },
            { t: 'h', x: 'Why it happens: the fraud triangle' },
            {
              t: 'ul',
              x: [
                '**Motivation** — meeting analyst expectations, covenant thresholds, bonus targets.',
                '**Opportunity** — weak internal controls, an ineffective board, complex or judgement-heavy accounting.',
                '**Rationalisation** — the belief that the manipulation is justified, temporary, or harmless.',
              ],
            },
            { t: 'h', x: 'The levers' },
            {
              t: 'ul',
              x: [
                '**Presentation choices** — emphasising non-GAAP "adjusted" measures that exclude recurring costs.',
                '**Accounting choices and estimates** — revenue timing, inventory method, useful lives, bad debt and warranty reserves, capitalisation policy.',
                '**Structuring transactions** — stretching payables or selling receivables at period-end to lift operating cash flow; classifying items to flatter the operating section.',
              ],
            },
            { t: 'h', x: 'Warning signs' },
            {
              t: 'ul',
              x: [
                'Revenue growing much faster than peers, with rising days sales outstanding — possible **channel stuffing** or bill-and-hold sales.',
                'Declining inventory turnover — possible obsolete stock not yet written down.',
                'Net income persistently exceeding cash flow from operations.',
                'Capitalising costs that peers expense; lengthening useful lives.',
                'Frequent "non-recurring" charges; large fourth-quarter surprises.',
                'Related-party transactions, auditor changes, and heavy reliance on non-GAAP metrics.',
              ],
            },
            {
              t: 'callout', label: 'Mean reversion', kind: 'warn',
              x: 'Extreme earnings — high or low — tend to revert toward normal levels, and earnings driven by large accruals revert faster than earnings backed by cash. Forecasts that extrapolate an accrual-heavy peak are the most dangerous kind.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-90', name: 'Balance sheet accruals ratio', expr: '(Net operating assets_end − NOA_begin) / Average NOA', note: 'Higher values indicate earnings relying more on accruals.' },
      ],
      cards: [
        { id: 'c-f-31', front: 'Difference between reporting quality and earnings quality', back: 'Reporting quality = do the numbers faithfully represent reality. Earnings quality = are the earnings sustainable and adequate.' },
        { id: 'c-f-33', front: 'Classic red flag in earnings quality', back: 'Net income persistently exceeding cash flow from operations — accruals are carrying the earnings.' },
        { id: 'c-f-90', front: 'Three elements of the fraud triangle', back: 'Motivation, opportunity, rationalisation.' },
        { id: 'c-f-91', front: 'Why is conservative accounting still considered biased?', back: 'Understated results create reserves that can be released later to smooth or inflate future earnings.' },
        { id: 'c-f-92', front: 'Channel stuffing', back: 'Shipping excess product to distributors to record revenue early. Signals: rising DSO and receivables outpacing sales.' },
      ],
      questions: [
        {
          id: 'q-fs-090', difficulty: 'easy',
          stem: 'Weak internal controls and a board with little financial expertise are best described as which element of the conditions for low-quality reporting?',
          choices: ['Motivation', 'Opportunity', 'Rationalisation'],
          answer: 1,
          explain: 'Opportunity arises when controls and oversight are too weak to prevent or detect manipulation.',
          why: [
            'A refers to the pressure or incentive to manipulate, such as meeting earnings targets.',
            'C refers to the mindset that justifies the manipulation.',
          ],
        },
        {
          id: 'q-fs-091', difficulty: 'medium',
          stem: 'A company records unusually large warranty reserves in a highly profitable year and reduces them in a later, weaker year. This practice is best described as:',
          choices: ['high-quality, conservative reporting', 'biased reporting used to smooth earnings', 'a departure from GAAP that constitutes fraud'],
          answer: 1,
          explain: 'Over-reserving in good years and releasing reserves in bad years shifts profit between periods. Although it may remain within GAAP, it is biased and reduces the decision-usefulness of reported earnings.',
          why: [
            'A mistakes conservatism for quality; the reserves are later used to manage results.',
            'C overstates the case — estimate-based smoothing can remain within the standards while still being biased.',
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
          explain: 'Receivables growing much faster than revenue, combined with net income outrunning operating cash flow, is the signature pattern of revenue recognised too early or extended to customers unlikely to pay.',
          why: [
            'A is the opposite — rising DSO means collection is slowing.',
            'C is wrong because tightening credit would shorten DSO.',
          ],
        },
        {
          id: 'q-fs-092', difficulty: 'expert',
          stem: 'At its fiscal year-end, a company delays paying suppliers by several weeks beyond normal terms, and operating cash flow rises 20%. The most appropriate analytical conclusion is that:',
          choices: [
            'operating cash generation has improved sustainably',
            'the improvement is likely temporary, because stretched payables must be paid in the following period',
            'the change should be reclassified as a financing inflow under both IFRS and US GAAP',
          ],
          answer: 1,
          explain: 'Delaying payments shifts cash outflows into the next period. The increase in payables lifts current CFO but reverses when suppliers are paid — a classic structuring technique rather than a genuine improvement in the business.',
          why: [
            'A ignores that the underlying operations have not changed.',
            'C is wrong — trade payables remain operating items; the analyst adjusts expectations rather than reclassifying.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fsa-ratios',
      name: 'Financial Analysis Techniques and Modeling',
      los: [
        'Calculate and interpret activity, liquidity, solvency and profitability ratios',
        'Demonstrate the DuPont decomposition of return on equity',
        'Describe the use of credit and segment analysis',
        'Explain approaches to forecasting revenue and costs, and behavioural biases that affect forecasts',
      ],
      lessons: [
        {
          id: 'fsa-ratios-l1',
          title: 'DuPont, and what ratios cannot tell you',
          minutes: 9,
          blocks: [
            {
              t: 'formula', name: 'DuPont decomposition',
              x: 'Three-part:\nROE = Net profit margin × Asset turnover × Financial leverage\n    = (NI/Revenue) × (Revenue/Assets) × (Assets/Equity)\n\nFive-part:\nROE = Tax burden × Interest burden × EBIT margin × Asset turnover × Leverage\n    = (NI/EBT) × (EBT/EBIT) × (EBIT/Rev) × (Rev/Assets) × (Assets/Equity)',
            },
            { t: 'p', x: 'The value of DuPont is diagnostic. Two firms with identical 15% ROE can be entirely different businesses — one earning it through margin, the other through leverage. The five-part version separates operating performance (EBIT margin, turnover) from financing and tax effects.' },
            {
              t: 'table',
              head: ['Category', 'Representative ratios'],
              rows: [
                ['Liquidity', 'Current = CA/CL; Quick = (Cash + ST investments + Receivables)/CL; Cash ratio'],
                ['Activity', 'Inventory turnover = COGS/avg inventory; Receivables turnover = Revenue/avg AR; Payables turnover = Purchases/avg AP'],
                ['Solvency', 'Debt-to-equity; Debt-to-assets; Interest coverage = EBIT/Interest'],
                ['Profitability', 'Gross, operating and net margin; ROA; ROE'],
                ['Credit', 'Debt/EBITDA; FFO/Debt; EBITDA/Interest'],
              ],
            },
            {
              t: 'formula', name: 'Cash conversion cycle',
              x: 'CCC = DSO + DOH − DPO\n\nDSO = 365 / Receivables turnover\nDOH = 365 / Inventory turnover\nDPO = 365 / Payables turnover',
            },
            {
              t: 'callout', label: 'Limits of ratios', kind: 'warn',
              x: 'Ratios compare numbers built on accounting choices. Different inventory methods, capitalisation policies and lease classifications distort comparisons. Always ask what drives a ratio before concluding what it means, and use segment disclosures to separate businesses with different economics.',
            },
          ],
        },
        {
          id: 'fsa-ratios-l2',
          title: 'Building a forecast',
          minutes: 7,
          blocks: [
            { t: 'p', x: 'Most models are **revenue-driven**: forecast sales first, then express costs, working capital and capital expenditure as functions of sales. Revenue can be built **top-down** (market size × share, or GDP growth plus a premium) or **bottom-up** (volume × price by segment or product).' },
            {
              t: 'ul',
              x: [
                '**Cost structure** — separate fixed from variable costs. Operating leverage means margins expand faster than revenue in good times and contract faster in bad.',
                '**Economies of scale** — larger firms may sustain structurally lower costs.',
                '**Competitive position** — industry structure constrains how long above-normal margins can persist.',
                '**Inflation** — companies with pricing power pass through input costs; commodity-exposed firms may not.',
                '**Long-term horizon** — forecast a normalised year and a terminal growth rate consistent with the long-run economy.',
              ],
            },
            {
              t: 'callout', label: 'Biases that ruin forecasts',
              x: '**Overconfidence** produces forecast ranges that are too narrow. **Illusion of control** leads analysts to over-model details they cannot predict. **Conservatism** makes them slow to update. **Representativeness** and **confirmation bias** anchor them to a story. Scenario analysis and explicitly seeking contrary evidence are the practical defences.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-f-30', name: 'ROE (3-part DuPont)', expr: 'ROE = Net margin × Asset turnover × Leverage', note: 'Separates profitability, efficiency and financing.' },
        { id: 'f-f-34', name: 'ROE (5-part DuPont)', expr: 'Tax burden × Interest burden × EBIT margin × Asset turnover × Leverage', note: 'Isolates operating performance from financing and tax.' },
        { id: 'f-f-31', name: 'Cash conversion cycle', expr: 'CCC = DSO + DOH − DPO', note: 'Days between paying suppliers and collecting from customers. Lower is better.' },
        { id: 'f-f-32', name: 'Interest coverage', expr: 'EBIT / Interest expense', note: 'How many times operating profit covers interest.' },
        { id: 'f-f-33', name: 'Quick ratio', expr: '(Cash + Short-term investments + Receivables) / Current liabilities', note: 'Excludes inventory — the least liquid current asset.' },
      ],
      cards: [
        { id: 'c-f-30', front: 'Three components of DuPont ROE', back: 'Net profit margin × asset turnover × financial leverage.' },
        { id: 'c-f-32', front: 'Cash conversion cycle', back: 'DSO + DOH − DPO. Shorter means less cash tied up in working capital.' },
        { id: 'c-f-34', front: 'Interest burden in five-part DuPont', back: 'EBT / EBIT. Lower values mean interest consumes more operating profit.' },
        { id: 'c-f-35', front: 'Top-down vs bottom-up revenue forecasting', back: 'Top-down: from the market or economy down to the firm. Bottom-up: from volumes and prices of products or segments upward.' },
      ],
      questions: [
        {
          id: 'q-fs-030', difficulty: 'easy',
          stem: 'A company has a net profit margin of 5%, asset turnover of 1.5, and financial leverage of 2.0. Its ROE is closest to:',
          choices: ['7.5%', '15.0%', '10.0%'],
          answer: 1,
          explain: 'ROE = 0.05 × 1.5 × 2.0 = 15.0%.',
          why: [
            'A multiplies margin by turnover only — that is ROA.',
            'C multiplies margin by leverage only, omitting asset turnover.',
          ],
        },
        {
          id: 'q-fs-031', difficulty: 'medium',
          stem: 'A firm has days of inventory on hand of 60, days sales outstanding of 45 and days payables outstanding of 30. Its cash conversion cycle is:',
          choices: ['75 days', '135 days', '45 days'],
          answer: 0,
          explain: 'CCC = 45 + 60 − 30 = 75 days.',
          why: [
            'B adds payables days instead of subtracting them.',
            'C subtracts inventory days rather than payables days.',
          ],
        },
        {
          id: 'q-fs-033', difficulty: 'hard',
          stem: 'A company has a tax burden of 0.75, an interest burden of 0.80, an EBIT margin of 10%, asset turnover of 1.2 and financial leverage of 2.0. Its ROE is closest to:',
          choices: ['14.4%', '7.2%', '24.0%'],
          answer: 0,
          explain: 'ROE = 0.75 × 0.80 × 0.10 × 1.2 × 2.0 = 0.144, or 14.4%.',
          why: [
            'B omits financial leverage — that is return on assets.',
            'C ignores the tax and interest burdens, overstating returns to shareholders.',
          ],
        },
        {
          id: 'q-fs-034', difficulty: 'expert',
          stem: 'A company\'s ROE rises from 12% to 15% over two years while its net profit margin and asset turnover are unchanged. The most likely conclusion is that:',
          choices: [
            'operating performance has improved',
            'the increase came from higher financial leverage, raising financial risk',
            'the company has become more efficient in using its assets',
          ],
          answer: 1,
          explain: 'With margin and turnover constant, the only DuPont component that can raise ROE is financial leverage. The higher return comes with more debt relative to equity — not better operations.',
          why: [
            'A is ruled out because the operating components are unchanged.',
            'C is ruled out because asset turnover is unchanged.',
          ],
        },
      ],
    },
  ],
};
