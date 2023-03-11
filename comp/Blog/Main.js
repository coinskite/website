import React, { useState } from 'react';

const tabs = ["All", "Blockchain", "Crypto", "Defi", "Smart contract", "Research"]

const arr = [
  {
    key: 1,
    src: "",
    type: "Blockchain",
    heading: "10 ways blockchain developers can use ChatGPT",
    date: "Jan 21,2023",
    by: "Sathish,Developer @coinskite",
  },
  {
    key: 2,
    src: "",
    type: "Defi",
    heading: "City of Busan to establish digital assets exchange: Report",
    date: "",
    by: "",
  },
  {
    key: 3,
    src: "",
    type: "NFT",
    heading: "Decentralized forex will reduce cost by as much as 80%: Report",
    date: "",
    by: "",
  },
  {
    key: 4,
    src: "",
    type: "Blockchain",
    heading: "10 ways blockchain developers can use ChatGPT",
    date: "Jan 21,2023",
    by: "Sathish,Developer @coinskite",
  },
  {
    key: 5,
    src: "",
    type: "Defi",
    heading: "City of Busan to establish digital assets exchange: Report",
    date: "",
    by: "",
  },
  {
    key: 6,
    src: "",
    type: "NFT",
    heading: "Decentralized forex will reduce cost by as much as 80%: Report",
    date: "",
    by: "",
  },
  {
    key: 7,
    src: "",
    type: "Blockchain",
    heading: "10 ways blockchain developers can use ChatGPT",
    date: "Jan 21,2023",
    by: "Sathish,Developer @coinskite",
  },
  {
    key: 8,
    src: "",
    type: "Defi",
    heading: "City of Busan to establish digital assets exchange: Report",
    date: "",
    by: "",
  },
  {
    key: 9,
    src: "",
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
        <button className='text-white bg-primary-900'>
          {type}
        </button>
        <p className=''>{heading}</p>
        {
          by &&
          <p className='df'>
            {by} |
            <span className='text-[#C4C4C4]'>
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
    <div className='pad-main-1-3'>
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

      <button className='text-white bg-primary-900'>
        Load more stories
      </button>
    </div>
  )
}

export default Main