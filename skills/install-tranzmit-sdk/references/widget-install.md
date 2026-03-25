# Widget install reference

Use the app's authenticated client shell.

```ts
import { installTranzmitWidget } from '@tranzmit/web';

installTranzmitWidget({
  apiKey: process.env.NEXT_PUBLIC_TRANZMIT_API_KEY!,
  endpoint: process.env.NEXT_PUBLIC_TRANZMIT_ENDPOINT!,
  distinctId: user.id,
});
```

## Good `distinctId` values
- authenticated app user ID
- analytics distinct ID
- stable account-scoped identifier
