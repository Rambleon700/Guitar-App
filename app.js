// ===== DATA =====
const chords = {
  Em: {
    name: "Em",
    diagram: `e|---0---
B|---0---
G|---0---
D|---2---
A|---2---
E|---0---`,
    fingers: "2nd & 3rd finger on A & D strings (2nd fret)",
    tip: "Easiest chord. Two fingers only."
  },
  G: {
    name: "G",
    diagram: `e|---3---
B|---0---
G|---0---
D|---0---
A|---2---
E|---3---`,
    fingers: "2nd on A2, 3rd on E3, 4th on e3 (or 3rd on e3)",
    tip: "Keep the middle finger ready for quick C changes."
  },
  C: {
    name: "C",
    diagram: `e|---0---
B|---1---
G|---0---
D|---2---
A|---3---
E|---x---`,
    fingers: "1st on B1, 2nd on D2, 3rd on A3",
    tip: "Mute the low E string with the side of your 3rd finger."
  },
  D: {
    name: "D",
    diagram: `e|---2---
B|---3---
G|---2---
D|---0---
A|---x---
E|---x---`,
    fingers: "1st on G2, 2nd on e2, 3rd on B3",
    tip: "Triangle shape. Only strum the top 4 strings."
  },
  Am: {
    name: "Am",
    diagram: `e|---0---
B|---1---
G|---2---
D|---2---
A|---0---
E|---x---`,
    fingers: "1st on B1, 2nd on D2, 3rd on G2",
    tip: "Same shape as E major, just moved over one string."
  },
  A: {
    name: "A",
    diagram: `e|---0---
B|---2---
G|---2---
D|---2---
A|---0---
E|---x---`,
    fingers: "1st, 2nd, 3rd on D/G/B (2nd fret) — or barre lightly",
    tip: "Many beginners use one finger across the three strings."
  },
  E: {
    name: "E",
    diagram: `e|---0---
B|---0---
G|---1---
D|---2---
A|---2---
E|---0---`,
    fingers: "1st on G1, 2nd on A2, 3rd on D2",
    tip: "Foundation of many blues and rock riffs."
  },
  Dsus2: {
    name: "Dsus2 / D6",
    diagram: `e|---0---
B|---3---
G|---2---
D|---0---
A|---x---
E|---x---`,
    fingers: "1st on G2, 3rd on B3 (or just 2nd finger on G2)",
    tip: "Used in Horse With No Name. Very close to Em shape."
  },
  F: {
    name: "F",
    diagram: `e|---1---
B|---1---
G|---2---
D|---3---
A|---3---
E|---1---`,
    fingers: "1st barre 1st fret, 2nd on G2, 3rd on A3, 4th on D3",
    tip: "Harder barre chord. Beginners can play Fmaj7 (xx3210) instead."
  },
  Dm: {
    name: "Dm",
    diagram: `e|---1---
B|---3---
G|---2---
D|---0---
A|---x---
E|---x---`,
    fingers: "1st on e1, 2nd on G2, 3rd on B3",
    tip: "Like a D shape shifted. Only strum top 4 strings."
  },
  G7: {
    name: "G7",
    diagram: `e|---1---
B|---0---
G|---0---
D|---0---
A|---2---
E|---3---`,
    fingers: "1st on e1, 2nd on A2, 3rd on E3",
    tip: "Like G but with 1st finger on high E string 1st fret."
  },
  Fmaj7: {
    name: "Fmaj7",
    diagram: `e|---0---
B|---1---
G|---2---
D|---3---
A|---x---
E|---x---`,
    fingers: "1st on B1, 2nd on G2, 3rd on D3",
    tip: "Easy alternative to full F. Great for ballads."
  },
  A7: {
    name: "A7",
    diagram: `e|---0---
B|---2---
G|---0---
D|---2---
A|---0---
E|---x---`,
    fingers: "1st on D2, 2nd on B2",
    tip: "Like A but lift the finger off the G string."
  },
  D7: {
    name: "D7",
    diagram: `e|---2---
B|---1---
G|---2---
D|---0---
A|---x---
E|---x---`,
    fingers: "1st on B1, 2nd on G2, 3rd on e2",
    tip: "Like D, but 1st finger on B string 1st fret."
  },
  Gsus4: {
    name: "Gsus4",
    diagram: `e|---3---
B|---1---
G|---0---
D|---0---
A|---2---
E|---3---`,
    fingers: "1st on B1, 2nd on A2, 3rd/4th on E3 and e3",
    tip: "Like G with extra finger on B1. Resolves to G."
  }
};

