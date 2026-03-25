# Tranzmit Quickstart

## Default recommendation

Use Claude to install Tranzmit instead of wiring it by hand.

1. Open the app in Claude Code, Codex, or Conductor
2. Give Claude access to this repo or the `install-tranzmit-sdk` skill
3. Tell Claude whether you want widget, replay, or both
4. Provide your Tranzmit project API key and endpoint

## Recommended prompt

```text
Install Tranzmit in this app. Use the existing auth flow, install it once globally, and keep the integration SSR safe.
```

## Important note about the API key

The Tranzmit project API key used by the browser integration is a **publishable project key**, not a secret admin credential.
It is expected to be used in browser code, similar to other client-side analytics keys.

Still:
- scope it per project
- rotate it if exposed in the wrong place
- never reuse private provider secrets in the browser

## If the customer does not use Claude

Use:
- `widget-install.md` for widget setup
- `replay-install.md` for replay setup
