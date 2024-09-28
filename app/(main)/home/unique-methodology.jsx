"use client";

import { useRef } from 'react';
import ProgressBar from './progress-bar';

const list = [
  {
    id: "1",
    src: "/img/home_new/methodology/1.png",
    title: "Ideate",
    para: <>Turn your idea from <br /> concept to MVP</>
  },
  {
    id: "2",
    src: "/img/home_new/methodology/2.png",
    title: "Design",
    para: <>Sketch out the product to <br /> align the user needs</>
  },
  {
    id: "3",
    src: "/img/home_new/methodology/3.png",
    title: "Develop",
    para: <>Convert the designs into a <br /> live application</>
  },
  {
    id: "4",
    src: "/img/home_new/methodology/4.png",
    title: "Deploy",
    para: <>Launching the application to <br /> the market</>
  },
]

function UniqueMethodology() {
  const ref = useRef(null)

  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto relative">
        <div className='grid md:grid-cols-2 gap-4 relative md:h-[400vh]'>
          <div className='md:order-2'>
            <div className="dfc items-end md:h-[80vh] sticky top-24 text-right">
              <h2 className='w-fit mb-4 mt-10 p-2 text-[8px] xs:text-xs sm:text-base md:text-base lg:text-lg xl:text-[28px] font-bold uppercase bg-[#FFEF16] text-black'>
                Our Unique Methodology
              </h2>

              <div className='mb-4 text-sm xs:text-xl sm:text-2xl lg:text-3xl xl:text-[32px] font-semibold'>
                Learn about our step-by-step <br /> process for delivering results.
              </div>

              <ProgressBar parentRef={ref} childSelector=".scroll-2" num={4} />
            </div>
          </div>

          <div ref={ref}>
            {list.map((item, i) => (
              <div
                key={item.id}
                className="scroll-2 md:h-[80vh] sticky top-20 md:top-56"
              >
                <div className="dfc gap-8 w-[220px] xs:w-[334px] sm:w-[392px] md:w-[278px] lg:w-[392px] xl:w-[524px] md:h-[50vh] mb-4 ml-auto p-6 xs:p-8 md:p-6 bg-[#0F161B] border-[#22C954] border-[3px] rounded">
                  <div className='grid justify-center items-center flex-1 p-6 bg-[#2C312D]'>
                    <img src={item.src} alt={item.title} />
                  </div>

                  <div className='flex-1'>
                    <h3 className="mb-2 font-medium text-xs xs:text-lg sm:text-xl md:text-xl xl:text-2xl text-[#E8E00E]">{item.title}</h3>
                    <p className="text-white text-[8px] xs:text-[10px] sm:text-xs xl:text-sm">{item.para}</p>
                    <button className="font-medium text-[10px] mt-4 xs:text-xs sm:text-base xl:text-lg bg-gradient-to-r from-[#22C954]  to-[#116329]">
                      Enquire for consultation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniqueMethodology
