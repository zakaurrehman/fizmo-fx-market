import { useEffect, useRef, useState } from 'react'

interface UseAnimatedCounterOptions {
  target: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
}

export function useAnimatedCounter({
  target,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
}: UseAnimatedCounterOptions) {
  const [value, setValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = performance.now()
    const startValue = 0

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = startValue + (target - startValue) * eased

      setValue(parseFloat(current.toFixed(decimals)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setValue(target)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration, decimals])

  const displayValue = `${prefix}${decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()}${suffix}`

  return { ref, value, displayValue }
}
