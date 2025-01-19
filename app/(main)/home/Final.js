
function Final() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto relative">
        <div className='lg:flex lg:items-center gap-4 justify-between p-4 md:p-6 bg-black text-white  relative'>
          <div className="lg:w-[60%]">
            <p className='mb-2 md:mb-6 text-[24px] sm:text-3xl lg:text-4xl xl:text-[63px] font-bold'>
              Unlock the power of <br className="hidden lg:block" /> Blockchain
            </p>
            <p className="text-sm">Leverage our comprehensive Blockchain-as-a-Service solutions to transform your business. From secure infrastructure and maximized efficiency to enhanced traceability and improved trust, we have the expertise to help you thrive in the digital age</p>
          </div>

          <img
            className="hidden lg:block h-36"
            src='/img/home/curve1.png'
            alt=""
          />

          <a
            className='df w-fit mt-6 px-2 py-1 md:py-2 md:px-4 shrink-0 text-lg md:text-[26px] lg:text-[28px] lg:font-semibold rounded-[5px] bg-[#22C954]'
            href="/career"
          >
            Carrer with us 👋
          </a>
        </div>
      </div>
    </div>
  );
}

export default Final;