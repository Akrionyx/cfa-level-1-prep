// Economics — deep content. Original wording throughout.

export default {
  id: 'economics',
  name: 'Economics',
  short: 'Econ',
  weight: '6–9%',
  weightMid: 7.5,
  depth: 'deep',
  summary:
    'Market structure, the business cycle, fiscal and monetary policy, geopolitics, trade, and currencies. The exam rewards clean cause-and-effect reasoning far more than memorised definitions — and exchange-rate arithmetic is free marks once the quote convention is automatic.',
  modules: [
    /* ---------------------------------------------------------- */
    {
      id: 'econ-firm',
      name: 'Firms and Market Structures',
      los: [
        'Determine and interpret breakeven and shutdown points of production',
        'Describe how economies and diseconomies of scale affect costs',
        'Describe characteristics of perfect competition, monopolistic competition, oligopoly and pure monopoly',
        'Explain supply and demand relationships and pricing strategy under each market structure',
        'Describe the use and limitations of concentration measures in identifying market structure',
      ],
      lessons: [
        {
          id: 'econ-firm-l0',
          title: 'Costs, breakeven and the shutdown decision',
          minutes: 8,
          blocks: [
            { t: 'p', x: 'Before asking how a market is structured, you need the cost vocabulary every firm shares. Total cost splits into **fixed** costs, which do not change with output, and **variable** costs, which do. Dividing each by quantity gives average fixed cost (AFC), average variable cost (AVC) and average total cost (ATC). **Marginal cost** (MC) is the cost of producing one more unit.' },
            {
              t: 'formula', name: 'Cost relationships',
              x: 'TC  = TFC + TVC\nATC = AFC + AVC = TC / Q\nMC  = ΔTC / ΔQ\n\nMC cuts both AVC and ATC at their minimum points.',
            },
            { t: 'h', x: 'Breakeven, shutdown and exit' },
            { t: 'p', x: 'The key insight is that fixed costs are already sunk in the short run. A firm that shuts down still pays them. So the short-run question is not "am I profitable?" but "does operating lose less than closing?"' },
            {
              t: 'table',
              head: ['Price relative to costs', 'Short run', 'Long run'],
              rows: [
                ['P ≥ ATC', 'Operate — covering all costs (breakeven at P = ATC)', 'Stay in the market'],
                ['AVC ≤ P < ATC', 'Operate — covers variable cost and part of fixed cost', 'Exit — losses cannot persist'],
                ['P < AVC', '**Shut down** — every unit produced adds to the loss', 'Exit'],
              ],
            },
            {
              t: 'callout', label: 'The distinction the exam tests',
              x: 'Shutdown point: **P = minimum AVC**. Breakeven point: **P = minimum ATC**. Between the two, a firm keeps producing at a loss in the short run because revenue still contributes something toward fixed costs it must pay regardless.',
            },
            { t: 'h', x: 'Economies and diseconomies of scale' },
            { t: 'p', x: 'In the long run every input is variable, and the long-run average cost curve shows the lowest cost achievable at each scale. As a firm grows it often enjoys **economies of scale** — specialisation, bulk purchasing, spreading overhead — so LRAC falls. Beyond some size, **diseconomies of scale** set in: coordination becomes harder, bureaucracy thickens, and LRAC rises. The bottom of the curve is the **minimum efficient scale**.' },
          ],
        },
        {
          id: 'econ-firm-l1',
          title: 'Four market structures, one decision rule',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'Whatever the structure, every firm maximises profit where **marginal revenue equals marginal cost**. What changes between structures is how much pricing power the firm has — how steeply its demand curve slopes.' },
            {
              t: 'table',
              head: ['Structure', 'Sellers', 'Product', 'Pricing power', 'Barriers'],
              rows: [
                ['Perfect competition', 'Very many', 'Identical', 'None — price taker', 'None'],
                ['Monopolistic competition', 'Many', 'Differentiated', 'Some', 'Low'],
                ['Oligopoly', 'Few', 'Standardised or differentiated', 'Substantial, interdependent', 'High'],
                ['Monopoly', 'One', 'No close substitutes', 'Considerable', 'Very high'],
              ],
            },
            { t: 'p', x: 'Under perfect competition the firm faces a horizontal demand curve, so **P = MR**, and profit is maximised where P = MC. Everywhere else demand slopes downward, so MR < P and the profit-maximising price sits above marginal cost.' },
            {
              t: 'callout', label: 'Long-run outcome',
              x: 'In perfect competition *and* monopolistic competition, economic profit is competed away to zero in the long run as firms enter. The difference is that monopolistically competitive firms still produce below minimum average total cost — the price of variety is excess capacity.',
            },
            { t: 'h', x: 'Oligopoly: pricing under interdependence' },
            { t: 'p', x: 'With few rivals, each firm\'s best move depends on what the others do. The curriculum uses several models:' },
            {
              t: 'ul',
              x: [
                '**Kinked demand curve** — rivals match price cuts but ignore price rises, so demand is elastic above the current price and inelastic below it. The resulting gap in the MR curve explains why oligopoly prices tend to be sticky.',
                '**Cournot** — firms choose quantities simultaneously, taking rivals\' output as given. The equilibrium lies between monopoly and perfect competition.',
                '**Nash equilibrium** — no firm can improve its outcome by changing strategy alone. Collusion is unstable because each member has an incentive to cheat.',
                '**Stackelberg** — a leader commits to output first and followers respond; the leader gains a first-mover advantage.',
                '**Dominant firm** — one firm with a large cost advantage sets the price; smaller firms act as price takers.',
              ],
            },
            { t: 'h', x: 'Monopoly and price discrimination' },
            { t: 'p', x: 'A monopolist produces where MR = MC and charges the highest price demand allows at that quantity — less output and a higher price than a competitive market, creating a deadweight loss. **Price discrimination** — charging different groups different prices for the same good — lets the monopolist capture more consumer surplus and often *increases* output toward the competitive level. It requires market power, identifiable groups with different elasticities, and the ability to prevent resale.' },
            { t: 'h', x: 'Measuring concentration' },
            {
              t: 'ul',
              x: [
                '**N-firm concentration ratio** — summed market share of the largest N firms. Simple, but it ignores how share is distributed and barely responds to a merger between two large firms inside the top N.',
                '**Herfindahl–Hirschman Index (HHI)** — the sum of squared market shares. Squaring makes it sensitive to size distribution, which is why competition regulators prefer it.',
                'Both share one blind spot: they say nothing about **barriers to entry**. A concentrated market with easy entry may still behave competitively.',
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-1', name: 'Profit maximisation', expr: 'MR = MC', note: 'Universal. Under perfect competition P = MR, so the rule becomes P = MC.' },
        { id: 'f-e-2', name: 'Herfindahl–Hirschman Index', expr: 'HHI = Σ (market share of firm i)²', note: 'Squaring weights large firms heavily; more informative than a concentration ratio.' },
        { id: 'f-e-3', name: 'Shutdown and breakeven', expr: 'Shutdown: P < min AVC   |   Breakeven: P = min ATC', note: 'Between the two, operate at a loss in the short run and exit in the long run.' },
        { id: 'f-e-4', name: 'Price elasticity of demand', expr: 'E = %ΔQ / %ΔP', note: '|E| > 1 elastic: a price cut raises total revenue. |E| < 1 inelastic: a price rise raises total revenue.' },
      ],
      cards: [
        { id: 'c-e-1', front: 'Profit-maximising rule in every market structure', back: 'Produce where MR = MC. Only under perfect competition does this coincide with P = MC.' },
        { id: 'c-e-2', front: 'Long-run economic profit under monopolistic competition', back: 'Zero — entry competes it away. But output remains below minimum ATC, leaving excess capacity.' },
        { id: 'c-e-3', front: 'Main limitation of concentration ratios and HHI', back: 'Neither accounts for barriers to entry, so both can misjudge how competitively a market behaves.' },
        { id: 'c-e-4', front: 'Short-run shutdown point', back: 'Price below minimum **average variable cost**. Above AVC but below ATC, the firm keeps operating at a loss in the short run.' },
        { id: 'c-e-5', front: 'Why are oligopoly prices sticky under the kinked demand model?', back: 'Rivals match price cuts but not price rises, creating a gap in the MR curve — MC can move within the gap without changing the optimal price.' },
        { id: 'c-e-6', front: 'Three conditions for price discrimination', back: 'Market power, groups with different demand elasticities that can be identified, and the ability to prevent resale between groups.' },
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
          explain: 'HHI = 0.40² + 0.30² + 0.20² + 0.10² = 0.16 + 0.09 + 0.04 + 0.01 = 0.30. On the 10,000 scale regulators often use, this is 3,000 — highly concentrated.',
          why: [
            'B (0.10) sums the shares incorrectly or omits squaring most terms.',
            'C (0.70) is the two-firm concentration ratio, 40% + 30%, not the HHI.',
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
          explain: 'Product differentiation gives a downward-sloping demand curve, so the tangency between demand and ATC occurs on the downward-sloping part of ATC. The firm operates with excess capacity — the efficiency cost of variety.',
          why: [
            'A is wrong because entry drives economic profit to zero in the long run under both structures.',
            'C is wrong because with downward-sloping demand, MR < P, so the profit-maximising price exceeds marginal cost.',
          ],
        },
        {
          id: 'q-ec-004', difficulty: 'expert',
          vignette: 'A firm sells its output at a market price of $16 per unit. At its current output, average variable cost is $14 and average total cost is $19. Market conditions are not expected to improve.',
          stem: 'The firm should most likely:',
          choices: [
            'shut down immediately, because price is below average total cost.',
            'continue operating in the short run, but plan to exit the market in the long run.',
            'continue operating indefinitely, because price exceeds average variable cost.',
          ],
          answer: 1,
          explain: 'Price exceeds AVC, so each unit sold covers its variable cost and contributes $2 toward fixed costs that must be paid anyway — operating loses less than shutting down. But price is below ATC, so the firm makes an economic loss that cannot be sustained once fixed commitments can be ended. Operate now, exit in the long run.',
          why: [
            'A applies the long-run test in the short run. Shutting down would leave the full fixed cost uncovered, increasing the loss.',
            'C ignores the long run: with no expected improvement, persistent losses mean the firm should leave the market.',
          ],
        },
        {
          id: 'q-ec-005', difficulty: 'medium',
          stem: 'Under the kinked demand curve model of oligopoly, a firm that raises its price above the prevailing level most likely expects that competitors will:',
          choices: ['match the increase, leaving market shares unchanged', 'not follow, causing the firm to lose significant market share', 'cut their own prices sharply in retaliation'],
          answer: 1,
          explain: 'The model assumes rivals ignore price increases (happy to take the customers) but match price cuts (to defend share). Demand is therefore elastic above the kink and inelastic below it, which keeps prices sticky.',
          why: [
            'A describes the response the model assumes for a price *cut*, not a rise.',
            'C is not part of the model — rivals simply hold their prices and gain share.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'econ-cycles',
      name: 'Understanding Business Cycles',
      los: [
        'Describe the business cycle and its phases',
        'Describe credit cycles and their relationship with the business cycle',
        'Describe how resource use, consumer and business activity, housing and external trade vary over the cycle',
        'Describe types of unemployment and measures of inflation',
        'Interpret leading, coincident and lagging economic indicators',
      ],
      lessons: [
        {
          id: 'econ-cycles-l1',
          title: 'The cycle, the credit cycle, and what to watch',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'A business cycle is a recurring pattern of expansion and contraction in aggregate economic activity. The four phases are **recovery (trough to expansion)**, **expansion**, **slowdown (peak)**, and **contraction**. Cycles vary widely in length and amplitude — the pattern repeats, the timing does not.' },
            {
              t: 'table',
              head: ['Phase', 'Output gap', 'Employment', 'Inflation', 'Inventories'],
              rows: [
                ['Recovery', 'Negative but closing', 'Layoffs slow; hiring cautious', 'Low, may still fall', 'Inventory-to-sales ratio falls as sales rebound'],
                ['Expansion', 'Turns positive', 'Hiring accelerates; unemployment falls', 'Moderate, rising', 'Firms rebuild stock'],
                ['Slowdown', 'Positive, peaking', 'Hiring slows', 'Highest', 'Unwanted build-up as sales decelerate'],
                ['Contraction', 'Negative, widening', 'Layoffs; unemployment rises', 'Easing', 'Firms cut orders to clear excess stock'],
              ],
            },
            {
              t: 'callout', label: 'Why inventories matter',
              x: 'Firms cannot adjust production instantly. When sales slow unexpectedly, inventories pile up, and the subsequent correction — cutting orders to clear the excess — deepens the downturn. The **inventory-to-sales ratio** therefore rises near a peak and falls near a trough.',
            },
            { t: 'h', x: 'The credit cycle' },
            { t: 'p', x: 'Credit availability expands and contracts alongside the real economy but tends to be longer and more amplified. In good times lenders loosen standards, asset prices rise, and collateral values support more lending. When losses emerge, lenders tighten, collateral values fall, and the contraction feeds on itself. Recessions accompanied by a credit bust — typically after a property boom — tend to be **deeper and longer** than ordinary recessions.' },
            { t: 'h', x: 'Unemployment' },
            {
              t: 'ul',
              x: [
                '**Frictional** — the time taken to match workers with jobs. Always present, even in a strong economy.',
                '**Structural** — a mismatch between workers\' skills or location and available jobs, often from technological change.',
                '**Cyclical** — caused by weak aggregate demand. This is the component the business cycle drives.',
              ],
            },
            { t: 'p', x: 'The unemployment rate counts only people actively seeking work. **Discouraged workers** who have stopped searching drop out of the labour force, so in a deep downturn the headline rate can *understate* true slack — and can even rise early in a recovery as those workers resume searching.' },
            { t: 'h', x: 'Measuring inflation' },
            { t: 'p', x: 'Most consumer price indices are **Laspeyres** indices: they price a fixed base-period basket. That design biases measured inflation upward, for three reasons:' },
            {
              t: 'ul',
              x: [
                '**Substitution bias** — consumers switch to relatively cheaper goods, but the fixed basket does not.',
                '**Quality bias** — some price increases buy better products, which is not true inflation.',
                '**New product bias** — new goods enter the basket late, missing their early price declines.',
              ],
            },
            { t: 'p', x: 'A **Paasche** index uses current-period weights instead, and a **Fisher** index is the geometric mean of the two. **Headline** inflation includes everything; **core** inflation excludes volatile food and energy to reveal the underlying trend.' },
            {
              t: 'table',
              head: ['Indicator type', 'Timing', 'Examples'],
              rows: [
                ['Leading', 'Turns before the cycle', 'Building permits, new orders, yield curve slope, stock prices, average weekly hours, initial jobless claims'],
                ['Coincident', 'Moves with the cycle', 'Industrial production, personal income, manufacturing and trade sales, nonfarm payrolls'],
                ['Lagging', 'Turns after the cycle', 'Average duration of unemployment, inventory-to-sales ratio, unit labour cost changes, prime rate, consumer credit outstanding'],
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-10', name: 'Unemployment rate', expr: 'Unemployed / Labour force', note: 'Labour force = employed + unemployed actively seeking work. Discouraged workers are excluded.' },
        { id: 'f-e-11', name: 'Laspeyres price index', expr: 'Σ(P_current × Q_base) / Σ(P_base × Q_base) × 100', note: 'Fixed base-period basket; biased upward by substitution, quality and new-product effects.' },
        { id: 'f-e-12', name: 'Fisher index', expr: '√(Laspeyres × Paasche)', note: 'Geometric mean of base-weighted and current-weighted indices.' },
      ],
      cards: [
        { id: 'c-e-20', front: 'Phases of the business cycle', back: 'Recovery → expansion → slowdown → contraction.' },
        { id: 'c-e-21', front: 'Example of a leading indicator', back: 'Building permits, new orders for capital goods, the slope of the yield curve, stock prices, initial jobless claims (inverted).' },
        { id: 'c-e-22', front: 'Three types of unemployment', back: 'Frictional (job search), structural (skill/location mismatch), cyclical (weak demand).' },
        { id: 'c-e-23', front: 'Three sources of upward bias in a Laspeyres CPI', back: 'Substitution bias, quality bias, new product bias.' },
        { id: 'c-e-24', front: 'Why can discouraged workers distort the unemployment rate?', back: 'They leave the labour force, so the headline rate understates slack in a downturn — and may rise in early recovery as they resume searching.' },
      ],
      questions: [
        {
          id: 'q-ec-020', difficulty: 'easy',
          stem: 'Which of the following is best classified as a lagging economic indicator?',
          choices: ['Building permits for new housing', 'Average duration of unemployment', 'Industrial production'],
          answer: 1,
          explain: 'Unemployment duration keeps rising after a recovery has begun, because firms rehire only once demand is confirmed. It confirms a turning point rather than predicting it.',
          why: [
            'A is a classic leading indicator — construction plans precede activity.',
            'C is coincident, moving broadly in step with the cycle.',
          ],
        },
        {
          id: 'q-ec-023', difficulty: 'medium',
          stem: 'A worker loses her job after automation eliminates her role, and her skills do not match the openings available in her region. Her unemployment is best described as:',
          choices: ['frictional', 'structural', 'cyclical'],
          answer: 1,
          explain: 'A lasting mismatch between a worker\'s skills and the jobs available — here caused by technological change — is structural unemployment. It persists even when aggregate demand is strong.',
          why: [
            'A describes the short period of searching between suitable jobs, where matching skills exist.',
            'C is driven by weak aggregate demand across the economy, not by a skills mismatch.',
          ],
        },
        {
          id: 'q-ec-024', difficulty: 'hard',
          stem: 'A consumer price index uses a fixed basket of goods from the base period. When the price of beef rises sharply and households switch to chicken, the index most likely:',
          choices: [
            'overstates the increase in the cost of living, because of substitution bias.',
            'understates the increase in the cost of living, because chicken is excluded.',
            'measures the change accurately, because the basket reflects actual base-period purchases.',
          ],
          answer: 0,
          explain: 'A Laspeyres index keeps the base-period quantity of beef in the basket even though consumers have moved to cheaper chicken. It therefore prices a basket households no longer buy, overstating the true increase in living costs.',
          why: [
            'B has the direction backwards — the fixed basket over-weights the good whose price rose.',
            'C is exactly the flaw: accurate *base-period* weights become inaccurate once behaviour changes.',
          ],
        },
        {
          id: 'q-ec-025', difficulty: 'expert',
          stem: 'Near the peak of a business cycle, a firm\'s sales begin to decelerate unexpectedly. The inventory-to-sales ratio and the firm\'s likely subsequent production response are most likely:',
          choices: [
            'falling, followed by an increase in production to rebuild stock.',
            'rising, followed by a cut in production that amplifies the downturn.',
            'stable, because firms adjust production instantly to match sales.',
          ],
          answer: 1,
          explain: 'Production plans cannot be revised immediately, so slowing sales leave unwanted inventory — the ratio rises. The later correction, cutting orders below the level of sales to clear the excess, reduces output further and deepens the contraction. This is why the ratio is a lagging indicator.',
          why: [
            'A describes a recovery, when sales outrun production and inventories are depleted.',
            'C contradicts the production lags that make inventory cycles a real driver of the business cycle.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'econ-fiscal',
      name: 'Fiscal Policy',
      los: [
        'Compare monetary and fiscal policy',
        'Describe roles and objectives of fiscal policy and the arguments for and against concern over deficits',
        'Describe tools of fiscal policy, including their advantages and disadvantages',
        'Explain the fiscal multiplier and the implementation difficulties of fiscal policy',
        'Determine whether a fiscal policy is expansionary or contractionary',
      ],
      lessons: [
        {
          id: 'econ-fiscal-l1',
          title: 'Spending, taxes, and why the multiplier matters',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'Fiscal policy is the government\'s use of spending and taxation to influence the economy. Its objectives include stabilising aggregate demand, redistributing income and wealth, and allocating resources toward public goods the market under-provides.' },
            { t: 'h', x: 'The tools' },
            {
              t: 'ul',
              x: [
                '**Transfer payments** — pensions, unemployment benefits. Redistribute income without directly purchasing output.',
                '**Current spending** — goods and services consumed now, such as public sector wages.',
                '**Capital spending** — infrastructure, schools, hospitals, which raise future productive capacity.',
                '**Direct taxes** — on income, wealth and corporate profits. Relatively quick to adjust but politically difficult.',
                '**Indirect taxes** — on spending (VAT, excise duties). Can be changed quickly and raise revenue efficiently, but tend to be regressive.',
              ],
            },
            { t: 'p', x: '**Automatic stabilisers** — progressive income taxes and unemployment benefits — expand the deficit in a downturn and shrink it in a boom without any legislation. They act with no recognition, action or decision lag, which is their great advantage over discretionary policy.' },
            { t: 'h', x: 'The fiscal multiplier' },
            {
              t: 'formula', name: 'Fiscal multiplier',
              x: 'Multiplier = 1 / [1 − MPC × (1 − t)]\n\nMPC = marginal propensity to consume\nt   = marginal tax rate',
            },
            { t: 'p', x: 'A dollar of government spending becomes someone\'s income, part of which is taxed and part spent, becoming someone else\'s income — and so on. The higher the MPC and the lower the tax rate, the larger the total effect. Because a tax cut is partly saved in the first round, a spending increase has a larger impact than an equal tax cut, and a **balanced budget** increase in spending (fully tax-financed) still raises output.' },
            { t: 'h', x: 'Why fiscal policy is hard to use well' },
            {
              t: 'table',
              head: ['Lag', 'Meaning'],
              rows: [
                ['Recognition', 'Time to identify that the economy needs intervention — data arrive late and are revised'],
                ['Action', 'Time to agree and enact the policy — long for fiscal, which needs legislation'],
                ['Impact', 'Time for the policy to affect the real economy'],
              ],
            },
            {
              t: 'ul',
              x: [
                '**Crowding out** — government borrowing competes for savings, raising interest rates and displacing private investment.',
                '**Ricardian equivalence** — if households expect today\'s deficit to mean higher future taxes, they save the tax cut, and the stimulus has no effect.',
                '**Supply-side limits** — near full employment, more spending mainly raises prices rather than output.',
              ],
            },
            {
              t: 'callout', label: 'Reading the stance correctly', kind: 'warn',
              x: 'A change in the actual deficit is a poor gauge of policy, because the deficit widens automatically in recessions. The **structural (cyclically adjusted) deficit** — the deficit that would exist at full employment — reveals whether policy itself has become expansionary or contractionary.',
            },
            { t: 'h', x: 'Should deficits worry us?' },
            { t: 'p', x: 'Arguments for concern: high debt can require higher future taxes that discourage work and investment, may fuel inflation if monetised, and crowds out private capital. Arguments against: debt owed to domestic citizens is partly a transfer among them, borrowing for productive investment can pay for itself, and in a slump deficits restore demand that would otherwise be lost.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-20', name: 'Fiscal multiplier', expr: '1 / [1 − MPC(1 − t)]', note: 'Larger with a higher MPC and a lower tax rate.' },
        { id: 'f-e-21', name: 'Change in output from spending', expr: 'ΔGDP = Multiplier × ΔG', note: 'A tax cut has a smaller effect, since part is saved in the first round.' },
      ],
      cards: [
        { id: 'c-e-30', front: 'Fiscal multiplier formula', back: '1 / [1 − MPC(1 − t)]' },
        { id: 'c-e-31', front: 'Ricardian equivalence', back: 'Households anticipate that a deficit-financed tax cut means higher future taxes, save it, and the stimulus has no effect on demand.' },
        { id: 'c-e-32', front: 'Why is the structural deficit a better gauge of fiscal stance?', back: 'The actual deficit changes automatically over the cycle. The structural (cyclically adjusted) deficit strips out that effect.' },
        { id: 'c-e-33', front: 'Crowding out', back: 'Government borrowing raises interest rates and displaces private investment, weakening fiscal stimulus.' },
        { id: 'c-e-34', front: 'Which policy has the longer action lag?', back: 'Fiscal — it requires legislation. Monetary policy can be changed quickly by committee decision.' },
      ],
      questions: [
        {
          id: 'q-ec-026', difficulty: 'easy',
          stem: 'Which of the following is best described as an automatic stabiliser?',
          choices: ['A new infrastructure programme approved by parliament', 'Unemployment benefits that rise as job losses increase', 'A temporary cut in VAT announced during a recession'],
          answer: 1,
          explain: 'Unemployment benefits increase automatically as the economy weakens, supporting demand without any new decision. That is the defining feature of an automatic stabiliser.',
          why: [
            'A and C are both discretionary policy — each requires a deliberate decision and suffers recognition and action lags.',
          ],
        },
        {
          id: 'q-ec-027', difficulty: 'medium',
          stem: 'An economy has a marginal propensity to consume of 0.8 and a marginal tax rate of 25%. The fiscal multiplier is closest to:',
          choices: ['2.5', '5.0', '1.25'],
          answer: 0,
          explain: 'Multiplier = 1/[1 − 0.8(1 − 0.25)] = 1/(1 − 0.60) = 1/0.40 = 2.5.',
          why: [
            'B (5.0) ignores taxation, computing 1/(1 − 0.8).',
            'C (1.25) inverts the MPC, 1/0.8, which is not the multiplier formula.',
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
        {
          id: 'q-ec-028', difficulty: 'expert',
          stem: 'During a recession a government\'s actual budget deficit widens from 2% to 5% of GDP, while its cyclically adjusted deficit is unchanged. The most accurate conclusion is that:',
          choices: [
            'the government has adopted a strongly expansionary discretionary policy.',
            'the wider deficit reflects automatic stabilisers, and the discretionary fiscal stance is unchanged.',
            'fiscal policy has become contractionary, because the structural deficit did not rise.',
          ],
          answer: 1,
          explain: 'The cyclically adjusted deficit strips out the effect of the business cycle on revenues and benefit spending. If it is unchanged, the entire widening came from automatic stabilisers — falling tax receipts and rising transfers — not from any change in policy.',
          why: [
            'A mistakes the cyclical widening for a deliberate stimulus.',
            'C is wrong because an unchanged structural deficit signals a neutral change in stance, not a contractionary one.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'econ-monetary',
      name: 'Monetary Policy',
      los: [
        'Describe the roles and objectives of central banks and the tools of monetary policy',
        'Describe how money is created through fractional reserve banking',
        'Describe the monetary transmission mechanism',
        'Explain the qualities of an effective central bank and the concept of the neutral rate',
        'Explain the limitations of monetary policy and the interaction of monetary and fiscal policy',
      ],
      lessons: [
        {
          id: 'econ-monetary-l1',
          title: 'How central banks move the economy',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'Central banks act as monopoly supplier of the currency, banker to the government and to commercial banks, lender of last resort, and supervisor of the banking system. The overriding objective for most is **price stability**, often expressed as an explicit inflation target; some also carry mandates for employment or financial stability.' },
            { t: 'h', x: 'Money creation' },
            { t: 'p', x: 'Commercial banks create money when they lend. A deposit is partly held as reserves and partly lent out; the loan is spent and redeposited elsewhere, and the process repeats.' },
            {
              t: 'formula', name: 'Money multiplier',
              x: 'Money multiplier = 1 / reserve requirement\n\nA 10% reserve requirement → a multiplier of 10:\n$100 of new reserves can support up to $1,000 of deposits.',
            },
            { t: 'h', x: 'The three main tools' },
            {
              t: 'ul',
              x: [
                '**Policy rate** — the rate at which the central bank lends to or borrows from banks. The primary tool in most modern economies.',
                '**Open market operations** — buying government securities adds reserves and eases policy; selling them drains reserves and tightens it.',
                '**Reserve requirements** — raising them reduces the amount banks can lend. Rarely adjusted in practice because the effect is blunt.',
              ],
            },
            { t: 'h', x: 'The transmission mechanism' },
            { t: 'p', x: 'A change in the policy rate reaches the economy through several channels at once: market interest rates and borrowing costs, asset prices and household wealth, **expectations** of future policy and inflation, and the **exchange rate** — a rate cut tends to weaken the currency, making exports more competitive. Together these shift aggregate demand and, eventually, inflation. The full effect typically takes one to two years.' },
            { t: 'h', x: 'What makes a central bank effective' },
            {
              t: 'ul',
              x: [
                '**Independence** — operational freedom from political pressure to stimulate before elections.',
                '**Credibility** — a track record that makes the public believe the target, so expectations stay anchored.',
                '**Transparency** — clear communication of reasoning and intended policy path.',
              ],
            },
            {
              t: 'formula', name: 'Neutral policy rate',
              x: 'Neutral rate = trend real growth rate + inflation target\n\nPolicy rate > neutral → contractionary\nPolicy rate < neutral → expansionary',
            },
            { t: 'h', x: 'Limits of monetary policy' },
            { t: 'p', x: 'In a **liquidity trap**, rates are at or near zero and additional liquidity is hoarded rather than spent. Central banks have responded with **quantitative easing** — large-scale asset purchases intended to lower longer-term yields directly. Policy is also weakened when expectations are unanchored, when banks will not lend regardless of reserves, and in economies with large informal or dollarised sectors.' },
            { t: 'h', x: 'The policy mix' },
            {
              t: 'table',
              head: ['Fiscal', 'Monetary', 'Likely outcome'],
              rows: [
                ['Expansionary', 'Expansionary', 'Strongly higher aggregate demand; low rates; rising public share'],
                ['Expansionary', 'Contractionary', 'Higher output and **higher interest rates**; public sector share grows'],
                ['Contractionary', 'Expansionary', 'Lower interest rates; private sector share grows'],
                ['Contractionary', 'Contractionary', 'Falling aggregate demand; higher rates; public share shrinks'],
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-30', name: 'Money multiplier', expr: '1 / reserve requirement', note: 'Maximum deposit expansion per unit of reserves.' },
        { id: 'f-e-31', name: 'Neutral policy rate', expr: 'Trend real growth + inflation target', note: 'Policy above neutral is contractionary; below is expansionary.' },
        { id: 'f-e-32', name: 'Fisher effect', expr: 'Nominal rate ≈ real rate + expected inflation', note: 'Central to how policy rates translate into real borrowing costs.' },
      ],
      cards: [
        { id: 'c-e-40', front: 'Money multiplier', back: '1 / reserve requirement. A 20% requirement gives a multiplier of 5.' },
        { id: 'c-e-41', front: 'Neutral policy rate', back: 'Trend real growth + inflation target. Above it policy is contractionary; below it, expansionary.' },
        { id: 'c-e-42', front: 'Liquidity trap', back: 'Rates near zero and additional monetary easing fails to stimulate spending — conventional policy loses traction.' },
        { id: 'c-e-43', front: 'Three qualities of an effective central bank', back: 'Independence, credibility, transparency.' },
        { id: 'c-e-44', front: 'Expansionary fiscal + contractionary monetary policy', back: 'Higher output, higher interest rates, and a larger public sector share of GDP.' },
      ],
      questions: [
        {
          id: 'q-ec-029', difficulty: 'easy',
          stem: 'A central bank buys government bonds in the open market. This action most likely:',
          choices: ['drains bank reserves and tightens monetary policy', 'adds bank reserves and eases monetary policy', 'has no effect on reserves, since bonds are exchanged for bonds'],
          answer: 1,
          explain: 'The central bank pays for the bonds by crediting banks\' reserve accounts, increasing reserves available for lending. Purchases ease policy; sales tighten it.',
          why: [
            'A describes an open market *sale*.',
            'C is wrong — the bank pays with newly created reserves, not with other bonds.',
          ],
        },
        {
          id: 'q-ec-021', difficulty: 'medium',
          stem: 'A central bank facing policy rates near zero finds that further easing does little to increase spending. This situation is best described as:',
          choices: ['crowding out', 'a liquidity trap', 'cost-push inflation'],
          answer: 1,
          explain: 'A liquidity trap occurs when nominal rates approach their lower bound and additional liquidity is hoarded rather than spent, neutralising conventional monetary policy.',
          why: [
            'A describes government borrowing displacing private investment — a fiscal limitation.',
            'C describes inflation driven by rising input costs, unrelated to the effectiveness of easing.',
          ],
        },
        {
          id: 'q-ec-040', difficulty: 'hard',
          stem: 'An economy\'s trend real growth rate is 2.0% and the central bank\'s inflation target is 2.5%. The policy rate is currently 3.5%. The stance of monetary policy is best described as:',
          choices: ['contractionary', 'neutral', 'expansionary'],
          answer: 2,
          explain: 'Neutral rate = 2.0% + 2.5% = 4.5%. A policy rate of 3.5% sits below neutral, so policy is stimulating demand — expansionary.',
          why: [
            'A would require a policy rate above 4.5%.',
            'B would require the policy rate to equal 4.5%.',
          ],
        },
        {
          id: 'q-ec-041', difficulty: 'expert',
          stem: 'A government runs an expansionary fiscal policy while the central bank simultaneously pursues a contractionary monetary policy. The most likely combined effect is:',
          choices: [
            'lower interest rates and a smaller public sector share of GDP.',
            'higher interest rates and a larger public sector share of GDP.',
            'lower output and lower interest rates.',
          ],
          answer: 1,
          explain: 'Higher government spending raises demand for funds while tight money restricts their supply, so interest rates rise. Higher rates crowd out private investment, while public spending grows — the public sector\'s share of the economy increases.',
          why: [
            'A describes the reverse mix: contractionary fiscal with expansionary monetary policy.',
            'C is inconsistent with an expansionary fiscal impulse, and interest rates would rise, not fall.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'econ-geopolitics',
      name: 'Introduction to Geopolitics',
      los: [
        'Describe geopolitics and how state and non-state actors influence it',
        'Describe the forces of cooperation versus competition and globalisation versus nationalism',
        'Describe geopolitical archetypes and the tools of geopolitics',
        'Describe the types of geopolitical risk and how it is assessed',
        'Describe the effects of geopolitical risk on investments',
      ],
      lessons: [
        {
          id: 'econ-geopolitics-l1',
          title: 'Two axes, four worlds, and risk that moves markets',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'Geopolitics is the study of how geography, politics and economics shape relations between countries. The players are **state actors** — national governments — and **non-state actors**: multinational companies, international organisations, NGOs and influential individuals, all of which can pursue goals that cross borders.' },
            { t: 'h', x: 'The two forces' },
            {
              t: 'ul',
              x: [
                '**Cooperation vs non-cooperation** — whether a country coordinates with others on rules, standards and security, or pursues its interests unilaterally. Countries cooperate for resource access, security, and to shape standards to their advantage.',
                '**Globalisation vs nationalism** — whether a country embraces open trade and capital flows and cross-border production, or prioritises domestic control and self-sufficiency.',
              ],
            },
            {
              t: 'table',
              head: ['Archetype', 'Cooperation', 'Orientation', 'Character'],
              rows: [
                ['**Autarky**', 'Non-cooperative', 'Nationalist', 'Self-sufficient; state control of strategic industries and supply chains'],
                ['**Hegemony**', 'Non-cooperative', 'Globalised', 'Dominant power exerting influence to set the rules for others'],
                ['**Bilateralism**', 'Cooperative', 'Nationalist', 'Cooperation through country-to-country agreements'],
                ['**Multilateralism**', 'Cooperative', 'Globalised', 'Broad participation in rules-based international frameworks'],
              ],
            },
            {
              t: 'callout', label: 'Why the framework is useful',
              x: 'Placing a country on the two axes tells you what policy tools it is likely to reach for, which industries it will protect, and how exposed foreign investors there are to sudden rule changes. Movement along the axes over time is itself a source of risk.',
            },
            { t: 'h', x: 'The tools of geopolitics' },
            {
              t: 'ul',
              x: [
                '**National security tools** — armed conflict, espionage, alliances and military cooperation.',
                '**Economic tools** — free trade agreements, tariffs, quotas, nationalisation of companies or industries.',
                '**Financial tools** — access to currency markets, sanctions, and restrictions on cross-border investment.',
              ],
            },
            { t: 'h', x: 'Three types of geopolitical risk' },
            {
              t: 'table',
              head: ['Type', 'Nature', 'Examples'],
              rows: [
                ['Event risk', 'Known in advance, uncertain outcome', 'Elections, treaty deadlines, scheduled referendums'],
                ['Exogenous risk', 'Sudden and unanticipated', 'Invasions, coups, uprisings, natural disasters'],
                ['Thematic risk', 'Known, evolving over long periods', 'Climate change, cyber threats, pandemics, migration'],
              ],
            },
            { t: 'h', x: 'Assessing the risk' },
            { t: 'p', x: 'Analysts judge a geopolitical risk on its **likelihood**, its **velocity** — how quickly its effects reach markets — and its **size of impact**. High-velocity risks, typically exogenous, produce sharp short-term market moves and are hard to hedge; low-velocity thematic risks unfold slowly and matter most for long-term strategic allocation. Scenario analysis and signposts — observable developments that indicate a scenario is becoming more likely — help convert uncertainty into portfolio decisions.' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-e-50', front: 'Autarky', back: 'Non-cooperative and nationalist — self-sufficiency and state control of strategic industries.' },
        { id: 'c-e-51', front: 'Hegemony', back: 'Non-cooperative but globalised — a dominant power shaping rules for others.' },
        { id: 'c-e-52', front: 'Multilateralism vs bilateralism', back: 'Both cooperative. Multilateralism is globalised, rules-based participation; bilateralism works through country-to-country agreements with a nationalist orientation.' },
        { id: 'c-e-53', front: 'Event, exogenous and thematic risk', back: 'Event: known date, uncertain outcome (elections). Exogenous: sudden and unexpected (invasion). Thematic: known and evolving slowly (climate change).' },
        { id: 'c-e-54', front: 'Three dimensions for assessing geopolitical risk', back: 'Likelihood, velocity, and size of impact.' },
      ],
      questions: [
        {
          id: 'q-ec-050', difficulty: 'easy',
          stem: 'A national election scheduled for next spring, whose outcome is uncertain, is best classified as:',
          choices: ['event risk', 'exogenous risk', 'thematic risk'],
          answer: 0,
          explain: 'Event risk concerns developments whose timing is known in advance but whose outcome is uncertain. A scheduled election is the textbook example.',
          why: [
            'B describes sudden, unanticipated shocks such as an invasion or coup.',
            'C describes long-running, evolving risks such as climate change.',
          ],
        },
        {
          id: 'q-ec-051', difficulty: 'medium',
          stem: 'A country pursues open trade and deep integration with global markets, but largely acts unilaterally to set rules that others must follow. This country best fits which geopolitical archetype?',
          choices: ['Multilateralism', 'Hegemony', 'Autarky'],
          answer: 1,
          explain: 'Hegemony combines a globalised orientation with non-cooperation: a dominant power engages with the world economy but on terms it sets.',
          why: [
            'A is also globalised, but cooperative — it participates in shared, rules-based frameworks rather than dictating them.',
            'C is non-cooperative but nationalist, pursuing self-sufficiency rather than global integration.',
          ],
        },
        {
          id: 'q-ec-052', difficulty: 'hard',
          stem: 'Compared with a thematic geopolitical risk, a high-velocity exogenous risk most likely:',
          choices: [
            'has a greater effect on long-term strategic asset allocation than on short-term market prices.',
            'produces sharper short-term market reactions and is more difficult to prepare for.',
            'can be identified and fully hedged well in advance.',
          ],
          answer: 1,
          explain: 'Exogenous shocks arrive suddenly, so markets reprice quickly and there is little opportunity to position beforehand. Slow-moving thematic risks, by contrast, are most relevant to long-horizon allocation decisions.',
          why: [
            'A describes the typical profile of a low-velocity thematic risk.',
            'C contradicts the defining unpredictability of exogenous risk.',
          ],
        },
        {
          id: 'q-ec-053', difficulty: 'expert',
          stem: 'A government restricts its banks from settling transactions with a rival state and freezes that state\'s foreign reserves held within its jurisdiction. These actions are best described as the use of:',
          choices: ['national security tools', 'economic tools', 'financial tools'],
          answer: 2,
          explain: 'Limiting access to currency settlement and freezing reserves operate through the financial system — these are financial tools of geopolitics, alongside sanctions and restrictions on cross-border investment.',
          why: [
            'A involves military action, espionage and alliances.',
            'B involves trade instruments such as tariffs, quotas, trade agreements and nationalisation.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'econ-trade',
      name: 'International Trade',
      los: [
        'Compare gross domestic product and gross national product',
        'Describe the benefits and costs of international trade',
        'Contrast absolute and comparative advantage',
        'Compare types of trade restrictions and their economic implications',
        'Describe trading blocs, common markets and economic unions, and the roles of international organisations',
      ],
      lessons: [
        {
          id: 'econ-trade-l1',
          title: 'Why countries trade, and what restrictions cost',
          minutes: 9,
          blocks: [
            { t: 'h', x: 'GDP vs GNP' },
            { t: 'p', x: '**GDP** measures output produced within a country\'s borders, whoever owns the factors of production. **GNP** measures output produced by a country\'s citizens and their capital, wherever it is located. A country with large foreign investment inside its borders has GDP above GNP; one whose firms and workers earn heavily abroad has GNP above GDP.' },
            { t: 'h', x: 'Absolute vs comparative advantage' },
            { t: 'p', x: 'A country has an **absolute advantage** if it can produce a good using fewer resources. It has a **comparative advantage** if its *opportunity cost* of producing that good is lower. Trade is beneficial whenever opportunity costs differ — even if one country is more efficient at everything.' },
            {
              t: 'example', title: 'Worked example',
              x: 'One worker in Country A makes 10 units of wine or 5 units of cloth. One worker in Country B makes 4 wine or 4 cloth.\n\nA has an absolute advantage in both goods.\nOpportunity cost of 1 cloth: A gives up 2 wine; B gives up 1 wine.\n\nB has the comparative advantage in cloth; A in wine. Both gain by specialising and trading.',
            },
            { t: 'p', x: 'Beyond specialisation, trade brings economies of scale, greater variety, and competitive pressure that raises productivity. The costs fall on specific groups: workers and firms in industries exposed to import competition, and the adjustment costs of moving resources between sectors.' },
            { t: 'h', x: 'Trade restrictions and who wins' },
            {
              t: 'table',
              head: ['Restriction', 'Domestic price', 'Domestic producers', 'Who captures the gap'],
              rows: [
                ['Tariff', 'Rises', 'Gain', 'Government collects tariff revenue'],
                ['Import quota', 'Rises', 'Gain', 'Holders of import licences (quota rents), unless the government auctions them'],
                ['Voluntary export restraint', 'Rises', 'Gain', 'Foreign exporters, who charge the higher price'],
                ['Export subsidy', 'Rises', 'Exporters gain', 'Taxpayers fund it; a large country also lowers the world price'],
              ],
            },
            {
              t: 'callout', label: 'The constant',
              x: 'For a small importing country every one of these restrictions reduces **national welfare** overall: consumer surplus falls by more than producer surplus and government revenue rise together, leaving a **deadweight loss**. A voluntary export restraint is the worst for the importing country, because even the rent goes abroad.',
            },
            { t: 'h', x: 'Levels of economic integration' },
            {
              t: 'table',
              head: ['Arrangement', 'Adds to the level before it'],
              rows: [
                ['Free trade area', 'No trade barriers among members; each keeps its own external policy'],
                ['Customs union', '+ a common trade policy toward non-members'],
                ['Common market', '+ free movement of labour and capital among members'],
                ['Economic union', '+ common economic institutions and coordinated economic policy'],
                ['Monetary union', '+ a single currency'],
              ],
            },
            { t: 'p', x: 'Among international organisations, the **WTO** administers the rules of trade between nations, the **IMF** promotes monetary stability and lends to countries facing balance of payments difficulties, and the **World Bank** finances long-term development and poverty reduction.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-40', name: 'Opportunity cost of good X', expr: 'Units of Y forgone / units of X gained', note: 'The country with the lower opportunity cost holds the comparative advantage.' },
        { id: 'f-e-41', name: 'GNP from GDP', expr: 'GNP = GDP + income earned abroad by residents − income earned domestically by foreigners', note: 'Location vs ownership of production.' },
      ],
      cards: [
        { id: 'c-e-60', front: 'Absolute vs comparative advantage', back: 'Absolute: fewer resources to produce. Comparative: lower opportunity cost. Trade gains depend only on comparative advantage.' },
        { id: 'c-e-61', front: 'Who captures the rent from a voluntary export restraint?', back: 'Foreign exporters — which makes it more costly to the importing country than an equivalent tariff.' },
        { id: 'c-e-62', front: 'Customs union vs free trade area', back: 'Both remove internal barriers; a customs union also adopts a common external trade policy.' },
        { id: 'c-e-63', front: 'GDP vs GNP', back: 'GDP: produced within the borders. GNP: produced by the country\'s citizens and capital, anywhere in the world.' },
        { id: 'c-e-64', front: 'Common market adds what to a customs union?', back: 'Free movement of factors of production — labour and capital.' },
      ],
      questions: [
        {
          id: 'q-ec-060', difficulty: 'easy',
          stem: 'Several countries eliminate tariffs on trade among themselves, adopt a common tariff on imports from non-members, but do not allow free movement of workers. This arrangement is best described as a:',
          choices: ['free trade area', 'customs union', 'common market'],
          answer: 1,
          explain: 'Removing internal barriers plus a common external trade policy defines a customs union. Adding free movement of labour and capital would make it a common market.',
          why: [
            'A lacks the common external tariff — members keep independent policies toward outsiders.',
            'C requires free movement of factors of production, which is absent here.',
          ],
        },
        {
          id: 'q-ec-061', difficulty: 'medium',
          vignette: 'One worker in Country X can produce 12 tonnes of steel or 6 tonnes of grain. One worker in Country Y can produce 3 tonnes of steel or 3 tonnes of grain.',
          stem: 'Which statement is most accurate?',
          choices: [
            'Country X should produce both goods, since it has an absolute advantage in each.',
            'Country Y has a comparative advantage in grain.',
            'No gains from trade exist, because Country X is more productive in both goods.',
          ],
          answer: 1,
          explain: 'Opportunity cost of 1 tonne of grain: X gives up 2 tonnes of steel; Y gives up only 1. Y therefore has the comparative advantage in grain, and X in steel. Both gain by specialising.',
          why: [
            'A confuses absolute with comparative advantage; specialisation according to opportunity cost raises total output.',
            'C is the classic fallacy. Gains from trade depend on differing opportunity costs, not on absolute productivity.',
          ],
        },
        {
          id: 'q-ec-062', difficulty: 'hard',
          stem: 'A small country imposes a tariff on imported cars. Relative to free trade, the most likely effects in that country are:',
          choices: [
            'higher domestic prices, higher producer surplus, government revenue, and a net welfare loss.',
            'lower domestic prices and a net welfare gain because of the tariff revenue.',
            'higher domestic prices with no deadweight loss, because tariff revenue exactly offsets lost consumer surplus.',
          ],
          answer: 0,
          explain: 'The tariff raises the domestic price. Domestic producers gain surplus and the government collects revenue, but consumers lose more than those two gains combined. The difference — from reduced consumption and inefficient domestic production — is the deadweight loss.',
          why: [
            'B has the price effect backwards and ignores the deadweight loss.',
            'C is wrong because consumer losses exceed the combined producer and government gains; revenue does not cover the efficiency loss.',
          ],
        },
        {
          id: 'q-ec-063', difficulty: 'expert',
          stem: 'An importing country can restrict car imports to the same quantity using either a tariff or a voluntary export restraint (VER) negotiated with the exporting country. From the importing country\'s perspective, the VER is most likely:',
          choices: [
            'preferable, because it avoids provoking retaliation and yields the same national welfare.',
            'worse, because the rent created by the higher price is captured by foreign exporters rather than the domestic government.',
            'equivalent in every respect, because domestic prices and quantities are identical.',
          ],
          answer: 1,
          explain: 'Both policies raise the domestic price and reduce imports to the same quantity. Under a tariff, the price gap on imports becomes government revenue. Under a VER, foreign exporters sell the restricted quantity at the higher price and keep that rent. The importing country suffers the same deadweight loss plus the lost revenue.',
          why: [
            'A ignores the transfer of rent abroad, which leaves national welfare lower under the VER.',
            'C overlooks that identical prices and quantities can still mean very different distributions of the gains.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'econ-flows',
      name: 'Capital Flows and the FX Market',
      los: [
        'Describe the balance of payments accounts and their components',
        'Describe the foreign exchange market, its participants and its functions',
        'Distinguish spot, forward and FX swap transactions',
        'Calculate and interpret real exchange rates',
        'Describe exchange rate regimes and the objectives of capital restrictions',
      ],
      lessons: [
        {
          id: 'econ-flows-l1',
          title: 'Where currencies trade and why capital moves',
          minutes: 9,
          blocks: [
            { t: 'h', x: 'Balance of payments' },
            {
              t: 'ul',
              x: [
                '**Current account** — trade in goods and services, investment income, and current transfers.',
                '**Capital account** — capital transfers and non-produced, non-financial assets (small in practice).',
                '**Financial account** — cross-border investment flows: direct investment, portfolio investment and reserves.',
              ],
            },
            { t: 'p', x: 'The accounts sum to zero. A current account deficit is necessarily financed by a financial account surplus: a country importing more than it exports is, by identity, importing capital — foreigners are accumulating claims on it.' },
            { t: 'h', x: 'The FX market' },
            { t: 'p', x: 'The largest financial market in the world, trading continuously around the globe and almost entirely over the counter. **Sell-side** participants are the dealing banks that make markets. **Buy-side** participants include corporations hedging trade flows, real money and leveraged investment funds, governments and central banks, sovereign wealth funds and retail traders.' },
            {
              t: 'table',
              head: ['Transaction', 'What happens'],
              rows: [
                ['Spot', 'Exchange of currencies for settlement typically two business days later (T+2)'],
                ['Forward', 'Agreement today to exchange currencies at a set rate on a future date'],
                ['FX swap', 'A spot transaction combined with an offsetting forward — used to roll positions and manage funding'],
              ],
            },
            { t: 'h', x: 'Real exchange rates' },
            {
              t: 'formula', name: 'Real exchange rate',
              x: 'Real rate (price/base) = Nominal rate (price/base) × (CPI_base / CPI_price)',
            },
            { t: 'p', x: 'The nominal rate tells you how many units of one currency buy another. The real rate adjusts for relative price levels, telling you how many *goods* your currency buys abroad. A rise in the real exchange rate means the base currency buys more foreign goods — its purchasing power has increased relative to the price currency.' },
            {
              t: 'example', title: 'Worked example',
              x: 'USD/EUR (price USD, base EUR) = 1.10. Eurozone CPI = 105, US CPI = 110.\n\nReal USD/EUR = 1.10 × (105 / 110) = 1.05\n\nAdjusting for higher US prices, the euro\'s real purchasing power over US goods is lower than the nominal rate suggests.',
            },
            { t: 'h', x: 'Exchange rate regimes' },
            { t: 'p', x: 'Regimes run from the most rigid to the most flexible: formal **dollarisation** (using another country\'s currency), a **monetary union**, a **currency board** (domestic currency fully backed by foreign reserves), a **fixed peg**, a **target zone**, a **crawling peg**, a **managed float**, and an **independent float**.' },
            {
              t: 'callout', label: 'The impossible trinity',
              x: 'A country cannot simultaneously have a **fixed exchange rate**, **free capital movement** and **independent monetary policy**. It can choose any two. A peg with open capital markets forces the central bank to set interest rates to defend the peg rather than to manage the domestic economy.',
            },
            { t: 'p', x: 'Governments restrict capital flows to reduce volatility and the risk of sudden stops, preserve monetary independence under a fixed exchange rate, protect strategic industries from foreign ownership, or raise revenue. The costs are reduced access to foreign capital and a less efficient allocation of investment.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-50', name: 'Balance of payments identity', expr: 'Current account + Capital account + Financial account = 0', note: 'A current account deficit implies a financial account surplus.' },
        { id: 'f-e-51', name: 'Real exchange rate', expr: 'Real (P/B) = Nominal (P/B) × CPI_base / CPI_price', note: 'Adjusts the nominal rate for relative price levels.' },
      ],
      cards: [
        { id: 'c-e-70', front: 'Three balance of payments accounts', back: 'Current, capital, and financial. They sum to zero.' },
        { id: 'c-e-71', front: 'The impossible trinity', back: 'A fixed exchange rate, free capital flows and independent monetary policy — a country can have only two.' },
        { id: 'c-e-72', front: 'FX swap', back: 'A spot currency exchange combined with an offsetting forward exchange — used to roll positions and manage funding.' },
        { id: 'c-e-73', front: 'Currency board', back: 'A regime in which domestic currency is fully backed by foreign reserves at a fixed rate; the central bank gives up discretionary monetary policy.' },
      ],
      questions: [
        {
          id: 'q-ec-032', difficulty: 'easy',
          stem: 'A country runs a persistent current account deficit. By the balance of payments identity, it must also be experiencing:',
          choices: [
            'a financial account surplus, meaning it is a net importer of capital.',
            'a financial account deficit of equal size.',
            'an offsetting increase in its GDP growth rate.',
          ],
          answer: 0,
          explain: 'The accounts sum to zero, so a current account deficit is financed by net capital inflows — foreigners acquiring domestic assets.',
          why: [
            'B would mean the accounts sum to a negative number, violating the identity.',
            'C is wrong because the identity is an accounting relationship, not a statement about growth.',
          ],
        },
        {
          id: 'q-ec-070', difficulty: 'medium',
          stem: 'The nominal USD/EUR exchange rate is 1.20. The US price index is 120 and the eurozone price index is 110. The real USD/EUR exchange rate is closest to:',
          choices: ['1.10', '1.31', '1.20'],
          answer: 0,
          explain: 'Real rate = 1.20 × (CPI_EUR / CPI_USD) = 1.20 × (110/120) = 1.10.',
          why: [
            'B inverts the price ratio, multiplying by 120/110.',
            'C ignores the difference in price levels entirely.',
          ],
        },
        {
          id: 'q-ec-071', difficulty: 'hard',
          stem: 'A country maintains a fixed exchange rate and allows capital to flow freely across its borders. According to the impossible trinity, the country must most likely give up:',
          choices: ['control of its trade policy', 'an independent monetary policy', 'its ability to run a fiscal deficit'],
          answer: 1,
          explain: 'With a peg and open capital markets, any gap between domestic and foreign interest rates would trigger capital flows that break the peg. Interest rates must therefore be set to defend the exchange rate, sacrificing monetary independence.',
          why: [
            'A is not one of the three elements of the trinity.',
            'C is fiscal, not monetary — the trinity concerns exchange rates, capital mobility and monetary policy.',
          ],
        },
        {
          id: 'q-ec-072', difficulty: 'expert',
          stem: 'A company agrees to buy euros for dollars in the spot market today and simultaneously to sell the same amount of euros for dollars in three months at a pre-agreed rate. This transaction is best described as:',
          choices: ['an outright forward', 'an FX swap', 'a currency option'],
          answer: 1,
          explain: 'A spot exchange paired with an offsetting forward exchange of the same amount is an FX swap. Firms use it to obtain temporary funding in another currency or to roll a maturing forward position.',
          why: [
            'A involves only a single future exchange, with no accompanying spot leg.',
            'C would give the company a right, not an obligation, to exchange currencies.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'econ-fx',
      name: 'Exchange Rate Calculations',
      los: [
        'Interpret exchange rate quotations and calculate percentage changes in currency values',
        'Calculate and interpret currency cross-rates',
        'Explain the arbitrage relationship between spot rates, forward rates and interest rates',
        'Calculate and interpret forward premiums and discounts and forward points',
      ],
      lessons: [
        {
          id: 'econ-fx-l1',
          title: 'Reading a currency quote without getting confused',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'A quote is always **price currency / base currency**. In USD/EUR = 1.10, the euro is the base and the dollar is the price: one euro costs 1.10 dollars. Getting this direction right resolves most exchange-rate questions before any arithmetic starts.' },
            {
              t: 'callout', label: 'Appreciation, mechanically',
              x: 'If USD/EUR rises from 1.10 to 1.15, each euro buys more dollars — the **base** currency (EUR) has appreciated and the price currency (USD) has depreciated. The base currency always moves in the same direction as the quote.',
            },
            { t: 'h', x: 'Percentage changes are not symmetric' },
            {
              t: 'formula', name: 'Percentage change in currency value',
              x: 'Base currency:  S₁ / S₀ − 1\nPrice currency: S₀ / S₁ − 1',
            },
            {
              t: 'example', title: 'Worked example',
              x: 'USD/EUR moves from 1.10 to 1.21.\n\nEuro (base): 1.21/1.10 − 1 = +10.0%\nDollar (price): 1.10/1.21 − 1 = −9.1%\n\nA 10% appreciation of one currency is not a 10% depreciation of the other.',
            },
            { t: 'h', x: 'Cross rates' },
            {
              t: 'formula', name: 'Cross rate',
              x: 'A/C = (A/B) × (B/C)\n\nArrange the quotes so the common currency cancels,\ninverting one of them if necessary.',
            },
            { t: 'h', x: 'Forwards and covered interest rate parity' },
            {
              t: 'formula', name: 'Covered interest rate parity',
              x: 'F (P/B) = S (P/B) × [1 + i_P × (days/360)] / [1 + i_B × (days/360)]',
            },
            { t: 'p', x: 'Why must this hold? An investor can either invest in the price currency directly, or convert to the base currency, invest there, and lock in the conversion back with a forward. With no risk in either route, both must return the same amount — otherwise a riskless arbitrage exists.' },
            {
              t: 'callout', label: 'Premium or discount',
              x: 'The currency with the **higher** interest rate trades at a **forward discount**. If the base currency\'s interest rate is lower than the price currency\'s, F > S and the base currency trades at a forward premium.',
            },
            {
              t: 'formula', name: 'Forward points',
              x: 'Forward points = (F − S) × 10,000      (for a four-decimal quote)\n\nPositive points → base currency at a forward premium\nNegative points → base currency at a forward discount',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-e-60', name: 'Cross rate', expr: 'A/C = (A/B) × (B/C)', note: 'Chain quotes so the common currency cancels.' },
        { id: 'f-e-61', name: 'Covered interest rate parity', expr: 'F = S × [1 + i_P(d/360)] / [1 + i_B(d/360)]', note: 'P = price currency, B = base currency.' },
        { id: 'f-e-62', name: 'Percentage change in base currency', expr: 'S₁/S₀ − 1', note: 'The price currency changes by S₀/S₁ − 1 — not the negative of the base change.' },
        { id: 'f-e-63', name: 'Forward points', expr: '(F − S) × 10,000', note: 'For quotes to four decimal places.' },
      ],
      cards: [
        { id: 'c-e-80', front: 'How is an exchange rate quote structured?', back: 'Price currency / base currency. USD/EUR = 1.10 means one euro (base) costs 1.10 dollars (price).' },
        { id: 'c-e-81', front: 'Which currency trades at a forward discount?', back: 'The one with the **higher** interest rate — covered interest rate parity removes the arbitrage.' },
        { id: 'c-e-82', front: 'Percentage change in the price currency', back: 'S₀/S₁ − 1. Not simply the negative of the base currency\'s change.' },
        { id: 'c-e-83', front: 'Covered interest rate parity', back: 'F = S × [1 + i_price(d/360)] / [1 + i_base(d/360)].' },
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
      ],
    },
  ],
};
