
function Header() {
  return (
    <div className="pad-main-3 bg-[#111112] overflow-hidden">
      <div className="w-fit lg:w-auto xl:max-w-7xl mx-auto lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
        <div className="mb-4 lg:mb-0 lg:col-span-2 relative">
          <h1 className="text-[48px] font-semibold text-[#18E25D]">Expert Blockchain & Digital Currency Consulting</h1>

          <p className="my-4 text-2xl font-semibold text-[#18E25D]">
            Unlock the potential of blockchain technology <br /> and digital currencies for your business
          </p>

          <button className="text-lg font-semibold text-[#22C954] bg-[#152A39] border border-[#22C954]">
            Request a Free Consultation
          </button>

          <div className="blured-bg absolute inset-0 max-w-sm opacity-75"></div>
        </div>

        <img
          src="/img/consulting/header.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Header