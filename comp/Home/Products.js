const list = [
  {
    key: "1",
    src: "./img/home/new/expert/consulting.png",
    miniSrc: "./img/home/new/expert/img1.png",
    title: "CONSULTING",
    para: "Unlock the full potential of blockchain technology for your business with our expert team's guidance and customized strategy",
  },
  {
    key: "2",
    src: "./img/home/new/expert/development.png",
    miniSrc: "./img/home/new/expert/img2.png",
    title: "DEVELOPMENT",
    para: "We design and build custom blockchain solutions, such as decentralized applications (DApps) or smart contracts, to meet the specific needs of each client.",
  },
  {
    key: "3",
    src: "./img/home/new/expert/Integration.png",
    miniSrc: "./img/home/new/expert/img3.png",
    title: "INTEGARTION",
    para: "We assist businesses in integrating blockchain technology into their existing systems and processes, ensuring a smooth and seamless transition",
  },
  {
    key: "4",
    src: "./img/home/new/expert/Maintenance.png",
    miniSrc: "./img/home/new/expert/img4.png",
    title: "MAINTENANCE",
    para: "We provide ongoing support and maintenance for clients' blockchain systems, including trouble shooting and issue resolution as needed",
  },
]

function Card({ src, title, para, miniSrc }) {
  return (
    <div className="df lg:flex-col lg:items-start w-[95%] lg:w-full mx-auto px-4 py-2 xs:py-4 lg:pt-6 lg:pb-10 gap-4 lg:gap-2 bg-[#363B41] border-t border-primary-900 rounded-[5px] relative overflow-hidden isolate">
      <div className="h-11 absolute top-0 inset-x-0 bg-primary-900 -z-[1] hidden lg:block"></div>

      <div className="w-16 xs:w-[84px] sm:w-32 md:w-36 lg:w-auto">
        <img className="w-11 xl:w-14 hidden lg:block" src={src} alt="" />
        <img className="w-5 xs:w-7 sm:w-10 md:w-11 lg:hidden" src={miniSrc} alt="" />
        <p className="mt-1 text-[8px] xs:text-xs sm:text-base md:text-lg lg:text-lg xl:text-[22px] font-bold text-primary-900">
          {title}
        </p>
      </div>

      <div className="flex-1 text-[6px] xs:text-[10px] sm:text-xs md:text-[15px] lg:text-[8px] xl:text-[10px] col-span-2 text-white">
        {para}
      </div>
    </div>
  )
}

function Products() {
  return (
    <div className='pad-main-1-3 overflow-hidden'>
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-2 text-[11px] xs:text-sm sm:text-lg md:text-[22px] lg:text-3xl xl:text-[38px] font-semibold text-primary-900">
          Transform your business with Expert Blockchain Solutions
        </h2>
        <div className="text-[7px] xs:text-[9px] sm:text-[13px] md:text-[15px] lg:text-xl xl:text-[25px] mb-4">
          we offer a range of expert blockchain services to help startups and enterprises <br />
          leverage the power of this transformative technology.
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:items-center">
          <div className="grid gap-2 lg:grid-cols-2 lg:gap-6">
            {list.map(l => <Card {...l} />)}
          </div>

          <img
            className="hidden lg:block lg:translate-x-40 xl:translate-x-52 2xl:translate-x-0"
            src="./img/home/new/expert/expert.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Products