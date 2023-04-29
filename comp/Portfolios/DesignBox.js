
function DesignBox({ img, title }) {
  return (
    <div className="rounded-lg bg-[#1E1E1E] border">
      <div className="df py-2 px-2 text-[#888899] relative">
        <div className="w-3 h-3 bg-[#FF5E57] rounded-full"></div>
        <div className="w-3 h-3 bg-[#FFBB2E] rounded-full"></div>
        <div className="w-3 h-3 bg-[#38C149] rounded-full"></div>

        <h3 className="mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {title}
        </h3>
      </div>

      <div className="no-scroll-bar h-[176px] w-[254px] xs:h-[228px] xs:w-[340px] sm:h-[280px] sm:w-[418px] xl:h-[352px] xl:w-[493px] overflow-y-auto rounded-b-lg">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default DesignBox