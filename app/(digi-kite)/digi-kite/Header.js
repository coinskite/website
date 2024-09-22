"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

function Header() {
  return (
    <section>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop
        spaceBetween={10}
        modules={[Pagination]}
      >
        <SwiperSlide><img className='w-full' src="./img/digi/header/1.jpeg" alt="slider" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="./img/digi/header/2.jpeg" alt="slider" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="./img/digi/header/3.jpeg" alt="slider" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="./img/digi/header/4.jpeg" alt="slider" /></SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Header