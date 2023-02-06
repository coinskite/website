import { useState } from "react";
import Template from '../StartUp/Template';

const data = [
  {
    title: "Private Blockchain development",
    img: "./img/enterprise/expertise/top/private.png",
    id: 1
  },
  {
    title: "Tokenization of assets",
    img: "./img/enterprise/expertise/top/token.png",
    id: 2
  },
  {
    title: "Supply chain Management",
    img: "./img/enterprise/expertise/top/supply.png",
    id: 3
  },
  {
    title: "Blockchain Integration",
    img: "./img/enterprise/expertise/top/integrate.png",
    id: 4
  },
]

function PrivateBlock() {
  return (
    <Template
      src="./img/enterprise/expertise/private.png"
      title1="Private Blockchain development"
      desc1="we understand the unique needs and challenges that enterprises face when it comes to blockchain technology. That's why we specialize in providing cutting-edge private blockchain development services to businesses looking to leverage the power of blockchain technology while maintaining control over their data."
      list={[
        {
          title: "Our private blockchain development services for enterprises include:",
          list: [
            "Custom private blockchain development",
            "Private blockchain deployment and maintenance",
            "Integration of private blockchain with existing systems",
            "Permissioned blockchain solutions",
            "Consortium blockchain solutions",
          ]
        }
      ]}
      desc2="Enterprises can trust that they are getting the best private blockchain development services on the market"
    />
  )
}

function Tokenization() {
  return (
    <Template
      src="./img/enterprise/expertise/token.png"
      title1="Tokenization of assets"
      desc1="Tokenization is a powerful way for enterprises to unlock new business opportunities and improve their operations. Tokenization is the process of creating digital tokens that represent ownership of an asset, such as a stock, bond, real estate property, artwork, etc. These tokens can then be traded, tracked, and managed on a blockchain platform."
      list={[
        {
          title: "Our team of experts has the knowledge and experience necessary to help enterprises tokenize a wide range of assets, including:",
          list: [
            "Real estate assets",
            "Artwork and collectibles",
            "Financial instruments such as stocks, bonds and derivatives",
            "Commodities such as precious metals or commodities",
            "Patents, trademarks and copyrights",
          ]
        }, {
          title: "We provide a wide range of tokenization services, including:",
          list: [
            "Token issuance and management",
            "Token trading platforms",
            "Token custody solutions",
            "Token-based fundraising",
            "Token-based compliance and regulatory solutions",
            "Token-based data storage solutions",
          ]
        }
      ]}
      desc2={
        <>
          By choosing Coinskite for your tokenization needs, you can trust that you are getting the best advice and guidance on how to successfully implement tokenization in your enterprise. Contact us today to learn more about how our tokenization services can benefit your business
          <br />
          Note: this is a general example and you may want to adjust it to better fit your company's specific services and tone.
        </>
      }
    />
  )
}

function Supply() {
  return (
    <Template
      src="./img/enterprise/expertise/supply.png"
      title1="Supply chain Management"
      desc1="Supply chain management is a critical component of any enterprise's operations, and that blockchain technology can play a key role in improving supply chain visibility, traceability, and efficiency. That's why we offer comprehensive supply chain solutions to enterprises looking to leverage the power of blockchain technology to improve their supply chain operations."
      list={[
        {
          title: "Our team of experts has the knowledge and experience necessary to help enterprises implement blockchain-based supply chain solutions that can:",
          list: [
            "Improve transparency and visibility of goods and materials as they move through the supply chain",
            "Enhance traceability and accountability of goods and materials to improve quality control and reduce fraud",
            "Automate and streamline supply chain processes to improve efficiency and reduce costs",
            "Increase collaboration and trust among supply chain partners",
          ]
        },
        {
          title: "We provide a wide range of supply chain services, including:",
          list: [
            "Supply chain platform development",
            "Smart contract development for supply chain management",
            "Supply chain analytics and reporting",
            "Supply chain security and compliance solutions",
          ]
        },
      ]}
      desc2="By choosing Coinskite for your supply chain needs, you can trust that you are getting the best advice and guidance on how to successfully implement blockchain technology in your enterprise. Contact us today to learn more about how our supply chain solutions can benefit your business."
    />
  )
}

function Blockchain() {
  return (
    <Template
      src="./img/enterprise/expertise/integrate.png"
      title1="Blockchain Integration"
      desc1="We understand that for enterprises, the key to realizing the full potential of blockchain technology is through seamless integration with existing systems and processes. That's why we offer comprehensive blockchain integration services to enterprises looking to incorporate blockchain technology into their existing operations."
      list={[
        {
          title: "Our team of experts has the knowledge and experience necessary to help enterprises integrate blockchain technology in a way that:",
          list: [
            "Enhances security, transparency and efficiency",
            "Improves data integrity and immutability",
            "Automates business processes",
            "Increases collaboration among different parties",
          ]
        },
        {
          title: "We provide a wide range of integration services, including:",
          list: [
            "Blockchain platform selection and implementation",
            "Smart contract development and integration",
            "Blockchain API development",
            "Integration with existing systems and legacy applications",
            "Data migration and management",
            "Compliance and regulatory solutions",
          ]
        },
      ]}
      desc2="By choosing Coinskite for your blockchain integration needs, you can trust that you are getting the best advice and guidance on how to successfully implement blockchain technology in your enterprise. Contact us today to learn more about how our blockchain integration services can benefit your business."
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

        {selected === 1 && <PrivateBlock />}
        {selected === 2 && <Tokenization />}
        {selected === 3 && <Supply />}
        {selected === 4 && <Blockchain />}
      </div>

      <div className="mt-6 md:mt-8 -mb-2 text-[10px] xs:text-[15px] sm:text-xl md:text-[25px] lg:text-[32px] xl:text-[40px] font-bold text-[#22C954] text-center">
        What makes CoinSkite the top choice for Enterprises?
      </div>
    </div>
  )
}

export default Services