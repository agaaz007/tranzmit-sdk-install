# Tranzmit Quickstart

If you want the fastest path for customers, recommend this order:

1. Install `@tranzmit/web`
2. Add the widget or replay bootstrap in the app shell
3. Set `NEXT_PUBLIC_TRANZMIT_API_KEY` and `NEXT_PUBLIC_TRANZMIT_ENDPOINT`
4. Pass a stable logged-in user ID as `distinctId` for widget targeting

## Important note about the API key

The Tranzmit project API key used by the browser SDK is a **publishable project key**, not a secret admin credential.
It is expected to be used in browser code, similar to other client-side analytics keys.

Still:
- scope it per project
- rotate it if exposed in the wrong place
- never reuse private provider secrets in the browser

## Fastest Next.js widget bootstrap

```tsx
'use client';

import { useEffect } from 'react';
import { installTranzmitWidget } from '@tranzmit/web';

export function TranzmitBootstrap({ userId }: { userId: string }) {
  useEffect(() => {
    installTranzmitWidget({
      apiKey: process.env.NEXT_PUBLIC_TRANZMIT_API_KEY!,
      endpoint: process.env.NEXT_PUBLIC_TRANZMIT_ENDPOINT!,
      distinctId: userId,
    });
  }, [userId]);

  return null;
}
```
