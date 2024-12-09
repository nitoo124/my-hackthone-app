import HomeHero from '@/components/pages/home/hero'
import Inspiration from '@/components/pages/home/inspiration'
import ShareSection from '@/components/pages/home/lastsection'
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
     <ShareSection/>
  </main>
  )
}

export default Home