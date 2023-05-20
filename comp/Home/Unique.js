
const list = [
  {
    key: "1",
    src: "/img/home_new/methodology/1.png",
    title: "Ideate",
    para: <>Turn your idea from <br /> concept to MVP</>
  },
  {
    key: "2",
    src: "/img/home_new/methodology/2.png",
    title: "Design",
    para: <>Sketch out the product to <br /> align the user needs</>
  },
  {
    key: "3",
    src: "/img/home_new/methodology/3.png",
    title: "Develop",
    para: <>Convert the designs into a <br /> live application</>
  },
  {
    key: "4",
    src: "/img/home_new/methodology/4.png",
    title: "Deploy",
    para: <>Launching the application to <br /> the market</>
  },
]

function Card({ src, title, para }) {
  return (
    <div className='text-center'>
      <img
        className='mx-auto w-[70px] sm:w-[80px] md:text-[95px] lg:w-[55px] xl:w-[80px]'
        src={src}
        alt=''
      />
      <p className="my-2 text-base sm:text-lg lg:text-base xl:text-lg font-bold">
        {title}
      </p>
      <p className="text-[10px] sm:text-xs lg:text-[15px] xl:text-base font-normal">
        {para}
      </p>
    </div>
  )
}

function Unique() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-base sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-bold text-[#E8E00E]">
          Our Unique Methodology
        </h2>
        <p className="text-[7px] xs:text-[10px] sm:text-xs lg:text-base xl:text-lg font-normal">
          Learn about our step-by-step process for delivering results
        </p>
      </div>

      <div className=' grid grid-cols-4 lg:grid-cols-4 gap-4 p-6 mb-8 '>
        {list.map(l => < Card {...l} />)}
      </div>
    </div>
  )
}

export default Unique