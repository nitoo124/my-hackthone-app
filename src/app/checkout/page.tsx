import Warrantysection from '@/components/global/warrantysection'
import Checkouform from '@/components/pages/checkout/checkoutform'
import Checkouthero from '@/components/pages/checkout/checkouthero'
import React from 'react'

function Checkoutpage() {
  return (
    <main>
        <Checkouthero/>
        <Checkouform/>
        <Warrantysection/>
    </main>
  )
}

export default Checkoutpage