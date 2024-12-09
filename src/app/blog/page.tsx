import Pagesbutton from '@/components/global/pagesbutton'
import Warrantysection from '@/components/global/warrantysection'
import Bloghero from '@/components/pages/blog/bloghero'
import Blog from '@/components/pages/blog/blogpost'
import React from 'react'

function Blogpage() {
  return (
   <main>
    <Bloghero/>
    <Blog/>
    <Pagesbutton/>
    <Warrantysection/>

   </main>
  )
}

export default Blogpage