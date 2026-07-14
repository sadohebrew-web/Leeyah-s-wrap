import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Eye } from 'lucide-react'
import ProductThumb from './ProductThumb'
import StarRating from './StarRating'
import { useStore } from '../context/StoreContext'
import type { Product } from '../data/products'

function ProductCard({ product }: { product: Product }) {
  const { toggleWishlist, isWishlisted, openQuickView } = useStore()
  const wishlisted = isWishlisted(product.id)

  return (
    <div className="group">
      <div className="relative aspect-[4/5] rounded-sm overflow-hidden mb-4 shadow-[0_14px_34px_-18px_rgba(28,29,31,0.4)] bg-stone-deep">
        <Link to={`/shop/${product.slug}`} className="block w-full h-full">
          <ProductThumb product={product} className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]" />
        </Link>

        <button
          onClick={() => toggleWishlist(product.id)}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={wishlisted}
          className="absolute top-3 right-3 min-w-9 min-h-9 flex items-center justify-center rounded-full bg-stone/90 text-ink hover:text-dye-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye"
        >
          <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} className={wishlisted ? 'text-dye-deep' : ''} />
        </button>

        <button
          onClick={() => openQuickView(product.id)}
          aria-label={`Quick view ${product.name}`}
          className="absolute top-3 right-14 min-w-9 min-h-9 flex items-center justify-center rounded-full bg-stone/90 text-ink hover:text-dye-deep transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye"
        >
          <Eye size={16} />
        </button>
      </div>

      <p className="text-[11px] uppercase tracking-widest2 text-ink-soft mb-1">{product.material}</p>
      <Link to={`/shop/${product.slug}`} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye rounded-sm">
        <h3 className="font-display text-base md:text-lg text-ink mb-1 hover:text-dye-deep transition-colors">
          {product.name}
        </h3>
      </Link>
      <div className="mb-2">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
      </div>
      <Link
        to={`/shop/${product.slug}`}
        className="inline-flex items-center justify-center h-10 px-5 border border-ink text-ink text-xs uppercase tracking-widest2 rounded-sm hover:bg-ink hover:text-stone transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye"
      >
        Shop Now
      </Link>
    </div>
  )
}

export default memo(ProductCard)
