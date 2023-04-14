const list = [
  {
    key: "1",
    src: "img/ebook/Metaverse.png",
    subtitle:"The Metaverse Economy :",
    title: " How Blockchain and Virtual Reality are Revolutionizing Business",
    link: "",
  },
  {
    key: "2",
    src: "img/ebook/web3.png",
    subtitle:"Web3.0:",
    title: "The Future of the Internet and How Blockchain is Driving It",
    link: "",
  },
  {
    key: "3",
    src: "img/ebook/crypto-trading.png",
    subtitle:"Crypto Trading Strategies:",
    title: " Maximizing Profits and Minimizing Risks",
    link: "",
  },
  {
    key: "4",
    src: "img/ebook/Bitcoin.png",
    subtitle:"Bitcoin and Beyond:",
    title: " The Rise of Digital Currency and its Impact on Society",
    link: "",
  },
  {
    key: "5",
    src: "img/ebook/Landscape.png",
    subtitle:"The Legal Landscape of Cryptocurrency:",
    title: " Navigating Regulations and Compliance",
    link: "",
  },
  {
    key: "6",
    src: "img/ebook/Blockchain.png",
    subtitle:"Blockchain for Dummies:",
    title: "A Comprehensive Guide to Understanding Distributed Ledger Technology",
    link: "",
  },
  {
    key: "7",
    src: "img/ebook/marketing.png",
    subtitle:"Metaverse Marketing:",
    title: "How Brands Can Succeed in Virtual Worlds",
    link: "",
  },
  {
    key: "8",
    src: "img/ebook/game.png",
    subtitle: "The Future of Gaming:",
    title: "How Blockchain and NFTs are Disrupting the Video Game Industry",
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
  return (
    <div className="pad-main-3">
      <h1 className="text-xl ts:font-semibold xs:text-[22px] sm:text-3xl lg:text-[26px] xl:text-[40px] xl:font-semibold font-bold text-[#001377] ">Resource</h1>
      <div>
         {btns.map(b => (
          <button key={b} className="text-base sm:text-xl lg:text-sm font-semibold text-[#001377] rounded-sm hover:bg-[#22C954]">
            {b}
          </button>
         ))}
      </div>
      <div className=" lg:grid lg:grid-cols-2 gap-4">
      {
        list.map(l => (
          <div key={l.key}>
            <img src={l.src} 
            alt=""
            className=" h-[372px] xs:h-[460px] sm:h-[595px] lg:h-[600px]"
            />
            <p className="text-sm xs:text-lg sm:text-xl xl:font-normal xl:text-[22px]  text-[#001377] font-medium">{l.subtitle}</p>
            <p className="text-sm xs:text-base font-normal sm:text-lg xl:text-xl text-[#001377] ">{l.title}</p>
            <a href="/" className="text-sm xs:text-lg sm:text-xl xl:text-[22px] font-medium text-[#001168] underline">
              {/* {l.link} */}
              Get the book
            </a>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Resource