# Cancel Flow Install

This is the main Tranzmit setup story.

The customer usually wants Tranzmit to activate around a cancellation flow, not just "install some SDK".

## What Claude should look for

1. The cancel button, cancel settings page, or downgrade/cancel route
2. The best stable user identity source at the moment the user clicks cancel
3. Whether the app already exposes analytics identity via PostHog or Amplitude
4. The smallest safe place to add browser-only Tranzmit code

## Identity priority

Claude should prefer identity sources in this order:

1. existing analytics distinct ID already used by the app
2. stable authenticated app user ID
3. last-resort fallback documented in code comments or config

The distinct ID must stay stable enough that dashboard-triggered outreach matches the correct user later.

## Preferred install behavior

For a cancel-flow setup, Claude should usually install:

- **widget** so Tranzmit can show triggered interview invites for the right user
- **replay** on the relevant authenticated/cancel surface when session replay is desired

If the customer request is specifically about cancel intelligence, installing both is usually the right default unless the repo context makes one unnecessary.

## The easiest customer prompt

```text
Install Tranzmit on our cancel flow. Find the cancellation CTA, reuse the app's PostHog or Amplitude distinct ID if available, otherwise use the stable logged-in user ID, and wire the real Tranzmit widget/replay SDK in the smallest SSR-safe integration point.
```
