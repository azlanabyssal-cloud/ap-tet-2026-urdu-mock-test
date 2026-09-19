// Static HTML for the Blueprint and Sources pages (plain strings, no build step).

const BLUEPRINT_HTML = `
<div class="doc">
  <h1>Paper 1A (Urdu Medium) — Exam Blueprint</h1>
  <p class="lede">Structure as it appears in the two real papers on this site (9 Aug 2026 and 13 Dec 2025). Nothing here is guessed: it is read from the papers themselves.</p>

  <h2>Paper structure</h2>
  <table>
    <tr><th>Section</th><th>Questions</th><th>Numbers</th></tr>
    <tr><td>Child Development &amp; Pedagogy</td><td>30</td><td>1–30</td></tr>
    <tr><td>Language I — Urdu</td><td>30</td><td>31–60</td></tr>
    <tr><td>Language II — English</td><td>30</td><td>61–90</td></tr>
    <tr><td>Mathematics</td><td>30</td><td>91–120</td></tr>
    <tr><td>Environmental Studies</td><td>30</td><td>121–150</td></tr>
  </table>
  <p>150 questions, 150 marks, 150 minutes, four options each, no negative marking. Both papers follow this exact layout.</p>

  <h2>How each section is shown</h2>
  <ul>
    <li>Child Development, Mathematics and EVS questions appear in English with the Urdu version alongside.</li>
    <li>The Urdu language section, including its pedagogy questions, is printed in Urdu only.</li>
    <li>The English language section is printed in English only.</li>
  </ul>

  <h2>Dropped questions</h2>
  <p>In the 9 Aug 2026 paper the board dropped Question 17 and awarded the mark to all candidates. This site does the same.</p>

  <h2>Preparing for the next sitting</h2>
  <p>The section sizes and the mix of topics repeated closely between the two papers, so past papers are the best guide to what the next paper will look like. Attempt both tests under timed conditions, then study the questions you got wrong or skipped in each section. Treat any claim about specific topics "certain to come" as a guess unless it can be traced to a paper.</p>
</div>
`;

const SOURCES_HTML = `
<div class="doc">
  <h1>Sources &amp; Verification</h1>
  <p class="lede">Both tests are the official papers, not re-typed copies.</p>

  <h2>What is used</h2>
  <ul>
    <li><b>Mock Test 1</b> — official CBT export of AP TET Paper 1A, Urdu medium, 9 Aug 2026, Shift 2, Set C.</li>
    <li><b>Mock Test 2</b> — official CBT export of AP TET Paper 1A, Urdu medium, 13 Dec 2025.</li>
  </ul>
  <p>The original 9 Aug PDF is included in the repository (<a href="assets/SOURCE_2026_Aug09_Shift2_SetC_Urdu.pdf">open</a>).</p>

  <h2>How the questions and keys were extracted</h2>
  <ul>
    <li>Each question in the official PDF is a single embedded image containing the English and Urdu text. The site shows that image unchanged, so no wording, script or numbering can be mistyped.</li>
    <li>The answer key is machine-read from the PDF: each option carries either a tick or a cross icon, and the tick position is the correct option.</li>
    <li>Every question was checked to have exactly four options and exactly one tick; any question that did not (such as the dropped one) was reviewed by hand.</li>
    <li>Keys were cross-checked against the same set in other language versions of the exam, and against an earlier transcription of the December paper (which exposed three wrong keys there, since replaced).</li>
  </ul>

  <h2>Limits</h2>
  <ul>
    <li>Question images are shown as printed in the export, so their size and sharpness are those of the source.</li>
    <li>This site is not affiliated with the Government of Andhra Pradesh or the exam conducting body.</li>
  </ul>
</div>
`;
