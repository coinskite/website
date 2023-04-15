function Discord() {
  return (
    <section className='discord-bg p-6 md:p-10 -mx-4 sm:-mx-8'>
      <div className='text-center p-6 lg:flex flex-row-reverse items-start justify-around bg-[rgba(0,0,0,.8)] rounded-xl'>
        <div>
          <img
            src="./img/digi/discord/discord.png"
            alt="discord"
            className=' xs:max-w-xs lg:max-w-sm mx-auto'
          />
        </div>

        <div className='df flex-col max-w-2xl'>
          <h2 className='text-4xl xl:text-5xl mt-2'>Join our Discord</h2>
          <p className='text-xl xl:text-2xl'>Want to chat to your fellow creators and collectors, or to the CoinNft team? Join our 16,000+ strong Discord community!</p>
          <img src="./img/digi/discord/join.png" alt="join" className='max-w-[250px]' />
        </div>
      </div>
    </section>
  )
}

export default Discord