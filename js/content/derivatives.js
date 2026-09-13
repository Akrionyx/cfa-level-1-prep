// Derivatives — deep content. Original wording throughout.

export default {
  id: 'derivatives',
  name: 'Derivatives',
  short: 'Derivatives',
  weight: '5–8%',
  weightMid: 6.5,
  depth: 'deep',
  summary:
    'Forwards, futures, swaps and options — what each payoff looks like, how issuers and investors use them, and how arbitrage and replication pin down their prices. Conceptually demanding but narrow, so focused study pays off.',
  modules: [
    /* ---------------------------------------------------------- */
    {
      id: 'der-basics',
      name: 'Derivative Instrument and Market Features',
      los: [
        'Define a derivative and describe the basic features of a derivative contract',
        'Describe the types of underlyings on which derivatives are written',
        'Compare exchange-traded and over-the-counter derivative markets',
        'Describe the role of central clearing',
      ],
      lessons: [
        {
          id: 'der-basics-l1',
          title: 'Two families, two markets',
          minutes: 8,
          blocks: [
            { t: 'p', x: 'A derivative is a contract whose value is derived from an **underlying** — a share, index, bond, interest rate, currency, commodity, or credit event. It specifies the underlying, the size, the price or rate, the settlement date, and whether settlement is by physical delivery or cash.' },
            {
              t: 'table',
              head: ['Type', 'Obligation', 'Examples'],
              rows: [
                ['Forward commitment', 'Both parties are obliged to transact', 'Forwards, futures, swaps'],
                ['Contingent claim', 'One party has a right, not an obligation', 'Options, credit default swaps'],
              ],
            },
            { t: 'p', x: 'A forward commitment is **symmetric**: gains to one side are losses to the other, in either direction. A contingent claim is **asymmetric**: the buyer pays a premium for a payoff that is never negative.' },
            {
              t: 'table',
              head: ['', 'Exchange-traded (ETD)', 'Over-the-counter (OTC)'],
              rows: [
                ['Terms', 'Standardised', 'Customised'],
                ['Counterparty risk', 'Borne by the clearinghouse', 'Bilateral, though much is now centrally cleared'],
                ['Transparency', 'High — prices and volumes public', 'Lower'],
                ['Liquidity', 'Generally high', 'Varies'],
                ['Settlement', 'Daily mark-to-market (futures)', 'Typically at maturity (forwards)'],
              ],
            },
            {
              t: 'callout', label: 'Central clearing',
              x: 'A **central counterparty (CCP)** becomes the buyer to every seller and the seller to every buyer, collecting margin from both. It concentrates and manages counterparty risk rather than eliminating it. Post-2008 regulation requires many standardised OTC derivatives to be centrally cleared.',
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-de-1', front: 'Forward commitment vs contingent claim', back: 'Forward commitment = both parties obliged (forwards, futures, swaps). Contingent claim = one party holds a right (options, CDS).' },
        { id: 'c-de-2', front: 'Key difference between futures and forwards', back: 'Futures are exchange-traded, standardised and marked to market daily through a clearinghouse; forwards are customised OTC contracts settled at maturity.' },
        { id: 'c-de-4', front: 'Role of a central counterparty', back: 'Becomes the counterparty to both sides of a trade, collects margin, and manages default risk.' },
        { id: 'c-de-5', front: 'Main advantages of OTC derivatives', back: 'Customisation of size, dates and underlying. The costs: less transparency, less liquidity, and potentially more counterparty risk.' },
      ],
      questions: [
        {
          id: 'q-de-001', difficulty: 'easy',
          stem: 'Which instrument is best classified as a contingent claim?',
          choices: ['An interest rate swap', 'A call option on a share', 'A currency forward contract'],
          answer: 1,
          explain: 'An option gives its holder a right without an obligation. Swaps and forwards obligate both parties.',
          why: [
            'A and C are both forward commitments.',
          ],
        },
        {
          id: 'q-de-003', difficulty: 'medium',
          stem: 'Compared with over-the-counter derivatives, exchange-traded derivatives most likely offer:',
          choices: ['greater customisation of terms', 'greater transparency and standardisation', 'higher bilateral counterparty risk'],
          answer: 1,
          explain: 'Exchange-traded contracts are standardised, publicly priced and cleared through a clearinghouse, which increases transparency and liquidity.',
          why: [
            'A is the main advantage of OTC contracts.',
            'C is reversed; clearinghouses substantially reduce bilateral counterparty exposure.',
          ],
        },
        {
          id: 'q-de-004', difficulty: 'hard',
          stem: 'The introduction of a central counterparty into an OTC derivatives market most likely:',
          choices: [
            'eliminates counterparty credit risk entirely',
            'replaces many bilateral exposures with exposure to the CCP, which manages risk through margin',
            'increases each participant\'s exposure to other market participants',
          ],
          answer: 1,
          explain: 'The CCP stands between buyers and sellers, so participants face the CCP rather than each other. Risk is concentrated in, and managed by, the CCP through margin and default funds — not eliminated.',
          why: [
            'A overstates the case; the CCP itself could fail.',
            'C reverses the effect of netting exposures through one counterparty.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'der-instruments',
      name: 'Forward Commitments and Contingent Claims',
      los: [
        'Define forward contracts, futures contracts, swaps, options and credit derivatives',
        'Determine the payoff and profit of forward commitments and options at expiration',
        'Describe futures margining: initial, maintenance and variation margin',
        'Describe credit default swaps',
      ],
      lessons: [
        {
          id: 'der-instruments-l1',
          title: 'Forwards, futures, swaps and credit derivatives',
          minutes: 9,
          blocks: [
            {
              t: 'formula', name: 'Forward payoff at expiration',
              x: 'Long forward:  S_T − F₀(T)\nShort forward: F₀(T) − S_T',
            },
            { t: 'p', x: 'A **forward** is a private agreement to buy or sell an underlying at a fixed price on a future date. No money changes hands at inception, and each party is exposed to the other\'s default.' },
            { t: 'h', x: 'Futures and margin' },
            { t: 'p', x: 'A **futures contract** is a standardised, exchange-traded forward with daily settlement. Gains and losses are credited or debited to margin accounts every day, so exposure never accumulates.' },
            {
              t: 'ul',
              x: [
                '**Initial margin** — posted to open the position.',
                '**Maintenance margin** — the minimum balance. If the account falls below it, a margin call requires **variation margin** to restore the balance to the **initial** margin level.',
                '**Price limits** — some exchanges halt trading when prices move beyond a daily limit.',
              ],
            },
            {
              t: 'example', title: 'Margin call',
              x: 'Initial margin $5,000; maintenance margin $3,500. After losses the account balance is $3,200.\n\nVariation margin = $5,000 − $3,200 = $1,800\n(to the initial level, not merely to $3,500)',
            },
            { t: 'h', x: 'Swaps' },
            { t: 'p', x: 'A **swap** exchanges a series of cash flows. In a plain vanilla interest rate swap one party pays fixed and receives floating on a **notional** principal that is never exchanged; only the net difference is paid on each settlement date. A swap is equivalent to a series of forward contracts.' },
            { t: 'h', x: 'Credit default swaps' },
            { t: 'p', x: 'In a **CDS**, the **protection buyer** pays a periodic premium to the **protection seller**. If a specified **credit event** occurs — bankruptcy, failure to pay, or, in some contracts, restructuring — the seller compensates the buyer for the loss on the reference obligation. Buying protection is economically like shorting the issuer\'s credit; selling protection is like being long the bond.' },
          ],
        },
        {
          id: 'der-instruments-l2',
          title: 'Option payoffs and moneyness',
          minutes: 8,
          blocks: [
            {
              t: 'formula', name: 'Option payoffs at expiry',
              x: 'Long call:  max(0, S_T − X)        Profit = payoff − premium\nLong put:   max(0, X − S_T)        Profit = payoff − premium\n\nShort positions are the mirror image; the maximum gain is the premium received.',
            },
            {
              t: 'table',
              head: ['Position', 'Maximum gain', 'Maximum loss', 'Breakeven'],
              rows: [
                ['Long call', 'Unlimited', 'Premium', 'X + premium'],
                ['Short call', 'Premium', 'Unlimited', 'X + premium'],
                ['Long put', 'X − premium', 'Premium', 'X − premium'],
                ['Short put', 'Premium', 'X − premium', 'X − premium'],
              ],
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
            { t: 'p', x: '**European** options can be exercised only at expiration; **American** options at any time before. An American option is always worth at least as much as an otherwise identical European option.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-de-10', name: 'Call payoff', expr: 'max(0, S_T − X)', note: 'Profit subtracts the premium paid.' },
        { id: 'f-de-11', name: 'Put payoff', expr: 'max(0, X − S_T)', note: 'Maximum value is X, when the underlying goes to zero.' },
        { id: 'f-de-13', name: 'Long forward payoff', expr: 'S_T − F₀(T)', note: 'Symmetric: unlimited gain or loss.' },
        { id: 'f-de-14', name: 'Variation margin', expr: 'Initial margin − Current margin balance', note: 'Due when the balance falls below maintenance margin.' },
      ],
      cards: [
        { id: 'c-de-20', front: 'What happens when a futures account falls below maintenance margin?', back: 'A margin call requires restoring the balance to the **initial** margin level.' },
        { id: 'c-de-22', front: 'Is swap notional principal exchanged?', back: 'No — in an interest rate swap only the net interest difference changes hands.' },
        { id: 'c-de-13', front: 'Maximum loss for a long option position', back: 'The premium paid.' },
        { id: 'c-de-14', front: 'Credit default swap — who pays whom?', back: 'Protection buyer pays periodic premiums; the protection seller pays out if a credit event occurs.' },
        { id: 'c-de-15', front: 'Breakeven for a long call', back: 'Exercise price + premium.' },
      ],
      questions: [
        {
          id: 'q-de-010', difficulty: 'easy',
          stem: 'An investor buys a call option with an exercise price of $60 for a premium of $4. At expiry the underlying trades at $71. The investor\'s profit is closest to:',
          choices: ['$11', '$7', '$4'],
          answer: 1,
          explain: 'Payoff = 71 − 60 = $11. Profit = 11 − 4 = $7.',
          why: [
            'A is the payoff before the premium.',
            'C is the premium itself.',
          ],
        },
        {
          id: 'q-de-020', difficulty: 'medium',
          stem: 'The principal difference between a futures contract and a forward contract is that futures:',
          choices: [
            'are marked to market daily through a clearinghouse',
            'can only be used for hedging, not speculation',
            'have no counterparty risk of any kind',
          ],
          answer: 0,
          explain: 'Daily settlement through the clearinghouse prevents exposure from accumulating.',
          why: [
            'B is false.',
            'C overstates the case; the clearinghouse itself carries some risk.',
          ],
        },
        {
          id: 'q-de-030', difficulty: 'medium',
          stem: 'A portfolio manager who owns a company\'s bonds wants to hedge against the company defaulting without selling the bonds. She should most likely:',
          choices: ['sell protection in a credit default swap', 'buy protection in a credit default swap', 'buy a call option on the company\'s shares'],
          answer: 1,
          explain: 'A protection buyer pays periodic premiums and is compensated if a credit event occurs, offsetting losses on the bonds.',
          why: [
            'A would add to her credit exposure rather than hedge it.',
            'C gains if the shares rise, providing no protection against default.',
          ],
        },
        {
          id: 'q-de-031', difficulty: 'hard',
          stem: 'An investor writes (sells) a put option with an exercise price of $40 for a premium of $3. The investor\'s maximum possible loss and breakeven price are:',
          choices: ['$37 loss; breakeven at $37', 'Unlimited loss; breakeven at $43', '$3 loss; breakeven at $40'],
          answer: 0,
          explain: 'If the share falls to zero, the writer pays $40 but kept the $3 premium: maximum loss $37. The writer breaks even when the payoff owed equals the premium, at 40 − 3 = $37.',
          why: [
            'B describes a short call.',
            'C describes the maximum loss of a *long* put.',
          ],
        },
        {
          id: 'q-de-032', difficulty: 'expert',
          stem: 'A trader\'s futures account has an initial margin requirement of $5,000 and a maintenance margin of $3,500. After a series of losses the account balance falls to $3,200. The variation margin required is:',
          choices: ['$1,800', '$300', '$1,500'],
          answer: 0,
          explain: 'Once the balance is below maintenance margin, it must be restored to the initial level: 5,000 − 3,200 = $1,800.',
          why: [
            'B restores the balance only to the maintenance level.',
            'C is the difference between initial and maintenance margin, unrelated to the actual shortfall.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'der-uses',
      name: 'Derivative Benefits, Risks and Uses',
      los: [
        'Describe the benefits and risks of derivative instruments',
        'Compare the use of derivatives among issuers and investors',
        'Describe cash flow hedges, fair value hedges and net investment hedges',
      ],
      lessons: [
        {
          id: 'der-uses-l1',
          title: 'Why derivatives exist, and what can go wrong',
          minutes: 9,
          blocks: [
            {
              t: 'table',
              head: ['Benefits', 'Risks'],
              rows: [
                ['Risk allocation, transfer and management', 'High implicit leverage magnifies losses'],
                ['Information discovery — futures prices reveal expectations', 'Limited transparency in complex OTC contracts'],
                ['Operational advantages: low transaction costs, ease of shorting, capital efficiency', '**Basis risk** — the hedge and the exposure may not move together'],
                ['Market efficiency — mispricing is cheaper to exploit', 'Liquidity risk, including margin calls requiring cash'],
                ['', 'Counterparty credit risk and systemic, destabilising effects'],
              ],
            },
            { t: 'h', x: 'Issuers: hedge accounting' },
            {
              t: 'table',
              head: ['Hedge type', 'What it hedges', 'Example'],
              rows: [
                ['Cash flow hedge', 'Variability in future cash flows', 'Floating-rate debt swapped to fixed with a pay-fixed swap'],
                ['Fair value hedge', 'Changes in the fair value of an asset or liability', 'Fixed-rate debt swapped to floating with a receive-fixed swap'],
                ['Net investment hedge', 'Currency exposure of a foreign subsidiary', 'A currency forward or foreign-currency debt'],
              ],
            },
            { t: 'p', x: 'Hedge accounting lets the gain or loss on the derivative be matched with the hedged item, avoiding artificial earnings volatility. For cash flow hedges, the effective portion of derivative gains and losses goes to OCI until the hedged cash flow affects earnings.' },
            { t: 'h', x: 'Investors' },
            {
              t: 'ul',
              x: [
                '**Modify exposure** — change duration with interest rate futures, or equity exposure with index futures, without trading the underlying.',
                '**Replicate** a cash market position more cheaply.',
                '**Generate income** — for example, selling covered calls against an existing holding.',
                '**Hedge** existing positions, for instance with protective puts.',
                '**Speculate** — express a directional or volatility view with leverage.',
              ],
            },
            {
              t: 'callout', label: 'Same contract, opposite purposes',
              x: 'The criticism that derivatives are "too risky" conflates the instrument with how it is used. A pay-fixed swap reduces risk for a company with floating-rate debt, and adds risk for a speculator with no offsetting exposure.',
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-de-30', front: 'Cash flow hedge vs fair value hedge', back: 'Cash flow hedge: offsets variability in future cash flows (e.g. floating to fixed). Fair value hedge: offsets changes in the value of an asset or liability (e.g. fixed to floating).' },
        { id: 'c-de-31', front: 'Basis risk', back: 'The risk that the hedging instrument and the hedged exposure do not move together perfectly.' },
        { id: 'c-de-32', front: 'Covered call', back: 'Owning the underlying and selling a call on it — earns premium income in exchange for giving up upside above the strike.' },
        { id: 'c-de-33', front: 'Net investment hedge', back: 'A hedge of the currency risk on an investment in a foreign subsidiary.' },
      ],
      questions: [
        {
          id: 'q-de-021', difficulty: 'easy',
          stem: 'A company with floating-rate debt wishes to fix its interest cost without refinancing. It should most likely:',
          choices: [
            'enter a swap to pay fixed and receive floating',
            'enter a swap to pay floating and receive fixed',
            'purchase a floating-rate note of the same maturity',
          ],
          answer: 0,
          explain: 'The floating receipts offset the floating payments on the debt, leaving a net fixed obligation.',
          why: [
            'B would double the floating exposure.',
            'C does not convert the existing liability\'s rate character.',
          ],
        },
        {
          id: 'q-de-040', difficulty: 'medium',
          stem: 'A company issues fixed-rate bonds and enters a receive-fixed, pay-floating swap to convert them to floating-rate exposure. Under hedge accounting, this is best classified as:',
          choices: ['a cash flow hedge', 'a fair value hedge', 'a net investment hedge'],
          answer: 1,
          explain: 'The fair value of fixed-rate debt changes as interest rates move. The swap offsets those changes, making this a fair value hedge.',
          why: [
            'A applies to hedging variable cash flows, such as floating-rate debt converted to fixed.',
            'C applies to currency risk on foreign subsidiaries.',
          ],
        },
        {
          id: 'q-de-041', difficulty: 'hard',
          stem: 'An airline hedges its jet fuel purchases using crude oil futures. The risk that jet fuel prices and crude oil prices diverge is best described as:',
          choices: ['counterparty risk', 'basis risk', 'liquidity risk'],
          answer: 1,
          explain: 'Using a related but different underlying leaves the airline exposed to changes in the price relationship between the two — basis risk.',
          why: [
            'A concerns the other party failing to perform.',
            'C concerns the ability to trade or meet margin calls.',
          ],
        },
        {
          id: 'q-de-042', difficulty: 'expert',
          stem: 'An investor owns 1,000 shares and sells call options on those shares with an exercise price 10% above the current price. The strategy most likely:',
          choices: [
            'eliminates downside risk while retaining unlimited upside',
            'generates premium income but caps upside above the exercise price, while leaving most downside risk',
            'converts the position into a synthetic short position',
          ],
          answer: 1,
          explain: 'A covered call trades upside beyond the strike for premium income. The premium cushions small declines only; a large fall in the share price still produces losses.',
          why: [
            'A describes something closer to a protective put, and no strategy gives both.',
            'C overstates the effect; the investor remains long the shares below the strike.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'der-carry',
      name: 'Arbitrage, Replication and the Cost of Carry',
      los: [
        'Explain the principles of arbitrage and replication in derivative pricing',
        'Explain the difference between the spot and expected future price of an underlying and the role of risk-neutral pricing',
        'Describe how the cost of carry affects forward prices',
        'Calculate the forward price of an underlying with carry benefits and costs',
      ],
      lessons: [
        {
          id: 'der-carry-l1',
          title: 'One pricing principle',
          minutes: 9,
          blocks: [
            {
              t: 'callout', label: 'The principle behind every derivative price',
              x: 'If two portfolios produce identical future cash flows, they must cost the same today — otherwise a riskless profit exists. Derivative pricing is the systematic application of that single sentence.',
            },
            { t: 'p', x: 'A **forward price** is found by **replication**: buy the underlying today, finance it at the risk-free rate, hold it to the delivery date. That position delivers exactly what a long forward delivers, so the forward price must equal the cost of doing it.' },
            { t: 'p', x: 'This means derivative pricing does **not** require forecasting the underlying. The expected future spot price contains a risk premium; the forward price does not, because the replicating position is riskless. That is why **risk-neutral** pricing works even though investors are not risk-neutral.' },
            {
              t: 'formula', name: 'Forward price with carry',
              x: 'No carry:    F₀(T) = S₀ × (1 + r)^T\nWith carry:  F₀(T) = (S₀ − PV of carry benefits + PV of carry costs) × (1 + r)^T\n\nContinuous:  F₀(T) = S₀ × e^((r + c − i)T)',
            },
            {
              t: 'table',
              head: ['Carry item', 'Examples', 'Effect on forward price'],
              rows: [
                ['Carry benefit', 'Dividends, coupons, convenience yield on commodities', 'Lowers it'],
                ['Carry cost', 'Storage, insurance', 'Raises it'],
              ],
            },
            { t: 'h', x: 'Exploiting mispricing' },
            {
              t: 'table',
              head: ['If the market forward price is…', 'Arbitrage'],
              rows: [
                ['Too high', '**Cash-and-carry**: borrow, buy the underlying, sell the forward'],
                ['Too low', '**Reverse cash-and-carry**: short the underlying, invest the proceeds, buy the forward'],
              ],
            },
            { t: 'p', x: 'In practice arbitrage is limited by transaction costs, borrowing constraints, difficulty shorting some underlyings, and the lack of an easily stored underlying for some commodities.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-de-1', name: 'Forward price (no income)', expr: 'F₀(T) = S₀ × (1 + r)^T', note: 'Cost of carry: buy spot, finance to T.' },
        { id: 'f-de-2', name: 'Forward with carry costs/benefits', expr: 'F₀(T) = (S₀ − PV benefits + PV costs) × (1+r)^T', note: 'Dividends and coupons reduce the forward price; storage raises it.' },
        { id: 'f-de-15', name: 'Continuous compounding forward', expr: 'F₀(T) = S₀ e^((r + c − i)T)', note: 'c = carry costs, i = carry benefits (as rates).' },
      ],
      cards: [
        { id: 'c-de-3', front: 'Core pricing principle for derivatives', back: 'No-arbitrage replication: portfolios with identical future payoffs must have identical prices today.' },
        { id: 'c-de-34', front: 'Effect of dividends on a forward price', back: 'Lowers it — the forward buyer does not receive dividends paid before delivery.' },
        { id: 'c-de-35', front: 'Cash-and-carry arbitrage', back: 'When the forward is overpriced: borrow, buy the underlying, sell the forward.' },
        { id: 'c-de-36', front: 'Why does forward pricing not require the expected spot price?', back: 'The replicating position is riskless, so its cost determines the forward price regardless of expectations or risk premiums.' },
      ],
      questions: [
        {
          id: 'q-de-002', difficulty: 'easy',
          stem: 'An asset trades at $100. The risk-free rate is 5% annually. The no-arbitrage one-year forward price, assuming no income or carrying costs, is closest to:',
          choices: ['$95.24', '$100.00', '$105.00'],
          answer: 2,
          explain: 'F₀(T) = 100 × 1.05 = $105.00.',
          why: [
            'A discounts rather than compounds.',
            'B ignores the financing cost.',
          ],
        },
        {
          id: 'q-de-050', difficulty: 'medium',
          stem: 'A share trades at $100 and will pay dividends with a present value of $3 over the next year. The one-year risk-free rate is 5%. The one-year forward price is closest to:',
          choices: ['$101.85', '$105.00', '$108.15'],
          answer: 0,
          explain: 'F₀ = (100 − 3) × 1.05 = $101.85. The forward buyer does not receive the dividends, so their value is removed.',
          why: [
            'B ignores the dividends.',
            'C adds the dividends as if they were a carrying cost.',
          ],
        },
        {
          id: 'q-de-051', difficulty: 'hard',
          stem: 'A non-dividend-paying share trades at $50, the one-year risk-free rate is 4%, and a one-year forward contract is quoted at $54. An arbitrageur should most likely:',
          choices: [
            'buy the forward, short the share and invest the proceeds',
            'borrow $50, buy the share and sell the forward',
            'do nothing, because the forward price reflects expected appreciation',
          ],
          answer: 1,
          explain: 'The no-arbitrage price is 50 × 1.04 = $52. At $54 the forward is overpriced. Cash-and-carry: borrow $50, buy the share, sell forward at $54. At expiry deliver the share for $54 and repay $52, locking in $2.',
          why: [
            'A is the strategy for an underpriced forward.',
            'C ignores that forward prices are set by carry, not by expected returns.',
          ],
        },
        {
          id: 'q-de-052', difficulty: 'expert',
          stem: 'Compared with a financial asset with no carry, a commodity with high storage costs and a low convenience yield will most likely have a forward price that is:',
          choices: [
            'further above the spot price, because net carry costs raise the forward price',
            'below the spot price, because storage costs reduce the forward price',
            'equal to the spot price, because commodities do not pay income',
          ],
          answer: 0,
          explain: 'Storage costs must be paid by whoever holds the commodity until delivery, adding to the replication cost. A low convenience yield offsets little of this, so the forward price sits well above spot — contango.',
          why: [
            'B reverses the effect of storage costs.',
            'C ignores both financing and storage costs.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'der-forwards',
      name: 'Pricing and Valuing Forwards and Futures',
      los: [
        'Explain how the value and price of a forward contract are determined at initiation, during its life and at expiration',
        'Describe forward rate agreements and their use',
        'Compare the value and price of forward and futures contracts',
        'Explain why forward and futures prices may differ',
      ],
      lessons: [
        {
          id: 'der-forwards-l1',
          title: 'Price is fixed; value moves',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'Keep **price** and **value** apart. The forward **price** is the fixed delivery price agreed at inception. The contract\'s **value** is what the position is worth at any moment — zero at inception, then changing as the underlying moves.' },
            {
              t: 'formula', name: 'Forward value (no carry)',
              x: 'At inception:        V₀ = 0\nDuring life (long):   V_t = S_t − F₀(T) / (1 + r)^(T − t)\nAt expiration (long): V_T = S_T − F₀(T)\n\nShort position value = −(long position value)',
            },
            {
              t: 'example', title: 'Valuing a forward mid-life',
              x: 'Forward price agreed: $105. Six months remain. Spot is now $108; risk-free rate 4%.\n\nV = 108 − 105 / 1.04^0.5 = 108 − 102.96 = $5.04 to the long',
            },
            { t: 'h', x: 'Forward rate agreements' },
            { t: 'p', x: 'An **FRA** is a forward contract on an interest rate. The long position effectively locks in a borrowing rate for a future period; it gains if the reference rate at settlement is **above** the FRA rate. Settlement is in cash, discounted to the start of the underlying loan period.' },
            { t: 'h', x: 'Futures vs forwards' },
            { t: 'p', x: 'Because futures are marked to market daily, their value resets to zero each day after settlement. Futures and forward prices are equal when interest rates are constant or uncorrelated with the underlying. If the underlying\'s price is **positively correlated** with interest rates, a long futures position receives gains when rates are high (reinvested profitably) and pays losses when rates are low (financed cheaply), making futures more attractive — so the **futures price exceeds the forward price**. Negative correlation reverses this.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-de-21', name: 'Forward value during life (long)', expr: 'V_t = S_t − F₀(T)/(1 + r)^(T−t)', note: 'Zero at inception.' },
        { id: 'f-de-22', name: 'Forward value at expiration (long)', expr: 'V_T = S_T − F₀(T)', note: 'Equal to the payoff.' },
      ],
      cards: [
        { id: 'c-de-40', front: 'Value of a forward contract at inception', back: 'Zero — the forward price is set so that neither party pays anything.' },
        { id: 'c-de-41', front: 'Long FRA gains when…', back: 'The reference rate at settlement is above the agreed FRA rate.' },
        { id: 'c-de-42', front: 'Futures vs forward price with positive correlation between the underlying and interest rates', back: 'The futures price exceeds the forward price.' },
      ],
      questions: [
        {
          id: 'q-de-060', difficulty: 'easy',
          stem: 'At the time a forward contract is initiated, its value to the long position is:',
          choices: ['equal to the forward price', 'zero', 'equal to the spot price'],
          answer: 1,
          explain: 'The forward price is chosen so that no payment is required at initiation, giving the contract zero value to both sides.',
          why: [
            'A confuses the contract\'s price with its value.',
            'C would imply one party receives the underlying for free.',
          ],
        },
        {
          id: 'q-de-061', difficulty: 'medium',
          stem: 'A company that plans to borrow in six months buys a forward rate agreement. The company gains on the FRA if, at settlement, the reference rate is:',
          choices: ['above the FRA rate', 'below the FRA rate', 'equal to the FRA rate'],
          answer: 0,
          explain: 'The long FRA locks in a borrowing rate. If market rates rise above it, the FRA pays out, offsetting the higher cost of borrowing.',
          why: [
            'B would produce a payment from the company.',
            'C produces no settlement payment.',
          ],
        },
        {
          id: 'q-de-062', difficulty: 'hard',
          stem: 'A long forward contract has a forward price of $105 with six months remaining. The underlying now trades at $108, and the annual risk-free rate is 4%. The value of the contract to the long position is closest to:',
          choices: ['$5.04', '$3.00', '$2.04'],
          answer: 0,
          explain: 'V = 108 − 105/1.04^0.5 = 108 − 102.96 = $5.04.',
          why: [
            'B ignores discounting of the forward price.',
            'C is only the discount on the forward price (105 − 102.96), not the value of the contract.',
          ],
        },
        {
          id: 'q-de-063', difficulty: 'expert',
          stem: 'An underlying asset\'s price is strongly positively correlated with interest rates. Compared with the forward price, the futures price on this asset will most likely be:',
          choices: ['higher', 'lower', 'identical'],
          answer: 0,
          explain: 'A long futures holder receives daily gains when rates are high and can reinvest at attractive rates, and pays losses when rates are low and borrowing is cheap. That timing advantage makes futures more valuable, raising their price above forwards.',
          why: [
            'B would apply with negative correlation.',
            'C holds only when rates are constant or uncorrelated with the underlying.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'der-swaps',
      name: 'Pricing and Valuing Swaps',
      los: [
        'Describe how swap contracts are similar to, and differ from, a series of forward contracts',
        'Explain how the swap rate is set at initiation',
        'Explain how the value of a swap changes during its life',
        'Describe the equivalence of a swap and a combination of bonds',
      ],
      lessons: [
        {
          id: 'der-swaps-l1',
          title: 'A bundle of forwards',
          minutes: 8,
          blocks: [
            { t: 'p', x: 'A swap is a series of forward contracts bundled together — but with a single fixed rate for every period. Individual forwards at those dates would each have a different forward rate, so some implied forwards in the swap have positive value and others negative; together they sum to zero at inception.' },
            {
              t: 'callout', label: 'Setting the swap rate',
              x: 'The fixed swap rate is chosen so that the present value of fixed payments equals the present value of expected floating payments. The swap has **zero value** at initiation.',
            },
            { t: 'h', x: 'Value after initiation' },
            { t: 'p', x: 'If market swap rates **rise**, the pay-fixed party is paying below the new market rate — its position gains value. If rates **fall**, the receive-fixed party gains.' },
            {
              t: 'formula', name: 'Value of a pay-fixed swap',
              x: 'Value ≈ (Current swap rate − Original fixed rate) × Notional × Σ Discount factors for remaining periods',
            },
            { t: 'h', x: 'Swaps as bond positions' },
            {
              t: 'table',
              head: ['Swap position', 'Equivalent bond position'],
              rows: [
                ['Pay fixed, receive floating', 'Long a floating-rate note, short a fixed-rate bond'],
                ['Receive fixed, pay floating', 'Long a fixed-rate bond, short a floating-rate note'],
              ],
            },
            { t: 'p', x: 'This equivalence explains duration effects: a receive-fixed swap adds positive duration like owning a fixed-rate bond; a pay-fixed swap reduces duration.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-de-20', name: 'Swap net payment', expr: '(Fixed rate − Floating rate) × Notional × Period fraction', note: 'Only the net amount is exchanged.' },
        { id: 'f-de-23', name: 'Pay-fixed swap value', expr: '(New swap rate − Old fixed rate) × Notional × Σ Discount factors', note: 'Gains when market swap rates rise.' },
      ],
      cards: [
        { id: 'c-de-21', front: 'A plain vanilla interest rate swap is equivalent to', back: 'A series of forward contracts, priced so the swap has zero value at inception.' },
        { id: 'c-de-43', front: 'Pay-fixed swap as bonds', back: 'Long a floating-rate note and short a fixed-rate bond.' },
        { id: 'c-de-44', front: 'Who gains when swap rates rise?', back: 'The pay-fixed (receive-floating) party.' },
      ],
      questions: [
        {
          id: 'q-de-022', difficulty: 'easy',
          stem: 'At inception, the value of a plain vanilla interest rate swap to each counterparty is most likely:',
          choices: ['positive to the fixed-rate payer', 'zero', 'equal to the notional principal'],
          answer: 1,
          explain: 'The fixed rate is set so the two legs have equal present values at inception.',
          why: [
            'A would mean one party receives value for free.',
            'C confuses the notional with economic value.',
          ],
        },
        {
          id: 'q-de-070', difficulty: 'medium',
          stem: 'A company entered a swap to pay fixed and receive floating. Since then, market swap rates for the remaining term have risen. The swap\'s value to the company has most likely:',
          choices: ['increased', 'decreased', 'remained zero'],
          answer: 0,
          explain: 'The company is locked into paying a fixed rate below what the market now requires, while receiving higher floating payments — its position has gained value.',
          why: [
            'B describes the receive-fixed counterparty.',
            'C applies only at inception or if rates are unchanged.',
          ],
        },
        {
          id: 'q-de-071', difficulty: 'hard',
          stem: 'A receive-fixed, pay-floating interest rate swap is most similar to:',
          choices: [
            'a long position in a fixed-rate bond and a short position in a floating-rate note',
            'a long position in a floating-rate note and a short position in a fixed-rate bond',
            'a long position in both a fixed-rate bond and a floating-rate note',
          ],
          answer: 0,
          explain: 'Receiving fixed replicates owning a fixed-rate bond; paying floating replicates having issued (shorted) a floating-rate note.',
          why: [
            'B describes a pay-fixed swap.',
            'C would require receiving both legs.',
          ],
        },
        {
          id: 'q-de-072', difficulty: 'expert',
          vignette: 'A $10 million notional pay-fixed swap has two annual payments remaining. Its original fixed rate is 3%. The current two-year swap rate is 4%, and the discount factors for the remaining payment dates are 0.962 and 0.925.',
          stem: 'The value of the swap to the fixed-rate payer is closest to:',
          choices: ['+$188,700', '−$188,700', '+$200,000'],
          answer: 0,
          explain: 'Value = (0.04 − 0.03) × 10,000,000 × (0.962 + 0.925) = 100,000 × 1.887 = +$188,700. The payer benefits from paying 3% when the market rate is 4%.',
          why: [
            'B is the value to the fixed-rate receiver.',
            'C ignores discounting of the two future rate differentials.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'der-options',
      name: 'Pricing and Valuing Options',
      los: [
        'Explain the exercise value, time value and moneyness of an option',
        'Identify the factors that determine option value and describe their effects',
        'Explain put–call parity and put–call–forward parity for European options',
        'Explain how to value a derivative using a one-period binomial model',
        'Compare American and European options',
      ],
      lessons: [
        {
          id: 'der-options-l1',
          title: 'What drives option value',
          minutes: 9,
          blocks: [
            {
              t: 'formula', name: 'Components of option value',
              x: 'Option value = Exercise (intrinsic) value + Time value\n\nCall exercise value = max(0, S − X)\nPut exercise value  = max(0, X − S)',
            },
            {
              t: 'table',
              head: ['Increase in…', 'Call value', 'Put value'],
              rows: [
                ['Underlying price', 'Up', 'Down'],
                ['Exercise price', 'Down', 'Up'],
                ['Volatility', 'Up', 'Up'],
                ['Time to expiry', 'Up (generally)', 'Up (generally; European puts can be exceptions)'],
                ['Risk-free rate', 'Up', 'Down'],
                ['Benefits of holding underlying (dividends)', 'Down', 'Up'],
                ['Costs of holding underlying', 'Up', 'Down'],
              ],
            },
            {
              t: 'callout', label: 'Volatility raises both',
              x: 'Because an option\'s downside is capped at the premium, greater dispersion in the underlying adds to the upside without adding equally to the downside. More uncertainty is worth more to both calls and puts.',
            },
            {
              t: 'formula', name: 'Lower bounds for European options',
              x: 'Call ≥ max[0, S₀ − X/(1 + r)^T]\nPut  ≥ max[0, X/(1 + r)^T − S₀]',
            },
            { t: 'h', x: 'American vs European' },
            { t: 'p', x: 'An American call on a non-dividend-paying share is never optimally exercised early — selling it captures more than exercising — so it is worth the same as the European call. An American **put** can be worth more than a European put, because exercising a deep in-the-money put early lets the holder earn interest on the exercise price sooner.' },
          ],
        },
        {
          id: 'der-options-l2',
          title: 'Parity and the binomial model',
          minutes: 10,
          blocks: [
            {
              t: 'formula', name: 'Put–call parity (European options)',
              x: 'c₀ + X/(1+r)^T = p₀ + S₀\n\nFiduciary call        =   Protective put\n(call + risk-free bond)   (put + underlying)',
            },
            { t: 'p', x: 'Both sides deliver max(S_T, X) at expiry, so both must cost the same today. Rearranged, parity lets you synthesise any one instrument from the other three.' },
            {
              t: 'formula', name: 'Put–call–forward parity',
              x: 'p₀ − c₀ = [X − F₀(T)] / (1 + r)^T',
            },
            { t: 'h', x: 'The one-period binomial model' },
            { t: 'p', x: 'Assume the underlying moves to one of two prices: up (S₀ × u) or down (S₀ × d). The option is valued by constructing a riskless hedge — or equivalently by using risk-neutral probabilities.' },
            {
              t: 'formula', name: 'Binomial option value',
              x: 'Risk-neutral probability of an up move:  π = (1 + r − d) / (u − d)\n\nOption value today = [π × Value_up + (1 − π) × Value_down] / (1 + r)\n\nHedge ratio h = (c_up − c_down) / (S_up − S_down)',
            },
            {
              t: 'example', title: 'Worked example',
              x: 'S₀ = $50, u = 1.2 (→ $60), d = 0.8 (→ $40). Call with X = $50. r = 5%.\n\nc_up = $10, c_down = $0\nπ = (1.05 − 0.80) / (1.20 − 0.80) = 0.625\nc₀ = (0.625 × 10 + 0.375 × 0) / 1.05 = $5.95',
            },
            {
              t: 'callout', label: 'Risk-neutral does not mean real-world',
              x: 'π is not the actual probability of an up move. It is the probability that makes the underlying earn the risk-free rate — the only probability consistent with no arbitrage. Real-world probabilities never enter the calculation.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-de-12', name: 'Put–call parity', expr: 'c + X/(1+r)^T = p + S₀', note: 'European options on the same underlying, strike and expiry.' },
        { id: 'f-de-16', name: 'Put–call–forward parity', expr: 'p₀ − c₀ = [X − F₀(T)]/(1 + r)^T', note: 'Replaces the underlying with a forward.' },
        { id: 'f-de-17', name: 'Risk-neutral probability', expr: 'π = (1 + r − d)/(u − d)', note: 'Used to discount the expected option payoff at the risk-free rate.' },
        { id: 'f-de-18', name: 'Binomial option value', expr: '[π V_up + (1 − π) V_down] / (1 + r)', note: 'One-period model.' },
        { id: 'f-de-19', name: 'Option value components', expr: 'Exercise value + Time value', note: 'Time value falls to zero at expiry.' },
      ],
      cards: [
        { id: 'c-de-10', front: 'Effect of higher volatility on option values', back: 'Raises both call and put values.' },
        { id: 'c-de-11', front: 'Put–call parity', back: 'c + X/(1+r)^T = p + S₀. Fiduciary call = protective put.' },
        { id: 'c-de-12', front: 'Effect of a higher risk-free rate', back: 'Increases call values, decreases put values.' },
        { id: 'c-de-45', front: 'Risk-neutral probability in the binomial model', back: 'π = (1 + r − d)/(u − d). Not the real-world probability of an up move.' },
        { id: 'c-de-46', front: 'When can an American option be worth more than a European one?', back: 'For puts (and calls on dividend-paying underlyings), where early exercise can be optimal. An American call on a non-dividend stock equals the European call.' },
      ],
      questions: [
        {
          id: 'q-de-011', difficulty: 'easy',
          stem: 'An increase in the volatility of the underlying asset will most likely:',
          choices: ['increase call values and decrease put values', 'increase both call and put values', 'decrease both call and put values'],
          answer: 1,
          explain: 'Higher volatility increases the chance of large favourable moves while losses remain capped at the premium, benefiting calls and puts alike.',
          why: [
            'A confuses volatility with a change in the underlying price.',
            'C is the reverse of the actual relationship.',
          ],
        },
        {
          id: 'q-de-080', difficulty: 'medium',
          stem: 'A call option with an exercise price of $50 trades at $7 when the underlying share price is $55. The option\'s time value is:',
          choices: ['$2', '$5', '$7'],
          answer: 0,
          explain: 'Exercise value = 55 − 50 = $5. Time value = option price − exercise value = 7 − 5 = $2.',
          why: [
            'B is the exercise value.',
            'C is the full option price.',
          ],
        },
        {
          id: 'q-de-012', difficulty: 'hard',
          stem: 'A stock trades at $50. A one-year European call with a $50 strike sells for $6. The one-year risk-free rate is 4%. By put–call parity, the one-year European put with the same strike is closest to:',
          choices: ['$4.08', '$6.00', '$8.08'],
          answer: 0,
          explain: 'p = c + X/(1+r)^T − S₀ = 6 + 48.08 − 50 = $4.08.',
          why: [
            'B assumes calls and puts must be equal, which holds only when the strike equals the forward price.',
            'C mishandles the present value adjustment.',
          ],
        },
        {
          id: 'q-de-081', difficulty: 'hard',
          stem: 'Which statement about American and European options is most accurate?',
          choices: [
            'An American put can be worth more than an otherwise identical European put.',
            'An American call on a non-dividend-paying share is always worth more than the European call.',
            'European options are always worth more because they cannot be exercised prematurely.',
          ],
          answer: 0,
          explain: 'Early exercise of a deep in-the-money put can be optimal because the holder receives the exercise price sooner and earns interest on it. That flexibility gives the American put extra value.',
          why: [
            'B is false — early exercise of such a call is never optimal, so the two are worth the same.',
            'C is false — the right to exercise early can never reduce an option\'s value.',
          ],
        },
        {
          id: 'q-de-082', difficulty: 'expert',
          vignette: 'A share trades at $50. In one year it will be worth either $60 or $40. The one-year risk-free rate is 5%.',
          stem: 'Using a one-period binomial model, the value of a one-year European call with an exercise price of $50 is closest to:',
          choices: ['$5.95', '$6.25', '$5.00'],
          answer: 0,
          explain: 'u = 1.2, d = 0.8. π = (1.05 − 0.8)/(1.2 − 0.8) = 0.625. Payoffs are $10 up and $0 down. c₀ = 0.625 × 10 / 1.05 = $5.95.',
          why: [
            'B forgets to discount the expected payoff at the risk-free rate.',
            'C uses a 50/50 probability, 0.5 × 10, and does not discount — real-world guesses have no place in the model.',
          ],
        },
      ],
    },
  ],
};
