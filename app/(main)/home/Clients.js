
const list = [
  {
    id: "1",
    title: "Innovative Solutions",
    para: <>Impressed with Coinskite's <br /> innovative blockchain solutions. They <br /> have transformed our business <br /> operations</>,
    src: "/img/home_new/testimonials/1.png",
    name: "Jane Cooper",
    role: "CEO at ABC Corporation"

  },
  {
    id: "2",
    title: "Reliable and Trustworthy",
    para: <>Trustworthy blockchain solutions <br /> provided. They have boosted our <br /> productivity and fostered <br /> transparency</>,
    src: "/img/home_new/testimonials/2.png",
    name: "martin luther",
    role: "CEO at ABC Corporation"

  },
  {
    id: "3",
    title: "Exceptional Service Provider",
    para: <>Exceptional blockchain services <br /> offered. They have given us a <br /> competitive edge in the digital <br /> landscape</>,
    src: "/img/home_new/testimonials/3.png",
    name: "james william",
    role: "CEO at ABC Corporation"

  }
]

function Card({ src, title, para, name, role, }) {
  return (
    <div className="bg-[#0F161B] border-[3px] h-[220px] border-[#22C954] rounded p-4">
      <div className="flex items-center justify-start gap-4 mb-4">
        <img
          className='w-[56px]'
          src={src}
          alt=''
        />
        <div className="flex flex-col items-start">
          <p className="my-1.5 font-bold text-sm xs:text-base sm:text-lg text-[#22C954]">
            {name}
          </p>
          <p className="font-normal text-[10px] xs:text-xs sm:text-sm md:text-sm lg:text-xs xl:text-sm">
            {role}
          </p>
        </div>
      </div>
      <div className="text-left">
        <p className="text-white font-normal text-[8px] xs:text-xs sm:text-sm">
          {para}
        </p>
      </div>
    </div>
  )
}

function Clients() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-center lg:justify-start">
          <h2 className='mb-4 mt-10  text-[8px] xs:text-xs sm:text-base md:text-base lg:text-lg xl:text-[28px] font-bold  uppercase  bg-[#FFEF16]  p-2 text-black'>
            Our Clients Speak
          </h2>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <p className="mb-4 mdb:mb-8 font-normal text-[8px] xs:text-[10px] sm:text-sm md:text-base lg:text-xl xl:text-2xl">We have been working with clients around the world</p>
        </div>

        <div className='grid lg:grid-cols-3 justify-center gap-8 relative'>
          {list.map(l => <Card key={l.id} {...l} />)}

          {/* <div className="absolute w-56 h-32 bottom-0 right-0 blured-bg z-[1]"></div> */}
          {/* <div className="absolute  right-0 w-20 h-20 sm:w-40 sm:h-40 lg:w-60 lg:h-60 bottom-5  blured-bg z-[1] opacity-40 pointer-events-none"></div> */}
          {/* <div className="absolute w-56 h-32 top-0 left-0 blured-bg z-[1]"></div> */}
        </div>
      </div>

    </div>
  )
}

export default Clients