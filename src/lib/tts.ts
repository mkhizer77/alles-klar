// Free, on-device speech via the Web Speech API (Apple voices on iOS/macOS).
let voice: SpeechSynthesisVoice | null | undefined;

function pickVoice(): SpeechSynthesisVoice | null {
  if (typeof speechSynthesis === 'undefined') return null;
  const voices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('de'));
  if (!voices.length) return null;
  const preferred = ['Anna', 'Petra', 'Helena', 'Markus', 'Google Deutsch', 'Microsoft Katja'];
  for (const p of preferred) {
    const v = voices.find((v) => v.name.includes(p));
    if (v) return v;
  }
  return voices.find((v) => v.lang === 'de-DE') || voices[0];
}

export function canSpeak() {
  return typeof speechSynthesis !== 'undefined';
}

let defaultRate = 0.9;
export function setSpeechRate(rate: number) {
  defaultRate = rate;
}

export function stopSpeaking() {
  if (canSpeak()) speechSynthesis.cancel();
}

export function speak(text: string, rate = defaultRate) {
  if (!canSpeak()) return;
  if (voice === undefined) {
    voice = pickVoice();
    speechSynthesis.addEventListener?.('voiceschanged', () => {
      voice = pickVoice();
    });
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE';
  u.rate = rate;
  if (voice) u.voice = voice;
  speechSynthesis.speak(u);
}

/**
 * Speaks a script line by line without cancelling between lines. Lines that
 * start with "Name:" are dialogue turns; each speaker gets their own German
 * voice when the device has more than one. Returns a promise that resolves
 * when the last line has been spoken (or speech was stopped).
 */
export function speakScript(script: string, rate = defaultRate): Promise<void> {
  if (!canSpeak()) return Promise.resolve();
  speechSynthesis.cancel();
  const voices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('de'));
  const bySpeaker = new Map<string, SpeechSynthesisVoice>();
  const lines = script
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const utterances = lines.map((line) => {
    const m = /^([A-Za-zÄÖÜäöüß .\-']{1,30}):\s+(.*)$/.exec(line);
    const text = m ? m[2] : line;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = rate;
    let v: SpeechSynthesisVoice | null | undefined = voice ?? pickVoice();
    if (m && voices.length > 1) {
      if (!bySpeaker.has(m[1])) bySpeaker.set(m[1], voices[bySpeaker.size % voices.length]);
      v = bySpeaker.get(m[1]);
    }
    if (v) u.voice = v;
    return u;
  });
  return new Promise((resolve) => {
    if (!utterances.length) return resolve();
    const last = utterances[utterances.length - 1];
    last.onend = () => resolve();
    last.onerror = () => resolve();
    for (const u of utterances) speechSynthesis.speak(u);
  });
}
