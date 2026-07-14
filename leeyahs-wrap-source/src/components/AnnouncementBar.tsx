import { useEffect, useState } from 'react'

const MESSAGES = [
  'Free wrapping on every order',
  'Free Lagos delivery on every order',
  'New colors just dropped — shop the edit',
  'Worldwide shipping in 5–9 days',
]

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="bg-charcoal text-cream text-center text-xs tracking-wide py-2 px-4 h-8 flex items-center justify-center overflow-hidden">
      <span key={index} className="animate-fadeUp motion-reduce:animate-none">
        {MESSAGES[index]}
      </span>
    </div>
  )
}
