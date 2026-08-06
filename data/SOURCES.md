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

## Mock Test 2 — `expert_predicted_2026.js` (150 Qs, 100% originally authored)

Deliberately **not** another transcribed past paper. A real sitting only
samples 30 questions per subject out of a much larger syllabus, so even a
second genuine past paper would still miss named, in-scope topics by chance.
Mock Test 2 was written to close that gap directly:

- Built from a topic checklist covering the **complete official syllabus**,
  subject by subject, in the same 5-section / 30-per-subject structure as the
  real exam — including the 8 confirmed gap topics (Carl Rogers, Metacognition,
  Skinner, Pavlov, Bandura, letter writing, degrees of comparison, question
  tags, Time & Work, averages).
- Every question matches the real exam's actual question *formats* observed
  across both real papers (theorist-quote attribution, matching pairs,
  "identify the incorrect statement", fill-in-the-blank grammar, word
  problems) — not invented formats.
- Every Maths answer was mechanically re-verified by running the arithmetic in
  Python, independent of the value written in the question.
- Urdu vocabulary was cross-checked against the verified real-paper
  terminology in Mock Test 1 wherever the same concept appears in both
  (اکتساب/learning, شخصیت/personality, مرحلہ/stage, etc.). A handful of terms
  not present in either real paper (e.g. "Zone of Proximal Development") have
  no verified official Urdu rendering to check against — disclosed, not
  glossed over.
- No per-question verbatim/authored split needed here (unlike Test 1) since
  the whole test is originally written — declared once, not per-question.

## Real papers kept for reference, not loaded as a scored test

- `assets/SOURCE_2024_Oct13_Shift2_Paper1A_Urdu.pdf` — Paper 1A, Urdu medium,
  13 Oct 2024, Shift 2.
- `assets/SOURCE_2024_Oct6_Shift1_Paper1_SGT_Urdu.pdf` — Paper 1 SGT, Urdu
  medium, 6 Oct 2024, Shift 1.

Both used to verify the topic pattern is stable year-over-year (confirmed).
Neither has a retrievable official key (government portal 503 throughout
collection), so neither is loaded into the scored engine. Their real value —
confirming the pattern is stable — is folded into the Blueprint page and into
how Mock Test 2 was designed.

## What is NOT in this project

No question anywhere in the site was invented, paraphrased from memory, or
reconstructed from a coaching-site summary **and presented as if it were a
real past question**. Every question is one of exactly two things, and the
data file + UI always say which: (1) verbatim from a real government PDF with
a verified key (Mock Test 1), or (2) original content explicitly built for
full syllabus coverage and labelled as such (Mock Test 2).

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
