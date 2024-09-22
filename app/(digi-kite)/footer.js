function Footer() {
  return (
    <footer className='bg-[#0E0E0F] -mx-4 p-4 md:py-16 sm:-mx-8 sm:p-8 text-digi-light'>
      <div className="grid grid-cols-2 md:grid-cols-6 text-sm">
        <div className="df flex-col justify-center text-center md:text-left lg:justify-start lg:items-start col-span-2 md:col-span-3">
          <img src="/img/digi/footer/logo.png" alt="logo" className='h-10' />
          <p>CoinNft is a one stop solution for creating, trading, buying and selling NFTs that is already used by millions of loyal users.</p>
          <p className='df'>
            <span>You're on CoinNft</span>
            <span>version 1.118.9</span>
          </p>

          <p className="df">
            <img src="/img/digi/footer/twitter.png" alt="social" className='w-8' />
            <img src="/img/digi/footer/discord.png" alt="social" className='w-8' />
            <img src="/img/digi/footer/telegram.png" alt="social" className='w-8' />
            <img src="/img/digi/footer/medium.png" alt="social" className='w-8' />
            <img src="/img/digi/footer/youtube.png" alt="social" className='w-8' />
            <img src="/img/digi/footer/github.png" alt="social" className='w-8' />
          </p>
        </div>

        <div className='mt-4 text-center lg:text-left'>
          <strong className='mb-4 block'>Discover</strong>
          <p className='mb-2'>Explore</p>
          <p className='mb-2'>Buy & Sell</p>
          <p className='mb-2'>Trade</p>
          <p className='mb-2'>View Stats</p>
          <p className='mb-2'>Create NFTs</p>
        </div>

        <div className='mt-4 text-center lg:text-left'>
          <strong className='mb-4 block'>Developers</strong>
          <p className='mb-2'>NFT Standard</p>
          <p className='mb-2'>Documentation</p>
          <p className='mb-2'>Dev Group</p>
          <p className='mb-2'>API</p>
        </div>

        <div className='mt-4 text-center lg:text-left'>
          <strong className='mb-4 block'>Contact</strong>
          <p className='mb-2'>FAQ</p>
          <p className='mb-2'>Feedback</p>
          <p className='mb-2'>Support</p>
          <p className='mb-2'>Careers</p>
          <p className='mb-2'>Press</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-4 pt-4 border-t border-[rgba(255,255,255,.4)]">
        <p>© 2020 - 2022</p>
        <p>Imprint</p>
        <p className='mx-auto'>Privacy Policy</p>
        <p className='mx-auto'>Terms of Service</p>
        <p>143,527,604 NFTs</p>
        <p>created</p>
      </div>
    </footer>
  )
}

export default Footer