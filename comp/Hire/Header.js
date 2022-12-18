import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const animation = { duration: 20000, easing: (t) => t }

function Header() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      spacing: 10,
      perView: 3
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 4 },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <>
      <div className="grid lg:flex lg:items-center lg:justify-center lg:gap-12 pad-main-3 max-w-7xl mx-auto text-center text-[#0F0450]">
        <img
          className="mx-auto w-[133px] xs:w-[160px] md:w-[240px] lg:w-[290px] xl:w-[420px] lg:mx-0"
          src="./img/job.png"
          alt=""
        />
        <div>
          <h1 className='mb-1 text-[15px] xs:text-xl sm:text-[25px] md:text-3xl lg:text-[35px] xl:text-[45px] font-bold leading-4'>
            Join us on our mission to create <br />
            better solution with <span className="text-primary-900">Blockchain</span>
          </h1>
          <p className='text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-[15px] xl:text-lg font-medium'>
            As a fully remote company, we welcome talented people from <br /> all backgrounds all across the world.
          </p>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider py-2 text-[10px] xs:text-xs sm:text-[15px] md:text-xl lg:text-[25px] xl:text-3xl font-bold text-white bg-primary-900">
        <p className="keen-slider__slide">YES! WE‘RE HIRING</p>
        <p className="keen-slider__slide text-[#CECECE]">YES! WE‘RE HIRING</p>
        <p className="keen-slider__slide">YES! WE‘RE HIRING</p>
        <p className="keen-slider__slide text-[#CECECE]">YES! WE‘RE HIRING</p>
        <p className="keen-slider__slide">YES! WE‘RE HIRING</p>
        <p className="keen-slider__slide text-[#CECECE]">YES! WE‘RE HIRING</p>
      </div>
    </>
  )
}

export default Header