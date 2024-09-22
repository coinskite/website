"use client";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";

import Arrow from '@/svg/arrows/digi.svg';
import Card from './Card';
import list from './list';

function Collection() {
  return (
    <section>
      <div className="df justify-between mb-2 md:mb-4 lg:mb-8 xl:mb-12">
        <h1 className='mb-0'>Top collections in</h1>

        <p className="text-digi-primary df text-xl lg:text-3xl xl:text-[40px]">
          <span>last 7 days</span>
          <Arrow />
        </p>

        <button className='ml-auto border border-[rgba(255,255,255,.4)] px-4 py-1 rounded-full'>See All</button>
      </div>

      <div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          // loop
          modules={[Pagination]}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
          }}
        >
          <SwiperSlide>
            <div>
              {
                list
                  .filter((p, i) => i < 5)
                  .map((l, i) => (
                    <Card key={i} i={i} {...l} starting={0} />
                  ))
              }
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              {
                list
                  .filter((p, i) => i > 4 && i < 10)
                  .map((l, i) => (
                    <Card key={i} i={i} {...l} starting={5} />
                  ))
              }
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              {
                list
                  .filter((p, i) => i > 9)
                  .map((l, i) => (
                    <Card key={i} i={i} {...l} starting={10} />
                  ))
              }
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <button className='bg-digi-primary py-1 px-2 m-auto hidden md:block'>Go to Rankings</button>
    </section>
  )
}

export default Collection