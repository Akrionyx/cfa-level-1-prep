// Economics · Module 7 — Capital Flows and the FX Market. Original wording and numbers.

export default {
  id: 'econ-flows',
  name: 'Capital Flows and the FX Market',
  los: [
    'Describe the foreign exchange market, including its functions and participants; distinguish between nominal and real exchange rates; and calculate and interpret the percentage change in a currency relative to another currency',
    'Describe exchange rate regimes and explain the effects of exchange rates on countries\' international trade and capital flows',
    'Describe common objectives of capital restrictions imposed by governments',
  ],
  lessons: [
    /* ------------------------------------------------------------ */
    {
      id: 'econ-flows-quotes',
      title: 'Reading exchange rate quotes without getting confused',
      minutes: 12,
      intro: 'Almost every FX mistake on the exam comes from misreading which currency is which. Fix the convention once and the arithmetic becomes easy.',
      blocks: [
        { t: 'p', x: 'The **foreign exchange (FX) market** is where currencies trade against each other — by far the largest market in the world, with daily turnover in the trillions of dollars, many times larger than bond or equity trading. It runs around the clock on business days, linking participants in every time zone. International trade and cross-border investment would be impossible without it, and even a purely domestic portfolio is exposed through foreign earnings, foreign competition and foreign demand for domestic assets.' },
        { t: 'h', x: 'Currency versus exchange rate' },
        { t: 'p', x: 'A **currency** is a single thing you can hold (EUR 1 million on deposit). An **exchange rate** always involves two currencies: the price of one in terms of the other. Currencies are identified by three-letter ISO codes — USD, EUR, JPY, GBP, CHF, CAD, AUD and so on.' },
        {
          t: 'formula', name: 'The quote convention used here',
          x: 'A/B = number of units of currency A that one unit of currency B buys\n\nB is the BASE currency  (always one unit)\nA is the PRICE currency (also called the quote currency)\n\nUSD/EUR = 1.0850  →  €1 costs $1.0850',
        },
        {
          t: 'callout', label: 'The rule that settles most questions',
          x: 'The **base currency moves in the same direction as the quote**. If USD/EUR rises from 1.0850 to 1.1000, each euro buys more dollars: the euro (base) has **appreciated** and the dollar (price) has **depreciated**.',
        },
        {
          t: 'check',
          q: 'The JPY/USD rate falls from 152.00 to 145.00. Which statement is correct?',
          choices: ['The US dollar has appreciated against the yen', 'The yen has appreciated against the US dollar', 'Both currencies have depreciated'],
          answer: 1,
          explain: 'The dollar is the base currency. A lower quote means a dollar buys fewer yen — the dollar has depreciated and the yen (price currency) has appreciated.',
        },
        { t: 'h', x: 'Direct and indirect quotes' },
        {
          t: 'terms',
          x: [
            ['Direct quote', 'Domestic currency is the **price** currency: the cost of one unit of foreign currency in your own money. For a Tokyo-based trader, JPY/USD = 150.00 is direct.'],
            ['Indirect quote', 'Domestic currency is the **base** currency. For the same trader, USD/JPY = 0.006667 is indirect. Direct and indirect quotes are reciprocals.'],
          ],
        },
        { t: 'p', x: 'Professional markets avoid "direct" and "indirect", because they depend on where you sit. Instead they use fixed conventions for each currency pair. A rough hierarchy: the **euro** is the base when it is involved (GBP/EUR); next the **pound** (USD/GBP); then the **US dollar** (CAD/USD, JPY/USD) — with the Australian and New Zealand dollars as exceptions, quoted as base against the US dollar (USD/AUD, USD/NZD). In market codes such as "EURJPY" the **base currency is written first**, the reverse of the A/B ratio (JPY/EUR). A three-letter code used as a rate, like "EUR", means the euro against the US dollar.' },
        {
          t: 'check',
          q: 'A bank quotes MXN/USD = 17.2500 to a client based in Mexico City. From the client\'s perspective, this is:',
          choices: ['a direct quote', 'an indirect quote', 'neither, because it involves the US dollar'],
          answer: 0,
          explain: 'The client\'s domestic currency (the peso) is the price currency: it shows how many pesos one dollar costs.',
        },
        { t: 'h', x: 'Bid and offer' },
        { t: 'p', x: 'Dealers quote two prices, both in terms of buying or selling the **base currency**. The **bid** (lower) is what the dealer pays for one unit of base currency; the **offer** (higher) is what the dealer charges for it. A client selling the base currency gets the bid; a client buying it pays the offer. Spreads in major currencies are very tight thanks to electronic trading.' },
        {
          t: 'steps',
          title: 'Worked example — inverting a two-sided quote',
          given: 'A dealer quotes CAD/USD 1.3640 – 1.3644.',
          ask: 'What is the equivalent USD/CAD bid–offer quote?',
          x: [
            'In CAD/USD, the dealer buys $1 for C$1.3640 and sells $1 for C$1.3644.',
            'Inverting swaps the roles. The dealer\'s **offer** for C$1 comes from its CAD/USD bid: 1 / 1.3640 = **0.73314**.',
            'The dealer\'s **bid** for C$1 comes from its CAD/USD offer: 1 / 1.3644 = **0.73292**.',
          ],
          result: 'USD/CAD 0.73292 – 0.73314. The bid is always below the offer, whichever way the pair is quoted.',
        },
        {
          t: 'callout', label: 'Decimal conventions',
          x: 'Most spot rates are quoted to **four decimal places** (1.0850). Rates involving the **yen** are usually quoted to **two** (152.35), because a unit of most currencies buys many yen.',
        },
        { t: 'h', x: 'Percentage changes are not symmetric' },
        {
          t: 'formula', name: 'Appreciation and depreciation',
          x: 'Change in the BASE currency  = S₁ / S₀ − 1\nChange in the PRICE currency = S₀ / S₁ − 1',
        },
        {
          t: 'steps',
          title: 'Worked example — one move, two different percentages',
          given: 'JPY/USD rises from 140.00 to 154.00.',
          ask: 'By what percentage did each currency change?',
          x: [
            'The US dollar is the base: 154.00 / 140.00 − 1 = **+10.0%**. The dollar appreciated 10%.',
            'The yen is the price currency: 140.00 / 154.00 − 1 = **−9.09%**. The yen depreciated about 9.1%.',
          ],
          result: 'A 10% appreciation of one currency is *not* a 10% depreciation of the other. Invert the quote so the currency you care about is the base, then use S₁/S₀ − 1.',
        },
        {
          t: 'check',
          q: 'USD/GBP moves from 1.2500 to 1.2000. The percentage change in the value of the US dollar against sterling is closest to:',
          choices: ['−4.0%', '+4.17%', '+4.0%'],
          answer: 1,
          explain: 'The dollar is the price currency, so its change is S₀/S₁ − 1 = 1.2500/1.2000 − 1 = +4.17%. Sterling (the base) fell 4.0%.',
        },
        {
          t: 'takeaways',
          x: [
            'A/B: B is the base (one unit), A is the price. The base moves with the quote.',
            'Direct quotes price foreign currency in domestic currency; markets use fixed pair conventions instead.',
            'Bid < offer, both for the base currency; inverting a two-sided quote swaps bid and offer.',
            'Base change = S₁/S₀ − 1; price-currency change = S₀/S₁ − 1.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-flows-real',
      title: 'Nominal and real exchange rates',
      minutes: 9,
      intro: 'A currency\'s market price tells you how much foreign money you get. The real exchange rate tells you how much foreign *stuff* you can buy.',
      blocks: [
        { t: 'p', x: 'Market quotes are **nominal** exchange rates. **Real** exchange rates are indexes built by analysts to track changes in **relative purchasing power**: they adjust the nominal rate for price levels in the two countries. Real rates are not quoted or traded.' },
        { t: 'h', x: 'Purchasing power parity — a poor guide' },
        { t: 'p', x: 'If goods were identical, freely traded and costless to ship, the same basket should cost the same everywhere once converted — **purchasing power parity (PPP)**. In reality goods differ, baskets differ, many services cannot be traded, trade barriers and transport costs exist, and **capital flows** matter at least as much as trade in setting exchange rates. Nominal rates can drift away from PPP for years, so real exchange rates carry genuine information about changing competitiveness.' },
        {
          t: 'formula', name: 'Real exchange rate (domestic per foreign)',
          x: 'Real rate (d/f) = S(d/f) × (P_foreign / P_domestic)\n\nApproximate % change:\n%Δ Real rate ≈ %Δ S(d/f) + foreign inflation − domestic inflation',
        },
        {
          t: 'callout', label: 'How to interpret it',
          x: 'With your **domestic currency as the price currency**, the real rate is the real price you pay for foreign goods. A **higher real rate means lower purchasing power** for you over foreign goods and services. It rises when the foreign currency appreciates or foreign prices rise, and falls when domestic prices rise faster.',
        },
        {
          t: 'steps',
          title: 'Worked example — a Canadian buying euro-area goods',
          given: 'Over a year, CAD/EUR rises 4%, euro-area prices rise 2%, and Canadian prices (and incomes) rise 3%.',
          ask: 'What happened to a Canadian\'s real purchasing power over euro-area goods?',
          x: [
            'The domestic currency (CAD) is the price currency, so use R(CAD/EUR) = S(CAD/EUR) × (P_euro / P_Canada).',
            'Approximation: 4% + 2% − 3% = **+3%**.',
            'Exact: 1.04 × 1.02 / 1.03 − 1 = **+2.99%**.',
          ],
          result: 'The real exchange rate rose about 3%, so the Canadian\'s purchasing power over euro-area goods fell about 3%.',
        },
        {
          t: 'check',
          q: 'All else equal, a decrease in the real exchange rate quoted as domestic currency per unit of foreign currency is most likely caused by an increase in:',
          choices: ['the foreign price level', 'the nominal exchange rate (d/f)', 'the domestic price level'],
          answer: 2,
          explain: 'P_domestic is in the denominator, so faster domestic inflation lowers the real rate (d/f). The other two raise it.',
        },
        {
          t: 'check',
          q: 'An Australian investor holds Hong Kong dollar bonds and spends Hong Kong dollars on trips there. AUD/HKD rises 5%, Hong Kong prices rise 5% and Australian prices rise 2%. Her relative purchasing power (Australian income over Hong Kong goods) changes by about:',
          choices: ['+8%', '−8%', '−2%'],
          answer: 1,
          explain: 'Real rate (AUD/HKD) ≈ +5% + 5% − 2% = +8%, so Hong Kong goods cost about 8% more in real terms. Note that Hong Kong dollar income spent in Hong Kong is unaffected by the exchange rate.',
        },
        {
          t: 'takeaways',
          x: [
            'Nominal rates are traded prices; real rates are analyst indexes of relative purchasing power.',
            'Real (d/f) = S(d/f) × P_f / P_d; %Δ ≈ %ΔS + foreign inflation − domestic inflation.',
            'A higher real rate (domestic as price currency) means lower domestic purchasing power abroad. PPP is a weak predictor of nominal rates.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-flows-participants',
      title: 'Who trades currencies, and what they trade',
      minutes: 9,
      intro: 'Most FX volume has nothing to do with importing and exporting goods. It is dominated by investors, traders and swaps.',
      blocks: [
        { t: 'h', x: 'Sell side and buy side' },
        { t: 'p', x: 'The **sell side** is the FX dealing banks that quote prices. A handful of very large global banks handle a growing share of turnover — they need huge technology investment and a broad client base, and often match buyers and sellers internally. Regional and local banks form the second and third tiers, frequently relying on the big banks for pricing and liquidity. The **buy side** is everyone who uses those banks:' },
        {
          t: 'table',
          head: ['Buy-side participant', 'Why they trade FX'],
          rows: [
            ['**Corporations**', 'Cross-border sales and purchases of goods and services; foreign M&A, investment of corporate cash abroad, foreign-currency borrowing'],
            ['**Real money accounts**', 'Pension funds, insurers, mutual funds, ETFs, endowments — usually restricted in use of leverage and derivatives'],
            ['**Leveraged accounts**', 'Hedge funds, proprietary traders, commodity trading advisers, high-frequency algorithmic traders — from long-term macro views to millisecond strategies; a large and growing share of turnover'],
            ['**Retail accounts**', 'Tourists at airport kiosks through to individuals trading online or moving savings into foreign currency'],
            ['**Governments**', 'Transactional needs (embassies, military purchases), foreign-currency debt, public pension funds — sometimes with policy aims'],
            ['**Central banks**', 'Intervene when a currency is judged too weak or too strong, or markets are disorderly; manage foreign exchange reserves, where the US dollar dominates'],
            ['**Sovereign wealth funds**', 'Invest surplus national savings (often from exports or oil); mandates mainly investment-oriented, but flows can move major currency pairs'],
          ],
        },
        {
          t: 'check',
          q: 'Which counterparty is most likely a sell-side FX market participant?',
          choices: ['A sovereign wealth fund investing abroad', 'A multinational bank making prices for its clients', 'A corporation borrowing in foreign currency'],
          answer: 1,
          explain: 'The sell side consists of dealing banks that quote bids and offers. Funds and corporations are buy-side clients.',
        },
        { t: 'h', x: 'The instruments' },
        {
          t: 'table',
          head: ['Transaction', 'What happens', 'Approximate share of turnover'],
          rows: [
            ['**Spot**', 'Exchange of currencies for prompt settlement, typically two business days (T+2)', 'About one-third'],
            ['**Outright forward**', 'Agreement today to exchange currencies at a fixed rate on a future date — used to hedge FX risk', 'About one-seventh'],
            ['**FX swap**', 'A spot transaction combined with an offsetting forward — used to roll hedges and to raise foreign currency funding', '**About half — the largest**'],
            ['FX options', 'The right, not obligation, to exchange', 'Small'],
          ],
        },
        {
          t: 'ul',
          x: [
            '**Financial clients** (funds, central banks, sovereign wealth funds) now account for more volume than the interbank market, and far more than **non-financial clients** such as corporations and governments.',
            'The most-traded pairs all involve the US dollar, led by euro–dollar and dollar–yen.',
            'London is the largest trading centre, followed by New York, so activity peaks while both are open.',
            'Because the FX market lacks the oversight of a domestic exchange, market participants and central banks developed a voluntary **FX Global Code** of best practice covering ethics, execution, information sharing, settlement and risk management.',
          ],
        },
        {
          t: 'check',
          q: 'An adviser says: "Spot transactions have the largest daily volume because the FX market mainly settles international trade." This statement is:',
          choices: ['correct', 'incorrect about spot only — trade does dominate', 'incorrect about both spot volume and the importance of trade flows'],
          answer: 2,
          explain: 'FX swaps have the largest volume, and most turnover comes from investment, hedging and speculative flows rather than trade in goods and services.',
        },
        {
          t: 'takeaways',
          x: [
            'Sell side: dealing banks, dominated by a few global giants. Buy side: corporations, real money, leveraged, retail, governments, central banks, sovereign wealth funds.',
            'FX swaps are the largest instrument by volume; spot and outright forwards follow.',
            'Financial participants and capital flows, not trade in goods, drive most turnover.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-flows-regimes',
      title: 'Exchange rate regimes: from dollarization to free floating',
      minutes: 13,
      intro: 'Every country chooses how much to let its currency move — and in doing so decides how much control over monetary policy it keeps.',
      blocks: [
        { t: 'h', x: 'The ideal regime that cannot exist' },
        { t: 'p', x: 'An ideal currency system would have three properties at once:' },
        {
          t: 'ol',
          x: [
            '**Credibly fixed exchange rates** — no currency uncertainty for prices of goods and assets.',
            '**Full convertibility** — currencies exchangeable freely, in any amount, for any purpose (unrestricted capital flows).',
            '**Fully independent monetary policy** — each country pursues its own growth and inflation goals.',
          ],
        },
        { t: 'p', x: 'They are inconsistent. With fixed rates and free capital movement, a country trying to cut interest rates below other countries\' would see capital pour out toward higher returns. Defending the peg means selling reserves and buying domestic currency, shrinking the money supply and pushing rates back up — cancelling the easing. Under a **floating** rate, the same rate cut weakens the currency, boosting exports and reinforcing the easing.' },
        {
          t: 'callout', label: 'The impossible trinity',
          x: 'A country can have **at most two of**: a fixed exchange rate, free capital movement, and independent monetary policy. The more a currency floats, or the more tightly capital is controlled, the more effective domestic monetary policy becomes — at the cost of exchange rate risk or inefficient allocation of capital.',
        },
        {
          t: 'check',
          q: 'A country keeps a fixed exchange rate and allows capital to flow freely. According to the impossible trinity, it must give up:',
          choices: ['independent monetary policy', 'the ability to run fiscal deficits', 'control of trade policy'],
          answer: 0,
          explain: 'With a peg and open capital markets, interest rates must be set to defend the exchange rate, not to manage the domestic economy.',
        },
        { t: 'h', x: 'A short history' },
        {
          t: 'table',
          head: ['Era', 'System', 'What happened'],
          rows: [
            ['19th century – 1914', '**Classical gold standard**', 'Currencies fixed to gold. Trade surpluses brought in gold, expanding money and raising prices until exports fell; deficits did the reverse (the price–specie–flow mechanism). Self-adjusting and trusted, but tied monetary policy to trade flows.'],
            ['1930s', 'Collapse', 'Gold settlement, protectionism, deflation and hyperinflation shrank world trade by more than half; the gold standard was abandoned.'],
            ['1944 – early 1970s', '**Bretton Woods**', 'Fixed parities with periodic realignments when rates drifted far from balance.'],
            ['1973 onward', '**Floating rates** for most industrial countries', 'Rates proved far more volatile than expected, because investment and speculative flows, not just trade, set the price. Critics had warned fixed parities would invite speculative attacks before each realignment.'],
            ['1979 – 1990s', '**European Exchange Rate Mechanism**', 'Limited flexibility within bands. A speculative attack forced the UK out in 1992 when German rates were high and UK rates low.'],
            ['1999', '**The euro**', 'A common currency for many European countries: price transparency and competition, but members lost independent monetary and exchange rate policy.'],
          ],
        },
        { t: 'h', x: 'The spectrum of regimes' },
        {
          t: 'table',
          head: ['Regime (most rigid → most flexible)', 'How it works', 'Monetary independence'],
          rows: [
            ['**Dollarization**', 'Uses another country\'s currency (often the US dollar) as legal tender', 'None. Imports the anchor\'s currency credibility but **not its creditworthiness** — local dollar interest rates can differ, and there is no access to that country\'s central bank or deposit insurance. Imposes fiscal discipline because debt cannot be monetised.'],
            ['**Monetary union**', 'Members share one currency and a joint central bank', 'None individually, but members share in setting policy. Confers credibility, not creditworthiness.'],
            ['**Currency board**', 'Legal commitment to exchange domestic currency for a reserve currency at a fixed rate; the monetary base is **100% backed** by foreign reserves', 'Very limited; cannot act as a traditional lender of last resort. Earns **seigniorage** (interest on reserves vs little or none on the monetary base). Works like the gold standard — best with flexible wages and prices.'],
            ['**Fixed parity**', 'Peg to one currency or a basket, typically within ±1%', 'Limited, but no legal commitment and discretionary reserves; can act as lender of last resort. Credibility depends on reserves — doubts can trigger a self-fulfilling attack.'],
            ['**Target zone**', 'Fixed parity with wider bands (up to about ±2%)', 'Slightly more discretion'],
            ['**Crawling peg**', 'Parity adjusted frequently: **passive** crawl follows inflation; **active** crawl pre-announces small steps to steer inflation expectations', 'Some'],
            ['**Fixed parity with crawling bands**', 'Bands widen gradually over time', 'Grows over time — a gradual exit from a peg'],
            ['**Managed float ("dirty float")**', 'Intervention to pursue trade, price or employment goals, without an explicit target', 'Substantial, but invites retaliation by trading partners'],
            ['**Independent float**', 'Market determines the rate', 'Full; the central bank can pursue domestic goals and act as lender of last resort'],
          ],
        },
        {
          t: 'callout', label: 'Labels are not rigid',
          x: 'Even "independently floating" currencies are occasionally managed — through coordinated interventions such as the 1985 agreement to push the dollar down, joint support for a weak euro in 2000, or many countries resisting currency appreciation around 2010. The major currencies are generally treated as free floating, subject to infrequent intervention.',
        },
        {
          t: 'check',
          q: 'A fixed exchange rate regime in which the monetary authority must legally hold foreign reserves covering 100% of the monetary base is:',
          choices: ['a currency board', 'dollarization', 'a conventional fixed parity'],
          answer: 0,
          explain: 'Full reserve backing plus a legal commitment defines a currency board. A fixed parity has no such commitment and discretionary reserves; dollarization has no domestic currency at all.',
        },
        {
          t: 'check',
          q: 'For a US-based investor, which ranking runs from most to least exchange rate risk: a freely floating Canada, Hong Kong (currency board against the dollar) and dollarized Panama?',
          choices: ['Hong Kong, Panama, Canada', 'Panama, Canada, Hong Kong', 'Canada, Hong Kong, Panama'],
          answer: 2,
          explain: 'The Canadian dollar floats; the Hong Kong dollar moves only slightly around its parity; Panama uses the US dollar, so there is no FX risk.',
        },
        {
          t: 'takeaways',
          x: [
            'Impossible trinity: fixed rate, free capital flows, independent monetary policy — choose two.',
            'Regimes run from dollarization, monetary union and currency boards through pegs, target zones and crawls to managed and free floats.',
            'More rigid regimes buy credibility but surrender monetary independence; none confers creditworthiness.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-flows-capital',
      title: 'Trade balances, capital flows and capital restrictions',
      minutes: 10,
      intro: 'A country that imports more than it exports must borrow or sell assets to pay for it. That identity links trade, saving and exchange rates — and explains why governments sometimes restrict capital.',
      blocks: [
        { t: 'h', x: 'The balance of payments' },
        {
          t: 'ul',
          x: [
            '**Current account** — trade in goods and services, investment income and current transfers.',
            '**Capital account** — capital transfers and non-produced, non-financial assets (small in practice).',
            '**Financial account** — cross-border investment: direct investment, portfolio investment and reserves.',
          ],
        },
        { t: 'p', x: 'The accounts sum to zero. A **trade (current account) deficit must be matched by a capital inflow** — borrowing from foreigners or selling assets to them. A surplus means the country is lending abroad or buying foreign assets. Anything that affects the trade balance must have an equal and opposite effect on capital flows.' },
        {
          t: 'formula', name: 'Trade balance and saving',
          x: 'X − M = (S − I) + (T − G)\n\nX exports · M imports · S private saving · I investment\nT taxes net of transfers · G government spending',
        },
        { t: 'p', x: 'A trade surplus means the country saves more than it needs to fund its own investment (counting a fiscal surplus as government saving) and accumulates claims on the rest of the world. A trade deficit means it saves too little and must draw on foreign savings.' },
        {
          t: 'steps',
          title: 'Worked example — reading the identity',
          given: 'A country has private saving of 20% of GDP, investment of 24% of GDP and a government deficit of 3% of GDP.',
          ask: 'What is its trade balance, and what must be happening to capital flows?',
          x: [
            'S − I = 20% − 24% = **−4%** of GDP.',
            'T − G = **−3%** of GDP.',
            'X − M = −4% + (−3%) = **−7%** of GDP.',
          ],
          result: 'A trade deficit of 7% of GDP, financed by net capital inflows of 7% of GDP — foreigners are lending to it or buying its assets.',
        },
        {
          t: 'check',
          q: 'A country with a trade deficit will most likely:',
          choices: ['save enough to fund all its investment', 'buy assets from foreigners to fund the gap', 'have an offsetting capital (financial) account surplus'],
          answer: 2,
          explain: 'The deficit must be financed by borrowing from or selling assets to foreigners — a net capital inflow.',
        },
        { t: 'h', x: 'Why capital drives exchange rates in the short run' },
        { t: 'p', x: 'Saving and spending decisions and goods prices change slowly; financial investment decisions and asset prices change in seconds. When investors expect a currency to fall, they try to sell it, creating a potential capital outflow. Since trade cannot adjust instantly, **asset prices and exchange rates move** until investors are willing to hold what exists. Under a peg, the central bank absorbs the flows and **interest rates** adjust instead — until it is forced to let the rate move. So **capital flows are the main driver of exchange rates in the short to medium term**; trade flows matter more over the long term.' },
        { t: 'h', x: 'Capital restrictions' },
        { t: 'p', x: 'A **capital restriction** is any policy that limits or redirects capital flows — controls on foreigners owning domestic assets, or on residents owning foreign assets. They take the form of **taxes** on returns or transactions, **price controls** such as requiring foreign depositors to leave a share with the central bank interest-free, **quantity limits** or approval requirements on foreign borrowing, and outright **prohibitions**.' },
        {
          t: 'table',
          head: ['Common objectives of capital restrictions', 'Costs and drawbacks'],
          rows: [
            ['Prevent **capital flight** in a crisis, especially when inflows were short-term portfolio money', 'Considerable administrative cost to design, extend and enforce, closing loopholes'],
            ['Regain **monetary independence** alongside a fixed exchange rate (the trinity again)', 'May delay necessary policy adjustments'],
            ['Limit inflows that could hurt domestic firms\' competitiveness or overheat asset markets', 'Negative market perception — can make future foreign funding scarcer and dearer'],
            ['Protect **strategic industries** (defence, telecoms) from foreign ownership', 'Less efficient allocation of capital'],
            ['Meet employment or regional development goals; historically, keep savings at home to **finance governments** and hold rates down', 'Evidence on effectiveness is mixed and often temporary'],
          ],
        },
        {
          t: 'callout', label: 'Why economists generally favour free capital flows',
          x: 'Capital goes where returns are highest. Inflows let a country invest faster than domestic saving alone would allow. Long-term **foreign direct investment** brings technology, skills and management practices, trains local suppliers and sharpens competition — though uncompetitive domestic firms may be forced out.',
        },
        {
          t: 'steps',
          title: 'Case study — controls during a regional crisis',
          given: 'In 1998, during the Asian financial crisis, one Southeast Asian economy faced heavy capital outflows. The conventional advice was to raise interest rates to attract capital, but that was crushing its domestic economy.',
          ask: 'What did it do, and with what result?',
          x: [
            '**Objective:** stop outflows so it could **cut interest rates** without the currency collapsing, and restructure banks and companies.',
            '**Measures:** banned transfers between domestic and foreign accounts, blocked repatriation of investments for a year, cut off offshore credit, and pegged the currency to the US dollar. After several months, the ban on repatriation was replaced by exit taxes that discouraged short-term flows but allowed long-term ones; these were removed by 2001.',
            '**Short-term result:** speculative outflows fell, interest rates came down, restructuring went ahead, and growth recovered strongly within two years.',
            '**Long-term cost:** investors judged its markets less safe; it was reclassified from developed to emerging in a major equity index family, making it harder to attract long-term capital.',
          ],
          result: 'Capital controls can buy breathing space in a crisis, but they can permanently damage how international investors view a market.',
        },
        {
          t: 'takeaways',
          x: [
            'Current account deficits are financed by capital inflows; X − M = (S − I) + (T − G).',
            'Capital flows drive exchange rates in the short to medium run; trade flows dominate in the long run.',
            'Capital restrictions aim to prevent flight, preserve monetary independence under a peg, protect strategic sectors or raise revenue — at the cost of efficiency, administration and investor confidence.',
          ],
        },
      ],
    },
  ],

  formulas: [
    { id: 'f-e-50', name: 'Balance of payments identity', expr: 'Current account + Capital account + Financial account = 0', note: 'A current account deficit implies a financial account surplus.' },
    { id: 'f-e-51', name: 'Real exchange rate', expr: 'Real (d/f) = S(d/f) × P_foreign / P_domestic', note: 'With domestic currency as the price currency. A higher real rate means lower domestic purchasing power abroad.' },
    { id: 'f-e-52', name: 'Change in the real exchange rate', expr: '%ΔReal ≈ %ΔS(d/f) + foreign inflation − domestic inflation', note: 'Exact: (1 + %ΔS)(1 + π_f)/(1 + π_d) − 1.' },
    { id: 'f-e-53', name: 'Trade balance and saving', expr: 'X − M = (S − I) + (T − G)', note: 'A trade deficit means the country saves too little to fund its investment and imports capital.' },
  ],

  cards: [
    { id: 'c-e-70', front: 'Three balance of payments accounts', back: 'Current, capital, and financial. They sum to zero.' },
    { id: 'c-e-71', front: 'The impossible trinity', back: 'A fixed exchange rate, free capital flows and independent monetary policy — a country can have only two.' },
    { id: 'c-e-72', front: 'FX swap', back: 'A spot currency exchange combined with an offsetting forward exchange — used to roll positions and manage funding. The largest FX instrument by volume.' },
    { id: 'c-e-73', front: 'Currency board', back: 'A regime in which domestic currency is fully backed by foreign reserves at a fixed rate under a legal commitment; the authority gives up discretionary monetary policy but earns seigniorage.' },
    { id: 'c-e-74', front: 'Direct vs indirect quote', back: 'Direct: domestic currency is the price currency (cost of one foreign unit). Indirect: domestic currency is the base. They are reciprocals.' },
    { id: 'c-e-75', front: 'Dollarization confers what — and not what?', back: 'The anchor currency\'s credibility, but not the anchor country\'s creditworthiness.' },
    { id: 'c-e-76', front: 'Real vs nominal exchange rate', back: 'Nominal: traded market price. Real: nominal adjusted for relative price levels, measuring relative purchasing power.' },
    { id: 'c-e-77', front: 'Main short-run driver of exchange rates', back: 'Capital flows (actual and potential). Trade flows matter more in the long run.' },
  ],

  questions: [
    {
      id: 'q-ec-032', difficulty: 'easy',
      stem: 'A country runs a persistent current account deficit. By the balance of payments identity, it must also be experiencing:',
      choices: [
        'a financial account surplus, meaning it is a net importer of capital.',
        'a financial account deficit of equal size.',
        'an offsetting increase in its GDP growth rate.',
      ],
      answer: 0,
      explain: 'The accounts sum to zero, so a current account deficit is financed by net capital inflows — foreigners acquiring domestic assets.',
      why: [
        'B would mean the accounts sum to a negative number, violating the identity.',
        'C is wrong because the identity is an accounting relationship, not a statement about growth.',
      ],
    },
    {
      id: 'q-ec-070', difficulty: 'medium',
      stem: 'The nominal USD/EUR exchange rate is 1.20. The US price index is 120 and the eurozone price index is 110. The real USD/EUR exchange rate is closest to:',
      choices: ['1.10', '1.31', '1.20'],
      answer: 0,
      explain: 'Real rate = 1.20 × (CPI_EUR / CPI_USD) = 1.20 × (110/120) = 1.10.',
      why: [
        'B inverts the price ratio, multiplying by 120/110.',
        'C ignores the difference in price levels entirely.',
      ],
    },
    {
      id: 'q-ec-071', difficulty: 'hard',
      stem: 'A country maintains a fixed exchange rate and allows capital to flow freely across its borders. According to the impossible trinity, the country must most likely give up:',
      choices: ['control of its trade policy', 'an independent monetary policy', 'its ability to run a fiscal deficit'],
      answer: 1,
      explain: 'With a peg and open capital markets, any gap between domestic and foreign interest rates would trigger capital flows that break the peg. Interest rates must therefore be set to defend the exchange rate, sacrificing monetary independence.',
      why: [
        'A is not one of the three elements of the trinity.',
        'C is fiscal, not monetary — the trinity concerns exchange rates, capital mobility and monetary policy.',
      ],
    },
    {
      id: 'q-ec-072', difficulty: 'expert',
      stem: 'A company agrees to buy euros for dollars in the spot market today and simultaneously to sell the same amount of euros for dollars in three months at a pre-agreed rate. This transaction is best described as:',
      choices: ['an outright forward', 'an FX swap', 'a currency option'],
      answer: 1,
      explain: 'A spot exchange paired with an offsetting forward exchange of the same amount is an FX swap. Firms use it to obtain temporary funding in another currency or to roll a maturing forward position.',
      why: [
        'A involves only a single future exchange, with no accompanying spot leg.',
        'C would give the company a right, not an obligation, to exchange currencies.',
      ],
    },
    {
      id: 'q-ec-118', difficulty: 'medium',
      vignette: 'A dealer quotes CHF/USD at 0.8820 – 0.8824.',
      stem: 'The equivalent USD/CHF bid–offer quote is closest to:',
      choices: ['1.1338 – 1.1333', '1.1333 – 1.1338', '1.1336 – 1.1336'],
      answer: 1,
      explain: 'The USD/CHF bid is 1/0.8824 = 1.1333 and the offer is 1/0.8820 = 1.1338. The bid is always below the offer.',
      why: [
        'A inverts each side without swapping them, leaving the bid above the offer.',
        'C averages the quote and loses the spread.',
      ],
    },
    {
      id: 'q-ec-119', difficulty: 'hard',
      stem: 'A UK resident buys goods from the United States. Over a year, the GBP/USD rate rises 6%, US inflation is 2% and UK inflation is 4%. The UK resident\'s real purchasing power over US goods most likely:',
      choices: ['falls by about 4%', 'rises by about 4%', 'falls by about 8%'],
      answer: 0,
      explain: 'Real rate (GBP/USD) ≈ 6% + 2% − 4% = +4%. A higher real rate with sterling as the price currency means US goods cost about 4% more in real terms.',
      why: [
        'B gets the direction wrong: a rising real d/f rate reduces domestic purchasing power.',
        'C adds UK inflation instead of subtracting it.',
      ],
    },
    {
      id: 'q-ec-120', difficulty: 'medium',
      stem: 'Which is *least likely* to be an objective of capital restrictions?',
      choices: ['Preventing capital flight during a financial crisis', 'Preserving monetary policy independence under a fixed exchange rate', 'Lowering the country\'s cost of accessing foreign capital'],
      answer: 2,
      explain: 'Capital controls usually make foreign funding harder and more expensive because investors view the market as riskier.',
      why: [
        'A is a classic reason for controls on outflows.',
        'B follows from the impossible trinity: restricting capital lets a pegged country set its own rates.',
      ],
    },
  ],
};
