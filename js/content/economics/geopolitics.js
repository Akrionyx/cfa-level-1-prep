// Economics · Module 5 — Introduction to Geopolitics. Original wording.

export default {
  id: 'econ-geopolitics',
  name: 'Introduction to Geopolitics',
  los: [
    'Describe geopolitics from a cooperation versus competition perspective',
    'Describe geopolitics and its relationship with globalization',
    'Describe functions and objectives of the international organizations that facilitate trade, including the World Bank, the International Monetary Fund and the World Trade Organization',
    'Describe geopolitical risk',
    'Describe tools of geopolitics and their impact on regions and economies',
    'Describe the impact of geopolitical risk on investments',
  ],
  lessons: [
    /* ------------------------------------------------------------ */
    {
      id: 'econ-geo-cooperation',
      title: 'Actors, national interest and political cooperation',
      minutes: 11,
      intro: 'Geopolitics studies how geography shapes politics and relations between countries — and investors care because those relations move growth, volatility and costs.',
      blocks: [
        { t: 'h', x: 'Who the actors are' },
        {
          t: 'terms',
          x: [
            ['State actors', 'National governments, political organisations and country leaders that exercise authority over a country\'s security and resources — a president, a parliament, a monarch.'],
            ['Non-state actors', 'Participants in global political, economic or financial affairs who do not control national security or resources — multinational companies, NGOs, charities and influential individuals.'],
          ],
        },
        { t: 'p', x: 'Relationships form a web. If Country A cooperates with B, but B attacks C — A\'s close ally — A\'s relationship with B may break down. Conversely, cooperation across many channels builds trust over time. There is no one-size-fits-all model, but classifying the threats and opportunities a country faces helps gauge how likely geopolitical risk is.' },
        { t: 'h', x: 'Cooperation versus non-cooperation' },
        { t: 'p', x: '**Political cooperation** is the degree to which countries agree on rules and standards for their interactions.' },
        {
          t: 'table',
          head: ['A cooperative country…', 'A non-cooperative country…'],
          rows: [
            ['Standardises rules and harmonises tariffs', 'Has inconsistent, even arbitrary rules'],
            ['Signs agreements on trade, immigration, regulation', 'Restricts movement of goods, services, people and capital; uses capital controls'],
            ['Allows free flow of information and technology transfer', 'Limits technology exchange'],
            ['**Reciprocates** — engagement alone is not enough', 'Retaliates'],
          ],
        },
        { t: 'h', x: 'Why countries cooperate: national interest' },
        { t: 'p', x: 'A country\'s **national interest** is its set of goals — military, economic or cultural.' },
        {
          t: 'ul',
          x: [
            '**National security.** Protecting citizens, economy and institutions from military attack, terrorism, crime, cyber threats and even natural disasters. Geography matters: a landlocked country depends on neighbours for access to resources and so values cooperation; a country on a key shipping route or acting as a trade conduit can use that position as leverage.',
            '**Economic interest.** Security now includes access to energy, food and water, social stability from rising and fairly shared wealth, and the ability of national firms to compete globally. Economically motivated cooperation usually aims to **secure resources through trade** or **level the playing field through standardisation**.',
          ],
        },
        { t: 'h', x: 'Resources, standards and soft power' },
        {
          t: 'ul',
          x: [
            '**Geophysical resource endowment** — liveable land, climate, food, water and energy — is very unequal. A resource-rich country gains leverage over those that need its resources, but can become internally unstable if the benefits flow to a narrow group.',
            '**Standardisation** — agreed protocols for producing, selling, transporting or using products — supports cross-border trade and capital flows. It can be regulatory (common banking supervision standards), process-based (a global interbank messaging network for payments) or operational (standard shipping container sizes that slashed transport costs). Industry groups, not only governments, can drive it.',
            '**Culture and soft power** — historical ties, migration and shared experience, plus **soft power**: influencing others without force, through cultural programmes, education exchanges, tourism promotion and popular culture.',
          ],
        },
        { t: 'h', x: 'Institutions' },
        { t: 'p', x: 'An **institution** is an established organisation or practice — formal (courts, universities, laws) or informal (customs, family structures, the media). Strong institutions that support accountability, the rule of law and property rights make a country more stable, let it act with more authority abroad, and make its cooperative relationships **more durable**, because cooperation is embedded across many layers of society.' },
        { t: 'h', x: 'A hierarchy of interests' },
        { t: 'p', x: 'Governments rank their interests, with survival essentials at the top and "nice-to-haves" lower down. When two interests conflict, the higher one wins. Tariff harmonisation with a neighbour might be beneficial on its own — but not if the two are in military conflict and military self-determination sits higher on the hierarchy. Priorities differ by country and can shift when leadership or world events change.' },
        {
          t: 'ul',
          x: [
            '**Decision makers matter.** Once basic needs are met, rankings become subjective; one government may prioritise defence, the next healthcare.',
            '**Political cycles matter.** Short electoral cycles make it hard to prioritise long-term issues such as climate change or inequality over goals achievable before the next election.',
          ],
        },
        {
          t: 'callout', label: 'Extreme non-cooperation',
          x: 'A few countries value political self-determination above almost any benefit of cooperation. Others may respond with coercion such as **sanctions** — themselves a non-cooperative tool — accepting humanitarian costs in an effort to change the target\'s behaviour.',
        },
        {
          t: 'check',
          q: 'Which action by a country is most likely a form of political cooperation?',
          choices: ['Using its position on a shipping route as leverage', 'Engaging and reciprocating in rules standardisation', 'Imposing capital controls'],
          answer: 1,
          explain: 'Political cooperation is about agreeing rules and standards — and reciprocating. Leveraging geography and restricting capital are not cooperative behaviours.',
        },
        {
          t: 'check',
          q: 'Which of these is most likely to sit *lowest* on a country\'s hierarchy of interests?',
          choices: ['Military self-determination', 'Border security', 'Developing cultural exchange programmes'],
          answer: 2,
          explain: 'Cultural programmes matter but are rarely essential for survival, whereas defence and border security are typically near the top.',
        },
        {
          t: 'takeaways',
          x: [
            'State actors control security and resources; non-state actors (firms, NGOs, individuals) do not.',
            'Cooperation means rules standardisation plus reciprocation; it is driven by national security and economic interests.',
            'Resource endowment, standardisation, soft power and strong institutions shape cooperation; a hierarchy of interests settles conflicts.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-geo-globalization',
      title: 'Globalization: why firms go global, and the backlash',
      minutes: 10,
      intro: 'If political cooperation is about governments agreeing rules, globalization is mostly about companies and people trading, investing and exchanging ideas across borders.',
      blocks: [
        { t: 'p', x: '**Globalization** is the interaction and integration of people, companies and governments worldwide — the spread of products, information, jobs and culture. World trade has risen from roughly a quarter of global GDP around 1970 to over 60% in recent years, though it has faced headwinds since 2008: closer scrutiny after the financial crisis, rising nationalism, and the simple limit that trade cannot grow as a share of GDP forever.' },
        { t: 'p', x: 'Look at a single car: designed in one country, with electronics, steering systems, seatbelts and climate controls made in several others, assembled in another and sold in a third. That lets firms find the best-quality or cheapest inputs — and creates investment opportunities in engineering, logistics and supply-chain management.' },
        {
          t: 'table',
          head: ['Nationalism (anti-globalization)', 'Globalization'],
          rows: [
            ['Promotes a country\'s own economic interests, even at others\' expense', 'Economic and financial cooperation across borders'],
            ['Limited trade and cross-border investment', 'Active trade in goods and services; capital flows'],
            ['Restricted currency exchange', 'Free currency exchange'],
            ['Focus on national production and sales', 'Cultural and information exchange'],
          ],
        },
        {
          t: 'callout', label: 'Key distinction',
          x: 'Political cooperation is driven mainly by **state** actors. Globalization is carried out mainly by **non-state** actors — companies, investors, individuals. The two tend to move together, but private-sector forces can drive globalization even without government support.',
        },
        { t: 'h', x: 'Why non-state actors globalize' },
        {
          t: 'ol',
          x: [
            '**Increasing profits** — by **raising sales** (new customers abroad, often requiring investment and local hiring) or **cutting costs** (lower taxes, cheaper labour, supply-chain efficiencies, and scale economies from consolidation).',
            '**Access to resources and markets** — talent or raw materials unavailable or expensive at home, and investment opportunities abroad. For investors, two flows matter: **portfolio investment flows** (shorter-term holdings of foreign stocks and bonds) and **foreign direct investment** (long-term investment in productive capacity abroad).',
            '**Intrinsic gain** — benefits beyond profit, such as personal growth, learning new ideas and methods, and greater empathy between actors, which can make conflict less likely.',
          ],
        },
        { t: 'p', x: 'In aggregate, lower barriers also bring more choice, higher quality, stronger competition, greater efficiency and more labour mobility.' },
        { t: 'h', x: 'The costs of globalization' },
        {
          t: 'ul',
          x: [
            '**Unequal gains.** Aggregate welfare can rise while some lose — moving a factory abroad creates jobs there but removes them at home.',
            '**Lower ESG standards.** Firms operating under weaker local environmental, social or governance rules may profit more while degrading the environment or workers\' conditions.',
            '**Political consequences.** Inequality and job losses can fuel a political backlash that rolls back both economic and political cooperation.',
            '**Interdependence.** Supply chains may depend on a few countries for critical inputs. A pandemic, mining accident, flood or political dispute can halt entire industries — as the semiconductor shortages after 2020 showed for carmakers.',
          ],
        },
        { t: 'h', x: 'Rollback — but not reversal' },
        { t: 'p', x: 'Trade disputes and "national first" policies since the late 2010s raised fears of deglobalization. Complex global supply chains make rule changes costly, but companies are also used to political risk and slow to re-engineer production over disputes that may pass. A full reversal looks unlikely; instead firms tend to:' },
        {
          t: 'ol',
          x: [
            '**Reshore the essentials** — rebuild domestic supply of critical goods such as medicines and protective equipment.',
            '**Reglobalize production** — duplicate or diversify supply chains across locations.',
            '**Double down on key markets** — keep producing "in country, for the country" where large markets, skilled productive workers and sophisticated supply chains are hard to replace.',
          ],
        },
        {
          t: 'check',
          q: 'Globalization is carried out primarily by:',
          choices: ['national governments negotiating treaties', 'non-state actors such as companies and investors', 'international trade organisations'],
          answer: 1,
          explain: 'Globalization is the product of economic and financial cooperation by corporations, investors, organisations and individuals, even though government cooperation can speed it up.',
        },
        {
          t: 'check',
          q: 'Which action would most likely *increase* geopolitical risk?',
          choices: ['Restricting foreign currency exchange', 'Expanding trade in goods and services', 'Increasing cross-border capital flows'],
          answer: 0,
          explain: 'Restricting currency exchange is a nationalist, non-cooperative move. Expanding trade and capital flows increases interdependence and cooperation.',
        },
        {
          t: 'takeaways',
          x: [
            'Globalization = economic and financial cooperation, led by non-state actors; nationalism limits trade, capital flows and currency exchange.',
            'Motives: higher profits (sales up, costs down), access to resources and markets, intrinsic gains.',
            'Costs: unequal gains, weaker ESG standards, political backlash, fragile interdependence — prompting reshoring, diversification and "in country, for the country" production.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-geo-organizations',
      title: 'The IMF, World Bank and WTO',
      minutes: 9,
      intro: 'After the trade wars and competitive devaluations of the 1930s, the world built institutions to keep money, development and trade on track.',
      blocks: [
        { t: 'p', x: 'In the Great Depression, countries raised trade barriers, devalued to win export markets and restricted foreign exchange. It backfired: world trade collapsed and living standards fell. At Bretton Woods in 1944, governments agreed a framework for economic cooperation that produced the **International Monetary Fund** and the **World Bank**. A planned International Trade Organization was never ratified, so the **General Agreement on Tariffs and Trade (GATT)**, signed in 1947, governed trade until the **World Trade Organization** replaced it in 1995.' },
        {
          t: 'table',
          head: ['', 'IMF', 'World Bank Group', 'WTO'],
          rows: [
            ['**Core mission**', 'Stability of the **international monetary system** — exchange rates and international payments', 'Help developing countries **fight poverty** and achieve environmentally sound growth', 'The legal and institutional foundation of **global trade**'],
            ['**Main activities**', 'Forum for monetary cooperation; supports exchange rate stability and open payments; **lends foreign currency** temporarily, with conditions, to countries with balance of payments problems; surveillance of economies; assesses financial-sector vulnerabilities', 'Finances development projects; provides analysis, advice, technical expertise and capacity building', 'Implements and administers trade agreements; forum for negotiations; **settles disputes**; reviews members\' trade policies; technical help for developing countries; research'],
            ['**Investment relevance**', 'Contains country-specific and **systemic risk** — e.g. conditional rescue lending in sovereign debt and currency crises that could otherwise spread', 'Builds the economic infrastructure needed for financial markets in developing countries; a major top-rated **supranational bond issuer**', 'Its rules underpin the **multinational corporations** whose stocks and bonds fill global portfolios'],
          ],
        },
        { t: 'h', x: 'The IMF in more detail' },
        { t: 'p', x: 'A current account deficit reflects a shortage of national saving and can be cut by squeezing domestic demand — at the cost of jobs. The IMF can soften that adjustment by lending from a pool of gold and currencies contributed by members, **only under strict conditions** with close monitoring. After the 2008–09 crisis it enlarged and streamlined its lending, improved surveillance, analysed global imbalances and capital markets more closely, and — jointly with the World Bank — assessed financial-sector weaknesses.' },
        {
          t: 'callout', label: 'Typical rescue pattern',
          x: 'A country loses market access — for example after years of large deficits or a currency peg that collapses. The IMF (sometimes with regional partners) provides loans, and in return the government commits to conditions such as spending restraint, tax reform and tighter monetary policy, with quarterly reviews. The aim is to restore confidence and stop contagion to other countries.',
        },
        { t: 'h', x: 'The World Bank in more detail' },
        { t: 'p', x: 'To grow and attract business, developing countries need capable governments, legal systems that support business, protected property rights and contracts, working financial systems and less corruption. The World Bank supports this through two main arms:' },
        {
          t: 'terms',
          x: [
            ['IBRD', 'Lends to middle-income and creditworthy developing countries. It raises money by selling **AAA-rated bonds** and lends its own capital, passing on its low funding cost; it covers its own operating costs.'],
            ['IDA', 'Provides **interest-free loans and grants** to the poorest countries, funded by donor contributions replenished every few years and by repayments on very long-term loans.'],
          ],
        },
        { t: 'h', x: 'The WTO in more detail' },
        { t: 'p', x: 'The WTO is the only global organisation regulating trade between nations. GATT remains its main treaty for goods, and the **General Agreement on Trade in Services (GATS)** extends free-trade principles to banks, insurers, telecoms, tourism and transport. Past negotiating rounds tackled non-tariff barriers, services, intellectual property, agriculture and textiles. The most recent broad round, launched in Doha in 2001, never reached a final deal — though China joined the WTO that year — and the stalemate encouraged a wave of bilateral and regional trade agreements.' },
        {
          t: 'check',
          q: 'Which organisation\'s mission is to help developing countries reduce poverty and achieve environmentally sound growth?',
          choices: ['The World Trade Organization', 'The International Monetary Fund', 'The World Bank'],
          answer: 2,
          explain: 'Poverty reduction and development finance are the World Bank\'s purpose. The IMF focuses on monetary stability and the WTO on trade rules.',
        },
        {
          t: 'check',
          q: 'Which body was the only multilateral framework governing international trade from 1948 until 1995?',
          choices: ['The General Agreement on Tariffs and Trade', 'The International Trade Organization', 'The World Trade Organization'],
          answer: 0,
          explain: 'The International Trade Organization was never ratified, and the WTO was created only in 1995, so GATT filled the gap for nearly fifty years.',
        },
        {
          t: 'check',
          q: 'A sovereign debt crisis in one country threatens to spread to others. Which organisation is most directly positioned to contain the systemic risk with conditional emergency lending?',
          choices: ['The World Bank', 'The International Monetary Fund', 'The World Trade Organization'],
          answer: 1,
          explain: 'Temporary, conditional foreign-currency lending to stabilise countries in balance of payments or debt crises is the IMF\'s role.',
        },
        {
          t: 'takeaways',
          x: [
            'IMF: international monetary stability, conditional lending for balance of payments problems, surveillance — contains systemic risk.',
            'World Bank (IBRD, IDA): poverty reduction and development finance; a leading supranational bond issuer.',
            'WTO (successor to GATT, with GATS for services): trade rules, negotiations and dispute settlement.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-geo-archetypes',
      title: 'Four archetypes and the tools of geopolitics',
      minutes: 11,
      intro: 'Put cooperation on one axis and globalization on the other, and you get a simple map of how countries behave — and which tools they reach for.',
      blocks: [
        {
          t: 'quad',
          x: ['Nationalism', 'Globalization'],
          y: ['Non-cooperation', 'Cooperation'],
          cells: [
            [['Bilateralism', 'Cooperates one partner at a time; less globalized'], ['Multilateralism', 'Many trade relationships and extensive rules harmonisation; firms fully integrated in global supply chains']],
            [['Autarky', 'Seeks self-sufficiency with little external trade or finance; state-owned firms run strategic industries'], ['Hegemony', 'Regional or global leader using its influence to control resources and set rules for others']],
          ],
          caption: 'The two axes are spectrums, and countries move over time. Movement between quadrants is itself a source of risk.',
        },
        { t: 'h', x: 'The archetypes' },
        {
          t: 'ul',
          x: [
            '**Autarky.** Political self-sufficiency: control over technology, goods, services, media and messaging. It can occasionally speed development, but more often it leads to a gradual loss of economic and political development.',
            '**Hegemony.** Dominant powers use economic or political weight to set rules — for example, requiring foreign companies to transfer technology in exchange for market access. Aligned countries can enjoy the stability of the hegemon\'s rules, but a hegemon gaining or losing influence may become more competitive, raising risk. A country deeply integrated in energy markets yet politically autonomous can use control of pipelines as leverage.',
            '**Multilateralism.** Mutually beneficial trade with many partners and broad rules harmonisation. A small, open, resource-poor trading hub with strong institutions is the classic case: it grows faster thanks to cooperation — and is **more exposed** to geopolitical risk because it depends on it.',
            '**Bilateralism.** Cooperation between two countries at a time. **Regionalism** — a group of neighbours cooperating, sometimes at the exclusion of outsiders — lies between bilateral and multilateral. Few countries stay purely bilateral, because political cooperation tends to lead firms to globalize.',
          ],
        },
        {
          t: 'callout', label: 'Interdependence cuts both ways',
          x: 'Countries and industries that depend on cross-border flows grow faster with cooperation, and interdependence makes partners less likely to attack each other. But that same interdependence makes them **more vulnerable** when risk does occur. Diversified production spreads risk but also adds more points where it can strike.',
        },
        {
          t: 'check',
          q: 'Which pair of archetypes reflects the greatest difference in country behaviour?',
          choices: ['Bilateralism and autarky', 'Multilateralism and hegemony', 'Multilateralism and autarky'],
          answer: 2,
          explain: 'Multilateralism and autarky sit in opposite corners — they differ on both cooperation and globalization. The other pairs share one axis.',
        },
        { t: 'h', x: 'The tools of geopolitics' },
        { t: 'p', x: 'Tools are how actors assert their interests — and they are the direct **source of geopolitical risk** for investors. Each type can be used cooperatively (increasing flows of goods, capital, people and information) or non-cooperatively (reducing them). A change in the tools a country uses can signal a move between quadrants.' },
        {
          t: 'table',
          head: ['Type', 'Cooperative uses', 'Non-cooperative uses'],
          rows: [
            ['**National security tools**', 'Military alliances and collective security (e.g. NATO) that deter conflict', 'Armed conflict (direct, active); espionage (indirect); threatened action'],
            ['**Economic tools**', 'Multilateral trade agreements; tariff harmonisation via the WTO; common markets; common currencies', 'Nationalisation; tariffs and quotas; voluntary export restraints; domestic content requirements; export subsidies'],
            ['**Financial tools**', 'Free currency exchange across borders; allowing foreign investment', 'Limiting access to local currency markets; restricting foreign investment; sanctions'],
          ],
        },
        {
          t: 'ul',
          x: [
            '**Armed conflict** destroys physical infrastructure — damaging the capital stock for years — and drives migration that reshapes flows of labour and capital and affects neighbouring and host countries. A country that takes in a large, younger and skilled refugee population may bear short-term costs but improve its long-term demographics and potential growth.',
            '**Cooperative tools can still create vulnerability.** The dominance of the US dollar in interbank markets facilitates global finance, yet leaves countries without adequate dollar reserves exposed to liquidity shortages when US monetary policy tightens.',
            '**Tools combine.** Allowing foreign firms to transport goods within a country (cabotage) requires security, economic and financial coordination. Regional groups such as ASEAN and the EU combine economic, financial, security and cultural integration — and the more tools of collaboration actors share, the less likely they are to turn non-cooperative tools on each other.',
          ],
        },
        {
          t: 'callout', label: 'Integration can reverse',
          x: 'Europe moved steadily toward cooperation and globalization for seventy years — customs duties removed, a single market, citizenship rights and a common currency for many members. The UK\'s 2016 vote to leave the EU was a sudden partial reversal, causing near-term market volatility and, over time, a shift in parts of its approach from multilateral toward bilateral.',
        },
        { t: 'h', x: 'Geopolitics and comparative advantage' },
        { t: 'p', x: 'Trade theory says countries specialise according to their resources and technology and gain by exchanging. Geopolitics can tilt that advantage: low-risk countries attract labour and capital, high-risk ones lose them, and persistent conflict risk raises volatility, so investors demand a **higher required return** — raising discount rates in valuation.' },
        {
          t: 'check',
          q: 'Match the tool to its type. Nationalising a country\'s largest energy company is best described as:',
          choices: ['a financial tool', 'a national security tool', 'an economic tool'],
          answer: 2,
          explain: 'Nationalisation asserts state control over an industry through economic means — a non-cooperative economic tool.',
        },
        {
          t: 'check',
          q: 'Which statement about national security tools is most accurate?',
          choices: ['They can be used cooperatively, for example through alliances that deter conflict', 'They are always non-cooperative', 'They affect only military targets, not economies'],
          answer: 0,
          explain: 'Collective security agreements are a cooperative use of national security tools. And armed conflict clearly damages economies through capital destruction and migration.',
        },
        {
          t: 'takeaways',
          x: [
            'Archetypes: autarky (non-cooperative, nationalist), hegemony (non-cooperative, global), bilateralism (cooperative, nationalist), multilateralism (cooperative, global).',
            'What matters is both a country\'s quadrant and its stability within it.',
            'Tools — national security, economic, financial — each have cooperative and non-cooperative uses and are the source of geopolitical risk.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-geo-risk',
      title: 'Geopolitical risk and the investment process',
      minutes: 12,
      intro: 'A practical framework: classify the risk, judge its likelihood, speed and impact, build scenarios, watch signposts — then decide whether and how to act.',
      blocks: [
        { t: 'p', x: '**Geopolitical risk** is the risk that tensions or actions between actors disrupt the normal, peaceful course of international relations. It rises when the geographic and political foundations of relations shift. Some investors treat it as background, relevant only to long-term asset class attractiveness; for others it is central, and anticipating dislocations becomes a source of alpha — hedging ahead of a political transition, or buying into the volatility it causes.' },
        { t: 'h', x: 'Three types of geopolitical risk' },
        {
          t: 'table',
          head: ['Type', 'Nature', 'Examples', 'Known in advance?'],
          rows: [
            ['**Event risk**', 'Centres on set dates; outcomes can change expectations about a country\'s cooperative stance', 'Elections, referendums, new legislation, treaty deadlines', '**Yes** — political calendars are the starting point'],
            ['**Exogenous risk**', 'Sudden, unanticipated shocks to cooperation or firms\' ability to globalize', 'Invasions, uprisings, coups, natural disasters', '**No**'],
            ['**Thematic risk**', 'Known risks that evolve and expand over long periods', 'Climate change, cyber threats, migration patterns, populism, terrorism', '**Yes**'],
          ],
        },
        {
          t: 'callout', label: 'Predictable is not the same as harmless',
          x: 'Knowing the date of a referendum does not make a surprise result less likely or less damaging — it only gives investors more time to prepare. When the UK voted to leave the EU in 2016, sterling fell sharply on the day and kept sliding for months, government bond yields dropped as investors sought safety, and equities fell at first before recovering.',
        },
        {
          t: 'check',
          q: 'Which types of geopolitical risk are known in advance?',
          choices: ['Event and exogenous risk', 'Event and thematic risk', 'Exogenous and thematic risk'],
          answer: 1,
          explain: 'Event risk has a known date and thematic risk is a recognised, slowly evolving threat. Exogenous risk is by definition unanticipated.',
        },
        { t: 'h', x: 'Assessing a threat: likelihood, velocity, impact' },
        {
          t: 'terms',
          x: [
            ['Likelihood', 'The probability the risk occurs. More art than science. Highly cooperative, globalized countries are less likely to be targeted — conflict is costlier for partners — but more exposed when risks elsewhere spill over.'],
            ['Velocity', 'How quickly the risk affects a portfolio: high-velocity (short-term), medium-term, or low-velocity (long-term).'],
            ['Size and nature of impact', 'How big, and whether **discrete** (one company or sector) or **broad** (a country or the global economy). Impacts tend to be larger when markets are already weak.'],
          ],
        },
        {
          t: 'table',
          head: ['Velocity', 'Typical effect', 'Likely investor response'],
          rows: [
            ['**High** (short-term)', 'Market-wide volatility; "black swan" shocks', '**Flight to quality**; tactical moves — long-term changes rarely needed'],
            ['**Medium**', 'Impairs processes, costs and opportunities in particular sectors; lower valuations', '**Adjust sector** exposures'],
            ['**Low** (long-term)', 'Environmental, social and governance shifts; limited immediate effect', '**Adjust strategic asset allocation**'],
          ],
        },
        { t: 'p', x: 'The three dimensions must be judged together. A very likely risk with trivial portfolio impact may not deserve much attention. A very damaging but unlikely risk may merit a prepared scenario rather than constant monitoring. Some risks have several velocities: a referendum surprise can crush a currency immediately and raise trade costs for years.' },
        {
          t: 'check',
          q: 'A slowly unfolding migration trend is expected to change several countries\' growth prospects over many years. The most appropriate investor response is most likely to:',
          choices: ['adjust strategic asset allocation', 'move immediately into safe-haven assets', 'adjust holdings in a single affected company'],
          answer: 0,
          explain: 'Low-velocity, long-term risks call for strategic allocation changes. Flight to quality fits high-velocity shocks; sector or company adjustments fit medium-term impacts.',
        },
        { t: 'h', x: 'Scenario analysis and signposts' },
        { t: 'p', x: 'Geopolitical risks rarely develop in a straight line, so single-point forecasts are unhelpful. **Scenario analysis** evaluates portfolio outcomes across possible states of the world: start with a base case (most impactful outcome and its likelihood), then consider upside and downside cases, whether it is a persistent tail risk or a short shock, and how markets may recover. Quantitative versions can stress a portfolio against one key factor — rates, asset prices or exchange rates — or replay extreme historical episodes, though second-round effects make precision hard. Teams must guard against **groupthink**.' },
        { t: 'p', x: 'A **signpost** is an indicator, market level, data release or event that shows a risk becoming more or less likely. Think of traffic lights: green means no action; amber means heightened preparedness; red means execute the plan. Good signposts are tied to the key assumptions of a scenario.' },
        {
          t: 'steps',
          title: 'Worked example — signposts for a referendum',
          given: 'A government is considering a referendum on leaving a major trading bloc.',
          ask: 'How might the signposts evolve?',
          x: [
            '**Green:** opinion is divided but no vote is planned; a break in cooperation is not clearly defined.',
            '**Amber:** a referendum is formally announced — disruptive change becomes more likely and could hit faster, so managers pay closer attention.',
            '**Red:** polls shortly before the vote show the "leave" side moving ahead — managers finalise action plans (hedges, reallocations) for results day.',
          ],
          result: 'Focus on **policy, not politics**: rhetoric between leaders is often noise, while actual policy changes create durable portfolio effects.',
        },
        {
          t: 'callout', label: 'Useful warning combinations',
          x: 'High inflation with deteriorating employment can signal political unrest. A pegged currency combined with collapsing export revenue — especially for commodity exporters — can foreshadow a change in exchange rate policy. In emerging markets these signals often appear before official data.',
        },
        { t: 'h', x: 'How the risk shows up in portfolios' },
        {
          t: 'ul',
          x: [
            '**High-velocity risks** appear as rapid moves in commodity prices, currencies, equities and bond yields. In early 2020 US equities fell by about a third in a month while Treasury yields collapsed as investors fled to safety — then recovered.',
            '**Low-velocity risks** hit fundamentals over time: lower revenues, higher costs, lower valuations.',
            'Where geopolitical disruption is a persistent threat, investors demand **higher risk premiums**, raising discount rates — one reason emerging and frontier market assets typically trade at a discount to developed markets.',
            'Research on news-based geopolitical risk indexes finds high risk reduces investment, employment and stock prices — and that the **threat** of adverse events can weigh more over time than the events themselves.',
          ],
        },
        { t: 'h', x: 'Acting on it' },
        {
          t: 'ul',
          x: [
            '**Top-down:** asset allocators build likelihood, velocity and impact into capital market assumptions and country weights — favouring reliably multilateral countries over those under constant military threat.',
            '**Bottom-up:** portfolio managers can treat geopolitical exposure as a factor. A carmaker with widely diversified production faces more touchpoints (higher likelihood) but less chance of a full shutdown (lower impact).',
            '**Investor-specific:** a long-horizon investor may see an exogenous shock as a buying opportunity; someone near retirement may be badly hurt by the same shock and might reduce exposure through low-volatility assets or hedging.',
          ],
        },
        {
          t: 'check',
          q: 'Higher-velocity geopolitical risks are most likely to:',
          choices: ['cause prolonged changes to company revenues and costs', 'show up as rapid changes in asset prices and volatility', 'require permanent changes to strategic asset allocation'],
          answer: 1,
          explain: 'Fast-moving shocks show up as sharp, often temporary price moves. Prolonged effects on fundamentals and strategic allocation are features of low-velocity risks.',
        },
        {
          t: 'takeaways',
          x: [
            'Types: event (known date), exogenous (sudden), thematic (known, long-evolving).',
            'Assess likelihood, velocity and impact together; velocity maps to flight to quality, sector shifts or strategic reallocation.',
            'Use scenarios and signposts, watching policy rather than politics.',
            'Persistent geopolitical risk raises required returns and discount rates; the right response depends on the investor\'s goals, risk tolerance and horizon.',
          ],
        },
      ],
    },
  ],

  formulas: [],

  cards: [
    { id: 'c-e-50', front: 'Autarky', back: 'Non-cooperative and nationalist — self-sufficiency and state control of strategic industries.' },
    { id: 'c-e-51', front: 'Hegemony', back: 'Non-cooperative but globalised — a dominant power shaping rules for others.' },
    { id: 'c-e-52', front: 'Multilateralism vs bilateralism', back: 'Both cooperative. Multilateralism is globalised, rules-based participation; bilateralism works through country-to-country agreements with a nationalist orientation.' },
    { id: 'c-e-53', front: 'Event, exogenous and thematic risk', back: 'Event: known date, uncertain outcome (elections). Exogenous: sudden and unexpected (invasion). Thematic: known and evolving slowly (climate change).' },
    { id: 'c-e-54', front: 'Three dimensions for assessing geopolitical risk', back: 'Likelihood, velocity, and size and nature of impact.' },
    { id: 'c-e-55', front: 'State vs non-state actors', back: 'State actors control national security and resources (governments, leaders). Non-state actors do not (multinationals, NGOs, influential individuals).' },
    { id: 'c-e-56', front: 'Three motivations for non-state actors to globalize', back: 'Increasing profits (more sales or lower costs), access to resources and markets, and intrinsic gains.' },
    { id: 'c-e-57', front: 'Main mandates of the IMF, World Bank and WTO', back: 'IMF: stability of the international monetary system. World Bank: fight poverty in developing countries. WTO: rules of global trade and dispute settlement.' },
    { id: 'c-e-58', front: 'Risk velocity → investor reaction', back: 'High: flight to quality. Medium: adjust sector exposures. Low: adjust strategic asset allocation.' },
    { id: 'c-e-59', front: 'Signpost', back: 'An indicator, data point or event that signals a risk is becoming more or less likely — the green, amber, red light for acting on a scenario.' },
  ],

  questions: [
    {
      id: 'q-ec-050', difficulty: 'easy',
      stem: 'A national election scheduled for next spring, whose outcome is uncertain, is best classified as:',
      choices: ['event risk', 'exogenous risk', 'thematic risk'],
      answer: 0,
      explain: 'Event risk concerns developments whose timing is known in advance but whose outcome is uncertain. A scheduled election is the textbook example.',
      why: [
        'B describes sudden, unanticipated shocks such as an invasion or coup.',
        'C describes long-running, evolving risks such as climate change.',
      ],
    },
    {
      id: 'q-ec-051', difficulty: 'medium',
      stem: 'A country pursues open trade and deep integration with global markets, but largely acts unilaterally to set rules that others must follow. This country best fits which geopolitical archetype?',
      choices: ['Multilateralism', 'Hegemony', 'Autarky'],
      answer: 1,
      explain: 'Hegemony combines a globalised orientation with non-cooperation: a dominant power engages with the world economy but on terms it sets.',
      why: [
        'A is also globalised, but cooperative — it participates in shared, rules-based frameworks rather than dictating them.',
        'C is non-cooperative but nationalist, pursuing self-sufficiency rather than global integration.',
      ],
    },
    {
      id: 'q-ec-052', difficulty: 'hard',
      stem: 'Compared with a thematic geopolitical risk, a high-velocity exogenous risk most likely:',
      choices: [
        'has a greater effect on long-term strategic asset allocation than on short-term market prices.',
        'produces sharper short-term market reactions and is more difficult to prepare for.',
        'can be identified and fully hedged well in advance.',
      ],
      answer: 1,
      explain: 'Exogenous shocks arrive suddenly, so markets reprice quickly and there is little opportunity to position beforehand. Slow-moving thematic risks, by contrast, are most relevant to long-horizon allocation decisions.',
      why: [
        'A describes the typical profile of a low-velocity thematic risk.',
        'C contradicts the defining unpredictability of exogenous risk.',
      ],
    },
    {
      id: 'q-ec-053', difficulty: 'expert',
      stem: 'A government restricts its banks from settling transactions with a rival state and freezes that state\'s foreign reserves held within its jurisdiction. These actions are best described as the use of:',
      choices: ['national security tools', 'economic tools', 'financial tools'],
      answer: 2,
      explain: 'Limiting access to currency settlement and freezing reserves operate through the financial system — these are financial tools of geopolitics, alongside sanctions and restrictions on cross-border investment.',
      why: [
        'A involves military action, espionage and alliances.',
        'B involves trade instruments such as tariffs, quotas, trade agreements and nationalisation.',
      ],
    },
    {
      id: 'q-ec-112', difficulty: 'medium',
      stem: 'Which statement about political cooperation is most accurate?',
      choices: ['A country that engages in international agreements is cooperative even if it does not reciprocate', 'Strong domestic institutions tend to make a country\'s cooperative relationships more durable', 'Geographic factors have little influence on a country\'s willingness to cooperate'],
      answer: 1,
      explain: 'Institutions that support accountability, rule of law and property rights embed cooperation across society and make defection less likely.',
      why: [
        'A is wrong because cooperation requires reciprocation, not just engagement.',
        'C is wrong because geography — landlocked status, resources, trade routes — strongly shapes the need for and leverage in cooperation.',
      ],
    },
    {
      id: 'q-ec-113', difficulty: 'easy',
      stem: 'A member country facing a severe balance of payments crisis seeks temporary foreign currency loans in exchange for policy commitments. It would most likely approach:',
      choices: ['the World Bank', 'the World Trade Organization', 'the International Monetary Fund'],
      answer: 2,
      explain: 'Temporary, conditional lending of foreign exchange for balance of payments problems is a core IMF function.',
      why: [
        'A focuses on long-term development and poverty reduction rather than short-term payments crises.',
        'B administers trade rules and disputes and does not lend.',
      ],
    },
    {
      id: 'q-ec-114', difficulty: 'hard',
      stem: 'A portfolio manager identifies a medium-velocity geopolitical risk — a pipeline disruption expected to take several quarters to repair. The most appropriate response is most likely to:',
      choices: ['rebalance the strategic asset allocation for the next decade', 'adjust exposure to the energy sector in the affected countries', 'shift the whole portfolio into government bonds immediately'],
      answer: 1,
      explain: 'Medium-term risks tend to affect particular sectors\' costs and valuations, so sector-level adjustments fit best.',
      why: [
        'A is the response suited to low-velocity, long-term risks.',
        'C is a flight-to-quality response suited to high-velocity shocks.',
      ],
    },
  ],
};
