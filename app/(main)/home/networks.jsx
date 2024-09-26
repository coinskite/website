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

      <div className="flex items-center justify-center lg:justify-start">
        <h2 className='mb-4 mt-10 text-[8px] xs:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[28px] font-bold uppercase  bg-[#FFEF16] p-2 text-black'>
          AVAILABLE ON +10 NETWORKS
        </h2>
      </div>

      <div className="py-6 lg:py-8">
        <div className="flex justify-between items-center gap-4 md:gap-6 lg:gap-8 ">
          {list.map(l => (
            <div key={l.id} className="flex flex-col items-center justify-center">
              <img
                src={l.src}
                alt={l.title}
                className="w-[30px] h-[27px] xs:w-[38px] xs:h-[35px] sm:w-[40px] sm:h-[38px] md:w-[50px] md:h-[48px] lg:w-[65px] lg:h-[64px]  xl:w-[75px] xl:h-[75px] object-contain mb-2"
              />
              <span className="h-[10px] font-medium text-[6px] xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-center">{l.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Networks;