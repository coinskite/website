import { useState } from 'react';

const list = [
  {
    title: "Portfolio Management",
    img: "",
    para: "We specialize in comprehensive cryptocurrency portfolio management, designed to optimize returns and minimize risks. Our team of experts develops personalized strategies tailored to your financial goals, ensuring a balanced and diversified portfolio. Whether you're new to crypto or a seasoned investor, we provide ongoing analysis, monitoring, and rebalancing to stay ahead of market trends",
  },
  {
    title: "Crypto Security",
    img: "",
    para: "We specialize in comprehensive cryptocurrency portfolio management, designed to optimize returns and minimize risks. Our team of experts develops personalized strategies tailored to your financial goals, ensuring a balanced and diversified portfolio. Whether you're new to crypto or a seasoned investor, we provide ongoing analysis, monitoring, and rebalancing to stay ahead of market trends",
  },
  {
    title: "Organization Advisory Services ",
    img: "",
    para: "We specialize in comprehensive cryptocurrency portfolio management, designed to optimize returns and minimize risks. Our team of experts develops personalized strategies tailored to your financial goals, ensuring a balanced and diversified portfolio. Whether you're new to crypto or a seasoned investor, we provide ongoing analysis, monitoring, and rebalancing to stay ahead of market trends",
  },
]

function Specialities() {
  const [selected, setSelected] = useState("Portfolio Management")

  const found = list.find(l => l.title === selected)

  return (
    <div className="pad-main-3 bg-[#111112] text-white">
      <div className="grid grid-cols-2 gap-4 lg:w-auto xl:max-w-7xl mx-auto">
        <div>
          <div className='mb-6'>
            <h2 className="mb-4 text-[30px] font-semibold text-[#E7E00E]">
              SPECIALTIES
            </h2>
            <p className="text-lg font-medium">Investing in crypto is scary.We can help.</p>
          </div>

          <div>
            {
              list.map(l => (
                <div
                  key={l.title}
                  onClick={() => setSelected(l.title)}
                  className={`w-80 mb-4 px-2 border rounded ${l.title === selected ? " bg-[#152A39] border-[#22C954]" : "text-white border-transparent"}`}
                >
                  {l.title}
                </div>
              ))
            }
          </div>
        </div>

        <div className='max-w-md py-4 px-8 bg-[#152A39] border border-[#22C954] rounded'>
          <img src="/img/consulting/Cool.png" alt="" />
          <h6 className="my-2 text-lg font-semibold text-[#E7E00E]">{found?.title}</h6>
          <p className=" text-sm font-medium">{found?.para}</p>
        </div>
      </div>
    </div>
  )
}

export default Specialities