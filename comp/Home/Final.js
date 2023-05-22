
function Final() {
  return (
    <div className="pad-main-3 relative">
      <div className='df justify-between px-3 py-5 md:p-6 max-w-5xl mx-auto bg-[#BFFFD3] rounded-[10px]'>
        <div>
          <p className='font-bold text-[#18191F]'>
            Become a member of this growing communtity
          </p>

          <button className='df py-2 rounded-lg bg-primary-900'>
            Coinskite on Discord
            <img src="/img/home_new/community/discord.png" alt="" />
          </button>
        </div>

        <img
          src='/img/home_new/community/message.png'
          className="w-24"
        />
      </div>

      <div className="absolute w-56 h-32 top-0 left-0 blured-bg z-[1]"></div>
    </div>
  )
}

export default Final