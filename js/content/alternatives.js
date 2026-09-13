// Alternative Investments — deep content. Original wording throughout.

export default {
  id: 'alternatives',
  name: 'Alternative Investments',
  short: 'Alts',
  weight: '7–10%',
  weightMid: 8.5,
  depth: 'deep',
  summary:
    'Private capital, real estate and infrastructure, natural resources, hedge funds and digital assets. Largely descriptive, with reliable calculations on fees, property values and leveraged returns — which is where most of the marks are won or lost.',
  modules: [
    /* ---------------------------------------------------------- */
    {
      id: 'alt-features',
      name: 'Features, Methods and Structures',
      los: [
        'Describe the features that distinguish alternative investments from traditional investments',
        'Describe the methods of investing: fund investing, co-investing and direct investing',
        'Describe the legal structures and documentation of alternative investment funds',
        'Describe compensation structures, including carried interest, hurdle rates, catch-up and clawback, and distribution waterfalls',
      ],
      lessons: [
        {
          id: 'alt-categories-l1',
          title: 'What makes an investment "alternative"',
          minutes: 8,
          blocks: [
            {
              t: 'ul',
              x: [
                '**Illiquidity** — capital is locked up, often for years, in exchange for an expected illiquidity premium.',
                '**Limited transparency** and lighter regulation than public markets.',
                '**Higher and more complex fees**, typically including a performance element.',
                '**Difficult valuation** — infrequently traded assets are appraised, which smooths reported returns and understates measured volatility and correlation.',
                '**Specialised knowledge** is needed, and investment minimums are high.',
              ],
            },
            {
              t: 'table',
              head: ['Category', 'Contents'],
              rows: [
                ['Private capital', 'Private equity (buyout, venture capital) and private debt'],
                ['Real assets', 'Real estate, infrastructure, natural resources (commodities, farmland, timberland)'],
                ['Hedge funds', 'Equity, event-driven, relative value, macro and multi-strategy approaches'],
                ['Digital assets', 'Cryptocurrencies, tokens and other blockchain-based assets'],
              ],
            },
            {
              t: 'table',
              head: ['Method', 'Control', 'Fees', 'Expertise needed'],
              rows: [
                ['Fund investing', 'Least', 'Highest', 'Manager selection'],
                ['Co-investing (alongside a fund in a specific deal)', 'Moderate', 'Reduced', 'Deal evaluation'],
                ['Direct investing', 'Most', 'Lowest', 'Full in-house capability'],
              ],
            },
          ],
        },
        {
          id: 'alt-features-l2',
          title: 'Fund structures and how managers are paid',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'Most alternative funds are **limited partnerships**. The **general partner (GP)** manages the fund and bears unlimited liability; **limited partners (LPs)** provide capital and have liability limited to their commitment. The **limited partnership agreement** sets the terms; **side letters** give individual LPs special terms such as fee discounts or reporting rights.' },
            {
              t: 'ul',
              x: [
                '**Management fee** — typically 1%–2% a year, on committed capital during the investment period for private equity, or on assets under management for hedge funds.',
                '**Carried interest (incentive fee)** — commonly 20% of profits.',
                '**Hurdle rate** — the minimum return LPs must receive before carried interest applies.',
                '**Catch-up** — once the hurdle is met, the GP receives a larger share of subsequent profits until it has "caught up" to its full carried interest percentage.',
                '**Clawback** — requires the GP to return carried interest previously received if later losses mean it was overpaid.',
              ],
            },
            {
              t: 'table',
              head: ['Waterfall', 'When carried interest is paid', 'Favours'],
              rows: [
                ['American (deal-by-deal)', 'On each profitable deal as it exits', 'The GP'],
                ['European (whole-of-fund)', 'Only after LPs have received all contributed capital plus the hurdle', 'The LPs'],
              ],
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-al-1', front: 'Why do private asset returns appear low-volatility?', back: 'Appraisal-based valuations smooth reported returns, understating true volatility and correlation.' },
        { id: 'c-al-2', front: 'Three methods of investing in alternatives', back: 'Fund investing (least control, highest fees), co-investing, direct investing (most control, most expertise).' },
        { id: 'c-al-4', front: 'Clawback provision', back: 'Requires the GP to return carried interest it received if later fund performance shows it was overpaid.' },
        { id: 'c-al-5', front: 'American vs European waterfall', back: 'American (deal-by-deal) pays carry per profitable deal — favours GP. European (whole-of-fund) pays carry only after LPs recover capital plus hurdle — favours LPs.' },
        { id: 'c-al-6', front: 'Catch-up clause', back: 'After the hurdle is met, the GP receives a disproportionate share of profits until it reaches its full carried interest percentage.' },
      ],
      questions: [
        {
          id: 'q-al-001', difficulty: 'easy',
          stem: 'Which feature most clearly distinguishes alternative investments from traditional investments?',
          choices: ['They always produce higher returns', 'They typically involve illiquidity and less frequent, appraisal-based valuation', 'They are more heavily regulated'],
          answer: 1,
          explain: 'Long lock-ups and infrequent, appraisal-based valuation are defining structural features.',
          why: [
            'A is a hope, not a characteristic.',
            'C reverses reality — alternatives are generally less regulated.',
          ],
        },
        {
          id: 'q-al-002', difficulty: 'medium',
          stem: 'An investor participating in a specific deal alongside a private equity fund, typically with reduced fees, is engaging in:',
          choices: ['fund investing', 'co-investing', 'direct investing'],
          answer: 1,
          explain: 'The GP sources and leads the deal while the investor takes additional direct exposure on better fee terms.',
          why: [
            'A commits capital to a blind pool.',
            'C means sourcing and executing the transaction independently.',
          ],
        },
        {
          id: 'q-al-003', difficulty: 'hard',
          stem: 'A private equity fund\'s first deal exits with a large gain, but later deals lose money. Which distribution waterfall is most favourable to the limited partners?',
          choices: ['American (deal-by-deal) waterfall', 'European (whole-of-fund) waterfall', 'Both are equally favourable'],
          answer: 1,
          explain: 'Under a whole-of-fund waterfall, the GP earns carried interest only after LPs recover all contributed capital plus the hurdle across the entire fund. Early gains cannot generate carry that later losses would make undeserved.',
          why: [
            'A pays carry on the first successful deal regardless of later losses — favourable to the GP.',
            'C ignores the difference in timing of carried interest.',
          ],
        },
        {
          id: 'q-al-004', difficulty: 'expert',
          stem: 'A GP received carried interest from early exits under a deal-by-deal waterfall. At the end of the fund\'s life, total returns fall below the hurdle. The provision that protects LPs in this situation is:',
          choices: ['a catch-up clause', 'a clawback provision', 'a high-water mark'],
          answer: 1,
          explain: 'A clawback requires the GP to return carried interest that, measured over the whole fund, it was not entitled to.',
          why: [
            'A increases the GP\'s share of profits after the hurdle is met — it works in the GP\'s favour.',
            'C is a hedge fund mechanism preventing incentive fees until previous losses are recovered.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'alt-performance',
      name: 'Performance, Returns and Fees',
      los: [
        'Describe the performance appraisal of alternative investments and the J-curve',
        'Calculate and interpret returns, including multiple of invested capital',
        'Calculate the effect of leverage on returns',
        'Calculate management fees, incentive fees and net returns, including hurdle rates and high-water marks',
        'Describe biases in reported alternative investment performance',
      ],
      lessons: [
        {
          id: 'alt-hedge-fees-l1',
          title: 'Measuring returns honestly',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'Private funds call capital gradually, invest it over several years, and return it only when investments are sold. Early on, fees and costs exceed realised gains, so returns are negative before turning positive — the **J-curve**. Judging a young fund on its early returns is therefore misleading.' },
            {
              t: 'formula', name: 'Private fund return measures',
              x: 'Multiple of invested capital (MOIC) = (Realised value + Unrealised value) / Invested capital\n\nIRR: the discount rate setting the NPV of all capital calls and distributions to zero',
            },
            { t: 'p', x: 'MOIC ignores timing: a 2.0x multiple over three years is far better than over twelve. IRR captures timing but can be flattered by returning capital early, and it depends on the manager\'s control over when capital is called and distributed.' },
            {
              t: 'formula', name: 'Leveraged return',
              x: 'Levered return = [r × (Equity + Borrowing) − r_b × Borrowing] / Equity',
            },
            { t: 'h', x: 'Fees' },
            {
              t: 'formula', name: 'The standard structure',
              x: '"2 and 20" = 2% management fee + 20% incentive fee\n\nManagement fee: on assets under management (beginning, ending or average)\nIncentive fee:  on profits, often subject to a hurdle rate and/or a high-water mark',
            },
            {
              t: 'ul',
              x: [
                '**High-water mark** — no incentive fee until previous losses are recovered, so the manager is not paid twice for the same gains.',
                '**Hurdle rate** — a minimum return before incentive fees apply. A *soft* hurdle charges the fee on the entire gain once cleared; a *hard* hurdle charges only on the excess.',
                'Whether the incentive fee is calculated **net of** the management fee changes the answer — read the question carefully.',
              ],
            },
            {
              t: 'example', title: 'Worked example',
              x: 'A fund starts at $100m and ends at $120m before fees; "2 and 20", 5% soft hurdle, fees calculated independently, management fee on ending assets.\n\nManagement fee = 2% × 120 = $2.4m\nGross return 20% clears the hurdle → incentive fee = 20% × 20 = $4.0m\nNet return = (120 − 6.4 − 100) / 100 = 13.6%',
            },
            {
              t: 'callout', label: 'Biased indexes', kind: 'warn',
              x: 'Hedge fund indexes suffer **survivorship bias** (failed funds stop reporting) and **backfill bias** (strong histories added when funds join). Smoothed, appraisal-based returns also understate volatility, inflating Sharpe ratios.',
            },
            { t: 'p', x: 'Liquidity terms matter as much as fees: **lock-up periods**, **notice periods** for redemptions, and **gates** that limit how much can be withdrawn at once can all prevent investors reaching their money when they need it.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-al-20', name: 'Management fee', expr: 'Fee rate × AUM (beginning, ending or average — as specified)', note: 'Charged regardless of performance.' },
        { id: 'f-al-21', name: 'Incentive fee', expr: 'Rate × profit above hurdle and high-water mark', note: 'Soft hurdle: fee on the whole gain. Hard hurdle: fee only on the excess.' },
        { id: 'f-al-22', name: 'Investor net return', expr: '(Ending value − total fees − beginning value) / beginning value', note: 'Always express over beginning capital.' },
        { id: 'f-al-23', name: 'Multiple of invested capital', expr: '(Realised + Unrealised value) / Invested capital', note: 'Ignores the timing of cash flows.' },
        { id: 'f-al-24', name: 'Levered return', expr: '[r(E + B) − r_b × B] / E', note: 'E = equity, B = borrowing, r_b = borrowing rate.' },
      ],
      cards: [
        { id: 'c-al-20', front: 'High-water mark', back: 'No incentive fee until previous losses are recouped.' },
        { id: 'c-al-21', front: 'Soft vs hard hurdle', back: 'Soft: once cleared, the fee applies to the entire gain. Hard: fee applies only to the return above the hurdle.' },
        { id: 'c-al-22', front: 'Survivorship and backfill bias', back: 'Failed funds vanish from indices; newly added funds bring good past records. Both overstate reported performance.' },
        { id: 'c-al-23', front: 'J-curve', back: 'Early private fund returns are negative as fees and costs precede realised gains, turning positive as investments mature and exit.' },
        { id: 'c-al-24', front: 'Main limitation of MOIC', back: 'It ignores the time taken to generate the multiple.' },
      ],
      questions: [
        {
          id: 'q-al-030', difficulty: 'easy',
          stem: 'In its first three years, a new private equity fund reports negative returns despite no investment losses. The most likely explanation is:',
          choices: ['survivorship bias', 'the J-curve effect of fees and costs preceding realised gains', 'a violation of the high-water mark'],
          answer: 1,
          explain: 'Management fees and deal costs are incurred from the start, while value creation is realised only later at exit — the J-curve.',
          why: [
            'A concerns index construction.',
            'C concerns hedge fund incentive fees after losses.',
          ],
        },
        {
          id: 'q-al-031', difficulty: 'medium',
          stem: 'An investor committed and paid in $100 million to a fund. The fund has distributed $90 million and its remaining investments are valued at $80 million. The multiple of invested capital is closest to:',
          choices: ['1.7x', '0.9x', '0.8x'],
          answer: 0,
          explain: 'MOIC = (90 + 80) / 100 = 1.7x.',
          why: [
            'B counts only realised distributions.',
            'C counts only the unrealised value.',
          ],
        },
        {
          id: 'q-al-020', difficulty: 'medium',
          vignette: 'A hedge fund begins the year with $200 million and ends at $250 million before fees. It charges a 2% management fee on ending assets and a 20% incentive fee, calculated independently of the management fee, with no hurdle.',
          stem: 'The investor\'s net return is closest to:',
          choices: ['20.0%', '18.0%', '17.5%'],
          answer: 2,
          explain: 'Management fee = $5.0m. Incentive fee = 20% × 50 = $10.0m. Net value = 250 − 15 = $235m. Net return = 35/200 = 17.5%.',
          why: [
            'A is the gross return, which is the gross gain over capital before fees.',
            'B charges the management fee on beginning assets.',
          ],
        },
        {
          id: 'q-al-021', difficulty: 'hard',
          stem: 'A fund lost money last year and its net asset value remains below its previous peak. Under a high-water mark provision, the manager this year may charge:',
          choices: [
            'incentive fees on all gains made this year',
            'incentive fees only on gains above the previous peak value',
            'no fees of any kind until the peak is regained',
          ],
          answer: 1,
          explain: 'The high-water mark restricts incentive fees to profits above the highest previous value.',
          why: [
            'A ignores the provision.',
            'C overstates it — the management fee is still charged.',
          ],
        },
        {
          id: 'q-al-032', difficulty: 'expert',
          stem: 'A fund has $100 million of equity and borrows $50 million at 4% to invest $150 million in assets that return 10%. Ignoring fees, the return on equity is closest to:',
          choices: ['13.0%', '10.0%', '15.0%'],
          answer: 0,
          explain: 'Return = [10% × 150 − 4% × 50] / 100 = (15 − 2) / 100 = 13.0%. Leverage adds return because assets earn more than the borrowing cost.',
          why: [
            'B is the unlevered asset return.',
            'C ignores the interest cost of borrowing.',
          ],
        },
        {
          id: 'q-al-022', difficulty: 'expert',
          stem: 'Hedge fund index returns are most likely biased upward because:',
          choices: [
            'funds that fail stop reporting and drop out of the index, while newly added funds bring favourable historical records',
            'indices are equal-weighted rather than asset-weighted',
            'management fees are deducted twice from reported returns',
          ],
          answer: 0,
          explain: 'Survivorship bias and backfill bias both push reported index performance above a real investor\'s experience.',
          why: [
            'B does not systematically inflate returns.',
            'C would bias returns downward.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'alt-private-capital',
      name: 'Private Capital: Equity and Debt',
      los: [
        'Describe private equity strategies, including leveraged buyouts and venture capital stages',
        'Describe exit strategies for private equity investments',
        'Describe private debt strategies, including direct lending, mezzanine, venture and distressed debt',
        'Describe the risk, return and diversification characteristics of private capital',
      ],
      lessons: [
        {
          id: 'alt-pe-re-l1',
          title: 'Where private capital returns come from',
          minutes: 10,
          blocks: [
            { t: 'h', x: 'Private equity' },
            {
              t: 'ul',
              x: [
                '**Leveraged buyouts** — acquire a mature, cash-generative company with substantial debt, improve operations or governance, then exit. Returns come from deleveraging, operational improvement and multiple expansion. **Management buyouts** are led by existing management; **management buy-ins** bring in an outside team.',
                '**Venture capital** — funds young companies through stages: **pre-seed/angel** (an idea), **seed** (product development), **early stage** (initial commercialisation), and **later stage** (expansion before an exit). Most investments fail; returns depend on a few very large outcomes, so the distribution is extremely right-skewed.',
                '**Growth equity** — minority stakes in established, growing companies, typically without heavy leverage.',
              ],
            },
            {
              t: 'table',
              head: ['Exit route', 'Description'],
              rows: [
                ['Trade sale', 'Sale to a strategic buyer — fast and often at a premium, but may face management resistance'],
                ['Initial public offering', 'Listing on an exchange — potentially highest value, but costly and market-dependent'],
                ['Secondary sale', 'Sale to another private equity firm'],
                ['Recapitalisation', 'Adding debt to pay a dividend to owners without selling the company'],
                ['Write-off / liquidation', 'Exit from a failed investment'],
              ],
            },
            { t: 'h', x: 'Private debt' },
            {
              t: 'ul',
              x: [
                '**Direct lending** — senior, usually secured loans made by non-bank lenders to middle-market companies, typically floating rate.',
                '**Mezzanine debt** — subordinated debt that often carries an **equity kicker** such as warrants, sitting between senior debt and equity.',
                '**Venture debt** — loans to start-ups that lack cash flow to support conventional borrowing, often with warrants.',
                '**Distressed debt** — buying the debt of troubled companies at a discount, sometimes to gain control through restructuring.',
                '**Unitranche** — senior and subordinated debt combined into a single facility with a blended rate.',
              ],
            },
            {
              t: 'callout', label: 'Risk and return ordering',
              x: 'Broadly, from highest to lowest expected risk and return: venture capital → buyouts → mezzanine debt → direct (senior) lending. Private capital diversifies public portfolios less than reported figures suggest, because appraisal smoothing understates correlation.',
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-al-3', front: 'Two branches of private capital', back: 'Private equity (buyout, venture capital, growth) and private debt (direct lending, mezzanine, venture, distressed).' },
        { id: 'c-al-30', front: 'Mezzanine debt', back: 'Subordinated debt, usually with an equity kicker such as warrants, ranking between senior debt and equity.' },
        { id: 'c-al-31', front: 'Private equity exit routes', back: 'Trade sale, IPO, secondary sale, recapitalisation, write-off.' },
        { id: 'c-al-32', front: 'Stages of venture capital', back: 'Pre-seed/angel → seed → early stage → later stage.' },
      ],
      questions: [
        {
          id: 'q-al-040', difficulty: 'easy',
          stem: 'A private equity firm sells a portfolio company to a large competitor in the same industry. This exit route is best described as:',
          choices: ['a trade sale', 'a secondary sale', 'a recapitalisation'],
          answer: 0,
          explain: 'A sale to a strategic buyer, often a competitor, is a trade sale.',
          why: [
            'B is a sale to another private equity firm.',
            'C adds debt to pay owners without selling the company.',
          ],
        },
        {
          id: 'q-al-012', difficulty: 'medium',
          stem: 'Compared with a leveraged buyout, venture capital investing is most likely characterised by:',
          choices: [
            'greater use of debt financing and more predictable cash flows',
            'a highly right-skewed return distribution, with most returns coming from a few investments',
            'investments in mature companies with stable operating histories',
          ],
          answer: 1,
          explain: 'Venture portfolios expect most holdings to fail, with performance driven by a small number of outsized successes.',
          why: [
            'A describes buyouts.',
            'C also describes buyout targets.',
          ],
        },
        {
          id: 'q-al-041', difficulty: 'hard',
          stem: 'A lender provides subordinated financing to a buyout and receives warrants on the target company\'s equity. This financing is best described as:',
          choices: ['direct lending', 'mezzanine debt', 'distressed debt'],
          answer: 1,
          explain: 'Subordinated debt combined with an equity kicker is mezzanine financing, which fills the gap between senior debt and equity.',
          why: [
            'A is typically senior and secured, without equity participation.',
            'C involves buying the debt of companies already in financial difficulty.',
          ],
        },
        {
          id: 'q-al-042', difficulty: 'expert',
          stem: 'Ranked from highest to lowest expected risk and return, the most likely order is:',
          choices: [
            'venture capital, leveraged buyouts, mezzanine debt, senior direct lending',
            'leveraged buyouts, venture capital, senior direct lending, mezzanine debt',
            'mezzanine debt, venture capital, leveraged buyouts, senior direct lending',
          ],
          answer: 0,
          explain: 'Early-stage equity in unproven companies is riskiest; buyout equity in established companies is next; subordinated mezzanine debt ranks above equity; senior secured direct loans are least risky.',
          why: [
            'B places buyouts above venture capital and mezzanine below senior debt.',
            'C ranks subordinated debt above all equity.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'alt-real-estate',
      name: 'Real Estate and Infrastructure',
      los: [
        'Describe forms of real estate investment: private and public, debt and equity',
        'Describe the characteristics of property types and lease structures',
        'Calculate and interpret property values using the income approach',
        'Describe the cost and sales comparison approaches and REITs',
        'Describe infrastructure investments and their risk and return characteristics',
      ],
      lessons: [
        {
          id: 'alt-real-estate-l1',
          title: 'Valuing property and infrastructure',
          minutes: 10,
          blocks: [
            {
              t: 'table',
              head: ['', 'Debt', 'Equity'],
              rows: [
                ['Private', 'Mortgages and private real estate loans', 'Direct ownership, private real estate funds'],
                ['Public', 'Mortgage-backed securities', 'REITs and listed real estate companies'],
              ],
            },
            { t: 'p', x: 'Property types include residential, office, retail, industrial and logistics. Lease terms drive risk: under a **gross lease** the owner pays operating expenses; under a **net lease** the tenant does, transferring cost risk to the tenant. Long leases to strong tenants produce bond-like income.' },
            {
              t: 'formula', name: 'Income approach: direct capitalisation',
              x: 'NOI = Rental income − Vacancy and collection losses − Operating expenses\n      (before financing costs, depreciation and income taxes)\n\nValue = NOI / Capitalisation rate',
            },
            { t: 'p', x: 'The **discounted cash flow** approach projects NOI and a terminal sale value and discounts them. The **cost approach** values a property at the cost to replace it, adjusted for depreciation and obsolescence, plus land. The **sales comparison** approach uses recent transactions of similar properties, adjusted for differences.' },
            {
              t: 'callout', label: 'REITs: liquid, but equity-like',
              x: 'REITs provide liquid, transparent access to property income and must distribute most of their taxable income. In the short run they trade like equities, so their correlation with stocks rises precisely when diversification is most needed.',
            },
            { t: 'h', x: 'Infrastructure' },
            {
              t: 'ul',
              x: [
                '**Economic infrastructure** — transport, utilities, energy and communications, supporting economic activity.',
                '**Social infrastructure** — schools, hospitals and public housing, often financed through **public–private partnerships**.',
                '**Brownfield** investments buy existing, operating assets with a performance history — lower risk, steadier cash flows. **Greenfield** investments build new assets — higher construction and demand risk, higher expected return.',
                'Revenue can be **availability-based** (payments for keeping the asset available, low demand risk) or **usage-based** (tolls and fees, exposed to demand).',
              ],
            },
            { t: 'p', x: 'Infrastructure typically offers long-lived, stable, often inflation-linked cash flows, with regulatory, political and construction risk as the principal concerns.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-al-10', name: 'Direct capitalisation', expr: 'Value = NOI / Cap rate', note: 'A perpetuity applied to property income.' },
        { id: 'f-al-11', name: 'Net operating income', expr: 'Rental income − Vacancy losses − Operating expenses', note: 'Excludes financing costs, depreciation and taxes.' },
      ],
      cards: [
        { id: 'c-al-11', front: 'Direct capitalisation formula', back: 'Property value = NOI / capitalisation rate.' },
        { id: 'c-al-13', front: 'Main drawback of REITs for diversification', back: 'They trade like equities in the short run, so correlation with stocks rises when diversification matters most.' },
        { id: 'c-al-33', front: 'Gross lease vs net lease', back: 'Gross: owner pays operating expenses. Net: tenant pays them.' },
        { id: 'c-al-34', front: 'Brownfield vs greenfield infrastructure', back: 'Brownfield: existing operating asset, lower risk. Greenfield: new construction, higher risk and expected return.' },
        { id: 'c-al-35', front: 'Three real estate valuation approaches', back: 'Income (direct capitalisation or DCF), cost, and sales comparison.' },
      ],
      questions: [
        {
          id: 'q-al-010', difficulty: 'easy',
          stem: 'A property generates net operating income of $600,000 and comparable properties transact at a capitalisation rate of 8%. Its estimated value is closest to:',
          choices: ['$4.8 million', '$7.5 million', '$48.0 million'],
          answer: 1,
          explain: 'Value = 600,000 / 0.08 = $7,500,000.',
          why: [
            'A multiplies by the cap rate.',
            'C divides by 0.008.',
          ],
        },
        {
          id: 'q-al-050', difficulty: 'medium',
          stem: 'An office tenant signs a lease requiring it to pay the building\'s property taxes, insurance and maintenance in addition to rent. This lease is best described as:',
          choices: ['a gross lease', 'a net lease', 'an availability-based contract'],
          answer: 1,
          explain: 'When the tenant bears operating expenses, the lease is a net lease, transferring cost risk from owner to tenant.',
          why: [
            'A would have the owner pay operating expenses.',
            'C describes a form of infrastructure revenue.',
          ],
        },
        {
          id: 'q-al-051', difficulty: 'hard',
          vignette: 'A building produces potential rental income of $1,000,000 a year. Expected vacancy and collection losses are 5%, operating expenses are $300,000, and annual mortgage interest is $150,000. Comparable properties sell at a 6.5% capitalisation rate.',
          stem: 'The property\'s value is closest to:',
          choices: ['$10.0 million', '$7.7 million', '$14.6 million'],
          answer: 0,
          explain: 'NOI = 1,000,000 − 50,000 − 300,000 = $650,000. Mortgage interest is excluded because NOI is before financing costs. Value = 650,000 / 0.065 = $10.0 million.',
          why: [
            'B deducts mortgage interest from NOI.',
            'C ignores both vacancy losses and operating expenses.',
          ],
        },
        {
          id: 'q-al-052', difficulty: 'expert',
          stem: 'An investor seeks infrastructure exposure with stable, predictable cash flows and limited demand risk. The most suitable investment is most likely:',
          choices: [
            'a greenfield toll road with usage-based revenue',
            'a brownfield hospital under a public–private partnership with availability-based payments',
            'a new airport still under construction',
          ],
          answer: 1,
          explain: 'An existing asset has an operating history, and availability payments depend on keeping the asset functional rather than on usage — minimising both construction and demand risk.',
          why: [
            'A carries construction risk and full exposure to traffic volumes.',
            'C carries construction risk and uncertain future demand.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'alt-natural-resources',
      name: 'Natural Resources',
      los: [
        'Describe characteristics of commodities, farmland and timberland investments',
        'Explain the sources of return in commodity futures investing',
        'Describe contango and backwardation and theories of futures pricing',
        'Describe the risk, return and inflation-hedging characteristics of natural resources',
      ],
      lessons: [
        {
          id: 'alt-natural-resources-l1',
          title: 'Commodities, farmland and timber',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'Most commodity exposure is taken through futures rather than physical holdings, because storage is costly and impractical. Commodity total return has three parts:' },
            {
              t: 'ul',
              x: [
                '**Spot return** — the change in the underlying commodity price.',
                '**Roll return** — positive when the curve is in **backwardation** (futures below spot), negative in **contango** (futures above spot).',
                '**Collateral return** — interest earned on the cash backing the futures position.',
              ],
            },
            {
              t: 'callout', label: 'Why roll return matters',
              x: 'In persistent contango, each roll sells a cheaper expiring contract and buys a more expensive one. A commodity index can post negative returns in a period when the spot price actually rose.',
            },
            {
              t: 'table',
              head: ['Theory', 'Explanation of the futures curve'],
              rows: [
                ['Insurance theory', 'Producers hedge by selling futures and pay a premium to speculators, pushing futures below expected spot — backwardation'],
                ['Hedging pressure', 'Whether producers (sellers) or consumers (buyers) hedge more determines backwardation or contango'],
                ['Theory of storage', 'Futures price = spot + storage costs − convenience yield. A high convenience yield (scarce inventories) produces backwardation'],
              ],
            },
            { t: 'h', x: 'Farmland and timberland' },
            { t: 'p', x: 'Both earn returns from **income** (crop or timber sales), **biological growth**, and **land appreciation**, and both tend to hedge inflation. The key difference is flexibility: crops must be harvested when ripe, whereas timber can be left standing to keep growing when prices are low — giving timberland a valuable **harvest timing option**.' },
            { t: 'p', x: 'Natural resources tend to have low correlation with financial assets and positive correlation with unexpected inflation, but carry weather, disease, regulatory and commodity price risks.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-al-12', name: 'Commodity total return', expr: 'Spot return + Roll return + Collateral return', note: 'Roll return is positive in backwardation, negative in contango.' },
        { id: 'f-al-13', name: 'Theory of storage', expr: 'Futures price = Spot price + Storage costs − Convenience yield', note: 'High convenience yield → backwardation.' },
      ],
      cards: [
        { id: 'c-al-10', front: 'Contango vs backwardation', back: 'Contango: futures above spot → negative roll return. Backwardation: futures below spot → positive roll return.' },
        { id: 'c-al-12', front: 'Three sources of commodity futures return', back: 'Spot price change, roll return, and collateral (interest) return.' },
        { id: 'c-al-36', front: 'Why is timberland more flexible than farmland?', back: 'Trees can be left to grow if prices are low; crops must be harvested when ready.' },
        { id: 'c-al-37', front: 'Convenience yield', back: 'The benefit of holding the physical commodity, typically high when inventories are scarce — it pushes futures below spot.' },
      ],
      questions: [
        {
          id: 'q-al-060', difficulty: 'easy',
          stem: 'A commodity futures position earns a spot return of +4%, a roll return of −2% and a collateral return of +3%. Its total return is closest to:',
          choices: ['+5%', '+9%', '+1%'],
          answer: 0,
          explain: 'Total return = 4% − 2% + 3% = +5%.',
          why: [
            'B treats the negative roll return as positive.',
            'C omits the collateral return.',
          ],
        },
        {
          id: 'q-al-011', difficulty: 'medium',
          stem: 'A commodity futures curve is in contango. An investor holding a long futures position and rolling contracts forward will most likely experience:',
          choices: ['a positive roll return', 'a negative roll return', 'no roll return, since spot and futures converge at expiry'],
          answer: 1,
          explain: 'Each roll sells a cheaper near contract and buys a more expensive deferred one.',
          why: [
            'A describes backwardation.',
            'C is wrong because convergence is what generates the roll return.',
          ],
        },
        {
          id: 'q-al-061', difficulty: 'hard',
          stem: 'Compared with farmland, timberland most likely offers:',
          choices: [
            'less flexibility in the timing of harvests',
            'greater flexibility, because harvesting can be delayed while trees continue to grow',
            'no exposure to biological growth as a source of return',
          ],
          answer: 1,
          explain: 'Timber keeps growing if left unharvested, allowing owners to wait for better prices. Crops must be harvested when ripe.',
          why: [
            'A reverses the comparison.',
            'C is wrong — biological growth is a key source of timberland return.',
          ],
        },
        {
          id: 'q-al-062', difficulty: 'expert',
          stem: 'Inventories of a physical commodity become extremely scarce. According to the theory of storage, the futures curve is most likely to:',
          choices: [
            'move into backwardation, because the convenience yield of holding the physical commodity rises',
            'move into steeper contango, because storage costs dominate',
            'remain unchanged, because futures prices depend only on interest rates',
          ],
          answer: 0,
          explain: 'Scarcity makes holding the physical commodity valuable, raising the convenience yield. Futures price = spot + storage − convenience yield, so a large convenience yield pushes futures below spot.',
          why: [
            'B would apply when inventories are abundant and convenience yield is low.',
            'C ignores storage costs and convenience yield.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'alt-hedge-funds',
      name: 'Hedge Funds',
      los: [
        'Describe hedge fund strategies and their risk and return characteristics',
        'Describe hedge fund structures, including master–feeder funds, funds of funds and separately managed accounts',
        'Describe the use of leverage and short selling in hedge funds',
        'Describe the importance of operational due diligence',
      ],
      lessons: [
        {
          id: 'alt-hedge-funds-l1',
          title: 'Strategies and structures',
          minutes: 9,
          blocks: [
            {
              t: 'table',
              head: ['Strategy group', 'Examples', 'Typical exposures'],
              rows: [
                ['Equity', 'Long/short, market neutral, short-biased, fundamental growth or value', 'Stock selection; varying net market exposure'],
                ['Event-driven', 'Merger arbitrage, distressed securities, activist, special situations', 'Deal completion risk, legal and restructuring outcomes'],
                ['Relative value', 'Convertible arbitrage, fixed income arbitrage, volatility arbitrage', 'Small pricing discrepancies, often highly levered; liquidity and crowding risk'],
                ['Opportunistic', 'Global macro, managed futures (CTAs)', 'Directional views on rates, currencies, commodities and indexes'],
                ['Multi-manager', 'Multi-strategy funds, funds of funds', 'Diversification across strategies'],
              ],
            },
            {
              t: 'callout', label: 'Merger arbitrage in one line',
              x: 'Buy the target and (for share deals) short the acquirer, capturing the spread between the offer and the target\'s price. The strategy earns small, steady gains and suffers sharp losses when deals collapse — returns resemble selling insurance.',
            },
            { t: 'h', x: 'Structures' },
            {
              t: 'ul',
              x: [
                '**Master–feeder** — onshore and offshore feeder funds invest in a single master fund, serving investors with different tax needs efficiently.',
                '**Fund of funds** — diversifies across managers and provides due diligence, at the cost of an **extra layer of fees**.',
                '**Separately managed account** — the investor owns the assets in its own account, gaining transparency, control and liquidity, but requires a larger investment and more oversight.',
              ],
            },
            { t: 'p', x: 'Hedge funds use **leverage** — borrowing, derivatives and short positions — to magnify returns on small pricing differences. Leverage also magnifies losses and can force selling through margin calls when prices move against the fund.' },
            {
              t: 'callout', label: 'Operational due diligence', kind: 'warn',
              x: 'Many hedge fund failures come from operational rather than investment problems: weak valuation practices, poor controls, inadequate custody, or outright fraud. Investors should verify the independence of administrators, auditors and custodians, not just evaluate the strategy.',
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-al-40', front: 'Merger arbitrage', back: 'Buy the target, short the acquirer (for stock deals). Small steady gains, large losses if deals fail — an event-driven strategy.' },
        { id: 'c-al-41', front: 'Main drawback of a fund of funds', back: 'An additional layer of fees on top of the underlying managers\' fees.' },
        { id: 'c-al-42', front: 'Separately managed account advantages', back: 'Investor owns the assets directly — greater transparency, control and liquidity.' },
        { id: 'c-al-43', front: 'Relative value strategies', back: 'Exploit small pricing discrepancies between related securities, often with high leverage (e.g. convertible arbitrage).' },
      ],
      questions: [
        {
          id: 'q-al-070', difficulty: 'easy',
          stem: 'A hedge fund buys shares of companies being acquired and shorts the shares of the acquirers. This strategy is best classified as:',
          choices: ['global macro', 'event-driven merger arbitrage', 'equity market neutral'],
          answer: 1,
          explain: 'Positioning around announced corporate acquisitions is merger arbitrage, an event-driven strategy.',
          why: [
            'A takes directional positions on macroeconomic variables.',
            'C seeks to eliminate market exposure through stock selection, not around corporate events.',
          ],
        },
        {
          id: 'q-al-071', difficulty: 'medium',
          stem: 'Compared with investing directly in individual hedge funds, investing through a fund of funds most likely provides:',
          choices: [
            'lower total fees and greater transparency',
            'diversification and professional manager selection, but an additional layer of fees',
            'direct ownership of the underlying assets',
          ],
          answer: 1,
          explain: 'A fund of funds spreads capital across managers and performs due diligence, but charges its own fees on top of the underlying funds\' fees.',
          why: [
            'A reverses the fee effect.',
            'C describes a separately managed account.',
          ],
        },
        {
          id: 'q-al-072', difficulty: 'hard',
          stem: 'A hedge fund buys a company\'s convertible bonds and shorts its common shares to profit from mispricing between the two. The fund\'s greatest risk is most likely:',
          choices: [
            'a broad equity market rise',
            'a sudden loss of liquidity and widening credit spreads when leverage must be reduced',
            'rising commodity prices',
          ],
          answer: 1,
          explain: 'Convertible arbitrage is a levered relative value strategy. Its main vulnerability is a stress event in which liquidity dries up, spreads widen and crowded positions must be unwound simultaneously.',
          why: [
            'A is largely hedged by the short share position.',
            'C is not a direct exposure of the strategy.',
          ],
        },
        {
          id: 'q-al-073', difficulty: 'expert',
          stem: 'A pension fund prioritises transparency, control over its positions and the ability to withdraw quickly, and can commit a large amount of capital. The most suitable structure is most likely:',
          choices: ['a fund of funds', 'a separately managed account', 'a feeder fund in a master–feeder structure'],
          answer: 1,
          explain: 'In a separately managed account the investor owns the assets, sees every position and is not subject to the fund\'s redemption gates — well suited to a large institution willing to bear the oversight cost.',
          why: [
            'A adds fees and a further layer of opacity.',
            'C pools the investor with others under shared fund terms, limiting transparency and control.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'alt-digital',
      name: 'Introduction to Digital Assets',
      los: [
        'Describe financial applications of distributed ledger technology',
        'Compare permissionless and permissioned networks and consensus mechanisms',
        'Describe types of digital assets, including cryptocurrencies, stablecoins, CBDCs and tokens',
        'Describe methods of investing in digital assets and their risks',
      ],
      lessons: [
        {
          id: 'alt-digital-l1',
          title: 'Ledgers, tokens and what investors actually own',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'A **distributed ledger** is a database shared and synchronised across a network of participants. A **blockchain** is a distributed ledger that records transactions in cryptographically linked blocks, making past entries extremely difficult to alter.' },
            {
              t: 'table',
              head: ['Network type', 'Who can participate', 'Typical use'],
              rows: [
                ['Permissionless', 'Anyone can join, validate and view', 'Public cryptocurrencies'],
                ['Permissioned', 'Only approved participants', 'Enterprise and financial institution applications'],
              ],
            },
            {
              t: 'table',
              head: ['Consensus mechanism', 'How blocks are validated', 'Trade-off'],
              rows: [
                ['Proof of work', 'Miners compete to solve computational puzzles', 'Highly secure but energy-intensive'],
                ['Proof of stake', 'Validators are selected based on the assets they stake', 'Far less energy; security relies on economic stake'],
              ],
            },
            { t: 'h', x: 'Types of digital assets' },
            {
              t: 'ul',
              x: [
                '**Cryptocurrencies** — native digital currencies of blockchain networks, with no issuer backing.',
                '**Stablecoins** — designed to maintain a stable value, typically by being backed by fiat currency reserves or other assets.',
                '**Central bank digital currencies (CBDCs)** — digital forms of sovereign currency issued by a central bank.',
                '**Non-fungible tokens (NFTs)** — unique tokens representing ownership of a specific item.',
                '**Security tokens and tokenisation** — digital representations of claims on real assets, such as property or funds.',
              ],
            },
            { t: 'p', x: '**Smart contracts** execute automatically when conditions are met, enabling **decentralised finance (DeFi)** applications such as lending and exchange without traditional intermediaries.' },
            { t: 'h', x: 'Investing and risks' },
            { t: 'p', x: 'Investors can hold digital assets directly in wallets, through crypto exchanges, via futures and exchange-traded products, or indirectly through companies in the ecosystem. Risks include extreme volatility, regulatory uncertainty, fraud and exchange failure, and custody risk: lose the **private key** and the asset is lost.' },
            {
              t: 'callout', label: 'Why valuation is hard', kind: 'warn',
              x: 'Most cryptocurrencies generate no cash flows, so discounted cash flow valuation does not apply. Their price reflects supply and demand and expectations of future adoption — which is why they behave so differently from traditional asset classes.',
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-al-50', front: 'Permissionless vs permissioned network', back: 'Permissionless: anyone can participate and validate. Permissioned: only approved participants.' },
        { id: 'c-al-51', front: 'Proof of work vs proof of stake', back: 'Work: miners solve computational puzzles (energy-intensive). Stake: validators chosen by assets staked (far less energy).' },
        { id: 'c-al-52', front: 'Stablecoin', back: 'A digital asset designed to hold a stable value, typically backed by fiat currency reserves or other assets.' },
        { id: 'c-al-53', front: 'Main valuation challenge for cryptocurrencies', back: 'They produce no cash flows, so DCF models do not apply.' },
      ],
      questions: [
        {
          id: 'q-al-080', difficulty: 'easy',
          stem: 'A digital token designed to maintain a value of one US dollar, backed by dollar-denominated reserves, is best described as:',
          choices: ['a stablecoin', 'a central bank digital currency', 'a non-fungible token'],
          answer: 0,
          explain: 'A privately issued digital asset designed to hold a stable value through asset backing is a stablecoin.',
          why: [
            'B would be issued by a central bank itself.',
            'C represents a unique item, not a stable unit of value.',
          ],
        },
        {
          id: 'q-al-081', difficulty: 'medium',
          stem: 'Compared with proof of work, a proof-of-stake consensus mechanism most likely:',
          choices: [
            'requires substantially more energy to validate transactions',
            'selects validators based on the amount of assets they commit, using far less energy',
            'allows only approved institutions to validate transactions',
          ],
          answer: 1,
          explain: 'Proof of stake replaces energy-intensive computation with economic stake as the basis for selecting validators.',
          why: [
            'A describes proof of work.',
            'C describes a permissioned network, which is a separate design choice.',
          ],
        },
        {
          id: 'q-al-082', difficulty: 'hard',
          stem: 'A consortium of banks builds a distributed ledger for interbank settlement in which only member institutions can validate and view transactions. The network is best described as:',
          choices: ['permissionless', 'permissioned', 'decentralised finance'],
          answer: 1,
          explain: 'Restricting participation to approved members defines a permissioned network.',
          why: [
            'A allows anyone to participate.',
            'C refers to financial applications built on smart contracts, typically on open networks.',
          ],
        },
        {
          id: 'q-al-083', difficulty: 'expert',
          stem: 'An analyst attempts to value a cryptocurrency using a discounted cash flow model. The most significant problem with this approach is that:',
          choices: [
            'the discount rate cannot be estimated for any asset traded continuously',
            'most cryptocurrencies generate no cash flows to discount',
            'cryptocurrencies are too new to have prices',
          ],
          answer: 1,
          explain: 'DCF valuation requires expected cash flows. Most cryptocurrencies pay no income, so their value depends on supply, demand and adoption expectations rather than discounted cash flows.',
          why: [
            'A is false — continuous trading does not prevent estimating a required return.',
            'C is false — cryptocurrencies trade actively.',
          ],
        },
      ],
    },
  ],
};
