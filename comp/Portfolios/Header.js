
function Header() {
  return (
    <div className="pad-main-3 bg-[#111112]">
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

          <div className="mb-4 md:mb-6 text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg font-medium text-white">
            We empower blockchain startups to establish a strong brand identity, refine their vision, <br /> and deliver exceptional user experiences through our design and strategy expertise
          </div>
          <div className="relative">
            <img className="w-[120px] sm:w-[200px] lg:w-[240px] absolute -left-20 xs:-left-28 md:-left-36 lg:-left-12 xl:-left-32 top-0" src="/img/portfolio/circle.png" alt="" />
          </div>

          <div className="p-4 pr-20 w-fit mx-auto text-xs xs:text-base sm:text-xl md:text-[26px] lg:text-3xl xl:text-[35px] font-medium bg-[#152A39] border border-[#22C954] text-white">
            <ul>
              <li>Design Research</li>
              <li>UI & UX Design</li>
              <li>Dapp Design</li>
              <li>NFT’s Design</li>
              <li>Design System</li>
              <li>Logo & Icon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header