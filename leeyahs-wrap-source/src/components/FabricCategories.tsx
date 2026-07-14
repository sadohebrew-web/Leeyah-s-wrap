import { Link } from 'react-router-dom'
import { FoldedSwatch } from './icons'
import { fabricCategories } from '../data'

const MATERIAL_MAP: Record<string, string> = {
  'Chiffon Wraps': 'Chiffon',
  'Crepe Hijabs': 'Crepe',
  'Cotton Voile': 'Cotton Voile',
  'Pleated Textured': 'Pleated Satin',
}

export default function FabricCategories() {
  return (
    <section id="shop" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="flex items-end justify-between mb-10 md:mb-14 gap-4">
        <h2 className="font-display text-display-md text-ink">Shop by fabric</h2>
        <p className="text-ink-soft text-sm max-w-xs text-right hidden sm:block">
          Every fabric behaves differently in the heat. Pick yours.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {fabricCategories.map((cat) => (
          <Link
            key={cat.name}
            to={`/shop?material=${encodeURIComponent(MATERIAL_MAP[cat.name] ?? cat.name)}`}
            className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye rounded-sm"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden mb-4 shadow-[0_10px_30px_-15px_rgba(28,29,31,0.35)] transition-transform duration-500 group-hover:-translate-y-1">
              <FoldedSwatch color={cat.color} colorDark={cat.colorDark} className="w-full h-full" />
            </div>
            <h3 className="font-display text-lg text-ink mb-1">{cat.name}</h3>
            <p className="text-ink-soft text-sm leading-snug">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
