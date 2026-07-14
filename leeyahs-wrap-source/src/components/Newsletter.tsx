import { useState } from 'react'
import type { FormEvent } from 'react'
import { ThreadMotif } from './icons'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="bg-stone-deep py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <ThreadMotif className="w-14 h-14 text-dye-deep mx-auto mb-6" />
        <h2 className="font-display text-display-md text-ink mb-4">Join the fold</h2>
        <p className="text-ink-soft leading-relaxed mb-8 max-w-md mx-auto">
          First access to new colors, restock alerts, and 10% off your first order.
        </p>
        {submitted ? (
          <p className="text-dye-deep font-medium">You're in — check your inbox to confirm.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 h-12 px-4 bg-stone border border-ink/20 rounded-sm text-ink placeholder:text-ink-soft/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye"
            />
            <button
              type="submit"
              className="h-12 px-7 bg-dye-deep text-cream text-sm uppercase tracking-widest2 rounded-sm hover:bg-charcoal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dye"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
