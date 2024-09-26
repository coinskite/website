const list = [
  {
    id: "1",
    src: "/img/home_new/read articles/1.png",
    title: "Artificial Intelligence",
    subtitle: "'Godfather of AI' resigns from Google, warns of the dangers of AI'",
    para: "Dr. Geoffrey Hinton is understood to have worked on artificial intelligence his whole life and is now warning how dangerous the technology could be.",
    date: "20/05/2023"

  },
  {
    id: "2",
    src: "/img/home_new/read articles/2.png",
    title: "Investment",
    subtitle: "MicroStrategy's Bitcoin conviction 'strong' as it posts Q1 profit",
    para: "Dr. Geoffrey Hinton is understood to have worked on artificial intelligence his whole life and is now warning how dangerous the technology could be.",
    date: '20/05/2023'
  },
  {
    id: "3",
    src: "/img/home_new/read articles/3.png",
    title: "Artificial Intelligence",
    subtitle: "7,800 jobs at IBM could be replaced by AI within years, CEO suggests",
    para: "IBM CEO Arvind Krishna says that roughly 30% of their non-customer-facing positions could be covered by artificial intelligence over a five-year period.",
    date: "20/05/2023"
  },
]


function Card({ src, title, para, subtitle, date }) {
  return (
    <div className="grid w-[246px] xl:w-[310px] border border-primary-900 rounded-t-[10px]">
      <img
        className="w-full rounded-t-[10px]"
        src={src}
        alt=""
      />

      <div className="p-3 text-[#505050] bg-[#BFFFD3] rounded-t-[10px]">
        <p className="df justify-between mt-2 text-xs xl:text-sm text-[#A4A4A4]">
          <span>{title}</span>
          <span>{date}</span>
        </p>
        <p className="my-1.5 mdb:my-2 text-[10px] xl:text-xs text-[#505050]">
          {subtitle}
        </p>
        <p className="text-[8px] xl:text-[10px] text-[#505050]">
          {para}
        </p>
      </div>
    </div>
  )
}

function Blog() {
  return (
    <div className="pad-main-3 2xl:py-14">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-center lg:justify-start">
          <h2 className="mb-2 text-[8px] xs:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[28px] bg-[#E8E00E] text-black w-fit p-2 font-bold uppercase">
            Read Our latest Insights
          </h2>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <div className="font-normal mb-6 mdb:mb-10 text-[8px] xs:text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
            All the latest updates and community happenings
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8">
          {list.map(l => <Card key={l.id} {...l} />)}
        </div>

        <button className="portfolio-btn active block mt-5 lg:mt-0 mx-auto lg:absolute lg:right-0 lg:top-4 lg:mx-0">
          View Blogs
        </button>
      </div>
    </div>
  )
}

export default Blog