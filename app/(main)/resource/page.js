"use client";

import { useState } from "react";
import Final from "../blog/Final";

const list = [
  {
    id: "1",
    src: "img/ebook/Metaverse.png",
    title: "The Metaverse Economy",
    para: " How Blockchain and Virtual Reality are Revolutionizing Business",
    link: "",
  },
  {
    id: "2",
    src: "img/ebook/web3.png",
    title: "Web3.0:",
    para: "The Future of the Internet and How Blockchain is Driving It",
    link: "",
  },
  {
    id: "3",
    src: "img/ebook/crypto-trading.png",
    title: "Crypto Trading Strategies",
    para: " Maximizing Profits and Minimizing Risks",
    link: "",
  },
  {
    id: "4",
    src: "img/ebook/Bitcoin.png",
    title: "Bitcoin and Beyond",
    para: " The Rise of Digital Currency and its Impact on Society",
    link: "",
  },
  {
    id: "5",
    src: "img/ebook/Landscape.png",
    title: "The Legal Landscape of Cryptocurrency",
    para: " Navigating Regulations and Compliance",
    link: "",
  },
  {
    id: "6",
    src: "img/ebook/Blockchain.png",
    title: "Blockchain for Dummies",
    para: "A Comprehensive Guide to Understanding Distributed Ledger Technology",
    link: "",
  },
  {
    id: "7",
    src: "img/ebook/marketing.png",
    title: "Metaverse Marketing",
    para: "How Brands Can Succeed in Virtual Worlds",
    link: "",
  },
  {
    id: "8",
    src: "img/ebook/game.png",
    title: "The Future of Gaming",
    para: "How Blockchain and NFTs are Disrupting the Video Game Industry",
    link: "",
  },
]

const btns = [
  "All",
  "Blockchain",
  "Crypto",
  "Defi",
  "Smart contract",
  "Research",
]

function Resource() {
  const [selected, setSelected] = useState("All")

  return (
    <div className="pad-main-3 bg-[#13111B] text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl xs:text-[22px] sm:text-3xl lg:text-[26px] xl:text-[36px] font-semibold">Resource</h1>

        <div className="df no-scroll-bar my-5 overflow-x-auto">
          {
            btns.map(b => (
              <button
                key={b}
                className={`shrink-0 px-3 py-0.5 text-base sm:text-xl lg:text-sm font-semibold rounded hover:bg-[#22C954] ${selected === b ? "bg-[#22C954]" : ""}`}
                onClick={() => setSelected(b)}
              >
                {b}
              </button>
            ))
          }
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-12 max-w-[254px] xs:max-w-[350px] sm:max-w-[420px] lg:max-w-4xl xl:max-w-5xl">
          {
            list.map(l => (
              <div key={l.id}>
                <img
                  className="h-[372px] xs:h-[460px] sm:h-[595px] mb-4"
                  src={l.src}
                  alt=""
                />
                <p className="mt-2 mb-1 text-sm sm:text-lg xl:text-xl">
                  <strong className="font-medium">
                    {l.title} :
                  </strong>
                  {l.para}
                </p>

                <a href="/" className="text-sm sm:text-lg xl:text-[20px] font-medium underline">
                  Get the book
                </a>
              </div>
            ))
          }
        </div>
      </div>
      <Final />
    </div>
  )
}

export default Resource