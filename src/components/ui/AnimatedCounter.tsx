import { clsx } from 'clsx'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

interface AnimatedCounterProps {
  target: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
  label?: string
  sublabel?: string
}

export function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2000,
  className,
  label,
  sublabel,
}: AnimatedCounterProps) {
  const { ref, displayValue } = useAnimatedCounter({
    target,
    prefix,
    suffix,
    decimals,
    duration,
  })

  return (
    <div ref={ref} className={clsx('text-center', className)}>
      <div className="stat-number text-[var(--accent-500)] font-mono font-bold text-4xl md:text-5xl leading-none">
        {displayValue}
      </div>
      {label && (
        <p className="mt-2 font-display font-semibold text-[var(--text-primary)] text-sm uppercase tracking-wider">
          {label}
        </p>
      )}
      {sublabel && (
        <p className="mt-1 text-[var(--text-muted)] text-xs font-body">{sublabel}</p>
      )}
    </div>
  )
}
