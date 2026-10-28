// The conversation partner needs an API key. It is the learner's own key and it
// stays on this device: a separate localStorage entry, never part of the synced
// progress store, never sent to the Alles Klar API.
export const AI_MODELS = [
  { id: 'claude-opus-5-5', label: 'Opus 5.5', note: 'best German and feedback; about 3–5 ¢ per conversation' },
  { id: 'claude-sonnet-5-5', label: 'Sonnet 5.5', note: 'very good, about half the price' },
  { id: 'claude-haiku-5-5', label: 'Haiku 5.5', note: 'fastest and cheapest, simpler corrections' },
] as const;
export type AiModelId = (typeof AI_MODELS)[number]['id'];

export interface AiConfig {
  apiKey: string;
  model: AiModelId;
  /** read the partner's replies aloud */
  autoSpeak: boolean;
  /** send a spoken line as soon as recognition stops */
  autoSend: boolean;
}

const LS_KEY = 'ak:ai';
const DEFAULT: AiConfig = { apiKey: '', model: 'claude-opus-5-5', autoSpeak: true, autoSend: true };

export function getAiConfig(): AiConfig {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return DEFAULT;
    const parsed = JSON.parse(raw) as Partial<AiConfig>;
    const model = AI_MODELS.some((m) => m.id === parsed.model) ? (parsed.model as AiModelId) : DEFAULT.model;
    return { ...DEFAULT, ...parsed, model };
  } catch {
    return DEFAULT;
  }
}

export function setAiConfig(patch: Partial<AiConfig>) {
  const next = { ...getAiConfig(), ...patch };
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(next));
  } catch {
    /* private mode: the key lives for this page load only */
  }
  return next;
}

export const hasAiKey = () => getAiConfig().apiKey.trim().length > 0;
