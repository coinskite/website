
function Form() {
  return (
    <div>
      <div className="border border-[#C4C4C4]">
        <div className="text-sm xs:text-base sm:text-2xl md:text-3xl xl:text-[40px] py-4 text-center text-[#223764] bg-[#CAFCD9]">
          Fill the form
        </div>

        <div className="p-6 bg-white">
          <input
            type="text"
            className="text-[6px] xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-2xl font-normal mb-4 text-[#C4C4C4] border border-[#C4C4C4] rounded-[5px]"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="text-[6px] xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-2xl font-normal mb-4 text-[#C4C4C4] border border-[#C4C4C4] rounded-[5px]"
            placeholder="Job title"
          />
          <input
            type="text"
            className="text-[6px] xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-2xl font-normal mb-4 text-[#C4C4C4] border border-[#C4C4C4] rounded-[5px]"
            placeholder="Business email"
          />
          <input
            type="text"
            className="text-[6px] xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-2xl font-normal mb-4 text-[#C4C4C4] border border-[#C4C4C4] rounded-[5px]"
            placeholder="Company name"
          />
          <select
            className="text-[6px] xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-2xl font-normal mb-4 text-[#C4C4C4] border border-[#C4C4C4] rounded-[5px]"
          >
            <option value="">Company Size</option>
          </select>
          <select
            className="text-[6px] xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-2xl font-normal mb-4 text-[#C4C4C4] border border-[#C4C4C4] rounded-[5px]"
          >
            <option value="">Country</option>
          </select>
          <textarea
            cols="30"
            rows="10"
            className="mb-4 text-[#C4C4C4] border border-[#C4C4C4] rounded-[5px]"
            placeholder="Drop us a line! Why do you want to join our partner program?"
          ></textarea>

          <button className="text-[8px] xs:text-xs sm:text-[15px] md:text-base lg:text-[22px] xl:text-[28px] font-medium bg-primary-900 text-white">
            Let’s connect
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form