import React from 'react';

function PoweringTools() {
  const data = [
    {
      id: "1",
      img: "img/home/solana.png",
    },
    {
      id: "2",
      img: "img/home/etherium.png",
    },
    {
      id: "3",
      img: "img/home/polygon.png",
    },
    {
      id: "4",
      img: "img/home/Polkadot.png",
    },
  ]
  return (
    <div className="bg-[#0D0D0F] py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-center text-sm md:text-lg mb-8">
          Powering Tools and Integrations from blockchains all around the world
        </h2>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {
            data?.map((item) => (
              <div key={item?.id} className="flex items-center space-x-2">
                <img
                  src={item?.img}
                  alt="Solana"
                  className="h-6 object-cover"
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PoweringTools;