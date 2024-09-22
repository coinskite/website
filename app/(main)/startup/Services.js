"use client";
import { useState } from "react";
import Template from './Template';

const data = [
  {
    title: "Smart contract development & Audit",
    img: "/img/startup/expertise/top/smart.png",
    id: 1
  },
  {
    title: "Defi development",
    img: "/img/startup/expertise/top/defi.png",
    id: 2
  },
  {
    title: "NFT Marketplace",
    img: "/img/startup/expertise/top/nft.png",
    id: 3
  },
  {
    title: "Metaverse Development",
    img: "/img/startup/expertise/top/meta.png",
    id: 4
  },
]

function SmartContract() {
  return (
    <Template
      src="/img/startup/expertise/smart.png"
      title1="Smart Contract Development & Audit"
      desc1="We provide comprehensive smart contract services that help businesses take full advantage of the benefits of blockchain technology. Whether you are looking to develop new smart contracts or audit existing ones, our team of experts has the knowledge and experience to help you succeed"
      list={[
        {
          title: "Our smart contract development services include:",
          list: [
            "Custom smart contract development",
            "Smart contract deployment and maintenance",
            "Integration of smart contracts with existing systems"
          ]
        },
        {
          title: "Our smart contract audit services include:",
          list: [
            "Security and vulnerability assessment",
            "Code review and optimization",
            "Functional testing",
            "Compliance testing",
            "Integration testing",
          ]
        }
      ]}
      desc2="We use the latest development tools and technologies to create smart contracts that are secure, transparent, and efficient. Our team is also experienced in working with a variety of blockchain platforms, including Ethereum, EOS, and Hyperledger"
    />
  )
}

function DefiDevelopment() {
  return (
    <Template
      src="/img/startup/expertise/defi.png"
      title1="Defi Development"
      desc1="we understand that startups are often at the forefront of innovation and that Decentralized Finance (DeFi) is one of the most exciting and rapidly-evolving areas of blockchain technology. That's why we offer comprehensive blockchain DeFi development services to startups looking to leverage the power of blockchain technology to create new financial products and services."
      list={[{
        title: "Our Defi development services include:",
        list: [
          "Decentralized lending and borrowing platforms",
          "Decentralized exchanges",
          "Decentralized prediction markets"
        ]
      }]}
      desc2="We work closely with our clients to understand their unique business needs and goals and help them identify the best DeFi solutions for their specific use cases. Our team is also experienced in working with a variety of blockchain platforms, including Ethereum, Binance Smart Chain, and Polygon."
    />
  )
}

function NFTDevelopment() {
  return (
    <Template
      src="/img/startup/expertise/nft.png"
      title1="NFT Development"
      desc1="Non-Fungible Tokens (NFTs) are becoming an increasingly popular way for startups to monetize digital assets and create new business models. That's why we offer comprehensive NFT-related development services to startups looking to leverage the power of blockchain technology to create NFT marketplaces, mint and sell NFTs, and create other NFT-based solutions"
      list={[{
        title: "Our NFT development services include:",
        list: [
          "NFT marketplace development",
          "NFT minting and issuance",
          "NFT wallet development",
          "NFT-based gaming platforms",
          "NFT-based social media platforms",
          "NFT-based data storage solutions",
        ]
      }]}
      desc2="By choosing Coinskite for your NFT marketplace and NFT-related development needs, you can trust that you are getting the best advice and guidance on how to successfully implement blockchain technology in your startup"
    />
  )
}

function MetaverseDevelopment() {
  return (
    <Template
      src="/img/startup/expertise/meta.png"
      title1="Metaverse Development"
      desc1="Metaverse is the next frontier of digital innovation, and startups are well-positioned to capitalize on this emerging technology. That's why we offer comprehensive Metaverse development services to startups looking to create immersive digital experiences, build new business models, and establish a presence in this rapidly-evolving space"
      list={[{
        title: "We provide a wide range of development services, including:",
        list: [
          "Metaverse marketplace development",
          "Metaverse world creation",
          "Metaverse-based gaming platforms",
          "Metaverse-based social media platforms",
          "Metaverse-based NFTs",
          "Metaverse-based Virtual Reality (VR) and Augmented Reality (AR) applications",
        ]
      }]}
      desc2="We work closely with our clients to understand their unique business needs and goals and help them identify the best Metaverse-based solutions for their specific use cases. Our team is also experienced in working with a variety of blockchain platforms, such as Ethereum, EOS, and WAX."
    />
  )
}

function Services() {
  const [selected, setSelected] = useState(1)

  return (
    <div className="pad-main-3 text-white bg-[#222531]">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-2 md:mb-4 text-[15px] xs:text-xl md:text-[25px] lg:text-[35px] xl:text-[40px] font-semibold text-[#22C954] text-center">
          Our Expertise at Your Service
        </h2>
        <div className="text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg text-center">
          From smart contract development to blockchain integration. Our team is here to put our skills at your service and drive your business forward with the power of blockchain technology
        </div>

        <div className="df no-scroll-bar gap-6 sm:gap-8 md:gap-12 lg:gap-16 my-4 md:my-6 xl:my-8 border-b border-[#E5E8ED] overflow-x-auto">
          {
            data.map(d => (
              <button
                key={d.id}
                className={`df min-w-[120px] h-8 sm:h-12 md:h-14 lg:h-16 xl:h-20 px-0 border-b-2 rounded-none text-left ${selected === d.id ? "border-primary-900" : "opacity-60 border-transparent hover:opacity-100"}`}
                onClick={() => setSelected(d.id)}
              >
                <img className="w-3 xs:w-4 sm:w-5 md:w-6 lg:w-8 rounded-full" src={d.img} alt={d.title} />
                <span className="text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl font-semibold">{d.title}</span>
              </button>
            ))
          }
        </div>

        {selected === 1 && <SmartContract />}
        {selected === 2 && <DefiDevelopment />}
        {selected === 3 && <NFTDevelopment />}
        {selected === 4 && <MetaverseDevelopment />}
      </div>

      <div className="mt-6 md:mt-8 -mb-2 text-[10px] xs:text-[15px] sm:text-xl md:text-[25px] lg:text-[32px] xl:text-[40px] font-bold text-[#22C954] text-center">
        What makes CoinSkite the top choice for startups?
      </div>
    </div>
  )
}

export default Services