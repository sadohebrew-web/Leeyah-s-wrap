import { Link } from 'react-router-dom'
import { PinGlyph, CapGlyph } from './icons'
import { accessories } from '../data'

const GLYPHS = [PinGlyph, PinGlyph, CapGlyph, CapGlyph]

export default function Accessories() {
  return (
    <section id="accessories" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="mb-10 md:mb-14">
        <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">Finishing Touches</p>
        <h2 className="font-display text-display-md text-ink">Pins, caps, and small essentials</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {accessories.map((item, i) => {
          const Glyph = GLYPHS[i]
          return (
            <div
              key={item.name}
              className="border border-ink/12 rounded-sm p-6 flex flex-col hover:border-dye-deep/50 transition-colors"
            >
              <Glyph className="w-8 h-8 text-dye-deep mb-6" />
              <h3 className="font-display text-base text-ink mb-1">{item.name}</h3>
              <p className="text-ink-soft text-xs mb-4">{item.detail}</p>
              <Link
                to="/shop"
                className="mt-auto pt-4 text-xs uppercase tracking-widest2 text-dye-deep hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye rounded-sm"
              >
                Shop Now
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
