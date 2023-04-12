function Header() {
  return (
    <div className='pad-main-3'>
      <div className="grid md:flex gap-4 lg:gap-6 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-7xl mx-auto">
        <div className="df justify-center w-[260px] h-[150px] lg:w-80 lg:h-48 xl:w-[420px] xl:h-[250px] bg-primary-900 rounded-md">
          <img
            className="w-24 lg:w-28 xl:w-36"
            src="./img/blog/header.png"
            alt=""
          />
        </div>

        <div className="relative lg:mt-4">
          <button className="text-xs font-semibold text-white bg-primary-900 rounded-[5px]">
            NEW
          </button>

          <p className="my-2 lg:my-4 text-sm xs:text-base sm:text-lg lg:text-[22px] xl:text-[25px] font-semibold">
            Map2Earn to help merge physical and <br />
            virtual worlds
          </p>

          <p className="text-[8px] xs:text-[10px] md:text-xs lg:text-sm xl:text-[15px] font-medium">
            Map2Earn is a revolutionary Metaverse-oriented economic model that <br />
            enables users to become mappers while earning tokens
          </p>

          <p className="df my-2 lg:my-3">
            <span className="text-[8px] xs:text-[10px] lg:text-xs xl:text-[15px] font-semibold">
              Rubesh, Researcher @coinskite
            </span>

            <span className="lg:absolute lg:top-1 lg:left-20 text-[6px] lg:text-xs xl:text-[15px] font-semibold">
              Jan 21,2023
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header