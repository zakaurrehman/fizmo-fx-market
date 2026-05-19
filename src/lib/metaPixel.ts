// Centralized Meta Pixel (Facebook) helper.
// The base pixel snippet + `fbq('init', ...)` live in index.html; this module
// only fires Standard Events on top of it. All calls are no-ops if the pixel
// script hasn't loaded (e.g. blocked by an ad blocker), so callers never need
// to guard.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export type PixelParams = Record<string, string | number | boolean | undefined>

// Meta Pixel Standard Events used on this site. Keeping the union here means a
// typo in a track call is a compile error rather than silently-dropped data.
export type StandardEvent =
  | 'PageView'
  | 'ViewContent'
  | 'Lead'
  | 'Contact'

export function trackPixel(event: StandardEvent, params?: PixelParams): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
  if (params) {
    window.fbq('track', event, params)
  } else {
    window.fbq('track', event)
  }
}
