# Replay Install

Use the replay SDK when you want rrweb session replay data sent to Tranzmit.

## npm install

```bash
npm install @tranzmit/web
```

## Browser bootstrap

```ts
import { installTranzmitReplay } from '@tranzmit/web';

await installTranzmitReplay({
  apiKey: process.env.NEXT_PUBLIC_TRANZMIT_API_KEY!,
  endpoint: process.env.NEXT_PUBLIC_TRANZMIT_ENDPOINT!,
});
```

This key is meant to be browser-safe and project-scoped. Do not substitute backend provider secrets.

## Manual fallback

```html
<script src="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb-all.min.js"></script>
<script>
  window.TRANZMIT_CONFIG = {
    apiKey: 'tranzmit_...',
    endpoint: 'https://app.tranzmit.com'
  };
</script>
<script src="https://app.tranzmit.com/tranzmit-replay.js"></script>
```
