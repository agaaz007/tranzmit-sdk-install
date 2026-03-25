# Use Tranzmit With Claude

This is the recommended install path.

## Step 1

Open the customer's app in Claude Code, Codex, or Conductor.

## Step 2

Make sure the agent can read this repo or at least the `skills/install-tranzmit-sdk` folder.

## Step 3

Paste one of these prompts.

### Cancel flow install

```text
Install Tranzmit on our cancel flow. Find the cancellation CTA, reuse the app's PostHog or Amplitude distinct ID if available, otherwise use the stable logged-in user ID, and wire the real Tranzmit widget/replay SDK in the smallest SSR-safe integration point.
```

### Widget only

```text
Install the Tranzmit widget in this app. Use the existing auth flow, install it once globally, and use a stable logged-in user ID for distinctId.
```

### Replay only

```text
Install Tranzmit replay tracking in this app. Keep it browser-only, load rrweb before Tranzmit replay, and put it in the smallest stable global integration point.
```

### Both widget and replay

```text
Install both the Tranzmit widget and Tranzmit replay in this app. Reuse the app's existing auth/user-loading pattern, keep SSR safe, and avoid duplicate installs across route changes.
```

## Inputs the customer should give Claude

- where the cancel flow or cancellation CTA lives
- whether the app already uses PostHog or Amplitude
- the correct logged-in user ID or analytics distinct ID to use for `distinctId`
- Tranzmit project API key and endpoint if they are not already configured in the repo

## Good `distinctId` examples

- authenticated app user ID
- analytics distinct ID
- stable account-scoped member ID

## Bad `distinctId` examples

- random value generated on page load
- session-only ID that changes constantly
- anonymous value that does not match dashboard targeting
