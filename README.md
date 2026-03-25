# Tranzmit Claude Install Kit

This repo is the **Claude-first install surface** for Tranzmit.

Instead of asking customers to manually wire scripts, auth boundaries, and SSR-safe bootstraps, the preferred flow is:

1. Open the customer's codebase in Claude Code, Codex, or Conductor
2. Give the agent access to this repo or copy the skill into its skill directory
3. Ask the agent to install Tranzmit in the app
4. Let the agent patch the codebase using the app's real framework and auth patterns

## Use With Claude

Give Claude this repo and then paste one of these prompts:

- `Install the Tranzmit widget in this app. Use the existing auth flow and a stable logged-in user ID for distinctId.`
- `Install Tranzmit replay capture in this app without breaking SSR.`
- `Install both the Tranzmit widget and replay tracking in this codebase. Prefer the smallest global integration point.`

## What This Repo Contains

- `skills/install-tranzmit-sdk` — the main Claude skill
- `docs` — customer-facing docs and fallback manual instructions
- `packages/tranzmit-web` — optional package-based helper, secondary to the Claude flow

## Preferred Integration Order

1. **Claude skill** — best default
2. **Manual docs** — fallback for non-agent users
3. **Package install** — optional helper if a team prefers dependency-based setup

## What Claude Needs From The User

- Tranzmit project API key
- Tranzmit app endpoint
- the app's stable logged-in user ID or analytics distinct ID
- whether they want **widget**, **replay**, or **both**

## Why This Repo Exists

Tranzmit installation is framework-specific. A coding agent can usually do a better job than a static setup guide because it can:

- find the right root layout or authenticated shell
- keep browser-only code out of server-only files
- reuse the app's actual auth and user-loading patterns
- avoid duplicate installs across route transitions

## Start Here

- `docs/use-with-claude.md`
- `docs/quickstart.md`
- `skills/install-tranzmit-sdk/SKILL.md`
