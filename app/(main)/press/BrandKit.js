const data = [
  {
    img: "./img/press/logos/WLC.png",
    title: "White horizontal logo"
  },
  {
    img: "./img/press/logos/GLC.png",
    title: "Green horizontal logo"
  },
  {
    img: "./img/press/logos/Green.png",
    title: "Symbol"
  },
  {
    img: "./img/press/logos/coinskite.png",
    title: "Wordmark"
  },
  {
    img: "./img/press/logos/whiteV.png",
    title: "White Vertical logo"
  },
  {
    img: "./img/press/logos/GreenV.png",
    title: "Green Vertical logo"
  },
]

function Card({ img, title }) {
  return (
    <div>
      <div className="df flex-col justify-center h-36 md:h-40 lg:h-52 xl:h-64 p-4 md:p-8 lg:p-12 bg-[#0F161B] border border-primary-900 rounded-lg">
        <img className="max-h-8 md:max-h-12 lg:max-h-16" src={img} alt={title} />
      </div>

      <div className="mt-1 text-[6px] sm:text-[10px] md:text-[13px] lg:text-[17px] xl:text-[22px] font-medium text-white text-center">
        {title}
      </div>
    </div>
  )
}

function BrandKit() {
  return (
    <div className="pad-main-3 bg-[#222531]">
      <h2 className="mb-4 text-3xl sm:text-[40px] md:text-[50px] lg:text-6xl xl:text-[70px] font-extrabold text-primary-900 text-center">
        Brand Kit
      </h2>

      <div className="grid grid-cols-3 gap-6 lg:gap-12 lg:max-w-4xl lg:mx-auto">
        {
          data.map(d => (
            <Card key={d.title}{...d} />
          ))
        }
      </div>

      <button className="block mx-auto mt-4 lg:mt-8 px-4 py-1 lg:px-8 text-[8px] sm:text-sm md:text-lg lg:text-[22px] xl:text-[25px] text-white bg-primary-900 rounded">
        Download All
      </button>
    </div>
  )
}

export default BrandKit