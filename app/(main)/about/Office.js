function Office() {
  return (
    <div className="pad-main-3 text-white bg-[#222531]">
      <div className='grid grid-cols-2 items-center gap-4 max-w-7xl mx-auto font-semibold'>
        <div>
          <h2 className='text-[28px] sm:text-[33px] md:text-[38px] lg:text-[45px] xl:text-[50px] text-[#22C954]'>Our Offices</h2>

          <div className="text-xs sm:text-base md:text-xl lg:text-[25px] xl:text-[28px]">
            Although we’re a remote-first <br />
            company, we also have office at
          </div>

          <div className='my-4 text-[17px] sm:text-xl md:text-2xl lg:text-[27px] xl:text-3xl text-[#22C954]'>
            6th Floor, Nizara Bonanza, <br />
            Door No:813, Anna Salai, <br />
            Chennai,India <br />
          </div>

          <button className="px-4 text-[15px] sm:text-xl md:text-[22px] lg:text-[27px] xl:text-3xl text-white bg-[#22C954]">
            Contact Us
          </button>
        </div>

        <img className="max-h-96" src="./img/about/map.png" alt="Map" />
      </div>
    </div>
  )
}

export default Office