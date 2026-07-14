import { useParams } from 'react-router-dom'

const CONTENT: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'This is a demo storefront, so no real customer data is collected or stored anywhere beyond your current browser session.',
      'In a live version of this policy, this section would explain what information we collect when you place an order with us, how it is used, how long it is retained, and how you can request it be deleted.',
      'We would never sell customer data to third parties.',
    ],
  },
  refund: {
    title: 'Refund Policy',
    body: [
      'Solid-color pieces can be returned within 7 days of delivery if unworn and with fold lines intact.',
      'Hand-dipped Marble Edit pieces are final sale, since every piece is unique and cannot be restocked in the same pattern.',
      'Approved refunds are issued within 3 business days of us receiving the item back.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    body: [
      'By ordering from Leeyah\u2019s Wrap you agree to provide accurate delivery information and to pay the listed price at the time of order.',
      'Colors may vary slightly from photos due to screen calibration — hand-dipped pieces vary by nature.',
      'This demo storefront does not process real payments; no purchase is actually completed here.',
    ],
  },
}

export default function Legal() {
  const { type } = useParams<{ type: string }>()
  const page = CONTENT[type ?? ''] ?? CONTENT.privacy

  return (
    <div className="max-w-2xl mx-auto px-5 md:px-8 py-12 md:py-20">
      <h1 className="font-display text-display-md text-ink mb-8">{page.title}</h1>
      <div className="space-y-4">
        {page.body.map((p, i) => (
          <p key={i} className="text-ink-soft leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}
