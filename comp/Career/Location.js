function Location() {
  return (
    <div className='pad-main-3 text-white bg-[#222531]'>
      <h1 className="sm:mt-4 mb-4 sm:mb-8 md:mb-10 lg:mb-12 text-3xl sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[80px] font-semibold text-[#22C954] text-center">
        Hiring by Location
      </h1>
      <img className="m-auto" src="./img/career/Map.png" alt="location" />

      <div className='df px-4 py-3 lg:px-5 lg:py-4 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto border border-[#22C954] rounded-md'>
        <div className='flex1'>
          <p className="md:mb-1 text-[17px] sm:text-[19px] md:text-[21px] lg:text-[31px] xl:text-[37px] font-bold">Didn't find what you were looking for ?</p>
          <p className="text-[7px] sm:text-[9px] lg:text-[13px] xl:text-[17px] font-semibold">
            If you think you can contribute but your role is not mentioned, please reach out to us.
            <button className="inline-block md:hidden ml-2 sm:ml-3 px-2 py-1 text-[6px] sm:text-[8px] font-semibold text-black bg-[#22C954] rounded">
              Send Resume
            </button>
          </p>
        </div>

        <button className="hidden md:block px-2 py-1 lg:px-3 lg:py-1.5 text-xs lg:text-[15px] xl:text-lg font-semibold text-black bg-[#22C954] rounded">
          Send Resume
        </button>
      </div>
    </div>
  )
}

export default Location