function Header() {
  return (
    <div className="dfc home-header-bg jcc gap-2.5 md:gap-8 pad-main-1-3 h-[40vh] sm:h-[60vh] md:h-[80vh] relative bg-cover">
      <h1 className="text-lg sm:text-[27px] md:text-[35px] lg:text-[50px] font-bold">
        We build solution on the
        <br />
        Blockchain      </h1>
      <p className="text-[7.5px] sm:text-[13px] md:text-lg lg:text-[25px]">
        Building and deploying custom blockchain solutions for high-growth
        <br />
        startups and enterprises.
      </p>
      <p className="df gap-4">
        <button className="w-16 h-[18px] lg:w-44 lg:h-12 text-[7px] lg:text-xl font-semibold text-[#17171F] bg-white rounded-[3px]">
          Services
        </button>
        <button className="w-16 h-[18px] lg:w-44 lg:h-12 text-[7px] lg:text-xl font-semibold text-white bg-[#17171F] rounded-[3px]">
          Contact Us
        </button>
      </p>

      {/* <img
        className="hidden xs:block xs:w-44 sm:w-60 md:w-96 xl:w-auto xs:absolute xs:top-1/2 xs:translate-y-[-45%] sm:-translate-y-1/2 right-4 lg:right-8"
        src="./img/home/HeaderBox.png"
        alt="box"
      /> */}
    </div>
  )
}

export default Header