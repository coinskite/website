"use client";

import { useRef } from 'react';
import ProgressBar from './progress-bar';

const list = [
  {
    id: "1",
    src: "/img/home_new/our_services/POC_Development.png",
    title: "POC Development",
    para: "Proof-of-Concept '(POC)' development is a crucial for validating your blockchain idea's. Our expert team can assist you in developing robust POC  solutions.",
  },
  {
    id: "2",
    src: "/img/home_new/our_services/Metaverse_development.png",
    title: "Metaverse Development",
    para: "Enter the exciting world of the metaverse with our Metaverse Development services. We help build immersive and interactive experiences in virtual   environments.",
  },
  {
    id: "3",
    src: "/img/home_new/our_services/NFT_Development.png",
    title: "NFT Development",
    para: "Unlock the potential of Non-Fungible Tokens '(NFTs)'  with our NFT Development services. We assist in creating and deploying unique and secure digital assets.",
  },
  {
    id: "4",
    src: "/img/home_new/our_services/Smart_Contract_development.png",
    title: "Smart Contract Development",
    para: "Smart contracts automate processes,and eliminate intermediaries. Our team specializes in developing secure and efficient smart contract solutions.",
  },
  {
    id: "5",
    src: "/img/home_new/our_services/Token_Development.png",
    title: "Token Development",
    para: "Tokenize your assets or launch your own cryptocurrency our Token Development services. We ensure compliance, security, and seamless integration of tokens.",
  },
  {
    id: "6",
    src: "/img/home_new/our_services/Blockchain_Integration.png",
    title: "Blockchain Integration",
    para: "Seamlessly integrate with blockchain technology  into your existing systems with our Blockchain Integration services. Enhance transparency, security, and efficiency .",
  },
]

function OurServices() {
  const ref = useRef(null)

  return (
    <div className="pad-main-3">
      <div className='grid md:grid-cols-2 gap-4 relative md:h-[600vh]'>
        <div>
          <div className="md:h-[80vh] mb-4 lg:mb-0 font-semibold text-[8px] xs:text-[10px] sm:text-sm md:text-lg lg:text-2xl xl:text-[30px] sticky top-32">
            <h2 className='w-fit mb-4 mt-10 text-[8px] xs:text-xs sm:text-base md:text-base lg:text-lg xl:text-[28px] font-bold uppercase bg-[#FFEF16]  p-2 text-black'>
              Our Services
            </h2>
            <div className='mb-4'>
              Your <span className="text-[#22C954]">Start-to-end Web3</span><br />
              journey starts here.
            </div>

            <ProgressBar parentRef={ref} childSelector="scroll-1" num={6} />
          </div>
        </div>

        <div ref={ref}>
          {list.map((item, i) => (
            <div
              key={item.id}
              className="scroll-1 h-[80vh] sticky top-52"
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
      </div>
    </div>
  )
}

export default OurServices
