
function Final() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto relative">
        <div className='df justify-between p-4 md:p-6 bg-black text-white  relative'>
          <div className="w-[50%]">
            <p className='mb-2 md:mb-6 text-xs md:text-[22px] lg:text-[30px] xl:text-[40px] font-bold'>
              Unlock the power of <br /> Blockchain
            </p>
            <p className="text-[8px] xs:text-[10px] sm:text-sm font-semibold">Leverage our comprehensive Blockchain-as-a-Service solutions to transform your business. From secure infrastructure and maximized efficiency to enhanced traceability and improved trust, we have the expertise to help you thrive in the digital age</p>
          </div>

          <div>
            <img
              className="h-16 xs:h-20 sm:h-24 md:h-28 mdb:h-32 lg:h-36"
              src='/img/home/curve1.png'
              alt=""
            />
          </div>

          <a
            className='df px-2 py-1 md:py-2 md:px-4 shrink-0 text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm font-semibold rounded-[5px] bg-[#22C954]'
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