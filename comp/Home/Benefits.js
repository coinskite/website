
const list = [
  {
    key: '1',
    src: "/img/home_new/Beneits/1.png",
    title: "Time zones ain't no thing",
    para: "Work seamlessly with our team, no matter your time zone"
  },
  {
    key: '2',
    src: "/img/home_new/Beneits/2.png",
    title: "Impossible? We're on it",
    para: "We tackle the toughest problems with cutting-edge tech "
  },
  {
    key: '3',
    src: "/img/home_new/Beneits/3.png",
    title: "Full spectrum of services",
    para: "Streamline your operations with our comprehensive suite of services "
  },
  {
    key: '4',
    src: "/img/home_new/Beneits/4.png",
    title: "Flexible work terms",
    para: " Find your ideal work-life balance with our flexible working arrangements"
  },
]

const list2 = [
  {
    key: "1",
    title: '30+',
    sub: "Happy Clients",
    src: "/img/home_new/clients BOX/1.png"
  },
  {
    key: "2",
    title: '120+',
    sub: "Projects Completed",
    src: "/img/home_new/clients BOX/2.png"
  },
  {
    key: "3",
    title: '70',
    sub: "Dedicated Members",
    src: "/img/home_new/clients BOX/3.png"
  },
  {
    key: "4",
    title: '12+',
    sub: "Awards Won",
    src: "/img/home_new/clients BOX/4.png"
  },
]

function Cards({ src, title, para }) {
  return (
    <div className="df">
      <img
        className=''
        src={src}
        alt=''
      />
      <div>
        <p className="text-sm xs:text-base sm:text-[24px] text-[#E8E00E] font-bold">
          {title}
        </p>
        <p className="text-[8px] xs:text-xs xl:text-base font-normal" >
          {para}
        </p>
      </div>
    </div>
  )
}

function Card2({ src, title, sub }) {
  return (
    <div>
      <img
        className=''
        src={src}
        alt=''
      />

      <p className="text-sm xs:text-base sm:text-[24px] text-[#E8E00E] font-bold">
        {title}
      </p>

      <p className="text-[8px] xs:text-xs xl:text-base font-normal" >
        {sub}
      </p>
    </div>
  )
}

function Benefits() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm xs:text-base sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-bold text-[#E8E00E]">Benefits of working with us</p>
        <div className='text-[7px] xs:text-[10px] sm:text-xs lg:text-base xl:text-lg font-normal'>
          Discover the Advantages of Collaborating with Our Team
        </div>

        <div className="grid grid-cols-2 gap-4 mb-16">
          {list.map(l1 => <Cards {...l1} />)}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 border-[3px] border-primary-900 bg-[#152A39] shadow-[0px_10px_20px_0px_#29292A12] rounded-lg">
          {list2.map(c => <Card2 {...c} />)}
        </div>
      </div>
    </div>
  )
}

export default Benefits