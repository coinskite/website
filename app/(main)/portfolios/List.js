"use client";
import { useState } from "react";
import DesignBox from "./DesignBox";

const list = [
  {
    title: "UI Design",
    img: "",
    list: [
      {
        type: "UI DESIGN",
        title: "Coinskite",
        img: "/img/portfolio/coinskite.png"
      },
      {
        type: "UI DESIGN",
        title: "NFT Marketplace",
        img: "/img/portfolio/nft.png"
      },
      {
        type: "SOCILA MEDIA",
        title: "Social Media",
        img: "/img/portfolio/social_media.png"
      },
      {
        type: "YOUTUBE",
        title: "Youtube Thumbnail",
        img: "/img/portfolio/youtube.png"
      },
      {
        type: "NFT ILLUSTRATION",
        title: "NFT RUGGED WOMEN",
        img: "/img/portfolio/rugged.png"
      },
      {
        type: "NFT ILLUSTRATION",
        title: "NFT DOG",
        img: "/img/portfolio/dog.png"
      },
      {
        type: "NFT ILLUSTRATION",
        title: "NFT FASHION",
        img: "/img/portfolio/fashion.png"
      },
    ]
  },
  {
    title: "Social Media",
    img: "",
    list: []
  },
  {
    title: "NFT Illustration",
    img: "",
    list: []
  },
  {
    title: "Thumbnail",
    img: "",
    list: []
  },
  {
    title: "Motion",
    img: "",
    list: []
  }
]

function List() {
  const [currentList, setCurrentList] = useState(list[0].list)
  const [selected, setSelected] = useState("UI Design")

  return (
    <div className="pad-main-3 bg-[#111112] relative isolate">
      <div className="blured-bg absolute top-16 left-0 w-80 h-60 -z-[1]"></div>

      <div className="grid lg:grid-cols-2 gap-10 w-fit mx-auto z-[1]">
        <h2 className="text-[15px] xs:text-xl sm:text-[25px] text-[#18E25D] lg:col-span-2">
          Our Work
        </h2>

        <div className="df no-scroll-bar gap-6 sm:gap-8 md:gap-12 lg:gap-16 -mb-2 -mt-4 overflow-x-auto lg:col-span-2">
          {
            list.map(d => (
              <button
                key={d.title}
                className={`df portfolio-btn text-xs xs:text-base sm:text-lg font-medium text-white hover:text-emerald-400 whitespace-nowrap ${selected === d.title ? "active" : ""}`}
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