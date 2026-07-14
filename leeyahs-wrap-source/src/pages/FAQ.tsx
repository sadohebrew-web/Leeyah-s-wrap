import { Link } from 'react-router-dom'
import { AccordionItem } from '../components/Accordion'
import { faqSections } from '../data/content'

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-20">
      <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">Support</p>
      <h1 className="font-display text-display-lg text-ink mb-12 md:mb-16">Frequently asked questions</h1>

      <div className="space-y-12">
        {faqSections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-2xl text-ink mb-2">{section.title}</h2>
            <div>
              {section.items.map((item) => (
                <AccordionItem key={item.question} title={item.question}>
                  {item.answer}
                </AccordionItem>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-stone-deep rounded-sm text-center">
        <p className="text-ink-soft mb-4">Still have a question?</p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center h-12 px-7 bg-dye-deep text-cream text-sm uppercase tracking-widest2 rounded-sm hover:bg-charcoal transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
