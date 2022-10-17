function Header() {
  return (
    <div className="grid md:grid-cols-5 gap-4 pad-main-3 text-white bg-[#222531] text-center relative">
      <h4 className="mb-4 md:mb-8 md:col-span-5 text-[8px] sm:text-[10px] md:text-[13px] lg:text-base xl:text-xl font-semibold">
        WELCOME TO <strong className="text-[#22C954] relative">COINSKITE <img className="w-8 absolute -top-4 left-full" src="./img/service/star6.png" alt="Star" /></strong>

      </h4>

      <img className="w-48 mx-auto md:order-1 md:w-auto md:col-span-2" src="./img/service/Computer.png" alt="Computer" />

      <div className="md:col-span-3 md:text-left">
        <h1 className="mb-2 text-xl sm:text-[28px] md:text-[38px] lg:text-[50px] xl:text-[60px] font-bold leading-[1.2]">
          Digital services to solve  <br />
          <strong className="text-[#22C954]">business problems</strong>
        </h1>

        <p className="max-w-xs mx-auto md:mx-0 md:max-w-none text-[8px] sm:text-[10px] md:text-[13px] lg:text-[17px] xl:text-xl font-medium">
          At Coinskite, we enjoy understanding, designing and building <br className="hidden md:block" /> software products. We accomplish that by listening to <br className="hidden md:block" /> our customers, understanding how they work.
        </p>
      </div>

      <img className="w-8 absolute top-1/2 md:top-4 left-4" src="./img/service/star4.png" alt="Star" />
      <img className="w-8 absolute top-1/2 md:top-8 lg:top-12 xl:top-20 right-0 md:right-4" src="./img/service/star8.png" alt="Star" />
      <img className="hidden md:block w-8 absolute bottom-0 left-1/2 -translate-x-1/2" src="./img/service/star8.png" alt="Star" />
    </div>
  )
}

export default Header