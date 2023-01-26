import { useState } from "react";
import { SmartContract, DefiDevelopment, NFTDevelopment, MetaverseDevelopment } from "./Template";

const data = [
  {
    title: "Smart contract development & Audit",
    img: "./img/startup/small.jpeg",
    id: 1
  },
  {
    title: "Defi development",
    img: "./img/startup/small.jpeg",
    id: 2
  },
  {
    title: "NFT Marketplace",
    img: "./img/startup/small.jpeg",
    id: 3
  },
  {
    title: "Metaverse Development",
    img: "./img/startup/small.jpeg",
    id: 4
  },
]

function Services() {
  const [selected, setSelected] = useState(1)

  return (
    <div className="pad-main-3 text-white bg-[#222531]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[15px] xs:text-xl md:text-[25px] lg:text-[35px] xl:text-[40px] font-semibold text-[#22C954] text-center">
          Our Expertise at Your Service
        </h2>
        <div className="text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg text-center">
          From smart contract development to blockchain integration. Our team is here to put our skills at your service and drive your business forward with the power of blockchain technology
        </div>

        <div className="df gap-6 sm:gap-8 md:gap-12 lg:gap-16 my-4 md:my-6 xl:my-8 border-b border-[#E5E8ED] overflow-x-auto">
          {
            data.map(d => (
              <div
                key={d.id}
                className={`df border-b-2 cursor-pointer ${selected === d.id ? "border-primary-900" : "opacity-60 border-transparent hover:opacity-100"}`}
                onClick={() => setSelected(d.id)}
              >
                <img className="w-8 rounded-full" src={d.img} alt={d.title} />
                <p className="text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl font-semibold">{d.title}</p>
              </div>
            ))
          }
        </div>

        {selected === 1 && <SmartContract />}
        {selected === 2 && <DefiDevelopment />}
        {selected === 3 && <NFTDevelopment />}
        {selected === 4 && <MetaverseDevelopment />}
      </div>

      <div className="text-[10px] xs:text-[15px] sm:text-xl md:text-[25px] lg:text-[32px] xl:text-[40px] font-bold text-[#22C954] text-center">
        What makes CoinSkite the top choice for startups?
      </div>
    </div>
  )
}

export default Services