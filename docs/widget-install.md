# Widget Install

Use this only when you are not letting Claude install it for you.

## Claude-first prompt

```text
Install the Tranzmit widget in this app. Use the existing auth flow and a stable logged-in user ID for distinctId.
```

## Manual fallback

```html
<script>
  window.TRANZMIT_WIDGET_CONFIG = {
    apiKey: 'tranzmit_...',
    endpoint: 'https://app.tranzmit.com',
    distinctId: currentUser.id
  };
</script>
<script src="https://app.tranzmit.com/tranzmit-widget.js"></script>
```

## Required values
- `apiKey`: Tranzmit project API key
- `endpoint`: your Tranzmit base URL
- `distinctId`: stable logged-in user identifier

## Important

Use a stable ID, not a random per-page or per-session value, or dashboard-triggered targeting will not line up with the user you expect.
