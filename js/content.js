// Static HTML content for the Blueprint and Sources pages.
// Kept as plain HTML strings (no markdown parser dependency) so the site
// works offline as a plain local file with zero build step.
// Kept in sync with data/SYLLABUS_BLUEPRINT.md and data/SOURCES.md — if you
// edit one, edit both, the .md files are the working notes, this is what ships.

const BLUEPRINT_HTML = `
<div class="doc">
  <h1>AP TET 2026 — Paper 1 (Urdu Medium) — Exam Blueprint</h1>
  <p class="lede">What actually gets tested, what doesn't — verified against two real papers (2025 &amp; 2024), a topic-by-topic official-syllabus audit, and the official 2026 notification.</p>

  <h2>1. The hard facts</h2>
  <table class="factgrid">
    <tr><th>Exam window</th><td>5–21 August 2026</td></tr>
    <tr><th>Mode</th><td>Computer-Based Test (CBT), MCQ only — on the Digialm platform</td></tr>
    <tr><th>Paper 1 duration</th><td>150 minutes (2h 30m)</td></tr>
    <tr><th>Total questions / marks</th><td>150 questions, 150 marks</td></tr>
    <tr><th>Negative marking</th><td><strong>None.</strong> Every wrong/unattempted answer = 0, never negative.</td></tr>
    <tr><th>Sessions</th><td>Two shifts/day: 9:30–12:00 and 2:30–5:00</td></tr>
    <tr><th>Question paper language</th><td><strong>Bilingual</strong> — English printed first, then your chosen Language-I (Urdu)</td></tr>
    <tr><th>Paper 1A vs 1B</th><td>1A = regular schools, 1B = Special Education</td></tr>
    <tr><th>Who sits Paper 1</th><td>Aspirants for Classes I–V (SGT posts)</td></tr>
  </table>

  <h2>2. The 5-subject structure</h2>
  <p>Confirmed directly on the real exam paper, not just the syllabus PDF — fixed, no optional sections.</p>
  <table class="factgrid">
    <tr><th>#</th><th>Section</th><th>Qs</th><th>Split</th></tr>
    <tr><td>1</td><td>Child Development &amp; Pedagogy (CDP)</td><td>30</td><td>—</td></tr>
    <tr><td>2</td><td>Language I — Urdu</td><td>30</td><td>24 content + 6 pedagogy</td></tr>
    <tr><td>3</td><td>Language II — English (compulsory)</td><td>30</td><td>24 content + 6 pedagogy</td></tr>
    <tr><td>4</td><td>Mathematics</td><td>30</td><td>24 content + 6 pedagogy</td></tr>
    <tr><td>5</td><td>Environmental Studies (EVS)</td><td>30</td><td>24 content + 6 pedagogy</td></tr>
  </table>
  <p>English is compulsory as Language-II regardless of your Language-I choice — you cannot swap it out.</p>

  <h2>3. What WILL come — subject by subject</h2>
  <p>Verified from two real exam sittings (Oct 2024 and Dec 2025) — see section 6 below for how this was cross-checked against the full official syllabus, not just these two samples.</p>

  <h3>Child Development &amp; Pedagogy (30Q)</h3>
  <p>Purely theoretical, no numericals. Recurring, stable topics:</p>
  <ul>
    <li><strong>Developmental psychology</strong>: Piaget (stages, conservation, egocentrism), Vygotsky (ZPD, higher mental processes, scaffolding), Kohlberg (moral development), Erikson (psychosocial stages), Freud (psychosexual stages).</li>
    <li><strong>Learning theories</strong>: Thorndike, Gestalt/configuration theory, identical elements (Bagley), formal discipline, conditioning, types of learning.</li>
    <li><strong>Individual differences &amp; intelligence</strong>: multiple-intelligence categories, creativity vs intuition vs critical thinking, aptitude tests (DAT), divergent/convergent thinking.</li>
    <li><strong>Personality &amp; assessment tools</strong>: Sheldon, Jung, Kretschmer, Spranger (theorist–nationality pairs recur), projective tests (Rorschach, TAT), inventories (MMPI, Bell's Adjustment).</li>
    <li><strong>Memory &amp; forgetting</strong>: repression, disuse, interference, methods of measuring retention.</li>
    <li><strong>Policy &amp; current education law/schemes</strong> — highest-yield "read the news" area: RTE Act 2009 (specific sections), NEP 2020 (exact dates/structure), NCF, NDEAR, ICT-in-education terms, ABC card, CCE/Formative Assessment.</li>
    <li><strong>Inclusive/special education</strong>: learning disabilities (dyslexia, dysgraphia, dyscalculia), parenting styles, SEN teaching aids (window charts).</li>
    <li><strong>Classroom &amp; motivation theory</strong>: needs theory, frustration-aggression (Dolard), stress theory (Kurt Lewin), Bloom's taxonomy domains.</li>
  </ul>
  <p style="font-size:.88rem;color:var(--ink-soft)">Named in the official syllabus but not directly tested in either real paper sampled: <strong>Carl Rogers, Metacognition, Skinner, Pavlov, Bandura</strong> (the last three appear only as wrong-answer options, not as a question's actual subject) — covered in the Coverage Gap-Fill Drill, see section 6.</p>

  <h3>Language I — Urdu (30Q: 24 content + 6 pedagogy)</h3>
  <p>The section most candidates under-prepare, assuming "primary-level Urdu is easy." The real papers show otherwise:</p>
  <ul>
    <li><strong>Grammar</strong>: مترادف (synonyms), ضد (antonyms), جمع (plurals), سابقہ/لاحقہ (prefix/suffix formation), ضمیر کی اقسام (pronoun types), درست املا (correct spelling), جملے کا نحوی تجزیہ (sentence-part analysis).</li>
    <li><strong>Literature &amp; literary history</strong>: named poets and pen-names (takhallus), poetic forms (رباعی، دوہا، مرثیہ، ریختہ), figures of speech in couplets (تشبیہ، استعارہ، تجنیس، تضاد، مبالغہ).</li>
    <li><strong>Language origin &amp; linguistics theory</strong> (repeats every year): Prakrit/Sanskrit/Pali debate, origin-of-language theories (e.g. Bow-Wow theory), Hindavi/Devanagari history.</li>
    <li><strong>Cultural &amp; religious general knowledge woven into the paper</strong>: Sufi saints (Khwaja Moinuddin Chishti lineage), the Prophet's family names, Deccan-Urdu regional history (Begum Hazrat Mahal) — these are core, scored MCQs, not side content.</li>
    <li><strong>Pedagogy of Urdu (6Q)</strong>: LSRW skill order, curriculum-component questions, teaching-method philosophy, origin-of-language theories (Bow-Wow etc.).</li>
  </ul>

  <h3>Language II — English (30Q: 24 content + 6 pedagogy)</h3>
  <ul>
    <li><strong>Vocabulary &amp; usage</strong>: synonym/antonym in context, idioms, correct spelling, word formation, parts of speech.</li>
    <li><strong>Grammar</strong>: tense/agreement, articles, prepositions, active↔passive, direct↔indirect speech, sentence types, clauses, modals.</li>
    <li><strong>Reading comprehension</strong>: one short prose passage + one poetry extract, each with an inference question.</li>
    <li><strong>Pedagogy of English (6Q)</strong>: testing techniques (dictation, controlled conversation), education-policy facts (Wood's Dispatch 1854), syllable counting, Bloom's taxonomy in language testing, CLT.</li>
  </ul>
  <p style="font-size:.88rem;color:var(--ink-soft)">Named in the official syllabus but not directly tested: <strong>letter/précis writing, degrees of comparison, question tags</strong> — covered in the Coverage Gap-Fill Drill.</p>

  <h3>Mathematics (30Q: 24 content + 6 pedagogy)</h3>
  <ul>
    <li><strong>Content is NOT capped at Class 5 level</strong> — real questions include factorisation, algebraic identities, Euclid's postulates, polygon diagonals, mensuration, probability, statistics, ratio chains, profit/loss %, Simple Interest, primes, Pythagorean triplets — solid Class 6–10 command expected of the teacher.</li>
    <li><strong>Pedagogy of Maths (6Q)</strong>: concrete-to-abstract aids (Cuisenaire rods, Tangram), symbol-introduction sequencing for Class 1–2, Bloom's taxonomy in maths, NCTM process standards, item-writing rules, textbook-philosophy quotes.</li>
  </ul>
  <p style="font-size:.88rem;color:var(--ink-soft)">Named in the official syllabus but not directly tested: <strong>Time &amp; Work, an explicit average/mean calculation</strong> — covered in the Coverage Gap-Fill Drill.</p>

  <h3>Environmental Studies (30Q: 24 content + 6 pedagogy)</h3>
  <p>The broadest section — genuinely interdisciplinary:</p>
  <ul>
    <li><strong>Physics</strong>: heat transfer, pressure, periscope mirrors, conductors/insulators, magnetism.</li>
    <li><strong>Chemistry</strong>: metal/non-metal properties, solutions (isotonic/hypertonic/hypotonic), combustion pollutants, atmospheric gases.</li>
    <li><strong>Biology</strong>: symbiosis (lichens), cloning (Dolly the sheep), adaptation, food-testing experiments, cell organelles, excretory systems.</li>
    <li><strong>Agriculture</strong>: mulching, intercropping, sowing practices.</li>
    <li><strong>History</strong>: named battles (Tarain II), colonial policy (Doctrine of Lapse, Wood's Dispatch), social reformers (Savitribai Phule), Indus Valley Civilisation.</li>
    <li><strong>Geography &amp; civics</strong>: population density by state/census year, Mandal Tahsildar office functions, comparative religion facts, SDGs.</li>
    <li><strong>Current-ish GK folded into EVS</strong>: e.g. end-year of a recent geopolitical event.</li>
    <li><strong>Pedagogy of EVS (6Q)</strong>: aims-vs-objectives, educationist quotes (Gandhiji, John Dewey, John Keats — matching quotes to names recurs), teaching methods matched to descriptions, NCF-2005 committee, CCE.</li>
  </ul>

  <h2>4. What will NOT come</h2>
  <ul>
    <li><strong>No negative marking</strong> — never skip a question out of fear; guessing has zero downside.</li>
    <li><strong>No subjective/descriptive/essay answers anywhere.</strong> Everything is 4-option MCQ, CBT-clicked.</li>
    <li><strong>No standalone General Knowledge / Current Affairs section.</strong> GK-flavoured facts appear only folded inside EVS.</li>
    <li><strong>No standalone Reasoning/Aptitude section.</strong> No puzzles, seating arrangement, syllogisms, data interpretation.</li>
    <li><strong>No standalone Computer/IT section.</strong> Digital-education terms show up as 1–2 embedded CDP questions only.</li>
    <li><strong>No Class VI–VIII subject content</strong> (separate Science/Social Studies) — that's Paper 2 territory.</li>
    <li><strong>No handwriting, interview, lesson-plan-demo, or viva component</strong> in Paper 1 itself.</li>
    <li><strong>No English-only sections for Urdu-medium candidates</strong> — every CDP/Maths/EVS question is bilingual.</li>
  </ul>

  <h2>5. Why the 2025 paper reliably predicts 2026</h2>
  <p>Cross-checked CDP and Language-I Urdu questions from the Oct 2024 sitting (two shifts) against the Dec 2025 sitting:</p>
  <ul>
    <li>Same theorist roster in CDP — unchanged.</li>
    <li>Same Urdu-section shape: grammar + literary history/poets + Islamic-cultural GK + pedagogy — identical mix, different specific items.</li>
    <li>Same "quote → name the theorist" and "match the pair" formats across every subject, both years.</li>
    <li>No structural change in marks, timing, or negative-marking policy — and the 2026 notification confirms the identical 150/150/150 structure.</li>
    <li>Same CBT platform (Digialm) and interaction model both years — confirmed by intercepting the actual mock-test link from the official portal, not assumed.</li>
  </ul>
  <p><strong>The only genuinely new-for-2026 risk area is current-events-style policy questions</strong> (NEP 2020 implementation updates, any newer NCF revision, newer digital-education schemes) — keep that one category freshly revised right up to your exam date. Everything else in this blueprint is stable.</p>

  <h2>6. Coverage audit — official syllabus vs. all 300 real questions, topic by topic</h2>
  <p>Sections 3–5 describe what <em>actually appeared</em> in the two real papers. That's not automatically the same as the full official syllabus — 30 questions per subject per sitting can miss a named topic by pure chance, not because it's out of scope. So every question in both real papers was checked against the official SCERT syllabus topic list, subject by subject. Verdict: coverage is genuinely strong — EVS and Urdu in particular already touch nearly every named strand. Three subjects had specific, named gaps:</p>
  <table class="factgrid">
    <tr><th>Subject</th><th>Official-syllabus topic</th><th>Status in the 300 real questions</th></tr>
    <tr><td>CDP</td><td>Carl Rogers</td><td>Named in syllabus theorist list; never the subject of a question</td></tr>
    <tr><td>CDP</td><td>Metacognition</td><td>Explicit syllabus topic; never tested</td></tr>
    <tr><td>CDP</td><td>Skinner / Pavlov / Bandura</td><td>Named in syllabus; appear only as wrong-answer options, never the direct subject</td></tr>
    <tr><td>English</td><td>Letter / précis writing</td><td>Explicit syllabus line item; not tested in either real paper</td></tr>
    <tr><td>English</td><td>Degrees of comparison</td><td>Explicit grammar topic; not directly tested</td></tr>
    <tr><td>English</td><td>Question tags</td><td>Explicit grammar topic; not directly tested</td></tr>
    <tr><td>Maths</td><td>Time &amp; Work</td><td>Standard arithmetic topic in the syllabus; not tested (Simple Interest was)</td></tr>
    <tr><td>Maths</td><td>Average / mean</td><td>Median &amp; mode both appear; a direct mean calculation doesn't</td></tr>
  </table>
  <p>These are not guesses about what "might" come up — they're syllabus topics that are demonstrably in scope and demonstrably under-sampled. The <strong>Coverage Gap-Fill Drill</strong> (11 questions on the home page) exists specifically for these eight items and nothing else. It is not padding: everything else in the syllabus is already covered by the 300 real questions in the two full mock tests.</p>
</div>
`;

