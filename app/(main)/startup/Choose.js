const data = [
  {
    img: "/img/startup/img1.png",
    title: "Expertise and Experience",
    para: <>With decades of experience under our belts, our team is equipped to help you navigate <br className="lg:hidden" /> the complexities of the digital world and achieve your goals.</>
  },
  {
    img: "/img/startup/img2.png",
    title: "Customized Solutions",
    para: <>We believe that one size does not fit all when it comes to blockchain solutions. That's why we offer <br className="lg:hidden" /> customized services that are tailored to the unique needs and goals of each of our clients.</>
  },
  {
    img: "/img/startup/img3.png",
    title: "Superior Customer Support",
    para: <>We are committed to providing the best in customer support. Whether you need help getting started with <br className="lg:hidden" /> blockchain technology, or need ongoing support to ensure the smooth operation of your systems, our team <br className="lg:hidden" /> is here to help.</>
  },
]

function Card({ img, title, para }) {
  return (
    <div className="text-center">
      <img className="w-12 md:w-16 lg:w-20 mx-auto" src={img} alt={title} />
      <p className="mt-2 mb-1 md:mt-4 md:mb-2 text-[10px] sm:text-[15px] md:text-lg lg:text-[22px] xl:text-[25px] font-semibold">{title}</p>
      <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-[17px]">{para}</p>
    </div>
  )
}

function Choose() {
  return (
    <div className="pad-main-1-3 text-[#0F0450] bg-[#CAFCD9]">
      <div className="my-6 md:my-12 xl:my-16 grid lg:grid-cols-3 gap-4 md:gap-8">
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