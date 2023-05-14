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
      <div className="pt-4 relative lg:col-span-2">
        <h1 className="text-base xs:text-[22px] sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[50px] font-semibold">
          Revolutionize your business with
          <span className="text-[#22C954]">Coinskite's</span> blockchain solution
        </h1>

        <div className="text-[8px] xs:text-[10px] sm:text-sm md:text-lg  xl:text-xl font-normal">
          Experience the security, transparency, and efficiency of blockchain technology <br />
          with our expert services
        </div>

        <button className="text-[8px] xs:text-[10px] sm:text-sm md:text-base lg:text-lg font-normal bg-primary-900 ">
          Join the revolution
        </button>

        <div className="text-[8px] xs:text-[10px] sm:text-base md:text-lg font-normal">
          trust by startup and large enterprises
        </div>

        <div className="df">
          {list.map(l => (
            <img
              className=""
              src={l.src}
              key={l.key}
            />
          ))}
        </div>

        <img
          className="absolute bottom-0 left-1/2"
          src="./img/home/new/greenstar3.png"
          alt=""
        />
      </div>
      <img
        className="absolute top-2 left-2"
        src="./img/home/new/greenstar1.png"
        alt=""
      />

      <img
        className="absolute top-2 left-36"
        src="./img/home/new/greenstar2.png"
        alt=""
      />

      <img
        className="absolute top-1/2 left-2"
        src="./img/home/new/cube.png"
        alt=""
      />

      <img
        className="absolute top-2 left-1/2"
        src="./img/home/new/cube.png"
        alt=""
      />
    </div>
  )
}

export default Header