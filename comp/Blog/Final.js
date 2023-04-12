function Final() {
  return (
    <div className='df py-4 px-12 bg-[#CAFCD9]'>
      <p className="text-[10px] xs:text-xs sm:text-base lg:text-[22px] xl:text-[25px] font-semibold text-black">JOIN OUR NEWSLETTER</p>

      <input
        type="text"
        className='text-[6px] xs:text-8px] sm:text-[10px] lg:text-sm font-semibold p-1 max-w-xs ml-auto bg-[#DCDCDC] text-[#7C7F83]'
        placeholder='Enter your email address'
      />

      <button className='text-[8px] xs:text-xs sm:text-base lg:text-xl font-semibold text-white bg-primary-900'>
        Subscribe
      </button>
    </div>
  )
}

export default Final