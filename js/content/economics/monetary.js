// Economics · Module 4 — Monetary Policy. Original wording and numbers.

export default {
  id: 'econ-monetary',
  name: 'Monetary Policy',
  los: [
    'Describe the roles and objectives of central banks',
    'Describe tools used to implement monetary policy and the monetary transmission mechanism, and explain the relationships between monetary policy and economic growth, inflation, interest and exchange rates',
    'Describe qualities of effective central banks; contrast their use of inflation, interest rate and exchange rate targeting in expansionary or contractionary monetary policy; and describe the limitations of monetary policy',
    'Explain the interaction of monetary and fiscal policy',
  ],
  lessons: [
    /* ------------------------------------------------------------ */
    {
      id: 'econ-monetary-roles',
      title: 'What central banks do and what they aim for',
      minutes: 9,
      intro: 'In a world of paper money backed by nothing but trust, the institution that issues it carries enormous responsibility.',
      blocks: [
        { t: 'h', x: 'From gold to fiat money' },
        { t: 'p', x: 'Money was once convertible into a fixed quantity of gold — a gold standard. Major economies abandoned convertibility during the twentieth century. Today\'s money is **fiat money**: it cannot be exchanged for any commodity, but the law makes it **legal tender** that must be accepted in payment. It keeps its value only as long as people trust it. Because a fiat issuer could in principle create unlimited amounts, the central bank\'s role as guardian of that trust is crucial.' },
        { t: 'h', x: 'Six roles' },
        {
          t: 'table',
          head: ['Role', 'What it involves'],
          rows: [
            ['**Monopoly supplier of the currency**', 'Issues notes and reserves; guards the currency\'s value'],
            ['**Banker to the government and bankers\' bank**', 'Holds accounts for the government and commercial banks'],
            ['**Lender of last resort**', 'Can create money to lend to banks in a liquidity crisis; the knowledge that it will helps prevent bank runs — though not always'],
            ['**Regulator of the payments system**', 'Sets standards so payments settle safely; coordinates internationally'],
            ['**Conductor of monetary policy**', 'Its highest-profile role: influencing money and credit'],
            ['**Supervisor of the banking system**', 'Often, but **not always** — some countries use a separate supervisor or share the job'],
          ],
        },
        { t: 'p', x: 'Central banks also usually manage the country\'s **foreign currency and gold reserves**. Because central banks still hold large amounts of gold, heavy selling by them could depress the gold price.' },
        {
          t: 'callout', label: 'A bank run in practice',
          x: 'When wholesale funding markets froze in 2007, a UK mortgage lender that relied on them could not refinance its borrowing. News that it had asked the central bank for help triggered queues of depositors withdrawing savings. The run stopped only when the government guaranteed all its deposits; the bank was later nationalised. Lender-of-last-resort facilities and deposit insurance reduce the risk of runs, but confidence is fragile.',
        },
        {
          t: 'check',
          q: 'Which role is a central bank *least* likely to take on?',
          choices: ['Lender of last resort', 'Setting the tax rate on interest earned by savers', 'Supplier of the currency'],
          answer: 1,
          explain: 'Tax rates are set by governments — fiscal policy. Lending of last resort and issuing currency are core central bank roles.',
        },
        { t: 'h', x: 'The overarching objective: price stability' },
        { t: 'p', x: 'Central banks list many objectives — financial stability, a sound payments system, sometimes full employment or moderate long-term interest rates. But almost all name **price stability** as the overarching aim, which in practice means **controlling inflation**. A medium of exchange is only useful if its value is reasonably stable from one period to the next.' },
        {
          t: 'ul',
          x: [
            'Some mandates are single — price stability first and foremost.',
            'Some are dual or broader — the US Federal Reserve is charged with maximum employment, stable prices and moderate long-term interest rates.',
          ],
        },
        {
          t: 'check',
          q: 'The overarching long-run objective of most central banks is best described as:',
          choices: ['a current account surplus', 'fast economic growth', 'price stability'],
          answer: 2,
          explain: 'Whatever else is in the mandate, nearly every central bank puts stable prices — controlled inflation — at the centre.',
        },
        {
          t: 'takeaways',
          x: [
            'Fiat money has value only through trust and legal-tender status, which is why the issuer must be credible.',
            'Roles: currency supplier, banker to government and banks, lender of last resort, payments regulator, monetary policy, and often bank supervision.',
            'The overarching objective is price stability — controlling inflation.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-monetary-tools',
      title: 'The tools and the transmission mechanism',
      minutes: 12,
      intro: 'A central bank directly controls only a very short-term interest rate. This lesson shows how that one number reaches mortgages, share prices, the exchange rate and, eventually, inflation.',
      blocks: [
        { t: 'h', x: 'How banks create money' },
        { t: 'p', x: 'When a bank receives a deposit, it keeps a fraction as **reserves** and lends the rest. The borrower spends the loan, the money is deposited at another bank, which again keeps a fraction and lends the rest — and so on. Each round creates new deposits, so a given amount of reserves supports a much larger money supply.' },
        {
          t: 'formula', name: 'Money multiplier',
          x: 'Money multiplier = 1 / reserve requirement\n\nReserve requirement 8% → multiplier 12.5\n$100 of new reserves can support up to $1,250 of deposits',
        },
        { t: 'h', x: 'Three primary tools' },
        {
          t: 'table',
          head: ['Tool', 'How it works', 'Easing', 'Tightening'],
          rows: [
            ['**Open market operations**', 'Central bank buys or sells government bonds with banks or market makers, changing bank reserves', '**Buy** bonds → reserves rise → more lending', '**Sell** bonds → reserves fall → less lending'],
            ['**Policy (refinancing) rate**', 'The rate at which the central bank lends to banks, often via short-term repo agreements; banks set their own base rates off it', 'Cut the rate', 'Raise the rate'],
            ['**Reserve requirements**', 'Minimum share of deposits banks must hold as reserves', 'Lower the requirement', 'Raise the requirement'],
          ],
        },
        {
          t: 'ul',
          x: [
            '**Why banks follow the policy rate.** Banks will not lend to customers below the rate at which they themselves borrow. The central bank can create a shortage of reserves through open market operations, forcing banks to borrow from it at the policy rate. A higher rate means a bigger penalty for running short of liquidity, so banks lend less and money growth slows.',
            '**Repo mechanics.** To add liquidity, the central bank buys bonds from banks with an agreement to sell them back later (typically overnight to two weeks) — effectively a secured loan earning the repo rate. Names vary: some use a two-week repo rate or a "refinancing rate"; in the US the key target is the **federal funds rate**, the overnight rate at which banks lend reserves to one another, steered by open market operations.',
            '**Reserve requirements** are now rarely changed in developed economies — some central banks no longer set them — because changes are disruptive: a bank short of reserves may have to stop lending abruptly. They remain an active tool in many emerging markets.',
          ],
        },
        {
          t: 'check',
          q: 'A central bank makes repeated open market purchases of government bonds. This is most consistent with:',
          choices: ['an expansionary monetary policy', 'a contractionary monetary policy', 'a reduction in the money supply'],
          answer: 0,
          explain: 'Buying bonds pays banks with new reserves, which supports more lending and faster money growth.',
        },
        { t: 'h', x: 'The transmission mechanism' },
        { t: 'p', x: 'Firms and households borrow over years, not overnight — so how does an overnight rate matter? Because central bankers believe money is **not neutral in the short run**, a policy rate change travels through four interconnected channels:' },
        {
          t: 'flow',
          x: [
            '**Official policy rate** changes',
            '**Market interest rates** · **Asset prices** · **Expectations and confidence** · **Exchange rate**',
            '**Domestic demand** (consumption, investment) and **net external demand** (exports − imports)',
            '**Domestic inflationary pressure** and **import prices**',
            '**Inflation**',
          ],
        },
        {
          t: 'steps',
          title: 'Worked example — tracing a rate rise',
          given: 'The central bank raises its policy rate by 0.5 percentage points because inflation is running above target.',
          ask: 'Trace the likely effects through each channel.',
          x: [
            '**Market rates:** banks raise base rates, so borrowing costs rise at short and long maturities; households and firms borrow less.',
            '**Asset prices:** higher discount rates lower the value of bonds, shares and capital projects; lower wealth reduces consumption.',
            '**Expectations:** markets expect slower growth, weaker profits and possibly further hikes, so spending and borrowing plans are revised down.',
            '**Exchange rate:** higher rates tend to attract capital and strengthen the currency, making exports dearer abroad and imports cheaper at home.',
            'Weaker domestic demand and lower net exports reduce inflationary pressure, while a stronger currency directly lowers import prices.',
          ],
          result: 'Overall: slower growth in demand and downward pressure on inflation — typically with a lag of a year or more.',
        },
        {
          t: 'check',
          q: 'When a central bank sets its official interest rate, which of the following does it most *directly* seek to influence?',
          choices: ['Import prices', 'Domestically generated inflation', 'Inflation expectations'],
          answer: 2,
          explain: 'The policy rate acts directly on market rates, asset prices, the exchange rate and expectations. Import prices and domestic inflation respond later, through demand and the currency.',
        },
        {
          t: 'callout', label: 'Direction to memorise',
          x: 'A **cut** in the policy rate is intended to raise investment and consumption, lift asset prices and tend to **weaken** the currency. A **rise** does the opposite. The channels are interconnected, not independent.',
        },
        {
          t: 'takeaways',
          x: [
            'Fractional reserve banking multiplies reserves into deposits: multiplier = 1 / reserve requirement.',
            'Tools: open market operations, the policy rate (via repo), reserve requirements.',
            'Transmission runs through market rates, asset prices, expectations and the exchange rate to demand and inflation.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-monetary-effective',
      title: 'Effective central banks: independence, credibility, transparency and targets',
      minutes: 12,
      intro: 'Why most central banks target inflation, why the target is usually about 2%, and why some countries target an exchange rate instead.',
      blocks: [
        { t: 'h', x: 'Inflation targeting' },
        { t: 'p', x: 'From the 1990s a consensus formed that the best way to keep prices stable is to announce an explicit inflation target and watch a wide range of indicators to hit it. New Zealand pioneered the approach at the end of the 1980s, giving its central bank a legal target and operational freedom; dozens of countries followed. Success depends on three qualities.' },
        { t: 'h', x: '1. Independence' },
        { t: 'p', x: 'Politicians face elections and may be tempted to keep rates too low beforehand, stoking inflation later. So monetary policy is usually delegated to a central bank remote from the electoral cycle. Independence is a matter of degree — governments still appoint central bank heads.' },
        {
          t: 'terms',
          x: [
            ['Operational independence', 'The bank decides **how** to hit a target (it sets interest rates), but the government defines the inflation measure, target level and horizon.'],
            ['Target independence', 'The bank also chooses the inflation definition, the target rate and the horizon — as well as setting rates.'],
          ],
        },
        {
          t: 'check',
          q: 'A central bank decides the level of interest rates, the inflation rate it targets, and the horizon over which it aims to hit that target. It is best described as:',
          choices: ['operationally independent only', 'target independent and operationally independent', 'target independent only'],
          answer: 1,
          explain: 'Setting its own target and horizon is target independence; setting rates to achieve it is operational independence.',
        },
        { t: 'h', x: '2. Credibility' },
        { t: 'p', x: 'Imagine a heavily indebted government running inflation targeting itself. Inflation shrinks the real value of its debt, so nobody believes it will really keep inflation low — the target lacks credibility, and people expect high inflation regardless. By contrast, if the public believes a respected central bank will hit 2%, that expectation gets built into wage deals and price contracts, and the belief becomes **self-fulfilling**. That is why central banks watch inflation expectations so closely: unanchored expectations after, say, an oil price shock can feed into wages and embed higher inflation.' },
        { t: 'h', x: '3. Transparency' },
        { t: 'p', x: 'Credibility is built by explaining decisions. Many central banks publish regular **inflation reports** covering money and credit conditions, financial markets, the real economy (such as the labour market) and prices, followed by forecasts of growth and inflation about two years ahead.' },
        { t: 'h', x: 'The target itself' },
        {
          t: 'ul',
          x: [
            'Many developed-market central banks target around **2% consumer price inflation**, often with a tolerance band of about ±1 percentage point.',
            '**Why not 0%?** Inflation will sometimes undershoot, so a zero target would regularly produce **deflation**, which monetary policy struggles to fight because rates cannot go far below zero.',
            '**Why not 10%?** That would not be price stability, and high inflation tends to be volatile and uncertain.',
            '**Why target two years ahead?** Measured inflation reflects the past twelve months, and rate changes take time to work — so policy aims at where inflation is heading, not where it has been.',
          ],
        },
        {
          t: 'callout', label: 'Features of an inflation-targeting framework',
          x: 'An independent and credible central bank · a commitment to transparency · decisions based on a wide range of economic and financial indicators · a clear, symmetric, forward-looking medium-term target — high enough above zero to avoid deflation, low enough to mean price stability.',
        },
        {
          t: 'ul',
          x: [
            '**Exceptions.** Japan\'s central bank long battled *deflation* rather than inflation, and pledging a positive target is only useful if people believe the bank can achieve it. The US Federal Reserve has a dual mandate that includes maximum employment; in practice it treats about 2% inflation, measured by the core personal consumption expenditures price index, as consistent with stable prices.',
            '**Developing economies** face extra obstacles: shallow government bond and interbank markets for conducting policy; rapidly changing economies that make the neutral rate hard to judge; financial innovation that keeps changing what "money" means; a poor inflation track record that undermines credibility; and governments reluctant to grant true independence.',
          ],
        },
        { t: 'h', x: 'Exchange rate targeting' },
        { t: 'p', x: 'Many developing economies instead fix their currency, or keep it within a band, against a major currency — often the US dollar — defending it by buying and selling their own currency. The idea is to **import the low inflation** of the anchor country.' },
        {
          t: 'steps',
          title: 'Worked example — defending a peg',
          given: 'A country pegs its currency to the dollar. Its economy starts booming and inflation climbs above US inflation, so its currency comes under selling pressure.',
          ask: 'What must the central bank do, and what happens at home?',
          x: [
            'To stop the currency falling, it **sells foreign currency reserves and buys its own currency**.',
            'Buying its own currency takes domestic money out of circulation: the **money supply shrinks** and **short-term interest rates rise**.',
            'That tightening slows the economy and, if credible, brings inflation back toward US levels — supporting the peg.',
            'If instead domestic inflation fell below US levels, the bank would sell its own currency, expanding the money supply and pushing rates down.',
          ],
          result: 'With an exchange rate target, domestic interest rates and money supply must adjust to serve the peg — they can become more volatile, whatever the domestic economy needs.',
        },
        {
          t: 'callout', label: 'Credibility again', kind: 'warn',
          x: 'If markets doubt a country can defend its peg — for example, because reserves look inadequate — speculators bet against it, which can drain reserves and force a devaluation. The UK was forced out of the European Exchange Rate Mechanism in 1992, and Thailand\'s loss of its dollar peg in 1997 triggered the Asian financial crisis.',
        },
        {
          t: 'check',
          q: 'A country that targets its exchange rate sees domestic inflation rise above inflation in the anchor country. It is most likely to experience:',
          choices: ['an increase in short-term interest rates', 'an increase in its foreign currency reserves', 'an increase in the domestic money supply'],
          answer: 0,
          explain: 'Defending the currency means selling reserves (so they fall) and buying domestic currency, which shrinks the money supply and pushes up short-term rates.',
        },
        {
          t: 'takeaways',
          x: [
            'Effective central banks are independent (operational and possibly target), credible and transparent.',
            'Targets of about 2% guard against deflation while keeping prices stable; policy looks about two years ahead.',
            'Exchange rate targeting imports the anchor\'s inflation but forces domestic rates and money to serve the peg.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-monetary-stance',
      title: 'The neutral rate, shocks and the limits of monetary policy',
      minutes: 12,
      intro: 'How to tell whether policy is tight or loose, why the source of an inflation shock matters, and what central banks do once rates hit zero.',
      blocks: [
        { t: 'h', x: 'Contractionary, expansionary — compared with what?' },
        { t: 'p', x: 'Policy is **contractionary** when it is designed to slow money growth and the economy, and **expansionary** when it is designed to speed them up. The benchmark is the **neutral rate**: the policy rate that neither stimulates nor restrains the economy, roughly the average policy rate over a cycle, consistent with stable inflation.' },
        {
          t: 'formula', name: 'Neutral policy rate',
          x: 'Neutral rate = Real trend growth rate + Long-run expected inflation (inflation target)\n\nPolicy rate > neutral → contractionary\nPolicy rate < neutral → expansionary',
        },
        {
          t: 'steps',
          title: 'Worked example — judging the stance',
          given: 'An economy can grow sustainably at 1.8% a year in real terms. Its credible inflation target is 2.0%. The central bank\'s policy rate is 5.0%.',
          ask: 'Is policy expansionary, neutral or contractionary?',
          x: [
            'Neutral rate = 1.8% + 2.0% = **3.8%**.',
            'The policy rate of 5.0% is **1.2 percentage points above** neutral.',
          ],
          result: 'Policy is contractionary. Note that estimating trend growth is more art than science, so economists can disagree about the stance.',
        },
        {
          t: 'check',
          q: 'Trend real growth is 3% and the inflation target is 2%. Which policy rate is most consistent with an *expansionary* stance?',
          choices: ['4%', '5%', '6%'],
          answer: 0,
          explain: 'The neutral rate is 3% + 2% = 5%. Only a rate below 5% — here 4% — stimulates the economy.',
        },
        { t: 'h', x: 'What caused the inflation?' },
        {
          t: 'table',
          head: ['Source', 'Example', 'Appropriate response'],
          rows: [
            ['**Demand shock**', 'Rising consumer and business confidence boosts spending', 'Tightening policy is appropriate to contain demand-driven inflation'],
            ['**Supply shock**', 'An oil price spike raises costs', 'Raising rates may make things worse: consumers are already squeezed, profits and jobs may fall, and inflation could later drop sharply on its own'],
          ],
        },
        { t: 'h', x: 'Limitations of monetary policy' },
        { t: 'h3', x: 'Problems in the transmission mechanism' },
        { t: 'p', x: 'Long-term rates depend on *expected* future short-term rates. If bond investors think a hike is excessive and will cause a recession and undershooting inflation, long-term yields may actually **fall** — cheapening long-term borrowing and partly offsetting the tightening. So-called **bond market vigilantes** can push long yields up when they think the central bank is losing control of inflation, or down when they expect a sharp slowdown. A credible central bank has a more stable long end of the yield curve and a more reliable message.' },
        { t: 'h3', x: 'Liquidity traps and deflation' },
        { t: 'p', x: 'In a **liquidity trap**, demand for money becomes perfectly elastic: people happily hold any extra money without interest rates changing, so injecting money no longer lowers rates or boosts activity. Liquidity traps are associated with **deflation** — a persistent, widespread fall in prices — which is harder to fight than inflation:' },
        {
          t: 'ul',
          x: [
            'Nominal rates cannot be cut far below zero (several European countries and Japan went slightly negative in the mid-2010s).',
            'Deflation **raises the real value of debt**, so borrowers cut spending to save.',
            'Expecting lower prices, consumers **postpone purchases**, pushing prices down further — a self-reinforcing trap. Japan fell into this after its asset bubble burst in the early 1990s.',
          ],
        },
        { t: 'h3', x: 'Quantitative easing' },
        { t: 'p', x: 'Once rates are near zero, central banks can still act. **Quantitative easing (QE)** is like open market purchases on a very large scale: the central bank creates reserves and uses them to buy assets — government bonds, and sometimes mortgage bonds or other securities — to push down longer-term yields and encourage lending. Central banks may also promise to keep rates low for a long time (forward guidance) to lower rates along the yield curve.' },
        {
          t: 'callout', label: 'QE is not guaranteed to work', kind: 'warn',
          x: 'Banks may simply sit on the extra reserves rather than lend to risky borrowers in a weak economy. And buying assets with credit risk exposes the central bank to losses — a severe loss could undermine confidence in fiat money itself. Japan\'s very large, long-running QE programme has struggled to end deflation for good.',
        },
        {
          t: 'callout', label: 'The fundamental limitation',
          x: 'Central banks **cannot control how much money households and firms deposit in banks, nor how willing banks are to lend**. So they cannot fully control the money supply — and there are real limits to what monetary policy can do.',
        },
        {
          t: 'check',
          q: 'A policy rate held close to zero for a long time without any pickup in growth most likely suggests that:',
          choices: ['monetary policy may have limited effectiveness', 'quantitative easing must be kept small to work', 'the central bank should target reserve levels instead of rates'],
          answer: 0,
          explain: 'Persistently weak growth despite near-zero rates is the hallmark of a liquidity trap, where conventional monetary policy loses traction.',
        },
        {
          t: 'takeaways',
          x: [
            'Neutral rate = trend real growth + inflation target. Above it, policy is contractionary; below, expansionary.',
            'Tighten against demand shocks; be cautious about tightening against supply shocks.',
            'Limits: uncertain transmission (long rates may move the wrong way), liquidity traps and deflation, and QE that banks may not lend on.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-monetary-interaction',
      title: 'How monetary and fiscal policy interact',
      minutes: 9,
      intro: 'Both policies move aggregate demand, but through different channels — so the mix changes interest rates and the balance between public and private sectors.',
      blocks: [
        { t: 'p', x: 'Monetary and fiscal policy are **not interchangeable**. The effect of a budget change depends on whether monetary policy accommodates it, and vice versa. Assuming wages and prices are sticky:' },
        {
          t: 'table',
          head: ['Fiscal', 'Monetary', 'Interest rates', 'Output', 'Sector mix'],
          rows: [
            ['**Easy**', '**Tight**', 'Higher', 'Higher', 'Public sector grows as a share of GDP; private demand squeezed by high rates'],
            ['**Tight**', '**Easy**', 'Lower', 'Depends', 'Private sector grows as a share of GDP; public sector shrinks'],
            ['**Easy**', '**Easy**', 'Lower (if the monetary effect dominates)', 'Strongly higher', 'Both public and private sectors grow'],
            ['**Tight**', '**Tight**', 'Higher (if the monetary effect dominates)', 'Lower', 'Both public and private demand fall'],
          ],
        },
        {
          t: 'check',
          q: 'If fiscal policy is easy and monetary policy is tight, the most likely result is that:',
          choices: ['interest rates fall, reinforcing the fiscal stimulus', 'the government sector shrinks as a share of GDP', 'the government sector grows as a share of GDP'],
          answer: 2,
          explain: 'Tight money raises rates and crowds out private activity, while looser fiscal policy expands public activity — so the public share of the economy rises.',
        },
        { t: 'h', x: 'What shapes the mix' },
        {
          t: 'ul',
          x: [
            'To grow **potential output**, governments may prefer tight fiscal policy and easy monetary policy — leaving resources and cheap finance for private investment.',
            'If poor infrastructure or skills hold growth back, higher public investment may be the priority. Paired with loose monetary policy, that risks inflation.',
            '**Politics** matters: a weak government may give in to spending demands, requiring tighter monetary policy to offset them.',
            'Both policies suffer from lagged, revised data. Fiscal policy is also **slow to implement** and **politically easier to loosen than tighten**, whereas independent central banks can raise rates without facing voters.',
            'If **Ricardian equivalence** held, tax cuts would not change spending, pushing policymakers toward monetary tools.',
          ],
        },
        { t: 'h', x: 'Evidence on combined stimulus' },
        { t: 'p', x: 'Model-based research by international institutions on coordinated two-year fiscal stimulus reached conclusions worth remembering in outline:' },
        {
          t: 'ul',
          x: [
            '**Direct government spending** raises GDP far more than equal-sized broad transfers or tax cuts.',
            'Transfers **targeted at the poorest** households have a larger effect than untargeted transfers.',
            'Fiscal multipliers are **much larger when monetary policy accommodates** — keeping rates unchanged — because rising demand and inflation lower real interest rates and draw in private spending. Without accommodation, rates rise and part of the stimulus is offset.',
            'Persistently high deficits raise real interest rates and inflation expectations, crowd out private investment and reduce long-run output; a credible commitment to fiscal discipline preserves the benefit of stimulus.',
          ],
        },
        { t: 'h', x: 'QE and "monetising" deficits' },
        { t: 'p', x: 'At zero rates, fiscal stimulus can still work by lifting demand and inflation, which lowers real rates. But if a central bank buys government bonds on a massive scale, it is effectively **funding the budget deficit**. Economists worry that this monetisation makes central bank independence illusory and could, in time, fuel inflation.' },
        {
          t: 'check',
          q: 'Given an independent central bank, monetary policy actions are more likely than fiscal actions to be:',
          choices: ['effective when combating deflation', 'targeted at a specific group', 'implemented quickly'],
          answer: 2,
          explain: 'A central bank committee can change rates at its next meeting, while fiscal changes typically need legislation and long planning.',
        },
        {
          t: 'check',
          q: 'Which policy mix is most likely to grow both the public and private sectors?',
          choices: ['Easy fiscal and easy monetary policy', 'Easy fiscal and tight monetary policy', 'Tight fiscal and tight monetary policy'],
          answer: 0,
          explain: 'Both levers push demand up, and easy money keeps rates low so private spending grows alongside public spending.',
        },
        {
          t: 'takeaways',
          x: [
            'Easy fiscal + tight money → higher rates, larger public share. Tight fiscal + easy money → lower rates, larger private share.',
            'Fiscal multipliers are bigger when monetary policy accommodates.',
            'Direct spending has the largest effect; large central bank bond buying risks monetising deficits.',
          ],
        },
      ],
    },
  ],

  formulas: [
    { id: 'f-e-30', name: 'Money multiplier', expr: '1 / reserve requirement', note: 'Maximum deposit expansion per unit of reserves.' },
    { id: 'f-e-31', name: 'Neutral policy rate', expr: 'Trend real growth + inflation target', note: 'Policy above neutral is contractionary; below is expansionary.' },
    { id: 'f-e-32', name: 'Fisher effect', expr: 'Nominal rate ≈ real rate + expected inflation', note: 'Central to how policy rates translate into real borrowing costs.' },
  ],

  cards: [
    { id: 'c-e-40', front: 'Money multiplier', back: '1 / reserve requirement. A 20% requirement gives a multiplier of 5.' },
    { id: 'c-e-41', front: 'Neutral policy rate', back: 'Trend real growth + inflation target. Above it policy is contractionary; below it, expansionary.' },
    { id: 'c-e-42', front: 'Liquidity trap', back: 'Rates near zero and additional monetary easing fails to stimulate spending — conventional policy loses traction.' },
    { id: 'c-e-43', front: 'Three qualities of an effective central bank', back: 'Independence, credibility, transparency.' },
    { id: 'c-e-44', front: 'Expansionary fiscal + contractionary monetary policy', back: 'Higher output, higher interest rates, and a larger public sector share of GDP.' },
    { id: 'c-e-45', front: 'Six roles of a central bank', back: 'Currency supplier; banker to government and banks; lender of last resort; payments system regulator; conductor of monetary policy; (often) bank supervisor.' },
    { id: 'c-e-46', front: 'Four channels of monetary transmission', back: 'Market interest rates, asset prices, expectations/confidence, and the exchange rate.' },
    { id: 'c-e-47', front: 'Operational vs target independence', back: 'Operational: the bank sets rates to hit a target chosen by government. Target: the bank also sets the target, its definition and horizon.' },
    { id: 'c-e-48', front: 'Why target about 2% inflation rather than 0%?', back: 'A zero target would often produce deflation, which monetary policy struggles to fight because rates cannot go far below zero.' },
    { id: 'c-e-49', front: 'Defending an exchange rate peg against depreciation', back: 'Sell FX reserves and buy domestic currency — money supply falls and short-term rates rise.' },
  ],

  questions: [
    {
      id: 'q-ec-029', difficulty: 'easy',
      stem: 'A central bank buys government bonds in the open market. This action most likely:',
      choices: ['drains bank reserves and tightens monetary policy', 'adds bank reserves and eases monetary policy', 'has no effect on reserves, since bonds are exchanged for bonds'],
      answer: 1,
      explain: 'The central bank pays for the bonds by crediting banks\' reserve accounts, increasing reserves available for lending. Purchases ease policy; sales tighten it.',
      why: [
        'A describes an open market *sale*.',
        'C is wrong — the bank pays with newly created reserves, not with other bonds.',
      ],
    },
    {
      id: 'q-ec-021', difficulty: 'medium',
      stem: 'A central bank facing policy rates near zero finds that further easing does little to increase spending. This situation is best described as:',
      choices: ['crowding out', 'a liquidity trap', 'cost-push inflation'],
      answer: 1,
      explain: 'A liquidity trap occurs when nominal rates approach their lower bound and additional liquidity is hoarded rather than spent, neutralising conventional monetary policy.',
      why: [
        'A describes government borrowing displacing private investment — a fiscal limitation.',
        'C describes inflation driven by rising input costs, unrelated to the effectiveness of easing.',
      ],
    },
    {
      id: 'q-ec-040', difficulty: 'hard',
      stem: 'An economy\'s trend real growth rate is 2.0% and the central bank\'s inflation target is 2.5%. The policy rate is currently 3.5%. The stance of monetary policy is best described as:',
      choices: ['contractionary', 'neutral', 'expansionary'],
      answer: 2,
      explain: 'Neutral rate = 2.0% + 2.5% = 4.5%. A policy rate of 3.5% sits below neutral, so policy is stimulating demand — expansionary.',
      why: [
        'A would require a policy rate above 4.5%.',
        'B would require the policy rate to equal 4.5%.',
      ],
    },
    {
      id: 'q-ec-041', difficulty: 'expert',
      stem: 'A government runs an expansionary fiscal policy while the central bank simultaneously pursues a contractionary monetary policy. The most likely combined effect is:',
      choices: [
        'lower interest rates and a smaller public sector share of GDP.',
        'higher interest rates and a larger public sector share of GDP.',
        'lower output and lower interest rates.',
      ],
      answer: 1,
      explain: 'Higher government spending raises demand for funds while tight money restricts their supply, so interest rates rise. Higher rates crowd out private investment, while public spending grows — the public sector\'s share of the economy increases.',
      why: [
        'A describes the reverse mix: contractionary fiscal with expansionary monetary policy.',
        'C is inconsistent with an expansionary fiscal impulse, and interest rates would rise, not fall.',
      ],
    },
    {
      id: 'q-ec-109', difficulty: 'medium',
      stem: 'A central bank that targets a fixed exchange rate against the US dollar sees its currency come under heavy selling pressure. To defend the peg it will most likely:',
      choices: ['sell US dollar reserves, causing domestic interest rates to rise', 'buy US dollars, causing the domestic money supply to expand', 'cut its policy rate to support domestic demand'],
      answer: 0,
      explain: 'Supporting the currency means selling reserves and buying domestic currency. That drains domestic money and pushes short-term rates up, regardless of domestic conditions.',
      why: [
        'B would add to selling pressure on the domestic currency — it is the response to excessive *strength*.',
        'C would make the currency less attractive and worsen the pressure on the peg.',
      ],
    },
    {
      id: 'q-ec-110', difficulty: 'hard',
      stem: 'Inflation jumps above target solely because of a sharp rise in global oil prices. A central bank that immediately raises interest rates most likely risks:',
      choices: ['fuelling further inflation through a weaker currency', 'deepening an economic downturn that may already reduce inflation', 'having no effect, because supply shocks do not affect prices'],
      answer: 1,
      explain: 'A supply shock already squeezes real incomes, profits and employment. Tightening on top can worsen the slowdown, and inflation may fall sharply once the shock passes.',
      why: [
        'A reverses the exchange rate effect: higher rates tend to strengthen, not weaken, the currency.',
        'C is wrong — the oil shock is precisely what raised measured inflation.',
      ],
    },
    {
      id: 'q-ec-111', difficulty: 'medium',
      stem: 'Which statement best describes a fundamental limitation of monetary policy?',
      choices: ['Central bankers are appointed by politicians, so they are never independent', 'Central banks cannot control how much money is deposited or how willing banks are to lend', 'Central banks cannot change short-term interest rates quickly'],
      answer: 1,
      explain: 'Money creation depends on deposit and lending decisions by households, firms and banks, which the central bank can influence but not dictate.',
      why: [
        'A overstates the point; independence is a matter of degree, and appointment does not prevent operational independence.',
        'C is wrong — speed of action is an advantage of monetary policy, not a limitation.',
      ],
    },
  ],
};
