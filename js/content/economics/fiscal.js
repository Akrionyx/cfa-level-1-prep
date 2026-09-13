// Economics · Module 3 — Fiscal Policy. Original wording and numbers.

export default {
  id: 'econ-fiscal',
  name: 'Fiscal Policy',
  los: [
    'Compare monetary and fiscal policy',
    'Describe roles and objectives of fiscal policy, and arguments as to whether the size of a national debt relative to GDP matters',
    'Describe tools of fiscal policy, including their advantages and disadvantages',
    'Explain the implementation of fiscal policy and its difficulties, and whether a fiscal policy is expansionary or contractionary',
  ],
  lessons: [
    /* ------------------------------------------------------------ */
    {
      id: 'econ-fiscal-roles',
      title: 'Fiscal versus monetary policy, and what fiscal policy is for',
      minutes: 10,
      intro: 'Governments are the biggest spenders, employers and borrowers in most economies. Their budget decisions move aggregate demand, reshape who gets what, and steer resources between sectors.',
      blocks: [
        { t: 'h', x: 'Two levers on the economy' },
        {
          t: 'terms',
          x: [
            ['Fiscal policy', 'The **government\'s** decisions about **taxation and spending**.'],
            ['Monetary policy', '**Central bank** actions aimed at influencing the **quantity of money and credit** in the economy.'],
          ],
        },
        { t: 'p', x: 'A single household or company rarely moves a large economy. Governments do, for two reasons: the public sector employs a large share of workers and accounts for a large share of spending, and governments are the **largest borrowers** in world debt markets.' },
        { t: 'p', x: 'Both policies share the same overarching goal: an environment where **growth is stable and positive** and **inflation is stable and low**, avoiding booms that end in long slumps. That stability lets households plan their saving and lets firms concentrate on investment, paying their bondholders and earning profits for shareholders. Fiscal policy has an extra role that monetary policy lacks: it can deliberately **redistribute income and wealth**.' },
        {
          t: 'check',
          q: 'Which is *least likely* to be a goal of a government\'s fiscal policy?',
          choices: ['Redistributing income and wealth', 'Keeping the purchasing power of the currency stable', 'Influencing aggregate output'],
          answer: 1,
          explain: 'Protecting the currency\'s purchasing power (price stability) is the core job of monetary policy. Redistribution and managing aggregate demand are fiscal roles.',
        },
        { t: 'h', x: 'The three roles of fiscal policy' },
        {
          t: 'ol',
          x: [
            '**Influence aggregate demand** and therefore the level of economic activity.',
            '**Redistribute income and wealth** across groups in society.',
            '**Allocate resources** between sectors and economic agents.',
          ],
        },
        { t: 'p', x: 'Expansionary fiscal policy can take many forms: cutting personal income tax to raise disposable income; cutting sales taxes to lower prices; cutting corporate tax to encourage investment; cutting taxes on savings income; or spending more on infrastructure, hospitals and schools. None of these works mechanically, though. In a recession, households may **save** a tax cut as a precaution rather than spend it.' },
        {
          t: 'callout', label: 'Two schools of thought',
          x: '**Keynesians** believe fiscal policy can strongly affect output and employment when the economy has plenty of spare capacity. **Monetarists** believe fiscal changes affect demand only temporarily, that monetary policy is the better tool for controlling inflation, and they are wary of using either policy to fine-tune the cycle.',
        },
        { t: 'h', x: 'The budget balance and automatic stabilisers' },
        { t: 'p', x: 'The **budget surplus or deficit** is the difference between government revenue and spending over a period such as a year. Revenue is counted net of transfer payments, and spending includes interest on the debt. Analysts usually focus on the *change* in the balance: a larger surplus suggests tighter policy, a larger deficit suggests looser policy.' },
        { t: 'p', x: 'But the balance moves on its own over the cycle. When the economy slows, unemployment benefits rise and progressive tax receipts fall, pushing the budget toward deficit and supporting demand. In a boom, the reverse happens. These **automatic stabilisers** need no new decision and no one has to spot the shock — their great advantage. They are distinct from **discretionary** policy, where the government actively changes spending or tax rates.' },
        {
          t: 'check',
          q: 'Which of the following best represents a *contractionary* fiscal policy?',
          choices: ['A temporary suspension of payroll taxes', 'A freeze on discretionary government spending', 'New public spending on a rail line'],
          answer: 1,
          explain: 'Freezing discretionary spending reduces the government\'s contribution to demand. The other two add to it.',
        },
        {
          t: 'check',
          q: 'A "pay-as-you-go" rule requires every tax cut or new spending commitment to be offset by a tax rise or spending cut elsewhere. Its fiscal stance is best described as:',
          choices: ['contractionary', 'expansionary', 'neutral'],
          answer: 2,
          explain: 'Each change is offset, so the rule leaves the overall budget balance — and the fiscal impulse — unchanged.',
        },
        {
          t: 'takeaways',
          x: [
            'Fiscal policy = government taxes and spending; monetary policy = central bank influence over money and credit.',
            'Both aim for stable, positive growth and low, stable inflation; fiscal policy can also redistribute.',
            'Automatic stabilisers move the budget countercyclically without any decision; discretionary policy requires one.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-fiscal-debt',
      title: 'Deficits and the national debt: should we worry?',
      minutes: 10,
      intro: 'Deficits are flows; debt is the stock they build up. Whether a large debt is dangerous depends on growth, interest rates, inflation — and who owns it.',
      blocks: [
        { t: 'p', x: 'A **deficit** is the gap between spending and revenue in one period. The **national debt** is the accumulation of past deficits (minus surpluses). Deficits are financed by borrowing from the private sector — often pension funds and insurers — at home or abroad. Governments run deficits far more often than surpluses, and historically the biggest jumps in debt-to-GDP ratios have come from financing wars, and more recently from stimulus after the 2008–09 financial crisis and the pandemic.' },
        { t: 'h', x: 'What makes a debt ratio rise or fall' },
        {
          t: 'formula', name: 'Debt dynamics (approximate, per year)',
          x: 'Change in debt/GDP ≈ (real interest rate − real growth rate) × debt/GDP − primary surplus/GDP\n\nPrimary balance = revenue − spending excluding interest payments',
        },
        {
          t: 'steps',
          title: 'Worked example — a growing economy with a rising debt ratio',
          given: 'A government has debt of 100% of GDP. The real interest rate on its debt is 3% and the economy grows at 1% a year in real terms. It runs a balanced primary budget (no primary surplus or deficit).',
          ask: 'What happens to the debt ratio? What primary surplus would stabilise it?',
          x: [
            'Interest adds 3% of the debt each year, while GDP — the denominator — grows only 1%.',
            'Change in debt/GDP ≈ (3% − 1%) × 100% − 0 = **+2 percentage points a year**.',
            'To hold the ratio steady, the primary surplus must cover the gap: (3% − 1%) × 100% = **2% of GDP**.',
          ],
          result: 'Even with a growing economy, the ratio climbs whenever the real interest rate exceeds real growth — unless the government runs a primary surplus.',
        },
        {
          t: 'ul',
          x: [
            '**Inflation** raises nominal GDP and erodes the real value of existing debt, so the ratio can fall even with flat real output. **Deflation** does the opposite.',
            'Beyond some unknown point, markets question **solvency**. Interest payments relative to GDP are a second warning sign. If investors lose confidence, borrowing costs can spiral.',
          ],
        },
        { t: 'h', x: 'The case against worrying' },
        {
          t: 'ol',
          x: [
            'Debt **owed to domestic residents** is partly a transfer among citizens rather than a claim by outsiders. (The share held at home varies a lot between countries.)',
            'Borrowing may fund **capital projects or education** that raise future output and tax revenue.',
            'Large deficits may force **tax reforms** that remove existing distortions.',
            '**Ricardian equivalence:** if people expect higher future taxes to repay the debt, they save more today, offsetting the deficit\'s effect.',
            'With **high unemployment**, borrowing does not divert resources from productive use — and may create jobs.',
          ],
        },
        { t: 'h', x: 'The case for worrying' },
        {
          t: 'ol',
          x: [
            'High debt may lead to **higher future tax rates**, discouraging work and enterprise and lowering long-run growth.',
            'If markets lose confidence, the central bank may be pushed to **print money** to fund the government, risking high inflation.',
            'Government borrowing may **crowd out** private investment: with limited savings, more public borrowing pushes up interest rates and squeezes private capital spending.',
          ],
        },
        {
          t: 'callout', label: 'Short run versus long run',
          x: 'Over a few years, crowding out and tax distortions may be small. Sustained over decades, they can damage an economy\'s capital stock and growth. Much of the disagreement about debt is really disagreement about time horizon.',
        },
        {
          t: 'check',
          q: 'Which of the following is an argument *for* being concerned about a high national debt?',
          choices: ['The debt is largely owed to fellow citizens', 'Higher future taxes may reduce the incentive to work and invest', 'The borrowing financed investment in human capital'],
          answer: 1,
          explain: 'The disincentive effect of higher future tax rates is a reason for concern. The other two are standard arguments that the debt may be less worrying.',
        },
        { t: 'h', x: 'Ricardian equivalence in more detail' },
        { t: 'p', x: 'Suppose the government cuts taxes by $20 billion this year and borrows the $20 billion instead. If households recognise that the bonds must be serviced and repaid from future taxes, they treat the tax cut as a delayed tax bill and **save the whole amount**. Spending does not change, and the stimulus fails. If they do not fully anticipate future taxes, they feel richer and spend some of it. Whether the theory holds is an empirical question, and hard to test cleanly.' },
        {
          t: 'check',
          q: 'If Ricardian equivalence holds fully, a debt-financed tax cut will most likely:',
          choices: ['raise consumption by the fiscal multiplier', 'have no effect on consumption, because households save the cut', 'reduce national saving'],
          answer: 1,
          explain: 'Households anticipate higher future taxes and save exactly the amount of the tax cut, so private saving rises to offset government dissaving.',
        },
        {
          t: 'takeaways',
          x: [
            'The debt ratio rises when real interest rates exceed real growth, unless the government runs a primary surplus; inflation erodes it.',
            'Arguments against concern: internal ownership, productive investment, tax reform, Ricardian equivalence, slack economy.',
            'Arguments for concern: future tax disincentives, risk of monetisation and inflation, crowding out.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-fiscal-tools',
      title: 'Fiscal tools and the multiplier',
      minutes: 13,
      intro: 'Governments spend in three ways and tax in two. The multiplier explains why one dollar of fiscal stimulus can raise output by several.',
      blocks: [
        { t: 'h', x: 'Spending tools' },
        {
          t: 'table',
          head: ['Tool', 'What it is', 'Notes'],
          rows: [
            ['**Transfer payments**', 'Pensions, housing and child benefits, unemployment support, tax credits', 'Guarantee a minimum income and redistribute. **Not** part of GDP or government spending on goods and services — no production is being paid for.'],
            ['**Current spending**', 'Recurring goods and services: health, education, defence', 'Shapes skills and productivity over time'],
            ['**Capital spending**', 'Infrastructure: roads, hospitals, schools, prisons', 'Adds to the capital stock and raises productive potential'],
          ],
        },
        { t: 'p', x: 'Spending is justified on several grounds: providing services such as defence that benefit everyone; building infrastructure for growth; guaranteeing a minimum income; managing aggregate demand; and subsidising risky innovation, such as new energy technologies.' },
        { t: 'h', x: 'Revenue tools' },
        {
          t: 'terms',
          x: [
            ['Direct taxes', 'Levied on **income, wealth and profits**: income and payroll taxes, corporate tax, capital gains tax, property and inheritance taxes.'],
            ['Indirect taxes', 'Levied on **spending**: sales tax or VAT, and excise duties on fuel, alcohol and tobacco. Can also serve social or environmental aims.'],
          ],
        },
        {
          t: 'table',
          head: ['Desirable attribute of a tax system', 'Meaning'],
          rows: [
            ['**Simplicity**', 'Easy to comply with and enforce; liabilities certain and hard to manipulate'],
            ['**Efficiency**', 'Interferes as little as possible with people\'s choices; minimal discouragement of work and investment'],
            ['**Fairness**', 'Horizontal equity (similar people pay similar tax) and vertical equity (richer people pay more)'],
            ['**Revenue sufficiency**', 'Raises enough — which can conflict with efficiency and fairness'],
          ],
        },
        {
          t: 'check',
          q: 'Which of the following is *not* a tool of fiscal policy?',
          choices: ['Raising the minimum deposit required to buy a house with a mortgage', 'Increasing social transfer payments', 'Buying new equipment for the armed forces'],
          answer: 0,
          explain: 'Deposit requirements restrict credit for house purchases — a monetary or macroprudential tool. The other two are government spending.',
        },
        { t: 'h', x: 'Advantages and disadvantages of the tools' },
        {
          t: 'table',
          head: ['Tool', 'Speed', 'Other points'],
          rows: [
            ['Indirect taxes', '**Fast** — can take effect almost immediately', 'Change spending behaviour quickly, cheap to collect, useful for social aims (e.g. discouraging smoking)'],
            ['Direct taxes and transfers', 'Slower — payroll and benefit systems need notice, often months', 'The announcement alone may change behaviour'],
            ['Capital spending', '**Slowest** — years of planning, permission and building', 'Poor for short-term stabilisation, but uniquely adds to productive capacity'],
          ],
        },
        { t: 'p', x: 'On potency: **direct government spending** has a much bigger effect on output than an equal tax cut or broad transfer increase, because none of the first round leaks into saving. Transfers aimed at the **poorest households**, who spend almost all of any extra income, come closer.' },
        { t: 'h', x: 'The fiscal multiplier' },
        { t: 'p', x: 'When the government spends a dollar, that dollar becomes someone\'s income. Part is taxed, part saved, and the rest spent — becoming someone else\'s income, which is again partly spent, and so on. The rounds shrink geometrically, and their sum is the **multiplier**.' },
        {
          t: 'formula', name: 'Fiscal multiplier',
          x: 'Multiplier = 1 / [1 − MPC × (1 − t)]\n\nMPC = marginal propensity to consume (share of extra disposable income spent)\nMPS = 1 − MPC\nt   = net tax rate\nChange in output = multiplier × change in government spending',
        },
        {
          t: 'steps',
          title: 'Worked example — sizing a stimulus',
          given: 'Households spend 85% of any extra disposable income, and the net tax rate is 20%. The government increases spending by $10 billion.',
          ask: 'What is the multiplier, and how much does output rise?',
          x: [
            'Out of each extra $1 of income, $0.20 goes in tax, leaving $0.80 of disposable income.',
            'Spending per $1 of income = 0.85 × 0.80 = **0.68** — this is the ratio each round shrinks by.',
            'Multiplier = 1 / (1 − 0.68) = 1 / 0.32 = **3.125**.',
            'Change in output = 3.125 × $10 billion = **$31.25 billion**.',
          ],
          result: 'Multiplier 3.125; output rises by about $31 billion — assuming spare capacity and constant prices.',
        },
        {
          t: 'check',
          q: 'The MPC is 0.9 and the net tax rate is 25%. The fiscal multiplier is closest to:',
          choices: ['3.08', '10.0', '1.33'],
          answer: 0,
          explain: '1 / [1 − 0.9 × 0.75] = 1 / (1 − 0.675) = 1 / 0.325 ≈ 3.08. Ignoring tax gives 10; 1/0.75 gives 1.33.',
        },
        { t: 'h', x: 'The balanced budget multiplier' },
        { t: 'p', x: 'Surprisingly, raising spending and taxes by the **same amount** still increases output. Suppose spending rises by $100 and taxes by $100, with an MPC of 0.8. The spending adds $100 of demand directly. The tax cuts disposable income by $100, but households reduce spending by only $80 — they would have saved the other $20. Net first-round demand rises by $20, which then multiplies.' },
        {
          t: 'callout', label: 'Result to remember',
          x: 'If the spending increase is set so that it is exactly matched by the *total* rise in tax revenue it generates, the **balanced budget multiplier equals 1**: output rises by the amount of the extra spending.',
        },
        {
          t: 'takeaways',
          x: [
            'Spending tools: transfers (not in GDP), current spending, capital spending. Revenue tools: direct and indirect taxes.',
            'Good taxes are simple, efficient, fair and raise enough revenue.',
            'Indirect taxes act fastest; capital projects slowest but build capacity.',
            'Multiplier = 1/[1 − MPC(1 − t)]; a balanced-budget spending increase still raises output (multiplier of 1).',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-fiscal-implementation',
      title: 'Judging the fiscal stance, and why policy is hard to get right',
      minutes: 9,
      intro: 'A bigger deficit does not always mean looser policy — and even well-designed policy arrives late, into an economy that has already moved on.',
      blocks: [
        { t: 'h', x: 'Is policy expansionary or contractionary?' },
        { t: 'p', x: 'The actual budget deficit is a poor gauge of what policymakers are doing, because automatic stabilisers widen the deficit in any recession. An observer who saw only the headline deficit might think policy had been loosened and that no action was needed.' },
        {
          t: 'terms',
          x: [
            ['Structural (cyclically adjusted) deficit', 'The deficit that **would exist at full employment** / potential output. It strips out the cycle and is the preferred indicator of the fiscal stance.'],
            ['Real vs nominal interest', 'National accounts count cash interest on the debt as spending, but inflation is simultaneously eroding the real value of that debt. Counting only real interest gives a truer picture of the stance.'],
          ],
        },
        {
          t: 'check',
          q: 'During a recession a country\'s actual deficit widens from 2% to 6% of GDP while its cyclically adjusted deficit stays at 2%. The best conclusion is that:',
          choices: ['the government has launched a large discretionary stimulus', 'the widening reflects automatic stabilisers; the discretionary stance is unchanged', 'fiscal policy has turned contractionary'],
          answer: 1,
          explain: 'An unchanged structural deficit means policy itself has not changed; the extra deficit came from falling revenue and rising benefits during the downturn.',
        },
        { t: 'h', x: 'Three lags' },
        {
          t: 'table',
          head: ['Lag', 'Meaning', 'Why it is long for fiscal policy'],
          rows: [
            ['**Recognition**', 'Time to realise action is needed', 'Data arrive late and get revised — like driving while looking in the rear-view mirror'],
            ['**Action**', 'Time to decide and implement', 'Legislation, political debate, and months or years to plan capital projects'],
            ['**Impact**', 'Time for the policy to affect the economy', 'Effects build gradually as spending and income ripple through'],
          ],
        },
        { t: 'h', x: 'Other difficulties' },
        {
          t: 'ul',
          x: [
            '**Uncertainty about where the economy is heading anyway.** A stimulus may coincide with a surprise surge in investment or exports, overheating the economy. Forecasting models have a weak record, and private behaviour may itself shift when a policy is announced.',
            '**Inflation risk.** Pushing demand toward full employment can tighten the labour market and raise wages and prices, so governments that care about both jobs and inflation may hesitate.',
            '**Market limits.** If the deficit is already large, further stimulus may push up government borrowing costs and create political pressure to cut.',
            '**Unknown full employment.** Nobody knows precisely where full employment is, and it shifts as capacity and workers\' willingness to work change.',
            '**Supply-side slack.** If idle resources reflect a shortage of labour or other inputs rather than weak demand, extra spending just adds inflation.',
            '**Crowding out.** Government borrowing from a limited pool of savings can push up interest rates and cancel profitable private projects — the size of the effect is still debated.',
          ],
        },
        {
          t: 'check',
          q: 'Which of the following is an example of an *automatic* stabiliser?',
          choices: ['New plans for additional road building', 'Progressive income taxes whose receipts fall as incomes fall', 'A temporary cut in VAT announced during a slump'],
          answer: 1,
          explain: 'Progressive tax receipts fall automatically in a downturn with no new decision. Road building and a VAT cut are discretionary.',
        },
        {
          t: 'check',
          q: 'Which statement is most accurate?',
          choices: ['An increase in government spending is always expansionary', 'The structural deficit is always larger than the actual deficit', 'Different economic models will predict different effects from the same fiscal stimulus'],
          answer: 2,
          explain: 'Models embody different views of how the economy works, so their predictions differ. Higher spending can be offset by even higher taxes, and the structural deficit is smaller than the actual deficit in a recession.',
        },
        {
          t: 'takeaways',
          x: [
            'Use the structural (cyclically adjusted) deficit, not the headline deficit, to judge the fiscal stance.',
            'Fiscal policy suffers recognition, action and impact lags — the action lag is especially long.',
            'Uncertainty, inflation risk, market limits, unknown full employment and crowding out mean fiscal policy can never stabilise demand perfectly.',
          ],
        },
      ],
    },
  ],

  formulas: [
    { id: 'f-e-20', name: 'Fiscal multiplier', expr: '1 / [1 − MPC(1 − t)]', note: 'Larger with a higher MPC and a lower tax rate.' },
    { id: 'f-e-21', name: 'Change in output from spending', expr: 'ΔGDP = Multiplier × ΔG', note: 'A tax cut has a smaller effect, since part is saved in the first round.' },
    { id: 'f-e-22', name: 'Balanced budget multiplier', expr: '= 1', note: 'A spending rise fully matched by the resulting rise in tax revenue still raises output by the amount of the spending.' },
    { id: 'f-e-23', name: 'Debt dynamics', expr: 'Δ(Debt/GDP) ≈ (r − g) × Debt/GDP − Primary surplus/GDP', note: 'r = real interest rate on debt, g = real growth. The ratio rises whenever r > g without a primary surplus.' },
  ],

  cards: [
    { id: 'c-e-30', front: 'Fiscal multiplier formula', back: '1 / [1 − MPC(1 − t)]' },
    { id: 'c-e-31', front: 'Ricardian equivalence', back: 'Households anticipate that a deficit-financed tax cut means higher future taxes, save it, and the stimulus has no effect on demand.' },
    { id: 'c-e-32', front: 'Why is the structural deficit a better gauge of fiscal stance?', back: 'The actual deficit changes automatically over the cycle. The structural (cyclically adjusted) deficit strips out that effect.' },
    { id: 'c-e-33', front: 'Crowding out', back: 'Government borrowing raises interest rates and displaces private investment, weakening fiscal stimulus.' },
    { id: 'c-e-34', front: 'Which policy has the longer action lag?', back: 'Fiscal — it requires legislation. Monetary policy can be changed quickly by committee decision.' },
    { id: 'c-e-35', front: 'Four desirable attributes of tax policy', back: 'Simplicity, efficiency, fairness (horizontal and vertical equity), revenue sufficiency.' },
    { id: 'c-e-36', front: 'Are transfer payments part of GDP?', back: 'No. They redistribute income but do not pay for any production.' },
    { id: 'c-e-37', front: 'Three roles of fiscal policy', back: 'Influence aggregate demand; redistribute income and wealth; allocate resources between sectors.' },
  ],

  questions: [
    {
      id: 'q-ec-026', difficulty: 'easy',
      stem: 'Which of the following is best described as an automatic stabiliser?',
      choices: ['A new infrastructure programme approved by parliament', 'Unemployment benefits that rise as job losses increase', 'A temporary cut in VAT announced during a recession'],
      answer: 1,
      explain: 'Unemployment benefits increase automatically as the economy weakens, supporting demand without any new decision. That is the defining feature of an automatic stabiliser.',
      why: [
        'A and C are both discretionary policy — each requires a deliberate decision and suffers recognition and action lags.',
      ],
    },
    {
      id: 'q-ec-027', difficulty: 'medium',
      stem: 'An economy has a marginal propensity to consume of 0.8 and a marginal tax rate of 25%. The fiscal multiplier is closest to:',
      choices: ['2.5', '5.0', '1.25'],
      answer: 0,
      explain: 'Multiplier = 1/[1 − 0.8(1 − 0.25)] = 1/(1 − 0.60) = 1/0.40 = 2.5.',
      why: [
        'B (5.0) ignores taxation, computing 1/(1 − 0.8).',
        'C (1.25) inverts the MPC, 1/0.8, which is not the multiplier formula.',
      ],
    },
    {
      id: 'q-ec-022', difficulty: 'hard',
      stem: 'Compared with monetary policy, fiscal policy most likely has:',
      choices: [
        'a shorter action lag but a longer impact lag.',
        'a longer action lag, because changes generally require legislative approval.',
        'no recognition lag, because fiscal authorities observe tax receipts in real time.',
      ],
      answer: 1,
      explain: 'Fiscal changes must pass through a political process — proposal, debate, enactment — which makes the action lag substantially longer than a central bank committee\'s decision to move rates.',
      why: [
        'A reverses the comparison on the action lag.',
        'C is wrong because both policies face a recognition lag; economic data arrive with delay and are revised.',
      ],
    },
    {
      id: 'q-ec-028', difficulty: 'expert',
      stem: 'During a recession a government\'s actual budget deficit widens from 2% to 5% of GDP, while its cyclically adjusted deficit is unchanged. The most accurate conclusion is that:',
      choices: [
        'the government has adopted a strongly expansionary discretionary policy.',
        'the wider deficit reflects automatic stabilisers, and the discretionary fiscal stance is unchanged.',
        'fiscal policy has become contractionary, because the structural deficit did not rise.',
      ],
      answer: 1,
      explain: 'The cyclically adjusted deficit strips out the effect of the business cycle on revenues and benefit spending. If it is unchanged, the entire widening came from automatic stabilisers — falling tax receipts and rising transfers — not from any change in policy.',
      why: [
        'A mistakes the cyclical widening for a deliberate stimulus.',
        'C is wrong because an unchanged structural deficit signals a neutral change in stance, not a contractionary one.',
      ],
    },
    {
      id: 'q-ec-107', difficulty: 'hard',
      vignette: 'A country\'s government debt is 80% of GDP. The real interest rate on the debt is 4%, real GDP growth is 1.5%, and the government runs a primary budget surplus of 1% of GDP.',
      stem: 'Over the next year, the debt-to-GDP ratio will most likely:',
      choices: ['rise by about 1 percentage point', 'fall by about 1 percentage point', 'stay roughly unchanged'],
      answer: 0,
      explain: 'Change ≈ (4% − 1.5%) × 80% − 1% = 2.0% − 1.0% = +1.0 percentage point. The primary surplus is not large enough to offset interest rates running above growth.',
      why: [
        'B ignores the interest–growth gap and counts only the primary surplus.',
        'C would require a primary surplus of 2% of GDP.',
      ],
    },
    {
      id: 'q-ec-108', difficulty: 'medium',
      stem: 'Which fiscal tool can most quickly influence spending behaviour after it is announced?',
      choices: ['Indirect taxes such as VAT or excise duties', 'Government capital spending on infrastructure', 'Changes to direct income tax rates'],
      answer: 0,
      explain: 'Indirect taxes can be applied to prices almost immediately. Direct taxes need payroll systems changed, and capital projects take years to plan and build.',
      why: [
        'B has the longest implementation lag of all fiscal tools, though it adds productive capacity.',
        'C generally needs months of notice to adjust payroll and withholding systems.',
      ],
    },
  ],
};
