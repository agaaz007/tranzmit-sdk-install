# Tranzmit Integration Overview

Tranzmit is designed to be installed **Claude-first**.

Primary surfaces:

1. **Claude skill** — preferred path
2. **manual docs** — fallback path
3. **optional package** — secondary helper for teams that want dependency-based setup

Why Claude-first works better:

- installation depends on framework and routing model
- auth/user identity already exists in the customer app
- widget setup must use a stable `distinctId`
- replay setup must stay browser-only and load in the right order

Recommended reading order:
- `use-with-claude.md`
- `cancel-flow-install.md`
- `actual-sdk-surface.md`
- `quickstart.md`
- `widget-install.md`
- `replay-install.md`
