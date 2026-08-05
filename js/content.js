// Static HTML content for the Blueprint and Sources pages.
// Kept as plain HTML strings (no markdown parser dependency) so the site
// works offline as a plain local file with zero build step.

const BLUEPRINT_HTML = `
<div class="doc">
  <h1>AP TET 2026 — Paper 1 (Urdu Medium) — Exam Blueprint</h1>
  <p class="lede">What actually gets tested, what doesn't — verified against the real 2025 &amp; 2024 papers and the official 2026 notification.</p>

  <h2>1. The hard facts</h2>
  <table class="factgrid">
    <tr><th>Exam window</th><td>5–21 August 2026</td></tr>
    <tr><th>Mode</th><td>Computer-Based Test (CBT), MCQ only</td></tr>
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
  <p>Verified from two real exam sittings (Oct 2024 and Dec 2025).</p>

  <h3>Child Development &amp; Pedagogy (30Q)</h3>
  <p>Purely theoretical, no numericals. Recurring, stable topics:</p>
  <ul>
    <li><strong>Developmental psychology</strong>: Piaget (stages, conservation, egocentrism), Vygotsky (ZPD, higher mental processes, scaffolding), Kohlberg (moral development), Erikson (psychosocial stages), Freud (psychosexual stages).</li>
    <li><strong>Learning theories</strong>: Thorndike, Gestalt/configuration theory, identical elements (Bagley), formal discipline, conditioning, types of learning.</li>
    <li><strong>Individual differences &amp; intelligence</strong>: multiple-intelligence categories, creativity vs intuition vs critical thinking, aptitude tests (DAT), divergent/convergent thinking.</li>
    <li><strong>Personality &amp; assessment tools</strong>: Sheldon, Jung, Kretschmer, Spranger (theorist–nationality pairs recur), projective tests (Rorschach, TAT), inventories (MMPI, Bell's Adjustment).</li>
    <li><strong>Memory &amp; forgetting</strong>: repression, disuse, interference, methods of measuring retention.</li>
    <li><strong>Policy &amp; current education law/schemes</strong> — highest-yield "read the news" area: RTE Act 2009 (specific sections), NEP 2020 (exact dates/structure), NCF, NDEAR, ICT-in-education terms, ABC card.</li>
    <li><strong>Inclusive/special education</strong>: learning disabilities (dyslexia, dysgraphia, dyscalculia), parenting styles, SEN teaching aids (window charts).</li>
    <li><strong>Classroom &amp; motivation theory</strong>: needs theory, frustration-aggression (Dolard), stress theory (Kurt Lewin), Bloom's taxonomy domains.</li>
  </ul>

  <h3>Language I — Urdu (30Q: 24 content + 6 pedagogy)</h3>
  <p>The section most candidates under-prepare, assuming "primary-level Urdu is easy." The real papers show otherwise:</p>
  <ul>
    <li><strong>Grammar</strong>: مترادف (synonyms), ضد (antonyms), جمع (plurals), سابقہ/لاحقہ (prefix/suffix formation), ضمیر کی اقسام (pronoun types), درست املا (correct spelling), جملے کا نحوی تجزیہ (sentence-part analysis).</li>
    <li><strong>Literature &amp; literary history</strong>: named poets and pen-names (takhallus), poetic forms (رباعی، دوہا، مرثیہ), figures of speech in couplets (تشبیہ، استعارہ، تجنیس، تضاد، مبالغہ).</li>
    <li><strong>Language origin &amp; linguistics theory</strong> (repeats every year): Prakrit/Sanskrit/Pali debate, origin-of-language theories (e.g. Bow-Wow theory), Hindavi/Devanagari history.</li>
    <li><strong>Cultural &amp; religious general knowledge woven into the paper</strong>: Sufi saints (Khwaja Moinuddin Chishti lineage), the Prophet's family names, Deccan-Urdu regional history (Begum Hazrat Mahal) — these are core, scored MCQs, not side content.</li>
    <li><strong>Pedagogy of Urdu (6Q)</strong>: LSRW skill order, curriculum-component questions, teaching-method philosophy.</li>
  </ul>

  <h3>Language II — English (30Q: 24 content + 6 pedagogy)</h3>
  <ul>
    <li><strong>Vocabulary &amp; usage</strong>: synonym/antonym in context, idioms, correct spelling, word formation, parts of speech.</li>
    <li><strong>Grammar</strong>: tense/agreement, articles, prepositions, active↔passive, direct↔indirect speech, sentence types, clauses, modals.</li>
    <li><strong>Reading comprehension</strong>: one short prose passage + one poetry extract, each with an inference question.</li>
    <li><strong>Pedagogy of English (6Q)</strong>: testing techniques (dictation, controlled conversation), education-policy facts (Wood's Dispatch 1854), syllable counting, Bloom's taxonomy in language testing.</li>
  </ul>

  <h3>Mathematics (30Q: 24 content + 6 pedagogy)</h3>
  <ul>
    <li><strong>Content is NOT capped at Class 5 level</strong> — real questions include factorisation, algebraic identities, Euclid's postulates, polygon diagonals, mensuration, probability, statistics, ratio chains, profit/loss %, primes, Pythagorean triplets — solid Class 6–10 command expected of the teacher.</li>
    <li><strong>Pedagogy of Maths (6Q)</strong>: concrete-to-abstract aids (Cuisenaire rods, Tangram), symbol-introduction sequencing for Class 1–2, Bloom's taxonomy in maths, item-writing rules, textbook-philosophy quotes.</li>
  </ul>

  <h3>Environmental Studies (30Q: 24 content + 6 pedagogy)</h3>
  <p>The broadest section — genuinely interdisciplinary:</p>
  <ul>
    <li><strong>Physics</strong>: heat transfer, pressure, periscope mirrors, conductors/insulators.</li>
    <li><strong>Chemistry</strong>: metal/non-metal properties, solutions (isotonic/hypertonic/hypotonic), combustion pollutants.</li>
    <li><strong>Biology</strong>: symbiosis (lichens), cloning (Dolly the sheep), adaptation, food-testing experiments.</li>
    <li><strong>Agriculture</strong>: mulching, intercropping, sowing practices.</li>
    <li><strong>History</strong>: named battles (Tarain II), colonial policy (Doctrine of Lapse, Wood's Dispatch), social reformers (Savitribai Phule).</li>
    <li><strong>Geography &amp; civics</strong>: population density by state/census year, Mandal Tahsildar office functions, comparative religion facts.</li>
    <li><strong>Current-ish GK folded into EVS</strong>: e.g. end-year of a recent geopolitical event.</li>
    <li><strong>Pedagogy of EVS (6Q)</strong>: aims-vs-objectives, educationist quotes (Gandhiji, John Dewey, John Keats — matching quotes to names recurs), teaching methods matched to descriptions.</li>
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
  </ul>
  <p><strong>The only genuinely new-for-2026 risk area is current-events-style policy questions</strong> (NEP 2020 implementation updates, any newer NCF revision, newer digital-education schemes) — keep that one category freshly revised right up to your exam date. Everything else in this blueprint is stable.</p>
</div>
`;

