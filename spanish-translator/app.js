// Live Spanish -> English voice translator.
// Listen (Web Speech API) -> translate (MyMemory free API) -> speak (SpeechSynthesis).

const esBox      = document.getElementById('esBox');
const enBox      = document.getElementById('enBox');
const micBtn     = document.getElementById('micBtn');
const clearBtn   = document.getElementById('clearBtn');
const replayBtn  = document.getElementById('replayBtn');
const speakToggle = document.getElementById('speakToggle');
const statusEl   = document.getElementById('status');

let lastEnglish = '';

function setStatus(msg, isError) {
  statusEl.textContent = msg || '';
  statusEl.classList.toggle('error', !!isError);
}

// ---- Speech synthesis (hear English) ----
function speak(text) {
  if (!text || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = 1;
  window.speechSynthesis.speak(u);
}

replayBtn.addEventListener('click', () => { if (lastEnglish) speak(lastEnglish); });

// ---- Translation (Spanish -> English) ----
async function translate(spanishText) {
  const text = spanishText.trim();
  if (!text) return '';
  const url = 'https://api.mymemory.translated.net/get?q='
    + encodeURIComponent(text) + '&langpair=es|en';
  const res = await fetch(url);
  if (!res.ok) throw new Error('Translation service error (' + res.status + ')');
  const data = await res.json();
  const out = data && data.responseData && data.responseData.translatedText;
  if (!out) throw new Error('No translation returned');
  return out;
}

async function handleFinal(spanishText) {
  if (!spanishText.trim()) return;
  enBox.innerHTML = '<span class="interim">Translating…</span>';
  try {
    const english = await translate(spanishText);
    lastEnglish = english;
    enBox.textContent = english;
    if (speakToggle.checked) speak(english);
  } catch (err) {
    enBox.innerHTML = '<span class="placeholder">—</span>';
    setStatus(err.message, true);
  }
}

// ---- Speech recognition (listen in Spanish) ----
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let listening = false;
let userStopped = false;

if (!SR) {
  micBtn.disabled = true;
  setStatus('Speech recognition is not supported here. Try Chrome or Edge.', true);
} else {
  recognition = new SR();
  recognition.lang = 'es-ES';
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    let interim = '', finalText = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const t = event.results[i][0].transcript;
      if (event.results[i].isFinal) finalText += t;
      else interim += t;
    }
    if (finalText) {
      esBox.textContent = finalText.trim();
      handleFinal(finalText);
    } else if (interim) {
      esBox.innerHTML = '<span class="interim">' + interim + '</span>';
    }
  };

  recognition.onerror = (e) => {
    if (e.error === 'no-speech') return;
    if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
      setStatus('Microphone access was blocked. Please allow it and try again.', true);
      stopListening();
    } else {
      setStatus('Recognition error: ' + e.error, true);
    }
  };

  recognition.onend = () => {
    // Auto-restart if the engine stops on its own while still listening.
    if (listening && !userStopped) {
      try { recognition.start(); } catch (_) {}
    } else {
      setMicState(false);
    }
  };
}

function setMicState(on) {
  listening = on;
  micBtn.classList.toggle('listening', on);
  micBtn.textContent = on ? '⏹ Stop listening' : '🎤 Start listening';
}

function startListening() {
  if (!recognition) return;
  userStopped = false;
  try {
    recognition.start();
    setMicState(true);
    setStatus('Listening… speak in Spanish.');
  } catch (_) { /* already started */ }
}

function stopListening() {
  userStopped = true;
  if (recognition) recognition.stop();
  setMicState(false);
  setStatus('Stopped.');
}

micBtn.addEventListener('click', () => {
  if (listening) stopListening(); else startListening();
});

clearBtn.addEventListener('click', () => {
  esBox.innerHTML = '<span class="placeholder">Press “Start listening” and speak…</span>';
  enBox.innerHTML = '<span class="placeholder">English appears here…</span>';
  lastEnglish = '';
  setStatus('');
});

if ('speechSynthesis' in window) window.speechSynthesis.getVoices();
