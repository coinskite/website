
function DesignBox({ img, title, type }) {
  return (
    <div className="w-fit mx-auto rounded-lg bg-[#1E1E1E] border border-primary-900">
      <div className="df py-2 px-2 text-[#888899] relative">
        <div className="w-3 h-3 bg-[#FF5E57] rounded-full"></div>
        <div className="w-3 h-3 bg-[#FFBB2E] rounded-full"></div>
        <div className="w-3 h-3 bg-[#38C149] rounded-full"></div>

        <h3 className="mx-auto text-[8px] xs:text-[10px] font-semibold uppercase">
          {title}
        </h3>

        <button className="px-1.5 py-0.5 text-[4px] leading-[1] font-medium uppercase bg-[#656565] text-[#CECECE] rounded-sm">
          {type}
        </button>
      </div>

      <div className="no-scroll-bar h-[176px] w-[254px] xs:h-[228px] xs:w-[340px] sm:h-[280px] sm:w-[418px] xl:h-[352px] xl:w-[493px] overflow-y-auto rounded-b-lg">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default DesignBox