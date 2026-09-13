// Fixed Income — starter depth. Original wording throughout.

export default {
  id: 'fixedincome',
  name: 'Fixed Income',
  short: 'Fixed Income',
  weight: '11–14%',
  weightMid: 12.5,
  depth: 'starter',
  summary:
    'Bond features, pricing, yield measures, and the risk framework of duration and convexity. Mechanical and learnable — this is one of the most reliably scoreable heavyweight topics.',
  modules: [
    {
      id: 'fi-features',
      name: 'Features, Issuance and Cash Flow Structures',
      los: [
        'Describe the basic features of a fixed-income security and the contents of a bond indenture',
        'Compare affirmative and negative covenants',
        'Describe securities with contingency provisions: callable, putable and convertible bonds',
        'Describe fixed-income markets, issuers and the primary and secondary markets',
      ],
      lessons: [
        {
          id: 'fi-features-l1',
          title: 'Reading a bond\'s terms',
          minutes: 7,
          blocks: [
            { t: 'p', x: 'Every bond is defined by its **issuer**, **maturity**, **par value**, **coupon rate and frequency**, and **currency**. The legal contract containing these is the **indenture**, which also carries the covenants.' },
            {
              t: 'ul',
              x: [
                '**Affirmative covenants** — what the issuer must do: pay on time, maintain the collateral, file financial statements, keep specified ratios.',
                '**Negative covenants** — what the issuer may not do: exceed a leverage limit, pledge assets to others, sell major assets, pay excessive dividends.',
              ],
            },
            { t: 'p', x: 'Negative covenants are the more valuable to lenders because they restrain exactly the risk-shifting behaviour that benefits shareholders at creditors\' expense.' },
            { t: 'h', x: 'Embedded options — who benefits?' },
            {
              t: 'table',
              head: ['Provision', 'Option held by', 'Effect on the bond\'s price'],
              rows: [
                ['Callable', 'Issuer — may redeem early', 'Lowers the price (investor is short the option), raises the yield'],
                ['Putable', 'Investor — may sell back early', 'Raises the price, lowers the yield'],
                ['Convertible', 'Investor — may convert to equity', 'Raises the price, lowers the yield'],
              ],
            },
            {
              t: 'callout', label: 'One rule covers all three',
              x: 'Value of a bond with an embedded option = value of the straight bond ± the option value, with the sign depending on who holds the option. An issuer option subtracts from value; an investor option adds to it.',
            },
            { t: 'p', x: 'Issuers call bonds when rates have **fallen**, refinancing cheaply — precisely when the investor would least like to be repaid. That reinvestment problem is why callable bonds must offer a higher yield.' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-fi-1', front: 'Affirmative vs negative covenant', back: 'Affirmative = actions the issuer must take (pay on time, file statements). Negative = restrictions (leverage limits, no asset sales).' },
        { id: 'c-fi-2', front: 'Callable bond yield vs otherwise identical straight bond', back: 'Higher — the investor is short the call option and must be compensated for reinvestment risk.' },
        { id: 'c-fi-3', front: 'Value of a putable bond', back: 'Straight bond value + put option value. The investor holds the option, so it adds value.' },
      ],
      questions: [
        {
          id: 'q-fi-001', difficulty: 'easy',
          stem: 'Compared with an otherwise identical option-free bond, a callable bond will most likely have:',
          choices: ['a higher price and a lower yield', 'a lower price and a higher yield', 'the same price, since the call may never be exercised'],
          answer: 1,
          explain: 'The investor has effectively sold a call option to the issuer and must be compensated for it. That compensation takes the form of a lower price and a correspondingly higher yield.',
          why: [
            'A describes a putable or convertible bond, where the *investor* holds the option.',
            'C is wrong because an option has value from the moment it exists, regardless of whether it is ultimately exercised.',
          ],
        },
        {
          id: 'q-fi-002', difficulty: 'medium',
          stem: 'A bond indenture prohibits the issuer from increasing its debt-to-EBITDA ratio above 3.5x. This is best described as:',
          choices: ['an affirmative covenant', 'a negative covenant', 'a contingency provision'],
          answer: 1,
          explain: 'It restricts something the issuer may not do, which defines a negative covenant. Such restrictions protect lenders from post-issuance risk-shifting.',
          why: [
            'A would describe an obligation to act, such as maintaining insurance or filing reports.',
            'C refers to embedded options such as call, put or conversion features.',
          ],
        },
      ],
    },

    {
      id: 'fi-pricing',
      name: 'Bond Pricing and Yield Measures',
      los: [
        'Calculate a bond\'s price given a market discount rate and using spot rates',
        'Describe the relationships among a bond\'s price, coupon rate, maturity and market discount rate',
        'Calculate and interpret yield-to-maturity, current yield and yield-to-call',
        'Define spot rates, forward rates and yield spreads',
      ],
      lessons: [
        {
          id: 'fi-pricing-l1',
          title: 'Price, yield and the relationships you must know cold',
          minutes: 9,
          blocks: [
            {
              t: 'formula', name: 'Bond price',
              x: 'P = Σ [ Coupon / (1+r)ᵗ ] + Face / (1+r)ⁿ\n\nUsing spot rates:\nP = Σ [ Coupon / (1 + z_t)ᵗ ] + Face / (1 + z_n)ⁿ',
            },
            {
              t: 'table',
              head: ['Relationship', 'Result'],
              rows: [
                ['Coupon rate > market yield', 'Premium — price above par'],
                ['Coupon rate = market yield', 'Par'],
                ['Coupon rate < market yield', 'Discount — price below par'],
                ['Yields rise', 'Prices fall (inverse relationship)'],
                ['Longer maturity', 'Greater price sensitivity to yield changes'],
                ['Lower coupon', 'Greater price sensitivity to yield changes'],
              ],
            },
            {
              t: 'callout', label: 'Convexity, informally',
              x: 'The price–yield relationship is a **curve**, not a line. A yield fall raises price more than an equal yield rise lowers it. That asymmetry works in the bondholder\'s favour, which is why convexity is a desirable property.',
            },
            { t: 'h', x: 'Yield measures' },
            {
              t: 'ul',
              x: [
                '**Current yield** = annual coupon ÷ price. Ignores capital gain or loss and the timing of cash flows.',
                '**Yield to maturity** — the IRR of holding to maturity. Assumes all coupons are reinvested at the YTM itself, and that the bond is held to maturity with no default.',
                '**Yield to call** — the same calculation run to the first call date and call price. For a premium callable bond, the relevant figure is the *yield to worst*, the lowest of YTM and all yields-to-call.',
              ],
            },
            { t: 'h', x: 'Spot and forward rates' },
            {
              t: 'formula', name: 'Forward rate relationship',
              x: '(1 + z₂)² = (1 + z₁)(1 + f₁,₁)\n\nz = spot rate, f₁,₁ = one-year rate, one year forward',
            },
            { t: 'p', x: 'A spot rate discounts a single cash flow arriving at one date. A yield to maturity is a single blended rate applied to *all* of a bond\'s cash flows — which is why two bonds with identical maturities but different coupons can have different YTMs even in the same spot-rate environment.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-10', name: 'Bond price', expr: 'P = Σ C/(1+r)ᵗ + F/(1+r)ⁿ', note: 'Coupons as an annuity plus face value as a lump sum.' },
        { id: 'f-fi-11', name: 'Current yield', expr: 'Annual coupon / Price', note: 'Ignores capital gain/loss and time value.' },
        { id: 'f-fi-12', name: 'Forward rate', expr: '(1 + z₂)² = (1 + z₁)(1 + f₁,₁)', note: 'Spot rates imply forward rates by no-arbitrage.' },
        { id: 'f-fi-13', name: 'G-spread / Z-spread', expr: 'Yield spread over a government benchmark; Z-spread is the constant spread over the spot curve', note: 'Compensation for credit and liquidity risk.' },
      ],
      cards: [
        { id: 'c-fi-10', front: 'Bond trading at a premium means', back: 'Coupon rate exceeds the market discount rate. Price declines toward par as maturity approaches ("pull to par").' },
        { id: 'c-fi-11', front: 'Two key YTM assumptions', back: 'Coupons are reinvested at the YTM, and the bond is held to maturity without default.' },
        { id: 'c-fi-12', front: 'Which bonds are most price-sensitive to yield changes?', back: 'Longer maturity and lower coupon — both push cash flows further into the future.' },
        { id: 'c-fi-13', front: 'Yield to worst', back: 'The lowest of yield-to-maturity and every possible yield-to-call — the conservative figure for a callable bond.' },
      ],
      questions: [
        {
          id: 'q-fi-010', difficulty: 'easy',
          stem: 'A bond with a 6% annual coupon trades at 94.5% of par. The bond is best described as trading at:',
          choices: ['a premium, with a yield below 6%', 'a discount, with a yield above 6%', 'par, with a yield of exactly 6%'],
          answer: 1,
          explain: 'A price below par means investors demand a yield above the coupon rate. Price and yield always move inversely.',
          why: [
            'A describes a price above 100.',
            'C would require the price to equal 100 exactly.',
          ],
        },
        {
          id: 'q-fi-011', difficulty: 'medium',
          stem: 'The one-year spot rate is 3% and the two-year spot rate is 4%. The one-year forward rate one year from today is closest to:',
          choices: ['3.5%', '5.0%', '4.5%'],
          answer: 1,
          explain: '(1.04)² = (1.03)(1 + f). 1.0816/1.03 = 1.0501, so f ≈ 5.01%. When the spot curve is upward sloping, forward rates lie above spot rates.',
          why: [
            'A is the simple average of the two spot rates, which ignores compounding.',
            'C is an approximation that understates the forward rate implied by the two spot rates.',
          ],
        },
        {
          id: 'q-fi-012', difficulty: 'hard',
          stem: 'Which pair of bonds will show the greatest percentage price change for a given change in yield?',
          choices: [
            '10-year, 8% coupon',
            '20-year, 3% coupon',
            '20-year, 8% coupon',
          ],
          answer: 1,
          explain: 'Price sensitivity rises with maturity and falls with coupon size, because both determine how far into the future the average cash flow sits. The 20-year, 3% coupon bond has the longest effective cash flow timing and therefore the highest duration.',
          why: [
            'A has both a shorter maturity and a high coupon — the least sensitive combination here.',
            'C shares the 20-year maturity but its larger coupons return cash sooner, shortening duration.',
          ],
        },
      ],
    },

    {
      id: 'fi-risk',
      name: 'Duration, Convexity and Credit Risk',
      los: [
        'Calculate and interpret Macaulay, modified and effective duration',
        'Explain how a bond\'s maturity, coupon and yield affect its interest rate risk',
        'Calculate the percentage price change using duration and convexity',
        'Describe credit risk, credit ratings and the components of a credit spread',
      ],
      lessons: [
        {
          id: 'fi-risk-l1',
          title: 'Measuring interest rate risk',
          minutes: 9,
          blocks: [
            {
              t: 'formula', name: 'Duration measures',
              x: 'Modified duration = Macaulay duration / (1 + y)\n\n%ΔPrice ≈ −ModDur × Δy\n\nWith convexity:\n%ΔPrice ≈ (−ModDur × Δy) + (½ × Convexity × Δy²)',
            },
            {
              t: 'ul',
              x: [
                '**Macaulay duration** — the weighted average time to receive the bond\'s cash flows, in years.',
                '**Modified duration** — the percentage price change for a 1% change in yield. The practical risk measure.',
                '**Effective duration** — computed by actually repricing the bond under parallel shifts in the *benchmark curve*. Required for bonds with embedded options, whose cash flows change when yields change.',
              ],
            },
            {
              t: 'callout', label: 'Why the convexity term is always positive',
              x: 'For an option-free bond, convexity is positive, so the adjustment *raises* the estimated price whether yields rise or fall. Duration alone always overstates a price fall and understates a price rise — convexity corrects both errors in the investor\'s favour.',
            },
            { t: 'p', x: 'A **callable** bond exhibits negative convexity at low yields: as yields fall, the call becomes more likely and the price compresses toward the call price instead of continuing to rise.' },
            { t: 'h', x: 'Credit risk' },
            {
              t: 'ul',
              x: [
                '**Default risk** — the probability the issuer fails to pay.',
                '**Loss severity** — the fraction lost if default occurs. Expected loss = probability of default × loss given default.',
                '**Spread risk** — the price impact of a widening credit spread even without default, comprising downgrade risk and market liquidity risk.',
              ],
            },
            {
              t: 'callout', label: 'Ratings, in outline', kind: 'warn',
              x: 'Investment grade runs to BBB− (or Baa3); anything below is high yield. The gap matters commercially: many institutional mandates prohibit sub-investment-grade holdings, so a downgrade across that line can force selling and widen spreads well beyond what the credit change alone implies.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-20', name: 'Modified duration', expr: 'ModDur = MacDur / (1 + y)', note: '%ΔP ≈ −ModDur × Δy.' },
        { id: 'f-fi-21', name: 'Price change with convexity', expr: '%ΔP ≈ −ModDur×Δy + ½×Convexity×Δy²', note: 'The convexity term is positive for option-free bonds, whichever way yields move.' },
        { id: 'f-fi-22', name: 'Money duration', expr: 'ModDur × full price of the position', note: 'Price change in currency for a 1% yield move.' },
        { id: 'f-fi-23', name: 'Expected loss', expr: 'Probability of default × Loss given default', note: 'LGD = 1 − recovery rate.' },
      ],
      cards: [
        { id: 'c-fi-20', front: 'Modified duration, in words', back: 'The approximate percentage price change for a 1 percentage-point change in yield. %ΔP ≈ −ModDur × Δy.' },
        { id: 'c-fi-21', front: 'When must effective duration be used?', back: 'For bonds with embedded options (callable, putable, MBS), whose cash flows change as yields change.' },
        { id: 'c-fi-22', front: 'Why is positive convexity desirable?', back: 'Prices rise more when yields fall than they fall when yields rise by the same amount — an asymmetry favouring the bondholder.' },
        { id: 'c-fi-23', front: 'Lowest investment-grade rating', back: 'BBB− (S&P/Fitch) or Baa3 (Moody\'s). Below that is high yield / speculative grade.' },
        { id: 'c-fi-24', front: 'Expected loss', back: 'Probability of default × loss given default, where LGD = 1 − recovery rate.' },
      ],
      questions: [
        {
          id: 'q-fi-020', difficulty: 'easy',
          stem: 'A bond has a modified duration of 7.2. If its yield rises by 50 basis points, the approximate percentage price change is closest to:',
          choices: ['−3.6%', '+3.6%', '−7.2%'],
          answer: 0,
          explain: '%ΔP ≈ −ModDur × Δy = −7.2 × 0.005 = −0.036, or −3.6%. Prices fall when yields rise.',
          why: [
            'B has the sign wrong — the price–yield relationship is inverse.',
            'C applies a full 1% yield change rather than the stated 50 basis points.',
          ],
        },
        {
          id: 'q-fi-021', difficulty: 'medium',
          stem: 'An analyst must measure the interest rate risk of a callable bond. The appropriate measure is:',
          choices: ['Macaulay duration', 'modified duration', 'effective duration'],
          answer: 2,
          explain: 'A call option means the bond\'s cash flows themselves change as yields change. Effective duration captures this by repricing the bond under shifts in the benchmark curve, whereas Macaulay and modified duration assume fixed cash flows.',
          why: [
            'A measures the weighted average time to cash flows and assumes they are fixed.',
            'B is derived from Macaulay duration and inherits the same fixed-cash-flow assumption.',
          ],
        },
        {
          id: 'q-fi-022', difficulty: 'hard',
          stem: 'A bond has a modified duration of 6.0 and a convexity of 80. If yields fall by 100 basis points, the estimated percentage price change is closest to:',
          choices: ['+6.0%', '+6.4%', '+5.6%'],
          answer: 1,
          explain: 'Duration effect: −6.0 × (−0.01) = +6.0%. Convexity effect: ½ × 80 × (0.01)² = ½ × 80 × 0.0001 = +0.4%. Total ≈ +6.4%.',
          why: [
            'A omits the convexity adjustment, which always adds to the estimate for an option-free bond.',
            'C subtracts the convexity term. Convexity increases the estimated price whether yields rise or fall.',
          ],
        },
        {
          id: 'q-fi-023', difficulty: 'expert',
          stem: 'A bond has a probability of default of 3% and an expected recovery rate of 40%. Its expected loss as a percentage of par is closest to:',
          choices: ['1.2%', '1.8%', '3.0%'],
          answer: 1,
          explain: 'Loss given default = 1 − recovery rate = 60%. Expected loss = 3% × 60% = 1.8%.',
          why: [
            'A (1.2%) multiplies the default probability by the *recovery* rate instead of the loss rate.',
            'C (3.0%) is the default probability alone, which assumes zero recovery.',
          ],
        },
      ],
    },
  ],
};
