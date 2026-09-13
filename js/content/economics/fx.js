// Economics · Module 8 — Exchange Rate Calculations. Original wording and numbers.

export default {
  id: 'econ-fx',
  name: 'Exchange Rate Calculations',
  los: [
    'Calculate and interpret currency cross-rates',
    'Explain the arbitrage relationship between spot and forward exchange rates and interest rates, calculate a forward rate using points or in percentage terms, and interpret a forward discount or premium',
  ],
  lessons: [
    /* ------------------------------------------------------------ */
    {
      id: 'econ-fx-cross',
      title: 'Cross-rates and triangular arbitrage',
      minutes: 11,
      intro: 'Given two exchange rates that share a currency, you can always find the third. The trick is arranging the quotes so the shared currency cancels.',
      blocks: [
        { t: 'p', x: 'A **cross-rate** is the exchange rate between two currencies calculated from their rates against a third (usually the US dollar). Dealers and trading platforms do this automatically, but you must be able to do it by hand.' },
        {
          t: 'formula', name: 'Cross-rate',
          x: 'A/C = (A/B) × (B/C)\n\nWrite each quote as a fraction and multiply so the common currency B cancels.\nIf the common currency does not cancel, invert one quote first:\n(B/A)⁻¹ = A/B',
        },
        {
          t: 'steps',
          title: 'Worked example 1 — no inversion needed',
          given: 'CHF/USD = 0.8800 and USD/EUR = 1.0900.',
          ask: 'What is the CHF/EUR cross-rate?',
          x: [
            'Write the target: CHF/EUR. We need CHF on top and EUR on the bottom.',
            'CHF/USD × USD/EUR — the USD on the bottom of the first cancels the USD on top of the second.',
            '0.8800 × 1.0900 = **0.9592**.',
          ],
          result: 'CHF/EUR = 0.9592: one euro buys about 0.96 Swiss francs.',
        },
        {
          t: 'steps',
          title: 'Worked example 2 — knowing when to invert',
          given: 'Market conventions give CAD/USD = 1.3600 and USD/AUD = 0.6600.',
          ask: 'What is the CAD/AUD cross-rate?',
          x: [
            'Target: CAD/AUD.',
            'CAD/USD × USD/AUD: USD cancels directly — no inversion needed here. 1.3600 × 0.6600 = **0.8976**.',
            'Now suppose instead you wanted JPY/CAD from CAD/USD = 1.3600 and JPY/USD = 150.00. Multiplying CAD/USD × JPY/USD would not cancel USD.',
            'Invert CAD/USD: USD/CAD = 1 / 1.3600 = 0.73529. Then USD/CAD × JPY/USD = JPY/CAD = 0.73529 × 150.00 = **110.29**.',
          ],
          result: 'CAD/AUD = 0.8976 and JPY/CAD = 110.29. Always check the units cancel before multiplying.',
        },
        {
          t: 'callout', label: 'Division shortcut',
          x: 'When both quotes share the same **price** currency, divide: JPY/GBP ÷ JPY/USD = USD/GBP. When they share the same **base** currency, also divide: USD/EUR ÷ USD/GBP = GBP/EUR. Writing the fractions out prevents mistakes.',
        },
        {
          t: 'check',
          q: 'Given USD/GBP = 1.2700 and USD/EUR = 1.0900, the GBP/EUR cross-rate is closest to:',
          choices: ['0.8583', '1.1651', '1.3843'],
          answer: 0,
          explain: 'GBP/EUR = USD/EUR × GBP/USD = 1.0900 × (1/1.2700) = 1.0900 / 1.2700 = 0.8583. 1.1651 is EUR/GBP; 1.3843 multiplies the quotes so USD does not cancel.',
        },
        {
          t: 'check',
          q: 'Given JPY/USD = 150.00 and USD/GBP = 1.2700, the JPY/GBP cross-rate is closest to:',
          choices: ['118.11', '190.50', '0.0085'],
          answer: 1,
          explain: 'JPY/USD × USD/GBP = 150.00 × 1.2700 = 190.50 yen per pound. Dividing gives 118.11, which does not cancel the dollar.',
        },
        { t: 'h', x: 'Triangular arbitrage' },
        { t: 'p', x: 'Cross-rates must be consistent with the rates they are built from. If a dealer quotes a cross-rate that differs from the implied one, a trader can buy the currency where it is cheap and sell it where it is dear — a riskless profit through three currencies, called **triangular arbitrage**. In practice human traders and algorithms remove such gaps almost instantly, so you can assume quoted cross-rates match implied ones.' },
        {
          t: 'steps',
          title: 'Worked example — spotting the arbitrage',
          given: 'JPY/USD = 150.00 and USD/GBP = 1.2700, so the implied JPY/GBP is 190.50. A dealer mistakenly quotes JPY/GBP = 192.00.',
          ask: 'How can a trader profit?',
          x: [
            'Pounds are cheap via the dollar route (190.50 yen each) and expensive at the dealer (192.00 yen each).',
            '**Buy** £1 through the dollar: sell ¥190.50 for $1.27, then use $1.27 to buy £1.',
            '**Sell** that £1 to the dealer for **¥192.00**.',
            'Profit = 192.00 − 190.50 = **¥1.50 per pound**, with no risk and no capital left exposed.',
          ],
          result: 'Traders would keep doing this until the dealer\'s quote returned to about 190.50.',
        },
        { t: 'h', x: 'Using expected rates' },
        {
          t: 'steps',
          title: 'Worked example — which currency will be strongest?',
          given: 'A research report shows spot and one-year expected rates: USD/EUR 1.0900 → 1.0791; USD/GBP 1.2700 → 1.2827; CHF/USD 0.8800 → 0.8712.',
          ask: 'Rank the euro, pound and Swiss franc by expected change against the US dollar.',
          x: [
            'Euro (base in USD/EUR): 1.0791/1.0900 − 1 = **−1.0%** against the dollar.',
            'Pound (base in USD/GBP): 1.2827/1.2700 − 1 = **+1.0%**.',
            'Swiss franc (price currency in CHF/USD): S₀/S₁ − 1 = 0.8800/0.8712 − 1 = **+1.01%**.',
          ],
          result: 'Most appreciation to least: Swiss franc (+1.01%), pound (+1.0%), euro (−1.0%). When a currency is the price currency, invert before calculating its percentage change.',
        },
        {
          t: 'takeaways',
          x: [
            'Cross-rate: multiply quotes so the common currency cancels, inverting one if necessary.',
            'Inconsistent cross-rates create riskless triangular arbitrage, which markets eliminate quickly.',
            'For percentage changes, make the currency of interest the base currency first.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-fx-forward',
      title: 'Forward rates, forward points and interest rate parity',
      minutes: 15,
      intro: 'A forward rate is not a forecast. It is the price that removes any riskless profit from borrowing in one currency and investing in another.',
      blocks: [
        { t: 'h', x: 'Forward points' },
        { t: 'p', x: 'Forward rates are usually quoted as **points** (pips) added to the spot rate: the difference between forward and spot, scaled to the last decimal of the spot quote.' },
        {
          t: 'formula', name: 'Forward points',
          x: 'Forward points = (F − S) × 10,000   (four-decimal quotes)\nForward points = (F − S) × 100      (yen quotes, two decimals)\n\nF = S + points / 10,000\n\nPositive points → base currency at a forward PREMIUM\nNegative points → base currency at a forward DISCOUNT',
        },
        {
          t: 'steps',
          title: 'Worked example — from points to a forward rate',
          given: 'Spot USD/EUR = 1.08000. Three-month forward points are +40.2; twelve-month points are +157.3.',
          ask: 'What are the forward rates, and what is the three-month premium in percentage terms?',
          x: [
            'Three-month forward = 1.08000 + 40.2/10,000 = 1.08000 + 0.00402 = **1.08402**.',
            'Twelve-month forward = 1.08000 + 0.01573 = **1.09573**.',
            'Percentage premium (3 months) = 1.08402 / 1.08000 − 1 = **+0.372%**.',
            'Going the other way: 1.08000 × (1 + 0.00372) ≈ 1.08402.',
          ],
          result: 'Both forwards are above spot, so the euro (base currency) trades at a forward premium — and points grow with maturity.',
        },
        {
          t: 'check',
          q: 'Spot GBP/EUR is 0.8600 and the one-month forward points are −2.1. The one-month forward rate is closest to:',
          choices: ['0.8579', '0.86021', '0.85979'],
          answer: 2,
          explain: 'F = 0.8600 + (−2.1 / 10,000) = 0.8600 − 0.00021 = 0.85979. Dividing by 1,000 would give 0.8579.',
        },
        { t: 'h', x: 'Why forward rates are set by interest rates' },
        { t: 'p', x: 'An investor with one unit of domestic currency has two risk-free choices for one period:' },
        {
          t: 'ol',
          x: [
            '**Invest at home** at the domestic risk-free rate: ends with (1 + r_d).',
            '**Convert, invest abroad, and lock in the conversion back**: convert at spot, earn the foreign risk-free rate, and sell the proceeds forward today. This is fully hedged, so it is also risk-free.',
          ],
        },
        { t: 'p', x: 'Two riskless investments must earn the same return; otherwise traders borrow in the cheaper one and invest in the better one for a guaranteed profit. That no-arbitrage condition is **covered interest rate parity**.' },
        {
          t: 'formula', name: 'Covered interest rate parity',
          x: 'F(f/d) = S(f/d) × (1 + r_f) / (1 + r_d)\n\nIn price/base form:\nF(P/B) = S(P/B) × [1 + r_P × (days/360)] / [1 + r_B × (days/360)]\n\nForward points (in decimal):\nF − S = S × (r_P − r_B) × τ / (1 + r_B × τ),   τ = days/360',
        },
        {
          t: 'callout', label: 'The rule that never changes',
          x: 'The currency with the **higher interest rate trades at a forward discount**; the currency with the lower rate trades at a forward premium. The forward exchange rate offsets the interest advantage exactly, so hedged returns are the same in both currencies.',
        },
        {
          t: 'steps',
          title: 'Worked example — computing a forward rate',
          given: 'Spot USD/EUR = 1.0800. The one-year US dollar rate is 4.5% and the one-year euro rate is 3.0%.',
          ask: 'What are the one-year and 90-day forward rates (rates quoted on an annual, actual/360 basis)?',
          x: [
            'USD is the price currency, EUR the base. One year: F = 1.0800 × 1.045 / 1.030 = **1.09573**.',
            'Points = (1.09573 − 1.08000) × 10,000 = **+157.3**. The euro, with the lower rate, is at a premium.',
            '90 days: τ = 90/360 = 0.25. F = 1.0800 × (1 + 0.045 × 0.25) / (1 + 0.030 × 0.25) = 1.0800 × 1.01125 / 1.00750 = **1.08402**.',
            'Check with the points formula: 1.0800 × (0.045 − 0.030) × 0.25 / 1.0075 = 0.00402 → **+40.2 points**.',
          ],
          result: 'One-year forward 1.09573 (+157.3); 90-day forward 1.08402 (+40.2).',
        },
        {
          t: 'check',
          q: 'Spot USD/GBP is 1.2500. The 180-day dollar rate is 4.0% and the 180-day sterling rate is 5.0%, both annual on a 360-day basis. The 180-day forward points are closest to:',
          choices: ['+61.0', '−61.0', '−125.0'],
          answer: 1,
          explain: 'F − S = 1.2500 × (0.04 − 0.05) × 0.5 / (1 + 0.05 × 0.5) = −0.00625 / 1.025 = −0.00610 → −61.0 points. Sterling, the higher-rate base currency, is at a discount. −125 ignores the 180/360 scaling.',
        },
        { t: 'h', x: 'When parity breaks: the arbitrage' },
        {
          t: 'steps',
          title: 'Worked example — exploiting a mispriced forward',
          given: 'Spot USD/EUR = 1.0800, one-year USD rate 4.5%, one-year EUR rate 3.0%. Parity implies F = 1.09573, but a dealer quotes the one-year forward at 1.1000.',
          ask: 'Where is the riskless profit for a dollar-based investor?',
          x: [
            'Dollar route: $1 at 4.5% grows to **$1.04500**.',
            'Hedged euro route: $1 → €1/1.08 = €0.925926; at 3% → €0.953704; sold forward at 1.1000 → **$1.049074**.',
            'The hedged euro route earns 4.91%, more than 4.5%. The euro is **overpriced** in the forward market.',
            'Arbitrage: **borrow dollars** at 4.5%, convert to euros at spot, invest at 3%, and **sell euros forward** at 1.1000. Profit ≈ 1.049074 − 1.045000 = **$0.00407 per dollar**, with none of your own capital.',
          ],
          result: 'Such gaps are arbitraged away almost immediately, which is why parity holds so closely in practice.',
        },
        { t: 'h', x: 'What drives the size of forward points' },
        {
          t: 'ul',
          x: [
            'Points are **proportional to the spot rate** and to the **interest rate differential** — double the gap and you roughly double the points.',
            'Points are **approximately (not exactly) proportional to maturity**, because τ also appears in the denominator. Six times the term gives slightly less than six times the points.',
            'The risk-free rates used are typically interbank deposit rates on an actual/360 day count.',
            'Given any three of spot, forward, the two interest rates and maturity, you can solve for the remaining one.',
          ],
        },
        {
          t: 'check',
          q: 'Holding spot and interest rates constant, extending a forward contract from 30 days to 180 days will most likely make the absolute forward points:',
          choices: ['exactly six times larger', 'slightly less than six times larger', 'unchanged'],
          answer: 1,
          explain: 'Points rise with τ, but τ also enlarges the denominator (1 + r_B × τ), so the increase is a little less than proportional.',
        },
        { t: 'h', x: 'Forward rates are not forecasts' },
        { t: 'p', x: 'It is tempting to read the forward rate as the market\'s expected future spot rate. Resist it. Parity implies the higher-rate currency should be *expected* to depreciate — yet in practice a central bank rate hike usually *strengthens* a currency. Forward rates are also poor predictors historically: even if unbiased on average, their errors are huge, because exchange rates respond to far more than the interest rate differential. Treat forwards simply as the output of the arbitrage equation.' },
        {
          t: 'check',
          q: 'A French company expects to receive £50 million in one month and wants to hedge. Spot GBP/EUR is 0.8752 and one-month points are −1.4. The best interpretation of the negative points is that:',
          choices: ['the euro is expected to depreciate over the month', 'one-month UK interest rates are higher than euro-area rates', 'one-month euro-area interest rates are higher than UK rates'],
          answer: 2,
          explain: 'The euro is the base currency and trades at a forward discount, which means the base currency has the higher interest rate. Forward discounts reflect rate differentials, not forecasts. (The hedge: sell pounds forward at 0.8752 − 0.00014 = 0.87506.)',
        },
        {
          t: 'takeaways',
          x: [
            'Forward points = (F − S) × 10,000 (× 100 for yen); positive points mean the base currency is at a premium.',
            'Covered interest parity: F(P/B) = S × (1 + r_P τ)/(1 + r_B τ). The higher-rate currency trades at a forward discount.',
            'Mispriced forwards create riskless arbitrage: borrow the currency that is cheap on a hedged basis, invest in the other, and lock in with the forward.',
            'Points scale with the spot rate, the rate differential and (approximately) maturity. Forwards are not reliable forecasts.',
          ],
        },
      ],
    },
  ],

  formulas: [
    { id: 'f-e-60', name: 'Cross rate', expr: 'A/C = (A/B) × (B/C)', note: 'Chain quotes so the common currency cancels; invert one quote if needed.' },
    { id: 'f-e-61', name: 'Covered interest rate parity', expr: 'F = S × [1 + i_P(d/360)] / [1 + i_B(d/360)]', note: 'P = price currency, B = base currency.' },
    { id: 'f-e-62', name: 'Percentage change in base currency', expr: 'S₁/S₀ − 1', note: 'The price currency changes by S₀/S₁ − 1 — not the negative of the base change.' },
    { id: 'f-e-63', name: 'Forward points', expr: '(F − S) × 10,000', note: 'For quotes to four decimal places; × 100 for yen quotes.' },
    { id: 'f-e-64', name: 'Forward points from interest rates', expr: 'F − S = S × (r_P − r_B) × τ / (1 + r_B × τ)', note: 'τ = days/360. Approximately proportional to maturity.' },
    { id: 'f-e-65', name: 'Forward premium or discount (%)', expr: 'F / S − 1', note: 'Positive: base currency at a forward premium. Negative: at a discount.' },
  ],

  cards: [
    { id: 'c-e-80', front: 'How is an exchange rate quote structured?', back: 'Price currency / base currency. USD/EUR = 1.10 means one euro (base) costs 1.10 dollars (price).' },
    { id: 'c-e-81', front: 'Which currency trades at a forward discount?', back: 'The one with the **higher** interest rate — covered interest rate parity removes the arbitrage.' },
    { id: 'c-e-82', front: 'Percentage change in the price currency', back: 'S₀/S₁ − 1. Not simply the negative of the base currency\'s change.' },
    { id: 'c-e-83', front: 'Covered interest rate parity', back: 'F = S × [1 + i_price(d/360)] / [1 + i_base(d/360)].' },
    { id: 'c-e-84', front: 'Triangular arbitrage', back: 'Profiting from a quoted cross-rate that differs from the rate implied by two other quotes — buy the currency where cheap, sell where dear.' },
    { id: 'c-e-85', front: 'Are forward rates good forecasts of future spot rates?', back: 'No. They come from the interest rate arbitrage equation and have large forecast errors.' },
  ],

  questions: [
    {
      id: 'q-ec-030', difficulty: 'easy',
      stem: 'The USD/EUR exchange rate moves from 1.10 to 1.16. This change means that:',
      choices: ['the euro has appreciated against the dollar', 'the dollar has appreciated against the euro', 'both currencies have appreciated'],
      answer: 0,
      explain: 'The euro is the base currency. A rise in the quote means each euro buys more dollars, so the euro has appreciated and the dollar depreciated.',
      why: [
        'B reverses the relationship — a rising quote is bad news for the price currency.',
        'C is impossible: exchange rate movements are relative by construction.',
      ],
    },
    {
      id: 'q-ec-031', difficulty: 'medium',
      stem: 'Given USD/GBP = 1.25 and USD/EUR = 1.10, the EUR/GBP cross rate is closest to:',
      choices: ['0.88', '1.14', '1.38'],
      answer: 1,
      explain: 'EUR/GBP = (USD/GBP) ÷ (USD/EUR) = 1.25 / 1.10 = 1.136, so about 1.14 euros per pound.',
      why: [
        'A (0.88) is the inverse, GBP/EUR.',
        'C (1.38) multiplies the two quotes instead of dividing, leaving dollars uncancelled.',
      ],
    },
    {
      id: 'q-ec-080', difficulty: 'medium',
      stem: 'The JPY/USD exchange rate falls from 150.00 to 120.00. The percentage change in the value of the yen is closest to:',
      choices: ['−20.0%', '+25.0%', '+20.0%'],
      answer: 1,
      explain: 'The yen is the price currency. Its change is S₀/S₁ − 1 = 150/120 − 1 = +25.0%. Each dollar now costs fewer yen, so the yen has appreciated.',
      why: [
        'A is the percentage change in the *dollar* (base currency): 120/150 − 1 = −20%.',
        'C simply flips the sign of the dollar\'s change, ignoring the asymmetry of percentage changes.',
      ],
    },
    {
      id: 'q-ec-081', difficulty: 'hard',
      stem: 'The spot USD/EUR rate is 1.1000. The one-year dollar interest rate is 5% and the one-year euro interest rate is 3%. The one-year forward rate is closest to:',
      choices: ['1.0790', '1.1214', '1.1220'],
      answer: 1,
      explain: 'F = 1.1000 × 1.05/1.03 = 1.1214. The euro has the lower interest rate, so as the base currency it trades at a forward premium.',
      why: [
        'A inverts the interest rate ratio, giving the euro a discount it should not have.',
        'C adds the 2% interest differential to the spot rate, 1.10 × 1.02, an approximation that is not exact parity.',
      ],
    },
    {
      id: 'q-ec-082', difficulty: 'expert',
      stem: 'The spot USD/GBP rate is 1.2500. The 90-day dollar interest rate is 4.0% and the 90-day sterling rate is 5.0%, both quoted on an annual, 360-day basis. The 90-day forward points are closest to:',
      choices: ['−31', '+31', '−125'],
      answer: 0,
      explain: 'F = 1.2500 × (1 + 0.04 × 90/360) / (1 + 0.05 × 90/360) = 1.2500 × 1.0100/1.0125 = 1.2469. Forward points = (1.2469 − 1.2500) × 10,000 ≈ −31. Sterling, the higher-rate base currency, trades at a forward discount.',
      why: [
        'B has the correct magnitude but the wrong sign — the higher-yielding base currency must trade at a discount.',
        'C applies the full annual 1% differential instead of scaling it to 90 days.',
      ],
    },
    {
      id: 'q-ec-121', difficulty: 'hard',
      vignette: 'CAD/USD = 1.3600 and JPY/USD = 150.00. A dealer quotes JPY/CAD = 112.00.',
      stem: 'A trader seeking triangular arbitrage should most likely:',
      choices: ['buy Canadian dollars from the dealer and sell them via the US dollar', 'sell Canadian dollars to the dealer and buy them via the US dollar', 'do nothing, because the quote is consistent'],
      answer: 1,
      explain: 'Implied JPY/CAD = 150.00 / 1.3600 = 110.29. The dealer pays 112.00 yen per Canadian dollar, so buy CAD cheaply via the dollar route and sell it to the dealer, earning about ¥1.71 per CAD.',
      why: [
        'A buys where the Canadian dollar is expensive (112.00) and sells where it is cheap (110.29), locking in a loss.',
        'C is wrong because the quote differs from the implied cross-rate by about 1.5%.',
      ],
    },
    {
      id: 'q-ec-122', difficulty: 'medium',
      stem: 'Spot USD/AUD is 0.6600 and the six-month forward rate is 0.6567. The Australian dollar is trading at a six-month forward:',
      choices: ['premium, and Australian rates are lower than US rates', 'discount, and Australian rates are higher than US rates', 'discount, and Australian rates are lower than US rates'],
      answer: 1,
      explain: 'The forward is below spot, so the base currency (AUD) is at a forward discount. By covered interest parity, the base currency trades at a discount when its interest rate is higher.',
      why: [
        'A gets the direction wrong: the forward rate is below spot, which is a discount for the base currency.',
        'C pairs the discount with the wrong interest rate relationship — lower rates would imply a premium.',
      ],
    },
  ],
};