const patterns = [
  {
    id: "all-down",
    name: "All Downstrokes",
    short: "D D D D",
    sequence: ["D", "D", "D", "D"],
    counts: "1  2  3  4",
    description: "The foundation. One downstroke on every beat. Perfect for absolute beginners and slow songs.",
    songs: "Knockin' on Heaven's Door, Horse With No Name (simple version)"
  },
  {
    id: "down-up",
    name: "Steady Eighths",
    short: "D U D U D U D U",
    sequence: ["D", "U", "D", "U", "D", "U", "D", "U"],
    counts: "1 & 2 & 3 & 4 &",
    description: "Down on the number, up on the '&'. Keep the hand moving evenly like a pendulum.",
    songs: "Many folk & pop songs"
  },
  {
    id: "classic",
    name: "The Classic Pop Pattern",
    short: "D D U U D U",
    sequence: ["D", "D", "U", "U", "D", "U"],
    counts: "1  2 &  & 3 &",
    description: "The most useful beginner pattern. Skip the down on beat 3 — hand still swings past.",
    songs: "Wild Thing, Brown Eyed Girl, countless campfire songs"
  },
  {
    id: "folk",
    name: "Folk / Singer-Songwriter",
    short: "D D U  U D U",
    sequence: ["D", "D", "U", "R", "U", "D", "U"],
    counts: "1  2 & (3) & 4 &",
    description: "Slight variation of the classic. Feels natural for acoustic ballads.",
    songs: "Many acoustic covers"
  }
];

