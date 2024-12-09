import React from 'react';
import Image from 'next/image';
import { BsViewList, BsFillGridFill } from "react-icons/bs";

function Filtersection() {
  return (
    <main className='max-w-[1440px] mx-auto bg-[#F9F1E7] p-5 flex flex-col md:flex-row justify-between items-center md:items-start'>

      {/* section1 */}
      <div className='flex flex-col md:flex-row gap-4 items-center w-full md:w-auto mb-4 md:mb-0'>
        <div className='flex gap-3 items-center'>
          <Image 
            src={"/images/about/about-icons/Vector.png"} 
            alt='filter' 
            width={25} 
            height={1} 
            loading='lazy' 
          />
          <p className='text-[18px] sm:text-[20px] text-[#000000] font-medium'>Filter</p>
          <BsViewList className='mt-1 text-[18px]' />
          <BsFillGridFill className='mt-1 text-[18px]' />
        </div>

        <div className='border-l-2 border-black px-3'>
          <p className='text-[14px] sm:text-[16px]'>Showing 1–16 of 32 results</p>
        </div>
      </div>

      {/* section2 */}
      <div className='flex flex-wrap gap-4 justify-center md:justify-start w-full md:w-auto'>
        {/* div1 */}
        <div className='flex gap-2 items-center'>
          <p className='text-[16px] sm:text-[18px]'>Show</p>
          <div className='w-[50px] h-[50px] text-[#9F9F9F] text-[18px] bg-[#ffffff] flex items-center justify-center rounded-md'>
            16
          </div>
        </div>

        {/* div2 */}
        <div className='flex gap-2 items-center'>
          <p className='text-[16px] sm:text-[18px]'>Sort By</p>
          <div className='w-[180px] h-[50px] text-[#9F9F9F] text-[16px] sm:text-[18px] bg-[#ffffff] flex items-center justify-center rounded-md'>
            Default
          </div>
        </div>
      </div>

    </main>
  );
}

export default Filtersection;
