"use client";
import Slider from "react-slick";
import Image from "next/image";

const data = [
  {
    image: "/images/slide1.png",
    name: "Client1",
    
  },
  {
    image: "/images/slide1.png",
    name: "Client2",
   
  },
  {
    image: "/images/slide1.png",
    name: "Client3",
 
  },
];

function SlideImg() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Keep navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Remove arrows for smaller devices
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Keep simple navigation for small screens
        },
      },
    ],
  };

  return (
    <div className="mt-5 px-4 md:px-8 lg:px-16 w-full max-w-[500px] mx-auto">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            {/* Image Section */}
            <section className="h-[300px] md:h-[400px] lg:h-[486px] w-full">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="rounded-lg object-cover mx-auto"
                loading="lazy"
              />
            </section>

            {/* Text Section (Optional) */}
            <div className="mt-4 text-center">
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlideImg;
