const list = [
  {
    id: "1",
    src: "/img/home/bot1.png",
  },
  {
    id: "2",
    src: "/img/home/bot2.png",
  },
  {
    id: "3",
    src: "/img/home/bot3.png",
  },
  {
    id: "4",
    src: "/img/home/bot4.png",
  }
];

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
  );
}

function Customer() {
  return (
    <div className="pad-main-3">
      <div className="max-w-5xl mx-auto relative bg-black border-[2px] border-[#22C954] p-10">
        <div className='grid lg:grid-cols-4 justify-center items-center gap-8 relative'>
          {list.map(l => (
            <div className="flex justify-center">
              <img
                className='h-[50px]'
                src={l?.src}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Customer;