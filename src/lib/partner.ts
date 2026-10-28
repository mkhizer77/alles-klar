// Port: a conversation partner the Speaking page talks to. The only adapter so
// far calls the Claude API directly from the browser with the learner's own key
// (no server in between, nothing to host). A proxy adapter could sit behind the
// same interface later.
import type { SpeakingScenario } from '../content/types';
import { getAiConfig, type AiModelId } from './ai-config';
import { buildSystemPrompt, parseFeedback, parseTurn, toMessages, FEEDBACK_REQUEST, FEEDBACK_SCHEMA, TURN_SCHEMA, type PartnerFeedback, type PartnerTurn, type PromptContext, type Turn } from './partner-prompt';

export interface ConversationPartner {
  respond(turns: Turn[]): Promise<PartnerTurn>;
  feedback(turns: Turn[]): Promise<PartnerFeedback>;
}

export class PartnerError extends Error {
  kind: 'auth' | 'rate' | 'network' | 'refused' | 'other';
  constructor(kind: PartnerError['kind'], message: string) {
    super(message);
    this.kind = kind;
  }
}

type SdkModule = typeof import('@anthropic-ai/sdk');
let sdk: Promise<SdkModule> | null = null;
const loadSdk = () => (sdk ??= import('@anthropic-ai/sdk'));

class AnthropicPartner implements ConversationPartner {
  private readonly apiKey: string;
  private readonly model: AiModelId;
  private readonly system: string;
  private readonly goalCount: number;

  constructor(apiKey: string, model: AiModelId, ctx: PromptContext) {
    this.apiKey = apiKey;
    this.model = model;
    this.system = buildSystemPrompt(ctx);
    this.goalCount = ctx.scenario.goals.length;
  }

  respond(turns: Turn[]) {
    return this.ask(toMessages(turns), TURN_SCHEMA, 1024).then((json) => parseTurn(json, this.goalCount));
  }

  feedback(turns: Turn[]) {
    const messages = [...toMessages(turns, 40), { role: 'user' as const, content: FEEDBACK_REQUEST }];
    return this.ask(messages, FEEDBACK_SCHEMA, 2048).then((json) => parseFeedback(json, this.goalCount));
  }

  private async ask(messages: { role: 'user' | 'assistant'; content: string }[], schema: Record<string, unknown>, maxTokens: number): Promise<string> {
    const { default: Anthropic } = await loadSdk();
    const client = new Anthropic({ apiKey: this.apiKey, dangerouslyAllowBrowser: true, maxRetries: 1 });
    // Haiku has no server-side refusal fallback; Opus and Sonnet get the default chain.
    const fallbacks = this.model === 'claude-haiku-5-5' ? {} : { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' as const };
    try {
      const res = await client.beta.messages.create({
        model: this.model,
        max_tokens: maxTokens,
        system: [{ type: 'text', text: this.system, cache_control: { type: 'ephemeral' } }],
        messages,
        output_config: { effort: 'low', format: { type: 'json_schema', schema } },
        ...fallbacks,
      });
      if (res.stop_reason === 'refusal') throw new PartnerError('refused', 'The partner declined to continue this conversation. Try a different wording or scenario.');
      if (res.stop_reason === 'max_tokens') throw new PartnerError('other', 'The reply was cut off. Please try again.');
      const text = res.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
      if (!text) throw new PartnerError('other', 'Empty reply from the partner.');
      return text;
    } catch (e) {
      if (e instanceof PartnerError) throw e;
      if (e instanceof Anthropic.AuthenticationError) throw new PartnerError('auth', 'The API key was rejected. Check it in Settings.');
      if (e instanceof Anthropic.PermissionDeniedError) throw new PartnerError('auth', 'This API key is not allowed to use the chosen model.');
      if (e instanceof Anthropic.RateLimitError) throw new PartnerError('rate', 'Too many requests right now. Wait a moment and try again.');
      if (e instanceof Anthropic.APIConnectionError) throw new PartnerError('network', 'No connection. The partner needs the internet.');
      if (e instanceof Anthropic.APIError) throw new PartnerError('other', `The partner could not answer (${e.status ?? 'error'}): ${e.message}`);
      if (e instanceof SyntaxError) throw new PartnerError('other', 'The partner sent an unreadable reply. Please try again.');
      throw new PartnerError('other', e instanceof Error ? e.message : String(e));
    }
  }
}

export function createPartner(ctx: PromptContext): ConversationPartner | null {
  const { apiKey, model } = getAiConfig();
  if (!apiKey.trim()) return null;
  return new AnthropicPartner(apiKey.trim(), model, ctx);
}

/** A one-line request to check that a key works, used by Settings. Costs a fraction of a cent. */
export async function testKey(apiKey: string, model: AiModelId): Promise<string> {
  const { default: Anthropic } = await loadSdk();
  const client = new Anthropic({ apiKey: apiKey.trim(), dangerouslyAllowBrowser: true, maxRetries: 0 });
  try {
    const res = await client.messages.create({ model, max_tokens: 64, output_config: { effort: 'low' }, messages: [{ role: 'user', content: 'Reply with the single German word "Klar".' }] });
    return res.content.find((b) => b.type === 'text')?.text.trim() || 'OK';
  } catch (e) {
    if (e instanceof Anthropic.AuthenticationError) throw new Error('Key rejected. Check for typos; it should start with sk-ant-.');
    if (e instanceof Anthropic.APIConnectionError) throw new Error('No connection to the API.');
    if (e instanceof Anthropic.APIError) throw new Error(`API error ${e.status ?? ''}: ${e.message}`);
    throw e;
  }
}

export type { SpeakingScenario };
