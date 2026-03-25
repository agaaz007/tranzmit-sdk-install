# Package-first install

Prefer this command when the client repo has a package manager:

```bash
npm install @tranzmit/web
```

Alternative package managers are fine if the repo already uses them.

The browser `apiKey` is a publishable Tranzmit project key. Do not replace it with server-only credentials.

## Exports
- `installTranzmitWidget`
- `updateTranzmitWidgetConfig`
- `removeTranzmitWidget`
- `installTranzmitReplay`
- `updateTranzmitReplayConfig`
- `removeTranzmitReplay`
