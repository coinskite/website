"use client";

import React, { useState, useEffect, useRef } from 'react';

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

const ServiceItem = ({ item, isActive, inView }) => {
  return (
    <div
      className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'
        } ${isActive ? 'z-10' : 'z-0'
        } absolute top-0 left-0 w-full h-full flex items-center justify-center pr-40`}
    >
      <div className="bg-[#0F161B] border-[#22C954] border-[3px] p-4 md:p-8 rounded w-[500px]">
        <img className="my-10 mx-auto" src={item.src} alt={item.title} />
        <h3 className="font-[500] text-[12px] xs:text-[18px] sm:text-[20px] md:text-[20px] xl:text-[24px] text-[#E8E00E] mb-4">{item.title}</h3>
        <p className="text-white font-[400] text-[8px] xs:text-[10px] sm:text-[12px] xl:text-[14px]">{item.para}</p>
        <button className="font-medium text-[10px] mt-4 xs:text-[12px] sm:text-[16px] xl:text-[18px] bg-gradient-to-r from-[#22C954]  to-[#116329]">
          Enquire for consultation
        </button>
      </div>
    </div>
  );
};


const ProgressIndicator = ({ activeIndex, total }) => {
  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 delay-700">
      <div className="flex flex-col items-center">
        {Array.from({ length: total }).map((_, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div
                className={`w-0.5 h-16 transition-all duration-300 ${index <= activeIndex ? 'bg-[#22C954]' : 'bg-gray-600'
                  }`}
              />
            )}
            <div
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${index === activeIndex
                ? 'bg-[#22C954] border-[#22C954]'
                : index < activeIndex
                  ? 'bg-[#22C954] border-[#22C954]'
                  : 'bg-transparent border-gray-600'
                }`}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const UniqueMethodology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inViewItems, setInViewItems] = useState({});
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
        const newIndex = Math.min(
          Math.floor(scrollPercentage * list.length),
          list.length - 1
        );
        setActiveIndex(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInViewItems((prev) => ({
            ...prev,
            [entry.target.dataset.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.5 }
    );

    const elements = containerRef.current.querySelectorAll('.service-item');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="pad-main-3">
      <div className="flex items-center justify-center lg:justify-end">
        <h2 className='mb-4 mt-10 text-[8px] xs:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[28px] font-bold uppercase  bg-[#FFEF16]  p-2 text-black'>
          Our Unique Methodology
        </h2>
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <p className="mb-10 font-[600] text-[8px] xs:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]">Learn about our step-by-step <br /> process for delivering results.</p>
      </div>
      <div className="flex justify-center flex-col items-center">
        {/* Mobile Layout */}
        <div className="grid md:grid-cols-2 gap-x-4 lg:hidden w-full">
          {list.map((item) => (
            <div key={item.id} className="bg-[#0F161B] border-[#22C954] border-[3px] p-4 md:p-8 rounded mb-4">
              <img className="my-5 md:my-10" src={item.src} alt={item.title} />
              <h3 className="font-[500] text-[12px] xs:text-[18px] sm:text-[20px] md:text-[20px] xl:text-[24px] text-[#E8E00E]">{item.title}</h3>
              <p className="font-[400] text-[8px] xs:text-[10px] sm:text-[12px] xl:text-[14px]">{item.para}</p>
              <button className="font-medium text-[10px] mt-4 xs:text-[12px] sm:text-[16px] xl:text-[18px] bg-gradient-to-r from-[#22C954]  to-[#116329]">
                Enquire for consultation
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block w-full h-screen relative overflow-hidden hide-scrollbar">
          <div
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-full overflow-y-scroll hide-scrollbar"
            style={{ scrollSnapType: 'y mandatory' }}
          >
            {list.map((item, index) => (
              <div
                key={item.id}
                data-id={item?.id}
                className="service-item  h-full w-full flex items-center justify-center sticky top-0"
                style={{ scrollSnapAlign: 'start' }}
              >
                <ServiceItem
                  item={item}
                  isActive={index === activeIndex}
                  inView={inViewItems[item.id]}
                />
              </div>
            ))}
          </div>
          <ProgressIndicator activeIndex={activeIndex} total={list.length} />
        </div>
      </div>
    </div>
  );
};

export default UniqueMethodology;
