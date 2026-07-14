import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-5 text-center py-24 md:py-32">
      <p className="font-display italic text-6xl text-dye-deep mb-4">404</p>
      <h1 className="font-display text-display-sm text-ink mb-4">This page unraveled.</h1>
      <p className="text-ink-soft mb-8">We couldn't find what you were looking for. Let's get you back on track.</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center h-12 px-7 bg-dye-deep text-cream text-sm uppercase tracking-widest2 rounded-sm hover:bg-charcoal transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
