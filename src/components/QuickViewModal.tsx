import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, MessageCircle } from 'lucide-react'
import ProductThumb from './ProductThumb'
import StarRating from './StarRating'
import { useStore } from '../context/StoreContext'
import { buildWhatsAppLink } from '../lib/whatsapp'

export default function QuickViewModal() {
  const { quickViewProduct, closeQuickView } = useStore()

  useEffect(() => {
    if (!quickViewProduct) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuickView()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [quickViewProduct, closeQuickView])

  if (!quickViewProduct) return null
  const product = quickViewProduct
  const whatsappLink = buildWhatsAppLink(product.name, product.colorName)

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view — ${product.name}`}
    >
      <button
        className="absolute inset-0 bg-charcoal/50"
        onClick={closeQuickView}
        aria-label="Close quick view"
      />
      <div className="relative bg-stone rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto grid sm:grid-cols-2 shadow-2xl">
        <button
          onClick={closeQuickView}
          aria-label="Close"
          className="absolute top-3 right-3 min-w-9 min-h-9 flex items-center justify-center rounded-full bg-stone/90 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye"
        >
          <X size={18} />
        </button>
        <div className="aspect-[4/5] sm:aspect-auto sm:h-full bg-stone-deep">
          <ProductThumb product={product} className="w-full h-full" />
        </div>
        <div className="p-6 md:p-8 flex flex-col">
          <p className="text-[11px] uppercase tracking-widest2 text-ink-soft mb-2">{product.material}</p>
          <h2 className="font-display text-2xl text-ink mb-2">{product.name}</h2>
          <div className="mb-3">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>
          <p className="text-ink-soft text-sm leading-relaxed mb-6">{product.description}</p>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeQuickView}
              className="flex items-center justify-center gap-2 h-12 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest2 rounded-sm hover:brightness-95 transition-all"
            >
              <MessageCircle size={18} fill="white" className="text-[#25D366]" />
              Send a DM on WhatsApp
            </a>
            <Link
              to={`/shop/${product.slug}`}
              onClick={closeQuickView}
              className="h-12 flex items-center justify-center border border-ink text-ink text-sm uppercase tracking-widest2 rounded-sm hover:bg-charcoal hover:text-cream transition-colors"
            >
              View Full Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
