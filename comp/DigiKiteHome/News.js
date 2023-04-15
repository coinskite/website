import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

function slide(isNext) {
  const swiperw = document.querySelector('.swiper.news-slider').swiper;
  if (isNext) swiperw.slideNext()
  else swiperw.slidePrev()
}

function News() {
  return (
    <section>
      <h1>News and stories</h1>

      <div className='xl:grid grid-cols-[4rem_1fr_4rem] items-center justify-center'>
        <div className='hidden xl:block'>
          <img
            className='w-12 h-12 cursor-pointer'
            src="./img/digi/news/left.png"
            alt="left arrow"
            onClick={() => slide(false)}
          />
        </div>

        <div className='md:max-w-6xl 2xl:max-w-7xl mx-auto'>
          <Swiper
            loop
            autoplay
            centeredSlides
            centeredSlidesBounds
            modules={[Autoplay]}
            className='news-slider'
            breakpoints={{
              780: {
                slidesPerView: 2,
                autoplay: false
              },
              1200: {
                slidesPerView: 3
              }
            }}
          >
            <SwiperSlide><div><img src="./img/digi/news/1.png" alt="news" /></div></SwiperSlide>
            <SwiperSlide><div><img src="./img/digi/news/2.png" alt="news" /></div></SwiperSlide>
            <SwiperSlide><div><img src="./img/digi/news/3.png" alt="news" /></div></SwiperSlide>
          </Swiper>
        </div>

        <div className='hidden xl:block'>
          <img
            className='w-12 h-12 cursor-pointer'
            src="./img/digi/news/right.png"
            alt="right arrow"
            onClick={() => slide(true)}
          />
        </div>
      </div>
    </section>
  )
}

export default News