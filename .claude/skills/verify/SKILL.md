---
name: verify
description: Verify changes to this Vite React SPA by serving the production build and driving it with headless Edge.
---

# Verifying fizmo-fx-markets

No test suite exists. `npm run build` (tsc + vite) is the static gate;
runtime verification is done against the production build.

## Recipe (confirmed working on this machine)

1. Build and serve:
   - `npm run build`
   - `npm run preview` (background) → serves `dist/` at http://localhost:4173
     with SPA fallback, so deep links like `/accounts` work.
2. Drive with headless Edge (installed at
   `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`):
   - Rendered DOM: `msedge --headless=new --disable-gpu --dump-dom
     --virtual-time-budget=10000 <url> > page.html`, then grep for
     page-specific text (e.g. hero headline, "XAU/USD" proves the lazy
     HeroChart chunk loaded).
   - Screenshot: `msedge --headless=new --disable-gpu
     --window-size=1366,900 --screenshot=<path> --virtual-time-budget=12000 <url>`
     (path must be a Windows path — use `cygpath -w` from Git Bash).

## Gotchas

- Framer-motion elements can appear with `opacity: 0` in DOM dumps and the
  recharts hero chart plot can look empty in screenshots — both are the
  headless virtual-time freeze catching mount animations at frame 0, not
  bugs. Trust the DOM (`recharts-area-area` path `d=` attribute with real
  coordinates) over the screenshot for the chart.
- Unknown routes redirect to `/` (catch-all `<Navigate>`), so a bogus URL
  rendering the homepage is correct behavior.
