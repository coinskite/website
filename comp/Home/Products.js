import { useState } from "react"

const list = [
  {
    key: "1",
    src: "",
    title: "Blockchain Consulting",
    para: "Blockchain is a smarter way to create value.We consult on blockchain technology and how you can use it to elevate your organisation.Whether you’re a Web3 startup looking for advise on how to structure you DAO governance or an enterprise organisation looking to understand how your company can adopt blockchain technology.",
  },
  {
    key: "2",
    src: "",
    title: "POC Development",
    para: "Proof-of-Concept (POC) development is crucial for validating your blockchain ideas. Our expert team can assist you in developing robust POC solutions.",
  },
  {
    key: "3",
    src: "",
    title: "Metaverse Development",
    para: "Enter the exciting world of the metaverse with our Metaverse Development services. We help build immersive and interactive experiences in virtual environments.",
  },
  {
    key: "4",
    src: "",
    title: "NFT Development",
    para: "Unlock the potential of Non-Fungible Tokens (NFTs) with our NFT Development services. We assist in creating and deploying unique and secure digital assets.",
  },
  {
    key: "5",
    src: "",
    title: "Smart Contract Development",
    para: "Smart contracts automate processes, enhance security, and eliminate intermediaries. Our team specializes in developing secure and efficient smart contract solutions.",
  },
  {
    key: "6",
    src: "",
    title: "Token Development",
    para: "Tokenize your assets or launch your own cryptocurrency with our Token Development services. We ensure compliance, security, and seamless integration of tokens.",
  },
  {
    key: "7",
    src: "",
    title: "Blockchain Integration",
    para: "Seamlessly integrate blockchain technology into your existing systems with our Blockchain Integration services. Enhance transparency, security, and efficiency.",
  },
]

function Card({ src, title, para, active, setActive }) {
  return (
    <div>
      <div>
        <button
          className={`portfolio-btn mb-4 ${title === active ? "active" : ""}`}
          onClick={() => setActive(title)}
        >
          {title}
        </button>
      </div>

      <div className={`p-4 mb-4 bg-[#0F161B] border border-primary-900 rounded-[10px] ${active !== title ? "hidden" : ""}`}>
        <img
          src={src}
          alt=""
        />
        <p>
          {title}
        </p>
        <p>
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
        <h2>
          Our Services
        </h2>
        <div>
          we offer a range of expert blockchain services to help startups and enterprises leverage the power of this transformative technology.
        </div>

        {list.map(l => <Card {...l} active={active} setActive={setActive} />)}
      </div>
    </div>
  )
}

export default Products