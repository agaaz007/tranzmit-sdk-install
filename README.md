# Tranzmit Claude Install Kit

This repo is the **Claude-first install surface** for Tranzmit.

It is based on the **actual Tranzmit browser SDK** that ships today, not a generic placeholder package.

Instead of asking customers to manually wire scripts, auth boundaries, and SSR-safe bootstraps, the preferred flow is:

1. Open the customer's codebase in Claude Code, Codex, or Conductor
2. Give the agent access to this repo or copy the skill into its skill directory
3. Ask the agent to install Tranzmit in the app
4. Let the agent patch the codebase using the app's real framework and auth patterns

## Use With Claude

Give Claude this repo and then paste one of these prompts:

- `Install Tranzmit on our cancel flow. Find the cancellation CTA, reuse the app's PostHog or Amplitude distinct ID if available, otherwise use the stable logged-in user ID, and wire the real Tranzmit widget/replay SDK in the smallest SSR-safe integration point.`
- `Install the real Tranzmit widget SDK in this app. Use the existing auth flow and a stable distinctId.`
- `Install the real Tranzmit replay SDK in this app without breaking SSR.`

## What This Repo Contains

- `skills/install-tranzmit-sdk` — the main Claude skill
- `docs` — customer-facing docs and fallback manual instructions
- `artifacts` — copies of the actual Tranzmit browser SDK scripts
- `packages/tranzmit-web` — optional package-based helper, secondary to the Claude flow

## Preferred Integration Order

1. **Claude skill** — best default
2. **Manual docs** — fallback for non-agent users
3. **Package install** — optional helper if a team prefers dependency-based setup

## What Claude Needs From The User

- where the cancel flow lives
- how the app exposes user identity at cancel time
- whether the app already uses PostHog or Amplitude for distinct identity
- Tranzmit project API key and Tranzmit endpoint if those are not already available in the codebase

## Why This Repo Exists

Tranzmit installation is framework-specific. A coding agent can usually do a better job than a static setup guide because it can:

- find the right root layout or authenticated shell
- keep browser-only code out of server-only files
- reuse the app's actual auth and user-loading patterns
- avoid duplicate installs across route transitions

## Start Here

- `docs/use-with-claude.md`
- `docs/cancel-flow-install.md`
- `docs/actual-sdk-surface.md`
- `docs/quickstart.md`
- `skills/install-tranzmit-sdk/SKILL.md`
