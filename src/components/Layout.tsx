import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AnnouncementBar from './AnnouncementBar'
import Header from './Header'
import Footer from './Footer'
import QuickViewModal from './QuickViewModal'
import WhatsAppButton from './WhatsAppButton'
import BackToTop from './BackToTop'
import { useStore } from '../context/StoreContext'

export default function Layout() {
  const { toast } = useStore()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <div className="min-h-screen bg-stone text-ink flex flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <QuickViewModal />
      <WhatsAppButton />
      <BackToTop />

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] transition-all duration-300 ${
          toast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        {toast && (
          <div className="bg-charcoal text-cream text-sm px-5 py-3 rounded-sm shadow-lg whitespace-nowrap max-w-[90vw] truncate">
            {toast}
          </div>
        )}
      </div>
    </div>
  )
}
