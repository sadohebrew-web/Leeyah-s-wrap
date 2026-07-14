import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, Share2, Check, MessageCircle } from 'lucide-react'
import ProductThumb from '../components/ProductThumb'
import ProductCard from '../components/ProductCard'
import StarRating from '../components/StarRating'
import { useStore } from '../context/StoreContext'
import { getProductBySlug, getRelated } from '../data/products'
import { buildWhatsAppLink } from '../lib/whatsapp'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug ?? '')
  const { toggleWishlist, isWishlisted, addRecentlyViewed, recentlyViewedProducts, showToast } = useStore()
  const [zoomed, setZoomed] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (product) {
      addRecentlyViewed(product.id)
      setActiveImage(0)
      window.scrollTo({ top: 0 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.id])

  if (!product) {
    return (
      <div className="max-w-xl mx-auto px-5 text-center py-24">
        <p className="text-ink-soft mb-6">We couldn't find that product.</p>
        <Link to="/shop" className="text-dye-deep uppercase tracking-widest2 text-sm hover:text-ink">
          Back to Shop
        </Link>
      </div>
    )
  }

  const wishlisted = isWishlisted(product.id)
  const related = getRelated(product)
  const recentlyViewed = recentlyViewedProducts.filter((p) => p.id !== product.id).slice(0, 4)

  const share = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, url })
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      showToast('Link copied')
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const whatsappLink = buildWhatsAppLink(product.name, product.colorName)

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16">
      <p className="text-xs text-ink-soft mb-8">
        <Link to="/shop" className="hover:text-dye-deep">Shop</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </p>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
        <div className="lg:col-span-6">
          <div
            className={`aspect-[4/5] rounded-sm overflow-hidden mb-3 bg-stone-deep cursor-zoom-in ${zoomed ? 'cursor-zoom-out' : ''}`}
            onClick={() => setZoomed((z) => !z)}
          >
            <ProductThumb
              product={product}
              className={`w-full h-full transition-transform duration-500 ${zoomed ? 'scale-150' : 'hover:scale-105'}`}
            />
          </div>
          <div className="flex gap-3">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-20 rounded-sm overflow-hidden border-2 ${activeImage === i ? 'border-dye-deep' : 'border-transparent'}`}
              >
                <ProductThumb product={product} className="w-full h-full" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">{product.collection}</p>
          <h1 className="font-display text-display-sm text-ink mb-3">{product.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} size={16} />
          </div>
          <p className="text-ink-soft leading-relaxed mb-6">{product.description}</p>

          <dl className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div>
              <dt className="text-ink-soft text-xs uppercase tracking-widest2 mb-1">Material</dt>
              <dd className="text-ink">{product.material}</dd>
            </div>
            <div>
              <dt className="text-ink-soft text-xs uppercase tracking-widest2 mb-1">Dimensions</dt>
              <dd className="text-ink">{product.dimensions}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-ink-soft text-xs uppercase tracking-widest2 mb-1">Color</dt>
              <dd className="flex items-center gap-2 text-ink">
                <span
                  className="w-4 h-4 rounded-full border border-ink/20 inline-block"
                  style={{ backgroundColor: product.colorHex }}
                />
                {product.colorName}
              </dd>
            </div>
          </dl>

          <div className="mb-6">
            <h2 className="text-ink-soft text-xs uppercase tracking-widest2 mb-2">Care Instructions</h2>
            <ul className="space-y-1.5">
              {product.care.map((c) => (
                <li key={c} className="text-sm text-ink-soft flex gap-2">
                  <Check size={14} className="text-dye-deep shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 h-14 mb-4 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest2 rounded-sm hover:brightness-95 transition-all"
          >
            <MessageCircle size={20} fill="white" className="text-[#25D366]" />
            Send a DM on WhatsApp
          </a>

          <div className="flex items-center gap-6">
            <button
              onClick={() => toggleWishlist(product.id)}
              className="flex items-center gap-2 text-sm text-ink-soft hover:text-dye-deep transition-colors"
            >
              <Heart size={17} fill={wishlisted ? 'currentColor' : 'none'} className={wishlisted ? 'text-dye-deep' : ''} />
              {wishlisted ? 'Saved' : 'Save for later'}
            </button>
            <button onClick={share} className="flex items-center gap-2 text-sm text-ink-soft hover:text-dye-deep transition-colors">
              <Share2 size={16} />
              {copied ? 'Link copied' : 'Share'}
            </button>
          </div>
        </div>
      </div>

      {product.reviews.length > 0 && (
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-2xl text-ink mb-8">Customer Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="border border-ink/10 rounded-sm p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display text-ink">{review.author}</p>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-xs text-ink-soft/70 mb-3">{review.date}</p>
                <p className="text-ink-soft text-sm leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-2xl text-ink mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {recentlyViewed.length > 0 && (
        <div>
          <h2 className="font-display text-2xl text-ink mb-8">Recently Viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-8">
            {recentlyViewed.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
