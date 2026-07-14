import { MarbleSwatch } from './icons'
import { marbleEdit } from '../data'
import { marbleModel } from '../assets/photoData'

export default function MarbleEdit() {
  return (
    <section id="marble-edit" className="bg-charcoal text-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-widest2 text-brass font-semibold mb-3">The Marble Edit</p>
            <h2 className="font-display text-display-md mb-5">Hand-dipped. No two alike.</h2>
            <p className="text-cream/70 leading-relaxed max-w-md">
              Each piece is dipped and set by hand, so the bloom of color that lands on your
              hijab is genuinely one of one. What you order is close — never identical.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] max-w-xs mx-auto lg:mx-0 lg:ml-auto rounded-sm overflow-hidden shadow-[0_20px_50px_-18px_rgba(0,0,0,0.7)]">
              <img
                src={marbleModel}
                alt="A customer wearing a cream and rust marble-dyed hijab"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {marbleEdit.map((m) => (
            <div key={m.name} className="group">
              <div className="aspect-[3/4] rounded-sm overflow-hidden mb-4 shadow-[0_16px_36px_-16px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-translate-y-1">
                <MarbleSwatch base={m.base} veins={m.veins} id={m.name.replace(/\s+/g, '-')} className="w-full h-full" />
              </div>
              <h3 className="font-display text-base md:text-lg">{m.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
