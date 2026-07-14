import { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import { useStore } from '../context/StoreContext'
import { WHATSAPP_NUMBER } from '../lib/whatsapp'

export default function Contact() {
  const { showToast } = useStore()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    showToast('Message sent — we usually reply within a day')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20">
      <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">Get in Touch</p>
      <h1 className="font-display text-display-lg text-ink mb-12 md:mb-16 max-w-2xl">
        Questions about a color, an order, or wholesale? We read every message ourselves.
      </h1>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7">
          {sent ? (
            <div className="border border-dye-deep/30 bg-stone-deep rounded-sm p-8">
              <h2 className="font-display text-xl text-ink mb-2">Message sent</h2>
              <p className="text-ink-soft text-sm">
                Thank you for reaching out — we usually reply within one business day.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-xs uppercase tracking-widest2 text-dye-deep hover:text-ink"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest2 text-ink-soft mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-12 px-4 bg-stone-deep border border-ink/15 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest2 text-ink-soft mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-12 px-4 bg-stone-deep border border-ink/15 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest2 text-ink-soft mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-stone-deep border border-ink/15 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye resize-none"
                />
              </div>
              <button
                type="submit"
                className="h-12 px-8 bg-dye-deep text-cream text-sm uppercase tracking-widest2 rounded-sm hover:bg-charcoal transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5">
          <div className="space-y-6 mb-8">
            <a href="mailto:Tajudeenaliyat22@gmail.com" className="flex items-start gap-4 group">
              <Mail size={20} className="text-dye-deep mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-widest2 text-ink-soft mb-1">Email</p>
                <p className="text-ink group-hover:text-dye-deep transition-colors">Tajudeenaliyat22@gmail.com</p>
              </div>
            </a>
            <a href="tel:+2347042428997" className="flex items-start gap-4 group">
              <Phone size={20} className="text-dye-deep mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-widest2 text-ink-soft mb-1">Phone</p>
                <p className="text-ink group-hover:text-dye-deep transition-colors">+234 704 242 8997</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <MessageCircle size={20} className="text-dye-deep mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-widest2 text-ink-soft mb-1">WhatsApp</p>
                <p className="text-ink group-hover:text-dye-deep transition-colors">Chat with us directly</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-dye-deep mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-widest2 text-ink-soft mb-1">Location</p>
                <p className="text-ink">Nationwide</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mb-8 text-sm">
            {['Instagram', 'TikTok', 'WhatsApp'].map((s) => (
              <a
                key={s}
                href={s === 'WhatsApp' ? `https://wa.me/${WHATSAPP_NUMBER}` : '#'}
                target={s === 'WhatsApp' ? '_blank' : undefined}
                rel={s === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="text-ink-soft hover:text-dye-deep transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
