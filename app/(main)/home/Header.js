const list = [
  {
    key: "1",
    src: "/img/home_new/trust/adobe.png"
  },
  {
    key: "2",
    src: "/img/home_new/trust/gitlab.png"
  },
  {
    key: "3",
    src: "/img/home_new/trust/Google.png"
  },
  {
    key: "4",
    src: "/img/home_new/trust/Hubspot.png"
  },
  {
    key: "5",
    src: "/img/home_new/trust/Doordash.png"
  }
]

function Header() {
  return (
    <div className="pad-main-3 relative text-center">
      <div className="pt-4 relative">
        <h1 className="text-base xs:text-[22px] sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[50px] font-semibold">
          Revolutionize your business with <br />
          <span className="text-[#22C954]">Coinskite's</span> blockchain solution
        </h1>

        <div className="my-2 md:mt-3 md:mb-6 text-[8px] xs:text-[10px] sm:text-sm md:text-lg xl:text-xl">
          Experience the security, transparency, and efficiency of <br />
          blockchain technology with our expert services
        </div>

        <button className="text-[8px] xs:text-[10px] sm:text-sm md:text-base lg:text-lg bg-primary-900 ">
          Join the revolution
        </button>

        <div className="mt-8 mdb:mt-12 mb-2 text-[8px] xs:text-[10px] sm:text-base md:text-lg text-[#E2E2E2]">
          TRUSTED BY STARTED AND LARGE ENTERPRISES
        </div>

        <div className="df justify-center gap-8 xl:gap-12">
          {list.map(l => (
            <img
              className="w-[39px] xs:w-49px] sm:w-[64px] md:w-[80px] lg:w-[101px] xl:w-[133px]"
              src={l.src}
              key={l.key}
            />
          ))}
        </div>
      </div>

      <img
        className="w-4 sm:w-6 md:w-auto absolute top-1/2 left-2 mdb:left-16"
        src="./img/home/new/greenstar1.png"
        alt=""
      />

      <img
        className="hidden lg:block absolute top-2 left-1/2"
        src="./img/home/new/greenstar2.png"
        alt=""
      />

      <img
        className="w-4 sm:w-6 md:w-auto absolute top-[58%] right-6 mdb:right-16"
        src="./img/home/new/greenstar3.png"
        alt=""
      />

      <img
        className="w-4 sm:w-6 md:w-auto absolute top-8 left-4 mdb:left-24"
        src="./img/home/new/cube.png"
        alt=""
      />

      <img
        className="w-4 sm:w-6 md:w-auto absolute top-2 right-4 mdb:right-40"
        src="./img/home/new/cube.png"
        alt=""
      />

      <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 top-0 left-0 blured-bg z-[1] pointer-events-none"></div>
    </div>
  )
}

export default Header