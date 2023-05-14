import React from 'react'

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
        <div className='df rounded-xl bg-[#272727]'>
            <img
                className=''
                src={src}
                alt=''
            />
            <p className="text-[8px] xs:text-xs sm:text-sm md:text-lg lg:text-xl font-normal">
                {title}
            </p>
        </div>
    )
}

function Tools() {
    return (
        <div>
            <div className='text-sm xs:text-base sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] text-[#E8E00E]  font-bold'>
                Utilizing cutting-edge tools
            </div>
            <p className='text-sm xs:text-base sm:text-xs md:text-sm lg:text-[32px] xl:text-lg text-[#E8E00E]  font-bold'>
                We build for your users, regardless of platform, language, or protocol limitations.
            </p>
            <div className='df'>
                {list1.map(firstline => <Card {...firstline} />)}
            </div>
            <div className='df'>
                {list2.map(secondline => <Card {...secondline} />)}
            </div>
            <div className='df'>
                {list3.map(thirdline => <Card {...thirdline} />)}
            </div>

        </div>
    )
}

export default Tools