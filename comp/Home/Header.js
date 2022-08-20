function Header() {
  return (
    <div className="dfc home-header-bg jcc gap-4 md:gap-8 pad-main-1-3 h-[40vh] sm:h-[60vh] md:h-[80vh] relative">
      <h1 className="text-xl sm:text-[27px] md:text-[35px] lg:text-[50px] leading-6 sm:leading-8 md:leading-10 lg:leading-[60px] font-semibold">
        Blockchain <br />
        Development Company
      </h1>
      <p className="text-[9px] sm:text-[13px] md:text-lg lg:text-[25px]">
        Building and deploying custom blockchain solutions for <br />
        high-growth startups and enterprises.
      </p>
      <p className="df gap-4">
        <button className="w-20 h-6 lg:w-44 lg:h-12 text-[10px] lg:text-2xl font-semibold text-[#17171F] bg-white rounded-[5px]">
          Services
        </button>
        <button className="w-20 h-6 lg:w-44 lg:h-12 text-[10px] lg:text-2xl font-semibold text-[#17171F] bg-primary-900 rounded-[5px]">
          Contact Us
        </button>
      </p>

      <img
        className="hidden xs:block xs:w-60 sm:w-72 md:w-96 xl:w-auto absolute bottom-8 xs:bottom-0 right-4 lg:right-8"
        src="./img/home/HeaderBox.png"
        alt="box"
      />
    </div>
  )
}

export default Header