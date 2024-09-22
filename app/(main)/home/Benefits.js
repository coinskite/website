
// const list = [
//   {
//     id: '1',
//     src: "/img/home_new/Beneits/1.png",
//     title: "Time zones ain't no thing",
//     para: "Work seamlessly with our team, no matter your time zone"
//   },
//   {
//     id: '2',
//     src: "/img/home_new/Beneits/2.png",
//     title: "Impossible? We're on it",
//     para: "We tackle the toughest problems with cutting-edge tech "
//   },
//   {
//     id: '3',
//     src: "/img/home_new/Beneits/3.png",
//     title: "Full spectrum of services",
//     para: "Streamline your operations with our comprehensive suite of services "
//   },
//   {
//     id: '4',
//     src: "/img/home_new/Beneits/4.png",
//     title: "Flexible work terms",
//     para: " Find your ideal work-life balance with our flexible working arrangements"
//   },
// ]

const list2 = [
  {
    id: "1",
    title: '30+',
    sub: "Happy Clients",
    src: "/img/home_new/clients BOX/1.png"
  },
  {
    id: "2",
    title: '120+',
    sub: "Projects Completed",
    src: "/img/home_new/clients BOX/2.png"
  },
  {
    id: "3",
    title: '70',
    sub: "Dedicated Members",
    src: "/img/home_new/clients BOX/3.png"
  },
  {
    id: "4",
    title: '12+',
    sub: "Awards Won",
    src: "/img/home_new/clients BOX/4.png"
  },
]

function Cards({ src, title, para }) {
  return (
    <div className="df gap-4">
      <img
        className='w-[42px] xs:w-[48px] sm:w-[72px]'
        src={src}
        alt=''
      />
      <div>
        <p className="text-sm xs:text-base sm:text-[24px] text-[#E8E00E] font-bold">
          {title}
        </p>
        <p className="text-[8px] xs:text-xs xl:text-base" >
          {para}
        </p>
      </div>
    </div>
  )
}

function Card2({ src, title, sub }) {
  return (
    <div className="text-center">
      <img
        className='mx-auto w-[44px] md:w-[55px] xl:w-[64px]'
        src={src}
        alt=''
      />

      <p className="md:my-2 text-[28px] sm:text-[35px] md:text-[42px] xl:text-[48px] text-[#01F08B] font-extrabold">
        {title}
      </p>

      <p className="text-[10px] sm:text-sm md:text-base xl:text-lg">
        {sub}
      </p>
    </div>
  )
}

function Benefits() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="mb-2 text-sm xs:text-base sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-bold text-[#E8E00E] uppercase text-center">
          Benefits of working with us
        </h2>
        <div className='mb-4 sm:mb-8 text-[7px] xs:text-[10px] sm:text-xs lg:text-base xl:text-lg text-center'>
          Discover the Advantages of Collaborating with Our Team
        </div> */}

        <div className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-6xl mx-auto">
          {/* <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
            {list.map(l => <Cards key={l.id} {...l} />)}
          </div> */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-4 sm:p-6 border-[3px] border-primary-900 bg-[#152A39] shadow-[0px_10px_20px_0px_#29292A12] rounded-lg relative">
            {list2.map(c => <Card2 key={c.id} {...c} />)}
            <div className="absolute w-56 h-32 bottom-0 right-0 blured-bg z-[1]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits