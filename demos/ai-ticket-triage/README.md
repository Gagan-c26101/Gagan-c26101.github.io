# AI Support Ticket Triage Assistant

A small AI workflow-automation demo that turns a raw customer support message into a structured handoff for a human support agent.

## What it demonstrates

- Ticket classification across payment, account, order, technical and refund issues.
- Priority and sentiment assessment.
- A concise, fact-grounded issue summary.
- Suggested support queue and verification steps.
- A customer-facing draft reply.
- Structured JSON output from the Google Gemini API.
- Server-side API key handling, input validation and a human-review boundary.

## Free hosted live demo

This project uses the Google Gemini API free tier for eligible models. Free-tier quotas and model availability can change, and requests may be rate-limited. The free tier may use submitted prompts and responses to improve Google's products, so use synthetic demo tickets only; never submit real customer personal data or confidential information.

1. Create a free API key at https://aistudio.google.com/apikey.
2. In Vercel, open the `ai-ticket-triage` project → Settings → Environment Variables.
3. Add `GEMINI_API_KEY` with the key from Google AI Studio. Do not paste the key into GitHub or the browser.
4. Ensure the variable is enabled for Production (and Preview if needed).
5. Redeploy the project so the new environment variable is loaded.

The default model is `gemini-3.8-flash`, selected for lightweight classification and structured extraction. You can override it with `GEMINI_MODEL`. Check the current free-tier model availability and quota in Google AI Studio.

## Run live AI locally

Requirements: Node.js 18+ and a Gemini API key.

1. Open this folder: `cd demos/ai-ticket-triage`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and add your key: `cp .env.example .env`
4. Start the app: `npm start`
5. Open http://localhost:3000

The API key stays on the server and is never sent to the browser.

## Workflow

1. A customer submits an unstructured support message.
2. The server validates the input and sends it to Gemini.
3. A JSON schema constrains the response to known fields and categories.
4. The UI displays the category, priority, sentiment, queue, summary, next steps and suggested reply.
5. A human support agent verifies transaction/account details and approves any customer communication.

## Safety and limitations

- This is a portfolio demonstration, not a production support system.
- Do not paste real customer personal data, credentials, card details or sensitive information.
- The model does not access payment systems, customer accounts or internal policies.
- Suggested actions and replies must be checked by a human. The demo must not automatically issue refunds, change accounts or send messages.
- Free-tier quotas are limited and can change. A quota error means the free allowance or rate limit has been reached; retry after the quota resets or check Google AI Studio.

## Stack

HTML, CSS, JavaScript, Node.js, Express, Google GenAI JavaScript SDK and Gemini API.
