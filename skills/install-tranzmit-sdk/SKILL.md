---
name: install-tranzmit-sdk
description: Install Tranzmit into a client codebase with Claude or another coding agent. Use when asked to install Tranzmit on a cancel flow, add the Tranzmit widget, install replay capture, reuse a PostHog or Amplitude distinct ID, or generate the exact integration patch for a customer app.
---

Install Tranzmit directly into the customer's codebase using the app's existing framework, auth flow, cancellation flow, and layout structure.

## Default approach
1. Prefer a direct Claude-guided integration over adding a package dependency.
2. Start by finding the cancel CTA, cancel route, or downgrade flow if the request is cancel-related.
3. Find the best stable identity source, preferring PostHog or Amplitude distinct IDs already used by the app.
4. Read only the relevant reference file for the target integration.
5. Install in the app's global authenticated shell or the smallest stable cancel-flow surface.
6. Use env vars or existing config patterns for `apiKey` and `endpoint`.
7. Only use the package helper if the user explicitly wants a package-based install.

## References
- `references/claude-prompts.md`
- `references/cancel-flow.md`
- `references/widget-install.md`
- `references/replay-install.md`
- `references/package-install.md`

## Rules
- Prefer direct integration over adding dependencies when both are equally clean.
- Prefer the real browser scripts documented in `artifacts/` and the docs over inventing a new integration shape.
- Do not hardcode production secrets into source files.
- Install once globally instead of duplicating per-page.
- Keep SSR-safe boundaries intact.
- Keep browser-only code out of server-only files.

## Expected output
- the correct cancel-flow or authenticated-shell integration point wired in
- config values or env placeholders documented
- widget, replay, or both installed cleanly
- light validation run when practical
