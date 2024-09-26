
function Final() {
  return (
    <div className="py-4 px-10">
      <div className='p-4 md:p-6  bg-gradient-to-r from-[#BFFFD3]  to-[#40EA75] rounded-[10px] relative flex justify-between items-center'>

        <div>
          <p className='mb-2 md:mb-6 text-[12px] md:text-[22px] lg:text-[30px] xl:text-[40px]  font-bold text-[#18191F]'>
            Shape Your Future  <br />
            With Us
          </p>
          <p className="text-[8px] xs:text-[10px] sm:text-[14px] md:text-[20px] lg:text-[24px] text-[#18191F] font-[600]">Its a blockchain thing</p>
        </div>

        <div>
          <img
            className="h-20 xs:h-24 sm:h-28 md:h-32 mdb:h-36 lg:h-44"
            src='/img/home_new/final/curve.png'
            alt=""
          />
        </div>

        <button className='shrink-0 text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm font-semibold df py-1 md:py-2 rounded-md bg-black'>
          Carrer with us 👋
        </button>

      </div>
    </div>
  )
}

export default Final