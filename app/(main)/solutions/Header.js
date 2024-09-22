function Header() {
  return (
    <div className='dfc justify-center items-center theme-sec pad-main-3 text-[#223764] text-center'>
      <h5 className="mt-4 text-xs xs:text-sm sm:text-lg md:text-xl font-bold">Solutions</h5>
      <h1 className="xs:text-xl sm:text-[26px] md:text-[35px] lg:text-[35px] xl:text-[45] font-bold">Blockchain Solutions By Coinskite</h1>
      <p className="text-[8px] xs:text-[10px] sm:text-xs md:text-base xl:text-xl font-medium">
        Secure, Transparent and Efficient ways to streamline operations, reduce costs, <br />
        and gain a competitive edge - Unlocking the full potential of your business <br />
        with our cutting-edge blockchain technology
      </p>
      <button className="bg-white text-[10px] xs:text-xs sm:text-sm md:text-lg xl:text-xl rounded-sm xs:rounded-[5px] font-semibold">Connect with a Pro</button>
      <img className="-mb-20 -mt-12 sm:-mb-28 xs:max-w-sm" src="./img/solution/header.png" alt="illustration" />
    </div>
  )
}

export default Header