const SOURCES_HTML = `
<div class="doc">
  <h1>Data provenance</h1>
  <p class="lede">Read this before trusting any question in this project.</p>

  <h2>What is verified-real (used in the scored mock tests)</h2>
  <p><strong>All 150 questions</strong> in the Full Mock Test are transcribed verbatim from the actual AP TET
  <strong>Paper 1A (SGT, Classes I–V), Urdu medium</strong>, conducted <strong>13 December 2025, Shift 1</strong>
  by the Commissionerate of School Education, Government of Andhra Pradesh.</p>
  <ul>
    <li>Source PDF: <a href="assets/SOURCE_2025_Dec13_Shift1_Paper1A_Urdu.pdf" target="_blank">SOURCE_2025_Dec13_Shift1_Paper1A_Urdu.pdf</a> — the official CBT question-paper-with-key export (correct answers were printed in green in the original, wrong options in red). Every answer key value used here was read directly off that colour-coding, not guessed.</li>
    <li>Retrieved via a third-party mirror (examrace.com) because the official government portal (aptet.apcfss.in) was returning HTTP 503 (server overload) at collection time — 5 August 2026, the first day of the AP TET 2026 exam window, when the official site is under heavy live-candidate load. That's a hosting/availability issue, not a content-authenticity issue — the PDF itself is the genuine CBT export.</li>
    <li><strong>Language-I (Urdu) questions are pure Urdu script in the original</strong> — no English version exists, since it's the language paper itself. These were hand-transcribed from the rendered PDF pages. Cursive Nastaliq script is genuinely hard to transcribe with 100% character-level certainty by eye. <strong>If you're relying on exact spelling/diacritics for serious study, cross-check against the source PDF.</strong> Everything else (English content, answer keys, the other 4 subjects) carries much lower transcription risk.</li>
  </ul>

  <h2>What is real but not in the scored engine</h2>
  <p>Two more genuine AP TET Paper 1 Urdu-medium papers were downloaded and read for pattern verification:</p>
  <ul>
    <li><a href="assets/SOURCE_2024_Oct13_Shift2_Paper1A_Urdu.pdf" target="_blank">SOURCE_2024_Oct13_Shift2_Paper1A_Urdu.pdf</a> — Paper 1A, Urdu medium, 13 Oct 2024 Shift 2.</li>
    <li><a href="assets/SOURCE_2024_Oct6_Shift1_Paper1_SGT_Urdu.pdf" target="_blank">SOURCE_2024_Oct6_Shift1_Paper1_SGT_Urdu.pdf</a> — Paper 1 SGT, Urdu medium, 6 Oct 2024 Shift 1.</li>
  </ul>
  <p>These exports do <strong>not</strong> have the colour-coded answer key baked in, and the separate official key PDFs could not be retrieved (government portal 503 throughout collection). Rather than guess correct answers and present them as verified, these two papers were used only to <strong>cross-check that the syllabus/topic pattern is stable year-over-year</strong> (confirmed — see the Blueprint page). Their questions are not loaded into the scored engine because they cannot be auto-scored without a verified key.</p>

  <h2>What is NOT in this project</h2>
  <p>No question anywhere in the scored mock tests was invented, paraphrased from memory, or reconstructed from a coaching-site summary. Every scored question traces to the single 2025 source PDF above.</p>

  <h2>Official pattern facts used in the Blueprint</h2>
  <p>Cross-verified across the official tet2dsc.apcfss.in portal (live-checked 5 Aug 2026) and the AP TET 2026 June notification, plus independent confirmation from Adda247, Testbook, Careerpower, Shiksha and the apteachers.in notification mirror. See the Blueprint page for the full fact table.</p>
</div>
`;
