# Replay install reference

```ts
import { installTranzmitReplay } from '@tranzmit/web';

await installTranzmitReplay({
  apiKey: process.env.NEXT_PUBLIC_TRANZMIT_API_KEY!,
  endpoint: process.env.NEXT_PUBLIC_TRANZMIT_ENDPOINT!,
});
```

rrweb must load before `tranzmit-replay.js`, which the package handles automatically.
