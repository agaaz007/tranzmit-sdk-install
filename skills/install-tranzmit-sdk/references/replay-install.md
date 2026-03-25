# Replay install reference

Preferred path: patch the customer app directly.

## Manual replay snippet

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

rrweb must load before `tranzmit-replay.js`.
