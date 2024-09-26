"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const list = [
  {
    id: "1",
    src: "/img/home_new/Our Services/POC Development.png",
    title: "POC Development",
    para: "Proof-of-Concept '(POC)'  development is a crucial for validating your blockchain idea's. Our expert team can assist you in developing robust POC  solutions.",
  },
  {
    id: "2",
    src: "/img/home_new/Our Services/Metaverse development.png",
    title: "Metaverse Development",
    para: "Enter the exciting world of the metaverse with our Metaverse Development services. We help build immersive and interactive experiences in virtual   environments.",
  },
  {
    id: "3",
    src: "/img/home_new/Our Services/NFT Development.png",
    title: "NFT Development",
    para: "Unlock the potential of Non-Fungible Tokens '(NFTs)'  with our NFT Development services. We assist in creating and deploying unique and secure digital assets.",
  },
  {
    id: "4",
    src: "/img/home_new/Our Services/Smart Contract development.png",
    title: "Smart Contract Development",
    para: "Smart contracts automate processes,and eliminate intermediaries. Our team specializes in developing secure and efficient smart contract solutions.",
  },
  {
    id: "5",
    src: "/img/home_new/Our Services/Token Development.png",
    title: "Token Development",
    para: "Tokenize your assets or launch your own cryptocurrency our Token Development services. We ensure compliance, security, and seamless integration of tokens.",
  },
  {
    id: "6",
    src: "/img/home_new/Our Services/Blockchain Integration.png",
    title: "Blockchain Integration",
    para: "Seamlessly integrate with blockchain technology  into your existing systems with our Blockchain Integration services. Enhance transparency, security, and efficiency .",
  },
];

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
        } absolute top-0 left-0 w-full h-full flex items-center justify-center pl-20`} // Added left padding
    >
      <div className="bg-[#0F161B] border-[#22C954] border-[3px] p-4 md:p-8 rounded max-w-2xl">
        <img className="my-10 mx-auto" src={item.src} alt={item.title} />
        <h3 className="font-[500] text-[12px] xs:text-[18px] sm:text-[20px] md:text-[20px] xl:text-[24px] text-[#E8E00E] mb-4">{item.title}</h3>
        <p className="text-white font-[400] text-[8px] xs:text-[10px] sm:text-[12px] xl:text-[14px]">{item.para}</p>
      </div>
    </div>
  );
};


const ProgressIndicator = ({ activeIndex, total }) => {
  return (
    <div className="absolute left-8 top-1/2 transform -translate-y-1/2 delay-700">
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

const OurServices = () => {
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

      <div className="flex items-center justify-center lg:justify-start">
        <h2 className='mb-4 mt-10 text-[8px] xs:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[28px] font-bold uppercase  bg-[#FFEF16]  p-2 text-black'>
          Our Services
        </h2>
      </div>
      <div className="flex items-center justify-center lg:justify-start">
        <p className="mb-4 lg:mb-0 font-[600] text-[8px] xs:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]">
          Your <span className="text-[#22C954]">Start-to-end Web3</span><br />
          journey starts here.
        </p>
      </div>

      <div className="flex justify-center flex-col items-center">
        {/* Mobile Layout */}
        <div className="lg:hidden w-full">
          {list.map((item) => (
            <div key={item.id} className="bg-[#0F161B] border-[#22C954] border-[3px] p-4 md:p-8 rounded mb-4">
              <img className="my-5 md:my-10" src={item.src} alt={item.title} />
              <h3 className="font-[500] text-[12px] xs:text-[18px] sm:text-[20px] md:text-[20px] xl:text-[24px]  text-[#E8E00E]">{item.title}</h3>
              <p className="font-[400] text-[8px] xs:text-[10px] sm:text-[12px] xl:text-[14px]">{item.para}</p>
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

export default OurServices;
