
function Final() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto relative">
        <div className='df justify-between p-4 md:p-6 bg-gradient-to-r from-[#BFFFD3] to-[#40EA75] rounded-[10px] relative'>
          <div>
            <p className='mb-2 md:mb-6 text-xs md:text-[22px] lg:text-[30px] xl:text-[40px] font-bold text-[#18191F]'>
              Shape Your Future  <br /> With Us
            </p>
            <p className="text-[8px] xs:text-[10px] sm:text-sm md:text-xl lg:text-2xl text-[#18191F] font-semibold">Its a blockchain thing</p>
          </div>

          <div>
            <img
              className="h-16 xs:h-20 sm:h-24 md:h-28 mdb:h-32 lg:h-36"
              src='/img/home_new/final/curve.png'
              alt=""
            />
          </div>

          <a
            className='df px-2 py-1 md:py-2 md:px-4 shrink-0 text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm font-semibold rounded-[5px] md:rounded-md bg-black'
            href="/career"
          >
            Carrer with us 👋
          </a>
        </div>
      </div>
    </div>
  )
}

export default Final