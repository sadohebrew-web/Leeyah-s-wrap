import { Truck, Hand, RotateCcw, Palette } from 'lucide-react'
import { testimonials } from '../data/content'
import StarRating from './StarRating'
import { heroDraped, heroModel, marbleModel } from '../assets/photoData'

const POINTS = [
  { icon: Hand, title: 'Hand-dipped in Lagos', body: 'Every dye lot mixed and checked by eye, not machine.' },
  { icon: Palette, title: 'Forty-plus colors', body: 'No compromising between the shade you want and the fit.' },
  { icon: Truck, title: 'Same-day Lagos delivery', body: 'Order before 12pm, wear it that evening.' },
  { icon: RotateCcw, title: '7-day easy returns', body: "Unworn, unfolded, no questions on solid colors." },
]

export function WhyDifferent() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="mb-10 md:mb-14 max-w-xl">
        <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">The Leeyah's Wrap Difference</p>
        <h2 className="font-display text-display-md text-ink">Four things we won't compromise on.</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {POINTS.map((point) => (
          <div key={point.title}>
            <point.icon size={24} className="text-dye-deep mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-base md:text-lg text-ink mb-1">{point.title}</h3>
            <p className="text-ink-soft text-sm leading-snug">{point.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Reviews() {
  return (
    <section className="bg-stone-deep py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3 text-center">Customer Love</p>
        <h2 className="font-display text-display-md text-ink mb-10 md:mb-14 text-center">What's being said</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-stone rounded-sm p-6 border border-ink/10">
              <StarRating rating={t.rating} />
              <p className="text-ink-soft text-sm leading-relaxed my-4">"{t.quote}"</p>
              <p className="text-xs text-ink-soft/70">
                {t.author} · {t.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InstagramGallery() {
  const tiles = [heroDraped, heroModel, marbleModel, heroDraped, marbleModel, heroModel]
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-10">
          <h2 className="font-display text-display-sm text-ink">@leeyahswrap</h2>
          <a href="#" className="text-xs uppercase tracking-widest2 text-dye-deep hover:text-ink transition-colors">
            Follow →
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {tiles.map((src, i) => (
            <div key={i} className="aspect-square rounded-sm overflow-hidden bg-stone-deep">
              <img src={src} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
