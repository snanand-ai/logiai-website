// Two-way live voice translator: English <-> Spanish.
// Tap a language button -> listen in that language -> translate to the other
// -> show both in a chat transcript and speak the translation aloud.
// Tap-each-turn (single utterance per tap); mic is off during playback so it
// never transcribes its own synthesized voice.

const convo       = document.getElementById('convo');
const emptyMsg    = document.getElementById('empty');
const micEn       = document.getElementById('micEn');
const micEs       = document.getElementById('micEs');
const speakToggle = document.getElementById('speakToggle');
const clearBtn    = document.getElementById('clearBtn');
const statusEl    = document.getElementById('status');

// Per-language config. `lang` = recognition/synthesis locale; `to` = target lang.
const LANGS = {
  en: { recog:'en-US', speak:'en-US', to:'es', flag:'🇬🇧', name:'English', side:'en' },
  es: { recog:'es-ES', speak:'es-ES', to:'en', flag:'🇪🇸', name:'Spanish', side:'es' },
};

let activeLang = null;     // 'en' | 'es' | null
let userStopped = false;

function setStatus(msg, kind) {
  statusEl.textContent = msg || '';
  statusEl.className = 'status' + (kind ? ' ' + kind : '');
}

// ---------- Speech synthesis ----------
function speak(text, locale) {
  return new Promise((resolve) => {
    if (!text || !('speechSynthesis' in window)) return resolve();
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = locale;
    u.rate = 1;
    u.onend = resolve;
    u.onerror = resolve;
    window.speechSynthesis.speak(u);
  });
}

// ---------- Translation (free MyMemory API) ----------
async function translate(text, from, to) {
  const q = text.trim();
  if (!q) return '';
  const url = 'https://api.mymemory.translated.net/get?q='
    + encodeURIComponent(q) + '&langpair=' + from + '|' + to;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Translation service error (' + res.status + ')');
  const data = await res.json();
  const out = data && data.responseData && data.responseData.translatedText;
  if (!out) throw new Error('No translation returned');
  return out;
}

// ---------- Transcript ----------
function addBubble(sourceLang, originalText, translatedText) {
  if (emptyMsg) emptyMsg.style.display = 'none';
  const cfg = LANGS[sourceLang];
  const toCfg = LANGS[cfg.to];

  const bubble = document.createElement('div');
  bubble.className = 'bubble ' + cfg.side;
  bubble.innerHTML =
    '<div class="who">' + cfg.flag + ' ' + cfg.name + ' → ' + toCfg.flag + ' ' + toCfg.name + '</div>'
    + '<div class="orig"></div>'
    + '<div class="trans"></div>'
    + '<button class="replay">🔊 Play again</button>';
  bubble.querySelector('.orig').textContent = originalText;
  bubble.querySelector('.trans').textContent = translatedText;
  bubble.querySelector('.replay').addEventListener('click', () => speak(translatedText, toCfg.speak));

  convo.appendChild(bubble);
  convo.scrollTop = convo.scrollHeight;
}

let interimEl = null;
function showInterim(sourceLang, text) {
  if (!interimEl) {
    if (emptyMsg) emptyMsg.style.display = 'none';
    interimEl = document.createElement('div');
    interimEl.className = 'bubble interim ' + LANGS[sourceLang].side;
    convo.appendChild(interimEl);
  }
  interimEl.textContent = text;
  convo.scrollTop = convo.scrollHeight;
}
function clearInterim() {
  if (interimEl) { interimEl.remove(); interimEl = null; }
}

// ---------- Speech recognition ----------
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (!SR) {
  setStatus('Speech recognition is not supported here. Try Chrome or Edge.', 'error');
  micEn.disabled = micEs.disabled = true;
} else {
  recognition = new SR();
  recognition.continuous = false;     // one utterance per tap (reliable turn-taking)
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    let interim = '', finalText = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const t = event.results[i][0].transcript;
      if (event.results[i].isFinal) finalText += t;
      else interim += t;
    }
    if (finalText) {
      clearInterim();
      handleUtterance(activeLang, finalText.trim());
    } else if (interim && activeLang) {
      showInterim(activeLang, interim);
    }
  };

  recognition.onerror = (e) => {
    if (e.error === 'no-speech') { setStatus('Didn’t catch that — tap and try again.'); return; }
    if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
      setStatus('Microphone access was blocked. Please allow it and try again.', 'error');
    } else if (e.error !== 'aborted') {
      setStatus('Recognition error: ' + e.error, 'error');
    }
  };

  recognition.onend = () => {
    // Single-utterance mode: recognition ends after the pause. Reset UI.
    clearInterim();
    if (activeLang) stopListening();
  };
}

async function handleUtterance(sourceLang, text) {
  if (!text) return;
  const cfg = LANGS[sourceLang];
  // Stop listening immediately so the mic is off while we translate + speak.
  stopListening();
  setStatus('Translating…', 'live');
  try {
    const translated = await translate(text, sourceLang, cfg.to);
    addBubble(sourceLang, text, translated);
    setStatus('');
    if (speakToggle.checked) {
      setStatus('🔊 Speaking ' + LANGS[cfg.to].name + '…', 'live');
      await speak(translated, LANGS[cfg.to].speak);
      setStatus('');
    }
  } catch (err) {
    setStatus(err.message, 'error');
  }
}

function micFor(lang) { return lang === 'en' ? micEn : micEs; }

function setListeningUI(lang) {
  [micEn, micEs].forEach((b) => {
    const isActive = lang && b.dataset.lang === lang;
    b.classList.toggle('listening', isActive);
    b.classList.toggle('dim', !!lang && !isActive);
  });
}

function startListening(lang) {
  if (!recognition) return;
  // If already listening in this language, treat the tap as "stop".
  if (activeLang === lang) { stopListening(); return; }
  // Switching languages: abort any current session first.
  if (activeLang) { userStopped = true; try { recognition.abort(); } catch (_) {} }
  window.speechSynthesis && window.speechSynthesis.cancel();

  activeLang = lang;
  userStopped = false;
  recognition.lang = LANGS[lang].recog;
  setListeningUI(lang);
  setStatus('🎙️ Listening — speak ' + LANGS[lang].name + '…', 'live');
  try {
    recognition.start();
  } catch (_) {
    // start() can throw if a prior session hasn't fully ended; retry shortly.
    setTimeout(() => { try { recognition.start(); } catch (e) {} }, 250);
  }
}

function stopListening() {
  if (!activeLang) return;
  userStopped = true;
  activeLang = null;
  setListeningUI(null);
  try { recognition.stop(); } catch (_) {}
}

micEn.addEventListener('click', () => startListening('en'));
micEs.addEventListener('click', () => startListening('es'));

clearBtn.addEventListener('click', () => {
  convo.querySelectorAll('.bubble').forEach((b) => b.remove());
  interimEl = null;
  if (emptyMsg) emptyMsg.style.display = '';
  setStatus('');
});

if ('speechSynthesis' in window) window.speechSynthesis.getVoices();
