interface SwatchProps {
  color: string
  colorDark: string
  className?: string
}

/** A folded fabric card with a darker "dipped" hem at the base — the site's signature detail. */
export function FoldedSwatch({ color, colorDark, className = '' }: SwatchProps) {
  return (
    <svg viewBox="0 0 200 240" className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="200" height="240" fill={color} />
      <rect x="0" y="0" width="200" height="40" fill="#FFFFFF" fillOpacity="0.08" />
      <line x1="0" y1="54" x2="200" y2="54" stroke={colorDark} strokeOpacity="0.28" strokeWidth="1" />
      <line x1="0" y1="100" x2="200" y2="100" stroke={colorDark} strokeOpacity="0.2" strokeWidth="1" />
      <line x1="0" y1="146" x2="200" y2="146" stroke={colorDark} strokeOpacity="0.13" strokeWidth="1" />
      <rect x="0" y="222" width="200" height="18" fill={colorDark} />
    </svg>
  )
}

interface MarbleProps {
  base: string
  veins: [string, string]
  id: string
  className?: string
}

export function MarbleSwatch({ base, veins, id, className = '' }: MarbleProps) {
  const [v1, v2] = veins
  const clipId = `marble-clip-${id}`
  return (
    <svg viewBox="0 0 200 240" className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="200" height="240" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="200" height="240" fill={base} />
        <path d="M -20,50 Q 40,10 90,55 Q 130,90 210,45 L 210,130 Q 150,160 100,120 Q 50,90 -20,145 Z" fill={v1} fillOpacity="0.5" />
        <path d="M -20,150 Q 60,110 120,165 Q 165,205 220,160 L 220,240 L -20,240 Z" fill={v2} fillOpacity="0.4" />
        <path d="M 30,-10 Q 75,35 45,85 Q 15,115 65,145 Q 105,168 85,210" stroke={v2} strokeWidth="9" strokeOpacity="0.26" fill="none" strokeLinecap="round" />
        <rect x="0" y="222" width="200" height="18" fill={v2} />
      </g>
    </svg>
  )
}

interface RibbonConfig {
  x: number
  height: number
  color: string
  colorDark: string
}

function DrapedRibbon({ x, height, color, colorDark }: RibbonConfig & { idx: number }) {
  const width = 66
  const hw = width / 2
  const top = 34
  const gradId = `dip-${x}`
  return (
    <g>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="58%" stopColor={color} />
          <stop offset="100%" stopColor={colorDark} />
        </linearGradient>
      </defs>
      <path
        d={`M ${x - hw + 6},${top}
            Q ${x - hw - 6},${top + height * 0.18} ${x - hw + 4},${top + height * 0.42}
            Q ${x - hw + 10},${top + height * 0.74} ${x - 5},${top + height}
            Q ${x},${top + height + 12} ${x + 5},${top + height}
            Q ${x + hw - 10},${top + height * 0.74} ${x + hw - 4},${top + height * 0.42}
            Q ${x + hw + 6},${top + height * 0.18} ${x + hw - 6},${top}
            Q ${x},${top + 15} ${x - hw + 6},${top}
            Z`}
        fill={`url(#${gradId})`}
      />
      <path
        d={`M ${x - hw + 8},${top + height * 0.36} Q ${x},${top + height * 0.4} ${x + hw - 8},${top + height * 0.36}`}
        stroke={colorDark}
        strokeOpacity="0.2"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  )
}

/** Five scarves cascading over a rod, each dip-dyed darker toward the hem. */
export function HeroDrape({ className }: { className?: string }) {
  const scarves: RibbonConfig[] = [
    { x: 78, height: 288, color: '#DDD5C2', colorDark: '#B6A986' },
    { x: 158, height: 336, color: '#6E3868', colorDark: '#3D1F3B' },
    { x: 240, height: 272, color: '#C79A3D', colorDark: '#916F26' },
    { x: 322, height: 344, color: '#1C1D1F', colorDark: '#000000' },
    { x: 402, height: 300, color: '#8E5286', colorDark: '#57315A' },
  ]
  return (
    <svg viewBox="0 0 480 400" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="24" y1="34" x2="456" y2="34" stroke="#1C1D1F" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="34" r="5" fill="#1C1D1F" />
      <circle cx="456" cy="34" r="5" fill="#1C1D1F" />
      {scarves.map((s, i) => (
        <DrapedRibbon key={i} idx={i} {...s} />
      ))}
    </svg>
  )
}

export function ThreadMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="58" cy="60" r="32" stroke="currentColor" strokeWidth="2" />
      <path d="M30 60 Q58 44 86 60 Q58 76 30 60" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <path d="M40 42 Q58 60 40 78" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M76 42 Q58 60 76 78" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M92 66 Q108 76 103 96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="102" cy="99" r="3" fill="currentColor" />
    </svg>
  )
}

export function PinGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="10" y1="9" x2="30" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="10" cy="9" r="3" fill="currentColor" />
      <path d="M30 9 L35 27 L25 27 Z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

export function CapGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 30 Q8 9 24 9 Q40 9 40 30" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="6" y1="30" x2="42" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
