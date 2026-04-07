import { useId } from 'react'

interface LogoProps {
  /** 'dark' = white wordmark (use on dark navbar/footer), 'light' = navy wordmark (use on light bg) */
  variant?: 'dark' | 'light'
  /** Rendered height in px — width is calculated from aspect ratio automatically */
  height?: number
  /** Render icon mark only (no wordmark) */
  iconOnly?: boolean
  className?: string
}

/**
 * Fizmo FX Markets inline SVG logo.
 * Uses the document's already-loaded Syne + DM Sans fonts.
 * Gradient IDs are scoped per-instance via React useId to avoid conflicts.
 */
export function Logo({
  variant = 'dark',
  height = 36,
  iconOnly = false,
  className = '',
}: LogoProps) {
  const uid = useId().replace(/:/g, 'u')
  const wordmarkColor = variant === 'dark' ? '#FFFFFF' : '#0D1120'

  /* ── Shared gradient defs ── */
  const Defs = () => (
    <defs>
      {/* Bright gold — inner/tall bars */}
      <linearGradient id={`${uid}a`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5DC7A" />
        <stop offset="60%" stopColor="#C9A84C" />
        <stop offset="100%" stopColor="#8A6210" />
      </linearGradient>
      {/* Dim gold — outer/short bars */}
      <linearGradient id={`${uid}b`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#D4B455" stopOpacity={0.85} />
        <stop offset="100%" stopColor="#6B4C10" stopOpacity={0.75} />
      </linearGradient>
      {/* Subtle inner highlight */}
      <linearGradient id={`${uid}h`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.22} />
        <stop offset="60%" stopColor="#FFFFFF" stopOpacity={0.04} />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
      </linearGradient>
    </defs>
  )

  /* ── 4-bar chart icon ── */
  /* All bars bottom-aligned at y=49; skewX(-8) gives the forward-lean italic feel */
  const Bars = () => (
    <g transform="translate(8, 1) skewX(-8)">
      {/* Bar 1 — outer left, medium */}
      <rect x="0"  y="21" width="8" height="28" rx="1.5" fill={`url(#${uid}b)`} />
      {/* Bar 2 — tallest */}
      <rect x="12" y="3"  width="8" height="46" rx="1.5" fill={`url(#${uid}a)`} />
      <rect x="12" y="3"  width="3" height="46" rx="1"   fill={`url(#${uid}h)`} />
      {/* Bar 3 — second tallest */}
      <rect x="24" y="9"  width="8" height="40" rx="1.5" fill={`url(#${uid}a)`} />
      <rect x="24" y="9"  width="3" height="40" rx="1"   fill={`url(#${uid}h)`} />
      {/* Bar 4 — outer right, short */}
      <rect x="36" y="27" width="8" height="22" rx="1.5" fill={`url(#${uid}b)`} />
    </g>
  )

  /* ── Icon-only mode (for favicons / tight spaces) ── */
  if (iconOnly) {
    return (
      <svg
        viewBox="0 0 54 52"
        width={Math.round(height * 54 / 52)}
        height={height}
        className={className}
        role="img"
        aria-label="Fizmo FX Markets"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Defs />
        <Bars />
      </svg>
    )
  }

  /* ── Full horizontal logo ── */
  const viewW = 222
  const viewH = 52
  return (
    <svg
      viewBox={`0 0 ${viewW} ${viewH}`}
      width={Math.round(height * viewW / viewH)}
      height={height}
      className={className}
      role="img"
      aria-label="Fizmo FX Markets"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Defs />
      <Bars />

      {/* Thin vertical separator */}
      <line
        x1="64" y1="9" x2="64" y2="43"
        stroke="#C9A84C" strokeOpacity={0.3} strokeWidth={1}
      />

      {/* FIZMO wordmark */}
      <text
        x="73" y="31"
        fontFamily="Syne, 'DM Sans', Arial, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={wordmarkColor}
        letterSpacing="-0.3"
      >
        FIZMO
      </text>

      {/* FX MARKETS sub-line */}
      <text
        x="74.5" y="45"
        fontFamily="'DM Sans', Arial, sans-serif"
        fontWeight="400"
        fontSize="9"
        fill="#C9A84C"
        letterSpacing="3.1"
      >
        FX MARKETS
      </text>
    </svg>
  )
}
