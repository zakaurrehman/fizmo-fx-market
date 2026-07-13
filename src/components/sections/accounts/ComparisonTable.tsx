import type { ReactNode } from 'react'
import { Check } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface TableRow {
  feature: string
  standard: ReactNode
  pro: ReactNode
  ecn: ReactNode
}

function CheckIcon() {
  return <Check className="w-4 h-4 inline-block" style={{ color: 'var(--green-400)' }} />
}

const tableRows: TableRow[] = [
  {
    feature: 'Min Deposit',
    standard: '$10',
    pro: '$300',
    ecn: '$500',
  },
  {
    feature: 'Spread From',
    standard: '0.30 pip',
    pro: '0.23 pip',
    ecn: '0.16 pip',
  },
  {
    feature: 'Commission',
    standard: 'None',
    pro: 'None',
    ecn: '$7.00/lot/side',
  },
  {
    feature: 'Leverage',
    standard: '1:2000',
    pro: '1:2000',
    ecn: '1:2000',
  },
  {
    feature: 'Execution',
    standard: 'Market',
    pro: 'Instant/Market',
    ecn: 'Market (ECN)',
  },
  {
    feature: 'Min Lot',
    standard: '0.01',
    pro: '0.01',
    ecn: '0.01',
  },
  {
    feature: 'Max Positions',
    standard: 'Unlimited',
    pro: 'Unlimited',
    ecn: 'Unlimited',
  },
  {
    feature: 'Margin Call',
    standard: '30%',
    pro: '30%',
    ecn: '30%',
  },
  {
    feature: 'Swap-Free',
    standard: <CheckIcon />,
    pro: <CheckIcon />,
    ecn: <CheckIcon />,
  },
  {
    feature: 'Instruments',
    standard: 'All',
    pro: 'All',
    ecn: 'All',
  },
  {
    feature: 'Scalping',
    standard: <CheckIcon />,
    pro: <CheckIcon />,
    ecn: <CheckIcon />,
  },
  {
    feature: 'Hedging',
    standard: <CheckIcon />,
    pro: <CheckIcon />,
    ecn: <CheckIcon />,
  },
  {
    feature: 'Expert Advisors',
    standard: <CheckIcon />,
    pro: <CheckIcon />,
    ecn: <CheckIcon />,
  },
]

export function ComparisonTable() {
  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#FFFFFF' }}
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="Side by Side"
          title={
            <>
              Full Feature{' '}
              <span className="text-gradient-accent">Comparison</span>
            </>
          }
          subtitle="A complete breakdown of every feature across all three account types."
        />

        <ScrollReveal direction="up" delay={0.1}>
          <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--border-subtle)]">
            <table className="w-full min-w-[640px] border-collapse">
              {/* Header — keep dark */}
              <thead>
                <tr style={{ background: '#0D1120' }}>
                  <th className="text-left px-6 py-4 font-display font-semibold text-white text-sm tracking-wide border-b border-[var(--border-accent)]">
                    Feature
                  </th>
                  <th className="px-6 py-4 font-display font-semibold text-white text-sm tracking-wide border-b border-[rgba(255,255,255,0.1)] text-center">
                    Standard
                  </th>
                  <th
                    className="px-6 py-4 font-display font-semibold text-sm tracking-wide border-b text-center"
                    style={{
                      color: 'var(--accent-300)',
                      borderBottomColor: 'var(--border-accent)',
                    }}
                  >
                    Pro
                  </th>
                  <th className="px-6 py-4 font-display font-semibold text-white text-sm tracking-wide border-b border-[rgba(255,255,255,0.1)] text-center">
                    ECN
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {tableRows.map((row, index) => {
                  const isOdd = index % 2 === 0
                  const oddBg = '#FFFFFF'
                  const evenBg = '#F7F9FC'

                  return (
                    <tr
                      key={row.feature}
                      style={{ background: isOdd ? oddBg : evenBg }}
                      className="transition-colors duration-150 hover:bg-[rgba(59,130,246,0.04)]"
                    >
                      {/* Feature label */}
                      <td className="px-6 py-3.5 text-sm font-body text-[var(--text-secondary)] border-b border-[var(--border-subtle)]">
                        {row.feature}
                      </td>

                      {/* Standard */}
                      <td className="px-6 py-3.5 text-sm font-mono text-[var(--text-primary)] border-b border-[var(--border-subtle)] text-center">
                        {row.standard}
                      </td>

                      {/* Pro — gold tint */}
                      <td
                        className="px-6 py-3.5 text-sm font-mono border-b text-center"
                        style={{
                          color: 'var(--accent-300)',
                          borderBottomColor: 'rgba(59,130,246,0.15)',
                          background: 'rgba(59,130,246,0.06)',
                        }}
                      >
                        {row.pro}
                      </td>

                      {/* ECN */}
                      <td className="px-6 py-3.5 text-sm font-mono text-[var(--text-primary)] border-b border-[var(--border-subtle)] text-center">
                        {row.ecn}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
