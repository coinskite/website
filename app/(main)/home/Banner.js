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
                <button className="bg-[#2AB253] text-white text-[10px] px-3 py-2 rounded">
                  Blockchain Developers welcome 👋
                </button>
              </div>

              <h1 className="text-white text-base xs:text-[22px] sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[50px] font-semibold">
                Disrupting Industries with Blockchain
              </h1>

              <div className="my-2 text-[#E5E5E5] text-[8px] xs:text-[10px] sm:text-sm md:text-lg">
                Empowering Innovation with Cutting-Edge Enterprise Solutions in Blockchain, AI, and
                Emerging Technologies to Lead in the Dynamic Crypto Ecosystem
              </div>

              <button className="bg-[#2AB253] text-white text-lg md:text-[20px] px-6 py-2 rounded">
                Get Started
              </button>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="flex justify-center">

                {/* Blur Background */}
                <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 top-0 left-0 blured-bg  pointer-events-none"></div>

                {/* Green Card */}
                <div className="relative bg-[#22C954] p-4 flex items-end h-[303px] w-[297px]">
                  <div>
                    <h2 className="text-black font-bold text-[8px] xs:text-[10px] sm:text-sm md:text-lg">
                      Leverage Blockchain Technology
                    </h2>
                    <p className="text-zinc-800 text-[8px] xs:text-[10px] sm:text-sm mt-2">
                      Elevate Your Business with Blockchain-as-a-Service Solutions
                    </p>
                  </div>
                </div>

                {/* Laptop Image */}
                <img
                  src="/img/home/laptop.png"
                  alt="Blockchain Interface"
                  className="h-[257px] w-[252px] md:h-[303px] md:w-[297px] absolute 
                         md:top-[-100px] md:left-[200px]
                         bottom-[20px] left-[-10px]"
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