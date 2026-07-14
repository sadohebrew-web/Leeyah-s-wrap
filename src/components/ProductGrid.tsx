import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { products } from '../data/products'
import type { Tag } from '../data/products'

export default function ProductGrid({
  id,
  eyebrow,
  title,
  tag,
  bgClass = 'bg-stone-deep',
}: {
  id: string
  eyebrow: string
  title: string
  tag: Tag
  bgClass?: string
}) {
  const items = products.filter((p) => p.tags.includes(tag)).slice(0, 6)
  if (items.length === 0) return null

  return (
    <section id={id} className={`${bgClass} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">{eyebrow}</p>
            <h2 className="font-display text-display-md text-ink">{title}</h2>
          </div>
          <Link
            to={`/shop?tag=${tag}`}
            className="hidden sm:block text-xs uppercase tracking-widest2 text-ink hover:text-dye-deep transition-colors shrink-0"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-8 md:gap-y-14">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
