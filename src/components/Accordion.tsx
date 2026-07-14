import { useState } from 'react'
import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-ink/12">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-dye rounded-sm"
      >
        <span className="font-display text-base md:text-lg text-ink">{title}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink-soft transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-ink-soft leading-relaxed text-sm md:text-base">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function Accordion({ children }: { children: ReactNode }) {
  return <div className="divide-y-0">{children}</div>
}
