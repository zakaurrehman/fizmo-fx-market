import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Badge } from '@/components/ui/Badge'

interface RegionStat {
  region: string
  traders: string
  dotX: string
  dotY: string
}

const regions: RegionStat[] = [
  { region: 'Middle East & North Africa', traders: '14,000+ traders', dotX: '55%', dotY: '36%' },
  { region: 'South & Southeast Asia', traders: '18,000+ traders', dotX: '72%', dotY: '44%' },
  { region: 'Sub-Saharan Africa', traders: '8,000+ traders', dotX: '50%', dotY: '58%' },
  { region: 'Europe', traders: '6,000+ traders', dotX: '48%', dotY: '24%' },
  { region: 'Latin America', traders: '4,000+ traders', dotX: '28%', dotY: '60%' },
]

// Simplified continent SVG paths (approximate outlines) — light theme version
function WorldMapSVG() {
  return (
    <svg
      viewBox="0 0 1000 500"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      aria-label="World map showing trader distribution"
    >
      <defs>
        <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(212,175,55,0.08)" />
          <stop offset="100%" stopColor="rgba(212,175,55,0)" />
        </radialGradient>
        {/* Dot pulse animation gradient */}
        <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(212,175,55,0.9)" />
          <stop offset="100%" stopColor="rgba(212,175,55,0)" />
        </radialGradient>
      </defs>

      {/* Background — light ocean fill */}
      <rect width="1000" height="500" fill="#E8E4DC" />

      {/* Background glow */}
      <ellipse cx="500" cy="250" rx="480" ry="230" fill="url(#mapGlow)" />

      {/* Dot grid background */}
      {Array.from({ length: 30 }, (_, row) =>
        Array.from({ length: 60 }, (_, col) => {
          const x = col * 17 + 10
          const y = row * 17 + 10
          return (
            <circle
              key={`grid-${row}-${col}`}
              cx={x}
              cy={y}
              r={1}
              fill="rgba(0,0,0,0.05)"
            />
          )
        })
      )}

      {/* Simplified continent shapes — gold fill on light bg */}
      {/* North America */}
      <path
        d="M 80 80 L 180 70 L 220 90 L 240 130 L 260 160 L 240 200 L 200 220 L 180 260 L 160 280 L 130 270 L 100 240 L 80 200 L 70 160 L 75 120 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />
      {/* Central America / Caribbean */}
      <path
        d="M 180 260 L 210 270 L 220 290 L 200 300 L 180 285 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />
      {/* South America */}
      <path
        d="M 200 300 L 270 280 L 300 310 L 310 360 L 290 420 L 260 460 L 230 460 L 210 430 L 200 380 L 190 330 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />
      {/* Europe */}
      <path
        d="M 430 60 L 500 55 L 530 70 L 540 100 L 520 120 L 500 130 L 470 125 L 450 115 L 430 100 L 425 80 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />
      {/* Africa */}
      <path
        d="M 450 140 L 520 130 L 560 150 L 570 200 L 560 250 L 540 310 L 510 360 L 490 380 L 470 370 L 450 330 L 440 280 L 430 220 L 435 170 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />
      {/* Middle East */}
      <path
        d="M 540 130 L 600 120 L 640 140 L 650 170 L 620 190 L 580 185 L 560 170 L 545 150 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />
      {/* South Asia */}
      <path
        d="M 640 140 L 720 130 L 750 160 L 760 200 L 740 230 L 700 240 L 680 220 L 660 200 L 645 170 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />
      {/* Southeast Asia */}
      <path
        d="M 750 160 L 830 150 L 870 170 L 860 210 L 820 230 L 780 225 L 755 200 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />
      {/* East Asia */}
      <path
        d="M 750 80 L 840 70 L 880 90 L 900 130 L 875 155 L 830 150 L 790 130 L 760 110 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />
      {/* Russia / Central Asia */}
      <path
        d="M 500 40 L 750 30 L 800 55 L 780 80 L 700 90 L 600 95 L 530 85 L 500 60 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />
      {/* Australia */}
      <path
        d="M 800 290 L 880 280 L 920 310 L 910 360 L 870 390 L 820 380 L 790 350 L 785 310 Z"
        fill="#D4AF37"
        stroke="rgba(168,134,42,0.4)"
        strokeWidth="1"
        fillOpacity="0.7"
      />

      {/* Region highlight dots */}
      {/* MENA - approx 55%, 36% → x=550, y=180 */}
      <circle cx="570" cy="155" r="12" fill="rgba(212,175,55,0.35)" />
      <circle cx="570" cy="155" r="6" fill="var(--gold-500)">
        <animate attributeName="r" values="5;10;5" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* South/SE Asia - approx 72%, 44% → x=720, y=220 */}
      <circle cx="720" cy="185" r="14" fill="rgba(212,175,55,0.35)" />
      <circle cx="720" cy="185" r="7" fill="var(--gold-500)">
        <animate attributeName="r" values="6;13;6" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Sub-Saharan Africa - approx 50%, 58% → x=500, y=290 */}
      <circle cx="500" cy="290" r="10" fill="rgba(212,175,55,0.35)" />
      <circle cx="500" cy="290" r="5" fill="var(--gold-500)">
        <animate attributeName="r" values="4;9;4" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="2.8s" repeatCount="indefinite" />
      </circle>

      {/* Europe - approx 48%, 24% → x=480, y=120 */}
      <circle cx="480" cy="90" r="9" fill="rgba(212,175,55,0.35)" />
      <circle cx="480" cy="90" r="5" fill="var(--gold-500)">
        <animate attributeName="r" values="4;8;4" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="3.2s" repeatCount="indefinite" />
      </circle>

      {/* Latin America - approx 28%, 60% → x=280, y=300 */}
      <circle cx="250" cy="360" r="9" fill="rgba(212,175,55,0.35)" />
      <circle cx="250" cy="360" r="5" fill="var(--gold-500)">
        <animate attributeName="r" values="4;8;4" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="2.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export function GlobalPresence() {
  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#F8F6F1' }}
    >
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            eyebrow="GLOBAL REACH"
            title="Serving Traders Across 50+ Countries"
            subtitle="From the Middle East to Southeast Asia, our traders span every continent."
            align="center"
          />
        </ScrollReveal>

        {/* Map visual */}
        <ScrollReveal delay={0.1}>
          <div
            className="relative w-full mb-12 overflow-hidden rounded-[var(--radius-xl)]"
            style={{
              background: '#E8E4DC',
              border: '1px solid var(--border-subtle)',
              aspectRatio: '2 / 1',
              maxHeight: '400px',
            }}
          >
            {/* Gradient overlays */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  'linear-gradient(to right, #E8E4DC 0%, transparent 8%, transparent 92%, #E8E4DC 100%)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  'linear-gradient(to bottom, #E8E4DC 0%, transparent 10%, transparent 90%, #E8E4DC 100%)',
              }}
            />

            {/* Map */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <WorldMapSVG />
            </div>

            {/* Centre label */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 font-mono text-xs tracking-wide"
              style={{ color: 'var(--text-muted)' }}
            >
              Active trader regions highlighted
            </div>
          </div>
        </ScrollReveal>

        {/* Region stat cards */}
        <div className="overflow-x-auto pb-2">
          <div
            className="flex gap-4"
            style={{ minWidth: 'max-content' }}
          >
            {regions.map((r, index) => (
              <ScrollReveal key={r.region} delay={index * 0.07} direction="up">
                <div
                  className="rounded-[var(--radius-lg)] p-5 flex flex-col gap-3"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-subtle)',
                    minWidth: '200px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    transition: 'border-color var(--transition-base)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor =
                      'var(--border-gold)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor =
                      'var(--border-subtle)'
                  }}
                >
                  {/* Dot indicator */}
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--gold-500)' }}
                  />
                  <div>
                    <p
                      className="font-body font-medium mb-2 leading-snug"
                      style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}
                    >
                      {r.region}
                    </p>
                    <Badge variant="gold" size="md">
                      {r.traders}
                    </Badge>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
