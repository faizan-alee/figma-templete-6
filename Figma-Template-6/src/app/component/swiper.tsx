'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';  
import './swiper-custom.css';  


export default function Swiper_img() {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 1,  
                },
                768: {
                    slidesPerView: 2,  
                },
                1024: {
                    slidesPerView: 3,  
                },
            }}
            navigation  // Enable navigation (next/previous buttons)
            loop={true}  // Enable looping for infinite scrolling
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            
        >
            <SwiperSlide >
                <Image
                    src="/slider-image-1.png"
                    height={600}
                    width={350}
                    alt="Slide 1"
                    className="w-[350px] h-[600px]"
                />
            </SwiperSlide>

            <SwiperSlide>
                <Image
                    src="/slider-img02.png"
                    height={600}
                    width={350}
                    alt="Slide 2"
                    className="w-[350px] h-[600px]"
                />
            </SwiperSlide>

            <SwiperSlide>
                <Image
                    src="/slider-img03.png"
                    height={600}
                    width={350}
                    alt="Slide 3"
                    className="w-[350px] h-[600px]"
                />
            </SwiperSlide>

            
            <SwiperSlide>
                <Image
                    src="/slider-img04.png"
                    height={600}
                    width={350}
                    alt="Slide 4"
                    className="w-[350px] h-[600px]"
                />
            </SwiperSlide>

            
            <SwiperSlide>
                <Image
                    src="/slider-img05.png"
                    height={600}
                    width={350}
                    alt="Slide 5"
                    className="w-[350px] h-[600px]"
                />
            </SwiperSlide>


            
            <SwiperSlide>
                <Image
                    src="/slider-img6.png"
                    height={600}
                    width={350}
                    alt="Slide 6"
                    className="w-[350px] h-[600px]"
                />
            </SwiperSlide>

            
            <SwiperSlide>
                <Image
                    src="/slider-img7.png"
                    height={600}
                    width={350}
                    alt="Slide 7"
                    className="w-[350px] h-[600px]"
                />
            </SwiperSlide>

            
            <SwiperSlide>
                <Image
                    src="/slider-img8.png"
                    height={600}
                    width={350}
                    alt="Slide 8"
                    className="w-[350px] h-[600px]"
                />
            </SwiperSlide>

            
        </Swiper>
    );
}
