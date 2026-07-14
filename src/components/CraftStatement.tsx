const SAMPLE_COLORS = ['#6E3868', '#C79A3D', '#2B3A66', '#8E5286', '#1B2A4A', '#9C8B77']

export default function CraftStatement() {
  return (
    <section id="our-story" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-5 lg:col-start-1 order-2 lg:order-1">
          <div className="grid grid-cols-3 gap-3">
            {SAMPLE_COLORS.map((c) => (
              <div key={c} className="aspect-square rounded-sm" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
          <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">Made in Lagos</p>
          <h2 className="font-display text-display-md text-ink mb-6">
            We test every fabric in Lagos heat before it ships anywhere else.
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4 max-w-lg">
            If it breathes here, it breathes everywhere. We mix and dip every dye lot by hand
            in small batches, then hem and finish each piece in the same week it's cut —
            never more than our tailors can do with care.
          </p>
          <p className="text-ink-soft leading-relaxed max-w-lg">
            No order ships until it's been checked against the sample pinned to our wall.
          </p>
        </div>
      </div>
    </section>
  )
}
