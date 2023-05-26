const list = [
  {
    key: '1',
    src: "/img/platforms2/aws.png"
  },
  {
    key: '2',
    src: "/img/platforms2/oracle.png"
  },
  {
    key: '3',
    src: "/img/platforms2/azure blockchain.png"
  },
  {
    key: '4',
    src: "/img/platforms2/IBM.png"
  },
  {
    key: '5',
    src: "/img/platforms2/google cloud.png"
  }
]

function Cards({ src, key }) {
  return (
    <div>
      <img
        className=""
        src={src}
      />
    </div>
  )
}

function Platforms() {
  return (
    <div className="">
      <h2 className=' mt-5 text-[10px] xs:text-sm sm:text-lg md:text-[22px] lg:text-[28px] xl:text-[34px] font-bold  text-[#E8E00E] text-center'>
        Experience the power of Industry-Best Platforms
      </h2>
      <div className="df content-evenly gap-[80px] bg-[#BFFFD3]">
        {list.map(l => <Cards {...l} />)}
      </div>
    </div>
  )
}

export default Platforms