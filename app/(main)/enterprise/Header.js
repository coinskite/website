
function Header() {
  return (
    <div className="pad-main-3 text-center bg-[#CAFCD9] text-[#223764]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 lg:text-left">
          <h1 className="text-[15px] xs:text-xl sm:text-[25px] md:text-3xl xl:text-[40px] font-bold ">
            Unlock the Endless Possibilities <br /> of Blockchain for Your Startup
          </h1>
          <p className="my-6 text-[8px] xs:text-[10px] sm:text-xs md:text-sm xl:text-lg font-semibold">
            Transform your startup with the power of blockchain: streamline <br /> operations, build trust, and access new opportunities with <br /> Coinskite's expert guidance and support
          </p>
          <button className="px-8 text-[8px] xs:text-[10px] sm:text-xs md:text-sm xl:text-[25px] text-[#0F0450] bg-white rounded">
            Connect with a Pro
          </button>
        </div>

        <img className="mx-auto translate-y-4 sm:translate-y-8 md:translate-y-12" src="./img/enterprise/header.png" alt="" />
      </div>
    </div>
  )
}

export default Header