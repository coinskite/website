const data = [
  {
    title: "STRATEGY",
    para: <>Develop a clear plan to achieve business <br /> goals and drive success through effective <br /> market analysis and resource optimization.</>,
    list: [
      "Communication Planning",
      "UI/UX Analysis",
      "Product Ideation",
      "User Insights & Research",
      "Content Strategy & Copywriting",
      "Team Collaborations & Partnerships",
    ]
  },
  {
    title: "UX/UI DESIGN",
    para: <>Create intuitive and user-friendly interfaces <br /> that enhance the overall experience and  <br /> engagement for your customers</>,
    list: [
      "User-centered design",
      "Responsive wireframe design",
      "Visual interface design",
      "Interactive prototyping",
      "Design guidelines development",
      "User research and testing workshops",
    ]
  },
  {
    title: "DEVELOPMENT",
    para: <>Rapidly build and deploy scalable software <br />solutions that can adapt to changing business <br /> needs and requirements</>,
    list: [
      "Smart Contract Creation & Audit",
      "Private Blockchain Solutions",
      "Blockchain Integration Services",
      "DEFI",
      "Software as a service",
      "Blockchain Platform Development",
    ]
  },
]

function Card({ title = "", para = "", list = [] }) {
  return (
    <div className="grid grid-cols-2 mb-4 md:mb-6 lg:mb-8 gap-4 p-6 bg-[#0F161B]">
      <div>
        <h3 className="text-[15px] xs:text-[20px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-bold text-primary-900">
          {title}
        </h3>

        <p className="text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-[18px] xl:text-[20px] font-medium">
          {para}
        </p>
      </div>

      <div className="p-4 bg-[#152A39] border border-primary-900">
        <ul>
          {
            list.map(li => (
              <li
                key={li}
                className="mb-1 text-[6px] xs:text-[8px] sm:text-xs md:text-base lg:text-xl xl:text-[28px] font-medium"
              >
                {li}
              </li>
            ))
          }
        </ul>

        <p className="mb-1 text-[6px] xs:text-[8px] sm:text-[13px] md:text-[20px] lg:text-[25px] xl:text-3xl font-semibold leading-none text-primary-900">Timeline</p>
        <button className="block px-2 py-1 text-[6px] xs-text-[6px] sm:text-[10px] md:text-[15px] lg:text-xl xl:text-[23px] font-medium text-[#0F161B] bg-primary-900">
          2+ weeks
        </button>
      </div>
    </div>
  )
}

function Engagement() {
  return (
    <div className="pad-main-3 text-white bg-[#222531] relative isolate">
      <h2 className="mb-4 text-[15px] xs:text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] text-primary-900 text-center font-bold">
        Our Engagement Models
      </h2>

      <img className=" w-40 sm:w-60 md:w-auto absolute right-0 top-1/2 -translate-y-1/2 -z-[1]" src="./img/service/circle.png" alt="circle" />

      {
        data.map(d => (
          <Card key={d.title} {...d} />
        ))
      }
    </div>
  )
}

export default Engagement