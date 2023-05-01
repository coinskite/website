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
      <div className="grid lg:grid-cols-2 gap-10 w-fit mx-auto">
        <h2 className="text-[15px] xs:text-xl sm:text-[25px] text-[#18E25D] lg:col-span-2">
          Our Work
        </h2>

        <div className="df no-scroll-bar gap-6 sm:gap-8 md:gap-12 lg:gap-16 -mb-2 -mt-4 overflow-x-auto lg:col-span-2">
          {
            list.map(d => (
              <button
                key={d.title}
                className={`df portfolio-btn text-xs xs:text-base sm:text-xl md:text-sm lg:text-base xl:text-xl font-medium text-white hover:text-emerald-400 whitespace-nowrap ${selected === d.title ? "active" : ""}`}
                onClick={() => {
                  setSelected(d.title)
                  setCurrentList(d.list)
                }}
              >
                {d.title}
              </button>
            ))
          }
        </div>

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