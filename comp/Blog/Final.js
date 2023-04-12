function Final() {
  return (
    <div className='py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-12 bg-[#CAFCD9]'>
      <div className="df gap-4 justify-center max-w-7xl mx-auto">
        <p className="shrink-0 text-[10px] xs:text-xs sm:text-base lg:text-[22px] xl:text-[25px] font-semibold text-black">JOIN OUR NEWSLETTER</p>

        <input
          type="text"
          className='max-w-xs text-[6px] xs:text-8px] sm:text-[10px] lg:text-sm font-semibold bg-[#DCDCDC] text-[#7C7F83]'
          placeholder='Enter your email address'
        />

        <button className='text-[8px] xs:text-xs sm:text-base lg:text-xl font-semibold text-white bg-primary-900'>
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Final