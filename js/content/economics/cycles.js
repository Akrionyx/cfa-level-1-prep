// Economics · Module 2 — Understanding Business Cycles. Original wording and numbers.

const trend = (x) => 2.5 + 0.3 * x;
const actual = (x) => trend(x) - 1.3 * Math.cos((2 * Math.PI * x) / 12);

export default {
  id: 'econ-cycles',
  name: 'Understanding Business Cycles',
  los: [
    'Describe the business cycle and its phases',
    'Describe credit cycles',
    'Describe how resource use, consumer and business activity, housing sector activity and external trade vary over the business cycle, and their measurement using economic indicators',
  ],
  lessons: [
    /* ------------------------------------------------------------ */
    {
      id: 'econ-cycles-phases',
      title: 'What a business cycle is, and its four phases',
      minutes: 11,
      intro: 'Economies do not grow in a straight line. Learning the rhythm of the cycle tells you what households, firms, policymakers and markets are likely to do next.',
      blocks: [
        { t: 'p', x: 'A **business cycle** is a pattern of expansion and contraction in economic activity that affects broad parts of the economy at roughly the same time. Three features matter:' },
        {
          t: 'ul',
          x: [
            'Cycles belong to economies organised mainly around **business enterprises** — not subsistence farming or central planning.',
            'The phases follow an expected **sequence**, alternating between upswings and downturns, and they occur across many sectors together.',
            'Cycles are **recurrent but not periodic**: they keep happening, but with different lengths (roughly one to twelve years) and intensities.',
          ],
        },
        { t: 'h', x: 'Three ways to measure "the cycle"' },
        {
          t: 'table',
          head: ['Concept', 'What it tracks', 'Notes'],
          rows: [
            ['**Classical cycle**', 'The *level* of activity (e.g. real GDP)', 'Peaks and troughs only when output actually falls; contractions are short and expansions long. Rarely used, because outright declines are uncommon.'],
            ['**Growth cycle**', 'Activity *relative to its long-run trend* — the output gap', 'The view most economists use. Peaks come earlier and troughs later than in the classical cycle; periods above and below trend are similar in length.'],
            ['**Growth rate cycle**', 'The *growth rate* of activity', 'Turning points show up earliest, and no trend estimate is needed.'],
          ],
        },
        {
          t: 'callout', label: 'Which one this module uses',
          x: 'Practitioners mix the three definitions freely, which causes confusion about labels and timing. Here, as in most analysis, **the cycle means fluctuations around potential output** — the growth cycle.',
        },
        { t: 'h', x: 'The four phases' },
        {
          t: 'plot', x: [0, 14], y: [0, 9], xlabel: 'Time', ylabel: 'Output',
          curves: [
            { fn: trend, domain: [0, 14], cls: 'c-muted', dash: true },
            { fn: actual, domain: [0, 14], cls: 'c-accent' },
          ],
          vlines: [{ x: 3 }, { x: 6 }, { x: 9 }, { x: 12 }],
          points: [{ x: 0, y: actual(0), cls: 'c-wrong' }, { x: 6, y: actual(6) }, { x: 12, y: actual(12), cls: 'c-wrong' }],
          labels: [
            { x: 0.35, y: 8.3, text: 'Recovery', cls: 'b' },
            { x: 3.35, y: 8.3, text: 'Expansion', cls: 'b' },
            { x: 6.35, y: 8.3, text: 'Slowdown', cls: 'b' },
            { x: 9.25, y: 8.3, text: 'Contraction', cls: 'b' },
            { x: 0.3, y: 0.7, text: 'trough' },
            { x: 6, y: 6.9, text: 'peak', anchor: 'middle' },
            { x: 12.2, y: 5.3, text: 'trough' },
            { x: 13.9, y: 7.3, text: 'trend (potential)', anchor: 'end' },
          ],
          caption: 'Actual output (green) swings around potential output (dashed). Recovery closes a negative gap; expansion opens a positive one; slowdown narrows it; contraction opens a negative gap again. Peaks and troughs mark the largest gaps from trend, so the growth-cycle peak comes slightly before output\'s highest level.',
        },
        {
          t: 'table',
          head: ['', 'Recovery', 'Expansion', 'Slowdown', 'Contraction'],
          rows: [
            ['Output gap', 'Negative, starting to narrow', 'Positive gap opens', 'Positive, largest at the peak, then narrowing', 'Negative gap opens'],
            ['Activity', 'Below potential but rising', 'Above-average growth', 'Above average but decelerating', 'Below potential; growth below normal'],
            ['Employment', 'Layoffs slow; overtime before hiring; unemployment still high', 'Hiring replaces overtime and temps; unemployment falls', 'Hiring continues more slowly', 'Hours and overtime cut, hiring frozen, then layoffs'],
            ['Inflation', 'Moderate', 'Picks up modestly', 'Accelerates further', 'Slows, but with a lag'],
          ],
        },
        {
          t: 'check',
          q: 'An economy\'s output is above potential, but growth has begun to decelerate and the positive output gap is narrowing. It is most likely in the:',
          choices: ['expansion phase', 'slowdown phase', 'recovery phase'],
          answer: 1,
          explain: 'A positive gap that is starting to close describes the slowdown that follows the peak. In expansion the positive gap is still widening.',
        },
        { t: 'h', x: 'Leads and lags in decision-making' },
        { t: 'p', x: 'Firms do not react instantly. Early in a recovery they squeeze more out of existing staff before hiring, because they want proof the upturn is real. Early in a downturn they cut hours before cutting jobs, because rehiring and training is expensive. These lags are why employment is slow to turn at both ends of the cycle.' },
        { t: 'h', x: 'What markets do in each phase' },
        {
          t: 'ul',
          x: [
            '**Recovery:** investors price in higher future profits well before the data improve. Equity markets typically bottom **three to six months before** the economy does — which is why stock prices are a leading indicator.',
            '**Expansion:** a later "boom" tests the economy\'s limits — labour shortages, rising wages, rapid credit growth. Authorities may tighten to prevent overheating.',
            '**Slowdown:** risky assets have usually run up strongly; safe government bonds fall in price as yields rise, partly on fears of higher inflation.',
            '**Contraction:** investors favour safety — government bonds and companies with steady cash flows, such as utilities and consumer staples — because a secure income is worth more when jobs are at risk.',
          ],
        },
        {
          t: 'callout', label: 'When is it officially a recession?',
          x: 'A popular rule of thumb is **two consecutive quarters of falling real GDP**. It is simple but can mislead — a negative, slightly positive, then negative quarter would not qualify. Bodies such as the US National Bureau of Economic Research instead look at many series (employment, industrial production, sales) and often date turning points long after they happen, because data are revised.',
        },
        {
          t: 'check',
          q: 'The stages of the business cycle are best described as:',
          choices: ['periodic, with a fixed length', 'recurrent, but varying in length and intensity', 'of similar duration in every economy'],
          answer: 1,
          explain: 'Cycles keep repeating in the same sequence, but no two are identical in duration or depth.',
        },
        {
          t: 'takeaways',
          x: [
            'Classical cycles track levels, growth cycles track the gap to trend, growth rate cycles track the growth rate. Most analysis uses the growth cycle.',
            'Phases: recovery (negative gap narrowing) → expansion (positive gap opening) → slowdown (positive gap narrowing) → contraction (negative gap opening).',
            'Equity markets anticipate turns; safe assets are prized in contractions.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-cycles-credit',
      title: 'Credit cycles',
      minutes: 7,
      intro: 'Credit is the fuel for property purchases and business investment — and when it booms and busts, it can make the business cycle far more violent.',
      blocks: [
        { t: 'p', x: 'Business cycles are usually measured with GDP. **Credit cycles** instead describe changes in the **availability and pricing of credit** to the private sector — how easily households and firms can borrow, and at what cost. Because borrowing funds house purchases and business investment, credit cycles are tightly linked to the real economy.' },
        {
          t: 'flow',
          x: [
            'Economy strong → lenders relax standards and offer cheaper credit',
            'More borrowing → property and asset prices rise → collateral looks more valuable',
            'Higher collateral values support even more lending (the boom feeds itself)',
            'Economy weakens → lenders tighten: less credit, higher rates',
            'Property prices fall → defaults rise → lenders tighten further (the bust feeds itself)',
          ],
        },
        { t: 'h', x: 'Why credit cycles matter' },
        {
          t: 'ul',
          x: [
            'Loose private credit contributed to many crises — Latin America in the 1980s, several emerging markets in the 1990s, Asia in 1997–98, and the global financial crisis of 2008–09. Easy credit inflates asset and real estate bubbles that burst when fundamentals weaken and capital pulls out.',
            'Credit cycles tend to be **longer, deeper and sharper** than business cycles, and they are not always in sync with them.',
            'Recessions that coincide with a financial bust — especially falling house and equity prices — tend to be **longer and deeper**. Recoveries that coincide with rapid credit growth and rising house prices tend to be **stronger**.',
            'Strong peaks in credit cycles are closely associated with later **systemic banking crises**.',
          ],
        },
        {
          t: 'callout', label: 'What investors use it for',
          x: 'The credit cycle helps an investor (1) understand housing and construction, (2) judge how big an expansion or how severe a recession could be — especially if a downturn coincides with credit tightening — and (3) anticipate policy. Alongside traditional monetary and fiscal policy, authorities increasingly use **macroprudential** tools designed to dampen financial booms before they get dangerous.',
        },
        {
          t: 'check',
          q: 'Analysts most commonly associate credit cycles with which sector of the economy?',
          choices: ['Food retail', 'Construction and property purchases', 'Exports of manufactured goods'],
          answer: 1,
          explain: 'Credit availability matters most where purchases are large and usually borrowed for — building and buying property.',
        },
        {
          t: 'check',
          q: 'Which statement about credit cycles and business cycles is most accurate?',
          choices: ['They are unrelated and serve different purposes', 'Credit cycles are typically shorter and milder than business cycles', 'Recessions coinciding with credit busts tend to be deeper and longer'],
          answer: 2,
          explain: 'The two cycles are linked, and the credit cycle helps explain how severe a business cycle turns out to be. Credit cycles are usually longer and sharper, not shorter and milder.',
        },
        {
          t: 'takeaways',
          x: [
            'Credit cycles describe the changing availability and price of private-sector credit.',
            'They are longer, deeper and sharper than business cycles and amplify them.',
            'Booms in credit and house prices often precede banking crises; macroprudential policy aims to lean against them.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-cycles-resources',
      title: 'Jobs, investment and inventories over the cycle',
      minutes: 11,
      intro: 'The cycle shows up first in how firms use workers, spend on equipment and manage stock. These patterns are also what the indicators in the next lesson measure.',
      blocks: [
        { t: 'h', x: 'The workforce' },
        { t: 'p', x: 'As a contraction begins, firms first cut costs — overtime, consultants, advertising — and often **hold on to workers** they are not fully using, because finding and training new staff later is expensive and loyalty supports productivity. If the downturn drags on, they cut much deeper: layoffs, low capacity utilisation, no new equipment, and a push to sell off unsold inventory. Banks become reluctant to lend, adding to the weakness.' },
        { t: 'p', x: 'Weak demand eventually lowers wage growth, input prices and interest rates. Cheaper inputs and borrowing encourage spending again, aggregate demand turns up — and that is the trough. Because firms hire only once they trust the recovery, **employment levels lag the cycle**.' },
        {
          t: 'check',
          q: 'Based on typical labour-hoarding behaviour, output per hour worked (productivity) is most likely to be highest:',
          choices: ['early in a recovery, when firms use existing staff intensively before hiring', 'deep in a contraction, when firms keep underused workers', 'at the start of a contraction, when overtime is first cut'],
          answer: 0,
          explain: 'Early in a recovery output rises while firms delay hiring, so each hour produces more. In a contraction, retained but underused staff pull productivity down.',
        },
        { t: 'h', x: 'Capital spending' },
        { t: 'p', x: 'Spending on property, plant and equipment is one of the **most volatile** parts of GDP, because it depends on profits, cash flow, expectations and capacity utilisation — all of which swing with the cycle.' },
        {
          t: 'table',
          head: ['Phase', 'Conditions', 'Capital spending'],
          rows: [
            ['Recovery', 'Spare capacity, low utilisation; interest rates low', 'Low but rising; focused on **efficiency**, not capacity. Orders for fast-obsolescing items — software, systems, IT hardware — come back first.'],
            ['Expansion', 'Utilisation climbs; strong cash flow finances investment', 'Shift to **capacity expansion**: heavy equipment, warehouses, factories. Orders precede shipments, so capital goods orders are closely watched.'],
            ['Slowdown', 'Peak conditions, healthy cash flow; rates rising', 'Firms at capacity keep ordering; capacity-expanding orders can signal the late stage (think of the fibre-optic overbuild of the late 1990s).'],
            ['Contraction', 'Falling demand, profits and cash flow', 'New orders halt and some are cancelled. **Light equipment and technology are cut first** (easy to cancel); construction and heavy equipment cuts follow and deepen the downturn. Maintenance is scaled back.'],
          ],
        },
        {
          t: 'callout', label: 'Useful detail',
          x: 'Order statistics can include deliveries spread over years (an airline ordering dozens of aircraft), so analysts often watch **"core" capital goods orders** that exclude defence and aircraft.',
        },
        { t: 'h', x: 'Inventories' },
        { t: 'p', x: 'Inventories are small relative to GDP, but they can swing quickly and hard, so they move growth figures noticeably. The change in inventories is the gap between what is produced and what is sold. The key gauge is the **inventory–sales ratio**.' },
        {
          t: 'table',
          head: ['Phase', 'Sales and production', 'Inventory–sales ratio'],
          rows: [
            ['Recovery', 'Sales recover first; production follows with a lag', '**Falls** — sales outpace production'],
            ['Expansion', 'Production rises fast to meet sales and restock ("inventory rebuilding")', 'Stable'],
            ['Slowdown', 'Sales slow faster than production; unwanted stock builds up', '**Rises** — a sign of weakening'],
            ['Contraction', 'Production cut below sales to clear excess stock', 'Falls back toward normal'],
          ],
        },
        {
          t: 'check',
          q: 'The inventory–sales ratio is most likely to be rising:',
          choices: ['early in a recovery', 'near the peak of the cycle', 'late in a contraction'],
          answer: 1,
          explain: 'Near the top, sales slow before production plans can be cut, so unsold inventory accumulates relative to sales. Early in recovery the ratio falls as sales outrun output.',
        },
        { t: 'h', x: 'Households, housing and external trade' },
        {
          t: 'ul',
          x: [
            '**Consumers.** Spending on **durable goods** — cars, appliances, furniture — is highly cyclical because purchases can be postponed; it falls sharply in downturns and surges in recoveries. Services and non-durables (food, utilities) are steadier. Consumer spending ultimately follows income, employment and confidence, measured by retail sales, spending data and confidence surveys.',
            '**Housing.** Construction and home sales are very sensitive to **mortgage rates** and credit availability, so they tend to turn early: falling rates spark housing activity at the start of a recovery, and rising rates cool it late in an expansion. Building permits and housing starts are therefore watched as early signals. Housing can also have its own cycle, driven by demographics and past overbuilding.',
            '**External trade.** Imports rise when *domestic* activity is strong; exports depend on *foreign* activity. So the trade balance does not follow the domestic cycle mechanically. A currency that weakens makes exports more competitive, but the effect on volumes takes time. Watch export and import data and the trade balance.',
          ],
        },
        {
          t: 'takeaways',
          x: [
            'Firms hoard labour early in downturns and delay hiring in recoveries — employment lags.',
            'Capital spending is very volatile: light and technology orders react first, heavy construction later.',
            'The inventory–sales ratio falls early in recovery and rises near the peak.',
            'Durables and housing are the most cyclical parts of household spending; trade depends on foreign as well as domestic conditions.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-cycles-indicators',
      title: 'Economic indicators: leading, coincident and lagging',
      minutes: 13,
      intro: 'No single statistic tells you where the economy is. Analysts combine indicators that turn before, with and after the cycle.',
      blocks: [
        { t: 'p', x: '**Economic indicators** are statistics that describe the state of an economy, region or sector. Policymakers and analysts use them to judge where the economy stands and to anticipate or confirm turning points — which feeds directly into forecasts for sectors and securities.' },
        {
          t: 'terms',
          x: [
            ['Leading indicators', 'Turn **before** the overall economy. Used to predict the near future.'],
            ['Coincident indicators', 'Turn **at about the same time**. Used to identify the present state.'],
            ['Lagging indicators', 'Turn **after**. Used to confirm what has already happened.'],
          ],
        },
        {
          t: 'table',
          head: ['Type', 'Examples', 'Why it behaves that way'],
          rows: [
            ['**Leading**', 'Stock prices; building permits; manufacturers\' new orders (consumer goods and core capital goods); average weekly manufacturing hours; initial unemployment claims; consumer expectations; long–short interest rate spread; purchasing managers\' new orders; credit conditions index', 'Markets and orders look forward; firms adjust hours before headcount; permits come before construction; an inverted yield curve signals expected rate cuts and weakness'],
            ['**Coincident**', 'Industrial production; real personal income; manufacturing and trade sales; non-farm payrolls', 'They measure current activity directly'],
            ['**Lagging**', 'Average duration of unemployment; inventory–sales ratio; change in unit labour costs; inflation (services-heavy measures); average bank prime lending rate; consumer instalment debt to income; commercial and industrial loans outstanding', 'Firms wait to confirm a trend before rehiring; stocks build at the peak; consumers borrow once confident and carry debt into downturns; loans finance inventory build-ups'],
          ],
        },
        {
          t: 'check',
          q: 'Which of the following is best classified as a lagging indicator?',
          choices: ['Building permits for new housing', 'Industrial production', 'Average duration of unemployment'],
          answer: 2,
          explain: 'Unemployment spells keep lengthening after a recovery starts, because firms rehire only once the upturn is confirmed. Permits lead; industrial production is coincident.',
        },
        { t: 'h', x: 'Composite indicators' },
        { t: 'p', x: 'A single indicator can send a false signal, so organisations combine a handful of reliable series into **composite indicators**. In the US, The Conference Board publishes a Leading Economic Index of ten components. The OECD publishes Composite Leading Indicators for dozens of countries using a consistent method based on the growth cycle, which makes cross-country comparisons easier. The mix of components differs by economy — a euro area index may include a services survey and money supply, while a Japanese one may add labour market data and business failures.' },
        {
          t: 'steps',
          title: 'Worked example — reading the indicators together',
          given: 'An analyst sees three releases in the same month:\n• Consumer instalment debt to income has risen (lagging).\n• Industrial production and non-farm payrolls are both up (coincident).\n• The equity index has been trending higher (leading).',
          ask: 'What can she conclude?',
          x: [
            'The lagging indicator rising gives early evidence that an upturn has **already been under way**.',
            'The coincident indicators rising suggest activity is **picking up now**.',
            'The leading signal from equities is promising, so she checks the broader composite leading index. If it is also rising, the evidence supports a recovery that should continue; if not, she should not yet conclude a recovery is under way.',
          ],
          result: 'Conclusions come from synthesising leading, coincident and lagging signals — never from one data point.',
        },
        { t: 'h', x: 'Diffusion indexes: how broad is the move?' },
        { t: 'p', x: 'A composite index can rise because one component jumped while the rest fell. A **diffusion index** measures breadth instead: the share of components moving in the same direction. The Conference Board\'s method scores each component 1 if it rose by more than 0.05%, 0.5 if it changed by less than 0.05% either way, and 0 if it fell by more than 0.05%; it averages the scores and multiplies by 100.' },
        {
          t: 'steps',
          title: 'Worked example — a five-component diffusion index',
          given: 'This month: equity prices +1.2%, building permits −0.8%, new orders +0.03%, consumer expectations +0.4%, weekly hours −0.02%.',
          ask: 'Calculate the diffusion index.',
          x: [
            'Score each component: equities **1**, permits **0**, new orders **0.5** (change under 0.05%), expectations **1**, weekly hours **0.5**.',
            'Sum = 1 + 0 + 0.5 + 1 + 0.5 = **3.0**.',
            'Index = 3.0 / 5 × 100 = **60**.',
          ],
          result: 'Diffusion index = 60. A reading above 50 means more components are rising than falling; a rising diffusion index gives more confidence that a gain in the composite is broad-based rather than driven by an outlier.',
        },
        {
          t: 'check',
          q: 'A diffusion index is best described as a measure of:',
          choices: ['the breadth of movement across an index\'s components', 'the average growth rate of the components', 'the level of industrial production'],
          answer: 0,
          explain: 'It reports how widespread a movement is, deliberately ignoring the size of any single component\'s change.',
        },
        { t: 'h', x: 'Surveys, big data and nowcasting' },
        {
          t: 'ul',
          x: [
            '**Surveys.** Business, consumer and expert surveys ask qualitative questions about finances, activity and confidence. Purchasing managers\' indexes (PMIs), national business climate surveys and central bank surveys such as Japan\'s Tankan are widely followed and feed into many composites.',
            '**Big data.** Statistical techniques such as principal components analysis can distil a common trend from very large sets of series — some activity indexes combine 85 to 100+ monthly variables.',
            '**Nowcasting.** Official GDP arrives with a long delay, so analysts estimate the *current* quarter in real time from timely data — market prices, payments, internet searches and early releases. A nowcast is updated as each new data point arrives and converges toward the official first estimate.',
          ],
        },
        {
          t: 'check',
          q: 'The table shows recent trends: long–short interest rate spread narrowing; new orders for capital goods declining; building permits declining; non-farm payrolls turning from rising to falling; manufacturing and trade sales stable; average duration of unemployment falling slightly; unit labour costs rising. The economy is most likely:',
          choices: ['in a continuing recession', 'at or near a cyclical peak', 'in a strong recovery from a trough'],
          answer: 1,
          explain: 'All three leading indicators point down, the coincident ones are stalling, and the lagging ones still reflect the strength of the expansion. Together they fit an economy near its peak.',
        },
        {
          t: 'takeaways',
          x: [
            'Leading indicators predict, coincident indicators describe, lagging indicators confirm.',
            'Composite indexes combine indicators; diffusion indexes show how widespread a move is (1 / 0.5 / 0 scoring × 100).',
            'Surveys, big-data techniques and nowcasts fill the gap left by slow official statistics.',
            'Always synthesise several indicators before calling a turning point.',
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ */
    {
      id: 'econ-cycles-background',
      title: 'Background: unemployment and inflation measures',
      minutes: 7,
      intro: 'Optional context. These measures are no longer a separate outcome in this module, but you will meet them throughout economics and in portfolio questions.',
      blocks: [
        { t: 'h', x: 'Types of unemployment' },
        {
          t: 'ul',
          x: [
            '**Frictional** — the time taken to match workers with jobs. Always present, even in a strong economy.',
            '**Structural** — a mismatch between workers\' skills or location and the jobs available, often caused by technological change.',
            '**Cyclical** — caused by weak aggregate demand. This is the component the business cycle drives.',
          ],
        },
        { t: 'p', x: 'The unemployment rate counts only people actively looking for work. **Discouraged workers** who stop searching leave the labour force, so in a deep downturn the headline rate can understate true slack — and can even rise early in a recovery as they start searching again.' },
        { t: 'h', x: 'Measuring inflation' },
        { t: 'p', x: 'Most consumer price indices are **Laspeyres** indices: they price a fixed basket of goods bought in the base period. That design tends to overstate inflation for three reasons:' },
        {
          t: 'ul',
          x: [
            '**Substitution bias** — consumers switch toward goods whose prices rose less, but the fixed basket does not.',
            '**Quality bias** — some price rises pay for better products rather than being true inflation.',
            '**New product bias** — new goods enter the basket late, missing their early price falls.',
          ],
        },
        { t: 'p', x: 'A **Paasche** index uses current-period quantities instead, and a **Fisher** index is the geometric mean of the two. **Headline** inflation includes everything; **core** inflation excludes volatile food and energy to show the underlying trend.' },
        {
          t: 'check',
          q: 'Beef prices jump and households switch to chicken. A fixed-basket (Laspeyres) consumer price index most likely:',
          choices: ['understates the rise in living costs', 'overstates the rise in living costs', 'measures it exactly'],
          answer: 1,
          explain: 'The index still weights beef at base-period quantities even though people now buy less of it, so it exaggerates how much their actual cost of living has risen.',
        },
      ],
    },
  ],

  formulas: [
    { id: 'f-e-10', name: 'Unemployment rate', expr: 'Unemployed / Labour force', note: 'Labour force = employed + unemployed actively seeking work. Discouraged workers are excluded.' },
    { id: 'f-e-11', name: 'Laspeyres price index', expr: 'Σ(P_current × Q_base) / Σ(P_base × Q_base) × 100', note: 'Fixed base-period basket; biased upward by substitution, quality and new-product effects.' },
    { id: 'f-e-12', name: 'Fisher index', expr: '√(Laspeyres × Paasche)', note: 'Geometric mean of base-weighted and current-weighted indices.' },
    { id: 'f-e-13', name: 'Diffusion index', expr: '(Σ component scores / number of components) × 100', note: 'Score 1 if rising > 0.05%, 0.5 if roughly unchanged, 0 if falling > 0.05%. Above 50 = more components rising.' },
  ],

  cards: [
    { id: 'c-e-20', front: 'Phases of the business cycle', back: 'Recovery → expansion → slowdown → contraction.' },
    { id: 'c-e-21', front: 'Example of a leading indicator', back: 'Building permits, new orders for capital goods, the slope of the yield curve, stock prices, initial jobless claims (inverted).' },
    { id: 'c-e-22', front: 'Three types of unemployment', back: 'Frictional (job search), structural (skill/location mismatch), cyclical (weak demand).' },
    { id: 'c-e-23', front: 'Three sources of upward bias in a Laspeyres CPI', back: 'Substitution bias, quality bias, new product bias.' },
    { id: 'c-e-24', front: 'Why can discouraged workers distort the unemployment rate?', back: 'They leave the labour force, so the headline rate understates slack in a downturn — and may rise in early recovery as they resume searching.' },
    { id: 'c-e-25', front: 'Classical vs growth vs growth rate cycle', back: 'Classical: level of output. Growth: deviation from trend (output gap). Growth rate: the growth rate itself — turns earliest.' },
    { id: 'c-e-26', front: 'How do credit cycles compare with business cycles?', back: 'Longer, deeper and sharper. Recessions with credit busts are longer and deeper; credit peaks often precede banking crises.' },
    { id: 'c-e-27', front: 'Inventory–sales ratio over the cycle', back: 'Falls early in recovery (sales outpace production), rises near the peak (sales slow before production is cut).' },
    { id: 'c-e-28', front: 'Nowcasting', back: 'Estimating the current quarter\'s GDP (or other variables) in real time from timely data before official figures are published.' },
  ],

  questions: [
    {
      id: 'q-ec-020', difficulty: 'easy',
      stem: 'Which of the following is best classified as a lagging economic indicator?',
      choices: ['Building permits for new housing', 'Average duration of unemployment', 'Industrial production'],
      answer: 1,
      explain: 'Unemployment duration keeps rising after a recovery has begun, because firms rehire only once demand is confirmed. It confirms a turning point rather than predicting it.',
      why: [
        'A is a classic leading indicator — construction plans precede activity.',
        'C is coincident, moving broadly in step with the cycle.',
      ],
    },
    {
      id: 'q-ec-023', difficulty: 'medium',
      stem: 'A worker loses her job after automation eliminates her role, and her skills do not match the openings available in her region. Her unemployment is best described as:',
      choices: ['frictional', 'structural', 'cyclical'],
      answer: 1,
      explain: 'A lasting mismatch between a worker\'s skills and the jobs available — here caused by technological change — is structural unemployment. It persists even when aggregate demand is strong.',
      why: [
        'A describes the short period of searching between suitable jobs, where matching skills exist.',
        'C is driven by weak aggregate demand across the economy, not by a skills mismatch.',
      ],
    },
    {
      id: 'q-ec-024', difficulty: 'hard',
      stem: 'A consumer price index uses a fixed basket of goods from the base period. When the price of beef rises sharply and households switch to chicken, the index most likely:',
      choices: [
        'overstates the increase in the cost of living, because of substitution bias.',
        'understates the increase in the cost of living, because chicken is excluded.',
        'measures the change accurately, because the basket reflects actual base-period purchases.',
      ],
      answer: 0,
      explain: 'A Laspeyres index keeps the base-period quantity of beef in the basket even though consumers have moved to cheaper chicken. It therefore prices a basket households no longer buy, overstating the true increase in living costs.',
      why: [
        'B has the direction backwards — the fixed basket over-weights the good whose price rose.',
        'C is exactly the flaw: accurate *base-period* weights become inaccurate once behaviour changes.',
      ],
    },
    {
      id: 'q-ec-025', difficulty: 'expert',
      stem: 'Near the peak of a business cycle, a firm\'s sales begin to decelerate unexpectedly. The inventory-to-sales ratio and the firm\'s likely subsequent production response are most likely:',
      choices: [
        'falling, followed by an increase in production to rebuild stock.',
        'rising, followed by a cut in production that amplifies the downturn.',
        'stable, because firms adjust production instantly to match sales.',
      ],
      answer: 1,
      explain: 'Production plans cannot be revised immediately, so slowing sales leave unwanted inventory — the ratio rises. The later correction, cutting orders below the level of sales to clear the excess, reduces output further and deepens the contraction. This is why the ratio is a lagging indicator.',
      why: [
        'A describes a recovery, when sales outrun production and inventories are depleted.',
        'C contradicts the production lags that make inventory cycles a real driver of the business cycle.',
      ],
    },
    {
      id: 'q-ec-104', difficulty: 'medium',
      vignette: 'A four-component leading index shows these monthly changes: stock prices +0.9%, money supply +0.02%, new orders −0.4%, consumer confidence +1.5%. Components rising more than 0.05% score 1, those changing less than 0.05% score 0.5, and those falling more than 0.05% score 0.',
      stem: 'The diffusion index is closest to:',
      choices: ['50.0', '62.5', '75.0'],
      answer: 1,
      explain: 'Scores: 1 + 0.5 + 0 + 1 = 2.5. Diffusion index = 2.5 / 4 × 100 = 62.5.',
      why: [
        'A counts only the two clear risers and ignores the half score for the unchanged component.',
        'C treats the money supply change as a full rise, scoring 3 out of 4.',
      ],
    },
    {
      id: 'q-ec-105', difficulty: 'medium',
      stem: 'Compared with business cycles, credit cycles are most likely:',
      choices: ['shorter and less severe', 'longer and more pronounced', 'identical in timing and length'],
      answer: 1,
      explain: 'Credit and property cycles tend to last longer and swing harder than GDP-based cycles, and they are not always synchronised with them.',
      why: [
        'A reverses the empirical finding that credit cycles are longer, deeper and sharper.',
        'C is wrong because credit cycles often diverge from the business cycle in timing.',
      ],
    },
    {
      id: 'q-ec-106', difficulty: 'hard',
      stem: 'As an economy enters a contraction, which category of capital spending is most likely to be cut first?',
      choices: ['Construction of new factories', 'Heavy industrial machinery', 'Technology and light equipment'],
      answer: 2,
      explain: 'Orders for technology and light equipment have short lead times and are easy to cancel, so they are cut first. Construction and heavy equipment projects take longer to plan and stop, so their cuts come later.',
      why: [
        'A involves long-planned projects that are slower to cancel, so cuts follow later in the contraction.',
        'B is also long lead-time spending, typically cut after lighter equipment.',
      ],
    },
  ],
};
