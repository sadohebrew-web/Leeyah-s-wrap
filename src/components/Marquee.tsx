const ITEMS = ['Chiffon', 'Crepe', 'Cotton Voile', 'Pleated Satin']

export default function Marquee() {
  const list = [...ITEMS, ...ITEMS, ...ITEMS]
  return (
    <div className="border-y border-ink/10 bg-stone-deep overflow-hidden py-3.5" aria-hidden="true">
      <div className="flex whitespace-nowrap animate-marquee motion-reduce:animate-none w-max">
        {list.map((item, i) => (
          <span key={i} className="mx-6 text-xs uppercase tracking-widest2 text-ink-soft flex items-center gap-6">
            {item}
            <span className="w-1 h-1 rounded-full bg-dye inline-block" />
          </span>
        ))}
      </div>
    </div>
  )
}
