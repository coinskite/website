function Info() {
  return (
    <section>
      <h1>Create and sell your <strong className="text-digi-primary">NFTs</strong></h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-4'>
        <div className="bg-[#0B0A0A] p-2 lg:p-4">
          <img src="./img/digi/info/1.png" alt="info" className="w-8" />
          <h6 className='my-1'>Set up your wallet</h6>
          <p className='text-digi-light'>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
        </div>

        <div className="bg-[#0B0A0A] p-2 lg:p-4">
          <img src="./img/digi/info/2.png" alt="info" className="w-8" />
          <h6 className='my-1'>Create your collection</h6>
          <p className='text-digi-light'>Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
        </div>

        <div className="bg-[#0B0A0A] p-2 lg:p-4">
          <img src="./img/digi/info/3.png" alt="info" className="w-8" />
          <h6 className='my-1'>Add your NFTs</h6>
          <p className='text-digi-light'>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
        </div>

        <div className="bg-[#0B0A0A] p-2 lg:p-4">
          <img src="./img/digi/info/4.png" alt="info" className="w-8" />
          <h6 className='my-1'>List them for sale</h6>
          <p className='text-digi-light'>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
        </div>
      </div>
    </section>
  )
}

export default Info