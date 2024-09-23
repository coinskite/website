const list = [
  {
    id: '1',
    src: "/img/home_new/networks/Gnosis.png",
    title: "Polygon zkEVM"
  },
  {
    id: '2',
    src: "/img/home_new/networks/Avalance.png",
    title: "Optimism"
  },
  {
    id: '3',
    src: "/img/home_new/networks/op.png",
    title: "Gnosis Chain"
  },
  {
    id: '4',
    src: "/img/home_new/networks/Gnosis.png",
    title: "Avalanche"
  },
  {
    id: '5',
    src: "/img/home_new/networks/Logos_and_symbols.png",
    title: "Arbitrum"
  },
  {
    id: '6',
    src: "/img/home_new/networks/op.png",
    title: "Polkadot"
  },
  {
    id: '7',
    src: "/img/home_new/networks/Polkadot.png",
    title: "Ethereum"
  }
]

function Networks() {
  return (
    <div className="py-4">

      <h2 className='mb-4 mt-10 mdb:mb-6 text-[10px] xs:text-sm sm:text-lg md:text-[22px] lg:text-[28px] xl:text-[34px] font-[700] uppercase text-center bg-[#FFEF16] w-fit p-2 text-black'>
        AVAILABLE ON +10 NETWORKS
      </h2>

      <div className="py-6 lg:py-8">
        <div className="df justify-between items-center gap-6 md:gap-20 max-w-7xl mx-auto">
          {
            list.map(l => (
              <div key={l.id}>
                <img
                  src={l.src}
                  alt=""
                />
                <span className="font-[500] text-[16px] shrink-0">{l.title}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Networks
