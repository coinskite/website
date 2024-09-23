import React from 'react'

function Mission() {
  return (
    <div>
      <div className="border-[3px] p-10 rounded mt-8 border-[#22C954] relative">
        <p className="font-[600] text-[30px]">Our mission is to ensure the <span className="text-[#22C954]">blockchain ecosystem</span> thrives<br /> by providing a full suite of services, helping clients<br /> seamlessly launch and scale their projects
        </p>
        <img
          className="w-4 sm:w-6 md:w-auto absolute right-8 bottom-5"
          src="/img/home/new/greenstar1.png"
          alt=""
        />
        <div className="absolute w-56 h-32 bottom-0 left-0 blured-bg z-[1]"></div>

      </div>
    </div>
  )
}

export default Mission