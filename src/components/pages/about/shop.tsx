import React from 'react'
import Image from 'next/image'
import { data } from '@/products/products'

function Shop() {

    return (
        <main className=' max-w-[1440px] mx-auto mt-[6rem]  '>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    data.map((items, i) => {
                        return (
                            <div className='  p-5'>
                                <div className=' flex justify-center items-center' key={i}>
                                    <div>  <Image src={items.image} alt={items.name}
                                        width={285}
                                        height={301}
                                        loading='lazy' />
                                        <div className=' bg-[#F4F5F7] p-3 pb-5'>
                                            <h4 className=' text-[24px] font-semibold mt-2'>{items.name}</h4>
                                            <p className='text-[16px] text-[#898989] mt-2'>{items.detail}</p>
                                            <div className='flex gap-5 mt-2'>
                                                <p className=' text-[20px] font-semibold'>{items.price}</p>
                                                <p className='text-[#B0B0B0]'>{items.price}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        )
                    })
                }

            </div>

        </main>

    )
}

export default Shop