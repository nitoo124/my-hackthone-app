import React from 'react';
import Button from '@/components/global/button';

function HomeHero() {
  return (
    <main className="flex justify-center items-center h-screen lg:max-w-[1440px] bg-homeImg md:bg-contain bg-repeat bg-center lg:bg-cover md:bg-bottom mx-auto">
      {/* Content Box */}
      <div className="w-[643px] bg-[#FFF3E3] px-10 py-10 mx-auto lg:mr-10 lg:ml-auto">
        <h1 className="text-[52px] font-bold text-[#B88E2F] mt-8 ">
          Discover Our <br />
          New Collection
        </h1>
        <p className="text-[18px] font-medium mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="mt-5">
          <Button text="BUY Now" bgcolor="bg-[#B88E2F]" textcolor="text-white" />
        </div>
      </div>
    </main>
  );
}

export default HomeHero;
