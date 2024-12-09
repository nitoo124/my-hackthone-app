import Button from '@/components/global/button'
import Image from 'next/image'
import SlideImg from './slider'
import { FaLongArrowAltRight } from "react-icons/fa";


function Inspiration() {
  return (
   <main className=' max-w-[1440px] bg-[#FCF8F3] mx-auto flex lg:flex-row flex-col justify-center lg:justify-between gap-8 items-center p-10'>
    {/* content */}
    <div className=' p-8 mt-5'>
        <h2 className=' text-[40px] font-bold'>50+ Beautiful rooms 
        inspiration</h2>
        <p className=' 18px font-medium mt-2'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
   <div className = 'mt-3'>     
       <Button text='Explore More' bgcolor='bg-[#B88E2F]' textcolor='text-white'/>
   </div>

    </div>
    {/* center img */}
    <div className="relative">
  {/* Background Image */}
  <Image
    src={"/images/inspiration.png"}
    alt="inspiration"
    width={500}
    height={500}
    loading="lazy"
    className="object-cover"
  />

  {/* Text and Arrow Overlay */}
  <div className="absolute bottom-10 left-8 flex gap-2 items-center  px-2 shadow-lg">
    {/* Text Section */}
    <div className="px-4 py-2 bg-white">
      <p className="text-[16px] font-medium">Bed Room</p>
      <h3 className="text-[24px] font-semibold">Inner Peace</h3>
    </div>
    {/* Arrow Section */}
    <div className="flex items-center justify-center p-3 bg-[#B88E2F] ">
      <FaLongArrowAltRight className="text-white" size={25} />
    </div>
  </div>
</div>


    <SlideImg/>

   </main>
  )
}

export default Inspiration