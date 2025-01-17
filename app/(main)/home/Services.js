import React from 'react'

function Services() {

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
  return (
    <div className='grid md:grid-cols-3 gap-6 max-w-2xl mx-auto justify-center mb-6'>
      {data?.map((item) => {
        return (
          <div className='w-[183px] h-[149px]'>
            <div className='bg-[#1F232D] text-center p-4'>
              <div className='flex justify-center mb-4'>
                <img
                  src={item?.img}
                  className='w-10 h-10 object-contain'
                />
              </div>
              <div className='text-center'>
                <p className='text-[8px] md:text-xs font-medium'>{item?.title}</p>
                <p className='text-[8px] font-medium'>{item?.desc}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Services