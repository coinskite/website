
function ReachOut() {
  return (
    <div className="pad-main-3 grid grid-cols-2 gap-4 text-[#223764] bg-[#CAFCD9]">
      <div>
        <h3 className="text-xl sm:text-[23px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-bold">
          Feel Free To Reach Out
        </h3>

        <p className="text-[10px] sm:text-xs md:text-[15px] lg:text-lg xl:text-[22px] font-medium">
          Contact us if you have any questions relating to Coinskite, our product, vision and opinins, Any media inquiries will be answered ASAP.
        </p>
      </div>

      <div className="df md:mx-auto">
        <img
          className="w-16 lg:w-24"
          src="./img/press/Avatar.png"
          alt="User"
        />

        <div>
          <p className="text-[9px] sm:text-[15px] md:text-lg lg:text-xl xl:text-[22px] font-bold">
            Ganeshan Palani
          </p>

          <p className="text-[8px] sm:text-xs md:text-sm lg:text-lg xl:text-[22px] font-medium">
            Press Director
          </p>

          <p className="text-[8px] sm:text-xs md:text-sm lg:text-lg xl:text-[22px] font-medium">
            ganes@coinskite.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReachOut