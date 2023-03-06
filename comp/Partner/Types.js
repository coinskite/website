const list = [
  {
    key: "1",
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
    key: "2",
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
    <div className="p-4 bg-[#0F161B] border border-primary-900 rounded-[10px]">
      <h3 className="text-[8px] xs:text-xs sm:text-[15px] md:text-xl lg:text-[25px] xl:text-3xl font-bold mb-1">
        {title}
      </h3>

      <p className="text-[4px] sm:text-[6px] md:text-xs lg:text-base xl:text-sm font-medium mb-6">
        {para}
      </p>

      <ul>
        {list.map((l, i) => (
          <li
            key={i}
            className="text-[5px] xs:text-[7px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xl font-medium df mb-3 text-left"
          >
            <img src="./img/partner/tick.png" alt="" />
            {l}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Types() {
  return (
    <div className="pad-main-1-3 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[15px] xs:text-xl sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[40px] font-semibold mb-2 text-primary-900">
          Types of partnerships we offer
        </h2>

        <div className="text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-xl font-medium mb-4">
          we understand that every business is unique, and we offer a range of partnership options to meet the needs of startups and enterprises alike. Whether you're looking to expand your product line, increase your customer base, or improve your operations, we have the solutions and expertise to help you succeed
        </div>

        <div className="grid grid-cols-2 gap-6">
          {list.map(l => <Card {...l} />)}
        </div>
      </div>
    </div>
  )
}

export default Types