# Data provenance — read this before trusting any question in this project

This file is kept in sync with what's actually loaded in the site. If something
here disagrees with `index.html` / `js/app.js`, the code is the source of truth
and this file has a bug — please flag it.

## Mock Test 1 — `real_2025_dec.js` (150 Qs, fully real, fully key-verified)

All 150 questions, verbatim, from the actual AP TET **Paper 1A (SGT, Classes
I–V), Urdu medium**, conducted **13 December 2025, Shift 1** by the
Commissionerate of School Education, Government of Andhra Pradesh.

- Source file: `assets/SOURCE_2025_Dec13_Shift1_Paper1A_Urdu.pdf` — the official
  CBT question-paper-with-key export (correct answers printed in green in the
  original, wrong options in red). Every `ans` value in `real_2025_dec.js` was
  read directly off that colour-coding, not guessed or researched.
- Retrieved via a third-party mirror (examrace.com → cdn.mindspritesolutions.com)
  because the official government portal (aptet.apcfss.in) was returning
  HTTP 503 (server overload) at collection time — 5 August 2026, the first day
  of the AP TET 2026 exam window. Hosting/availability issue, not a
  content-authenticity issue — the PDF itself is the genuine CBT export.
- **Language-I (Urdu) questions are pure Urdu script in the original** (it's
  the language paper itself, no English original exists). Hand-transcribed
  from the rendered PDF at up to 400 DPI. Two genuine transcription slips were
  found and fixed during a full re-verification pass (Q34: a duplicated option
  corrected to the actual source word "ریختہ"; several Maths questions were
  missing their Urdu translation entirely and have been filled in from the
  source). One item (Q146) has two textually identical options **in the real
  source PDF itself** — verified at 400 DPI, not a transcription error here,
  left as-is and flagged with a `note`.
- If you are relying on exact spelling/diacritics for serious study, cross-check
  against the source PDF in `assets/` — that's what it's there for.

## Mock Test 2 — `real_2024_oct13.js` (150 Qs, 134 verbatim + 16 authored)

From the real **Paper 1A, Urdu medium, 13 October 2024, Shift 2** sitting.

- Source file: `assets/SOURCE_2024_Oct13_Shift2_Paper1A_Urdu.pdf` — a genuine
  CBT export, but a **plain question paper**, not a question-paper-with-key
  export (no colour-coded answers). The separate official key PDF could not be
  retrieved (government portal 503 throughout collection).
- **134 questions**: verbatim question/option text from the real PDF, with the
  correct answer independently determined through subject-matter verification
  (each cross-checked against standard reference facts — e.g. Ebbinghaus wrote
  "On Memory", Samuel Kirk coined "learning disability", LCM(15,21)=105 — not
  guessed).
- **16 questions**: the source paper's actual text was ambiguous, underspecified,
  or not independently verifiable with confidence (e.g. a garbled OCR-adjacent
  option, or a fact with no authoritative single answer). Rather than present a
  possibly-wrong answer as verified, these were swapped for an original,
  unambiguous question on the *same topic* — marked `src:"authored"` in the
  data file and flagged with a `note` explaining the swap. The results/review
  screen shows an "Authored replacement" badge on these so it's never silently
  presented as verbatim.

## Coverage Gap-Fill Drill — `coverage_supplement.js` (11 Qs, 100% original)

Not a real paper — an insurance drill. Built by auditing the **official AP TET
syllabus, topic by topic**, against every question in both real papers above,
looking for syllabus topics that are explicitly in scope for 2026 but didn't
happen to come up as the *direct subject* of a question in either real sitting
sampled (a theorist named only as a wrong-answer distractor doesn't count as
"tested"). Findings:

- **CDP**: Carl Rogers, Metacognition, and Skinner/Pavlov/Bandura (named in the
  official syllabus, appeared only as distractors in the real papers).
- **English**: letter-writing format, degrees of comparison, question tags.
- **Maths**: Time & Work, and an explicit average/mean calculation.

All 11 questions here are original, written to test exactly the gap identified,
and marked `src:"authored"` with a `note` on every single one explaining which
syllabus gap it targets. Never presented as a leaked or verbatim past question.

## Reference-only, not loaded into any scored test

- `assets/SOURCE_2024_Oct6_Shift1_Paper1_SGT_Urdu.pdf` — a third genuine AP TET
  Paper 1 Urdu-medium paper (SGT, 6 Oct 2024, Shift 1), used only to
  cross-check that the topic pattern is stable year-over-year (confirmed —
  same CDP theorist roster, same Urdu-grammar/literature question style, same
  Maths/EVS pedagogy-question format). Not loaded into the site because, like
  Mock Test 2's source, it has no retrievable answer key and a second
  "134-verbatim-plus-authored" test wasn't judged worth the added transcription
  risk once the gap-fill drill covered the syllabus-breadth concern more
  precisely.

## What is NOT in this project

No question anywhere in the site was invented, paraphrased from memory, or
reconstructed from a coaching-site summary **and presented as if it were a
real past question**. Every question is one of exactly three things, and the
data file + UI always say which: (1) verbatim from a real government PDF with
a verified key, (2) verbatim question text from a real government PDF with an
independently-verified answer, both clearly labelled, or (3) original content
explicitly marked `authored` with a note explaining why it exists.

## Official pattern facts used in `SYLLABUS_BLUEPRINT.md`

Cross-verified across the official tet2dsc.apcfss.in portal (live-checked
5 Aug 2026), the AP TET 2026 June notification, and independent confirmation
from Adda247, Testbook, Careerpower, Shiksha and the apteachers.in mirror:

- Exam: AP TET 2026, notified 5 June 2026, conducted 5–21 August 2026, CBT mode.
- Paper 1A/1B, 150 MCQs / 150 marks / 150 minutes, no negative marking.
- 5 sections × 30 marks: Child Development & Pedagogy, Language I (optional —
  Telugu/Urdu/Hindi/Kannada/Tamil/Odiya), Language II (English, compulsory),
  Mathematics, Environmental Studies.
- Language I and Language II each split 24 content + 6 pedagogy-of-language.
- Question paper is bilingual: English followed by the candidate's chosen
  Language-I medium — confirmed directly by the structure of the real 2025 PDF.
- The exam runs on the **Digialm** CBT platform (confirmed by intercepting the
  actual `window.open()` call from the official tet2dsc.apcfss.in mock-test
  link, which resolves to `cdn3.digialm.com`) — this is the basis for the
  question-palette shapes/colours (shield badge for not-visited/not-answered/
  answered, circle for marked-for-review states) and the "Save & Next persists,
  navigating away without saving discards your selection" behaviour, both
  matched against Digialm's own public instructions-preview page
  (ssc.digialm.com), not guessed.
