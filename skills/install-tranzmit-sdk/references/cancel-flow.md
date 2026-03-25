# Cancel flow reference

The main Tranzmit use case is cancel-flow instrumentation.

## What to find first
- cancel CTA button
- billing downgrade route
- settings cancellation modal
- any exit-intent or cancellation confirmation step

## Identity strategy
Prefer:
1. PostHog distinct ID already used by the app
2. Amplitude distinct/user ID already used by the app
3. stable authenticated user ID

## Install strategy
- install the widget where the correct user identity is available consistently
- install replay where the cancellation experience actually happens and browser-only code is safe
- avoid duplicate script injection across route transitions
