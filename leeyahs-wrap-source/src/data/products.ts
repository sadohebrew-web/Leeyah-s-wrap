export function formatPrice(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}.00`
}

export interface Review {
  id: string
  author: string
  rating: number
  date: string
  comment: string
}

export type Material = 'Chiffon' | 'Crepe' | 'Cotton Voile' | 'Pleated Satin'
export type Collection = 'Everyday' | 'Jewel Tones' | 'Earth Tones' | 'The Marble Edit' | 'Finishing Touches'
export type Category = 'Wrap' | 'Hijab' | 'Accessory'
export type Tag = 'new' | 'bestseller' | 'trending'

export interface Product {
  id: string
  slug: string
  name: string
  price: number
  compareAtPrice?: number
  collection: Collection
  category: Category
  material: Material | 'Mixed'
  colorName: string
  colorHex: string
  colorHexDark: string
  marbleVeins?: [string, string]
  dimensions: string
  care: string[]
  description: string
  rating: number
  reviewCount: number
  reviews: Review[]
  tags: Tag[]
  photo?:
    | 'heroDraped'
    | 'heroModel'
    | 'marbleModel'
    | 'innerCap'
    | 'magneticStud'
    | 'nonSnagPin'
    | 'shadowJersey'
    | 'paddedPrayerMat'
    | 'pashminaScarf'
    | 'printedChiffon'
    | 'regularPrayerMat'
    | 'rhinestoneBrooch'
    | 'scarfHanger'
    | 'crinkleScarf'
    | 'adireChiffon'
    | 'twoInOneJersey'
    | 'alQuran'
    | 'armSleeve'
    | 'cottonPleated'
    | 'counter'
    | 'giftBox'
    | 'heartBrooch'
    | 'hookPin'
    | 'uaeJerseyScarf'
    | 'chiffonScarf'
    | 'danglingPin'
    | 'discPin'
    | 'jerseyScarf'
    | 'popcornScarf'
}

const careStandard = [
  'Hand wash cold, or gentle machine cycle in a mesh bag',
  'Do not bleach',
  'Cool iron on the reverse if needed',
  'Line dry away from direct sun',
]

const careCotton = [
  'Machine wash cold, gentle cycle',
  'Do not bleach',
  'Tumble dry low or line dry',
  'Warm iron as needed',
]

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'inner-cap-multicolor',
    name: 'Inner Cap',
    price: 2000,
    collection: 'Finishing Touches',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Assorted',
    colorHex: '#8A7F6B',
    colorHexDark: '#5C5344',
    photo: 'innerCap',
    dimensions: 'One size, stretch fit',
    care: careStandard,
    description: 'Soft stretch under-cap that keeps hair fully covered and your hijab from slipping — available in a full spread of everyday colors.',
    rating: 4.7,
    reviewCount: 41,
    tags: ['bestseller'],
    reviews: [
      { id: 'r1', author: 'Amina O.', rating: 5, date: '2026-05-12', comment: 'Breathable even under a thick hijab in this heat.' },
      { id: 'r2', author: 'Zainab R.', rating: 4, date: '2026-04-02', comment: 'Good stretch, wish it came in a few more shades.' },
    ],
  },
  {
    id: 'p2',
    slug: 'magnetic-hijab-stud',
    name: 'Magnetic Hijab Stud',
    price: 3500,
    collection: 'Finishing Touches',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Gold & Silver Mix',
    colorHex: '#B08D57',
    colorHexDark: '#7A5E37',
    photo: 'magneticStud',
    dimensions: 'Approx. 1.5cm diameter',
    care: ['Wipe clean with a soft dry cloth', 'Keep away from water'],
    description: 'No-hole magnetic stud that holds fabric firmly without piercing it — a quick, damage-free way to pin a wrap in place.',
    rating: 4.6,
    reviewCount: 29,
    tags: ['new'],
    reviews: [
      { id: 'r3', author: 'Halima B.', rating: 5, date: '2026-06-01', comment: 'Strong magnet, holds all day without slipping.' },
      { id: 'r4', author: 'Fatima K.', rating: 4, date: '2026-05-20', comment: 'Great for thinner chiffon, does not snag the fabric.' },
    ],
  },
  {
    id: 'p3',
    slug: 'non-snag-pin',
    name: 'Non-Snag Pin',
    price: 2800,
    collection: 'Finishing Touches',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Assorted Pastel',
    colorHex: '#9FB3A6',
    colorHexDark: '#6C8073',
    photo: 'nonSnagPin',
    dimensions: 'Approx. 3.5cm, set of 8',
    care: ['Wipe clean with a soft dry cloth'],
    description: 'Rounded, blunt-tip pins designed to hold delicate fabrics without pulling threads or leaving pinholes.',
    rating: 4.8,
    reviewCount: 34,
    tags: ['bestseller', 'trending'],
    reviews: [
      { id: 'r5', author: 'Ngozi I.', rating: 5, date: '2026-05-28', comment: 'Finally a pin that does not snag my chiffon scarves.' },
      { id: 'r6', author: 'Aisha M.', rating: 5, date: '2026-04-15', comment: 'Colors are cute and it genuinely does not damage fabric.' },
    ],
  },
  {
    id: 'p4',
    slug: 'original-shadow-jersey',
    name: 'Original Shadow Jersey',
    price: 8500,
    collection: 'Everyday',
    category: 'Hijab',
    material: 'Mixed',
    colorName: 'Multicolor Range',
    colorHex: '#6B7A8F',
    colorHexDark: '#414B58',
    photo: 'shadowJersey',
    dimensions: '180cm x 70cm',
    care: ['Hand wash cold', 'Do not bleach', 'Line dry away from direct sun'],
    description: 'Our original jersey wrap in its full color range — soft, non-slip, and heavy enough to drape without pinning.',
    rating: 4.7,
    reviewCount: 52,
    tags: ['bestseller'],
    reviews: [
      { id: 'r7', author: 'Blessing O.', rating: 5, date: '2026-03-19', comment: 'The one jersey that never rides up during the day.' },
      { id: 'r8', author: 'Maryam S.', rating: 4, date: '2026-02-27', comment: 'Lovely thickness, holds shape all day.' },
    ],
  },
  {
    id: 'p5',
    slug: 'padded-prayer-mat',
    name: 'Padded Prayer Mat',
    price: 15000,
    collection: 'Everyday',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Teal',
    colorHex: '#1F6E63',
    colorHexDark: '#123F39',
    photo: 'paddedPrayerMat',
    dimensions: '110cm x 70cm',
    care: ['Spot clean with a damp cloth', 'Do not machine wash', 'Air dry flat'],
    description: 'Cushioned velvet prayer mat with extra padding for the knees and forehead, woven in a classic arch pattern.',
    rating: 4.9,
    reviewCount: 23,
    tags: ['new', 'trending'],
    reviews: [
      { id: 'r9', author: 'Khadija A.', rating: 5, date: '2026-06-10', comment: 'So much more comfortable than my old thin mat.' },
      { id: 'r10', author: 'Ummu H.', rating: 5, date: '2026-05-05', comment: 'Colors are richer in person, beautifully padded.' },
    ],
  },
  {
    id: 'p6',
    slug: 'pashmina-scarf',
    name: 'Pashmina Scarf',
    price: 18000,
    collection: 'Everyday',
    category: 'Wrap',
    material: 'Mixed',
    colorName: 'Rust Paisley',
    colorHex: '#8C3B2E',
    colorHexDark: '#5C2620',
    photo: 'pashminaScarf',
    dimensions: '200cm x 70cm',
    care: ['Dry clean recommended', 'Do not wring', 'Store folded, away from direct sun'],
    description: 'A woven paisley pashmina with fringed edges — warm, generously sized, and dressy enough for special occasions.',
    rating: 4.8,
    reviewCount: 19,
    tags: ['trending'],
    reviews: [
      { id: 'r11', author: 'Rukayya D.', rating: 5, date: '2026-04-30', comment: 'Feels genuinely luxurious, great for weddings.' },
      { id: 'r12', author: 'Amara C.', rating: 4, date: '2026-03-11', comment: 'Beautiful pattern, a bit heavy for daily wear.' },
    ],
  },
  {
    id: 'p7',
    slug: 'printed-chiffon-scarf',
    name: 'Printed Chiffon Scarf',
    price: 11000,
    collection: 'Everyday',
    category: 'Hijab',
    material: 'Chiffon',
    colorName: 'Floral & Animal Print Mix',
    colorHex: '#A45D5D',
    colorHexDark: '#6E3B3B',
    photo: 'printedChiffon',
    dimensions: '180cm x 70cm',
    care: ['Hand wash cold', 'Do not bleach', 'Cool iron on reverse if needed'],
    description: 'Lightweight printed chiffon in floral, leopard, and botanical patterns — an easy way to add pattern to a solid-color wardrobe.',
    rating: 4.5,
    reviewCount: 27,
    tags: ['new'],
    reviews: [
      { id: 'r13', author: 'Sadiya T.', rating: 5, date: '2026-06-14', comment: 'Prints are gorgeous and true to the photos.' },
      { id: 'r14', author: 'Bilkisu Y.', rating: 4, date: '2026-05-02', comment: 'Lovely and light, slightly sheer so I double it up.' },
    ],
  },
  {
    id: 'p8',
    slug: 'regular-prayer-mat',
    name: 'Regular Prayer Mat',
    price: 9500,
    collection: 'Everyday',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Blue',
    colorHex: '#1B3B66',
    colorHexDark: '#0F2440',
    photo: 'regularPrayerMat',
    dimensions: '110cm x 70cm',
    care: ['Spot clean with a damp cloth', 'Do not machine wash', 'Air dry flat'],
    description: 'A classic velvet prayer mat with a woven arch and floral border — lightweight and easy to fold for travel.',
    rating: 4.6,
    reviewCount: 31,
    tags: ['bestseller'],
    reviews: [
      { id: 'r15', author: 'Hauwa L.', rating: 5, date: '2026-04-08', comment: 'Great everyday mat, folds small for my bag.' },
      { id: 'r16', author: 'Zara N.', rating: 4, date: '2026-03-22', comment: 'Nice weight and pattern, arrived well packaged.' },
    ],
  },
  {
    id: 'p9',
    slug: 'rhinestone-brooch',
    name: 'Rhinestone Brooch',
    price: 5000,
    collection: 'Finishing Touches',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Silver',
    colorHex: '#B9BEC7',
    colorHexDark: '#7B818C',
    photo: 'rhinestoneBrooch',
    dimensions: 'Approx. 6cm x 9cm',
    care: ['Wipe clean with a soft dry cloth', 'Store in a jewelry pouch'],
    description: 'A bow-shaped rhinestone brooch with a draped tassel of crystals — a dressy finishing pin for a plain hijab.',
    rating: 4.8,
    reviewCount: 22,
    tags: ['trending', 'new'],
    reviews: [
      { id: 'r17', author: 'Leeyah A.', rating: 5, date: '2026-06-18', comment: 'Catches the light beautifully, sturdy clasp too.' },
      { id: 'r18', author: 'Chidinma E.', rating: 5, date: '2026-05-30', comment: 'Elevated a plain black hijab instantly.' },
    ],
  },
  {
    id: 'p10',
    slug: 'scarf-hanger',
    name: 'Scarf Hanger',
    price: 3200,
    collection: 'Finishing Touches',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Multicolor Rope',
    colorHex: '#C24B7C',
    colorHexDark: '#8A2F55',
    photo: 'scarfHanger',
    dimensions: 'Set of 12 rings',
    care: ['Wipe clean with a damp cloth'],
    description: 'Woven rope rings that clip onto any hanger, letting you organize and see your whole scarf collection at a glance.',
    rating: 4.5,
    reviewCount: 16,
    tags: ['new'],
    reviews: [
      { id: 'r19', author: 'Ngozi I.', rating: 4, date: '2026-04-25', comment: 'Simple but genuinely fixed my overflowing scarf drawer.' },
      { id: 'r20', author: 'Amina O.', rating: 5, date: '2026-03-30', comment: 'Sturdy rope, holds heavier pashminas fine.' },
    ],
  },
  {
    id: 'p11',
    slug: 'crinkle-scarf',
    name: 'Crinkle Scarf',
    price: 13500,
    compareAtPrice: 15500,
    collection: 'The Marble Edit',
    category: 'Hijab',
    material: 'Chiffon',
    marbleVeins: ['#8A4F6B', '#5C2F45'],
    colorName: 'Plum Marble',
    colorHex: '#F1E4EC',
    colorHexDark: '#C99BC4',
    photo: 'crinkleScarf',
    dimensions: '180cm x 70cm',
    care: ['Hand wash cold, separately on first wash', 'Do not bleach', 'Line dry'],
    description: 'Hand-dipped crinkle chiffon in a marbled wash of color — every piece is one of one, from plum to sage to dusty rose.',
    rating: 4.9,
    reviewCount: 38,
    tags: ['bestseller', 'trending'],
    reviews: [
      { id: 'r21', author: 'Fatima K.', rating: 5, date: '2026-06-05', comment: 'The marble pattern I received is stunning, better than the photo.' },
      { id: 'r22', author: 'Halima B.', rating: 5, date: '2026-05-14', comment: 'Texture is gorgeous, holds its crinkle after washing.' },
    ],
  },
  {
    id: 'p12',
    slug: 'adire-print-chiffon-scarf',
    name: 'Adire Print Chiffon Scarf',
    price: 12500,
    collection: 'Earth Tones',
    category: 'Hijab',
    material: 'Chiffon',
    colorName: 'Rust & Mustard',
    colorHex: '#B5652F',
    colorHexDark: '#7A431F',
    photo: 'adireChiffon',
    dimensions: '180cm x 70cm',
    care: ['Hand wash cold', 'Do not bleach', 'Cool iron on reverse if needed'],
    description: 'Chiffon finished with an Adire-inspired print in warm rust and mustard tones — a nod to local textile tradition.',
    rating: 4.7,
    reviewCount: 21,
    tags: ['new', 'trending'],
    reviews: [
      { id: 'r23', author: 'Zainab R.', rating: 5, date: '2026-06-20', comment: 'Love that this celebrates a local print, gorgeous colors.' },
      { id: 'r24', author: 'Maryam S.', rating: 4, date: '2026-05-08', comment: 'Fabric is soft, print is bold in the best way.' },
    ],
  },
  {
    id: 'p13',
    slug: '2-in-1-jersey-scarf-set',
    name: '2-in-1 Jersey Scarf Set',
    price: 16000,
    collection: 'Jewel Tones',
    category: 'Hijab',
    material: 'Mixed',
    colorName: 'Navy, Royal & Sky Blue',
    colorHex: '#1B3B7A',
    colorHexDark: '#0A1F42',
    photo: 'twoInOneJersey',
    dimensions: '180cm x 70cm, set of 4',
    care: careStandard,
    description: 'A gift-boxed set of four jersey wraps moving from navy through royal to sky blue — ribbon-tied and ready to give.',
    rating: 4.8,
    reviewCount: 14,
    tags: ['new'],
    reviews: [
      { id: 'r25', author: 'Aisha M.', rating: 5, date: '2026-06-02', comment: 'Bought this as a gift and kept two for myself.' },
      { id: 'r26', author: 'Bilkisu Y.', rating: 5, date: '2026-04-19', comment: 'The blue gradient is even nicer in person.' },
    ],
  },
  {
    id: 'p14',
    slug: 'al-quran',
    name: 'Al-Quran',
    price: 7500,
    collection: 'Everyday',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Green & Gold',
    colorHex: '#1E4238',
    colorHexDark: '#0F241F',
    photo: 'alQuran',
    dimensions: 'A5 hardcover',
    care: ['Wipe cover with a dry cloth', 'Store flat or upright on a shelf'],
    description: 'A hardcover Al-Quran with gold-embossed detailing and a ribbon bookmark, sized for a bag or bedside table.',
    rating: 4.9,
    reviewCount: 46,
    tags: ['bestseller'],
    reviews: [
      { id: 'r27', author: 'Ummu H.', rating: 5, date: '2026-05-16', comment: 'Beautiful embossing, feels well made.' },
      { id: 'r28', author: 'Khadija A.', rating: 5, date: '2026-04-11', comment: 'Print is clear and the cover is sturdy.' },
    ],
  },
  {
    id: 'p15',
    slug: 'arm-sleeve',
    name: 'Arm Sleeve',
    price: 4500,
    collection: 'Everyday',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Assorted Pastel',
    colorHex: '#A9C6BF',
    colorHexDark: '#6E8F87',
    photo: 'armSleeve',
    dimensions: 'One size, stretch, thumb-hole',
    care: ['Hand wash cold', 'Line dry'],
    description: 'Stretch arm sleeves with a thumb hole for full coverage under short-sleeve tops — breathable enough for daily wear.',
    rating: 4.6,
    reviewCount: 18,
    tags: ['trending'],
    reviews: [
      { id: 'r29', author: 'Rukayya D.', rating: 5, date: '2026-05-24', comment: 'Perfect length and the thumb hole actually stays put.' },
      { id: 'r30', author: 'Amara C.', rating: 4, date: '2026-04-06', comment: 'Soft fabric, true to size.' },
    ],
  },
  {
    id: 'p16',
    slug: 'cotton-pleated-scarf',
    name: 'Cotton Pleated Scarf',
    price: 10500,
    collection: 'Everyday',
    category: 'Hijab',
    material: 'Cotton Voile',
    colorName: 'Multicolor Range',
    colorHex: '#7A6A55',
    colorHexDark: '#4E4335',
    photo: 'cottonPleated',
    dimensions: '180cm x 70cm',
    care: careCotton,
    description: 'Ribbed cotton pleats that hold their shape and stay put without pins — breathable enough for all-day, humid-weather wear.',
    rating: 4.7,
    reviewCount: 33,
    tags: ['bestseller', 'new'],
    reviews: [
      { id: 'r31', author: 'Sadiya T.', rating: 5, date: '2026-06-08', comment: 'The pleats genuinely do not fall flat by evening.' },
      { id: 'r32', author: 'Hauwa L.', rating: 4, date: '2026-05-01', comment: 'Cotton feels great on sensitive skin.' },
    ],
  },
  {
    id: 'p17',
    slug: 'counter',
    name: 'Counter',
    price: 2500,
    collection: 'Finishing Touches',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Assorted',
    colorHex: '#C0392B',
    colorHexDark: '#7E2118',
    photo: 'counter',
    dimensions: 'Adjustable finger band',
    care: ['Wipe with a dry cloth', 'Remove battery if unused for long periods'],
    description: 'A digital finger-worn tasbih counter with reset and LED display, in a range of bright colors.',
    rating: 4.4,
    reviewCount: 12,
    tags: ['new'],
    reviews: [
      { id: 'r33', author: 'Zara N.', rating: 4, date: '2026-05-19', comment: 'Handy and light, battery lasted months so far.' },
      { id: 'r34', author: 'Leeyah A.', rating: 5, date: '2026-04-14', comment: 'Kids love the bright colors too.' },
    ],
  },
  {
    id: 'p18',
    slug: 'gift-box-scarf-set',
    name: 'Gift Box Scarf Set',
    price: 35000,
    compareAtPrice: 40000,
    collection: 'Earth Tones',
    category: 'Hijab',
    material: 'Mixed',
    colorName: 'Rust, Rose & Plum',
    colorHex: '#7A2E3A',
    colorHexDark: '#4E1B23',
    photo: 'giftBox',
    dimensions: '180cm x 70cm, set of 5, boxed',
    care: careStandard,
    description: 'Five wraps in a considered rust-to-plum gradient, folded into a keepsake box — our most-gifted set.',
    rating: 4.9,
    reviewCount: 25,
    tags: ['bestseller', 'trending'],
    reviews: [
      { id: 'r35', author: 'Chidinma E.', rating: 5, date: '2026-06-11', comment: 'The presentation alone makes this worth it as a gift.' },
      { id: 'r36', author: 'Maryam S.', rating: 5, date: '2026-05-09', comment: 'Every color in this set is wearable, no fillers.' },
    ],
  },
  {
    id: 'p19',
    slug: 'heart-fall-brooch',
    name: 'Heart Fall Brooch',
    price: 5500,
    collection: 'Finishing Touches',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Silver',
    colorHex: '#BCC2CB',
    colorHexDark: '#7D828C',
    photo: 'heartBrooch',
    dimensions: 'Approx. 5cm x 12cm',
    care: ['Wipe clean with a soft dry cloth', 'Store in a jewelry pouch'],
    description: 'A heart-shaped rhinestone brooch with a cascading crystal fringe — a statement pin for evenings out.',
    rating: 4.8,
    reviewCount: 20,
    tags: ['trending'],
    reviews: [
      { id: 'r37', author: 'Amina O.', rating: 5, date: '2026-06-16', comment: 'The fringe catches light beautifully in photos.' },
      { id: 'r38', author: 'Bilkisu Y.', rating: 4, date: '2026-05-11', comment: 'Gorgeous, a little heavy on very light chiffon.' },
    ],
  },
  {
    id: 'p20',
    slug: 'hook-pin',
    name: 'Hook Pin',
    price: 2600,
    collection: 'Finishing Touches',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Assorted Pastel',
    colorHex: '#D98880',
    colorHexDark: '#973B33',
    photo: 'hookPin',
    dimensions: 'Approx. 4cm, set of 7',
    care: ['Wipe clean with a soft dry cloth'],
    description: 'Cherry-style double-bead hook pins in soft pastel tones — a small, playful way to cinch a wrap at the shoulder.',
    rating: 4.6,
    reviewCount: 15,
    tags: ['new'],
    reviews: [
      { id: 'r39', author: 'Ngozi I.', rating: 5, date: '2026-06-22', comment: 'So cute, ordered a second set as a gift.' },
      { id: 'r40', author: 'Khadija A.', rating: 4, date: '2026-05-06', comment: 'Good grip, colors are true to the photo.' },
    ],
  },
  {
    id: 'p21',
    slug: 'uae-jersey-scarf',
    name: 'UAE Jersey Scarf',
    price: 9000,
    collection: 'Everyday',
    category: 'Hijab',
    material: 'Mixed',
    colorName: 'Multicolor Range',
    colorHex: '#8C3B3B',
    colorHexDark: '#5C2626',
    photo: 'uaeJerseyScarf',
    dimensions: '180cm x 70cm',
    care: careStandard,
    description: 'A premium jersey wrap with a soft, structured drape, rolled in a full spread of everyday and jewel-tone colors.',
    rating: 4.7,
    reviewCount: 24,
    tags: ['new'],
    reviews: [
      { id: 'r41', author: 'Amina O.', rating: 5, date: '2026-06-25', comment: 'Thicker than my usual jersey and drapes beautifully.' },
      { id: 'r42', author: 'Fatima K.', rating: 4, date: '2026-06-01', comment: 'Lovely colorway, holds its shape all day.' },
    ],
  },
  {
    id: 'p22',
    slug: 'chiffon-scarf',
    name: 'Chiffon Scarf',
    price: 10500,
    collection: 'Everyday',
    category: 'Hijab',
    material: 'Chiffon',
    colorName: 'Multicolor Range',
    colorHex: '#A6927E',
    colorHexDark: '#6E5E4E',
    photo: 'chiffonScarf',
    dimensions: '180cm x 70cm',
    care: careStandard,
    description: 'Our everyday chiffon in its full color range — lightweight, breathable, and easy to style for any occasion.',
    rating: 4.6,
    reviewCount: 30,
    tags: ['bestseller'],
    reviews: [
      { id: 'r43', author: 'Halima B.', rating: 5, date: '2026-05-30', comment: 'Soft and light, my go-to for warm days.' },
      { id: 'r44', author: 'Zainab R.', rating: 4, date: '2026-04-22', comment: 'Great range of colors to choose from.' },
    ],
  },
  {
    id: 'p23',
    slug: 'dangling-pin',
    name: 'Dangling Pin',
    price: 4200,
    collection: 'Finishing Touches',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Crystal Mix',
    colorHex: '#B9BEC7',
    colorHexDark: '#7B818C',
    photo: 'danglingPin',
    dimensions: 'Approx. 5cm drop, set of 3',
    care: ['Wipe clean with a soft dry cloth', 'Store in a jewelry pouch'],
    description: 'A faceted crystal teardrop on a slim silver bar pin — a delicate dangling finish for a plain hijab.',
    rating: 4.8,
    reviewCount: 17,
    tags: ['new', 'trending'],
    reviews: [
      { id: 'r45', author: 'Maryam S.', rating: 5, date: '2026-06-27', comment: 'Catches the light so nicely, feels well made.' },
      { id: 'r46', author: 'Bilkisu Y.', rating: 5, date: '2026-06-03', comment: 'Elegant and not too heavy on chiffon.' },
    ],
  },
  {
    id: 'p24',
    slug: 'disc-pin',
    name: 'Disc Pin',
    price: 2400,
    collection: 'Finishing Touches',
    category: 'Accessory',
    material: 'Mixed',
    colorName: 'Assorted Metallic',
    colorHex: '#B08D57',
    colorHexDark: '#7A5E37',
    photo: 'discPin',
    dimensions: 'Approx. 2cm disc, set of 6',
    care: ['Wipe clean with a soft dry cloth'],
    description: 'Rounded magnetic disc pins in warm metallic tones — a simple, secure hold with a polished finish.',
    rating: 4.5,
    reviewCount: 13,
    tags: ['trending'],
    reviews: [
      { id: 'r47', author: 'Ummu H.', rating: 4, date: '2026-05-18', comment: 'Strong hold, love the rose gold finish.' },
      { id: 'r48', author: 'Khadija A.', rating: 5, date: '2026-04-27', comment: 'Sleek and simple, exactly what I needed.' },
    ],
  },
  {
    id: 'p25',
    slug: 'jersey-scarf',
    name: 'Jersey Scarf',
    price: 8000,
    collection: 'Everyday',
    category: 'Hijab',
    material: 'Mixed',
    colorName: 'Multicolor Range',
    colorHex: '#6B7A5A',
    colorHexDark: '#3F4A34',
    photo: 'jerseyScarf',
    dimensions: '180cm x 70cm',
    care: careStandard,
    description: 'A classic everyday jersey wrap, soft and non-slip, in a wide range of solid colors.',
    rating: 4.6,
    reviewCount: 28,
    tags: ['bestseller'],
    reviews: [
      { id: 'r49', author: 'Rukayya D.', rating: 5, date: '2026-05-15', comment: 'My most-worn scarf, holds up wash after wash.' },
      { id: 'r50', author: 'Amara C.', rating: 4, date: '2026-04-09', comment: 'Great everyday basic, good stretch.' },
    ],
  },
  {
    id: 'p26',
    slug: 'popcorn-scarf',
    name: 'Popcorn Scarf',
    price: 11500,
    collection: 'Everyday',
    category: 'Hijab',
    material: 'Chiffon',
    colorName: 'Multicolor Range',
    colorHex: '#C98F87',
    colorHexDark: '#8A5A54',
    photo: 'popcornScarf',
    dimensions: '180cm x 70cm',
    care: careStandard,
    description: 'Textured popcorn-weave chiffon with a subtle bobble finish that adds grip and keeps it from slipping.',
    rating: 4.7,
    reviewCount: 20,
    tags: ['new', 'trending'],
    reviews: [
      { id: 'r51', author: 'Sadiya T.', rating: 5, date: '2026-06-29', comment: 'The texture genuinely helps it stay put all day.' },
      { id: 'r52', author: 'Hauwa L.', rating: 4, date: '2026-06-04', comment: 'Lovely subtle texture, soft against the skin.' },
    ],
  },
]

export const materials: Material[] = ['Chiffon', 'Crepe', 'Cotton Voile', 'Pleated Satin']
export const collections: Collection[] = ['Everyday', 'Jewel Tones', 'Earth Tones', 'The Marble Edit', 'Finishing Touches']
export const styles: Category[] = ['Wrap', 'Hijab', 'Accessory']

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelated(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && (p.collection === product.collection || p.material === product.material))
    .slice(0, count)
}
