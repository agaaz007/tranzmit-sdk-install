# Claude prompt reference

Use prompts like these when installing Tranzmit into a customer codebase.

## Cancel flow

```text
Install Tranzmit on our cancel flow. Find the cancellation CTA, reuse the app's PostHog or Amplitude distinct ID if available, otherwise use the stable logged-in user ID, and wire the real Tranzmit widget/replay SDK in the smallest SSR-safe integration point.
```

## Widget

```text
Install the Tranzmit widget in this app. Use the existing auth flow, install it once globally, and use a stable logged-in user ID for distinctId.
```

## Replay

```text
Install Tranzmit replay tracking in this app. Keep it browser-only, load rrweb before Tranzmit replay, and avoid duplicate installs across route changes.
```

## Both

```text
Install both the Tranzmit widget and Tranzmit replay in this app. Reuse the existing auth flow, keep SSR safe, and prefer the smallest stable global integration point.
```
