import React from 'react'
import { PiGreaterThan } from "react-icons/pi";


function Abouthero() {
  return (
   <main className=' flex justify-center items-center bg-bannerImg   md:bg-contain bg-repeat bg-center lg:bg-cover md:bg-bottom max-w-[1440px] h-[316px] mx-auto'>
    <div>
    {/* heading */}
    <h1 className=' text-[48px] font-medium text-[#000000] text-center'>Shop</h1>
    <div className=' flex gap-2 justify-center'>
        <p className='text-[16px] font-medium '>Home</p>
        < PiGreaterThan className='mt-1'/>
        <p className='text-[16px] '>Shop</p>
        </div>
        
    </div>
    
   </main>
  )
}

export default Abouthero