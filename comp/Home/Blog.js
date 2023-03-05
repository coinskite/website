const list = [
  {
    key: "1",
    src: "./img/home/new/Blog1.png",
    detail: "How is Web3 shaping the future of the internet and technology as a whole?",
  },
  {
    key: "2",
    src: "./img/home/new/Blog2.png",
    detail: "What are NFTs and how do they differ from traditional cryptocurrencies?",
  },
  {
    key: "3",
    src: "./img/home/new/Blog3.png",
    detail: "What is the metaverse and how does it differ from the real world?",
  },
]

function Card({ src, detail }) {
  return (
    <div>
      <img src={src} alt="" />
      <p>
        {detail}
      </p>
    </div>
  )
}

function Blog() {
  return (
    <div className="pad-main-3 2xl:py-14 blog-bg bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary-900 text-center">
          Find out what new at Coinskite
        </h1>

        <div className="grid grid-cols-3 gap-8 pad-main-3">
          {list.map(l => <Card {...l} />)}
        </div>
      </div>
    </div>
  )
}

export default Blog