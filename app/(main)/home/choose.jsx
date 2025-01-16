import { Check } from "lucide-react"

function Choose() {
  return (
    <div className="pad-main-3">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4">
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
                <div className="bg-[#31D64D]/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-[#31D64D]" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#31D64D] text-white hover:bg-[#31D64D]/90">
            Get Started
          </button>
        </div>

        <div className="grid gap-4">
          {[1, 2].map((index) => (
            <div key={index} className="bg-white text-black p-6">
              <div className="flex gap-4">
                <img
                  src={`/placeholder.svg?height=48&width=48`}
                  alt="Profile"
                  className="rounded-full w-12 h-12 object-cover"
                />
                <p className="text-sm">
                  Olivia's extensive experience in the blockchain industry and her strategic mindset have been instrumental in
                  helping our clients navigate the complexities of this rapidly evolving landscape.
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
