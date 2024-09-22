function Header() {
  return (
    <div className="grid md:grid-cols-5 gap-4 pad-main-3 text-white bg-[#222531] text-center relative">
      <h4 className="mb-4 md:mb-8 md:col-span-5 text-[8px] xs:text-[10px] sm:text-[10px] md:text-[13px] lg:text-base xl:text-xl font-semibold">
        WELCOME TO <strong className="text-[#22C954] relative">COINSKITE <img className="w-8 absolute -top-4 left-full" src="/img/service/star6.png" alt="Star" /></strong>

      </h4>

      <img className="w-48 mx-auto md:order-1 md:w-auto md:col-span-2" src="/img/service/Computer.png" alt="Computer" />

      <div className="md:col-span-3 md:text-left">
        <h1 className="mb-2 text-[15px] xs:text-xl sm:text-[25px] md:text-[25px] lg:text-[38px] xl:text-[45px] font-bold leading-[1.2]">
          Unlock the Power of Blockchain <br /> for Your &nbsp;
          <strong className="text-[#22C954]">Business</strong>
        </h1>

        <p className="max-w-xs mx-auto md:mx-0 md:max-w-none text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-[17px] xl:text-xl font-medium">
          Our team at Coinskite specializes in providing blockchain-based digital solutions that can help businesses  <br className="md:hidden" /> of all sizes improve their operations and drive growth. we offer a wide range of services that can help you  <br className="md:hidden" /> streamline processes, reduce costs, and gain a competitive edge.
        </p>
      </div>

      <img className="w-8 absolute top-1/2 md:top-4 left-4" src="/img/service/star4.png" alt="Star" />
      <img className="w-8 absolute top-1/2 md:top-8 lg:top-12 xl:top-20 right-0 md:right-4" src="/img/service/star8.png" alt="Star" />
      <img className="hidden md:block w-8 absolute bottom-0 left-1/2 -translate-x-1/2" src="/img/service/star8.png" alt="Star" />
    </div>
  )
}

export default Header