import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Search, Heart, Menu, X, Sun, Moon } from 'lucide-react'
import { AccordionItem } from './Accordion'
import { useStore } from '../context/StoreContext'
import { collections } from '../data/products'

const NAV_LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'New Arrivals', to: '/shop?tag=new' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const { wishlist, darkMode, toggleDarkMode } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 4
      setScrolled(isScrolled)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (scrolled) setSearchOpen(false)
  }, [scrolled])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/shop?q=${encodeURIComponent(query)}`)
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <header className="sticky top-0 z-50 bg-stone/98 border-b border-ink/10">
      <div
        className={`max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-4 transition-[height] duration-300 ease-out ${
          scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <button
            className={`lg:hidden flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye rounded-sm overflow-hidden transition-all duration-300 ease-out shrink-0 ${
              scrolled ? 'w-0 h-0 opacity-0 pointer-events-none' : 'w-11 h-11 opacity-100'
            }`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-hidden={scrolled}
            tabIndex={scrolled ? -1 : 0}
          >
            <Menu size={22} className="shrink-0" />
          </button>

          <Link
            to="/"
            className={`font-display italic tracking-wide text-ink shrink-0 origin-left transition-transform duration-300 ease-out ${
              scrolled ? 'scale-90' : 'scale-100'
            } text-xl md:text-2xl`}
          >
            LEEYAH'S WRAP
          </Link>
        </div>

        <div
          className={`flex items-center gap-4 md:gap-6 overflow-hidden transition-all duration-300 ease-out ${
            scrolled ? 'max-w-0 opacity-0 -translate-y-1 pointer-events-none' : 'max-w-[1000px] opacity-100 translate-y-0'
          }`}
          aria-hidden={scrolled}
        >
          <nav className="hidden lg:flex items-center gap-7 shrink-0" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                tabIndex={scrolled ? -1 : 0}
                className={({ isActive }) =>
                  `group relative text-[13px] uppercase tracking-widest2 whitespace-nowrap py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye rounded-sm ${
                    isActive ? 'text-dye-deep' : 'text-ink/80 hover:text-dye-deep'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-px bg-dye-deep transition-transform duration-300 ease-out origin-left ${
                        isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-0.5 shrink-0">
            <button
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleDarkMode}
              tabIndex={scrolled ? -1 : 0}
              className="min-w-11 min-h-11 flex items-center justify-center hover:text-dye-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye rounded-sm"
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((s) => !s)}
              tabIndex={scrolled ? -1 : 0}
              className="min-w-11 min-h-11 flex items-center justify-center hover:text-dye-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye rounded-sm"
            >
              <Search size={19} />
            </button>
            <Link
              to="/wishlist"
              aria-label={`Wishlist, ${wishlist.length} items`}
              tabIndex={scrolled ? -1 : 0}
              className="relative min-w-11 min-h-11 flex items-center justify-center hover:text-dye-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye rounded-sm"
            >
              <Heart size={19} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-dye-deep text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-ink/10 bg-stone px-5 md:px-8 py-4">
          <form onSubmit={submitSearch} className="max-w-7xl mx-auto flex gap-3">
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search scarves, colors, fabrics…"
              className="flex-1 h-11 px-4 bg-white/40 border border-ink/20 rounded-sm text-ink placeholder:text-ink-soft/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye"
            />
            <button
              type="submit"
              className="h-11 px-6 bg-dye-deep text-cream text-sm uppercase tracking-widest2 rounded-sm hover:bg-charcoal transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-0 z-[80] lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <button
          className="absolute inset-0 bg-charcoal/50"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        />
        <nav
          aria-label="Mobile"
          className={`absolute inset-y-0 left-0 w-[85%] max-w-sm bg-stone shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-ink/10">
            <span className="font-display italic text-lg text-ink">LEEYAH'S WRAP</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="min-w-11 min-h-11 flex items-center justify-center"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-2">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block py-4 text-sm uppercase tracking-widest2 text-ink border-b border-ink/12"
            >
              Home
            </Link>
            <AccordionItem title="Shop" defaultOpen>
              <div className="flex flex-col gap-3 pl-1">
                <Link to="/shop" onClick={() => setOpen(false)} className="text-sm text-ink hover:text-dye-deep">
                  Shop All
                </Link>
                <Link to="/shop?tag=new" onClick={() => setOpen(false)} className="text-sm text-ink hover:text-dye-deep">
                  New Arrivals
                </Link>
                <Link to="/shop?tag=trending" onClick={() => setOpen(false)} className="text-sm text-ink hover:text-dye-deep">
                  Trending
                </Link>
              </div>
            </AccordionItem>
            <AccordionItem title="Collections">
              <div className="flex flex-col gap-3 pl-1">
                {collections.map((c) => (
                  <Link
                    key={c}
                    to={`/shop?collection=${encodeURIComponent(c)}`}
                    onClick={() => setOpen(false)}
                    className="text-sm text-ink hover:text-dye-deep"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </AccordionItem>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block py-4 text-sm uppercase tracking-widest2 text-ink border-b border-ink/12"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block py-4 text-sm uppercase tracking-widest2 text-ink border-b border-ink/12"
            >
              Contact
            </Link>
            <Link
              to="/faq"
              onClick={() => setOpen(false)}
              className="block py-4 text-sm uppercase tracking-widest2 text-ink border-b border-ink/12"
            >
              FAQ
            </Link>
          </div>
          <div className="flex border-t border-ink/10">
            <button
              onClick={toggleDarkMode}
              className="flex-1 flex items-center justify-center gap-2 py-4 text-sm border-r border-ink/10"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          <div className="flex border-t border-ink/10">
            <Link
              to="/wishlist"
              onClick={() => setOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-4 text-sm"
            >
              <Heart size={16} /> Wishlist
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
