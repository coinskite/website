
function Banner() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl lg:h-[60vh] lg:mt-20 grid lg:grid-cols-2 gap-12 items-center bg-black mx-auto relative">
        <div className="space-y-4">
          <button className="bg-[#2AB253] text-white text-[8px] lg:text-[10px] font-medium px-3 py-2 rounded">
            Blockchain Developers welcome 👋
          </button>

          <h1 className="text-white text-[28px] sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[56px] font-medium">
            Disrupting Industries with Blockchain
          </h1>

          <div className="my-2 text-[#A9A9A9] text-[8px] xs:text-[10px] sm:text-sm md:text-lg lg:text-[19px] font-normal">
            Empowering Innovation with Cutting-Edge Enterprise Solutions in Blockchain, AI, and
            Emerging Technologies to Lead in the Dynamic Crypto Ecosystem
          </div>

          <button className="bg-[#2AB253] text-white text-xs xs:text-sm md:text-lg lg:text-[20px] px-6 py-2 rounded">
            Get Started
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-1 lg:grid-rows-1 lg:justify-items-center">
          <div className='py-6 lg:py-0 relative isolate lg:col-start-1 lg:row-start-1 lg:-translate-y-1/2 lg:translate-x-16'>
            <img
              src="/img/home/laptop.png"
              alt="Blockchain Interface"
              className="size-[200px] sm:size-[250px] md:size-[280px] lg:size-[300px] mx-auto lg:mx-0"
            />

            <div className='lg:hidden absolute inset-y-0 left-1/2 right-0 bg-[#22C954] z-[-1]'></div>
          </div>

          <div className='hidden lg:flex lg:flex-col lg:justify-end p-5 bg-[#22C954] lg:col-start-1 lg:row-start-1'>
            <h2 className="text-black font-bold text-sm md:text-lg lg:text-xl">
              Leverage Blockchain Technology
            </h2>
            <p className="text-zinc-800 text-xs md:text-sm lg:text-base mt-2">
              Elevate Your Business with Blockchain- <br /> as-a-Service Solutions
            </p>
          </div>
        </div>

        <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 right-0 top-1/2 -translate-y-1/2 bg-[#22C954]/30 blur-[100px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Banner;