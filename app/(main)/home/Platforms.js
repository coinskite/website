const list = [
  {
    key: '1',
    src: "/img/home_new/platforms/aws.png"
  },
  {
    key: '2',
    src: "/img/home_new/platforms/oracle.png"
  },
  {
    key: '3',
    src: "/img/home_new/platforms/azure blockchain.png"
  },
  {
    key: '4',
    src: "/img/home_new/platforms/IBM.png"
  },
  {
    key: '5',
    src: "/img/home_new/platforms/google cloud.png"
  }
]

function Platforms() {
  return (
    <div>
      <h2 className='mb-2 mdb:mb-4 text-[10px] xs:text-sm sm:text-lg md:text-[22px] lg:text-[28px] xl:text-[34px] font-bold text-[#E8E00E] uppercase text-center'>
        Experience the power of Industry-Best Platforms
      </h2>

      <div className="pad-main-3 py-6 lg:py-8 bg-[#BFFFD3]">
        <div className="df justify-center gap-6 md:gap-20 max-w-7xl mx-auto">
          {
            list.map(l => (
              <div key={l.key}>
                <img
                  src={l.src}
                  alt=""
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Platforms