const songs = [
  {
    id: "horse",
    title: "Horse With No Name",
    artist: "America",
    chords: ["Em", "Dsus2"],
    chordCount: 2,
    difficulty: 1,
    patternId: "all-down",
    patternNote: "Simple: 4 downstrokes per chord (or steady DDUUDU once comfortable)",
    progression: "Em – Dsus2 – Em – Dsus2 (repeat)",
    tips: "The two shapes are almost identical — just move two fingers slightly. Great first song. Em = 022000, Dsus2 ≈ xx0230 or xx0200.",
    why: "Only two easy shapes and almost no hand movement between them."
  },
  {
    id: "knockin",
    title: "Knockin' on Heaven's Door",
    artist: "Bob Dylan",
    chords: ["G", "D", "Am", "C"],
    chordCount: 4,
    difficulty: 2,
    patternId: "all-down",
    patternNote: "Start with all downstrokes. Later try the classic DDUUDU.",
    progression: "G – D – Am – Am | G – D – C – C (repeat)",
    tips: "Changes are slow. Focus on clean switches from G→D and D→Am. You can omit the C and just loop G-D-Am at first.",
    why: "Slow tempo, open chords, extremely recognizable."
  },
  {
    id: "wild",
    title: "Wild Thing",
    artist: "The Troggs",
    chords: ["A", "D", "E"],
    chordCount: 3,
    difficulty: 2,
    patternId: "classic",
    patternNote: "D D U U D U works perfectly.",
    progression: "A – D – E – D (repeat throughout)",
    tips: "These three chords sit right next to each other. Practice the A→D→E cycle until smooth.",
    why: "Three of the easiest open chords in a simple looping progression."
  },
  {
    id: "stand",
    title: "Stand By Me",
    artist: "Ben E. King",
    chords: ["G", "Em", "C", "D"],
    chordCount: 4,
    difficulty: 2,
    patternId: "all-down",
    patternNote: "Start simple with downs. Later add the classic pattern.",
    progression: "G – Em – C – D (the classic I–vi–IV–V)",
    tips: "This progression appears in dozens of songs. Learning it here unlocks many others. Optional capo on 2nd fret for original key.",
    why: "One of the most common chord progressions in popular music."
  },
  {
    id: "three",
    title: "Three Little Birds",
    artist: "Bob Marley",
    chords: ["A", "D", "E"],
    chordCount: 3,
    difficulty: 2,
    patternId: "down-up",
    patternNote: "Light, relaxed down-up or classic pattern. Feel the reggae bounce.",
    progression: "A – A – D – E (or similar simple loop)",
    tips: "Keep the strums light and bouncy. Don't dig into the strings hard.",
    why: "Happy, positive song with the same three easy chords as Wild Thing."
  },
  {
    id: "badmoon",
    title: "Bad Moon Rising",
    artist: "Creedence Clearwater Revival",
    chords: ["D", "A", "G"],
    chordCount: 3,
    difficulty: 2,
    patternId: "classic",
    patternNote: "Classic DDUUDU fits great.",
    progression: "D – A – G – D (and variations)",
    tips: "Fast-ish tempo once ready, but start slow. Great for practicing the D-A-G family.",
    why: "Upbeat classic that still uses only three open chords."
  },
  {
    id: "lovedo",
    title: "Love Me Do",
    artist: "The Beatles",
    chords: ["G", "C"],
    chordCount: 2,
    difficulty: 1,
    patternId: "all-down",
    patternNote: "Two strums per chord or simple downs.",
    progression: "G – C – G – C (verses)",
    tips: "Excellent for practicing the G↔C change, which many beginners find tricky at first.",
    why: "Only two chords and a famous melody everyone knows."
  },
  {
    id: "happy",
    title: "Happy Birthday",
    artist: "Traditional",
    chords: ["G", "D", "C"],
    chordCount: 3,
    difficulty: 1,
    patternId: "all-down",
    patternNote: "Simple downstrokes matching the melody rhythm.",
    progression: "G – D – G – C – G – D – G (approx.)",
    tips: "Sing along while you play. Great for parties and building confidence.",
    why: "Everyone knows it — instant gratification when you play it for friends."
  },
  {
    id: "something",
    title: "Something in the Way",
    artist: "Nirvana",
    chords: ["Em", "C"],
    chordCount: 2,
    difficulty: 1,
    patternId: "all-down",
    patternNote: "Very slow downstrokes. One or two strums per chord.",
    progression: "Em – C – Em – C (repeat)",
    tips: "Extremely slow tempo gives you lots of time to switch. Perfect for building clean Em and C.",
    why: "Two chords, glacial tempo, iconic song."
  },
  {
    id: "whatsup",
    title: "What's Up?",
    artist: "4 Non Blondes",
    chords: ["A", "Bm", "D", "G"],
    chordCount: 4,
    difficulty: 3,
    patternId: "classic",
    patternNote: "Classic pattern or steady eighths.",
    progression: "A – Bm – D – G (main progression)",
    tips: "Bm is a barre chord (or use a simplified version). Optional — skip until comfortable with open chords. Many play it with open shapes + capo.",
    why: "Huge sing-along energy. Learn the open version first if Bm is hard."
  },
  {
    id: "lochlomond",
    title: "Loch Lomond",
    artist: "Runrig / Traditional",
    chords: ["G", "Em", "Am", "D", "C"],
    chordCount: 5,
    difficulty: 1,
    patternId: "all-down",
    patternNote: "Simple downstrokes or gentle folk pattern. Keep it slow and steady.",
    progression: "Verse: G – Em – Am – D | G – Em – C – D | C – Em – C – D | G – C – D – G  •  Chorus: G – Em – C – D (repeat)",
    tips: "Absolute beginner friendly. All open chords. Practice the chorus loop first — it's the most memorable part. Slow tempo gives plenty of time to switch.",
    why: "Marked absolute beginner. Beautiful Scottish traditional song with only open chords and a clear, repeating structure."
  },
  {
    id: "loveofmylife",
    title: "Love of My Life",
    artist: "Queen",
    chords: ["G", "Em", "Am", "D", "C", "G7", "Fmaj7", "F", "Dm"],
    chordCount: 9,
    difficulty: 3,
    patternId: "folk",
    patternNote: "Soft fingerpicking or gentle downstrokes. Capo on 5th fret (or 6th for original feel).",
    progression: "Intro: G – Em – Am – D – G – G7 – C  •  Verse: G – Em – Am – D – G – G7 – C  •  Chorus: Am – Em – Fmaj7 – C – F – Em – Am – Dm – G – C",
    tips: "Intermediate. Use capo 5. Fmaj7 is easier than full F for the chorus. Take the song section by section — verse is simpler than the chorus. Optional: skip C#dim and Fm until comfortable.",
    why: "Gorgeous acoustic ballad. Capo makes the shapes easier. Great once you know G, Em, Am, C, D solidly."
  },
  {
    id: "fixyou",
    title: "Fix You",
    artist: "Coldplay",
    chords: ["C", "Em", "Am", "G", "F", "Gsus4"],
    chordCount: 6,
    difficulty: 2,
    patternId: "down-up",
    patternNote: "Official pattern ~68 bpm: D U D U  D U D U (gentle). Capo on 3rd fret.",
    progression: "Intro/Verse: C – Em – Am – G  •  Chorus: F – C – Gsus4 – G  •  Bridge: C – F – C – G – Am – F – C – G",
    tips: "Capo 3. Verse uses only C, Em, Am, G — very beginner-friendly. Chorus adds F and Gsus4. C/E can be played as a normal C. Slow and emotional.",
    why: "Huge sing-along. Most of the song is four easy open chords. Capo keeps everything in open shapes."
  },
  {
    id: "wonderfultonight",
    title: "Wonderful Tonight",
    artist: "Eric Clapton",
    chords: ["G", "D", "C", "Em", "Am"],
    chordCount: 5,
    difficulty: 2,
    patternId: "folk",
    patternNote: "Gentle folk/down-up feel, or simple fingerpicking. Slow tempo (~70–80 bpm).",
    progression: "Verse: G – D – C – G  /  Em – C – D – G  •  Chorus similar with Am",
    tips: "Classic easy acoustic song. Focus on smooth G–D–C changes. The famous intro riff can wait — chords alone sound great. Let chords ring.",
    why: "Beautiful slow ballad that uses the core beginner open chords. Perfect for practicing clean changes at a relaxed pace."
  },
  {
    id: "scotlandthebrave",
    title: "Scotland the Brave",
    artist: "The Corries / Traditional",
    chords: ["G", "C", "D", "Em", "A7", "D7"],
    chordCount: 6,
    difficulty: 2,
    patternId: "all-down",
    patternNote: "Strong, proud downstrokes or march-like feel. Capo on 5th fret (optional).",
    progression: "Verse: G – G – C – G – D – G – G – C – G – D – G  •  Chorus: D – G – Em – D – A7 – D7 – G – G – C – G – D – G",
    tips: "Beginner-friendly Scottish anthem. Capo 5 if you want the recorded key. A7 and D7 are only a small change from A and D. Great for building confidence.",
    why: "Marked beginner. Open chords, clear structure, and a tune everyone recognizes."
  },
  {
    id: "stillinlove",
    title: "Still in Love with You",
    artist: "Thin Lizzy",
    chords: ["Am", "Dm", "G", "C", "F", "E"],
    chordCount: 6,
    difficulty: 2,
    patternId: "folk",
    patternNote: "Gentle ballad strumming or light fingerpicking.",
    progression: "Verse: Am – Dm – G – C  (repeat)  •  Ends lines with F  •  Later: Am – Dm – G – C – F",
    tips: "Mostly Am–Dm–G–C loop — one of the most useful progressions. F appears at phrase ends. E is used sparingly in the outro. Slow and emotional.",
    why: "Beautiful beginner ballad. The Am–Dm–G–C cycle is excellent practice and appears in many other songs."
  }
];

