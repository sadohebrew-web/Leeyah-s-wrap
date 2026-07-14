import { team } from '../data/content'
import { marbleModel, heroDraped } from '../assets/photoData'

export default function About() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">Our Story</p>
          <h1 className="font-display text-display-lg text-ink mb-6">
            Leeyah's Wrap
          </h1>
          <p className="text-ink-soft leading-relaxed mb-4 max-w-lg">
            Leeyah's Wrap is a modest fashion brand based in Ilorin and Lagos, Nigeria, offering
            premium hijabs, abayas, khimars, inner caps, arm sleeves, and other modest wear for
            everyday and special occasions.
          </p>
          <p className="text-ink-soft leading-relaxed max-w-lg">
            We are committed to providing high-quality, comfortable, and elegant pieces that
            help women embrace modesty with confidence. By combining affordability, exceptional
            customer service, and nationwide delivery, we aim to make modest fashion accessible
            while creating a seamless shopping experience our customers can always rely on.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] max-w-sm mx-auto rounded-sm overflow-hidden shadow-[0_20px_50px_-20px_rgba(28,29,31,0.4)]">
            <img src={marbleModel} alt="A Leeyah's Wrap customer wearing a hand-dipped marble hijab" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-stone-deep py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">Mission</p>
            <h2 className="font-display text-xl text-ink mb-3">Color that holds up to real days.</h2>
            <p className="text-ink-soft text-sm leading-relaxed">
              Make hijabs that survive Lagos heat, long commutes, and repeated washing without
              losing the color or the fold — at a price that doesn't ask you to choose.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">Vision</p>
            <h2 className="font-display text-xl text-ink mb-3">A wrap for every wardrobe.</h2>
            <p className="text-ink-soft text-sm leading-relaxed">
              Forty-plus considered colors isn't a gimmick — it's so nobody has to compromise
              between the shade they want and the fabric that actually works for them.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">Quality Promise</p>
            <h2 className="font-display text-xl text-ink mb-3">Checked against the wall sample.</h2>
            <p className="text-ink-soft text-sm leading-relaxed">
              Every dye lot is compared to the reference swatch pinned in our studio before it
              ships. If it doesn't match, it doesn't go out.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6 lg:order-2">
          <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">Behind the Scenes</p>
          <h2 className="font-display text-display-sm text-ink mb-5">
            Small batches, mixed by eye and finished by hand.
          </h2>
          <p className="text-ink-soft leading-relaxed max-w-lg">
            We dip fabric in hand-mixed vats a few meters at a time rather than industrial
            drums, which is slower but means every marbled piece has its own bloom of color.
            Hems are folded and stitched by hand, not heat-sealed, so they hold up to years of
            washing.
          </p>
        </div>
        <div className="lg:col-span-6 lg:order-1">
          <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-[0_20px_50px_-20px_rgba(28,29,31,0.4)]">
            <img src={heroDraped} alt="Freshly dyed hijabs draped to set" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-widest2 text-brass font-semibold mb-3">The Studio</p>
          <h2 className="font-display text-display-md mb-10 md:mb-14 max-w-xl">Four people, one folding table.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {team.map((member) => (
              <div key={member.id}>
                <div className="aspect-square rounded-full bg-stone/10 border border-stone/20 flex items-center justify-center mb-4">
                  <span className="font-display text-2xl text-brass">{member.initials}</span>
                </div>
                <h3 className="font-display text-base">{member.name}</h3>
                <p className="text-cream/60 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
