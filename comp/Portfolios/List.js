import { useState } from "react";
import DesignBox from "./DesignBox";

const list = [
  {
    title: "UI DESIGN",
    img: "",
    list: [
      {
        title: "Coinskite",
        img: "/img/portfolio/coinskite.png"
      },
      {
        title: "NFT Marketplace",
        img: "/img/portfolio/nft.png"
      },
      {
        title: "Social Media",
        img: "/img/portfolio/social_media.png"
      },
      {
        title: "Youtube Thumbnail",
        img: "/img/portfolio/youtube.png"
      },
      {
        title: "NFT RUGGED WOMEN",
        img: "/img/portfolio/rugged.png"
      },
      {
        title: "NFT DOG",
        img: "/img/portfolio/dog.png"
      },
      {
        title: "NFT FASHION",
        img: "/img/portfolio/fashion.png"
      },
    ]
  },
  {
    title: "SOCIAL MEDIA",
    img: "",
    list: []
  },
  {
    title: "NFT ILLUSTRATION",
    img: "",
    list: []
  },
  {
    title: "THUMBNAIL",
    img: "",
    list: []
  },
]

function List() {
  const [currentList, setCurrentList] = useState(list[0].list)
  const [selected, setSelected] = useState("UI DESIGN")

  return (
    <div className="pad-main-3 bg-[#111112]">
      <h2 className="text-xs xs:text-base sm:text-xl md:text-[28px] lg:text-[32px] xl:text-[40px] text-[#18E25D]">
        Our Work
      </h2>

      <div className="df no-scroll-bar gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-4 md:mb-6 xl:mb-8 border-b border-[#E5E8ED] overflow-x-auto">
        {
          list.map(d => (
            <button
              key={d.title}
              className={`df min-w-[120px] h-8 sm:h-12 md:h-14 lg:h-16 xl:h-20 px-0 border-b-2 rounded-none text-left ${selected === d.title ? "border-primary-900" : "opacity-60 border-transparent hover:opacity-100"}`}
              onClick={() => {
                setSelected(d.title)
                setCurrentList(d.list)
              }}
            >
              {/* <img className="w-3 xs:w-4 sm:w-5 md:w-6 lg:w-8 rounded-full" src={d.img} alt={d.title} /> */}
              <span className="text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl font-semibold text-white">{d.title}</span>
            </button>
          ))
        }
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {
          currentList.map(d => (
            <DesignBox key={d.title} {...d} />
          ))
        }
      </div>
    </div>
  )
}

export default List