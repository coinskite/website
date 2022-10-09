const data = [
  {
    title: "FINANCE",
    para: "Payments and money transfers made on the blockchain are faster and more traceable than in traditional bankingWhen information flows through different financial intermediaries, there is a risk of interception of that information, raising the possibility of fraud.",
    img: "./img/solution/Finance.png",
  },
  {
    title: "INSURANCE",
    para: "Blockchain has the ability to help automate claims functions by verifying coverage between companies and reinsurers It will also automate payments between parties for claims and thus lower administrative costs for insurance companies.",
    img: "./img/solution/Insurance.png",
  },
  {
    title: "REAL ESTATE",
    para: "Blockchain technology has impacted the real estate industry in a variety of ways,including offering a new means for buyers and sellers to connect with one another.Blockchain could be used to cut intermediaries out of the real estate transaction process, thereby reducing costs.",
    img: "./img/solution/Real estate.png",
  },
  {
    title: "MEDIA",
    para: "The decentralized structure of blockchain could enable content creators—such as musicians or writers—to directly distribute their work to consumers, by passing traditional distribution channels and leaving a larger share of revenue for content creators themselves",
    img: "./img/solution/Media.png",
  },
  {
    title: "SUPPLY CHAIN",
    para: "Blockchain can enable more transparent and accurate end-to-end tracking in the supply chain: Organizations can digitize physical assets and create a decentralized immutable record of all transactions, making it possible to track assets from production to delivery or use by end user.",
    img: "./img/solution/Supplychain.png",
  },
  {
    title: "LAW",
    para: "Blockchain may change how law firms conduct a multitude of services. Everything from escrow management to contract and transactional processes are already adapting and leveraging these tools, including: Automated Settlements of Security Transactions",
    img: "./img/solution/Law.png",
  },
  {
    title: "SPORTS",
    para: "Blockchain-based games can be programmed with tokenized digital assets. These digital assets can be traded within a game or externally on the public market. Blockchain technology can also create real-time sports betting with provably fair outcomes.",
    img: "./img/solution/Sports.png",
  },
  {
    title: "HEALTHCARE",
    para: "Blockchain has a wide range of applications and uses in healthcare. The ledger technology facilitates the secure transfer of patient medical records, manages the medicine supply chain and helps healthcare researchers unlock genetic code.",
    img: "./img/solution/Healthcare.png",
  },
  {
    title: "GOVERNMENT",
    para: "By capturing votes as transactions through a blockchain, governments and voters would have a verifiable audit trail, ensuring no votes are changed or removed and no illegitimate votes are added",
    img: "./img/solution/Government.png",
  },
  {
    title: "SOCIAL MEDIA",
    para: "How does Blockchain technology affect society? With its tracked, audited, and publicly communicated information, blockchain may be able to rebuild those bridges between centralized systems and the people they serve. Verifiable timestamps, geolocations, and supply-chain records can help citizens decipher the truth.",
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
    </div>
  )
}

export default Main