import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Globe, TrendingUp, Bitcoin, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { newsData } from '@/data/newsData'
import type { NewsArticle } from '@/types'

type CategoryColor = 'blue' | 'gold' | 'orange'

interface CategoryStyle {
  chipBg: string
  chipText: string
  chipBorder: string
  gradientFrom: string
  gradientTo: string
  icon: ReactNode
}

const categoryStyles: Record<CategoryColor, CategoryStyle> = {
  blue: {
    chipBg: 'rgba(59,130,246,0.15)',
    chipText: '#60A5FA',
    chipBorder: 'rgba(59,130,246,0.3)',
    gradientFrom: 'rgba(37,99,235,0.25)',
    gradientTo: 'rgba(59,130,246,0.05)',
    icon: <Globe size={40} color="#60A5FA" strokeWidth={1.25} />,
  },
  gold: {
    chipBg: 'rgba(245,158,11,0.15)',
    chipText: '#F59E0B',
    chipBorder: 'rgba(245,158,11,0.3)',
    gradientFrom: 'rgba(245,158,11,0.25)',
    gradientTo: 'rgba(245,158,11,0.04)',
    icon: <TrendingUp size={40} color="#F59E0B" strokeWidth={1.25} />,
  },
  orange: {
    chipBg: 'rgba(249,115,22,0.15)',
    chipText: '#FB923C',
    chipBorder: 'rgba(249,115,22,0.3)',
    gradientFrom: 'rgba(234,88,12,0.25)',
    gradientTo: 'rgba(249,115,22,0.04)',
    icon: <Bitcoin size={40} color="#FB923C" strokeWidth={1.25} />,
  },
}

function isCategoryColor(value: string): value is CategoryColor {
  return value === 'blue' || value === 'gold' || value === 'orange'
}

function NewsCard({
  article,
  delay,
}: {
  article: NewsArticle
  delay: number
}) {
  const colorKey: CategoryColor = isCategoryColor(article.categoryColor)
    ? article.categoryColor
    : 'blue'
  const styles = categoryStyles[colorKey]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
      style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
        transition: 'border-color 250ms ease',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor =
          'var(--border-accent)'
        ;(e.currentTarget as HTMLElement).style.boxShadow =
          'var(--shadow-glow)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor =
          'var(--border-subtle)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          height: 160,
          background: `linear-gradient(135deg, ${styles.gradientFrom} 0%, ${styles.gradientTo} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--border-subtle)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* subtle dot grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>{styles.icon}</div>
      </div>

      {/* Card body */}
      <div
        style={{
          padding: '1.25rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.625rem',
          flex: 1,
          background: '#FFFFFF',
        }}
      >
        {/* Category chip + date */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              background: styles.chipBg,
              color: styles.chipText,
              border: `1px solid ${styles.chipBorder}`,
              borderRadius: 'var(--radius-sm)',
              padding: '0.15rem 0.55rem',
              fontSize: '0.6875rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {article.category}
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              color: '#9CA3AF',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {article.date}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
            color: '#0D1120',
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p
          style={{
            fontSize: '0.875rem',
            color: '#374151',
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {article.excerpt}
        </p>

        {/* Read more */}
        <span
          className="inline-flex items-center gap-1"
          style={{
            color: '#1D4ED8',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginTop: '0.25rem',
            letterSpacing: '0.01em',
            cursor: 'pointer',
          }}
        >
          Read More
          <ArrowRight size={14} />
        </span>
      </div>
    </motion.article>
  )
}

export function NewsSection() {
  return (
    <section
      className="section-padding section-light-theme"
      style={{ background: '#FFFFFF' }}
    >
      <div className="container-max">
        <ScrollReveal direction="up">
          <SectionHeader
            eyebrow="INSIGHTS"
            title="Market News & Analysis"
            subtitle="Stay ahead of the markets with expert analysis and commentary."
            align="center"
          />
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {newsData.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              delay={index * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