const SOURCES_HTML = `
<div class="doc">
  <h1>Data provenance</h1>
  <p class="lede">Read this before trusting any question in this project. Three question sets, three different provenance levels — the UI tells you which one you're looking at on every single question.</p>

  <h2>Mock Test 1 — 150 Qs, fully real, fully key-verified</h2>
  <p>All 150 questions, verbatim, from the actual AP TET <strong>Paper 1A (SGT, Classes I–V), Urdu medium</strong>, conducted <strong>13 December 2025, Shift 1</strong> by the Commissionerate of School Education, Government of Andhra Pradesh.</p>
  <ul>
    <li>Source PDF: <a href="assets/SOURCE_2025_Dec13_Shift1_Paper1A_Urdu.pdf" target="_blank">SOURCE_2025_Dec13_Shift1_Paper1A_Urdu.pdf</a> — the official CBT question-paper-with-key export (correct answers printed in green in the original, wrong options in red). Every answer key value was read directly off that colour-coding, not guessed.</li>
    <li>Retrieved via a third-party mirror (examrace.com) because the official government portal (aptet.apcfss.in) was returning HTTP 503 (server overload) at collection time — 5 August 2026, the first day of the AP TET 2026 exam window. Hosting/availability issue, not a content-authenticity issue.</li>
    <li><strong>Language-I (Urdu) questions are pure Urdu script in the original</strong> — no English version exists, it's the language paper itself. Hand-transcribed from the rendered PDF at up to 400 DPI. Two genuine transcription slips were found and fixed on re-verification (a duplicated option corrected to the source word "ریختہ"; several Maths questions' missing Urdu translations filled in from source). One item has two textually identical options <strong>in the real source PDF itself</strong> (verified at 400 DPI) — left as-is and flagged, since that's what real candidates actually saw.</li>
    <li>If you're relying on exact spelling/diacritics for serious study, cross-check against the source PDF — that's what it's there for.</li>
  </ul>

  <h2>Mock Test 2 — 150 Qs, 134 verbatim + 16 authored</h2>
  <p>From the real <strong>Paper 1A, Urdu medium, 13 October 2024, Shift 2</strong> sitting.</p>
  <ul>
    <li>Source PDF: <a href="assets/SOURCE_2024_Oct13_Shift2_Paper1A_Urdu.pdf" target="_blank">SOURCE_2024_Oct13_Shift2_Paper1A_Urdu.pdf</a> — a genuine CBT export, but a plain question paper (no colour-coded key). The separate official key PDF could not be retrieved (government portal 503 throughout collection).</li>
    <li><strong>134 questions</strong>: verbatim question/option text, with the correct answer independently determined through subject-matter verification against standard reference facts (e.g. Ebbinghaus wrote "On Memory", Samuel Kirk coined "learning disability", LCM(15,21)=105) — not guessed.</li>
    <li><strong>16 questions</strong>: the source text was ambiguous or not independently verifiable with confidence. Rather than present a possibly-wrong answer as verified, these were swapped for an original, unambiguous question on the <em>same topic</em> — marked <code>src:"authored"</code> in the data and shown with an "Authored replacement" badge on the results/review screen. Never silently presented as verbatim.</li>
  </ul>

  <h2>Coverage Gap-Fill Drill — 11 Qs, 100% original</h2>
  <p>Not a real paper. Built by auditing the official AP TET syllabus, topic by topic, against all 300 questions above (see the Blueprint page, section 6) — 8 specific syllabus topics were found to be in scope for 2026 but not directly tested in either real sitting. All 11 questions here are original, target exactly those gaps, and are marked <code>src:"authored"</code> with a note on every question explaining which gap it covers.</p>

  <h2>Reference-only, not loaded into any scored test</h2>
  <p><a href="assets/SOURCE_2024_Oct6_Shift1_Paper1_SGT_Urdu.pdf" target="_blank">SOURCE_2024_Oct6_Shift1_Paper1_SGT_Urdu.pdf</a> — a third genuine AP TET Paper 1 Urdu-medium paper (SGT, 6 Oct 2024, Shift 1), used only to cross-check the topic pattern is stable year-over-year (confirmed). Not loaded into the site: like Mock Test 2's source it has no retrievable key, and a second "verbatim-plus-authored" test wasn't judged worth the added transcription risk once the gap-fill drill covered syllabus breadth more precisely.</p>

  <h2>What is NOT in this project</h2>
  <p>No question anywhere was invented, paraphrased from memory, or reconstructed from a coaching-site summary <strong>and presented as if it were a real past question</strong>. Every question is exactly one of three things, and the UI always says which: (1) verbatim with a verified key, (2) verbatim text with an independently-verified answer, or (3) original content explicitly marked "authored" with a note explaining why.</p>

  <h2>Official pattern facts used in the Blueprint</h2>
  <p>Cross-verified across the official tet2dsc.apcfss.in portal (live-checked 5 Aug 2026), the AP TET 2026 June notification, and independent confirmation from Adda247, Testbook, Careerpower, Shiksha and the apteachers.in mirror. The CBT platform itself (Digialm) was confirmed by intercepting the actual <code>window.open()</code> call from the official portal's mock-test link — which is also the basis for this site's question-palette shapes/colours and its "Save &amp; Next persists, navigating away without saving discards your selection" behaviour, matched against Digialm's own public instructions page, not guessed. See the Blueprint page for the full fact table.</p>
</div>
`;
