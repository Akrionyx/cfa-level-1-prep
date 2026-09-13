// Portfolio Management — deep content. Original wording throughout.

export default {
  id: 'portfolio',
  name: 'Portfolio Management',
  short: 'Portfolio',
  weight: '8–12%',
  weightMid: 10,
  depth: 'deep',
  summary:
    'The portfolio perspective, risk and return, the CAPM, the planning process, behavioural biases and risk management. This topic ties the whole curriculum together — and it is where Level II begins.',
  modules: [
    /* ---------------------------------------------------------- */
    {
      id: 'pm-overview',
      name: 'Portfolio Management: An Overview',
      los: [
        'Describe the portfolio approach to investing and calculate the diversification ratio',
        'Describe the steps in the portfolio management process',
        'Describe types of investors and their distinctive characteristics and needs',
        'Describe the asset management industry and types of pooled investment vehicles',
      ],
      lessons: [
        {
          id: 'pm-overview-l1',
          title: 'Think in portfolios, not securities',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'An individual security should be judged by its contribution to the whole portfolio, not in isolation. Combining assets whose returns are not perfectly correlated reduces risk without necessarily reducing expected return.' },
            {
              t: 'formula', name: 'Diversification ratio',
              x: 'Diversification ratio = Risk of the equally weighted portfolio / Risk of a typical single security\n\nLower ratio → greater diversification benefit',
            },
            {
              t: 'callout', label: 'A warning built into the concept', kind: 'warn',
              x: 'Diversification works less well when it is needed most. In crises, correlations between risky assets tend to rise, so a portfolio that looked well diversified in calm markets can fall almost as a single asset.',
            },
            {
              t: 'ol',
              x: [
                '**Planning** — understand the client, write the investment policy statement, form capital market expectations, set the strategic asset allocation.',
                '**Execution** — analyse assets, construct the portfolio, implement trades efficiently.',
                '**Feedback** — monitor, rebalance, measure and report performance.',
              ],
            },
            { t: 'h', x: 'Types of investors' },
            {
              t: 'table',
              head: ['Investor', 'Horizon', 'Risk tolerance', 'Liquidity needs'],
              rows: [
                ['Individuals', 'Varies with age and goals', 'Varies', 'Varies'],
                ['Defined benefit pension plans', 'Long', 'High (depends on funding status and plan maturity)', 'Low (higher for mature plans)'],
                ['Endowments and foundations', 'Very long (perpetual)', 'High', 'Low'],
                ['Banks', 'Short', 'Low', 'High'],
                ['Insurance companies', 'Short (property & casualty) to long (life)', 'Low', 'High'],
                ['Sovereign wealth funds', 'Long', 'High', 'Low'],
              ],
            },
            { t: 'h', x: 'The asset management industry' },
            {
              t: 'ul',
              x: [
                '**Active vs passive** — passive strategies track indexes at low cost; fee pressure has driven a long shift toward passive.',
                '**Open-end mutual funds** — issue and redeem shares at NAV daily.',
                '**Closed-end funds** — a fixed number of shares trading on an exchange, often at a premium or discount to NAV.',
                '**Exchange-traded funds** — trade intraday; an in-kind creation and redemption process keeps prices close to NAV and can make them more tax-efficient.',
                '**Separately managed accounts**, **hedge funds** and **private equity funds** serve larger investors.',
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-pm-10', name: 'Diversification ratio', expr: 'σ(equally weighted portfolio) / σ(typical single security)', note: 'Lower values indicate more risk reduction from diversification.' },
      ],
      cards: [
        { id: 'c-pm-10', front: 'Three steps of the portfolio management process', back: 'Planning (IPS, expectations, strategic allocation) → Execution (analysis, construction, implementation) → Feedback (monitor, rebalance, evaluate).' },
        { id: 'c-pm-13', front: 'Diversification ratio', back: 'Portfolio risk divided by the risk of a typical single security. Lower = more diversification benefit.' },
        { id: 'c-pm-14', front: 'Investor with the longest horizon and high risk tolerance', back: 'Endowments and foundations (perpetual horizon), along with sovereign wealth funds.' },
        { id: 'c-pm-15', front: 'Open-end vs closed-end fund', back: 'Open-end: shares issued and redeemed at NAV. Closed-end: fixed shares traded on an exchange, possibly at a premium or discount to NAV.' },
      ],
      questions: [
        {
          id: 'q-pm-030', difficulty: 'easy',
          stem: 'Which type of investor most likely has the shortest time horizon and the greatest need for liquidity?',
          choices: ['An endowment', 'A bank', 'A sovereign wealth fund'],
          answer: 1,
          explain: 'Banks fund themselves with deposits that can be withdrawn at short notice, so they need liquid assets and have low risk tolerance.',
          why: [
            'A has a perpetual horizon and low liquidity needs.',
            'C typically invests for the long term.',
          ],
        },
        {
          id: 'q-pm-031', difficulty: 'medium',
          stem: 'The average standard deviation of the securities in a portfolio is 30%. The standard deviation of an equally weighted portfolio of those securities is 18%. The diversification ratio is closest to:',
          choices: ['0.60', '1.67', '0.40'],
          answer: 0,
          explain: 'Diversification ratio = 18% / 30% = 0.60. Diversification has reduced risk by 40% relative to a typical single holding.',
          why: [
            'B inverts the ratio.',
            'C is the proportional risk reduction, 1 − 0.60, not the ratio itself.',
          ],
        },
        {
          id: 'q-pm-032', difficulty: 'hard',
          stem: 'A closed-end fund holds assets with a net asset value of $20 per share. Its shares trade on an exchange at $17. The most likely explanation is that:',
          choices: [
            'the fund must redeem shares at $17 when investors request it',
            'closed-end fund shares trade at prices set by supply and demand and can differ from NAV',
            'the fund\'s assets are overvalued by 15%',
          ],
          answer: 1,
          explain: 'Closed-end funds do not create or redeem shares, so their market price can deviate persistently from NAV — here a 15% discount.',
          why: [
            'A describes redemption at NAV, which is a feature of open-end funds.',
            'C is not implied; discounts reflect investor demand, fees, liquidity and other factors.',
          ],
        },
        {
          id: 'q-pm-033', difficulty: 'expert',
          stem: 'A portfolio appears well diversified based on correlations measured over a calm five-year period. During a severe market crisis, its diversification benefit will most likely:',
          choices: [
            'increase, because investors seek diversified portfolios',
            'decrease, because correlations between risky assets tend to rise in crises',
            'remain unchanged, because correlations are stable over time',
          ],
          answer: 1,
          explain: 'In market stress, investors sell risky assets broadly and correlations converge toward one. Diversification benefits measured in calm periods overstate protection in a crisis.',
          why: [
            'A confuses investor preference with how assets actually co-move.',
            'C contradicts well-documented behaviour of correlations during stress.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'pm-risk-return-1',
      name: 'Portfolio Risk and Return: Part I',
      los: [
        'Calculate and interpret major return measures, including real, after-tax and leveraged returns',
        'Describe the characteristics of the major asset classes',
        'Explain risk aversion, utility theory and indifference curves',
        'Calculate and interpret the mean, variance and covariance of a two-asset portfolio',
        'Describe the minimum-variance and efficient frontiers, the capital allocation line and selection of an optimal portfolio',
      ],
      lessons: [
        {
          id: 'pm-risk-return-1-l1',
          title: 'Returns, risk aversion and the efficient frontier',
          minutes: 11,
          blocks: [
            {
              t: 'formula', name: 'Real return',
              x: '(1 + nominal return) = (1 + real return) × (1 + inflation)\n\nReal return = (1 + nominal)/(1 + inflation) − 1',
            },
            { t: 'p', x: 'Returns are reported in many forms — gross or net of fees, pre- or after-tax, nominal or real, arithmetic or geometric. Historically, small-cap equities have produced the highest returns with the highest volatility, followed by large-cap equities, then long-term government bonds, then Treasury bills — broadly consistent with a positive relationship between risk and return.' },
            { t: 'h', x: 'Risk aversion and utility' },
            {
              t: 'formula', name: 'Utility of an investment',
              x: 'U = E(r) − ½ × A × σ²\n\nA = risk aversion coefficient\nA > 0 risk-averse; A = 0 risk-neutral; A < 0 risk-seeking',
            },
            { t: 'p', x: 'An **indifference curve** plots combinations of risk and return giving the same utility. A more risk-averse investor has **steeper** indifference curves — needing more additional return to accept extra risk. Higher curves represent higher utility.' },
            {
              t: 'formula', name: 'Two-asset portfolio',
              x: 'E(R_p) = w₁E(R₁) + w₂E(R₂)\nσ²_p   = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρ₁₂σ₁σ₂',
            },
            { t: 'p', x: 'Return is a weighted average; risk is not. The correlation term means combining imperfectly correlated assets produces risk *below* the weighted average of the parts.' },
            { t: 'h', x: 'The frontier and the line' },
            {
              t: 'ul',
              x: [
                'The **minimum-variance frontier** plots the lowest risk achievable at each level of expected return. Its upper portion, above the global minimum-variance portfolio, is the **efficient frontier**.',
                'Adding a risk-free asset creates the **capital allocation line** — combinations of the risk-free asset and a risky portfolio. The best CAL is tangent to the efficient frontier at the **optimal risky portfolio**.',
                'Each investor then chooses a point on that line where it touches their highest attainable indifference curve.',
              ],
            },
            {
              t: 'callout', label: 'Two-fund separation',
              x: 'With a risk-free asset, every investor holds the **same** optimal risky portfolio. Risk preferences affect only how much to put in it versus the risk-free asset. The investment decision and the financing decision separate.',
            },
            {
              t: 'formula', name: 'Capital allocation line',
              x: 'E(R_p) = R_f + [(E(R_i) − R_f) / σ_i] × σ_p\n\nThe slope is the Sharpe ratio of the risky portfolio.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-pm-11', name: 'Utility', expr: 'U = E(r) − ½Aσ²', note: 'Higher A means greater risk aversion.' },
        { id: 'f-pm-1', name: 'Portfolio variance (two assets)', expr: 'σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂', note: 'The cross term is where diversification lives.' },
        { id: 'f-pm-12', name: 'Real return', expr: '(1 + nominal)/(1 + inflation) − 1', note: 'Exact, not the additive approximation.' },
        { id: 'f-pm-13', name: 'Capital allocation line', expr: 'E(R_p) = R_f + [(E(R_i) − R_f)/σ_i] × σ_p', note: 'Slope equals the Sharpe ratio of the risky portfolio.' },
      ],
      cards: [
        { id: 'c-pm-30', front: 'Utility function', back: 'U = E(r) − ½Aσ². A is the risk aversion coefficient.' },
        { id: 'c-pm-31', front: 'Shape of indifference curves for a more risk-averse investor', back: 'Steeper — more extra return is needed to accept additional risk.' },
        { id: 'c-pm-32', front: 'Two-fund separation theorem', back: 'All investors hold the same optimal risky portfolio; risk aversion only determines the split between it and the risk-free asset.' },
        { id: 'c-pm-33', front: 'Efficient frontier', back: 'The part of the minimum-variance frontier above the global minimum-variance portfolio — the highest return for each level of risk.' },
      ],
      questions: [
        {
          id: 'q-pm-040', difficulty: 'easy',
          stem: 'A portfolio earns a nominal return of 7% in a year when inflation is 3%. Its real return is closest to:',
          choices: ['3.88%', '4.00%', '10.21%'],
          answer: 0,
          explain: 'Real return = 1.07/1.03 − 1 = 3.88%.',
          why: [
            'B is the additive approximation, 7% − 3%.',
            'C compounds the two rates instead of dividing.',
          ],
        },
        {
          id: 'q-pm-041', difficulty: 'medium',
          stem: 'An investor with a risk aversion coefficient of 4 evaluates a portfolio with an expected return of 10% and a standard deviation of 20%. The portfolio\'s utility is closest to:',
          choices: ['2.0%', '6.0%', '18.0%'],
          answer: 0,
          explain: 'U = 0.10 − ½ × 4 × 0.20² = 0.10 − 0.08 = 0.02, or 2.0%.',
          why: [
            'B subtracts only the variance (0.04), omitting the ½ × A multiplier.',
            'C adds the risk penalty instead of subtracting it.',
          ],
        },
        {
          id: 'q-pm-042', difficulty: 'hard',
          stem: 'A portfolio holds 60% in Asset A (σ = 20%) and 40% in Asset B (σ = 10%). The correlation between them is 0.2. The portfolio standard deviation is closest to:',
          choices: ['13.4%', '16.0%', '17.9%'],
          answer: 0,
          explain: 'σ² = 0.36(0.04) + 0.16(0.01) + 2(0.6)(0.4)(0.2)(0.20)(0.10) = 0.0144 + 0.0016 + 0.00192 = 0.01792. σ = 13.4%.',
          why: [
            'B is the weighted average of standard deviations, which holds only when correlation is 1.',
            'C is the portfolio variance expressed as a percentage, not its square root.',
          ],
        },
        {
          id: 'q-pm-001', difficulty: 'hard',
          stem: 'Two investors — one highly risk-averse, one with low risk aversion — can borrow and lend at the risk-free rate and agree on capital market expectations. According to two-fund separation, they will most likely:',
          choices: [
            'hold different risky portfolios matched to their risk tolerance',
            'hold the same optimal risky portfolio but in different proportions relative to the risk-free asset',
            'both hold only the global minimum-variance portfolio',
          ],
          answer: 1,
          explain: 'With a risk-free asset, the tangency portfolio is optimal for everyone. The more risk-averse investor combines it with more of the risk-free asset; the less risk-averse investor holds more, possibly with borrowing.',
          why: [
            'A would be true only without a risk-free asset.',
            'C ignores that the tangency portfolio offers a higher Sharpe ratio than the minimum-variance portfolio.',
          ],
        },
        {
          id: 'q-pm-043', difficulty: 'expert',
          stem: 'Compared with a less risk-averse investor, a more risk-averse investor\'s optimal portfolio on the capital allocation line will most likely be:',
          choices: [
            'further from the risk-free asset, with higher expected return',
            'closer to the risk-free asset, with lower expected return and lower risk',
            'identical, because the capital allocation line is the same for both',
          ],
          answer: 1,
          explain: 'Steeper indifference curves touch the CAL at a point with less risk. Both investors face the same line, but the more risk-averse one chooses a lower-risk position on it.',
          why: [
            'A describes the less risk-averse investor.',
            'C confuses sharing a line with choosing the same point on it.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'pm-risk-return',
      name: 'Portfolio Risk and Return: Part II',
      los: [
        'Describe systematic and non-systematic risk and explain why only systematic risk is priced',
        'Describe return-generating models, including the market model',
        'Calculate and interpret beta',
        'Explain the capital asset pricing model and the security market line',
        'Calculate and interpret the Sharpe ratio, Treynor ratio, M² and Jensen\'s alpha',
      ],
      lessons: [
        {
          id: 'pm-risk-return-l1',
          title: 'From diversification to the CAPM',
          minutes: 11,
          blocks: [
            { t: 'p', x: 'Total risk splits into **systematic** risk — exposure to market-wide movements that cannot be diversified away — and **non-systematic** (firm-specific) risk, which can be eliminated at essentially no cost. Because it can be removed freely, the market does not reward investors for bearing non-systematic risk.' },
            {
              t: 'formula', name: 'Return-generating models',
              x: 'Multi-factor: E(R_i) − R_f = β_i1 × factor₁ premium + β_i2 × factor₂ premium + …\n\nMarket model: R_i = α_i + β_i R_m + e_i',
            },
            {
              t: 'formula', name: 'CAPM and beta',
              x: 'E(Rᵢ) = R_f + βᵢ [E(R_m) − R_f]\n\nβᵢ = Cov(Rᵢ, R_m) / σ²_m = ρᵢₘ σᵢ / σₘ',
            },
            { t: 'p', x: 'Beta measures sensitivity to market movements. The CAPM assumes risk-averse, utility-maximising investors in frictionless markets with homogeneous expectations, a single holding period, divisible assets and no taxes — unrealistic, but the conclusions are robust enough to be widely used.' },
            {
              t: 'callout', label: 'CML vs SML', kind: 'warn',
              x: 'The **CML** plots expected return against **total risk (σ)** and holds only for efficient portfolios. The **SML** plots expected return against **systematic risk (β)** and holds for every asset. A security plotting **above** the SML is undervalued; below it, overvalued.',
            },
            { t: 'h', x: 'Performance measures' },
            {
              t: 'table',
              head: ['Measure', 'Formula', 'Use'],
              rows: [
                ['Sharpe ratio', '(R_p − R_f) / σ_p', 'Excess return per unit of total risk — for a standalone portfolio'],
                ['Treynor ratio', '(R_p − R_f) / β_p', 'Excess return per unit of systematic risk — for a portfolio within a diversified whole'],
                ['M²', 'R_f + Sharpe_p × σ_m', 'Portfolio return levered to market risk; compare directly with R_m'],
                ['Jensen\'s alpha', 'R_p − [R_f + β_p(R_m − R_f)]', 'Return above what the CAPM predicts for its beta'],
              ],
            },
            { t: 'p', x: 'Sharpe and M² always rank portfolios identically, because M² is a rescaling of Sharpe. Treynor and Jensen\'s alpha rank by systematic risk, so they can disagree with Sharpe when portfolios differ in diversification.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-pm-2', name: 'CAPM', expr: 'E(Rᵢ) = R_f + βᵢ[E(R_m) − R_f]', note: 'Only systematic risk is compensated.' },
        { id: 'f-pm-3', name: 'Beta', expr: 'βᵢ = Cov(Rᵢ,R_m)/σ²_m = ρᵢₘσᵢ/σₘ', note: 'Sensitivity to market movements.' },
        { id: 'f-pm-4', name: 'Sharpe ratio', expr: '(R_p − R_f) / σ_p', note: 'Excess return per unit of total risk.' },
        { id: 'f-pm-5', name: 'Treynor ratio', expr: '(R_p − R_f) / β_p', note: 'Excess return per unit of systematic risk.' },
        { id: 'f-pm-6', name: "Jensen's alpha", expr: 'α = R_p − [R_f + β(R_m − R_f)]', note: 'Return in excess of CAPM prediction.' },
        { id: 'f-pm-7', name: 'M²', expr: 'M² = R_f + Sharpe_p × σ_m', note: 'Compare with the market return; ranks identically to Sharpe.' },
      ],
      cards: [
        { id: 'c-pm-1', front: 'CML vs SML', back: 'CML: return vs total risk (σ), efficient portfolios only. SML: return vs systematic risk (β), every asset.' },
        { id: 'c-pm-2', front: 'Which risk is compensated by the market?', back: 'Only systematic risk. Non-systematic risk is diversifiable and earns no premium.' },
        { id: 'c-pm-3', front: 'A security plotting above the SML is', back: 'Undervalued — it offers more expected return than its beta justifies.' },
        { id: 'c-pm-4', front: 'Sharpe vs Treynor', back: 'Sharpe divides excess return by total risk (σ); Treynor by systematic risk (β).' },
        { id: 'c-pm-5', front: 'Which measure always ranks portfolios the same as Sharpe?', back: 'M², because it is a rescaling of the Sharpe ratio to market risk.' },
      ],
      questions: [
        {
          id: 'q-pm-002', difficulty: 'easy',
          stem: 'A stock has a beta of 1.4. The risk-free rate is 3% and the expected market return is 9%. Its required return under the CAPM is closest to:',
          choices: ['11.4%', '12.6%', '15.6%'],
          answer: 0,
          explain: 'E(R) = 3% + 1.4 × 6% = 11.4%.',
          why: [
            'B multiplies beta by the full market return.',
            'C adds the risk-free rate to beta times the market return.',
          ],
        },
        {
          id: 'q-pm-050', difficulty: 'medium',
          stem: 'A stock\'s returns have a standard deviation of 30% and a correlation of 0.6 with the market. The market\'s standard deviation is 20%. The stock\'s beta is closest to:',
          choices: ['0.90', '1.50', '0.40'],
          answer: 0,
          explain: 'β = ρ × σᵢ/σₘ = 0.6 × 30/20 = 0.90.',
          why: [
            'B omits the correlation.',
            'C inverts the volatility ratio.',
          ],
        },
        {
          id: 'q-pm-051', difficulty: 'medium',
          stem: 'Which risk does the market compensate investors for bearing?',
          choices: ['Total risk, as measured by standard deviation', 'Systematic risk, as measured by beta', 'Firm-specific risk, since it is hardest to predict'],
          answer: 1,
          explain: 'Non-systematic risk can be eliminated through diversification at negligible cost, so no premium is paid for it.',
          why: [
            'A includes the diversifiable component.',
            'C is diversifiable; difficulty of prediction is irrelevant.',
          ],
        },
        {
          id: 'q-pm-003', difficulty: 'hard',
          stem: 'A portfolio has a return of 14%, a standard deviation of 20% and a beta of 1.2. The risk-free rate is 4% and the market returned 11%. Jensen\'s alpha is closest to:',
          choices: ['+1.6%', '+3.0%', '−1.6%'],
          answer: 0,
          explain: 'CAPM return = 4% + 1.2 × 7% = 12.4%. Alpha = 14% − 12.4% = +1.6%.',
          why: [
            'B ignores beta.',
            'C has the sign inverted.',
          ],
        },
        {
          id: 'q-pm-052', difficulty: 'expert',
          vignette: 'A portfolio returned 12% with a standard deviation of 25%. The risk-free rate was 3%, and the market returned 10% with a standard deviation of 18%.',
          stem: 'The portfolio\'s M² is closest to:',
          choices: ['9.48%', '12.00%', '6.48%'],
          answer: 0,
          explain: 'Sharpe = (12 − 3)/25 = 0.36. M² = 3% + 0.36 × 18% = 9.48%. Below the market\'s 10%, so on a risk-adjusted basis the portfolio underperformed despite its higher raw return.',
          why: [
            'B is the unadjusted return.',
            'C omits the risk-free rate.',
          ],
        },
        {
          id: 'q-pm-004', difficulty: 'expert',
          stem: 'An analyst compares two portfolios. Portfolio A has a higher Sharpe ratio; Portfolio B has a higher Treynor ratio. The most likely explanation is that:',
          choices: [
            'one of the two ratios has been calculated incorrectly',
            'Portfolio A is better diversified, so less of its total risk is non-systematic',
            'Portfolio B has a lower expected return',
          ],
          answer: 1,
          explain: 'Sharpe uses total risk, Treynor systematic risk. A concentrated portfolio can look good on Treynor while carrying substantial uncompensated risk that Sharpe penalises.',
          why: [
            'A is unnecessary — divergence is expected.',
            'C does not follow from the rankings.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'pm-process',
      name: 'Basics of Portfolio Planning and Construction',
      los: [
        'Describe the reasons for and components of an investment policy statement',
        'Distinguish between willingness and ability to take risk and describe return objectives',
        'Describe investment constraints',
        'Explain the specification of asset classes and the role of strategic and tactical asset allocation',
        'Describe how ESG considerations may be integrated into portfolio planning and construction',
      ],
      lessons: [
        {
          id: 'pm-process-l1',
          title: 'Writing down the plan before the market tests it',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'An **investment policy statement (IPS)** records the client\'s objectives and constraints, the responsibilities of each party, the investment guidelines and benchmarks, and the review process. Its value is discipline: it is written when the client is calm, and followed when markets are not.' },
            { t: 'h', x: 'Objectives' },
            { t: 'p', x: '**Risk tolerance** combines *ability* to bear risk (time horizon, wealth relative to needs, income stability) and *willingness* (psychological disposition). **Return objectives** should be stated precisely — absolute or relative to a benchmark, nominal or real, before or after fees and taxes.' },
            {
              t: 'callout', label: 'When ability and willingness conflict',
              x: 'Build to the more conservative of the two, and educate the client about the mismatch. Never resolve the conflict by simply adopting the higher figure.',
            },
            {
              t: 'formula', name: 'Required return (multiplicative)',
              x: '(1 + real spending rate) × (1 + inflation) − 1\n\nSpending $50,000 a year from $1,000,000 with 2% inflation:\n(1.05)(1.02) − 1 = 7.1%',
            },
            { t: 'h', x: 'Constraints' },
            {
              t: 'ul',
              x: [
                '**Liquidity** — anticipated and unexpected cash needs.',
                '**Time horizon** — which may have multiple stages.',
                '**Tax concerns** — the tax treatment of income and capital gains.',
                '**Legal and regulatory factors** — such as prudent investor rules for trusts or pension regulation.',
                '**Unique circumstances** — ethical preferences, concentrated holdings, personal restrictions.',
              ],
            },
            { t: 'h', x: 'Asset allocation' },
            { t: 'p', x: 'Asset classes should be internally **homogeneous**, **mutually exclusive**, **diversifying** relative to one another (not highly correlated), and together should cover most of the investable universe with enough capacity to absorb the investment.' },
            { t: 'p', x: 'The **strategic asset allocation** — the long-run policy mix — explains the large majority of the variation in a portfolio\'s returns over time. **Tactical asset allocation** makes deliberate short-term deviations to exploit expected opportunities; **security selection** operates within each class. **Rebalancing** policy returns the portfolio to its targets within set ranges.' },
            { t: 'p', x: 'A **core–satellite** approach holds a passive core for efficient market exposure, surrounded by active satellites where the manager believes skill can add value. ESG considerations can be integrated through exclusions, tilts toward better-rated companies, thematic allocations or active engagement, as recorded in the IPS.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-pm-20', name: 'Required nominal return', expr: '(1 + real spending rate)(1 + inflation) − 1', note: 'Multiplicative, not additive.' },
      ],
      cards: [
        { id: 'c-pm-11', front: 'Ability vs willingness to take risk', back: 'Ability = objective capacity (horizon, wealth, liquidity needs). Willingness = psychological disposition. When they conflict, adopt the more conservative and educate.' },
        { id: 'c-pm-12', front: 'IPS constraints', back: 'Liquidity, time horizon, taxes, legal/regulatory, unique circumstances.' },
        { id: 'c-pm-34', front: 'Criteria for specifying an asset class', back: 'Homogeneous within, mutually exclusive, diversifying across classes, covering the investable universe, with sufficient capacity.' },
        { id: 'c-pm-35', front: 'Strategic vs tactical asset allocation', back: 'Strategic: the long-term policy mix. Tactical: deliberate short-term deviations from it.' },
        { id: 'c-pm-36', front: 'Core–satellite approach', back: 'A passive core for efficient exposure plus active satellites seeking to add value.' },
      ],
      questions: [
        {
          id: 'q-pm-010', difficulty: 'easy',
          stem: 'A 30-year-old investor with stable employment, significant savings and a 35-year horizon states that market volatility makes her deeply uncomfortable. Her situation is best described as:',
          choices: [
            'high ability and low willingness to take risk',
            'low ability and high willingness to take risk',
            'high ability and high willingness to take risk',
          ],
          answer: 0,
          explain: 'Her circumstances give her high objective ability, while her discomfort shows low willingness.',
          why: [
            'B inverts both assessments.',
            'C ignores her stated discomfort.',
          ],
        },
        {
          id: 'q-pm-011', difficulty: 'medium',
          stem: 'Which element of the portfolio management process explains the largest share of the variability in a portfolio\'s returns over time?',
          choices: ['Security selection', 'Strategic asset allocation', 'Tactical market timing'],
          answer: 1,
          explain: 'The long-run policy mix drives most return variability; selection and timing contribute far less.',
          why: [
            'A and C matter at the margin but are dominated by the allocation decision.',
          ],
        },
        {
          id: 'q-pm-060', difficulty: 'medium',
          stem: 'A retired client needs to withdraw $50,000 a year from a $1,000,000 portfolio and wants to maintain the portfolio\'s real value. Expected inflation is 2%. The required nominal return is closest to:',
          choices: ['7.1%', '7.0%', '5.0%'],
          answer: 0,
          explain: 'Real spending rate = 5%. Required nominal return = (1.05)(1.02) − 1 = 7.1%.',
          why: [
            'B uses the additive approximation.',
            'C ignores inflation, so the portfolio would lose purchasing power.',
          ],
        },
        {
          id: 'q-pm-061', difficulty: 'hard',
          stem: 'An adviser proposes treating "domestic large-cap equities" and "domestic large-cap growth equities" as two separate asset classes. The main problem with this specification is that the two classes:',
          choices: [
            'are not mutually exclusive and are highly correlated, so they do not provide distinct diversification',
            'are too small to have sufficient capacity',
            'cannot be benchmarked',
          ],
          answer: 0,
          explain: 'Growth stocks are a subset of large-cap equities, so the categories overlap, and their returns are highly correlated — violating the criteria of mutual exclusivity and diversification.',
          why: [
            'B is false; both are large and liquid.',
            'C is false; indexes exist for both.',
          ],
        },
        {
          id: 'q-pm-062', difficulty: 'expert',
          stem: 'A foundation\'s IPS sets a 60% equity target. After a strong market rally equities reach 68%, exceeding the permitted range. The manager believes the rally will continue and does nothing. This is best described as:',
          choices: [
            'appropriate strategic asset allocation',
            'an unauthorised tactical deviation that breaches the rebalancing policy',
            'security selection within the equity allocation',
          ],
          answer: 1,
          explain: 'The IPS rebalancing range exists precisely to prevent the portfolio drifting away from its strategic mix. Keeping the overweight based on a market view is a tactical bet made outside the policy.',
          why: [
            'A describes the long-run target, which the portfolio has departed from.',
            'C concerns choosing securities within an asset class, not the class weight.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'pm-behavioural',
      name: 'The Behavioral Biases of Individuals',
      los: [
        'Compare cognitive errors and emotional biases',
        'Describe belief perseverance biases and information processing biases',
        'Describe emotional biases and their effects on investment decisions',
        'Describe how behavioural biases may affect market behaviour',
      ],
      lessons: [
        {
          id: 'pm-behavioural-l1',
          title: 'The predictable ways investors go wrong',
          minutes: 10,
          blocks: [
            {
              t: 'table',
              head: ['Type', 'Nature', 'Remedy'],
              rows: [
                ['Cognitive error', 'Faulty reasoning, memory or information processing', 'Often corrected with education, better data and process'],
                ['Emotional bias', 'Arises from feeling, impulse or intuition', 'Harder to correct; usually accommodated rather than removed'],
              ],
            },
            { t: 'h', x: 'Cognitive errors: belief perseverance' },
            {
              t: 'ul',
              x: [
                '**Conservatism** — clinging to a prior view and underreacting to new information.',
                '**Confirmation bias** — seeking evidence that supports an existing view and dismissing the rest.',
                '**Representativeness** — judging by resemblance to a stereotype while ignoring base rates.',
                '**Illusion of control** — believing one can influence outcomes one cannot.',
                '**Hindsight bias** — seeing past events as having been predictable.',
              ],
            },
            { t: 'h', x: 'Cognitive errors: information processing' },
            {
              t: 'ul',
              x: [
                '**Anchoring and adjustment** — over-weighting an initial reference point, such as a purchase price.',
                '**Mental accounting** — treating money differently depending on its source or intended use, ignoring that it is fungible.',
                '**Framing** — deciding differently depending on how the same choice is presented.',
                '**Availability** — judging likelihood by how easily examples come to mind.',
              ],
            },
            { t: 'h', x: 'Emotional biases' },
            {
              t: 'ul',
              x: [
                '**Loss aversion** — losses hurt more than equal gains please, producing the disposition effect: selling winners too early and holding losers too long.',
                '**Overconfidence** — overestimating one\'s knowledge and forecasting ability, leading to excessive trading and under-diversification.',
                '**Self-control** — favouring short-term satisfaction over long-term goals, such as saving too little.',
                '**Status quo** — preferring to leave things as they are.',
                '**Endowment** — valuing an asset more simply because one owns it.',
                '**Regret aversion** — avoiding decisions that might later be regretted, which often leads to herding or inaction.',
              ],
            },
            {
              t: 'callout', label: 'Why the distinction matters',
              x: 'Cognitive errors can be reduced by better information and process. Emotional biases usually cannot, so a good adviser designs around them — which is often the difference between a plan a client follows and one they abandon.',
            },
            { t: 'h', x: 'Biases and markets' },
            { t: 'p', x: 'Behavioural biases may help explain momentum (herding, availability), bubbles and crashes (overconfidence, confirmation, regret aversion), and the tendency for investors to overpay for "good companies" that are not necessarily good investments (representativeness and the halo effect).' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-pm-20', front: 'Cognitive error vs emotional bias', back: 'Cognitive = faulty reasoning, correctable with education. Emotional = impulse-driven, usually accommodated.' },
        { id: 'c-pm-21', front: 'Disposition effect', back: 'Selling winners too early and holding losers too long — a consequence of loss aversion.' },
        { id: 'c-pm-22', front: 'Main behavioural consequence of overconfidence', back: 'Excessive trading and under-diversification.' },
        { id: 'c-pm-23', front: 'Mental accounting', back: 'Treating money differently by its source or purpose, ignoring that money is fungible — often leading to suboptimal portfolios.' },
        { id: 'c-pm-24', front: 'Regret aversion', back: 'Avoiding decisions that could cause regret — leads to inaction or herding with the crowd.' },
      ],
      questions: [
        {
          id: 'q-pm-020', difficulty: 'easy',
          stem: 'An investor refuses to sell a losing position because she "does not want to make the loss real", while quickly selling positions showing small gains. This behaviour best illustrates:',
          choices: ['confirmation bias', 'loss aversion and the disposition effect', 'anchoring'],
          answer: 1,
          explain: 'Loss aversion makes realised losses disproportionately painful, producing the disposition effect.',
          why: [
            'A concerns selectively seeking supporting evidence.',
            'C may contribute, but the selling pattern is specifically the disposition effect.',
          ],
        },
        {
          id: 'q-pm-070', difficulty: 'medium',
          stem: 'An investor keeps an inheritance in a low-risk savings account "because it was Grandmother\'s money", while speculating aggressively with an annual bonus. This behaviour best illustrates:',
          choices: ['mental accounting', 'overconfidence', 'hindsight bias'],
          answer: 0,
          explain: 'Treating money differently depending on its source, rather than managing total wealth as one portfolio, is mental accounting.',
          why: [
            'B concerns overestimating one\'s abilities.',
            'C concerns believing past events were predictable.',
          ],
        },
        {
          id: 'q-pm-021', difficulty: 'hard',
          stem: 'An adviser determines that a client\'s bias is emotional rather than cognitive. The most appropriate response is generally to:',
          choices: [
            'correct the bias through education and better information',
            'adapt the portfolio to accommodate the bias while keeping the plan viable',
            'ignore the bias, since emotional responses do not affect long-term outcomes',
          ],
          answer: 1,
          explain: 'Emotional biases rarely yield to information, so the practical approach is to moderate rather than eliminate them.',
          why: [
            'A suits cognitive errors.',
            'C is wrong — emotional biases damage long-term outcomes.',
          ],
        },
        {
          id: 'q-pm-022', difficulty: 'hard',
          stem: 'An analyst reviews only research that supports her existing recommendation and dismisses contradictory reports as low quality. This is best described as:',
          choices: [
            'a cognitive error that can be mitigated by a structured, disconfirming review process',
            'an emotional bias requiring portfolio accommodation',
            'representativeness bias, since she is relying on stereotypes',
          ],
          answer: 0,
          explain: 'Confirmation bias is a belief perseverance error — cognitive — and responds to process discipline.',
          why: [
            'B misclassifies it.',
            'C is a different error.',
          ],
        },
        {
          id: 'q-pm-071', difficulty: 'expert',
          stem: 'A client offered two descriptions of the same investment — "a 90% chance of keeping your capital" and "a 10% chance of losing your capital" — chooses to invest only under the first description. This best illustrates:',
          choices: ['framing bias', 'status quo bias', 'availability bias'],
          answer: 0,
          explain: 'The options are economically identical; only the presentation differs. Making a different decision because of how a choice is framed is framing bias.',
          why: [
            'B is a preference for leaving things unchanged.',
            'C concerns judging likelihood by how readily examples come to mind.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'pm-risk-mgmt',
      name: 'Introduction to Risk Management',
      los: [
        'Define risk management and describe the elements of a risk management framework',
        'Describe risk governance, risk tolerance and risk budgeting',
        'Identify financial and non-financial sources of risk and describe how they interact',
        'Describe methods for measuring and modifying risk exposures',
      ],
      lessons: [
        {
          id: 'pm-risk-mgmt-l1',
          title: 'Choosing the risks you take',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'Risk management is not about minimising risk. It is the process of **identifying** the risks an organisation faces, **deciding** which ones to take and in what amounts, and **measuring, monitoring and modifying** exposures so they stay consistent with those decisions.' },
            {
              t: 'ul',
              x: [
                '**Risk governance** — the top-down framework, set by the board, that defines risk tolerance and oversees risk management.',
                '**Risk identification and measurement**, supported by **risk infrastructure** — people, systems and data.',
                '**Policies and processes**, **monitoring and communication**, and **strategic analysis** that links risk to value creation.',
              ],
            },
            { t: 'p', x: '**Risk tolerance** is the amount of risk an organisation is willing to accept in pursuit of its goals. **Risk budgeting** allocates that total across activities, asset classes or managers — choosing where risk will be spent most productively.' },
            {
              t: 'table',
              head: ['Financial risks', 'Non-financial risks'],
              rows: [
                ['**Market risk** — prices, rates, currencies, commodities', '**Operational risk** — failed people, processes, systems or external events'],
                ['**Credit risk** — counterparty failure to pay', '**Solvency risk** — running out of cash to survive'],
                ['**Liquidity risk** — trading at an acceptable price, or funding cash needs', 'Settlement, legal, regulatory, tax, accounting, model, political/sovereign and mortality/longevity risks'],
              ],
            },
            {
              t: 'callout', label: 'Risks interact', kind: 'warn',
              x: 'A market loss can trigger margin calls (liquidity risk), which force asset sales at distressed prices (more market risk), which weaken a counterparty (credit risk). The most damaging events are usually chains of risks, not single ones.',
            },
            { t: 'h', x: 'Measuring risk' },
            {
              t: 'table',
              head: ['Measure', 'Exposure captured'],
              rows: [
                ['Standard deviation', 'Total volatility'],
                ['Beta', 'Sensitivity to the equity market'],
                ['Duration', 'Sensitivity of bonds to interest rates'],
                ['Delta, gamma, vega, rho', 'Option sensitivity to the underlying price, delta changes, volatility and interest rates'],
                ['Value at Risk (VaR)', 'Minimum loss expected with a given probability over a given period'],
                ['Conditional VaR', 'Expected loss given that the VaR threshold is exceeded'],
                ['Scenario and stress tests', 'Losses under specified extreme events'],
              ],
            },
            {
              t: 'example', title: 'Reading VaR',
              x: 'A 5% one-day VaR of $2 million means: on 5% of days, the portfolio is expected to lose **at least** $2 million. It says nothing about how much larger those losses might be — which is why conditional VaR and stress tests complement it.',
            },
            { t: 'h', x: 'Modifying risk' },
            {
              t: 'ul',
              x: [
                '**Prevention and avoidance** — not undertaking the activity, or reducing the chance of the risk occurring.',
                '**Acceptance** — retaining the risk through self-insurance or diversification.',
                '**Risk transfer** — passing the risk to another party, typically through insurance.',
                '**Risk shifting** — changing the distribution of outcomes, typically with derivatives.',
              ],
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-pm-40', front: 'Risk tolerance vs risk budgeting', back: 'Risk tolerance: how much total risk the organisation will accept. Risk budgeting: how that risk is allocated across activities.' },
        { id: 'c-pm-41', front: 'Interpretation of a 5% one-day VaR of $2m', back: 'On 5% of days, the loss is expected to be at least $2m. It does not measure how large losses beyond that could be.' },
        { id: 'c-pm-42', front: 'Risk transfer vs risk shifting', back: 'Transfer: pass the risk to another party (insurance). Shifting: change the distribution of outcomes (derivatives).' },
        { id: 'c-pm-43', front: 'Examples of non-financial risk', back: 'Operational, solvency, settlement, legal, regulatory, tax, accounting, model, political and longevity risk.' },
        { id: 'c-pm-44', front: 'Option sensitivities', back: 'Delta: underlying price. Gamma: change in delta. Vega: volatility. Rho: interest rates.' },
      ],
      questions: [
        {
          id: 'q-pm-080', difficulty: 'easy',
          stem: 'A bank suffers losses when a software failure causes duplicate payments to be sent to customers. This is best classified as:',
          choices: ['market risk', 'credit risk', 'operational risk'],
          answer: 2,
          explain: 'Losses from failed systems, processes or people are operational risk, a non-financial risk.',
          why: [
            'A concerns changes in market prices and rates.',
            'B concerns counterparties failing to meet obligations.',
          ],
        },
        {
          id: 'q-pm-081', difficulty: 'medium',
          stem: 'A portfolio has a 5% one-month Value at Risk of $3 million. The most accurate interpretation is that:',
          choices: [
            'the portfolio will lose no more than $3 million in any month',
            'there is a 5% probability of losing at least $3 million in a month',
            'the average loss in the worst 5% of months is $3 million',
          ],
          answer: 1,
          explain: 'VaR is a minimum loss threshold at a given probability: in 5% of months, losses are expected to be $3 million or more.',
          why: [
            'A misreads VaR as a maximum loss.',
            'C describes conditional VaR, the expected loss beyond the threshold.',
          ],
        },
        {
          id: 'q-pm-082', difficulty: 'hard',
          stem: 'An airline buys fuel call options to protect against rising fuel prices while retaining the benefit if prices fall. This method of modifying risk is best described as:',
          choices: ['risk transfer', 'risk shifting', 'risk avoidance'],
          answer: 1,
          explain: 'Using derivatives to change the distribution of possible outcomes — cutting off the adverse tail while keeping the favourable side — is risk shifting.',
          why: [
            'A typically refers to insurance, where another party assumes the risk of a loss event.',
            'C would mean not undertaking the activity at all.',
          ],
        },
        {
          id: 'q-pm-083', difficulty: 'expert',
          stem: 'A pension fund\'s board sets a maximum tracking error of 3% for the total portfolio, and the investment team then allocates 1.5% to active equity managers, 1% to fixed income and 0.5% to alternatives. The team\'s allocation is best described as:',
          choices: ['setting risk tolerance', 'risk budgeting', 'risk governance'],
          answer: 1,
          explain: 'The board\'s 3% limit is the risk tolerance. Dividing that total among investment activities, deciding where risk will be spent, is risk budgeting.',
          why: [
            'A is what the board did in setting the overall limit.',
            'C is the broader oversight framework within which both decisions sit.',
          ],
        },
      ],
    },
  ],
};
