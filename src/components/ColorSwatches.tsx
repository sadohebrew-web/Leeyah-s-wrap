import { useState } from 'react'
import { jewelTones, earthTones } from '../data'
import type { ColorSwatchItem } from '../data'

function SwatchRow({
  title,
  items,
  selected,
  onSelect,
}: {
  title: string
  items: ColorSwatchItem[]
  selected: string
  onSelect: (name: string) => void
}) {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="text-sm uppercase tracking-widest2 text-ink-soft mb-4">{title}</h3>
      <div className="flex gap-4 md:gap-5 overflow-x-auto pb-2 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap">
        {items.map((c) => (
          <button
            key={c.name}
            onClick={() => onSelect(c.name)}
            className="flex-shrink-0 w-20 md:w-24 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye rounded-sm"
          >
            <div
              className={`aspect-square rounded-sm mb-2 ring-2 ring-offset-2 ring-offset-stone transition-all ${
                selected === c.name ? 'ring-ink' : 'ring-transparent'
              }`}
              style={{ backgroundColor: c.hex }}
            />
            <p className="text-xs text-ink-soft">{c.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ColorSwatches() {
  const [selected, setSelected] = useState('Amethyst')

  return (
    <section id="colors" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-widest2 text-dye-deep font-semibold mb-3">Colors, Considered</p>
          <h2 className="font-display text-display-md text-ink mb-5">Forty-plus shades, one dye lot at a time.</h2>
          <p className="text-ink-soft leading-relaxed">
            We mix and dip in small batches so color stays consistent from your first order
            to your fifth. Currently viewing <span className="text-ink font-medium">{selected}</span>.
          </p>
        </div>
        <div className="lg:col-span-8">
          <SwatchRow title="Jewel Tones" items={jewelTones} selected={selected} onSelect={setSelected} />
          <SwatchRow title="Earth Tones" items={earthTones} selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </section>
  )
}
