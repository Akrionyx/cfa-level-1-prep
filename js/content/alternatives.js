// Alternative Investments — starter depth. Original wording throughout.

export default {
  id: 'alternatives',
  name: 'Alternative Investments',
  short: 'Alts',
  weight: '7–10%',
  weightMid: 8.5,
  depth: 'starter',
  summary:
    'Private capital, real assets, hedge funds and digital assets. Mostly descriptive, with a reliable calculation on fee structures — which is where most of the marks in this topic are won or lost.',
  modules: [
    {
      id: 'alt-categories',
      name: 'Categories and Investment Features',
      los: [
        'Describe the features that distinguish alternative investments from traditional investments',
        'Describe categories of alternative investments: private capital, real assets, hedge funds',
        'Describe methods of investing: direct, co-investment and fund investment',
        'Explain investment and liquidity characteristics of alternative investments',
      ],
      lessons: [
        {
          id: 'alt-categories-l1',
          title: 'What makes an investment "alternative"',
          minutes: 7,
          blocks: [
            {
              t: 'ul',
              x: [
                '**Illiquidity** — capital is locked up, often for years, in exchange for an expected illiquidity premium.',
                '**Limited transparency** and less regulation than public markets.',
                '**Higher and more complex fees**, typically including a performance element.',
                '**Difficult valuation** — infrequently traded assets are appraised rather than priced, which artificially smooths reported returns and understates measured volatility and correlation.',
              ],
            },
            {
              t: 'callout', label: 'The smoothing trap', kind: 'warn',
              x: 'Because appraisal-based valuations lag the market, reported private-asset returns look less volatile and less correlated with equities than they truly are. Any diversification benefit computed naively from those figures is overstated.',
            },
            { t: 'h', x: 'The main categories' },
            {
              t: 'table',
              head: ['Category', 'Contents'],
              rows: [
                ['Private capital', 'Private equity (buyout, venture capital) and private debt (direct lending, mezzanine, distressed)'],
                ['Real assets', 'Real estate, infrastructure, commodities, timber, farmland'],
                ['Hedge funds', 'Equity, event-driven, relative value, macro and multi-strategy approaches'],
                ['Digital assets', 'Cryptocurrencies and tokenised assets'],
              ],
            },
            {
              t: 'ul',
              x: [
                '**Fund investing** — least involvement, highest fees, broadest diversification.',
                '**Co-investing** — alongside a fund in a specific deal, with reduced or no fees and more control.',
                '**Direct investing** — greatest control and lowest fee drag, but requires substantial internal expertise.',
              ],
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-al-1', front: 'Why do private asset returns appear low-volatility?', back: 'Appraisal-based valuations smooth reported returns, understating true volatility and correlation with public markets.' },
        { id: 'c-al-2', front: 'Three methods of investing in alternatives', back: 'Fund investing (least control, highest fees), co-investing (middle), direct investing (most control, most expertise required).' },
        { id: 'c-al-3', front: 'Two branches of private capital', back: 'Private equity (buyout, venture capital) and private debt (direct lending, mezzanine, distressed).' },
      ],
      questions: [
        {
          id: 'q-al-001', difficulty: 'easy',
          stem: 'Which feature most clearly distinguishes alternative investments from traditional investments?',
          choices: ['They always produce higher returns', 'They typically involve illiquidity and less frequent, appraisal-based valuation', 'They are more heavily regulated'],
          answer: 1,
          explain: 'Long lock-ups and infrequent, appraisal-based valuation are defining structural features — and both are why reported risk statistics for alternatives must be treated carefully.',
          why: [
            'A is false; higher expected returns are a hope, not a characteristic, and many alternatives underperform.',
            'C reverses reality — alternatives are generally *less* regulated than public funds.',
          ],
        },
        {
          id: 'q-al-002', difficulty: 'medium',
          stem: 'An investor participating in a specific deal alongside a private equity fund, typically with reduced fees, is engaging in:',
          choices: ['fund investing', 'co-investing', 'direct investing'],
          answer: 1,
          explain: 'Co-investment sits between fund and direct investing: the general partner sources and leads the deal, while the investor takes additional exposure to it on better fee terms.',
          why: [
            'A involves committing capital to a blind pool managed entirely by the GP.',
            'C means sourcing and executing the transaction independently, without a fund partner.',
          ],
        },
      ],
    },

    {
      id: 'alt-pe-re',
      name: 'Private Capital, Real Estate and Commodities',
      los: [
        'Describe private equity strategies including venture capital and leveraged buyouts',
        'Describe the characteristics of private debt',
        'Describe real estate investment forms and valuation approaches',
        'Explain the sources of return in commodity investing',
      ],
      lessons: [
        {
          id: 'alt-pe-re-l1',
          title: 'Where the returns come from',
          minutes: 7,
          blocks: [
            { t: 'h', x: 'Private equity' },
            {
              t: 'ul',
              x: [
                '**Leveraged buyouts** — acquire a mature, cash-generative company using substantial debt, improve operations or governance, then exit via sale or IPO. Returns come from deleveraging, operational improvement, and multiple expansion.',
                '**Venture capital** — fund early-stage companies. Most investments fail; returns depend on a small number of very large outcomes, so the distribution is extremely right-skewed.',
              ],
            },
            { t: 'h', x: 'Real estate' },
            { t: 'p', x: 'Direct ownership gives control and tax advantages but concentrates risk and is illiquid. **REITs** offer liquid, publicly traded exposure — at the cost of behaving more like equities in the short run, which weakens the diversification case exactly when it is most needed.' },
            {
              t: 'formula', name: 'Direct capitalisation of a property',
              x: 'Value = Net operating income / Capitalisation rate\n\nNOI = rental income − operating expenses\n      (before financing costs and taxes)',
            },
            { t: 'h', x: 'Commodities' },
            { t: 'p', x: 'Most commodity exposure is taken through futures rather than physical holdings. Total return has three parts:' },
            {
              t: 'ul',
              x: [
                '**Spot return** — the change in the underlying commodity price.',
                '**Roll return** — positive when the curve is in **backwardation** (futures below spot), negative in **contango**.',
                '**Collateral return** — interest earned on the cash backing the futures position.',
              ],
            },
            {
              t: 'callout', label: 'Why roll return matters',
              x: 'In persistent contango, each roll sells a cheaper expiring contract and buys a more expensive one. A commodity index can post negative returns over a period when the spot price actually rose.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-al-10', name: 'Direct capitalisation', expr: 'Value = NOI / Cap rate', note: 'A perpetuity applied to property income.' },
        { id: 'f-al-11', name: 'Net operating income', expr: 'Rental income − operating expenses', note: 'Excludes financing costs, depreciation and taxes.' },
        { id: 'f-al-12', name: 'Commodity total return', expr: 'Spot return + Roll return + Collateral return', note: 'Roll return is positive in backwardation, negative in contango.' },
      ],
      cards: [
        { id: 'c-al-10', front: 'Contango vs backwardation', back: 'Contango: futures above spot → negative roll return. Backwardation: futures below spot → positive roll return.' },
        { id: 'c-al-11', front: 'Direct capitalisation formula', back: 'Property value = NOI / capitalisation rate.' },
        { id: 'c-al-12', front: 'Three sources of commodity futures return', back: 'Spot price change, roll return, and collateral (interest) return.' },
        { id: 'c-al-13', front: 'Main drawback of REITs for diversification', back: 'They trade like equities in the short run, so their correlation with stocks rises precisely when diversification is most needed.' },
      ],
      questions: [
        {
          id: 'q-al-010', difficulty: 'easy',
          stem: 'A property generates net operating income of $600,000 and comparable properties transact at a capitalisation rate of 8%. Its estimated value is closest to:',
          choices: ['$4.8 million', '$7.5 million', '$48.0 million'],
          answer: 1,
          explain: 'Value = NOI / cap rate = 600,000 / 0.08 = $7,500,000.',
          why: [
            'A multiplies NOI by the cap rate instead of dividing.',
            'C misplaces a decimal, dividing by 0.008 rather than 0.08.',
          ],
        },
        {
          id: 'q-al-011', difficulty: 'medium',
          stem: 'A commodity futures curve is in contango. An investor holding a long futures position and rolling contracts forward will most likely experience:',
          choices: ['a positive roll return', 'a negative roll return', 'no roll return, since spot and futures converge at expiry'],
          answer: 1,
          explain: 'In contango the futures price exceeds the spot price, so each roll sells a cheaper near contract and buys a more expensive deferred one. That repeated loss is a negative roll return.',
          why: [
            'A describes backwardation, the opposite curve shape.',
            'C is wrong because convergence at expiry is precisely the mechanism that *generates* the roll return.',
          ],
        },
        {
          id: 'q-al-012', difficulty: 'hard',
          stem: 'Compared with a leveraged buyout, venture capital investing is most likely characterised by:',
          choices: [
            'greater use of debt financing and more predictable cash flows',
            'a highly right-skewed return distribution, with most returns coming from a few investments',
            'investments in mature companies with stable operating histories',
          ],
          answer: 1,
          explain: 'Venture portfolios are built expecting most holdings to fail or return little, with overall performance driven by a small number of outsized successes. The resulting distribution is heavily right-skewed.',
          why: [
            'A describes buyouts, which use substantial leverage precisely because the targets have predictable cash flows.',
            'C also describes buyout targets; venture capital funds early-stage companies with little operating history.',
          ],
        },
      ],
    },

    {
      id: 'alt-hedge-fees',
      name: 'Hedge Funds and Fee Structures',
      los: [
        'Describe hedge fund strategies and their risk characteristics',
        'Calculate management fees, incentive fees and net returns to investors',
        'Explain hurdle rates and high-water marks',
        'Describe issues in performance appraisal of alternative investments',
      ],
      lessons: [
        {
          id: 'alt-hedge-fees-l1',
          title: 'Fees: where the exam actually tests you',
          minutes: 8,
          blocks: [
            {
              t: 'formula', name: 'The standard structure',
              x: '"2 and 20" = 2% management fee + 20% incentive fee\n\nManagement fee: usually on assets under management\nIncentive fee:  on profits, often subject to a hurdle rate\n                and/or a high-water mark',
            },
            {
              t: 'ul',
              x: [
                '**High-water mark** — no incentive fee is charged until previous losses have been recovered. It prevents the manager being paid twice for the same gains.',
                '**Hurdle rate** — a minimum return before incentive fees apply. A *soft* hurdle charges the fee on the entire gain once the hurdle is cleared; a *hard* hurdle charges only on the excess above it.',
                'Whether the incentive fee is calculated **net of** the management fee changes the answer — read the question carefully, as both conventions appear.',
              ],
            },
            {
              t: 'example', title: 'Worked example',
              x: 'A fund starts the year at $100m and ends at $120m before fees, with a "2 and 20" structure, a 5% soft hurdle, and fees calculated independently.\n\nManagement fee = 2% × 120 = $2.4m (if charged on ending assets)\nGross return = 20%, which clears the 5% hurdle\nIncentive fee = 20% × 20 = $4.0m\nTotal fees = $6.4m → investor\'s net return = (120 − 6.4 − 100)/100 = 13.6%',
            },
            {
              t: 'callout', label: 'Read the basis', kind: 'warn',
              x: 'Management fees may be charged on beginning assets, ending assets, or average assets. Incentive fees may be on gross or net-of-management-fee profit. The question always tells you — the marks are lost by assuming rather than reading.',
            },
            { t: 'h', x: 'Hedge fund strategies and appraisal issues' },
            {
              t: 'ul',
              x: [
                '**Equity strategies** — long/short, market neutral, dedicated short.',
                '**Event-driven** — merger arbitrage, distressed securities, activist positions.',
                '**Relative value** — convertible arbitrage, fixed income arbitrage.',
                '**Macro** — directional bets on rates, currencies and broad markets.',
              ],
            },
            { t: 'p', x: 'Reported index returns suffer from **survivorship bias** (failed funds disappear) and **backfill bias** (a fund\'s good historical record is added on joining an index). Both inflate apparent performance, and Sharpe ratios computed from smoothed returns compound the flattery.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-al-20', name: 'Management fee', expr: 'Fee rate × AUM (beginning, ending or average — as specified)', note: 'Charged regardless of performance.' },
        { id: 'f-al-21', name: 'Incentive fee', expr: 'Rate × profit above hurdle and high-water mark', note: 'Soft hurdle: fee on the whole gain. Hard hurdle: fee only on the excess.' },
        { id: 'f-al-22', name: 'Investor net return', expr: '(Ending value − total fees − beginning value) / beginning value', note: 'Always express the net figure over beginning capital.' },
      ],
      cards: [
        { id: 'c-al-20', front: 'High-water mark', back: 'No incentive fee until previous losses are recouped — the manager cannot be paid twice for the same gains.' },
        { id: 'c-al-21', front: 'Soft vs hard hurdle', back: 'Soft: once the hurdle is cleared, the fee applies to the entire gain. Hard: the fee applies only to the return above the hurdle.' },
        { id: 'c-al-22', front: 'Survivorship and backfill bias', back: 'Failed funds vanish from indices; newly added funds bring their good past records. Both overstate reported hedge fund performance.' },
      ],
      questions: [
        {
          id: 'q-al-020', difficulty: 'medium',
          vignette: 'A hedge fund begins the year with $200 million and ends at $250 million before fees. It charges a 2% management fee on ending assets and a 20% incentive fee, calculated independently of the management fee, with no hurdle.',
          stem: 'The investor\'s net return is closest to:',
          choices: ['20.0%', '18.0%', '17.5%'],
          answer: 2,
          explain: 'Management fee = 2% × 250 = $5.0m. Profit = 250 − 200 = $50m, so incentive fee = 20% × 50 = $10.0m. Total fees = $15.0m, leaving $235m. Net return = (235 − 200)/200 = 17.5%.',
          why: [
            'A (20.0%) is the gross return before any fees — the figure the fund earned, not the figure the investor keeps.',
            'B (18.0%) charges the management fee on *beginning* assets ($4.0m rather than $5.0m). The question specifies ending assets.',
          ],
        },
        {
          id: 'q-al-021', difficulty: 'hard',
          stem: 'A fund lost money last year and its net asset value remains below its previous peak. Under a high-water mark provision, the manager this year may charge:',
          choices: [
            'incentive fees on all gains made this year',
            'incentive fees only on gains above the previous peak value',
            'no fees of any kind until the peak is regained',
          ],
          answer: 1,
          explain: 'The high-water mark restricts *incentive* fees to profits that exceed the highest previous value, ensuring investors are not charged twice for recovering the same ground.',
          why: [
            'A ignores the provision entirely.',
            'C overstates it — the **management** fee is charged on assets regardless of performance; only the incentive fee is restricted.',
          ],
        },
        {
          id: 'q-al-022', difficulty: 'expert',
          stem: 'Hedge fund index returns are most likely biased upward because:',
          choices: [
            'funds that fail stop reporting and drop out of the index, while newly added funds bring favourable historical records',
            'indices are equal-weighted rather than asset-weighted',
            'management fees are deducted twice from reported returns',
          ],
          answer: 0,
          explain: 'Survivorship bias removes the worst performers from the record, and backfill bias adds strong prior histories when successful funds join. Both push reported index performance above the experience of a real investor.',
          why: [
            'B is a construction choice that affects representativeness but does not systematically inflate returns.',
            'C would bias returns *downward*, and in any case is not standard practice.',
          ],
        },
      ],
    },
  ],
};
