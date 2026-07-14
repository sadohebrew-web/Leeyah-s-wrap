import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import FabricCategories from '../components/FabricCategories'
import ProductGrid from '../components/ProductGrid'
import ColorSwatches from '../components/ColorSwatches'
import MarbleEdit from '../components/MarbleEdit'
import Accessories from '../components/Accessories'
import CraftStatement from '../components/CraftStatement'
import { WhyDifferent, Reviews, InstagramGallery } from '../components/HomeExtras'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FabricCategories />
      <ProductGrid id="new-in" eyebrow="New In" title="This week's arrivals" tag="new" bgClass="bg-stone-deep" />
      <ProductGrid id="best-sellers" eyebrow="Best Sellers" title="What everyone reorders" tag="bestseller" bgClass="bg-stone" />
      <ColorSwatches />
      <MarbleEdit />
      <ProductGrid id="trending" eyebrow="Trending" title="Right now" tag="trending" bgClass="bg-stone-deep" />
      <WhyDifferent />
      <Accessories />
      <CraftStatement />
      <Reviews />
      <InstagramGallery />
      <Newsletter />
    </>
  )
}
