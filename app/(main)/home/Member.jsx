const list = [
  {
    id: "1",
    para: <>Impressed with Coinskite's <br /> innovative blockchain solutions. They <br /> have transformed our business <br /> operations</>,
    src: "/img/home_new/testimonials/1.png",
    role: "Founder & CEO"

  },
  {
    id: "2",
    para: <>Trustworthy blockchain solutions <br /> provided. They have boosted our <br /> productivity and fostered <br /> transparency</>,
    src: "/img/home_new/testimonials/2.png",
    role: "Co-Founder & CTO"

  },
  {
    id: "3",
    para: <>Exceptional blockchain services <br /> offered. They have given us a <br /> competitive edge in the digital <br /> landscape</>,
    src: "/img/home_new/testimonials/3.png",
    role: "COO"

  }
]

function Card({ src, para, role, }) {
  return (
    <div className="bg-[#1F232D] rounded p-4">
      <div className="flex flex-col items-center justify-start gap-4 mb-4">
        <button className="font-normal text-[10px] xs:text-xs sm:text-sm md:text-sm lg:text-xs xl:text-sm bg-[#22C954] p-1 rounded-[5px]">
          {role}
        </button>
        <img
          className='w-[60px] md:w-[100px]'
          src={src}
          alt=''
        />
        <div className="text-left w-fit">
          <p className="text-white font-normal text-[8px] xs:text-xs sm:text-sm">
            {para}
          </p>
        </div>
      </div>
    </div>
  )
}

function Member() {
  return (
    <div className="pad-main-3">
      <div className="max-w-6xl mx-auto relative">
        <div className='grid lg:grid-cols-3 justify-center gap-8 relative'>
          {list.map(l => <Card key={l.id} {...l} />)}
        </div>
      </div>

    </div>
  )
}

export default Member