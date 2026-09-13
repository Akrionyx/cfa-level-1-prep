// Equity Investments — starter depth. Original wording throughout.

export default {
  id: 'equity',
  name: 'Equity Investments',
  short: 'Equity',
  weight: '11–14%',
  weightMid: 12.5,
  depth: 'starter',
  summary:
    'Market structure, index construction, efficiency, and the valuation tools that turn a company into a number. Calculation-light relative to its weight — most marks come from clear conceptual reasoning.',
  modules: [
    {
      id: 'eq-markets',
      name: 'Market Organisation, Indexes and Efficiency',
      los: [
        'Explain the functions of the financial system and describe types of assets and intermediaries',
        'Describe positions an investor can take, including leveraged positions and margin',
        'Compare index weighting methods and their effects',
        'Describe the forms of market efficiency and their implications for active management',
      ],
      lessons: [
        {
          id: 'eq-markets-l1',
          title: 'Index construction changes what you measure',
          minutes: 7,
          blocks: [
            {
              t: 'table',
              head: ['Weighting', 'Mechanics', 'Bias / effect'],
              rows: [
                ['Price-weighted', 'Sum of prices ÷ divisor', 'High-priced shares dominate; a stock split changes influence arbitrarily'],
                ['Market-cap weighted', 'Weight ∝ market value', 'Tilts toward large and potentially overvalued firms; needs no rebalancing'],
                ['Equal-weighted', 'Same weight each', 'Small-cap tilt; requires frequent rebalancing to maintain'],
                ['Fundamental-weighted', 'Weight by earnings, book value, etc.', 'Value tilt; breaks the link with price'],
              ],
            },
            {
              t: 'callout', label: 'The point',
              x: 'A cap-weighted index automatically buys more of whatever has risen. An equal-weighted index does the opposite at each rebalancing. Neither is "correct" — but they measure different things and can diverge substantially over a cycle.',
            },
            { t: 'h', x: 'Market efficiency' },
            {
              t: 'table',
              head: ['Form', 'Prices reflect', 'Implication'],
              rows: [
                ['Weak', 'All past price and volume data', 'Technical analysis cannot generate abnormal returns'],
                ['Semi-strong', 'All publicly available information', 'Fundamental analysis on public data cannot either'],
                ['Strong', 'All information, public and private', 'Even insiders cannot — empirically not supported'],
              ],
            },
            { t: 'p', x: 'Evidence broadly supports weak and, less completely, semi-strong efficiency in developed markets. Persistent **anomalies** (value, momentum, size, post-earnings drift) may reflect risk premia, data mining, or genuine inefficiency — the debate is unresolved, which is the honest exam answer.' },
            {
              t: 'callout', label: 'The efficiency paradox', kind: 'warn',
              x: 'Markets become efficient only because analysts work to find mispricing. If everyone indexed, prices would stop being informative. Efficiency is a product of active effort, not a substitute for it.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-eq-1', name: 'Price-weighted index', expr: 'Σ prices / divisor', note: 'The divisor is adjusted for splits and composition changes.' },
        { id: 'f-eq-2', name: 'Leveraged return', expr: 'Return on equity = (Gain − Interest) / Initial equity', note: 'Margin magnifies both gains and losses.' },
        { id: 'f-eq-3', name: 'Margin call price (long)', expr: 'P₀ × (1 − initial margin) / (1 − maintenance margin)', note: 'The price at which equity falls to the maintenance level.' },
      ],
      cards: [
        { id: 'c-eq-1', front: 'Which index weighting needs no rebalancing?', back: 'Market-cap weighted — weights adjust automatically as prices move.' },
        { id: 'c-eq-2', front: 'Weak-form efficiency implies', back: 'Past price and volume data are already in prices, so technical analysis cannot produce abnormal returns.' },
        { id: 'c-eq-3', front: 'Main bias of a price-weighted index', back: 'High-priced stocks dominate regardless of company size, and splits arbitrarily change a stock\'s influence.' },
      ],
      questions: [
        {
          id: 'q-eq-001', difficulty: 'easy',
          stem: 'If semi-strong form market efficiency holds, an investor is least likely to earn abnormal returns using:',
          choices: ['material nonpublic information', 'publicly available financial statement analysis', 'a private research advantage not yet disclosed'],
          answer: 1,
          explain: 'Semi-strong efficiency means all public information is already reflected in prices, so analysis built solely on public data cannot generate abnormal returns. Private information would still work, which is why only strong-form efficiency rules it out.',
          why: [
            'A and C both involve non-public information, which retains value unless markets are strong-form efficient — a form the evidence does not support.',
          ],
        },
        {
          id: 'q-eq-002', difficulty: 'medium',
          stem: 'An equal-weighted index compared with a market-capitalisation-weighted index of the same securities will most likely:',
          choices: [
            'require more frequent rebalancing and carry a smaller-cap tilt',
            'require no rebalancing and carry a large-cap tilt',
            'produce identical returns over long horizons',
          ],
          answer: 0,
          explain: 'Equal weights drift apart as prices move, so periodic rebalancing is needed to restore them. Because small companies receive the same weight as large ones, the index behaves with a small-cap tilt.',
          why: [
            'B describes the cap-weighted index, whose weights self-adjust.',
            'C is wrong because the differing weights produce materially different exposures and returns.',
          ],
        },
        {
          id: 'q-eq-003', difficulty: 'hard',
          stem: 'An investor buys 100 shares at $50 with 50% initial margin and a 30% maintenance margin. The price at which a margin call occurs is closest to:',
          choices: ['$35.71', '$30.00', '$25.00'],
          answer: 0,
          explain: 'Margin call price = P₀(1 − initial margin)/(1 − maintenance margin) = 50(1 − 0.50)/(1 − 0.30) = 25/0.70 = $35.71.',
          why: [
            'B applies the maintenance margin directly to the purchase price, ignoring the borrowed amount.',
            'C is the amount borrowed per share, not the trigger price.',
          ],
        },
      ],
    },

    {
      id: 'eq-securities',
      name: 'Equity Securities and Company Analysis',
      los: [
        'Describe characteristics of common and preference shares',
        'Compare public and private equity securities and depository receipts',
        'Describe the elements of an industry and competitive analysis',
        'Contrast the book value and market value of equity and describe return on equity',
      ],
      lessons: [
        {
          id: 'eq-securities-l1',
          title: 'What you actually own, and how to analyse it',
          minutes: 7,
          blocks: [
            {
              t: 'ul',
              x: [
                '**Common shares** — residual claim, voting rights, dividends at the board\'s discretion, unlimited upside and a claim ranked last in liquidation.',
                '**Preference shares** — fixed dividend, priority over common, usually non-voting. *Cumulative* preference accrues missed dividends; *participating* shares also share in upside.',
                '**Depository receipts** — a foreign company\'s shares traded in a local market. Sponsored DRs are issued with the company\'s involvement and carry voting rights; unsponsored generally do not.',
              ],
            },
            { t: 'h', x: 'Industry and competitive analysis' },
            { t: 'p', x: 'The standard frame examines five pressures on industry profitability: rivalry among incumbents, threat of new entrants, threat of substitutes, and the bargaining power of suppliers and of buyers. Barriers to entry are the single most durable determinant — an industry that is highly profitable and easy to enter will not stay highly profitable.' },
            {
              t: 'callout', label: 'Book value vs market value',
              x: 'Book value is accumulated accounting investment; market value is the present value of expected future cash flows. Market value exceeds book value when ROE exceeds the required return — the market pays a premium for a company that earns more than its cost of capital.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-eq-10', name: 'Return on equity', expr: 'ROE = Net income / Average shareholders\' equity', note: 'Compare against the cost of equity to judge value creation.' },
        { id: 'f-eq-11', name: 'Sustainable growth rate', expr: 'g = ROE × b,  where b = retention ratio = 1 − payout', note: 'The growth a firm can fund without new equity.' },
      ],
      cards: [
        { id: 'c-eq-10', front: 'Cumulative preference shares', back: 'Unpaid dividends accumulate and must be paid in full before any common dividend.' },
        { id: 'c-eq-11', front: 'Sustainable growth rate', back: 'g = ROE × retention ratio (b). Growth funded internally, without issuing equity.' },
        { id: 'c-eq-12', front: 'When does market value exceed book value?', back: 'When ROE exceeds the required return on equity — the firm earns more than its cost of capital.' },
      ],
      questions: [
        {
          id: 'q-eq-010', difficulty: 'easy',
          stem: 'A company has an ROE of 15% and pays out 40% of earnings as dividends. Its sustainable growth rate is closest to:',
          choices: ['6.0%', '9.0%', '15.0%'],
          answer: 1,
          explain: 'Retention ratio b = 1 − 0.40 = 0.60. g = ROE × b = 15% × 0.60 = 9.0%.',
          why: [
            'A (6.0%) multiplies ROE by the *payout* ratio rather than the retention ratio.',
            'C (15.0%) assumes all earnings are retained, which contradicts the 40% payout.',
          ],
        },
        {
          id: 'q-eq-011', difficulty: 'medium',
          stem: 'Which feature best distinguishes preference shares from common shares?',
          choices: [
            'Preference shareholders have superior voting rights',
            'Preference dividends have priority and are typically fixed',
            'Preference shares rank behind common shares in liquidation',
          ],
          answer: 1,
          explain: 'Preference shares carry a stated, usually fixed dividend that must be paid before any common dividend, and they rank ahead of common in liquidation.',
          why: [
            'A is wrong — preference shares are usually non-voting; that is the trade for dividend priority.',
            'C reverses the seniority; common shareholders hold the most junior claim.',
          ],
        },
      ],
    },

    {
      id: 'eq-valuation',
      name: 'Equity Valuation: Concepts and Tools',
      los: [
        'Calculate and interpret the intrinsic value of a share using dividend discount models',
        'Calculate the value of preferred stock and of a multi-stage growth company',
        'Calculate and interpret price multiples and describe their strengths and limitations',
        'Describe asset-based valuation and its appropriate uses',
      ],
      lessons: [
        {
          id: 'eq-valuation-l1',
          title: 'Three families of valuation',
          minutes: 9,
          blocks: [
            { t: 'h', x: '1. Present value models' },
            {
              t: 'formula', name: 'Dividend discount models',
              x: 'One period:   V₀ = (D₁ + P₁) / (1 + r)\nGordon growth: V₀ = D₁ / (r − g),  requires r > g\nTwo-stage:    discount each high-growth dividend individually,\n              then apply Gordon growth at the start of the stable phase\n              and discount that terminal value back.',
            },
            {
              t: 'callout', label: 'The most common error', kind: 'warn',
              x: 'The terminal value from the Gordon formula is stated as of the *end of the final high-growth year* — one period before the first stable-phase dividend. Discount it back by that many years, not one more.',
            },
            { t: 'h', x: '2. Multiples' },
            {
              t: 'formula', name: 'Justified P/E from Gordon growth',
              x: 'Leading P/E:  P₀/E₁ = payout ratio / (r − g)\nTrailing P/E: P₀/E₀ = payout × (1 + g) / (r − g)',
            },
            { t: 'p', x: 'Multiples are quick and comparable, but they are relative: they tell you a stock is cheap *versus the comparison set*, which may itself be mispriced. P/E is meaningless with negative earnings, which is why P/B, P/S and EV/EBITDA exist for cyclical or loss-making firms.' },
            { t: 'h', x: '3. Asset-based valuation' },
            { t: 'p', x: 'Value equity as the market value of assets less liabilities. It works best for firms whose assets are liquid and separately marketable — holding companies, financial firms, natural resource companies — and poorly where value rests on intangibles and human capital a balance sheet never captures.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-eq-20', name: 'Gordon growth model', expr: 'V₀ = D₁ / (r − g)', note: 'Constant-growth perpetuity; requires r > g and stable growth.' },
        { id: 'f-eq-21', name: 'Justified leading P/E', expr: 'P₀/E₁ = payout / (r − g)', note: 'Higher payout and growth raise it; higher required return lowers it.' },
        { id: 'f-eq-22', name: 'Preferred share value', expr: 'V = D / r', note: 'A level perpetuity.' },
        { id: 'f-eq-23', name: 'Enterprise value', expr: 'EV = Market cap + Debt − Cash', note: 'Capital-structure neutral; pair with EBITDA.' },
      ],
      cards: [
        { id: 'c-eq-20', front: 'Gordon growth model and its conditions', back: 'V₀ = D₁/(r − g). Requires r > g and dividends growing at a constant, sustainable rate.' },
        { id: 'c-eq-21', front: 'Justified leading P/E', back: 'P₀/E₁ = payout ratio / (r − g).' },
        { id: 'c-eq-22', front: 'When is EV/EBITDA preferred to P/E?', back: 'When comparing firms with different capital structures or when earnings are negative — EV/EBITDA is pre-interest and pre-depreciation.' },
        { id: 'c-eq-23', front: 'Where does asset-based valuation work best?', back: 'Firms with liquid, separately marketable assets — holding companies, financials, resource firms. Poor for intangible-heavy businesses.' },
      ],
      questions: [
        {
          id: 'q-eq-020', difficulty: 'easy',
          stem: 'A share is expected to pay a dividend of $3.00 next year, growing at 5% indefinitely. If the required return is 11%, the intrinsic value is closest to:',
          choices: ['$27.27', '$50.00', '$60.00'],
          answer: 1,
          explain: 'V₀ = D₁/(r − g) = 3.00 / (0.11 − 0.05) = 3.00 / 0.06 = $50.00.',
          why: [
            'A divides by the required return alone, ignoring growth.',
            'C uses a 5% spread rather than the 6% difference between r and g.',
          ],
        },
        {
          id: 'q-eq-021', difficulty: 'medium',
          stem: 'A firm has a payout ratio of 40%, a required return of 10% and a sustainable growth rate of 4%. Its justified leading P/E is closest to:',
          choices: ['4.0', '6.7', '10.0'],
          answer: 1,
          explain: 'P₀/E₁ = payout / (r − g) = 0.40 / (0.10 − 0.04) = 0.40 / 0.06 = 6.67.',
          why: [
            'A divides the payout ratio by the required return alone.',
            'C is the inverse of the required return, which would be the P/E only for a zero-growth, full-payout firm.',
          ],
        },
        {
          id: 'q-eq-022', difficulty: 'hard',
          vignette: 'A company will pay dividends of $2.00 in year 1 and $2.50 in year 2. From year 3 onward dividends grow at 4% forever. The required return is 10%.',
          stem: 'The intrinsic value today is closest to:',
          choices: ['$39.70', '$43.33', '$36.44'],
          answer: 0,
          explain: 'D₃ = 2.50 × 1.04 = $2.60. Terminal value at the end of year 2 = 2.60/(0.10 − 0.04) = $43.33. Discount each piece: 2.00/1.10 = 1.82; 2.50/1.21 = 2.07; 43.33/1.21 = 35.81. Total = $39.70.',
          why: [
            'B ($43.33) is the terminal value as of the end of year 2, not discounted back to today.',
            'C discounts the terminal value by three years instead of two, double-counting a period the Gordon formula already handles.',
          ],
        },
        {
          id: 'q-eq-023', difficulty: 'expert',
          stem: 'An analyst values two firms in the same industry using P/E multiples and concludes both are attractively priced relative to the sector average. The most significant limitation of this conclusion is that:',
          choices: [
            'P/E ratios cannot be computed for firms with positive earnings',
            'relative valuation cannot detect mispricing of the entire comparison group',
            'multiples ignore differences in accounting standards, which never affect earnings',
          ],
          answer: 1,
          explain: 'A multiple compares a firm with its peers. If the whole sector is overvalued, every constituent can look cheap relative to the average while all of them are expensive in absolute terms. Relative valuation measures position within a group, not intrinsic worth.',
          why: [
            'A is false — P/E is undefined for *negative* earnings, not positive.',
            'C contains a false clause: accounting differences very much do affect reported earnings, which is itself another limitation of P/E comparisons.',
          ],
        },
      ],
    },
  ],
};
