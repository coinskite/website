function Final() {
  return (
    <div className='py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-12'>
      <div className=" w-full md:w-[70%] lg:max-w-3xl px-6 md:px-14 py-6 mx-auto text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-medium rounded-xl bg-[#1F232D]">
        <div className="mb-2">
          <p className="mb-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-3xl">
            Join our newsletter
          </p>

          <p className="">
            Get weekly access to our best deals,tips and tricks
          </p>
        </div>

        <div className="df gap-4 mb-1">
          <input
            type="text"
            className=' bg-inherit border border-primary-900'
            placeholder='ganescoins@gmail.com'
          />

          <button className='px-2 md:py-2 md:px-3 font-semibold text-[#13111B] bg-primary-900 rounded'>
            JOIN
          </button>
        </div>

        <div className="  text-[#C8C8C8]">
          No spam, we hate it more than you do.
        </div>
      </div>
    </div>
  )
}

export default Final