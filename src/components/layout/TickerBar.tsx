import { useTickerData } from '@/hooks/useTickerData'

export function TickerBar() {
  const items = useTickerData()
  const doubled = [...items, ...items]

  return (
    <div
      className="relative w-full overflow-hidden border-b border-[var(--border-subtle)]"
      style={{ height: '40px', background: 'var(--bg-secondary)', zIndex: 90 }}
    >
      {/* Left label */}
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center px-4 gap-2"
        style={{ background: 'linear-gradient(90deg, var(--bg-secondary) 80%, transparent)' }}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green-400)] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green-400)]" />
        </span>
        <span className="font-mono text-xs font-medium tracking-[0.15em] uppercase text-[var(--text-accent)]">
          Live Markets
        </span>
        <span className="w-px h-4 bg-[var(--border-subtle)]" />
      </div>

      {/* Scrolling ticker */}
      <div className="flex items-center h-full pl-44">
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 mx-5 shrink-0">
              <span className="font-mono text-xs font-medium text-[var(--text-secondary)]">
                {item.symbol}
              </span>
              <span className="font-mono text-xs font-medium text-[var(--text-primary)]">
                {item.price}
              </span>
              <span
                className={`font-mono text-xs font-medium ${item.positive ? 'text-[var(--green-400)]' : 'text-[var(--red-400)]'}`}
              >
                {item.positive ? '▲' : '▼'} {item.changePercent}
              </span>
              <span className="text-[var(--accent-600)] opacity-40 text-[8px]">●</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
