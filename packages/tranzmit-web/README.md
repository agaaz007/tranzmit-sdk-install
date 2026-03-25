# `@tranzmit/web`

Browser helpers for loading the Tranzmit widget and replay SDKs.

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
