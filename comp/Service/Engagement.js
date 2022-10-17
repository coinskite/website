const data = [
  {
    title: "STRATEGY",
    para: <>Our philosophy is-make explosives. <br /> Nobody uses medicore apps. So, we build <br /> products that move the world. Here’s how <br /> we do it</>,
    list: [
      "Communication",
      "UI/UX Research",
      "Product Concept",
      "User interviews",
      "Content strategy and copywriting in close",
      "Co-operation with our lovely mate Raj Kumar",
    ]
  },
  {
    title: "UX/UI DESIGN",
    para: <>Our philosophy is-make explosives. <br /> Nobody uses medicore apps. So, we build <br /> products that move the world. Here’s how <br /> we do it</>,
    list: [
      "User experience design",
      "Multi-platform wireframes",
      "User-interface design",
      "Prototyping",
      "Design system",
      "UX Workshops",
    ]
  },
  {
    title: "DEVELOPMENT",
    para: <>Our philosophy is-make explosives. <br /> Nobody uses medicore apps. So, we build <br /> products that move the world. Here’s how <br /> we do it</>,
    list: [
      "Corporate and storytelling \ websites",
      "Web applications",
      "Web platforms",
      "Internal web applications",
      "Software as a service",
      "DevSecops",
    ]
  },
]

function Card({ title = "", para = "", list = [] }) {
  return (
    <div className="grid grid-cols-2 mb-4 md:mb-6 lg:mb-8 gap-4 p-6 bg-[#0F161B]">
      <div>
        <h3 className="text-xl sm:text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px] font-bold text-primary-900">
          {title}
        </h3>

        <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-xl xl:text-[25px] font-medium">
          {para}
        </p>
      </div>

      <div className="p-4 bg-[#152A39] border border-primary-900">
        <ul>
          {
            list.map(li => (
              <li
                key={li}
                className="mb-1 text-[6px] sm:text-xs md:text-base lg:text-xl xl:text-[28px] font-medium"
              >
                {li}
              </li>
            ))
          }
        </ul>

        <p className="mb-1 text-[8px] sm:text-[13px] md:text-xl lg:text-[25px] xl:text-3xl font-semibold leading-none text-primary-900">Timeline</p>
        <button className="block px-2 py-1 text-[6px] sm:text-[10px] md:text-[15px] lg:text-xl xl:text-[23px] font-medium text-[#0F161B] bg-primary-900">
          2+ weeks
        </button>
      </div>
    </div>
  )
}

function Engagement() {
  return (
    <div className="pad-main-3 text-white bg-[#222531] relative isolate">
      <h2 className="mb-4 text-xl sm:text-3xl md:text-[35px] lg:text-[50px] xl:text-[60px] text-primary-900 text-center">
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