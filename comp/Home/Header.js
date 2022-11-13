function Header() {
  return (
    <div className="pad-main-1-3 relative bg-cover bg-primary-900">
      <div className="dfc jcc gap-2.5 md:gap-8 h-[40vh] sm:h-[60vh] md:h-[80vh] max-w-7xl mx-auto">
        <h1 className="text-lg sm:text-[27px] md:text-[35px] lg:text-[50px] font-bold z-[1]">
          We build solution on the
          <br />
          Blockchain
        </h1>
        <p className="text-[7.5px] sm:text-[13px] md:text-lg lg:text-[25px] z-[1]">
          Building and deploying custom blockchain solutions for high-growth
          <br />
          startups and enterprises.
        </p>
        <p className="df gap-4 z-[1]">
          <button className="w-16 h-[18px] lg:w-44 lg:h-12 text-[7px] lg:text-xl font-semibold text-[#17171F] bg-white rounded-[3px]">
            Services
          </button>
          <button className="w-16 h-[18px] lg:w-44 lg:h-12 text-[7px] lg:text-xl font-semibold text-white bg-[#17171F] rounded-[3px]">
            Contact Us
          </button>
        </p>

        <img
          className="absolute top-1/4 right-1/4"
          src="./img/home/header/1.png"
          alt=""
        />
        <img
          className="absolute top-1/2 right-[10%]"
          src="./img/home/header/1.png"
          alt=""
        />
        <img
          className="absolute top-3/4 right-1/4"
          src="./img/home/header/1.png"
          alt=""
        />

        <img
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-40"
          src="./img/home/header/Left middle.png"
          alt=""
        />
        <img
          className="hidden xl:block absolute top-0 right-0 w-40"
          src="./img/home/header/Right TOP.png"
          alt=""
        />
        <img
          className="hidden xl:block absolute -bottom-20 right-0 w-44"
          src="./img/home/header/Right Bottom.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Header