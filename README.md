# Tranzmit Public Kit

This folder is a copy-ready scaffold for a separate public GitHub repo.

Target repo: `https://github.com/agaaz007/tranzmit-sdk-install`

## What to publish
- `packages/tranzmit-web` — npm package for installing the Tranzmit widget or replay SDK in browser apps.
- `docs` — customer-facing integration docs.
- `skills/install-tranzmit-sdk` — public agent skill that teaches Claude/Codex-style agents how to install Tranzmit cleanly.

## Recommended public repo layout
```text
tranzmit-public/
├── packages/
│   └── tranzmit-web/
├── docs/
└── skills/
    └── install-tranzmit-sdk/
```

## Recommended rollout
1. Publish `packages/tranzmit-web` to npm as `@tranzmit/web`.
2. Publish `docs/` to a docs site like `docs.tranzmit.com`.
3. Put `skills/install-tranzmit-sdk` in the same public repo so AI agents can discover it.
4. Keep product-specific backend logic and private app code in this private repo.

## Publish checklist
1. Copy the contents of `public-kit/` into the root of the public repo.
2. Add a license file that matches how you want customers to use the package.
3. From `packages/tranzmit-web`, run `npm publish --access public`.
4. Point docs hosting at `docs/` or move these files into your docs site.
5. Keep the skill directory public so AI agents can consume it without private repo access.

## Why this is the best option
- Customers get a normal install path with npm and docs.
- AI agents get a clean public skill without needing access to your private app repo.
- You can evolve integration docs and the package independently from the product internals.
