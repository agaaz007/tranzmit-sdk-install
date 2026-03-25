# Widget install reference

Preferred path: patch the customer app directly.

## Manual widget snippet

```html
<script>
  window.TRANZMIT_WIDGET_CONFIG = {
    apiKey: 'tranzmit_...',
    endpoint: 'https://app.tranzmit.com',
    distinctId: user.id
  };
</script>
<script src="https://app.tranzmit.com/tranzmit-widget.js"></script>
```

## Good `distinctId` values
- authenticated app user ID
- analytics distinct ID
- stable account-scoped identifier
