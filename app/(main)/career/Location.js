function Location() {
  return (
    <>
      <div className="pad-main-3 text-white bg-[#222531]">
        <h1 className="sm:mt-4 mb-4 text-[15px] xs:text-xl sm:text-3xl lg:text-[40px] font-bold text-[#22C954] text-center">
          Hiring by Location
        </h1>
        <div className="mb-4 sm:mb-8 md:mb-10 lg:mb-12 text-[6px] xs:text-[7.5px] sm:text-[10px] md:text-xs lg:text-[13px] xl:text-xl font-medium text-center">
          Benefits may vary by country. Benefits listed above currently apply to our India based <br />
          employees. For non-India staff, equivalent benefits can be discussed at the time of interview.
        </div>

        <img className="m-auto" src="./img/career/Map.png" alt="location" />
      </div>

      <div className='pad-main-3 df justify-center sm:gap-8 bg-primary-900'>
        <div className='text-[11px] xs:text-[15px] sm:text-xl md:text-[25px] lg:text-[32px] xl:text-[40px] font-bold text-white uppercase'>
          Didn't find what you were looking for?
        </div>

        <button className="shrink-0 px-2 py-1 md:px-4 md:py-2 text-[6px] xs:text-[8px] sm:text-[13px] md:text-[15px] lg:text-xl xl:text-[28px] font-medium text-black bg-white rounded-sm sm:rounded">
          Send Resume
        </button>
      </div>
    </>
  )
}

export default Location