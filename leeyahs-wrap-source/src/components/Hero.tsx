import { Link } from 'react-router-dom'
import { heroPortrait } from '../assets/photoData'

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[560px] max-h-[900px] overflow-hidden">
      <img
        src={heroPortrait}
        alt="A woman wearing a deep red hijab, portrait against a light wall"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[center_18%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/10" />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-16 md:pb-24">
        <div className="animate-fadeUp max-w-xl">
          <p className="text-xs uppercase tracking-widest2 text-brass font-semibold mb-5">
            The Considered Color Edit
          </p>
          <h1 className="font-display text-display-lg text-cream mb-6">
            Hijabs that hold their fold.
          </h1>
          <p className="text-cream/85 text-base md:text-lg leading-relaxed max-w-md mb-8">
            Chiffon, crepe, and cotton in forty-plus hand-dipped colors — cut generously,
            finished by hand, made for Lagos heat and everyday wear.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center h-14 px-9 bg-brass text-ink text-sm font-semibold uppercase tracking-widest2 rounded-sm hover:bg-stone transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone"
          >
            Shop Collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-8 hidden sm:flex flex-col items-center gap-2 text-cream/70 text-xs uppercase tracking-widest2">
        <span className="[writing-mode:vertical-lr]">Scroll</span>
        <span className="w-px h-10 bg-stone/40" />
      </div>
    </section>
  )
}
