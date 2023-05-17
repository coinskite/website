const list = [
  {
    key: "1",
    src: "/img/home_new/read articles/1.png",
    title: "Artificial Intelligence",
    subtitle: "'Godfather of AI' resigns from Google, warns of the dangers of AI'",
    para: "Dr. Geoffrey Hinton is understood to have worked on artificial intelligence his whole life and is now warning how dangerous the technology could be.",
    date: "20/05/2023"

  },
  {
    key: "2",
    src: "/img/home_new/read articles/2.png",
    title: "Investment",
    subtitle: "MicroStrategy's Bitcoin conviction 'strong' as it posts Q1 profit",
    para: "Dr. Geoffrey Hinton is understood to have worked on artificial intelligence his whole life and is now warning how dangerous the technology could be.",
    date: '20/05/2023'
  },
  {
    key: "3",
    src: "/img/home_new/read articles/3.png",
    title: "Artificial Intelligence",
    subtitle: "Artificial Intelligence",
    para: "IBM CEO Arvind Krishna says that roughly 30% of their non-customer-facing positions could be covered by artificial intelligence over a five-year period.",
    date: "20/05/2023"

  },
]


function Card({ src, title, para, subtitle, date }) {
  return (
    <div className=" border border-primary-900">
      <img
        className=""
        src={src}
        alt=""
      />

      <div className="p-3 text-[#505050] bg-[#BFFFD3]">
        <p className="df justify-between mt-2 text-xs lg:text-sm xl:text-sm text-[#A4A4A4]">
          <span>{title}</span>
          <p>{date}</p>
        </p>
        <p className="text-[10px] lg:text-xs xl:text-xs">
          {subtitle}
        </p>
        <p className="text-[8px] lg:text-[10px] xl:text-[10px]">
          {para}
        </p>
      </div>
    </div>
  )
}

function Blog() {
  return (
    <div className="pad-main-3 2xl:py-14">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm xs:text-lg sm:text-lg md:text-[34px] xl:text-[40px] text-[#E8E00E] font-bold text-center">
          Read Our latest Insights
        </p>
        <p className="text-[8px] xs:text-xs sm:text-base xl:text-lg font-normal text-center">
          All the latest updates and community happenings
        </p>

        <div className="grid grid-cols-3 gap-8 pad-main-3">
          {list.map(l => <Card {...l} />)}
        </div>
      </div>
    </div>
  )
}

export default Blog