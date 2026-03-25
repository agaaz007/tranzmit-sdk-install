# `@tranzmit/web`

This package is an **optional helper** for teams that want a dependency-based integration.

The preferred Tranzmit install path is still:
- use Claude or another coding agent with `skills/install-tranzmit-sdk`
- let the agent patch the app directly

Use this package only if the customer specifically wants npm-based setup.

## Install

```bash
npm install @tranzmit/web
```

## Browser-safe key model

`apiKey` here is the Tranzmit project key intended for browser use. Treat it as publishable, not secret.
Do not put provider secrets or server-only credentials into this package config.

## Widget SDK

```js
import { installTranzmitWidget } from '@tranzmit/web';

installTranzmitWidget({
  apiKey: process.env.NEXT_PUBLIC_TRANZMIT_API_KEY,
  endpoint: process.env.NEXT_PUBLIC_TRANZMIT_ENDPOINT,
  distinctId: currentUser.id,
});
```

## Replay SDK

```js
import { installTranzmitReplay } from '@tranzmit/web';

await installTranzmitReplay({
  apiKey: process.env.NEXT_PUBLIC_TRANZMIT_API_KEY,
  endpoint: process.env.NEXT_PUBLIC_TRANZMIT_ENDPOINT,
});
```

## Notes
- `installTranzmitWidget` loads `tranzmit-widget.js` once.
- `installTranzmitReplay` loads rrweb first, then `tranzmit-replay.js`.
- Use `updateTranzmitWidgetConfig` if the signed-in user changes.
- The helpers safely no-op during SSR until they run in the browser.
