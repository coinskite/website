
const list = [
  {
    key: "1",
    title: "Innovative Solutions",
    para: "Impressed with Coinskite's innovative blockchain solutions. They have transformed our business operations",
    src: "/img/home_new/testimonials/1.png",
    name: "Jane Cooper",
    role: "CEO at ABC Corporation"

  },
  {
    key: "2",
    title: "Reliable and Trustworthy",
    para: "Trustworthy blockchain solutions provided. They have boosted our productivity and fostered transparency",
    src: "/img/home_new/testimonials/2.png",
    name: "martin luther",
    role: "CEO at ABC Corporation"

  },
  {
    key: "3",
    title: "Exceptional Service Provider",
    para: "Exceptional blockchain services offered. They have given us a competitive edge in the digital landscape",
    src: "/img/home_new/testimonials/3.png",
    name: "james william",
    role: "CEO at ABC Corporation"

  }
]
function Card({ src, title, para, name, role, }) {
  return (
    <div className='text-center'>
      <div className="p-4 mb-6 bg-[#BFFFD3] rounded-[10px] relative">
        <p className="mb-4 text-lg lg:text-[22px] xl:text-lg font-bold text-[#2B2C3B]">
          {title}
        </p>
        <p className="text-sm md:text-base lg:text-sm text-black">
          {para}
        </p>
        <p className="w-4 h-4 absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-sm rotate-45 bg-[#BFFFD3]"></p>
      </div>

      <div>
        <img
          className='mx-auto w-[56px]'
          src={src}
          alt=''
        />
        <p className="text-lg font-bold text-[#22C954]">
          {name}
        </p>
        <p className="text-sm">
          {role}
        </p>
      </div>
    </div>
  )
}

function Clients() {
  return (
    <div className="pad-main-3">
      <div className="mb-2 md:mb-4 text-center">
        <h2 className="text-sm xs:text-lg sm:text-[28px] lg:text-[32px] xl:text-[34px] font-bold text-[#E8E00E]">
          Our Clients Speak
        </h2>
        <p className="text-[8px] xs:text-xs xl:text-base">
          We have been working with clients around the world
        </p>
      </div>

      <div className='grid lg:grid-cols-3 gap-8 relative'>
        {list.map(l => <Card {...l} />)}

        <div className="absolute w-56 h-32 bottom-0 right-0 blured-bg z-[1]"></div>
        <div className="absolute w-56 h-32 top-0 left-0 blured-bg z-[1]"></div>
      </div>
    </div>
  )
}

export default Clients