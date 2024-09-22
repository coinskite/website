"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

function Live() {
  return (
    <section>
      <h1 className='df'>Live auctions <img src="/img/digi/live/fire.png" alt="fire" /></h1>

      <Swiper
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        loop
        modules={[Pagination]}
        breakpoints={{
          576: {
            slidesPerView: 4
          }
        }}
      >
        <SwiperSlide><div className='mx-2'><img src="/img/digi/live/1.png" alt="live" /></div></SwiperSlide>
        <SwiperSlide><div className='mx-2'><img src="/img/digi/live/2.png" alt="live" /></div></SwiperSlide>
        <SwiperSlide><div className='mx-2'><img src="/img/digi/live/3.png" alt="live" /></div></SwiperSlide>
        <SwiperSlide><div className='mx-2'><img src="/img/digi/live/4.png" alt="live" /></div></SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Live