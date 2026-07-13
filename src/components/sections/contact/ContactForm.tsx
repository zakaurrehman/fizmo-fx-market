import type { ReactNode, CSSProperties } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { ContactFormData } from '@/types'
import { ContactFormSchema } from '@/types'
import { trackPixel } from '@/lib/metaPixel'

const subjectOptions = [
  'Account Inquiry',
  'Deposits & Withdrawals',
  'Technical Support',
  'Partnership Inquiry',
  'Other',
] as const

const inputBase: CSSProperties = {
  width: '100%',
  background: '#F6F9F8',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: 'var(--radius-md)',
  padding: '0.75rem 1rem',
  fontSize: '0.9375rem',
  color: '#0D1120',
  outline: 'none',
  transition: 'border-color var(--transition-base)',
  fontFamily: 'inherit',
}

interface InputFieldProps {
  label: string
  error?: string
  required?: boolean
  children: ReactNode
}

function FieldWrapper({ label, error, required, children }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="font-body font-medium text-sm"
        style={{ color: 'var(--text-primary)' }}
      >
        {label}
        {required && (
          <span style={{ color: 'var(--accent-500)', marginLeft: '0.25rem' }}>*</span>
        )}
      </label>
      {children}
      {error && (
        <p
          className="font-body text-xs"
          style={{ color: 'var(--red-400)' }}
        >
          {error}
        </p>
      )}
    </div>
  )
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center justify-center text-center py-16 px-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
        className="mb-6"
        style={{ color: 'var(--green-400)' }}
      >
        <CheckCircle size={72} strokeWidth={1.5} />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="font-display font-bold mb-3"
        style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}
      >
        Message Sent!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="font-body leading-relaxed"
        style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '24rem' }}
      >
        We&apos;ll get back to you within 2 hours. For urgent matters, reach us
        directly on WhatsApp at{' '}
        <a
          href="https://wa.me/447759046727"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-accent)' }}
        >
          +44 7759 046727
        </a>
        .
      </motion.p>
    </motion.div>
  )
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  })

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    // Simulate API call
    await new Promise<void>((resolve) => setTimeout(resolve, 1500))
    trackPixel('Lead', {
      content_name: 'Contact Form',
      content_category: data.subject,
    })
    setSubmitted(true)
  }

  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#FFFFFF' }}
    >
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal direction="up">
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08)',
              }}
            >
              {/* Card header */}
              <div
                className="px-8 py-6"
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                <h2
                  className="font-display font-bold"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Send Us a Message
                </h2>
                <p
                  className="font-body mt-1"
                  style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}
                >
                  Fill in the form below and we&apos;ll respond within 2 hours.
                </p>
              </div>

              {/* Card body */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <SuccessState key="success" />
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                    >
                      <div className="flex flex-col gap-5">

                        {/* Full Name */}
                        <FieldWrapper
                          label="Full Name"
                          required
                          error={errors.fullName?.message}
                        >
                          <input
                            {...register('fullName')}
                            type="text"
                            placeholder="Your full name"
                            autoComplete="name"
                            style={{
                              ...inputBase,
                              borderColor: errors.fullName
                                ? 'var(--red-400)'
                                : 'var(--border-subtle)',
                            }}
                            onFocus={(e) => {
                              if (!errors.fullName) {
                                ;(e.target as HTMLInputElement).style.borderColor =
                                  'var(--border-accent)'
                              }
                            }}
                            onBlur={(e) => {
                              if (!errors.fullName) {
                                ;(e.target as HTMLInputElement).style.borderColor =
                                  'var(--border-subtle)'
                              }
                            }}
                          />
                        </FieldWrapper>

                        {/* Email */}
                        <FieldWrapper
                          label="Email Address"
                          required
                          error={errors.email?.message}
                        >
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            style={{
                              ...inputBase,
                              borderColor: errors.email
                                ? 'var(--red-400)'
                                : 'var(--border-subtle)',
                            }}
                            onFocus={(e) => {
                              if (!errors.email) {
                                ;(e.target as HTMLInputElement).style.borderColor =
                                  'var(--border-accent)'
                              }
                            }}
                            onBlur={(e) => {
                              if (!errors.email) {
                                ;(e.target as HTMLInputElement).style.borderColor =
                                  'var(--border-subtle)'
                              }
                            }}
                          />
                        </FieldWrapper>

                        {/* Phone */}
                        <FieldWrapper
                          label="Phone Number"
                          error={errors.phone?.message}
                        >
                          <input
                            {...register('phone')}
                            type="tel"
                            placeholder="+1 234 567 8900 (optional)"
                            autoComplete="tel"
                            style={{
                              ...inputBase,
                              borderColor: errors.phone
                                ? 'var(--red-400)'
                                : 'var(--border-subtle)',
                            }}
                            onFocus={(e) => {
                              if (!errors.phone) {
                                ;(e.target as HTMLInputElement).style.borderColor =
                                  'var(--border-accent)'
                              }
                            }}
                            onBlur={(e) => {
                              if (!errors.phone) {
                                ;(e.target as HTMLInputElement).style.borderColor =
                                  'var(--border-subtle)'
                              }
                            }}
                          />
                        </FieldWrapper>

                        {/* Subject */}
                        <FieldWrapper
                          label="Subject"
                          required
                          error={errors.subject?.message}
                        >
                          <select
                            {...register('subject')}
                            style={{
                              ...inputBase,
                              borderColor: errors.subject
                                ? 'var(--red-400)'
                                : 'var(--border-subtle)',
                              appearance: 'none',
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234A5580' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 1rem center',
                              cursor: 'pointer',
                            }}
                            onFocus={(e) => {
                              if (!errors.subject) {
                                ;(e.target as HTMLSelectElement).style.borderColor =
                                  'var(--border-accent)'
                              }
                            }}
                            onBlur={(e) => {
                              if (!errors.subject) {
                                ;(e.target as HTMLSelectElement).style.borderColor =
                                  'var(--border-subtle)'
                              }
                            }}
                          >
                            <option value="" disabled hidden>
                              Select a subject
                            </option>
                            {subjectOptions.map((opt) => (
                              <option
                                key={opt}
                                value={opt}
                                style={{ background: '#F6F9F8', color: '#0D1120' }}
                              >
                                {opt}
                              </option>
                            ))}
                          </select>
                        </FieldWrapper>

                        {/* Message */}
                        <FieldWrapper
                          label="Message"
                          required
                          error={errors.message?.message}
                        >
                          <textarea
                            {...register('message')}
                            rows={5}
                            placeholder="Tell us how we can help you..."
                            style={{
                              ...inputBase,
                              borderColor: errors.message
                                ? 'var(--red-400)'
                                : 'var(--border-subtle)',
                              resize: 'vertical',
                              minHeight: '120px',
                            }}
                            onFocus={(e) => {
                              if (!errors.message) {
                                ;(e.target as HTMLTextAreaElement).style.borderColor =
                                  'var(--border-accent)'
                              }
                            }}
                            onBlur={(e) => {
                              if (!errors.message) {
                                ;(e.target as HTMLTextAreaElement).style.borderColor =
                                  'var(--border-subtle)'
                              }
                            }}
                          />
                        </FieldWrapper>

                        {/* Submit */}
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          loading={isSubmitting}
                          disabled={isSubmitting}
                          className="w-full mt-2"
                          icon={<ArrowRight size={16} />}
                        >
                          {isSubmitting ? 'Sending…' : 'Send Message'}
                        </Button>

                        <p
                          className="font-body text-xs text-center"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          We respect your privacy. Your information is never shared
                          with third parties.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
