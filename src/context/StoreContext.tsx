import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { products } from '../data/products'
import type { Product } from '../data/products'

interface StoreContextValue {
  wishlist: string[]
  toggleWishlist: (productId: string) => void
  isWishlisted: (productId: string) => boolean
  wishlistProducts: Product[]

  recentlyViewed: string[]
  addRecentlyViewed: (productId: string) => void
  recentlyViewedProducts: Product[]

  toast: string | null
  showToast: (message: string) => void

  darkMode: boolean
  toggleDarkMode: () => void

  quickViewProduct: Product | null
  openQuickView: (productId: string) => void
  closeQuickView: () => void
}

const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([])
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([])
  const [toast, setToast] = useState<string | null>(null)
  const [quickViewId, setQuickViewId] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((d) => !d)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(t)
  }, [toast])

  const showToast = (message: string) => setToast(message)

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId)
      const product = products.find((p) => p.id === productId)
      showToast(exists ? `Removed from wishlist` : `Saved — ${product?.name ?? 'Item'}`)
      return exists ? prev.filter((id) => id !== productId) : [...prev, productId]
    })
  }

  const isWishlisted = (productId: string) => wishlist.includes(productId)

  const wishlistProducts = useMemo(
    () => wishlist.map((id) => products.find((p) => p.id === id)).filter((p): p is Product => !!p),
    [wishlist],
  )

  const addRecentlyViewed = (productId: string) => {
    setRecentlyViewed((prev) => [productId, ...prev.filter((id) => id !== productId)].slice(0, 6))
  }

  const recentlyViewedProducts = useMemo(
    () => recentlyViewed.map((id) => products.find((p) => p.id === id)).filter((p): p is Product => !!p),
    [recentlyViewed],
  )

  const openQuickView = (productId: string) => setQuickViewId(productId)
  const closeQuickView = () => setQuickViewId(null)
  const quickViewProduct = useMemo(
    () => products.find((p) => p.id === quickViewId) ?? null,
    [quickViewId],
  )

  const value: StoreContextValue = {
    wishlist,
    toggleWishlist,
    isWishlisted,
    wishlistProducts,
    recentlyViewed,
    addRecentlyViewed,
    recentlyViewedProducts,
    toast,
    showToast,
    darkMode,
    toggleDarkMode,
    quickViewProduct,
    openQuickView,
    closeQuickView,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
