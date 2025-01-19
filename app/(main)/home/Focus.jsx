import React from 'react';

const services = [
  {
    type: "Service",
    title: "Tailored For Startups",
    description: "Maximize your business potential with our specialized blockchain services for startups. We provide the tools, expertise, and support you need to thrive in the digital age"
  },
  {
    type: "Service",
    title: "Empowering Enterprises",
    description: "Revolutionize your enterprise with our blockchain-powered solutions. We offer end-to-end services to streamline your operations, enhance security, and drive innovation"
  },
  {
    type: "Product",
    title: "Kiteagro",
    description: "Experience the future of agriculture with Kiteagro, our pioneering blockchain platform that transforms the way you manage your farming operations",
    img: "/img/home/Binary.png"
  }
];

const ServiceCard = ({ title, description, type, img }) => (
  <div className="bg-[#1F232D] p-8 h-full">
    <div className="flex flex-col space-y-4">
      <span className="inline-block px-3 py-1 bg-[#22C954] text-white text-xs sm:text-sm md:text-lg lg:text-xl font-medium rounded-[5px] w-fit">
        {type}
      </span>

      <div className="flex justify-between items-center">
        <h2 className="text-base xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">{title}</h2>
        <div className="w-10 h-10 flex items-center justify-center">
          <img
            src="/img/home/arrow.png"
            alt="arrow"
          />
        </div>
      </div>

      <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-medium leading-relaxed">
        {description}
      </p>

      {img && (
        <div className="mt-auto pt-8">
          <img
            src={img}
            alt="Binary visualization"
            className="h-[300px]"
          />
        </div>
      )}
    </div>
  </div>
);

const Focus = () => {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto font-mono">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard
                key={index}
                type={service.type}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="h-full">
            {services.slice(2, 3).map((service, index) => (
              <ServiceCard
                key={index}
                type={service.type}
                title={service.title}
                description={service.description}
                img={service.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;