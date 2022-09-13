function Final() {
  return (
    <div className="df pad-main-1-3 mt-8">
      <div className="pt-2 w-[90%] m-auto bg-[#7C7F83] rounded-[20px]">
        <div className="df gap-1 md:gap-8 p-2 md:p-12 bg-[#363B41] rounded-[20px]">
          <img
            className="w-12 xs:w-28 sm:w-32 md:w-40 xl:w-auto"
            src="./img/home/interestedCube.png"
            alt="Group"
          />

          <div className="text-[12px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-semibold">
            <p>Interested in</p>
            <p className="text-primary-900">Blockchain</p>
            <p>For your industry?</p>

            <p className="my-2 text-[8px] sm:text-[10px] lg:text-[20px] font-medium">
              Get in touch with our Blockchain specialists.
            </p>
            <button className="px-2 md:px-4 md:py-1 text-[8px] sm:text-[10px] lg:text-[16px] font-medium border border-white rounded-[5px] lg:rounded-[8px]">
              Talk with our expert            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Final