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
      <h3 className="mb-1">
        {title}
      </h3>

      <p className="mb-6">
        {para}
      </p>

      <ul>
        {list.map((l, i) => (
          <li
            key={i}
            className="df mb-3 text-left"
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
        <h2 className="mb-2 text-primary-900">
          Types of partnerships we offer
        </h2>

        <div className="mb-4">
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