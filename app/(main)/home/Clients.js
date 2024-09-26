
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
    <div>
      <div className="bg-[#0F161B] border-[3px] h-[220px] border-[#22C954] rounded p-4">

        <div className="flex items-center justify-start gap-4 mb-4">
          <img
            className='w-[56px]'
            src={src}
            alt=''
          />
          <div className="flex flex-col items-start">
            <p className="my-1.5 font-bold text-[14px] xs:text-[16px] sm:text-[18px] text-[#22C954]">
              {name}
            </p>
            <p className="font-normal text-[10px] xs:text-[12px] sm:text-[14px] md:text-[14px] lg:text-[12px] xl:text-[14px]">
              {role}
            </p>
          </div>
        </div>

        <div className="text-left">
          <p className="text-white font-normal text-[8px] xs:text-[12px] sm:text-[14px]">
            {para}
          </p>
        </div>

      </div>
    </div>
  )
}

function Clients() {
  return (
    <div className="pad-main-3">
      {/* <div className="mb-4 sm:mb-8"> */}

      <div className="flex items-center justify-center lg:justify-start">
        <h2 className='mb-4 mt-10  text-[8px] xs:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[28px] font-bold  uppercase  bg-[#FFEF16]  p-2 text-black'>
          Our Clients Speak
        </h2>
      </div>
      <div className="flex items-center justify-center lg:justify-start">
        <p className="mb-4 mdb:mb-8 font-normal text-[8px] xs:text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]">We have been working with clients around the world</p>
      </div>


      {/* <h2 className="mb-2 p-2 bg-[#E8E00E] text-sm xs:text-lg sm:text-[28px] lg:text-[32px] xl:text-[34px] font-bold uppercase text-black w-fit">
          Our Clients Speak
        </h2>
        <p className="text-[8px] xs:text-xs xl:text-base">
          We have been working with clients around the world
        </p>
      </div> */}

      <div className='grid lg:grid-cols-3 justify-center gap-8 relative'>
        {list.map(l => <Card key={l.id} {...l} />)}

        <div className="absolute w-56 h-32 bottom-0 right-0 blured-bg z-[1]"></div>
        <div className="absolute w-56 h-32 top-0 left-0 blured-bg z-[1]"></div>
      </div>
    </div>
  )
}

export default Clients