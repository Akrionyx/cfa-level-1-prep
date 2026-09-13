// Derivatives — starter depth. Original wording throughout.

export default {
  id: 'derivatives',
  name: 'Derivatives',
  short: 'Derivatives',
  weight: '5–8%',
  weightMid: 6.5,
  depth: 'starter',
  summary:
    'Forwards, futures, swaps and options — what each payoff looks like and how arbitrage pins down prices. Conceptually demanding but narrow, so it rewards focused study.',
  modules: [
    {
      id: 'der-basics',
      name: 'Derivative Instruments and Markets',
      los: [
        'Define a derivative and distinguish forward commitments from contingent claims',
        'Compare exchange-traded and over-the-counter derivatives',
        'Describe the benefits and risks of derivative markets',
        'Explain arbitrage and the role of replication in pricing',
      ],
      lessons: [
        {
          id: 'der-basics-l1',
          title: 'Two families, one pricing principle',
          minutes: 7,
          blocks: [
            {
              t: 'table',
              head: ['Type', 'Obligation', 'Examples'],
              rows: [
                ['Forward commitment', 'Both parties are obliged to transact', 'Forwards, futures, swaps'],
                ['Contingent claim', 'One party has a right, not an obligation', 'Options, credit derivatives'],
              ],
            },
            { t: 'p', x: 'A forward commitment is **symmetric**: both sides face gains and losses. A contingent claim is **asymmetric**: the buyer pays a premium up front for a payoff that is never negative.' },
            {
              t: 'table',
              head: ['', 'Exchange-traded', 'Over-the-counter'],
              rows: [
                ['Terms', 'Standardised', 'Customised'],
                ['Counterparty risk', 'Mitigated by the clearinghouse', 'Bilateral, though central clearing now covers much of it'],
                ['Liquidity', 'Generally high', 'Varies'],
                ['Settlement', 'Daily mark-to-market (futures)', 'Typically at expiry (forwards)'],
              ],
            },
            {
              t: 'callout', label: 'The principle behind every derivative price',
              x: 'If two portfolios produce identical future cash flows, they must cost the same today — otherwise a riskless profit exists. Derivative pricing is the systematic application of that single sentence.',
            },
            { t: 'p', x: 'Note what this means: derivative pricing does **not** require forecasting the underlying. It requires finding the replicating portfolio. That is why risk-neutral valuation works despite nobody being risk-neutral.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-de-1', name: 'Forward price (no income)', expr: 'F₀(T) = S₀ × (1 + r)^T', note: 'Cost of carry: buy spot, finance to T.' },
        { id: 'f-de-2', name: 'Forward with carry costs/benefits', expr: 'F₀(T) = (S₀ − PV of benefits + PV of costs) × (1+r)^T', note: 'Dividends and coupons reduce the forward price.' },
      ],
      cards: [
        { id: 'c-de-1', front: 'Forward commitment vs contingent claim', back: 'Forward commitment = both parties obliged (forwards, futures, swaps). Contingent claim = one party holds a right (options).' },
        { id: 'c-de-2', front: 'Key difference between futures and forwards', back: 'Futures are exchange-traded, standardised and marked to market daily through a clearinghouse; forwards are customised OTC contracts settled at expiry.' },
        { id: 'c-de-3', front: 'Core pricing principle for derivatives', back: 'No-arbitrage replication: portfolios with identical future payoffs must have identical prices today.' },
      ],
      questions: [
        {
          id: 'q-de-001', difficulty: 'easy',
          stem: 'Which instrument is best classified as a contingent claim?',
          choices: ['An interest rate swap', 'A call option on a share', 'A currency forward contract'],
          answer: 1,
          explain: 'An option gives its holder a right without an obligation, so the payoff is contingent on the holder choosing to exercise. Swaps and forwards obligate both parties.',
          why: [
            'A and C are both forward commitments — each party must perform at settlement regardless of how the market has moved.',
          ],
        },
        {
          id: 'q-de-002', difficulty: 'medium',
          stem: 'An asset trades at $100. The risk-free rate is 5% annually. The no-arbitrage one-year forward price, assuming no income or carrying costs, is closest to:',
          choices: ['$95.24', '$100.00', '$105.00'],
          answer: 2,
          explain: 'F₀(T) = S₀(1 + r)^T = 100 × 1.05 = $105.00. Anything else permits a riskless profit by trading spot against forward.',
          why: [
            'A discounts rather than compounds, reversing the direction of carry.',
            'B ignores the financing cost of holding the asset for a year.',
          ],
        },
      ],
    },

    {
      id: 'der-payoffs',
      name: 'Option Payoffs, Moneyness and Put–Call Parity',
      los: [
        'Calculate the payoff and profit of long and short positions in calls and puts',
        'Explain moneyness and the determinants of option value',
        'Explain put–call parity for European options',
        'Describe how option value varies with the underlying, volatility, time and rates',
      ],
      lessons: [
        {
          id: 'der-payoffs-l1',
          title: 'Payoffs, value drivers and parity',
          minutes: 8,
          blocks: [
            {
              t: 'formula', name: 'Option payoffs at expiry',
              x: 'Long call:  max(0, Sᴛ − X)        Profit = payoff − premium\nLong put:   max(0, X − Sᴛ)        Profit = payoff − premium\n\nShort positions are the mirror image: payoff is the negative of the long,\nand the maximum gain is the premium received.',
            },
            {
              t: 'table',
              head: ['Moneyness', 'Call', 'Put'],
              rows: [
                ['In the money', 'S > X', 'S < X'],
                ['At the money', 'S = X', 'S = X'],
                ['Out of the money', 'S < X', 'S > X'],
              ],
            },
            { t: 'h', x: 'What drives option value' },
            {
              t: 'table',
              head: ['Increase in…', 'Call value', 'Put value'],
              rows: [
                ['Underlying price', 'Up', 'Down'],
                ['Exercise price', 'Down', 'Up'],
                ['Volatility', 'Up', 'Up'],
                ['Time to expiry', 'Up (generally)', 'Up (generally)'],
                ['Risk-free rate', 'Up', 'Down'],
              ],
            },
            {
              t: 'callout', label: 'Volatility raises *both*',
              x: 'This surprises people. Because an option\'s downside is capped at the premium, greater dispersion in the underlying adds to the upside without adding equally to the downside. More uncertainty is worth more to both calls and puts.',
            },
            {
              t: 'formula', name: 'Put–call parity (European options)',
              x: 'c + X/(1+r)^T = p + S₀\n\nFiduciary call        =   Protective put\n(call + risk-free bond)   (put + underlying)',
            },
            { t: 'p', x: 'Both sides deliver max(Sᴛ, X) at expiry, so both must cost the same today. Rearranged, parity lets you synthesise any one instrument from the other three — and any deviation is an arbitrage.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-de-10', name: 'Call payoff', expr: 'max(0, Sᴛ − X)', note: 'Profit subtracts the premium paid.' },
        { id: 'f-de-11', name: 'Put payoff', expr: 'max(0, X − Sᴛ)', note: 'Maximum value is X, when the underlying goes to zero.' },
        { id: 'f-de-12', name: 'Put–call parity', expr: 'c + X/(1+r)^T = p + S₀', note: 'European options on the same underlying, strike and expiry.' },
      ],
      cards: [
        { id: 'c-de-10', front: 'Effect of higher volatility on option values', back: 'Raises both call and put values — downside is capped at the premium, so extra dispersion is asymmetrically valuable.' },
        { id: 'c-de-11', front: 'Put–call parity', back: 'c + X/(1+r)^T = p + S₀. Fiduciary call = protective put.' },
        { id: 'c-de-12', front: 'Effect of a higher risk-free rate', back: 'Increases call values, decreases put values (the present value of the exercise price falls).' },
        { id: 'c-de-13', front: 'Maximum loss for a long option position', back: 'The premium paid — no more, whichever direction the underlying moves.' },
      ],
      questions: [
        {
          id: 'q-de-010', difficulty: 'easy',
          stem: 'An investor buys a call option with an exercise price of $60 for a premium of $4. At expiry the underlying trades at $71. The investor\'s profit is closest to:',
          choices: ['$11', '$7', '$4'],
          answer: 1,
          explain: 'Payoff = max(0, 71 − 60) = $11. Profit = payoff − premium = 11 − 4 = $7.',
          why: [
            'A ($11) is the payoff before deducting the premium paid.',
            'C ($4) is the premium itself, which would be the loss if the option expired worthless.',
          ],
        },
        {
          id: 'q-de-011', difficulty: 'medium',
          stem: 'An increase in the volatility of the underlying asset will most likely:',
          choices: ['increase call values and decrease put values', 'increase both call and put values', 'decrease both call and put values'],
          answer: 1,
          explain: 'Higher volatility widens the distribution of possible outcomes. Because an option holder\'s loss is limited to the premium, the increased chance of a large favourable move adds value while the unfavourable side is truncated — which benefits calls and puts alike.',
          why: [
            'A confuses volatility with a change in the underlying price, which does move calls and puts in opposite directions.',
            'C is the reverse of the actual relationship.',
          ],
        },
        {
          id: 'q-de-012', difficulty: 'hard',
          stem: 'A stock trades at $50. A one-year European call with a $50 strike sells for $6. The one-year risk-free rate is 4%. By put–call parity, the one-year European put with the same strike is closest to:',
          choices: ['$4.08', '$6.00', '$8.08'],
          answer: 0,
          explain: 'Parity: p = c + X/(1+r)^T − S₀ = 6 + 50/1.04 − 50 = 6 + 48.08 − 50 = $4.08.',
          why: [
            'B assumes call and put must be equal, which holds only when the strike equals the *forward* price, not the spot price.',
            'C adds the present value discount instead of subtracting the spot price correctly.',
          ],
        },
      ],
    },

    {
      id: 'der-hedging',
      name: 'Futures, Swaps and Uses of Derivatives',
      los: [
        'Explain how futures contracts differ from forwards in mark-to-market and credit risk',
        'Describe the mechanics of an interest rate swap',
        'Describe how derivatives are used for hedging and risk transfer',
        'Explain the costs and criticisms associated with derivative markets',
      ],
      lessons: [
        {
          id: 'der-hedging-l1',
          title: 'Marking to market, and swaps as a series of forwards',
          minutes: 7,
          blocks: [
            { t: 'p', x: 'A futures contract is economically a forward with daily settlement. Gains and losses are credited or debited each day through a margin account, which means counterparty exposure never accumulates — the central reason exchanges can guarantee performance.' },
            {
              t: 'ul',
              x: [
                '**Initial margin** — posted to open the position.',
                '**Maintenance margin** — the floor. Falling below it triggers a call to restore the account to the *initial* level, not merely to the maintenance level.',
                'Because gains are received daily rather than at expiry, futures and forward prices differ slightly when interest rates are correlated with the underlying.',
              ],
            },
            { t: 'h', x: 'Interest rate swaps' },
            { t: 'p', x: 'A plain vanilla interest rate swap exchanges a fixed rate for a floating rate on a **notional** principal that is never itself exchanged. Only the net difference changes hands on each settlement date.' },
            {
              t: 'callout', label: 'The mental model',
              x: 'A swap is a series of forward contracts bundled together and priced so the whole package has zero value at inception. The fixed rate is chosen precisely to make the two legs equal in present value on day one.',
            },
            { t: 'p', x: 'Uses: converting floating-rate debt to fixed without refinancing, adjusting duration, gaining or hedging currency exposure. The criticism — that derivatives are "too risky" — usually conflates the instrument with its leverage. The same contract can reduce risk or magnify it depending entirely on the position it is placed against.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-de-20', name: 'Swap net payment', expr: '(Fixed rate − Floating rate) × Notional × Period fraction', note: 'Only the net amount is exchanged; notional is never paid.' },
      ],
      cards: [
        { id: 'c-de-20', front: 'What happens when a futures account falls below maintenance margin?', back: 'A margin call requires restoring the balance to the **initial** margin level, not just back to maintenance.' },
        { id: 'c-de-21', front: 'A plain vanilla interest rate swap is equivalent to', back: 'A series of forward contracts, priced so the swap has zero value at inception.' },
        { id: 'c-de-22', front: 'Is swap notional principal exchanged?', back: 'No — in an interest rate swap only the net interest difference changes hands.' },
      ],
      questions: [
        {
          id: 'q-de-020', difficulty: 'easy',
          stem: 'The principal difference between a futures contract and a forward contract is that futures:',
          choices: [
            'are marked to market daily through a clearinghouse',
            'can only be used for hedging, not speculation',
            'have no counterparty risk of any kind',
          ],
          answer: 0,
          explain: 'Daily settlement of gains and losses through the clearinghouse prevents exposure from accumulating, which is what allows standardised exchange trading.',
          why: [
            'B is false — futures are widely used for speculation as well as hedging.',
            'C overstates the case. The clearinghouse substantially mitigates counterparty risk but does not eliminate all risk, including the clearinghouse\'s own.',
          ],
        },
        {
          id: 'q-de-021', difficulty: 'medium',
          stem: 'A company with floating-rate debt wishes to fix its interest cost without refinancing. It should most likely:',
          choices: [
            'enter a swap to pay fixed and receive floating',
            'enter a swap to pay floating and receive fixed',
            'purchase a floating-rate note of the same maturity',
          ],
          answer: 0,
          explain: 'The floating payments received under the swap offset the floating payments owed on the debt, leaving the company with a net fixed obligation.',
          why: [
            'B would double the floating exposure rather than hedge it.',
            'C adds a floating-rate asset that hedges the exposure only if funded, and does not convert the existing liability\'s rate character.',
          ],
        },
        {
          id: 'q-de-022', difficulty: 'hard',
          stem: 'At inception, the value of a plain vanilla interest rate swap to each counterparty is most likely:',
          choices: ['positive to the fixed-rate payer', 'zero', 'equal to the notional principal'],
          answer: 1,
          explain: 'The fixed rate is set so that the present values of the fixed and floating legs are equal at inception, giving the swap zero value to both parties. Value then becomes positive to one side as rates move.',
          why: [
            'A would mean one party receives value for free, which no counterparty would agree to.',
            'C confuses the notional — a reference amount used only to scale payments — with the swap\'s economic value.',
          ],
        },
      ],
    },
  ],
};
