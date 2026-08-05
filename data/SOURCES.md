# Data provenance — read this before trusting any question in this project

## What is verified-real (used in the scored mock tests)

**`real_2025_dec.js`** — all 150 questions, verbatim, from the actual AP TET
**Paper 1A (SGT, Classes I–V), Urdu medium**, conducted **13 December 2025, Shift 1**
by the Commissionerate of School Education, Government of Andhra Pradesh.

- Source file kept at `assets/SOURCE_2025_Dec13_Shift1_Paper1A_Urdu.pdf` — this is
  the official CBT question-paper-with-key export (correct answers were printed
  in green in the original; wrong options in red). Every answer key value in
  `real_2025_dec.js` was read directly off that colour-coding, not guessed.
- Retrieved via a third-party mirror (examrace.com → cdn.mindspritesolutions.com)
  because the official government portal (aptet.apcfss.in) was returning
  HTTP 503 (server overload) at the time of collection — 5 August 2026, the
  first day of the AP TET 2026 exam window, when the official site is under
  heavy live-candidate load. This is a hosting/availability issue, not a
  content-authenticity issue — the PDF itself is the genuine CBT export.
- **Language-I (Urdu) questions (Q31–60) are pure Urdu script in the original**
  (no English original exists — it's the language paper itself). These were
  hand-transcribed from the rendered PDF pages. Nastaliq/cursive Urdu script is
  genuinely hard to transcribe with 100% character-level certainty by eye.
  **If you are relying on exact spelling/diacritics for serious study
  (especially the imla/spelling and grammar questions), cross-check against
  the source PDF included in `assets/`.** Everything else (English content,
  answer keys, all other 4 subjects) carries much lower transcription risk.

## What is real but NOT in the scored engine

Two more genuine AP TET Paper 1 Urdu-medium papers were downloaded and partially
read for pattern verification, kept in `assets/` for reference:

- `SOURCE_2024_Oct13_Shift2_Paper1A_Urdu.pdf` — Paper 1A, Urdu medium, 13 Oct 2024
  Shift 2 (same exam cycle, different shift/session from the 2025 paper).
- `SOURCE_2024_Oct6_Shift1_Paper1_SGT_Urdu.pdf` — Paper 1 SGT, Urdu medium,
  6 Oct 2024 Shift 1.

These exports do **not** have the colour-coded answer key baked in (a plain
question-paper export, not a question-paper-with-key export), and the separate
official key PDFs could not be retrieved (government portal 503 throughout
collection). Rather than guess correct answers and present them as verified,
**these two papers were used only to cross-check that the syllabus/topic
pattern is stable year-over-year** (confirmed — same CDP theorists, same
Urdu-grammar and Urdu-literature question style, same Mathematics/EVS
pedagogy-question format) — see `SYLLABUS_BLUEPRINT.md`. Their questions are
not loaded into the mock-test engine because they cannot be auto-scored
without a verified key.

## What is NOT in this project

No question anywhere in the scored mock tests was invented, paraphrased from
memory, or reconstructed from a coaching-site summary. Every scored question
traces to the single 2025 source PDF above. If a future update adds more
years, the same standard applies: real PDF with a verifiable key, or it goes
in "reference only," not into the scored engine.

## Official pattern facts used in `SYLLABUS_BLUEPRINT.md`

Cross-verified across the official tet2dsc.apcfss.in portal (live-checked
5 Aug 2026) and the AP TET 2026 June notification, plus independent
confirmation from Adda247, Testbook, Careerpower, Shiksha and the
apteachers.in notification mirror:

- Exam: AP TET 2026, notified 5 June 2026, conducted 5–21 August 2026, CBT mode.
- Paper 1A/1B, 150 MCQs / 150 marks / 150 minutes, no negative marking.
- 5 sections × 30 marks: Child Development & Pedagogy, Language I (optional —
  Telugu/Urdu/Hindi/Kannada/Tamil/Odiya), Language II (English, compulsory),
  Mathematics, Environmental Studies.
- Language I and Language II each split 24 content + 6 pedagogy-of-language.
- Question paper is bilingual: English followed by the candidate's chosen
  Language-I medium — confirmed directly by the structure of the real 2025 PDF.
