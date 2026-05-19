# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing/brochure website for "Fizmo FX Markets" (a forex/CFD broker). It is a
client-rendered React 19 + TypeScript + Vite single-page app with no backend —
all content is static data and any "live" behavior is simulated. Account
login/registration links point to the external `my.fizmofxmarkets.com` domain;
those flows are not part of this codebase.

## Commands

```bash
npm run dev      # Vite dev server with HMR
npm run build    # tsc -b (typecheck) then vite build → dist/
npm run lint     # ESLint over the repo
npm run preview  # serve the production build locally
```

There is no test framework or test suite in this project. `npm run build`
typechecks the whole project (`tsc -b`) and will fail the build on type errors,
so use it as the verification step after changes.

## Architecture

**Routing & page shell.** `src/main.tsx` mounts `BrowserRouter` → `App`.
`src/App.tsx` owns all routes, wraps every page in `Layout`
(Navbar + TickerBar + Footer), and applies framer-motion enter/exit
transitions via `AnimatePresence` keyed on `location.pathname`. It also renders
`ScrollToTop` (scrolls to top on every navigation) and redirects unknown paths
to `/`. The four `/markets/*` sub-routes all render the same `MarketsPage`;
the active market tab is derived from the URL inside `MarketsTabs`. Because
this is an SPA served with deep links, `vercel.json` rewrites all paths to
`/index.html` — keep that in sync if routes change.

**Pages are thin compositions.** Each `src/pages/*Page.tsx` does two things:
call the `useMeta` hook with its entry from `src/data/seoData.ts`, then render
an ordered list of section components from `src/components/sections/<page>/`.
Put real markup/logic in section components, not in page files.

**Component layering.**
- `src/components/ui/` — reusable primitives (Button, Card, Badge, ScrollReveal,
  AnimatedCounter, etc.). `Button` renders an `<a>` when given `href`, a
  `<button>` otherwise, and is variant/size-driven.
- `src/components/sections/<page>/` — page-specific composed sections.
- `src/components/layout/` — Navbar, Footer, TickerBar, Layout.

**Content is data-driven.** Static content lives in `src/data/*.ts` as typed
arrays/objects; all shared types and the `zod` contact-form schema
(`ContactFormSchema` / `ContactFormData`) live in `src/types/index.ts`. To
change copy, instruments, FAQs, testimonials, news, or ticker symbols, edit the
corresponding data file rather than the components. The contact form uses
`react-hook-form` + `@hookform/resolvers` with that zod schema.

**SEO/meta.** `src/hooks/useMeta.ts` imperatively mutates `document.head`
(title, description, keywords, OpenGraph/Twitter tags, canonical link) on mount
— there is no react-helmet. `src/data/seoData.ts` is the single source of per-
route metadata; add an entry there and pass it to `useMeta` when adding a page.

**Simulated data.** `src/hooks/useTickerData.ts` does NOT call an API — it
applies random fluctuations to `src/data/tickerData.ts` every 3s via
`setInterval`. There is no real market-data integration anywhere.

## Styling system

Theme is defined as CSS custom properties in `src/styles/globals.css` — the
**only** stylesheet imported (by `main.tsx`). `src/index.css` and
`src/App.css` are leftover Vite template files and are not imported; do not add
styles there.

- `tailwind.config.ts` re-exposes the CSS variables as Tailwind tokens
  (e.g. `text-gold`, `bg-card`) plus custom fonts (`font-display` = Syne,
  `font-body` = DM Sans, `font-mono` = JetBrains Mono), animations, and shadows.
- `globals.css` `@layer components` defines shared utility classes used
  throughout: `.container-max`, `.section-padding`, `.section-padding-sm`, and
  `.section-light-theme` (add this class to a section to flip it to a white/
  light theme — used by the markets tabs).
- Styling mixes Tailwind utilities with inline `style={{ ... }}` referencing
  `var(--token)`; both patterns are intentional and used together. The visual
  identity is a dark navy + gold theme — prefer the existing CSS variables and
  Tailwind tokens over hard-coded colors.

## Conventions

- Import via the `@/` alias (`@/components/...`, `@/data/...`) — it maps to
  `src/` (configured in both `vite.config.ts` and `tsconfig`).
- Components are named function exports (`export function Foo()`), not default
  exports, except `App` and the `useMeta` hook.
- React 19 with the new JSX transform; no `import React` needed for JSX.
- Animations use `framer-motion`; reveal-on-scroll is handled by the
  `ScrollReveal` component / `useScrollReveal` hook.
