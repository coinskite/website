const list = [
  {
    id: "1",
    src: "/img/partner/market.png",
    title: "GO-TO MARKET Support",
    para: "our expert go-to-market strategy and drive success for your product. From market research and positioning to messaging and promotion, we have the tools and expertise to help you succeed in the market.",
  },
  {
    id: "2",
    src: "/img/partner/long-term-growth.png",
    title: "Long-term growth",
    para: "Develop a long-term growth strategy that aligns with their business goals.",
  },
  {
    id: "3",
    src: "/img/partner/training-growth.png",
    title: "Training and education:",
    para: "Access training and education resources to help them effectively implement and utilize your company's technology",
  },
  {
    id: "4",
    src: "/img/partner/revenue.png",
    title: "Increased revenue",
    para: "Partners can increase their revenue by offering your company's products or services to their customers",
  },
  {
    id: "5",
    src: "/img/partner/customized-solutions.png",
    title: "Customized solutions",
    para: "Your company can offer customized solutions to its partners, tailored to their specific business needs and goals",
  },
  {
    id: "6",
    src: "/img/partner/competitive-advantage.png",
    title: "Competitive advantage",
    para: "Partners can gain a competitive advantage in their market by partnering with your company and offering unique products or services",
  },
]

function Card({ src, title, para }) {
  return (
    <div className="text-center">
      <img
        className="mx-auto w-8 xs:w-10 sm:w-14 md:w-16 lg:w-[86px] xl:w-[106px]"
        src={src}
        alt=""
      />

      <p className="text-[8px] xs:text-[10px] sm:text-sm md:text-lg lg:text-xl xl:text-[25px] font-bold my-2">
        {title}
      </p>

      <p className="text-[4px] xs:text-[5px] sm:text-[6px] md:text-[8px] lg:text-xs xl:text-[15px] font-normal">
        {para}
      </p>
    </div>
  )
}

function Benefits() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-2 text-[15px] xs:text-xl sm:text-[25px] md:text-[35px] lg:text-[40px] font-semibold text-primary-900 text-center">
          Partner Benefits
        </h2>

        <div className="mb-4 text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-xl text-center">
          Collaborating with Coinskite offers numerous benefits for your business. From access to cutting-edge technology and expert guidance, to customized solutions and increased visibility, there are many advantages to partnering with us
        </div>

        <div className="grid grid-cols-3 gap-4">
          {list.map(l => <Card key={l.id} {...l} />)}
        </div>
      </div>
    </div>
  )
}

export default Benefits