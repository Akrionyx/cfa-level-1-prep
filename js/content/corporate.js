// Corporate Issuers — deep content. Original wording throughout.

export default {
  id: 'corporate',
  name: 'Corporate Issuers',
  short: 'Corporate',
  weight: '6–9%',
  weightMid: 7.5,
  depth: 'deep',
  summary:
    'How companies are organised, owned and governed, how they manage liquidity, choose investments, and decide how to finance themselves. The capital structure and cost of capital material reappears throughout equity valuation and portfolio management.',
  modules: [
    /* ---------------------------------------------------------- */
    {
      id: 'corp-forms',
      name: 'Organizational Forms, Features and Ownership',
      los: [
        'Compare the organisational forms of businesses',
        'Describe key features of corporate issuers: legal identity, liability, taxation and access to capital',
        'Compare publicly and privately owned corporate issuers',
        'Describe the ways a company can move from private to public ownership',
      ],
      lessons: [
        {
          id: 'corp-forms-l1',
          title: 'Legal form decides liability, tax and capital',
          minutes: 8,
          blocks: [
            {
              t: 'table',
              head: ['Form', 'Legal identity', 'Owner liability', 'Taxation', 'Access to capital'],
              rows: [
                ['Sole proprietorship', 'None separate from owner', 'Unlimited', 'Owner\'s personal income', 'Very limited'],
                ['General partnership', 'None separate from partners', 'Unlimited for every partner', 'Passes through to partners', 'Limited'],
                ['Limited partnership', 'Partnership', 'Unlimited for general partners; limited partners risk only their investment', 'Passes through', 'Moderate'],
                ['Limited company / corporation', 'Separate legal entity', 'Limited to investment', 'Taxed at entity level, dividends taxed again', 'Broad — public and private markets'],
              ],
            },
            { t: 'p', x: 'In a **limited partnership** the general partner runs the business and bears unlimited liability; the limited partners provide capital, take no part in management, and can lose no more than they invested. This is the standard structure for private equity and hedge funds.' },
            {
              t: 'callout', label: 'The corporation\'s trade',
              x: 'Separating the company\'s legal identity from its owners allows limited liability, transferable shares and perpetual life — which is what makes raising large amounts of capital possible. The costs are **double taxation** of distributed profits in many jurisdictions and the **principal–agent problem** created when owners no longer run the business.',
            },
            { t: 'h', x: 'Public vs private companies' },
            {
              t: 'table',
              head: ['', 'Public', 'Private'],
              rows: [
                ['Share trading', 'Listed on an exchange; highly liquid', 'No active market; transfers restricted'],
                ['Disclosure', 'Extensive, regulated, periodic', 'Limited; negotiated with investors'],
                ['Ownership', 'Dispersed; shareholders rarely involved', 'Concentrated; owners often active'],
                ['Pressure', 'Quarterly results under market scrutiny', 'Longer horizon possible'],
              ],
            },
            { t: 'h', x: 'Going public' },
            {
              t: 'ul',
              x: [
                '**Initial public offering (IPO)** — investment banks underwrite and sell newly issued shares, typically with a price discovery process. The company raises capital.',
                '**Direct listing** — existing shares begin trading on an exchange without new shares being issued or underwritten. Cheaper, but no new capital is raised.',
                '**Special purpose acquisition company (SPAC)** — a listed shell raises cash in its own IPO, then acquires a private company, which becomes public through the merger.',
              ],
            },
            { t: 'p', x: 'Public companies can also go **private** through a buyout by private equity or management, typically financed with significant debt.' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-c-40', front: 'Liability of limited partners', back: 'Limited to their investment; they do not manage the business. General partners bear unlimited liability.' },
        { id: 'c-c-41', front: 'Main costs of the corporate form', back: 'Double taxation of distributed profits and the principal–agent problem from separating ownership and control.' },
        { id: 'c-c-42', front: 'Direct listing vs IPO', back: 'A direct listing lists existing shares without issuing new ones or underwriting — no capital raised. An IPO issues new shares and raises capital.' },
        { id: 'c-c-43', front: 'How does a SPAC take a company public?', back: 'The SPAC raises cash in its own IPO, then merges with a private company, which becomes listed through the merger.' },
      ],
      questions: [
        {
          id: 'q-co-030', difficulty: 'easy',
          stem: 'In a limited partnership, the partner who manages the business and bears unlimited liability is the:',
          choices: ['limited partner', 'general partner', 'sole proprietor'],
          answer: 1,
          explain: 'The general partner operates the business and has unlimited liability. Limited partners contribute capital, stay out of management, and risk only their investment.',
          why: [
            'A describes the passive investors, whose liability is capped.',
            'C describes a different organisational form with a single owner.',
          ],
        },
        {
          id: 'q-co-031', difficulty: 'medium',
          stem: 'Compared with a general partnership, a corporation most likely offers:',
          choices: [
            'pass-through taxation and unlimited owner liability',
            'limited owner liability and easier access to capital, but potential double taxation',
            'direct owner management and no separate legal identity',
          ],
          answer: 1,
          explain: 'A corporation is a separate legal entity, which limits owner liability and allows shares to be sold widely. In many jurisdictions its profits are taxed at the entity level and again when distributed as dividends.',
          why: [
            'A describes a general partnership.',
            'C describes a sole proprietorship or partnership, not a corporation.',
          ],
        },
        {
          id: 'q-co-032', difficulty: 'hard',
          stem: 'A privately held company with ample cash wants its shares to trade publicly so that early investors can sell, but it does not need to raise new capital. The approach that best fits is:',
          choices: ['an underwritten initial public offering', 'a direct listing', 'a leveraged buyout'],
          answer: 1,
          explain: 'A direct listing lets existing shares trade on an exchange without issuing new shares or paying underwriting fees — ideal when liquidity for existing holders, not new capital, is the goal.',
          why: [
            'A is designed to raise new capital and incurs underwriting costs the company does not need.',
            'C takes a company private, the opposite direction.',
          ],
        },
        {
          id: 'q-co-033', difficulty: 'expert',
          stem: 'Which statement best describes a trade-off a company faces when choosing to remain private rather than list publicly?',
          choices: [
            'It gains access to deeper capital markets but must meet more extensive disclosure requirements.',
            'It avoids extensive public disclosure and short-term market pressure, but its shares are less liquid and capital is harder to raise.',
            'It eliminates the principal–agent problem entirely, because private companies have no outside investors.',
          ],
          answer: 1,
          explain: 'Private companies escape public reporting obligations and quarterly scrutiny, allowing a longer horizon. The price is illiquid shares and more limited, often more expensive, access to capital.',
          why: [
            'A describes the consequences of *going public*.',
            'C overstates the case — private companies often have outside investors such as private equity funds, and agency conflicts can still arise.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'corp-stakeholders',
      name: 'Investors and Other Stakeholders',
      los: [
        'Compare the financial claims and motivations of lenders and shareholders',
        'Describe a company\'s stakeholder groups and their interests',
        'Compare shareholder theory and stakeholder theory',
        'Describe environmental, social and governance factors in investment analysis',
      ],
      lessons: [
        {
          id: 'corp-stakeholders-l1',
          title: 'Different claims, different incentives',
          minutes: 8,
          blocks: [
            {
              t: 'table',
              head: ['', 'Debt holders', 'Equity holders'],
              rows: [
                ['Claim', 'Fixed, contractual interest and principal', 'Residual — whatever remains after all other claims'],
                ['Upside', 'Capped at contracted payments', 'Unlimited'],
                ['Downside', 'Protected by seniority and covenants', 'Can lose the entire investment'],
                ['Control', 'None, unless covenants are breached', 'Voting rights'],
                ['Preferred risk', 'Lower — stability protects repayment', 'Higher risk can raise expected value of their claim'],
              ],
            },
            {
              t: 'callout', label: 'The option view',
              x: 'Equity behaves like a **call option** on the company\'s assets, with the debt as the strike price. Shareholders gain from volatility because their losses are capped at zero while upside is unlimited. Lenders, holding a claim that looks like a short put, prefer stability. Much of corporate governance exists to manage that divergence.',
            },
            { t: 'h', x: 'Stakeholder groups' },
            {
              t: 'ul',
              x: [
                '**Shareholders** — value growth and returns.',
                '**Creditors** — timely payment and preservation of the company\'s ability to repay.',
                '**Board of directors** — oversight of management on behalf of shareholders.',
                '**Managers and employees** — compensation, job security, career development.',
                '**Customers** — product quality, fair pricing, service continuity.',
                '**Suppliers** — reliable payment and ongoing business.',
                '**Governments and regulators** — tax revenue, legal compliance, employment, societal outcomes.',
              ],
            },
            { t: 'h', x: 'Shareholder vs stakeholder theory' },
            { t: 'p', x: '**Shareholder theory** holds that the company\'s primary duty is to maximise shareholder value, within the law. **Stakeholder theory** holds that it should balance the interests of all groups affected by its activities. In practice the two converge over long horizons — mistreating employees, customers or communities eventually damages shareholder value — but they can diverge sharply in the short run.' },
            { t: 'h', x: 'ESG in investment analysis' },
            { t: 'p', x: 'ESG factors are analysed as sources of financial risk and opportunity: **environmental** (emissions, resource use, climate exposure), **social** (labour practices, product safety, data privacy), and **governance** (board independence, executive pay, shareholder rights). The key concept is **materiality** — which factors are likely to affect a particular company\'s financial performance. Water use is material for a beverage maker; much less so for a software firm.' },
            {
              t: 'ul',
              x: [
                '**Negative screening** — excluding sectors or companies.',
                '**Positive / best-in-class screening** — favouring leaders on ESG metrics within each sector.',
                '**ESG integration** — incorporating factors directly into valuation and risk analysis.',
                '**Thematic investing** — targeting themes such as renewable energy.',
                '**Engagement / active ownership** — using voting and dialogue to change company behaviour.',
                '**Impact investing** — seeking measurable social or environmental outcomes alongside returns.',
              ],
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-c-2', front: 'Why do shareholder and creditor interests diverge?', back: 'Equity resembles a call option: shareholders capture the upside of risk while creditors bear the downside — hence covenants.' },
        { id: 'c-c-3', front: 'Main ESG implementation approaches', back: 'Negative screening, positive/best-in-class screening, ESG integration, thematic investing, engagement, impact investing.' },
        { id: 'c-c-44', front: 'Shareholder theory vs stakeholder theory', back: 'Shareholder theory: maximise shareholder value. Stakeholder theory: balance the interests of all groups affected by the company.' },
        { id: 'c-c-45', front: 'ESG materiality', back: 'The degree to which an ESG factor is likely to affect a specific company\'s financial performance — it varies by industry.' },
      ],
      questions: [
        {
          id: 'q-co-002', difficulty: 'easy',
          stem: 'A company undertakes a highly risky project financed by existing debt. This decision most likely:',
          choices: [
            'benefits shareholders at the expense of creditors',
            'benefits creditors at the expense of shareholders',
            'affects both groups identically, since both hold claims on the same assets',
          ],
          answer: 0,
          explain: 'Shareholders capture unlimited upside but their downside is capped. Creditors have fixed upside and bear the loss if the project fails, so raising risk after debt is issued transfers value from lenders to owners.',
          why: [
            'B reverses the transfer.',
            'C ignores the asymmetric payoff structure of debt versus equity.',
          ],
        },
        {
          id: 'q-co-040', difficulty: 'medium',
          stem: 'An analyst concludes that water scarcity is a critical risk for a beverage producer but largely irrelevant for a software company. The concept being applied is:',
          choices: ['negative screening', 'ESG materiality', 'stakeholder theory'],
          answer: 1,
          explain: 'Materiality asks which ESG factors are likely to affect a specific company\'s financial results. The same factor can be highly material in one industry and immaterial in another.',
          why: [
            'A excludes companies or sectors; it does not assess relevance to financial performance.',
            'C concerns whose interests a company should serve, not which factors matter financially.',
          ],
        },
        {
          id: 'q-co-041', difficulty: 'hard',
          stem: 'An investor buys shares in a company with poor labour practices and then uses its voting rights and meetings with the board to push for improvements. This approach is best described as:',
          choices: ['negative screening', 'engagement or active ownership', 'thematic investing'],
          answer: 1,
          explain: 'Using ownership rights — voting and direct dialogue — to change a company\'s behaviour is engagement, also called active ownership.',
          why: [
            'A would exclude the company rather than invest and try to change it.',
            'C targets investments aligned with a theme, such as clean energy, rather than influencing a specific holding.',
          ],
        },
        {
          id: 'q-co-042', difficulty: 'expert',
          stem: 'A company near financial distress is considering a speculative acquisition. Relative to its bondholders, its shareholders are most likely to:',
          choices: [
            'oppose the acquisition, because it increases the risk of default',
            'favour the acquisition, because they capture the upside while bondholders bear much of the downside',
            'be indifferent, because the acquisition does not change the firm\'s total asset value',
          ],
          answer: 1,
          explain: 'Near distress, equity is like an out-of-the-money call option — worth little unless outcomes improve sharply. A risky bet increases the option\'s value, while the cost of failure falls mainly on creditors who would otherwise recover more. This is the asset substitution problem.',
          why: [
            'A describes the bondholders\' view, not the shareholders\'.',
            'C ignores that a change in risk redistributes value between claimants even if expected asset value is unchanged.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'corp-governance',
      name: 'Corporate Governance: Conflicts, Mechanisms, Risks and Benefits',
      los: [
        'Describe principal–agent relationships and conflicts that may arise between stakeholder groups',
        'Describe corporate governance and mechanisms to manage stakeholder relationships',
        'Describe the functions and responsibilities of a board of directors and its committees',
        'Describe the risks of poor governance and the benefits of effective governance',
      ],
      lessons: [
        {
          id: 'corp-governance-l1',
          title: 'Who conflicts with whom, and what restrains them',
          minutes: 9,
          blocks: [
            { t: 'h', x: 'The main conflicts' },
            {
              t: 'ul',
              x: [
                '**Shareholders vs managers** — managers may pursue empire-building, excessive perks, entrenchment or insufficient risk-taking (to protect their jobs) rather than value creation. Information asymmetry makes this hard to monitor.',
                '**Controlling vs minority shareholders** — dominant owners can extract value through related-party transactions, or through dual-class shares that grant voting control disproportionate to economic ownership.',
                '**Shareholders vs creditors** — risk-shifting, excessive dividends or additional borrowing that dilutes existing lenders\' protection.',
                '**Managers vs the board** — boards may lack independence, expertise or information to oversee management effectively.',
              ],
            },
            {
              t: 'callout', label: 'Governance in one sentence',
              x: 'Governance is the system of controls and incentives — board oversight, shareholder rights, contracts, disclosure and law — that restrains these conflicts. Its absence tends to show up in valuation long before it shows up in a scandal.',
            },
            { t: 'h', x: 'Mechanisms by stakeholder' },
            {
              t: 'table',
              head: ['Stakeholder', 'Mechanisms'],
              rows: [
                ['Shareholders', 'Annual reports and disclosure; general meetings; voting (including proxy voting); derivative lawsuits and class actions; activism; takeovers'],
                ['Creditors', 'Bond indentures and covenants; collateral; bondholder committees'],
                ['Board', 'Independent directors; audit, remuneration, nomination and risk committees'],
                ['Managers', 'Remuneration aligned with long-term performance; clawbacks; share ownership requirements'],
                ['Employees', 'Labour law, contracts, codes of ethics, whistleblowing channels'],
                ['Customers and suppliers', 'Contracts, service agreements, reputation'],
                ['Government', 'Regulation, listing rules, corporate law'],
              ],
            },
            { t: 'h', x: 'Board committees' },
            {
              t: 'ul',
              x: [
                '**Audit committee** — oversees financial reporting, internal controls, and the external auditor. Should consist of independent directors with financial expertise.',
                '**Remuneration (compensation) committee** — sets executive pay and aligns it with long-term performance.',
                '**Nomination (governance) committee** — identifies board candidates and oversees board composition.',
                '**Risk committee** — oversees enterprise risk policies and appetite.',
              ],
            },
            { t: 'h', x: 'Takeover defences and shareholder power' },
            { t: 'p', x: '**Staggered boards** — where only a fraction of directors are elected each year — make it harder for shareholders or acquirers to replace the board quickly, entrenching management. **Proxy contests** let shareholders nominate directors; **tender offers** bypass the board to buy shares directly. **Cumulative voting** allows minority shareholders to concentrate their votes on fewer directors, improving their chance of board representation.' },
            { t: 'h', x: 'Risks and benefits' },
            { t: 'p', x: 'Weak governance raises the risk of poor control over management, legal and regulatory penalties, reputational damage, and ultimately default. Effective governance tends to improve operational efficiency and control, support better decisions and lower the cost of capital — lenders and investors charge less when they trust the reported numbers and the people behind them.' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-c-1', front: 'Principal–agent problem in a corporation', back: 'Managers (agents) may pursue their own interests instead of shareholders\' (principals\'), a consequence of separating ownership from control.' },
        { id: 'c-c-46', front: 'Role of the audit committee', back: 'Oversees financial reporting, internal controls and the external auditor. Should be independent and financially expert.' },
        { id: 'c-c-47', front: 'Staggered board', back: 'Only a portion of directors stand for election each year, making it harder to replace the board — an entrenchment and takeover defence.' },
        { id: 'c-c-48', front: 'Cumulative voting', back: 'Shareholders can allocate all their votes to one or a few directors, improving minority shareholders\' chance of board representation.' },
        { id: 'c-c-49', front: 'Dual-class share structure', back: 'Gives some shareholders (often founders) voting power disproportionate to their economic ownership — a controlling vs minority conflict.' },
      ],
      questions: [
        {
          id: 'q-co-001', difficulty: 'easy',
          stem: 'The separation of ownership and control in a corporation most directly gives rise to:',
          choices: ['double taxation of profits', 'the principal–agent problem', 'unlimited shareholder liability'],
          answer: 1,
          explain: 'When owners delegate decisions to managers, managers\' incentives need not align with owners\'. That misalignment is the principal–agent problem.',
          why: [
            'A is a tax feature of the corporate form, not a consequence of separating ownership from control.',
            'C is the opposite of a corporation\'s defining feature.',
          ],
        },
        {
          id: 'q-co-050', difficulty: 'medium',
          stem: 'Which board committee is primarily responsible for overseeing the external auditor and the integrity of financial reporting?',
          choices: ['Remuneration committee', 'Audit committee', 'Nomination committee'],
          answer: 1,
          explain: 'The audit committee oversees financial reporting, internal controls and the relationship with the external auditor, ideally staffed by independent directors with financial expertise.',
          why: [
            'A sets executive compensation.',
            'C identifies and evaluates candidates for the board.',
          ],
        },
        {
          id: 'q-co-051', difficulty: 'hard',
          stem: 'A company\'s founders hold shares with ten votes each, giving them 60% of voting power while owning 15% of the economic interest. The governance risk this creates is most directly a conflict between:',
          choices: ['shareholders and creditors', 'controlling shareholders and minority shareholders', 'the board and the external auditor'],
          answer: 1,
          explain: 'A dual-class structure separates control from economic ownership. Founders can make decisions — including related-party transactions — that benefit them while minority shareholders bear most of the economic consequences.',
          why: [
            'A concerns risk-shifting between equity and debt claims.',
            'C is not the conflict created by unequal voting rights.',
          ],
        },
        {
          id: 'q-co-052', difficulty: 'expert',
          stem: 'A company adopts a staggered board, under which one-third of directors are elected each year. The most likely effect on shareholders is:',
          choices: [
            'stronger oversight, because directors gain experience through longer terms',
            'reduced ability to replace the board quickly, which may entrench management and deter value-creating takeovers',
            'improved minority representation, similar to cumulative voting',
          ],
          answer: 1,
          explain: 'With only a third of seats up for election annually, gaining board control takes at least two election cycles. This shields incumbent directors and management from shareholder pressure and hostile bids, which generally weakens shareholder rights.',
          why: [
            'A focuses on a possible side benefit while ignoring the widely recognised entrenchment effect.',
            'C confuses a staggered board with cumulative voting, which does help minority shareholders.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'corp-liquidity',
      name: 'Working Capital and Liquidity',
      los: [
        'Explain the cash conversion cycle and working capital investment approaches',
        'Describe primary and secondary sources of liquidity and factors that affect liquidity',
        'Evaluate short-term funding choices',
        'Calculate and interpret the cost of trade credit',
      ],
      lessons: [
        {
          id: 'corp-liquidity-l1',
          title: 'Liquidity: where cash comes from and what drains it',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'Liquidity is the ability to meet short-term obligations as they come due. It is measured by liquidity ratios and the cash conversion cycle, but the more useful framing is to ask where the company would find cash if it needed it — and how costly that would be.' },
            {
              t: 'table',
              head: ['Source', 'Examples', 'Effect on the business'],
              rows: [
                ['Primary', 'Cash balances, short-term investments, bank lines of credit, cash from operations', 'Used in the normal course — no change to operations'],
                ['Secondary', 'Renegotiating debt, selling assets, filing for bankruptcy protection', 'May change the company\'s financial or operating position'],
              ],
            },
            { t: 'h', x: 'Drags and pulls' },
            {
              t: 'ul',
              x: [
                '**Drags** slow cash coming in: uncollected or bad receivables, obsolete inventory, tight credit conditions that delay customer payments.',
                '**Pulls** accelerate cash going out: paying suppliers early, suppliers shortening credit terms, reduced credit limits, required collateral postings.',
              ],
            },
            {
              t: 'formula', name: 'Cash conversion cycle',
              x: 'CCC = Days of inventory on hand + Days sales outstanding − Days payables outstanding',
            },
            { t: 'h', x: 'Working capital approaches' },
            {
              t: 'table',
              head: ['Approach', 'Current assets', 'Financing', 'Trade-off'],
              rows: [
                ['Conservative', 'High', 'More long-term financing', 'Low liquidity risk, higher financing cost, lower return'],
                ['Moderate', 'Balanced', 'Mix, matched to asset life', 'Middle ground'],
                ['Aggressive', 'Low', 'More short-term financing', 'Higher return on assets, higher rollover and liquidity risk'],
              ],
            },
            { t: 'h', x: 'Short-term funding options' },
            {
              t: 'ul',
              x: [
                '**Uncommitted lines of credit** — cheapest, but the bank can decline to lend.',
                '**Committed lines of credit** — the bank must lend up to the limit; a commitment fee is charged.',
                '**Revolving credit agreements** — longer-term committed facilities, often used as a liquidity backstop.',
                '**Commercial paper** — short-term unsecured notes, available only to creditworthy large companies, usually backed by a credit line.',
                '**Factoring** — selling receivables to a third party at a discount; immediate cash but expensive.',
              ],
            },
            { t: 'h', x: 'The true cost of skipping a discount' },
            {
              t: 'formula', name: 'Cost of trade credit',
              x: 'Cost = [1 + Discount / (1 − Discount)]^(365 / Days beyond discount period) − 1',
            },
            {
              t: 'example', title: 'Worked example',
              x: 'Terms "2/10 net 30": a 2% discount if paid within 10 days, otherwise full payment due in 30.\n\nCost = (1 + 0.02/0.98)^(365/20) − 1 = (1.0204)^18.25 − 1 ≈ 44.6%\n\nNot taking the discount is equivalent to borrowing at roughly 45% a year. Almost any other funding source is cheaper.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-c-30', name: 'Cost of trade credit', expr: '[1 + d/(1 − d)]^(365/days beyond discount) − 1', note: 'Forgoing an early-payment discount is expensive borrowing.' },
        { id: 'f-c-31', name: 'Cash conversion cycle', expr: 'DOH + DSO − DPO', note: 'Days of cash tied up in operations.' },
        { id: 'f-c-32', name: 'Quick ratio', expr: '(Cash + ST investments + Receivables) / Current liabilities', note: 'Excludes inventory.' },
      ],
      cards: [
        { id: 'c-c-50', front: 'Primary vs secondary sources of liquidity', back: 'Primary: cash, short-term investments, credit lines, operating cash flow. Secondary: renegotiating debt, selling assets, bankruptcy — these can alter operations.' },
        { id: 'c-c-51', front: 'Drag vs pull on liquidity', back: 'Drags delay inflows (bad receivables, obsolete inventory). Pulls accelerate outflows (paying early, reduced supplier credit).' },
        { id: 'c-c-52', front: 'Conservative working capital approach', back: 'High current assets financed with long-term funds — low liquidity risk, higher cost, lower return.' },
        { id: 'c-c-53', front: 'Committed vs uncommitted line of credit', back: 'Committed: bank must lend up to the limit, for a commitment fee. Uncommitted: cheaper, but the bank can refuse.' },
      ],
      questions: [
        {
          id: 'q-co-060', difficulty: 'easy',
          stem: 'Which of the following is a secondary source of liquidity?',
          choices: ['Cash flow from operations', 'An unused bank line of credit', 'Selling a manufacturing plant'],
          answer: 2,
          explain: 'Selling long-term operating assets raises cash but changes the company\'s operations — a defining feature of secondary sources.',
          why: [
            'A and B are primary sources, used in the normal course of business without altering operations.',
          ],
        },
        {
          id: 'q-co-061', difficulty: 'medium',
          stem: 'A supplier offers terms of 2/10 net 30. The annualised cost of not taking the discount and paying on day 30 is closest to:',
          choices: ['44.6%', '36.5%', '24.5%'],
          answer: 0,
          explain: 'Cost = (1 + 0.02/0.98)^(365/20) − 1 = (1.0204)^18.25 − 1 ≈ 44.6%. The period of extra credit is 20 days (from day 10 to day 30).',
          why: [
            'B is a simple, non-compounded approximation: 2% × 365/20.',
            'C uses 30 days instead of the 20 additional days of credit actually obtained.',
          ],
        },
        {
          id: 'q-co-062', difficulty: 'hard',
          stem: 'A company\'s major supplier cuts its payment terms from 60 days to 15 days. This is best described as:',
          choices: ['a drag on liquidity', 'a pull on liquidity', 'a secondary source of liquidity'],
          answer: 1,
          explain: 'Shorter supplier terms force cash to leave the business sooner — a pull on liquidity.',
          why: [
            'A describes something that slows cash coming in, such as slow-paying customers.',
            'C describes a way of raising cash, not a pressure on it.',
          ],
        },
        {
          id: 'q-co-063', difficulty: 'expert',
          stem: 'A company funds its permanent working capital needs with commercial paper that must be rolled over every 30 days. Compared with a conservative approach, this aggressive strategy most likely offers:',
          choices: [
            'lower financing cost and lower liquidity risk',
            'potentially lower financing cost but greater refinancing and liquidity risk',
            'higher financing cost but greater flexibility',
          ],
          answer: 1,
          explain: 'Short-term funding is usually cheaper when the yield curve slopes upward, but relying on it for permanent needs exposes the company to rollover risk: if markets seize up or its credit weakens, it may be unable to refinance when the paper matures.',
          why: [
            'A ignores the refinancing risk inherent in short-term funding.',
            'C describes the conservative approach of using long-term funds.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'corp-capital',
      name: 'Capital Investments and Capital Allocation',
      los: [
        'Describe types of capital investments',
        'Describe the capital allocation process and calculate NPV, IRR and return on invested capital',
        'Describe principles and common pitfalls of capital allocation',
        'Describe types of real options relevant to capital investments',
      ],
      lessons: [
        {
          id: 'corp-capital-l1',
          title: 'NPV beats IRR (and why)',
          minutes: 9,
          blocks: [
            {
              t: 'table',
              head: ['Project type', 'Purpose'],
              rows: [
                ['Going concern', 'Maintain the business: replace worn equipment, sustain efficiency'],
                ['Regulatory / compliance', 'Meet legal or safety requirements — often negative NPV but unavoidable'],
                ['Expansion', 'Grow the existing business: new capacity, new markets'],
                ['Other', 'Higher-risk projects outside the core, such as new ventures or R&D'],
              ],
            },
            {
              t: 'formula', name: 'NPV and IRR',
              x: 'NPV = Σ [ CFₜ / (1 + r)ᵗ ] − Initial outlay\n\nIRR: the discount rate at which NPV = 0',
            },
            { t: 'p', x: 'Accept a project when NPV > 0, or equivalently when IRR > the required return — the two rules agree for a single conventional project. They can disagree when ranking **mutually exclusive** projects that differ in scale or cash-flow timing.' },
            {
              t: 'callout', label: 'When they conflict, follow NPV',
              x: 'NPV measures value added in currency and assumes reinvestment at the required rate, which is realistic. IRR is a percentage that implicitly assumes reinvestment at the IRR itself — flattering to high-IRR projects. IRR can also produce multiple values, or none, when cash flows change sign more than once.',
            },
            {
              t: 'formula', name: 'Return on invested capital',
              x: 'ROIC = After-tax operating profit / Average invested capital\n\nROIC > cost of capital → the company is creating value',
            },
            { t: 'h', x: 'Principles and pitfalls' },
            {
              t: 'ul',
              x: [
                'Base decisions on **incremental after-tax cash flows**, not accounting income.',
                'Exclude **sunk costs** — money already spent cannot be recovered by any decision.',
                'Include **opportunity costs** — land the firm already owns still has a market value.',
                'Include **externalities**, such as cannibalisation of existing product sales.',
                'Account for financing costs in the discount rate, **not** in the cash flows — otherwise they are double-counted.',
                'Beware inertia (allocating budgets based on last year), pet projects, and failing to consider investment alternatives.',
              ],
            },
            { t: 'h', x: 'Real options' },
            { t: 'p', x: 'A traditional NPV treats a project as a fixed, all-or-nothing decision. In reality managers can adapt, and that flexibility has value:' },
            {
              t: 'ul',
              x: [
                '**Timing option** — delay the investment until more information is available.',
                '**Abandonment option** — exit if results are poor, recovering salvage value.',
                '**Expansion option** — invest more if the project succeeds.',
                '**Flexibility options** — adjust prices (price-setting) or switch inputs and outputs (production flexibility).',
              ],
            },
            { t: 'p', x: 'Project NPV including options = NPV without options − cost of options + value of options. A project with a slightly negative static NPV can be worth undertaking if it carries a valuable option.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-c-10', name: 'Net present value', expr: 'NPV = Σ CFₜ/(1+r)ᵗ − Outlay', note: 'Accept if positive; measures value added in currency terms.' },
        { id: 'f-c-11', name: 'Internal rate of return', expr: 'The r that sets NPV = 0', note: 'Accept if IRR > required return, but defer to NPV when ranking.' },
        { id: 'f-c-12', name: 'Return on invested capital', expr: 'After-tax operating profit / Average invested capital', note: 'Compare with the cost of capital.' },
        { id: 'f-c-13', name: 'NPV with real options', expr: 'Static NPV − Cost of options + Value of options', note: 'Flexibility can make a negative static NPV worthwhile.' },
      ],
      cards: [
        { id: 'c-c-10', front: 'When NPV and IRR rankings conflict, which wins?', back: 'NPV — it measures value added and assumes a realistic reinvestment rate.' },
        { id: 'c-c-11', front: 'Two situations where IRR misleads', back: 'Mutually exclusive projects of different scale/timing, and non-conventional cash flows producing multiple or no IRRs.' },
        { id: 'c-c-12', front: 'Are sunk costs included in project analysis?', back: 'No. Only incremental future after-tax cash flows matter. Opportunity costs and externalities *are* included.' },
        { id: 'c-c-13', front: 'Four types of real options', back: 'Timing, abandonment, expansion, and flexibility (price-setting and production flexibility).' },
        { id: 'c-c-14', front: 'Why exclude interest from project cash flows?', back: 'Financing costs are already reflected in the discount rate; subtracting interest from cash flows double-counts them.' },
      ],
      questions: [
        {
          id: 'q-co-010', difficulty: 'easy',
          stem: 'A project requires an outlay of $100,000 and generates $40,000 per year for three years. At a required return of 10%, the NPV is closest to:',
          choices: ['−$526', '$20,000', '−$5,260'],
          answer: 0,
          explain: 'PV of inflows = 40,000 × [1 − 1.10⁻³]/0.10 = 40,000 × 2.4869 = $99,474. NPV = 99,474 − 100,000 = −$526, so the project should be rejected.',
          why: [
            'B sums the undiscounted cash flows, ignoring time value.',
            'C misplaces a decimal — discounted inflows fall only slightly short of the outlay.',
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
          explain: 'The market study is a sunk cost — already incurred and unrecoverable regardless of the decision.',
          why: [
            'A is an opportunity cost and must be included.',
            'C is cannibalisation, a genuine incremental effect.',
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
          explain: 'Shareholder wealth rises by the NPV. IRR expresses a rate and implicitly assumes reinvestment at that rate, biasing it toward small or short projects.',
          why: [
            'A confuses a rate of return with value created.',
            'C is not a real option — NPV already handles differences in scale.',
          ],
        },
        {
          id: 'q-co-013', difficulty: 'hard',
          stem: 'A mining company can close a new mine and sell its equipment if commodity prices collapse. This flexibility is best described as:',
          choices: ['a timing option', 'an abandonment option', 'an expansion option'],
          answer: 1,
          explain: 'The right to exit a project and recover salvage value if outcomes are poor is an abandonment option. It limits the downside and adds value to the project.',
          why: [
            'A concerns delaying the initial investment.',
            'C concerns investing more if the project succeeds.',
          ],
        },
        {
          id: 'q-co-014', difficulty: 'expert',
          stem: 'A project has a static NPV of −$2 million. It includes an option to expand capacity that costs $1 million to acquire and is estimated to be worth $4 million. The project NPV including the option is closest to:',
          choices: ['+$1 million', '−$2 million', '+$3 million'],
          answer: 0,
          explain: 'NPV with options = static NPV − cost of option + value of option = −2 − 1 + 4 = +$1 million. The flexibility turns a rejected project into an acceptable one.',
          why: [
            'B ignores the option entirely.',
            'C adds the option value without deducting its cost.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'corp-structure',
      name: 'Capital Structure and Cost of Capital',
      los: [
        'Calculate and interpret the weighted average cost of capital',
        'Describe factors affecting capital structure, including the company life cycle',
        'Explain the Modigliani–Miller propositions with and without taxes',
        'Describe the static trade-off and pecking order theories',
        'Calculate and interpret operating, financial and total leverage',
      ],
      lessons: [
        {
          id: 'corp-structure-l1',
          title: 'Does the mix of debt and equity matter?',
          minutes: 10,
          blocks: [
            { t: 'p', x: 'Capital structure changes over a company\'s life. **Start-ups** with uncertain cash flows and few tangible assets rely mainly on equity. **Growth** companies begin to use some debt as revenues become more predictable. **Mature** companies with stable cash flows and collateral can carry substantial debt at low cost.' },
            { t: 'h', x: 'Modigliani–Miller: the benchmark' },
            { t: 'p', x: 'MM\'s propositions assume perfect markets: no taxes, no transaction or bankruptcy costs, symmetric information, and investors who can borrow on the same terms as companies.' },
            {
              t: 'formula', name: 'MM without taxes',
              x: 'Proposition I:  V_L = V_U\n(capital structure does not affect firm value)\n\nProposition II: r_e = r₀ + (r₀ − r_d) × (D/E)\n(cost of equity rises linearly with leverage; WACC is unchanged)',
            },
            { t: 'p', x: 'The intuition: cheaper debt is exactly offset by the higher return equity holders demand for bearing more financial risk. Slicing the same cash flows differently cannot create value.' },
            {
              t: 'formula', name: 'MM with corporate taxes',
              x: 'Proposition I:  V_L = V_U + t × D\n(value rises by the present value of the interest tax shield)\n\nProposition II: r_e = r₀ + (r₀ − r_d)(1 − t)(D/E)\n(WACC falls as leverage rises)',
            },
            {
              t: 'callout', label: 'Why companies are not 100% debt',
              x: 'With taxes alone, MM implies the optimal structure is nearly all debt. Reality adds **costs of financial distress** — direct bankruptcy costs and indirect costs such as lost customers and suppliers — and **agency costs**. These rise with leverage and eventually outweigh the tax benefit.',
            },
            { t: 'h', x: 'Two practical theories' },
            {
              t: 'ul',
              x: [
                '**Static trade-off theory** — the optimal capital structure is where the marginal benefit of the debt tax shield equals the marginal cost of expected financial distress. Value rises with leverage up to that point, then falls.',
                '**Pecking order theory** — because managers know more than investors, financing choices send signals. Companies prefer internal funds first, then debt, and issue new equity only as a last resort, since an equity issue suggests management believes the shares are overvalued.',
              ],
            },
            { t: 'p', x: 'Debt also reduces the **agency costs of equity**: fixed interest obligations limit the free cash flow managers could waste, disciplining their decisions.' },
          ],
        },
        {
          id: 'corp-structure-l2',
          title: 'Computing the cost of capital, and how leverage magnifies',
          minutes: 9,
          blocks: [
            {
              t: 'formula', name: 'Weighted average cost of capital',
              x: 'WACC = w_d × r_d × (1 − t) + w_p × r_p + w_e × r_e\n\nWeights: market values and the target capital structure, not book values.',
            },
            { t: 'p', x: 'Only debt gets the (1 − t) adjustment, because interest is tax-deductible while dividends are not. The pre-tax cost of debt is best estimated from the yield to maturity on the company\'s existing debt, or from yields on debt of similarly rated issuers.' },
            {
              t: 'formula', name: 'Cost of equity',
              x: 'CAPM:  r_e = R_f + β × (E(R_m) − R_f)\nDDM:   r_e = D₁/P₀ + g\nBond yield plus risk premium: r_e = r_d + risk premium',
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
        { id: 'f-c-25', name: 'MM Proposition II (no taxes)', expr: 'r_e = r₀ + (r₀ − r_d)(D/E)', note: 'Cost of equity rises with leverage; WACC constant.' },
        { id: 'f-c-26', name: 'MM Proposition I (with taxes)', expr: 'V_L = V_U + tD', note: 'Value of the interest tax shield.' },
        { id: 'f-c-22', name: 'Degree of operating leverage', expr: 'DOL = Q(P − V) / [Q(P − V) − F]', note: 'Rises with fixed operating costs.' },
        { id: 'f-c-23', name: 'Degree of financial leverage', expr: 'DFL = EBIT / (EBIT − Interest)', note: 'Rises with fixed interest charges.' },
        { id: 'f-c-24', name: 'Breakeven quantity', expr: 'Q_BE = (F + Fixed financing) / (P − V)', note: 'Contribution margin per unit covers fixed costs.' },
      ],
      cards: [
        { id: 'c-c-20', front: 'Which WACC component gets a tax adjustment?', back: 'Only the cost of debt, r_d(1 − t) — interest is deductible, dividends are not.' },
        { id: 'c-c-21', front: 'Which weights belong in WACC?', back: 'Market-value weights reflecting the target capital structure, not book values.' },
        { id: 'c-c-22', front: 'DOL vs DFL', back: 'DOL comes from fixed *operating* costs; DFL from fixed *financing* costs. DTL = DOL × DFL.' },
        { id: 'c-c-24', front: 'MM Proposition I without taxes', back: 'Firm value is independent of capital structure: V_L = V_U.' },
        { id: 'c-c-25', front: 'Pecking order theory', back: 'Internal funds first, then debt, then equity as a last resort — because equity issues signal overvaluation under asymmetric information.' },
        { id: 'c-c-26', front: 'Static trade-off theory', back: 'Optimal leverage is where the marginal tax benefit of debt equals the marginal cost of financial distress.' },
      ],
      questions: [
        {
          id: 'q-co-020', difficulty: 'easy',
          stem: 'A firm is financed 40% by debt and 60% by equity. Its pre-tax cost of debt is 6%, its cost of equity is 12%, and its tax rate is 25%. Its WACC is closest to:',
          choices: ['9.6%', '9.0%', '8.4%'],
          answer: 0,
          explain: 'WACC = 0.40 × 6% × 0.75 + 0.60 × 12% = 1.8% + 7.2% = 9.6%.',
          why: [
            'B omits the tax shield on debt.',
            'C applies the tax adjustment to the cost of equity as well.',
          ],
        },
        {
          id: 'q-co-021', difficulty: 'medium',
          stem: 'A company has EBIT of $5 million and interest expense of $1 million. Its degree of financial leverage is closest to:',
          choices: ['0.80', '1.25', '5.00'],
          answer: 1,
          explain: 'DFL = EBIT / (EBIT − Interest) = 5/4 = 1.25.',
          why: [
            'A inverts the ratio.',
            'C is the interest coverage ratio.',
          ],
        },
        {
          id: 'q-co-070', difficulty: 'medium',
          stem: 'Under Modigliani–Miller with no taxes, a company\'s unlevered cost of capital is 10% and its cost of debt is 6%. If it adopts a debt-to-equity ratio of 0.5, its cost of equity is closest to:',
          choices: ['12.0%', '10.0%', '8.0%'],
          answer: 0,
          explain: 'r_e = r₀ + (r₀ − r_d)(D/E) = 10% + (10% − 6%)(0.5) = 12.0%. Equity holders demand more as financial risk rises, keeping WACC at 10%.',
          why: [
            'B ignores the increase in equity risk from leverage.',
            'C wrongly assumes that adding cheaper debt lowers the cost of equity.',
          ],
        },
        {
          id: 'q-co-071', difficulty: 'hard',
          stem: 'A company needs to raise capital and has exhausted its retained earnings. According to pecking order theory, it will most likely:',
          choices: ['issue new common equity', 'issue debt', 'reduce its dividend to zero before considering any external financing'],
          answer: 1,
          explain: 'Pecking order theory ranks financing by the information it signals: internal funds first, debt second, equity last. Debt is preferred over equity because an equity issue suggests management believes the shares are overvalued.',
          why: [
            'A is the least preferred source under the theory.',
            'C is not a prediction of the theory once internal funds are already exhausted.',
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
          explain: 'Fixed operating costs drive DOL; fixed financing costs drive DFL.',
          why: [
            'B reverses both relationships.',
            'C ignores that leverage measures sensitivity, not the level of income.',
          ],
        },
        {
          id: 'q-co-072', difficulty: 'expert',
          stem: 'Under Modigliani–Miller with corporate taxes, an all-equity company is worth $100 million. It issues $40 million of permanent debt and uses the proceeds to repurchase shares. The tax rate is 25%. The value of the levered company is closest to:',
          choices: ['$110 million', '$100 million', '$140 million'],
          answer: 0,
          explain: 'V_L = V_U + tD = 100 + 0.25 × 40 = $110 million. The increase is the present value of the perpetual interest tax shield.',
          why: [
            'B is the no-tax MM result.',
            'C adds the full amount of debt rather than the value of its tax shield.',
          ],
        },
        {
          id: 'q-co-023', difficulty: 'expert',
          stem: 'A product sells for $50 with variable costs of $30 per unit. Fixed operating costs are $200,000 and fixed financing costs are $60,000. The breakeven quantity is closest to:',
          choices: ['10,000 units', '13,000 units', '5,200 units'],
          answer: 1,
          explain: 'Contribution margin = $20. Q_BE = 260,000 / 20 = 13,000 units.',
          why: [
            'A is the operating breakeven, covering only fixed operating costs.',
            'C divides by the selling price rather than the contribution margin.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'corp-business-models',
      name: 'Business Models',
      los: [
        'Describe key features of business models, including value proposition, channels and pricing',
        'Describe various types of business models, including platform and subscription models',
        'Explain unit economics and network effects',
        'Describe how business models create and capture value',
      ],
      lessons: [
        {
          id: 'corp-business-models-l1',
          title: 'How a company makes money',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'A business model describes **who the customers are**, **what the company offers them** (the value proposition), **how it reaches them** (channels), **how it prices**, and **how it delivers** — the value chain and key assets. Before valuing a company, an analyst should be able to state its business model in a sentence.' },
            { t: 'h', x: 'Pricing strategies' },
            {
              t: 'table',
              head: ['Strategy', 'Mechanism'],
              rows: [
                ['Cost-plus', 'Price = cost + a markup'],
                ['Value-based', 'Price reflects the value to the customer, not the cost to produce'],
                ['Tiered / volume', 'Different prices by quantity or customer segment'],
                ['Dynamic', 'Prices change with demand in real time (airlines, ride-hailing)'],
                ['Freemium', 'A basic version is free; premium features are paid'],
                ['Razor-and-blades', 'Sell the core product cheaply; profit on recurring consumables'],
                ['Bundling', 'Sell products together for a single price'],
                ['Auction / reverse auction', 'Buyers or sellers bid to set the price'],
              ],
            },
            { t: 'h', x: 'Business model types' },
            {
              t: 'ul',
              x: [
                '**Subscription** — recurring revenue for ongoing access; valued for predictability and customer lifetime.',
                '**Platform (multi-sided)** — connects different user groups, such as buyers and sellers, earning fees on transactions.',
                '**Asset-light** — outsourcing capital-intensive activities (manufacturing, property) to earn higher returns on invested capital.',
                '**Franchise** — the franchisor licenses its brand and system in exchange for fees and royalties.',
                '**Licensing** — earning royalties from intellectual property used by others.',
                '**Private label** — retailers selling goods manufactured by others under their own brand.',
              ],
            },
            { t: 'h', x: 'Network effects' },
            { t: 'p', x: 'A product has **network effects** when it becomes more valuable as more people use it. **Direct** effects occur within one group (a messaging app is more useful when your contacts join). **Indirect** effects occur across groups (more buyers attract more sellers, and vice versa). Strong network effects can create winner-take-most markets and durable competitive advantage.' },
            { t: 'h', x: 'Unit economics' },
            {
              t: 'formula', name: 'Customer lifetime value vs acquisition cost',
              x: 'Customer lifetime value (simplified) ≈ Margin per period / Churn rate per period\n\nA viable model needs LTV comfortably above\nCustomer acquisition cost (CAC).',
            },
            {
              t: 'callout', label: 'Growth that destroys value', kind: 'warn',
              x: 'If it costs more to acquire a customer than that customer will ever generate in margin, faster growth accelerates losses. Revenue growth alone says nothing about whether a model works — unit economics do.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-c-40', name: 'Customer lifetime value (simplified)', expr: 'Margin per period / Churn rate per period', note: 'Ignores discounting; compare with customer acquisition cost.' },
      ],
      cards: [
        { id: 'c-c-60', front: 'Razor-and-blades pricing', back: 'Sell the core product at low or negative margin and earn profit on recurring consumables.' },
        { id: 'c-c-61', front: 'Direct vs indirect network effects', back: 'Direct: value rises as more users of the same type join. Indirect: value rises as more users of a complementary group join (buyers ↔ sellers).' },
        { id: 'c-c-62', front: 'Test of viable unit economics', back: 'Customer lifetime value comfortably exceeds customer acquisition cost.' },
        { id: 'c-c-63', front: 'Asset-light business model', back: 'Outsources capital-intensive activities to raise return on invested capital.' },
      ],
      questions: [
        {
          id: 'q-co-080', difficulty: 'easy',
          stem: 'A printer manufacturer sells printers near cost and earns most of its profit from replacement ink cartridges. This pricing approach is best described as:',
          choices: ['cost-plus pricing', 'razor-and-blades pricing', 'dynamic pricing'],
          answer: 1,
          explain: 'Selling the durable product cheaply to lock in profitable recurring purchases of consumables is the razor-and-blades model.',
          why: [
            'A adds a markup to cost for each product independently.',
            'C adjusts prices in real time with demand.',
          ],
        },
        {
          id: 'q-co-081', difficulty: 'medium',
          stem: 'An online marketplace becomes more attractive to sellers as more buyers join, and more attractive to buyers as more sellers join. This is an example of:',
          choices: ['direct network effects', 'indirect network effects', 'economies of scope'],
          answer: 1,
          explain: 'Value increases across two distinct user groups that complement each other — the defining feature of indirect (cross-side) network effects on a platform.',
          why: [
            'A involves value rising as more users of the *same* type join.',
            'C refers to cost savings from producing multiple products together.',
          ],
        },
        {
          id: 'q-co-082', difficulty: 'hard',
          stem: 'A company outsources all manufacturing and leases its offices, focusing on design and marketing. Compared with a vertically integrated peer, it most likely has:',
          choices: [
            'lower asset turnover and lower return on invested capital',
            'higher return on invested capital, but greater dependence on third-party suppliers',
            'higher fixed operating costs and higher operating leverage',
          ],
          answer: 1,
          explain: 'An asset-light model needs far less invested capital, which tends to raise ROIC. The trade-off is reliance on suppliers and less control over production quality and capacity.',
          why: [
            'A reverses the effect of a smaller asset base.',
            'C is wrong — outsourcing typically converts fixed costs into variable costs, lowering operating leverage.',
          ],
        },
        {
          id: 'q-co-083', difficulty: 'expert',
          vignette: 'A subscription start-up earns a contribution margin of $20 per customer per month. Monthly churn is 4%. The company spends $600 in marketing to acquire each new customer, and revenue is growing 15% a month.',
          stem: 'The most accurate assessment of the business model is that:',
          choices: [
            'rapid revenue growth confirms the model is creating value',
            'each new customer destroys value, because estimated lifetime value is below acquisition cost',
            'the model breaks even, because lifetime value equals acquisition cost',
          ],
          answer: 1,
          explain: 'Lifetime value ≈ margin / churn = 20 / 0.04 = $500, before any discounting — less than the $600 acquisition cost. Every customer added loses about $100, so faster growth accelerates value destruction until unit economics improve.',
          why: [
            'A mistakes revenue growth for value creation.',
            'C miscalculates lifetime value; $500 is below, not equal to, $600.',
          ],
        },
      ],
    },
  ],
};
