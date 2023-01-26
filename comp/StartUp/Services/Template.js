import { Fragment } from "react"

function Template({ src, title1, desc1, list, desc2 }) {
  return (
    <div className="flex items-start gap-4 md:gap-8 lg:gap-12">
      <img
        className="w-32 xs:w-36 sm:w-44 md:w-56 lg:w-64 xl:w-80"
        src={src}
        alt="Service"
      />

      <div className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
        <h3 className="text-[10px] xs:text-[15px] sm:text-xl md:text-[25px] lg:text-3xl xl:text-[35px] font-bold text-[#22C954]">
          {title1}
        </h3>
        <p className="mb-4 md:mb-6 xl:mb-8 text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
          {desc1}
        </p>

        {
          list.map(l => (
            <Fragment key={l.title}>
              <h5 className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold text-[#22C954]">
                {l.title}
              </h5>

              <ol className="text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
                {l.list.map(l => (
                  <li key={l}>
                    {l}
                  </li>
                ))}
              </ol>
            </Fragment>
          ))
        }

        <p className="mb-4 md:mb-6 xl:mb-8 text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
          {desc2}
        </p>

        <button className="text-xs xs:text-base sm:text-lg md:text-xl lg:text-[25px] xl:text-[30px] font-bold text-[#22C954]">
          Learn more {`>`}
        </button>
      </div>
    </div>
  )
}

export function SmartContract() {
  return (
    <Template
      src="./img/startup/Service.png"
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

export function DefiDevelopment() {
  return (
    <Template
      src=""
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

export function NFTDevelopment() {
  return (
    <Template
      src=""
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

export function MetaverseDevelopment() {
  return (
    <Template
      src=""
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
