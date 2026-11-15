# AI Support Ticket Triage Assistant

A small AI workflow-automation demo that turns a raw customer support message into a structured handoff for a human support agent.

## What it demonstrates

- Ticket classification, priority and sentiment assessment.
- Concise issue summary and suggested support queue.
- Safe verification steps and a customer-facing draft reply.
- Structured JSON output with server-side validation.
- Automatic provider fallback: Gemini first, then OpenAI if Gemini models fail.
- Server-side API key handling and human review.

## API providers and free-tier limits

### Gemini (primary)
1. Create a key at https://aistudio.google.com/apikey.
2. Add `GEMINI_API_KEY` to the Vercel project environment variables.
3. The default model is `gemini-2.5-flash`, followed by `gemini-2.5-flash-lite`. Free-tier access, quotas and model availability depend on Google's current terms and region.

### OpenAI (secondary fallback)
1. Add `OPENAI_API_KEY` only if your OpenAI API account has usable API credits or an eligible free allowance.
2. The default fallback model is `gpt-4o-mini`.
3. ChatGPT Free access does not include free API credits. API billing and ChatGPT subscriptions are separate. If the API account has no credits, OpenAI fallback will fail and be reported in diagnostics.

Both keys are optional individually, but at least one provider key must be configured. The application tries configured Gemini models first, then configured OpenAI models. It accepts a result only after parsing and validating the required JSON fields; malformed or truncated output is treated as a provider failure and the next provider is attempted.

## Vercel configuration

In Vercel → Project → Settings → Environment Variables, add:
- `GEMINI_API_KEY` (recommended)
- `OPENAI_API_KEY` (optional fallback)

Optional model overrides:
- `GEMINI_MODEL` (default `gemini-2.5-flash`)
- `GEMINI_FALLBACK_MODELS` (default `gemini-2.5-flash-lite`)
- `OPENAI_MODEL` (default `gpt-4o-mini`)
- `OPENAI_FALLBACK_MODELS` (optional comma-separated list)

Redeploy after changing environment variables. Never commit real API keys or expose them in browser-side JavaScript.

## Run locally

1. `cd demos/ai-ticket-triage`
2. `npm install`
3. Copy `.env.example` to `.env` and add one or both provider keys.
4. `npm start`
5. Open http://localhost:3000

## Safety and limitations

- Use synthetic demo tickets only; do not submit real customer personal data, credentials, payment details or confidential information.
- Free-tier quotas, rate limits, model availability and provider pricing can change.
- The model cannot access payment systems, customer accounts or internal policies.
- A human support agent must verify all suggested actions and approve customer communication.
- The demo never automatically issues refunds, changes accounts or sends messages.

## Stack

HTML, CSS, JavaScript, Node.js, Vercel Functions, Google GenAI SDK and OpenAI SDK.
