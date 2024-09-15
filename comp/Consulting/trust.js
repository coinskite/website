
const list = [
  {
    title: "4",
    para: "Years of Experience",
  },
  {
    title: "120",
    para: "Clients",
  },
  {
    title: "12",
    para: "Strategic Partners",
  },
]

function Trust() {
  return (
    <div className="pad-main-3 bg-[#111112] text-white">
      <div className="lg:w-auto xl:max-w-7xl mx-auto">
        <h2 className=" text-[30px] font-semibold text-center text-[#E7E00E]">TRUST THE NUMBERS</h2>

        <div className="grid md:grid-cols-3 text-center">
          {
            list.map(l => (
              <div key={l.title}>
                <h6 className=" text-[100px] font-semibold">{l.title}</h6>
                <p className=" text-lg font-semibold">{l.para}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Trust