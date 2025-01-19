import React from 'react';

function Banner() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl min-h-[70vh] bg-black mx-auto relative">
        <div className="pt-12 lg:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <button className="bg-[#2AB253] text-white text-[8px] lg:text-[10px] font-medium px-3 py-2 rounded">
                  Blockchain Developers welcome 👋
                </button>
              </div>

              <h1 className="text-white text-base text-[28px] sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[56px] font-medium">
                Disrupting Industries with Blockchain
              </h1>

              <div className="my-2 text-[#E5E5E5] text-[8px] xs:text-[10px] sm:text-sm md:text-lg lg:text-[19px] font-normal">
                Empowering Innovation with Cutting-Edge Enterprise Solutions in Blockchain, AI, and
                Emerging Technologies to Lead in the Dynamic Crypto Ecosystem
              </div>

              <button className="bg-[#2AB253] text-white text-xs xs:text-sm md:text-lg lg:text-[20px] px-6 py-2 rounded">
                Get Started
              </button>
            </div>

            {/* Right Column */}
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="flex justify-center relative h-full">
                {/* Blur Background */}
                <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 
                    right-0 top-1/2 -translate-y-1/2
                    bg-[#22C954]/30 blur-[100px] rounded-full"></div>

                {/* Green Card */}
                <div className="absolute bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2
                    bg-[#22C954] p-6 
                    h-[250px] w-[280px] md:h-[303px] md:w-[297px]
                    flex items-end md:items-start">
                  <div className='md:mt-auto hidden md:block'>
                    <h2 className="text-black font-bold text-sm md:text-lg lg:text-xl">
                      Leverage Blockchain Technology
                    </h2>
                    <p className="text-zinc-800 text-xs md:text-sm lg:text-base mt-2">
                      Elevate Your Business with Blockchain-as-a-Service Solutions
                    </p>
                  </div>
                </div>

                {/* Laptop Image */}
                <img
                  src="/img/home/laptop.png"
                  alt="Blockchain Interface"
                  className="absolute 
                h-[200px] w-[200px] md:h-[303px] md:w-[297px]
                left-0 bottom-[20px]
                md:left-[180px] md:top-0
                lg:left-[200px] lg:top-[-50px]
                object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;