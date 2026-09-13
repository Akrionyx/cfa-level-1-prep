// Corporate Issuers — starter depth. Original wording throughout.

export default {
  id: 'corporate',
  name: 'Corporate Issuers',
  short: 'Corporate',
  weight: '6–9%',
  weightMid: 7.5,
  depth: 'starter',
  summary:
    'How firms are owned and governed, how they choose investments, and what their capital costs. Small weight, but the cost of capital and leverage material reappears throughout equity and portfolio management.',
  modules: [
    {
      id: 'corp-governance',
      name: 'Organisational Forms, Governance and Stakeholders',
      los: [
        'Compare the organisational forms of businesses and their features',
        'Describe conflicts of interest between stakeholder groups',
        'Describe corporate governance mechanisms and their effectiveness',
        'Describe environmental, social and governance considerations in investment analysis',
      ],
      lessons: [
        {
          id: 'corp-governance-l1',
          title: 'Who owns, who controls, who conflicts',
          minutes: 7,
          blocks: [
            {
              t: 'table',
              head: ['Form', 'Liability', 'Capital access', 'Taxation'],
              rows: [
                ['Sole proprietorship', 'Unlimited', 'Very limited', 'Owner\'s personal income'],
                ['Partnership', 'Unlimited (general partners)', 'Limited', 'Flows through to partners'],
                ['Limited company / corporation', 'Limited to investment', 'Broad — public markets', 'Entity level (often double taxed)'],
              ],
            },
            { t: 'p', x: 'The corporate form\'s defining advantage is the separation of ownership from management, which unlocks large-scale capital. Its defining problem is the same separation, which creates the **principal–agent** relationship.' },
            { t: 'h', x: 'The conflicts that matter' },
            {
              t: 'ul',
              x: [
                '**Shareholders vs management** — managers may prefer empire-building, perks, or excessive job security over value creation.',
                '**Shareholders vs creditors** — shareholders hold a call-option-like claim, so they gain from risk-taking whose downside falls on lenders. Creditors respond with covenants.',
                '**Controlling vs minority shareholders** — dual-class shares and related-party transactions let controllers extract value from minorities.',
              ],
            },
            {
              t: 'callout', label: 'Governance in one sentence',
              x: 'Governance is the set of mechanisms — board independence, audit committees, aligned remuneration, shareholder voting rights, disclosure — that restrains those conflicts. Its absence tends to show up in valuation long before it shows up in a scandal.',
            },
            { t: 'p', x: '**ESG integration** brings environmental, social and governance factors into analysis as sources of financial risk and return, not as ethical overlay. Common approaches include negative screening, positive/best-in-class screening, thematic investing, and engagement.' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-c-1', front: 'Principal–agent problem in a corporation', back: 'Managers (agents) may pursue their own interests instead of shareholders\' (principals\'), a consequence of separating ownership from control.' },
        { id: 'c-c-2', front: 'Why do shareholder and creditor interests diverge?', back: 'Equity resembles a call option: shareholders capture the upside of risk while creditors bear the downside — hence covenants.' },
        { id: 'c-c-3', front: 'Main ESG implementation approaches', back: 'Negative screening, positive/best-in-class screening, thematic investing, engagement/active ownership.' },
      ],
      questions: [
        {
          id: 'q-co-001', difficulty: 'easy',
          stem: 'The separation of ownership and control in a corporation most directly gives rise to:',
          choices: ['double taxation of profits', 'the principal–agent problem', 'unlimited shareholder liability'],
          answer: 1,
          explain: 'When owners delegate decisions to managers, the managers\' incentives need not align with the owners\'. That misalignment is the principal–agent problem, and corporate governance exists to contain it.',
          why: [
            'A is a tax consequence of the corporate form, not a consequence of separating ownership from control.',
            'C is the opposite of a corporation\'s defining feature — shareholder liability is limited.',
          ],
        },
        {
          id: 'q-co-002', difficulty: 'medium',
          stem: 'A company undertakes a highly risky project financed by existing debt. This decision most likely:',
          choices: [
            'benefits shareholders at the expense of creditors',
            'benefits creditors at the expense of shareholders',
            'affects both groups identically, since both hold claims on the same assets',
          ],
          answer: 0,
          explain: 'Shareholders capture unlimited upside but their downside is capped by limited liability. Creditors have fixed upside and bear the loss if the project fails, so raising risk after debt is issued transfers value from lenders to owners — which is why covenants exist.',
          why: [
            'B reverses the transfer. Creditors never benefit from added risk on a fixed claim.',
            'C ignores the asymmetric payoff structure of debt versus equity.',
          ],
        },
      ],
    },

    {
      id: 'corp-capital',
      name: 'Capital Investments and Allocation',
      los: [
        'Describe the capital allocation process and types of capital projects',
        'Calculate and interpret NPV and IRR and describe their relative strengths',
        'Explain the use of real options in capital allocation',
        'Describe common capital allocation pitfalls',
      ],
      lessons: [
        {
          id: 'corp-capital-l1',
          title: 'NPV beats IRR (and why)',
          minutes: 7,
          blocks: [
            {
              t: 'formula', name: 'NPV and IRR',
              x: 'NPV = Σ [ CFₜ / (1 + r)ᵗ ] − Initial outlay\n\nIRR: the discount rate at which NPV = 0',
            },
            { t: 'p', x: 'Accept a project when NPV > 0, or equivalently when IRR > the required return — the two rules agree for a single conventional project. They can disagree when ranking **mutually exclusive** projects that differ in scale or in cash-flow timing.' },
            {
              t: 'callout', label: 'When they conflict, follow NPV',
              x: 'NPV measures value added in currency and assumes reinvestment at the required rate, which is realistic. IRR is a percentage that implicitly assumes reinvestment at the IRR itself — flattering to high-IRR projects. A 60% IRR on a tiny project can add less value than a 12% IRR on a large one.',
            },
            { t: 'p', x: 'IRR has two further defects: non-conventional cash flows (sign changes) can produce **multiple IRRs** or none at all.' },
            { t: 'h', x: 'Pitfalls the exam tests' },
            {
              t: 'ul',
              x: [
                'Including **sunk costs** — money already spent is irrelevant to the decision.',
                'Ignoring **externalities** such as cannibalisation of an existing product\'s sales.',
                'Omitting **opportunity costs**, e.g. land the firm already owns still has a market value.',
                'Basing decisions on accounting income rather than incremental after-tax cash flow.',
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-c-10', name: 'Net present value', expr: 'NPV = Σ CFₜ/(1+r)ᵗ − Outlay', note: 'Accept if positive; measures value added in currency terms.' },
        { id: 'f-c-11', name: 'Internal rate of return', expr: 'The r that sets NPV = 0', note: 'Accept if IRR > required return, but defer to NPV when ranking.' },
      ],
      cards: [
        { id: 'c-c-10', front: 'When NPV and IRR rankings conflict, which wins?', back: 'NPV — it measures value added and assumes a realistic reinvestment rate.' },
        { id: 'c-c-11', front: 'Two situations where IRR misleads', back: 'Mutually exclusive projects of different scale/timing, and non-conventional cash flows producing multiple or no IRRs.' },
        { id: 'c-c-12', front: 'Are sunk costs included in project analysis?', back: 'No. Only incremental future after-tax cash flows matter. Opportunity costs and externalities *are* included.' },
      ],
      questions: [
        {
          id: 'q-co-010', difficulty: 'easy',
          stem: 'A project requires an outlay of $100,000 and generates $40,000 per year for three years. At a required return of 10%, the NPV is closest to:',
          choices: ['−$544', '$20,000', '−$5,440'],
          answer: 0,
          explain: 'PV of the annuity = 40,000 × [1 − 1.10⁻³]/0.10 = 40,000 × 2.4869 = $99,456. NPV = 99,456 − 100,000 = −$544, so the project should be rejected.',
          why: [
            'B ($20,000) sums the undiscounted cash flows, ignoring time value entirely.',
            'C misplaces a decimal — the discounted inflows fall only marginally short of the outlay.',
          ],
        },
        {
          id: 'q-co-011', difficulty: 'medium',
          stem: 'When evaluating a new product line, which cost should be excluded from the analysis?',
          choices: [
            'The market value of a warehouse the company already owns and would use',
            'A market study commissioned and paid for last year',
            'The expected reduction in sales of an existing product',
          ],
          answer: 1,
          explain: 'The market study is a sunk cost — already incurred and unrecoverable regardless of the decision, so it cannot affect it.',
          why: [
            'A is an opportunity cost and must be included; the warehouse could otherwise be sold or let.',
            'C is cannibalisation, a genuine incremental effect of the decision.',
          ],
        },
        {
          id: 'q-co-012', difficulty: 'hard',
          stem: 'Two mutually exclusive projects have positive NPVs, but Project A has the higher IRR while Project B has the higher NPV. The firm should:',
          choices: [
            'select Project A, because a higher IRR indicates greater efficiency',
            'select Project B, because NPV measures the absolute value added to the firm',
            'select neither until the projects are rescaled to equal size',
          ],
          answer: 1,
          explain: 'Shareholder wealth rises by the NPV, expressed in currency. IRR expresses a rate and implicitly assumes reinvestment at that rate, which biases it toward small, short projects. With mutually exclusive choices, take the larger NPV.',
          why: [
            'A confuses a rate of return with value created; a high percentage on a small base can add little.',
            'C is not a real option — the projects are what they are, and NPV already handles differences in scale.',
          ],
        },
      ],
    },

    {
      id: 'corp-wacc',
      name: 'Cost of Capital and Leverage',
      los: [
        'Calculate and interpret the weighted average cost of capital',
        'Calculate the cost of debt and the cost of equity using CAPM and the dividend discount approach',
        'Calculate and interpret degree of operating, financial and total leverage',
        'Calculate the breakeven quantity of sales',
      ],
      lessons: [
        {
          id: 'corp-wacc-l1',
          title: 'What capital costs, and how leverage magnifies',
          minutes: 8,
          blocks: [
            {
              t: 'formula', name: 'Weighted average cost of capital',
              x: 'WACC = w_d × r_d × (1 − t) + w_p × r_p + w_e × r_e\n\nWeights are based on **market values** and the firm\'s target capital structure,\nnot book values.',
            },
            { t: 'p', x: 'Only debt gets the (1 − t) adjustment, because interest is tax-deductible while dividends are not. That tax shield is the main reason debt looks cheap — though not the only consideration, since more debt raises the risk of both the equity and the debt.' },
            {
              t: 'formula', name: 'Cost of equity',
              x: 'CAPM:  r_e = R_f + β × (E(R_m) − R_f)\nDDM:   r_e = D₁/P₀ + g',
            },
            { t: 'h', x: 'Leverage' },
            {
              t: 'formula', name: 'Degrees of leverage',
              x: 'DOL = % change in operating income / % change in units sold\n    = Q(P − V) / [Q(P − V) − F]\n\nDFL = % change in net income / % change in operating income\n    = EBIT / (EBIT − Interest)\n\nDTL = DOL × DFL',
            },
            { t: 'p', x: '**Operating** leverage comes from fixed *operating* costs, **financial** leverage from fixed *financing* costs. Both magnify results in each direction: a firm with high total leverage turns a modest revenue decline into a severe earnings decline.' },
            {
              t: 'formula', name: 'Breakeven quantity',
              x: 'Q_BE = (Fixed operating costs + Fixed financing costs) / (P − V)\n\nOperating breakeven ignores the fixed financing costs.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-c-20', name: 'WACC', expr: 'w_d r_d(1−t) + w_p r_p + w_e r_e', note: 'Market-value weights, target capital structure. Only debt gets the tax shield.' },
        { id: 'f-c-21', name: 'CAPM cost of equity', expr: 'r_e = R_f + β(E(R_m) − R_f)', note: 'Compensation for systematic risk only.' },
        { id: 'f-c-22', name: 'Degree of operating leverage', expr: 'DOL = Q(P − V) / [Q(P − V) − F]', note: 'Rises with fixed operating costs.' },
        { id: 'f-c-23', name: 'Degree of financial leverage', expr: 'DFL = EBIT / (EBIT − Interest)', note: 'Rises with fixed interest charges.' },
        { id: 'f-c-24', name: 'Breakeven quantity', expr: 'Q_BE = (F + Fixed financing) / (P − V)', note: 'Contribution margin per unit covers fixed costs.' },
      ],
      cards: [
        { id: 'c-c-20', front: 'Which WACC component gets a tax adjustment?', back: 'Only the cost of debt, r_d(1 − t) — interest is deductible, dividends are not.' },
        { id: 'c-c-21', front: 'Which weights belong in WACC?', back: 'Market-value weights reflecting the target capital structure, not book values.' },
        { id: 'c-c-22', front: 'DOL vs DFL', back: 'DOL comes from fixed *operating* costs; DFL from fixed *financing* costs. DTL = DOL × DFL.' },
        { id: 'c-c-23', front: 'CAPM cost of equity', back: 'r_e = R_f + β(E(R_m) − R_f).' },
      ],
      questions: [
        {
          id: 'q-co-020', difficulty: 'easy',
          stem: 'A firm is financed 40% by debt and 60% by equity. Its pre-tax cost of debt is 6%, its cost of equity is 12%, and its tax rate is 25%. Its WACC is closest to:',
          choices: ['9.6%', '9.0%', '8.4%'],
          answer: 0,
          explain: 'WACC = 0.40 × 6% × (1 − 0.25) + 0.60 × 12% = 0.40 × 4.5% + 7.2% = 1.8% + 7.2% = 9.6%.',
          why: [
            'B (9.0%) omits the tax shield, using the full 6% pre-tax cost of debt.',
            'C (8.4%) applies the tax adjustment to the cost of equity as well, which is incorrect — dividends are not deductible.',
          ],
        },
        {
          id: 'q-co-021', difficulty: 'medium',
          stem: 'A company has EBIT of $5 million and interest expense of $1 million. Its degree of financial leverage is closest to:',
          choices: ['0.80', '1.25', '5.00'],
          answer: 1,
          explain: 'DFL = EBIT / (EBIT − Interest) = 5 / (5 − 1) = 1.25. A 10% change in EBIT produces a 12.5% change in net income.',
          why: [
            'A inverts the ratio.',
            'C (5.00) is EBIT divided by interest — the interest coverage ratio, a different measure.',
          ],
        },
        {
          id: 'q-co-022', difficulty: 'hard',
          stem: 'Two firms have identical revenue and operating income. Firm X has high fixed operating costs and no debt; Firm Y has low fixed operating costs and substantial debt. Compared with Firm Y, Firm X most likely has:',
          choices: [
            'higher operating leverage and lower financial leverage',
            'lower operating leverage and higher financial leverage',
            'identical total leverage, since operating income is the same',
          ],
          answer: 0,
          explain: 'Fixed operating costs drive DOL, and fixed financing costs drive DFL. Firm X\'s cost structure gives it the higher DOL, while its lack of debt gives it the lower DFL.',
          why: [
            'B reverses both relationships.',
            'C is wrong because identical operating income says nothing about the *sensitivity* of that income, which is what leverage measures.',
          ],
        },
        {
          id: 'q-co-023', difficulty: 'expert',
          stem: 'A product sells for $50 with variable costs of $30 per unit. Fixed operating costs are $200,000 and fixed financing costs are $60,000. The breakeven quantity is closest to:',
          choices: ['10,000 units', '13,000 units', '5,200 units'],
          answer: 1,
          explain: 'Contribution margin per unit = 50 − 30 = $20. Total fixed costs = 200,000 + 60,000 = $260,000. Q_BE = 260,000 / 20 = 13,000 units.',
          why: [
            'A (10,000) is the *operating* breakeven, covering only the $200,000 of fixed operating costs.',
            'C (5,200) divides total fixed costs by the selling price rather than by the contribution margin.',
          ],
        },
      ],
    },
  ],
};
