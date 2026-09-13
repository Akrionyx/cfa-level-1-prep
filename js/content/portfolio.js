// Portfolio Management — starter depth. Original wording throughout.

export default {
  id: 'portfolio',
  name: 'Portfolio Management',
  short: 'Portfolio',
  weight: '8–12%',
  weightMid: 10,
  depth: 'starter',
  summary:
    'Risk and return at the portfolio level, the CAPM, the planning process, and behavioural biases. This topic ties the whole curriculum together and is where Level II begins.',
  modules: [
    {
      id: 'pm-risk-return',
      name: 'Portfolio Risk and Return',
      los: [
        'Calculate and interpret the mean, variance and covariance of portfolio returns',
        'Describe the effect of correlation on the efficient frontier and diversification',
        'Explain the capital allocation line and the capital market line',
        'Explain systematic and non-systematic risk and the CAPM',
      ],
      lessons: [
        {
          id: 'pm-risk-return-l1',
          title: 'From diversification to the CAPM',
          minutes: 10,
          blocks: [
            {
              t: 'formula', name: 'Portfolio return and risk (two assets)',
              x: 'E(R_p) = w₁E(R₁) + w₂E(R₂)\nσ²_p   = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂',
            },
            { t: 'p', x: 'Return is a weighted average; risk is not. The correlation term means that combining imperfectly correlated assets produces a portfolio whose risk is *below* the weighted average of its parts — the only genuinely free lunch in finance.' },
            { t: 'h', x: 'The frontier and the line' },
            {
              t: 'ul',
              x: [
                'The **minimum-variance frontier** plots the lowest risk achievable at each level of expected return. Its upper half is the **efficient frontier**.',
                'Introducing a risk-free asset produces the **capital allocation line** — combinations of the risk-free asset and a risky portfolio.',
                'The optimal risky portfolio is where the CAL is steepest, i.e. where it is tangent to the efficient frontier. Under homogeneous expectations that tangency portfolio is the **market portfolio**, and the line becomes the **capital market line**.',
              ],
            },
            {
              t: 'callout', label: 'Two lines, two risk measures', kind: 'warn',
              x: 'The **CML** plots expected return against **total risk (σ)** and holds only for efficient portfolios. The **SML** plots expected return against **systematic risk (β)** and holds for every asset, efficient or not. Confusing the two is a standard exam trap.',
            },
            { t: 'h', x: 'Systematic vs non-systematic risk' },
            { t: 'p', x: 'Non-systematic (firm-specific) risk can be diversified away at essentially no cost, so the market does not compensate investors for bearing it. Only **systematic** risk — exposure to market-wide movements — earns a return. That single idea is the foundation of the CAPM.' },
            {
              t: 'formula', name: 'CAPM and beta',
              x: 'E(Rᵢ) = R_f + βᵢ [E(R_m) − R_f]\n\nβᵢ = Cov(Rᵢ, R_m) / σ²_m = ρᵢₘ σᵢ / σₘ',
            },
            { t: 'p', x: 'Beta measures sensitivity to market movements. β = 1 moves with the market; β > 1 amplifies it; β < 0 moves against it. A stock plotting **above** the SML is underpriced — it offers more return than its systematic risk warrants.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-pm-1', name: 'Portfolio variance (two assets)', expr: 'σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂', note: 'The cross term is where diversification lives.' },
        { id: 'f-pm-2', name: 'CAPM', expr: 'E(Rᵢ) = R_f + βᵢ[E(R_m) − R_f]', note: 'Only systematic risk is compensated.' },
        { id: 'f-pm-3', name: 'Beta', expr: 'βᵢ = Cov(Rᵢ,R_m)/σ²_m = ρᵢₘσᵢ/σₘ', note: 'Sensitivity to market movements.' },
        { id: 'f-pm-4', name: 'Sharpe ratio', expr: '(R_p − R_f) / σ_p', note: 'Excess return per unit of *total* risk.' },
        { id: 'f-pm-5', name: 'Treynor ratio', expr: '(R_p − R_f) / β_p', note: 'Excess return per unit of *systematic* risk.' },
        { id: 'f-pm-6', name: "Jensen's alpha", expr: 'α = R_p − [R_f + β(R_m − R_f)]', note: 'Return in excess of CAPM prediction.' },
      ],
      cards: [
        { id: 'c-pm-1', front: 'CML vs SML', back: 'CML: return vs total risk (σ), efficient portfolios only. SML: return vs systematic risk (β), every asset.' },
        { id: 'c-pm-2', front: 'Which risk is compensated by the market?', back: 'Only systematic risk. Non-systematic risk is diversifiable and earns no premium.' },
        { id: 'c-pm-3', front: 'A security plotting above the SML is', back: 'Underpriced — it offers more expected return than its beta justifies. Buy it.' },
        { id: 'c-pm-4', front: 'Sharpe vs Treynor', back: 'Sharpe divides excess return by total risk (σ); Treynor divides by systematic risk (β). Use Sharpe for a standalone portfolio, Treynor when it is one part of a diversified whole.' },
      ],
      questions: [
        {
          id: 'q-pm-001', difficulty: 'easy',
          stem: 'A stock has a beta of 1.4. The risk-free rate is 3% and the expected market return is 9%. Its required return under the CAPM is closest to:',
          choices: ['11.4%', '12.6%', '15.6%'],
          answer: 0,
          explain: 'E(R) = 3% + 1.4(9% − 3%) = 3% + 1.4(6%) = 3% + 8.4% = 11.4%.',
          why: [
            'B (12.6%) multiplies beta by the full market return rather than the market risk premium.',
            'C (15.6%) adds the risk-free rate to beta times the market return, double-counting.',
          ],
        },
        {
          id: 'q-pm-002', difficulty: 'medium',
          stem: 'Which risk does the market compensate investors for bearing?',
          choices: ['Total risk, as measured by standard deviation', 'Systematic risk, as measured by beta', 'Firm-specific risk, since it is hardest to predict'],
          answer: 1,
          explain: 'Non-systematic risk can be eliminated through diversification at negligible cost, so no premium is paid for it. Only undiversifiable systematic risk earns an expected return.',
          why: [
            'A is wrong because total risk includes the diversifiable component, which is uncompensated.',
            'C is wrong precisely because firm-specific risk is diversifiable — difficulty of prediction is irrelevant.',
          ],
        },
        {
          id: 'q-pm-003', difficulty: 'hard',
          stem: 'A portfolio has a return of 14%, a standard deviation of 20% and a beta of 1.2. The risk-free rate is 4% and the market returned 11%. Jensen\'s alpha is closest to:',
          choices: ['+1.6%', '+3.0%', '−1.6%'],
          answer: 0,
          explain: 'CAPM required return = 4% + 1.2(11% − 4%) = 4% + 8.4% = 12.4%. Alpha = 14% − 12.4% = +1.6%, indicating outperformance relative to the systematic risk taken.',
          why: [
            'B (+3.0%) subtracts the market return from the portfolio return without adjusting for beta.',
            'C has the sign inverted; the portfolio exceeded its CAPM-required return.',
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
          explain: 'Sharpe uses total risk, Treynor uses systematic risk. The rankings diverge when the portfolios differ in diversification: a well-diversified portfolio has little non-systematic risk, so its σ is close to its systematic risk and its Sharpe ratio looks relatively better. A concentrated portfolio can score well on Treynor while carrying substantial uncompensated risk.',
          why: [
            'A is unnecessary — divergence between the two measures is expected, not an error.',
            'C does not follow; the ratios differ because of the risk denominator, not because of the return level alone.',
          ],
        },
      ],
    },

    {
      id: 'pm-process',
      name: 'The Portfolio Management Process and the IPS',
      los: [
        'Describe the steps of the portfolio management process',
        'Describe the elements of an investment policy statement',
        'Distinguish return objectives, risk tolerance and the major constraints',
        'Describe the roles of asset allocation in the investment process',
      ],
      lessons: [
        {
          id: 'pm-process-l1',
          title: 'Writing down the plan before the market tests it',
          minutes: 7,
          blocks: [
            {
              t: 'ol',
              x: [
                '**Planning** — understand the client, write the IPS, form capital market expectations, set the strategic asset allocation.',
                '**Execution** — construct the portfolio, select securities, implement efficiently.',
                '**Feedback** — monitor, rebalance, evaluate performance against the stated benchmark.',
              ],
            },
            { t: 'h', x: 'Inside the IPS' },
            { t: 'p', x: 'Objectives split into **return** requirements and **risk tolerance**, where risk tolerance combines *ability* to bear risk (time horizon, wealth, liquidity needs, income stability) and *willingness* (psychological disposition).' },
            {
              t: 'callout', label: 'When ability and willingness conflict',
              x: 'The conservative position governs — you build to the lower of the two — and the adviser should educate the client about the mismatch. Never resolve the conflict by simply adopting the higher figure.',
            },
            { t: 'p', x: 'Constraints are remembered as **RRTTLL**: Risk, Return, Time horizon, Taxes, Liquidity, Legal/regulatory, plus Unique circumstances.' },
            { t: 'h', x: 'Why asset allocation dominates' },
            { t: 'p', x: 'The strategic asset allocation — the long-run mix across asset classes — explains the large majority of the variability in a portfolio\'s returns over time. Security selection and market timing matter far less than the allocation decision, which is why the IPS spends most of its attention there.' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-pm-10', front: 'Three steps of the portfolio management process', back: 'Planning (IPS, expectations, strategic allocation) → Execution (construction, implementation) → Feedback (monitor, rebalance, evaluate).' },
        { id: 'c-pm-11', front: 'Ability vs willingness to take risk', back: 'Ability = objective capacity (horizon, wealth, liquidity needs). Willingness = psychological disposition. When they conflict, adopt the more conservative and educate the client.' },
        { id: 'c-pm-12', front: 'IPS constraints mnemonic', back: 'Time horizon, Taxes, Liquidity, Legal/regulatory, Unique circumstances — alongside the risk and return objectives.' },
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
          explain: 'Her long horizon, stable income and asset base give her a high objective *ability* to bear risk, while her stated discomfort indicates low *willingness*. The portfolio should be built to the more conservative of the two, with education about the trade-off.',
          why: [
            'B inverts both assessments.',
            'C ignores her explicitly stated discomfort with volatility.',
          ],
        },
        {
          id: 'q-pm-011', difficulty: 'medium',
          stem: 'Which element of the portfolio management process explains the largest share of the variability in a portfolio\'s returns over time?',
          choices: ['Security selection', 'Strategic asset allocation', 'Tactical market timing'],
          answer: 1,
          explain: 'The long-run mix across asset classes drives the large majority of return variability. Selection and timing operate within that mix and contribute far less.',
          why: [
            'A and C both matter at the margin but are dominated by the allocation decision — which is why the IPS focuses on it.',
          ],
        },
      ],
    },

    {
      id: 'pm-behavioural',
      name: 'Behavioural Biases and Fintech',
      los: [
        'Contrast cognitive errors and emotional biases',
        'Describe common behavioural biases and their effects on investment decisions',
        'Describe applications of fintech to investment management',
        'Describe risk management and the risk governance framework',
      ],
      lessons: [
        {
          id: 'pm-behavioural-l1',
          title: 'The predictable ways investors go wrong',
          minutes: 7,
          blocks: [
            {
              t: 'table',
              head: ['Type', 'Nature', 'Remedy'],
              rows: [
                ['Cognitive error', 'Faulty reasoning or information processing', 'Can often be corrected with education and better data'],
                ['Emotional bias', 'Arises from feeling and impulse', 'Harder to correct; usually accommodated rather than removed'],
              ],
            },
            {
              t: 'ul',
              x: [
                '**Confirmation bias** (cognitive) — seeking evidence that supports an existing view.',
                '**Anchoring** (cognitive) — over-weighting an initial reference point, such as a purchase price.',
                '**Representativeness** (cognitive) — judging by resemblance to a stereotype, ignoring base rates.',
                '**Loss aversion** (emotional) — losses hurt more than equivalent gains please, producing the disposition effect: selling winners too early and holding losers too long.',
                '**Overconfidence** (emotional) — overestimating the precision of one\'s own judgement, which drives excessive trading.',
                '**Status quo / endowment** (emotional) — preferring what is already held, leaving portfolios unrebalanced.',
              ],
            },
            {
              t: 'callout', label: 'Why the distinction matters',
              x: 'The classification is not academic. Cognitive errors can be reduced by better information and process. Emotional biases usually cannot, so a good adviser designs *around* them — which is often the difference between a plan a client follows and one they abandon.',
            },
            { t: 'h', x: 'Fintech' },
            { t: 'p', x: 'Applications include robo-advisers for low-cost allocation, algorithmic and high-frequency trading, natural language processing on filings and news, and distributed ledger technology for settlement. All share one analytical caution: more data does not mean more signal, and models trained on abundant data overfit unless validated properly.' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-pm-20', front: 'Cognitive error vs emotional bias', back: 'Cognitive = faulty reasoning, correctable with education. Emotional = impulse-driven, usually accommodated rather than corrected.' },
        { id: 'c-pm-21', front: 'Disposition effect', back: 'Selling winners too early and holding losers too long — a consequence of loss aversion.' },
        { id: 'c-pm-22', front: 'Main behavioural consequence of overconfidence', back: 'Excessive trading and under-diversification, from overestimating the precision of one\'s own forecasts.' },
      ],
      questions: [
        {
          id: 'q-pm-020', difficulty: 'easy',
          stem: 'An investor refuses to sell a losing position because she "does not want to make the loss real", while quickly selling positions showing small gains. This behaviour best illustrates:',
          choices: ['confirmation bias', 'loss aversion and the disposition effect', 'anchoring'],
          answer: 1,
          explain: 'Loss aversion makes realised losses disproportionately painful, producing the disposition effect: holding losers in hope of recovery while banking gains too early.',
          why: [
            'A concerns selectively seeking supporting evidence, not the decision to realise gains or losses.',
            'C concerns fixation on a reference number; it can contribute here, but the described pattern of selling behaviour is specifically the disposition effect.',
          ],
        },
        {
          id: 'q-pm-021', difficulty: 'medium',
          stem: 'An adviser determines that a client\'s bias is emotional rather than cognitive. The most appropriate response is generally to:',
          choices: [
            'correct the bias through education and better information',
            'adapt the portfolio to accommodate the bias while keeping the plan viable',
            'ignore the bias, since emotional responses do not affect long-term outcomes',
          ],
          answer: 1,
          explain: 'Emotional biases stem from feeling rather than faulty reasoning and rarely yield to information. The practical approach is to moderate rather than eliminate them — building a portfolio the client will actually stay invested in.',
          why: [
            'A is the correct approach for *cognitive* errors, which do respond to better data and process.',
            'C is wrong because emotional biases demonstrably damage long-term outcomes through panic selling and poor timing.',
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
          explain: 'Confirmation bias is an information-processing failure — a cognitive error — and responds to process discipline such as explicitly seeking disconfirming evidence or assigning someone to argue the opposing case.',
          why: [
            'B misclassifies it; the behaviour reflects faulty reasoning rather than emotional impulse.',
            'C describes judging by resemblance to a category while ignoring base rates, which is a different error.',
          ],
        },
      ],
    },
  ],
};
