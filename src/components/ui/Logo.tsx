interface LogoProps {
  /** 'dark' = logo2 (for dark navbar/footer), 'light' = logo3 (for light backgrounds) */
  variant?: 'dark' | 'light'
  /** Rendered height in px — width scales automatically */
  height?: number
  className?: string
}

export function Logo({ variant = 'dark', height = 36, className = '' }: LogoProps) {
  const src = variant === 'dark' ? '/logo2.png' : '/logo3.png'
  return (
    <img
      src={src}
      alt="Fizmo FX Markets"
      style={{
        height: `${height}px`,
        width: 'auto',
        display: 'block',
        // Stopgap: the logo PNGs are gold; shift them toward the emerald
        // accent until re-exported brand assets replace the files.
        filter: 'hue-rotate(105deg) saturate(1.15)',
      }}
      className={className}
    />
  )
}
