function Header() {
  return (
    <div className='dfc justify-center items-center theme-sec pad-main-3 h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[65vh] text-[#223764] text-center'>
      <h5 className="text-[12px] xs:text-[14px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-bold">Solutions</h5>
      <h1 className="text-[16px] xs:text-[20px] sm:text-[26px] md:text-[35px] lg:text-[35px] xl:text-[45] font-bold">Blockchain Solutions By Coinskite</h1>
      <p className="text-[8px] xs:text-[10px] sm:text-[12px] md:text-[16px] lg:text-[16px] xl:text-[20px] font-medium">
        Secure, Transparent and Efficient ways to streamline operations, reduce costs, <br />
        and gain a competitive edge - Unlocking the full potential of your business <br />
        with our cutting-edge blockchain technology
      </p>
      <button className="bg-[#FFFFFF] text-[10px] rounded-sm xs:text-[12px] xs:rounded-[5px] sm:text-[14px] sm:rounded-[5px] md:text-[18px] md:rounded-[5px] lg:text-[18px] lg:rounded-[5px] xl:text-[20px] xl:rounded-[5px] font-semibold">Connect with a Pro</button>
      {/*<img src="./img/solution/header illustration.png" alt="illustration" />*/}
    </div>
  )
}

export default Header