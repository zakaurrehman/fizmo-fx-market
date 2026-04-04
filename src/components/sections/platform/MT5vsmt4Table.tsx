import { Check, X } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

const REGISTER_URL = 'https://my.fizmofxmarkets.com/register'

type CellValue = string | boolean

interface ComparisonRow {
  feature: string
  mt4: CellValue
  mt5: CellValue
}

const comparisonRows: ComparisonRow[] = [
  { feature: 'Timeframes', mt4: '9', mt5: '21' },
  { feature: 'Technical Indicators', mt4: '30', mt5: '38' },
  { feature: 'Order Types', mt4: '4', mt5: '6' },
  { feature: 'Asset Classes', mt4: 'Forex only', mt5: 'Multi-asset' },
  { feature: 'Built-in Economic Calendar', mt4: false, mt5: true },
  { feature: 'Depth of Market (DOM)', mt4: false, mt5: true },
  { feature: 'Strategy Tester', mt4: 'Single-threaded', mt5: 'Multi-threaded' },
  { feature: 'Copy Trading', mt4: false, mt5: true },
  { feature: 'Partial Order Fill', mt4: false, mt5: true },
  { feature: 'Netting & Hedging', mt4: 'Hedging only', mt5: 'Both modes' },
]

interface CellProps {
  value: CellValue
  isHighlighted?: boolean
}

function Cell({ value, isHighlighted = false }: CellProps) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check
        className="w-5 h-5 inline-block"
        style={{ color: 'var(--green-400)' }}
        aria-label="Yes"
      />
    ) : (
      <X
        className="w-5 h-5 inline-block"
        style={{ color: 'var(--red-400)' }}
        aria-label="No"
      />
    )
  }

  return (
    <span
      className="font-mono text-sm"
      style={{ color: isHighlighted ? 'var(--gold-300)' : 'var(--text-secondary)' }}
    >
      {value}
    </span>
  )
}

export function MT5vsmt4Table() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="container-max">
        <SectionHeader
          eyebrow="Platform Comparison"
          title={
            <>
              Why MT5 Over{' '}
              <span className="text-gradient-gold">MT4?</span>
            </>
          }
          subtitle="MetaTrader 5 is the evolution of MT4, with significant improvements across every dimension."
        />

        <ScrollReveal direction="up" delay={0.1}>
          <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--border-subtle)]">
            <table className="w-full min-w-[560px] border-collapse">
              {/* Header */}
              <thead>
                <tr
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.06))',
                  }}
                >
                  <th className="text-left px-6 py-4 font-display font-semibold text-[var(--text-primary)] text-sm tracking-wide border-b border-[var(--border-gold)]">
                    Feature
                  </th>
                  <th className="px-6 py-4 font-display font-semibold text-[var(--text-muted)] text-sm tracking-wide border-b border-[var(--border-subtle)] text-center">
                    MT4
                  </th>
                  <th
                    className="px-6 py-4 font-display font-semibold text-sm tracking-wide border-b text-center"
                    style={{
                      color: 'var(--gold-300)',
                      borderBottomColor: 'var(--border-gold)',
                    }}
                  >
                    MT5
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {comparisonRows.map((row, index) => {
                  const isOdd = index % 2 === 0
                  const oddBg = 'rgba(8,11,20,0.6)'
                  const evenBg = 'rgba(13,17,32,0.4)'

                  return (
                    <tr
                      key={row.feature}
                      style={{ background: isOdd ? oddBg : evenBg }}
                      className="transition-colors duration-150 hover:bg-[rgba(201,168,76,0.03)]"
                    >
                      {/* Feature */}
                      <td className="px-6 py-3.5 text-sm font-body text-[var(--text-secondary)] border-b border-[var(--border-subtle)]">
                        {row.feature}
                      </td>

                      {/* MT4 — muted */}
                      <td className="px-6 py-3.5 border-b border-[var(--border-subtle)] text-center">
                        <Cell value={row.mt4} isHighlighted={false} />
                      </td>

                      {/* MT5 — gold tint */}
                      <td
                        className="px-6 py-3.5 border-b text-center"
                        style={{
                          borderBottomColor: 'rgba(201,168,76,0.15)',
                          background: isOdd
                            ? 'rgba(201,168,76,0.07)'
                            : 'rgba(201,168,76,0.04)',
                        }}
                      >
                        <Cell value={row.mt5} isHighlighted={true} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Callout below table */}
        <ScrollReveal direction="up" delay={0.25}>
          <div
            className="mt-12 rounded-[var(--radius-xl)] p-8 md:p-12 text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(28,35,64,0.5) 100%)',
              border: '1px solid var(--border-gold)',
            }}
          >
            <h3 className="font-display font-bold text-[var(--text-primary)] text-xl md:text-2xl mb-3">
              Available on MT5 with Fizmo FX
            </h3>
            <p className="font-body text-[var(--text-secondary)] mb-8 max-w-md mx-auto text-sm">
              Open a live or demo account today and experience MetaTrader 5 at
              its best — institutional speeds, professional tools, zero
              commission on Standard and Pro.
            </p>
            <Button variant="primary" size="lg" href={REGISTER_URL} external>
              Get Started with MT5
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
