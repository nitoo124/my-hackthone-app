import Button from '@/components/global/button'
import Image from 'next/image'
import SlideImg from './slider'

function Inspiration() {
  return (
   <main className=' max-w-[1440px] bg-[#FCF8F3] mx-auto lg:flex justify-between gap-8 items-center p-10'>
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
    <div>
        <Image src={'/images/inspiration.png'} alt='inspiration'
        width={500}
        height={400}
        loading='lazy'/>
        <div>

        </div>


    </div>

    <SlideImg/>

   </main>
  )
}

export default Inspiration