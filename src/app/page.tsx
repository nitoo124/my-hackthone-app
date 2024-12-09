import HomeHero from '@/components/pages/home/hero'
import Inspiration from '@/components/pages/home/inspiration'
import ProductSection from '@/components/pages/home/product'
import Range from '@/components/pages/home/range'
import ImageSlider from '@/components/pages/home/slider'




function Home() {
  return (
  <main>
    <HomeHero/>
    <Range/>
    <ProductSection/>
     <Inspiration/>
  </main>
  )
}

export default Home