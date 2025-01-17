
const list = [
  {
    id: "1",
    src: "/img/home/pro1.png",
    para: "Olivia's extensive experience in the blockchain industry and her strategic mindset have been instrumental in helping our clients navigate the complexities of this rapidly evolving landscape."
  },
  {
    id: "2",
    src: "/img/home/pro2.png",
    para: "Olivia's extensive experience in the blockchain industry and her strategic mindset have been instrumental in helping our clients navigate the complexities of this rapidly evolving landscape."
  }
]

function Choose() {

  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 bg-[#1F232D] p-6 rounded-[5px]">
        <div className="space-y-4">
          <h3 className="text-gray-400">Why choose us?</h3>
          <h2 className="text-4xl font-semibold">Revolutionizing<br />Blockchain Solutions</h2>
          <p className="text-gray-400 max-w-2xl">
            At our Blockchain Service Company, we pride ourselves on our ability to deliver innovative,
            customized solutions that empower businesses to thrive in the decentralized economy
          </p>

          <div className="">
            {[
              "Secure Transactions",
              "Scalable Solutions",
              "Seamless Integration",
              "Transparent Auditing",
              "Adaptive Infrastructure"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <img
                  src="img/home/check.png"
                  className="h-4 w-4"
                />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#31D64D] text-white hover:bg-[#31D64D]/90 rounded-[5px]">
            Get Started
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          {list?.map((item) => (
            <div key={item?.id} className="bg-white text-black p-6 flex items-center h-fit rounded-[10px]">
              <div className="flex items-center gap-4">
                <img
                  src={item?.src}
                  alt="Profile"
                  className="rounded-full w-16 h-16 object-cover"
                />
                <p className="text-sm">
                  {item?.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Choose
