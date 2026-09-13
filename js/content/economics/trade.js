// Economics · Module 6 — International Trade. Original wording and numbers.

export default {
  id: 'econ-trade',
  name: 'International Trade',
  los: [
    'Describe the benefits and costs of international trade',
    'Compare types of trade restrictions, such as tariffs, quotas and export subsidies, and their economic implications',
    'Explain motivations for and advantages of trading blocs, common markets and economic unions',
  ],
  lessons: [
    /* ------------------------------------------------------------ */
    {
      id: 'econ-trade-benefits',
      title: 'Why countries trade — and who loses',
      minutes: 11,
      intro: 'Trade raises a country\'s total welfare. That does not mean everyone wins — and understanding both halves explains a lot of politics and investment risk.',
      blocks: [
        { t: 'h', x: 'The gains from trade' },
        {
          t: 'ol',
          x: [
            '**Gains from exchange and specialisation.** Each country can sell exports at a higher price, or buy imports more cheaply than it could make them. Resources shift toward what each country does relatively well, allowing everyone to consume more.',
            '**Economies of scale.** Industries with increasing returns — cars, steel — produce more cheaply when they can sell to a larger market.',
            '**Greater variety** for households and firms.',
            '**More competition.** Foreign rivals erode domestic monopoly power and force firms to become more efficient.',
            '**More efficient allocation of resources.**',
          ],
        },
        { t: 'h', x: 'Comparative advantage: the core idea' },
        {
          t: 'terms',
          x: [
            ['Absolute advantage', 'Producing a good using **fewer resources** than another country.'],
            ['Comparative advantage', 'Producing a good at a **lower opportunity cost** — giving up less of other goods. Trade is beneficial whenever opportunity costs differ, even if one country is better at everything.'],
          ],
        },
        {
          t: 'steps',
          title: 'Worked example — who should make what?',
          given: 'In a day, one worker in Northland can make 6 tonnes of rice or 3 machines. One worker in Southland can make 4 tonnes of rice or 1 machine.',
          ask: 'Which country has the comparative advantage in each good?',
          x: [
            'Northland is more productive in **both** goods, so it has the absolute advantage in both.',
            'Opportunity cost of 1 machine: Northland gives up 6/3 = **2 tonnes of rice**; Southland gives up 4/1 = **4 tonnes**.',
            'Opportunity cost of 1 tonne of rice: Northland gives up 3/6 = **0.5 machines**; Southland gives up 1/4 = **0.25 machines**.',
            'Northland gives up less to make machines; Southland gives up less to make rice.',
          ],
          result: 'Northland has the comparative advantage in machines, Southland in rice. Both can consume more by specialising and trading at any price between 2 and 4 tonnes of rice per machine.',
        },
        {
          t: 'check',
          q: 'One worker in Country P makes 10 shirts or 5 bikes; one worker in Country Q makes 8 shirts or 2 bikes. Which statement is correct?',
          choices: ['Country Q has the comparative advantage in shirts', 'Country P should make both goods because it is more productive in both', 'No gains from trade exist because P has the absolute advantage in both'],
          answer: 0,
          explain: 'A shirt costs P 0.5 bikes but costs Q only 0.25 bikes, so Q has the comparative advantage in shirts (and P in bikes). Gains come from differing opportunity costs, not absolute productivity.',
        },
        { t: 'h', x: 'Traditional and newer trade models' },
        {
          t: 'ul',
          x: [
            '**Traditional models** explain specialisation by differences in **technology** (the Ricardian model) or in **factor endowments** such as labour and capital (the Heckscher–Ohlin model).',
            '**Newer models** stress **economies of scale, variety and competition**. Monopolistically competitive models explain **intra-industry trade** — similar countries exporting *and* importing the same category of goods, such as different car brands. Consumers gain variety; firms gain scale by selling into a bigger market.',
            'Trade can also raise real GDP through **learning by doing** (costs fall with cumulative output, as in semiconductors), knowledge spillovers, and pressure to improve institutions and policies that reward innovation. Research suggests a sizeable share of the benefits of rich countries\' R&D spills over to their trading partners.',
          ],
        },
        { t: 'h', x: 'The costs of trade' },
        { t: 'p', x: 'Opening to trade forces adjustment. Exporting industries expand; import-competing industries shrink. Less efficient firms close, workers lose jobs and may need retraining, and inequality can widen — in developed countries, particularly for workers facing import competition. In the long run resources are usually redeployed more productively, but some workers with industry-specific skills may be permanently worse off.' },
        {
          t: 'callout', label: 'What "gains from trade" really means',
          x: 'Total benefits exceed total losses, so **the winners could, in principle, compensate the losers and still be better off**. It does not mean every consumer, worker and producer gains — which is exactly why trade policy is so politically contested.',
        },
        {
          t: 'check',
          q: 'Cotton is relatively cheap to produce in Cottonland, and lumber is relatively cheap in Lumberland. After the two begin trading, Cottonland\'s lumber industry will most likely:',
          choices: ['expand, as it exports lumber', 'shrink, as lumber is imported from Lumberland', 'be unaffected, because overall welfare rises'],
          answer: 1,
          explain: 'Lumber is relatively expensive to make in Cottonland, so imports replace domestic output. Overall welfare rises, but this industry and its workers bear adjustment costs.',
        },
        {
          t: 'takeaways',
          x: [
            'Gains: exchange and specialisation, scale economies, variety, competition, efficient resource allocation.',
            'Comparative advantage depends on opportunity cost, not absolute productivity.',
            'Newer models explain intra-industry trade through scale and variety.',
            'Trade raises total welfare, but import-competing workers and firms can lose; winners could compensate losers.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-trade-restrictions',
      title: 'Tariffs, quotas, VERs and export subsidies',
      minutes: 14,
      intro: 'Every trade restriction raises the domestic price and helps domestic producers. The questions that matter are who captures the gap and how much welfare is destroyed.',
      blocks: [
        { t: 'p', x: '**Trade restrictions** (protection) are government policies that limit households\' and firms\' ability to trade freely. Common reasons: protecting established industries, nurturing **infant industries** until they mature, protecting jobs, safeguarding strategic industries for national security, raising revenue (important for some developing countries) and **retaliating** against other countries\' restrictions.' },
        {
          t: 'terms',
          x: [
            ['Tariff', 'A tax on imported goods.'],
            ['Import quota', 'A limit on the quantity of a good that may be imported over a period, enforced through import licences.'],
            ['Voluntary export restraint (VER)', 'Like a quota, but imposed by the **exporting** country, which agrees to limit its exports.'],
            ['Export subsidy', 'A government payment to a firm for each unit it exports.'],
            ['Domestic content requirement', 'A rule that a share of a product\'s value or components must be produced domestically.'],
          ],
        },
        {
          t: 'callout', label: 'Small versus large country',
          x: 'A **small country** is a price taker in the world market for the good — it cannot move the world price, whatever its population or GDP. A **large country** imports enough to influence the world price.',
        },
        { t: 'h', x: 'The welfare effects of a tariff' },
        {
          t: 'plot', x: [0, 120], y: [0, 100], xlabel: 'Quantity (thousands)', ylabel: 'Price ($)',
          polys: [
            { pts: [[0, 40], [20, 40], [30, 50], [0, 50]], cls: 'c-accent' },
            { pts: [[20, 40], [30, 40], [30, 50]], cls: 'c-wrong' },
            { pts: [[30, 40], [90, 40], [90, 50], [30, 50]], cls: 'c-warn' },
            { pts: [[90, 40], [100, 40], [90, 50]], cls: 'c-wrong' },
          ],
          curves: [
            { fn: (q) => 20 + q, domain: [0, 80], cls: 'c-ink' },
            { fn: (q) => 140 - q, domain: [40, 120], cls: 'c-ink' },
          ],
          lines: [
            { pts: [[0, 40], [120, 40]], cls: 'c-muted' },
            { pts: [[0, 50], [120, 50]], cls: 'c-accent', dash: true },
          ],
          vlines: [{ x: 20, label: '20', to: 40 }, { x: 30, label: '30', to: 50 }, { x: 90, label: '90', to: 50 }, { x: 100, label: '100', to: 40 }],
          hlines: [{ y: 40, label: '40', to: 0 }, { y: 50, label: '50', to: 0 }],
          labels: [
            { x: 8, y: 43.5, text: 'A', cls: 'b' },
            { x: 26.5, y: 42, text: 'B', cls: 'b' },
            { x: 58, y: 43.5, text: 'C', cls: 'b' },
            { x: 92.5, y: 42, text: 'D', cls: 'b' },
            { x: 77, y: 86, text: 'Domestic supply', cls: 'b' },
            { x: 42, y: 90, text: 'Domestic demand', cls: 'b', anchor: 'end' },
            { x: 119, y: 57, text: 'world price + tariff', anchor: 'end' },
            { x: 119, y: 42.5, text: 'world price', anchor: 'end' },
          ],
          caption: 'A $10 tariff raises the domestic price from $40 to $50. Consumers lose A + B + C + D; producers gain A; the government collects C; B and D are deadweight loss.',
        },
        {
          t: 'table',
          head: ['Group', 'Effect of the tariff (small country)'],
          rows: [
            ['Consumers', 'Lose consumer surplus: **−(A + B + C + D)**'],
            ['Domestic producers', 'Gain producer surplus: **+A**'],
            ['Government', 'Collects tariff revenue on the remaining imports: **+C**'],
            ['**National welfare**', '**−(B + D)** — deadweight loss'],
          ],
        },
        {
          t: 'ul',
          x: [
            '**B** is a *production* inefficiency: domestic firms with costs above the world price now produce goods that could have been imported more cheaply.',
            '**D** is a *consumption* inefficiency: buyers willing to pay more than the world price but less than the tariff-inclusive price no longer buy.',
          ],
        },
        {
          t: 'steps',
          title: 'Worked example — measuring the welfare cost',
          given: 'A small country\'s world price for a good is $40. At that price domestic firms supply 20,000 units and consumers buy 100,000, so 80,000 are imported. A tariff of $10 per unit raises the domestic price to $50; domestic supply rises to 30,000 and demand falls to 90,000.',
          ask: 'Calculate the change in consumer surplus, producer surplus, government revenue and national welfare.',
          x: [
            'Imports fall from 80,000 to 90,000 − 30,000 = **60,000**.',
            'Consumer surplus loss (A + B + C + D) = $10 × 90,000 + ½ × $10 × 10,000 = 900,000 + 50,000 = **$950,000**.',
            'Producer surplus gain (A) = $10 × 20,000 + ½ × $10 × 10,000 = 200,000 + 50,000 = **$250,000**.',
            'Tariff revenue (C) = $10 × 60,000 = **$600,000**.',
            'Deadweight loss (B + D) = ½ × $10 × 10,000 + ½ × $10 × 10,000 = **$100,000**. Check: 950,000 − 250,000 − 600,000 = 100,000.',
          ],
          result: 'The country as a whole is $100,000 worse off each period, even though producers and the government gain.',
        },
        {
          t: 'callout', label: 'The large-country exception',
          x: 'When a large importer imposes a tariff, foreign exporters may cut their prices to keep market share. That improves the importer\'s **terms of trade**, transferring income from the exporting country. A large country *could* gain overall if the terms-of-trade benefit exceeds its deadweight loss and partners do not retaliate — but **world** welfare still falls.',
        },
        { t: 'h', x: 'Quotas and voluntary export restraints' },
        { t: 'p', x: 'A quota that limits imports to the same quantity as the tariff produces the **same domestic price** and the same areas A, B and D. The difference is area C. Instead of tariff revenue, it becomes **quota rent** — the extra profit from selling the limited imports at the higher domestic price.' },
        {
          t: 'table',
          head: ['Who captures area C?', 'Importing country\'s welfare loss'],
          rows: [
            ['Government auctions the import licences', '**B + D** — same as a tariff'],
            ['Foreign producers or foreign governments capture the rents', '**B + C + D** — worse than a tariff'],
            ['VER (imposed by the exporter)', '**B + C + D** — the exporter captures the rent'],
          ],
        },
        {
          t: 'check',
          q: 'An importing country can cut imports to the same quantity using either a tariff or a voluntary export restraint negotiated with the exporter. From the importer\'s perspective, the VER is most likely:',
          choices: ['equivalent, since prices and quantities are the same', 'worse, because foreign exporters capture the rent', 'better, because it creates no deadweight loss'],
          answer: 1,
          explain: 'Both cause the same deadweight loss, but under a VER the price gap on imports goes to foreign exporters instead of the importing government.',
        },
        { t: 'h', x: 'Export subsidies' },
        { t: 'p', x: 'An exporter receives the world price **plus** the subsidy on every unit sold abroad, so it shifts sales from the home market to exports. To compete, the domestic price rises too. The policy encourages production that is inconsistent with comparative advantage, so welfare falls. Importing countries may respond with **countervailing duties**. Agricultural subsidies in rich economies have long been a flashpoint in trade negotiations.' },
        {
          t: 'ul',
          x: [
            '**Small country:** the domestic price rises by the amount of the subsidy; national welfare falls.',
            '**Large country:** extra exports push the world price down, so part of the subsidy is effectively handed to foreign buyers — the welfare loss is **larger** than in the small-country case.',
          ],
        },
        {
          t: 'table',
          head: ['', 'Tariff', 'Import quota', 'Export subsidy', 'VER'],
          rows: [
            ['Country affected', 'Importer', 'Importer', 'Exporter', 'Importer'],
            ['Domestic price', 'Rises', 'Rises', 'Rises', 'Rises'],
            ['Domestic production', 'Rises', 'Rises', 'Rises', 'Rises'],
            ['Domestic consumption', 'Falls', 'Falls', 'Falls', 'Falls'],
            ['Trade', 'Imports fall', 'Imports fall', 'Exports rise', 'Imports fall'],
            ['Producer surplus', 'Rises', 'Rises', 'Rises', 'Rises'],
            ['Consumer surplus', 'Falls', 'Falls', 'Falls', 'Falls'],
            ['Government revenue', 'Rises', 'Mixed — depends who captures rents', 'Falls (spending rises)', 'No change — rent goes abroad'],
            ['National welfare', 'Falls (small); could rise (large)', 'Falls (small); could rise (large)', 'Falls', 'Falls'],
          ],
        },
        {
          t: 'check',
          q: 'You are considering investing in a local firm that imports computers. The government will impose either a tariff or an import quota that restricts imports to the same level. Assuming the importer can capture part of the quota rents, which policy is better for the firm?',
          choices: ['The quota', 'The tariff', 'They are identical for the firm'],
          answer: 0,
          explain: 'A tariff sends the price gap to the government and shrinks the importer\'s business. Under a quota, an importer that holds licences can sell the limited imports at the higher domestic price and keep some of the rent.',
        },
        {
          t: 'takeaways',
          x: [
            'Tariff (small country): consumers −(A+B+C+D), producers +A, government +C, deadweight loss B+D.',
            'Quotas produce the same price effect; welfare loss equals a tariff only if the government captures the quota rents. VER rents go to the exporter.',
            'Export subsidies raise the domestic price and reduce welfare, more so for a large country.',
            'A large country can theoretically gain from a tariff through terms of trade, but world welfare falls.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-trade-blocs',
      title: 'Trading blocs and regional integration',
      minutes: 11,
      intro: 'Global trade talks move slowly, so countries increasingly integrate with their neighbours. Each step deeper brings more benefits — and gives up more independence.',
      blocks: [
        { t: 'p', x: 'A **regional trading bloc** (or regional trade agreement) is a group of countries that agree to reduce and eventually eliminate barriers to trade and to the movement of factors of production among themselves. It may or may not adopt common barriers against non-members.' },
        { t: 'h', x: 'The ladder of integration' },
        {
          t: 'table',
          head: ['Level', 'Free trade among members', 'Common external trade policy', 'Free movement of labour and capital', 'Common economic institutions and coordinated policy', 'Common currency'],
          rows: [
            ['**Free trade area**', '✓', '', '', '', ''],
            ['**Customs union**', '✓', '✓', '', '', ''],
            ['**Common market**', '✓', '✓', '✓', '', ''],
            ['**Economic union**', '✓', '✓', '✓', '✓', ''],
            ['**Monetary union**', '✓', '✓', '✓', '✓', '✓'],
          ],
        },
        {
          t: 'ul',
          x: [
            'A North American agreement among the US, Canada and Mexico is a **free trade area** — each keeps its own policies toward outsiders.',
            'Belgium, the Netherlands and Luxembourg formed a **customs union** in the 1940s, later absorbed into the European Community.',
            'MERCOSUR in South America is an example of a **common market**.',
            'The European Union is an **economic union**; the euro-area members have also formed a **monetary union**.',
          ],
        },
        {
          t: 'check',
          q: 'Several countries remove all tariffs on each other\'s goods and adopt a common tariff on imports from non-members, but do not allow free movement of workers. This is best described as a:',
          choices: ['free trade area', 'common market', 'customs union'],
          answer: 2,
          explain: 'Internal free trade plus a common external tariff is a customs union. Free movement of labour and capital would make it a common market.',
        },
        { t: 'h', x: 'Why regional integration is popular' },
        { t: 'p', x: 'Negotiating among a few countries is faster and less contentious than global talks through the WTO, which have stalled for years on issues such as agricultural market access and affordable medicines. Coordinating policy among a small group is also easier. Regional integration can be seen as a step toward freer trade.' },
        { t: 'h', x: 'Trade creation and trade diversion' },
        {
          t: 'terms',
          x: [
            ['Trade creation', 'Higher-cost **domestic production** is replaced by lower-cost **imports from a member** — an efficiency gain.'],
            ['Trade diversion', 'Lower-cost **imports from a non-member** are replaced by higher-cost **imports from a member**, because only the member escapes the tariff — an efficiency loss.'],
          ],
        },
        {
          t: 'steps',
          title: 'Worked example — creation or diversion?',
          given: 'Norland imposes a 40% tariff on all imports of widgets. Production costs per widget: Norland (domestic) $12, Estoria $10, Westia $8. Norland then forms a free trade area with Estoria only.',
          ask: 'Where does Norland buy widgets before and after, and is the change trade creation or trade diversion?',
          x: [
            '**Before:** tariff-inclusive import prices are Estoria $10 × 1.4 = $14 and Westia $8 × 1.4 = $11.20. Domestic production costs $12. Norland imports from **Westia** at $11.20.',
            '**After:** Estoria\'s widgets enter tariff-free at **$10**, while Westia\'s still cost $11.20. Norland switches to **Estoria**.',
            'The world\'s lowest-cost producer (Westia, $8) has been replaced by a higher-cost member (Estoria, $10). That is **trade diversion**. Norland\'s consumers save $1.20 per unit, but the government loses $3.20 of tariff revenue per unit.',
            'Contrast a product where Norland previously made the good itself because the member\'s tariff-inclusive price was higher. If the FTA lets cheaper member imports replace domestic production, that is **trade creation**.',
          ],
          result: 'An agreement raises welfare overall only if trade creation outweighs trade diversion.',
        },
        {
          t: 'check',
          q: 'After a customs union forms, a member country stops buying from the world\'s lowest-cost producer, a non-member, and instead imports from a higher-cost fellow member. This is:',
          choices: ['trade diversion', 'trade creation', 'a terms-of-trade gain'],
          answer: 0,
          explain: 'Shifting from a cheaper outside supplier to a more expensive member because of preferential tariffs is trade diversion.',
        },
        { t: 'h', x: 'Benefits and costs of blocs' },
        {
          t: 'table',
          head: ['Benefits', 'Costs and challenges'],
          rows: [
            ['All the gains of free trade: specialisation, less monopoly power, scale economies, learning by doing, technology transfer and spillovers, more foreign investment, cheaper intermediate inputs', 'Adjustment costs: inefficient firms close and workers are displaced, sometimes permanently if they cannot find comparable jobs'],
            ['Interdependence reduces the potential for conflict', 'Trade diversion can reduce welfare'],
            ['Greater collective bargaining power in the world economy', 'Concerns about national sovereignty, especially when big and small economies share a bloc'],
            ['Growth spillovers between integrated members; convergence in living standards', 'Cultural and historical differences complicate deeper integration'],
            ['Variety gains for consumers that keep accumulating, while adjustment costs fade over time', 'Deep integration limits independent economic and social policy'],
          ],
        },
        {
          t: 'callout', label: 'The monetary union trade-off', kind: 'warn',
          x: 'In a monetary union, a member cannot set its own interest rates or devalue its currency to correct persistent imbalances. When problems build up, they can turn into crises that spread to members in similar positions — as the euro-area sovereign debt crisis of 2010 showed, when several countries needed EU and IMF rescue packages.',
        },
        { t: 'h', x: 'Investment implications' },
        {
          t: 'ul',
          x: [
            'A large single market lowers the cost of doing business and lets firms exploit **economies of scale** — exporters within an FTA become more attractive because they sell to members without trade barriers.',
            'A **common market** goes further: firms can locate production and buy components anywhere in the bloc according to comparative advantage, because labour and capital move freely.',
            'But differences in tastes, culture and competition still limit the gains, and problems in one member can spread quickly to others.',
          ],
        },
        {
          t: 'takeaways',
          x: [
            'FTA → customs union (+ common external policy) → common market (+ free factor movement) → economic union (+ common institutions and policy) → monetary union (+ single currency).',
            'Trade creation replaces costly domestic output with cheaper member imports; trade diversion replaces cheaper outsiders with costlier members.',
            'Deeper integration brings more gains but sacrifices policy independence — most sharply in a monetary union.',
          ],
        },
      ],
    },
  ],

  formulas: [
    { id: 'f-e-40', name: 'Opportunity cost of good X', expr: 'Units of Y forgone / units of X gained', note: 'The country with the lower opportunity cost holds the comparative advantage.' },
    { id: 'f-e-41', name: 'GNP from GDP', expr: 'GNP = GDP + income earned abroad by residents − income earned domestically by foreigners', note: 'Location vs ownership of production.' },
    { id: 'f-e-42', name: 'Welfare effect of a tariff (small country)', expr: 'Δ National welfare = −ΔCS + ΔPS + Tariff revenue = −(B + D)', note: 'Consumers lose A+B+C+D, producers gain A, government gains C.' },
  ],

  cards: [
    { id: 'c-e-60', front: 'Absolute vs comparative advantage', back: 'Absolute: fewer resources to produce. Comparative: lower opportunity cost. Trade gains depend only on comparative advantage.' },
    { id: 'c-e-61', front: 'Who captures the rent from a voluntary export restraint?', back: 'Foreign exporters — which makes it more costly to the importing country than an equivalent tariff.' },
    { id: 'c-e-62', front: 'Customs union vs free trade area', back: 'Both remove internal barriers; a customs union also adopts a common external trade policy.' },
    { id: 'c-e-63', front: 'GDP vs GNP', back: 'GDP: produced within the borders. GNP: produced by the country\'s citizens and capital, anywhere in the world.' },
    { id: 'c-e-64', front: 'Common market adds what to a customs union?', back: 'Free movement of factors of production — labour and capital.' },
    { id: 'c-e-65', front: 'Trade creation vs trade diversion', back: 'Creation: cheaper member imports replace costly domestic output. Diversion: costlier member imports replace cheaper non-member imports.' },
    { id: 'c-e-66', front: 'Deadweight loss of a tariff comes from…', back: 'Production inefficiency (high-cost domestic output) and consumption inefficiency (buyers priced out).' },
    { id: 'c-e-67', front: 'Intra-industry trade', back: 'A country exporting and importing goods in the same category (e.g. different car brands), explained by scale economies and demand for variety.' },
  ],

  questions: [
    {
      id: 'q-ec-060', difficulty: 'easy',
      stem: 'Several countries eliminate tariffs on trade among themselves, adopt a common tariff on imports from non-members, but do not allow free movement of workers. This arrangement is best described as a:',
      choices: ['free trade area', 'customs union', 'common market'],
      answer: 1,
      explain: 'Removing internal barriers plus a common external trade policy defines a customs union. Adding free movement of labour and capital would make it a common market.',
      why: [
        'A lacks the common external tariff — members keep independent policies toward outsiders.',
        'C requires free movement of factors of production, which is absent here.',
      ],
    },
    {
      id: 'q-ec-061', difficulty: 'medium',
      vignette: 'One worker in Country X can produce 12 tonnes of steel or 6 tonnes of grain. One worker in Country Y can produce 3 tonnes of steel or 3 tonnes of grain.',
      stem: 'Which statement is most accurate?',
      choices: [
        'Country X should produce both goods, since it has an absolute advantage in each.',
        'Country Y has a comparative advantage in grain.',
        'No gains from trade exist, because Country X is more productive in both goods.',
      ],
      answer: 1,
      explain: 'Opportunity cost of 1 tonne of grain: X gives up 2 tonnes of steel; Y gives up only 1. Y therefore has the comparative advantage in grain, and X in steel. Both gain by specialising.',
      why: [
        'A confuses absolute with comparative advantage; specialisation according to opportunity cost raises total output.',
        'C is the classic fallacy. Gains from trade depend on differing opportunity costs, not on absolute productivity.',
      ],
    },
    {
      id: 'q-ec-062', difficulty: 'hard',
      stem: 'A small country imposes a tariff on imported cars. Relative to free trade, the most likely effects in that country are:',
      choices: [
        'higher domestic prices, higher producer surplus, government revenue, and a net welfare loss.',
        'lower domestic prices and a net welfare gain because of the tariff revenue.',
        'higher domestic prices with no deadweight loss, because tariff revenue exactly offsets lost consumer surplus.',
      ],
      answer: 0,
      explain: 'The tariff raises the domestic price. Domestic producers gain surplus and the government collects revenue, but consumers lose more than those two gains combined. The difference — from reduced consumption and inefficient domestic production — is the deadweight loss.',
      why: [
        'B has the price effect backwards and ignores the deadweight loss.',
        'C is wrong because consumer losses exceed the combined producer and government gains; revenue does not cover the efficiency loss.',
      ],
    },
    {
      id: 'q-ec-063', difficulty: 'expert',
      stem: 'An importing country can restrict car imports to the same quantity using either a tariff or a voluntary export restraint (VER) negotiated with the exporting country. From the importing country\'s perspective, the VER is most likely:',
      choices: [
        'preferable, because it avoids provoking retaliation and yields the same national welfare.',
        'worse, because the rent created by the higher price is captured by foreign exporters rather than the domestic government.',
        'equivalent in every respect, because domestic prices and quantities are identical.',
      ],
      answer: 1,
      explain: 'Both policies raise the domestic price and reduce imports to the same quantity. Under a tariff, the price gap on imports becomes government revenue. Under a VER, foreign exporters sell the restricted quantity at the higher price and keep that rent. The importing country suffers the same deadweight loss plus the lost revenue.',
      why: [
        'A ignores the transfer of rent abroad, which leaves national welfare lower under the VER.',
        'C overlooks that identical prices and quantities can still mean very different distributions of the gains.',
      ],
    },
    {
      id: 'q-ec-115', difficulty: 'expert',
      vignette: 'A small country faces a world price of $20. Under free trade, domestic producers supply 50,000 units and consumers buy 150,000. A $4 per-unit tariff raises domestic supply to 60,000 units and cuts demand to 140,000 units.',
      stem: 'The deadweight loss from the tariff is closest to:',
      choices: ['$40,000', '$320,000', '$20,000'],
      answer: 0,
      explain: 'Deadweight loss = ½ × $4 × (60,000 − 50,000) + ½ × $4 × (150,000 − 140,000) = 20,000 + 20,000 = $40,000.',
      why: [
        'B is the tariff revenue: $4 × (140,000 − 60,000) imports = $320,000.',
        'C counts only one of the two deadweight triangles.',
      ],
    },
    {
      id: 'q-ec-116', difficulty: 'medium',
      stem: 'Relative to a free trade area, a common market most likely offers firms the additional benefit of:',
      choices: ['tariff-free access to member countries\' markets', 'the ability to locate production and source labour and capital anywhere in the bloc', 'a single currency that removes exchange rate risk'],
      answer: 1,
      explain: 'A common market adds free movement of factors of production, so firms can organise production across members according to comparative advantage.',
      why: [
        'A is already provided by a free trade area.',
        'C requires a monetary union, a further stage of integration.',
      ],
    },
    {
      id: 'q-ec-117', difficulty: 'hard',
      stem: 'Compared with a small country, a large country that grants an export subsidy most likely experiences:',
      choices: ['a smaller welfare loss, because it can lower the world price', 'a larger welfare loss, because part of the subsidy is passed to foreign buyers through a lower world price', 'a welfare gain, because exports rise'],
      answer: 1,
      explain: 'The large country\'s extra exports depress the world price, so foreigners pay less and effectively receive part of the subsidy. Its welfare loss is larger than a small country\'s.',
      why: [
        'A reverses the effect: the lower world price is a cost to the exporter, not a benefit.',
        'C confuses more exports with higher welfare; the subsidy distorts production away from comparative advantage.',
      ],
    },
  ],
};
