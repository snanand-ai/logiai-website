# Live Spanish → English Voice Translator

A tiny, fast, dependency-free web app. Speak in **Spanish**, and it shows the
text plus an **English** translation live — and reads the English aloud.

## How it works

- **Listen** — browser **Web Speech API** (`SpeechRecognition`) transcribes Spanish (`es-ES`).
- **Translate** — each finished sentence is sent to the free **MyMemory** API (`es → en`).
- **Speak** — the English is read back with **SpeechSynthesis** (`en-US`).

No build step, no keys, no server logic. Just three files: `index.html`, `app.js`, `README.md`.

## Run it

It's a static page — open it over HTTP (microphone access needs a secure
context, so `file://` may be blocked in some browsers).

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in Chrome/Edge.

## Use it

1. Click **Start listening** and allow microphone access.
2. Speak in Spanish. Your words appear on top; the English translation appears
   below and is spoken aloud after each pause.
3. **🔊** replays the last English line. **Clear** resets. Untick *Speak the
   English aloud* to mute playback.

## Notes

- Best in **Google Chrome** or **Microsoft Edge** (widest Web Speech support).
- Needs an internet connection for the translation step.
- MyMemory is free and rate-limited; for heavy use, swap the `translate()`
  function in `app.js` for a paid translation API.
