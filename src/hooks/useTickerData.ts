import { useState, useEffect } from 'react'
import { tickerData } from '@/data/tickerData'
import type { TickerItem } from '@/types'

export function useTickerData() {
  const [items, setItems] = useState<TickerItem[]>(tickerData)

  useEffect(() => {
    // Simulate price updates every 3 seconds
    const interval = setInterval(() => {
      setItems(prev =>
        prev.map(item => {
          const basePrice = parseFloat(item.price.replace(/,/g, ''))
          const fluctuation = basePrice * (Math.random() * 0.002 - 0.001)
          const newPrice = basePrice + fluctuation
          const change = fluctuation
          const changePercent = (fluctuation / basePrice) * 100

          const positive = change >= 0
          const priceStr =
            basePrice > 1000
              ? newPrice.toLocaleString('en-US', { maximumFractionDigits: 2 })
              : newPrice.toFixed(basePrice < 1 ? 4 : 4)

          return {
            ...item,
            price: priceStr,
            change: `${positive ? '+' : ''}${change.toFixed(basePrice < 1 ? 4 : 2)}`,
            changePercent: `${positive ? '+' : ''}${changePercent.toFixed(2)}%`,
            positive,
          }
        })
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return items
}
