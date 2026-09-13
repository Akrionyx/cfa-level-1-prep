// Ethical and Professional Standards — deep content.
// All wording is original. The Standards are referred to by their short titles
// (factual references) and their substance is paraphrased, never reproduced.

export default {
  id: 'ethics',
  name: 'Ethical and Professional Standards',
  short: 'Ethics',
  weight: '15–20%',
  weightMid: 17.5,
  depth: 'deep',
  summary:
    'The largest single block on the exam. Success comes from recognising fact patterns, not from memorising text — you must be able to spot which duty a given behaviour breaches, and what the analyst should have done instead.',
  modules: [
    /* ---------------------------------------------------------- */
    {
      id: 'eth-foundations',
      name: 'Ethics and Trust in the Profession',
      los: [
        'Describe the roles ethics and trust play in the investment industry',
        'Contrast ethical standards with legal standards',
        'Identify situations that create conflicts of interest',
        'Describe a framework for ethical decision making',
      ],
      lessons: [
        {
          id: 'eth-foundations-l1',
          title: 'Why ethics is the profession\'s operating system',
          minutes: 7,
          blocks: [
            { t: 'p', x: 'Finance is unusual among industries in that the product is a **promise**. A client hands over capital today in exchange for a claim on future value they cannot inspect, verify, or take home in a box. Every part of that exchange runs on trust, and trust is fragile in a very specific way: it is built slowly across thousands of interactions and destroyed instantly by one.' },
            { t: 'p', x: 'This is why the exam weights ethics so heavily, and why the questions rarely ask you to recite a rule. They ask whether a described action was acceptable — which means you need a working instinct for the duties, not a memorised list.' },
            { t: 'h', x: 'Ethical standards vs. legal standards' },
            { t: 'p', x: 'These two overlap but are not the same thing, and the exam loves the gap between them.' },
            {
              t: 'table',
              head: ['', 'Legal standards', 'Ethical standards'],
              rows: [
                ['Source', 'Legislators, regulators, courts', 'Shared professional values and codes'],
                ['Scope', 'Minimum acceptable conduct', 'Conduct a reasonable professional should aspire to'],
                ['Timing', 'Often reactive — written after harm occurs', 'Applies to new situations before any law exists'],
                ['Enforcement', 'Fines, sanctions, imprisonment', 'Censure, suspension, revocation of designation'],
              ],
            },
            {
              t: 'callout', label: 'The rule that resolves conflicts',
              x: 'When law and the Code and Standards disagree, you must follow the **stricter** of the two. Legal permission is never a defence for unethical conduct, and "everyone in this market does it" is never a defence for anything.',
            },
            { t: 'h', x: 'Why good people behave badly' },
            { t: 'p', x: 'The Level I material is blunt about this: unethical conduct is usually not the work of villains. It is the work of ordinary professionals under situational pressure — a compensation scheme that rewards one number, a boss who wants a result, a deadline, an industry norm that everybody quietly accepts. Two forces explain most misconduct:' },
            {
              t: 'ul',
              x: [
                '**Overconfidence bias** — believing your own judgement is objective enough that the conflict does not really affect you. It affects you.',
                '**Situational influences** — short-term incentives, loyalty to a team, and fear of standing out crowd out the slower, principled analysis you would produce with no pressure at all.',
              ],
            },
            { t: 'p', x: 'The practical consequence: you cannot rely on being a good person in the moment. You rely on a framework you decided to use *before* the moment.' },
            { t: 'h', x: 'A framework for ethical decision making' },
            {
              t: 'ol',
              x: [
                '**Identify** — What are the relevant facts? Which duties apply, to whom? Who is affected, and what conflicts exist?',
                '**Consider** — What alternative actions exist? Seek guidance: your compliance department, a supervisor, the Code and Standards, someone outside the situation.',
                '**Act** — Decide, and act. Sometimes the right action is escalation or refusal rather than a clever compromise.',
                '**Reflect** — Afterwards, ask what the outcome teaches. Was the decision sound, or did it just happen to work out?',
              ],
            },
            {
              t: 'callout', label: 'Exam tactic', kind: 'warn',
              x: 'When a question asks what the analyst "should do", the answer is rarely the clever workaround. It is usually disclose, decline, escalate to compliance, or abstain. Pick the boring, transparent option.',
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-eth-1', front: 'When law and the Code and Standards conflict, which governs?', back: 'Whichever is **stricter**. Complying with a looser local law does not excuse a breach of the Code and Standards.' },
        { id: 'c-eth-2', front: 'The four steps of the ethical decision-making framework', back: 'Identify → Consider → Act → Reflect.' },
        { id: 'c-eth-3', front: 'Why do ethical professionals still act unethically?', back: 'Situational pressure (incentives, loyalty, deadlines) plus overconfidence in their own objectivity — not bad character.' },
      ],
      questions: [
        {
          id: 'q-eth-001', difficulty: 'easy',
          stem: 'A portfolio manager works in a jurisdiction whose local law permits acting on material nonpublic information obtained from a corporate insider. The manager is a CFA charterholder. To comply with the Code and Standards, the manager must:',
          choices: [
            'follow local law, because local law always takes precedence for local activity.',
            'follow the stricter requirement, and therefore not act on the information.',
            'act on the information but disclose the source to clients afterwards.',
          ],
          answer: 1,
          explain: 'Members and candidates must comply with the more strict of applicable law or the Code and Standards. Local law here is looser than Standard II(A), so the Standard governs and the manager must not trade or cause others to trade on the information.',
          why: [
            'A is wrong because local law prevails only when it is *stricter*; a permissive law never lowers the bar set by the Code and Standards.',
            'C is wrong because disclosure does not cure a prohibited trade. The duty is to abstain from trading, not to confess afterwards.',
          ],
        },
        {
          id: 'q-eth-002', difficulty: 'medium',
          stem: 'Which statement best contrasts ethical and legal standards?',
          choices: [
            'Ethical standards define the minimum acceptable conduct, while legal standards describe aspirational behaviour.',
            'Legal standards are typically written in response to past misconduct, while ethical standards can guide conduct in situations no rule yet addresses.',
            'Conduct that is legal is, by definition, also ethical.',
          ],
          answer: 1,
          explain: 'Laws tend to be reactive — codified after a harm has already occurred and been recognised. Ethical principles are broader and apply to novel situations before any regulator has addressed them.',
          why: [
            'A reverses the two. *Legal* standards are the floor; ethical standards reach higher.',
            'C is the classic trap. Legality and ethics overlap but are not identical; plenty of legal conduct breaches professional duties.',
          ],
        },
        {
          id: 'q-eth-003', difficulty: 'hard',
          vignette: 'An analyst is under pressure from a deadline and from a supervisor who has publicly predicted a "buy" conclusion on a company. The analyst privately believes the evidence is mixed, but reasons that the supervisor has more experience, that the firm has always handled research this way, and that one report is unlikely to matter.',
          stem: 'The analyst\'s reasoning best illustrates:',
          choices: [
            'a properly conducted diligence process that appropriately weights senior judgement.',
            'situational influences and overconfidence combining to rationalise a compromised conclusion.',
            'an acceptable resolution because the supervisor bears ultimate responsibility for the report.',
          ],
          answer: 1,
          explain: 'Each of the analyst\'s justifications is a textbook situational influence: deadline pressure, deference to authority, "this is how it has always been done", and diffusion of responsibility. Together they rationalise a conclusion the analyst does not actually believe the evidence supports.',
          why: [
            'A is wrong because deferring to a supervisor\'s publicly stated conclusion is not diligence; it is substituting someone else\'s incentive for your own analysis.',
            'C is wrong because responsibility is not transferable. The analyst whose name is on the work retains a duty to have a reasonable basis for it.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eth-code',
      name: 'The Code of Ethics and the Standards',
      los: [
        'Describe the structure of the CFA Institute Professional Conduct Program and the disciplinary process',
        'State the six components of the Code of Ethics and the seven Standards of Professional Conduct',
        'Explain the ethical responsibilities required by the Code and Standards',
      ],
      lessons: [
        {
          id: 'eth-code-l1',
          title: 'The architecture: Code, Standards, and enforcement',
          minutes: 8,
          blocks: [
            { t: 'p', x: 'Think of the material in two layers. The **Code of Ethics** is a short statement of principles — the *why*. The **Standards of Professional Conduct** are seven groups of specific duties — the *what*. Exam questions almost always live in the Standards layer, but the Code explains the reasoning that makes the right answer feel obvious once you see it.' },
            { t: 'h', x: 'The Code of Ethics, in substance' },
            { t: 'p', x: 'Paraphrased, members and candidates undertake to:' },
            {
              t: 'ol',
              x: [
                'Act with integrity, competence, diligence, and respect toward clients, employers, colleagues, and the wider market.',
                'Place the integrity of the profession and the interests of clients above their own interests.',
                'Use reasonable care and exercise independent professional judgement in analysis and recommendations.',
                'Practise and encourage others to practise in a way that reflects credit on themselves and the profession.',
                'Promote the integrity and viability of global capital markets for the ultimate benefit of society.',
                'Maintain and improve their professional competence, and support that in other professionals.',
              ],
            },
            {
              t: 'callout', label: 'The one-line version',
              x: 'Client first, market integrity always, your own interest last. Almost every ethics answer is downstream of that ordering.',
            },
            { t: 'h', x: 'The seven Standards' },
            {
              t: 'table',
              head: ['#', 'Standard', 'Core duty'],
              rows: [
                ['I', 'Professionalism', 'Know the law, stay independent, do not misrepresent, do not commit dishonest acts'],
                ['II', 'Integrity of Capital Markets', 'Do not act on material nonpublic information; do not manipulate markets'],
                ['III', 'Duties to Clients', 'Loyalty and care, fair dealing, suitability, fair performance presentation, confidentiality'],
                ['IV', 'Duties to Employers', 'Loyalty, disclose outside compensation, supervise adequately'],
                ['V', 'Investment Analysis, Recommendations, and Actions', 'Reasonable basis, clear communication, records'],
                ['VI', 'Conflicts of Interest', 'Disclose conflicts, client trades before your own, disclose referral fees'],
                ['VII', 'Responsibilities as a Member or Candidate', 'Do not compromise CFA Institute programs; do not misuse the designation'],
              ],
            },
            { t: 'h', x: 'The Professional Conduct Program' },
            { t: 'p', x: 'Enforcement runs through CFA Institute\'s Professional Conduct Program, overseen by the Disciplinary Review Committee. An inquiry can be triggered by a self-disclosure on the annual Professional Conduct Statement, a written complaint, evidence of exam misconduct, or media reports of conduct.' },
            { t: 'p', x: 'If staff find a violation, the member is offered a disciplinary sanction, which may be accepted or rejected. Rejecting it sends the matter to a hearing panel. Sanctions range from a private censure through suspension of membership or candidacy, up to **revocation of the charter**.' },
            {
              t: 'callout', label: 'Frequently tested', kind: 'warn',
              x: 'Only CFA Institute members and candidates are bound by the Code and Standards. That matters in questions where a colleague who is neither behaves badly — your duty then concerns *your own* response (dissociate, report internally), not their membership.',
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-eth-10', front: 'Standard I', back: 'Professionalism — knowledge of the law, independence & objectivity, misrepresentation, misconduct.' },
        { id: 'c-eth-11', front: 'Standard II', back: 'Integrity of Capital Markets — material nonpublic information, market manipulation.' },
        { id: 'c-eth-12', front: 'Standard III', back: 'Duties to Clients — loyalty/prudence/care, fair dealing, suitability, performance presentation, confidentiality.' },
        { id: 'c-eth-13', front: 'Standard IV', back: 'Duties to Employers — loyalty, additional compensation arrangements, responsibilities of supervisors.' },
        { id: 'c-eth-14', front: 'Standard V', back: 'Investment Analysis, Recommendations, and Actions — diligence & reasonable basis, communication with clients, record retention.' },
        { id: 'c-eth-15', front: 'Standard VI', back: 'Conflicts of Interest — disclosure of conflicts, priority of transactions, referral fees.' },
        { id: 'c-eth-16', front: 'Standard VII', back: 'Responsibilities as a CFA Institute Member or Candidate — conduct in CFA programs, reference to CFA Institute/designation/program.' },
        { id: 'c-eth-17', front: 'Harshest sanction under the Professional Conduct Program', back: 'Revocation of the CFA charter (or of candidacy). Lesser sanctions: private censure, suspension of membership or candidacy.' },
      ],
      questions: [
        {
          id: 'q-eth-010', difficulty: 'easy',
          stem: 'Requirements concerning the use of material nonpublic information fall under which Standard?',
          choices: ['Standard I: Professionalism', 'Standard II: Integrity of Capital Markets', 'Standard III: Duties to Clients'],
          answer: 1,
          explain: 'Standard II(A) Material Nonpublic Information sits under Integrity of Capital Markets, because the harm it addresses is to the fairness of the market as a whole, not to one client.',
          why: [
            'A covers knowledge of the law, independence and objectivity, misrepresentation, and misconduct.',
            'C covers loyalty and care, fair dealing, suitability, performance presentation, and confidentiality owed to clients specifically.',
          ],
        },
        {
          id: 'q-eth-011', difficulty: 'medium',
          stem: 'A CFA candidate receives a disciplinary sanction proposal from CFA Institute Professional Conduct staff. If the candidate rejects the proposed sanction, the matter is:',
          choices: [
            'closed, because sanctions require the member\'s consent to take effect.',
            'referred to a hearing panel of the Disciplinary Review Committee.',
            'automatically escalated to revocation of candidacy.',
          ],
          answer: 1,
          explain: 'Accepting the proposed sanction resolves the matter. Rejecting it refers the case to a panel composed of Disciplinary Review Committee members for a hearing.',
          why: [
            'A is wrong — refusing consent does not end the process, it changes the forum.',
            'C is wrong because the panel determines the outcome; rejection does not itself trigger the maximum sanction.',
          ],
        },
        {
          id: 'q-eth-012', difficulty: 'hard',
          stem: 'Which of the following is *least likely* to be a component of the Code of Ethics?',
          choices: [
            'Placing client interests and the integrity of the profession above one\'s own interests.',
            'Maintaining and improving professional competence, and encouraging it in others.',
            'Achieving investment results that exceed an appropriate benchmark over a full market cycle.',
          ],
          answer: 2,
          explain: 'The Code governs *conduct*, not outcomes. Nothing in it promises or requires performance, because performance is not within a professional\'s control and tying ethics to results would create exactly the wrong incentives.',
          why: [
            'A is a direct component — the priority ordering of interests.',
            'B is a direct component — the duty of ongoing competence.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eth-i-ii',
      name: 'Standards I & II — Professionalism and Market Integrity',
      los: [
        'Demonstrate the application of the Code and Standards to situations involving issues of professional integrity',
        'Recommend practices and procedures designed to prevent violations of Standards I and II',
      ],
      lessons: [
        {
          id: 'eth-i-ii-l1',
          title: 'Standard I: Professionalism',
          minutes: 9,
          blocks: [
            { t: 'h', x: 'I(A) Knowledge of the Law' },
            { t: 'p', x: 'You must understand and comply with all applicable laws, rules, and regulations — including the Code and Standards — and you must not knowingly participate in or assist a violation. If you become aware of an ongoing violation by others, you must **dissociate**.' },
            { t: 'p', x: 'Dissociation in practice means: stop participating, tell your supervisor or compliance in writing, and if the activity continues, consider resigning. Note what is *not* required: you have no general duty under the Standards to report to regulators, though doing so may be required by law.' },
            { t: 'h', x: 'I(B) Independence and Objectivity' },
            { t: 'p', x: 'Use reasonable care to maintain independence, and do not offer, solicit, or accept anything that could reasonably be expected to compromise your own or another\'s objectivity.' },
            {
              t: 'ul',
              x: [
                '**Modest gifts** from clients (a token of appreciation, disclosed to the employer) are generally acceptable.',
                '**Gifts from third parties** — especially companies you cover — are treated far more suspiciously, because the giver wants something from your analysis.',
                '**Paid travel** from a subject company is the classic trap: wherever practical, pay your own way, or at minimum use commercial transport rather than the company jet.',
                '**Issuer-paid research** is not prohibited but must be disclosed, and must be based on the same diligence as any other work — flat fees, never performance- or conclusion-contingent fees.',
              ],
            },
            {
              t: 'callout', label: 'Test yourself this way',
              x: 'Ask not "was I actually influenced?" but "could a reasonable client, knowing this, doubt my objectivity?" That second question is the standard.',
            },
            { t: 'h', x: 'I(C) Misrepresentation' },
            { t: 'p', x: 'No untrue statements about your qualifications, your services, or your analysis — and no plagiarism. Plagiarism includes using another\'s charts, models, or phrasing without attribution. Two nuances worth memorising:' },
            {
              t: 'ul',
              x: [
                'You may use factual data from recognised statistical sources (e.g. a government index) **without** attribution.',
                'You may **not** repackage another analyst\'s work or projections as your own, even if you agree with them entirely.',
                'Omitting information can misrepresent just as effectively as stating a falsehood.',
              ],
            },
            { t: 'h', x: 'I(D) Misconduct' },
            { t: 'p', x: 'This covers dishonesty, fraud, or deceit, and any act reflecting adversely on professional reputation, integrity, or competence. Its reach extends beyond the office: conduct in personal life counts when it speaks to trustworthiness. Being convicted of fraud matters; having strong political opinions does not.' },
          ],
        },
        {
          id: 'eth-i-ii-l2',
          title: 'Standard II: Integrity of Capital Markets',
          minutes: 8,
          blocks: [
            { t: 'h', x: 'II(A) Material Nonpublic Information' },
            { t: 'p', x: 'If you possess information that is both **material** and **nonpublic**, you must not act on it or cause others to act on it.' },
            {
              t: 'ul',
              x: [
                '**Material** — a reasonable investor would want it, or its release would move the price. Ambiguous or speculative information is less likely to be material.',
                '**Nonpublic** — it has not been disseminated in a way that makes it generally available to the market. Telling a small group of analysts does not make it public.',
              ],
            },
            { t: 'p', x: 'The **mosaic theory** is your escape hatch and a favourite exam subject: an analyst may combine *nonmaterial* nonpublic information with *public* information to reach a material conclusion, and may act on that conclusion. The insight is yours, produced by work, rather than an insider\'s leak. Keep notes supporting how you got there.' },
            {
              t: 'callout', label: 'What to do when you receive it', kind: 'warn',
              x: 'You do not "disclose and trade". You make reasonable efforts to have the issuer disclose it publicly, and until then you do not trade, do not recommend, and do not tip. Firms implement this through information barriers and restricted lists.',
            },
            { t: 'h', x: 'II(B) Market Manipulation' },
            { t: 'p', x: 'Two flavours, both prohibited:' },
            {
              t: 'ul',
              x: [
                '**Information-based** — spreading false rumours, or "pump and dump" narratives, to move a price.',
                '**Transaction-based** — trades intended to mislead, such as wash trades, painting the tape, or securing a dominant position to distort a settlement price.',
              ],
            },
            { t: 'p', x: 'Intent is the pivot. Legitimate trading strategies that happen to affect prices, and legal arbitrage that exploits a genuine pricing inefficiency, are not manipulation.' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-eth-20', front: 'Mosaic theory', back: 'Combining **nonmaterial** nonpublic information with **public** information to reach a material conclusion — permitted, and the resulting conclusion may be acted on.' },
        { id: 'c-eth-21', front: 'Two tests for "material" information', back: 'A reasonable investor would want it before deciding, **or** its disclosure would likely move the security\'s price.' },
        { id: 'c-eth-22', front: 'Correct response to receiving MNPI', back: 'Do not trade, recommend, or tip. Urge the issuer to disclose publicly; notify compliance; use information barriers/restricted lists.' },
        { id: 'c-eth-23', front: 'Attribution exception under I(C)', back: 'Factual data from recognised statistical/government sources may be used without attribution; another analyst\'s analysis or projections may not.' },
        { id: 'c-eth-24', front: 'Two forms of market manipulation', back: 'Information-based (false rumours, pump-and-dump) and transaction-based (wash trades, painting the tape, cornering to distort settlement prices).' },
      ],
      questions: [
        {
          id: 'q-eth-020', difficulty: 'easy',
          stem: 'An analyst accepts an all-expenses-paid trip on a covered company\'s corporate jet to tour its new facility. With respect to Standard I(B) Independence and Objectivity, this is:',
          choices: [
            'acceptable, provided the trip is disclosed to the analyst\'s employer.',
            'a violation, because accepting paid travel from a subject company could reasonably be seen as compromising objectivity.',
            'acceptable, because facility tours improve the quality of the analyst\'s research.',
          ],
          answer: 1,
          explain: 'Best practice is to pay your own travel costs, or use commercial transportation where practical. Accepting company-funded luxury travel from an issuer you cover creates a reasonable appearance that your objectivity has been bought.',
          why: [
            'A is wrong because disclosure does not repair an independence problem that could have been avoided by paying your own way.',
            'C is wrong because the value of the tour is not the issue; the funding arrangement is. Attend the tour — just pay for the flight.',
          ],
        },
        {
          id: 'q-eth-021', difficulty: 'medium',
          stem: 'An analyst pieces together a materially significant conclusion about a firm\'s prospects by combining public filings with several individually insignificant details gathered from suppliers and customers. Acting on this conclusion is:',
          choices: [
            'permitted under the mosaic theory.',
            'a violation of Standard II(A), because the conclusion itself is material and was not public.',
            'permitted only if the analyst first urges the company to make a public announcement.',
          ],
          answer: 0,
          explain: 'The mosaic theory expressly allows an analyst to combine nonmaterial nonpublic information with public information. The material conclusion is the product of the analyst\'s own diligence, not an insider\'s disclosure, so acting on it is proper — and the analyst should retain notes documenting the process.',
          why: [
            'B misreads the Standard. What is prohibited is acting on material nonpublic *information received*, not on material *conclusions you derived*.',
            'C describes the response required when you actually hold MNPI, which is not the case here.',
          ],
        },
        {
          id: 'q-eth-022', difficulty: 'hard',
          vignette: 'A trader places a series of matched buy and sell orders between two accounts she controls, creating the appearance of active trading in a thinly traded security, shortly before the security is used to price a structured note.',
          stem: 'The trader has most likely violated:',
          choices: [
            'Standard II(B) Market Manipulation, through transaction-based manipulation.',
            'Standard II(A) Material Nonpublic Information.',
            'no Standard, because the trades were executed at prevailing market prices.',
          ],
          answer: 0,
          explain: 'Wash trades that manufacture the appearance of volume or liquidity, particularly when they distort a price used for settlement or valuation, are transaction-based market manipulation under Standard II(B).',
          why: [
            'B is wrong because no nonpublic information about the issuer is in play; the misconduct is in the trading itself.',
            'C is wrong because executing at market prices does not cure the deceptive intent — the trades exist to mislead other participants.',
          ],
        },
        {
          id: 'q-eth-023', difficulty: 'expert',
          vignette: 'An analyst at a bank learns during a client meeting that the client, a listed manufacturer, will announce an unexpectedly large write-down next week. The analyst does not trade. She does, however, quietly move the company from her "buy" list to "no opinion" and answers "no comment" when a portfolio manager asks why.',
          stem: 'With respect to Standard II(A), the analyst\'s actions are:',
          choices: [
            'compliant, because she neither traded nor disclosed the information.',
            'non-compliant, because changing a published recommendation on the basis of material nonpublic information can itself signal that information to the market.',
            'compliant, because moving to "no opinion" is more conservative than a sell recommendation.',
          ],
          answer: 1,
          explain: 'Acting on MNPI includes altering recommendations in a way that conveys the information indirectly. Sophisticated clients read a sudden withdrawal of coverage as a signal, so the withdrawal effectively "causes others to act". The correct handling is to place the security on a restricted list and urge the issuer to disclose publicly.',
          why: [
            'A is wrong because the prohibition is not limited to trading and explicit tipping; it covers causing others to trade, including by inference.',
            'C is wrong because conservatism is irrelevant. A change driven by MNPI is improper regardless of direction.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eth-iii-iv',
      name: 'Standards III & IV — Duties to Clients and Employers',
      los: [
        'Demonstrate the application of the Code and Standards to situations involving duties to clients and employers',
        'Recommend practices and procedures designed to prevent violations of Standards III and IV',
      ],
      lessons: [
        {
          id: 'eth-iii-iv-l1',
          title: 'Standard III: Duties to Clients',
          minutes: 10,
          blocks: [
            { t: 'h', x: 'III(A) Loyalty, Prudence, and Care' },
            { t: 'p', x: 'Client interests come before your own and before your employer\'s. Exercise the care and prudence a reasonable professional would. Two specifics that generate exam questions:' },
            {
              t: 'ul',
              x: [
                '**Identify the client.** For a pension plan, the client is the plan participants and beneficiaries — not the company executives who hired you. This single point resolves a surprising number of questions.',
                '**Soft dollars / client brokerage** belong to the client. Brokerage must be directed to obtain best execution and research that benefits the client, not perks or referrals that benefit you.',
              ],
            },
            { t: 'h', x: 'III(B) Fair Dealing' },
            { t: 'p', x: 'Deal fairly and objectively with all clients when making recommendations or taking action. "Fairly" is not "equally" — different service levels are permitted if disclosed and available to those who pay for them. What is prohibited is *discriminating* against some clients in the distribution of a recommendation.' },
            {
              t: 'callout', label: 'The practical rule',
              x: 'Give all clients a fair chance to act. Shorten the gap between notifying your fastest and slowest client, distribute simultaneously where possible, and never let favoured clients trade ahead of a recommendation others have not yet received.',
            },
            { t: 'h', x: 'III(C) Suitability' },
            { t: 'p', x: 'For advisory relationships: know the client\'s circumstances, constraints, risk tolerance, and objectives; put them in a written **IPS** and update it at least annually. Judge each investment in the context of the **total portfolio**, not in isolation.' },
            { t: 'p', x: 'For managers of a stated mandate (an index fund, a specialist strategy), the duty shifts: suitability is measured against the **stated mandate**, not each investor\'s personal circumstances. Do not style-drift because you have a view.' },
            { t: 'h', x: 'III(D) Performance Presentation' },
            { t: 'p', x: 'Presentations must be fair, accurate, and complete. Do not cherry-pick winning accounts or periods, do not present simulated results as actual, and disclose whether performance is gross or net of fees. Compliance with GIPS is the gold standard but is voluntary.' },
            { t: 'h', x: 'III(E) Preservation of Confidentiality' },
            { t: 'p', x: 'Keep current, former, and prospective client information confidential. Three exceptions: the information concerns illegal activities, disclosure is required by law, or the client permits disclosure.' },
            {
              t: 'callout', label: 'Frequently tested', kind: 'warn',
              x: 'Confidentiality does **not** shield a client from a CFA Institute Professional Conduct Program investigation — cooperating with PCP is not a breach of III(E).',
            },
          ],
        },
        {
          id: 'eth-iii-iv-l2',
          title: 'Standard IV: Duties to Employers',
          minutes: 8,
          blocks: [
            { t: 'h', x: 'IV(A) Loyalty' },
            { t: 'p', x: 'Act for your employer\'s benefit; do not deprive it of your skills, divulge confidential information, or cause it harm. The heavily tested scenario is **leaving to start a competing firm**. Before resignation you may not solicit clients or colleagues, take records, or use employer resources for the new venture. After you resign, you may compete — but you may still not use property taken from the old firm, and client lists are the old firm\'s property.' },
            { t: 'p', x: 'Memory retained in your own head is generally fair game; files, models, and databases are not. Independent practice for compensation requires prior written consent from your employer.' },
            {
              t: 'callout', label: 'Whistleblowing exception',
              x: 'The duty of loyalty yields when the employer is engaged in illegal or unethical activity — acting to protect market integrity or clients takes precedence over loyalty to the employer.',
            },
            { t: 'h', x: 'IV(B) Additional Compensation Arrangements' },
            { t: 'p', x: 'Do not accept gifts, benefits, compensation, or consideration that competes with, or might create a conflict with, your employer\'s interest — unless you obtain **written consent from all parties involved**. A client offering you a personal performance bonus is the standard fact pattern: it is not automatically prohibited, but it requires written consent from your employer.' },
            { t: 'h', x: 'IV(C) Responsibilities of Supervisors' },
            { t: 'p', x: 'Supervisors must make reasonable efforts to ensure that everyone subject to their supervision complies with law and the Code and Standards. Delegation does not relieve you of this duty.' },
            { t: 'p', x: 'If a firm has **no** adequate compliance system, a supervisor should decline supervisory responsibility in writing until one is in place. Once a violation is suspected, the supervisor must investigate promptly and place limits on the individual\'s activities — merely relying on the person\'s assurances is inadequate.' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-eth-30', front: 'Who is the "client" for a pension plan?', back: 'The plan participants and beneficiaries — not the executives or trustees who hired the manager.' },
        { id: 'c-eth-31', front: 'Does Fair Dealing require treating all clients *equally*?', back: 'No — **fairly**, not equally. Differentiated service levels are allowed if disclosed and available to all who qualify; discriminating in the dissemination of recommendations is not.' },
        { id: 'c-eth-32', front: 'Three exceptions to client confidentiality', back: 'Illegal activities by the client; disclosure required by law; the client permits it. (Cooperating with a CFA Institute PCP investigation is also permitted.)' },
        { id: 'c-eth-33', front: 'Suitability duty for a stated-mandate fund', back: 'Judged against the **stated mandate/strategy**, not each individual investor\'s circumstances. No style drift.' },
        { id: 'c-eth-34', front: 'Before resigning to start a competing firm, what is prohibited?', back: 'Soliciting clients or colleagues, taking records/models/client lists, and using employer resources for the new venture.' },
        { id: 'c-eth-35', front: 'Requirement for additional compensation from a client', back: 'Written consent from **all parties involved**, including the employer.' },
      ],
      questions: [
        {
          id: 'q-eth-030', difficulty: 'easy',
          stem: 'A manager of a corporate defined-benefit pension plan is pressured by the sponsoring company\'s CFO to shift assets into the company\'s own shares. The manager\'s primary duty under Standard III(A) is to:',
          choices: [
            'the sponsoring company, which engaged and pays the manager.',
            'the plan participants and beneficiaries.',
            'the CFO, as the authorised representative of the client.',
          ],
          answer: 1,
          explain: 'For a pension plan, the beneficial owners of the assets are the participants and beneficiaries. Loyalty runs to them, which means resisting a concentration that serves the sponsor\'s interests rather than theirs.',
          why: [
            'A and C both confuse who *hired* the manager with who the *client* is. The party writing the cheque is not automatically the party owed the fiduciary duty.',
          ],
        },
        {
          id: 'q-eth-031', difficulty: 'medium',
          stem: 'A research firm offers a premium tier: subscribers who pay more receive research reports one hour before standard subscribers. With respect to Standard III(B) Fair Dealing, this practice is:',
          choices: [
            'a violation, because all clients must receive recommendations at exactly the same time.',
            'acceptable if the different service levels are disclosed and the premium tier is available to all clients willing to pay.',
            'acceptable only if the standard subscribers are unaware of the premium tier.',
          ],
          answer: 1,
          explain: 'Fair dealing permits differentiated levels of service, provided the differences are disclosed and the higher tier is offered to all clients who are willing and able to pay for it. Fairness is about transparent, non-discriminatory access — not identical treatment.',
          why: [
            'A overstates the Standard; equal timing is best practice, not an absolute requirement, where tiers are properly disclosed.',
            'C inverts the requirement — concealment is precisely what makes a tiered arrangement improper.',
          ],
        },
        {
          id: 'q-eth-032', difficulty: 'hard',
          vignette: 'An analyst plans to resign and launch a competing advisory firm. Before submitting her resignation she: (1) drafts a business plan on her home computer during evenings, (2) emails herself the firm\'s client contact list, and (3) tells two colleagues she will "be in touch about opportunities" after she leaves.',
          stem: 'Which action is most clearly a violation of Standard IV(A) Loyalty?',
          choices: [
            'Preparing the business plan on personal time and equipment.',
            'Emailing herself the firm\'s client contact list.',
            'Telling colleagues she will contact them after she leaves.',
          ],
          answer: 1,
          explain: 'The client list is the employer\'s property. Copying it for use at a competing venture misappropriates an asset and deprives the employer of its benefit — a clear breach regardless of whether she has resigned yet.',
          why: [
            'A is permissible: preparing to compete on your own time and with your own resources, without soliciting or taking property, does not breach the duty.',
            'C is a weaker case — a general statement of future contact falls short of active solicitation while still employed, though outright recruiting before resigning would breach the Standard.',
          ],
        },
        {
          id: 'q-eth-033', difficulty: 'expert',
          vignette: 'A supervisor at a firm with no written compliance policies learns that a subordinate may have allocated a hot IPO preferentially to favoured accounts. The supervisor accepts the subordinate\'s verbal assurance that allocations were random, documents the conversation, and takes no further action.',
          stem: 'The supervisor has most likely violated Standard IV(C) because:',
          choices: [
            'a supervisor may never delegate any portion of a compliance function.',
            'once a violation is suspected, a supervisor must investigate promptly and limit the individual\'s activity, rather than rely on assurances.',
            'supervisors are strictly liable for all violations committed by subordinates.',
          ],
          answer: 1,
          explain: 'Accepting a denial at face value is not a reasonable supervisory effort. The duty requires a prompt investigation and interim limits on the subordinate\'s activities pending its outcome. The absence of a compliance system compounds the failure — the supervisor should have sought its creation, or declined supervisory responsibility in writing.',
          why: [
            'A is wrong because delegation is permitted; what cannot be delegated away is *responsibility* for reasonable supervision.',
            'C is wrong because the Standard imposes a reasonable-efforts duty, not strict liability. A supervisor who has taken reasonable steps is not in breach simply because a violation occurred.',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eth-v-vii',
      name: 'Standards V, VI & VII — Analysis, Conflicts, Membership',
      los: [
        'Demonstrate the application of the Code and Standards to investment analysis, recommendations, and actions',
        'Demonstrate the application of the Code and Standards to conflicts of interest',
        'Explain the responsibilities of members and candidates regarding the CFA Program and the designation',
      ],
      lessons: [
        {
          id: 'eth-v-vii-l1',
          title: 'Standards V, VI and VII',
          minutes: 10,
          blocks: [
            { t: 'h', x: 'V(A) Diligence and Reasonable Basis' },
            { t: 'p', x: 'Exercise diligence, independence, and thoroughness; have a reasonable and adequate basis, supported by research, for any analysis, recommendation, or action. Using third-party or quantitative research is permitted, but you must make reasonable efforts to verify its soundness — you own the conclusion you pass on.' },
            { t: 'h', x: 'V(B) Communication with Clients and Prospective Clients' },
            { t: 'p', x: 'Disclose the basic format and general principles of your investment process, and promptly disclose changes that materially affect it. Identify the limitations and risks of the analysis. Crucially, **distinguish fact from opinion** — the most commonly tested element of this Standard.' },
            { t: 'h', x: 'V(C) Record Retention' },
            { t: 'p', x: 'Keep the records supporting your analysis and recommendations. Where no regulation specifies a period, CFA Institute recommends **seven years**. Records created in the course of employment are the employer\'s property and stay behind when you leave.' },
            { t: 'h', x: 'VI(A) Disclosure of Conflicts' },
            { t: 'p', x: 'Make full and fair disclosure of anything that could reasonably impair your objectivity or interfere with your duties — beneficial ownership of a covered security, a directorship, the firm\'s investment-banking relationship with an issuer, or a compensation structure tied to a recommendation. Disclosures must be prominent and in plain language, not buried.' },
            { t: 'h', x: 'VI(B) Priority of Transactions' },
            { t: 'p', x: 'Client transactions come before employer transactions, which come before personal transactions. You are not forbidden from investing personally — you are forbidden from doing so ahead of those you owe a duty to. Beneficial ownership (including family accounts you benefit from) counts as personal.' },
            { t: 'h', x: 'VI(C) Referral Fees' },
            { t: 'p', x: 'Disclose to employer, clients, and prospects any compensation or benefit received from, or paid to, others for the recommendation of products or services — **before** the client engages, so they can assess the true cost and any bias.' },
            { t: 'h', x: 'VII(A) Conduct in CFA Institute Programs' },
            { t: 'p', x: 'Do not compromise the reputation or integrity of CFA Institute, its designations, or the exam process. Disclosing actual exam questions, or sharing confidential program information, is a violation. Expressing an opinion about CFA Institute or its policies is not.' },
            { t: 'h', x: 'VII(B) Reference to CFA Institute and the Designation' },
            {
              t: 'ul',
              x: [
                'Do not misrepresent the meaning of membership, the designation, or candidacy, or imply that it predicts performance.',
                'You are a **candidate** only while registered for an exam — passing all three levels without meeting the work requirement does not make you a charterholder.',
                'Correct usage: "Jane Doe, CFA" or "Jane Doe, Chartered Financial Analyst". Never as a noun ("a CFA"), never in a possessive form, never in bold or larger type than your own name.',
              ],
            },
            {
              t: 'callout', label: 'Frequently tested', kind: 'warn',
              x: '"I passed all three levels on the first attempt" is a permissible factual statement. "I am a Level III CFA" or "passing quickly makes me a better manager" are not.',
            },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-eth-40', front: 'Recommended record retention period where no regulation applies', back: 'Seven years.' },
        { id: 'c-eth-41', front: 'Priority of transactions ordering', back: 'Clients → employer → self (including beneficial ownership).' },
        { id: 'c-eth-42', front: 'Most-tested element of V(B) Communication', back: 'Clearly distinguishing **fact from opinion** in recommendations.' },
        { id: 'c-eth-43', front: 'Correct designation usage', back: '"Jane Doe, CFA" or "Chartered Financial Analyst". Never a noun ("a CFA"), never possessive, never emphasised over your own name.' },
        { id: 'c-eth-44', front: 'When are you a "CFA candidate"?', back: 'Only while enrolled/registered for an upcoming exam. Passing all levels without the work experience requirement does not permit claiming the charter.' },
      ],
      questions: [
        {
          id: 'q-eth-040', difficulty: 'easy',
          stem: 'Which reference to the designation is permissible under Standard VII(B)?',
          choices: [
            'Ravi Menon, CFA',
            'Ravi Menon, **CFA** (with the letters in bold, larger type)',
            'Ravi Menon is a CFA with ten years of experience',
          ],
          answer: 0,
          explain: 'The marks are adjectives that follow the holder\'s name in the same typeface and emphasis as the name itself.',
          why: [
            'B violates the requirement that the marks not be given greater prominence than the member\'s name.',
            'C uses "CFA" as a noun. The correct construction is "a CFA charterholder".',
          ],
        },
        {
          id: 'q-eth-041', difficulty: 'medium',
          stem: 'An adviser receives an undisclosed fee from a tax attorney for each client she refers. Under Standard VI(C), she must disclose this arrangement:',
          choices: [
            'to her employer only, since the client pays the attorney directly.',
            'to clients and prospective clients before they engage the attorney, as well as to her employer.',
            'only if the referral fee exceeds a threshold set by her firm.',
          ],
          answer: 1,
          explain: 'Referral compensation must be disclosed to employer, clients, and prospective clients, and the timing matters: the disclosure must come before the engagement so the client can evaluate both the full cost of the service and any bias in the recommendation.',
          why: [
            'A omits the client, who is the party whose decision is affected by the conflict.',
            'C is wrong because no de minimis exemption applies — all such arrangements require disclosure.',
          ],
        },
        {
          id: 'q-eth-042', difficulty: 'hard',
          vignette: 'An analyst issues a "buy" recommendation on a company whose shares she owns personally, and whose board her spouse serves on. Her report notes in a footnote on the final page that "the analyst may hold positions in securities mentioned."',
          stem: 'Regarding Standard VI(A), the analyst\'s disclosure is:',
          choices: [
            'adequate, because the possibility of ownership was disclosed in writing.',
            'inadequate, because disclosures must be prominent, specific, and cover the spouse\'s directorship.',
            'unnecessary, because personal ownership does not affect the quality of the analysis.',
          ],
          answer: 1,
          explain: 'Boilerplate placed in a footnote is neither prominent nor plain-language, and a vague "may hold positions" does not communicate an actual position. The spouse\'s board seat is a separate, material conflict — beneficial ownership and family relationships both fall within the Standard — and is not disclosed at all.',
          why: [
            'A is wrong because the form of the disclosure defeats its purpose; the test is whether a client would actually understand the conflict.',
            'C is wrong because the Standard addresses situations that could *reasonably be expected to impair objectivity*, regardless of whether they actually did.',
          ],
        },
        {
          id: 'q-eth-043', difficulty: 'expert',
          vignette: 'A portfolio manager builds a model from a third-party vendor\'s proprietary quantitative signal. She reviews the vendor\'s marketing materials and historical performance, but the vendor declines to explain the signal\'s construction, calling it confidential. She allocates 30% of a client portfolio based on the model.',
          stem: 'With respect to Standard V(A), the manager has most likely:',
          choices: [
            'complied, because reliance on a specialist third party is expressly permitted.',
            'violated the Standard, because she cannot have a reasonable basis for a recommendation whose underlying process she is unable to evaluate.',
            'complied, provided she discloses the use of a third-party model to the client.',
          ],
          answer: 1,
          explain: 'Third-party research may be used, but only after reasonable efforts to verify that it is sound. A model whose construction cannot be examined at all cannot be verified, so relying on it for a material allocation leaves the manager without an adequate basis. Reviewing marketing material and back-tested performance is not diligence.',
          why: [
            'A overstates the allowance — permission to use outside research is conditional on verifying its soundness.',
            'C is wrong because disclosure under V(B) is a separate duty; it does not substitute for the reasonable-basis requirement in V(A).',
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- */
    {
      id: 'eth-gips',
      name: 'Introduction to GIPS',
      los: [
        'Explain why the GIPS standards were created, who can claim compliance, and who benefits from compliance',
        'Describe the key concepts of the GIPS standards for firms',
        'Explain the purpose of composites in performance reporting',
        'Describe the fundamentals of compliance, including the recommendations of the GIPS standards',
      ],
      lessons: [
        {
          id: 'eth-gips-l1',
          title: 'What GIPS solves, and how',
          minutes: 7,
          blocks: [
            { t: 'p', x: 'Before GIPS, a manager could present performance honestly and still mislead — by showing only surviving accounts, choosing a flattering start date, or quietly excluding the strategy\'s worst portfolio. The **Global Investment Performance Standards** exist so that a prospective client can compare two managers on the same basis.' },
            {
              t: 'ul',
              x: [
                'Compliance is **voluntary**, and is claimed by **firms**, not by individuals, composites, or single products.',
                'Compliance must be **firm-wide** — you cannot apply GIPS to one flattering strategy only.',
                'There is **no partial compliance**. A firm either complies or it does not; statements such as "compliant except for..." are prohibited.',
                '**Verification** is optional, performed by an independent third party, and applies to the whole firm rather than to individual composites.',
              ],
            },
            { t: 'h', x: 'Composites: the anti-cherry-picking device' },
            { t: 'p', x: 'A **composite** is an aggregation of all discretionary, fee-paying portfolios managed according to a similar strategy or objective. Every such portfolio must be included in at least one composite, which is exactly what prevents a firm from quietly dropping its worst-performing account from the record.' },
            {
              t: 'callout', label: 'Key idea',
              x: 'Composites turn performance reporting from a marketing exercise into a comparison. If a portfolio fits the strategy, it is in the composite — winners and losers alike.',
            },
            { t: 'h', x: 'Fundamentals of compliance' },
            {
              t: 'ul',
              x: [
                'Define the **firm** — the distinct business entity held out to clients — and apply the standards across it.',
                'Provide a compliant presentation to every prospective client; a firm must also list its composite descriptions on request.',
                'Use the specific compliance statement wording; no modified or partial claims.',
                'Maintain the data and records that support everything presented.',
              ],
            },
            { t: 'p', x: 'Who benefits? Prospective clients gain comparability and confidence that results are not cherry-picked. Firms gain credibility and access to mandates that require compliance — but the cost is real record-keeping discipline.' },
          ],
        },
      ],
      formulas: [],
      cards: [
        { id: 'c-eth-50', front: 'Who can claim GIPS compliance?', back: 'Firms only — never individuals, single composites, or single products. Compliance must be firm-wide.' },
        { id: 'c-eth-51', front: 'What is a composite?', back: 'All discretionary, fee-paying portfolios managed to a similar strategy or objective, aggregated together — preventing cherry-picking of accounts.' },
        { id: 'c-eth-52', front: 'Is partial GIPS compliance allowed?', back: 'No. Compliance is all-or-nothing; "compliant except for..." statements are prohibited.' },
        { id: 'c-eth-53', front: 'Is GIPS verification required?', back: 'No — verification is voluntary, performed by an independent third party, and applies to the entire firm, not to individual composites.' },
      ],
      questions: [
        {
          id: 'q-eth-050', difficulty: 'easy',
          stem: 'Which entity may claim compliance with the GIPS standards?',
          choices: ['An individual portfolio manager', 'A firm, applied on a firm-wide basis', 'A single composite with a verified track record'],
          answer: 1,
          explain: 'Compliance is claimed by the firm — the distinct business entity held out to clients — and must be applied firm-wide. Individuals and individual composites cannot claim compliance.',
          why: [
            'A is wrong because performance is a firm-level representation, not a personal credential.',
            'C is wrong because allowing composite-level claims would permit exactly the cherry-picking GIPS was designed to prevent.',
          ],
        },
        {
          id: 'q-eth-051', difficulty: 'medium',
          stem: 'A firm manages 40 discretionary, fee-paying portfolios in a small-cap strategy and excludes the three worst performers from its small-cap composite. This most likely violates GIPS because:',
          choices: [
            'composites may not contain more than 25 portfolios.',
            'all discretionary, fee-paying portfolios managed to a similar strategy must be included in at least one composite.',
            'the firm failed to obtain third-party verification of the composite.',
          ],
          answer: 1,
          explain: 'The composite construction requirement exists specifically to defeat selective inclusion. Excluding underperformers from the composite for their strategy is the precise abuse the standards were written to eliminate.',
          why: [
            'A invents a limit that does not exist — composites have no maximum size.',
            'C is wrong because verification is voluntary and, in any case, would not cure the exclusion.',
          ],
        },
        {
          id: 'q-eth-052', difficulty: 'hard',
          stem: 'A firm states in its marketing material: "Our equity division complies with the GIPS standards in all material respects." This statement is:',
          choices: [
            'acceptable, as it accurately describes the scope of compliance.',
            'not permitted, because compliance is firm-wide and cannot be partial or qualified.',
            'acceptable if the firm also discloses which composites are non-compliant.',
          ],
          answer: 1,
          explain: 'Two defects: compliance is claimed at the firm level, not by a division, and the standards prohibit any partial or qualified claim. Only the prescribed compliance statement may be used, and only by a firm that complies fully.',
          why: [
            'A is wrong because accuracy of a partial claim is irrelevant — partial claims are disallowed outright.',
            'C is wrong because listing exceptions is precisely the "compliant except for" formulation the standards forbid.',
          ],
        },
      ],
    },
  ],
};
