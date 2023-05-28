
function Final() {
  return (
    <div className="pad-main-3 relative">
      <div className='p-4 md:p-6 max-w-5xl mx-auto bg-[#BFFFD3] rounded-[10px] relative'>
        <p className='mb-4 md:mb-8 text-xs xs:text-lg sm:text-[22px] md:text-[26px] lg:text-4xl xl:text-[40px]  font-bold text-[#18191F]'>
          Become a member of this <br /> growing communtity
        </p>

        <button className='text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm font-semibold df py-2 rounded-md bg-primary-900'>
          Coinskite on Discord
          <img
            className="w-4 md:w-5"
            src="/img/home_new/community/discord.png"
            alt=""
          />
        </button>

        <img
          className="h-20 xs:h-24 sm:h-28 md:h-32 mdb:h-36 lg:h-44 xl:h-52 absolute right-4 bottom-0"
          src='/img/home_new/community/msg.png'
          alt=""
        />
      </div>

      <div className="absolute w-56 h-32 top-0 left-0 blured-bg z-[1]"></div>
    </div>
  )
}

export default Final