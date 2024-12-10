import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/global/button';
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";




const products = [
  {
    img: '/images/shop/aboutimages/image1.png',
    name: 'Syltherine',
    price: 'Rp 2.500.000',
  },
  {
    img: '/images/shop/aboutimages/image2.png',
    name: 'Leviosa',
    price: 'Rp 7.000.000',
  },
  {
    img: '/images/shop/aboutimages/image3.png',
    name: 'Lolito',
    price: 'Rp 6.000.000',
  },
  {
    img: '/images/shop/aboutimages/image4.png',
    name: 'Reepior',
    price: 'Rp 4.000.000',
  },
  {
    img: '/images/product5.png',
    name: 'Syltherine',
    price: 'Rp 2.500.000',
  },
  {
    img: '/images/product6.png',
    name: 'Leviosa',
    price: 'Rp 7.000.000',
  },
  {
    img: '/images/product7.png',
    name: 'Lolito',
    price: 'Rp 6.000.000',
  },
  {
    img: '/images/product8.png',
    name: 'Reepior',
    price: 'Rp 4.000.000',
  },
];

const ProductSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-8">
      <h2 className="text-[32px] font-bold text-center mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Image */}
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover w-full h-64 group-hover:opacity-70 transition-opacity duration-300"
            />
            {/* Hover Button */}
            <div className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
             <div className=' '>
             <Button text='Add to Cart' bgcolor='bg-white' textcolor='text-[#B88E2F]'/>

             </div>
           <div className='flex gap-5 mt-4'>
              {/* share section */}
             {/* 1 */}
             <div className=' flex gap-2 '>
                <IoShareSocial size={25}/>
                <p className='text-[16px]'>Share</p>
             </div>

             {/* 2 */}
             <div className=' flex gap-2 '>
                <MdCompareArrows size={25}/>
                <p className='text-[16px]'>Compare</p>
             </div>

             {/* 3 */}
             <div className=' flex gap-2 '>
                <FaRegHeart  size={25}/>
                <p className='text-[16px]'>Like</p>
             </div>
           </div>
            </div>

            
           
            {/* Product Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-[#666666] text-sm">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
 <Link href={'/shop'}> <button className="w-full border-4 text-center border-[#B88E2F] text-[#B88E2F] py-3 md:w-[245px] rounded-lg mt-6 hover:bg-[#857d6c] hover:text-white hover:border-none">
    See More
  </button></Link>
</div>


    </section>
  );
};

export default ProductSection;
