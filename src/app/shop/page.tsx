import Pagesbutton from '@/components/global/pagesbutton'
import Warrantysection from '@/components/global/warrantysection'
import Filtersection from '@/components/pages/about/filtersection'
import Abouthero from '@/components/pages/about/hero'
import Shop from '@/components/pages/about/shop'
import React from 'react'

function Aboutpage() {
  return (
    <main>
        <Abouthero/>
        <Filtersection/>
        <Shop/>
        <Pagesbutton/>
        <Warrantysection/>
    </main>
  )
}

export default Aboutpage