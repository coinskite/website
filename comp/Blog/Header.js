function Header() {
  return (
    <div className='pad-main-3 grid lg:flex gap-4'>
      <div className="h-[200px] w-[200px] bg-primary-900">
        <img src="./img/blog/chatgpt.png" alt="" />
      </div>

      <div>
        <button className="text-xs font-semibold text-white bg-primary-900">
          NEW
        </button>

        <p className="text-sm xs:text-base sm:text-lg lg:text-[22px] xl:text-[25px] font-semibold">
          Map2Earn to help merge physical and
          virtual worlds
        </p>

        <p className="text-[8px] xs:text-[10px] md:text-xs lg:text-sm xl:text-[15px] font-medium ">
          Map2Earn is a revolutionary Metaverse-oriented economic model that
          enables users to become mappers while earning tokens
        </p>

        <p className="df">
          <span className="text-[8px] xs:text-[10px] lg:text-xs xl:text-[15px] font-semibold">
            Rubesh,Researcher @coinskite
          </span>

          <span className="text-[6px] font-semibold">
            Jan 21,2023
          </span>
        </p>
      </div>
    </div>
  )
}

export default Header