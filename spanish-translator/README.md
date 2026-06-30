# Two-Way Voice Translator — English ⇄ Spanish

A tiny, fast, dependency-free web app for **two-way** conversations. Tap your
language, speak, and the other person reads & hears it in theirs — both
directions, in one running chat transcript.

- **Tap 🇬🇧 English** → you speak English → they hear **Spanish**.
- **Tap 🇪🇸 Español** → you speak Spanish → they hear **English**.

## How it works

- **Listen** — browser **Web Speech API** (`SpeechRecognition`), set to the
  language of whichever button you tapped.
- **Translate** — each sentence goes to the free **MyMemory** API.
- **Speak** — the translation is read aloud with **SpeechSynthesis**.

It's *tap-each-turn*: one tap captures one turn, then the mic turns **off** while
the translation is spoken — so it never transcribes its own voice. Tap again
(either language) for the next turn. Works on one shared phone or two separate
devices.

No build step, no keys, no server. Three files: `index.html`, `app.js`, `README.md`.

## Run it locally

Microphone access needs a secure context, so serve it over HTTP rather than
opening the file directly:

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

## Use it

1. Tap **English** or **Español** and allow microphone access.
2. Say your sentence. It appears in the chat with the translation below it, and
   the translation is spoken aloud.
3. For the reply, the other person taps **their** language and speaks.
4. **🔊 Play again** on any bubble replays it. **Clear chat** resets. Untick
   *Speak translations aloud* to mute playback.

## Notes

- Best in **Google Chrome** or **Microsoft Edge** (widest Web Speech support).
  On iPhone, use Chrome/Edge if Safari's mic button doesn't respond.
- Needs an internet connection for the translation step.
- MyMemory is free and rate-limited; for heavy use, swap the `translate()`
  function in `app.js` for a paid translation API.
