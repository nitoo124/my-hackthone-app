"use client"
import Slider from "react-slick";
import Image from 'next/image';

const data = [
    {
        image: '/images/slide1.png',
        name: 'Client1',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni autem eaque error'
    },
    {
        image: '/images/slide1.png',
        name: 'Client2',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni autem eaque error'
    },
    {
        image: '/images/slide1.png',
        name: 'Client3',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni autem eaque error'
    },
];

function SlideImg() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
          
            <div className="mt-5 w-[500px]" >
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="">
                            <section className=" h-[486px] w-[372px]">
                                <Image
                                    className=""
                                    src={item.image}
                                    alt={item.name}
                                    width={400}
                                    height={400}
                                    loading="lazy"
                                />
                            </section>

                            
                        </div>
                    ))}
                </Slider>
            </div>
      
    );
}

export default SlideImg;