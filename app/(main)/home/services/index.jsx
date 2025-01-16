import Card from "./card"

const sections = [
  {
    title: "Tailored For Startups",
    para: "Maximize your business potential with our specialized blockchain services for startups. We provide the tools, expertise, and support you need to thrive in the digital age",
    badge: "Service"
  },
  {
    title: "Empowering Enterprises",
    para: "Revolutionize your enterprise with our blockchain-powered solutions. We offer end-to-end services to streamline your operations, enhance security, and drive innovation",
    badge: "Service"
  },
  {
    title: "Kiteagro",
    para: "Experience the future of agriculture with Kiteagro, our pioneering blockchain platform that transforms the way you manage your farming operations",
    badge: "Product",
    className: "md:row-span-2 md:col-start-2 md:row-start-1"
  }
]


function Services() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">
        {sections.map((section, index) => (
          <Card key={index} {...section} />
        ))}
      </div>
    </div>
  )
}

export default Services

