/*
  COVERAGE SUPPLEMENT — not a real paper.
  Built from a topic-by-topic audit of the official AP TET Paper 1 syllabus against every
  question in both real papers (real_2025_dec.js + real_2024_oct13.js). These are the specific
  syllabus topics that are explicitly listed in the official syllabus but did not come up as the
  direct subject of any question in either real sitting sampled (named theorists sometimes
  appeared only as wrong-answer distractors, which is not the same as being tested).
  Every question here is original, written to test the exact gap identified — not a leaked or
  verbatim past question. Treat this as "make sure you also know this" insurance, not a third
  real exam.
*/
const COVERAGE_SUPPLEMENT = {
  meta: {
    purpose: "Targeted practice for official-syllabus topics not directly tested in either real paper sampled",
    method: "Topic-by-topic audit: official AP TET syllabus (SCERT) vs. all 300 real-paper questions",
    totalQuestions: 11
  },
  sections: [
    {
      key: "cdp_gap",
      title: "Child Development & Pedagogy — gap topics",
      count: 5,
      questions: [
        { n:1, en:"Carl Rogers' person-centred approach to education and therapy is built on which core condition?", opts:["Unconditional positive regard","Fixed reinforcement schedules","Zone of proximal development","Conservation of quantity"], ans:0, src:"authored", note:"Carl Rogers is named in the official CDP syllabus theorist list but does not appear as the subject of any question in either real paper sampled." },
        { n:2, en:"The awareness and conscious regulation of one's own thinking and learning process is called", opts:["Metacognition","Introspection","Cognition","Perception"], ans:0, src:"authored", note:"Metacognition is an explicit official-syllabus topic not directly tested in either real paper sampled." },
        { n:3, en:"Skinner's theory that behaviour is strengthened or weakened by the rewards and punishments that follow it is known as", opts:["Classical conditioning","Operant conditioning","Observational learning","Insight learning"], ans:1, src:"authored", note:"Skinner appears in the official syllabus and as a wrong-answer option in real papers, but never as the subject of a question." },
        { n:4, en:"Pavlov's experiment in which a dog learned to salivate at the sound of a bell paired with food demonstrates", opts:["Operant conditioning","Classical conditioning","Trial-and-error learning","Social learning"], ans:1, src:"authored", note:"Pavlov appears in the official syllabus theorist list but not as the direct subject of a question in either real paper sampled." },
        { n:5, en:"According to Bandura's Social Learning Theory, children acquire new behaviours mainly by", opts:["Trial and error","Direct reinforcement only","Observing and imitating a model","Sudden insight into the problem"], ans:2, src:"authored", note:"Bandura appears in the official syllabus and as a wrong-answer option in real papers, but never as the subject of a question." }
      ]
    },
    {
      key: "eng_gap",
      title: "English — gap topics",
      count: 3,
      questions: [
        { n:6, en:"In the standard block-format formal letter taught in Indian English textbooks, the sender's address is conventionally written", opts:["At the top right","At the top left","At the bottom left","After the signature"], ans:0, src:"authored", note:"Letter writing is explicitly named in the official Language-II syllabus; no letter-writing question appears in either real paper sampled." },
        { n:7, en:"Choose the correct degree of comparison: \"This is the ___ book I have ever read.\"", opts:["good","better","best","more good"], ans:2, src:"authored", note:"Degrees of comparison are an explicit official-syllabus grammar topic not directly tested in either real paper sampled." },
        { n:8, en:"Choose the correct question tag: \"She never comes late, ___?\"", opts:["does she","doesn't she","is she","isn't she"], ans:0, src:"authored", note:"Question tags are explicitly named in the official syllabus; not directly tested in either real paper sampled. (Never/no/nobody etc. take a positive tag.)" }
      ]
    },
    {
      key: "maths_gap",
      title: "Mathematics — gap topics",
      count: 3,
      questions: [
        { n:9, en:"A can complete a piece of work in 12 days and B can complete the same work in 24 days. Working together, in how many days will they complete it?", opts:["6 days","8 days","10 days","18 days"], ans:1, src:"authored", note:"Time & Work is a standard arithmetic topic under the official syllabus's 'Arithmetic' head; not directly tested in either real paper sampled." },
        { n:10, en:"The average (mean) of the first 5 even natural numbers is", opts:["5","6","7","8"], ans:1, src:"authored", note:"'Averages' is explicitly named in the official syllabus; median/mode appear in the real papers but not an explicit mean/average calculation." },
        { n:11, en:"Find the simple interest on ₹2000 for 3 years at 5% per annum.", opts:["₹200","₹250","₹300","₹350"], ans:2, src:"authored", note:"Confirms the Simple Interest topic already seen once in the 2024 real paper (Q100) with a second worked example, since it's a high-frequency arithmetic topic." }
      ]
    }
  ]
};
if (typeof module !== "undefined") module.exports = COVERAGE_SUPPLEMENT;
