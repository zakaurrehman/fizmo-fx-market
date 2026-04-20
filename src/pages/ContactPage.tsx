import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactCards } from '@/components/sections/contact/ContactCards'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { FAQSection } from '@/components/sections/contact/FAQSection'
import useMeta from '@/hooks/useMeta'
import { seo, globalKeywords } from '@/data/seoData'

export function ContactPage() {
  useMeta({ ...seo.contact, keywords: seo.contact.keywords || globalKeywords })
  return (
    <>
      <ContactHero />
      <ContactCards />
      <section className="container-max">
        <ContactForm />
      </section>
      <FAQSection />
    </>
  )
}
