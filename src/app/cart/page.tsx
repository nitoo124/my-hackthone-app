import Pagesbutton from '@/components/global/pagesbutton'
import Warrantysection from '@/components/global/warrantysection'
import Carthero from '@/components/pages/cart/carthero'
import Cartsection from '@/components/pages/cart/cartsection'
import React from 'react'

function Cartpage() {
  return (
 <main>
    <Carthero/>
    <Cartsection/>
    <Pagesbutton/>
    <Warrantysection/>


 </main>
  )
}

export default Cartpage