import { useState } from "react"

const list = [
  {
    key: "1",
    src: "/img/home_new/Our services/Blockchain consulting.png",
    title: "Blockchain Consulting",
    para: "Blockchain is a smarter way to create value.We consult on blockchain technology and how you can use it to elevate your organisation.Whether you’re a Web3 startup looking for advise on how to structure you DAO governance or an enterprise organisation looking to understand how your company can adopt blockchain technology.",
  },
  {
    key: "2",
    src: "/img/home_new/Our services/POC Development.png",
    title: "POC Development",
    para: "Proof-of-Concept (POC) development is crucial for validating your blockchain ideas. Our expert team can assist you in developing robust POC solutions.",
  },
  {
    key: "3",
    src: "/img/home_new/Our services/Metaverse development.png",
    title: "Metaverse Development",
    para: "Enter the exciting world of the metaverse with our Metaverse Development services. We help build immersive and interactive experiences in virtual environments.",
  },
  {
    key: "4",
    src: "/img/home_new/Our services/NFT Development.png",
    title: "NFT Development",
    para: "Unlock the potential of Non-Fungible Tokens (NFTs) with our NFT Development services. We assist in creating and deploying unique and secure digital assets.",
  },
  {
    key: "5",
    src: "/img/home_new/Our services/Smart Contract development.png",
    title: "Smart Contract Development",
    para: "Smart contracts automate processes, enhance security, and eliminate intermediaries. Our team specializes in developing secure and efficient smart contract solutions.",
  },
  {
    key: "6",
    src: "/img/home_new/Our services/Token Development.png",
    title: "Token Development",
    para: "Tokenize your assets or launch your own cryptocurrency with our Token Development services. We ensure compliance, security, and seamless integration of tokens.",
  },
  {
    key: "7",
    src: "/img/home_new/Our services/Blockchain Integration.png",
    title: "Blockchain Integration",
    para: "Seamlessly integrate blockchain technology into your existing systems with our Blockchain Integration services. Enhance transparency, security, and efficiency.",
  },
]

function Card({ src, title, para, active, setActive }) {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
      <div>
        <button
          className={`portfolio-btn mb-4 text-[10px] xs:text-xs sm:text-sm md:text-lg lg:text-[26px] xl:text-[28px] font-bold ${title === active ? "active" : ""}`}
          onClick={() => setActive(title)}
        >
          {title}
        </button>
      </div>

      <div className={`p-4 lg:h-full xl:h-[110%] xl:-my-20 lg:max-w-md mdb:p-6 mb-4 bg-[#0F161B] border border-primary-900 rounded-[10px] lg:absolute lg:top-0 lg:left-1/2 ${active !== title ? "hidden" : ""}`}>
        <img
          className="w-[35px] xs:[46px] sm:w-[58px] md:w-[65px] lg:w-[80px] xl:w-[100px]"
          src={src}
          alt=""
        />
        <p className="my-2 md:my-3 text-[10px] xs:text-sm md:text-lg lg:text-[26px] xl:text-[28px] font-bold text-[#E8E00E]">
          {title}
        </p>
        <p className="text-[9px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {para}
        </p>
      </div>
    </div>
  )
}

function Products() {
  const [active, setActive] = useState("Blockchain Consulting")

  return (
    <div className='pad-main-1-3'>
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-2 text-sm xs:text-base sm:text-2xl md:text-[28px] lg:text-[32px] xl:txet-[36px] font-bold uppercase text-[#E8E00E]">
          Our Services
        </h2>
        <div className="mb-4 mdb:mb-8 text-[8px] xs:text-[10px] sm:text-sm md:text-lg">
          we offer a range of expert blockchain services to help startups and <br />
          enterprises leverage the power of this transformative technology.
        </div>

        <div className="relative">
          {list.map(l => <Card {...l} active={active} setActive={setActive} />)}
        </div>
      </div>
    </div>
  )
}

export default Products