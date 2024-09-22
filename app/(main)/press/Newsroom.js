const data = [
  {
    id: "1",
    detail: "Coinskite: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
  },
  {
    id: "2",
    detail: "Coinskite: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
  },
  {
    id: "3",
    detail: "Coinskite: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
  },
  {
    id: "4",
    detail: "Coinskite: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
  },
  {
    id: "5",
    detail: "Coinskite: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
  },
  {
    id: "6",
    detail: "Coinskite: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
  },
]

function Card({ detail }) {
  return (
    <div className="p-4 bg-[#0F161B]">
      <p className="mb-8 text-[8px] md:text-[9px] lg:text-[13px] xl:text-base font-medium">
        {detail}
      </p>

      <button className="df text-[8px] md:text-[13px] lg:text-[15px] xl:text-[22px] font-semibold">
        Read the article
        <img
          className="w-2 lg:w-3 xl:w-4 mt-0.5"
          src="./img/press/arrow.png"
          alt="arrow"
        />
      </button>
    </div>
  )
}

function Newsroom() {
  return (
    <div className="pad-main-3 text-primary-900 bg-[#222531]">
      <h2 className="mb-4 text-[32px] sm:text-[38px] md:text-[40px] lg:text-6xl font-extrabold text-center">
        Newsroom
      </h2>

      <div className="grid grid-cols-2 gap-4 md:gap-8 md:max-w-4xl md:mx-auto">
        {
          data.map(d => (
            <Card
              key={d.id}
              detail={d.detail}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Newsroom