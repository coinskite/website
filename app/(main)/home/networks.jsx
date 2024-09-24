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
];

function Networks() {
  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8">
      <h2 className='mb-4 mt-10 text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold uppercase text-center bg-[#FFEF16] w-fit mx-auto p-2 text-black'>
        AVAILABLE ON +10 NETWORKS
      </h2>

      <div className="py-6 lg:py-8">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {list.map(l => (
            <div key={l.id} className="flex flex-col items-center justify-center">
              <img
                src={l.src}
                alt={l.title}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-2"
              />
              <span className="font-medium text-xs sm:text-sm md:text-base text-center">{l.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Networks;