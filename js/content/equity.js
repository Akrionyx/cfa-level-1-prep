// Equity Investments — deep content. Original wording throughout.

export default {
  id: 'equity',
  name: 'Equity Investments',
  short: 'Equity',
  weight: '11–14%',
  weightMid: 12.5,
  depth: 'deep',
  summary:
    'How markets are organised, how indexes are built, whether prices are efficient, how to analyse industries and companies, and how to turn that analysis into a value. Calculation-light relative to its weight — most marks come from clear conceptual reasoning.',
  modules: [
    /* ---------------------------------------------------------- */
    {
      id: 'eq-markets',
      name: 'Market Organization and Structure',
      los: [
        'Explain the main functions of the financial system and classify assets and markets',
        'Describe the major types of financial intermediaries and the services they provide',
        'Compare positions an investor can take and calculate leverage ratios, margin call prices and leveraged returns',
        'Compare execution, validity and clearing instructions, and market versus limit orders',
        'Compare primary and secondary markets and quote-driven, order-driven and brokered markets',
        'Describe the characteristics of a well-functioning financial system and objectives of market regulation',
      ],
      lessons: [
        {
          id: 'eq-markets-l0',
          title: 'What markets do and who makes them work',
          minutes: 8,
          blocks: [
            { t: 'p', x: 'The financial system lets people **save** (move money to the future), **borrow** (bring it to the present), **raise equity capital**, **manage risk**, **exchange assets** immediately, and **trade on information**. Its broader job is to allocate capital to its most productive uses by discovering prices.' },
            {
              t: 'table',
              head: ['Intermediary', 'Role'],
              rows: [
                ['Brokers', 'Find counterparties for clients; do not take positions themselves'],
                ['Dealers', 'Trade from their own inventory, providing liquidity and earning the bid–ask spread'],
                ['Exchanges and alternative trading systems', 'Venues where buyers and sellers meet; exchanges also regulate members'],
                ['Securitisers and depository institutions', 'Pool assets or deposits and transform them into securities or loans'],
                ['Insurers', 'Pool and transfer risk'],
                ['Clearinghouses and custodians', 'Settle trades, guarantee performance, and safeguard assets'],
              ],
            },
            { t: 'h', x: 'Positions and leverage' },
            { t: 'p', x: 'A **long** position benefits when the asset rises. A **short** seller borrows and sells an asset, hoping to repurchase it cheaper; the potential loss is theoretically unlimited, and the short must pay any dividends to the lender. Investors can lever positions by borrowing on **margin**.' },
            {
              t: 'formula', name: 'Margin mathematics',
              x: 'Leverage ratio = 1 / Initial margin\n\nMargin call price (long) = P₀ × (1 − Initial margin) / (1 − Maintenance margin)\n\nLeveraged return = (Ending value − Beginning value + Dividends − Interest − Commissions)\n                   / Initial equity',
            },
            {
              t: 'example', title: 'Worked example',
              x: 'Buy 100 shares at $40 with 50% initial margin. Borrow $2,000 at 5%. After one year the price is $48 and a $1 dividend is paid.\n\nGain = $800; dividends = $100; interest = $100\nReturn on $2,000 of equity = (800 + 100 − 100) / 2,000 = 40%\n\nThe unlevered return would have been (8 + 1)/40 = 22.5%.',
            },
          ],
        },
        {
          id: 'eq-markets-l1',
          title: 'Orders, markets and a well-functioning system',
          minutes: 8,
          blocks: [
            {
              t: 'table',
              head: ['Instruction type', 'Examples'],
              rows: [
                ['Execution', '**Market order** — execute immediately at the best available price. **Limit order** — execute only at the limit price or better.'],
                ['Validity', 'Day order; good-till-cancelled; immediate-or-cancel (fill or kill); good-on-close; stop orders'],
                ['Clearing', 'Who settles the trade, and whether a sell is a long sale or a short sale'],
              ],
            },
            {
              t: 'callout', label: 'The trade-off',
              x: 'A market order guarantees execution but not price. A limit order guarantees price but not execution. A **stop-loss** order becomes a market order once the stop price is reached — so in a fast-falling market it may execute well below the stop.',
            },
            { t: 'h', x: 'Primary and secondary markets' },
            { t: 'p', x: 'In the **primary** market, issuers sell new securities: through underwritten offerings (the bank guarantees the sale), best-efforts offerings (the bank only tries), private placements, shelf registrations, or rights offerings to existing shareholders. **Secondary** markets let investors trade existing securities; their liquidity is what makes investors willing to buy in the primary market.' },
            {
              t: 'table',
              head: ['Market structure', 'How prices are set'],
              rows: [
                ['Quote-driven (dealer)', 'Dealers post bid and ask prices and trade from inventory'],
                ['Order-driven', 'Buyers\' and sellers\' orders are matched by rules — price priority, then display or time'],
                ['Brokered', 'Brokers search for counterparties for unique or illiquid assets'],
              ],
            },
            { t: 'p', x: 'Trading can be in **call markets**, where orders accumulate and trade at a single time and price, or **continuous markets**, where trades occur whenever buy and sell orders match.' },
            { t: 'h', x: 'A well-functioning system' },
            { t: 'p', x: 'It is **operationally efficient** (low trading costs), **informationally efficient** (prices reflect available information) and **allocationally efficient** (capital flows to its most productive uses). Regulation aims to control fraud, agency problems and systemic risk, promote fairness, set reporting standards and ensure that financial firms hold adequate capital.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-eq-2', name: 'Leveraged return', expr: '(Gain + Dividends − Interest − Commissions) / Initial equity', note: 'Margin magnifies both gains and losses.' },
        { id: 'f-eq-3', name: 'Margin call price (long)', expr: 'P₀ × (1 − initial margin) / (1 − maintenance margin)', note: 'Price at which equity falls to the maintenance level.' },
        { id: 'f-eq-4', name: 'Leverage ratio', expr: '1 / Initial margin', note: '50% initial margin → 2× leverage.' },
      ],
      cards: [
        { id: 'c-eq-4', front: 'Market order vs limit order', back: 'Market: guaranteed execution, uncertain price. Limit: guaranteed price or better, uncertain execution.' },
        { id: 'c-eq-5', front: 'Quote-driven vs order-driven market', back: 'Quote-driven: dealers post prices and trade from inventory. Order-driven: investors\' orders are matched by trading rules.' },
        { id: 'c-eq-6', front: 'Leverage ratio with 40% initial margin', back: '1 / 0.40 = 2.5×.' },
        { id: 'c-eq-7', front: 'Three forms of efficiency in a well-functioning system', back: 'Operational (low costs), informational (prices reflect information), allocational (capital to its best uses).' },
      ],
      questions: [
        {
          id: 'q-eq-030', difficulty: 'easy',
          stem: 'An investor wants to buy a stock but will not pay more than $25 per share. The appropriate order is:',
          choices: ['a market order', 'a limit order at $25', 'a stop-loss order at $25'],
          answer: 1,
          explain: 'A buy limit order executes only at the limit price or lower, protecting the investor from overpaying — at the cost of possibly not executing.',
          why: [
            'A executes at whatever price is available, which could exceed $25.',
            'C is used to limit losses on an existing position; a buy stop triggers when the price rises *to* $25, then executes at market.',
          ],
        },
        {
          id: 'q-eq-003', difficulty: 'medium',
          stem: 'An investor buys 100 shares at $50 with 50% initial margin and a 30% maintenance margin. The price at which a margin call occurs is closest to:',
          choices: ['$35.71', '$30.00', '$25.00'],
          answer: 0,
          explain: 'Margin call price = 50 × (1 − 0.50)/(1 − 0.30) = 25/0.70 = $35.71.',
          why: [
            'B applies the maintenance margin directly to the purchase price.',
            'C is the amount borrowed per share, not the trigger price.',
          ],
        },
        {
          id: 'q-eq-031', difficulty: 'hard',
          vignette: 'An investor buys 100 shares at $40 using 50% initial margin, borrowing at 5% a year. After one year the shares trade at $48, and a $1 per share dividend has been received. Ignore commissions.',
          stem: 'The return on the investor\'s equity is closest to:',
          choices: ['40.0%', '22.5%', '45.0%'],
          answer: 0,
          explain: 'Equity invested = $2,000; borrowed = $2,000; interest = $100. Gain $800 + dividends $100 − interest $100 = $800. Return = 800/2,000 = 40%.',
          why: [
            'B is the unlevered return, (8 + 1)/40.',
            'C ignores the interest on the margin loan.',
          ],
        },
        {
          id: 'q-eq-032', difficulty: 'expert',
          stem: 'Compared with a buyer of the same stock, a short seller most likely faces:',
          choices: [
            'a maximum loss equal to the initial sale proceeds',
            'theoretically unlimited losses, and an obligation to pay dividends to the share lender',
            'no margin requirements, because no cash is borrowed',
          ],
          answer: 1,
          explain: 'A stock\'s price has no upper bound, so a short seller\'s potential loss is unlimited. The short seller must also compensate the lender for dividends paid while the position is open, and must post margin.',
          why: [
            'A describes the maximum *gain* of a short sale (if the price falls to zero), not the maximum loss.',
            'C is wrong — short sellers borrow securities and must post collateral and maintain margin.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eq-indexes',
      name: 'Security Market Indexes',
      los: [
        'Describe a security market index and distinguish price return from total return',
        'Calculate and interpret the value and return of price-weighted, equal-weighted and market-capitalisation-weighted indexes',
        'Describe rebalancing and reconstitution',
        'Describe uses of indexes and types of equity, fixed income, commodity, real estate and hedge fund indexes',
      ],
      lessons: [
        {
          id: 'eq-indexes-l1',
          title: 'Index construction changes what you measure',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'An index represents the performance of a group of securities. A **price return** index reflects only price changes; a **total return** index also reinvests income such as dividends. Over long horizons the difference is large, so benchmark comparisons must use the same basis.' },
            {
              t: 'table',
              head: ['Weighting', 'Mechanics', 'Bias / effect'],
              rows: [
                ['Price-weighted', 'Sum of prices ÷ divisor', 'High-priced shares dominate; a stock split changes influence arbitrarily'],
                ['Equal-weighted', 'Same weight each', 'Small-cap tilt; requires frequent rebalancing'],
                ['Market-cap weighted', 'Weight ∝ market value', 'Tilts toward large and potentially overvalued firms; self-rebalancing'],
                ['Float-adjusted cap', 'Weight ∝ shares available to the public', 'Excludes closely held shares; most common in practice'],
                ['Fundamental-weighted', 'Weight by earnings, book value, sales, dividends', 'Value tilt; breaks the link with price'],
              ],
            },
            {
              t: 'formula', name: 'Price-weighted index and splits',
              x: 'Index = Σ Prices / Divisor\n\nAfter a split, choose a new divisor so the index value is unchanged:\nNew divisor = Σ New prices / Index value before the split',
            },
            {
              t: 'example', title: 'Three weightings, three answers',
              x: 'Stock A: 100 shares, price $10 → $12 (+20%)\nStock B: 50 shares, price $40 → $38 (−5%)\n\nPrice-weighted:  (12 + 38)/(10 + 40) − 1 = 0.0%\nEqual-weighted:  (20% − 5%)/2 = +7.5%\nCap-weighted:    (1,200 + 1,900)/(1,000 + 2,000) − 1 = +3.3%',
            },
            {
              t: 'callout', label: 'The point',
              x: 'A cap-weighted index automatically holds more of whatever has risen. An equal-weighted index does the opposite at each rebalancing. Neither is "correct" — but they measure different things and diverge substantially over a cycle.',
            },
            { t: 'h', x: 'Maintenance' },
            { t: 'p', x: '**Rebalancing** resets weights to their targets — essential for equal-weighted indexes. **Reconstitution** changes the constituents themselves, adding and removing securities to keep the index representative.' },
            { t: 'h', x: 'Uses and types' },
            { t: 'p', x: 'Indexes gauge market sentiment, proxy for asset classes in allocation models, measure systematic risk (beta), benchmark active managers, and serve as model portfolios for index funds and ETFs.' },
            {
              t: 'ul',
              x: [
                '**Fixed income indexes** are hard to build: the universe is enormous, many bonds trade rarely and in dealer markets, and constituents change constantly as bonds mature and are issued.',
                '**Commodity indexes** are built from futures contracts, so returns depend on the roll as well as spot prices.',
                '**Real estate indexes** use appraisals (smoothed), repeat sales, or REIT prices.',
                '**Hedge fund indexes** rely on voluntary reporting, creating survivorship and backfill bias.',
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-eq-1', name: 'Price-weighted index', expr: 'Σ prices / divisor', note: 'The divisor is adjusted for splits and composition changes.' },
        { id: 'f-eq-5', name: 'Cap-weighted index return', expr: 'Σ(Price₁ × Shares) / Σ(Price₀ × Shares) − 1', note: 'Large companies dominate.' },
        { id: 'f-eq-6', name: 'Total return', expr: '(P₁ − P₀ + Income) / P₀', note: 'Price return omits the income component.' },
      ],
      cards: [
        { id: 'c-eq-1', front: 'Which index weighting needs no rebalancing?', back: 'Market-cap weighted — weights adjust automatically as prices move.' },
        { id: 'c-eq-3', front: 'Main bias of a price-weighted index', back: 'High-priced stocks dominate regardless of company size, and splits arbitrarily change a stock\'s influence.' },
        { id: 'c-eq-8', front: 'Rebalancing vs reconstitution', back: 'Rebalancing resets weights; reconstitution changes the list of constituents.' },
        { id: 'c-eq-9', front: 'Why are bond indexes difficult to construct?', back: 'Huge universe, infrequent dealer-market trading, and constant turnover as bonds mature and are issued.' },
      ],
      questions: [
        {
          id: 'q-eq-040', difficulty: 'easy',
          stem: 'Compared with a price return index on the same securities, a total return index will most likely show:',
          choices: ['a lower value over time', 'a higher value over time, because it reinvests income', 'the same value, since both track the same prices'],
          answer: 1,
          explain: 'A total return index adds reinvested dividends and interest to price changes, so over time it grows faster than a price return index of the same constituents.',
          why: [
            'A reverses the relationship.',
            'C ignores income, which is precisely what distinguishes the two.',
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
          explain: 'Equal weights drift apart as prices move, so rebalancing is needed. Giving small companies the same weight as large ones creates a small-cap tilt.',
          why: [
            'B describes the cap-weighted index.',
            'C is wrong because the differing weights produce different exposures and returns.',
          ],
        },
        {
          id: 'q-eq-041', difficulty: 'hard',
          stem: 'A price-weighted index contains three stocks priced at $100, $50 and $30, with a divisor of 3. The $100 stock splits 2-for-1. The new divisor is closest to:',
          choices: ['2.17', '3.00', '1.50'],
          answer: 0,
          explain: 'Index before the split = 180/3 = 60. After the split, prices sum to 50 + 50 + 30 = 130. The new divisor keeps the index at 60: 130/60 = 2.17.',
          why: [
            'B leaves the divisor unchanged, which would make the index fall artificially to 43.3.',
            'C halves the divisor, as if every stock had split.',
          ],
        },
        {
          id: 'q-eq-042', difficulty: 'expert',
          vignette: 'An index contains two stocks. Stock A has 100 shares outstanding and its price rises from $10 to $12. Stock B has 50 shares outstanding and its price falls from $40 to $38.',
          stem: 'The return on a market-capitalisation-weighted index is closest to:',
          choices: ['+3.3%', '0.0%', '+7.5%'],
          answer: 0,
          explain: 'Beginning capitalisation = 1,000 + 2,000 = 3,000. Ending = 1,200 + 1,900 = 3,100. Return = 3,100/3,000 − 1 = +3.3%.',
          why: [
            'B is the price-weighted return, (12 + 38)/(10 + 40) − 1.',
            'C is the equal-weighted return, the simple average of +20% and −5%.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eq-efficiency',
      name: 'Market Efficiency',
      los: [
        'Describe market efficiency and the factors that affect it',
        'Contrast market value and intrinsic value',
        'Compare the weak, semi-strong and strong forms of efficiency and their implications',
        'Describe market anomalies and behavioural finance explanations',
      ],
      lessons: [
        {
          id: 'eq-efficiency-l1',
          title: 'How efficient are prices, and what that means for you',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'In an informationally efficient market, prices adjust quickly and rationally to new information. Market value then equals intrinsic value — the value a well-informed investor would assign — and it is difficult to earn returns above those justified by risk after costs.' },
            {
              t: 'table',
              head: ['Form', 'Prices reflect', 'Implication'],
              rows: [
                ['Weak', 'All past price and volume data', 'Technical analysis cannot generate abnormal returns'],
                ['Semi-strong', 'All publicly available information', 'Fundamental analysis on public data cannot either'],
                ['Strong', 'All information, public and private', 'Even insiders cannot — empirically not supported'],
              ],
            },
            { t: 'h', x: 'What makes a market more efficient' },
            {
              t: 'ul',
              x: [
                'More participants and more analysts following the securities.',
                'Greater availability of information and fair disclosure rules.',
                'Fewer impediments to trading — short-selling restrictions and limits to arbitrage slow the correction of overpricing.',
                'Lower transaction and information costs. Prices need only be efficient *within* those costs.',
              ],
            },
            {
              t: 'callout', label: 'The efficiency paradox', kind: 'warn',
              x: 'Markets become efficient only because analysts work to find mispricing. If everyone indexed, prices would stop being informative. Efficiency is a product of active effort, not a substitute for it.',
            },
            { t: 'h', x: 'Anomalies' },
            {
              t: 'table',
              head: ['Category', 'Examples'],
              rows: [
                ['Time-series', 'January effect; momentum over short horizons; overreaction and reversal over longer horizons'],
                ['Cross-sectional', 'Size effect (small caps outperforming); value effect (low P/B outperforming)'],
                ['Other', 'Closed-end fund discounts; post-earnings-announcement drift; long-run IPO underperformance'],
              ],
            },
            { t: 'p', x: 'Many anomalies weaken or vanish once published and traded on, or disappear after accounting for transaction costs and risk. Some may be compensation for risk factors not captured by simple models; some are the product of **data mining**. The honest conclusion is that the debate is unresolved.' },
            { t: 'h', x: 'Behavioural finance' },
            { t: 'p', x: 'Behavioural explanations point to predictable biases — **loss aversion**, **overconfidence**, **herding** and **information cascades** — that can push prices away from fundamental value. But biased individuals do not by themselves make a market inefficient; inefficiency persists only when arbitrage is limited and cannot correct the mispricing.' },
            {
              t: 'callout', label: 'Implication for portfolio management',
              x: 'The more efficient the market, the stronger the case for low-cost passive management. Active management still has a role: selecting securities in less efficient segments, and building portfolios suited to an investor\'s specific risk tolerance, taxes and constraints.',
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-eq-2', front: 'Weak-form efficiency implies', back: 'Past price and volume data are already in prices, so technical analysis cannot produce abnormal returns.' },
        { id: 'c-eq-24', front: 'Semi-strong form efficiency', back: 'Prices reflect all public information — fundamental analysis on public data cannot earn abnormal returns.' },
        { id: 'c-eq-25', front: 'Factors that reduce market efficiency', back: 'Few participants, limited information, short-sale restrictions and other limits to arbitrage, high transaction costs.' },
        { id: 'c-eq-26', front: 'Examples of cross-sectional anomalies', back: 'Size effect and value effect.' },
      ],
      questions: [
        {
          id: 'q-eq-050', difficulty: 'easy',
          stem: 'If markets are weak-form efficient, which strategy is least likely to earn abnormal returns?',
          choices: ['Trading on patterns in historical price charts', 'Analysing a company\'s financial statements', 'Trading on material nonpublic information'],
          answer: 0,
          explain: 'Weak-form efficiency means past prices and volumes are already reflected in current prices, so chart-based technical strategies cannot generate abnormal returns.',
          why: [
            'B could still work if the market is weak-form but not semi-strong-form efficient.',
            'C could work unless the market is strong-form efficient.',
          ],
        },
        {
          id: 'q-eq-001', difficulty: 'medium',
          stem: 'If semi-strong form market efficiency holds, an investor is least likely to earn abnormal returns using:',
          choices: ['material nonpublic information', 'publicly available financial statement analysis', 'a private research advantage not yet disclosed'],
          answer: 1,
          explain: 'Semi-strong efficiency means all public information is already in prices, so analysis built solely on public data cannot generate abnormal returns.',
          why: [
            'A and C involve non-public information, which retains value unless markets are strong-form efficient.',
          ],
        },
        {
          id: 'q-eq-051', difficulty: 'hard',
          stem: 'Regulators in a market ban short selling. The most likely effect on market efficiency is that:',
          choices: [
            'efficiency improves, because speculative pressure is reduced',
            'overpriced securities are corrected more slowly, reducing efficiency',
            'efficiency is unaffected, because long investors can still sell',
          ],
          answer: 1,
          explain: 'Short selling is how pessimistic investors act on the view that a security is overvalued. Removing it limits arbitrage against overpricing, so negative information is incorporated more slowly.',
          why: [
            'A mistakes a restriction on trading for an improvement in price discovery.',
            'C ignores that investors who do not own the security cannot express a negative view at all.',
          ],
        },
        {
          id: 'q-eq-052', difficulty: 'expert',
          stem: 'A well-publicised anomaly generated abnormal returns in historical data, but those returns largely disappeared in the years after academic papers documented it. The most likely explanation is that:',
          choices: [
            'the market became less efficient after publication',
            'investors traded on the anomaly and arbitraged it away, or it was partly a product of data mining',
            'the anomaly proves that markets are strong-form efficient',
          ],
          answer: 1,
          explain: 'Once an anomaly is widely known, investors exploit it and prices adjust — exactly what efficiency predicts. Alternatively, a pattern found by searching large datasets may never have been real. Either way, the post-publication decline is consistent with markets that are reasonably efficient.',
          why: [
            'A reverses the logic — disappearance of a mispricing indicates prices adjusting, not deteriorating.',
            'C overreaches; strong-form efficiency concerns private information and is not demonstrated by this evidence.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eq-securities',
      name: 'Overview of Equity Securities',
      los: [
        'Describe characteristics of types of equity securities, including voting rights and preference shares',
        'Compare the risk and return characteristics of types of equity securities',
        'Compare public and private equity and methods of investing in non-domestic equity',
        'Contrast the book value and market value of equity and compare ROE with the cost of equity',
      ],
      lessons: [
        {
          id: 'eq-securities-l1',
          title: 'What you actually own',
          minutes: 9,
          blocks: [
            {
              t: 'ul',
              x: [
                '**Common shares** — residual claim, voting rights, dividends at the board\'s discretion, unlimited upside, and the most junior claim in liquidation.',
                '**Preference shares** — fixed dividend with priority over common, usually non-voting. **Cumulative** preference shares accrue unpaid dividends that must be paid before any common dividend. **Participating** shares also share in profits above the fixed dividend.',
                '**Callable** shares can be redeemed by the issuer (bad for the investor, so higher yield); **putable** shares can be sold back by the investor (lower risk).',
              ],
            },
            { t: 'h', x: 'Voting' },
            { t: 'p', x: 'Under **statutory voting**, each share carries one vote per board seat. Under **cumulative voting**, a shareholder receives one vote per share for each seat being filled and may concentrate all of them on a single candidate — giving minority holders a realistic chance of board representation. **Dual-class** structures give some shares more votes than others.' },
            {
              t: 'callout', label: 'Risk ranking, most to least risky',
              x: 'Common shares → callable preference shares → non-callable preference shares → putable preference shares. The less the investor can be forced out of a good position, and the more they can exit a bad one, the lower the risk.',
            },
            { t: 'h', x: 'Investing across borders' },
            {
              t: 'table',
              head: ['Method', 'Features'],
              rows: [
                ['Direct investing', 'Buy shares on a foreign exchange, in the local currency, under local rules'],
                ['Depository receipts (DRs)', 'Trade like domestic shares, representing shares held by a custodian bank'],
                ['Sponsored DR', 'Issuer involved; investors typically receive voting rights and fuller disclosure'],
                ['Unsponsored DR', 'Issued without company involvement; the depository usually retains voting rights'],
                ['Global depository receipts', 'Issued outside the issuer\'s home market and outside the US'],
                ['Global registered shares', 'Identical shares traded in multiple currencies on multiple exchanges'],
              ],
            },
            { t: 'h', x: 'Private vs public equity' },
            { t: 'p', x: 'Private equity is illiquid, lightly disclosed and concentrated, but lets owners take a longer view without public market pressure. Public equity offers liquidity, price transparency and regulated disclosure.' },
            { t: 'h', x: 'Book value, market value and value creation' },
            { t: 'p', x: 'Book value is accumulated accounting investment; market value is the market\'s estimate of the present value of future cash flows. Market value exceeds book value when investors expect ROE to exceed the cost of equity — the company earns more than its owners require.' },
            {
              t: 'callout', label: 'Accounting ROE vs cost of equity',
              x: 'ROE is an accounting return on book equity. The cost of equity is the minimum return investors require given risk. A company creates value for shareholders only when it sustains ROE above that cost.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-eq-10', name: 'Return on equity', expr: 'ROE = Net income / Average shareholders\' equity', note: 'Compare against the cost of equity to judge value creation.' },
        { id: 'f-eq-12', name: 'Cumulative voting power', expr: 'Votes = Shares owned × Seats being filled', note: 'All votes may be cast for a single candidate.' },
      ],
      cards: [
        { id: 'c-eq-10', front: 'Cumulative preference shares', back: 'Unpaid dividends accumulate and must be paid in full before any common dividend.' },
        { id: 'c-eq-12', front: 'When does market value exceed book value?', back: 'When investors expect ROE to exceed the required return on equity.' },
        { id: 'c-eq-13', front: 'Sponsored vs unsponsored depository receipt', back: 'Sponsored: issuer involved, investors usually get voting rights. Unsponsored: issued without the company; the depository keeps voting rights.' },
        { id: 'c-eq-14', front: 'Risk ranking of equity securities', back: 'Common > callable preferred > non-callable preferred > putable preferred.' },
      ],
      questions: [
        {
          id: 'q-eq-011', difficulty: 'easy',
          stem: 'Which feature best distinguishes preference shares from common shares?',
          choices: [
            'Preference shareholders have superior voting rights',
            'Preference dividends have priority and are typically fixed',
            'Preference shares rank behind common shares in liquidation',
          ],
          answer: 1,
          explain: 'Preference shares carry a stated, usually fixed dividend paid before any common dividend, and rank ahead of common in liquidation.',
          why: [
            'A is wrong — preference shares are usually non-voting.',
            'C reverses the seniority.',
          ],
        },
        {
          id: 'q-eq-060', difficulty: 'medium',
          stem: 'An investor wants voting rights on a foreign company\'s shares while trading them on a domestic exchange in the domestic currency. The most suitable instrument is:',
          choices: ['an unsponsored depository receipt', 'a sponsored depository receipt', 'direct investment on the foreign exchange'],
          answer: 1,
          explain: 'Sponsored DRs are issued with the company\'s participation and typically pass voting rights to investors, while trading domestically like any local share.',
          why: [
            'A usually leaves voting rights with the depository bank.',
            'C would provide voting rights but requires trading abroad in the foreign currency.',
          ],
        },
        {
          id: 'q-eq-061', difficulty: 'hard',
          stem: 'A company elects five directors using cumulative voting. A shareholder owns 2,000 shares. The maximum number of votes the shareholder can cast for a single candidate is:',
          choices: ['2,000', '10,000', '400'],
          answer: 1,
          explain: 'Under cumulative voting, votes = shares × seats being filled = 2,000 × 5 = 10,000, and all may be cast for one candidate.',
          why: [
            'A describes statutory voting, where each share gets one vote per seat and cannot be concentrated.',
            'C divides rather than multiplies.',
          ],
        },
        {
          id: 'q-eq-062', difficulty: 'expert',
          stem: 'Ranked from least risky to most risky from the investor\'s perspective, the correct order is:',
          choices: [
            'putable preference shares, callable preference shares, common shares',
            'callable preference shares, putable preference shares, common shares',
            'common shares, putable preference shares, callable preference shares',
          ],
          answer: 0,
          explain: 'Putable preference shares give the investor an exit, reducing risk. Callable preference shares give the issuer the right to redeem them when it suits the issuer, increasing risk. Common shares, with no fixed dividend and the most junior claim, are riskiest.',
          why: [
            'B reverses the two preference share types.',
            'C places common shares, the riskiest claim, as least risky.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eq-industry',
      name: 'Industry and Competitive Analysis',
      los: [
        'Describe the purposes of industry analysis and approaches to classifying companies',
        'Describe the elements of an industry\'s external environment and industry life cycle',
        'Analyse industry structure and competitive forces',
        'Describe the competitive strategies available to companies',
      ],
      lessons: [
        {
          id: 'eq-industry-l1',
          title: 'Where profits come from: industries and strategy',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'Industry analysis tells you how profitable a typical company in a sector can be, how durable that profitability is, and what could change it. Companies are grouped by the products they sell, by business activity, or by commercial classification systems such as **GICS** and **ICB**, which organise firms by principal business activity into sectors, industries and sub-industries.' },
            {
              t: 'callout', label: 'Peer groups need judgement',
              x: 'A classification code is a starting point, not a peer group. Two companies in the same code can have very different customers, cost structures and business models. Build peer groups from companies that compete for the same customers and respond to the same drivers.',
            },
            { t: 'h', x: 'The industry life cycle' },
            {
              t: 'table',
              head: ['Stage', 'Growth', 'Profitability and competition'],
              rows: [
                ['Embryonic', 'Slow; high prices; low volume', 'High risk; many firms fail'],
                ['Growth', 'Rapidly rising demand', 'Improving profitability; competition relatively low because demand is expanding'],
                ['Shakeout', 'Slowing', 'Intense competition, excess capacity, price cutting, consolidation and failures'],
                ['Mature', 'Low; replacement demand', 'Stable; barriers to entry; industry leaders may have cost advantages'],
                ['Decline', 'Negative', 'Excess capacity, price competition, exits'],
              ],
            },
            { t: 'h', x: 'Five competitive forces' },
            {
              t: 'ul',
              x: [
                '**Threat of new entrants** — lower when barriers such as scale, regulation, brand and capital requirements are high.',
                '**Power of suppliers** — higher when suppliers are concentrated or inputs are unique.',
                '**Power of buyers** — higher when buyers are concentrated, switching costs are low, or products are undifferentiated.',
                '**Threat of substitutes** — higher when alternative products meet the same need at similar cost.',
                '**Rivalry among existing competitors** — intensified by many similar-sized firms, slow growth, high fixed costs and low differentiation.',
              ],
            },
            {
              t: 'callout', label: 'Barriers are the most durable driver', kind: 'warn',
              x: 'An industry that is highly profitable and easy to enter will not stay highly profitable. When assessing whether today\'s margins can persist, start with barriers to entry.',
            },
            { t: 'h', x: 'The external environment (PESTLE)' },
            { t: 'p', x: '**Political**, **economic**, **social**, **technological**, **legal** and **environmental** factors shape every industry — from interest rates and demographics to regulation, disruptive technology and climate policy.' },
            { t: 'h', x: 'Competitive strategies' },
            {
              t: 'ul',
              x: [
                '**Cost leadership** — being the lowest-cost producer, allowing competitive pricing while earning acceptable margins. Requires scale, efficiency and tight cost control.',
                '**Differentiation** — offering something customers value enough to pay a premium for: quality, brand, service, features.',
                '**Focus** — applying either strategy to a narrow segment of the market.',
              ],
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-eq-30', front: 'Stages of the industry life cycle', back: 'Embryonic → growth → shakeout → mature → decline.' },
        { id: 'c-eq-31', front: 'Characteristics of the shakeout stage', back: 'Slowing growth, intense competition, excess capacity, price cutting and consolidation.' },
        { id: 'c-eq-32', front: 'Five competitive forces', back: 'Threat of entrants, supplier power, buyer power, threat of substitutes, rivalry among competitors.' },
        { id: 'c-eq-33', front: 'Three generic competitive strategies', back: 'Cost leadership, differentiation, and focus.' },
        { id: 'c-eq-34', front: 'PESTLE', back: 'Political, economic, social, technological, legal, environmental factors.' },
      ],
      questions: [
        {
          id: 'q-eq-070', difficulty: 'easy',
          stem: 'An industry experiences slowing demand growth, falling prices, excess capacity and a wave of consolidation. It is most likely in which life cycle stage?',
          choices: ['Growth', 'Shakeout', 'Embryonic'],
          answer: 1,
          explain: 'When growth slows after an expansion, capacity built for rapid growth becomes excessive. Price competition intensifies and weaker firms exit or are acquired — the shakeout stage.',
          why: [
            'A features rapidly rising demand and relatively low competitive intensity.',
            'C features slow growth from a small base, high prices and uncertainty about the product.',
          ],
        },
        {
          id: 'q-eq-071', difficulty: 'medium',
          stem: 'Aircraft manufacturers rely on a very small number of engine makers whose technology is difficult to replicate. This most likely indicates:',
          choices: ['low bargaining power of suppliers', 'high bargaining power of suppliers', 'a high threat of substitutes'],
          answer: 1,
          explain: 'Concentrated suppliers of critical, hard-to-replace inputs can command favourable prices and terms, pressuring the buyer industry\'s margins.',
          why: [
            'A would require many interchangeable suppliers.',
            'C concerns alternatives to the industry\'s own products, not the supply of its inputs.',
          ],
        },
        {
          id: 'q-eq-072', difficulty: 'hard',
          stem: 'An industry currently earns returns well above its cost of capital, but requires little capital, faces minimal regulation, and has no significant brand loyalty. The most likely outlook for industry profitability is:',
          choices: [
            'sustained high returns, because current profitability is strong',
            'declining returns, as new entrants are attracted and compete away excess profits',
            'rising returns, as existing firms gain economies of scale',
          ],
          answer: 1,
          explain: 'With low barriers to entry, above-normal returns attract new competitors. Additional capacity and price competition erode profitability toward the cost of capital.',
          why: [
            'A extrapolates current profitability while ignoring the absence of barriers.',
            'C is inconsistent with low capital requirements, which limit the advantage of scale.',
          ],
        },
        {
          id: 'q-eq-073', difficulty: 'expert',
          stem: 'A company produces an undifferentiated commodity and competes successfully by operating the industry\'s largest, most efficient plants. Its strategy and main vulnerability are best described as:',
          choices: [
            'differentiation; vulnerability to shifts in customer preferences',
            'cost leadership; vulnerability to technological change or competitors achieving lower costs',
            'focus; vulnerability to larger competitors entering its niche',
          ],
          answer: 1,
          explain: 'Competing on scale and efficiency in an undifferentiated product is cost leadership. Its advantage disappears if a competitor achieves lower costs or new technology makes existing scale obsolete.',
          why: [
            'A requires products customers value enough to pay a premium for, which a commodity lacks.',
            'C describes targeting a narrow segment, not operating the largest plants in the industry.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eq-company',
      name: 'Company Analysis: Past, Present and Forecasting',
      los: [
        'Describe the elements of a company analysis: business model, revenue drivers, profitability, working capital and capital investment',
        'Evaluate a company\'s revenue, operating profitability and capital structure using key metrics',
        'Explain approaches to forecasting and the choice of forecast horizon',
        'Forecast revenue, operating costs, working capital, capital investment and capital structure',
        'Describe scenario analysis and sensitivity analysis',
      ],
      lessons: [
        {
          id: 'eq-company-l1',
          title: 'Analysing the company as it is',
          minutes: 8,
          blocks: [
            { t: 'p', x: 'Company analysis starts with the business model — what the company sells, to whom, through which channels — and then works through the numbers that business model produces.' },
            {
              t: 'table',
              head: ['Area', 'Questions and metrics'],
              rows: [
                ['Revenue', 'Volume × price? Growth by segment and geography? Organic vs acquired? Same-store sales, average revenue per user, backlog'],
                ['Operating profitability', 'Gross and operating margins; fixed vs variable costs; economies of scale; operating leverage'],
                ['Working capital', 'DSO, DOH, DPO and the cash conversion cycle; how growth consumes working capital'],
                ['Capital investment', 'Maintenance vs growth capex; capex relative to depreciation; ROIC'],
                ['Capital structure', 'Leverage, coverage, debt maturities, cost of debt'],
              ],
            },
            {
              t: 'callout', label: 'Decompose before judging',
              x: 'Ten percent revenue growth from price increases in a strong market is a different business from ten percent growth driven by acquisitions or discounting. Always split growth into its sources: volume, price, mix, currency and acquisitions.',
            },
            { t: 'p', x: '**Same-store (like-for-like) sales** compare revenue from outlets open in both periods, stripping out the effect of opening or closing locations. **Average revenue per user (ARPU)** separates growth from more customers and growth from more revenue per customer.' },
          ],
        },
        {
          id: 'eq-company-l2',
          title: 'Forecasting the company as it will be',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'Analysts forecast either **line items** directly or the underlying **drivers** (volume, price, market share), from which line items follow. Driver-based forecasts are easier to test and reason about.' },
            {
              t: 'ul',
              x: [
                '**Historical results** — useful as a base rate, especially for mature, stable companies.',
                '**Mean reversion** — extreme growth rates and margins tend to converge toward industry norms over time.',
                '**Management guidance** — informative but potentially biased; test it against history and peers.',
                '**Analyst discretion** — required whenever the future is expected to differ from the past.',
              ],
            },
            { t: 'h', x: 'Revenue: top-down vs bottom-up' },
            { t: 'p', x: '**Top-down** approaches start from the economy or market (GDP growth, market size × market share). **Bottom-up** approaches build from products, stores, customers or capacity (units × price). **Hybrid** approaches combine the two, using one to sanity-check the other.' },
            { t: 'h', x: 'Costs, working capital and capex' },
            {
              t: 'ul',
              x: [
                'Forecast **COGS** as a percentage of revenue, adjusted for input prices and scale.',
                'Forecast **SG&A** by separating fixed and variable components.',
                'Forecast **interest expense** from forecast debt × interest rate, and **taxes** using the effective rate for earnings and the cash rate for cash flow.',
                'Forecast **working capital** using turnover or days ratios.',
                'Split **capex** into maintenance (often approximated by depreciation) and growth capex tied to expected expansion.',
              ],
            },
            {
              t: 'formula', name: 'Working capital from days ratios',
              x: 'Receivables = Revenue × DSO / 365\nInventory   = COGS × DOH / 365\nPayables    = COGS (or purchases) × DPO / 365',
            },
            {
              t: 'formula', name: 'Sustainable growth rate',
              x: 'g = ROE × b         where b = retention ratio = 1 − dividend payout ratio',
            },
            { t: 'h', x: 'Horizons and uncertainty' },
            { t: 'p', x: 'A **short-term** forecast covers the next few years in detail. A **long-term** forecast often uses a normalised year — one reflecting mid-cycle conditions — as the base for a terminal value, with growth consistent with the long-run economy. **Scenario analysis** changes several assumptions together to describe coherent alternative futures; **sensitivity analysis** changes one input at a time to find the assumptions that matter most.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-eq-11', name: 'Sustainable growth rate', expr: 'g = ROE × b,  where b = retention ratio = 1 − payout', note: 'The growth a firm can fund without new equity.' },
        { id: 'f-eq-13', name: 'Forecast receivables', expr: 'Revenue × DSO / 365', note: 'Days-based working capital forecast.' },
        { id: 'f-eq-14', name: 'Revenue by driver', expr: 'Volume × Price  (or Users × ARPU)', note: 'Driver-based forecasts are easier to test.' },
      ],
      cards: [
        { id: 'c-eq-11', front: 'Sustainable growth rate', back: 'g = ROE × retention ratio (b). Growth funded internally, without issuing equity.' },
        { id: 'c-eq-35', front: 'Top-down vs bottom-up revenue forecasting', back: 'Top-down: from the economy or market to the company. Bottom-up: from units, stores or customers upward.' },
        { id: 'c-eq-36', front: 'Scenario vs sensitivity analysis', back: 'Scenario: change several related assumptions together. Sensitivity: change one input at a time.' },
        { id: 'c-eq-37', front: 'Why use same-store sales?', back: 'They isolate growth from existing outlets, removing the effect of openings and closures.' },
        { id: 'c-eq-38', front: 'Common approximation for maintenance capex', back: 'Depreciation expense.' },
      ],
      questions: [
        {
          id: 'q-eq-010', difficulty: 'easy',
          stem: 'A company has an ROE of 15% and pays out 40% of earnings as dividends. Its sustainable growth rate is closest to:',
          choices: ['6.0%', '9.0%', '15.0%'],
          answer: 1,
          explain: 'b = 1 − 0.40 = 0.60. g = 15% × 0.60 = 9.0%.',
          why: [
            'A multiplies ROE by the payout ratio instead of the retention ratio.',
            'C assumes all earnings are retained.',
          ],
        },
        {
          id: 'q-eq-080', difficulty: 'medium',
          stem: 'An analyst forecasts a retailer\'s revenue by estimating the number of stores, the number of transactions per store, and the average transaction value. This approach is best described as:',
          choices: ['top-down', 'bottom-up', 'mean reversion'],
          answer: 1,
          explain: 'Building revenue from operating units and their economics is a bottom-up approach.',
          why: [
            'A starts from macroeconomic or market-level estimates and works down to the company.',
            'C concerns assuming performance converges to a long-term average, not how revenue is built.',
          ],
        },
        {
          id: 'q-eq-081', difficulty: 'hard',
          stem: 'An analyst forecasts next year\'s revenue at $730 million and expects days sales outstanding to remain at 45 days. Forecast accounts receivable are closest to:',
          choices: ['$90 million', '$60.8 million', '$45 million'],
          answer: 0,
          explain: 'Receivables = revenue × DSO / 365 = 730 × 45/365 = $90 million.',
          why: [
            'B divides revenue by 12, treating DSO as roughly one month.',
            'C mistakes the number of days for a dollar amount.',
          ],
        },
        {
          id: 'q-eq-082', difficulty: 'expert',
          stem: 'A company reports 12% revenue growth. Same-store sales grew 1%, and the remainder came from opening new stores funded by debt. The most appropriate analytical conclusion is that:',
          choices: [
            'the existing business is growing strongly and the growth rate should be extrapolated',
            'underlying growth in existing stores is weak, and future growth depends on continued capital investment and borrowing',
            'same-store sales are irrelevant because total revenue captures all growth',
          ],
          answer: 1,
          explain: 'Almost all of the growth comes from adding stores, not from existing ones. That growth consumes capital and debt, and slows sharply if expansion stops — a very different outlook from broad organic growth.',
          why: [
            'A ignores that existing stores are barely growing.',
            'C discards exactly the metric that separates organic performance from expansion.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eq-valuation',
      name: 'Equity Valuation: Concepts and Basic Tools',
      los: [
        'Evaluate whether a security is overvalued, fairly valued or undervalued',
        'Describe major categories of equity valuation models',
        'Calculate the intrinsic value of a share using dividend discount and free cash flow models',
        'Calculate and interpret price multiples, enterprise value multiples and justified multiples',
        'Describe asset-based valuation and the strengths and limitations of each approach',
      ],
      lessons: [
        {
          id: 'eq-valuation-l1',
          title: 'Three families of valuation',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'If estimated intrinsic value exceeds market price, a share appears **undervalued**; if below, **overvalued**. The confidence you place in that conclusion depends on the reliability of your model and inputs — a small difference is within the margin of error.' },
            { t: 'h', x: '1. Present value models' },
            {
              t: 'formula', name: 'Dividend discount models',
              x: 'One period:    V₀ = (D₁ + P₁) / (1 + r)\nGordon growth: V₀ = D₁ / (r − g),  requires r > g\nTwo-stage:     discount each high-growth dividend individually,\n               apply Gordon growth at the start of the stable phase,\n               and discount that terminal value back.\nPreferred:     V₀ = D / r',
            },
            {
              t: 'callout', label: 'The most common error', kind: 'warn',
              x: 'The terminal value from the Gordon formula is stated as of the *end of the final high-growth year* — one period before the first stable-phase dividend. Discount it back by that many years, not one more.',
            },
            { t: 'p', x: '**Free cash flow to equity** models replace dividends with FCFE and discount at the cost of equity. They suit companies that pay no dividends or pay dividends that differ from their capacity to distribute.' },
            { t: 'h', x: '2. Multiples' },
            {
              t: 'formula', name: 'Justified multiples from Gordon growth',
              x: 'Leading P/E:  P₀/E₁ = payout ratio / (r − g)\nTrailing P/E: P₀/E₀ = payout × (1 + g) / (r − g)\nJustified P/B: P₀/B₀ = (ROE − g) / (r − g)',
            },
            { t: 'p', x: 'The **method of comparables** values a stock relative to peers; the **method based on forecast fundamentals** derives a justified multiple from the company\'s own growth, payout and risk. Multiples are quick and intuitive, but relative: a stock that is cheap versus its peers may still be expensive if the whole group is overvalued.' },
            {
              t: 'table',
              head: ['Multiple', 'Best used when'],
              rows: [
                ['P/E', 'Earnings are positive and reasonably stable'],
                ['P/B', 'Assets are mostly financial or earnings are negative; common for banks'],
                ['P/S', 'Earnings are negative or volatile; less affected by accounting choices'],
                ['EV/EBITDA', 'Comparing firms with different capital structures; EBITDA is before interest'],
              ],
            },
            {
              t: 'formula', name: 'Enterprise value',
              x: 'EV = Market value of equity + Market value of debt + Preferred stock − Cash and short-term investments',
            },
            { t: 'h', x: '3. Asset-based valuation' },
            { t: 'p', x: 'Value equity as the market value of assets less liabilities. It works best for firms whose assets are liquid and separately marketable — holding companies, financial firms, natural resource companies, or businesses being liquidated — and poorly where value rests on intangibles and human capital that a balance sheet never captures.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-eq-20', name: 'Gordon growth model', expr: 'V₀ = D₁ / (r − g)', note: 'Constant-growth perpetuity; requires r > g.' },
        { id: 'f-eq-21', name: 'Justified leading P/E', expr: 'P₀/E₁ = payout / (r − g)', note: 'Higher payout and growth raise it; higher required return lowers it.' },
        { id: 'f-eq-24', name: 'Justified P/B', expr: 'P₀/B₀ = (ROE − g) / (r − g)', note: 'P/B > 1 when ROE exceeds the required return.' },
        { id: 'f-eq-22', name: 'Preferred share value', expr: 'V = D / r', note: 'A level perpetuity.' },
        { id: 'f-eq-23', name: 'Enterprise value', expr: 'EV = Market cap + Debt + Preferred − Cash', note: 'Capital-structure neutral; pair with EBITDA.' },
      ],
      cards: [
        { id: 'c-eq-20', front: 'Gordon growth model and its conditions', back: 'V₀ = D₁/(r − g). Requires r > g and dividends growing at a constant, sustainable rate.' },
        { id: 'c-eq-21', front: 'Justified leading P/E', back: 'P₀/E₁ = payout ratio / (r − g).' },
        { id: 'c-eq-22', front: 'When is EV/EBITDA preferred to P/E?', back: 'When comparing firms with different capital structures or when earnings are negative.' },
        { id: 'c-eq-23', front: 'Where does asset-based valuation work best?', back: 'Firms with liquid, separately marketable assets — holding companies, financials, resource firms. Poor for intangible-heavy businesses.' },
        { id: 'c-eq-27', front: 'Justified P/B', back: '(ROE − g) / (r − g).' },
      ],
      questions: [
        {
          id: 'q-eq-020', difficulty: 'easy',
          stem: 'A share is expected to pay a dividend of $3.00 next year, growing at 5% indefinitely. If the required return is 11%, the intrinsic value is closest to:',
          choices: ['$27.27', '$50.00', '$60.00'],
          answer: 1,
          explain: 'V₀ = 3.00 / (0.11 − 0.05) = $50.00.',
          why: [
            'A divides by the required return alone.',
            'C uses a 5% spread instead of 6%.',
          ],
        },
        {
          id: 'q-eq-021', difficulty: 'medium',
          stem: 'A firm has a payout ratio of 40%, a required return of 10% and a sustainable growth rate of 4%. Its justified leading P/E is closest to:',
          choices: ['4.0', '6.7', '10.0'],
          answer: 1,
          explain: 'P₀/E₁ = 0.40 / (0.10 − 0.04) = 6.67.',
          why: [
            'A divides payout by the required return alone.',
            'C is the inverse of the required return.',
          ],
        },
        {
          id: 'q-eq-022', difficulty: 'hard',
          vignette: 'A company will pay dividends of $2.00 in year 1 and $2.50 in year 2. From year 3 onward dividends grow at 4% forever. The required return is 10%.',
          stem: 'The intrinsic value today is closest to:',
          choices: ['$39.70', '$43.33', '$36.44'],
          answer: 0,
          explain: 'D₃ = $2.60. Terminal value at end of year 2 = 2.60/0.06 = $43.33. PV = 2.00/1.10 + 2.50/1.21 + 43.33/1.21 = 1.82 + 2.07 + 35.81 = $39.70.',
          why: [
            'B is the undiscounted terminal value.',
            'C discounts the terminal value by three years instead of two.',
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
          explain: 'If the whole sector is overvalued, every constituent can look cheap relative to the average while all are expensive in absolute terms.',
          why: [
            'A is false — P/E is undefined for negative earnings.',
            'C contains a false clause; accounting differences do affect earnings.',
          ],
        },
        {
          id: 'q-eq-024', difficulty: 'expert',
          stem: 'A company has a sustainable ROE of 15%, a required return on equity of 10%, and a long-term growth rate of 5%. Its justified price-to-book ratio is closest to:',
          choices: ['2.0', '1.5', '3.0'],
          answer: 0,
          explain: 'Justified P/B = (ROE − g)/(r − g) = (0.15 − 0.05)/(0.10 − 0.05) = 2.0. Earning 5 points above its required return justifies a premium to book value.',
          why: [
            'B is ROE divided by the required return, ignoring growth.',
            'C is ROE divided by the growth rate, which has no valuation meaning.',
          ],
        },
      ],
    },
  ],
};
