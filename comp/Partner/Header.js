
function Header() {
  return (
    <div className="pad-main-3 relative">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-sm xs:text-lg sm:text-[22px] md:text-[28px] lg:text-[38px] xl:text-[50px] font-bold">
            Join forces with Coinskite <br />
            and propel your business forward
          </h1>

          <p className="my-2 md:my-4 text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-lg xl:text-2xl font-medium">
            Looking to grow and succeed in today's competitive marketplace? Join <br />
            forces with Coinskite. Our team of experts and innovative solutions can <br />
            help you propel your business forward and reach new heights. Together, <br />
            we can make a powerful impact and achieve your goals
          </p>

          <button className="text-[10px] xs:text-xs sm:text-base md:text-xl lg:text-[25px] xl:text-[35px] font-semibold bg-primary-900">
            Partner with us
          </button>
        </div>

        <img
          className="w-32 sm:w-48 md:w-60 lg:w-80 xl:w-[450px] absolute top-1/2 -translate-y-1/2 right-0"
          src="./img/partner/header.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Header