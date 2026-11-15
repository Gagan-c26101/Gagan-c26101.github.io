# FlowOps — Marketing & Operations Automation Hub

A lightweight portfolio prototype demonstrating a unified workspace for campaign content, task execution, approvals, workflow activity and webhook integrations.

## Features
- Overview dashboard with campaign/task metrics and workflow status
- Content brief form that creates editable social/email draft packs using deterministic templates
- Human approval workflow: Draft → Review → Approved → Published (review queue is represented in task status)
- Task board with owners, priorities and status updates
- Activity log and CSV export
- Configurable custom webhook endpoint for task/content events
- Browser-local persistence using localStorage

## Run locally
Open `index.html` in a modern browser, or serve the folder with any static HTTP server.

## Demo limitations
This version is a frontend prototype. It does not connect directly to Notion, Slack or Google Workspace yet. The webhook sends browser-side POST requests and may be blocked by endpoint CORS settings. For production, route events through a server-side function, keep credentials in environment variables, and add authentication, durable storage, retries and delivery monitoring.

The content generator uses deterministic templates; it does not claim to call an AI model. A future iteration can connect an approved AI provider behind a server-side API and add human review before publishing.

## Suggested next steps
1. Add server-side webhook relay and retry queue.
2. Connect Google Sheets/Notion/Slack using OAuth or scoped integration credentials.
3. Store campaigns and tasks in a database.
4. Add campaign analytics ingestion and date-range filters.
5. Add automated tests for task transitions, webhook filters and CSV escaping.
