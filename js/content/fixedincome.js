// Fixed Income — deep content. Original wording throughout.

export default {
  id: 'fixedincome',
  name: 'Fixed Income',
  short: 'Fixed Income',
  weight: '11–14%',
  weightMid: 12.5,
  depth: 'deep',
  summary:
    'Bond features and markets, pricing and yield measures, the term structure, duration and convexity, credit analysis, and securitisation. Mechanical and learnable — one of the most reliably scoreable heavyweight topics once the core pricing relationships are automatic.',
  modules: [
    /* ---------------------------------------------------------- */
    {
      id: 'fi-features',
      name: 'Instrument Features, Cash Flows and Contingencies',
      los: [
        'Describe the features of a fixed-income security and the contents of a bond indenture',
        'Compare affirmative and negative covenants',
        'Describe common cash flow structures: bullet, amortising, sinking fund, floating-rate and index-linked',
        'Describe contingency provisions: callable, putable, convertible and contingent convertible bonds',
      ],
      lessons: [
        {
          id: 'fi-features-l1',
          title: 'Reading a bond\'s terms',
          minutes: 8,
          blocks: [
            { t: 'p', x: 'Every bond is defined by its **issuer**, **maturity**, **par value**, **coupon rate and frequency**, and **currency of denomination**. The legal contract containing these terms is the **indenture**, which also specifies the covenants and any collateral.' },
            {
              t: 'ul',
              x: [
                '**Affirmative covenants** — what the issuer must do: pay on time, maintain collateral and insurance, file financial statements, comply with laws.',
                '**Negative covenants** — what the issuer may not do: exceed leverage limits, pledge assets to other lenders (negative pledge), sell major assets, pay excessive dividends.',
              ],
            },
            { t: 'p', x: 'Negative covenants are the more valuable to lenders because they restrain exactly the risk-shifting behaviour that benefits shareholders at creditors\' expense.' },
            { t: 'p', x: 'Bonds issued in the issuer\'s home market are **domestic** bonds; those issued in another country\'s market in its currency are **foreign** bonds; **Eurobonds** are issued outside the jurisdiction of any single country, usually in bearer form; **global bonds** are issued simultaneously in the Eurobond market and at least one domestic market.' },
          ],
        },
        {
          id: 'fi-features-l2',
          title: 'Cash flow structures and embedded options',
          minutes: 10,
          blocks: [
            {
              t: 'table',
              head: ['Structure', 'Principal repayment', 'Implication'],
              rows: [
                ['Bullet', 'All at maturity', 'Highest credit exposure at maturity'],
                ['Fully amortising', 'Gradually, with every payment', 'Lowest credit risk; common for mortgages and loans'],
                ['Partially amortising', 'Some along the way, a balloon at maturity', 'In between'],
                ['Sinking fund', 'Issuer retires a portion of the issue each year', 'Lower credit risk, but reinvestment risk when bonds are called at par in a falling-rate environment'],
              ],
            },
            { t: 'h', x: 'Coupon structures' },
            {
              t: 'ul',
              x: [
                '**Floating-rate notes** — coupon = market reference rate + a fixed spread, reset periodically. Caps limit the maximum coupon (benefiting the issuer); floors set a minimum (benefiting the investor). **Inverse floaters** pay more when rates fall.',
                '**Step-up coupons** — rise on a set schedule; **credit-linked coupons** rise if the issuer is downgraded.',
                '**Payment-in-kind (PIK)** — interest paid in additional bonds rather than cash; typical of highly leveraged issuers.',
                '**Deferred coupon** — no coupons for an initial period.',
                '**Index-linked (inflation-linked)** — coupons and/or principal adjust with an index. Capital-indexed bonds (the most common) adjust principal, and the fixed coupon rate is applied to the adjusted principal.',
              ],
            },
            { t: 'h', x: 'Embedded options — who benefits?' },
            {
              t: 'table',
              head: ['Provision', 'Option held by', 'Effect on price'],
              rows: [
                ['Callable', 'Issuer — may redeem early', 'Lower price (investor is short the option), higher yield'],
                ['Putable', 'Investor — may sell back early', 'Higher price, lower yield'],
                ['Convertible', 'Investor — may convert into shares', 'Higher price, lower yield'],
              ],
            },
            {
              t: 'callout', label: 'One rule covers all three',
              x: 'Value of a bond with an embedded option = value of the straight bond ± the option value. An option held by the issuer subtracts from value; an option held by the investor adds to it.',
            },
            { t: 'p', x: 'Call exercise styles: **American** (any time after the call protection period), **European** (a single date), **Bermudan** (specified dates). A **make-whole** call requires the issuer to pay the present value of the remaining cash flows, so it is rarely exercised to refinance cheaply.' },
            {
              t: 'formula', name: 'Convertible bond measures',
              x: 'Conversion price = Par value / Conversion ratio\nConversion value = Conversion ratio × Current share price',
            },
            { t: 'p', x: '**Contingent convertible bonds (CoCos)**, issued mainly by banks, convert to equity or are written down automatically when a trigger — usually a regulatory capital ratio — is breached. Unlike a standard convertible, the conversion happens when the issuer is in trouble, which is exactly when investors would least want it.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-1', name: 'Conversion value', expr: 'Conversion ratio × Share price', note: 'The value of the bond if converted immediately.' },
        { id: 'f-fi-2', name: 'Conversion price', expr: 'Par value / Conversion ratio', note: 'The effective price paid per share on conversion.' },
        { id: 'f-fi-3', name: 'Amortising payment', expr: 'A = Principal × r / [1 − (1 + r)⁻ⁿ]', note: 'Level payment that fully repays principal over n periods.' },
      ],
      cards: [
        { id: 'c-fi-1', front: 'Affirmative vs negative covenant', back: 'Affirmative = actions the issuer must take (pay on time, file statements). Negative = restrictions (leverage limits, no asset sales).' },
        { id: 'c-fi-2', front: 'Callable bond yield vs otherwise identical straight bond', back: 'Higher — the investor is short the call option and must be compensated for reinvestment risk.' },
        { id: 'c-fi-3', front: 'Value of a putable bond', back: 'Straight bond value + put option value.' },
        { id: 'c-fi-4', front: 'Cap vs floor on a floating-rate note', back: 'Cap limits the maximum coupon — benefits the issuer. Floor sets a minimum coupon — benefits the investor.' },
        { id: 'c-fi-5', front: 'Contingent convertible bond (CoCo)', back: 'Converts to equity or is written down automatically when a trigger (usually a capital ratio) is breached.' },
        { id: 'c-fi-6', front: 'Sinking fund: effect on credit and reinvestment risk', back: 'Lowers credit risk by retiring debt gradually, but adds reinvestment risk if bonds are retired at par when rates have fallen.' },
      ],
      questions: [
        {
          id: 'q-fi-001', difficulty: 'easy',
          stem: 'Compared with an otherwise identical option-free bond, a callable bond will most likely have:',
          choices: ['a higher price and a lower yield', 'a lower price and a higher yield', 'the same price, since the call may never be exercised'],
          answer: 1,
          explain: 'The investor has effectively sold a call option to the issuer and is compensated through a lower price and a higher yield.',
          why: [
            'A describes a putable or convertible bond.',
            'C is wrong because an option has value from the moment it exists.',
          ],
        },
        {
          id: 'q-fi-002', difficulty: 'easy',
          stem: 'A bond indenture prohibits the issuer from increasing its debt-to-EBITDA ratio above 3.5x. This is best described as:',
          choices: ['an affirmative covenant', 'a negative covenant', 'a contingency provision'],
          answer: 1,
          explain: 'It restricts something the issuer may not do, which defines a negative covenant.',
          why: [
            'A would describe an obligation to act.',
            'C refers to embedded options such as call, put or conversion features.',
          ],
        },
        {
          id: 'q-fi-003', difficulty: 'medium',
          stem: 'A $1,000 par convertible bond has a conversion ratio of 25. The issuer\'s share price is $44. The conversion value and conversion price are closest to:',
          choices: ['$1,100 and $40', '$1,000 and $44', '$1,100 and $44'],
          answer: 0,
          explain: 'Conversion value = 25 × $44 = $1,100. Conversion price = $1,000 / 25 = $40 per share.',
          why: [
            'B uses par as conversion value and the share price as conversion price.',
            'C gets conversion value right but confuses the conversion price with the current share price.',
          ],
        },
        {
          id: 'q-fi-004', difficulty: 'hard',
          stem: 'A $100,000 loan is fully amortising over 5 years with annual payments at an interest rate of 6%. The annual payment is closest to:',
          choices: ['$23,740', '$20,000', '$26,000'],
          answer: 0,
          explain: 'Payment = 100,000 × 0.06 / [1 − 1.06⁻⁵] = 6,000 / 0.25274 = $23,740. Each payment covers interest on the outstanding balance plus a growing share of principal.',
          why: [
            'B repays principal evenly but ignores interest.',
            'C adds first-year interest to an even principal repayment, which overstates later payments.',
          ],
        },
        {
          id: 'q-fi-005', difficulty: 'expert',
          stem: 'Compared with a standard convertible bond, a contingent convertible bond issued by a bank most likely:',
          choices: [
            'converts at the investor\'s option when the share price rises',
            'converts automatically when the bank\'s capital falls below a trigger, exposing investors to losses in distress',
            'offers a lower yield, because conversion provides upside participation',
          ],
          answer: 1,
          explain: 'CoCos absorb losses by converting to equity or being written down when a capital trigger is breached — precisely when the bank is weak. Investors demand a higher yield for bearing that risk.',
          why: [
            'A describes a standard convertible, where conversion is voluntary.',
            'C reverses the yield relationship; CoCos typically yield more than conventional debt.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fi-markets',
      name: 'Issuance, Trading and Markets for Corporate and Government Issuers',
      los: [
        'Describe primary bond markets, including auctions and underwritten offerings, and secondary bond markets',
        'Describe short-term and long-term funding alternatives available to corporate issuers',
        'Describe the characteristics of sovereign, non-sovereign, agency and supranational bonds',
        'Describe repurchase agreements, their uses and the factors affecting the repo rate',
      ],
      lessons: [
        {
          id: 'fi-markets-l1',
          title: 'Who issues, how, and how it trades',
          minutes: 10,
          blocks: [
            { t: 'h', x: 'Primary markets' },
            {
              t: 'ul',
              x: [
                '**Underwritten offering** — investment banks buy the entire issue and resell it, bearing the risk of an unsold issue.',
                '**Best-efforts offering** — the bank sells as much as it can without guaranteeing the full amount.',
                '**Auction** — used for most government bonds; in a single-price (uniform-price) auction, all winning bidders pay the same yield.',
                '**Shelf registration** — a single disclosure document allows repeated issues over time.',
                '**Private placement** — sold directly to a small group of qualified investors, with less disclosure and less liquidity.',
              ],
            },
            { t: 'p', x: 'Secondary bond trading is overwhelmingly **over-the-counter**, through dealers who quote bid and ask prices. Liquidity varies enormously: recently issued **on-the-run** government bonds trade actively with tight spreads, while most corporate bonds trade rarely after issuance.' },
            { t: 'h', x: 'Corporate funding' },
            {
              t: 'table',
              head: ['Funding', 'Features'],
              rows: [
                ['Commercial paper', 'Unsecured, short-term (up to about a year). Cheap but carries rollover risk, so issuers maintain backup lines of credit'],
                ['Bank loans and syndicated loans', 'Bilateral or shared among banks; usually floating rate'],
                ['Medium-term notes', 'Issued continuously in varying maturities to meet specific needs'],
                ['Secured vs unsecured bonds', 'Secured debt is backed by collateral and typically ranks higher in recovery'],
              ],
            },
            { t: 'h', x: 'Government and quasi-government issuers' },
            {
              t: 'ul',
              x: [
                '**Sovereign bonds** — issued by national governments. In their own currency, default risk is low because the government can tax and, ultimately, create money; in foreign currency it is higher.',
                '**Non-sovereign bonds** — issued by states, provinces and cities. **General obligation** bonds are backed by the issuer\'s taxing power; **revenue bonds** are backed by the income from a specific project, making them riskier.',
                '**Agency / quasi-government bonds** — issued by government-sponsored entities; often implicitly or explicitly guaranteed.',
                '**Supranational bonds** — issued by multilateral institutions such as the World Bank.',
              ],
            },
            { t: 'h', x: 'Repurchase agreements' },
            { t: 'p', x: 'In a **repo**, one party sells a security and agrees to buy it back at a higher price on a set date — economically a collateralised loan. The seller is the borrower; the counterparty is doing a **reverse repo**.' },
            {
              t: 'formula', name: 'Repo mechanics',
              x: 'Repurchase price = Loan amount × [1 + Repo rate × (Days / 360)]\n\nHaircut (repo margin) = (Collateral value − Loan amount) / Collateral value',
            },
            {
              t: 'callout', label: 'What drives the repo rate',
              x: 'The repo rate is **lower** when collateral is high quality, the term is short, collateral is physically delivered to the lender, collateral is in high demand ("special"), and general interest rates are low. Higher credit risk in collateral raises both the rate and the haircut.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-30', name: 'Repurchase price', expr: 'Loan × [1 + Repo rate × (Days/360)]', note: 'The borrower repays principal plus repo interest.' },
        { id: 'f-fi-31', name: 'Repo haircut', expr: '(Collateral value − Loan) / Collateral value', note: 'Protects the lender against a fall in collateral value.' },
      ],
      cards: [
        { id: 'c-fi-30', front: 'General obligation vs revenue bond', back: 'GO: backed by the issuer\'s taxing power. Revenue: backed only by income from a specific project — riskier.' },
        { id: 'c-fi-31', front: 'Why do commercial paper issuers maintain backup credit lines?', back: 'To manage rollover risk — the risk of being unable to issue new paper to repay maturing paper.' },
        { id: 'c-fi-32', front: 'Repo vs reverse repo', back: 'Repo: sell a security and agree to repurchase it (borrowing). Reverse repo: buy and agree to resell (lending).' },
        { id: 'c-fi-33', front: 'Factors that lower the repo rate', back: 'Higher-quality collateral, shorter term, delivery of collateral to the lender, high demand for the collateral, lower general interest rates.' },
        { id: 'c-fi-34', front: 'Underwritten vs best-efforts offering', back: 'Underwritten: bank buys the issue and bears unsold risk. Best efforts: bank sells what it can, with no guarantee.' },
      ],
      questions: [
        {
          id: 'q-fi-030', difficulty: 'easy',
          stem: 'A city issues bonds to build a toll bridge, with interest and principal paid only from bridge tolls. These bonds are best described as:',
          choices: ['general obligation bonds', 'revenue bonds', 'sovereign bonds'],
          answer: 1,
          explain: 'Bonds serviced solely from a specific project\'s income are revenue bonds. They carry more risk than general obligation bonds backed by broad taxing power.',
          why: [
            'A would be backed by the city\'s general taxing authority.',
            'C refers to bonds issued by a national government.',
          ],
        },
        {
          id: 'q-fi-031', difficulty: 'medium',
          stem: 'A dealer borrows $10,000,000 through a 30-day repurchase agreement at a repo rate of 4%, using a 360-day year. The repurchase price is closest to:',
          choices: ['$10,033,333', '$10,400,000', '$10,032,877'],
          answer: 0,
          explain: 'Repurchase price = 10,000,000 × [1 + 0.04 × 30/360] = $10,033,333.',
          why: [
            'B applies a full year of interest.',
            'C uses a 365-day year, which is not the convention stated.',
          ],
        },
        {
          id: 'q-fi-032', difficulty: 'hard',
          stem: 'All else equal, which repurchase agreement would most likely carry the lowest repo rate?',
          choices: [
            'An overnight repo using on-the-run government bonds as collateral, delivered to the lender',
            'A 90-day repo using high-yield corporate bonds as collateral, held by the borrower',
            'A 30-day repo using investment-grade corporate bonds as collateral',
          ],
          answer: 0,
          explain: 'The lowest rate comes with the highest-quality collateral, the shortest term, and physical delivery to the lender — all of which minimise the lender\'s risk.',
          why: [
            'B combines lower-quality collateral, a longer term and collateral left with the borrower — all of which raise the rate.',
            'C is intermediate on both collateral quality and term.',
          ],
        },
        {
          id: 'q-fi-033', difficulty: 'expert',
          stem: 'A company funds a large portion of its working capital through commercial paper maturing every 30 days. The risk most directly addressed by a committed backup line of credit is:',
          choices: ['interest rate risk', 'rollover risk', 'currency risk'],
          answer: 1,
          explain: 'If market conditions deteriorate or the company\'s credit weakens, it may be unable to issue new paper to repay maturing paper. A committed backup line ensures funds are available — which is why rating agencies expect CP issuers to maintain one.',
          why: [
            'A concerns changes in borrowing cost, which a credit line does not hedge.',
            'C is unrelated to short-term domestic funding.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fi-pricing',
      name: 'Bond Valuation: Prices and Yields',
      los: [
        'Calculate a bond\'s price given a market discount rate and using spot rates',
        'Describe the relationships among a bond\'s price, coupon rate, maturity and market discount rate',
        'Calculate the flat price, accrued interest and full price of a bond',
        'Describe matrix pricing and yield conventions',
      ],
      lessons: [
        {
          id: 'fi-pricing-l1',
          title: 'Price, yield and the relationships you must know cold',
          minutes: 10,
          blocks: [
            {
              t: 'formula', name: 'Bond price',
              x: 'P = Σ [ Coupon / (1+r)ᵗ ] + Face / (1+r)ⁿ\n\nUsing spot rates:\nP = Σ [ Coupon / (1 + z_t)ᵗ ] + Face / (1 + z_n)ⁿ',
            },
            {
              t: 'table',
              head: ['Relationship', 'Result'],
              rows: [
                ['Coupon rate > market yield', 'Premium — price above par'],
                ['Coupon rate = market yield', 'Par'],
                ['Coupon rate < market yield', 'Discount — price below par'],
                ['Yields rise', 'Prices fall (inverse relationship)'],
                ['Longer maturity', 'Greater price sensitivity to yield changes'],
                ['Lower coupon', 'Greater price sensitivity to yield changes'],
                ['Approaching maturity', 'Price converges to par ("pull to par")'],
              ],
            },
            {
              t: 'callout', label: 'Convexity, informally',
              x: 'The price–yield relationship is a **curve**, not a line. A yield fall raises price more than an equal yield rise lowers it — an asymmetry in the bondholder\'s favour.',
            },
            { t: 'h', x: 'Between coupon dates' },
            {
              t: 'formula', name: 'Full price, flat price and accrued interest',
              x: 'Accrued interest = (t / T) × Coupon payment\n  t = days since last coupon, T = days in the coupon period\n\nFull (dirty) price = Flat (clean) price + Accrued interest\nFull price = PV at last coupon date × (1 + r)^(t/T)',
            },
            { t: 'p', x: 'Bonds are quoted at the **flat** price so that quotes do not jump on coupon dates. The buyer pays the **full** price, compensating the seller for interest earned since the last coupon. Day counts vary: government bonds typically use actual/actual, corporates often 30/360.' },
            { t: 'h', x: 'Matrix pricing' },
            { t: 'p', x: 'Bonds that rarely trade are priced from the yields of comparable, actively traded bonds with similar credit quality, coupon and maturity — interpolating yields where maturities differ. Matrix pricing is also used to estimate the yield spread for a new issue.' },
            { t: 'h', x: 'Yield conventions' },
            { t: 'p', x: 'A yield\'s **periodicity** is the number of compounding periods per year. To compare an annual-pay bond with a semiannual-pay bond, convert to the same periodicity.' },
            {
              t: 'formula', name: 'Converting periodicity',
              x: '(1 + APR_m / m)^m = (1 + APR_n / n)^n\n\nSemiannual 6% → annual: (1.03)² − 1 = 6.09%',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-10', name: 'Bond price', expr: 'P = Σ C/(1+r)ᵗ + F/(1+r)ⁿ', note: 'Coupons as an annuity plus face value as a lump sum.' },
        { id: 'f-fi-14', name: 'Accrued interest', expr: '(Days since last coupon / Days in period) × Coupon', note: 'Full price = flat price + accrued interest.' },
        { id: 'f-fi-15', name: 'Periodicity conversion', expr: '(1 + APR_m/m)^m = (1 + APR_n/n)^n', note: 'Put yields on the same compounding basis before comparing.' },
      ],
      cards: [
        { id: 'c-fi-10', front: 'Bond trading at a premium means', back: 'Coupon rate exceeds the market discount rate. Price declines toward par as maturity approaches.' },
        { id: 'c-fi-12', front: 'Which bonds are most price-sensitive to yield changes?', back: 'Longer maturity and lower coupon.' },
        { id: 'c-fi-14', front: 'Full vs flat price', back: 'Full (dirty) price = flat (clean) price + accrued interest. Quotes use flat; buyers pay full.' },
        { id: 'c-fi-15', front: 'Matrix pricing', back: 'Estimating a thinly traded bond\'s yield from comparable, actively traded bonds of similar credit quality and maturity.' },
      ],
      questions: [
        {
          id: 'q-fi-010', difficulty: 'easy',
          stem: 'A bond with a 6% annual coupon trades at 94.5% of par. The bond is best described as trading at:',
          choices: ['a premium, with a yield below 6%', 'a discount, with a yield above 6%', 'par, with a yield of exactly 6%'],
          answer: 1,
          explain: 'A price below par means investors demand a yield above the coupon rate.',
          why: [
            'A describes a price above 100.',
            'C would require the price to equal 100.',
          ],
        },
        {
          id: 'q-fi-034', difficulty: 'medium',
          stem: 'A $1,000 par bond pays a 6% annual coupon semiannually. Sixty days have passed in a 180-day coupon period. Accrued interest is closest to:',
          choices: ['$10.00', '$20.00', '$30.00'],
          answer: 0,
          explain: 'Each semiannual coupon = $30. Accrued interest = (60/180) × $30 = $10.00.',
          why: [
            'B uses the annual coupon of $60 instead of the semiannual $30.',
            'C is the full semiannual coupon, as if the period were complete.',
          ],
        },
        {
          id: 'q-fi-012', difficulty: 'medium',
          stem: 'Which bond will show the greatest percentage price change for a given change in yield?',
          choices: ['10-year, 8% coupon', '20-year, 3% coupon', '20-year, 8% coupon'],
          answer: 1,
          explain: 'Price sensitivity rises with maturity and falls with coupon size. The 20-year, 3% bond has its cash flows furthest in the future.',
          why: [
            'A has a shorter maturity and a high coupon — least sensitive.',
            'C shares the maturity but its larger coupons return cash sooner.',
          ],
        },
        {
          id: 'q-fi-035', difficulty: 'hard',
          stem: 'A 2-year bond pays a 5% annual coupon on a par value of 100. The 1-year spot rate is 3% and the 2-year spot rate is 4%. The bond\'s price is closest to:',
          choices: ['101.93', '100.00', '102.85'],
          answer: 0,
          explain: 'P = 5/1.03 + 105/1.04² = 4.854 + 97.078 = 101.93. Each cash flow is discounted at the spot rate for its own date.',
          why: [
            'B assumes par, which would require the coupon to equal the bond\'s yield.',
            'C discounts both cash flows at the average spot rate of 3.5%, overweighting the lower short rate for the large final payment.',
          ],
        },
        {
          id: 'q-fi-036', difficulty: 'expert',
          stem: 'A bond has a yield to maturity of 6.00% stated on a semiannual bond basis. Its yield expressed with annual periodicity is closest to:',
          choices: ['6.09%', '6.00%', '5.91%'],
          answer: 0,
          explain: '(1 + 0.06/2)² − 1 = 1.0609 − 1 = 6.09%. Less frequent compounding requires a higher stated rate to deliver the same return.',
          why: [
            'B ignores the difference in compounding frequency.',
            'C converts in the wrong direction.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fi-yields',
      name: 'Yield and Spread Measures',
      los: [
        'Calculate and interpret current yield, yield to maturity, yield to call and yield to worst',
        'Compare the G-spread, I-spread, Z-spread and option-adjusted spread',
        'Calculate and interpret yield measures for floating-rate notes, including the discount margin',
        'Calculate and interpret money market yields on a discount basis, add-on basis and bond-equivalent basis',
      ],
      lessons: [
        {
          id: 'fi-yields-l1',
          title: 'Measuring return and compensation for risk',
          minutes: 11,
          blocks: [
            {
              t: 'ul',
              x: [
                '**Current yield** = annual coupon ÷ flat price. Ignores capital gain or loss and the timing of cash flows.',
                '**Yield to maturity** — the IRR of holding to maturity. Assumes all coupons are reinvested at the YTM, the bond is held to maturity, and no default occurs.',
                '**Yield to call** — the same calculation run to a call date and call price.',
                '**Yield to worst** — the lowest of YTM and every yield to call; the conservative figure for a callable bond.',
                '**Option-adjusted yield** — the yield after removing the value of the embedded option.',
              ],
            },
            { t: 'h', x: 'Spreads over benchmarks' },
            {
              t: 'table',
              head: ['Spread', 'Measured against'],
              rows: [
                ['G-spread', 'The yield on a government bond of similar maturity (interpolated if needed)'],
                ['I-spread', 'The swap rate of the same maturity'],
                ['Z-spread', 'A constant spread added to every point on the government **spot** curve that prices the bond'],
                ['Option-adjusted spread', 'The Z-spread with the value of the embedded option removed'],
              ],
            },
            {
              t: 'callout', label: 'OAS for callable bonds',
              x: 'For a callable bond, **OAS = Z-spread − option cost**, so OAS is below the Z-spread. The Z-spread includes compensation for the call the investor has sold; OAS isolates the compensation for credit and liquidity risk alone.',
            },
            { t: 'h', x: 'Floating-rate notes' },
            { t: 'p', x: 'An FRN pays the market reference rate plus a **quoted margin** fixed at issue. The **required (discount) margin** is the spread the market currently demands. If the required margin equals the quoted margin, the FRN prices at par on reset dates. If the issuer\'s credit weakens and the required margin rises above the quoted margin, the FRN trades at a **discount**.' },
            { t: 'h', x: 'Money market instruments' },
            {
              t: 'formula', name: 'Money market yields',
              x: 'Discount basis: PV = FV × [1 − (Days/Year) × DR]\nAdd-on basis:   PV = FV / [1 + (Days/Year) × AOR]\n\nBond-equivalent yield: an add-on yield using a 365-day year',
            },
            { t: 'p', x: 'Discount-basis rates understate the true return, because the discount is computed on face value rather than on the amount invested. To compare instruments, convert everything to the same basis — usually an add-on rate on a 365-day year.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-11', name: 'Current yield', expr: 'Annual coupon / Price', note: 'Ignores capital gain/loss and time value.' },
        { id: 'f-fi-13', name: 'Option-adjusted spread', expr: 'OAS = Z-spread − Option value (in bps)', note: 'For callable bonds OAS < Z-spread.' },
        { id: 'f-fi-32', name: 'Discount-basis price', expr: 'PV = FV × [1 − (Days/Year) × DR]', note: 'Used for Treasury bills and commercial paper.' },
        { id: 'f-fi-33', name: 'Add-on rate', expr: 'AOR = (Year/Days) × (FV − PV)/PV', note: 'Interest earned relative to the amount invested.' },
      ],
      cards: [
        { id: 'c-fi-11', front: 'Two key YTM assumptions', back: 'Coupons are reinvested at the YTM, and the bond is held to maturity without default.' },
        { id: 'c-fi-13', front: 'Yield to worst', back: 'The lowest of yield-to-maturity and every yield-to-call.' },
        { id: 'c-fi-35', front: 'G-spread vs I-spread', back: 'G-spread: over a government bond yield. I-spread: over the swap rate.' },
        { id: 'c-fi-36', front: 'Z-spread', back: 'The constant spread over the government spot curve that makes discounted cash flows equal the bond\'s price.' },
        { id: 'c-fi-37', front: 'FRN when required margin exceeds quoted margin', back: 'Trades at a discount to par.' },
      ],
      questions: [
        {
          id: 'q-fi-040', difficulty: 'easy',
          stem: 'A bond pays an annual coupon of 5% on a par value of 100 and trades at 96. Its current yield is closest to:',
          choices: ['5.21%', '5.00%', '4.80%'],
          answer: 0,
          explain: 'Current yield = 5 / 96 = 5.21%.',
          why: [
            'B is the coupon rate, which uses par rather than price.',
            'C multiplies the coupon rate by the price instead of dividing.',
          ],
        },
        {
          id: 'q-fi-041', difficulty: 'medium',
          stem: 'A floating-rate note has a quoted margin of 150 basis points. Following a credit downgrade, investors now require a margin of 220 basis points. On its next reset date the note will most likely trade:',
          choices: ['at par', 'at a discount to par', 'at a premium to par'],
          answer: 1,
          explain: 'The note pays less spread than the market now demands. Its price must fall below par to deliver the required 220 basis points.',
          why: [
            'A would require the quoted and required margins to be equal.',
            'C would occur if the required margin fell below the quoted margin.',
          ],
        },
        {
          id: 'q-fi-042', difficulty: 'hard',
          stem: 'A callable corporate bond has a Z-spread of 180 basis points. The embedded call option is valued at 40 basis points. Its option-adjusted spread is closest to:',
          choices: ['140 bps', '220 bps', '180 bps'],
          answer: 0,
          explain: 'OAS = Z-spread − option cost = 180 − 40 = 140 bps. Part of the Z-spread compensates the investor for the call option sold to the issuer.',
          why: [
            'B adds the option value, which applies to a putable bond.',
            'C ignores the embedded option.',
          ],
        },
        {
          id: 'q-fi-043', difficulty: 'hard',
          stem: 'A callable bond trades at a premium. Its yield to maturity is 5.2%, its yield to first call is 4.6%, and its yield to second call is 4.9%. The yield to worst is:',
          choices: ['4.6%', '5.2%', '4.9%'],
          answer: 0,
          explain: 'Yield to worst is the lowest of all possible yields — here the yield to first call. For a premium bond, early redemption at the call price is the scenario least favourable to the investor.',
          why: [
            'B is the highest yield, assuming the call is never exercised.',
            'C is not the lowest available yield.',
          ],
        },
        {
          id: 'q-fi-044', difficulty: 'expert',
          stem: 'A 90-day Treasury bill with a face value of $1,000,000 is quoted at a 4.00% discount rate on a 360-day year. Its add-on yield on a 360-day basis is closest to:',
          choices: ['4.04%', '4.00%', '4.10%'],
          answer: 0,
          explain: 'Price = 1,000,000 × (1 − 90/360 × 0.04) = $990,000. Add-on yield = (360/90) × (10,000/990,000) = 4.04%. The add-on rate is higher because interest is measured against the $990,000 actually invested.',
          why: [
            'B is the discount rate, which divides by face value and understates the return.',
            'C uses a 365-day year — the bond-equivalent yield, not the 360-day add-on yield.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fi-term',
      name: 'The Term Structure of Interest Rates',
      los: [
        'Define spot rates, par rates and forward rates and describe the relationships among them',
        'Calculate forward rates from spot rates and bootstrap spot rates from par rates',
        'Describe the shapes of the yield curve',
        'Describe theories of the term structure',
      ],
      lessons: [
        {
          id: 'fi-term-l1',
          title: 'Spot, par and forward curves',
          minutes: 10,
          blocks: [
            {
              t: 'table',
              head: ['Curve', 'Definition'],
              rows: [
                ['Spot (zero) curve', 'Yields on zero-coupon bonds for each maturity — the rate to discount a single cash flow at that date'],
                ['Par curve', 'Coupon rates at which bonds of each maturity would price at par'],
                ['Forward curve', 'Rates today for borrowing or lending over future periods'],
              ],
            },
            {
              t: 'formula', name: 'Forward rates from spot rates',
              x: '(1 + z_B)^B = (1 + z_A)^A × (1 + f_A,B−A)^(B−A)\n\nTwo years: (1 + z₂)² = (1 + z₁)(1 + f₁,₁)',
            },
            { t: 'p', x: 'This is a no-arbitrage relationship: investing for two years at the two-year spot rate must earn the same as investing for one year and locking in the one-year forward rate for the second year.' },
            {
              t: 'callout', label: 'How the curves relate',
              x: 'When the spot curve slopes **upward**, forward rates lie **above** spot rates, and par rates lie slightly **below** spot rates. When the spot curve is flat, all three curves coincide.',
            },
            { t: 'h', x: 'Bootstrapping' },
            { t: 'p', x: 'Spot rates are derived from par rates one maturity at a time. The one-year par rate equals the one-year spot rate. For two years, price a two-year par bond using the known one-year spot rate for the first coupon, then solve for the two-year spot rate that makes the price equal par.' },
            {
              t: 'example', title: 'Bootstrapping a two-year spot rate',
              x: 'One-year par rate = 3% → z₁ = 3%. Two-year par rate = 4%.\n\n100 = 4/1.03 + 104/(1 + z₂)²\n104/(1 + z₂)² = 96.1165\nz₂ = 4.02%',
            },
            { t: 'h', x: 'Shapes and theories' },
            { t: 'p', x: 'Curves may be **upward sloping** (normal), **flat**, **inverted** (often preceding recessions), or **humped**.' },
            {
              t: 'table',
              head: ['Theory', 'Explanation of the slope'],
              rows: [
                ['Unbiased (pure) expectations', 'Forward rates equal expected future spot rates; an upward slope means rates are expected to rise'],
                ['Liquidity preference', 'Investors demand a premium for longer maturities, so forwards exceed expected spot rates; the curve can slope up even if rates are expected to stay flat'],
                ['Segmented markets', 'Each maturity segment has its own supply and demand, with no substitution between them'],
                ['Preferred habitat', 'Investors prefer certain maturities but will move if compensated with a sufficient premium'],
              ],
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-12', name: 'Forward rate', expr: '(1 + z₂)² = (1 + z₁)(1 + f₁,₁)', note: 'Spot rates imply forward rates by no-arbitrage.' },
        { id: 'f-fi-16', name: 'Par rate from spot rates (2-year)', expr: 'c/(1+z₁) + (1+c)/(1+z₂)² = 1', note: 'The coupon that prices the bond at par.' },
      ],
      cards: [
        { id: 'c-fi-40', front: 'Upward-sloping spot curve: forward vs spot rates', back: 'Forward rates are above spot rates; par rates are slightly below spot rates.' },
        { id: 'c-fi-41', front: 'Unbiased expectations theory', back: 'Forward rates are unbiased predictors of future spot rates.' },
        { id: 'c-fi-42', front: 'Liquidity preference theory', back: 'Longer maturities carry a liquidity premium, so the curve can slope upward even if rates are expected to be unchanged.' },
        { id: 'c-fi-43', front: 'Bootstrapping', back: 'Deriving spot rates sequentially from par rates, using previously solved spot rates for earlier cash flows.' },
      ],
      questions: [
        {
          id: 'q-fi-050', difficulty: 'easy',
          stem: 'When the spot rate curve is upward sloping, forward rates will most likely be:',
          choices: ['below the corresponding spot rates', 'above the corresponding spot rates', 'equal to the corresponding spot rates'],
          answer: 1,
          explain: 'An upward-sloping spot curve implies that the rate for later periods must exceed the average rate to that point, so forward rates lie above spot rates.',
          why: [
            'A describes a downward-sloping curve.',
            'C describes a flat curve.',
          ],
        },
        {
          id: 'q-fi-011', difficulty: 'medium',
          stem: 'The one-year spot rate is 3% and the two-year spot rate is 4%. The one-year forward rate one year from today is closest to:',
          choices: ['3.5%', '5.0%', '4.5%'],
          answer: 1,
          explain: '(1.04)² = (1.03)(1 + f). 1.0816/1.03 = 1.0501, so f ≈ 5.0%.',
          why: [
            'A is the simple average of the two spot rates.',
            'C understates the forward rate implied by no-arbitrage.',
          ],
        },
        {
          id: 'q-fi-051', difficulty: 'medium',
          stem: 'Investors expect short-term interest rates to remain unchanged, yet the yield curve slopes upward. Which theory best explains this?',
          choices: ['Unbiased expectations theory', 'Liquidity preference theory', 'Segmented markets theory with no premiums'],
          answer: 1,
          explain: 'Liquidity preference theory says investors require a premium to hold longer maturities. Even with flat rate expectations, those premiums produce an upward slope.',
          why: [
            'A would require rates to be expected to rise for the curve to slope upward.',
            'C does not predict any systematic slope from expectations or premiums.',
          ],
        },
        {
          id: 'q-fi-052', difficulty: 'hard',
          stem: 'The one-year spot rate is 3% and the two-year spot rate is 4%. The two-year par rate is closest to:',
          choices: ['3.98%', '4.00%', '3.50%'],
          answer: 0,
          explain: 'Solve c/1.03 + (1 + c)/1.0816 = 1. c × (0.97087 + 0.92456) = 1 − 0.92456, so c = 0.07544/1.89543 = 3.98%. With an upward-sloping spot curve, the par rate sits just below the longest spot rate.',
          why: [
            'B equals the two-year spot rate, ignoring that the first coupon is discounted at the lower one-year rate.',
            'C is the simple average of the spot rates.',
          ],
        },
        {
          id: 'q-fi-053', difficulty: 'expert',
          stem: 'The one-year par rate is 3% and the two-year par rate is 4%, both on annual-pay bonds. The bootstrapped two-year spot rate is closest to:',
          choices: ['4.02%', '4.00%', '3.98%'],
          answer: 0,
          explain: 'z₁ = 3%. For the two-year par bond: 100 = 4/1.03 + 104/(1 + z₂)². So 104/(1 + z₂)² = 96.1165 and (1 + z₂)² = 1.08202, giving z₂ = 4.02%.',
          why: [
            'B assumes spot and par rates are identical, which holds only for a flat curve.',
            'C is on the wrong side — with an upward-sloping curve the spot rate exceeds the par rate.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fi-risk-return',
      name: 'Interest Rate Risk and Return',
      los: [
        'Calculate and interpret the sources of return from investing in a fixed-rate bond',
        'Describe the relationships among a bond\'s holding period return, its Macaulay duration and the investment horizon',
        'Explain how reinvestment risk and market price risk offset each other',
        'Calculate and interpret the duration gap',
      ],
      lessons: [
        {
          id: 'fi-risk-return-l1',
          title: 'Two risks that pull in opposite directions',
          minutes: 9,
          blocks: [
            {
              t: 'ul',
              x: [
                '**Coupon and principal payments** as promised.',
                '**Reinvestment income** from coupons reinvested until the horizon.',
                '**Capital gain or loss** if the bond is sold before maturity at a price different from its carrying value.',
              ],
            },
            { t: 'p', x: 'If the bond is held to maturity and yields do not change, the realised return equals the YTM at purchase. When yields change, two effects work against each other:' },
            {
              t: 'table',
              head: ['Yields rise', 'Yields fall'],
              rows: [
                ['Coupons reinvested at higher rates — reinvestment income rises', 'Coupons reinvested at lower rates — reinvestment income falls'],
                ['Bond price falls — capital loss if sold before maturity', 'Bond price rises — capital gain if sold before maturity'],
              ],
            },
            {
              t: 'callout', label: 'Where the two risks balance',
              x: 'When the investment horizon equals the bond\'s **Macaulay duration**, the change in reinvestment income approximately offsets the change in sale price for a one-time parallel shift in yields. The investor is (approximately) **immunised** and earns the original yield.',
            },
            {
              t: 'formula', name: 'Duration gap',
              x: 'Duration gap = Macaulay duration − Investment horizon\n\nPositive gap (duration > horizon): market price risk dominates → hurt by rising yields\nNegative gap (duration < horizon): reinvestment risk dominates → hurt by falling yields',
            },
            {
              t: 'example', title: 'Intuition',
              x: 'A buy-and-hold investor with a horizon at maturity has a long horizon relative to duration and cares about reinvestment risk. A trader who may sell in a few months has a short horizon relative to duration and cares about price risk.',
            },
            { t: 'p', x: 'Horizon yield — the realised annualised return over the holding period — therefore depends on both the path of yields and when the bond is sold. The YTM at purchase is only an estimate of it.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-40', name: 'Duration gap', expr: 'Macaulay duration − Investment horizon', note: 'Positive: price risk dominates. Negative: reinvestment risk dominates.' },
        { id: 'f-fi-41', name: 'Horizon yield', expr: '(Total return at horizon / Price paid)^(1/years) − 1', note: 'Total return includes coupons, reinvestment income and sale proceeds.' },
      ],
      cards: [
        { id: 'c-fi-50', front: 'Three sources of return on a bond', back: 'Coupon and principal payments, reinvestment income on coupons, and capital gain or loss on sale.' },
        { id: 'c-fi-51', front: 'When do reinvestment and price risk offset?', back: 'When the investment horizon equals Macaulay duration.' },
        { id: 'c-fi-52', front: 'Positive duration gap', back: 'Macaulay duration exceeds the horizon — market price risk dominates; the investor is hurt by rising yields.' },
      ],
      questions: [
        {
          id: 'q-fi-060', difficulty: 'easy',
          stem: 'An investor buys a bond with a Macaulay duration of 7 years and plans to hold it for 4 years. The duration gap is:',
          choices: ['+3 years', '−3 years', '0 years'],
          answer: 0,
          explain: 'Duration gap = Macaulay duration − investment horizon = 7 − 4 = +3 years.',
          why: [
            'B subtracts in the wrong order.',
            'C would require the horizon to equal duration.',
          ],
        },
        {
          id: 'q-fi-061', difficulty: 'medium',
          stem: 'An investor\'s horizon is longer than the Macaulay duration of her bond. She is most exposed to:',
          choices: ['market price risk from rising yields', 'reinvestment risk from falling yields', 'neither, because she holds the bond beyond its duration'],
          answer: 1,
          explain: 'A negative duration gap means reinvestment effects dominate. If yields fall, lower reinvestment income outweighs any price gain, reducing her realised return.',
          why: [
            'A applies when the horizon is shorter than duration.',
            'C ignores that realised return still depends on the path of yields.',
          ],
        },
        {
          id: 'q-fi-062', difficulty: 'hard',
          stem: 'An investor buys a 10-year coupon bond and holds it to maturity. Immediately after purchase, yields fall and remain lower. The investor\'s realised return will most likely be:',
          choices: [
            'higher than the YTM at purchase, because the bond\'s price rose',
            'lower than the YTM at purchase, because coupons are reinvested at lower rates',
            'exactly equal to the YTM at purchase, because the bond is held to maturity',
          ],
          answer: 1,
          explain: 'Holding to maturity eliminates any price gain — the bond redeems at par. What remains is lower reinvestment income on coupons, so the realised return falls below the original YTM.',
          why: [
            'A would apply to an investor who sold soon after the yield fall.',
            'C holds only if reinvestment occurs at the original YTM, which is exactly the assumption that has been violated.',
          ],
        },
        {
          id: 'q-fi-063', difficulty: 'expert',
          stem: 'A fund must pay a known liability in 6 years. To minimise the effect of a one-time parallel shift in yields on the value available at that date, it should most likely hold bonds with a Macaulay duration of:',
          choices: ['6 years', 'less than 6 years, to limit price risk', 'more than 6 years, to capture higher yields'],
          answer: 0,
          explain: 'Matching Macaulay duration to the horizon balances reinvestment risk against price risk, immunising the portfolio against a one-time parallel yield change.',
          why: [
            'B leaves the fund exposed to reinvestment risk if yields fall.',
            'C leaves the fund exposed to price risk if yields rise.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fi-duration',
      name: 'Yield-Based Duration and Convexity',
      los: [
        'Calculate and interpret Macaulay, modified and approximate modified duration',
        'Explain how coupon, maturity and yield affect duration',
        'Calculate and interpret money duration and the price value of a basis point',
        'Calculate and interpret approximate convexity and estimate price changes using duration and convexity',
        'Calculate and interpret portfolio duration',
      ],
      lessons: [
        {
          id: 'fi-duration-l1',
          title: 'Measuring interest rate sensitivity',
          minutes: 11,
          blocks: [
            {
              t: 'formula', name: 'Duration measures',
              x: 'Macaulay duration: weighted average time to receive cash flows (weights = PV of each cash flow / price)\n\nModified duration = Macaulay duration / (1 + y per period)\n\nApproximate modified duration = (PV₋ − PV₊) / (2 × Δy × PV₀)\n\n%ΔPrice ≈ −ModDur × Δy',
            },
            {
              t: 'table',
              head: ['Property', 'Effect on duration'],
              rows: [
                ['Lower coupon', 'Higher duration'],
                ['Longer maturity', 'Higher duration (generally)'],
                ['Higher yield', 'Lower duration'],
                ['Zero-coupon bond', 'Macaulay duration = maturity'],
                ['Perpetuity', 'Macaulay duration = (1 + r) / r'],
                ['Callable bond', 'Lower duration than a comparable straight bond'],
                ['Putable bond', 'Lower duration than a comparable straight bond'],
              ],
            },
            {
              t: 'formula', name: 'Money duration and PVBP',
              x: 'Money duration = ModDur × Full price of the position\nChange in value ≈ −Money duration × Δy\n\nPrice value of a basis point (PVBP) = (PV₋ − PV₊) / 2   for a 1 bp shift',
            },
            { t: 'h', x: 'Convexity' },
            {
              t: 'formula', name: 'Convexity adjustment',
              x: 'Approximate convexity = (PV₋ + PV₊ − 2PV₀) / (Δy² × PV₀)\n\n%ΔPrice ≈ (−ModDur × Δy) + (½ × Convexity × Δy²)',
            },
            {
              t: 'callout', label: 'Why the convexity term is always positive',
              x: 'For an option-free bond convexity is positive, so the adjustment *raises* the estimated price whether yields rise or fall. Duration alone always overstates a price fall and understates a price rise.',
            },
            { t: 'h', x: 'Portfolio duration' },
            { t: 'p', x: 'Portfolio duration is approximately the **market-value-weighted average** of the durations of the bonds held. It is simple and widely used, but it assumes a parallel shift in the yield curve — every bond\'s yield changes by the same amount — which rarely happens in practice.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-20', name: 'Modified duration', expr: 'ModDur = MacDur / (1 + y)', note: '%ΔP ≈ −ModDur × Δy.' },
        { id: 'f-fi-24', name: 'Approximate modified duration', expr: '(PV₋ − PV₊) / (2 × Δy × PV₀)', note: 'Uses prices after small yield shifts down and up.' },
        { id: 'f-fi-21', name: 'Price change with convexity', expr: '%ΔP ≈ −ModDur×Δy + ½×Convexity×Δy²', note: 'Convexity term is positive for option-free bonds.' },
        { id: 'f-fi-25', name: 'Approximate convexity', expr: '(PV₋ + PV₊ − 2PV₀) / (Δy² × PV₀)', note: 'Positive for option-free bonds.' },
        { id: 'f-fi-22', name: 'Money duration', expr: 'ModDur × full price of the position', note: 'Currency price change for a 1.00 change in yield.' },
        { id: 'f-fi-26', name: 'Perpetuity Macaulay duration', expr: '(1 + r) / r', note: 'Finite even though the bond never matures.' },
      ],
      cards: [
        { id: 'c-fi-20', front: 'Modified duration, in words', back: 'The approximate percentage price change for a 1 percentage-point change in yield.' },
        { id: 'c-fi-22', front: 'Why is positive convexity desirable?', back: 'Prices rise more when yields fall than they fall when yields rise by the same amount.' },
        { id: 'c-fi-60', front: 'Macaulay duration of a zero-coupon bond', back: 'Equal to its time to maturity.' },
        { id: 'c-fi-61', front: 'Effect of a higher yield on duration', back: 'Duration falls — distant cash flows are discounted more heavily and carry less weight.' },
        { id: 'c-fi-62', front: 'Main limitation of portfolio duration as a weighted average', back: 'It assumes a parallel shift in the yield curve.' },
      ],
      questions: [
        {
          id: 'q-fi-020', difficulty: 'easy',
          stem: 'A bond has a modified duration of 7.2. If its yield rises by 50 basis points, the approximate percentage price change is closest to:',
          choices: ['−3.6%', '+3.6%', '−7.2%'],
          answer: 0,
          explain: '%ΔP ≈ −7.2 × 0.005 = −3.6%.',
          why: [
            'B has the sign wrong.',
            'C applies a full 1% yield change.',
          ],
        },
        {
          id: 'q-fi-070', difficulty: 'medium',
          stem: 'A portfolio holds 60% of its value in bonds with a modified duration of 4.0 and 40% in bonds with a modified duration of 9.0. The portfolio\'s modified duration is closest to:',
          choices: ['6.0', '6.5', '13.0'],
          answer: 0,
          explain: 'Portfolio duration = 0.60 × 4.0 + 0.40 × 9.0 = 2.4 + 3.6 = 6.0.',
          why: [
            'B is the simple, unweighted average.',
            'C adds the durations rather than weighting them.',
          ],
        },
        {
          id: 'q-fi-071', difficulty: 'medium',
          stem: 'A bond is priced at 100.00. If its yield falls by 10 basis points the price rises to 100.80; if its yield rises by 10 basis points the price falls to 99.21. Its approximate modified duration is closest to:',
          choices: ['7.95', '15.90', '3.98'],
          answer: 0,
          explain: 'ApproxModDur = (100.80 − 99.21) / (2 × 0.0010 × 100.00) = 1.59 / 0.20 = 7.95.',
          why: [
            'B omits the factor of 2 in the denominator.',
            'C doubles the denominator a second time.',
          ],
        },
        {
          id: 'q-fi-022', difficulty: 'hard',
          stem: 'A bond has a modified duration of 6.0 and a convexity of 80. If yields fall by 100 basis points, the estimated percentage price change is closest to:',
          choices: ['+6.0%', '+6.4%', '+5.6%'],
          answer: 1,
          explain: 'Duration effect: +6.0%. Convexity effect: ½ × 80 × 0.0001 = +0.4%. Total ≈ +6.4%.',
          why: [
            'A omits the convexity adjustment.',
            'C subtracts the convexity term.',
          ],
        },
        {
          id: 'q-fi-072', difficulty: 'expert',
          stem: 'A perpetual bond has a yield of 5%. Its Macaulay duration is closest to:',
          choices: ['21 years', '20 years', 'infinite, because the bond never matures'],
          answer: 0,
          explain: 'Macaulay duration of a perpetuity = (1 + r)/r = 1.05/0.05 = 21 years. Distant cash flows are so heavily discounted that they contribute little weight.',
          why: [
            'B is 1/r, which is the modified duration.',
            'C ignores discounting; duration is a present-value-weighted average and is finite.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fi-curve-risk',
      name: 'Curve-Based and Empirical Risk Measures',
      los: [
        'Explain why effective duration and effective convexity are used for bonds with embedded options',
        'Calculate and interpret effective duration and effective convexity',
        'Describe key rate duration as a measure of yield curve shape risk',
        'Explain empirical duration and how it differs from analytical duration',
      ],
      lessons: [
        {
          id: 'fi-curve-risk-l1',
          title: 'When yield-based duration stops working',
          minutes: 9,
          blocks: [
            { t: 'p', x: 'Yield-based duration assumes a bond\'s cash flows are fixed. Callable bonds, putable bonds and mortgage-backed securities break that assumption: their cash flows change as rates change. For these, analysts use **curve-based** measures computed by repricing the bond under shifts in the benchmark yield curve.' },
            {
              t: 'formula', name: 'Effective duration and convexity',
              x: 'Effective duration  = (PV₋ − PV₊) / (2 × ΔCurve × PV₀)\nEffective convexity = (PV₋ + PV₊ − 2PV₀) / (ΔCurve² × PV₀)',
            },
            {
              t: 'callout', label: 'Negative convexity',
              x: 'At low yields a callable bond\'s price cannot rise much above the call price, because a further yield decline makes the call more likely. Its price–yield curve flattens — **negative convexity**. Putable bonds show the opposite: when yields rise, the put limits the price decline, increasing convexity.',
            },
            { t: 'h', x: 'Key rate duration' },
            { t: 'p', x: 'Effective duration measures sensitivity to a **parallel** shift. Real curves steepen, flatten and twist. **Key rate (partial) duration** measures sensitivity to a change in the yield at a single maturity, holding others constant. The key rate durations sum to effective duration, and together they reveal **shape risk**.' },
            { t: 'h', x: 'Empirical duration' },
            { t: 'p', x: '**Analytical** durations come from formulas and models. **Empirical** duration is estimated statistically from observed price changes relative to benchmark yield changes. For government bonds the two are similar. For credit-risky bonds they differ: when government yields fall in a flight to quality, credit spreads often widen at the same time, partly offsetting the price gain — so empirical duration is typically **lower** than analytical duration.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-50', name: 'Effective duration', expr: '(PV₋ − PV₊) / (2 × ΔCurve × PV₀)', note: 'Required for bonds whose cash flows depend on rates.' },
        { id: 'f-fi-51', name: 'Effective convexity', expr: '(PV₋ + PV₊ − 2PV₀) / (ΔCurve² × PV₀)', note: 'Can be negative for callable bonds.' },
        { id: 'f-fi-52', name: 'Key rate durations', expr: 'Σ Key rate durations = Effective duration', note: 'Decomposes sensitivity by maturity.' },
      ],
      cards: [
        { id: 'c-fi-21', front: 'When must effective duration be used?', back: 'For bonds with embedded options or MBS, whose cash flows change as yields change.' },
        { id: 'c-fi-63', front: 'Negative convexity', back: 'Price appreciation is capped as yields fall — typical of callable bonds and MBS at low yields.' },
        { id: 'c-fi-64', front: 'Key rate duration', back: 'Sensitivity to a yield change at one maturity, holding other rates constant. Measures yield curve shape risk.' },
        { id: 'c-fi-65', front: 'Empirical vs analytical duration for high-yield bonds', back: 'Empirical is typically lower, because credit spreads tend to move opposite to government yields.' },
      ],
      questions: [
        {
          id: 'q-fi-021', difficulty: 'easy',
          stem: 'An analyst must measure the interest rate risk of a callable bond. The appropriate measure is:',
          choices: ['Macaulay duration', 'modified duration', 'effective duration'],
          answer: 2,
          explain: 'A call option makes cash flows depend on rates. Effective duration captures this by repricing the bond under benchmark curve shifts.',
          why: [
            'A and B both assume fixed cash flows.',
          ],
        },
        {
          id: 'q-fi-080', difficulty: 'medium',
          stem: 'A portfolio manager wants to measure how a portfolio would be affected if 10-year rates rose while 2-year rates stayed unchanged. The most appropriate measure is:',
          choices: ['effective duration', 'key rate duration', 'Macaulay duration'],
          answer: 1,
          explain: 'Key rate duration measures sensitivity to a yield change at a specific maturity, capturing non-parallel shifts in the curve.',
          why: [
            'A measures sensitivity to parallel shifts only.',
            'C is a yield-based measure that also assumes a single yield change.',
          ],
        },
        {
          id: 'q-fi-081', difficulty: 'hard',
          stem: 'A callable bond is priced at 101.50. If the benchmark curve shifts down 25 basis points its price becomes 102.80; if it shifts up 25 basis points its price becomes 99.90. Its effective duration is closest to:',
          choices: ['5.71', '11.43', '2.86'],
          answer: 0,
          explain: 'Effective duration = (102.80 − 99.90) / (2 × 0.0025 × 101.50) = 2.90 / 0.5075 = 5.71.',
          why: [
            'B omits the factor of 2 in the denominator.',
            'C divides by twice the correct denominator.',
          ],
        },
        {
          id: 'q-fi-082', difficulty: 'hard',
          stem: 'As yields fall substantially, a callable bond\'s price most likely:',
          choices: [
            'rises faster than an otherwise identical option-free bond',
            'rises more slowly than an option-free bond, as it exhibits negative convexity',
            'falls, because the probability of the bond being called increases',
          ],
          answer: 1,
          explain: 'Falling yields make a call more likely, so the price is capped near the call price. Price gains slow sharply — negative convexity.',
          why: [
            'A describes positive convexity, the behaviour of the straight bond.',
            'C overstates the effect; the price still rises, just more slowly.',
          ],
        },
        {
          id: 'q-fi-083', difficulty: 'expert',
          stem: 'For a portfolio of high-yield corporate bonds, empirical duration is most likely:',
          choices: [
            'higher than analytical duration, because credit spreads amplify rate moves',
            'lower than analytical duration, because credit spreads tend to widen when government yields fall',
            'equal to analytical duration, because both measure sensitivity to the same benchmark',
          ],
          answer: 1,
          explain: 'In risk-off episodes government yields fall while credit spreads widen. The spread widening offsets part of the benchmark-driven price gain, so observed sensitivity to government yields is lower than the formula implies.',
          why: [
            'A reverses the typical relationship between spreads and benchmark yields.',
            'C ignores the interaction between credit spreads and benchmark rates.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fi-credit',
      name: 'Credit Risk and Credit Analysis',
      los: [
        'Describe credit risk and its components: default probability, loss given default and spread risk',
        'Describe seniority rankings, recovery rates and credit ratings, including notching',
        'Describe the four Cs of credit analysis and calculate credit ratios',
        'Calculate the effect of credit spread changes on bond prices',
        'Describe the analysis of sovereign and non-sovereign government issuers',
      ],
      lessons: [
        {
          id: 'fi-credit-l1',
          title: 'Measuring and analysing credit risk',
          minutes: 11,
          blocks: [
            {
              t: 'ul',
              x: [
                '**Default risk** — the probability the issuer fails to pay.',
                '**Loss severity (loss given default)** — the fraction lost if default occurs. LGD = 1 − recovery rate.',
                '**Spread risk** — the price impact of wider credit spreads, even without default, from **downgrade risk** and **market liquidity risk**.',
              ],
            },
            {
              t: 'formula', name: 'Expected loss',
              x: 'Expected loss = Probability of default × Loss given default',
            },
            { t: 'h', x: 'Seniority' },
            { t: 'p', x: 'From highest to lowest priority: **first lien / senior secured**, second lien, senior unsecured, senior subordinated, subordinated, junior subordinated. All debt in the same class ranks **pari passu**. In practice, bankruptcy negotiations sometimes deviate from strict priority, so junior creditors may receive something before senior creditors are paid in full.' },
            { t: 'h', x: 'Credit ratings' },
            { t: 'p', x: 'Investment grade runs from AAA/Aaa down to **BBB−/Baa3**; below that is high yield. Agencies rate both the **issuer** (usually its senior unsecured debt) and individual **issues**. **Notching** adjusts an issue\'s rating up or down from the issuer rating to reflect seniority and expected recovery — typically wider notching for lower-rated issuers, where recovery matters more.' },
            {
              t: 'callout', label: 'Ratings have limits', kind: 'warn',
              x: 'Ratings change slowly, may lag market information, and do not capture the market price of risk. Spreads often move well before a formal downgrade.',
            },
            { t: 'h', x: 'The four Cs' },
            {
              t: 'table',
              head: ['C', 'Question'],
              rows: [
                ['Capacity', 'Can the borrower generate enough cash to pay? (industry structure, business model, cash flow)'],
                ['Capital', 'What other resources, such as equity cushion, reduce reliance on debt?'],
                ['Collateral', 'What assets back the debt, and what are they worth in distress?'],
                ['Covenants', 'What terms protect lenders?'],
              ],
            },
            {
              t: 'table',
              head: ['Credit ratio', 'Direction of stronger credit'],
              rows: [
                ['EBIT / Interest expense', 'Higher'],
                ['Debt / EBITDA', 'Lower'],
                ['Funds from operations / Debt', 'Higher'],
                ['Retained cash flow / Net debt', 'Higher'],
                ['Debt / Capital', 'Lower'],
              ],
            },
            {
              t: 'formula', name: 'Price impact of a spread change',
              x: '%ΔPrice ≈ −(ModDur × ΔSpread) + ½ × Convexity × (ΔSpread)²',
            },
            { t: 'h', x: 'Government issuers' },
            { t: 'p', x: 'Sovereign analysis combines qualitative factors — institutions and governance, fiscal flexibility, monetary effectiveness, economic flexibility and external position — with quantitative measures such as debt-to-GDP, interest-to-revenue, growth and foreign reserves. A sovereign\'s **local currency** rating is typically equal to or higher than its **foreign currency** rating, because it can tax and ultimately create its own currency but cannot print foreign currency. For non-sovereign revenue bonds, the key metric is the **debt service coverage ratio** of the underlying project.' },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-23', name: 'Expected loss', expr: 'Probability of default × Loss given default', note: 'LGD = 1 − recovery rate.' },
        { id: 'f-fi-53', name: 'Spread change price impact', expr: '−(ModDur × ΔSpread) + ½ × Convexity × ΔSpread²', note: 'Same mechanics as a benchmark yield change.' },
        { id: 'f-fi-54', name: 'Debt / EBITDA', expr: 'Total debt / EBITDA', note: 'Years of operating cash earnings to repay debt; lower is stronger.' },
        { id: 'f-fi-55', name: 'Debt service coverage ratio', expr: 'Net operating income / Debt service', note: 'Key metric for revenue bonds and commercial property.' },
      ],
      cards: [
        { id: 'c-fi-23', front: 'Lowest investment-grade rating', back: 'BBB− (S&P/Fitch) or Baa3 (Moody\'s).' },
        { id: 'c-fi-24', front: 'Expected loss', back: 'Probability of default × loss given default, where LGD = 1 − recovery rate.' },
        { id: 'c-fi-70', front: 'Four Cs of credit analysis', back: 'Capacity, capital, collateral, covenants.' },
        { id: 'c-fi-71', front: 'Notching', back: 'Adjusting an issue\'s rating from the issuer rating to reflect seniority and expected recovery.' },
        { id: 'c-fi-72', front: 'Why is a sovereign\'s foreign currency rating usually lower?', back: 'It can tax and create its own currency, but cannot print foreign currency to repay foreign-currency debt.' },
      ],
      questions: [
        {
          id: 'q-fi-090', difficulty: 'easy',
          stem: 'In a bankruptcy following strict priority of claims, which creditor is paid first?',
          choices: ['Senior unsecured bondholders', 'First lien secured lenders', 'Subordinated bondholders'],
          answer: 1,
          explain: 'First lien secured debt has the highest priority, backed by a first claim on specific collateral.',
          why: [
            'A ranks below secured creditors.',
            'C ranks below senior unsecured creditors.',
          ],
        },
        {
          id: 'q-fi-091', difficulty: 'medium',
          stem: 'A company has total debt of $600 million, EBITDA of $150 million and interest expense of $40 million. Its debt-to-EBITDA ratio is:',
          choices: ['4.0x', '3.75x', '15.0x'],
          answer: 0,
          explain: 'Debt / EBITDA = 600 / 150 = 4.0x.',
          why: [
            'B is EBITDA divided by interest expense — a coverage ratio.',
            'C is debt divided by interest expense.',
          ],
        },
        {
          id: 'q-fi-092', difficulty: 'hard',
          stem: 'A corporate bond has a modified duration of 5.0 and convexity of 40. If its credit spread widens by 100 basis points while benchmark yields are unchanged, its estimated percentage price change is closest to:',
          choices: ['−4.8%', '−5.2%', '−5.0%'],
          answer: 0,
          explain: '%ΔP ≈ −5.0 × 0.01 + ½ × 40 × 0.0001 = −5.0% + 0.2% = −4.8%.',
          why: [
            'B subtracts the convexity adjustment.',
            'C omits convexity.',
          ],
        },
        {
          id: 'q-fi-023', difficulty: 'expert',
          stem: 'A bond has a probability of default of 3% and an expected recovery rate of 40%. Its expected loss as a percentage of par is closest to:',
          choices: ['1.2%', '1.8%', '3.0%'],
          answer: 1,
          explain: 'LGD = 60%. Expected loss = 3% × 60% = 1.8%.',
          why: [
            'A multiplies by the recovery rate.',
            'C assumes zero recovery.',
          ],
        },
        {
          id: 'q-fi-093', difficulty: 'expert',
          stem: 'A sovereign has a significant amount of debt denominated in US dollars as well as debt in its own currency. Its foreign currency rating is most likely:',
          choices: [
            'higher than its local currency rating, because dollar debt is held by sophisticated investors',
            'equal to or lower than its local currency rating, because it cannot create dollars to service foreign debt',
            'identical to its local currency rating in all cases, since the issuer is the same',
          ],
          answer: 1,
          explain: 'A government can raise taxes and ultimately create money in its own currency, but must earn or borrow foreign currency. Agencies therefore usually rate foreign currency debt at or below local currency debt.',
          why: [
            'A cites an irrelevant factor and reverses the relationship.',
            'C ignores the different repayment capacity in each currency.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'fi-securitization',
      name: 'Securitization, ABS and MBS',
      los: [
        'Explain the benefits of securitisation and describe the securitisation process and parties involved',
        'Describe credit tranching, time tranching and forms of credit enhancement',
        'Describe prepayment risk, contraction risk and extension risk',
        'Describe residential MBS, CMOs, commercial MBS and non-mortgage ABS',
        'Describe covered bonds',
      ],
      lessons: [
        {
          id: 'fi-securitization-l1',
          title: 'Turning loans into securities',
          minutes: 11,
          blocks: [
            { t: 'p', x: 'In a securitisation, an **originator** sells a pool of loans or receivables to a **special purpose entity (SPE)**, which issues securities backed by the pool\'s cash flows. Because the SPE is **bankruptcy-remote**, investors are exposed to the performance of the assets rather than the originator. A **servicer** collects payments; a **trustee** protects investors\' interests.' },
            { t: 'p', x: 'Securitisation frees originators\' capital to make new loans, can lower funding costs, and gives investors access to diversified pools of assets with tailored risk profiles.' },
            { t: 'h', x: 'Tranching and credit enhancement' },
            { t: 'p', x: '**Credit tranching** creates senior, mezzanine and subordinated classes. Losses are absorbed from the bottom up — the **waterfall** — so senior tranches receive higher ratings.' },
            {
              t: 'ul',
              x: [
                '**Internal enhancement** — subordination; **overcollateralisation** (pool value exceeds securities issued); **excess spread** (interest on the pool exceeds interest paid to investors); reserve accounts.',
                '**External enhancement** — guarantees or letters of credit from third parties, which introduce third-party credit risk.',
              ],
            },
            { t: 'h', x: 'Prepayment risk' },
            {
              t: 'table',
              head: ['Risk', 'Trigger', 'Effect on investor'],
              rows: [
                ['Contraction risk', 'Rates fall; borrowers refinance', 'Principal returns early and must be reinvested at lower rates'],
                ['Extension risk', 'Rates rise; prepayments slow', 'Investor is locked into a below-market rate for longer'],
              ],
            },
            {
              t: 'formula', name: 'Prepayment speed',
              x: 'Single monthly mortality (SMM) = 1 − (1 − CPR)^(1/12)\n\nCPR = conditional prepayment rate (annualised)',
            },
            { t: 'h', x: 'Residential mortgage-backed securities' },
            { t: 'p', x: '**Agency** RMBS are guaranteed by government or government-sponsored entities; **non-agency** RMBS rely on credit enhancement. A **pass-through** distributes the pool\'s cash flows pro rata, net of servicing and guarantee fees. **Collateralised mortgage obligations (CMOs)** redistribute prepayment risk through time tranching:' },
            {
              t: 'ul',
              x: [
                '**Sequential-pay** — each tranche receives principal only after the prior tranche is paid off. Short tranches face less extension risk; long tranches less contraction risk.',
                '**Planned amortisation class (PAC)** — receives a scheduled principal stream within a range of prepayment speeds.',
                '**Support (companion)** tranches absorb the variability, so PAC stability comes at their expense.',
              ],
            },
            { t: 'h', x: 'Commercial MBS and other ABS' },
            { t: 'p', x: '**CMBS** are backed by commercial property loans, analysed with the **debt service coverage ratio** and **loan-to-value ratio**. They have call protection through prepayment lockouts, defeasance, penalties and yield maintenance charges, but face **balloon risk** — the borrower\'s inability to refinance the large final payment.' },
            { t: 'p', x: 'Non-mortgage ABS include **auto loan** ABS (amortising) and **credit card** ABS (non-amortising: during a lockout period principal repayments are reinvested in new receivables). **Collateralised loan obligations** are backed by leveraged loans and actively managed.' },
            {
              t: 'callout', label: 'Covered bonds are different',
              x: 'A **covered bond** stays on the issuing bank\'s balance sheet and gives investors **dual recourse**: to the issuer and to a segregated cover pool. The pool is dynamic — non-performing assets must be replaced. That structure typically makes covered bonds lower risk and lower yielding than comparable ABS.',
            },
          ],
        },
      ],
      formulas: [
        { id: 'f-fi-60', name: 'Single monthly mortality', expr: 'SMM = 1 − (1 − CPR)^(1/12)', note: 'Converts an annual prepayment rate to a monthly rate.' },
        { id: 'f-fi-61', name: 'Loan-to-value ratio', expr: 'Loan amount / Property value', note: 'Lower LTV means more borrower equity and lower credit risk.' },
        { id: 'f-fi-62', name: 'Pass-through rate', expr: 'Mortgage rate − Servicing and guarantee fees', note: 'The coupon passed on to MBS investors.' },
      ],
      cards: [
        { id: 'c-fi-80', front: 'Why is the SPE bankruptcy-remote?', back: 'So investors are exposed to the performance of the assets, not the creditworthiness of the originator.' },
        { id: 'c-fi-81', front: 'Contraction vs extension risk', back: 'Contraction: rates fall, prepayments accelerate. Extension: rates rise, prepayments slow.' },
        { id: 'c-fi-82', front: 'PAC vs support tranche', back: 'PAC receives scheduled principal within a band of prepayment speeds; support tranches absorb the prepayment variability.' },
        { id: 'c-fi-83', front: 'Three forms of internal credit enhancement', back: 'Subordination, overcollateralisation, excess spread (plus reserve accounts).' },
        { id: 'c-fi-84', front: 'Covered bond vs ABS', back: 'Covered bond: on the issuer\'s balance sheet, dual recourse, dynamic cover pool. ABS: off-balance-sheet SPE, recourse to the pool only.' },
      ],
      questions: [
        {
          id: 'q-fi-100', difficulty: 'easy',
          stem: 'A securitisation issues $95 million of securities backed by a $100 million pool of auto loans. The $5 million difference is best described as:',
          choices: ['excess spread', 'overcollateralisation', 'an external guarantee'],
          answer: 1,
          explain: 'Collateral exceeding the securities issued is overcollateralisation, a form of internal credit enhancement that absorbs initial losses.',
          why: [
            'A refers to interest on the pool exceeding interest paid to investors.',
            'C is enhancement from a third party.',
          ],
        },
        {
          id: 'q-fi-101', difficulty: 'medium',
          stem: 'Mortgage rates fall sharply after an investor buys a mortgage pass-through security. The investor is most exposed to:',
          choices: ['extension risk', 'contraction risk', 'balloon risk'],
          answer: 1,
          explain: 'Lower rates prompt borrowers to refinance, returning principal early just when it can only be reinvested at lower rates.',
          why: [
            'A arises when rates rise and prepayments slow.',
            'C concerns a borrower\'s inability to refinance a large final payment, typical of commercial loans.',
          ],
        },
        {
          id: 'q-fi-102', difficulty: 'hard',
          stem: 'In a CMO containing a planned amortisation class (PAC) tranche and a support tranche, a large and sustained increase in prepayment speeds will most likely:',
          choices: [
            'shorten the PAC tranche\'s average life significantly',
            'be absorbed first by the support tranche, which receives principal earlier',
            'affect both tranches equally, since they share the same collateral',
          ],
          answer: 1,
          explain: 'The support tranche absorbs prepayments beyond the PAC schedule, receiving principal faster so the PAC can stay on schedule within its band. The PAC\'s stability is purchased at the support tranche\'s expense.',
          why: [
            'A describes what the PAC structure is designed to prevent, at least within the prepayment band.',
            'C ignores the redistribution of prepayment risk that defines a CMO.',
          ],
        },
        {
          id: 'q-fi-103', difficulty: 'hard',
          stem: 'A mortgage pool has a conditional prepayment rate of 20%. The single monthly mortality rate is closest to:',
          choices: ['1.84%', '1.67%', '2.00%'],
          answer: 0,
          explain: 'SMM = 1 − (1 − 0.20)^(1/12) = 1 − 0.8^(0.0833) = 1 − 0.98158 = 1.84%.',
          why: [
            'B divides the annual rate by 12, ignoring that prepayments compound on a declining balance.',
            'C is an arbitrary approximation that overstates the monthly rate.',
          ],
        },
        {
          id: 'q-fi-104', difficulty: 'expert',
          stem: 'Compared with an asset-backed security on similar assets, a covered bond most likely offers:',
          choices: [
            'recourse only to the static pool of assets, with a higher yield',
            'dual recourse to the issuer and a dynamic cover pool, typically with lower credit risk',
            'removal of the assets from the issuer\'s balance sheet, with no ongoing issuer obligation',
          ],
          answer: 1,
          explain: 'Covered bondholders have claims on both the issuing bank and a segregated cover pool, which the issuer must replenish if assets deteriorate. The extra protection usually means lower credit risk and yield.',
          why: [
            'A describes a typical ABS.',
            'C describes securitisation through an SPE, which covered bonds do not use.',
          ],
        },
      ],
    },
  ],
};
