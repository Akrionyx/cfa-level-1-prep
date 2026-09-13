// Economics — starter depth. Original wording throughout.

export default {
  id: 'economics',
  name: 'Economics',
  short: 'Econ',
  weight: '6–9%',
  weightMid: 7.5,
  depth: 'starter',
  summary:
    'Microeconomic structure, macroeconomic aggregates, policy, and currencies. The exam rewards clear cause-and-effect reasoning far more than memorised definitions.',
  modules: [
    {
      id: 'econ-firm',
      name: 'The Firm and Market Structures',
      los: [
        'Describe the characteristics of perfect competition, monopolistic competition, oligopoly and monopoly',
        'Explain the relationship between price, marginal revenue, marginal cost and profit maximisation',
        'Describe pricing strategy under each market structure',
        'Describe the use of concentration measures and their limitations',
      ],
      lessons: [
        {
          id: 'econ-firm-l1',
          title: 'Four market structures, one decision rule',
          minutes: 7,
          blocks: [
            { t: 'p', x: 'Whatever the structure, every firm maximises profit where **marginal revenue equals marginal cost**. What changes between structures is how much pricing power the firm has — that is, how steeply its demand curve slopes.' },
            {
              t: 'table',
              head: ['Structure', 'Sellers', 'Product', 'Pricing power', 'Barriers'],
              rows: [
                ['Perfect competition', 'Very many', 'Identical', 'None — price taker', 'None'],
                ['Monopolistic competition', 'Many', 'Differentiated', 'Some', 'Low'],
                ['Oligopoly', 'Few', 'Either', 'Substantial, interdependent', 'High'],
                ['Monopoly', 'One', 'Unique', 'Considerable', 'Very high'],
              ],
            },
            { t: 'p', x: 'Under perfect competition the firm faces a horizontal demand curve, so **P = MR**, and profit is maximised where P = MC. Everywhere else demand slopes downward, so MR < P and the profit-maximising price sits above marginal cost.' },
            {
              t: 'callout', label: 'Long-run outcome',
              x: 'In perfect competition *and* monopolistic competition, economic profit is competed away to zero in the long run as entry occurs. The difference is that monopolistically competitive firms still produce below minimum average total cost — the price of differentiation is excess capacity.',
            },
            { t: 'h', x: 'Measuring concentration' },
            {
              t: 'ul',
              x: [
                '**N-firm concentration ratio** — the summed market share of the largest N firms. Simple, but it ignores how share is distributed and barely responds to a merger between the two largest firms.',
                '**Herfindahl–Hirschman Index (HHI)** — the sum of squared market shares. Squaring makes it sensitive to the size distribution, which is why regulators prefer it.',
                'Both share one blind spot: they say nothing about **barriers to entry**. A concentrated market with free entry may still behave competitively.',
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-1', name: 'Profit maximisation', expr: 'MR = MC', note: 'Universal. Under perfect competition P = MR, so the rule becomes P = MC.' },
        { id: 'f-e-2', name: 'Herfindahl–Hirschman Index', expr: 'HHI = Σ (market share of firm i)²', note: 'Squaring weights large firms heavily; more informative than a concentration ratio.' },
      ],
      cards: [
        { id: 'c-e-1', front: 'Profit-maximising rule in every market structure', back: 'Produce where MR = MC. Only under perfect competition does this coincide with P = MC.' },
        { id: 'c-e-2', front: 'Long-run economic profit under monopolistic competition', back: 'Zero — entry competes it away. But output remains below minimum ATC, leaving excess capacity.' },
        { id: 'c-e-3', front: 'Main limitation of concentration ratios and HHI', back: 'Neither accounts for barriers to entry, so both can misjudge how competitively a market actually behaves.' },
      ],
      questions: [
        {
          id: 'q-ec-001', difficulty: 'easy',
          stem: 'A firm operating under perfect competition maximises profit by producing where:',
          choices: ['price equals average total cost', 'price equals marginal cost', 'marginal revenue exceeds marginal cost by the greatest amount'],
          answer: 1,
          explain: 'A price taker faces a horizontal demand curve, so P = MR. Applying the universal MR = MC rule gives P = MC.',
          why: [
            'A describes the long-run zero-economic-profit condition, not the profit-maximising output rule.',
            'C is wrong because profit is still rising wherever MR exceeds MC — maximum profit occurs where the gap closes to zero.',
          ],
        },
        {
          id: 'q-ec-002', difficulty: 'medium',
          stem: 'A market has four firms with shares of 40%, 30%, 20% and 10%. The HHI is closest to:',
          choices: ['0.30', '0.10', '0.70'],
          answer: 0,
          explain: 'HHI = 0.40² + 0.30² + 0.20² + 0.10² = 0.16 + 0.09 + 0.04 + 0.01 = 0.30. (Expressed on a 10,000 scale this is 3,000, which regulators would treat as highly concentrated.)',
          why: [
            'B (0.10) sums the shares incorrectly or omits squaring most terms.',
            'C (0.70) is the three-firm concentration ratio, 40 + 30 = 70%, not the HHI.',
          ],
        },
        {
          id: 'q-ec-003', difficulty: 'hard',
          stem: 'Compared with a perfectly competitive firm in long-run equilibrium, a monopolistically competitive firm in long-run equilibrium most likely:',
          choices: [
            'earns positive economic profit.',
            'produces at an output below minimum average total cost.',
            'charges a price equal to marginal cost.',
          ],
          answer: 1,
          explain: 'Product differentiation gives a downward-sloping demand curve, so the tangency between demand and the ATC curve occurs on the downward-sloping portion of ATC. The firm therefore operates with excess capacity — the efficiency cost of variety.',
          why: [
            'A is wrong because entry drives economic profit to zero in the long run under both structures.',
            'C is wrong because with downward-sloping demand, MR < P, so the profit-maximising price exceeds marginal cost.',
          ],
        },
      ],
    },

    {
      id: 'econ-macro',
      name: 'Aggregate Output, Prices and Growth',
      los: [
        'Calculate and explain GDP using the expenditure and income approaches',
        'Compare nominal and real GDP and calculate the GDP deflator',
        'Explain the aggregate demand and aggregate supply curves and sources of shifts',
        'Describe the sources and sustainability of economic growth',
      ],
      lessons: [
        {
          id: 'econ-macro-l1',
          title: 'Measuring an economy',
          minutes: 6,
          blocks: [
            {
              t: 'formula', name: 'GDP, expenditure approach',
              x: 'GDP = C + I + G + (X − M)\n\nC = consumption, I = gross private investment,\nG = government spending, X − M = net exports',
            },
            { t: 'p', x: 'GDP counts only **final** goods produced **within a country\'s borders** during the period. Intermediate goods would be double-counted; transfer payments and second-hand sales create no new production and are excluded.' },
            {
              t: 'formula', name: 'GDP deflator',
              x: 'GDP deflator = (Nominal GDP / Real GDP) × 100',
            },
            { t: 'p', x: 'Nominal GDP mixes quantity changes with price changes. Real GDP holds prices at a base year, isolating genuine output growth — which is why only real GDP growth tells you whether an economy actually produced more.' },
            {
              t: 'callout', label: 'Growth accounting',
              x: 'Long-run growth comes from more labour, more capital, and **total factor productivity**. Because capital alone suffers diminishing returns, sustained per-capita growth ultimately depends on technology and productivity, not on accumulating more machines.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-10', name: 'GDP (expenditure)', expr: 'GDP = C + I + G + (X − M)', note: 'Final goods produced within the borders, regardless of producer nationality.' },
        { id: 'f-e-11', name: 'GDP deflator', expr: '(Nominal GDP / Real GDP) × 100', note: 'A broad, economy-wide price index.' },
      ],
      cards: [
        { id: 'c-e-10', front: 'Expenditure approach to GDP', back: 'GDP = C + I + G + (X − M).' },
        { id: 'c-e-11', front: 'Why exclude intermediate goods from GDP?', back: 'Their value is already embedded in the final goods — including both double-counts production.' },
        { id: 'c-e-12', front: 'Source of sustained per-capita growth', back: 'Total factor productivity (technology). Capital deepening alone runs into diminishing returns.' },
      ],
      questions: [
        {
          id: 'q-ec-010', difficulty: 'easy',
          stem: 'Which item is included in GDP under the expenditure approach?',
          choices: ['A government pension transfer payment', 'A newly built family home purchased this year', 'The resale of a five-year-old car'],
          answer: 1,
          explain: 'New residential construction is counted as investment in the year it is produced. It represents new output.',
          why: [
            'A is a transfer payment — money moves, but nothing is produced.',
            'C involves an asset produced in a prior period; only the dealer\'s service margin would count in the current year.',
          ],
        },
        {
          id: 'q-ec-011', difficulty: 'medium',
          stem: 'Nominal GDP is $2.4 trillion and real GDP is $2.0 trillion. The GDP deflator is closest to:',
          choices: ['83.3', '120.0', '20.0'],
          answer: 1,
          explain: 'Deflator = (2.4 / 2.0) × 100 = 120.0, indicating prices are 20% above the base year.',
          why: [
            'A inverts the ratio, dividing real by nominal.',
            'C reports the percentage price increase rather than the index level.',
          ],
        },
        {
          id: 'q-ec-012', difficulty: 'hard',
          stem: 'An economy experiences a sharp rise in oil prices. The most likely short-run effect is:',
          choices: [
            'aggregate supply shifts left, raising the price level and lowering real output.',
            'aggregate demand shifts left, lowering both the price level and real output.',
            'aggregate supply shifts right, lowering the price level and raising real output.',
          ],
          answer: 0,
          explain: 'An input-cost shock reduces short-run aggregate supply. The result is stagflation: a higher price level together with lower real output — the uncomfortable combination that leaves policymakers without a clean response.',
          why: [
            'B would produce falling prices alongside falling output, which is a demand shock, not a supply shock.',
            'C has the direction of the supply shift reversed; higher input costs contract supply.',
          ],
        },
      ],
    },

    {
      id: 'econ-policy',
      name: 'Business Cycles, Monetary and Fiscal Policy',
      los: [
        'Describe the phases of the business cycle and associated economic indicators',
        'Explain inflation, deflation and the construction of price indices',
        'Describe the objectives and tools of monetary policy and the limits of central bank action',
        'Compare fiscal policy tools and explain the implementation lags of each policy',
      ],
      lessons: [
        {
          id: 'econ-policy-l1',
          title: 'Cycles and the two policy levers',
          minutes: 8,
          blocks: [
            { t: 'p', x: 'A business cycle runs expansion → peak → contraction → trough. Indicators are classified by timing: **leading** (building permits, yield-curve slope, new orders), **coincident** (industrial production, personal income), and **lagging** (unemployment duration, inventory-to-sales ratio).' },
            { t: 'h', x: 'Monetary policy' },
            { t: 'p', x: 'Conducted by the central bank, whose primary objective is price stability. Its tools are open market operations, the policy rate, and reserve requirements. Expansionary policy lowers rates to stimulate demand; contractionary policy raises them to contain inflation.' },
            {
              t: 'callout', label: 'Where monetary policy fails', kind: 'warn',
              x: 'It loses traction in a **liquidity trap**, when rates are near zero and further easing does not raise spending. It also depends on credible expectations — if the public does not believe the inflation target, the transmission mechanism weakens.',
            },
            { t: 'h', x: 'Fiscal policy' },
            { t: 'p', x: 'Government spending and taxation. Its **impact** lag can be long — legislation, then implementation — but spending changes act directly on demand rather than working through the banking system. Automatic stabilisers (unemployment benefits, progressive taxes) act with no lag at all.' },
            {
              t: 'table',
              head: ['Lag', 'Meaning'],
              rows: [
                ['Recognition', 'Time to identify that the economy needs intervention'],
                ['Action', 'Time to decide and enact the policy — long for fiscal, short for monetary'],
                ['Impact', 'Time for the policy to affect the real economy'],
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-20', name: 'Fisher effect', expr: 'Nominal rate ≈ real rate + expected inflation', note: 'Central to how policy rates translate into real borrowing costs.' },
      ],
      cards: [
        { id: 'c-e-20', front: 'Phases of the business cycle', back: 'Expansion → peak → contraction → trough.' },
        { id: 'c-e-21', front: 'Example of a leading indicator', back: 'Building permits, new orders for capital goods, the slope of the yield curve, initial jobless claims (inverted).' },
        { id: 'c-e-22', front: 'Liquidity trap', back: 'Rates near zero and additional monetary easing fails to stimulate spending — monetary policy loses traction.' },
        { id: 'c-e-23', front: 'Which policy has the longer action lag?', back: 'Fiscal — it requires legislation. Monetary policy can be changed by committee decision quickly.' },
      ],
      questions: [
        {
          id: 'q-ec-020', difficulty: 'easy',
          stem: 'Which of the following is best classified as a lagging economic indicator?',
          choices: ['Building permits for new housing', 'Average duration of unemployment', 'Industrial production'],
          answer: 1,
          explain: 'Unemployment duration continues rising after a recovery has begun, because firms rehire only once demand is confirmed. It therefore confirms a turning point rather than predicting it.',
          why: [
            'A is a classic leading indicator — construction plans precede activity.',
            'C is coincident, moving broadly in step with the cycle.',
          ],
        },
        {
          id: 'q-ec-021', difficulty: 'medium',
          stem: 'A central bank facing policy rates near zero finds that further easing does little to increase spending. This situation is best described as:',
          choices: ['crowding out', 'a liquidity trap', 'cost-push inflation'],
          answer: 1,
          explain: 'A liquidity trap occurs when nominal rates approach their lower bound and additional liquidity is hoarded rather than spent, neutralising conventional monetary policy.',
          why: [
            'A describes government borrowing displacing private investment — a fiscal-policy limitation.',
            'C describes inflation driven by rising input costs, which is unrelated to the effectiveness of easing.',
          ],
        },
        {
          id: 'q-ec-022', difficulty: 'hard',
          stem: 'Compared with monetary policy, fiscal policy most likely has:',
          choices: [
            'a shorter action lag but a longer impact lag.',
            'a longer action lag, because changes generally require legislative approval.',
            'no recognition lag, because fiscal authorities observe tax receipts in real time.',
          ],
          answer: 1,
          explain: 'Fiscal changes must pass through a political process — proposal, debate, enactment — which makes the action lag substantially longer than a central bank committee\'s decision to move rates.',
          why: [
            'A reverses the comparison on the action lag.',
            'C is wrong because both policies face a recognition lag; economic data arrive with delay and are revised.',
          ],
        },
      ],
    },

    {
      id: 'econ-fx',
      name: 'International Trade and Exchange Rates',
      los: [
        'Compare gross domestic product and gross national product, and describe benefits of trade',
        'Describe the balance of payments accounts',
        'Interpret exchange rate quotations, cross rates and forward premiums/discounts',
        'Explain how exchange rates affect trade balances',
      ],
      lessons: [
        {
          id: 'econ-fx-l1',
          title: 'Reading a currency quote without getting confused',
          minutes: 7,
          blocks: [
            { t: 'p', x: 'A quote is always **price currency / base currency**. In USD/EUR = 1.10, the euro is the base and the dollar is the price: one euro costs 1.10 dollars. Getting this direction right resolves most exchange-rate questions before any arithmetic starts.' },
            {
              t: 'callout', label: 'Appreciation, mechanically',
              x: 'If USD/EUR rises from 1.10 to 1.15, each euro buys more dollars — the **base** currency (EUR) has appreciated and the price currency (USD) has depreciated. The base currency always moves in the same direction as the quote.',
            },
            {
              t: 'formula', name: 'Forward premium / discount',
              x: 'Forward premium = Forward rate − Spot rate\n\nThe higher-interest-rate currency trades at a forward *discount*\n(covered interest rate parity).',
            },
            { t: 'p', x: 'Why? If a currency offered both a higher interest rate and no forward penalty, a riskless arbitrage would exist. The forward market prices away exactly the interest differential.' },
            { t: 'h', x: 'Balance of payments' },
            {
              t: 'ul',
              x: [
                '**Current account** — trade in goods and services, income, and transfers.',
                '**Capital account** — capital transfers and non-produced, non-financial assets (small in practice).',
                '**Financial account** — cross-border investment flows.',
              ],
            },
            { t: 'p', x: 'They must sum to zero: a current account deficit is necessarily financed by an offsetting financial account surplus. A country importing more than it exports is, by identity, importing capital.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-30', name: 'Cross rate', expr: 'A/C = (A/B) × (B/C)', note: 'Chain quotes so the common currency cancels.' },
        { id: 'f-e-31', name: 'Balance of payments identity', expr: 'Current account + Capital account + Financial account = 0', note: 'A current account deficit implies a financial account surplus.' },
      ],
      cards: [
        { id: 'c-e-30', front: 'How is an exchange rate quote structured?', back: 'Price currency / base currency. USD/EUR = 1.10 means one euro (base) costs 1.10 dollars (price).' },
        { id: 'c-e-31', front: 'Which currency trades at a forward discount?', back: 'The one with the **higher** interest rate — covered interest rate parity removes the arbitrage.' },
        { id: 'c-e-32', front: 'Three balance of payments accounts', back: 'Current, capital, and financial. They sum to zero.' },
      ],
      questions: [
        {
          id: 'q-ec-030', difficulty: 'easy',
          stem: 'The USD/EUR exchange rate moves from 1.10 to 1.16. This change means that:',
          choices: ['the euro has appreciated against the dollar', 'the dollar has appreciated against the euro', 'both currencies have appreciated'],
          answer: 0,
          explain: 'The euro is the base currency. A rise in the quote means each euro now buys more dollars, so the euro has appreciated and the dollar has depreciated.',
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
          explain: 'EUR/GBP = (USD/GBP) ÷ (USD/EUR) = 1.25 / 1.10 = 1.136, so roughly 1.14 euros per pound.',
          why: [
            'A (0.88) is the inverse, GBP/EUR = 1.10/1.25.',
            'C (1.38) multiplies the two quotes instead of dividing, which leaves dollars uncancelled.',
          ],
        },
        {
          id: 'q-ec-032', difficulty: 'hard',
          stem: 'A country runs a persistent current account deficit. By the balance of payments identity, it must also be experiencing:',
          choices: [
            'a financial account surplus, meaning it is a net importer of capital.',
            'a financial account deficit of equal size.',
            'an offsetting increase in its GDP growth rate.',
          ],
          answer: 0,
          explain: 'The accounts sum to zero, so a current account deficit is financed by net capital inflows — foreigners acquiring domestic assets. Importing more goods than you export means importing capital too.',
          why: [
            'B would mean the accounts sum to a negative number, violating the identity.',
            'C is wrong because the identity is an accounting relationship, not a statement about growth.',
          ],
        },
      ],
    },
  ],
};
