const data = [
  {
    img: "./img/startup/Industries/finance.png",
    title: "Finance"
  },
  {
    img: "./img/startup/Industries/media.png",
    title: "Media"
  },
  {
    img: "./img/startup/Industries/Digital.png",
    title: "Digital Identity"
  },
  {
    img: "./img/startup/Industries/Law.png",
    title: "Law"
  },
  {
    img: "./img/startup/Industries/Healthcare.png",
    title: "Healthcare"
  },
  {
    img: "./img/startup/Industries/sports.png",
    title: "Sports"
  },
  {
    img: "./img/startup/Industries/Logistics.png",
    title: "Logistics"
  },
  {
    img: "./img/startup/Industries/Government.png",
    title: "Government"
  },
  {
    img: "./img/startup/Industries/Social.png",
    title: "Social Media"
  },
  {
    img: "./img/startup/Industries/real.png",
    title: "Real Estate"
  },
  {
    img: "./img/startup/Industries/insurance.png",
    title: "Insurance"
  },
  {
    img: "./img/startup/Industries/supply.png",
    title: "Supply Chain"
  },
]

function Industries() {
  return (
    <>
      <h2 className="py-4 text-xl sm:text-3xl md:text-[40px] lg:text-[45px] xl:text-[50px] font-semibold bg-[#222531] text-[#22C954] text-center">Industries</h2>

      <div className="pad-main-3 text-[#031B4E] bg-[#CAFCD9]">
        <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-6 gap-4 sm:gap-8 text-xs md:text-[15px] xl:text-[25px] font-semibold">
          {
            data.map(d => (
              <div key={d.title}>
                <img className="h-10 xs:h-12 mx-auto" src={d.img} alt={d.title} />
                <p className="my-1 md:my-2 text-center">{d.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Industries