import { useState } from "react";
import SmartContract from "./SmartContract";

const data = [
  {
    title: "Smart contract",
    img: "./img/startup/small.jpeg"
  },
  {
    title: "Blockchain developmengt",
    img: "./img/startup/small.jpeg"
  },
]

function Services() {
  const [selected, setSelected] = useState("Smart contract")

  return (
    <div className="pad-main-3 text-white bg-[#222531]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-[40px] lg:text-[45px] xl:text-[50px] font-semibold text-[#22C954] text-center">Services</h2>
        <div className="text-[10px] sm:text-[15px] md:text-lg lg:text-[22px] xl:text-[25px] text-center">
          From idea to product.Global blockchain development and marketing <br /> expertise for startup
        </div>

        <div className="df gap-6 sm:gap-8 md:gap-12 lg:gap-16 my-4 md:my-6 xl:my-8 border-b border-[#E5E8ED] overflow-x-auto">
          {
            data.map(d => (
              <div
                key={d.title}
                className={`df border-b-2 cursor-pointer ${selected === d.title ? "border-primary-900" : "opacity-60 border-transparent hover:opacity-100"}`}
                onClick={() => setSelected(d.title)}
              >
                <img className="w-8 rounded-full" src={d.img} alt={d.title} />
                <p className="text-xs sm:text-[15px] md:text-lg lg:text-2xl xl:text-[40px] font-semibold">{d.title}</p>
              </div>
            ))
          }
        </div>

        {
          selected === "Smart contract" &&
          <SmartContract />
        }
      </div>
    </div>
  )
}

export default Services