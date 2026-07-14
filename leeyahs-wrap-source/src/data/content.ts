export interface FaqItem {
  question: string
  answer: string
}

export interface FaqSection {
  title: string
  items: FaqItem[]
}

export const faqSections: FaqSection[] = [
  {
    title: 'Shipping',
    items: [
      {
        question: 'How fast is delivery within Lagos?',
        answer:
          'Same-day delivery for orders placed before 12pm, and next-day for anything after. We use a local dispatch rider network, not a courier depot, so it stays fast.',
      },
      {
        question: 'Do you ship outside Nigeria?',
        answer:
          'Yes — worldwide shipping takes 5–9 business days depending on customs in your country. A tracking link is sent once your order leaves Lagos.',
      },
      {
        question: 'Is shipping free?',
        answer:
          "Wrapping is always free. Shipping within Lagos is free, and for anywhere outside Lagos or internationally, we'll confirm the delivery estimate when you reach out on WhatsApp.",
      },
    ],
  },
  {
    title: 'Returns',
    items: [
      {
        question: 'Can I return a scarf if I don\u2019t like the color in person?',
        answer:
          'Yes, within 7 days of delivery, as long as it\u2019s unworn and the fold lines from packaging are still intact. Hand-dipped Marble Edit pieces are final sale since each one is unique.',
      },
      {
        question: 'How do refunds work?',
        answer:
          'Once we receive the item back, refunds go out within 3 business days to your original payment method, or as store credit if you prefer — store credit processes faster.',
      },
    ],
  },
  {
    title: 'Payment',
    items: [
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept card payments, bank transfer, and USSD once your order is confirmed on WhatsApp. For larger wholesale orders we also accept direct transfer against an invoice.',
      },
      {
        question: 'Do I pay on this website?',
        answer:
          "No payment is processed on this site — every order is confirmed and paid for directly through WhatsApp once we've discussed colors and delivery.",
      },
    ],
  },
  {
    title: 'Product Care',
    items: [
      {
        question: 'How should I wash my chiffon or crepe hijab?',
        answer:
          'Hand wash cold or use a gentle machine cycle inside a mesh bag. Skip the bleach, line dry away from direct sun, and iron on the reverse on a cool setting if needed.',
      },
      {
        question: 'Will the marble-dyed pieces bleed color when washed?',
        answer:
          'A small amount of color release is normal on the first wash for hand-dipped pieces — wash separately the first time and cold water only.',
      },
    ],
  },
  {
    title: 'Orders',
    items: [
      {
        question: 'Can I change or cancel my order after placing it?',
        answer:
          'Message us on WhatsApp within an hour of ordering and we can usually adjust it before it\u2019s packed. After that, our small-batch dispatch moves quickly.',
      },
      {
        question: 'Do you restock sold-out colors?',
        answer:
          'Solid colors are restocked regularly. Marble Edit pieces don\u2019t restock in the same pattern twice, since every dye lot is hand-mixed.',
      },
    ],
  },
]

export interface Testimonial {
  id: string
  author: string
  location: string
  rating: number
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'Amina O.',
    location: 'Lagos',
    rating: 5,
    quote: "Doesn't slip off my head all day, even stuck in traffic with the AC blasting. The color is richer in person than in photos.",
  },
  {
    id: 't2',
    author: 'Halima B.',
    location: 'Abuja',
    rating: 5,
    quote: 'Bought my first wrap in Plum and ended up ordering two more colors within a week. Fabric feels genuinely expensive.',
  },
  {
    id: 't3',
    author: 'Fatima K.',
    location: 'London (shipped)',
    rating: 5,
    quote: 'Was nervous ordering from abroad but it arrived in 6 days, beautifully wrapped, exactly the marble pattern shown.',
  },
  {
    id: 't4',
    author: 'Zainab R.',
    location: 'Lagos',
    rating: 4,
    quote: 'The pleated textured one genuinely does not slip, first hijab I have not had to repin by midday.',
  },
]

export interface TeamMember {
  id: string
  name: string
  role: string
  initials: string
}

export const team: TeamMember[] = [
  { id: 'm1', name: 'Leeyah A.', role: 'Founder & Head Dyer', initials: 'LA' },
  { id: 'm2', name: 'Blessing O.', role: 'Pattern Cutting & Hems', initials: 'BO' },
  { id: 'm3', name: 'Chidinma E.', role: 'Orders & Dispatch', initials: 'CE' },
  { id: 'm4', name: 'Ngozi I.', role: 'Customer Care', initials: 'NI' },
]
