import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const ImageSwipe = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper pt-3">
        <SwiperSlide>
          <img src="/image/IMG_1_slide.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/IMG_2_slide.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/IMG_3_slide.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/IMG_4_slide.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/IMG_5_slide.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/IMG_6_slide.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/IMG_7_slide.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSwipe;
