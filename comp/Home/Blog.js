
function Blog() {
  return (
    <div className="pad-main-3 2xl:py-14 blog-bg text-center bg-no-repeat bg-cover">
      <h1 className="gradient-text text-[15px] sm:text-xl md:text-[23px] lg:text-[40px] xl:text-[45px] md:font-bold">
        WHAT’s NEW AT COINSKITE
      </h1>

      <div className="grid grid-cols-3 justify-center gap-8 pad-main-3">
        <img src="./img/home/blog/web3.png" alt="blog" />
        <img src="./img/home/blog/NFTs.png" alt="blog" />
        <img src="./img/home/blog/Game.png" alt="blog" />
      </div>
    </div>
  )
}

export default Blog