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
      style={{ height: `${height}px`, width: 'auto', display: 'block' }}
      className={className}
    />
  )
}
