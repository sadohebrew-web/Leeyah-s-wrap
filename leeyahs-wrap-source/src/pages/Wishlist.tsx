import { Link } from 'react-router-dom'
import { Heart, MessageCircle, X } from 'lucide-react'
import ProductThumb from '../components/ProductThumb'
import StarRating from '../components/StarRating'
import { useStore } from '../context/StoreContext'
import { buildWhatsAppLink } from '../lib/whatsapp'

export default function Wishlist() {
  const { wishlistProducts, toggleWishlist } = useStore()

  if (wishlistProducts.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-5 text-center py-24 md:py-32">
        <Heart size={40} className="text-dye-deep mx-auto mb-6" />
        <h1 className="font-display text-display-sm text-ink mb-4">Your wishlist is empty</h1>
        <p className="text-ink-soft mb-8">Tap the heart on anything you love — we'll keep it here for you.</p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center h-12 px-7 bg-dye-deep text-cream text-sm uppercase tracking-widest2 rounded-sm hover:bg-charcoal transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20">
      <h1 className="font-display text-display-lg text-ink mb-10 md:mb-14">Your Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-8 md:gap-y-12">
        {wishlistProducts.map((product) => (
          <div key={product.id}>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden mb-4 bg-stone-deep">
              <Link to={`/shop/${product.slug}`}>
                <ProductThumb product={product} className="w-full h-full" />
              </Link>
              <button
                onClick={() => toggleWishlist(product.id)}
                aria-label="Remove from wishlist"
                className="absolute top-3 right-3 min-w-9 min-h-9 flex items-center justify-center rounded-full bg-stone/90 hover:text-dye-deep transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <Link to={`/shop/${product.slug}`}>
              <h3 className="font-display text-base text-ink mb-1 hover:text-dye-deep transition-colors">{product.name}</h3>
            </Link>
            <div className="mb-3">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>
            <a
              href={buildWhatsAppLink(product.name, product.colorName)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-10 flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-widest2 rounded-sm hover:brightness-95 transition-all"
            >
              <MessageCircle size={14} fill="white" className="text-[#25D366]" /> Send a DM on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
