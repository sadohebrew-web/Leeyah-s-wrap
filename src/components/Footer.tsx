import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { WHATSAPP_NUMBER } from '../lib/whatsapp'

const FOOTER_LINKS: Record<string, { label: string; to: string }[]> = {
  Shop: [
    { label: 'New Arrivals', to: '/shop?tag=new' },
    { label: 'Shop All', to: '/shop' },
    { label: 'Pins & Caps', to: '/shop?collection=Finishing Touches' },
    { label: 'The Marble Edit', to: '/shop?collection=The Marble Edit' },
  ],
  'Customer Service': [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Shipping & Delivery', to: '/faq' },
    { label: 'Returns', to: '/faq' },
    { label: 'FAQ', to: '/faq' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Wholesale', to: '/contact' },
  ],
}

export default function Footer() {
  const { showToast } = useStore()
  const [email, setEmail] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    showToast("You're in — check your inbox to confirm")
    setEmail('')
  }

  return (
    <footer className="bg-charcoal text-cream/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-14 border-b border-stone/15">
          <div className="lg:col-span-2">
            <p className="font-display italic text-xl text-cream mb-4 tracking-wide">LEEYAH'S WRAP</p>
            <p className="text-sm leading-relaxed max-w-xs text-cream/60 mb-6">
              Hijabs, wraps, and finishing pieces in considered color, dipped and made in
              small batches in Lagos.
            </p>
            <form onSubmit={submit} className="flex gap-2 max-w-xs">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email for updates"
                className="flex-1 min-w-0 h-10 px-3 bg-stone/10 border border-stone/20 rounded-sm text-cream text-sm placeholder:text-cream/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-10 px-4 bg-brass text-ink text-xs uppercase tracking-widest2 rounded-sm hover:bg-stone transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs uppercase tracking-widest2 text-cream/55 mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm hover:text-brass transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-xs uppercase tracking-widest2 text-cream/55 mb-4">Socials</h3>
            <ul className="space-y-2.5">
              {['Instagram', 'TikTok', 'WhatsApp'].map((s) => (
                <li key={s}>
                  <a
                    href={s === 'WhatsApp' ? `https://wa.me/${WHATSAPP_NUMBER}` : '#'}
                    target={s === 'WhatsApp' ? '_blank' : undefined}
                    rel={s === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className="text-sm hover:text-brass transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-cream/55">
          <p>© 2026 Leeyah's Wrap. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/legal/privacy" className="hover:text-cream/85">
              Privacy Policy
            </Link>
            <Link to="/legal/refund" className="hover:text-cream/85">
              Refund Policy
            </Link>
            <Link to="/legal/terms" className="hover:text-cream/85">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
