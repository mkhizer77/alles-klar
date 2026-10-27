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