// ===== STATE =====
let currentFilter = "all";
let practiceInterval = null;
let practiceBeat = 0;
let practiceStep = 0;
let isPlaying = false;
let currentPracticeItem = null;

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderSongs();
  renderChords();
  renderPatterns();
  setupNav();
  setupFilters();
  setupPractice();
  setupModal();
});

// ===== NAV =====
function setupNav() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.section).classList.add("active");
    });
  });
}

// ===== SONGS =====
function renderSongs() {
  const grid = document.getElementById("songs-grid");
  const filtered = currentFilter === "all"
    ? songs
    : songs.filter(s => {
        if (currentFilter === "2") return s.chordCount === 2;
        if (currentFilter === "3") return s.chordCount === 3;
        if (currentFilter === "4") return s.chordCount >= 4;
        return true;
      });

  grid.innerHTML = filtered.map(song => `
    <article class="song-card" data-id="${song.id}">
      <span class="difficulty">${"★".repeat(song.difficulty)}${"☆".repeat(3 - song.difficulty)}</span>
      <h3>${song.title}</h3>
      <p class="artist">${song.artist}</p>
      <div class="chords-preview">
        ${song.chords.map(c => `<span class="chord-tag">${c}</span>`).join("")}
      </div>
      <p class="meta">${song.chordCount} chords • ${patterns.find(p => p.id === song.patternId)?.name || "Simple"}</p>
    </article>
  `).join("");

  grid.querySelectorAll(".song-card").forEach(card => {
    card.addEventListener("click", () => openSongModal(card.dataset.id));
  });
}

function setupFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderSongs();
    });
  });
}

// ===== CHORDS =====
function renderChords() {
  const grid = document.getElementById("chords-grid");
  const order = ["Em", "G", "C", "D", "Am", "A", "E", "Dsus2", "F", "Dm", "G7", "Fmaj7", "A7", "D7", "Gsus4"];
  grid.innerHTML = order.map(key => {
    const c = chords[key];
    return `
      <div class="chord-card" data-chord="${key}">
        <h3>${c.name}</h3>
        <div class="fretboard">${c.diagram}</div>
        <p class="fingers">${c.fingers}</p>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".chord-card").forEach(card => {
    card.addEventListener("click", () => {
      const tip = chords[card.dataset.chord].tip;
      alert(chords[card.dataset.chord].name + ": " + tip);
    });
  });
}

// ===== PATTERNS =====
function renderPatterns() {
  const list = document.getElementById("patterns-list");
  list.innerHTML = patterns.map(p => {
    const boxes = p.sequence.map(s => {
      if (s === "D") return `<div class="strum-box down">↓</div>`;
      if (s === "U") return `<div class="strum-box up">↑</div>`;
      return `<div class="strum-box rest">·</div>`;
    }).join("");
    return `
      <article class="pattern-card">
        <h3>${p.name}</h3>
        <p class="desc">${p.description}</p>
        <div class="pattern-visual">${boxes}</div>
        <p class="pattern-count">${p.counts}</p>
        <p class="pattern-songs"><strong>Good for:</strong> ${p.songs}</p>
      </article>
    `;
  }).join("");
}

// ===== MODAL =====
function setupModal() {
  document.getElementById("close-modal").addEventListener("click", closeModal);
  document.getElementById("song-modal").addEventListener("click", e => {
    if (e.target.id === "song-modal") closeModal();
  });
}

function openSongModal(id) {
  const song = songs.find(s => s.id === id);
  if (!song) return;
  const pattern = patterns.find(p => p.id === song.patternId);
  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <h2>${song.title}</h2>
    <p class="artist">${song.artist}</p>
    
    <div class="modal-section">
      <h4>Chords</h4>
      <div class="modal-chords">
        ${song.chords.map(c => `<span class="chord-tag">${c}</span>`).join("")}
      </div>
    </div>
    
    <div class="modal-section">
      <h4>Progression</h4>
      <p style="font-family:'JetBrains Mono',monospace;font-size:0.95rem;">${song.progression}</p>
    </div>
    
    <div class="modal-section">
      <h4>Strumming</h4>
      <div class="modal-pattern">${pattern ? pattern.short : "D D D D"}</div>
      <p style="margin-top:0.5rem;font-size:0.9rem;color:var(--text-muted);">${song.patternNote}</p>
    </div>
    
    <div class="modal-section">
      <h4>Why it's great for beginners</h4>
      <p style="font-size:0.95rem;">${song.why}</p>
    </div>
    
    <div class="modal-section">
      <h4>Practice tip</h4>
      <div class="modal-tips">${song.tips}</div>
    </div>
    
    <div class="modal-section">
      <h4>Difficulty</h4>
      <div class="modal-progress">
        ${[1,2,3].map(i => `<div class="progress-dot ${i <= song.difficulty ? 'filled' : ''}"></div>`).join("")}
      </div>
    </div>
  `;
  document.getElementById("song-modal").classList.add("open");
}

function closeModal() {
  document.getElementById("song-modal").classList.remove("open");
}

// ===== PRACTICE =====
function setupPractice() {
  const select = document.getElementById("practice-select");
  patterns.forEach(p => {
    const opt = document.createElement("option");
    opt.value = "pattern:" + p.id;
    opt.textContent = "Pattern: " + p.name;
    select.appendChild(opt);
  });
  songs.forEach(s => {
    const opt = document.createElement("option");
    opt.value = "song:" + s.id;
    opt.textContent = s.title + " – " + s.artist;
    select.appendChild(opt);
  });

  document.getElementById("tempo").addEventListener("input", e => {
    document.getElementById("tempo-value").textContent = e.target.value;
  });

  document.getElementById("play-btn").addEventListener("click", startPractice);
  document.getElementById("stop-btn").addEventListener("click", stopPractice);
}

function startPractice() {
  stopPractice();
  const val = document.getElementById("practice-select").value;
  const [type, id] = val.split(":");
  let sequence, chordsList = null, patternShort = "";

  if (type === "pattern") {
    const p = patterns.find(x => x.id === id);
    sequence = p.sequence;
    patternShort = p.short;
  } else {
    const s = songs.find(x => x.id === id);
    const p = patterns.find(x => x.id === s.patternId);
    sequence = p.sequence;
    chordsList = s.chords;
    patternShort = p.short + "  |  " + s.chords.join(" – ");
  }

  currentPracticeItem = { sequence, chordsList, patternShort };
  document.getElementById("pattern-text").textContent = patternShort;
  document.getElementById("play-btn").disabled = true;
  document.getElementById("stop-btn").disabled = false;
  isPlaying = true;
  practiceBeat = 0;
  practiceStep = 0;

  const bpm = parseInt(document.getElementById("tempo").value, 10);
  const isEighth = sequence.length > 4;
  const intervalMs = isEighth ? (60 / bpm / 2) * 1000 : (60 / bpm) * 1000;

  practiceInterval = setInterval(() => {
    tickPractice();
  }, intervalMs);
  tickPractice();
}

function tickPractice() {
  const { sequence, chordsList } = currentPracticeItem;
  const step = practiceStep % sequence.length;
  const strum = sequence[step];

  const isEighth = sequence.length > 4;
  const beatNum = isEighth ? Math.floor(step / 2) % 4 + 1 : step % 4 + 1;

  document.querySelectorAll(".beat").forEach(b => {
    b.classList.toggle("active", parseInt(b.dataset.beat) === beatNum);
  });

  const arrow = document.querySelector(".strum-arrow");
  if (strum === "D") {
    arrow.textContent = "↓";
    arrow.classList.add("flash");
  } else if (strum === "U") {
    arrow.textContent = "↑";
    arrow.classList.add("flash");
  } else {
    arrow.textContent = "·";
    arrow.classList.remove("flash");
  }
  setTimeout(() => arrow.classList.remove("flash"), 80);

  if (chordsList) {
    const measure = Math.floor(practiceStep / sequence.length);
    const chordIdx = measure % chordsList.length;
    document.getElementById("current-chord").textContent = chordsList[chordIdx];
  } else {
    document.getElementById("current-chord").textContent = "—";
  }

  practiceStep++;
}

function stopPractice() {
  if (practiceInterval) clearInterval(practiceInterval);
  practiceInterval = null;
  isPlaying = false;
  document.getElementById("play-btn").disabled = false;
  document.getElementById("stop-btn").disabled = true;
  document.querySelectorAll(".beat").forEach(b => b.classList.remove("active"));
  document.querySelector(".strum-arrow").classList.remove("flash");
  document.querySelector(".strum-arrow").textContent = "↓";
  document.getElementById("current-chord").textContent = "—";
}