
function Final() {
  return (
    <div className="pad-main-3 text-[#223764] bg-[#CAFCD9]">
      <h2 className="text-[10px] sm:text-[17px] md:text-xl lg:text-[25px] xl:text-3xl font-semibold text-center">
        We’re doing big things and can’t wait to share <br />
        them with you
      </h2>

      <div className="my-2 xl:my-4 text-[7px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-medium text-center">
        Subscribe to press updates
      </div>

      <div className="df justify-center">
        <input
          type="text"
          placeholder="Your email address"
          className="px-2 py-1 lg:py-1.5 text-[7px] sm:text-[13px] md:text-[15px] lg:text-lg xl:text-xl font-medium placeholder:text-white text-white bg-[#17171F] border border-primary-900"
        />

        <button className="px-2 py-1 lg:px-4 text-[8px] sm:text-[13px] md:text-[15px] lg:text-[22px] xl:text-[25px] font-medium bg-primary-900 text-white">
          Get the scoop
        </button>
      </div>
    </div>
  )
}

export default Final