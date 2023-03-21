function Final() {
  return (
    <div className='df py-4 px-12 bg-[#CAFCD9]'>
      <p className=" ts:text-[10px] xs:text-[12px] sm:text-[16px] lg:text-[22px] xl:text-[25px] font-semibold text-black">JOIN OUR NEWSLETTER</p>

      <input
        type="text"
        className=' ts:text-[6px] xs:text-8px] sm:text-[10px] lg:text-[14px] font-semibold p-1 max-w-xs ml-auto bg-[#DCDCDC] text-[#7C7F83]'
        placeholder='Enter your email address'
      />

      <button className=' ts:text-[8px] xs:text-[12px] sm:text-[16px] lg:text-[20px] font-semibold text-white bg-primary-900'>
        Subscribe
      </button>
    </div>
  )
}

export default Final