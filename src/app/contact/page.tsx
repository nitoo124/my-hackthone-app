import Warrantysection from '@/components/global/warrantysection'
import Contact from '@/components/pages/contact/contact'
import Contacthero from '@/components/pages/contact/herocontact'
import React from 'react'

function Contactpage() {
  return (
    <div>
        <Contacthero/>
        <Contact/>
        <Warrantysection/>

    </div>
  )
}

export default Contactpage