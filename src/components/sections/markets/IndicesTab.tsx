import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { indexInstruments } from '@/data/marketsData'
import type { IndexInstrument } from '@/types'

const REGISTER_URL = 'https://my.fizmofxmarkets.com/register'

const featureList: string[] = [
  '15+ major global indices',
  'US, European and Asian markets covered',
  'Ultra-low spreads — SPX500 from 0.4 points',
  'Leverage up to 1:200',
  'Extended trading hours on key indices',
  'No ownership of underlying stocks required',
]

export function IndicesTab() {
  return (
    <div className="section-light-theme flex flex-col lg:flex-row gap-10 xl:gap-16">
      {/* Left — 40% */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-[40%] flex-shrink-0"
      >
        <h2 className="font-display font-bold text-[var(--text-primary)] text-2xl md:text-3xl mb-4 leading-tight">
          Global{' '}
          <span className="text-gradient-accent">Stock Indices</span>
        </h2>
        <p className="font-body text-[var(--text-secondary)] text-base leading-relaxed mb-8">
          Gain exposure to the world's leading equity benchmarks — from Wall
          Street to Tokyo — with tight spreads and flexible leverage.
        </p>

        <ul className="space-y-3 mb-10">
          {featureList.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(52,211,153,0.12)',
                  border: '1px solid rgba(52,211,153,0.3)',
                }}
              >
                <Check className="w-3 h-3" style={{ color: 'var(--green-400)' }} />
              </span>
              <span className="font-body text-[var(--text-secondary)] text-sm leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Button variant="primary" size="md" href={REGISTER_URL} external>
          Trade Indices Now
        </Button>
      </motion.div>

      {/* Right — 60% */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:w-[60%] overflow-x-auto"
      >
        <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-subtle)] min-w-[480px]">
          <table className="light-table w-full border-collapse">
            <thead>
              <tr style={{ background: '#0D1120' }}>
                {['Symbol', 'Name', 'Country', 'Spread From', 'Leverage'].map(
                  (col) => (
                    <th
                      key={col}
                      className="px-4 py-3 text-left text-xs font-mono font-semibold tracking-wider border-b border-[var(--border-accent)]"
                      style={{ color: 'var(--accent-300)' }}
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {indexInstruments.map((row: IndexInstrument, index: number) => (
                <tr
                  key={row.symbol}
                  className="transition-colors duration-150 hover:bg-[rgba(59,130,246,0.05)]"
                  style={{
                    background: index % 2 === 0 ? '#FFFFFF' : '#F7F9FC',
                  }}
                >
                  <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                    <span
                      className="font-mono font-bold text-sm"
                      style={{ color: '#1D4ED8' }}
                    >
                      {row.symbol}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                    <span className="font-body text-sm text-[var(--text-secondary)]">
                      {row.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                    <span className="font-body text-sm text-[var(--text-muted)]">
                      {row.country}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                    <span className="font-mono text-sm text-[var(--text-primary)]">
                      {row.spreadFrom}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                    <span className="font-mono text-sm text-[var(--text-primary)]">
                      {row.leverage}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs font-body text-[var(--text-muted)] text-right">
          Showing {indexInstruments.length} of 15+ available indices
        </p>
      </motion.div>
    </div>
  )
}
