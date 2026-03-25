---
name: install-tranzmit-sdk
description: Install Tranzmit into a client codebase using the public Tranzmit package and docs. Use when asked to add the Tranzmit widget, install replay capture, wire Tranzmit into Next.js or React, or generate the exact integration snippet for a customer app.
---

Install Tranzmit using the public integration surface, not private product internals.

## Default approach
1. Prefer the public npm package `@tranzmit/web`.
2. Read only the relevant reference file for the target integration.
3. Install in the app's global authenticated shell when possible.
4. Use env vars for `apiKey` and `endpoint` unless the repo already has a secure config pattern.
5. Reuse the app's real stable user ID for `distinctId`.

## References
- `references/package-install.md`
- `references/widget-install.md`
- `references/replay-install.md`

## Rules
- Prefer package install over raw script tags.
- Fall back to manual snippets only if the repo cannot add npm dependencies.
- Do not hardcode production secrets into source files.
- Install once globally instead of duplicating per-page.
- Keep SSR-safe boundaries intact.

## Expected output
- `@tranzmit/web` added or referenced
- one app-level bootstrap point wired in
- env placeholders or config values documented
- light validation run when practical
