// Economics · Module 1 — The Firm and Market Structures. Original wording and numbers.

// Short-run cost curves used in the diagrams (per-unit $, output in hundreds).
const AVC = (q) => 12 - 4 * q + 0.5 * q * q;
const MC = (q) => 12 - 8 * q + 1.5 * q * q;
const ATC = (q) => AVC(q) + 16 / q;

// Long-run average cost with tangent short-run curves.
const LRAC = (q) => 6 + 0.04 * (q - 10) ** 2;
const SATC = (m) => (q) => LRAC(m) + 0.08 * (m - 10) * (q - m) + 0.25 * (q - m) ** 2;

// Monopolistic competition, long run.
const MC_ATC = (q) => 2 + 16 / q + 0.25 * q;

export default {
  id: 'econ-firm',
  name: 'The Firm and Market Structures',
  los: [
    'Determine and interpret breakeven and shutdown points of production, and how economies and diseconomies of scale affect costs under perfect and imperfect competition',
    'Describe characteristics of perfect competition, monopolistic competition, oligopoly and pure monopoly',
    'Explain supply and demand relationships under monopolistic competition, including optimal price, output and pricing strategy',
    'Explain supply and demand relationships under oligopoly, including optimal price, output and pricing strategy',
    'Identify the market structure a firm operates in, and describe the use and limitations of concentration measures',
  ],
  lessons: [
    /* ------------------------------------------------------------ */
    {
      id: 'econ-firm-revenue',
      title: 'Revenue, cost and the meaning of profit',
      minutes: 10,
      intro: 'Everything in this module rests on three ideas: how revenue responds to output, what economists count as a cost, and the single rule every profit-maximising firm follows.',
      blocks: [
        { t: 'h', x: 'Two kinds of firm, two revenue shapes' },
        { t: 'p', x: 'The first question to ask about any firm is whether it can influence the price it charges. A wheat farmer cannot: there are thousands of identical sellers, so the farmer takes the market price as given. A cereal brand can: if it raises its price a little, it loses some customers but not all of them.' },
        {
          t: 'table',
          head: ['', 'Price taker (perfect competition)', 'Price searcher (imperfect competition)'],
          rows: [
            ['Demand curve the firm faces', 'Horizontal at the market price — perfectly elastic', 'Slopes downward'],
            ['Selling one more unit', 'Adds exactly the price to revenue', 'Requires a lower price on *all* units sold'],
            ['Marginal revenue (MR)', '**MR = P = average revenue**', '**MR < P**'],
            ['Total revenue curve', 'A straight line rising with output', 'Rises, peaks, then falls'],
          ],
        },
        { t: 'p', x: 'Why is MR below price for a price searcher? Suppose a firm sells 10 units at $50 and must cut to $48 to sell an 11th. Revenue moves from $500 to $528, so the 11th unit adds only $28 — the $48 it sells for, minus the $2 discount now given on the first ten units.' },
        {
          t: 'callout', label: 'Link to elasticity',
          x: 'While demand is **elastic**, cutting price raises total revenue, so MR is positive. Once demand turns **inelastic**, further price cuts reduce revenue and MR is negative. Total revenue peaks exactly where MR = 0 (unit elasticity). A profit-maximising firm never chooses to operate where MR is negative.',
        },
        {
          t: 'check',
          q: 'A wheat farm in a perfectly competitive market increases the tonnes it sells by 8%. Its total revenue most likely:',
          choices: ['rises by less than 8%, because price falls as it sells more', 'rises by 8%', 'is unchanged, because average revenue falls'],
          answer: 1,
          explain: 'A price taker\'s extra output does not move the market price, so revenue rises in proportion to quantity: MR = AR = P.',
        },

        { t: 'h', x: 'Accounting profit versus economic profit' },
        { t: 'p', x: 'Accountants subtract explicit costs — wages, materials, rent, interest — from revenue. Economists go further and subtract **opportunity costs** too: the return the owners\' own time and capital could have earned in their next best use.' },
        {
          t: 'formula', name: 'Two measures of profit',
          x: 'Accounting profit = Total revenue − Explicit (accounting) costs\nEconomic profit   = Total revenue − Total economic cost\n                  = Accounting profit − Implicit opportunity costs',
        },
        {
          t: 'steps',
          title: 'Worked example — is the bakery really profitable?',
          given: 'An owner runs a bakery. The income statement shows accounting profit of $70,000. To run it, the owner gave up a $60,000 salary elsewhere and has $200,000 of personal savings tied up in equipment that could earn 8% in an investment of similar risk.',
          ask: 'What is the bakery\'s economic profit?',
          x: [
            'Opportunity cost of the owner\'s time: the forgone salary of **$60,000**.',
            'Opportunity cost of the owner\'s capital: 8% × $200,000 = **$16,000**.',
            'Economic profit = $70,000 − $60,000 − $16,000 = **−$6,000**.',
          ],
          result: 'Economic loss of $6,000 — the resources would earn more elsewhere, even though the accounts show a healthy profit.',
        },
        { t: 'p', x: 'A firm earning exactly zero economic profit is earning **normal profit**: its revenue covers the opportunity cost of every input, including a fair return on capital. That is a perfectly acceptable outcome, and it is the long-run result whenever entry into a market is easy.' },

        { t: 'h', x: 'The one rule: produce where MR = MC' },
        { t: 'p', x: 'Marginal cost (MC) is the cost of producing one more unit. If the next unit brings in more revenue than it costs (MR > MC), producing it adds to profit. If it costs more than it brings in (MR < MC), producing it reduces profit. Profit is therefore maximised where the two are equal — with one technical condition: MC must be rising at that point, otherwise MR = MC could mark a profit *minimum*.' },
        {
          t: 'terms',
          x: [
            ['Price taker', 'Profit-maximising output where **P = MC** (because P = MR), with MC rising.'],
            ['Price searcher', 'Choose the output where **MR = MC**, then charge the highest price the demand curve allows at that output.'],
          ],
        },
        {
          t: 'check',
          q: 'A profit maximum is *least likely* to occur where:',
          choices: ['marginal revenue equals marginal cost', 'total revenue minus total cost is greatest', 'average total cost is at its minimum'],
          answer: 2,
          explain: 'Minimum average cost is about efficiency, not profit. Nothing guarantees the most profitable output coincides with the lowest cost per unit — especially for a price searcher.',
        },
        {
          t: 'takeaways',
          x: [
            'Price takers face horizontal demand, so P = MR = AR. Price searchers face downward-sloping demand, so MR < P.',
            'Economic profit subtracts opportunity costs; zero economic profit (normal profit) still rewards all inputs fairly.',
            'Every firm maximises profit where MR = MC with MC rising.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-firm-breakeven',
      title: 'Breakeven, shutdown and economies of scale',
      minutes: 13,
      intro: 'When does a loss-making firm keep going, when does it stop, and why does size sometimes lower costs and sometimes raise them?',
      blocks: [
        { t: 'h', x: 'The cost curves you need' },
        {
          t: 'formula', name: 'Short-run cost relationships',
          x: 'TC  = TFC + TVC\nAFC = TFC / Q      AVC = TVC / Q      ATC = TC / Q = AFC + AVC\nMC  = ΔTC / ΔQ\n\nMC cuts AVC and ATC at their lowest points.',
        },
        { t: 'p', x: 'Why must MC pass through the minimum of each average curve? Think of exam marks. If your next score (the marginal) is below your average, your average falls; if it is above, your average rises. The average stops falling — reaches its minimum — exactly where the marginal equals it.' },
        {
          t: 'plot', x: [0, 8], y: [0, 16], xlabel: 'Output (Q)', ylabel: 'Cost / price per unit',
          curves: [
            { fn: MC, domain: [0.6, 7.5], cls: 'c-accent' },
            { fn: ATC, domain: [1.2, 7.5], cls: 'c-ink' },
            { fn: AVC, domain: [0.3, 7.5], cls: 'c-muted' },
          ],
          hlines: [{ y: 7.65, label: 'P₁', to: 4.72 }, { y: 4, label: 'P₂', to: 4 }],
          points: [{ x: 4.72, y: 7.65 }, { x: 4, y: 4, cls: 'c-wrong' }],
          labels: [
            { x: 5.75, y: 14.6, text: 'MC', cls: 'b' },
            { x: 7.3, y: 12.4, text: 'ATC', cls: 'b' },
            { x: 7.35, y: 8.4, text: 'AVC', cls: 'b' },
            { x: 4.95, y: 6.9, text: 'Breakeven: min ATC' },
            { x: 4.2, y: 3.1, text: 'Shutdown: min AVC' },
          ],
          caption: 'A price taker\'s short-run cost curves. Above P₁ the firm makes economic profit; between P₂ and P₁ it loses money but keeps operating; below P₂ it shuts down.',
        },

        { t: 'h', x: 'Breakeven' },
        { t: 'p', x: 'A firm **breaks even** when total revenue equals total cost — equivalently, when price equals average total cost. For a price taker, the lowest price at which it can break even is the minimum point of ATC.' },
        {
          t: 'steps',
          title: 'Worked example — finding the profitable range',
          given: 'A manufacturer with some pricing power faces demand P = 400 − 2Q. Its costs (including all opportunity costs) are TC = 3,000 + 100Q + 2Q².',
          ask: 'Using the table below, where does the firm break even and where is profit highest?',
          x: [
            'Build the table (Q, P, TR = P×Q, TC, profit):\nQ=10: TR 3,800 · TC 4,200 · profit −400\nQ=20: TR 7,200 · TC 5,800 · profit +1,400\nQ=30: TR 10,200 · TC 7,800 · profit +2,400\nQ=40: TR 12,800 · TC 10,200 · profit +2,600\nQ=50: TR 15,000 · TC 13,000 · profit +2,000\nQ=60: TR 16,800 · TC 16,200 · profit +600\nQ=70: TR 18,200 · TC 19,800 · profit −1,600',
            'Profit turns from negative to positive between Q = 10 and 20, and back to negative between 60 and 70 — so there are **two breakeven points**, one on each side of the profitable range.',
            'Check the MR = MC rule between rows. From 30 to 40: MR = (12,800 − 10,200)/10 = 260 and MC = (10,200 − 7,800)/10 = 240. MR > MC, so expand.',
            'From 40 to 50: MR = 220 and MC = 280. MR < MC, so stop. Profit peaks near **Q = 40**.',
          ],
          result: 'Profitable between roughly Q = 12 and Q = 63; maximum profit about 2,600 at Q ≈ 40 (exactly Q = 37.5).',
        },

        { t: 'h', x: 'The shutdown decision' },
        { t: 'p', x: 'Here is the idea that trips up most candidates. In the short run, some costs — a lease, a loan payment — must be paid **whether or not the firm produces**. Those are sunk for now, so they are irrelevant to the decision. The only question is: *does producing lose less money than not producing?*' },
        {
          t: 'table',
          head: ['Revenue compared with costs', 'Short run', 'Long run'],
          rows: [
            ['TR ≥ TC (P ≥ ATC)', 'Operate', 'Stay in the market'],
            ['TVC ≤ TR < TC (AVC ≤ P < ATC)', '**Operate** — revenue covers variable cost and some fixed cost', '**Exit** — the losses cannot go on'],
            ['TR < TVC (P < AVC)', '**Shut down** — each unit adds to the loss', 'Exit'],
          ],
        },
        {
          t: 'steps',
          title: 'Worked example — the café',
          given: 'A café has annual fixed costs of $90,000 (a lease it cannot break) and variable costs of $120,000. Revenue this year is $180,000.',
          ask: 'Should it keep operating? What if revenue were only $100,000?',
          x: [
            'If it operates: loss = 180,000 − (90,000 + 120,000) = **−$30,000**.',
            'If it closes: it still pays the lease, so loss = **−$90,000**.',
            'Operating loses $60,000 less, because revenue covers all variable cost and $60,000 of the fixed cost. **Keep operating** in the short run.',
            'With revenue of $100,000: operating loses 100,000 − 210,000 = −$110,000, which is worse than the −$90,000 from closing. Revenue does not even cover variable cost, so **shut down**.',
          ],
          result: 'Operate while revenue ≥ variable cost; if the shortfall is expected to persist, plan to exit once the lease can be ended.',
        },
        {
          t: 'check',
          q: 'A price-taking firm faces a market price of $21. At its current output, AVC is $18 and ATC is $24. Prices are not expected to recover. The firm should most likely:',
          choices: ['shut down now, because price is below ATC', 'keep operating in the short run but plan to exit in the long run', 'keep operating indefinitely, because price exceeds AVC'],
          answer: 1,
          explain: 'Price covers AVC with $3 per unit left over toward fixed costs, so producing loses less than closing. But price is below ATC, so the loss is permanent — exit when fixed commitments can be ended.',
        },

        { t: 'h', x: 'Short run, long run and economies of scale' },
        { t: 'p', x: 'The **short run** is any period in which at least one input — usually plant size or technology — is fixed. In the **long run** every input can change, and firms can enter or leave the market. A market stall may be able to change everything within months; a steelworks may need a decade. The firm always *operates* in the short run but *plans* in the long run.' },
        { t: 'p', x: 'Each possible plant size has its own short-run average cost curve (SATC). In the long run the firm picks whichever plant gives the lowest cost for the output it plans, so the **long-run average cost curve (LRAC)** traces the lowest points available across all plant sizes — an "envelope" around the short-run curves.' },
        {
          t: 'plot', x: [0, 20], y: [4, 12], xlabel: 'Output', ylabel: 'Cost per unit',
          curves: [
            { fn: SATC(3), domain: [0.5, 8], cls: 'c-muted' },
            { fn: SATC(6.5), domain: [2.5, 11], cls: 'c-muted' },
            { fn: SATC(10), domain: [5.5, 14.5], cls: 'c-muted' },
            { fn: SATC(13.5), domain: [9, 18], cls: 'c-muted' },
            { fn: SATC(17), domain: [12, 20], cls: 'c-muted' },
            { fn: LRAC, domain: [0, 20], cls: 'c-accent' },
          ],
          points: [{ x: 10, y: 6 }],
          vlines: [{ x: 10, label: 'MES', to: 6 }],
          labels: [
            { x: 15.6, y: 6.55, text: 'LRAC', cls: 'b' },
            { x: 1.3, y: 5.2, text: '← economies of scale' },
            { x: 12.3, y: 5.2, text: 'diseconomies of scale →' },
          ],
          caption: 'Grey curves: short-run average cost for five plant sizes. The long-run curve (green) is their envelope; its minimum is the minimum efficient scale (MES).',
        },
        {
          t: 'table',
          head: ['Economies of scale — LRAC falling', 'Diseconomies of scale — LRAC rising'],
          rows: [
            ['Output rises proportionally more than inputs (increasing returns to scale)', 'Output rises proportionally less than inputs (decreasing returns)'],
            ['Specialisation of workers and managers', 'The firm becomes too large to manage well; communication breaks down'],
            ['Access to expensive but more productive equipment and technology', 'Duplicated functions and overlapping product lines'],
            ['Bulk-purchase discounts on inputs', 'Buying so much of an input that its price is bid up'],
            ['Less waste; sale of by-products; better use of information', 'Bureaucracy and slow decision-making'],
          ],
        },
        {
          t: 'callout', label: 'Minimum efficient scale',
          x: 'The lowest point on LRAC is the **minimum efficient scale** (MES). Under perfect competition, long-run pressure pushes every surviving firm to produce at MES, because market price settles at minimum long-run average cost. A firm on the downward-sloping part should grow; one on the upward-sloping part should shrink or restructure.',
        },
        {
          t: 'check',
          q: 'An analyst finds that Firm X operates on the upward-sloping section of its industry\'s LRAC curve. To lower unit costs, Firm X should most likely:',
          choices: ['expand output with a larger plant', 'reduce its scale of operations', 'stay where it is, because it has passed minimum efficient scale'],
          answer: 1,
          explain: 'On the rising section, diseconomies of scale dominate: each extra unit of scale raises cost per unit. Downsizing moves the firm back down toward the minimum efficient scale.',
        },
        {
          t: 'takeaways',
          x: [
            'Breakeven: P = ATC (minimum ATC for a price taker). Shutdown: P below minimum AVC.',
            'Between the two, operate at a loss in the short run — fixed costs are paid either way — and exit in the long run.',
            'LRAC is the envelope of short-run curves. Falling LRAC means economies of scale; rising means diseconomies; the minimum is the minimum efficient scale.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-firm-structures',
      title: 'The four market structures',
      minutes: 9,
      intro: 'Market structure decides how much pricing power a firm has — and therefore how long any profit it earns can last.',
      blocks: [
        { t: 'p', x: 'Economists sort markets along a spectrum, from the most competitive to the least: **perfect competition**, **monopolistic competition**, **oligopoly** and **monopoly**. An analyst cares because structure shapes a company\'s long-run profitability: in highly competitive markets, entry wipes out extra profit; in concentrated markets, high margins can persist for years.' },
        { t: 'h', x: 'Five factors that determine structure' },
        {
          t: 'ol',
          x: [
            '**Number and relative size of sellers** — many small firms, a handful of large ones, or one.',
            '**Degree of product differentiation** — identical commodities, or products customers see as distinct.',
            '**Pricing power** — none (price taker) through to considerable.',
            '**Barriers to entry and exit** — capital requirements, patents, licences, and assets that would be hard to sell if the firm left.',
            '**Non-price competition** — advertising, branding, features and service.',
          ],
        },
        {
          t: 'table',
          head: ['Structure', 'Sellers', 'Product', 'Barriers to entry', 'Pricing power', 'Non-price competition'],
          rows: [
            ['**Perfect competition**', 'Many', 'Identical', 'Very low', 'None', 'None'],
            ['**Monopolistic competition**', 'Many', 'Differentiated', 'Low', 'Some', 'Advertising and differentiation'],
            ['**Oligopoly**', 'Few', 'Standardised or differentiated', 'High', 'Some to considerable', 'Advertising and differentiation'],
            ['**Monopoly**', 'One', 'Unique — no close substitutes', 'Very high', 'Considerable', 'Advertising'],
          ],
        },
        {
          t: 'ul',
          x: [
            '**Perfect competition** is not just a textbook ideal: many agricultural and commodity markets come close. Profit is driven to normal profit, but well-run firms still thrive.',
            '**Monopolistic competition** blends competition (many firms, easy entry) with a monopoly-like element (each firm\'s product is a little different). Restaurants, clothing and cosmetics are typical.',
            '**Oligopoly** has so few firms that each must anticipate its rivals\' reactions. Airlines on a given route, cement, and soft drinks are examples.',
            '**Monopoly** has a single seller of a product without close substitutes. Most real monopolies — local power or water supply — are regulated, often allowed to earn only a normal return.',
          ],
        },
        {
          t: 'callout', label: 'A barrier that looks like an exit problem',
          x: 'High **exit** costs also deter **entry**. If a specialised plant (say, an aluminium smelter) would be nearly worthless outside the industry, a would-be entrant knows it could not recover its investment by leaving — so it may not enter at all.',
        },
        {
          t: 'check',
          q: 'A market with many sellers, each offering a slightly different product and having some pricing power, is best described as:',
          choices: ['oligopoly', 'monopolistic competition', 'perfect competition'],
          answer: 1,
          explain: 'Many sellers plus differentiation (hence some pricing power) is the signature of monopolistic competition. Oligopoly has few sellers; perfect competition has identical products and no pricing power.',
        },
        { t: 'h', x: 'Who prefers which structure?' },
        { t: 'p', x: 'Owners prefer the most pricing power — monopoly and oligopoly. Consumers generally prefer the most competition, since it usually means the largest quantity at the lowest price. But there is a trade-off: firms spend heavily on research only if they expect a return, so less-than-perfect competition can fund innovation — new medicines are the classic example.' },
        { t: 'h', x: 'Porter\'s five forces and economic moats' },
        { t: 'p', x: 'Strategy analysts summarise the same questions with Michael Porter\'s **five forces**: threat of entry, power of suppliers, power of buyers, threat of substitutes, and rivalry among existing firms. Four of these map directly onto the economist\'s factors; supplier power is the extra one, rarely central in theory but important in practice. Equity analysts often talk about a company\'s **economic moat** — the barriers (brand, switching costs, scale, patents) that keep rivals from competing its profits away.' },
        {
          t: 'check',
          q: 'A market has relatively few sellers of a largely standardised product, such as cement. It is best described as:',
          choices: ['monopoly', 'perfect competition', 'oligopoly'],
          answer: 2,
          explain: 'A small number of sellers is what defines oligopoly, whether the product is standardised (cement, oil) or branded (breakfast cereals).',
        },
        {
          t: 'takeaways',
          x: [
            'Structure is set by the number of sellers, differentiation, pricing power, entry/exit barriers and non-price competition.',
            'Competition drives profit toward normal levels; barriers let high profits last.',
            'Less competitive structures cost consumers in price but can fund innovation.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-firm-monopolistic',
      title: 'Monopolistic competition and monopoly',
      minutes: 10,
      intro: 'Differentiation gives a firm a little pricing power in the short run — and entry takes the profit away in the long run.',
      blocks: [
        { t: 'h', x: 'What makes it "monopolistic"' },
        {
          t: 'ol',
          x: [
            'A large number of potential buyers and sellers.',
            'Products are close substitutes, but each firm works to make its own look different.',
            'Entry and exit are fairly cheap.',
            'Each firm has some pricing power.',
            'Firms compete through advertising, branding, styling and other non-price strategies.',
          ],
        },
        { t: 'p', x: 'The more successfully a firm convinces customers its product is special, the steeper (less elastic) its demand curve becomes and the more it resembles a monopolist. A loyal motorcycle or smartphone buyer who will not consider rival brands gives the seller real pricing power.' },
        { t: 'h', x: 'Short run: can earn economic profit' },
        { t: 'p', x: 'The firm follows the universal rule — produce where **MR = MC** — then reads the price off its downward-sloping demand curve. If that price is above average total cost at that output, the firm earns economic profit; if below, it makes a loss.' },
        {
          t: 'callout', label: 'No supply curve',
          x: 'A perfectly competitive firm\'s supply curve is its MC curve above AVC. A monopolistically competitive firm has **no well-defined supply curve**: the quantity it offers depends on MR and MC, while its price depends on demand. There is no single price–quantity schedule independent of demand.',
        },
        { t: 'h', x: 'Long run: zero economic profit, but excess capacity' },
        { t: 'p', x: 'Because entry is easy, short-run profit acts as a signal. New firms enter with similar products, customers are spread more thinly, and each incumbent\'s demand curve shifts left until it just touches the ATC curve. At that point price equals average cost and economic profit is zero.' },
        {
          t: 'plot', x: [0, 12], y: [0, 10], xlabel: 'Output', ylabel: 'Price / cost',
          curves: [
            { fn: MC_ATC, domain: [2.2, 12], cls: 'c-ink' },
            { fn: (q) => 8.4 - 0.39 * q, domain: [0, 12], cls: 'c-accent' },
            { fn: (q) => 8.4 - 0.78 * q, domain: [0, 10.7], cls: 'c-accent', dash: true },
            { fn: (q) => 2 + 0.5 * q, domain: [0, 12], cls: 'c-muted' },
          ],
          hlines: [{ y: 6.45, label: 'P*', to: 5 }],
          vlines: [{ x: 5, label: 'Q (chosen)', to: 6.45 }, { x: 8, label: 'Q (min ATC)', to: 6 }],
          points: [{ x: 5, y: 6.45 }, { x: 8, y: 6, cls: 'c-muted' }],
          labels: [
            { x: 11.05, y: 6.75, text: 'ATC', cls: 'b' },
            { x: 10.7, y: 3.4, text: 'Demand', cls: 'b' },
            { x: 7.6, y: 1.2, text: 'MR', cls: 'b' },
            { x: 11.05, y: 8.1, text: 'MC' },
          ],
          caption: 'Long-run equilibrium: MR = MC at the chosen output, where demand is tangent to ATC. Output is below the level that minimises ATC — the "excess capacity" cost of variety.',
        },
        {
          t: 'table',
          head: ['Long run', 'Perfect competition', 'Monopolistic competition'],
          rows: [
            ['Economic profit', 'Zero', 'Zero'],
            ['Price vs marginal cost', 'P = MC', 'P > MC'],
            ['Output vs minimum ATC', 'At minimum ATC', '**Below** minimum ATC (excess capacity)'],
            ['Advertising and differentiation costs', 'None', 'Part of costs'],
            ['Variety for consumers', 'None', 'Considerable'],
          ],
        },
        {
          t: 'check',
          q: 'Compared with a perfectly competitive firm in long-run equilibrium, a monopolistically competitive firm in long-run equilibrium most likely:',
          choices: ['produces less than the output that minimises average total cost', 'earns positive economic profit', 'sets price equal to marginal cost'],
          answer: 0,
          explain: 'Demand is tangent to ATC on ATC\'s falling section, so the firm stops short of minimum-cost output. Profit is zero (entry) and price exceeds MC (downward-sloping demand).',
        },
        { t: 'h', x: 'Is it really "imperfect"?' },
        { t: 'p', x: 'Monopolistic competition looks inefficient — higher prices, less output — yet it is everywhere. Two reasons: people value **variety** (countries that both make cars still import each other\'s brands), and the chance to earn profit from a better or different product rewards **innovation**.' },

        { t: 'h', x: 'Pure monopoly in brief' },
        { t: 'p', x: 'A monopolist faces the whole market demand curve. It still produces where MR = MC and charges the price demand allows — a smaller quantity at a higher price than a competitive market would deliver, creating a deadweight loss. Because entry is blocked, economic profit can persist in the long run. Sources of monopoly power include control of an essential resource, patents and licences, and economies of scale so large that one firm can serve the market most cheaply (a **natural monopoly**, usually regulated).' },
        {
          t: 'callout', label: 'Price discrimination',
          x: 'A monopolist can sometimes charge different prices to different groups for the same product — student discounts, peak and off-peak fares. It needs pricing power, groups with different demand elasticities that it can tell apart, and a way to stop resale. Discrimination captures more consumer surplus and often *raises* output toward the competitive level.',
        },
        {
          t: 'takeaways',
          x: [
            'Monopolistic competitors maximise profit where MR = MC and price from their demand curve.',
            'Easy entry pushes long-run economic profit to zero, but output stays below minimum ATC (excess capacity) and P > MC.',
            'Monopolists restrict output and raise price; with entry blocked, profit can last — which is why most are regulated.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-firm-oligopoly',
      title: 'Oligopoly: pricing when rivals react',
      minutes: 15,
      intro: 'With only a few firms, every decision is a move in a game. This lesson covers the four models the exam uses and why cartels tend to break down.',
      blocks: [
        { t: 'p', x: 'An oligopoly has a small number of firms, high barriers to entry, products that are close substitutes (branded or not), substantial pricing power and heavy non-price competition. Its defining feature is **interdependence**: each firm\'s best price or output depends on what its rivals do.' },

        { t: 'h', x: '1. The kinked demand curve' },
        { t: 'p', x: 'Assume rivals **match price cuts** (so they do not lose customers) but **ignore price rises** (happy to win customers from the firm that raised). Above the current price, demand is very elastic — raise price and customers flee. Below it, demand is inelastic — cut price and rivals follow, so little is gained. The demand curve has a kink at the prevailing price.' },
        {
          t: 'plot', x: [0, 12], y: [0, 11], xlabel: 'Quantity', ylabel: 'Price',
          lines: [
            { pts: [[0, 9.5], [6, 8], [12, 2]], cls: 'c-ink' },
            { pts: [[0, 9.5], [6, 6.5]], cls: 'c-accent' },
            { pts: [[6, 2], [7, 0]], cls: 'c-accent' },
            { pts: [[6, 6.5], [6, 2]], cls: 'c-accent', dash: true },
          ],
          curves: [
            { fn: (q) => 1 + 0.6 * q, domain: [0, 12], cls: 'c-muted' },
            { fn: (q) => 2.6 + 0.6 * q, domain: [0, 12], cls: 'c-muted', dash: true },
          ],
          hlines: [{ y: 8, label: 'P*', to: 6 }],
          vlines: [{ x: 6, label: 'Q*', to: 2 }],
          points: [{ x: 6, y: 8 }],
          labels: [
            { x: 10.3, y: 4.6, text: 'Demand', cls: 'b' },
            { x: 2, y: 10.2, text: 'elastic above the kink' },
            { x: 7.2, y: 2.3, text: 'MR gap' },
            { x: 11, y: 7.1, text: 'MC₁' },
            { x: 10.1, y: 9.3, text: 'MC₂' },
            { x: 0.3, y: 7.3, text: 'MR' },
          ],
          caption: 'The kink creates a vertical gap in marginal revenue. Marginal cost can shift anywhere within the gap (MC₁ to MC₂) without changing the profit-maximising price or output — so prices are "sticky".',
        },
        {
          t: 'callout', label: 'Strength and weakness', kind: 'warn',
          x: 'The model explains why oligopoly prices stay stable even when costs change. Its weakness: it cannot explain **how the prevailing price was set in the first place**, so it is an incomplete theory of pricing.',
        },
        {
          t: 'check',
          q: 'Under the kinked demand curve model, a firm that raises its price above the prevailing level most likely expects rivals to:',
          choices: ['match the increase', 'cut their prices sharply', 'hold their prices, so it loses many customers'],
          answer: 2,
          explain: 'Rivals ignore price rises and gain the customers, which is why demand is elastic above the kink. Matching is the assumed response to a price cut.',
        },

        { t: 'h', x: '2. Cournot: choosing quantities simultaneously' },
        { t: 'p', x: 'In the Cournot model each firm chooses its output assuming its rivals\' output will not change. Each firm maximises profit given that assumption, and the process settles where no firm wants to change its quantity.' },
        {
          t: 'steps',
          title: 'Worked example — duopoly versus monopoly versus competition',
          given: 'Market demand is P = 200 − Q. Every firm has constant marginal cost MC = 20.',
          ask: 'Find price and total output under monopoly, perfect competition and a two-firm Cournot duopoly.',
          x: [
            '**Monopoly.** TR = 200Q − Q², so MR = 200 − 2Q. Set MR = MC: 200 − 2Q = 20 → **Q = 90**, and P = 200 − 90 = **110**.',
            '**Perfect competition.** Price is driven to marginal cost: P = 20, so 200 − Q = 20 → **Q = 180**.',
            '**Cournot duopoly.** Firm 1\'s revenue is (200 − q₁ − q₂)q₁, so MR₁ = 200 − 2q₁ − q₂. Setting MR₁ = 20 gives 2q₁ + q₂ = 180; by symmetry firm 2 gives q₁ + 2q₂ = 180.',
            'The firms are identical, so q₁ = q₂ = q: 3q = 180 → **q = 60 each**, total **Q = 120**, and P = 200 − 120 = **80**.',
          ],
          result: 'Monopoly: Q 90, P 110. Cournot duopoly: Q 120, P 80. Competition: Q 180, P 20. The Cournot outcome lies between the two extremes.',
        },
        { t: 'p', x: 'With more Cournot firms, the equilibrium moves steadily toward the competitive result — with *n* identical firms, total output here would be 180 × n/(n + 1). That tendency has long been part of the intellectual case for antitrust policy.' },

        { t: 'h', x: '3. Nash equilibrium and the temptation to collude' },
        { t: 'p', x: 'Game theory asks what each player does when it anticipates the other\'s best response. A **Nash equilibrium** is a set of strategies where no firm can do better by changing its own strategy alone, given what the others are doing. Firms act non-cooperatively, each maximising its own profit.' },
        {
          t: 'table',
          head: ['Profits (Alpha, Beta)', 'Beta holds price', 'Beta discounts'],
          rows: [
            ['**Alpha holds price**', '60, 60', '20, 80'],
            ['**Alpha discounts**', '80, 20', '35, 35'],
          ],
        },
        {
          t: 'steps',
          title: 'Worked example — find the Nash equilibrium',
          given: 'Use the payoff table above. Each firm chooses to hold its price or to discount, without knowing the other\'s choice.',
          ask: 'What is the Nash equilibrium, and why don\'t the firms reach the best joint outcome?',
          x: [
            'Alpha\'s view: if Beta holds, Alpha earns 60 by holding or 80 by discounting → discount. If Beta discounts, Alpha earns 20 by holding or 35 by discounting → discount. Discounting is best **whatever Beta does**.',
            'Beta\'s payoffs mirror Alpha\'s, so discounting is also Beta\'s best choice whatever Alpha does.',
            'Both discount, earning 35 each. From there, neither can gain by switching alone (holding would drop it to 20) — a **Nash equilibrium**.',
            'Yet both holding would give 60 each — joint profit of 120 versus 70. Each firm\'s private incentive to undercut blocks the better shared outcome.',
          ],
          result: 'Nash equilibrium: (discount, discount). The gap between 70 and 120 is exactly why oligopolists are tempted to collude — and why each is tempted to cheat on any agreement.',
        },
        {
          t: 'check',
          q: 'Two firms each choose Open or Closed. Payoffs (Firm X, Firm Y): both Open (300, 500); X Open / Y Closed (450, 400); X Closed / Y Open (250, 600); both Closed (350, 350). The Nash equilibrium is most likely:',
          choices: ['X Open, Y Open', 'X Closed, Y Open', 'X Open, Y Closed'],
          answer: 0,
          explain: 'Y prefers Open whatever X does (500 > 400 when X is Open; 600 > 350 when X is Closed). Given Y plays Open, X compares 300 (Open) with 250 (Closed) and picks Open. Neither wants to deviate from (Open, Open).',
        },
        { t: 'p', x: 'An open, formal collusive agreement is a **cartel**. Collusion is illegal in most countries but tempting. It is more likely to succeed when:' },
        {
          t: 'table',
          head: ['Factor', 'Collusion more likely when…'],
          rows: [
            ['Number and size of sellers', 'Few firms, or one dominant firm (similar-sized rivals compete harder)'],
            ['Products', 'Homogeneous rather than differentiated'],
            ['Cost structures', 'Similar across firms'],
            ['Orders', 'Small, frequent and regular — so cheating wins little'],
            ['Retaliation', 'Threat of punishment is strong'],
            ['Outside competition', 'Weak — high cartel prices can draw in higher-cost outside producers'],
          ],
        },

        { t: 'h', x: '4. Stackelberg and the dominant firm' },
        {
          t: 'ul',
          x: [
            '**Stackelberg (leader–follower).** Unlike Cournot\'s simultaneous choices, decisions are sequential: a leader picks its output first and the follower responds. The leader has a **first-mover advantage** — it can produce aggressively and force the follower to cut back — earning more than under Cournot while the follower earns less.',
            '**Dominant firm.** One firm, often with 40% or more of the market thanks to lower costs, more capacity or brand loyalty, acts as price leader. It sets output where its own MR = MC and charges the price its share of demand supports; smaller firms follow that price and supply the rest. Followers rarely undercut, because a price war with a lower-cost leader could destroy them.',
          ],
        },
        { t: 'p', x: 'There is no single oligopoly pricing solution — the outcome depends on which model describes rivals\' behaviour. In the long run, economic profit is possible but tends to erode: high profits attract entrants whose costs fall over time, and dominant firms usually lose share. Price wars rarely pay, because any market share they win is temporary while the lost revenue is real.' },
        {
          t: 'callout', label: 'When an oligopoly does not behave like one',
          x: 'If a product is easy to copy, has few scale economies and no brand or patent protection, the **credible threat of entry** keeps a three-firm industry pricing almost as if it were perfectly competitive. At the other extreme, a cartel that coordinates perfectly behaves like a single monopolist.',
        },
        {
          t: 'check',
          q: 'Collusion among oligopolists is *less* likely to succeed when:',
          choices: ['the firms have similar market shares', 'the product is homogeneous', 'the firms have similar cost structures'],
          answer: 0,
          explain: 'When firms are of similar size, each has a strong incentive to compete for share, overwhelming the gains from cooperating. Homogeneous products and similar costs both make collusion easier.',
        },
        {
          t: 'takeaways',
          x: [
            'Kinked demand: rivals match cuts, ignore rises → sticky prices, but no explanation of the initial price.',
            'Cournot: simultaneous quantity choices; the outcome lies between monopoly and competition and approaches competition as firms are added.',
            'Nash equilibrium: no firm gains by deviating alone; it is often worse for the firms than collusion, which is why cartels form and why members cheat.',
            'Stackelberg leaders gain a first-mover advantage; dominant low-cost firms act as price leaders.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-firm-concentration',
      title: 'Identifying market structure: concentration measures',
      minutes: 9,
      intro: 'Regulators and analysts need to know how much market power firms really have — and the easy measures have blind spots.',
      blocks: [
        { t: 'p', x: 'Market power matters to competition authorities, who can block mergers or fine cartels, and to analysts, who must judge whether a proposed merger will be allowed and whether a firm\'s margins are sustainable.' },
        { t: 'h', x: 'The theoretical ideal: estimate elasticity' },
        { t: 'p', x: 'The purest test is to estimate the elasticity of demand a firm faces: very elastic demand suggests near-perfect competition; inelastic demand suggests market power. In practice this is hard. Observed prices and quantities are *equilibrium* outcomes of supply and demand together (the **endogeneity** problem), so separating the two needs a system of equations and a lot of data.' },
        {
          t: 'ul',
          x: [
            '**Time-series regression** uses many years of market data — but the market\'s structure may have changed over that period, and a merger can make past elasticities irrelevant.',
            '**Cross-sectional regression** uses many firms or transactions at one point in time — but demands heavy data collection, and results can swing with how variables such as income are specified.',
          ],
        },
        { t: 'h', x: 'The simpler measures' },
        {
          t: 'formula', name: 'Concentration ratio and HHI',
          x: 'N-firm concentration ratio = sum of market shares of the largest N firms\n\nHerfindahl–Hirschman Index (HHI) = sum of squared market shares of the largest N firms\n\nWith M equal-sized firms, HHI = 1 / M\n(×10,000 if shares are written as whole percentages)',
        },
        {
          t: 'steps',
          title: 'Worked example — what a merger does to each measure',
          given: 'Five firms have market shares of 30%, 25%, 20%, 15% and 10%. The two largest firms propose to merge.',
          ask: 'Compare the three-firm concentration ratio and three-firm HHI before and after.',
          x: [
            'Before — CR3 = 30 + 25 + 20 = **75%**.',
            'Before — HHI(3) = 0.30² + 0.25² + 0.20² = 0.090 + 0.0625 + 0.040 = **0.1925**.',
            'After the merger the shares are 55%, 20%, 15%, 10%. CR3 = 55 + 20 + 15 = **90%**.',
            'After — HHI(3) = 0.55² + 0.20² + 0.15² = 0.3025 + 0.040 + 0.0225 = **0.365**.',
          ],
          result: 'The concentration ratio rises by 15 points (a fifth); the HHI almost doubles. Squaring shares makes the HHI far more sensitive to a big firm getting bigger.',
        },
        {
          t: 'callout', label: 'Reading an HHI quickly',
          x: 'Because M equal firms give HHI = 1/M, you can translate any HHI into an "equivalent number of equal-sized firms". An HHI of 0.20 behaves like a market split evenly among five firms; 0.50 like two firms; 1.0 is a monopoly.',
        },
        {
          t: 'table',
          head: ['', 'Concentration ratio', 'HHI'],
          rows: [
            ['Ease of calculation', 'Very simple', 'Slightly more work'],
            ['Sensitive to mergers among the top firms?', '**Barely** — shares just move within the top N', '**Yes** — squaring amplifies large shares'],
            ['Accounts for barriers to entry?', 'No', 'No'],
            ['Accounts for demand elasticity?', 'No', 'No'],
          ],
        },
        {
          t: 'callout', label: 'The shared blind spot', kind: 'warn',
          x: 'Neither measure captures **potential entry**. A country\'s only sugar wholesaler looks like a monopoly on paper, but if large food distributors could easily start importing sugar, the incumbent must price as if the market were competitive. Concentration is not the same as market power.',
        },
        {
          t: 'check',
          q: 'An industry has ten firms, each with 10% of the market. The four-firm concentration ratio and four-firm HHI are closest to:',
          choices: ['40% and 0.40', '40% and 0.04', '4% and 0.04'],
          answer: 1,
          explain: 'CR4 = 10 + 10 + 10 + 10 = 40%. HHI(4) = 4 × 0.10² = 4 × 0.01 = 0.04.',
        },
        {
          t: 'check',
          q: 'A key weakness shared by the concentration ratio and the HHI is that neither:',
          choices: ['can be calculated from market share data', 'reflects low barriers to entry', 'changes when the number of firms changes'],
          answer: 1,
          explain: 'Both are pure snapshots of current shares. They ignore how easily new firms could enter, which can discipline pricing regardless of concentration.',
        },
        {
          t: 'takeaways',
          x: [
            'Estimating demand elasticity is the theoretical ideal but runs into endogeneity and data problems.',
            'The concentration ratio is simple but hardly moves when top firms merge; the HHI squares shares and responds strongly.',
            'Neither measure accounts for entry barriers or elasticity, so neither is a direct measure of market power.',
          ],
        },
      ],
    },
  ],

  formulas: [
    { id: 'f-e-1', name: 'Profit maximisation', expr: 'MR = MC', note: 'Universal, with MC rising. Under perfect competition P = MR, so the rule becomes P = MC.' },
    { id: 'f-e-2', name: 'Herfindahl–Hirschman Index', expr: 'HHI = Σ (market share of firm i)²', note: 'Squaring weights large firms heavily; more informative than a concentration ratio.' },
    { id: 'f-e-3', name: 'Shutdown and breakeven', expr: 'Shutdown: P < min AVC   |   Breakeven: P = min ATC', note: 'Between the two, operate at a loss in the short run and exit in the long run.' },
    { id: 'f-e-4', name: 'Price elasticity of demand', expr: 'E = %ΔQ / %ΔP', note: '|E| > 1 elastic: a price cut raises total revenue. |E| < 1 inelastic: a price rise raises total revenue.' },
    { id: 'f-e-5', name: 'Economic profit', expr: 'Economic profit = Accounting profit − Implicit opportunity costs', note: 'Zero economic profit is "normal profit": every input earns its opportunity cost.' },
    { id: 'f-e-6', name: 'HHI with equal-sized firms', expr: 'HHI = 1 / M', note: 'Use it to translate any HHI into an equivalent number of equal-sized firms.' },
    { id: 'f-e-7', name: 'N-firm concentration ratio', expr: 'CRₙ = Σ market shares of the largest N firms', note: 'Simple, but barely moves when two top firms merge.' },
  ],

  cards: [
    { id: 'c-e-1', front: 'Profit-maximising rule in every market structure', back: 'Produce where MR = MC (with MC rising). Only under perfect competition does this coincide with P = MC.' },
    { id: 'c-e-2', front: 'Long-run economic profit under monopolistic competition', back: 'Zero — entry competes it away. But output remains below minimum ATC, leaving excess capacity.' },
    { id: 'c-e-3', front: 'Main limitation of concentration ratios and HHI', back: 'Neither accounts for barriers to entry, so both can misjudge how competitively a market behaves.' },
    { id: 'c-e-4', front: 'Short-run shutdown point', back: 'Price below minimum **average variable cost**. Above AVC but below ATC, the firm keeps operating at a loss in the short run.' },
    { id: 'c-e-5', front: 'Why are oligopoly prices sticky under the kinked demand model?', back: 'Rivals match price cuts but not price rises, creating a gap in the MR curve — MC can move within the gap without changing the optimal price.' },
    { id: 'c-e-6', front: 'Three conditions for price discrimination', back: 'Market power, groups with different demand elasticities that can be identified, and the ability to prevent resale between groups.' },
    { id: 'c-e-7', front: 'Economic profit vs accounting profit', back: 'Economic profit also subtracts implicit opportunity costs, such as the owner\'s forgone salary and the return capital could earn elsewhere.' },
    { id: 'c-e-8', front: 'Minimum efficient scale', back: 'The lowest point on the long-run average cost curve. Perfect competition pushes surviving firms to produce there.' },
    { id: 'c-e-9', front: 'Cournot vs Stackelberg', back: 'Cournot: firms choose quantities simultaneously. Stackelberg: a leader moves first and gains a first-mover advantage.' },
    { id: 'c-e-10', front: 'Nash equilibrium', back: 'No player can improve its payoff by changing its own strategy alone, given the others\' strategies.' },
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
    {
      id: 'q-ec-101', difficulty: 'medium',
      vignette: 'An entrepreneur\'s business reports accounting profit of $95,000. She left a job paying $80,000 to run it and has invested $150,000 of her own money, which could earn 10% in an alternative of similar risk.',
      stem: 'The business\'s economic profit is closest to:',
      choices: ['$0', '$15,000', '−$135,000'],
      answer: 0,
      explain: 'Economic profit = 95,000 − 80,000 (forgone salary) − 15,000 (10% × 150,000 forgone return) = $0. The business earns exactly normal profit.',
      why: [
        'B subtracts the forgone salary but ignores the opportunity cost of the owner\'s capital.',
        'C subtracts the entire $150,000 of invested capital instead of the return it could have earned.',
      ],
    },
    {
      id: 'q-ec-102', difficulty: 'hard',
      vignette: 'Market demand is P = 300 − Q and every firm has constant marginal cost of 60.',
      stem: 'In a two-firm Cournot equilibrium, the market price is closest to:',
      choices: ['180', '140', '60'],
      answer: 1,
      explain: 'Each firm sets MR = 300 − 2qᵢ − qⱼ = 60. By symmetry 3q = 240, so q = 80 each and Q = 160. Price = 300 − 160 = 140.',
      why: [
        'A (180) is the monopoly price: MR = 300 − 2Q = 60 gives Q = 120 and P = 180.',
        'C (60) is the perfectly competitive price, where P = MC.',
      ],
    },
    {
      id: 'q-ec-103', difficulty: 'medium',
      stem: 'Two of the three largest firms in an industry merge. Compared with the three-firm concentration ratio, the three-firm HHI most likely:',
      choices: ['rises proportionally more', 'rises proportionally less', 'does not change'],
      answer: 0,
      explain: 'Squaring market shares makes the HHI very sensitive to one firm becoming larger. The concentration ratio changes only because a smaller firm enters the top three.',
      why: [
        'B reverses the relationship — the concentration ratio is the measure criticised for barely responding to mergers.',
        'C is wrong because combining two large shares into one squared term increases the index.',
      ],
    },
  ],
};
