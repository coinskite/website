import { useKeenSlider } from "keen-slider/react"

const list1 = [
  {
    key: "1",
    src: "/img/home_new/Teckstack/etherscan.png",
    title: 'Etherscan',
  },
  {
    key: "2",
    src: "/img/home_new/Teckstack/Infura.png",
    title: 'INFURA',
  },
  {
    key: "3",
    src: "/img/home_new/Teckstack/Band.png",
    title: 'Band',
  },
  {
    key: "4",
    src: "/img/home_new/Teckstack/uma.png",
    title: "UMA",
  },
  {
    key: "5",
    src: "/img/home_new/Teckstack/Polygon.png",
    title: 'polygon',
  }
]

const list2 = [
  {
    key: "1",
    src: "/img/home_new/Teckstack/near.png",
    title: 'near',
  },
  {
    key: "2",
    src: "/img/home_new/Teckstack/bnb.png",
    title: 'BNB',
  },
  {
    key: "3",
    src: "/img/home_new/Teckstack/filecoin.png",
    title: 'Filecoin',
  },
  {
    key: "4",
    src: "/img/home_new/Teckstack/Chainlink.png",
    title: "Chainlink",
  },
  {
    key: "5",
    src: "/img/home_new/Teckstack/zksync.png",
    title: 'zkSync',
  },
  {
    key: "6",
    src: "/img/home_new/Teckstack/hop.png",
    title: 'Hop',
  }
]

const list3 = [
  {
    key: "1",
    src: "/img/home_new/Teckstack/ethereum.png",
    title: 'Ethereum',
  },
  {
    key: "2",
    src: "/img/home_new/Teckstack/solana.png",
    title: 'SOLANA',
  },
  {
    key: "3",
    src: "/img/home_new/Teckstack/arweave.png",
    title: 'arweave',
  },
  {
    key: "4",
    src: "/img/home_new/Teckstack/optimism.png",
    title: "Optimism",
  },
  {
    key: "5",
    src: "/img/home_new/Teckstack/graph.png",
    title: 'Graph',
  },
  {
    key: "6",
    src: "/img/home_new/Teckstack/across.png",
    title: 'Across',
  }
]

function Card({ src, title }) {
  return (
    <div className='keen-slider__slide df px-2.5 py-1 rounded-[10px] bg-[#272727]'>
      <img
        className='w-[10px] xs:w-[13px] sm:w-[17px] md:w-[20px] xl:w-[22px] '
        src={src}
        alt=''
      />
      <p className="text-[8px] xs:text-xs sm:text-sm md:text-lg lg:text-xl">
        {title}
      </p>
    </div>
  )
}

const animation = { duration: 40000, easing: (t) => t }

function Slider({ list = [], className = "", perView = 5, rtl = false }) {
  const [sliderRef] = useKeenSlider({
    rtl,
    loop: true,
    drag: false,
    renderMode: "performance",
    slides: {
      spacing: 40,
      perView,
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
      {list.map(firstline => <Card {...firstline} />)}
    </div>
  )
}

function Tools() {
  return (
    <div className="max-w-7xl mx-auto mb-8 sm:mb-12 mdb:mb-16 text-center">
      <div className='mb-2 text-sm xs:text-base sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] text-[#E8E00E] uppercase font-bold'>
        Utilizing cutting-edge tools
      </div>

      <div className='mb-4 mdb:mb-8 text-[7px] xs:text-[10px] sm:text-xs md:text-sm lg:text-lg'>
        We build for your users, regardless of platform, language, or protocol limitations.
      </div>

      <div className="home-tools max-w-5xl mx-auto relative">
        <Slider list={list1} perView={4} />
        <Slider rtl list={list2} className=" my-3 sm:my-6" />
        <Slider list={list3} />
      </div>
    </div>
  )
}

export default Tools