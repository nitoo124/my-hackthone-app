import React from 'react';
import { ImGift } from 'react-icons/im';
import Image from 'next/image';

const img = [
  {
    img: '/images/range1.png',
    text: 'Dining',
  },
  {
    img: '/images/range2.png',
    text: 'Living',
  },
  {
    img: '/images/range3.png',
    text: 'Bedroom',
  },
];

function Range() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <div className="max-w-[1183px] mx-auto mt-5 px-4">
        {/* Heading Section */}
        <section className="text-center">
          <h2 className="text-[32px] font-bold">Browse The Range</h2>
          <p className="text-[#666666] text-[20px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        {/* Images Section */}
        <section className="flex flex-wrap justify-center gap-8 mt-8">
          {img.map((item, index) => (
            <div key={index} className="text-center">
              <Image
                src={item.img}
                alt={item.text}
                width={300}
                height={300}
                loading="lazy"
                className="rounded-lg shadow-md"
              />
              <p className="text-[24px] font-semibold mt-4">{item.text}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Range;
