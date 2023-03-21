import React, { useState } from 'react';

const tabs = ["All", "Blockchain", "Crypto", "Defi", "Smart contract", "Research"]

const arr = [
  {
    key: 1,
    src: "./img/blog/chatgpt.png",
    type: "Blockchain",
    heading: "10 ways blockchain developers can use ChatGPT",
    date: "Jan 21,2023",
    by: "Sathish,Developer @coinskite",
  },
  {
    key: 2,
    src: "./img/blog/bitcoin.png",
    type: "Defi",
    heading: "City of Busan to establish digital assets exchange: Report",
    date: "",
    by: "",
  },
  {
    key: 3,
    src: "./img/blog/circles.png",
    type: "NFT",
    heading: "Decentralized forex will reduce cost by as much as 80%: Report",
    date: "",
    by: "",
  },
  {
    key: 4,
    src: "./img/blog/chatgpt.png",
    type: "Blockchain",
    heading: "10 ways blockchain developers can use ChatGPT",
    date: "Jan 21,2023",
    by: "Sathish,Developer @coinskite",
  },
  {
    key: 5,
    src: "./img/blog/web3.png",
    type: "Defi",
    heading: "City of Busan to establish digital assets exchange: Report",
    date: "",
    by: "",
  },
  {
    key: 6,
    src: "./img/blog/web3.png",
    type: "NFT",
    heading: "Decentralized forex will reduce cost by as much as 80%: Report",
    date: "",
    by: "",
  },
  {
    key: 7,
    src: "./img/blog/chatgpt.png",
    type: "Blockchain",
    heading: "10 ways blockchain developers can use ChatGPT",
    date: "Jan 21,2023",
    by: "Sathish,Developer @coinskite",
  },
  {
    key: 8,
    src: "./img/blog/nft.png",
    type: "Defi",
    heading: "City of Busan to establish digital assets exchange: Report",
    date: "",
    by: "",
  },
  {
    key: 9,
    src: "./img/blog/nasdaq.png",
    type: "NFT",
    heading: "Decentralized forex will reduce cost by as much as 80%: Report",
    date: "",
    by: "",
  },
]

function Blog({ src, type, heading, by, date }) {
  return (
    <div className='dfc'>
      <div className='h-20 bg-primary-900'>
        <img src={src} alt="" />
      </div>

      <div className='dfc '>
        <button className='text-[10px] xs:text-xs md:text-[10px] lg:text-xs font-semibold text-white bg-primary-900'>
          {type}
        </button>
        <p className='text-xs xs:text-[15px] sm:text-lg md:text-xs lg:text-[15px] xl:text-lg font-semibold'>{heading}</p>
        {
          by &&
          <p className='df'>
            {by} |
            <span className='text[6px] md:text-[8px] lg:text-[10px] xl:text-xs font-semibold text-[#C4C4C4]'>
              {date}
            </span>
          </p>
        }
      </div>
    </div>
  )
}

function Main() {
  const [current, setCurrent] = useState("All")

  return (
    <div className='text-sm xs:text-base md:text-base lg:text-lg xl:text-xl font-semibold pad-main-1-3'>
      <div>
        Latest stories
      </div>

      <div className='df mb-4'>
        {
          tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setCurrent(tab)}
              className={tab === current ? "bg-[#CAFCD9] text-black" : ""}
            >
              {tab}
            </button>
          ))
        }
      </div>

      <div className='grid md:grid-cols-3 gap-4'>
        {arr.map(l => <Blog {...l} />)}
      </div>

      <button className='text-[10px] xs:text-xs sm:text-sm lg:text-lg xl:text-xl font-semibold text-white bg-primary-900'>
        Load more stories
      </button>
    </div>
  )
}

export default Main