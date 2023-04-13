const list = [
  {
    key: "1",
    src: "",
    title: "The Metaverse Economy : How Blockchain and Virtual Reality are Revolutionizing Business",
    link: "",
  },
  {
    key: "2",
    src: "",
    title: "Web3.0: The Future of the Internet and How Blockchain is Driving It",
    link: "",
  },
  {
    key: "3",
    src: "",
    title: "Crypto Trading Strategies: Maximizing Profits and Minimizing Risks",
    link: "",
  },
  {
    key: "4",
    src: "",
    title: "Bitcoin and Beyond: The Rise of Digital Currency and its Impact on Society",
    link: "",
  },
  {
    key: "5",
    src: "",
    title: "The Legal Landscape of Cryptocurrency: Navigating Regulations and Compliance",
    link: "",
  },
  {
    key: "6",
    src: "",
    title: "Blockchain for Dummies:A Comprehensive Guide to Understanding Distributed Ledger Technology",
    link: "",
  },
  {
    key: "7",
    src: "",
    title: "Metaverse Marketing: How Brands Can Succeed in Virtual Worlds",
    link: "",
  },
  {
    key: "8",
    src: "",
    title: "The Future of Gaming: How Blockchain and NFTs are Disrupting the Video Game Industry",
    link: "",
  },
]

function Resource() {
  return (
    <div>
      Resource
      {
        list.map(l => (
          <div key={l.key}>
            <img src={l.src} alt="" />
            <p>{l.title}</p>
            <a href="/">
              {/* {l.link} */}
              Get the book
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default Resource