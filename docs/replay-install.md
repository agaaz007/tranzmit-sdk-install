# Replay Install

Use this only when you are not letting Claude install it for you.

This installs the actual replay browser script copied in `artifacts/tranzmit-replay.js`.

## Claude-first prompt

```text
Install Tranzmit replay tracking in this app. Keep it browser-only, load rrweb before Tranzmit replay, and avoid duplicate installs.
```

## Manual fallback

```html
<script src="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb-all.min.js"></script>
<script>
  window.TRANZMIT_CONFIG = {
    apiKey: 'tranzmit_...',
    endpoint: 'https://app.tranzmit.com'
  };
</script>
<script src="https://app.tranzmit.com/tranzmit-replay.js"></script>
```

This key is meant to be browser-safe and project-scoped. Do not substitute backend provider secrets.
