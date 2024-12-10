import Image from 'next/image'
import React from 'react'

function Warrantysection() {
  return (

    <>
               {/* ---------------last section--------------- */}


          {/* quality section */}
<div className=' mt-12 max-w-[1440px] mx-auto bg-[#F9F1E7] flex flex-col md:flex-row justify-center items-center gap-8 p-8'>
    <div className=' px-2 flex flex-col items-center md:flex-row gap-4'>
        <Image 
            src='/images/shop/abouticons/quality.png'
            alt='icon'
            width={40}
            height={40}
            loading='lazy'
        />
        <div>
            <h4 className='text-[20px] md:text-[20px] font-semibold text-center md:text-left'>High Quality</h4>
            <p className='text-[#898989] font-medium text-[16px] md:text-[20px] text-center md:text-left'>Crafted from top materials</p>
        </div>
    </div>

    {/* warranty section */}
    <div className='px-2 flex flex-col items-center md:flex-row gap-4'>
        <Image 
            src='/images/shop/abouticons/warranty.png'
            alt='icon'
            width={40}
            height={40}
            loading='lazy'
        />
        <div>
            <h4 className='text-[20px] md:text-[20px] font-semibold text-center md:text-left'>Warranty Protection</h4>
            <p className='text-[#898989] font-medium text-[16px] md:text-[20px] text-center md:text-left'>Over 2 years</p>
        </div>
    </div>

    {/* free shipping section */}
    <div className='px-2 flex flex-col items-center md:flex-row gap-4'>
        <Image 
            src='/images/shop/abouticons/freeshiping.png'
            alt='icon'
            width={40}
            height={40}
            loading='lazy'
        />
        <div>
            <h4 className='text-[20px] md:text-[20px] font-semibold text-center md:text-left'>Free Shipping</h4>
            <p className='text-[#898989] font-medium text-[16px] md:text-[20px] text-center md:text-left'>Order over $150</p>
        </div>
    </div>

    {/* support section */}
    <div className='px-2 flex flex-col items-center md:flex-row gap-4'>
        <Image 
            src='/images/shop/abouticons/freedelivery.png'
            alt='icon'
            width={40}
            height={40}
            loading='lazy'
        />
        <div>
            <h4 className='text-[20px] md:text-[20px] font-semibold text-center md:text-left'>24 / 7 Support</h4>
            <p className='text-[#898989] font-medium text-[16px] md:text-[20px] text-center md:text-left'>Dedicated support</p>
        </div>
    </div>
</div>
</>
  )
}

export default Warrantysection