import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { faqData } from '@/data/faqData'
import type { FAQItem } from '@/types'

interface AccordionItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      style={{ borderBottom: '1px solid var(--border-subtle)' }}
    >
      {/* Question row */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '1.25rem 0',
        }}
        aria-expanded={isOpen}
      >
        <span
          className="font-body font-medium leading-snug"
          style={{
            fontSize: '1rem',
            color: isOpen ? 'var(--text-accent)' : 'var(--text-primary)',
            transition: 'color var(--transition-base)',
          }}
        >
          {item.question}
        </span>

        {/* Chevron */}
        <span
          className="flex-shrink-0"
          style={{
            color: isOpen ? 'var(--accent-500)' : 'var(--text-muted)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease, color var(--transition-base)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ChevronDown size={20} strokeWidth={2} />
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="font-body leading-relaxed pb-5"
              style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#F7F9FC' }}
    >
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to the questions we hear most often."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="max-w-3xl mx-auto rounded-[var(--radius-xl)] overflow-hidden"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            <div className="px-6 sm:px-8">
              {faqData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
                >
                  <AccordionItem
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() => handleToggle(item.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <p
              className="font-body"
              style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}
            >
              Still have questions?{' '}
              <a
                href="https://wa.me/447759046727"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium"
                style={{ color: 'var(--text-accent)', textDecoration: 'underline', textDecorationColor: 'var(--border-accent)' }}
              >
                Chat with us on WhatsApp
              </a>{' '}
              or{' '}
              <a
                href="mailto:support@fizmofxmarkets.com"
                className="font-medium"
                style={{ color: 'var(--text-accent)', textDecoration: 'underline', textDecorationColor: 'var(--border-accent)' }}
              >
                send us an email
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
