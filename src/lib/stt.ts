// Speech recognition through the browser's Web Speech API: on-device on iOS and
// macOS Safari, the browser's own service in Chrome. Not available in Firefox,
// where the Speaking page falls back to typing.

interface RecognitionResultLike {
  isFinal: boolean;
  0: { transcript: string };
}
interface RecognitionEventLike extends Event {
  resultIndex: number;
  results: ArrayLike<RecognitionResultLike>;
}
interface RecognitionErrorLike extends Event {
  error: string;
}
interface RecognitionLike extends EventTarget {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: RecognitionEventLike) => void) | null;
  onerror: ((e: RecognitionErrorLike) => void) | null;
  onend: (() => void) | null;
}
type RecognitionCtor = new () => RecognitionLike;

function ctor(): RecognitionCtor | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export const canRecognize = () => ctor() !== null;

export interface Recognizer {
  start(): void;
  stop(): void;
  abort(): void;
}

export interface RecognizerEvents {
  /** the best guess so far, replaced on every update */
  onInterim(text: string): void;
  /** a finished phrase */
  onFinal(text: string): void;
  onEnd(): void;
  onError(code: string): void;
}

export const errorMessage = (code: string) =>
  code === 'not-allowed' || code === 'service-not-allowed'
    ? 'Microphone access was blocked. Allow it in the browser settings, or type instead.'
    : code === 'no-speech'
      ? 'I did not hear anything. Tap the microphone and speak.'
      : code === 'audio-capture'
        ? 'No microphone found.'
        : code === 'network'
          ? 'Speech recognition needs a connection in this browser.'
          : `Speech recognition stopped (${code}).`;

export function createRecognizer(events: RecognizerEvents, lang = 'de-DE'): Recognizer | null {
  const Ctor = ctor();
  if (!Ctor) return null;
  const r = new Ctor();
  r.lang = lang;
  r.interimResults = true;
  r.continuous = false;
  r.maxAlternatives = 1;
  r.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const res = e.results[i];
      const text = res[0].transcript;
      if (res.isFinal) events.onFinal(text.trim());
      else interim += text;
    }
    if (interim) events.onInterim(interim.trim());
  };
  r.onerror = (e) => {
    if (e.error !== 'aborted') events.onError(e.error);
  };
  r.onend = () => events.onEnd();
  return {
    start: () => {
      try {
        r.start();
      } catch {
        /* already started */
      }
    },
    stop: () => r.stop(),
    abort: () => r.abort(),
  };
}
