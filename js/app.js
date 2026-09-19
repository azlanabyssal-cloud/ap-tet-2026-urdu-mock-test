/* AP TET 2026 Paper 1 (Urdu Medium) — Mock Test app
   Vanilla JS, no dependencies, works as a plain local file. */

(function(){
  "use strict";

  const APP = document.getElementById('app');

  const TESTS = [
    { id:"aug2026", data: REAL_AUG2026_URDU,
      label:"Mock Test 1 — Real AP TET 9 Aug 2026",
      tag:"Verbatim · Paper 1A Urdu medium · Shift 2, Set C",
      blurb:"The actual paper (150 questions) as candidates saw it, taken straight from the official Commissionerate of School Education CBT export. Every question is the original image and the answer key is the board's own — nothing re-typed. One question was dropped by the board and is given as a full mark, exactly as the board did." },
    { id:"dec2025", data: REAL_DEC2025_URDU,
      label:"Mock Test 2 — Real AP TET 13 Dec 2025",
      tag:"Verbatim · Paper 1A Urdu medium · Shift 1",
      blurb:"The previous sitting (150 questions), same treatment: original question images, official key. Useful for seeing how the paper changed between December 2025 and August 2026." }
  ];

  function hasUrdu(s){ return /[؀-ۿ]/.test(s||""); }

  function flattenQuestions(source){
    const out = [];
    source.sections.forEach(sec=>{
      sec.questions.forEach((q,i)=>{
        out.push({
          key: sec.key, sectionTitle: sec.title, indexInSection: i,
          n: q.n, img: q.img||null, dropped: !!q.dropped, en: q.en||null, ur: q.ur||null, opts: q.opts||[null,null,null,null], optsUr: q.optsUr||null, ans: (q.ans===undefined?null:q.ans),
          note: q.note||null, src: q.src||null
        });
      });
    });
    return out;
  }

  // ---------- app/test state ----------
  let state = null;
  let timerHandle = null;

  function secToClock(sec){
    sec = Math.max(0,Math.floor(sec));
    const h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), s = sec%60;
    return (h>0? String(h).padStart(2,'0')+':':'') + String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  }

  // ---------- fullscreen (real CBT exams run as a sealed, full-screen portal) ----------
  function tryEnterFullscreen(){
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if(!req) return;
    try{
      const p = req.call(el);
      if(p && typeof p.catch === 'function') p.catch(()=>{});
    }catch(e){ /* fullscreen not permitted in this context — fail silently, exam still usable */ }
  }
  function tryExitFullscreen(){
    const exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
    if(!exit) return;
    const isFs = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    if(!isFs) return;
    try{
      const p = exit.call(document);
      if(p && typeof p.catch === 'function') p.catch(()=>{});
    }catch(e){}
  }
  function isFullscreenActive(){
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
  }
  ['fullscreenchange','webkitfullscreenchange','msfullscreenchange'].forEach(ev=>{
    document.addEventListener(ev, ()=>{
      const warn = document.getElementById('fsWarn');
      if(!warn) return;
      warn.style.display = isFullscreenActive() ? 'none' : 'block';
    });
  });

  // ---------- router ----------
  function nav(view, params){
    if(timerHandle){ clearInterval(timerHandle); timerHandle=null; }
    window.scrollTo({top:0,behavior:'instant'});
    const examViews = (view==='instructions' || view==='exam' || view==='results');
    document.body.classList.toggle('examlock', examViews);
    if(!examViews) tryExitFullscreen();
    if(view==='home') return renderHome();
    if(view==='instructions') return renderInstructions(params);
    if(view==='exam') return renderExamShell();
    if(view==='results') return renderResults();
    if(view==='blueprint'){ APP.innerHTML = BLUEPRINT_HTML; return; }
    if(view==='sources'){ APP.innerHTML = SOURCES_HTML; return; }
  }
  document.addEventListener('click', e=>{
    const b = e.target.closest('[data-nav]');
    if(b){ nav(b.getAttribute('data-nav')); }
  });

  const CANDIDATE_PHOTO_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z"/></svg>`;

  // ================= HOME =================
  function renderHome(){
    const cards = TESTS.map(t=>{
      const total = t.data.sections.reduce((a,s)=>a+s.count,0);
      return `
        <div class="card">
          <span class="tag">${t.tag}</span>
          <h3>${t.label}</h3>
          <p>${t.blurb}</p>
          <button class="btn btn-primary" data-begin="${t.id}">Start ${t.label} →</button>
        </div>
      `;
    }).join('');

    APP.innerHTML = `
      <section class="hero">
        <h1>AP TET 2026 — Paper 1 Mock Tests <span class="urdu" style="font-size:1.3rem;display:block;margin-top:4px">اردو میڈیم</span></h1>
        <p class="sub">Full-length simulations of the real AP TET Paper 1A (Urdu medium) — Child Development &amp; Pedagogy, Language&#8209;I Urdu, Language&#8209;II English, Mathematics and Environmental Studies. Both tests are genuine government papers shown exactly as printed, with the board's own answer keys.</p>
        <div class="hero-stats">
          <div class="stat"><b>2</b><span>Full mock tests</span></div>
          <div class="stat"><b>300</b><span>Real questions</span></div>
          <div class="stat"><b>150</b><span>Minutes / test</span></div>
          <div class="stat"><b>0</b><span>Negative marking</span></div>
        </div>
        <div class="urgent-banner">Questions and keys come straight from the official CBT exports — see Sources for how every key was verified.</div>
      </section>

      <div class="cards">${cards}</div>

      <div class="cards">
        <div class="card">
          <span class="tag">Study first</span>
          <h3>Exam Blueprint</h3>
          <p>Section sizes, language layout and the dropped question, as read from the two real papers.</p>
          <button class="btn btn-ghost" data-nav="blueprint" style="width:fit-content">Read the Blueprint</button>
        </div>
        <div class="card">
          <span class="tag">Verify it yourself</span>
          <h3>Sources &amp; Verification</h3>
          <p>Both tests are the official papers, shown as printed. See how the answer keys were read and checked.</p>
          <button class="btn btn-ghost" data-nav="sources" style="width:fit-content">View Sources &amp; Verification</button>
        </div>
      </div>
    `;
    APP.querySelectorAll('[data-begin]').forEach(b=>{
      b.addEventListener('click', ()=> nav('instructions', b.getAttribute('data-begin')));
    });
  }

  // ================= PRE-EXAM INSTRUCTIONS =================
  function renderInstructions(testId){
    const test = TESTS.find(t=>t.id===testId);
    const qs = flattenQuestions(test.data);
    APP.innerHTML = `
      <div id="fsWarn" class="fs-warn" style="display:none">Not in full-screen mode — real CBT exams lock this. Click below to re-enter.</div>
      <div class="examchrome">
        <div class="examchrome-head">
          <div class="examid"><span class="sigil">AP</span><div><b>AP TET 2026</b> — Paper 1A, Urdu Medium<br><span style="opacity:.8;font-size:.82em">${test.label}</span></div></div>
          <div class="candidate-mini"><div class="candidate-photo" style="width:38px;height:46px">${CANDIDATE_PHOTO_SVG}</div><div>Candidate: <b>Guest Candidate</b></div></div>
        </div>
      </div>
      <div class="instr-wrap">
      <div class="doc" style="max-width:820px">
        <h1>General Instructions</h1>
        <ol class="instr-list">
          <li>The test contains <b>${qs.length} questions</b> for a total of <b>${qs.length} marks</b>. Time allotted is <b>${qs.length} minutes</b>. The clock starts the moment you click "I am ready, begin the test" below and will auto-submit your test when time expires.</li>
          <li>The question paper has ${test.data.sections.length} sections — ${test.data.sections.map(s=>`${s.title} (${s.questions.length})`).join(', ')}. Each question appears exactly as in the real exam (the original image), so the English/Urdu layout is authentic. Choose option 1–4 shown below the question.</li>
          ${(test.data.meta.dropped||[]).length ? `<li>Question ${test.data.meta.dropped.join(', ')} ${test.data.meta.dropped.length>1?'were':'was'} dropped by the board after the exam ("full marks awarded to all candidates") and is counted as correct for everyone, as the board did.</li>` : ''}
          <li>Every question is a Multiple Choice Question with 4 options, only one of which is correct. Click an option to select it.</li>
          <li><b>There is no negative marking.</b> Wrong and unattempted answers both score 0 — never a penalty. Attempt every question.</li>
          <li>Use <b>Save &amp; Next</b> to save your answer and move on, <b>Clear Response</b> to deselect your chosen option, and <b>Mark for Review &amp; Next</b> to flag a question to revisit — marked questions are still counted if answered.</li>
          <li>Navigate freely using the question palette on the right, or the section tabs at the top of the question — you do not have to answer in order.</li>
          <li>The palette colour legend:
            <div class="legend" style="margin:10px 0 0;display:grid;grid-template-columns:repeat(2,auto);gap:6px 22px">
              <div><span class="sw shield" style="background:var(--pal-notvisited)"></span>Not visited</div>
              <div><span class="sw shield" style="background:var(--pal-notanswered)"></span>Not answered</div>
              <div><span class="sw shield" style="background:var(--pal-answered)"></span>Answered</div>
              <div><span class="sw" style="background:var(--pal-marked);border-radius:50%"></span>Marked for review</div>
            </div>
          </li>
          <li>Click <b>Submit Test</b> at any time to end early, or let the timer reach zero for auto-submission. You'll see a summary of answered/unanswered/marked questions before final confirmation.</li>
          <li>Your score and a full answer review are shown immediately after submission.</li>
        </ol>
        <label class="instr-ack">
          <input type="checkbox" id="ackBox">
          I have read and understood the instructions above.
        </label>
        <p class="fs-note">Starting the test will switch your browser to full-screen, matching the real CBT. Leaving full-screen mid-test is flagged (as it would be in the real exam) but will not stop your test.</p>
        <div style="margin-top:12px;display:flex;gap:10px">
          <button class="btn btn-ghost" data-nav="home">← Back</button>
          <button class="btn btn-primary" id="beginBtn" disabled>I am ready, begin the test →</button>
        </div>
      </div>
      </div>
    `;
    document.getElementById('ackBox').addEventListener('change', e=>{
      document.getElementById('beginBtn').disabled = !e.target.checked;
    });
    document.getElementById('beginBtn').addEventListener('click', ()=>{
      tryEnterFullscreen();
      startTest(testId);
    });
  }

  // ---------- start a test ----------
  function startTest(testId){
    const test = TESTS.find(t=>t.id===testId);
    const qs = flattenQuestions(test.data);
    state = {
      testId, testLabel: test.label,
      questions: qs,
      current: 0,
      answers: new Array(qs.length).fill(null),
      visited: new Array(qs.length).fill(false),
      marked: new Array(qs.length).fill(false),
      draft: null, draftIndex: -1,
      totalSeconds: qs.length*60,
      submitted: false
    };
    nav('exam');
  }

  // ================= EXAM SHELL =================
  function renderExamShell(){
    if(!state){ return nav('home'); }
    APP.innerHTML = `
      <div id="fsWarn" class="fs-warn" style="display:none">Not in full-screen mode — real CBT exams lock this. <button class="linklike" style="color:#fff" id="fsReenter">Re-enter full-screen</button></div>
      <div class="examchrome">
        <div class="examchrome-head">
          <div class="examid"><span class="sigil">AP</span><div><b>AP TET 2026</b> — Paper 1A, Urdu Medium<br><span style="opacity:.8;font-size:.82em">${state.testLabel}</span></div></div>
          <div class="candidate-mini">Candidate: <b>Guest Candidate</b> &nbsp;|&nbsp; <span class="timer" id="timerBox">--:--</span></div>
        </div>
        <div class="sectiontabs" id="sectionTabs"></div>
      </div>
      <div class="testwrap">
        <div id="qpanelBox"></div>
        <div class="sidepanel">
          <div class="candidatebox">
            <div class="candidate-photo">${CANDIDATE_PHOTO_SVG}</div>
            <div><div class="cname">Guest Candidate</div><div class="croll">Roll No. — MOCK-0000</div></div>
          </div>
          <h4>Status summary</h4>
          <div id="statsBox" class="statsmini"></div>
          <div class="legend">
            <div><span class="sw shield" style="background:var(--pal-notvisited)"></span>Not visited</div>
            <div><span class="sw shield" style="background:var(--pal-notanswered)"></span>Not answered</div>
            <div><span class="sw shield" style="background:var(--pal-answered)"></span>Answered</div>
            <div><span class="sw" style="background:var(--pal-marked);border-radius:50%"></span>Marked for review</div>
            <div><span class="sw" style="background:var(--pal-marked);border-radius:50%;box-shadow:inset 0 0 0 2px #6ea034"></span>Answered &amp; Marked for review</div>
          </div>
          <h4>Question palette</h4>
          <div class="palette" id="paletteBox"></div>
          <button class="btn btn-examsubmit" style="width:100%" id="submitBtn">Submit Test</button>
        </div>
      </div>
    `;
    document.getElementById('submitBtn').addEventListener('click', openSubmitModal);
    const reenterBtn = document.getElementById('fsReenter');
    if(reenterBtn) reenterBtn.addEventListener('click', tryEnterFullscreen);
    startTimer();
    renderSectionTabs();
    renderQuestion();
    renderPalette();
    renderStats();
  }

  function uniqueSections(qs){
    const seen = new Set(), out=[];
    qs.forEach((q,i)=>{ if(!seen.has(q.key)){ seen.add(q.key); out.push({key:q.key,title:q.sectionTitle,firstIdx:i}); } });
    return out;
  }

  function startTimer(){
    const box = document.getElementById('timerBox');
    box.textContent = secToClock(state.totalSeconds);
    timerHandle = setInterval(()=>{
      state.totalSeconds--;
      box.textContent = secToClock(state.totalSeconds);
      box.classList.toggle('low', state.totalSeconds <= 300);
      if(state.totalSeconds<=0){ clearInterval(timerHandle); submitTest(true); }
    },1000);
  }

  function renderSectionTabs(){
    const box = document.getElementById('sectionTabs');
    const sections = uniqueSections(state.questions);
    const currentKey = state.questions[state.current].key;
    box.innerHTML = sections.map(s=>{
      const countAnswered = state.questions.filter((q,i)=>q.key===s.key && state.answers[i]!==null).length;
      const total = state.questions.filter(q=>q.key===s.key).length;
      return `<button class="stab ${s.key===currentKey?'active':''}" data-jumpsec="${s.firstIdx}">${s.title} <small>${countAnswered}/${total}</small></button>`;
    }).join('');
    box.querySelectorAll('[data-jumpsec]').forEach(b=>{
      b.addEventListener('click', ()=>{ state.current=parseInt(b.getAttribute('data-jumpsec'),10); refreshAll(); });
    });
  }

  function refreshAll(){ renderQuestion(); renderPalette(); renderSectionTabs(); renderStats(); }

  function renderStats(){
    const answered = state.answers.filter(a=>a!==null).length;
    const marked = state.marked.filter(Boolean).length;
    const answeredMarked = state.marked.filter((m,i)=>m && state.answers[i]!==null).length;
    const visitedNotAnswered = state.visited.filter((v,i)=>v && state.answers[i]===null && !state.marked[i]).length;
    const notVisited = state.questions.length - state.visited.filter(Boolean).length;
    document.getElementById('statsBox').innerHTML = `
      <div class="statrow"><span>Answered</span><b style="color:var(--good)">${answered}</b></div>
      <div class="statrow"><span>Not answered</span><b style="color:var(--bad)">${visitedNotAnswered}</b></div>
      <div class="statrow"><span>Marked for review</span><b style="color:var(--marked)">${marked-answeredMarked}</b></div>
      <div class="statrow"><span>Answered &amp; marked</span><b style="color:var(--answered-marked)">${answeredMarked}</b></div>
      <div class="statrow"><span>Not visited</span><b style="color:var(--notvisited)">${notVisited}</b></div>
    `;
  }

  // Real CBT behaviour (verified against the Digialm platform AP TET runs on): clicking an
  // option only stages a draft selection. It is NOT recorded as your answer — and is lost if
  // you navigate away — until you press Save & Next or Mark for Review & Next.
  function renderQuestion(){
    const i = state.current;
    const q = state.questions[i];
    state.visited[i] = true;
    if(state.draftIndex !== i){
      state.draft = state.answers[i];
      state.draftIndex = i;
    }
    const sectionTotal = state.questions.filter(x=>x.key===q.key).length;

    const optionsHtml = q.img ? [0,1,2,3].map(oi=>{ const selected = state.draft===oi; return `<label class="opt ${selected?'selected':''}" data-opt="${oi}"><input type="radio" name="opt" ${selected?'checked':''}><span class="opt-label">${oi+1}</span></label>`; }).join('') : q.opts.map((optText,oi)=>{
      const selected = state.draft===oi;
      const isUr = hasUrdu(optText);
      const urText = q.optsUr ? q.optsUr[oi] : null;
      return `
        <label class="opt ${selected?'selected':''}" data-opt="${oi}">
          <input type="radio" name="opt" ${selected?'checked':''}>
          <span class="opt-label">${oi+1}.</span>
          <span class="opt-text-wrap">
            <span class="${isUr?'urdu opt-ur':'opt-en'}">${optText}</span>
            ${urText ? `<span class="urdu opt-ur opt-ur-sub">${urText}</span>` : ''}
          </span>
        </label>
      `;
    }).join('');

    document.getElementById('qpanelBox').innerHTML = `
      <div class="qpanel">
        <div class="qmeta">
          <span class="badge">${q.sectionTitle} · Question No. ${q.indexInSection+1} of ${sectionTotal}</span>
          <span class="badge">Correct: +1 &nbsp;Wrong: 0</span>
          <span style="margin-left:auto;color:var(--marked);font-weight:700">${state.marked[i]?'Marked for review':''}</span>
        </div>
        ${q.img ? `<div class="qimgwrap"><img class="qimg" src="${q.img}" alt="Question ${q.n}"></div>` : ''}
        ${q.en ? `<div class="qtext">${q.en}</div>` : ''}
        ${q.ur ? `<div class="qtext-ur urdu">${q.ur}</div>` : ''}
        <div class="options ${q.img?'imgopts':''}">${optionsHtml}</div>
        <div class="navbtns">
          <div class="left">
            <button class="btn btn-examaction" id="prevBtn" ${i===0?'disabled':''}>← Previous</button>
          </div>
          <div class="right">
            <button class="btn btn-examaction" id="markBtn">Mark for Review &amp; Next</button>
            <button class="btn btn-examaction" id="clearBtn">Clear Response</button>
            <button class="btn btn-examnext" id="nextBtn">Save &amp; Next →</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('qpanelBox').querySelectorAll('[data-opt]').forEach(el=>{
      el.addEventListener('click',()=>{
        state.draft = parseInt(el.getAttribute('data-opt'),10);
        renderQuestion();
      });
    });
    document.getElementById('clearBtn').addEventListener('click',()=>{ state.draft=null; renderQuestion(); });
    document.getElementById('markBtn').addEventListener('click',()=>{
      state.answers[i] = state.draft;
      state.marked[i]=true;
      if(i<state.questions.length-1) state.current++;
      refreshAll();
    });
    document.getElementById('prevBtn').addEventListener('click',()=>{ if(i>0){ state.current--; refreshAll(); } });
    document.getElementById('nextBtn').addEventListener('click',()=>{
      state.answers[i] = state.draft;
      if(i<state.questions.length-1){ state.current++; refreshAll(); }
      else { openSubmitModal(); }
    });
  }

  function renderPalette(){
    const box = document.getElementById('paletteBox');
    box.innerHTML = state.questions.map((q,i)=>{
      const answered = state.answers[i]!==null;
      const marked = state.marked[i];
      let cls = 'notvisited';
      if(marked && answered) cls='answeredmarked';
      else if(marked) cls='marked';
      else if(answered) cls='answered';
      else if(state.visited[i]) cls='notanswered';
      if(i===state.current) cls+=' current';
      return `<button class="pnum ${cls}" data-jump="${i}">${i+1}</button>`;
    }).join('');
    box.querySelectorAll('[data-jump]').forEach(b=>{
      b.addEventListener('click',()=>{ state.current=parseInt(b.getAttribute('data-jump'),10); refreshAll(); });
    });
  }

  // ---------- submit modal ----------
  function openSubmitModal(){
    const answered = state.answers.filter(a=>a!==null).length;
    const marked = state.marked.filter(Boolean).length;
    const notAnswered = state.questions.length - answered;
    const sections = uniqueSections(state.questions);
    const rows = sections.map(s=>{
      const idxs = state.questions.map((q,i)=>q.key===s.key?i:-1).filter(i=>i>=0);
      const a = idxs.filter(i=>state.answers[i]!==null).length;
      return `<tr><td>${s.title}</td><td>${a}</td><td>${idxs.length-a}</td></tr>`;
    }).join('');

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal">
        <h3>Submit ${state.testLabel}?</h3>
        <p style="color:var(--ink-soft);margin-top:-6px">Once submitted you cannot change your answers.</p>
        <div class="scoreboard" style="margin:16px 0">
          <div class="scorebig"><b>${answered}</b><span>Answered</span></div>
          <div class="scorebig"><b>${notAnswered}</b><span>Not answered</span></div>
          <div class="scorebig"><b>${marked}</b><span>Marked</span></div>
        </div>
        <table class="factgrid"><tr><th>Section</th><th>Answered</th><th>Not answered</th></tr>${rows}</table>
        ${notAnswered>0 ? `<p style="color:var(--bad);font-weight:600;margin-top:14px">No negative marking — there's zero downside to guessing. Consider going back and attempting the remaining ${notAnswered}.</p>` : ''}
        <div style="display:flex;gap:10px;margin-top:20px">
          <button class="btn btn-ghost" id="modalCancel">← Go back to test</button>
          <button class="btn btn-accent" id="modalConfirm">Yes, submit final answers</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    document.getElementById('modalCancel').addEventListener('click', ()=> overlay.remove());
    document.getElementById('modalConfirm').addEventListener('click', ()=> { overlay.remove(); submitTest(false); });
  }

  function submitTest(auto){
    if(timerHandle) clearInterval(timerHandle);
    state.submitted = true;
    state.autoSubmitted = !!auto;
    tryExitFullscreen();
    nav('results');
  }

  // ================= RESULTS =================
  function renderResults(){
    if(!state || !state.submitted) return nav('home');
    const total = state.questions.length;
    let correct=0, incorrect=0, skipped=0;
    const perSection = {};
    uniqueSections(state.questions).forEach(s=> perSection[s.key] = {title:s.title,correct:0,total:0});

    state.questions.forEach((q,i)=>{
      perSection[q.key].total++;
      const a = state.answers[i];
      if(q.dropped){ correct++; perSection[q.key].correct++; return; }
      if(a===null) skipped++;
      else if(a===q.ans){ correct++; perSection[q.key].correct++; }
      else incorrect++;
    });
    const score = correct;

    const sectionRows = Object.values(perSection).map(p=>`<tr><td>${p.title}</td><td>${p.correct} / ${p.total}</td></tr>`).join('');

    const reviewHtml = state.questions.map((q,i)=>{
      const a = state.answers[i];
      const status = q.dropped ? 'correct' : (a===null ? 'skipped' : (a===q.ans ? 'correct' : 'incorrect'));
      const statusLabel = q.dropped ? 'Dropped by board — full mark awarded' : (status==='skipped' ? 'Not answered' : (status==='correct' ? 'Correct' : 'Incorrect'));
      const optionsHtml = q.img ? [0,1,2,3].map(oi=>{ let cls=''; if(oi===q.ans) cls='correct'; else if(oi===a && a!==q.ans && !q.dropped) cls='incorrect'; return `<div class="opt ${cls}"><span class="opt-label">${oi+1}</span></div>`; }).join('') : q.opts.map((optText,oi)=>{
        let cls='';
        if(oi===q.ans) cls='correct';
        else if(oi===a && a!==q.ans) cls='incorrect';
        const isUr = hasUrdu(optText);
        const urText = q.optsUr ? q.optsUr[oi] : null;
        return `<div class="opt ${cls}"><span class="opt-label">${oi+1}.</span><span class="opt-text-wrap"><span class="${isUr?'urdu opt-ur':'opt-en'}">${optText}</span>${urText ? `<span class="urdu opt-ur opt-ur-sub">${urText}</span>` : ''}</span></div>`;
      }).join('');
      return `
        <div class="reviewitem">
          <div class="qmeta">
            <span class="badge">Q${i+1} · ${q.sectionTitle}</span>
            <span class="status-pill ${status}">${statusLabel}</span>
            ${q.src==='authored' ? `<span class="status-pill" style="background:#eef2f6;color:#5a6b7a">Authored replacement</span>` : ''}
          </div>
          ${q.img ? `<div class="qimgwrap"><img class="qimg" src="${q.img}" alt="Question ${q.n}"></div>` : ''}
        ${q.en ? `<div class="qtext">${q.en}</div>` : ''}
          ${q.ur ? `<div class="qtext-ur urdu">${q.ur}</div>` : ''}
          <div class="options ${q.img?'imgopts':''}">${optionsHtml}</div>
          ${q.note ? `<p style="margin-top:10px;font-size:.78rem;color:var(--ink-soft)">ⓘ ${q.note}</p>` : ''}
        </div>
      `;
    }).join('');

    APP.innerHTML = `
      <div class="instr-wrap"><div style="max-width:900px;margin:0 auto">
      <h2 class="section-title" style="margin-top:0">${state.testLabel} — Results</h2>
      ${state.autoSubmitted ? `<p style="color:var(--bad);font-weight:600">Time ran out — your test was auto-submitted.</p>` : ''}
      <div class="scoreboard">
        <div class="scorebig"><b>${score} / ${total}</b><span>Score (no negative marking)</span></div>
        <div class="scorebig"><b>${correct}</b><span>Correct</span></div>
        <div class="scorebig"><b>${incorrect}</b><span>Incorrect</span></div>
        <div class="scorebig"><b>${skipped}</b><span>Skipped</span></div>
      </div>
      <table class="factgrid" style="max-width:500px;margin-bottom:26px"><tr><th>Section</th><th>Score</th></tr>${sectionRows}</table>
      <div style="display:flex;gap:10px;margin-bottom:28px;flex-wrap:wrap">
        <button class="btn btn-primary" data-nav="home">Back to Home</button>
        <button class="btn btn-ghost" id="retakeBtn">Retake ${state.testLabel}</button>
      </div>
      <h3 class="section-title" style="margin-top:0">Full Review</h3>
      ${reviewHtml}
      </div></div>
    `;
    document.getElementById('retakeBtn').addEventListener('click', ()=> startTest(state.testId));
  }

  // ---------- boot ----------
  nav('home');
})();
