const data = [
  {
    title: "FINANCE",
    para: "Financial transactions are vulnerable to fraud and errors, which can damage trust and increase costs. Additionally, there are often inefficiencies in financial processes that can lead to slow and costly transactions.",
    img: "./img/solution/Finance.png",
  },
  {
    title: "INSURANCE",
    para: "Insurance companies face inefficiencies in claims processing and policy authenticity verification, which can lead to customer dissatisfaction and operational costs. The industry is also prone to fraud, which can damage trust and increase costs.",
    img: "./img/solution/Insurance.png",
  },
  {
    title: "REAL ESTATE",
    para: "Property transactions can be slow and costly due to the involvement of intermediaries and large amounts of paperwork. There is also a lack of transparency and security in property records, which can lead to errors and disputes.",
    img: "./img/solution/Real estate.png",
  },
  {
    title: "MEDIA",
    para: "Digital content creators struggle with distribution and rights management, which can lead to intellectual property violations and unfair compensation. Additionally, there are issues with monetization and the sustainability of the digital content ecosystem.",
    img: "./img/solution/Media.png",
  },
  {
    title: "SUPPLY CHAIN",
    para: "There is often a lack of visibility and traceability in the supply chain industry, which can lead to inefficiencies and errors. Additionally, there are issues with fraud and counterfeiting in the supply chain, which can damage trust and increase costs..",
    img: "./img/solution/Supplychain.png",
  },
  {
    title: "LAW",
    para: "The legal industry deals with large amounts of paperwork and the risk of errors in document management, which can lead to costly delays. There are also issues with the transparency and efficiency of legal processes.",
    img: "./img/solution/Law.png",
  },
  {
    title: "SPORTS",
    para: "The sports industry is vulnerable to counterfeiting and fraud in the market for sports memorabilia and collectibles. This can lead to a lack of trust and reduced demand for these items.",
    img: "./img/solution/Sports.png",
  },
  {
    title: "HEALTHCARE",
    para: "BlockThe healthcare industry faces challenges with the security and interoperability of electronic health records (EHRs), which can lead to data breaches and inefficiencies. There is also a lack of trust in the system, as patients may be concerned about the privacy of their personal health information.",
    img: "./img/solution/Healthcare.png",
  },
  {
    title: "GOVERNMENT",
    para: "Governments often deal with large amounts of paperwork and administrative processes, which can lead to inefficiencies and a lack of transparency. There are also issues with the security and integrity of government records.",
    img: "./img/solution/Government.png",
  },
  {
    title: "SOCIAL MEDIA",
    para: "Social media platforms face challenges with the monetization of user-generated content and the protection of user data privacy. There is also a lack of transparency in the algorithms that govern the distribution of content on these platforms..",
    img: "./img/solution/Social media.png",
  }
]

function Sect({ title, para, img }) {
  return (
    <div className='dfc items-center p-4 md:p-6 text-[#F5F5F5] border border-[#22C954] bg-[#0F161B] rounded-lg'>
      <img className="h-20 md:h-24" src={img} alt={title} />
      <h6 className="relative my-2 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[25px] xl:text-3xl font-extrabold">
        {title}
        <span className="h-px w-full absolute bottom-0 left-0 bg-[#22C954]"></span>
      </h6>
      <p className="mt-2 mb-4 text-[6px] sm:text-[8px] lg:text-[10px] xl:text-xs font-semibold">{para}</p>
      <button className="mt-auto py-2 px-8 mx-auto text-[7.6px] md:text-[8px] lg:text-[10px] font-semibold text-white bg-[#22C954] rounded-full">
        Learn more {`>`}
      </button>
    </div>
  )
}

function Main() {
  return (
    <div className='pad-main-3 text-white bg-[#222531]'>
      <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        {
          data.map(d => (
            <Sect
              key={d.title}
              title={d.title}
              para={d.para}
              img={d.img}
            />
          ))
        }
      </div>
      <div className='pad-main-3 grid grid-cols-2  bg-[#CAFCD9]'><p>Explore the possibilities of blockchain with Coinskite</p><button>Contact Us</button></div>
    </div>
  )
}

export default Main