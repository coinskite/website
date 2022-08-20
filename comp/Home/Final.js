function Final() {
  return (
    <div className="df pad-main-1-3 mt-8">
      <div className="pt-2 w-full bg-[#7C7F83] rounded-[20px]">
        <div className="df gap-4 md:gap-8 p-6 md:p-12 bg-[#363B41] rounded-[20px]">
          <img
            className="w-24 xs:w-28 sm:w-32 md:w-40 xl:w-auto"
            src="./img/home/interestedCube.png"
            alt="Group"
          />

          <div className="text-xl sm:text-[25px] md:text-[30px] lg:text-[48px] font-semibold">
            <p className="leading-6 sm:leading-[30px] md:leading-[36px] lg:leading-[48px] xl:leading-[58px]">Interested in</p>
            <p className="gradient-text leading-6 sm:leading-[30px] md:leading-[36px] lg:leading-[48px] xl:leading-[58px]">Blockchain</p>
            <p className="leading-6 sm:leading-[30px] md:leading-[36px] lg:leading-[48px] xl:leading-[58px]">For your industry?</p>

            <p className="my-2 text-[8px] sm:text-[10px] lg:text-[25px] font-medium">
              Get in touch with our Blockchain specialists.
            </p>
            <button className="px-2 md:px-4 md:py-1 text-[8px] sm:text-[10px] lg:text-[25px] font-medium border border-white rounded-[5px] lg:rounded-[8px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Final