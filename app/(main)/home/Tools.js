"use client";

import { useKeenSlider } from "keen-slider/react";

const list1 = [
  {
    id: "1",
    src: "/img/home_new/Teckstack/etherscan.png",
    title: 'Etherscan',
  },
  {
    id: "2",
    src: "/img/home_new/Teckstack/Infura.png",
    title: 'INFURA',
  },
  {
    id: "3",
    src: "/img/home_new/Teckstack/Band.png",
    title: 'Band',
  },
  {
    id: "4",
    src: "/img/home_new/Teckstack/uma.png",
    title: "UMA",
  },
  {
    id: "5",
    src: "/img/home_new/Teckstack/Polygon.png",
    title: 'polygon',
  },
  {
    id: "6",
    src: "/img/home_new/Teckstack/etherscan.png",
    title: 'Etherscan',
  },
  {
    id: "7",
    src: "/img/home_new/Teckstack/Infura.png",
    title: 'INFURA',
  },
  {
    id: "8",
    src: "/img/home_new/Teckstack/Band.png",
    title: 'Band',
  },
  {
    id: "9",
    src: "/img/home_new/Teckstack/uma.png",
    title: "UMA",
  },
  {
    id: "10",
    src: "/img/home_new/Teckstack/Polygon.png",
    title: 'polygon',
  }
]

const list2 = [
  {
    id: "1",
    src: "/img/home_new/Teckstack/near.png",
    title: 'near',
  },
  {
    id: "2",
    src: "/img/home_new/Teckstack/bnb.png",
    title: 'BNB',
  },
  {
    id: "3",
    src: "/img/home_new/Teckstack/filecoin.png",
    title: 'Filecoin',
  },
  {
    id: "4",
    src: "/img/home_new/Teckstack/Chainlink.png",
    title: "Chainlink",
  },
  {
    id: "5",
    src: "/img/home_new/Teckstack/zksync.png",
    title: 'zkSync',
  },
  {
    id: "6",
    src: "/img/home_new/Teckstack/hop.png",
    title: 'Hop',
  },
  {
    id: "7",
    src: "/img/home_new/Teckstack/near.png",
    title: 'near',
  },
  {
    id: "8",
    src: "/img/home_new/Teckstack/bnb.png",
    title: 'BNB',
  },
  {
    id: "9",
    src: "/img/home_new/Teckstack/filecoin.png",
    title: 'Filecoin',
  },
  {
    id: "10",
    src: "/img/home_new/Teckstack/Chainlink.png",
    title: "Chainlink",
  },
  {
    id: "11",
    src: "/img/home_new/Teckstack/zksync.png",
    title: 'zkSync',
  },
  {
    id: "12",
    src: "/img/home_new/Teckstack/hop.png",
    title: 'Hop',
  }
]

const list3 = [
  {
    id: "1",
    src: "/img/home_new/Teckstack/ethereum.png",
    title: 'Ethereum',
  },
  {
    id: "2",
    src: "/img/home_new/Teckstack/solana.png",
    title: 'SOLANA',
  },
  {
    id: "3",
    src: "/img/home_new/Teckstack/arweave.png",
    title: 'arweave',
  },
  {
    id: "4",
    src: "/img/home_new/Teckstack/optimism.png",
    title: "Optimism",
  },
  {
    id: "5",
    src: "/img/home_new/Teckstack/graph.png",
    title: 'Graph',
  },
  {
    id: "6",
    src: "/img/home_new/Teckstack/across.png",
    title: 'Across',
  },
  {
    id: "7",
    src: "/img/home_new/Teckstack/ethereum.png",
    title: 'Ethereum',
  },
  {
    id: "8",
    src: "/img/home_new/Teckstack/solana.png",
    title: 'SOLANA',
  },
  {
    id: "9",
    src: "/img/home_new/Teckstack/arweave.png",
    title: 'arweave',
  },
  {
    id: "10",
    src: "/img/home_new/Teckstack/optimism.png",
    title: "Optimism",
  },
  {
    id: "11",
    src: "/img/home_new/Teckstack/graph.png",
    title: 'Graph',
  },
  {
    id: "12",
    src: "/img/home_new/Teckstack/across.png",
    title: 'Across',
  }
]

function Card({ src, title }) {
  return (
    <div className='keen-slider__slide min-w-fit df px-2.5 py-1 rounded-[10px] bg-[#272727]'>
      <img
        className='w-[10px] xs:w-[13px] sm:w-[17px] md:w-[20px] xl:w-[22px] '
        src={src}
        alt=''
      />
      <p className="text-[8px] xs:text-xs sm:text-sm md:text-lg lg:text-xl whitespace-nowrap">
        {title}
      </p>
    </div>
  )
}

const animation = { duration: 40000, easing: (t) => t }

function Slider({ list = [], className = "", rtl = false }) {
  const [sliderRef] = useKeenSlider({
    rtl,
    loop: true,
    drag: false,
    renderMode: "performance",
    slides: {
      spacing: 40,
      perView: "auto",
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <div ref={sliderRef} className={`keen-slider ${className}`}>
      {list.map(l => <Card key={l.id} {...l} />)}
    </div>
  )
}

function Tools() {
  return (
    <div className="max-w-7xl mx-auto mb-8 my-4 sm:mb-12 mdb:mb-16 sm:text-center md:text-left">
      <div className="flex items-center justify-center">
        <div className='mb-2 text-[8px] xs:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[28px] bg-[#E8E00E] text-black w-fit p-2 uppercase font-bold'>
          Utilizing cutting-edge tools
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className='font-normal  mb-6 mdb:mb-10 text-[8px] xs:text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          We build for your users, regardless of platform, language, or protocol limitations.
        </div>
      </div>

      <div className="home-tools max-w-5xl mx-auto relative">
        <Slider list={list1} />
        <Slider rtl list={list2} className="my-3 sm:my-6" />
        <Slider list={list3} />
      </div>
    </div>
  )
}

export default Tools