function Header() {
  return (
    <div className="pad-main-3 grid lg:flex gap-4 relative">
      <div className="dfc pt-4 relative">
        <h1 className="text-sm xs:text-lg sm:text-2xl md:text-3xl lg:text-[35px] xl:text-[50px] font-semibold">
          Revolutionize your business with
          Coinskite's blockchain solution
        </h1>

        <p className="text-[6px] xs:text-[8px] sm:text-xs md:text-sm lg:text-[15px] xl:text-xl font-semibold">
          Experience the security, transparency, and efficiency of blockchain technology
          with our expert services
        </p>

        <button className="text-[8px] xs:text-[10px] sm:text-sm md:text-lg lg:text-lg xl:text-[25px] font-semibold bg-primary-900">
          Join the revolution
        </button>

        <img
          className="absolute bottom-0 left-1/2"
          src="./img/home/new/greenstar3.png"
          alt=""
        />
      </div>

      <img
        className="z-[1] mx-auto"
        src="./img/home/new/header.png"
        alt=""
      />

      <img
        className="absolute bottom-0 inset-x-0"
        src="./img/home/new/wave.png"
        alt=""
      />

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