
function Header() {
  return (
    <div className="pad-main-3 bg-[#111112] overflow-hidden">
      <div className="w-fit lg:w-auto xl:max-w-7xl mx-auto">
        <div className="mb-4 sm:mb-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          <img className="w-36 xs:w-48 sm:w-64 md:w-[310px] mx-auto mb-4 lg:mb-0" src="/img/portfolio/header.png" alt="" />

          <div className="relative lg:col-span-2 lg:-order-1">
            <h1 className="text-lg xs:text-[25px] sm:text-3xl md:text-[40px] lg:text-[45px] xl:text-[55px] font-semibold text-[#18E25D]">
              Designing Decentralized <br />
              Applications that Shape <br />
              the Future
            </h1>

            <div className="blured-bg absolute inset-0 max-w-sm opacity-75"></div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 md:mb-6 text-xs xs:text-base sm:text-xl md:text-[25px] lg:text-[32px] xl:text-[40px] font-semibold text-[#18E25D]">
            Pushing the Boundaries of Web3 Product and <br />
            Design Excellence
          </h2>

          <div className="mb-4 md:mb-6 text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-xl font-medium text-white">
            We empower blockchain startups to establish a strong brand identity, refine their vision, <br /> and deliver exceptional user experiences through our design and strategy expertise
          </div>

          <div className="flex items-start relative">
            <img
              className="portfolio-header-img w-[102px] xs:w-[159px] sm:w-[214px] md:w-[240px]"
              src="/img/portfolio/circle.png"
              alt=""
            />
            <ul className="py-6 px-5 sm:py-12 sm:px-10 w-fit text-xs xs:text-base sm:text-xl md:text-[26px] lg:text-3xl xl:text-[30px] font-medium bg-[#152A39] border border-[#22C954] text-[#01F08B] rounded-xl">
              <li className="mb-4 lg:mb-6">Design Research</li>
              <li className="mb-4 lg:mb-6">UI & UX Design</li>
              <li className="mb-4 lg:mb-6">Dapp Design</li>
              <li className="mb-4 lg:mb-6">NFT’s Design</li>
              <li className="mb-4 lg:mb-6">Design System</li>
              <li>Logo & Icon</li>
            </ul>
            <div className="blured-bg w-80 h-60 absolute top-1/2 left-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header