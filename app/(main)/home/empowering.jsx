
function StatsCard({ number, label }) {
  return (
    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
      <span className="text-4xl font-bold text-white">{number}</span>
      <span className="text-gray-400 text-sm">{label}</span>
    </div>
  )
}

function Empowering() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
        <div className="bg-[#31D64D] rounded-lg p-8 flex items-center justify-center">

        </div>

        <div className="flex flex-col justify-center space-y-6 p-10 bg-[#1C1C24]">
          <h1 className="text-lg md:text-xl font-bold text-white">
            Empowering Startups and Enterprises
          </h1>
          <p className="text-gray-400 text-lg">
            Transform your business with our comprehensive Blockchain-as-a-Service solutions. Unlock the power of distributed ledger technology, enhance transparency, and drive innovation across your organization
          </p>
          <button className="bg-[#31D64D] text-white hover:bg-[#31D64D]/90 w-fit  rounded-[5px]">
            Get Started
          </button>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 bg-white p-8">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-black">
              Seamless Integration
            </h2>
            <p className="text-black text-[16px]">
              Streamline your operations, boost efficiency, and unlock new revenue streams with our cutting-edge Blockchain-as-a-Service solutions
            </p>
            <button className="bg-[#E8E00E] rounded-[10px] text-black">
              Get Started
            </button>
          </div>
          <div className="relative">
            <div className="w-48 h-48 rounded-full border-2 border-[#31D64D]/20 flex items-center justify-center mx-auto">
              <div className="w-24 h-24 rounded-full border-2 border-[#31D64D]/40 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#31D64D]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1E283E] p-4 md:p-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center justify-center gap-8">
            <div className="grid grid-cols-2 lg:grid-cols-1  gap-8 order-2 lg:order-1">
              <StatsCard number="20" label="Projects" />
              <StatsCard number="2" label="Offices" />
              <StatsCard number="30" label="Clients" />
              <StatsCard number="4" label="Awards Won" />
            </div>
            <div className="relative h-auto order-1 lg:order-2">
              <img
                src="/img/home/empower.png"
                alt="Blockchain Statistics Illustration"
                width={400}
                height={400}
                className="object-contain h-[400px] w-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Empowering
