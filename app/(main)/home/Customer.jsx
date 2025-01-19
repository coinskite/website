
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

function Customer() {
  return (
    <div className="pad-main-3">
      <div className="max-w-5xl mx-auto relative bg-black border-[2px] border-[#22C954] p-10">
        <div className='grid lg:grid-cols-4 justify-center items-center gap-8 relative'>
          {list.map(l => (
            <div key={l.id} className="flex justify-center">
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