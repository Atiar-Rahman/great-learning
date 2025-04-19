import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SuccessiveStudent = () => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3} // 👈 show 3 slides at once
            spaceBetween={30}
            coverflowEffect={{
                rotate: 30,      // 👈 reduce to avoid too much skew
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {[1,2,3,4,5,6,7,8,9].map((num) => (
                <SwiperSlide key={num}>
                    <img 
                        src={`https://swiperjs.com/demos/images/nature-${num}.jpg`} 
                        className="w-48 h-48 object-cover rounded-full mx-auto" 
                        alt={`Nature ${num}`} 
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SuccessiveStudent;
