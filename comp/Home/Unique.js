
const list = [
  {
    key: "1",
    src: "/img/home_new/methodology/1.png",
    title: "Ideate",
    para: " Turn your idea from concept to MVP"
  },
  {
    key: "2",
    src: "/img/home_new/methodology/2.png",
    title: "Design",
    para: " Sketch out the product to align the user needs"
  },
  {
    key: "3",
    src: "/img/home_new/methodology/3.png",
    title: "Develop",
    para: " Convert the designs into a live application"
  },
  {
    key: "4",
    src: "/img/home_new/methodology/4.png",
    title: "Deploy",
    para: "Launching the application to the market "
  },

]

function Card({ src, title, para }) {
  return (
    <div className='df'>
      <img
        className=''
        src={src}
        alt=''
      />
      <p className="text-base sm:text-lg lg:text-base xl:text-lg font-bold text-[#E8E00E]">
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
    <div>
      <div>
        <p className="text-base sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-bold text-[#E8E00E]">
          Our Unique Methodology
        </p>
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