function Header() {
  return (
    <div className='pad-main-3 grid lg:flex gap-4'>
      <div className="h-[200px] w-[200px] bg-primary-900">

      </div>

      <div>
        <button className="ts:text-[12px] xs:text-[12px] sm:text-[12px] font-semibold text-white bg-primary-900">
          NEW
        </button>

        <p className="ts:text[14px] xs:text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[25px] font-semibold">
          Map2Earn to help merge physical and
          virtual worlds
        </p>

        <p className="ts:[8px] xs:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[15px] font-medium ">
          Map2Earn is a revolutionary Metaverse-oriented economic model that
          enables users to become mappers while earning tokens
        </p>

        <p className="df">
          <span className="ts:text[8px]  xs:text-[10px] sm:text-[10px] lg:text-[12px] xl:text-[15px] font-semibold">
            Rubesh,Researcher @coinskite
          </span>

          <span className="ts:text[6px] xs:text-[6px] font-semibold">
            Jan 21,2023
          </span>
        </p>
      </div>
    </div>
  )
}

export default Header