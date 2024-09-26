"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// const list = [
//   {
//     id: "1",
//     src: "/img/home_new/Our Services/POC Development.png",
//     title: "POC Development",
//     para: "Proof-of-Concept (POC) development is crucial for validating your blockchain ideas. Our expert team can assist you in developing robust POC solutions.",
//   },
//   {
//     id: "2",
//     src: "/img/home_new/Our Services/Metaverse development.png",
//     title: "Metaverse Development",
//     para: "Enter the exciting world of the metaverse with our Metaverse Development services. We help build immersive and interactive experiences in virtual environments.",
//   },
//   {
//     id: "3",
//     src: "/img/home_new/Our Services/NFT Development.png",
//     title: "NFT Development",
//     para: "Unlock the potential of Non-Fungible Tokens (NFTs) with our NFT Development services. We assist in creating and deploying unique and secure digital assets.",
//   },
//   {
//     id: "4",
//     src: "/img/home_new/Our Services/Smart Contract development.png",
//     title: "Smart Contract Development",
//     para: "Smart contracts automate processes, enhance security, and eliminate intermediaries. Our team specializes in developing secure and efficient smart contract solutions.",
//   },
//   {
//     id: "5",
//     src: "/img/home_new/Our Services/Token Development.png",
//     title: "Token Development",
//     para: "Tokenize your assets or launch your own cryptocurrency with our Token Development services. We ensure compliance, security, and seamless integration of tokens.",
//   },
//   {
//     id: "6",
//     src: "/img/home_new/Our Services/Blockchain Integration.png",
//     title: "Blockchain Integration",
//     para: "Seamlessly integrate blockchain technology into your existing systems with our Blockchain Integration services. Enhance transparency, security, and efficiency.",
//   },
// ];

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

const ServiceItem = ({ item, isActive }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'
        } ${isActive ? 'z-10' : 'z-0'
        } absolute top-0 left-0 w-full h-full flex items-center justify-center pr-40`}
    >
      <div className="bg-[#0F161B] border-[#22C954] border-[3px] p-8 rounded w-[500px]">
        <img className="my-10 mx-auto" src={item.src} alt={item.title} />
        <h3 className="text-2xl font-bold text-[#E8E00E] mb-4">{item.title}</h3>
        <p className="text-white text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">{item.para}</p>
        <button className="text-[8px] mt-4 xs:text-[10px] sm:text-sm md:text-base lg:text-lg  bg-gradient-to-r from-[#22C954]  to-[#116329]">
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
  const containerRef = useRef(null);

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

  return (
    <div className="pad-main-3">
      <div className="flex items-center justify-center lg:justify-end">
        <h2 className='mb-4 mt-10 text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold uppercase  bg-[#FFEF16]  p-2 text-black'>
          Our Unique Methodology
        </h2>
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <p className="font-[600] mb-10 lg:mb-0 text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl">Learn about our step-by-step <br /> process for delivering results.</p>
      </div>
      <div className="flex justify-center flex-col items-center">
        {/* Mobile Layout */}
        <div className="lg:hidden w-full">
          {list.map((item) => (
            <div key={item.id} className="bg-[#0F161B] border-[#22C954] border-[3px] p-8 rounded mb-4">
              <img className="my-10" src={item.src} alt={item.title} />
              <h3 className="text-xs xs:text-lg sm:text-[22px] font-[700] text-[#E8E00E]">{item.title}</h3>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">{item.para}</p>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block w-full h-screen relative overflow-hidden hide-scrollbar">
          <div
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-full overflow-y-scroll hide-scrollbar scrollbar-hide"
            style={{ scrollSnapType: 'y mandatory' }}
          >
            {list.map((item, index) => (
              <div
                key={item.id}
                className="h-full w-full flex items-center justify-center sticky top-0"
                style={{ scrollSnapAlign: 'start' }}
              >
                <ServiceItem item={item} isActive={index === activeIndex} />
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