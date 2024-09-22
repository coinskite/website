const list = [
  {
    id: "1",
    title: "Technology Partners",
    para: "Access leading-edge technology and expertise. We offer a range of options to meet your business needs and help you stay ahead of the curve",
    list: [
      "Integration with existing systems",
      "Marketing and sales support",
      "R&D collaboration",
      "Exclusive access & Priority support",
    ],
  },
  {
    id: "2",
    title: "Strategic Partners",
    para: "Our strategic partnership program offers a range of options to meet your needs and drive progress and innovation. Contact us to learn more and explore the endless possibilities that await.",
    list: [
      "Collaboration on strategic initiatives",
      "Joint product development",
      "Training and education",
      "Access to networks and resources",
    ],
  },
]

function Card({ title, para, list }) {
  return (
    <div className="dfc gap-0 p-4 bg-[#0F161B] border border-primary-900 rounded-[10px]">
      <h3 className="mb-2 text-[8px] xs:text-xs sm:text-[15px] md:text-xl lg:text-[25px] xl:text-3xl font-bold">
        {title}
      </h3>

      <p className="mb-4 md:mb-6 text-[4px] sm:text-[6px] md:text-xs lg:text-base xl:text-sm font-medium">
        {para}
      </p>

      <ul className="mt-auto">
        {list.map((l, i) => (
          <li
            key={i}
            className="df mb-1.5 md:mb-3 xl:mb-4 text-[5px] xs:text-[7px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xl font-medium text-left"
          >
            <img
              className="w-3 xs:w-4 md:w-6 lg:w-9"
              src="/img/partner/tick.png"
              alt=""
            />
            {l}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Types() {
  return (
    <div className="pad-main-3 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-2 text-[15px] xs:text-xl sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px] font-semibold text-primary-900">
          Types of partnerships we offer
        </h2>

        <div className="mb-2 md:mb-4 xl:mb-6 text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-xl font-medium">
          we understand that every business is unique, and we offer a range of partnership options to meet the needs of startups and enterprises alike. Whether you're looking to expand your product line, increase your customer base, or improve your operations, we have the solutions and expertise to help you succeed
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          {list.map(l => <Card key={l.id} {...l} />)}
        </div>
      </div>
    </div>
  )
}

export default Types