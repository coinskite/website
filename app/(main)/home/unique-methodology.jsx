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
          <div ref={ref}>
            {list.map((item, i) => (
              <div
                key={item.id}
                className="div h-[80vh] sticky top-52"
              >
                <div className="dfc gap-8 h-[60vh] bg-[#0F161B] border-[#22C954] border-[3px] p-4 md:p-8 rounded max-w-2xl">
                  <div className='grid justify-center items-center flex-1 bg-[#2C312D]'>
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
          <div>
            <div className="text-right md:h-[80vh] mb-4 lg:mb-0 font-semibold text-[8px] xs:text-[10px] sm:text-sm md:text-lg lg:text-2xl xl:text-[30px] sticky top-32">
              <div className="flex justify-end">
                <h2 className='w-fit mb-4 mt-10 text-[8px] xs:text-xs sm:text-base md:text-base lg:text-lg xl:text-[28px] font-bold uppercase bg-[#FFEF16]  p-2 text-black'>
                  Our Unique Methodology
                </h2>
              </div>
              <div className='mb-4 text-right'>
                Learn about our step-by-step <br /> process for delivering results.
              </div>
              <div className="flex justify-end">

                <ProgressBar parentRef={ref} childSelector="div.div" num={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniqueMethodology
