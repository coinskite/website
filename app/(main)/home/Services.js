
const data = [
  {
    img: "/img/home/first.png",
    title: "Streamlined Integration",
    desc: "Seamless Scalability"
  },
  {
    img: "/img/home/second.png",
    title: "Secure Transactions",
    desc: "Transparent Auditing"
  },
  {
    img: "/img/home/third.png",
    title: "Scalable Solutions",
    desc: "Adaptive Infrastructure"
  }
]

function Services() {
  return (
    <div className='flex flex-col md:flex-row gap-6 justify-center items-center pad-main-3'>
      {data?.map((item) => (
        <div key={item.title} className='w-fit p-4 bg-[#1F232D] text-center'>
          <div className='flex justify-center mb-4'>
            <img
              src={item?.img}
              className='size-10'
            />
          </div>
          <div className='text-center'>
            <p className='text-[8px] md:text-xs font-medium text-[#DFE5F4]'>{item?.title}</p>
            <p className='text-[6px] md:text-[8px] font-medium text-[#939DB5]'>{item?.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;