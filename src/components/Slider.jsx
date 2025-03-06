import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../assets/slider/1.png';
import slider2 from '../assets/slider/2.png';
import slider3 from '../assets/slider/3.png';
import slider4 from '../assets/slider/4.png';
import slider5 from '../assets/slider/5.png';
import slider6 from '../assets/slider/6.png';
import slider7 from '../assets/slider/7.png';
import slider8 from '../assets/slider/8.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Slider = () => {
    return (
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 3000, // Change slide every 3 seconds
            disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider1}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider4}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider5}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider6}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider7}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider8}  alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Slider;