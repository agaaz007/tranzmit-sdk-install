# Actual Tranzmit SDK Surface

This repo documents the **actual browser SDK** currently shipped by Tranzmit.

## Browser scripts

- `artifacts/tranzmit-widget.js` — targeted voice interview widget
- `artifacts/tranzmit-replay.js` — rrweb replay capture and upload

These are copied from the real Tranzmit app so customers and agents can inspect the exact code that gets wired in.

## Widget SDK behavior

The widget script:
- reads `window.TRANZMIT_WIDGET_CONFIG`
- requires `apiKey`, `endpoint`, and `distinctId`
- polls `GET /api/widget/check?key=...&distinctId=...` every 5 seconds by default
- renders a popup when a pending trigger exists
- reports `clicked` or `dismissed` to `POST /api/widget/complete`
- can launch the interview embed if `interviewApiKey` is provided

## Replay SDK behavior

The replay script:
- reads `window.TRANZMIT_CONFIG`
- requires `apiKey` and `endpoint`
- requires `rrweb` to be loaded first
- records rrweb DOM events with masked inputs
- uploads chunks to `POST /api/ingest/replay`
- uses `navigator.sendBeacon` when possible
- tries to reuse Mixpanel session and distinct IDs when available

## What Claude should infer

For most customer installs, Claude should:
- find the cancellation flow
- find the best stable `distinctId` source in the host app
- wire the widget globally or near the authenticated shell
- wire replay only where it is useful and safe
