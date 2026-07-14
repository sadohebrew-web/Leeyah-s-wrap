import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, materials, collections } from '../data/products'
import type { Material, Collection } from '../data/products'

type Sort = 'newest' | 'popular'

const PAGE_SIZE = 9

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [sort, setSort] = useState<Sort>('newest')

  const [selectedMaterials, setSelectedMaterials] = useState<Material[]>(
    searchParams.get('material') ? [searchParams.get('material') as Material] : [],
  )
  const [selectedCollections, setSelectedCollections] = useState<Collection[]>(
    searchParams.get('collection') ? [searchParams.get('collection') as Collection] : [],
  )
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const query = searchParams.get('q') ?? ''
  const tag = searchParams.get('tag')

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(t)
  }, [])

  const availableColors = useMemo(
    () => Array.from(new Set(products.map((p) => p.colorName))).sort(),
    [],
  )

  const toggle = <T,>(list: T[], value: T, setter: (v: T[]) => void) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
    setVisibleCount(PAGE_SIZE)
  }

  const filtered = useMemo(() => {
    let list = products.slice()

    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.colorName.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q),
      )
    }
    if (tag) {
      list = list.filter((p) => p.tags.includes(tag as 'new' | 'bestseller' | 'trending'))
    }
    if (selectedMaterials.length) {
      list = list.filter((p) => selectedMaterials.includes(p.material as Material))
    }
    if (selectedCollections.length) {
      list = list.filter((p) => selectedCollections.includes(p.collection))
    }
    if (selectedColors.length) {
      list = list.filter((p) => selectedColors.includes(p.colorName))
    }

    switch (sort) {
      case 'popular':
        list.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        list.sort((a, b) => (b.tags.includes('new') ? 1 : 0) - (a.tags.includes('new') ? 1 : 0))
    }

    return list
  }, [query, tag, selectedMaterials, selectedCollections, selectedColors, sort])

  const visible = filtered.slice(0, visibleCount)

  const clearFilters = () => {
    setSelectedMaterials([])
    setSelectedCollections([])
    setSelectedColors([])
    setSearchParams({})
    setVisibleCount(PAGE_SIZE)
  }

  const activeFilterCount =
    selectedMaterials.length + selectedCollections.length + selectedColors.length

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16">
      <div className="mb-8 md:mb-10">
        <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">
          {query ? `Search results for "${query}"` : tag ? `${tag}` : 'Shop All'}
        </p>
        <h1 className="font-display text-display-md text-ink">
          {query ? 'Search' : 'The Full Collection'}
        </h1>
      </div>

      <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-ink/10">
        <button
          onClick={() => setFiltersOpen((o) => !o)}
          className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-widest2 text-ink"
        >
          <SlidersHorizontal size={16} />
          Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
        </button>
        <p className="hidden lg:block text-sm text-ink-soft">{filtered.length} products</p>
        <div className="flex items-center gap-2 ml-auto">
          <label htmlFor="sort" className="text-xs uppercase tracking-widest2 text-ink-soft hidden sm:inline">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="h-10 px-3 bg-stone border border-ink/20 rounded-sm text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye"
          >
            <option value="newest">Newest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        <aside className={filtersOpen ? 'lg:col-span-3 block' : 'lg:col-span-3 hidden lg:block'}>
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="font-display text-lg">Filters</h2>
            <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
              <X size={20} />
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest2 text-ink-soft mb-3">Collection</h3>
            <div className="space-y-2.5">
              {collections.map((c) => (
                <label key={c} className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCollections.includes(c)}
                    onChange={() => toggle(selectedCollections, c, setSelectedCollections)}
                    className="accent-dye-deep"
                  />
                  {c}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest2 text-ink-soft mb-3">Material</h3>
            <div className="space-y-2.5">
              {materials.map((m) => (
                <label key={m} className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(m)}
                    onChange={() => toggle(selectedMaterials, m, setSelectedMaterials)}
                    className="accent-dye-deep"
                  />
                  {m}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest2 text-ink-soft mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
              {availableColors.map((color) => (
                <button
                  key={color}
                  onClick={() => toggle(selectedColors, color, setSelectedColors)}
                  className={`min-h-9 text-xs px-3 py-1.5 rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dye ${
                    selectedColors.includes(color)
                      ? 'border-dye-deep bg-dye-deep text-cream'
                      : 'border-ink/20 text-ink hover:border-ink'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {(activeFilterCount > 0 || query || tag) && (
            <button onClick={clearFilters} className="text-xs uppercase tracking-widest2 text-dye-deep hover:text-ink">
              Clear all filters
            </button>
          )}
        </aside>

        <div className="lg:col-span-9">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-8 md:gap-y-14">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/5] rounded-sm bg-stone-deep mb-4" />
                  <div className="h-3 bg-stone-deep rounded-sm w-1/3 mb-2" />
                  <div className="h-4 bg-stone-deep rounded-sm w-2/3 mb-2" />
                  <div className="h-3 bg-stone-deep rounded-sm w-1/4" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-ink-soft mb-4">No products match those filters yet.</p>
              <button onClick={clearFilters} className="text-xs uppercase tracking-widest2 text-dye-deep hover:text-ink">
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-8 md:gap-y-14">
                {visible.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {visibleCount < filtered.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="h-12 px-8 border border-ink text-ink text-sm uppercase tracking-widest2 rounded-sm hover:bg-charcoal hover:text-cream transition-colors"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
