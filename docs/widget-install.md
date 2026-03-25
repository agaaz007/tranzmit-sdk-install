# Widget Install

Use the widget SDK when you want Tranzmit to show triggered voice interview invites inside a customer-facing web app.

## npm install

```bash
npm install @tranzmit/web
```

## Next.js client component

```tsx
'use client';

import { useEffect } from 'react';
import { installTranzmitWidget, updateTranzmitWidgetConfig } from '@tranzmit/web';

export function TranzmitWidgetBootstrap({ userId }: { userId: string }) {
  useEffect(() => {
    installTranzmitWidget({
      apiKey: process.env.NEXT_PUBLIC_TRANZMIT_API_KEY!,
      endpoint: process.env.NEXT_PUBLIC_TRANZMIT_ENDPOINT!,
      distinctId: userId,
    });
  }, [userId]);

  useEffect(() => {
    updateTranzmitWidgetConfig({ distinctId: userId });
  }, [userId]);

  return null;
}
```

## Required values
- `apiKey`: Tranzmit project API key
- `endpoint`: your Tranzmit base URL
- `distinctId`: stable logged-in user identifier

## Important

Use a stable ID, not a random per-page or per-session value, or dashboard-triggered targeting will not line up with the user you expect.
