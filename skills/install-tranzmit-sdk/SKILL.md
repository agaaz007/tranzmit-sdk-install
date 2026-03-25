---
name: install-tranzmit-sdk
description: Install Tranzmit into a client codebase with Claude or another coding agent. Use when asked to add the Tranzmit widget, install replay capture, wire Tranzmit into Next.js or React, or generate the exact integration patch for a customer app.
---

Install Tranzmit directly into the customer's codebase using the app's existing framework, auth flow, and layout structure.

## Default approach
1. Prefer a direct Claude-guided integration over adding a package dependency.
2. Read only the relevant reference file for the target integration.
3. Install in the app's global authenticated shell when possible.
4. Use env vars or existing config patterns for `apiKey` and `endpoint`.
5. Reuse the app's real stable user ID for `distinctId`.
6. Only use the package helper if the user explicitly wants a package-based install.

## References
- `references/claude-prompts.md`
- `references/widget-install.md`
- `references/replay-install.md`
- `references/package-install.md`

## Rules
- Prefer direct integration over adding dependencies when both are equally clean.
- Do not hardcode production secrets into source files.
- Install once globally instead of duplicating per-page.
- Keep SSR-safe boundaries intact.
- Keep browser-only code out of server-only files.

## Expected output
- one app-level bootstrap point wired in
- config values or env placeholders documented
- widget, replay, or both installed cleanly
- light validation run when practical
