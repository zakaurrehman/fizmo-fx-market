import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactCards } from '@/components/sections/contact/ContactCards'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { FAQSection } from '@/components/sections/contact/FAQSection'

export function ContactPage() {
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
