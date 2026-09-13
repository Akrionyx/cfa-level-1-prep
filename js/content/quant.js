// Quantitative Methods — deep content. All wording and questions original.

export default {
  id: 'quant',
  name: 'Quantitative Methods',
  short: 'Quant',
  weight: '6–9%',
  weightMid: 7.5,
  depth: 'deep',
  summary:
    'The toolkit the rest of the curriculum is built on. Returns, time value, distributions, and inference show up again in equity, fixed income and portfolio management — so weakness here quietly costs you marks in four other topics.',
  modules: [
    /* ---------------------------------------------------------- */
    {
      id: 'quant-rates',
      name: 'Rates and Returns',
      los: [
        'Interpret interest rates as required rates of return, discount rates, or opportunity costs',
        'Explain an interest rate as the sum of a real risk-free rate and premia for inflation, default, liquidity and maturity',
        'Calculate and interpret holding period return, arithmetic mean, geometric mean and harmonic mean returns',
        'Compare money-weighted and time-weighted rates of return',
        'Calculate and interpret annualised returns and the effect of compounding frequency',
      ],
      lessons: [
        {
          id: 'quant-rates-l1',
          title: 'What an interest rate actually is',
          minutes: 8,
          blocks: [
            { t: 'p', x: 'One number, three interpretations — and the exam expects you to move between them fluently:' },
            {
              t: 'ul',
              x: [
                '**Required rate of return** — the minimum an investor demands to part with money today.',
                '**Discount rate** — the rate that converts a future cash flow into today\'s value.',
                '**Opportunity cost** — what you give up by consuming now instead of investing.',
              ],
            },
            { t: 'h', x: 'Building a nominal rate from components' },
            {
              t: 'formula', name: 'Required interest rate',
              x: 'r = real risk-free rate\n  + inflation premium\n  + default risk premium\n  + liquidity premium\n  + maturity risk premium',
            },
            { t: 'p', x: 'The first two together give the **nominal risk-free rate** — which is what a short-dated government bill approximates. Each further premium compensates for a distinct risk: that the borrower fails to pay, that you cannot sell quickly at fair value, and that longer maturities suffer larger price swings when rates move.' },
            {
              t: 'callout', label: 'Precise version',
              x: 'Strictly, (1 + nominal) = (1 + real)(1 + inflation), so the additive version is an approximation. It is close enough at low rates and fine for the exam unless a question specifically asks for the exact relation.',
            },
            { t: 'h', x: 'Holding period return' },
            {
              t: 'formula', name: 'Holding period return (HPR)',
              x: 'HPR = (P₁ − P₀ + D₁) / P₀\n\nwhere P₀ = beginning price, P₁ = ending price, D₁ = cash received',
            },
            { t: 'p', x: 'Chaining several periods together compounds them: for three periods, (1+R) = (1+R₁)(1+R₂)(1+R₃) − and subtract 1 at the end.' },
          ],
        },
        {
          id: 'quant-rates-l2',
          title: 'Which average? Arithmetic, geometric, harmonic',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'Choosing the wrong mean is one of the most reliable sources of lost marks in this topic. Each answers a different question.' },
            {
              t: 'table',
              head: ['Mean', 'Answers', 'Use when'],
              rows: [
                ['Arithmetic', 'What is the best estimate of *next period\'s* return?', 'Forecasting a single future period'],
                ['Geometric', 'What was the *compound* rate actually earned?', 'Describing realised multi-period performance'],
                ['Harmonic', 'What is the average *cost* per unit when buying fixed amounts?', 'Cost averaging, average P/E of a portfolio'],
              ],
            },
            {
              t: 'formula', name: 'Geometric mean return',
              x: 'R_G = [(1+R₁)(1+R₂)…(1+R_n)]^(1/n) − 1',
            },
            {
              t: 'formula', name: 'Harmonic mean',
              x: 'X_H = n / Σ(1/Xᵢ)',
            },
            {
              t: 'callout', label: 'Ordering you must remember',
              x: 'Harmonic ≤ Geometric ≤ Arithmetic, with equality only when every observation is identical. The gap between arithmetic and geometric widens as **volatility rises** — which is why a volatile fund\'s advertised "average return" flatters it.',
            },
            {
              t: 'example', title: 'Worked example',
              x: 'Returns of +50% then −50%. Arithmetic mean = 0%. Geometric mean = (1.50 × 0.50)^(1/2) − 1 = −13.4%. The investor really is down 25% overall — only the geometric mean says so.',
            },
            { t: 'h', x: 'Money-weighted vs time-weighted' },
            { t: 'p', x: 'The **money-weighted rate of return** is simply the IRR of the portfolio\'s cash flows. It is sensitive to the *timing and size* of contributions and withdrawals — which is what a client experienced, but not a fair measure of a manager who does not control those flows.' },
            { t: 'p', x: 'The **time-weighted rate of return** chains sub-period returns, neutralising external cash flows. It is the standard for evaluating managers and the basis of GIPS-compliant reporting.' },
            {
              t: 'callout', label: 'Exam shortcut', kind: 'warn',
              x: 'If a large contribution lands just before a strong period, the money-weighted return will exceed the time-weighted return. If it lands just before a weak period, MWR < TWR. You can often answer the comparison question without calculating either.',
            },
            { t: 'h', x: 'Annualising' },
            {
              t: 'formula', name: 'Annualised return from a period return',
              x: 'r_annual = (1 + r_period)^(c) − 1\n\nwhere c = number of periods per year',
            },
            {
              t: 'formula', name: 'Effective annual rate from a stated rate',
              x: 'EAR = (1 + r_s/m)^m − 1        (m compounding periods per year)\nEAR = e^(r_s) − 1                  (continuous compounding)',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-q-1', name: 'Holding period return', expr: 'HPR = (P₁ − P₀ + D₁) / P₀', note: 'Price change plus income, over beginning value.' },
        { id: 'f-q-2', name: 'Geometric mean return', expr: 'R_G = [∏(1+Rᵢ)]^(1/n) − 1', note: 'The compound rate actually earned.' },
        { id: 'f-q-3', name: 'Harmonic mean', expr: 'X_H = n / Σ(1/Xᵢ)', note: 'Average cost when investing a fixed amount each period.' },
        { id: 'f-q-4', name: 'Effective annual rate', expr: 'EAR = (1 + r_s/m)^m − 1;  continuous: e^(r_s) − 1', note: 'More frequent compounding → higher EAR.' },
        { id: 'f-q-5', name: 'Nominal rate components', expr: 'r = real RF + inflation + default + liquidity + maturity premium', note: 'Additive form is an approximation of (1+real)(1+inflation).' },
      ],
      cards: [
        { id: 'c-q-1', front: 'Arithmetic vs geometric mean — which is larger?', back: 'Arithmetic ≥ Geometric, and the gap grows with volatility. Equal only when all returns are identical.' },
        { id: 'c-q-2', front: 'When is money-weighted return higher than time-weighted?', back: 'When a large cash inflow occurs just *before* a strong performance period (and vice versa).' },
        { id: 'c-q-3', front: 'Which return measure does GIPS require for manager evaluation?', back: 'Time-weighted, because it removes the effect of client cash flows the manager does not control.' },
        { id: 'c-q-4', front: 'Ordering of the three means', back: 'Harmonic ≤ Geometric ≤ Arithmetic.' },
        { id: 'c-q-5', front: 'EAR with continuous compounding', back: 'EAR = e^(rs) − 1' },
      ],
      questions: [
        {
          id: 'q-qm-001', difficulty: 'easy',
          stem: 'An investor buys a share for $50, receives a $2 dividend, and sells it for $54. The holding period return is closest to:',
          choices: ['8.0%', '12.0%', '11.1%'],
          answer: 1,
          explain: 'HPR = (54 − 50 + 2) / 50 = 6 / 50 = 12.0%. Both the capital gain and the dividend belong in the numerator; the denominator is the beginning price.',
          why: [
            'A (8.0%) counts only the capital gain of $4 and ignores the dividend.',
            'C (11.1%) divides the $6 gain by the *ending* price of $54 instead of the beginning price.',
          ],
        },
        {
          id: 'q-qm-002', difficulty: 'medium',
          stem: 'A portfolio returns +30% in year 1 and −20% in year 2. The geometric mean annual return is closest to:',
          choices: ['+5.0%', '+1.98%', '+2.0%'],
          answer: 1,
          explain: 'R_G = (1.30 × 0.80)^(1/2) − 1 = (1.04)^0.5 − 1 = 1.0198 − 1 = 1.98%. The portfolio ended 4% up over two years, which compounds to roughly 1.98% per year.',
          why: [
            'A (+5.0%) is the arithmetic mean, (30 − 20)/2, which overstates the compound rate actually achieved.',
            'C (+2.0%) is the total two-year gain of 4% divided by two — a simple average of the cumulative return, not a compound rate.',
          ],
        },
        {
          id: 'q-qm-003', difficulty: 'medium',
          stem: 'A stated annual rate of 9% compounded monthly produces an effective annual rate closest to:',
          choices: ['9.00%', '9.38%', '9.42%'],
          answer: 1,
          explain: 'EAR = (1 + 0.09/12)^12 − 1 = (1.0075)^12 − 1 = 1.0938 − 1 = 9.38%.',
          why: [
            'A ignores compounding entirely — that is the stated (nominal) rate.',
            'C (9.42%) corresponds to *continuous* compounding: e^0.09 − 1 = 9.417%. More frequent compounding gives a higher EAR, and continuous is the upper limit.',
          ],
        },
        {
          id: 'q-qm-004', difficulty: 'hard',
          vignette: 'An investor buys one share of a fund at $100 at the start of year 1. The fund returns −10% in year 1. At the start of year 2 she invests a further $900 (buying shares at the then-current price), and the fund returns +20% in year 2.',
          stem: 'Compared with the time-weighted rate of return, the money-weighted rate of return is most likely:',
          choices: ['lower', 'higher', 'identical'],
          answer: 1,
          explain: 'The bulk of the capital ($900 of $990) is invested only for the strong second year, so the large cash flow is weighted toward the +20% period. The money-weighted return therefore exceeds the time-weighted return, which weights the −10% and +20% years equally.',
          why: [
            'A would be correct if the large contribution had preceded the *weak* period instead.',
            'C would hold only if there were no external cash flows after the initial investment.',
          ],
        },
        {
          id: 'q-qm-005', difficulty: 'hard',
          stem: 'An investor buys $600 of a stock each month for three months at prices of $20, $30 and $60 per share. The average purchase price per share is closest to:',
          choices: ['$36.67', '$28.24', '$30.00'],
          answer: 2,
          explain: 'Investing a fixed *dollar* amount each period calls for the harmonic mean: X_H = 3 / (1/20 + 1/30 + 1/60) = 3 / 0.10 = $30.00. Verify directly — the purchases buy 30, 20 and 10 shares, so $1,800 buys 60 shares, an average of $30.00 each.',
          why: [
            'A ($36.67) is the arithmetic mean of the three prices. It overstates the true cost because fewer shares are bought at the high price than at the low one.',
            'B ($28.24) is the geometric mean of the prices, which is the wrong average for a fixed-dollar purchase plan.',
          ],
        },
        {
          id: 'q-qm-006', difficulty: 'expert',
          stem: 'Which statement about the relationship between the arithmetic and geometric mean return is most accurate?',
          choices: [
            'The difference between them widens as the dispersion of returns increases.',
            'The geometric mean exceeds the arithmetic mean when returns are consistently positive.',
            'They are equal whenever the arithmetic mean is positive.',
          ],
          answer: 0,
          explain: 'The gap is driven by volatility — approximately half the variance of returns. Zero dispersion means the two are equal; the more returns scatter, the more the arithmetic mean overstates the compound growth actually achieved.',
          why: [
            'B reverses the inequality. The geometric mean can never exceed the arithmetic mean.',
            'C is wrong because equality depends on dispersion being zero, not on the sign of the mean.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'quant-tvm',
      name: 'Time Value of Money in Finance',
      los: [
        'Calculate the present value of a perpetuity, an annuity, and an uneven cash flow stream',
        'Calculate and interpret the implied return and growth rate from valuation relationships',
        'Apply time value of money to fixed income and equity instruments',
        'Explain cash flow additivity',
      ],
      lessons: [
        {
          id: 'quant-tvm-l1',
          title: 'Discounting: one idea, many disguises',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'Every valuation in the curriculum is the same sentence: *the value of an asset is the present value of its expected future cash flows*. Bonds, equities, projects and annuities differ only in the shape of the cash flows.' },
            {
              t: 'formula', name: 'Core relationships',
              x: 'FV = PV(1 + r)^n\nPV = FV / (1 + r)^n',
            },
            { t: 'h', x: 'Annuities and perpetuities' },
            {
              t: 'formula', name: 'Ordinary annuity (payments at period end)',
              x: 'PV = A × [1 − (1+r)^(−n)] / r\nFV = A × [(1+r)^n − 1] / r',
            },
            {
              t: 'formula', name: 'Annuity due (payments at period start)',
              x: 'PV_due = PV_ordinary × (1 + r)',
            },
            {
              t: 'formula', name: 'Perpetuity / growing perpetuity',
              x: 'PV = A / r\nPV_growing = CF₁ / (r − g)          (requires r > g)',
            },
            {
              t: 'callout', label: 'Where the marks are lost', kind: 'warn',
              x: 'Two recurring traps: (1) a perpetuity formula discounts to **one period before the first payment**, so a deferred perpetuity needs a second discounting step; (2) the growing perpetuity uses **next period\'s** cash flow, CF₁, not the one just paid.',
            },
            { t: 'h', x: 'The same machinery, applied' },
            {
              t: 'ul',
              x: [
                '**Bond** — an annuity of coupons plus a lump sum of face value at maturity. Its YTM is just the discount rate that makes both legs equal the market price.',
                '**Preferred share** — a level perpetuity: V = D / r.',
                '**Common share (Gordon growth)** — a growing perpetuity: V₀ = D₁ / (r − g), which rearranges to r = D₁/P₀ + g. Required return = dividend yield + growth.',
              ],
            },
            { t: 'h', x: 'Cash flow additivity' },
            { t: 'p', x: 'Amounts indexed to the *same* point in time can be added together. This is why you can value a complicated stream by decomposing it into an annuity plus a lump sum, and it is also the no-arbitrage principle underlying forward rates and replication.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-q-10', name: 'Present value', expr: 'PV = FV / (1 + r)^n', note: 'Compounding in reverse.' },
        { id: 'f-q-11', name: 'Ordinary annuity PV', expr: 'PV = A × [1 − (1+r)^(−n)] / r', note: 'End-of-period payments.' },
        { id: 'f-q-12', name: 'Annuity due PV', expr: 'PV_due = PV_ordinary × (1 + r)', note: 'Each payment arrives one period earlier.' },
        { id: 'f-q-13', name: 'Perpetuity', expr: 'PV = A / r', note: 'Values the stream one period before the first payment.' },
        { id: 'f-q-14', name: 'Gordon growth / growing perpetuity', expr: 'V₀ = D₁ / (r − g)   ⇒   r = D₁/P₀ + g', note: 'Uses next period\'s cash flow; requires r > g.' },
      ],
      cards: [
        { id: 'c-q-10', front: 'PV of an annuity due vs ordinary annuity', back: 'PV_due = PV_ordinary × (1 + r) — payments arrive one period sooner, so it is worth more.' },
        { id: 'c-q-11', front: 'Gordon growth required return', back: 'r = D₁/P₀ + g — dividend yield plus growth rate.' },
        { id: 'c-q-12', front: 'A perpetuity formula gives value as of when?', back: 'One period *before* the first payment. A deferred perpetuity needs an extra discounting step back to t=0.' },
        { id: 'c-q-13', front: 'Cash flow additivity principle', back: 'Cash flows indexed to the same date can be added. Underlies decomposition, forward rates, and no-arbitrage replication.' },
      ],
      questions: [
        {
          id: 'q-qm-010', difficulty: 'easy',
          stem: 'A perpetual preferred share pays $4 annually. If the required return is 8%, its value is closest to:',
          choices: ['$32', '$50', '$54'],
          answer: 1,
          explain: 'A level perpetuity is valued as PV = A / r = 4 / 0.08 = $50.',
          why: [
            'A ($32) multiplies the payment by the rate instead of dividing.',
            'C ($54) applies a growth adjustment that the question does not support — a preferred dividend is fixed, so g = 0.',
          ],
        },
        {
          id: 'q-qm-011', difficulty: 'medium',
          stem: 'A stock just paid a dividend of $2.00, dividends are expected to grow at 4% indefinitely, and the required return is 10%. The value of the stock is closest to:',
          choices: ['$33.33', '$34.67', '$50.00'],
          answer: 1,
          explain: 'The model needs next year\'s dividend: D₁ = 2.00 × 1.04 = $2.08. V₀ = 2.08 / (0.10 − 0.04) = 2.08 / 0.06 = $34.67.',
          why: [
            'A ($33.33) uses the dividend *just paid* (D₀ = $2.00) instead of D₁ — the single most common error in this calculation.',
            'C ($50.00) ignores growth entirely and values the stock as a level perpetuity, 2.00 / 0.04 or similar mis-assembly.',
          ],
        },
        {
          id: 'q-qm-012', difficulty: 'medium',
          stem: 'An investor will receive $10,000 at the end of each year for 5 years. At a discount rate of 6%, the present value is closest to:',
          choices: ['$42,124', '$44,651', '$50,000'],
          answer: 0,
          explain: 'PV = 10,000 × [1 − (1.06)^(−5)] / 0.06 = 10,000 × [1 − 0.74726] / 0.06 = 10,000 × 4.2124 = $42,124.',
          why: [
            'B ($44,651) is the annuity *due* value, 42,124 × 1.06 — correct only if payments came at the start of each year.',
            'C ($50,000) simply adds the five undiscounted payments, ignoring time value.',
          ],
        },
        {
          id: 'q-qm-013', difficulty: 'hard',
          stem: 'A perpetuity pays $500 per year, with the first payment occurring exactly 4 years from today. At a 10% discount rate, the value today is closest to:',
          choices: ['$5,000', '$3,757', '$3,415'],
          answer: 1,
          explain: 'PV = A/r values the perpetuity one period before the first payment — here at t = 3: 500 / 0.10 = $5,000. Discount that back three years: 5,000 / (1.10)³ = 5,000 / 1.331 = $3,757.',
          why: [
            'A ($5,000) stops at the t=3 value and forgets to discount it to today.',
            'C ($3,415) discounts by four years instead of three, double-counting the period the perpetuity formula already accounts for.',
          ],
        },
        {
          id: 'q-qm-014', difficulty: 'expert',
          vignette: 'A 3-year bond with a face value of $1,000 pays an annual coupon of 5%. It currently trades at $1,053.46.',
          stem: 'The bond\'s yield to maturity is closest to:',
          choices: ['3.0%', '4.0%', '5.0%'],
          answer: 0,
          explain: 'Test 3%: coupons of $50 for 3 years have PV = 50 × [1 − 1.03^(−3)]/0.03 = 50 × 2.8286 = $141.43; face value PV = 1,000/1.03³ = $915.14. Total = $1,056.57 — close, and since the bond trades above par the YTM must be below the 5% coupon. Among the choices only 3% produces a price above $1,050.',
          why: [
            'B (4%) gives roughly $1,027.75 — above par, but not high enough to match the quoted price.',
            'C (5%) would price the bond exactly at par, $1,000, since the yield would equal the coupon rate. A premium price requires a yield below the coupon.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'quant-stats',
      name: 'Statistical Measures of Asset Returns',
      los: [
        'Calculate and interpret measures of central tendency and location',
        'Calculate and interpret measures of dispersion: range, MAD, variance, standard deviation, downside deviation',
        'Interpret skewness and kurtosis and their implications for risk',
        'Interpret correlation and describe its limitations',
      ],
      lessons: [
        {
          id: 'quant-stats-l1',
          title: 'Describing a return distribution',
          minutes: 9,
          blocks: [
            { t: 'h', x: 'Dispersion' },
            {
              t: 'formula', name: 'Sample variance and standard deviation',
              x: 's² = Σ(Xᵢ − X̄)² / (n − 1)\ns  = √s²\n\nPopulation uses N in the denominator, not (n − 1).',
            },
            { t: 'p', x: 'The (n − 1) denominator — "degrees of freedom" — corrects for the fact that a sample mean sits closer to its own data than the true mean does, which would otherwise understate variance.' },
            { t: 'p', x: '**Downside deviation** (target semideviation) applies the same idea to only those observations below a target, answering the question investors actually care about: how bad is the bad side?' },
            { t: 'h', x: 'Shape: skewness and kurtosis' },
            {
              t: 'table',
              head: ['Measure', 'Value', 'Meaning'],
              rows: [
                ['Skewness', '> 0 (right/positive)', 'Long right tail; mean > median > mode; frequent small losses, occasional large gains'],
                ['Skewness', '< 0 (left/negative)', 'Long left tail; mean < median < mode; frequent small gains, occasional large losses'],
                ['Excess kurtosis', '> 0 (leptokurtic)', 'Fat tails and a peaked centre — extreme outcomes more likely than normal'],
                ['Excess kurtosis', '< 0 (platykurtic)', 'Thin tails'],
              ],
            },
            {
              t: 'callout', label: 'Why this matters for risk',
              x: 'Asset returns are typically **negatively skewed and leptokurtic**. A risk model assuming normality therefore understates the probability of a severe loss — twice over. This single fact explains a great deal of post-2008 risk management.',
            },
            { t: 'h', x: 'Correlation and its traps' },
            {
              t: 'formula', name: 'Correlation',
              x: 'ρ(X,Y) = Cov(X,Y) / (σ_X × σ_Y),      −1 ≤ ρ ≤ +1',
            },
            {
              t: 'ul',
              x: [
                'It measures **linear** association only — a perfect quadratic relationship can show ρ ≈ 0.',
                'It is highly sensitive to **outliers**; one extreme pair can manufacture or destroy an apparent relationship.',
                '**Spurious correlation** — two series can move together by coincidence or because both respond to a third variable. Correlation never establishes causation.',
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-q-20', name: 'Sample variance', expr: 's² = Σ(Xᵢ − X̄)² / (n − 1)', note: 'Divide by n − 1 for a sample, N for a population.' },
        { id: 'f-q-21', name: 'Coefficient of variation', expr: 'CV = s / X̄', note: 'Risk per unit of return; lower is better. Unit-free, so it compares across assets.' },
        { id: 'f-q-22', name: 'Correlation', expr: 'ρ = Cov(X,Y) / (σ_X σ_Y)', note: 'Bounded by ±1; measures linear association only.' },
        { id: 'f-q-23', name: 'Target downside deviation', expr: 's_target = √[ Σ(Xᵢ − B)² / (n − 1) ] for Xᵢ < B', note: 'Only observations below the target B enter the sum.' },
      ],
      cards: [
        { id: 'c-q-20', front: 'Mean/median/mode ordering under positive skew', back: 'Mean > Median > Mode. (Negative skew reverses it.)' },
        { id: 'c-q-21', front: 'Excess kurtosis > 0 means', back: 'Leptokurtic — fat tails, more extreme outcomes than a normal distribution implies.' },
        { id: 'c-q-22', front: 'Typical shape of asset return distributions', back: 'Negatively skewed and leptokurtic — so normal-based risk models understate large-loss probability.' },
        { id: 'c-q-23', front: 'Coefficient of variation', back: 'CV = s / X̄ — standard deviation per unit of mean return. Lower is better; unit-free.' },
        { id: 'c-q-24', front: 'Three limitations of correlation', back: 'Captures only linear relationships; distorted by outliers; can be spurious (no causation).' },
      ],
      questions: [
        {
          id: 'q-qm-020', difficulty: 'easy',
          stem: 'A return distribution has a mean of 6%, a median of 7% and a mode of 8%. The distribution is best described as:',
          choices: ['positively skewed', 'negatively skewed', 'symmetric'],
          answer: 1,
          explain: 'Mean < median < mode indicates negative (left) skew: a long left tail of infrequent large losses pulls the mean down below the median.',
          why: [
            'A would require the reverse ordering, mean > median > mode.',
            'C would require all three measures to coincide.',
          ],
        },
        {
          id: 'q-qm-021', difficulty: 'medium',
          stem: 'Fund A has a mean return of 12% with a standard deviation of 18%. Fund B has a mean return of 8% with a standard deviation of 10%. Based on the coefficient of variation, which fund carries less risk per unit of return?',
          choices: ['Fund A', 'Fund B', 'They are identical'],
          answer: 1,
          explain: 'CV_A = 18/12 = 1.50; CV_B = 10/8 = 1.25. The lower coefficient of variation belongs to Fund B, so it delivers its return with less dispersion per unit.',
          why: [
            'A is wrong — Fund A has the higher absolute return but also the higher CV.',
            'C is wrong because the two ratios differ, 1.50 versus 1.25.',
          ],
        },
        {
          id: 'q-qm-022', difficulty: 'hard',
          stem: 'An analyst observes that a portfolio\'s return distribution has an excess kurtosis of +2.4 and a skewness of −0.8. Relative to a normal distribution, a risk model assuming normality would most likely:',
          choices: [
            'overstate the probability of a large loss.',
            'understate the probability of a large loss.',
            'estimate the probability of a large loss correctly, since kurtosis affects both tails equally.',
          ],
          answer: 1,
          explain: 'Positive excess kurtosis means fatter tails than normal, so extreme outcomes of either sign are more likely than the model assumes. Negative skew concentrates the extra extremity in the *left* tail. Both effects push in the same direction: the normal model understates large-loss probability.',
          why: [
            'A has the direction backwards.',
            'C ignores the skewness term, which makes the tails asymmetric even though kurtosis alone is symmetric.',
          ],
        },
        {
          id: 'q-qm-023', difficulty: 'expert',
          stem: 'Two variables have a correlation coefficient of 0.02, yet a scatterplot shows the points lying almost exactly on a parabola. The most accurate conclusion is that:',
          choices: [
            'the variables are independent.',
            'the variables have a strong non-linear relationship that correlation fails to capture.',
            'the correlation calculation must contain an error.',
          ],
          answer: 1,
          explain: 'The correlation coefficient measures only the strength of a *linear* association. A symmetric U-shaped relationship has positive slope over half its range and negative slope over the other, so the linear measure nets to roughly zero despite a near-deterministic relationship.',
          why: [
            'A confuses zero correlation with independence. Independence implies zero correlation, but the reverse does not hold.',
            'C is wrong because the result is exactly what correlation is expected to produce for this data shape.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'quant-prob',
      name: 'Probability, Expectations and Portfolio Mathematics',
      los: [
        'Calculate and interpret conditional, joint and total probabilities',
        'Apply Bayes\' formula to update beliefs given new information',
        'Calculate expected value, variance and covariance of portfolio returns',
        'Calculate and interpret safety-first ratios and shortfall risk',
      ],
      lessons: [
        {
          id: 'quant-prob-l1',
          title: 'Conditional probability and Bayes',
          minutes: 8,
          blocks: [
            {
              t: 'formula', name: 'Core probability rules',
              x: 'P(AB) = P(A|B) × P(B)                     multiplication\nP(A or B) = P(A) + P(B) − P(AB)           addition\nP(A) = P(A|B)P(B) + P(A|Bᶜ)P(Bᶜ)          total probability',
            },
            { t: 'p', x: 'Events are **independent** when P(A|B) = P(A) — knowing B tells you nothing about A. In that case, and only then, P(AB) = P(A)P(B).' },
            {
              t: 'formula', name: "Bayes' formula",
              x: 'P(Event | Info) = [ P(Info | Event) / P(Info) ] × P(Event)',
            },
            { t: 'p', x: 'Read it as: *posterior = likelihood ratio × prior*. New information scales your prior belief up or down depending on how much more likely that information is when the event is true.' },
            {
              t: 'callout', label: 'The classic trap', kind: 'warn',
              x: 'P(A|B) and P(B|A) are not the same number. Most stock-screening and default-prediction questions exist purely to test whether you notice the difference.',
            },
            { t: 'h', x: 'Portfolio mathematics' },
            {
              t: 'formula', name: 'Portfolio expected return and variance (two assets)',
              x: 'E(R_p) = w₁E(R₁) + w₂E(R₂)\n\nσ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρ₁₂σ₁σ₂',
            },
            { t: 'p', x: 'Expected return is a simple weighted average; **risk is not**. The cross term is where diversification lives: the lower ρ is, the smaller the portfolio variance, and at ρ < 1 portfolio risk is always less than the weighted average of the individual risks.' },
            { t: 'h', x: 'Safety-first: managing shortfall' },
            {
              t: 'formula', name: "Roy's safety-first ratio",
              x: 'SFRatio = [E(R_p) − R_L] / σ_p          (R_L = threshold return)',
            },
            { t: 'p', x: 'Choose the portfolio with the **highest** SFRatio: it minimises the probability of returning less than the threshold. Note the resemblance to the Sharpe ratio — replace R_L with the risk-free rate and you have exactly that.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-q-30', name: 'Multiplication rule', expr: 'P(AB) = P(A|B) × P(B)', note: 'Independent events: P(AB) = P(A)P(B).' },
        { id: 'f-q-31', name: 'Total probability', expr: 'P(A) = Σ P(A|Sᵢ) P(Sᵢ)', note: 'Weight each scenario probability by its likelihood.' },
        { id: 'f-q-32', name: "Bayes' formula", expr: 'P(E|I) = [P(I|E) / P(I)] × P(E)', note: 'Posterior = likelihood ratio × prior.' },
        { id: 'f-q-33', name: 'Two-asset portfolio variance', expr: 'σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂', note: 'Diversification benefit rises as ρ falls.' },
        { id: 'f-q-34', name: "Roy's safety-first ratio", expr: 'SFRatio = [E(R_p) − R_L] / σ_p', note: 'Maximise it to minimise shortfall probability.' },
      ],
      cards: [
        { id: 'c-q-30', front: 'Definition of independence', back: 'P(A|B) = P(A). Only then does P(AB) = P(A) × P(B).' },
        { id: 'c-q-31', front: "Bayes' formula in words", back: 'Posterior = (likelihood of the information given the event ÷ unconditional likelihood of the information) × prior.' },
        { id: 'c-q-32', front: 'Why is portfolio risk not a weighted average?', back: 'The covariance/correlation cross term. When ρ < 1, portfolio σ is below the weighted average of individual σ — that gap is diversification.' },
        { id: 'c-q-33', front: "Roy's safety-first criterion", back: 'Choose the portfolio with the highest [E(Rp) − R_L]/σp; it minimises P(return < threshold).' },
      ],
      questions: [
        {
          id: 'q-qm-030', difficulty: 'easy',
          stem: 'Two assets have equal weights, standard deviations of 20% each, and a correlation of 1.0. The portfolio standard deviation is closest to:',
          choices: ['14.1%', '20.0%', '28.3%'],
          answer: 1,
          explain: 'With ρ = 1 there is no diversification benefit, so portfolio standard deviation equals the weighted average: 0.5(20%) + 0.5(20%) = 20%. Check via the formula: σ²= 0.25(400) + 0.25(400) + 2(0.5)(0.5)(1)(20)(20) = 100 + 100 + 200 = 400, so σ = 20%.',
          why: [
            'A (14.1%) is the result when ρ = 0, which would give σ² = 200.',
            'C (28.3%) incorrectly sums variances as if the weights were 1.0 each.',
          ],
        },
        {
          id: 'q-qm-031', difficulty: 'medium',
          stem: 'Portfolio X has an expected return of 10% and a standard deviation of 15%. Portfolio Y has an expected return of 8% and a standard deviation of 9%. An investor requires a minimum return of 3%. Under Roy\'s safety-first criterion, the investor should choose:',
          choices: ['Portfolio X', 'Portfolio Y', 'Either — the ratios are equal'],
          answer: 1,
          explain: 'SFRatio_X = (10 − 3)/15 = 0.467. SFRatio_Y = (8 − 3)/9 = 0.556. Portfolio Y has the higher ratio and therefore the lower probability of falling short of the 3% threshold.',
          why: [
            'A is wrong — X has the higher expected return but its extra volatility more than offsets it relative to the threshold.',
            'C is wrong because 0.467 ≠ 0.556.',
          ],
        },
        {
          id: 'q-qm-032', difficulty: 'hard',
          vignette: 'Historically, 20% of companies in a sector experience a credit downgrade in a given year. A screening model flags 70% of companies that will be downgraded, and also flags 10% of companies that will not be downgraded.',
          stem: 'Given that a company has been flagged, the probability it will actually be downgraded is closest to:',
          choices: ['70%', '64%', '14%'],
          answer: 1,
          explain: 'P(flag) = (0.70)(0.20) + (0.10)(0.80) = 0.14 + 0.08 = 0.22. By Bayes, P(downgrade | flag) = 0.14 / 0.22 = 63.6%, or about 64%.',
          why: [
            'A (70%) is P(flag | downgrade) — the conditional probability stated in the question, read backwards.',
            'C (14%) is the joint probability P(flag and downgrade), which has not been divided by the unconditional probability of a flag.',
          ],
        },
        {
          id: 'q-qm-033', difficulty: 'expert',
          stem: 'Two assets each have a standard deviation of 25%. As their correlation falls from +1.0 to −1.0, the standard deviation of an equally weighted portfolio of the two:',
          choices: [
            'falls from 25% to 0%.',
            'falls from 25% to 12.5%.',
            'remains at 25%, because the weights are unchanged.',
          ],
          answer: 0,
          explain: 'At ρ = +1, σ_p equals the weighted average, 25%. At ρ = −1 with equal weights and equal volatilities the terms cancel exactly: σ² = 0.25(625) + 0.25(625) − 2(0.5)(0.5)(625) = 156.25 + 156.25 − 312.5 = 0. A perfectly hedged position results.',
          why: [
            'B describes the halving of *variance*-like intuition rather than the actual calculation; at ρ = 0, σ_p would be 17.7%, and at ρ = −1 it reaches zero.',
            'C ignores the covariance term entirely — the very term that makes diversification work.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'quant-inference',
      name: 'Sampling, Estimation and Hypothesis Testing',
      los: [
        'Explain the central limit theorem and its importance for inference',
        'Calculate and interpret the standard error of the sample mean and confidence intervals',
        'Explain the steps of hypothesis testing and the meaning of Type I and Type II errors',
        'Identify the appropriate test statistic for tests of means, variances and correlation',
      ],
      lessons: [
        {
          id: 'quant-inference-l1',
          title: 'From sample to conclusion',
          minutes: 10,
          blocks: [
            { t: 'h', x: 'The central limit theorem' },
            { t: 'p', x: 'For a sufficiently large sample (conventionally **n ≥ 30**), the distribution of the *sample mean* is approximately normal — regardless of the shape of the underlying population. This is why normal-based inference works on messy financial data.' },
            {
              t: 'formula', name: 'Standard error of the sample mean',
              x: 'σ_X̄ = σ / √n         (population σ known)\ns_X̄  = s / √n         (population σ unknown)',
            },
            { t: 'p', x: 'Note the √n: to halve the standard error you need **four times** the data. Precision is expensive.' },
            {
              t: 'formula', name: 'Confidence interval for the mean',
              x: 'X̄ ± (critical value) × (standard error)\n\n90%: z = 1.645   |   95%: z = 1.96   |   99%: z = 2.58',
            },
            { t: 'h', x: 'Which test statistic?' },
            {
              t: 'table',
              head: ['Situation', 'Test statistic'],
              rows: [
                ['Mean; σ known; normal population', 'z-test'],
                ['Mean; σ unknown', 't-test (n − 1 degrees of freedom)'],
                ['Mean; σ unknown but n large', 't-test acceptable; z is an approximation'],
                ['Difference of two means (independent, equal variance)', 'Pooled t-test'],
                ['Single population variance', 'Chi-square test'],
                ['Equality of two variances', 'F-test'],
              ],
            },
            {
              t: 'callout', label: 'Default to t',
              x: 'In practice the population standard deviation is almost never known, so the t-test is the everyday answer. The t-distribution has fatter tails than the normal and converges to it as degrees of freedom rise.',
            },
            { t: 'h', x: 'The logic of a hypothesis test' },
            {
              t: 'ol',
              x: [
                'State H₀ (the hypothesis you try to reject, always containing the equality) and H_a.',
                'Choose the test statistic and the significance level α.',
                'Compute the statistic; compare to the critical value (or compare the p-value to α).',
                'Reject or fail to reject H₀ — and state the economic, not just statistical, conclusion.',
              ],
            },
            {
              t: 'table',
              head: ['', 'H₀ is true', 'H₀ is false'],
              rows: [
                ['Reject H₀', '**Type I error** (probability = α)', 'Correct — power = 1 − β'],
                ['Fail to reject H₀', 'Correct', '**Type II error** (probability = β)'],
              ],
            },
            {
              t: 'callout', label: 'The trade-off', kind: 'warn',
              x: 'Lowering α reduces Type I error but *raises* β, reducing power. The only way to reduce both simultaneously is a larger sample. Also remember: we never "accept" H₀ — we fail to reject it.',
            },
            { t: 'p', x: 'The **p-value** is the smallest significance level at which H₀ can be rejected. If p < α, reject.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-q-40', name: 'Standard error of the mean', expr: 's_X̄ = s / √n', note: 'Quadrupling n halves the standard error.' },
        { id: 'f-q-41', name: 'Confidence interval', expr: 'X̄ ± critical value × s/√n', note: 'z = 1.645 / 1.96 / 2.58 for 90% / 95% / 99%.' },
        { id: 'f-q-42', name: 't-statistic for a mean', expr: 't = (X̄ − μ₀) / (s/√n),  df = n − 1', note: 'Use when the population σ is unknown.' },
        { id: 'f-q-43', name: 'Power of a test', expr: 'Power = 1 − β', note: 'Probability of correctly rejecting a false H₀.' },
      ],
      cards: [
        { id: 'c-q-40', front: 'Central limit theorem, in one line', back: 'For n ≥ 30, the sample mean is approximately normally distributed whatever the population distribution.' },
        { id: 'c-q-41', front: 'Type I vs Type II error', back: 'Type I = rejecting a true H₀ (probability α, a "false positive"). Type II = failing to reject a false H₀ (probability β).' },
        { id: 'c-q-42', front: 'What is a p-value?', back: 'The smallest significance level at which the null can be rejected. Reject H₀ when p < α.' },
        { id: 'c-q-43', front: 'z or t?', back: 'z when σ is known; t when σ is unknown (the usual case). t has fatter tails and approaches z as df rise.' },
        { id: 'c-q-44', front: 'How do you reduce both Type I and Type II error?', back: 'Increase the sample size. Changing α alone always trades one against the other.' },
      ],
      questions: [
        {
          id: 'q-qm-040', difficulty: 'easy',
          stem: 'A sample of 100 observations has a standard deviation of 20. The standard error of the sample mean is closest to:',
          choices: ['0.20', '2.00', '20.0'],
          answer: 1,
          explain: 's_X̄ = s/√n = 20/√100 = 20/10 = 2.00.',
          why: [
            'A (0.20) divides by n rather than by √n.',
            'C (20.0) is the sample standard deviation itself, which describes individual observations, not the precision of the mean.',
          ],
        },
        {
          id: 'q-qm-041', difficulty: 'medium',
          stem: 'An analyst rejects a null hypothesis that is in fact true. This is best described as:',
          choices: ['a Type I error, with probability equal to the significance level', 'a Type II error, with probability β', 'a correct decision with power 1 − β'],
          answer: 0,
          explain: 'Rejecting a true null is a false positive — a Type I error — and its probability is exactly the significance level α that the analyst chose.',
          why: [
            'B describes the opposite failure: failing to reject a null that is false.',
            'C describes correctly rejecting a *false* null.',
          ],
        },
        {
          id: 'q-qm-042', difficulty: 'medium',
          stem: 'A sample of 36 monthly returns has a mean of 1.2% and a standard deviation of 3.0%. The 95% confidence interval for the population mean is closest to:',
          choices: ['1.2% ± 0.98%', '1.2% ± 0.50%', '1.2% ± 5.88%'],
          answer: 0,
          explain: 'Standard error = 3.0/√36 = 0.5%. With z = 1.96, the interval is 1.2% ± 1.96(0.5%) = 1.2% ± 0.98%.',
          why: [
            'B uses the standard error alone without multiplying by the critical value.',
            'C multiplies the critical value by the sample standard deviation instead of the standard error, ignoring the benefit of sample size.',
          ],
        },
        {
          id: 'q-qm-043', difficulty: 'hard',
          stem: 'An analyst tests whether a fund\'s mean return differs from zero using a sample of 25 monthly returns, with the population standard deviation unknown. The appropriate test statistic and degrees of freedom are:',
          choices: ['z-statistic; not applicable', 't-statistic; 24 degrees of freedom', 't-statistic; 25 degrees of freedom'],
          answer: 1,
          explain: 'With an unknown population standard deviation, the t-test applies, and degrees of freedom for a single-mean test are n − 1 = 24.',
          why: [
            'A would require the population standard deviation to be known; with n = 25 the normal approximation is also weak.',
            'C uses n rather than n − 1. One degree of freedom is consumed estimating the sample mean.',
          ],
        },
        {
          id: 'q-qm-044', difficulty: 'expert',
          stem: 'An analyst reduces the significance level of a test from 5% to 1% while holding the sample size constant. Which outcome is most likely?',
          choices: [
            'Both Type I and Type II error probabilities decrease.',
            'The probability of a Type II error increases and the power of the test decreases.',
            'The power of the test increases because the test has become more rigorous.',
          ],
          answer: 1,
          explain: 'A smaller α shrinks the rejection region, so a true null is rejected less often — but so is a false one. β rises and power (1 − β) falls. Only a larger sample improves both simultaneously.',
          why: [
            'A is impossible while n is fixed; the two errors trade off against each other.',
            'C confuses rigour with power. A stricter threshold makes rejection harder, which by definition reduces the chance of rejecting a false null.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'quant-regression',
      name: 'Simple Linear Regression and Big Data',
      los: [
        'Describe a simple linear regression model and interpret its coefficients',
        'Explain the assumptions underlying linear regression',
        'Calculate and interpret the coefficient of determination and the F-statistic',
        'Describe applications of machine learning and big data in investment management',
      ],
      lessons: [
        {
          id: 'quant-regression-l1',
          title: 'Fitting and judging a line',
          minutes: 8,
          blocks: [
            {
              t: 'formula', name: 'Simple linear regression',
              x: 'Yᵢ = b₀ + b₁Xᵢ + εᵢ\n\nb₁ = Cov(X,Y) / Var(X)\nb₀ = Ȳ − b₁X̄',
            },
            { t: 'p', x: 'Ordinary least squares chooses b₀ and b₁ to minimise the **sum of squared residuals**. The slope tells you the change in Y for a one-unit change in X; the intercept is the fitted value of Y when X is zero — which is often economically meaningless, and that is fine.' },
            { t: 'h', x: 'The four assumptions' },
            {
              t: 'ol',
              x: [
                '**Linearity** — the relationship between X and Y is genuinely linear in the parameters.',
                '**Homoskedasticity** — the variance of the residuals is constant across observations.',
                '**Independence** — residuals are uncorrelated with each other (violated by serial correlation in time series).',
                '**Normality** — residuals are normally distributed, which underpins the t- and F-tests.',
              ],
            },
            { t: 'h', x: 'Goodness of fit' },
            {
              t: 'formula', name: 'Decomposition and R²',
              x: 'SST = SSR + SSE\n  SST = total variation in Y\n  SSR = variation explained by the regression\n  SSE = unexplained (residual) variation\n\nR² = SSR / SST\n\nIn a simple linear regression, R² = ρ² (the squared correlation).',
            },
            { t: 'p', x: 'The **F-statistic** tests whether the slope coefficients are jointly zero. In a simple regression with one independent variable, the F-test and the t-test on the slope give identical conclusions, and F = t².' },
            {
              t: 'callout', label: 'Interpretation discipline', kind: 'warn',
              x: 'A high R² says the line fits the sample well. It does not say the model is correctly specified, that the relationship is causal, or that it will hold out of sample.',
            },
            { t: 'h', x: 'Big data and machine learning' },
            {
              t: 'ul',
              x: [
                '**Supervised learning** — the data are labelled; the algorithm learns a mapping to a known target (e.g. predicting defaults).',
                '**Unsupervised learning** — no labels; the algorithm finds structure, such as clustering securities by behaviour.',
                '**Deep learning** — layered neural networks for complex pattern recognition, e.g. image or language data.',
                '**Overfitting** is the central danger: a model that memorises noise performs superbly in-sample and badly out-of-sample. It is controlled by holding out validation and test data.',
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-q-50', name: 'Regression slope', expr: 'b₁ = Cov(X,Y) / Var(X)', note: 'Intercept then follows as b₀ = Ȳ − b₁X̄.' },
        { id: 'f-q-51', name: 'Coefficient of determination', expr: 'R² = SSR / SST = 1 − SSE/SST', note: 'In simple regression, R² equals the squared correlation.' },
        { id: 'f-q-52', name: 'Sum of squares identity', expr: 'SST = SSR + SSE', note: 'Total = explained + unexplained variation.' },
      ],
      cards: [
        { id: 'c-q-50', front: 'Four regression assumptions', back: 'Linearity, homoskedasticity, independence of residuals, normality of residuals.' },
        { id: 'c-q-51', front: 'R² in a simple linear regression', back: 'R² = SSR/SST, and equals the square of the correlation between X and Y.' },
        { id: 'c-q-52', front: 'Supervised vs unsupervised learning', back: 'Supervised uses labelled target data; unsupervised finds structure in unlabelled data (e.g. clustering).' },
        { id: 'c-q-53', front: 'Overfitting', back: 'A model fits in-sample noise, so it performs well in training and poorly out of sample. Controlled with validation/test splits.' },
      ],
      questions: [
        {
          id: 'q-qm-050', difficulty: 'easy',
          stem: 'In a simple linear regression, the total sum of squares (SST) equals 400 and the sum of squared errors (SSE) equals 100. The coefficient of determination is closest to:',
          choices: ['0.25', '0.75', '4.00'],
          answer: 1,
          explain: 'SSR = SST − SSE = 400 − 100 = 300, so R² = SSR/SST = 300/400 = 0.75. The regression explains 75% of the variation in Y.',
          why: [
            'A (0.25) is SSE/SST — the proportion of variation left *unexplained*.',
            'C (4.00) divides SST by SSE, which is not a defined goodness-of-fit measure and cannot exceed 1 as an R².',
          ],
        },
        {
          id: 'q-qm-051', difficulty: 'medium',
          stem: 'The assumption that the variance of the regression residuals is constant across all observations is known as:',
          choices: ['independence', 'homoskedasticity', 'linearity'],
          answer: 1,
          explain: 'Homoskedasticity is constant residual variance. Its violation, heteroskedasticity, leaves coefficient estimates unbiased but makes the standard errors — and therefore the t-tests — unreliable.',
          why: [
            'A concerns residuals being uncorrelated with each other, violated by serial correlation.',
            'C concerns the functional form of the relationship, not the spread of the errors.',
          ],
        },
        {
          id: 'q-qm-052', difficulty: 'hard',
          stem: 'An analyst estimates a simple linear regression and finds a correlation of −0.60 between X and Y. The coefficient of determination is:',
          choices: ['−0.36', '0.36', '0.60'],
          answer: 1,
          explain: 'In a simple regression R² = ρ² = (−0.60)² = 0.36. Squaring removes the sign, so 36% of the variation in Y is explained regardless of the direction of the relationship.',
          why: [
            'A is impossible — R² is a proportion of variation explained and cannot be negative.',
            'C is the absolute value of the correlation, not its square.',
          ],
        },
        {
          id: 'q-qm-053', difficulty: 'expert',
          stem: 'A machine learning model achieves 98% accuracy on its training data but 54% on a held-out test set. This pattern most likely indicates:',
          choices: [
            'underfitting, requiring a more complex model.',
            'overfitting, in which the model has learned noise specific to the training sample.',
            'a labelling error, since supervised models should perform equally on both sets.',
          ],
          answer: 1,
          explain: 'A large gap between in-sample and out-of-sample performance is the signature of overfitting: the model has captured idiosyncratic noise that does not generalise. Remedies include simplifying the model, regularisation, and cross-validation.',
          why: [
            'A describes the opposite symptom — underfitting shows poor performance on *both* training and test data.',
            'C is wrong because a performance gap between training and test sets is expected to some degree; the size of the gap here points to overfitting, not corrupted labels.',
          ],
        },
      ],
    },
  ],
};
