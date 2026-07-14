import { FoldedSwatch, MarbleSwatch } from './icons'
import {
  heroDraped,
  heroModel,
  marbleModel,
  innerCap,
  magneticStud,
  nonSnagPin,
  shadowJersey,
  paddedPrayerMat,
  pashminaScarf,
  printedChiffon,
  regularPrayerMat,
  rhinestoneBrooch,
  scarfHanger,
  crinkleScarf,
  adireChiffon,
  twoInOneJersey,
  alQuran,
  armSleeve,
  cottonPleated,
  counter,
  giftBox,
  heartBrooch,
  hookPin,
  uaeJerseyScarf,
  chiffonScarf,
  danglingPin,
  discPin,
  jerseyScarf,
  popcornScarf,
} from '../assets/photoData'
import type { Product } from '../data/products'

const PHOTOS: Record<string, string> = {
  heroDraped,
  heroModel,
  marbleModel,
  innerCap,
  magneticStud,
  nonSnagPin,
  shadowJersey,
  paddedPrayerMat,
  pashminaScarf,
  printedChiffon,
  regularPrayerMat,
  rhinestoneBrooch,
  scarfHanger,
  crinkleScarf,
  adireChiffon,
  twoInOneJersey,
  alQuran,
  armSleeve,
  cottonPleated,
  counter,
  giftBox,
  heartBrooch,
  hookPin,
  uaeJerseyScarf,
  chiffonScarf,
  danglingPin,
  discPin,
  jerseyScarf,
  popcornScarf,
}

export default function ProductThumb({
  product,
  className = '',
}: {
  product: Product
  className?: string
}) {
  if (product.photo) {
    return (
      <img
        src={PHOTOS[product.photo]}
        alt={`${product.name} in ${product.colorName}`}
        loading="lazy"
        decoding="async"
        className={`object-cover ${className}`}
      />
    )
  }
  if (product.marbleVeins) {
    return (
      <MarbleSwatch
        base={product.colorHex}
        veins={product.marbleVeins}
        id={product.id}
        className={className}
      />
    )
  }
  return (
    <FoldedSwatch color={product.colorHex} colorDark={product.colorHexDark} className={className} />
  )
}
