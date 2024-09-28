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

function Card({ src, title, sub }) {
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

function Counts() {
  return (
    <div className="pad-main-3 relative">
      <div className="max-w-7xl mx-auto">
        <div className="xs:max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-4 sm:p-6 border-[3px] border-primary-900 bg-[#152A39] shadow-[0px_10px_20px_0px_#29292A12] rounded-lg relative">
            {list2.map(c => <Card key={c.id} {...c} />)}
            <div className="absolute w-56 h-32 top-52 right-0 blured-bg z-[1]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counts