# AI Support Ticket Triage Assistant

A small AI workflow-automation demo that turns a raw customer support message into a structured handoff for a human support agent.

## What it demonstrates

- Ticket classification across payment, account, order, technical and refund issues.
- Priority and sentiment assessment.
- A concise, fact-grounded issue summary.
- Suggested support queue and verification steps.
- A customer-facing draft reply.
- Structured Outputs through the OpenAI Responses API.
- Server-side API key handling, input validation and a human-review boundary.

## Hosted live demo deployment

The frontend and API are now separated so the same ticket form can call a secure serverless endpoint. GitHub Pages alone cannot run the API; the hosted demo needs a backend deployment.

To enable live analysis:

1. Import this GitHub repository into Vercel.
2. Set the Vercel project **Root Directory** to `demos/ai-ticket-triage`.
3. Add the environment variable `OPENAI_API_KEY` in the Vercel project settings. Optionally set `OPENAI_MODEL` (default: `gpt-4.1-mini`).
4. Deploy the project.
5. Attach the Vercel domain to the demo link in the portfolio, or use a rewrite/proxy so `/api/health` and `/api/triage` reach the Vercel deployment.

Never put the API key in HTML, JavaScript, GitHub Pages files or a public repository.

Until the API is deployed and configured, the GitHub Pages demo displays an unavailable status and does not show a fabricated sample result. The live API analyzes the submitted ticket text on each request.

## Run live AI locally

Requirements: Node.js 18+ and an OpenAI API key.

1. Clone the portfolio repository and open this folder:
   `cd demos/ai-ticket-triage`
2. Install dependencies:
   `npm install`
3. Copy `.env.example` to `.env` and add your key:
   `cp .env.example .env`
4. Start the app:
   `npm start`
5. Open http://localhost:3000

The API key stays on the server and is never sent to the browser. Change `OPENAI_MODEL` in `.env` if you want to use another model available to your API account.

## Run live AI locally

Requirements: Node.js 18+ and an OpenAI API key.

1. Clone the portfolio repository and open this folder:
   `cd demos/ai-ticket-triage`
2. Install dependencies:
   `npm install`
3. Copy `.env.example` to `.env` and add your key:
   `cp .env.example .env`
4. Start the app:
   `npm start`
5. Open http://localhost:3000

The API key stays on the server and is never sent to the browser. Change `OPENAI_MODEL` in `.env` if you want to use another model available to your API account.

## Workflow

1. A customer submits an unstructured support message.
2. The server validates the input and sends it to the OpenAI Responses API.
3. A strict JSON Schema constrains the response to known fields and categories.
4. The UI displays the category, priority, sentiment, queue, summary, next steps and suggested reply.
5. A human support agent verifies transaction/account details and approves any customer communication.

## Safety and limitations

- This is a portfolio demonstration, not a production support system.
- Do not paste real customer personal data, credentials, card details or sensitive information.
- The model does not access payment systems, customer accounts or internal policies.
- Suggested actions and replies must be checked by a human. The demo must not automatically issue refunds, change accounts or send messages.
- The hosted GitHub Pages preview is sample-only; it does not imply a live API call.

## Stack

HTML, CSS, JavaScript, Node.js, Express, OpenAI JavaScript SDK, Responses API and Structured Outputs.

## API reference

- [OpenAI Responses API](https://developers.openai.com/api/docs/guides/text)
- [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs?api-mode=responses)
