const data = [
  {
    img: "./img/startup/1.png",
    title: "Expertise and Experience",
    para: "With decades of experience under our belts,our team is equipped to help you navigate the complexities of the digital world and achieve your goals."
  },
  {
    img: "./img/startup/2.png",
    title: "Customized Solutions",
    para: "we believe that one size does not fit all when it comes to blockchain solutions. That's why we offer customized services that are tailored to the unique needs and goals of each of our clients."
  },
  {
    img: "./img/startup/3.png",
    title: "Superior Customer Support",
    para: "we are committed to providing the best in customer support.Whether you need help getting started with blockchain technology, or need ongoing support to ensure the smooth operation of your systems, our team is here to help."
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
    <div className="pad-main-3 text-[#0F0450] bg-[#CAFCD9]">
      <h2 className="text-xl sm:text-3xl md:text-[37px] lg:text-[45px] font-bold text-[#22C954] text-center">
        Why do startups choose Coinskite?
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
    </div>
  )
}

export default Choose