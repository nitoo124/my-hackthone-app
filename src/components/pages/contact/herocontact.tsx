import React from 'react'
import { PiGreaterThan } from "react-icons/pi";
import Image from 'next/image';


function Contacthero() {
  return (
    <main className=' flex justify-center items-center bg-bannerImg   md:bg-contain bg-repeat bg-center lg:bg-cover md:bg-bottom max-w-[1440px] h-[316px] mx-auto'>
    <div>

        <div className=' flex justify-center items-center'>
        <Image src={'/images/blog/icon.png'}
    alt='blog icon'
    width={70}
    height={70}
    loading='lazy'/>
        </div>
    {/* heading */}
    <h1 className=' text-[48px] font-medium text-[rgb(0,0,0)] text-center'>Contact</h1>
    <div className=' flex gap-2 justify-center'>
        <p className='text-[16px] font-medium '>Home</p>
        < PiGreaterThan className='mt-1'/>
        <p className='text-[16px] '>Contact</p>
        </div>
        
    </div>
    
   </main>
  )
}

export default Contacthero