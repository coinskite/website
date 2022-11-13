const data = [
  {
    img: "./img/startup/1.png",
    title: "Dedicated Team",
    para: "Our Blockchain developers are hands-on the cognitive technologies to deliver high-quality services and solutions to clienst"
  },
  {
    img: "./img/startup/2.png",
    title: "Team Extension",
    para: "Our team extension model is intended to help clients who want to extend their team with the right expertise required for their project."
  },
  {
    img: "./img/startup/3.png",
    title: "Project Based Model",
    para: "Our project -based model and software development specialists are there for customer collaboration and specific client project engagement"
  },
]

function Card({ img, title, para }) {
  return (
    <div className="text-center">
      <img className="w-10 mx-auto" src={img} alt={title} />
      <p className="mt-2 mb-1 md:mt-4 md:mb-2 text-[10px] sm:text-[15px] md:text-lg lg:text-[22px] xl:text-[25px] font-semibold">{title}</p>
      <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-[17px]">{para}</p>
    </div>
  )
}

function Choose() {
  return (
    <div className="pad-main-3 text-white bg-[#222531]">
      <h2 className="text-xl sm:text-3xl md:text-[37px] lg:text-[45px] font-bold text-[#22C954] text-center">
        Why do  startups choose Coinskite?
      </h2>

      <div className="my-6 md:my-12 xl:my-16 max-w-7xl mx-auto grid grid-cols-3 gap-4">
        {
          data.map(d => (
            <Card
              key={d.title}
              {...d}
            />
          ))
        }
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto">
        <div>
          <h3 className="w-fit mb-4 text-[15px] sm:text-xl md:text-[25px] lg:text-3xl xl:text-[40px] font-bold">
            How Startups Partnered <br />
            with Coinskite to launch <br />
            products
          </h3>
          <img src="./img/startup/Startup.png" alt="startup" />
        </div>

        <div>
          <h4 className="text-xs sm:text-xl md:text-2xl lg:text-[27px] font-bold">Partners</h4>
          <p className="mb-4 md:mb-6 xl:mb-8 text-[7px] sm:text-[10px] md:text-sm lg:text-[17px]">As Startup prepared to launch its Products,the company looked to coinskite for co-marketing guidance and resources to  confidently market a payments solution that would resonate with its merchants.</p>

          <h4 className="text-xs sm:text-xl md:text-2xl lg:text-[27px] font-bold">Solutions</h4>
          <p className="mb-4 md:mb-6 xl:mb-8 text-[7px] sm:text-[10px] md:text-sm lg:text-[17px]">Startup leaveraged best practices from coinskite marketing toolkit and customized the messaging for its own channels.This saved the team hours from creating content and strategy,allowing them to execute these camapigns and see results quickly.</p>

          <h4 className="text-xs sm:text-xl md:text-2xl lg:text-[27px] font-bold">Impact</h4>
          <p className="mb-4 md:mb-6 xl:mb-8 text-[7px] sm:text-[10px] md:text-sm lg:text-[17px]">Startup launched its payments product to 18 countries in just three months-and with a team of fewer than 20 people.</p>
        </div>
      </div>
    </div>
  )
}

export default Choose