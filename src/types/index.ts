import { z } from 'zod'

// ─── Account Types ───────────────────────────────────────────────────────────

export interface AccountType {
  id: string
  name: string
  badge?: string
  minDeposit: string
  spread: string
  commission: string
  leverage: string
  execution: string
  minLot: string
  maxPositions: string
  marginCall: string
  hedgedMargin: string
  swapFree: boolean
  instruments: string
  description: string
  bestFor: string
  featured?: boolean
}

// ─── Market Instruments ──────────────────────────────────────────────────────

export type MarketCategory = 'forex' | 'crypto' | 'indices' | 'commodities'

export interface ForexInstrument {
  symbol: string
  description: string
  spreadFrom: string
  leverage: string
  minLot: string
}

export interface CryptoInstrument {
  symbol: string
  name: string
  leverage: string
  spreadFrom: string
  tradingHours: string
}

export interface IndexInstrument {
  symbol: string
  name: string
  country: string
  spreadFrom: string
  leverage: string
}

export interface CommodityInstrument {
  symbol: string
  name: string
  category: string
  spreadFrom: string
  leverage: string
}

export type MarketInstrument =
  | ForexInstrument
  | CryptoInstrument
  | IndexInstrument
  | CommodityInstrument

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FAQItem {
  id: string
  question: string
  answer: string
}

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string
  name: string
  location: string
  accountType: string
  rating: number
  quote: string
}

// ─── News ────────────────────────────────────────────────────────────────────

export interface NewsArticle {
  id: string
  category: string
  categoryColor: string
  date: string
  title: string
  excerpt: string
}

// ─── Ticker ──────────────────────────────────────────────────────────────────

export interface TickerItem {
  symbol: string
  price: string
  change: string
  changePercent: string
  positive: boolean
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavDropdownItem {
  label: string
  href: string
  description?: string
}

export interface NavItem {
  label: string
  href: string
  dropdown?: NavDropdownItem[]
}

// ─── UI ──────────────────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type AnimationDirection = 'up' | 'down' | 'left' | 'right'

export interface AnimationVariant {
  hidden: Record<string, unknown>
  visible: Record<string, unknown>
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

export const ContactFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.enum([
    'Account Inquiry',
    'Deposits & Withdrawals',
    'Technical Support',
    'Partnership Inquiry',
    'Other',
  ], { message: 'Please select a subject' }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>
