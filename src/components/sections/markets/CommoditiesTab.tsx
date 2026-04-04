import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { commodityInstruments } from '@/data/marketsData'
import type { CommodityInstrument } from '@/types'

const REGISTER_URL = 'https://my.fizmofxmarkets.com/register'

const featureList: string[] = [
  '20+ commodity instruments',
  'Precious metals: Gold, Silver, Platinum',
  'Energy: WTI Crude, Brent Crude, Natural Gas',
  'Agricultural: Coffee, Cocoa, Cotton, Sugar',
  'Zero commissions on commodity CFDs',
  'Competitive overnight financing rates',
]

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Precious Metal': {
    bg: 'rgba(201,168,76,0.1)',
    text: 'var(--gold-300)',
    border: 'rgba(201,168,76,0.3)',
  },
  Energy: {
    bg: 'rgba(45,212,191,0.1)',
    text: 'var(--teal-400)',
    border: 'rgba(45,212,191,0.3)',
  },
  Agricultural: {
    bg: 'rgba(52,211,153,0.1)',
    text: 'var(--green-400)',
    border: 'rgba(52,211,153,0.3)',
  },
  Industrial: {
    bg: 'rgba(148,163,196,0.1)',
    text: 'var(--text-secondary)',
    border: 'rgba(148,163,196,0.3)',
  },
}

function getCategoryStyle(category: string) {
  return (
    categoryColors[category] ?? {
      bg: 'rgba(74,85,128,0.1)',
      text: 'var(--text-muted)',
      border: 'rgba(74,85,128,0.3)',
    }
  )
}

export function CommoditiesTab() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
      {/* Left — 40% */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-[40%] flex-shrink-0"
      >
        <h2 className="font-display font-bold text-[var(--text-primary)] text-2xl md:text-3xl mb-4 leading-tight">
          Commodities &{' '}
          <span className="text-gradient-gold">Precious Metals</span>
        </h2>
        <p className="font-body text-[var(--text-secondary)] text-base leading-relaxed mb-8">
          From gold and oil to agricultural products — trade real-world assets
          as CFDs with zero commissions and tight spreads.
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
          Trade Commodities Now
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
          <table className="w-full border-collapse">
            <thead>
              <tr
                style={{
                  background:
                    'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.06))',
                }}
              >
                {['Symbol', 'Name', 'Category', 'Spread From', 'Leverage'].map(
                  (col) => (
                    <th
                      key={col}
                      className="px-4 py-3 text-left text-xs font-mono font-semibold tracking-wider border-b border-[var(--border-gold)]"
                      style={{ color: 'var(--gold-300)' }}
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {commodityInstruments.map((row: CommodityInstrument, index: number) => {
                const catStyle = getCategoryStyle(row.category)
                return (
                  <tr
                    key={row.symbol}
                    className="transition-colors duration-150 hover:bg-[rgba(201,168,76,0.05)]"
                    style={{
                      background:
                        index % 2 === 0
                          ? 'rgba(8,11,20,0.5)'
                          : 'rgba(13,17,32,0.4)',
                    }}
                  >
                    <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                      <span
                        className="font-mono font-bold text-sm"
                        style={{ color: 'var(--gold-300)' }}
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
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{
                          background: catStyle.bg,
                          color: catStyle.text,
                          border: `1px solid ${catStyle.border}`,
                        }}
                      >
                        {row.category}
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
                )
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs font-body text-[var(--text-muted)] text-right">
          Showing {commodityInstruments.length} of 20+ available commodities
        </p>
      </motion.div>
    </div>
  )
}
